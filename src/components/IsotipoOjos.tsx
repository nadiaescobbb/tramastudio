import { useEffect, useRef } from "react";

export default function IsotipoOjos() {
  const tile = useRef<HTMLDivElement>(null);
  const sphere = useRef<HTMLDivElement>(null);
  const marks = useRef<SVGGElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!window.matchMedia("(min-width: 768px) and (hover: hover)").matches) return;

    const target = { x: 0, y: 0 };
    const cur = { x: 0, y: 0 };
    const MAX = 9;
    const TILT = 7;
    let raf = 0;
    let idle = 0;

    const tick = () => {
      cur.x += (target.x - cur.x) * 0.12;
      cur.y += (target.y - cur.y) * 0.12;
      marks.current?.setAttribute(
        "transform",
        `translate(${cur.x * MAX} ${cur.y * MAX})`,
      );
      if (sphere.current) {
        sphere.current.style.transform =
          `perspective(600px) rotateY(${cur.x * TILT}deg) rotateX(${-cur.y * TILT}deg)`;
      }
      const moving = Math.abs(target.x - cur.x) + Math.abs(target.y - cur.y) > 0.001;
      raf = moving ? requestAnimationFrame(tick) : 0;
    };
    const kick = () => {
      if (!raf) raf = requestAnimationFrame(tick);
    };

    const onMove = (event: PointerEvent) => {
      if (!tile.current) return;
      const bounds = tile.current.getBoundingClientRect();
      const dx = event.clientX - (bounds.left + bounds.width / 2);
      const dy = event.clientY - (bounds.top + bounds.height / 2);
      const distance = Math.hypot(dx, dy) || 1;
      const scale = Math.tanh(distance / 300);
      target.x = (dx / distance) * scale;
      target.y = (dy / distance) * scale;
      kick();
      window.clearTimeout(idle);
      idle = window.setTimeout(() => {
        target.x = 0;
        target.y = 0;
        kick();
      }, 2500);
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      window.removeEventListener("pointermove", onMove);
      cancelAnimationFrame(raf);
      window.clearTimeout(idle);
    };
  }, []);

  const blink = () => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const element = tile.current;
    if (!element) return;
    element.classList.remove("blink");
    void element.offsetWidth;
    element.classList.add("blink");
  };

  return (
    <div
      ref={tile}
      onPointerDown={blink}
      aria-hidden="true"
      className="isotipo-tile relative grid h-full min-h-[160px] place-items-center overflow-hidden rounded-[28px] bg-[#0b0b0b]"
    >
      <div
        ref={sphere}
        className="aspect-square w-[39%] max-w-[90px] rounded-full will-change-transform"
        style={{
          background:
            "radial-gradient(circle at 35% 30%, #ffffff 0%, #ececec 45%, #bdbdbd 100%)",
        }}
      >
        <svg viewBox="0 0 100 100" className="h-full w-full">
          <g ref={marks}>
            <g transform="rotate(22 38 54)">
              <rect
                className="pill"
                x="29"
                y="34"
                width="18"
                height="40"
                rx="9"
                fill="#1a1a1a"
              />
            </g>
            <g transform="rotate(22 62 46)">
              <rect
                className="pill"
                x="53"
                y="26"
                width="18"
                height="40"
                rx="9"
                fill="#1a1a1a"
              />
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
}
