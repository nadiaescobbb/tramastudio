import React from "react";
import heytramaHome1 from "@/assets/heytrama-home-1.png";
import heytramaHome2 from "@/assets/heytrama-home-2.png";
import heytramaHome3 from "@/assets/heytrama-home-3.png";

export function MiniBrowserCard() {
  return (
    <span className="inline-flex items-center align-middle -mx-2 sm:-mx-4 md:-mx-6 lg:-mx-7 group cursor-pointer select-none -my-4 sm:-my-7 md:-my-10">
      <span className="relative inline-flex items-center justify-center kowalski-spring group-hover:-translate-y-3 group-hover:-rotate-6 group-hover:scale-[1.12]">
        <img
          src={heytramaHome1}
          alt="HeyTrama 3D Icon 1"
          className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 object-contain mix-blend-multiply drop-shadow-md transition-all duration-300 group-hover:drop-shadow-xl"
        />
      </span>
    </span>
  );
}

export function MiniSoftwareCard() {
  return (
    <span className="inline-flex items-center align-middle -mx-2 sm:-mx-4 md:-mx-6 lg:-mx-7 group cursor-pointer select-none -my-4 sm:-my-7 md:-my-10">
      <span className="relative inline-flex items-center justify-center kowalski-spring group-hover:-translate-y-3 group-hover:rotate-6 group-hover:scale-[1.12]">
        <img
          src={heytramaHome2}
          alt="HeyTrama 3D Icon 2"
          className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 object-contain mix-blend-multiply drop-shadow-md transition-all duration-300 group-hover:drop-shadow-xl"
        />
      </span>
    </span>
  );
}

export function MiniMobileCard() {
  return (
    <span className="inline-flex items-center align-middle mx-0.5 sm:mx-1 group cursor-pointer select-none -my-2 sm:-my-4 md:-my-6">
      <span className="relative inline-flex items-center justify-center kowalski-spring group-hover:-translate-y-3 group-hover:-rotate-12 group-hover:translate-x-1 group-hover:scale-[1.12]">
        <img
          src={heytramaHome3}
          alt="HeyTrama 3D Icon 3"
          className="w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-36 lg:h-36 object-contain mix-blend-multiply drop-shadow-md transition-all duration-300 group-hover:drop-shadow-xl"
        />
      </span>
    </span>
  );
}

