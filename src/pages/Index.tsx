import { useEffect, useRef, type WheelEvent } from "react";
import { Link } from "react-router-dom";
import { Reveal } from "@/components/Reveal";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { ContactForm } from "@/components/ContactForm";
import { waLink } from "@/data/projects";
import { projectImages } from "@/data/project-images";
import { setSeo } from "@/lib/seo";
import { ArrowUpRight } from "lucide-react";

const STEPS = [
  { n: "01", t: "Entender", d: "Investigación, contexto de negocio y definición de objetivos reales." },
  { n: "02", t: "Diseñar", d: "Arquitectura de información, experiencia de usuario (UX) y diseño de interfaz (UI)." },
  { n: "03", t: "Construir", d: "Desarrollo frontend, integración tecnológica y optimización de performance." },
  { n: "04", t: "Evolucionar", d: "Medición, iteración y mejora continua del producto digital." },
];

const CAPABILITIES = [
  { name: "Estrategia digital", desc: "Definición de producto, análisis de usuarios y objetivos de negocio." },
  { name: "Diseño UX/UI", desc: "Creación de interfaces usables, accesibles y orientadas a la conversión." },
  { name: "Sistemas visuales", desc: "Dirección de arte y diseño de sistemas escalables para productos." },
  { name: "Desarrollo frontend", desc: "Código limpio, performante y preparado para crecer." },
  { name: "Productos digitales a medida", desc: "Soluciones completas desarrolladas específicamente para necesidades complejas." },
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
              Desde la estrategia hasta el código: convertimos ideas y procesos en experiencias digitales funcionales.
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

      {/* ── FILOSOFÍA ─────────────────────────────────────────── */}
      <section className="relative py-24 md:py-36" id="filosofia">
        <div className="container-trama">
          <Reveal>
            <div className="font-sans text-[11px] font-semibold uppercase tracking-[0.2em] text-[hsl(var(--accent))] mb-8">
              Filosofía
            </div>
            <h2 className="font-heading text-3xl md:text-5xl lg:text-6xl leading-[1.1] tracking-tight max-w-[20ch]" style={{ textWrap: "balance" }}>
              Antes de diseñar una pantalla, entendemos qué necesita resolver el producto.
            </h2>
            <div className="mt-8 grid gap-6 md:grid-cols-2 max-w-4xl">
              <p className="text-lg text-muted leading-relaxed">
                Creemos que el diseño visual es la consecuencia lógica de una estrategia sólida. Un producto digital no puede tener éxito si no comprende profundamente el modelo de negocio que lo sustenta y a los usuarios que lo consumen.
              </p>
              <p className="text-lg text-foreground font-medium leading-relaxed">
                Alineamos objetivos de negocio con necesidades humanas, aportando claridad antes de escribir la primera línea de código.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── CASO CUORE (SECCIÓN PRINCIPAL) ─────────────────────── */}
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
                <div className="overflow-hidden rounded-2xl border border-border bg-white">
                    <img 
                      src="/cuorehome.avif" 
                      alt="Caso Cuore"
                      loading="lazy"
                      className="w-full h-auto aspect-[4/3] object-cover"
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

      {/* ── METODOLOGÍA DE PRODUCTO (PROCESO) ─────────────────── */}
      <section className="bg-background py-24 md:py-36" id="proceso">
        <div className="container-trama px-8 md:px-12 lg:px-16">
          <Reveal>
            <div className="font-sans text-[11px] font-semibold uppercase tracking-[0.2em] text-[hsl(var(--accent))] mb-12 text-center">
              Metodología
            </div>
          </Reveal>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {STEPS.map((s, i) => (
              <Reveal key={s.n} delay={i * 100}>
                <div className="trama-card p-1.5 h-full">
                  <div className="trama-card-inner p-6 md:p-8 flex flex-col justify-start h-full">
                    <div className="font-mono text-2xl font-light text-[hsl(var(--accent))]/20 mb-6">
                      {s.n}
                    </div>
                    <h3 className="font-heading text-2xl mb-4 tracking-tight">
                      {s.t}
                    </h3>
                    <p className="text-sm leading-relaxed text-[#444444]">
                      {s.d}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CAPACIDADES ────────────────────────────────────────── */}
      <section className="py-24 md:py-36" id="capacidades">
        <div className="container-trama">
          <Reveal>
            <div className="font-sans text-[11px] font-semibold uppercase tracking-[0.2em] text-[hsl(var(--accent))] mb-8">
              Capacidades
            </div>
            <h2 className="h-section mt-4 max-w-[14ch]">
              Cómo construimos <span className="italic text-[hsl(var(--accent))]">soluciones</span>.
            </h2>
          </Reveal>

          <div className="mt-16 border-t border-border">
            {CAPABILITIES.map((cap, i) => (
              <Reveal key={cap.name} delay={i * 50}>
                <div className="grid gap-4 md:grid-cols-12 md:items-center py-8 md:py-12 border-b border-border group hover:bg-surface/20 transition-colors duration-500">
                  <div className="md:col-span-5">
                    <h3 className="font-heading text-2xl tracking-tight text-foreground">
                      {cap.name}
                    </h3>
                  </div>
                  <div className="md:col-span-7">
                    <p className="text-lg leading-relaxed text-muted">
                      {cap.desc}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── SOBRE HEYTRAMA (ESTUDIO) ───────────────────────────── */}
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

      {/* ── FAQ ESTRATÉGICO ────────────────────────────────────── */}
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
