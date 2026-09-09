import { useState } from "react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { waLink } from "@/data/projects";

interface ServiceItem {
  step: string;
  title: string;
  description: string;
  badge: string;
  bgColor: string;
  textColor: string;
  badgeBg: string;
}

// Array de los 5 servicios con paleta adaptada al sistema de diseño HeyTrama
const services: ServiceItem[] = [
  {
    step: "01",
    title: "Sitios web & Landing Pages",
    description: "Una web que no explica todo, dice lo justo primero.",
    badge: "Web & Digital",
    bgColor: "bg-surface text-foreground border-border/60",
    textColor: "text-foreground",
    badgeBg: "bg-foreground/5 text-foreground border-foreground/10",
  },
  {
    step: "02",
    title: "Rediseño de sitios y productos existentes",
    description: "Encontramos dónde se traba el usuario y sacamos esa fricción del medio.",
    badge: "UX & Rediseño",
    /* Tarjeta en tono oscuro tokenizado según el sistema de diseño */
    bgColor: "bg-foreground text-background border-white/10",
    textColor: "text-background",
    badgeBg: "bg-white/10 text-background border-white/15",
  },
  {
    step: "03",
    title: "Implementación de interfaces",
    description: "La interfaz ya diseñada, funcionando rápido y sin depender de plantillas.",
    badge: "Frontend & Code",
    bgColor: "bg-[hsl(var(--editorial-accent))] text-white border-transparent",
    textColor: "text-white",
    badgeBg: "bg-white/15 text-white border-white/20",
  },
  {
    step: "04",
    title: "Web Apps, catálogos & herramientas internas",
    description: "Herramientas para mostrar, gestionar o vender sin depender de otra persona.",
    badge: "Apps & Catálogos",
    /* Tarjeta en tono oscuro tokenizado según el sistema de diseño */
    bgColor: "bg-foreground text-background border-white/10",
    textColor: "text-background",
    badgeBg: "bg-white/10 text-background border-white/15",
  },
  {
    step: "05",
    title: "MVP",
    description: "Antes de construir todo, decidimos qué parte hay que construir primero.",
    badge: "Estrategia & MVP",
    bgColor: "bg-surface text-foreground border-border/60",
    textColor: "text-foreground",
    badgeBg: "bg-foreground/5 text-foreground border-foreground/10",
  },
];

