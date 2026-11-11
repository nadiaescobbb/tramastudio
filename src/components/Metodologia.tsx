import { useEffect, useRef, type CSSProperties } from "react";
import { useReducedMotion } from "motion/react";
import IsotipoOjos from "@/components/IsotipoOjos";

const steps = [
  {
    number: "01",
    name: "Entender",
    description:
      "Un pedido casi nunca es el problema completo. Antes de diseñar, buscamos qué hay detrás — qué necesita resolverse de verdad, y para quién.",
    layout: "lg:col-start-1 lg:row-start-1 lg:col-span-6",
  },
  {
    number: "02",
    name: "Estructurar",
    description: "Ordenamos la información antes de pensar en pantallas",
    layout: "lg:col-start-7 lg:row-start-1 lg:col-span-3",
  },
  {
    number: "03",
    name: "Diseñar",
    description: "Diseño y desarrollo como una sola decisión.",
    layout: "lg:col-start-10 lg:row-start-1 lg:col-span-3",
  },
  {
    number: "04",
    name: "Construir",
    description:
      "No hay traspaso entre quien diseña y quien programa. Interfaz y código se deciden juntos, para que lo diseñado funcione en el uso real.",
    layout: "lg:col-start-1 lg:row-start-2 lg:col-span-9",
  },
] as const;

export default function Metodologia() {
  const gridRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const grid = gridRef.current;
    if (!grid || shouldReduceMotion || !("IntersectionObserver" in window)) return;

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
  }, [shouldReduceMotion]);

  return (
    <section
      id="proceso"
      className="bg-[#FFFBF5] py-24"
      aria-labelledby="process-heading"
    >
      <h2 id="process-heading" className="sr-only">
        Proceso de trabajo
      </h2>
      <div className="container-trama">
        <header className="mb-10 md:mb-12">
          <p className="font-mono text-micro font-medium uppercase tracking-[0.01em] text-[#B04A2A]">
            Cómo trabajamos
          </p>
        </header>
        <div
          ref={gridRef}
          className="methodology-bento-grid grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-12"
        >
          {steps.map((step, index) => (
            <article
              key={step.number}
              data-step={step.number}
              data-bento-reveal
              style={{ "--stagger": `${index * 80}ms` } as CSSProperties}
              className={`methodology-bento-card group relative flex min-w-0 flex-col justify-start gap-3 overflow-hidden rounded-[28px] border border-black/[0.08] bg-[#FFFBF5] p-7 shadow-[0_2px_16px_rgba(0,0,0,0.04)] ${step.layout}`}
            >
              <div className="flex items-baseline gap-4">
                <span className="methodology-bento-number shrink-0 font-heading text-[40px] font-normal leading-none text-[#C45A3A] transition-colors duration-200">
                  {step.number}
                </span>
                <h3
                  className={`font-heading font-medium leading-tight text-foreground ${
                    step.number === "01" ? "text-[26px]" : "text-[22px]"
                  }`}
                >
                  {step.name}
                </h3>
              </div>
              <p className="font-sans text-base leading-[1.55] text-foreground/75">
                {step.description}
              </p>
            </article>
          ))}

          <div
            data-carita
            data-bento-reveal
            style={{ "--stagger": "320ms" } as CSSProperties}
            className="methodology-bento-face relative min-h-[160px] overflow-hidden rounded-[28px] md:col-start-2 md:row-start-3 lg:col-start-10 lg:row-start-2 lg:col-span-3"
          >
            <IsotipoOjos />
          </div>
        </div>
      </div>
      <style>{`
        .methodology-bento-grid {
          grid-template-rows: minmax(190px, auto) minmax(160px, auto);
        }

        .methodology-bento-face {
          grid-row: 3;
        }

        @media (min-width: 768px) and (max-width: 1023px) {
          .methodology-bento-grid {
            grid-template-rows: none;
            grid-auto-rows: minmax(160px, auto);
          }

          .methodology-bento-face {
            grid-row: 3;
          }
        }

        @media (max-width: 767px) {
          .methodology-bento-grid {
            grid-template-rows: none;
            grid-auto-rows: minmax(160px, auto);
          }

          .methodology-bento-face {
            grid-row: auto;
          }
        }

        @media (min-width: 1024px) {
          .methodology-bento-face {
            grid-row: 2;
          }
        }

        .methodology-bento-card,
        .methodology-bento-face {
          opacity: 1;
        }

        .methodology-bento-card.is-visible,
        .methodology-bento-face.is-visible {
          animation: methodology-bento-enter 420ms var(--ease-standard) both;
          animation-delay: var(--stagger, 0ms);
        }

        @keyframes methodology-bento-enter {
          from { opacity: 0; transform: translateY(12px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @media (min-width: 1024px) and (hover: hover) {
          .methodology-bento-card:hover {
            transform: translateY(-2px);
            transition: transform 200ms var(--ease-standard), box-shadow 200ms var(--ease-standard);
          }

          .methodology-bento-card:hover .methodology-bento-number {
            color: #C45A3A;
          }
        }

        @media (max-width: 1023px) {
          .methodology-bento-card:active {
            transform: scale(0.98);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .methodology-bento-card,
          .methodology-bento-face {
            animation: none !important;
            transition: none !important;
          }

          .methodology-bento-card:hover,
          .methodology-bento-card:active {
            transform: none;
          }
        }
      `}</style>
    </section>
  );
}
