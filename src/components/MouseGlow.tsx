import { useEffect } from "react";

export const MouseGlow = () => {
  useEffect(() => {
    let raf: number | null = null;
    let tx = 0, ty = 0, x = 0, y = 0;
    const tick = () => {
      x += (tx - x) * 0.12;
      y += (ty - y) * 0.12;
      document.documentElement.style.setProperty("--glow-x", `${x}px`);
      document.documentElement.style.setProperty("--glow-y", `${y}px`);
      if (Math.abs(tx - x) > 0.2 || Math.abs(ty - y) > 0.2) {
        raf = requestAnimationFrame(tick);
      } else raf = null;
    };
    const onMove = (e: MouseEvent) => {
      tx = e.clientX; ty = e.clientY;
      if (!raf) raf = requestAnimationFrame(tick);
    };
    window.addEventListener("mousemove", onMove);
    return () => {
      window.removeEventListener("mousemove", onMove);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);
  return <div className="mouse-glow" aria-hidden="true" />;
};
