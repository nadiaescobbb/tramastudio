import { ArrowUpRight } from "lucide-react";
import { waLink } from "@/data/projects";

interface ServiceItem {
  stepCount: string;
  title: string;
  description: string;
  text: string;
  tagline: string;
  ctaLabel: string;
}

const services: ServiceItem[] = [
  {
    stepCount: "01 / 05",
    title: "Una idea nueva",
    description: "Convertimos una idea en una primera versión que se pueda probar.",
    text: "Si tenés una idea que querés convertir en producto, podemos ayudarte a definir qué vale la pena construir primero y llevarla a una versión funcional.",
    tagline: "Antes de construir todo, hay que saber qué vale la pena construir.",
    ctaLabel: "Quiero convertir mi idea en algo real",
  },
  {
    stepCount: "02 / 05",
    title: "Una herramienta para tu negocio",
    description: "Construimos software cuando las herramientas que ya existen no alcanzan.",
    text: "Creamos sistemas y aplicaciones para resolver procesos específicos de tu negocio cuando las herramientas disponibles ya no encajan con lo que necesitás.",
    tagline: "Cuando el problema no entra en una plantilla, tampoco debería la solución.",
    ctaLabel: "Necesito una herramienta para mi negocio",
  },
  {
    stepCount: "03 / 05",
    title: "Un producto que tiene que ser más fácil de usar",
    description: "Diseñamos experiencias digitales claras y fáciles de entender.",
    text: "Si tu producto ya existe pero resulta difícil de usar, revisamos cómo funciona y rediseñamos la experiencia para hacerla más simple.",
    tagline: "Nadie lee tu proceso interno. Decide con lo que ve.",
    ctaLabel: "Quiero mejorar mi producto",
  },
  {
    stepCount: "04 / 05",
    title: "Un producto que necesita crecer",
    description: "Desarrollamos y mejoramos el software que sostiene tu producto.",
    text: "Construimos nuevas funcionalidades, conectamos servicios y mejoramos la base técnica para que el producto pueda seguir creciendo sin convertirse en un problema.",
    tagline: "Lo que no se ve también decide si el producto funciona.",
    ctaLabel: "Quiero hacer crecer mi producto",
  },
  {
    stepCount: "05 / 05",
    title: "Algo que todavía no entra en una categoría",
    description: "No todo necesita tener un nombre antes de empezar.",
    text: "Si tenés un problema o una idea que querés convertir en algo digital y todavía no sabés exactamente qué necesitás, podemos empezar por ahí.",
    tagline: "Primero entendemos el problema. Después decidimos qué construir.",
    ctaLabel: "Todavía no sé qué necesito",
  },
];

