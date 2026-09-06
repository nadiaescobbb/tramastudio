import { useEffect } from "react";
import { Reveal } from "@/components/Reveal";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { ContactForm } from "@/components/ContactForm";
import { waLink } from "@/data/projects";
import Metodologia from "@/components/Metodologia";
import { FeaturedCaseStudies } from "@/components/FeaturedCaseStudies";
import { ServicesStack } from "@/components/ServicesStack";
import { MiniBrowserCard, MiniSoftwareCard, MiniMobileCard } from "@/components/HeroInlineUiGraphic";
import { setSeo } from "@/lib/seo";
import { ArrowUpRight } from "lucide-react";

const FAQS = [
  {
    q: "¿Qué tipo de proyectos hacen?",
    boldPrefix: "",
    a: "Trabajamos en aplicaciones, plataformas, sistemas, herramientas para empresas y nuevos productos digitales. También podemos intervenir sobre un producto que ya existe y necesita mejorar.",
  },
  {
    q: "¿Tengo que tener definida la idea?",
    boldPrefix: "No.",
    a: "Podés llegar con una idea bastante clara o simplemente con un problema que necesitás resolver. Parte del trabajo es entender qué necesitás realmente antes de decidir qué construir.",
  },
  {
    q: "¿Ustedes diseñan y desarrollan?",
    boldPrefix: "Sí.",
    a: "Diseñamos la experiencia y la interfaz y también construimos el producto. Eso permite que las decisiones de diseño y desarrollo se tomen como parte de un mismo proceso.",
  },
  {
    q: "¿Trabajan con empresas o también con emprendedores?",
    boldPrefix: "Con ambos.",
    a: "Trabajamos con personas que tienen una idea que quieren convertir en producto y con empresas que necesitan construir o mejorar herramientas digitales para su negocio.",
  },
  {
    q: "¿Qué pasa si no sé cuánto cuesta mi proyecto?",
    boldPrefix: "No necesitás llegar con un presupuesto cerrado.",
    a: "Primero entendemos qué querés hacer, qué necesitás y qué alcance tiene. A partir de eso podemos definir la mejor forma de abordarlo.",
  },
];

