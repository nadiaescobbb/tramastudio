import { useRef } from "react";
import { useIsotipoMotion } from "@/hooks/use-isotipo-motion";

export function HeroIsotipo() {
  const tileRef = useRef<HTMLDivElement>(null);
  const sphereRef = useRef<HTMLDivElement>(null);
  const marksRef = useRef<SVGGElement>(null);
  const originRef = useRef<HTMLDivElement>(null);
  const onPointerDown = useIsotipoMotion({
    tileRef,
    sphereRef,
    marksRef,
    originRef,
    maxTilt: 3,
  });

  return (
    <div
      ref={sphereRef}
      className="hero-sphere pointer-events-none absolute bottom-0 left-1/2 z-[1] -translate-x-1/2"
      aria-hidden="true"
    >
      <div className="hero-sphere-surface" />
      <div
        ref={tileRef}
        onPointerDown={onPointerDown}
        className="isotipo-tile hero-isotipo absolute left-1/2 top-[58%] grid -translate-x-1/2 -translate-y-1/2 place-items-center"
      >
        <div ref={originRef} className="hero-isotipo-origin">
          <svg
            viewBox="0 0 235 210"
            className="hero-isotipo-marks"
            aria-hidden="true"
          >
            <g ref={marksRef}>
              <g transform="rotate(22 50 115)">
                <rect className="pill" x="0" y="10" width="100" height="210" rx="50" fill="#050505" />
              </g>
              <g transform="rotate(22 185 105)">
                <rect className="pill" x="135" y="0" width="100" height="210" rx="50" fill="#050505" />
              </g>
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}
