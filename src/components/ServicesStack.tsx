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
  tagline: string;
  description: string;
  mobileDescription: string;
}

const services: ServiceItem[] = [
  {
    number: "(01)",
    titleBold: "UI UX ",
    titleItalic: "Design",
    category: "Diseño UI / UX",
    bgColor: "bg-[#12151C]",
    textColor: "text-white",
    ctaText: "Explorar UI/UX Design",
    tagline: "Cuando la interfaz es lo único que alguien conoce de vos antes de decidir.",
    description:
      "Nadie lee tu proceso interno ni tu stack. Decide con lo que ve. Diseñamos esa superficie para que no le pida al usuario más esfuerzo del que la decisión de compra ya requiere.",
    mobileDescription: "Interfaces claras que no le piden al usuario más esfuerzo del que ya tiene que dar.",
  },
  {
    number: "(02)",
    titleBold: "Mobile App ",
    titleItalic: "Design",
    category: "Mobile Apps",
    bgColor: "bg-[#0A0A0A]",
    textColor: "text-white",
    ctaText: "Explorar Mobile App Design",
    tagline: "El pulgar no perdona lo que el mouse disimula.",
    description:
      "En mobile no hay margen para que la interfaz distraiga. Cada pantalla se construye para que interactuar no compita con decidir.",
    mobileDescription: "Pantallas pensadas para que el pulgar no compita con la decisión.",
  },
  {
    number: "(03)",
    titleBold: "MVP ",
    titleItalic: "Design",
    category: "Lanzamiento de MVPs",
    bgColor: "bg-[#161320]",
    textColor: "text-white",
    ctaText: "Explorar MVP Design",
    tagline: "Antes de construir todo, hay que saber si hace falta construir algo.",
    description:
      "Un MVP no es una versión chica del producto final: es la pregunta más barata que podés hacerle a un usuario real. Lo armamos para validar la decisión de negocio, no para impresionar.",
    mobileDescription: "La versión más barata de validar si vale la pena construir el resto.",
  },
  {
    number: "(04)",
    titleBold: "Full Stack ",
    titleItalic: "Development",
    category: "Desarrollo Full Stack",
    bgColor: "bg-[#111111]",
    textColor: "text-white",
    ctaText: "Explorar Full Stack Dev",
    tagline: "Lo que no se ve también decide si el negocio funciona.",
    description:
      "Un frontend prolijo sobre una base frágil se nota tarde — cuando el negocio ya depende de él. Construimos la base para que sostenga la decisión, no solo la pantalla.",
    mobileDescription: "La base técnica que sostiene la decisión, no solo la pantalla.",
  },
  {
    number: "(05)",
    titleBold: "Custom Web ",
    titleItalic: "App",
    category: "Web Apps a Medida",
    bgColor: "bg-[#6B2E2A]",
    textColor: "text-white",
    ctaText: "Explorar Custom Web Apps",
    tagline: "Cuando el problema no entra en una plantilla, tampoco debería entrar la solución.",
    description:
      "Hay negocios cuyo proceso interno es la ventaja competitiva. Ahí no vendemos una plantilla con tu logo — construimos la herramienta a la medida de cómo tu negocio realmente decide y opera.",
    mobileDescription: "Herramientas a medida cuando el negocio no entra en una plantilla.",
  },
];

export function ServicesStack() {
  return (
    <section className="relative bg-background" id="servicios">
      {/* Section Header */}
      <div className="py-14 md:py-20 bg-background text-center container-trama px-6 md:px-12 lg:px-16">
        <span className="font-mono text-xs font-semibold uppercase tracking-widest text-[hsl(var(--accent))] mb-4 block">
          Nuestras Soluciones
        </span>
        <h2 className="font-heading text-4xl md:text-6xl font-bold tracking-tight text-foreground">
          Servicios <span className="font-serif italic font-normal text-[hsl(var(--accent))]">Especializados</span>
        </h2>
      </div>

      {/* Mobile Stacked Sticky Cards Layout (Visible on Mobile only: block md:hidden) */}
      <div className="block md:hidden relative px-4 pb-20">
        {services.map((service, index) => (
          <a
            key={`mobile-${service.number}`}
            href={waLink(`Hola, quiero consultar sobre el servicio de ${service.category}.`)}
            target="_blank"
            rel="noopener noreferrer"
            className={`sticky top-20 block w-full ${service.bgColor} ${service.textColor} rounded-2xl p-6 border-t border-white/15 shadow-[0_-8px_30px_rgba(0,0,0,0.35)] mb-16 overflow-hidden group transition-transform active:scale-[0.98]`}
            style={{ zIndex: index + 1 }}
          >
            {/* Top Bar: Number & Arrow */}
            <div className="flex items-center justify-between font-mono text-xs text-white/70 mb-5">
              <span className="font-bold">{service.number}</span>
              <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                <ArrowUpRight className="w-4 h-4 text-white transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </div>

            {/* Main Title */}
            <h3 className="font-heading text-3xl font-bold tracking-tight text-white mb-3 leading-tight">
              {service.titleBold}
              <span className="font-serif italic font-normal text-white/90 ml-1.5">
                {service.titleItalic}
              </span>
            </h3>

            {/* Mobile Single-Line Copy */}
            <p className="text-white/80 font-sans text-sm leading-relaxed mb-6">
              {service.mobileDescription}
            </p>

            {/* Footer Bar */}
            <div className="flex items-center justify-between pt-4 border-t border-white/10 font-mono text-xs text-white/60">
              <span>{service.category}</span>
              <span className="text-white font-semibold flex items-center gap-1 group-hover:underline">
                <span>Cotizar</span>
                <ArrowUpRight className="w-3 h-3" />
              </span>
            </div>
          </a>
        ))}
      </div>

      {/* Desktop Sticky Stacked Cards Container (Visible on Tablet/Desktop: hidden md:block) */}
      <div className="hidden md:block relative">
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
            <div className="my-auto text-center space-y-8 max-w-4xl mx-auto w-full pt-8 pb-12 z-10">
              <h3 className="font-heading text-5xl md:text-8xl lg:text-9xl font-bold tracking-tight leading-none drop-shadow-lg">
                {service.titleBold}
                <span className="font-serif italic font-normal opacity-90 ml-2">
                  {service.titleItalic}
                </span>
              </h3>

              {/* Tagline Tensión (Frase en Serif Itálica) */}
              <p className="font-serif italic text-white/95 text-xl md:text-3xl max-w-3xl mx-auto leading-tight font-normal">
                "{service.tagline}"
              </p>

              {/* Resolution Description (Resolución Sans-Serif) */}
              <p className="text-white/80 font-sans text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
                {service.description}
              </p>

              {/* Graphical Card CTA Box */}
              <div className="mx-auto max-w-2xl rounded-2xl border border-white/20 bg-white/10 backdrop-blur-md shadow-2xl overflow-hidden p-6 md:p-8 relative group mt-8">
                <div className="text-center space-y-4">
                  <span className="font-mono text-xs uppercase tracking-widest text-white/60 block">
                    {service.category}
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
