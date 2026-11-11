import { useEffect, useState, type MouseEvent } from "react";
import { motion, useReducedMotion } from "motion/react";

const SERVICIOS = [
  {
    id: "01",
    title: "Sitios web & Landing Pages",
    full: "Sitios web & Landing Pages",
    desc: "Una web que no explica todo, dice lo justo primero.",
    tags: ["Web", "Landing", "SEO"],
    bullets: ["Sitios claros y rápidos", "Estructura enfocada en conversión", "Diseño adaptable a cada pantalla"],
  },
  {
    id: "02",
    title: "UX & Rediseño",
    full: "UX & Rediseño",
    desc: "Encontramos dónde se traba el usuario y sacamos esa fricción del medio.",
    tags: ["UX", "Auditoría", "Rediseño"],
    bullets: ["Detectar fricciones", "Ordenar contenido", "Mejorar flujos de uso"],
  },
  {
    id: "03",
    title: "Frontend & Code",
    full: "Frontend & Code",
    desc: "La interfaz ya diseñada, funcionando rápido y sin depender de plantillas.",
    tags: ["Frontend", "Interfaces", "Code"],
    bullets: ["Implementación de interfaces", "Integración con servicios", "Rendimiento y accesibilidad"],
  },
  {
    id: "04",
    title: "Apps & Catálogos",
    full: "Apps & Catálogos",
    desc: "Herramientas para mostrar, gestionar o vender sin depender de otra persona.",
    tags: ["Apps", "Catálogo", "Herramientas"],
    bullets: ["Catálogos digitales", "Herramientas internas", "Flujos de consulta y gestión"],
  },
  {
    id: "05",
    title: "Estrategia & MVP",
    full: "Estrategia & MVP",
    desc: "Antes de construir todo, decidimos qué parte hay que construir primero.",
    tags: ["Estrategia", "MVP", "Roadmap"],
    bullets: ["Definir el alcance inicial", "Priorizar funcionalidades", "Validar antes de escalar"],
  },
];

const desktopQuery = "(min-width: 1024px)";

export function ServicesStack() {
  const [isMobile, setIsMobile] = useState(
    () => typeof window !== "undefined" && window.matchMedia("(max-width: 1023px)").matches,
  );
  const [active, setActive] = useState<string | null>(null);
  const shouldReduceMotion = useReducedMotion();
  const transition = shouldReduceMotion
    ? { duration: 0.2 }
    : { type: "spring" as const, stiffness: 300, damping: 30 };

  useEffect(() => {
    const mediaQuery = window.matchMedia(desktopQuery);
    const updateViewport = () => setIsMobile(!mediaQuery.matches);

    mediaQuery.addEventListener("change", updateViewport);
    return () => mediaQuery.removeEventListener("change", updateViewport);
  }, []);

  const handleMouseEnter = (id: string) => {
    if (!isMobile) setActive(id);
  };

  const handleContainerMouseLeave = () => {
    if (!isMobile) setActive(null);
  };

  const handleCardClick = (event: MouseEvent<HTMLButtonElement>, id: string) => {
    if (!isMobile) {
      if (event.detail === 0) setActive(id);
      return;
    }

    setActive((current) => (current === id ? null : id));
  };

  return (
    <section
      className="relative overflow-hidden bg-foreground bg-[url('/servicios-.avif')] bg-cover bg-center px-6 py-20 text-background md:px-12"
      id="servicios"
    >
      <div className="mx-auto w-full max-w-[1440px]">
        <p className="mb-12 font-sans text-sm font-medium uppercase tracking-[0.3em] text-[#C45A3A]">
          SERVICIOS
        </p>

        <div
          className="flex flex-col items-stretch justify-center gap-3 lg:min-h-[520px] lg:flex-row lg:justify-start lg:gap-4"
          onMouseLeave={handleContainerMouseLeave}
        >
          {SERVICIOS.map((servicio) => {
            const isActive = active === servicio.id;

            return (
              <motion.button
                key={servicio.id}
                type="button"
                layout
                animate={{
                  width: isMobile ? "100%" : "auto",
                  flexGrow: isMobile ? 0 : isActive ? 3.5 : 1,
                  height: isMobile ? (isActive ? "auto" : 88) : 520,
                }}
                transition={transition}
                onMouseEnter={() => handleMouseEnter(servicio.id)}
                onClick={(event) => handleCardClick(event, servicio.id)}
                onFocus={() => {
                  if (!isMobile) setActive(servicio.id);
                }}
                aria-expanded={isActive}
                aria-label={`${servicio.id} ${servicio.title}`}
                className={`group relative flex min-w-0 overflow-hidden rounded-[24px] border border-white/15 bg-[#FFFBF5] text-left text-[#0A0A0A] shadow-[0_8px_32px_rgba(0,0,0,0.25)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C45A3A] lg:flex-[1_1_0%] lg:flex-col lg:justify-between ${
                  isActive
                    ? "flex-col p-6 lg:p-8"
                    : "flex-row items-center justify-between p-4 lg:items-stretch"
                }`}
              >
                {isActive ? (
                  <>
                    <span className="absolute right-5 top-5 flex h-6 w-6 items-center justify-center lg:right-6 lg:top-6">
                      <span className="text-2xl font-light leading-none">−</span>
                    </span>
                    <span className="font-mono text-sm text-black/70 lg:order-1">
                      {servicio.id}
                    </span>
                    <div className="mt-8 min-w-0 lg:mt-0">
                      <h2 className="max-w-[18ch] pr-8 font-heading text-2xl leading-tight">
                        {servicio.full}
                      </h2>
                      <p className="mt-4 text-sm leading-relaxed text-black/70">
                        {servicio.desc}
                      </p>
                      <div className="mt-6 flex flex-wrap gap-2">
                        {servicio.tags.map((tag, index) => (
                          <span
                            key={tag}
                            className={`rounded-md px-3 py-1 text-xs ${
                              index === 0
                                ? "bg-[#C45A3A] text-white"
                                : "border border-black/15 text-black/80"
                            }`}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <ul className="mt-8 space-y-3 text-sm text-black/80">
                        {servicio.bullets.map((bullet) => (
                          <li key={bullet}>{bullet}</li>
                        ))}
                      </ul>
                    </div>
                  </>
                ) : (
                  <>
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center lg:self-start">
                      <span className="text-lg font-light transition-transform duration-300 group-hover:rotate-45 motion-reduce:transition-none">
                        +
                      </span>
                    </span>
                    <span
                      className="min-w-0 flex-1 px-4 font-heading text-xl leading-tight text-black lg:absolute lg:left-1/2 lg:top-1/2 lg:flex-none lg:translate-x-[-50%] lg:translate-y-[-50%] lg:px-0 lg:text-2xl"
                      style={
                        !isMobile
                          ? { writingMode: "vertical-rl", transform: "translate(-50%, -50%) rotate(180deg)" }
                          : undefined
                      }
                    >
                      {servicio.title}
                    </span>
                    <span className="font-mono text-sm text-black/70 lg:self-start">
                      {servicio.id}
                    </span>
                  </>
                )}
              </motion.button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
