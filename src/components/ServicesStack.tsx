import { ArrowRight } from "lucide-react";
import { waLink } from "@/data/projects";

interface ServiceItem {
  step: string;
  title: string;
  description: string;
  gridSpan: string;
  isDark?: boolean;
}

// Array de servicios con copys en tarjeta clara/oscura alternada
const services: ServiceItem[] = [
  {
    step: "01",
    title: "Sitios web & Landing Pages",
    description: "Una web que no explica todo, dice lo justo primero.",
    gridSpan: "col-span-12 md:col-span-6 lg:col-span-4",
    isDark: false,
  },
  {
    step: "02",
    title: "Rediseño de sitios y productos existentes",
    description: "Encontramos dónde se traba el usuario y sacamos esa fricción del medio.",
    gridSpan: "col-span-12 md:col-span-6 lg:col-span-4",
    isDark: true,
  },
  {
    step: "03",
    title: "Implementación de interfaces",
    description: "La interfaz ya diseñada, funcionando rápido y sin depender de plantillas.",
    gridSpan: "col-span-12 md:col-span-12 lg:col-span-4",
    isDark: false,
  },
  {
    step: "04",
    title: "Web Apps, catálogos & herramientas internas",
    description: "Herramientas para mostrar, gestionar o vender sin depender de otra persona para actualizarlas.",
    gridSpan: "col-span-12 md:col-span-6 lg:col-span-6",
    isDark: true,
  },
  {
    step: "05",
    title: "MVP",
    description: "Antes de construir todo, decidimos qué parte hay que construir primero.",
    gridSpan: "col-span-12 md:col-span-6 lg:col-span-6",
    isDark: false,
  },
];

// Patrón de Halftone Editorial Opción A: Offset de Imprenta y Micro-Cruces con máscaras asimétricas deliberadas
function HalftonePattern({ isDark = false }: { isDark?: boolean }) {
  const dotColor = isDark ? "#B5502D" : "#141312";
  
  // Máscaras de opacidad diferenciadas según la orientación del panel
  const maskStyle = isDark
    ? {
        // Tarjeta oscura: Degradado diagonal en ángulo de imprenta a 135 grados
        WebkitMaskImage: "linear-gradient(135deg, black 0%, black 35%, transparent 80%)",
        maskImage: "linear-gradient(135deg, black 0%, black 35%, transparent 80%)",
      }
    : {
        // Tarjeta clara: Viñeta editorial asimétrica proyectada desde la esquina superior derecha (85% 15%)
        WebkitMaskImage: "radial-gradient(circle at 85% 15%, black 0%, black 25%, transparent 75%)",
        maskImage: "radial-gradient(circle at 85% 15%, black 0%, black 25%, transparent 75%)",
      };

  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 w-full h-full pointer-events-none opacity-35 group-hover:opacity-75 group-hover:scale-[1.03] transition-all duration-700 ease-out"
      style={{
        backgroundImage: `radial-gradient(circle, ${dotColor} 1.4px, transparent 1.4px), radial-gradient(circle at 50% 50%, ${dotColor} 0.8px, transparent 0.8px)`,
        backgroundSize: "12px 12px, 24px 24px",
        backgroundPosition: "0 0, 6px 6px",
        ...maskStyle,
      }}
    />
  );
}

export function ServicesStack() {
  return (
    <section className="relative pt-16 md:pt-24 pb-20 md:pb-28 overflow-hidden bg-[#FBFBFA]" id="servicios">
      <div className="container-trama relative z-10 px-6 md:px-12 lg:px-16">
        {/* Header con titulares alineados al peso de fuente editorial (font-normal / font-medium) */}
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-8 mb-20 md:mb-24">
          <div>
            <span className="font-sans text-xs font-medium uppercase tracking-widest text-[#141312]/70 block mb-4">
              SERVICIOS
            </span>
            <h2 className="font-heading text-3xl md:text-5xl lg:text-6xl font-normal tracking-tight text-[#141312] leading-[1.1] max-w-2xl">
              Cinco formas de resolver un mismo problema: qué necesita decir tu negocio.
            </h2>
          </div>

          <p className="max-w-sm font-sans text-[#141312]/80 text-sm md:text-base leading-relaxed md:pt-10">
            Cada proyecto entra por un lugar distinto. Elegís según lo que ya tenés y lo que te falta construir.
          </p>
        </div>

        {/* Bento Grid con amplio espacio de separación (gap-8 lg:gap-10) y tarjetas holgadas (p-9 md:p-12) */}
        <div className="grid grid-cols-12 gap-8 lg:gap-10">
          {services.map((service) => {
            const isDark = service.isDark;

            return (
              <div
                key={service.step}
                className={`${service.gridSpan} relative group overflow-hidden rounded-none p-9 md:p-12 border transition-all duration-500 flex flex-col justify-between min-h-[390px] ${
                  isDark
                    ? "bg-[#141312] text-[#FBFBFA] border-[#141312] hover:border-[#141312]/80"
                    : "bg-white text-[#141312] border-[#141312]/25 backdrop-blur-xl hover:border-[#141312]/40"
                }`}
              >
                {/* Patrón Halftone CSS estático por máscara con efecto de escala al pasar el cursor */}
                <HalftonePattern isDark={isDark} />

                {/* Fila superior: Badge de número en font-medium monoespaciado (sin negritas sintéticas) + Botón circular de WhatsApp */}
                <div className="relative z-10 flex items-center justify-between">
                  <span
                    className={`font-mono text-xs font-medium tracking-widest uppercase ${
                      isDark ? "text-[#FBFBFA]/70" : "text-[#141312]/70"
                    }`}
                  >
                    {service.step}
                  </span>

                  <a
                    href={waLink(`Hola, quiero consultar sobre: ${service.title}.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={service.title}
                    className={`w-11 h-11 rounded-full flex items-center justify-center shadow-md hover:scale-110 transition-transform duration-300 ${
                      isDark
                        ? "bg-[#FBFBFA] text-[#141312]"
                        : "bg-[#141312] text-[#FBFBFA]"
                    }`}
                  >
                    <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:rotate-45" />
                  </a>
                </div>

                {/* Bloque de contenido de la tarjeta con separación holgada */}
                <div className="relative z-10 mt-auto pt-10 md:pt-12 space-y-4">
                  <h3
                    className={`font-heading text-2xl md:text-3xl font-medium tracking-tight leading-snug ${
                      isDark ? "text-[#FBFBFA]" : "text-[#141312]"
                    }`}
                  >
                    {service.title}
                  </h3>

                  <p
                    className={`font-sans text-xs md:text-sm leading-relaxed max-w-[95%] font-medium ${
                      isDark ? "text-[#FBFBFA]/80" : "text-[#141312]/80"
                    }`}
                  >
                    {service.description}
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
