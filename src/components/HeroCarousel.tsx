import { projectImages } from "@/data/project-images";

interface Slide { slug: string; label: string; }
interface Props { slides: Slide[]; active: number; setActive: (i: number) => void; }

export const HeroCarousel = ({ slides, active, setActive }: Props) => (
  <div
    className="relative mt-8 md:mt-0 aspect-[4/5] md:aspect-[3/4] overflow-hidden rounded-sm animate-slide-up opacity-0"
    style={{ animationDelay: "250ms", maxHeight: "calc(100dvh - 10rem)" }}
  >
    {/* Images — crossfade */}
    {slides.map((slide, i) => (
      <img
        key={slide.slug}
        src={projectImages[slide.slug]}
        alt={slide.label}
        className="absolute inset-0 h-full w-full object-cover transition-opacity duration-[1400ms]"
        style={{ opacity: i === active ? 1 : 0 }}
      />
    ))}

    {/* Vignette */}
    <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-transparent to-[#0b0a0c]/85" />
    <div className="absolute inset-0 bg-gradient-to-r from-[#0b0a0c]/25 to-transparent" />

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
      {/* Progress lines */}
      <div className="mb-4 md:mb-5 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className="relative h-[1px] flex-1 cursor-pointer overflow-hidden"
            style={{ background: "rgba(255,255,255,0.1)" }}
          >
            <span
              className="absolute inset-y-0 left-0 transition-all duration-300"
              style={{
                width: i < active ? "100%" : i === active ? "100%" : "0%",
                background:
                  i === active
                    ? "hsl(var(--accent))"
                    : "rgba(255,255,255,0.3)",
              }}
            />
          </button>
        ))}
      </div>
      <div className="font-heading text-lg md:text-2xl leading-tight text-white">
        {slides[active].label}
      </div>
    </div>

    {/* Left accent stripe */}
    <div
      className="absolute left-0 top-0 bottom-0 w-[2px]"
      style={{ background: "hsl(var(--accent))" }}
    />
  </div>
);

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
