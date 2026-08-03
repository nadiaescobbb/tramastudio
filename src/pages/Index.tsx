import { useEffect } from "react";
import { Reveal } from "@/components/Reveal";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { ContactForm } from "@/components/ContactForm";
import { waLink } from "@/data/projects";
import Metodologia from "@/components/Metodologia";
import { setSeo } from "@/lib/seo";
import { ArrowUpRight } from "lucide-react";

const STEPS = [
  { n: "01", t: "Entender", d: "Antes de diseñar, preguntamos qué le impide al negocio venderse mejor hoy." },
  { n: "02", t: "Comunicar", d: "La estrategia se traduce en jerarquía: qué tiene que entender el usuario primero, segundo y último. Recién ahí se le da forma visual." },
  { n: "03", t: "Construir", d: "El código pone a prueba esa decisión: si carga rápido, si funciona en cualquier pantalla, si no se rompe cuando el negocio crece." },
  { n: "04", t: "Acompañar", d: "El trabajo no termina con la publicación: se mide qué funciona, se corrige lo que no, y el sitio se actualiza a medida que el negocio cambia." },
];

const FAQS = [
  { q: "¿Qué tipo de proyectos hacen?", a: "Nos enfocamos en diseñar y desarrollar productos digitales a medida. Desde plataformas y aplicaciones hasta ecosistemas web complejos para marcas que necesitan más que una simple presencia online." },
  { q: "¿Cómo trabajan?", a: "Cada proyecto comienza con una fase de inmersión en el negocio. No diseñamos sin estrategia ni desarrollamos sin diseño previo. Trabajamos por etapas iterativas, manteniendo al cliente involucrado en las decisiones clave." },
  { q: "¿Con quién trabajan?", a: "Con PyMEs, profesionales, consultoras y marcas que entienden que su presencia digital es un activo estratégico y necesitan un partner tecnológico para escalarlo." },
];

