/**
 * HeroMascota — círculo con ojos animados, SVG inline.
 * Estados: neutro (reposo) · curioso (el cursor se mueve) · sorprendido (clic o toque, 1,4 s).
 * La mirada sigue al cursor con seguimiento global (estilo bloub.vercel.app)
 * con la propiedad CSS `translate` sobre los ojos (sin tocar `transform`).
 * La mascota se espeja por CSS (scaleX(-1)), por eso el desplazamiento horizontal se invierte.
 */
import { useEffect, useRef, useState } from "react";

import neutroRaw from "@/assets/hero/hero-neutro.svg?raw";
import curiosoRaw from "@/assets/hero/hero-curioso.svg?raw";
import sorprendidoRaw from "@/assets/hero/hero-sorprendido.svg?raw";

type Estado = "neutro" | "curioso" | "sorprendido";

const ESPEJO = -1; // la mascota está espejada: desplazamiento horizontal invertido
const MAX_X = 18; // desplazamiento horizontal máximo (unidades viewBox)
const MAX_Y = 14; // desplazamiento vertical máximo (unidades viewBox)
const SUAVIZADO = 0.12;
const REPOSO_MS = 2500;
const SORPRESA_MS = 1400;

/** Pose fija de cada ojo (primer cuadro de su animación). Se usa con movimiento reducido. */
const POSES: Record<Estado, [string, string]> = {
  neutro: ["0.86,-0.32,0.45,0.84,23.09,-43.79", "0.62,-0.05,0.45,0.84,64.11,-54.11"],
  curioso: ["0.94,-0.34,0.34,0.92,5.16,19.1", "0.76,-0.41,0.32,0.91,57.58,4.5"],
  sorprendido: ["0.97,0,0,1,-22.1,1.77", "0.91,-0.01,0,1,42.64,1.76"],
};

/**
 * - Quita role, aria-label, width y height de la etiqueta <svg>.
 * - Renombra oeil0/oeil1 a oeil0-<estado>/oeil1-<estado> para aislar los <style> de cada capa.
 */
function prepararSvg(raw: string, id: Estado): string {
  return raw
    .replace(/<svg\b[^>]*>/, (tag) =>
      tag.replace(/\s(?:role|aria-label|width|height)="[^"]*"/g, ""),
    )
    .replace(/oeil([01])/g, `oeil$1-${id}`);
}

const CAPAS: { id: Estado; html: string }[] = [
  { id: "neutro", html: prepararSvg(neutroRaw, "neutro") },
  { id: "curioso", html: prepararSvg(curiosoRaw, "curioso") },
  { id: "sorprendido", html: prepararSvg(sorprendidoRaw, "sorprendido") },
];

const OJOS = '[class^="oeil"]';

export function HeroMascota() {
  const [estado, setEstado] = useState<Estado>("neutro");
  const hostRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;

    // Movimiento reducido: sin animación ni seguimiento. Cada ojo queda en su pose fija.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      host.querySelectorAll<HTMLElement>(".hm-layer").forEach((capa, i) => {
        const pose = POSES[CAPAS[i].id];
        capa.querySelectorAll<SVGElement>(OJOS).forEach((ojo, k) => {
          ojo.style.setProperty("animation", "none", "important");
          ojo.style.transform = `matrix(${pose[k]})`;
        });
      });
      return;
    }

    const ojos = Array.from(host.querySelectorAll<SVGElement>(OJOS));
    const actual = { x: 0, y: 0 };
    const objetivo = { x: 0, y: 0 };
    let raf = 0;
    let tReposo = 0;
    let tSorpresa = 0;
    let sorprendido = false;

    const geometria = () => {
      const svg = host.querySelector("svg");
      if (!svg) return null;
      const r = svg.getBoundingClientRect();
      // el círculo ocupa el 80 % de la caja del svg
      return { cx: r.left + r.width / 2, cy: r.top + r.height / 2, radio: r.width * 0.4 };
    };

    const aplicar = () => {
      const t = `${actual.x}px ${actual.y}px`;
      ojos.forEach((o) => {
        o.style.translate = t;
      });
    };

    const tick = () => {
      actual.x += (objetivo.x - actual.x) * SUAVIZADO;
      actual.y += (objetivo.y - actual.y) * SUAVIZADO;
      aplicar();
      const quieto =
        Math.abs(objetivo.x - actual.x) < 0.02 && Math.abs(objetivo.y - actual.y) < 0.02;
      raf = quieto ? 0 : requestAnimationFrame(tick);
    };

    const mover = () => {
      if (!raf) raf = requestAnimationFrame(tick);
    };

    const alCentro = () => {
      objetivo.x = 0;
      objetivo.y = 0;
      mover();
    };

    const onMove = (e: PointerEvent) => {
      if (e.pointerType === "touch") return; // en táctil no hay seguimiento de cursor
      const g = geometria();
      if (!g) return;

      // Cálculo de mirada estilo Bloub: coordenadas normalizadas respecto a la pantalla
      const demiLargeur = Math.max(1, window.innerWidth / 2);
      const demiHauteur = Math.max(1, window.innerHeight / 2);
      const nx = Math.min(1, Math.max(-1, (e.clientX - g.cx) / demiLargeur));
      const ny = Math.min(1, Math.max(-1, (e.clientY - g.cy) / demiHauteur));

      objetivo.x = nx * MAX_X * ESPEJO;
      objetivo.y = ny * MAX_Y;
      mover();

      if (!sorprendido) setEstado("curioso");
      window.clearTimeout(tReposo);
      tReposo = window.setTimeout(() => {
        if (!sorprendido) setEstado("neutro");
        alCentro();
      }, REPOSO_MS);
    };

    const onLeave = () => {
      window.clearTimeout(tReposo);
      if (!sorprendido) setEstado("neutro");
      alCentro();
    };

    const onDown = (e: PointerEvent) => {
      const g = geometria();
      if (!g) return;
      if (Math.hypot(e.clientX - g.cx, e.clientY - g.cy) > g.radio) return; // solo sobre el círculo
      sorprendido = true;
      setEstado("sorprendido");
      alCentro();
      window.clearTimeout(tReposo);
      window.clearTimeout(tSorpresa);
      tSorpresa = window.setTimeout(() => {
        sorprendido = false;
        setEstado("neutro");
      }, SORPRESA_MS);
    };

    // Seguimiento global en toda la ventana (como en bloub.vercel.app)
    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerleave", onLeave);
    window.addEventListener("pointerdown", onDown);
    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerleave", onLeave);
      window.removeEventListener("pointerdown", onDown);
      cancelAnimationFrame(raf);
      window.clearTimeout(tReposo);
      window.clearTimeout(tSorpresa);
    };
  }, []);

  return (
    <div ref={hostRef} aria-hidden="true" className="hm-host">
      {CAPAS.map(({ id, html }) => (
        <div
          key={id}
          className={`hm-layer${estado === id ? " is-active" : ""}`}
          // Los SVG son assets estáticos del build, no datos de usuario.
          dangerouslySetInnerHTML={{ __html: html }}
        />
      ))}
    </div>
  );
}
