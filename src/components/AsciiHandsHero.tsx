import { useEffect, useRef } from "react";

export function AsciiHandsHero() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let resizeTimeout: NodeJS.Timeout;

    const CELL_SIZE = 9; // Grid cell size in px
    let cols = 0;
    let rows = 0;
    let mask: Uint8Array = new Uint8Array(0);
    let delays: Float32Array = new Float32Array(0);

    // Offscreen canvas for sampling hand silhouette
    const offscreen = document.createElement("canvas");
    const offCtx = offscreen.getContext("2d");

    const drawHandSilhouette = (w: number, h: number) => {
      if (!offCtx) return;
      offscreen.width = w;
      offscreen.height = h;

      offCtx.clearRect(0, 0, w, h);
      offCtx.fillStyle = "#ffffff";

      const scale = Math.min(w * 0.2, 260);

      // Helper to draw single reaching hand
      const drawHand = (isRight: boolean) => {
        offCtx.save();

        if (isRight) {
          offCtx.translate(w * 0.76, h * 0.46);
          offCtx.scale(-1, 1);
          offCtx.rotate(-Math.PI * 0.06);
        } else {
          offCtx.translate(w * 0.24, h * 0.52);
          offCtx.rotate(-Math.PI * 0.06);
        }

        // Forearm
        offCtx.beginPath();
        offCtx.moveTo(-scale * 1.5, scale * 0.32);
        offCtx.lineTo(-scale * 0.35, scale * 0.2);
        offCtx.lineTo(-scale * 0.35, -scale * 0.22);
        offCtx.lineTo(-scale * 1.5, -scale * 0.12);
        offCtx.closePath();
        offCtx.fill();

        // Palm / Wrist
        offCtx.beginPath();
        offCtx.ellipse(-scale * 0.12, 0, scale * 0.28, scale * 0.22, 0, 0, Math.PI * 2);
        offCtx.fill();

        // Extended Index Finger
        offCtx.beginPath();
        offCtx.moveTo(scale * 0.1, -scale * 0.14);
        offCtx.lineTo(scale * 0.82, -scale * 0.12);
        offCtx.arc(scale * 0.82, -scale * 0.07, scale * 0.05, -Math.PI / 2, Math.PI / 2);
        offCtx.lineTo(scale * 0.1, -scale * 0.02);
        offCtx.closePath();
        offCtx.fill();

        // Middle Finger (slightly curved)
        offCtx.beginPath();
        offCtx.moveTo(scale * 0.1, -scale * 0.02);
        offCtx.lineTo(scale * 0.65, 0);
        offCtx.arc(scale * 0.65, scale * 0.05, scale * 0.048, -Math.PI / 2, Math.PI / 2);
        offCtx.lineTo(scale * 0.1, scale * 0.1);
        offCtx.closePath();
        offCtx.fill();

        // Ring Finger
        offCtx.beginPath();
        offCtx.moveTo(scale * 0.08, scale * 0.1);
        offCtx.lineTo(scale * 0.5, scale * 0.14);
        offCtx.arc(scale * 0.5, scale * 0.19, scale * 0.045, -Math.PI / 2, Math.PI / 2);
        offCtx.lineTo(scale * 0.08, scale * 0.23);
        offCtx.closePath();
        offCtx.fill();

        // Pinky Finger
        offCtx.beginPath();
        offCtx.moveTo(scale * 0.05, scale * 0.23);
        offCtx.lineTo(scale * 0.38, scale * 0.26);
        offCtx.arc(scale * 0.38, scale * 0.3, scale * 0.04, -Math.PI / 2, Math.PI / 2);
        offCtx.lineTo(scale * 0.05, scale * 0.34);
        offCtx.closePath();
        offCtx.fill();

        // Thumb (angled downward)
        offCtx.beginPath();
        offCtx.moveTo(-scale * 0.22, scale * 0.12);
        offCtx.lineTo(scale * 0.12, scale * 0.36);
        offCtx.arc(scale * 0.14, scale * 0.41, scale * 0.048, -Math.PI * 0.7, Math.PI * 0.3);
        offCtx.lineTo(-scale * 0.12, scale * 0.25);
        offCtx.closePath();
        offCtx.fill();

        offCtx.restore();
      };

      drawHand(false); // Left hand
      drawHand(true);  // Right hand
    };

    const updateGrid = () => {
      const parent = canvas.parentElement;
      const width = parent ? parent.clientWidth : window.innerWidth;
      const height = parent ? parent.clientHeight : window.innerHeight;

      canvas.width = width;
      canvas.height = height;

      cols = Math.ceil(width / CELL_SIZE);
      rows = Math.ceil(height / CELL_SIZE);
      const totalCells = cols * rows;

      mask = new Uint8Array(totalCells);
      delays = new Float32Array(totalCells);

      drawHandSilhouette(width, height);

      if (offCtx) {
        const imgData = offCtx.getImageData(0, 0, width, height).data;

        for (let r = 0; r < rows; r++) {
          for (let c = 0; c < cols; c++) {
            const index = r * cols + c;
            const px = Math.floor(c * CELL_SIZE + CELL_SIZE / 2);
            const py = Math.floor(r * CELL_SIZE + CELL_SIZE / 2);

            if (px < width && py < height) {
              const pixelIdx = (py * width + px) * 4;
              const alpha = imgData[pixelIdx + 3];
              mask[index] = alpha > 40 ? 1 : 0;
            } else {
              mask[index] = 0;
            }

            // Pseudo-random deterministic delay between 0 and 0.55
            const hash = Math.sin(c * 12.9898 + r * 78.233) * 43758.5453;
            delays[index] = (hash - Math.floor(hash)) * 0.55;
          }
        }
      }
    };

    updateGrid();

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const isReducedMotion = mediaQuery.matches;

    const renderFrame = (timestamp: number) => {
      const width = canvas.width;
      const height = canvas.height;
      ctx.clearRect(0, 0, width, height);

      const LOOP_DURATION = 16000;
      const progress = isReducedMotion ? 0.47 : (timestamp % LOOP_DURATION) / LOOP_DURATION;

      // 5-stage animation loop
      let globalMorph = 0;
      if (progress >= 0.15 && progress < 0.35) {
        const t = (progress - 0.15) / 0.2;
        globalMorph = t * t * (3 - 2 * t); // Smoothstep 0 -> 1
      } else if (progress >= 0.35 && progress < 0.6) {
        globalMorph = 1;
      } else if (progress >= 0.6 && progress < 0.8) {
        const t = (progress - 0.6) / 0.2;
        globalMorph = 1 - t * t * (3 - 2 * t); // Smoothstep 1 -> 0
      }

      const timeSec = timestamp * 0.001;
      const maxRadius = (CELL_SIZE / 2) * 0.92; // ~46% of cell size

      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const i = r * cols + c;
          const delay = delays[i] || 0;

          // Local morph per cell with delay
          const localMorph = Math.min(1, Math.max(0, (globalMorph - delay) / (1 - delay)));

          // Ambient wave noise (sine/cosine combination, capped at ~0.38)
          const rawNoise =
            Math.sin(c * 0.09 + timeSec * 0.8) * Math.cos(r * 0.12 + timeSec * 0.6);
          const ambientNoise = Math.min(0.38, 0.04 + 0.28 * (rawNoise * 0.5 + 0.5));

          // Hand intensity when cell is inside silhouette
          const handIntensity =
            0.55 + 0.38 * (Math.sin(c * 0.2 + r * 0.15 + timeSec * 1.2) * 0.5 + 0.5);

          const targetIntensity = mask[i] === 1 ? handIntensity : ambientNoise * 0.18;
          const cellIntensity = ambientNoise * (1 - localMorph) + targetIntensity * localMorph;

          if (cellIntensity > 0.02) {
            const cx = c * CELL_SIZE + CELL_SIZE / 2;
            const cy = r * CELL_SIZE + CELL_SIZE / 2;
            const radius = Math.max(0.4, cellIntensity * maxRadius);
            const alpha = Math.min(0.85, cellIntensity * 0.95);

            ctx.fillStyle = `rgba(17, 17, 17, ${alpha})`;
            ctx.beginPath();
            ctx.arc(cx, cy, radius, 0, Math.PI * 2);
            ctx.fill();
          }
        }
      }

      if (!isReducedMotion) {
        animationFrameId = requestAnimationFrame(renderFrame);
      }
    };

    if (isReducedMotion) {
      renderFrame(16000 * 0.47);
    } else {
      animationFrameId = requestAnimationFrame(renderFrame);
    }

    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        updateGrid();
        if (isReducedMotion) {
          renderFrame(16000 * 0.47);
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
