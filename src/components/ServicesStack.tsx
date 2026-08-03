import { ArrowUpRight } from "lucide-react";
import { waLink } from "@/data/projects";

interface ServiceItem {
  number: string;
  titleBold: string;
  titleItalic: string;
  category: string;
  bgColor: string;
  textColor: string;
  ctaText: string;
  description: string;
}

const services: ServiceItem[] = [
  {
    number: "(01)",
    titleBold: "UI UX ",
    titleItalic: "Design",
    category: "Diseño UI / UX",
    bgColor: "bg-[#4585c5]",
    textColor: "text-white",
    ctaText: "Explorar UI/UX Design",
    description: "Diseño de interfaces intuitivas, sistemas de diseño escalables y experiencias navegables pensadas para convertir usuarios en clientes.",
  },
  {
    number: "(02)",
    titleBold: "Mobile App ",
    titleItalic: "Design",
    category: "Mobile Apps",
    bgColor: "bg-[#111111]",
    textColor: "text-white",
    ctaText: "Explorar Mobile App Design",
    description: "Interfaces móviles iOS y Android optimizadas para interacción táctil, rendimiento continuo y estética refinada.",
  },
  {
    number: "(03)",
    titleBold: "MVP ",
    titleItalic: "Design",
    category: "Lanzamiento de MVPs",
    bgColor: "bg-[#6035db]",
    textColor: "text-white",
    ctaText: "Explorar MVP Design",
    description: "Lanzamiento rápido de productos mínimos viables en 4 a 8 semanas para validar hipótesis de negocio con usuarios reales.",
  },
  {
    number: "(04)",
    titleBold: "Full Stack ",
    titleItalic: "Development",
    category: "Desarrollo Full Stack",
    bgColor: "bg-[#0c1221]",
    textColor: "text-white",
    ctaText: "Explorar Full Stack Dev",
    description: "Código frontend y backend robusto en React, Next.js, Node.js y plataformas cloud optimizadas para máxima velocidad.",
  },
  {
    number: "(05)",
    titleBold: "Custom Web ",
    titleItalic: "App",
    category: "Web Apps a Medida",
    bgColor: "bg-[#e52b2b]",
    textColor: "text-white",
    ctaText: "Explorar Custom Web Apps",
    description: "Plataformas digitales avanzadas y herramientas de software a medida adaptadas a las necesidades específicas de tu empresa.",
  },
];

export function ServicesStack() {
  return (
    <section className="relative bg-background" id="servicios">
      {/* Section Header */}
      <div className="py-20 bg-background text-center container-trama px-6 md:px-12 lg:px-16">
        <span className="font-mono text-xs font-semibold uppercase tracking-widest text-[hsl(var(--accent))] mb-4 block">
          Nuestras Soluciones
        </span>
        <h2 className="font-heading text-4xl md:text-6xl font-bold tracking-tight text-foreground">
          Servicios <span className="font-serif italic font-normal text-[hsl(var(--accent))]">Especializados</span>
        </h2>
      </div>

      {/* Sticky Stacked Cards Container */}
      <div className="relative">
        {services.map((service, index) => (
          <div
            key={service.number}
            className={`sticky top-0 min-h-screen w-full ${service.bgColor} ${service.textColor} flex flex-col justify-between p-6 md:p-12 lg:p-16 shadow-2xl transition-all duration-300 overflow-hidden border-t border-white/10`}
            style={{ zIndex: index + 1 }}
          >
            {/* Header Bar */}
            <div className="flex flex-row items-center justify-between w-full font-mono text-xs font-semibold tracking-widest opacity-90 z-10">
              <span className="text-sm font-bold">{service.number}</span>
              <a
                href={waLink(`Hola, quiero consultar sobre el servicio de ${service.category}.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 hover:underline group cursor-pointer"
              >
                <span>{service.ctaText}</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>

            {/* Central Content */}
            <div className="my-auto text-center space-y-8 max-w-5xl mx-auto w-full pt-8 pb-12 z-10">
              <h3 className="font-heading text-5xl md:text-8xl lg:text-9xl font-bold tracking-tight leading-none drop-shadow-lg">
                {service.titleBold}
                <span className="font-serif italic font-normal opacity-90 ml-2">
                  {service.titleItalic}
                </span>
              </h3>

              <p className="text-white/80 font-sans text-base md:text-xl max-w-2xl mx-auto leading-relaxed">
                {service.description}
              </p>

              {/* Graphical Card Mockup Box */}
              <div className="mx-auto max-w-3xl rounded-2xl border border-white/20 bg-white/10 backdrop-blur-md shadow-2xl overflow-hidden aspect-[16/9] flex items-center justify-center p-8 relative group">
                <div className="text-center space-y-4">
                  <span className="font-mono text-xs uppercase tracking-widest text-white/60 block">
                    {service.category}
                  </span>
                  <span className="font-heading font-bold text-white text-3xl md:text-5xl block">
                    {service.titleBold} {service.titleItalic}
                  </span>
                  <a
                    href={waLink(`Hola, quiero iniciar un proyecto de ${service.category}.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full font-mono text-xs font-bold shadow-lg hover:bg-white/90 transition-all"
                  >
                    <span>Cotizar Servicio</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Bottom Counter Bar */}
            <div className="flex justify-between items-center font-mono text-xs opacity-60 z-10">
              <span>HeyTrama Studio</span>
              <span>0{index + 1} / 0{services.length}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