const Index = () => {
  useEffect(() => {
    setSeo({
      title: "HeyTrama — Estudio de Producto Digital.",
      description: "Diseñamos y desarrollamos productos digitales que conectan negocios con personas. Estrategia, diseño UX/UI y desarrollo frontend.",
    });
  }, []);

  return (
    <div className="relative min-h-screen selection:bg-[hsl(var(--accent))] selection:text-white overflow-x-hidden">
      <Nav />

      {/* HERO */}
      <section className="hero-start relative min-h-dvh flex items-center pt-24 pb-16">
        <div className="hero-texture" />
        <div className="container-trama relative z-10">
          <div className="max-w-4xl">
            <h1 className="hero-title animate-slide-up opacity-0" style={{ animationDelay: "80ms" }}>
              Diseñamos y desarrollamos productos digitales <br />
              <span className="italic">que conectan negocios con personas.</span>
            </h1>
            <p className="mt-8 text-xl text-muted max-w-2xl leading-relaxed animate-slide-up opacity-0" style={{ animationDelay: "320ms" }}>
              Antes de diseñar, entendemos qué necesita resolver el producto. Desde la estrategia hasta el código: convertimos ideas y procesos en experiencias digitales funcionales.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4 animate-slide-up opacity-0" style={{ animationDelay: "520ms" }}>
              <a href={waLink("Hola, quiero contarles sobre mi proyecto.")} className="hero-primary-cta group">
                <span>Contanos qué querés construir</span>
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── CASO CUORE ─────────────────────────────────────────── */}
      <section className="py-24 md:py-36 bg-surface/50 border-y border-border" id="casos">
        <div className="container-trama">
          <Reveal>
            <div className="font-sans text-[11px] font-semibold uppercase tracking-[0.2em] text-[hsl(var(--accent))] mb-8">
              Caso de Estudio
            </div>
            <h2 className="h-section max-w-3xl mb-16">
              Transformamos una marca de joyería en una <span className="italic text-[hsl(var(--accent))]">experiencia digital premium</span>.
            </h2>
          </Reveal>

          <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-7">
              <Reveal delay={100}>
                <div className="overflow-hidden rounded-2xl border border-border bg-white aspect-[16/10] flex items-center justify-center">
                  <img
                    src="/cuorehome.avif"
                    alt="Caso Cuore"
                    loading="lazy"
                    className="w-full h-full object-contain"
                  />
                </div>
              </Reveal>
            </div>

            <div className="lg:col-span-5 flex flex-col gap-10 lg:pl-8">
              <Reveal delay={200}>
                <div>
                  <h3 className="font-mono text-xs uppercase tracking-widest text-muted mb-3">El Problema</h3>
                  <p className="text-base text-foreground leading-relaxed">
                    Cuore necesitaba evolucionar de una tienda tradicional a una plataforma digital que reflejara la exclusividad de sus piezas, optimizando a su vez la experiencia de compra para piezas de alto valor.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={300}>
                <div>
                  <h3 className="font-mono text-xs uppercase tracking-widest text-muted mb-3">El Proceso</h3>
                  <p className="text-base text-foreground leading-relaxed">
                    Auditoría de UX, reestructuración del catálogo para facilitar la navegación y diseño de una interfaz minimalista que ceda el protagonismo al producto.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={400}>
                <div>
                  <h3 className="font-mono text-xs uppercase tracking-widest text-muted mb-3">La Solución & Resultado</h3>
                  <p className="text-base text-foreground leading-relaxed">
                    Un producto digital funcional, veloz e inmersivo. El nuevo sistema visual y la arquitectura frontend permitieron escalar el catálogo sin perder la sensación boutique.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={500}>
                <div className="flex flex-wrap gap-2 mt-4">
                  {['UX', 'UI', 'Frontend', 'Arquitectura', 'Performance'].map(tag => (
                    <span key={tag} className="px-3 py-1 text-[10px] font-mono uppercase tracking-wider border border-border rounded-full text-muted">
                      {tag}
                    </span>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── METODOLOGÍA ─────────────────────────────────────────── */}
      <Metodologia />

      {/* ── EL ESTUDIO ─────────────────────────────────────────── */}
      <section className="py-24 md:py-36 bg-surface/40" id="estudio">
        <div className="container-trama">
          <div className="font-sans text-[11px] font-semibold uppercase tracking-[0.2em] text-[hsl(var(--accent))] mb-12">
            El Estudio
          </div>
          <div className="grid gap-16 md:grid-cols-12 md:items-center">
            <div className="md:col-span-5 lg:col-span-4">
              <Reveal>
                <div className="aspect-[4/5] w-full overflow-hidden rounded-sm border border-border bg-surface relative">
                  <img
                    src="/founder-nadia.avif"
                    alt="Nadia Escobio, Directora de HeyTrama"
                    className="founder-portrait absolute inset-0 h-full w-full object-cover grayscale opacity-90"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                </div>
              </Reveal>
            </div>

            <div className="md:col-span-7 lg:col-start-6">
              <Reveal delay={150}>
                <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl leading-tight tracking-tight mb-8">
                  Pensar cómo funciona y <span className="italic text-[hsl(var(--accent))]">construir la tecnología detrás</span>.
                </h2>
                <div className="flex flex-col gap-6">
                  <p className="text-lg leading-relaxed text-muted max-w-xl">
                    HeyTrama nace de la unión entre el diseño estratégico y el desarrollo frontend. Somos un estudio independiente dedicado a crear productos digitales que no solo se ven bien, sino que rinden a nivel técnico y de negocio.
                  </p>
                  <p className="text-lg leading-relaxed text-muted max-w-xl">
                    Dirigido por Nadia, el estudio asegura un acompañamiento cercano y experto en cada etapa del proceso, garantizando que la visión estratégica original no se pierda durante la implementación tecnológica.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ─────────────────────────────────────────────────── */}
      <section className="bg-surface/10 py-24 md:py-36 border-y border-border" id="preguntas">
        <div className="container-narrow">
          <Reveal><div className="eyebrow">PREGUNTAS FRECUENTES</div></Reveal>
          <Reveal delay={80}>
            <h2 className="h-section mt-4 mb-16">
              Antes de <span className="italic text-[hsl(var(--accent))]">empezar</span>.
            </h2>
          </Reveal>

          <div className="grid gap-12">
            {FAQS.map((item, i) => (
              <Reveal key={item.q} delay={i * 100}>
                <div className="border-b border-border pb-8">
                  <h3 className="font-heading text-2xl tracking-tight mb-4">{item.q}</h3>
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
            Contanos qué querés construir y analizaremos la mejor forma de abordarlo desde el diseño y la tecnología.
          </p>

          <div className="mx-auto mt-14 grid max-w-3xl gap-10 md:grid-cols-2 md:gap-14">
            <div>
              <p className="font-mono text-[10px] font-bold uppercase tracking-widest text-muted mb-5">Iniciar conversación</p>
              <ContactForm />
            </div>
            <div className="flex flex-col items-start">
              <p className="font-mono text-[10px] font-bold uppercase tracking-widest text-muted mb-5">O escribinos directo</p>
              <a
                href={waLink("Hola, quiero contarles sobre mi proyecto.")}
                className="btn-primary-trama group"
              >
                <span>WhatsApp</span>
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </a>
              <p className="mt-3 text-xs text-muted">Respuesta en menos de 24 h</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
