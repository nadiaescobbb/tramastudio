import { useEffect } from "react";
import { Reveal } from "@/components/Reveal";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { ContactForm } from "@/components/ContactForm";
import { waLink } from "@/data/projects";
import Metodologia from "@/components/Metodologia";
import { FeaturedCaseStudies } from "@/components/FeaturedCaseStudies";
import { ServicesStack } from "@/components/ServicesStack";
import { setSeo } from "@/lib/seo";
import { ArrowUpRight } from "lucide-react";

const FAQS = [
  {
    q: "¿Qué tipo de proyectos hacen?",
    a: "Diseñamos y desarrollamos productos digitales a medida — desde landings hasta plataformas más complejas — para marcas que necesitan que su sitio haga algo más que existir.",
  },
  {
    q: "¿Cómo trabajan?",
    a: "Cada proyecto comienza con una fase de inmersión en el negocio. No diseñamos sin estrategia ni desarrollamos sin diseño previo. Trabajamos por etapas iterativas, manteniendo al cliente involucrado en las decisiones clave.",
  },
  {
    q: "¿Con quién trabajan?",
    a: "Con PyMEs, profesionales y consultoras que ya entendieron que su sitio influye en si alguien les compra o no, y buscan que ese sitio funcione en serio.",
  },
];

const Index = () => {
  useEffect(() => {
    setSeo({
      title: "HeyTrama — Diseño y Desarrollo de Productos Digitales",
      description: "Diseñamos productos digitales que ayudan a decidir, no solo a mirar. Estrategia, UI/UX, desarrollo full stack y web apps a medida.",
    });
  }, []);

  return (
    <div className="relative min-h-screen selection:bg-[hsl(var(--accent))] selection:text-white overflow-x-clip">
      <Nav />

      {/* HERO */}
      <section className="hero-start relative min-h-dvh flex items-center pt-24 pb-16">
        <div className="hero-texture" />
        <div className="container-trama relative z-10">
          <div className="max-w-4xl">
            <h1 className="hero-title animate-slide-up opacity-0" style={{ animationDelay: "80ms" }}>
              Diseñamos productos digitales que ayudan a decidir, <br />
              <span className="italic font-normal">no solo a mirar.</span>
            </h1>
            <p className="mt-8 text-xl text-muted max-w-2xl leading-relaxed animate-slide-up opacity-0" style={{ animationDelay: "320ms" }}>
              Un producto puede verse bien y aun así no vender: eso pasa cuando el diseño no está pensado para la decisión que tiene que resolver. Por eso primero entendemos qué necesita saber o sentir alguien antes de comprar — y recién ahí construimos, del código a la interfaz.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4 animate-slide-up opacity-0" style={{ animationDelay: "520ms" }}>
              <a href={waLink("Hola, estoy pensando en un proyecto y me gustaría consultarles.")} className="hero-primary-cta group">
                <span>Contanos en qué estás pensando</span>
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </a>
            </div>
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
      <section className="relative z-20 py-24 md:py-36 bg-background scroll-mt-36" id="estudio">
        <div className="container-trama">
          <div className="font-mono text-xs font-semibold uppercase tracking-widest text-[hsl(var(--accent))] mb-12">
            EL ESTUDIO
          </div>
          <div className="grid gap-16 md:grid-cols-12 md:items-center">
            <div className="md:col-span-5 lg:col-span-4">
              <Reveal>
                <div className="aspect-[4/5] w-full overflow-hidden rounded-sm border border-border bg-surface relative shadow-md">
                  <img
                    src="/founder-nadia.avif"
                    alt="Nadia Escobio — Directora de HeyTrama"
                    className="founder-portrait absolute inset-0 h-full w-full object-cover grayscale opacity-90"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                </div>
              </Reveal>
            </div>

            <div className="md:col-span-7 lg:col-start-6">
              <Reveal delay={150}>
                <span className="font-mono text-xs font-bold uppercase tracking-widest text-[hsl(var(--accent))] block mb-4">
                  Nadia Escobio — Directora de HeyTrama
                </span>
                <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl leading-tight tracking-tight mb-8">
                  Pensamos primero cómo decide tu cliente, <span className="italic text-[hsl(var(--accent))]">después cómo construir la tecnología para que esa decisión no se pierda en el camino</span>.
                </h2>
                <div className="flex flex-col gap-6">
                  <p className="text-lg leading-relaxed text-muted max-w-xl">
                    HeyTrama nace de la unión entre diseño estratégico y desarrollo frontend: un mismo criterio aplicado a cada etapa, no dos disciplinas trabajando por separado.
                  </p>
                  <p className="text-lg leading-relaxed text-muted max-w-xl">
                    Nadia dirige cada proyecto de punta a punta — de la primera conversación al código en producción — para que nada se pierda en la traducción de una etapa a la siguiente.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── PREGUNTAS FRECUENTES ───────────────────────────────── */}
      <section className="bg-surface/10 py-24 md:py-36" id="preguntas">
        <div className="container-narrow">
          <Reveal>
            <div className="font-mono text-xs font-bold uppercase tracking-widest text-[hsl(var(--accent))]">
              PREGUNTAS FRECUENTES
            </div>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="h-section mt-4 mb-16">
              Antes de <span className="italic text-[hsl(var(--accent))]">empezar</span>.
            </h2>
          </Reveal>

          <div className="grid gap-12">
            {FAQS.map((item, i) => (
              <Reveal key={item.q} delay={i * 100}>
                <div className="pb-8">
                  <h3 className="font-heading text-2xl tracking-tight mb-4 text-foreground font-medium">{item.q}</h3>
                  <p className="text-base md:text-lg leading-relaxed text-muted max-w-2xl">{item.a}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACTO ─────────────────────────────────────────────── */}
      <section className="py-24 md:py-32" id="contacto">
        <div className="container-trama">
          <Reveal>
            <h2 className="h-section max-w-[20ch] text-center mx-auto" style={{ textWrap: "balance" }}>
              Hablemos de tu proyecto.
            </h2>
          </Reveal>
          <p className="mx-auto mt-6 max-w-lg text-center text-lg text-muted leading-relaxed">
            Contanos en qué estás pensando y vemos juntos la mejor forma de resolverlo, desde el diseño y la tecnología.
          </p>

          <div className="mx-auto mt-14 max-w-xl">
            <p className="font-mono text-[10px] font-bold uppercase tracking-widest text-muted mb-5 text-center">
              INICIAR CONVERSACIÓN
            </p>
            <ContactForm />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
