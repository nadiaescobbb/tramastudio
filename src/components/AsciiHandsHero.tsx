import { useEffect, useRef } from "react";

export function AsciiHandsHero() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  // Posición objetivo del cursor registrada por eventos de mouse
  const mouseTargetRef = useRef<{ x: number; y: number } | null>(null);
  // Posición amortiguada del cursor con inercia para suavizar la física de la perturbación
  const smoothMouseRef = useRef<{ x: number; y: number } | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let resizeTimeout: NodeJS.Timeout;

    // Tamaño de celda optimizado (14px) para el renderizado legible de caracteres monoespaciados
    const CELL_SIZE = 14;
    let cols = 0;
    let rows = 0;
    let currentDpr = 1;

    const updateGrid = () => {
      const parent = canvas.parentElement;
      const width = parent ? parent.clientWidth : window.innerWidth;
      const height = parent ? parent.clientHeight : window.innerHeight;

      // Usar setTransform explícito para prevenir la acumulación no deseada de transformaciones al redimensionar
      currentDpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.floor(width * currentDpr);
      canvas.height = Math.floor(height * currentDpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.setTransform(currentDpr, 0, 0, currentDpr, 0, 0);

      cols = Math.ceil(width / CELL_SIZE);
      rows = Math.ceil(height / CELL_SIZE);
    };

    updateGrid();

    // Leer el token --foreground del CSS del sistema de diseño una sola vez al montar el componente
    const rawForeground = getComputedStyle(document.documentElement)
      .getPropertyValue("--foreground")
      .trim();

    // Convertir el token --foreground (en formato HSL o CSS) a valores numéricos RGB [r, g, b] para construir la cadena rgba
    const parseForegroundRgb = (tokenStr: string): [number, number, number] => {
      if (!tokenStr) return [17, 17, 17];

      // Caso 1: Formato HSL "H S% L%" común en variables de Tailwind CSS (ej: "40 10% 8%")
      const hslMatch = tokenStr.match(/^(\d+(?:\.\d+)?)\s*,?\s*(\d+(?:\.\d+)?)%\s*,?\s*(\d+(?:\.\d+)?)%/);
      if (hslMatch) {
        const h = parseFloat(hslMatch[1]);
        const s = parseFloat(hslMatch[2]) / 100;
        const l = parseFloat(hslMatch[3]) / 100;
        const c = (1 - Math.abs(2 * l - 1)) * s;
        const x = c * (1 - Math.abs(((h / 60) % 2) - 1));
        const m = l - c / 2;
        let r = 0, g = 0, b = 0;
        if (0 <= h && h < 60) { r = c; g = x; b = 0; }
        else if (60 <= h && h < 120) { r = x; g = c; b = 0; }
        else if (120 <= h && h < 180) { r = 0; g = c; b = x; }
        else if (180 <= h && h < 240) { r = 0; g = x; b = c; }
        else if (240 <= h && h < 300) { r = x; g = 0; b = c; }
        else if (300 <= h && h < 360) { r = c; g = 0; b = x; }
        return [
          Math.round((r + m) * 255),
          Math.round((g + m) * 255),
          Math.round((b + m) * 255),
        ];
      }

      // Caso 2: Fallback utilizando el contexto de Canvas para resolver cualquier otra sintaxis de color CSS
      try {
        const tempCanvas = document.createElement("canvas");
        const tempCtx = tempCanvas.getContext("2d");
        if (tempCtx) {
          tempCtx.fillStyle = tokenStr.includes("hsl") || tokenStr.includes("rgb") || tokenStr.startsWith("#")
            ? tokenStr
            : `hsl(${tokenStr})`;
          const computed = tempCtx.fillStyle;
          if (computed.startsWith("#")) {
            const hex = computed.slice(1);
            const num = parseInt(hex.length === 3 ? hex.split("").map((ch) => ch + ch).join("") : hex, 16);
            return [(num >> 16) & 255, (num >> 8) & 255, num & 255];
          }
          const rgbMatch = computed.match(/\d+/g);
          if (rgbMatch && rgbMatch.length >= 3) {
            return [parseInt(rgbMatch[0], 10), parseInt(rgbMatch[1], 10), parseInt(rgbMatch[2], 10)];
          }
        }
      } catch {
        // En caso de error inesperado, retornar fallback seguro
      }

      return [17, 17, 17];
    };

    const [fgR, fgG, fgB] = parseForegroundRgb(rawForeground);

    // Registrar coordenadas del puntero para calcular la influencia de cercanía
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseTargetRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    };

    const handleMouseLeave = () => {
      mouseTargetRef.current = null;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mouseleave", handleMouseLeave);

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const isReducedMotion = mediaQuery.matches;

    // Conjuntos de caracteres ASCII organizados por nivel de intensidad y densidad visual
    const AMBIENT_GLYPHS = ["·", ".", "+", ":", "×", "°", "~"];
    const PROXIMITY_GLYPHS = ["╱", "╲", "|", "-", "░", "▒", "≡", "≠"];
    const BRAND_CHARS = ["H", "E", "Y", "T", "R", "A", "M", "A"];

    const renderFrame = (timestamp: number) => {
      const parent = canvas.parentElement;
      const displayWidth = parent ? parent.clientWidth : window.innerWidth;
      const displayHeight = parent ? parent.clientHeight : window.innerHeight;

      // Limpiar lienzo considerando dimensiones lógicas
      ctx.clearRect(0, 0, displayWidth, displayHeight);

      // Configurar fuente monoespaciada alineada con el sistema tipográfico Orlean
      ctx.font = '10px Orlean, ui-monospace, SFMono-Regular, "Courier New", monospace';
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";

      // Interpolar la posición del cursor con factor de inercia (0.08) para suavizar la animación
      if (mouseTargetRef.current) {
        if (!smoothMouseRef.current) {
          smoothMouseRef.current = { ...mouseTargetRef.current };
        } else {
          smoothMouseRef.current.x += (mouseTargetRef.current.x - smoothMouseRef.current.x) * 0.08;
          smoothMouseRef.current.y += (mouseTargetRef.current.y - smoothMouseRef.current.y) * 0.08;
        }
      } else {
        smoothMouseRef.current = null;
      }

      const timeSec = timestamp * 0.001;
      const smoothMouse = smoothMouseRef.current;

      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const cx = c * CELL_SIZE + CELL_SIZE / 2;
          const cy = r * CELL_SIZE + CELL_SIZE / 2;

          // Matriz de onda ambiental sutil para dar vida orgánica al fondo
          const ambientWave = Math.sin(c * 0.15 + r * 0.15 + timeSec * 0.5) * 0.5 + 0.5;
          let cellAlpha = 0.14 + 0.06 * ambientWave;
          
          // Glifo por defecto según posición matricial
          const glyphIndex = (c + r * 3) % AMBIENT_GLYPHS.length;
          let activeGlyph = AMBIENT_GLYPHS[glyphIndex];

          // Revelar caracteres tipográficos intensos y letras de la marca HEYTRAMA en la zona cercana al cursor
          if (smoothMouse) {
            const dist = Math.hypot(cx - smoothMouse.x, cy - smoothMouse.y);
            const PERTURBATION_RADIUS = 190;

            if (dist < PERTURBATION_RADIUS) {
              const normDist = dist / PERTURBATION_RADIUS;
              const falloff = Math.exp(-normDist * normDist * 3.2);
              cellAlpha = Math.min(0.85, cellAlpha + falloff * 0.65);

              if (falloff > 0.65) {
                // Zona de alta proximidad: deletrear cíclicamente H-E-Y-T-R-A-M-A
                const brandIdx = Math.abs(c + r) % BRAND_CHARS.length;
                activeGlyph = BRAND_CHARS[brandIdx];
              } else if (falloff > 0.25) {
                // Zona media: glifos de densidad intermedia (tramas y diagonales)
                const proxIdx = Math.abs(c * 7 + r * 11) % PROXIMITY_GLYPHS.length;
                activeGlyph = PROXIMITY_GLYPHS[proxIdx];
              }
            }
          }

          // Dibujar glifo tipográfico nítido atado al token --foreground
          ctx.fillStyle = `rgba(${fgR}, ${fgG}, ${fgB}, ${cellAlpha})`;
          ctx.fillText(activeGlyph, cx, cy);
        }
      }

      if (!isReducedMotion) {
        animationFrameId = requestAnimationFrame(renderFrame);
      }
    };

    if (isReducedMotion) {
      renderFrame(1000);
    } else {
      animationFrameId = requestAnimationFrame(renderFrame);
    }

    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        updateGrid();
        if (isReducedMotion) {
          renderFrame(1000);
        }
      }, 200);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
      clearTimeout(resizeTimeout);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="absolute inset-0 w-full h-full pointer-events-none z-0"
    />
  );
}
