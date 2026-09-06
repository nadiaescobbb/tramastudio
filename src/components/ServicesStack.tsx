import { ArrowRight } from "lucide-react";
import { waLink } from "@/data/projects";

interface ServiceItem {
  step: string;
  title: string;
  description: string;
  gridSpan: string;
  gradientBg: string;
  visualType: "stacked-cards" | "interactive-sphere" | "frontend-structure" | "app-window" | "strategy-sphere";
}

const services: ServiceItem[] = [
  {
    step: "01",
    title: "Sitios web & Landing Pages",
    description: "Sitios pensados para comunicar con claridad, construir confianza y convertir visitas en oportunidades.",
    gridSpan: "col-span-12 md:col-span-6 lg:col-span-4",
    gradientBg: "from-[#111111]/[0.04] via-[#111111]/[0.02] to-transparent",
    visualType: "stacked-cards",
  },
  {
    step: "02",
    title: "Rediseño UX/UI",
    description: "Revisamos lo que ya tenés, detectamos qué genera fricción y rediseñamos la experiencia para hacerla más simple y efectiva.",
    gridSpan: "col-span-12 md:col-span-6 lg:col-span-4",
    gradientBg: "from-[#111111]/[0.03] via-[#111111]/[0.01] to-transparent",
    visualType: "interactive-sphere",
  },
  {
    step: "03",
    title: "Desarrollo Frontend a medida",
    description: "Convertimos una experiencia diseñada en una interfaz rápida, responsive y lista para producción.",
    gridSpan: "col-span-12 md:col-span-12 lg:col-span-4",
    gradientBg: "from-[#111111]/[0.04] via-[#111111]/[0.02] to-transparent",
    visualType: "frontend-structure",
  },
  {
    step: "04",
    title: "Web Apps & Catálogos",
    description: "Desarrollamos herramientas digitales para mostrar, gestionar o vender productos y servicios: catálogos, sistemas de turnos, dashboards y otras experiencias interactivas.",
    gridSpan: "col-span-12 md:col-span-6 lg:col-span-6",
    gradientBg: "from-[#111111]/[0.03] via-[#111111]/[0.01] to-transparent",
    visualType: "app-window",
  },
  {
    step: "05",
    title: "Estrategia & MVPs",
    description: "De una idea inicial a un producto validable. Definimos qué construir primero, diseñamos la experiencia y desarrollamos una primera versión funcional.",
    gridSpan: "col-span-12 md:col-span-6 lg:col-span-6",
    gradientBg: "from-[#111111]/[0.04] via-[#111111]/[0.02] to-transparent",
    visualType: "strategy-sphere",
  },
];

