import { useState } from "react";
import { Reveal } from "@/components/Reveal";

const steps = [
  {
    number: "01",
    label: "PASO 01",
    concept: "Entender",
    title: "Decidir qué merece resolverse.",
    text: "Un pedido casi nunca es el problema completo. Antes de diseñar, buscamos qué hay detrás — qué necesita resolverse de verdad, y para quién.",
  },
  {
    number: "02",
    label: "PASO 02",
    concept: "Estructurar",
    title: "Decidir qué va primero y qué sobra.",
    text: "Ordenamos la información antes de pensar en pantallas: qué necesita ver la persona primero, qué puede esperar, y qué directamente no hace falta decir.",
  },
  {
    number: "03",
    label: "PASO 03",
    concept: "Construir",
    title: "Diseño y desarrollo como una sola decisión.",
    text: "No hay traspaso entre quien diseña y quien programa: la interfaz y el código se deciden juntos, para que lo diseñado sea lo que realmente funciona en uso real.",
  },
  {
    number: "04",
    label: "PASO 04",
    concept: "Evolucionar",
    title: "Publicar no cierra el trabajo.",
    text: "Si el proyecto lo necesita, seguimos ajustando con lo que aparece después del lanzamiento — no es un paso automático en todos los casos, es una posibilidad abierta.",
  },
];

export default function Metodologia() {
  // El primer paso ("01" - Entender) se encuentra activo por defecto para mantener la vista completa al ingresar
  const [activeStep, setActiveStep] = useState<string>("01");

  return (
    <section className="relative z-10 bg-background pt-16 md:pt-24 pb-16 md:pb-24 scroll-mt-36" id="proceso">
      {/* Sección Metodología sin línea divisoria inferior (border-b eliminada) */}
      <div className="container-trama px-6 md:px-12 lg:px-16">
        {/* Header de la sección: H2 principal con espacio editorial amplio y titular plano según la regla del skill frontend-design */}
        <div className="mb-16 md:mb-20">
          <Reveal>
            <h2 className="font-heading text-3xl md:text-5xl tracking-tight leading-snug text-slate-900 max-w-2xl font-normal">
              Pensamos primero qué tiene que resolver. Después, cómo construirlo.
            </h2>
          </Reveal>
        </div>

        {/* Layout Desktop (≥768px): Con min-height reservado de forma constante (min-h-[240px] lg:min-h-[250px]) e items-stretch para prevenir cualquier salto o rebote de la sección de Servicios al alternar el paso activo (CLS = 0) */}
        <div className="hidden md:flex flex-row items-stretch min-h-[240px] lg:min-h-[250px] gap-10 lg:gap-14">
          {steps.map((step) => {
            const isActive = activeStep === step.number;
            // Remover el cero inicial para mostrar dígitos individuales (1, 2, 3, 4) como en la referencia
            const displayNumber = step.number.replace(/^0/, "");

            return (
              <div
                key={step.number}
                onMouseEnter={() => setActiveStep(step.number)}
                onFocus={() => setActiveStep(step.number)}
                tabIndex={0}
                aria-expanded={isActive}
                aria-label={`Paso ${displayNumber}: ${step.concept}`}
                className={`group relative transition-all duration-500 ease-[var(--ease-standard,cubic-bezier(0.2,0,0,1))] border-t-2 pt-8 lg:pt-10 focus:outline-none ${
                  isActive
                    ? "border-[hsl(var(--editorial-accent))] flex-[2.4]"
                    : "border-slate-200 group-hover:border-[hsl(var(--editorial-accent))]/50 flex-1"
                }`}
              >
                <div className="flex items-start gap-5 lg:gap-7">
                  {/* Número grande en fuente Orlean (font-mono font-medium) para evitar negrita sintética y mantener consistencia con los tokens del sitio */}
                  <span
                    className={`font-mono font-medium text-7xl lg:text-8xl xl:text-9xl tracking-tighter transition-colors duration-300 select-none leading-none ${
                      isActive
                        ? "text-[hsl(var(--editorial-accent))]"
                        : "text-slate-300 group-hover:text-[hsl(var(--editorial-accent))]/70"
                    }`}
                  >
                    {displayNumber}
                  </span>

                  {/* Contenido expansible inline: Mantiene un ancho estable (w-full) para evitar que max-w-0 fuerce el texto a word-wrap de 0px e infle la altura del layout */}
                  <div
                    className={`transition-all duration-500 ease-[var(--ease-standard,cubic-bezier(0.2,0,0,1))] overflow-hidden w-full ${
                      isActive
                        ? "opacity-100 max-h-96 translate-x-0"
                        : "opacity-0 max-h-0 -translate-x-2 pointer-events-none"
                    }`}
                  >
                    <span className="font-serif italic font-normal text-lg md:text-xl text-[hsl(var(--editorial-accent))] block mb-1">
                      {step.concept}
                    </span>
                    <h3 className="font-heading text-lg md:text-xl text-slate-900 font-medium tracking-tight leading-snug mb-2">
                      {step.title}
                    </h3>
                    <p className="font-sans text-xs md:text-sm text-slate-600 leading-relaxed">
                      {step.text}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Layout Mobile (<768px): Acordeón vertical en dígitos simples con font-mono font-medium */}
        <div className="flex md:hidden flex-col divide-y divide-border border-t border-border">
          {steps.map((step) => {
            const isOpen = activeStep === step.number;
            const displayNumber = step.number.replace(/^0/, "");
            const contentId = `proceso-step-content-${step.number}`;
            const triggerId = `proceso-step-trigger-${step.number}`;

            return (
              <div key={step.number} className="py-4">
                <button
                  id={triggerId}
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={contentId}
                  onClick={() => setActiveStep(isOpen ? "" : step.number)}
                  className="w-full flex items-center justify-between py-2 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--editorial-accent))] rounded-sm transition-colors"
                >
                  <div className="flex items-baseline gap-4">
                    <span
                      className={`font-mono text-3xl font-medium tracking-tighter transition-colors duration-300 ${
                        isOpen
                          ? "text-[hsl(var(--editorial-accent))]"
                          : "text-slate-300"
                      }`}
                    >
                      {displayNumber}
                    </span>
                    <span
                      className={`font-serif italic font-normal text-xl transition-colors duration-300 ${
                        isOpen
                          ? "text-[hsl(var(--editorial-accent))]"
                          : "text-slate-900"
                      }`}
                    >
                      {step.concept}
                    </span>
                  </div>

                  <span className="font-mono text-lg text-slate-400 pl-2 select-none">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                <div
                  id={contentId}
                  role="region"
                  aria-labelledby={triggerId}
                  className={`grid transition-[grid-template-rows,opacity] duration-300 ease-[var(--ease-standard,cubic-bezier(0.2,0,0,1))] ${
                    isOpen ? "grid-rows-[1fr] opacity-100 pt-3 pb-2" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden space-y-2 pl-10">
                    <h3 className="font-heading text-base font-medium text-slate-900 tracking-tight leading-snug">
                      {step.title}
                    </h3>
                    <p className="font-sans text-xs text-slate-600 leading-relaxed font-normal">
                      {step.text}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
