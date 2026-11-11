import { useEffect, useRef, type CSSProperties, type MouseEvent } from "react";
import {
  motion,
  useAnimationControls,
  useMotionValue,
  useReducedMotion,
} from "motion/react";

const steps = [
  {
    number: "01",
    name: "Entender",
    description:
      "Un pedido casi nunca es el problema completo. Antes de diseñar, buscamos qué hay detrás — qué necesita resolverse de verdad, y para quién.",
    layout: "col-span-2 row-start-1 lg:col-start-1 lg:row-start-1 lg:row-span-2",
    variant: "large",
  },
  {
    number: "02",
    name: "Estructurar",
    description: "Ordenamos la información antes de pensar en pantallas",
    layout: "col-start-1 row-start-2 lg:col-start-3 lg:row-start-1",
    variant: "small gradient",
  },
  {
    number: "03",
    name: "Diseñar",
    description: "Diseño y desarrollo como una sola decisión.",
    layout: "col-start-1 row-start-3 lg:col-start-3 lg:row-start-2",
    variant: "small",
  },
  {
    number: "04",
    name: "Construir",
    description:
      "No hay traspaso entre quien diseña y quien programa: la interfaz y el código se deciden juntos, para que lo diseñado sea lo que realmente funciona en uso real.",
    layout: "col-span-2 row-start-4 lg:col-start-1 lg:row-start-3 lg:col-span-4",
    variant: "wide",
  },
] as const;