function Card3DVisual({ type }: { type: ServiceItem["visualType"] }) {
  if (type === "stacked-cards") {
    return (
      <div className="absolute -right-8 -bottom-8 w-64 h-64 pointer-events-none opacity-85 group-hover:scale-105 transition-transform duration-500">
        <div className="relative w-full h-full">
          {[
            "bg-[#111111]/10 border-[#111111]/20",
            "bg-[#111111]/15 border-[#111111]/25",
            "bg-[#111111]/20 border-[#111111]/30",
            "bg-[#111111]/30 border-[#111111]/40",
            "bg-[#111111]/50 border-[#111111]/60",
            "bg-[#111111]/80 border-[#111111]",
          ].map((styleClass, i) => (
            <div
              key={i}
              className={`absolute rounded-xl border backdrop-blur-md shadow-md ${styleClass}`}
              style={{
                width: "70px",
                height: "140px",
                right: `${i * 22 + 20}px`,
                bottom: `${i * 10 + 10}px`,
                transform: "rotate(-25deg) skewY(-10deg)",
                zIndex: 6 - i,
              }}
            />
          ))}
        </div>
      </div>
    );
  }

  if (type === "interactive-sphere") {
    return (
      <div className="absolute -right-4 -bottom-4 w-60 h-60 pointer-events-none opacity-85 group-hover:scale-105 transition-transform duration-500">
        <div className="relative w-full h-full flex items-center justify-center">
          <div className="w-32 h-32 rounded-full bg-gradient-to-br from-[#111111]/20 via-[#111111]/40 to-[#111111]/80 backdrop-blur-2xl border border-[#111111]/30 shadow-2xl relative z-10 flex items-center justify-center">
            <div className="w-12 h-12 rounded-full bg-[#FBFBFA]/40 blur-md" />
          </div>
        </div>
      </div>
    );
  }

  if (type === "frontend-structure") {
    return (
      <div className="absolute -right-4 -bottom-6 w-60 h-64 pointer-events-none opacity-85 group-hover:scale-105 transition-transform duration-500">
        <div className="relative w-full h-full flex items-center justify-center">
          <div className="w-40 h-48 rounded-3xl bg-gradient-to-tr from-[#111111]/10 via-[#111111]/30 to-[#111111]/70 backdrop-blur-xl border border-[#111111]/30 shadow-2xl relative z-10 transform rotate-6">
            <div className="w-20 h-16 rounded-t-full border-4 border-[#111111]/40 mx-auto -mt-8 bg-transparent" />
            <div className="absolute inset-0 bg-gradient-to-b from-[#FBFBFA]/20 to-transparent rounded-3xl" />
          </div>
        </div>
      </div>
    );
  }

  if (type === "app-window") {
    return (
      <div className="absolute -right-8 -bottom-8 w-64 h-52 pointer-events-none opacity-85 group-hover:scale-105 transition-transform duration-500">
        <div className="relative w-full h-full">
          <div className="w-56 h-44 rounded-2xl bg-gradient-to-br from-[#FBFBFA] via-[#FBFBFA]/90 to-[#111111]/10 backdrop-blur-xl border border-[#111111]/20 shadow-2xl p-4 relative z-10 transform -rotate-6">
            <div className="flex gap-2 mb-4">
              <div className="w-2.5 h-2.5 rounded-full bg-[#111111]/40" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#111111]/25" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#111111]/15" />
            </div>
            <div className="font-mono font-bold text-2xl text-[#111111]/30 select-none">APP</div>
            <div className="space-y-2 mt-2">
              <div className="w-32 h-2.5 rounded bg-[#111111]/15" />
              <div className="w-24 h-2.5 rounded bg-[#111111]/10" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (type === "strategy-sphere") {
    return (
      <div className="absolute -right-4 -bottom-4 w-60 h-56 pointer-events-none opacity-85 group-hover:scale-105 transition-transform duration-500">
        <div className="relative w-full h-full flex items-center justify-center">
          <div className="w-28 h-28 rounded-full bg-gradient-to-tr from-[#111111]/30 via-[#111111]/50 to-[#111111]/80 backdrop-blur-2xl border border-[#111111]/40 shadow-2xl relative z-10 flex items-center justify-center">
            <div className="w-10 h-10 rounded-full bg-[#FBFBFA]/50 blur-md" />
          </div>
          <div className="absolute bottom-2 right-0 w-52 h-20 rounded-[50%] bg-gradient-to-r from-[#111111]/20 via-[#111111]/10 to-transparent blur-md transform -rotate-6" />
        </div>
      </div>
    );
  }

  return null;
}

export function ServicesStack() {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden bg-[#FBFBFA]" id="servicios">
      <div className="container-trama relative z-10 px-6 md:px-12 lg:px-16">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-8 mb-16 md:mb-20">
          <div>
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#111111]/70 block mb-3">
              SERVICIOS
            </span>
            <h2 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-[#111111] leading-[1.05]">
              Productos digitales <br />
              <span className="font-serif italic font-normal text-[#111111]">
                que tienen sentido.
              </span>
            </h2>
          </div>

          <p className="max-w-sm font-sans text-[#111111]/80 text-sm md:text-base leading-relaxed md:pt-10">
            Primero ordenamos lo que tu negocio necesita. Después diseñamos cómo mostrarlo y construimos la experiencia.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-12 gap-6 lg:gap-8">
          {services.map((service) => (
            <div
              key={service.step}
              className={`${service.gridSpan} relative group overflow-hidden rounded-[2rem] p-8 md:p-10 border border-[#111111]/15 bg-[#FBFBFA] backdrop-blur-xl shadow-sm hover:shadow-xl hover:border-[#111111]/30 transition-all duration-500 flex flex-col justify-between min-h-[360px]`}
            >
              {/* Soft Monochromatic Gradient backdrop */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${service.gradientBg} opacity-60 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}
              />

              {/* 3D Visual Illustration */}
              <Card3DVisual type={service.visualType} />

              {/* Step Number & Content */}
              <div className="relative z-10">
                <span className="font-mono text-xs font-bold text-[#111111]/60 block mb-4">
                  {service.step}
                </span>

                <h3 className="font-heading text-2xl md:text-3xl font-bold tracking-tight text-[#111111] max-w-[80%] leading-snug mb-3">
                  {service.title}
                </h3>

                <p className="font-sans text-xs md:text-sm text-[#111111]/75 max-w-[75%] leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Bottom Action Button */}
              <div className="relative z-10 pt-4">
                <a
                  href={waLink(`Hola, quiero consultar sobre: ${service.title}.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={service.title}
                  className="w-11 h-11 rounded-full bg-[#111111] text-[#FBFBFA] flex items-center justify-center shadow-md hover:scale-110 transition-transform duration-300"
                >
                  <ArrowRight className="w-5 h-5 text-[#FBFBFA]" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
