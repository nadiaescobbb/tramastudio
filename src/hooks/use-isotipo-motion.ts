import { useCallback, useEffect, type RefObject } from "react";

interface UseIsotipoMotionOptions {
  tileRef: RefObject<HTMLDivElement>;
  sphereRef: RefObject<HTMLDivElement>;
  marksRef: RefObject<SVGGElement>;
  originRef?: RefObject<HTMLElement>;
  maxOffset?: number;
  maxTilt?: number;
}

export function useIsotipoMotion({
  tileRef,
  sphereRef,
  marksRef,
  originRef,
  maxOffset = 9,
  maxTilt = 7,
}: UseIsotipoMotionOptions) {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!window.matchMedia("(min-width: 768px) and (hover: hover)").matches) return;

    const target = { x: 0, y: 0 };
    const current = { x: 0, y: 0 };
    let raf = 0;
    let idle = 0;

    const tick = () => {
      current.x += (target.x - current.x) * 0.12;
      current.y += (target.y - current.y) * 0.12;
      marksRef.current?.setAttribute(
        "transform",
        `translate(${current.x * maxOffset} ${current.y * maxOffset})`,
      );
      if (sphereRef.current) {
        sphereRef.current.style.transform =
          `perspective(600px) rotateY(${current.x * maxTilt}deg) rotateX(${-current.y * maxTilt}deg)`;
      }
      const moving =
        Math.abs(target.x - current.x) + Math.abs(target.y - current.y) > 0.001;
      raf = moving ? requestAnimationFrame(tick) : 0;
    };
    const kick = () => {
      if (!raf) raf = requestAnimationFrame(tick);
    };

    const onMove = (event: PointerEvent) => {
      const origin = originRef?.current ?? tileRef.current;
      if (!origin) return;
      const bounds = origin.getBoundingClientRect();
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
  }, [maxOffset, maxTilt, marksRef, originRef, sphereRef, tileRef]);

  return useCallback(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const element = tileRef.current;
    if (!element) return;
    element.classList.remove("blink");
    void element.offsetWidth;
    element.classList.add("blink");
  }, [tileRef]);
}
