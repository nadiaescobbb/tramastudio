import { useEffect, useRef, useState } from "react";

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
    title: "Estructurar la jerarquía visual",
    text: "La estrategia se traduce en jerarquía: qué tiene que entender el usuario primero, segundo y último. Recién ahí se le da forma visual.",
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
    title: "Medición y evolución continua",
    text: "El trabajo no termina con la publicación: se mide qué funciona y qué no, y el sitio se actualiza a medida que el negocio cambia.",
  },
];

export default function Metodologia() {
  const [activeStep, setActiveStep] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const totalHeight = rect.height;
      const currentScroll = windowHeight / 2 - rect.top;
      const progress = Math.min(Math.max(currentScroll / totalHeight, 0), 1);
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = stepRefs.current.findIndex((el) => el === entry.target);
            if (index !== -1) setActiveStep(index);
          }
        });
      },
      { rootMargin: "-30% 0px -30% 0px", threshold: 0 }
    );

    stepRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative z-10 bg-background py-24 md:py-36 overflow-hidden scroll-mt-36"
      id="proceso"
    >
      {/* Section Header */}
      <div className="container-trama px-6 md:px-12 lg:px-16 text-center max-w-4xl mx-auto mb-20 md:mb-28">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#6B2E2A]/30 bg-[#6B2E2A]/5 text-[#8A3F38] font-mono text-xs font-semibold uppercase tracking-widest mb-6">
          Nuestro Proceso
        </div>
        <h2 className="font-heading text-4xl md:text-6xl lg:text-7xl tracking-tight leading-[1.08] mb-6">
          Una forma más ágil de <span className="font-serif italic text-[#8A3F38] font-normal">diseñar y construir</span> experiencias.
        </h2>
        <p className="text-muted text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
          Simplificamos la creación de sitios y productos digitales combinando estrategia, diseño UX/UI y desarrollo en un flujo eficiente centrado en resultados.
        </p>
      </div>

      {/* Timeline Section */}
      <div className="container-trama px-6 md:px-12 lg:px-16 relative">
        {/* Central Vertical Connector Line (1.5px Width with Real Fade Gradient) */}
        <div className="hidden md:block absolute left-[37.5%] top-6 bottom-6 w-[1.5px] bg-[#D8D5D0] -translate-x-1/2 rounded-full overflow-hidden pointer-events-none z-0">
          <div
            className="w-full transition-all duration-150 ease-out"
            style={{
              height: `${scrollProgress * 100}%`,
              background:
                "linear-gradient(to bottom, #6B2E2A 0%, rgba(107, 46, 42, 0.75) 75%, rgba(107, 46, 42, 0.2) 100%)",
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
                ref={(el) => (stepRefs.current[i] = el)}
                className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-center"
              >
                {/* Left Side (4 Cols) */}
                <div className="md:col-span-4 flex flex-col md:items-end text-left md:text-right">
                  <span className="inline-block font-mono text-xs font-semibold tracking-wider text-muted/70 uppercase mb-2">
                    {step.number}
                  </span>
                  <h3 className="font-serif italic text-4xl md:text-5xl text-foreground tracking-tight">
                    {step.italicTitle}
                  </h3>
                </div>

                {/* Center Node Indicator (1 Col: Col 5) - Consistent 4 points with Halo Glow */}
                <div className="hidden md:flex md:col-span-1 items-center justify-center">
                  {(isCurrent || isVisited) && (
                    <div className="relative flex items-center justify-center">
                      {/* Soft Halo Glow Outer Ring */}
                      <div className="absolute w-8 h-8 rounded-full bg-[#6B2E2A]/20 blur-[1px] pointer-events-none" />
                      <div className="w-6 h-6 rounded-full bg-[#6B2E2A] text-white flex items-center justify-center shadow-md relative z-10">
                        <span className="w-1.5 h-1.5 rounded-full bg-white block" />
                      </div>
                    </div>
                  )}

                  {isPending && (
                    <div className="w-6 h-6 rounded-full bg-background border-[1.5px] border-[#D8D5D0] flex items-center justify-center relative z-10" />
                  )}
                </div>

                {/* Right Side (7 Cols) */}
                <div className="md:col-span-7 space-y-3">
                  <h4 className="font-heading text-2xl md:text-3xl text-foreground tracking-tight">
                    {step.title}
                  </h4>
                  <p className="text-muted text-base md:text-lg leading-relaxed max-w-xl">
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
