import React from "react";
import heytramaHome1 from "@/assets/heytrama-home-1.png";
import heytramaHome2 from "@/assets/heytrama-home-2.png";
import heytramaHome3 from "@/assets/heytrama-home-3.png";

interface IconCardProps {
  delay?: string;
}

export function MiniBrowserCard({ delay = "400ms" }: IconCardProps) {
  return (
    <span
      className="inline-flex items-center align-middle mx-0 group cursor-pointer select-none animate-reading-icon"
      style={{ animationDelay: delay }}
    >
      <span className="relative inline-flex items-center justify-center kowalski-spring group-hover:-translate-y-2 group-hover:-rotate-6 group-hover:scale-[1.12]">
        <img
          src={heytramaHome1}
          alt="HeyTrama 3D Icon 1"
          className="h-[1.35em] sm:h-[1.45em] w-auto object-contain mix-blend-multiply drop-shadow-md transition-all duration-300 group-hover:drop-shadow-xl translate-y-[-5%]"
        />
      </span>
    </span>
  );
}

export function MiniSoftwareCard({ delay = "1000ms" }: IconCardProps) {
  return (
    <span
      className="inline-flex items-center align-middle mx-0 group cursor-pointer select-none animate-reading-icon"
      style={{ animationDelay: delay }}
    >
      <span className="relative inline-flex items-center justify-center kowalski-spring group-hover:-translate-y-2 group-hover:rotate-6 group-hover:scale-[1.12]">
        <img
          src={heytramaHome2}
          alt="HeyTrama 3D Icon 2"
          className="h-[1.35em] sm:h-[1.45em] w-auto object-contain mix-blend-multiply drop-shadow-md transition-all duration-300 group-hover:drop-shadow-xl translate-y-[-5%]"
        />
      </span>
    </span>
  );
}

export function MiniMobileCard({ delay = "1600ms" }: IconCardProps) {
  return (
    <span
      className="inline-flex items-center align-middle mx-0 group cursor-pointer select-none animate-reading-icon"
      style={{ animationDelay: delay }}
    >
      <span className="relative inline-flex items-center justify-center kowalski-spring group-hover:-translate-y-2 group-hover:-rotate-12 group-hover:translate-x-1 group-hover:scale-[1.12]">
        <img
          src={heytramaHome3}
          alt="HeyTrama 3D Icon 3"
          className="h-[1.35em] sm:h-[1.45em] w-auto object-contain mix-blend-multiply drop-shadow-md transition-all duration-300 group-hover:drop-shadow-xl translate-y-[-5%]"
        />
      </span>
    </span>
  );
}