const Index = () => {
  useEffect(() => {
    setSeo({
      title: "HeyTrama — Productos Digitales y Software a Medida",
      description:
        "Diseñamos y desarrollamos aplicaciones, plataformas y software a medida para convertir ideas y necesidades de negocio en productos digitales que funcionan.",
      ogDescription:
        "Convertimos ideas y necesidades de negocio en productos digitales que funcionan.",
      path: "/",
    });
  }, []);

  return (
    <div className="relative min-h-screen selection:bg-[hsl(var(--accent))] selection:text-white overflow-x-clip">
      <Nav />

      {/* HERO (Spacious Single Pantallazo Layout) */}
      <section className="hero-start relative min-h-[100dvh] flex flex-col justify-center items-center pt-28 md:pt-36 lg:pt-44 pb-16 md:pb-20 overflow-hidden">
        <div className="hero-texture" />
        <div className="container-trama relative z-10 w-full text-center max-w-4xl lg:max-w-[58rem] mx-auto px-6 flex flex-col items-center justify-center my-auto">
          {/* Centered Large H1 with Inline Icons closely hugging text */}
          <h1
            className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-[3.95rem] font-medium tracking-tight leading-[1.38] text-foreground animate-slide-up opacity-0"
            style={{ animationDelay: "80ms" }}
          >
            Estudio de producto <MiniBrowserCard /> enfocado en construir sitios, <MiniSoftwareCard /> software y <MiniMobileCard /> aplicaciones digitales.
          </h1>

          {/* Centered CTAs Row with Generous Spacing */}
          <div
            className="pt-10 sm:pt-14 md:pt-16 flex flex-wrap items-center justify-center gap-4 sm:gap-6 animate-slide-up opacity-0"
            style={{ animationDelay: "320ms" }}
          >
            <a href={waLink("Hola, quiero contarte sobre mi proyecto.")} className="hero-primary-cta group text-sm sm:text-base px-7 py-4">
              <span>Contar mi proyecto</span>
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>

            <a
              href="#casos"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-full border border-border bg-white/80 text-foreground font-mono text-xs sm:text-sm font-semibold hover:bg-white hover:border-foreground/40 transition-all group shadow-md backdrop-blur-md"
            >
              <span>Ver proyectos</span>
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </div>
      </section>

      {/* ── PROYECTOS DESTACADOS ───────────────────────────────── */}
      <FeaturedCaseStudies />

      {/* ── METODOLOGÍA / NUESTRO PROCESO ─────────────────────── */}
      <Metodologia />

      {/* ── SERVICIOS STACKED ────────────────────────────────────── */}
      <ServicesStack />

      {/* ── EL ESTUDIO ─────────────────────────────────────────── */}
      <section className="relative z-20 py-20 md:py-28 bg-background scroll-mt-36" id="estudio">
        <div className="container-trama">
          <div className="font-mono text-xs font-semibold uppercase tracking-widest text-[hsl(var(--editorial-accent))] mb-12">
            EL ESTUDIO
          </div>
          <div className="grid gap-16 md:grid-cols-12 md:items-center">
            <div className="md:col-span-5 lg:col-span-4">
              <Reveal>
                <div className="aspect-[4/5] w-full overflow-hidden rounded-2xl border border-border bg-surface relative shadow-lg">
                  <img
                    src="/founder-nadia.avif"
                    alt="Nadia Escobar — founder HeyTrama"
                    className="founder-portrait absolute inset-0 h-full w-full object-cover grayscale opacity-90"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                </div>
              </Reveal>
            </div>

            <div className="md:col-span-7 lg:col-start-6">
              <Reveal delay={150}>
                <span className="font-mono text-xs font-bold uppercase tracking-widest text-[hsl(var(--editorial-accent))] block mb-4">
                  Nadia Escobar — founder HeyTrama
                </span>
                <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl leading-tight tracking-tight mb-8">
                  Pensamos primero cómo debería funcionar. <br className="hidden md:inline" />
                  <span className="font-serif italic font-normal text-[hsl(var(--editorial-accent))]">Después, cómo hacerlo realidad.</span>
                </h2>
                <div className="flex flex-col gap-6">
                  <p className="text-base md:text-lg leading-relaxed text-foreground max-w-xl">
                    HeyTrama nace de unir dos partes que muchas veces se trabajan por separado: entender cómo debería funcionar un producto y tener la capacidad de construirlo.
                  </p>
                  <p className="text-base md:text-lg leading-relaxed text-foreground max-w-xl">
                    Nadia dirige cada proyecto de punta a punta —desde la primera conversación hasta el producto funcionando— para que la idea no se pierda entre diseñadores, desarrolladores y decisiones de negocio.
                  </p>
                </div>
                <div className="pt-8">
                  <a
                    href={waLink("Hola Nadia, me gustaría conocer más sobre HeyTrama y consultar por un proyecto.")}
                    className="inline-flex items-center gap-2 bg-foreground text-background px-6 py-3 rounded-full font-mono text-xs font-bold shadow-md hover:bg-[hsl(var(--editorial-accent))] hover:text-white transition-all group"
                  >
                    <span>Conocer HeyTrama</span>
                    <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── PREGUNTAS FRECUENTES ───────────────────────────────── */}
      <section className="bg-surface/10 py-20 md:py-28" id="preguntas">
        <div className="container-narrow px-6">
          <Reveal>
            <div className="font-mono text-xs font-bold uppercase tracking-widest text-[hsl(var(--editorial-accent))]">
              PREGUNTAS FRECUENTES
            </div>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="h-section mt-4 mb-16">
              Antes de <span className="italic text-[hsl(var(--editorial-accent))]">empezar</span>.
            </h2>
          </Reveal>

          <div className="grid gap-10">
            {FAQS.map((item, i) => (
              <Reveal key={item.q} delay={i * 80}>
                <div className="pb-8 border-b border-border/40 last:border-0">
                  <h3 className="font-heading text-2xl tracking-tight mb-3 text-foreground font-medium">{item.q}</h3>
                  <p className="text-base md:text-lg leading-relaxed text-foreground max-w-2xl">
                    {item.boldPrefix && (
                      <span className="text-foreground font-semibold block mb-1">
                        {item.boldPrefix}
                      </span>
                    )}
                    {item.a}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACTO ─────────────────────────────────────────────── */}
      <section className="py-20 md:py-28" id="contacto">
        <div className="container-trama">
          <div className="grid grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Columna Izquierda (Contexto y contacto directo) */}
            <div className="col-span-12 lg:col-span-5 space-y-6">
              <Reveal>
                <span className="font-mono text-micro uppercase tracking-wider text-[hsl(var(--editorial-accent))] block mb-4">
                  CONTACTO
                </span>
                <h2 className="h-section leading-tight">
                  Contanos qué querés construir.
                </h2>
                <p className="text-base md:text-lg text-foreground leading-relaxed max-w-md mt-6">
                  <strong className="text-foreground block mb-2">No hace falta que tengas todo resuelto.</strong>
                  Contanos qué querés hacer, qué problema estás intentando resolver o qué te gustaría mejorar y vemos cuál es la mejor forma de llevarlo a algo real.
                </p>
                <div className="pt-6 space-y-3 font-mono text-subtle border-t border-border mt-8">
                  <p className="text-foreground font-medium">
                    Email directo:{" "}
                    <a
                      href="mailto:hola@heytrama.com"
                      className="text-foreground underline font-semibold hover:text-[hsl(var(--editorial-accent))] transition-colors"
                    >
                      hola@heytrama.com
                    </a>
                  </p>
                  <p className="text-foreground font-medium">
                    WhatsApp:{" "}
                    <a
                      href="https://wa.me/5493625142700"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground underline font-semibold hover:text-[hsl(var(--editorial-accent))] transition-colors"
                    >
                      +54 9 362 514-2700
                    </a>
                  </p>
                </div>
              </Reveal>
            </div>

            {/* Columna Derecha (Formulario) */}
            <div className="col-span-12 lg:col-span-7">
              <Reveal delay={150}>
                <ContactForm />
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