export function ServicesStack() {
  return (
    <section className="relative bg-background" id="servicios">
      {/* Section Header */}
      <div className="py-14 md:py-20 bg-background text-center container-trama px-6 md:px-12 lg:px-16">
        <span className="font-mono text-xs font-semibold uppercase tracking-widest text-[hsl(var(--editorial-accent))] mb-4 block">
          NUESTRAS SOLUCIONES
        </span>
        <h2 className="font-heading text-4xl md:text-6xl font-bold tracking-tight text-foreground">
          ¿Qué necesitás <span className="font-serif italic font-normal text-[hsl(var(--editorial-accent))]">construir</span>?
        </h2>
        <p className="text-foreground text-base md:text-lg leading-relaxed max-w-2xl mx-auto mt-6">
          No todos los proyectos empiezan en el mismo lugar. A veces hay una idea que todavía hay que probar. Otras veces existe un problema que necesita una herramienta propia. <br className="hidden md:inline" />
          Trabajamos sobre lo que realmente necesitás, desde la primera definición hasta el producto funcionando.
        </p>
      </div>

      {/* Mobile Stacked Cards Layout (Visible on Mobile only: block md:hidden) */}
      <div className="block md:hidden relative px-4 pb-20 space-y-8">
        {services.map((service, index) => (
          <div
            key={`mobile-${service.stepCount}`}
            className="w-full bg-[hsl(var(--studio-dark-bg))] text-[hsl(var(--studio-dark-text))] rounded-2xl p-6 border border-[hsl(var(--studio-dark-border))] shadow-xl overflow-hidden space-y-6"
          >
            {/* Top Bar (Single stepCount indicator) */}
            <div className="flex items-center justify-end font-mono text-xs text-[hsl(var(--studio-dark-muted))]">
              <span className="font-bold">{service.stepCount}</span>
            </div>

            {/* Title & Subheadline */}
            <div className="space-y-2">
              <h3 className="font-heading text-2xl font-bold tracking-tight text-[hsl(var(--studio-dark-text))]">
                {service.title}
              </h3>
              <p className="text-sm font-medium text-[hsl(var(--editorial-accent))]">
                {service.description}
              </p>
            </div>

            {/* Main Text */}
            <p className="text-xs text-[hsl(var(--studio-dark-muted))] leading-relaxed">
              {service.text}
            </p>

            {/* Quote Tagline */}
            <p className="font-serif italic text-sm text-[hsl(var(--studio-dark-text))]/90 border-l-2 border-[hsl(var(--editorial-accent))] pl-3 py-1">
              "{service.tagline}"
            </p>

            {/* CTA Button */}
            <a
              href={waLink(`Hola, quiero consultar sobre: ${service.title}.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-between w-full bg-white text-black px-5 py-3 rounded-full font-mono text-xs font-bold shadow-md active:scale-98 transition-all"
            >
              <span>{service.ctaLabel}</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        ))}
      </div>

      {/* Desktop Sticky Stacked Cards Container (Visible on Tablet/Desktop: hidden md:block) */}
      <div className="hidden md:block relative">
        {services.map((service, index) => (
          <div
            key={service.stepCount}
            className="sticky top-0 min-h-screen w-full bg-[hsl(var(--studio-dark-bg))] text-[hsl(var(--studio-dark-text))] flex flex-col justify-between p-8 md:p-12 lg:p-16 shadow-2xl transition-all duration-300 overflow-hidden border-t border-[hsl(var(--studio-dark-border))]"
            style={{ zIndex: index + 1 }}
          >
            {/* Header Bar (Single stepCount indicator) */}
            <div className="flex flex-row items-center justify-end w-full font-mono text-xs font-semibold tracking-widest text-[hsl(var(--studio-dark-muted))] z-10">
              <span className="text-sm font-bold">{service.stepCount}</span>
            </div>

            {/* Central Content */}
            <div className="my-auto text-center space-y-6 max-w-3xl mx-auto w-full pt-6 pb-10 z-10">
              <h3 className="font-heading font-bold text-3xl md:text-5xl tracking-tight leading-tight text-[hsl(var(--studio-dark-text))]">
                {service.title}
              </h3>

              <p className="text-lg md:text-xl font-medium text-[hsl(var(--editorial-accent))] leading-snug">
                {service.description}
              </p>

              <p className="text-sm md:text-base text-[hsl(var(--studio-dark-muted))] leading-relaxed max-w-2xl mx-auto font-sans">
                {service.text}
              </p>

              {/* Quote Tagline */}
              <p className="font-serif italic text-lg md:text-xl text-[hsl(var(--studio-dark-text))]/90 max-w-2xl mx-auto leading-relaxed pt-2">
                "{service.tagline}"
              </p>

              {/* Graphical Card CTA Box */}
              <div className="mx-auto w-full max-w-md pt-4">
                <a
                  href={waLink(`Hola, quiero consultar sobre: ${service.title}.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white text-black px-6 py-3.5 rounded-full font-mono text-xs font-bold shadow-lg hover:bg-white/90 transition-all group"
                >
                  <span>{service.ctaLabel}</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
            </div>

            {/* Bottom Counter Bar */}
            <div className="flex justify-end items-center font-mono text-xs text-[hsl(var(--studio-dark-muted))] z-10">
              <span className="uppercase font-bold tracking-widest">{service.title}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