export function ServicesStack() {
  // Estado para controlar el índice de la tarjeta activa en el mazo apilado
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % services.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + services.length) % services.length);
  };

  return (
    /* Sección Servicios en ambiente oscuro tokenizado con bg-foreground e imagen servicios-.avif */
    <section className="relative pt-16 md:pt-24 pb-20 md:pb-28 overflow-hidden bg-foreground bg-[url('/servicios-.avif')] bg-cover bg-center text-background" id="servicios">
      <div className="container-trama relative z-10 px-6 md:px-12 lg:px-16">
        <div className="grid grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Columna Izquierda: Píldora de categoría y Titular principal en texto blanco */}
          <div className="col-span-12 lg:col-span-4 space-y-6">
            {/* Píldora de categoría con borde y texto en blanco */}
            <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm text-micro font-mono font-medium text-white tracking-wider">
              SERVICIOS Y SOLUCIONES
            </div>

            {/* Titular H2 principal en blanco */}
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight leading-[1.12] text-white">
              Cinco formas de resolver un mismo problema.
            </h2>

            {/* Controles manuales de navegación para desktop en botones blancos */}
            <div className="hidden lg:flex items-center gap-3 pt-4">
              <button
                type="button"
                onClick={handlePrev}
                aria-label="Servicio anterior"
                className="w-11 h-11 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all duration-300"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                type="button"
                onClick={handleNext}
                aria-label="Siguiente servicio"
                className="w-11 h-11 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all duration-300"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Columna Central: Mazo apilado de tarjetas (Stacked Card Deck) */}
          <div className="col-span-12 lg:col-span-5 flex flex-col items-center justify-center">
            {/* Contenedor relativo para apilar las tarjetas en cascada */}
            <div className="relative w-full max-w-md h-[440px] sm:h-[460px] flex items-center justify-center">
              {services.map((service, index) => {
                // Cálculo de la distancia relativa con respecto a la tarjeta activa
                const offset = (index - activeIndex + services.length) % services.length;

                // Estilos de transformación 3D para simular el mazo de cartas apilado
                let style: React.CSSProperties = {};

                if (offset === 0) {
                  style = {
                    transform: "translateY(0px) scale(1)",
                    zIndex: 30,
                    opacity: 1,
                  };
                } else if (offset === 1) {
                  style = {
                    transform: "translateY(-18px) scale(0.94)",
                    zIndex: 20,
                    opacity: 0.75,
                  };
                } else if (offset === 2) {
                  style = {
                    transform: "translateY(-34px) scale(0.88)",
                    zIndex: 10,
                    opacity: 0.45,
                  };
                } else {
                  style = {
                    transform: "translateY(-48px) scale(0.82)",
                    zIndex: 0,
                    opacity: 0,
                    pointerEvents: "none",
                  };
                }

                return (
                  <div
                    key={service.step}
                    onClick={() => setActiveIndex(index)}
                    style={style}
                    className={`absolute inset-0 w-full h-full rounded-[28px] p-8 sm:p-10 border shadow-2xl transition-all duration-500 ease-out cursor-pointer flex flex-col justify-between ${service.bgColor}`}
                  >
                    {/* Encabezado de la tarjeta: Píldora de badge + WhatsApp CTA */}
                    <div className="flex items-center justify-between">
                      <div className={`px-3 py-1 rounded-full text-tag font-mono font-medium border ${service.badgeBg}`}>
                        {service.step} — {service.badge}
                      </div>

                      <a
                        href={waLink(`Hola, quiero consultar sobre: ${service.title}.`)}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        aria-label={service.title}
                        className={`w-10 h-10 rounded-full flex items-center justify-center transition-transform duration-300 hover:scale-110 ${
                          service.bgColor.includes("bg-foreground")
                            ? "bg-white text-foreground"
                            : service.bgColor.includes("bg-[hsl(var(--editorial-accent))]")
                            ? "bg-white text-[hsl(var(--editorial-accent))]"
                            : "bg-foreground text-white"
                        }`}
                      >
                        <ArrowRight className="w-4 h-4" />
                      </a>
                    </div>

                    {/* Contenido principal de la tarjeta */}
                    <div className="space-y-4 my-auto">
                      <h3 className={`font-heading text-2xl sm:text-3xl font-medium tracking-tight leading-snug ${service.textColor}`}>
                        {service.title}
                      </h3>
                      <p className={`font-sans text-xs sm:text-sm leading-relaxed font-normal opacity-90 ${service.textColor}`}>
                        {service.description}
                      </p>
                    </div>

                    {/* Footer de la tarjeta con nombre del estudio */}
                    <div className="pt-4 border-t border-current/10 flex items-center justify-between font-sans text-micro uppercase tracking-wider opacity-70">
                      <span>HEYTRAMA STUDIO</span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Barra de indicadores de paginación por puntos/deslizador con puntos blancos */}
            <div className="flex items-center justify-center gap-2 mt-8">
              {services.map((_, i) => {
                const isCurrent = i === activeIndex;
                return (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setActiveIndex(i)}
                    aria-label={`Ver servicio ${i + 1}`}
                    className={`transition-all duration-300 rounded-full ${
                      isCurrent
                        ? "w-8 h-2 bg-[hsl(var(--editorial-accent))]"
                        : "w-2 h-2 bg-white/30 hover:bg-white/70"
                    }`}
                  />
                );
              })}
            </div>
          </div>

          {/* Columna Derecha: Texto explicativo secundario en color blanco */}
          <div className="col-span-12 lg:col-span-3 pt-6 lg:pt-36">
            <p className="font-sans text-white/90 text-sm sm:text-base leading-relaxed">
              Cada proyecto entra por un lugar distinto. Elegís según lo que ya tenés y lo que te falta construir.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
