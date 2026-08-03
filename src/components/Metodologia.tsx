import { useEffect, useRef, useState } from "react";

const steps = [
  {
    number: "01",
    title: "Entender",
    text: "Antes de diseñar, preguntamos qué le impide al negocio venderse mejor hoy.",
  },
  {
    number: "02",
    title: "Comunicar",
    text: "La estrategia se traduce en jerarquía: qué tiene que entender el usuario primero, segundo y último. Recién ahí se le da forma visual.",
  },
  {
    number: "03",
    title: "Construir",
    text: "El código pone a prueba esa decisión: si carga rápido, si funciona en cualquier pantalla, si no se rompe cuando el negocio crece.",
  },
  {
    number: "04",
    title: "Acompañar",
    text: "El trabajo no termina con la publicación: se mide qué funciona y qué no, y el sitio se actualiza a medida que el negocio cambia.",
  },
];

export default function Metodologia() {
  const [active, setActive] = useState(0);
  const refs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = refs.current.findIndex((el) => el === entry.target);
            if (index !== -1) setActive(index);
          }
        });
      },
      { rootMargin: "-35% 0px -35% 0px", threshold: 0 }
    );

    refs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative z-10 bg-background py-24 md:py-36 pb-36 md:pb-52" id="proceso">
      <div className="container-trama px-6 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Sticky Left Column */}
          <div className="hidden md:block md:col-span-5 lg:col-span-5 sticky top-36 self-start z-10 pl-4 lg:pl-8">
            <p className="text-xs tracking-widest uppercase text-charcoal/50 mb-6 font-mono">
              Nuestro proceso
            </p>
            <ul className="space-y-4">
              {steps.map((step, i) => (
                <li
                  key={step.number}
                  className={`text-3xl font-serif transition-opacity duration-300 ${
                    i === active ? "opacity-100" : "opacity-30"
                  }`}
                >
                  <span className="font-mono text-sm mr-3 align-middle">
                    {step.number}
                  </span>
                  {step.title}
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column Scrolling Steps */}
          <div className="md:col-span-7 lg:col-span-6 lg:col-start-7 space-y-[22vh]">
            {steps.map((step, i) => (
              <div
                key={step.number}
                ref={(el) => (refs.current[i] = el)}
                className="max-w-md"
              >
                <p className="md:hidden font-mono text-sm text-charcoal/50 mb-2">
                  {step.number}
                </p>
                <h3 className="text-2xl font-serif italic mb-4">{step.title}</h3>
                <p className="text-base text-charcoal/70 leading-relaxed">
                  {step.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
