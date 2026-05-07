import { ChevronLeft, ChevronRight } from "lucide-react";
import { projectImages } from "@/data/project-images";

interface Slide { slug: string; label: string; }
interface Props { slides: Slide[]; active: number; setActive: (i: number) => void; }

export const HeroCarousel = ({ slides, active, setActive }: Props) => {
  const next = () => setActive((active + 1) % slides.length);
  const prev = () => setActive((active - 1 + slides.length) % slides.length);

  return (
    <div
      className="relative mt-8 md:mt-0 aspect-[4/5] md:aspect-[3/4] overflow-hidden rounded-sm animate-slide-up opacity-0 group"
      style={{ animationDelay: "250ms", maxHeight: "calc(100dvh - 10rem)" }}
    >
      {slides.map((slide, i) => (
        <img
          key={slide.slug}
          src={projectImages[slide.slug]}
          alt={slide.label}
          loading={i === 0 ? "eager" : "lazy"}
          // @ts-ignore - fetchpriority is valid in modern browsers
          fetchpriority={i === 0 ? "high" : "low"}
          className="absolute inset-0 h-full w-full object-cover transition-opacity duration-[1400ms]"
          style={{ 
            opacity: i === active ? 1 : 0
          }}
        />
      ))}

      {/* Vignette */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-[#0b0a0c]/95" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0b0a0c]/35 to-transparent" />

      {/* Manual Controls - Arrows */}
      <div className="absolute inset-0 flex items-center justify-between px-4 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <button 
          onClick={prev}
          className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/10 flex items-center justify-center text-white pointer-events-auto hover:bg-white/20 transition-colors"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button 
          onClick={next}
          className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/10 flex items-center justify-center text-white pointer-events-auto hover:bg-white/20 transition-colors"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Top bar */}
      <div className="absolute top-6 left-8 right-6 flex items-center justify-between">
        <div className="font-mono text-[9px] uppercase tracking-[0.3em] text-white/35">
          Trama Studio
        </div>
        <div className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/35">
          {String(active + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
        </div>
      </div>

      {/* Bottom: progress + label */}
      <div className="absolute bottom-0 left-0 right-0 p-5 md:p-8">

        <div className="font-heading text-lg md:text-2xl leading-tight text-white drop-shadow-md">
          {slides[active].label}
        </div>
      </div>

    <div
      className="absolute left-0 top-0 bottom-0 w-[2px]"
      style={{ background: "hsl(var(--accent))" }}
    />
  </div>
);
};

export const HeroThumbnails = ({ slides, active, setActive }: Props) => (
  <div
    className="mt-8 md:hidden flex gap-3 overflow-x-auto pb-1 animate-slide-up opacity-0"
    style={{ animationDelay: "600ms" }}
  >
    {slides.map((slide, i) => (
      <button
        key={slide.slug}
        onClick={() => setActive(i)}
        className="shrink-0 relative h-28 w-20 overflow-hidden transition-all duration-300"
        style={{
          borderBottom: `2px solid ${i === active ? "hsl(var(--accent))" : "transparent"}`,
          opacity: i === active ? 1 : 0.4,
        }}
      >
        <img
          src={projectImages[slide.slug]}
          alt={slide.label}
          className="absolute inset-0 h-full w-full object-cover"
        />
      </button>
    ))}
  </div>
);
