import { useState } from "react";
import { Reveal } from "@/components/Reveal";

const steps = [
  {
    number: "01",
    label: "PASO 01",
    concept: "Entender",
    title: "Definir qué tiene que resolver el producto.",
    text: "Nos metemos en el negocio, el problema y las necesidades de las personas que van a usarlo. Antes de diseñar, necesitamos saber qué estamos intentando resolver y por qué.",
  },
  {
    number: "02",
    label: "PASO 02",
    concept: "Estructurar",
    title: "Ordenar la experiencia antes de construirla.",
    text: "Definimos qué necesita encontrar, entender y hacer el usuario. Organizamos la información, los contenidos y los recorridos antes de convertirlos en pantallas.",
  },
  {
    number: "03",
    label: "PASO 03",
    concept: "Construir",
    title: "Convertir la idea en un producto que funciona.",
    text: "Diseñamos la interfaz y desarrollamos el producto para que sea rápido, claro y confiable en el uso real.",
  },
  {
    number: "04",
    label: "PASO 04",
    concept: "Evolucionar",
    title: "Publicar es el comienzo, no el final.",
    text: "Observamos cómo funciona el producto una vez que está en uso y hacemos los ajustes necesarios a medida que aparecen nuevas necesidades.",
  },
];

export default function Metodologia() {
  // El primer paso ("01" - Entender) se encuentra activo por defecto para mantener la vista completa al ingresar
  const [activeStep, setActiveStep] = useState<string>("01");

  return (
    <section className="relative z-10 bg-background pt-16 md:pt-24 pb-16 md:pb-24 border-b border-border/40 scroll-mt-36" id="proceso">
      <div className="container-trama px-6 md:px-12 lg:px-16">
        {/* Header de la sección: H2 principal con espacio editorial amplio */}
        <div className="mb-16 md:mb-20">
          <Reveal>
            <h2 className="font-heading text-3xl md:text-5xl tracking-tight leading-snug text-slate-900 max-w-2xl">
              Pensamos primero qué tiene que <span className="font-serif italic font-normal text-[hsl(var(--editorial-accent))]">resolver</span>. Después, cómo construirlo.
            </h2>
          </Reveal>
        </div>

        {/* Layout Desktop (≥768px): Réplica exacta de la referencia con bordes superiores horizontales y espaciado holgado */}
        <div className="hidden md:flex flex-row items-start gap-10 lg:gap-14">
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
