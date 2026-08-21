import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";

const steps = [
  {
    number: "PASO 01",
    italicTitle: "Entender",
    title: "Definir el objetivo del negocio",
    text: "Antes de diseñar, preguntamos qué le impide al negocio venderse mejor hoy y cuáles son las prioridades reales.",
  },
  {
    number: "PASO 02",
    italicTitle: "Comunicar",
    title: "Ordenar qué ve el usuario primero",
    text: "La estrategia define qué tiene que entender el usuario primero, segundo y último. El diseño visual viene después de esa decisión, no antes.",
  },
  {
    number: "PASO 03",
    italicTitle: "Construir",
    title: "Desarrollo frontend de alta performance",
    text: "El código pone a prueba esa decisión: si carga rápido, si funciona en cualquier pantalla, si no se rompe cuando el negocio crece.",
  },
  {
    number: "PASO 04",
    italicTitle: "Acompañar",
    title: "Medir y ajustar",
    text: "El trabajo no termina con la publicación: se mide qué funciona y qué no, y el sitio se actualiza a medida que el negocio cambia.",
  },
];

export default function Metodologia() {
  const [activeStep, setActiveStep] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const rafIdRef = useRef<number | null>(null);

  useEffect(() => {
    // Check prefers-reduced-motion accessibility preference
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches) {
      setReducedMotion(true);
      setScrollProgress(1);
      setActiveStep(steps.length - 1);
      return;
    }

    const updateScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const totalHeight = rect.height;
      const currentScroll = windowHeight / 2 - rect.top;
      const progress = Math.min(Math.max(currentScroll / totalHeight, 0), 1);

      setScrollProgress(progress);

      // Single source of truth: derive activeStep directly from scrollProgress
      const currentStep = Math.min(
        Math.floor(progress * steps.length),
        steps.length - 1
      );
      setActiveStep(currentStep);
    };

    // Throttled scroll listener using requestAnimationFrame to prevent reflow jank
    const handleScroll = () => {
      if (rafIdRef.current !== null) return;
      rafIdRef.current = requestAnimationFrame(() => {
        rafIdRef.current = null;
        updateScroll();
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    updateScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafIdRef.current !== null) {
        cancelAnimationFrame(rafIdRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative z-10 bg-background py-24 md:py-36 overflow-hidden scroll-mt-36"
      id="proceso"
    >
      {/* Section Header */}
      <div className="container-trama px-6 md:px-12 lg:px-16 text-center max-w-4xl mx-auto mb-20 md:mb-28">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[hsl(var(--editorial-accent))]/30 bg-[hsl(var(--editorial-accent))]/5 text-[hsl(var(--editorial-accent))] font-mono text-xs font-semibold uppercase tracking-widest mb-6">
          Nuestro Proceso
        </div>
        <h2 className="font-heading text-4xl md:text-6xl lg:text-7xl tracking-tight leading-[1.08] mb-6">
          Una forma de <span className="font-serif italic text-[hsl(var(--editorial-accent))] font-normal">diseñar y construir</span> sin perder de vista para qué sirve.
        </h2>
        <p className="text-muted text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
          Unimos estrategia, diseño y desarrollo en un solo proceso — no tres etapas separadas que alguien tiene que coordinar.
        </p>
      </div>

      {/* Timeline Section */}
      <div className="container-trama px-6 md:px-12 lg:px-16 relative">
        {/* Central Vertical Connector Line (z-0: Behind node circles, exact X-axis at 4.5/12 = 37.5%) */}
        <div
          className="hidden md:block absolute top-6 bottom-6 w-[1.5px] bg-border -translate-x-1/2 rounded-full overflow-hidden pointer-events-none z-0"
          style={{ left: "calc((4.5 / 12) * 100%)" }}
        >
          <div
            className={`w-full ${reducedMotion ? "" : "transition-all duration-150 ease-out"}`}
            style={{
              height: `${scrollProgress * 100}%`,
              background:
                "linear-gradient(to bottom, hsl(var(--editorial-accent)) 0%, hsla(15, 65%, 45%, 0.75) 75%, hsla(15, 65%, 45%, 0.2) 100%)",
            }}
          />
        </div>

        <div className="space-y-24 md:space-y-36 relative z-10">
          {steps.map((step, i) => {
            const isCurrent = i === activeStep;
            const isVisited = i < activeStep;
            const isPending = i > activeStep;

            return (
              <div
                key={step.number}
                className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-center relative"
              >
                {/* Left Side (4 Cols) */}
                <div className="md:col-span-4 flex flex-col md:items-end text-left md:text-right">
                  <span className="inline-block font-mono text-micro font-medium uppercase tracking-widest text-[hsl(var(--editorial-accent))] mb-2">
                    {step.number}
                  </span>
                  <h3 className="font-serif italic text-2xl md:text-3xl font-normal text-foreground tracking-tight">
                    {step.italicTitle}
                  </h3>
                </div>

                {/* Grid Spacer (1 Col: Col 5) */}
                <div className="hidden md:block md:col-span-1" />

                {/* Node Indicator Mounted Absolutely on Vertical Line (z-10: In front of line, centered at 4.5/12) */}
                <div
                  className="hidden md:flex absolute top-1/2 -translate-x-1/2 -translate-y-1/2 items-center justify-center z-10 pointer-events-none"
                  style={{ left: "calc((4.5 / 12) * 100%)" }}
                >
                  {(isCurrent || isVisited) && (
                    <div className="relative flex items-center justify-center">
                      {/* Soft Halo Glow Outer Ring */}
                      <div className="absolute w-8 h-8 rounded-full bg-[hsl(var(--editorial-accent))]/20 blur-[1px] pointer-events-none" />
                      <div className="w-6 h-6 rounded-full bg-[hsl(var(--editorial-accent))] text-white flex items-center justify-center shadow-md relative z-10">
                        <ChevronDown className="w-3.5 h-3.5 text-white" strokeWidth={1.8} />
                      </div>
                    </div>
                  )}

                  {isPending && (
                    <div className="w-6 h-6 rounded-full bg-background border-[1.5px] border-border text-muted-foreground flex items-center justify-center relative z-10">
                      <ChevronDown className="w-3.5 h-3.5 text-muted-foreground" strokeWidth={1.8} />
                    </div>
                  )}
                </div>

                {/* Right Side (7 Cols) */}
                <div className="md:col-span-7 space-y-3">
                  <h4 className="font-heading text-2xl md:text-3xl text-foreground tracking-tight">
                    {step.title}
                  </h4>
                  <p className="font-sans text-subtle md:text-body text-muted leading-relaxed max-w-xl">
                    {step.text}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
