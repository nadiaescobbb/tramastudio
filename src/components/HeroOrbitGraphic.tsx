import { Logo } from "./Logo";

export function HeroOrbitGraphic() {
  return (
    <div className="relative w-full aspect-square max-w-[480px] lg:max-w-[540px] mx-auto flex items-center justify-center select-none pointer-events-none">
      {/* Background Soft Glow */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[hsl(var(--editorial-accent))]/10 via-transparent to-amber-500/10 blur-3xl pointer-events-none" />

      {/* Orbit SVG Ellipses */}
      <svg
        viewBox="0 0 500 500"
        className="w-full h-full absolute inset-0 text-foreground/35"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Orbit 1: Tilted Ellipse (-30deg) */}
        <g transform="rotate(-30 250 250)">
          <ellipse
            cx="250"
            cy="250"
            rx="200"
            ry="110"
            stroke="currentColor"
            strokeWidth="1.5"
            className="opacity-85"
          />
        </g>

        {/* Orbit 2: Tilted Ellipse (30deg) */}
        <g transform="rotate(30 250 250)">
          <ellipse
            cx="250"
            cy="250"
            rx="200"
            ry="110"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeDasharray="6 6"
            className="opacity-85"
          />
        </g>
      </svg>

      {/* Center Core Badge: HeyTrama */}
      <div className="relative z-20 flex items-center gap-3 bg-foreground text-background px-7 py-3.5 rounded-full shadow-2xl border border-white/20 animate-pulse" style={{ animationDuration: "4s" }}>
        <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-background text-foreground">
          <Logo size={16} />
        </span>
        <span className="font-heading text-xl font-bold tracking-tight">
          HeyTrama
        </span>
      </div>

      {/* Orbiting Badges Around Center (No color dots, 4 key categories) */}

      {/* Badge 1: Aplicaciones (Top Right) */}
      <div className="absolute top-[18%] right-[10%] z-20 flex items-center px-4 py-2 rounded-full bg-white text-slate-900 shadow-xl border border-black/10 text-xs font-mono font-bold animate-[bounce_5s_infinite_ease-in-out]">
        <span>Aplicaciones</span>
      </div>

      {/* Badge 2: Plataformas (Top Left) */}
      <div className="absolute top-[22%] left-[8%] z-20 flex items-center px-4 py-2 rounded-full bg-slate-900 text-white shadow-xl border border-white/10 text-xs font-mono font-bold animate-[bounce_6s_infinite_ease-in-out]">
        <span>Plataformas</span>
      </div>

      {/* Badge 3: Sistemas (Bottom Right) */}
      <div className="absolute bottom-[22%] right-[12%] z-20 flex items-center px-4 py-2 rounded-full bg-white text-slate-900 shadow-xl border border-black/10 text-xs font-mono font-bold animate-[bounce_5.5s_infinite_ease-in-out]">
        <span>Sistemas</span>
      </div>

      {/* Badge 4: Productos Digitales (Bottom Left) */}
      <div className="absolute bottom-[24%] left-[6%] z-20 flex items-center px-4 py-2 rounded-full bg-slate-900 text-white shadow-xl border border-white/10 text-xs font-mono font-bold animate-[bounce_7s_infinite_ease-in-out]">
        <span>Productos Digitales</span>
      </div>
    </div>
  );
}
