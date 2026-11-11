import { useState } from "react";

const SERVICIOS = [
  {
    id: "01",
    title: "Sitios web & Landing Pages",
    desc: "Sitios que explican lo que hacés y llevan a la consulta. Diseño, desarrollo y puesta en línea.",
    bullets: ["Diseño adaptable a cada pantalla", "Estructura enfocada en conversión", "Implementación y puesta en línea"],
  },
  {
    id: "02",
    title: "UX & Rediseño",
    desc: "Tomamos un sitio que ya existe y lo reordenamos para que se entienda y la gente consulte.",
    bullets: ["Detectar fricciones", "Ordenar contenido y navegación", "Mejorar los flujos de uso"],
  },
  {
    id: "03",
    title: "Frontend & Code",
    desc: "Programamos tu diseño, o el nuestro, en código que otro desarrollador pueda tomar y seguir.",
    bullets: ["Implementación de interfaces", "Integración con servicios", "Rendimiento y accesibilidad"],
  },
  {
    id: "04",
    title: "Apps & Catálogos",
    desc: "Catálogos, tiendas y herramientas internas para vender u operar sin planillas.",
    bullets: ["Catálogos digitales", "Tiendas online", "Herramientas internas"],
  },
  {
    id: "05",
    title: "Estrategia & MVP",
    desc: "Definimos qué construir primero y lo lanzamos en una versión mínima que se pueda probar.",
    bullets: ["Definir el alcance inicial", "Priorizar funcionalidades", "Validar antes de escalar"],
  },
];

export function ServicesStack() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <section
      className="bg-[#FFFBF5] py-20 text-foreground md:py-28"
      id="servicios"
      aria-labelledby="services-heading"
    >
      <div className="container-trama">
        <h2
          id="services-heading"
          className="mb-10 font-mono text-micro font-medium uppercase tracking-[0.01em] text-[#B04A2A] md:mb-12"
        >
          Servicios
        </h2>

        <div className="border-t border-[#6F6A62]">
          {SERVICIOS.map((servicio) => {
            const isActive = active === servicio.id;
            const triggerId = `service-trigger-${servicio.id}`;
            const detailsId = `service-details-${servicio.id}`;

            return (
              <article key={servicio.id} className="border-b border-[#6F6A62]">
                <div className="grid grid-cols-[48px_minmax(0,1fr)_40px] items-center gap-x-3 gap-y-2 py-6 md:grid-cols-[64px_minmax(190px,0.8fr)_minmax(0,1.6fr)_48px] md:gap-x-6 md:py-7">
                  <span className="row-span-2 font-heading text-[40px] font-normal leading-none text-[#C45A3A] md:row-span-1">
                    {servicio.id}
                  </span>
                  <h3 className="min-w-0 whitespace-nowrap font-heading text-[clamp(16px,5vw,22px)] font-medium leading-tight tracking-tight text-foreground md:text-2xl">
                    {servicio.title}
                  </h3>
                  <p className="col-start-2 text-base leading-[1.55] text-foreground/75 md:col-start-3 md:row-start-1">
                    {servicio.desc}
                  </p>
                  <button
                    id={triggerId}
                    type="button"
                    aria-expanded={isActive}
                    aria-controls={detailsId}
                    aria-label={`${isActive ? "Cerrar" : "Ampliar"} detalles de ${servicio.title}`}
                    onClick={() => setActive(isActive ? null : servicio.id)}
                    className="col-start-3 row-start-1 flex h-10 w-10 items-center justify-center rounded-full border border-[#6F6A62] text-foreground transition-colors hover:bg-foreground hover:text-[#FFFBF5] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C45A3A] md:col-start-4 md:h-12 md:w-12"
                  >
                    <span aria-hidden="true" className="font-sans text-2xl font-light leading-none">
                      {isActive ? "−" : "+"}
                    </span>
                  </button>
                </div>
                <div
                  id={detailsId}
                  role="region"
                  aria-labelledby={triggerId}
                  hidden={!isActive}
                  className="pb-6 pl-16 md:pb-7 md:pl-[88px]"
                >
                  <ul className="grid gap-2 text-base leading-[1.55] text-foreground/75 md:grid-cols-3">
                    {servicio.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
