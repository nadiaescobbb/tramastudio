
import { useEffect, useRef, type CSSProperties } from "react";

const steps = [
  {
    number: "01",
    name: "Entender",
    description:
      "Un pedido casi nunca es el problema completo. Antes de diseñar, buscamos qué hay detrás — qué necesita resolverse de verdad, y para quién.",
    layout: "methodology-step-01",
  },
  {
    number: "02",
    name: "Estructurar",
    description: "Ordenamos la información antes de pensar en pantallas",
    layout: "methodology-step-02",
  },
  {
    number: "03",
    name: "Diseñar",
    description: "Diseño y desarrollo como una sola decisión.",
    layout: "methodology-step-03",
  },
  {
    number: "04",
    name: "Construir",
    description:
      "No hay traspaso entre quien diseña y quien programa. Interfaz y código se deciden juntos, para que lo diseñado funcione en el uso real.",
    layout: "methodology-step-04",
  },
] as const;

export default function Metodologia() {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const grid = gridRef.current;

    if (!grid || !("IntersectionObserver" in window)) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.12 },
    );

    grid.querySelectorAll<HTMLElement>("[data-bento-reveal]").forEach((item) => {
      observer.observe(item);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="proceso"
      className="bg-[#FBFBFA] py-24"
      aria-labelledby="process-heading"
    >
      <h2 id="process-heading" className="sr-only">
        Proceso de trabajo
      </h2>

      <div className="container-trama">
        <header className="mb-10 md:mb-12">
          <p className="font-mono text-micro font-medium uppercase tracking-[0.01em] text-[#111111]">
            Cómo trabajamos
          </p>
        </header>

        <div
          ref={gridRef}
          className="methodology-bento-grid grid grid-cols-2 gap-0"
        >
          {steps.map((step, index) => (
            <article
              key={step.number}
              data-step={step.number}
              data-bento-reveal
              style={{ "--stagger": `${index * 80}ms` } as CSSProperties}
              className={`methodology-bento-card ${step.layout} relative flex min-w-0 flex-col justify-between gap-8 border border-[#111111]/15 bg-[#FBFBFA] p-6 md:p-8 lg:p-10`}
            >
              <div className="flex items-baseline gap-4">
                <span className="shrink-0 font-mono text-sm text-[#111111]/55">
                  {step.number}
                </span>

                <h3 className="font-heading text-xl font-medium leading-tight text-[#111111] md:text-2xl">
                  {step.name}
                </h3>
              </div>

              <p className="max-w-prose font-sans text-sm leading-relaxed text-[#111111]/75 md:text-base">
                {step.description}
              </p>
            </article>
          ))}
        </div>
      </div>

      <style>{`
        .methodology-bento-grid {
          grid-template-areas:
            "step-01 step-01"
            "step-02 step-03"
            "step-04 step-04";
          grid-template-columns: repeat(2, minmax(0, 1fr));
        }

        .methodology-step-01 { grid-area: step-01; }
        .methodology-step-02 { grid-area: step-02; }
        .methodology-step-03 { grid-area: step-03; }
        .methodology-step-04 { grid-area: step-04; }

        .methodology-bento-card {
          min-height: 190px;
          opacity: 1;
        }

        .methodology-bento-card.is-visible {
          animation: methodology-bento-enter 420ms ease both;
          animation-delay: var(--stagger, 0ms);
        }

        @keyframes methodology-bento-enter {
          from {
            opacity: 0;
            transform: translateY(12px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (min-width: 768px) {
          .methodology-bento-grid {
            grid-template-areas:
              "step-01 step-01"
              "step-02 step-03"
              "step-04 step-04";
          }

          .methodology-bento-card {
            min-height: 210px;
          }

          .methodology-step-01,
          .methodology-step-04 {
            min-height: 230px;
          }
        }

        @media (min-width: 1024px) {
          .methodology-bento-grid {
            grid-template-areas:
              "step-01 step-01 step-01 step-01 step-01 step-01 step-01 step-02 step-02 step-02 step-02 step-02"
              "step-03 step-03 step-03 step-03 step-03 step-04 step-04 step-04 step-04 step-04 step-04 step-04";
            grid-template-columns: repeat(12, minmax(0, 1fr));
          }

          .methodology-bento-card {
            min-height: 250px;
          }

          .methodology-step-01,
          .methodology-step-04 {
            min-height: 280px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .methodology-bento-card {
            animation: none !important;
            transition: none !important;
            transform: none !important;
          }
        }
      `}</style>
    </section>
  );
}