export default function Metodologia() {
  const gridRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const blinkControls = useAnimationControls();
  const eyeX = useMotionValue(0);
  const eyeY = useMotionValue(0);

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

  useEffect(() => {
    if (shouldReduceMotion) return;

    let timeoutId: number;
    let cancelled = false;

    const scheduleBlink = () => {
      timeoutId = window.setTimeout(
        async () => {
          if (cancelled) return;
          await blinkControls.start({
            scaleY: [1, 0.1, 1],
            transition: { duration: 0.12, ease: "easeInOut" },
          });
          scheduleBlink();
        },
        4000 + Math.random() * 2000,
      );
    };

    scheduleBlink();
    return () => {
      cancelled = true;
      window.clearTimeout(timeoutId);
      blinkControls.stop();
    };
  }, [blinkControls, shouldReduceMotion]);

  const handleFaceMouseMove = (event: MouseEvent<HTMLDivElement>) => {
    if (
      shouldReduceMotion ||
      !window.matchMedia("(min-width: 1024px) and (hover: hover)").matches
    ) {
      return;
    }

    const bounds = event.currentTarget.getBoundingClientRect();
    if (!bounds.width || !bounds.height) return;

    let x = ((event.clientX - bounds.left) / bounds.width - 0.5) * 12;
    let y = ((event.clientY - bounds.top) / bounds.height - 0.5) * 12;
    const distance = Math.hypot(x, y);
    if (distance > 6) {
      const scale = 6 / distance;
      x *= scale;
      y *= scale;
    }

    eyeX.set(x);
    eyeY.set(y);
  };

  const resetFaceEyes = () => {
    eyeX.set(0);
    eyeY.set(0);
  };

  return (
    <section
      id="proceso"
      className="bg-[#FFFBF5] px-6 py-24 md:px-12"
      aria-labelledby="process-heading"
    >
      <h2 id="process-heading" className="sr-only">
        Cómo trabajamos
      </h2>
      <div
        ref={gridRef}
        className="mx-auto grid max-w-[1440px] grid-cols-2 grid-rows-[repeat(4,190px)] gap-3 lg:grid-cols-4 lg:grid-rows-[repeat(3,200px)] lg:gap-4"
      >
        {steps.map((step, index) => {
          const isSmall = step.variant.startsWith("small");
          const isWide = step.variant === "wide";

          return (
            <article
              key={step.number}
              data-step={step.number}
              data-bento-reveal
              style={{ "--stagger": `${index * 80}ms` } as CSSProperties}
              className={`methodology-bento-card group relative min-w-0 overflow-hidden rounded-[24px] border border-black/[0.04] bg-[#FFFBF5] shadow-[0_2px_16px_rgba(0,0,0,0.04)] lg:rounded-[28px] ${
                isSmall
                  ? `flex flex-col justify-center p-4 lg:p-6 ${step.layout}`
                  : isWide
                    ? `flex flex-col items-start justify-center gap-1 p-3 lg:flex-row lg:items-center lg:gap-8 lg:px-8 lg:py-7 ${step.layout}`
                    : `flex flex-col justify-center p-4 lg:p-8 ${step.layout}`
              } ${step.variant === "small gradient" ? "bg-gradient-to-br from-[#FFFBF5] to-[#FFF1E8]" : ""}`}
            >
              {isSmall ? (
                <>
                  <span className="methodology-bento-number mb-1 font-heading text-4xl font-bold leading-none text-[#C45A3A] transition-colors duration-200 lg:mb-2 lg:text-4xl">
                    {step.number}
                  </span>
                  <h3 className="mb-1 font-heading text-xl font-medium leading-tight text-black lg:text-[22px]">
                    {step.name}
                  </h3>
                  <p className="font-sans text-[14px] leading-tight text-black/70 lg:text-[15px]">
                    {step.description}
                  </p>
                </>
              ) : isWide ? (
                <>
                  <div className="flex items-baseline gap-3 lg:shrink-0 lg:items-center lg:gap-6">
                    <span className="methodology-bento-number font-heading text-4xl font-bold leading-none text-[#C45A3A] transition-colors duration-200 lg:text-[44px]">
                      {step.number}
                    </span>
                    <h3 className="font-heading text-xl font-medium leading-tight text-black lg:text-[22px]">
                      {step.name}
                    </h3>
                  </div>
                  <p className="font-sans text-[15px] leading-tight text-black/70 lg:min-w-0 lg:leading-relaxed">
                    {step.description}
                  </p>
                </>
              ) : (
                <>
                  <div className="mb-1 flex items-baseline gap-3 lg:mb-3 lg:gap-4">
                    <span className="methodology-bento-number font-heading text-5xl font-bold leading-none text-[#C45A3A] transition-colors duration-200 lg:text-[56px]">
                      {step.number}
                    </span>
                    <h3 className="font-heading text-xl font-medium leading-tight text-black lg:text-2xl">
                      {step.name}
                    </h3>
                  </div>
                  <p className="font-sans text-[15px] leading-tight text-black/70 lg:leading-relaxed">
                    {step.description}
                  </p>
                </>
              )}
            </article>
          );
        })}

        <div
          aria-hidden="true"
          data-carita
          data-bento-reveal
          style={{ "--stagger": "320ms" } as CSSProperties}
          className="methodology-bento-face relative col-start-2 row-start-2 row-span-2 overflow-hidden rounded-[24px] bg-[radial-gradient(ellipse_at_55%_45%,#202020_0%,#0A0A0A_68%,#000_100%)] lg:col-start-4 lg:row-start-1 lg:row-span-2 lg:rounded-[28px]"
          onMouseMove={handleFaceMouseMove}
          onMouseLeave={resetFaceEyes}
        >
          <div className="methodology-bento-sphere">
            <motion.div
              className="methodology-bento-eye methodology-bento-eye-left"
              animate={blinkControls}
              style={{ x: eyeX, y: eyeY }}
            />
            <motion.div
              className="methodology-bento-eye methodology-bento-eye-right"
              animate={blinkControls}
              style={{ x: eyeX, y: eyeY }}
            />
          </div>
        </div>
      </div>
      <style>{`
        .methodology-bento-card,
        .methodology-bento-face {
          opacity: 1;
        }

        .methodology-bento-card.is-visible,
        .methodology-bento-face.is-visible {
          animation: methodology-bento-enter 420ms var(--ease-standard) both;
          animation-delay: var(--stagger, 0ms);
        }

        .methodology-bento-sphere {
          position: absolute;
          left: -10%;
          bottom: -20%;
          width: 120%;
          aspect-ratio: 1;
          overflow: hidden;
          border-radius: 50%;
          background: radial-gradient(circle at 30% 30%, #fff 0%, #e8e8e8 40%, #c8c8c8 70%, #a0a0a0 100%);
          box-shadow: inset 0 -20px 40px rgba(0, 0, 0, 0.3), inset 0 10px 20px rgba(255, 255, 255, 0.8);
        }

        .methodology-bento-eye {
          position: absolute;
          width: 18%;
          height: 28%;
          border-radius: 999px;
          background: #1a1a1a;
          rotate: 20deg;
        }

        .methodology-bento-eye-left {
          top: 28%;
          right: 48%;
        }

        .methodology-bento-eye-right {
          top: 22%;
          right: 28%;
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
