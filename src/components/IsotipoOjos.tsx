import { useRef } from "react";
import { useIsotipoMotion } from "@/hooks/use-isotipo-motion";

export default function IsotipoOjos() {
  const tile = useRef<HTMLDivElement>(null);
  const sphere = useRef<HTMLDivElement>(null);
  const marks = useRef<SVGGElement>(null);
  const blink = useIsotipoMotion({
    tileRef: tile,
    sphereRef: sphere,
    marksRef: marks,
  });

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
