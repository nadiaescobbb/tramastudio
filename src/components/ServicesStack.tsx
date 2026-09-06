import { useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";
import { waLink } from "@/data/projects";

interface ServiceItem {
  step: string;
  title: string;
  description: string;
  gridSpan: string;
  isDark?: boolean;
}

const services: ServiceItem[] = [
  {
    step: "01",
    title: "Sitios web & Landing Pages",
    description: "Sitios pensados para comunicar con claridad, construir confianza y convertir visitas en oportunidades.",
    gridSpan: "col-span-12 md:col-span-6 lg:col-span-4",
  },
  {
    step: "02",
    title: "Rediseño UX/UI",
    description: "Revisamos lo que ya tenés, detectamos qué genera fricción y rediseñamos la experiencia para hacerla más simple y efectiva.",
    gridSpan: "col-span-12 md:col-span-6 lg:col-span-4",
    isDark: true,
  },
  {
    step: "03",
    title: "Desarrollo Frontend a medida",
    description: "Convertimos una experiencia diseñada en una interfaz rápida, responsive y lista para producción.",
    gridSpan: "col-span-12 md:col-span-12 lg:col-span-4",
  },
  {
    step: "04",
    title: "Web Apps & Catálogos",
    description: "Desarrollamos herramientas digitales para mostrar, gestionar o vender productos y servicios: catálogos, sistemas de turnos, dashboards y otras experiencias interactivas.",
    gridSpan: "col-span-12 md:col-span-6 lg:col-span-6",
  },
  {
    step: "05",
    title: "Estrategia & MVPs",
    description: "De una idea inicial a un producto validable. Definimos qué construir primero, diseñamos la experiencia y desarrollamos una primera versión funcional.",
    gridSpan: "col-span-12 md:col-span-6 lg:col-span-6",
  },
];

function AsciiDotWaveCanvas({ isDark = false }: { isDark?: boolean }) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let time = 0;

    const render = () => {
      time += 0.02;
      const width = canvas.width;
      const height = canvas.height;
      ctx.clearRect(0, 0, width, height);

      const cols = 28;
      const rows = 16;
      const cellW = width / cols;
      const cellH = height / rows;

      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const x = (c - cols / 2) * 0.25;
          const y = r * 0.3;
          const dist = Math.sqrt(x * x + y * y);
          const z = Math.sin(dist * 0.6 - time) * Math.cos(c * 0.2 + time * 0.5);

          const factor = r / rows;
          const radius = Math.max(0.3, (z + 1.2) * factor * 1.8);

          ctx.fillStyle = isDark
            ? `rgba(251, 251, 250, ${0.12 + factor * 0.25})`
            : `rgba(17, 17, 17, ${0.08 + factor * 0.18})`;

          ctx.beginPath();
          ctx.arc(
            c * cellW + cellW / 2,
            r * cellH + cellH / 2,
            radius,
            0,
            Math.PI * 2
          );
          ctx.fill();
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [isDark]);

  return (
    <canvas
      ref={canvasRef}
      width={280}
      height={160}
      className="absolute top-0 right-0 w-full h-[65%] object-cover pointer-events-none opacity-40 group-hover:opacity-75 transition-opacity duration-500"
    />
  );
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
          {services.map((service) => {
            const isDark = service.isDark;

            return (
              <div
                key={service.step}
                className={`${service.gridSpan} relative group overflow-hidden rounded-[2rem] p-8 md:p-10 border transition-all duration-500 flex flex-col justify-between min-h-[360px] ${
                  isDark
                    ? "bg-[#111111] text-[#FBFBFA] border-[#111111] shadow-2xl hover:border-[#111111]/80"
                    : "bg-[#FBFBFA] text-[#111111] border-[#111111]/15 backdrop-blur-xl shadow-sm hover:shadow-xl hover:border-[#111111]/30"
                }`}
              >
                {/* Ambient Horizon Wave Dots */}
                <AsciiDotWaveCanvas isDark={isDark} />

                {/* Top Row: Clean Step Badge + CTA Button */}
                <div className="relative z-10 flex items-center justify-between">
                  <span
                    className={`font-mono text-xs font-bold tracking-widest uppercase ${
                      isDark ? "text-[#FBFBFA]/70" : "text-[#111111]/70"
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
                        ? "bg-[#FBFBFA] text-[#111111]"
                        : "bg-[#111111] text-[#FBFBFA]"
                    }`}
                  >
                    <ArrowRight className="w-5 h-5" />
                  </a>
                </div>

                {/* Content Box with 100% High Contrast */}
                <div className="relative z-10 pt-16 space-y-3">
                  <h3
                    className={`font-heading text-2xl md:text-3xl font-bold tracking-tight leading-snug ${
                      isDark ? "text-[#FBFBFA]" : "text-[#111111]"
                    }`}
                  >
                    {service.title}
                  </h3>

                  <p
                    className={`font-sans text-xs md:text-sm leading-relaxed max-w-[95%] font-medium ${
                      isDark ? "text-[#FBFBFA]/80" : "text-[#111111]/80"
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
