import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Reveal } from "@/components/Reveal";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { MouseGlow } from "@/components/MouseGlow";
import { HeroCarousel } from "@/components/HeroCarousel";
import { projects, waLink } from "@/data/projects";
import { projectImages } from "@/data/project-images";
import { ArrowUpRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const HERO_SLIDES = [
  { slug: "bosco", label: "Bosco Argentina" },
  { slug: "estudio-norte", label: "Estudio Norte" },
  { slug: "clinica-nova", label: "Clínica Nova" },
  { slug: "camila-correa", label: "Camila Correa" },
];



const PLANS = [
  {
    name: "Landing Trama",
    price: "USD 350",
    desc: "Para cuando necesitás un lugar claro a donde mandar a la gente. Lista en 10 días hábiles.",
    includes: ["Diseño y desarrollo desde cero", "Copy y redacción de todo el contenido", "Versión mobile optimizada", "SEO básico y velocidad", "El código es tuyo para siempre", "Seguimiento a los 15 días"],
    excludes: ["Dominio y hosting", "Fotografías del negocio"],
    featured: false,
  },
  {
    name: "Web Institucional",
    price: "USD 550",
    desc: "Para cuando tu negocio necesita más espacio para contar lo que hace. Lista en 18 días hábiles.",
    includes: ["Todo lo del plan Landing", "Hasta 5 secciones o páginas", "Sección de testimonios o casos", "Integración con Google Analytics", "El sitio queda en tus manos", "Seguimiento a los 15 días"],
    excludes: ["Dominio y hosting", "Fotografías del negocio"],
    featured: true,
  },
  {
    name: "Motor de Ventas",
    price: "USD 850",
    desc: "Catálogo, pagos, stock y panel propio. Todo tuyo desde el primer día.",
    includes: ["Todo lo del plan Institucional", "Catálogo con filtros y buscador", "Integración MercadoPago", "Panel de administración simple", "Sin dependencia técnica", "Seguimiento a los 15 días"],
    excludes: ["Dominio y hosting", "Fotografías de productos"],
    featured: false,
  },
];

const EXTRAS = [
  { name: "Mantenimiento", desc: "Trama disponible después de la entrega. Hasta 3 cambios por mes, respuesta en 48h. Mínimo 3 meses.", price: "USD 60", per: "/mes" },
  { name: "Dominio", desc: "Gestionamos el registro y la configuración. Al finalizar queda transferido a tu nombre. No incluye renovación anual.", price: "USD 20", per: "" },
];

const STEPS = [
  { n: "01", t: "Conversación", d: "Antes de cualquier presupuesto, entiendo tu negocio en una sesión de diagnóstico de 60 min. Sin cuestionarios genéricos." },
  { n: "02", t: "Estrategia y copy", d: "Extraigo tu conocimiento y lo traduzco a un mensaje que venda. Defino qué decir y en qué orden." },
  { n: "03", t: "Diseño y código", d: "Código estático, rápido y documentado. Construido para durar, sin depender de plataformas cerradas." },
  { n: "04", t: "Entrega total", d: "Recibís el código y una Guía de Soberanía para editar contenidos. Sos dueño total de tu activo." },
];

const FAQS = [
  { q: "¿Por qué no me cobrás por hora?", a: "Porque no te conviene a vos ni a mí. Cobro por proyecto, con alcance y plazo definidos. Vos sabés lo que vas a pagar antes de empezar. Yo me concentro en hacerlo bien, no en estirar las horas." },
  { q: "¿Puedo editar la web después?", a: "Sí. Te entrego el código + una Guía de Soberanía para que puedas editar textos, imágenes y secciones desde una interfaz visual. No quedás atado a mí ni a ninguna plataforma cerrada." },
  { q: "¿Y si no me gusta el diseño?", a: "Antes de tocar una sola línea de código te muestro la dirección visual y la estructura del copy. Iteramos ahí, no después. Cuando empiezo a programar, ya sabemos los dos a dónde vamos." },
  { q: "¿Cuánto tarda?", a: "Una landing entre 8 y 10 días hábiles. Una web institucional entre 15 y 18. Un motor de ventas entre 25 y 30. Plazos reales, no marketing." },
  { q: "¿Trabajás con clientes fuera de Argentina?", a: "Sí. La facturación es en USD y la comunicación es por WhatsApp o llamada según prefieras. Toda la documentación queda en español o inglés." },
];

const Index = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const container = useRef(null);
  const problemText = useRef(null);

  useEffect(() => {
    const t = setInterval(
      () => setActiveSlide((p) => (p + 1) % HERO_SLIDES.length),
      3200
    );
    return () => clearInterval(t);
  }, []);

  useGSAP(() => {
    // Scrubbing Text Reveal for Problem Section
    if (problemText.current) {
      const words = problemText.current.querySelectorAll(".reveal-word");
      gsap.fromTo(words, 
        { opacity: 0.1 },
        { 
          opacity: 1, 
          stagger: 0.1,
          scrollTrigger: {
            trigger: problemText.current,
            start: "top 80%",
            end: "top 20%",
            scrub: true,
          }
        }
      );
    }

    // Responsive Motion Logic
    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      // Pinning for Metodo Section — Desktop Only
      const st = ScrollTrigger.create({
        trigger: "#metodo",
        start: "top 10%",
        end: "bottom 90%",
        pin: "#metodo-title",
        pinSpacing: false,
        invalidateOnRefresh: true,
      });
      return () => st.kill();
    });

    return () => mm.revert();
  }, { scope: container });

  return (
    <div ref={container} className="relative min-h-screen selection:bg-[hsl(var(--accent))] selection:text-white overflow-x-hidden">
      <MouseGlow />
      <Nav />

      {/* ── HERO — split screen ───────────────────────────────────── */}
      <section className="relative min-h-[100dvh] flex flex-col justify-center pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden">
        {/* Ambient Light Spot */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[radial-gradient(circle,hsla(40,20%,90%,0.3)_0%,transparent_70%)] pointer-events-none" />
        
        <div className="container-trama w-full relative z-10">
          <div className="grid gap-12 lg:gap-24 md:grid-cols-2 items-center">
            
            {/* Left: copy */}
            <div className="order-1 md:order-1">
              <Reveal>
                <div className="font-sans text-[11px] font-semibold uppercase tracking-[0.2em] text-[hsl(var(--accent))] mb-6">
                  Estrategia - Diseño - Código
                </div>
              </Reveal>
              <h1 className="font-heading animate-slide-up opacity-0 leading-[1.02] tracking-[-0.04em] text-[36px] md:text-6xl lg:text-8xl" style={{ animationDelay: "150ms", textWrap: "balance" }}>
                Tu negocio merece una{" "}
                <span className="italic text-[hsl(var(--accent))]">web que trabaje.</span>
              </h1>
              <p className="mt-6 max-w-md text-sm md:text-base text-muted leading-relaxed animate-slide-up opacity-0" style={{ animationDelay: "350ms" }}>
                Construyo interfaces que convierten la recomendación en decisión. 
                Sin plantillas, sin intermediarios. Código puro bajo un mismo estándar estético.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-6 animate-slide-up opacity-0" style={{ animationDelay: "550ms" }}>
                <a href={waLink("Hola, vi Trama Studio y quiero contarte sobre mi proyecto.")} className="btn-primary-trama large group">
                  <span>Iniciar proyecto</span>
                  <div className="btn-icon-wrapper">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </a>
                <div className="hidden sm:flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="font-mono text-[9px] uppercase tracking-widest text-muted">Disponibilidad inmediata</span>
                </div>
              </div>
            </div>

            {/* Right: auto-rotating carousel */}
            <div className="order-2 md:order-2">
              <HeroCarousel
                slides={HERO_SLIDES}
                active={activeSlide}
                setActive={setActiveSlide}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── INFINITE MARQUEE — Corrected for seamless loop ──────────────── */}
      <div className="relative border-y border-border/60 bg-surface/30 py-6 md:py-10 overflow-hidden marquee-mask">
        <div className="flex animate-marquee whitespace-nowrap w-fit">
          {[1, 2].map((n) => (
            <div key={n} className="flex gap-10 md:gap-20 px-5 md:px-10 items-center">
              {["SITIOS DE ALTA CONVERSIÓN", "DESARROLLO A MEDIDA", "ESTRATEGIA DIGITAL", "PERFORMANCE SEO"].map((text, i) => (
                <div key={i} className="flex items-center gap-6 md:gap-10">
                  <span className="font-mono text-[12px] md:text-[14px] font-black tracking-[0.3em] md:tracking-[0.4em] text-foreground/90">{text}</span>
                  <div className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-[hsl(var(--accent))]" />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* ── PROBLEMA — Scrubbing Reveal ─────────────────────────────────────────── */}
      <section className="relative py-32 md:py-48" id="problema">
        <div className="container-trama">
          <div className="font-sans text-[11px] font-semibold uppercase tracking-[0.2em] text-[hsl(var(--accent))] mb-8">
            El Panorama
          </div>
          <h2 ref={problemText} className="font-heading text-3xl md:text-5xl lg:text-6xl leading-[1.1] tracking-tight max-w-[20ch]" style={{ textWrap: "balance" }}>
            {"Tus clientes actuales te recomiendan. Los nuevos te investigan. Si tu web no proyecta la misma solidez que tu trabajo, la recomendación se muere ahí.".split(" ").map((word, i) => (
              <span key={i} className="reveal-word inline-block mr-[0.25em]">{word}</span>
            ))}
          </h2>

          <div className="mt-16 grid gap-6 md:grid-cols-12">
            {/* Main Situational Card — Left */}
            <Reveal className="trama-card p-2 md:col-span-7">
              <div className="trama-card-inner p-8 md:p-12 h-full flex flex-col justify-center">
                <div className="font-mono text-[10px] font-bold tracking-widest text-[hsl(var(--accent))] mb-8">01 / SITUACIÓN</div>
                <h3 className="font-heading text-3xl md:text-5xl tracking-[-0.02em] leading-tight">El que no te conoce.</h3>
                <p className="mt-6 text-lg leading-relaxed text-[#666666]">
                  Tus clientes actuales llegaron por recomendación. Los que no te conocen buscan en internet y{" "}
                  <span className="text-foreground font-medium">no encuentran nada que les diga por qué elegirte a vos</span>.
                </p>
              </div>
            </Reveal>
            
            {/* Right Column with two stacked cards */}
            <div className="md:col-span-5 flex flex-col gap-6">
              <Reveal className="trama-card p-2 flex-1" delay={100}>
                <div className="trama-card-inner p-8 h-full">
                  <div className="font-mono text-[10px] font-bold tracking-widest text-[hsl(var(--accent))]">02 / VALOR</div>
                  <h3 className="font-heading text-2xl mt-4 tracking-tight">Percepción de valor.</h3>
                  <p className="mt-3 text-base leading-relaxed text-[#666666]">
                    Si tu presencia online no está a la altura de tu servicio real, tu precio no tiene dónde apoyarse.
                  </p>
                </div>
              </Reveal>

              <Reveal className="trama-card p-2 flex-1" delay={200}>
                <div className="trama-card-inner p-8 h-full">
                  <div className="font-mono text-[10px] font-bold tracking-widest text-[hsl(var(--accent))]">03 / CONVERSIÓN</div>
                  <h3 className="font-heading text-2xl mt-4 tracking-tight">Atención perdida.</h3>
                  <p className="mt-3 text-base leading-relaxed text-[#666666]">
                    Si en los primeros cinco segundos no queda claro qué hacés, el visitante se va.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── TRABAJOS — Portfolio Grid ─────────────────────────────────────────── */}
      <section className="py-32 md:py-48 bg-surface/50 border-y border-border" id="trabajos">
        <div className="container-trama">
          <div className="font-sans text-[11px] font-semibold uppercase tracking-[0.2em] text-[hsl(var(--accent))] mb-8">
            Proyectos Seleccionados
          </div>
          <h2 className="h-section max-w-[16ch]">Casos de estudio.</h2>
          
          <div className="mt-20 grid gap-10 md:grid-cols-2">
            {projects.slice(0, 4).map((project, i) => (
              <Reveal key={project.slug} delay={i * 100}>
                <Link to={`/proyectos/${project.slug}`} className="trama-card p-2 group block overflow-hidden">
                  <div className="trama-card-inner p-0">
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <img 
                        src={projectImages[project.slug === 'bosco' ? 'bosco-proj' : project.slug]} 
                        alt={project.name}
                        className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105"
                      />

                      <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-700" />
                    </div>
                    <div className="p-8 md:p-10 bg-white">
                      <div className="font-mono text-[10px] font-bold tracking-[0.3em] text-[hsl(var(--accent))] mb-4 uppercase flex flex-wrap items-center gap-x-3">
                        <span>{project.number} — {project.category}</span>
                        {project.isConcept && (
                          <span className="font-sans text-[9px] lowercase tracking-normal bg-[hsl(var(--accent))]/10 text-[hsl(var(--accent))] px-2 py-0.5 rounded-full">
                            (Concepto de autor)
                          </span>
                        )}
                      </div>
                      <h3 className="font-heading text-3xl md:text-4xl text-foreground tracking-tight leading-tight transition-colors duration-500 group-hover:text-[hsl(var(--accent))]">
                        {project.name} <span className="italic text-muted-foreground">{project.accent}</span>
                      </h3>
                      <p className="mt-4 text-muted text-sm md:text-base leading-relaxed line-clamp-2">
                        {project.tagline}
                      </p>
                      {project.result && (
                        <div className="mt-6 flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                          <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-green-700">Resultado: {project.result}</span>
                        </div>
                      )}
                      <div className="mt-8 flex items-center gap-3 text-[hsl(var(--accent))] font-sans text-xs font-semibold uppercase tracking-widest">
                        <span>Ver caso de estudio</span>
                        <ArrowUpRight className="w-4 h-4 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" />
                      </div>
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIAL EDITORIAL ──────────────────────────────────── */}
      <section className="border-y border-border py-32 md:py-48 bg-surface/20">
        <div className="container-trama text-center">
          <Reveal>
            <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-[hsl(var(--accent))]">
              Caso de éxito · Bosco Argentina
            </div>
          </Reveal>
          <Reveal delay={100}>
            <blockquote className="mx-auto mt-8 max-w-4xl font-heading text-3xl md:text-5xl lg:text-6xl leading-[1.1] tracking-[-0.02em] text-foreground">
              "Buscábamos alguien que entienda el negocio, no solo que dibuje interfaces. <span className="italic text-muted">Era lo que queríamos. Quedó muy sólida.</span>"
            </blockquote>
          </Reveal>
          <Reveal delay={200}>
            <div className="mt-12 flex items-center justify-center gap-4">
              <div className="h-[1px] w-12 bg-border" />
              <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-foreground">
                Lautaro, Founder
              </div>
              <div className="h-[1px] w-12 bg-border" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── MÉTODO — GSAP Pinned Section ───────────────────────────────────────────────── */}
      <section className="bg-background py-32 md:py-48" id="metodo">
        <div className="container-trama px-8 md:px-12 lg:px-16">
          <div className="grid gap-20 md:grid-cols-12">
            
            {/* Pinned Title — Balanced Spacing */}
            <div className="md:col-span-4 lg:col-span-5">
              <div id="metodo-title" className="md:pt-4">
                <div className="font-sans text-[11px] font-semibold uppercase tracking-[0.2em] text-[hsl(var(--accent))] mb-8">
                  El Proceso
                </div>
                <h2 className="font-heading text-5xl md:text-7xl leading-tight tracking-tight" style={{ textWrap: "balance" }}>
                  Método <br />
                  <span className="italic text-[hsl(var(--accent))]">Trama™</span>
                </h2>
                <p className="mt-10 max-w-sm text-lg text-muted leading-relaxed">
                  Estrategia primero. Copy después. Diseño al final. En ese orden, porque 
                  al revés no funciona.
                </p>
              </div>
            </div>

            {/* Scrolling Steps — Grid layout for better scanning */}
            <div className="md:col-span-8 lg:col-span-7 grid gap-6 md:grid-cols-2">
              {STEPS.map((s, i) => (
                <div key={s.n} className="trama-card p-1.5">
                  <div className="trama-card-inner p-6 md:p-8 min-h-[220px] flex flex-col justify-between">
                    <div className="flex justify-between items-start">
                      <div className="font-mono text-2xl font-light text-[hsl(var(--accent))]/20">
                        {s.n}
                      </div>
                      <div className="w-8 h-px bg-border" />
                    </div>
                    <div>
                      <h3 className="font-heading text-2xl mb-3 tracking-tight">
                        {s.t}
                      </h3>
                      <p className="text-xs md:text-sm leading-relaxed text-[#444444]">
                        {s.d}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICIOS — horizontal editorial rows ────────────────── */}
      <section className="py-32 md:py-48" id="servicios">
        <div className="container-trama">
          <div className="font-sans text-[11px] font-semibold uppercase tracking-[0.2em] text-[hsl(var(--accent))] mb-8">
            Capacidades
          </div>
          <Reveal delay={80}>
            <h2 className="h-section mt-4 max-w-[14ch]">
              Lo que <span className="italic text-[hsl(var(--accent))]">construimos</span>.
            </h2>
          </Reveal>
          <Reveal delay={140}>
            <p className="mt-6 max-w-xl text-base text-muted leading-relaxed">
              Inversión única. Sin cuotas mensuales. Pagás por criterio y ejecución directa.
            </p>
          </Reveal>

          <div className="mt-16 space-y-px bg-border border-y border-border">
            {PLANS.map((p, i) => (
              <Reveal key={p.name} delay={i * 100}>
                <div className={`group relative py-16 transition-all duration-500 ${p.featured ? 'bg-surface shadow-[0_0_50px_-12px_rgba(0,0,0,0.15)] z-10 scale-[1.02] border-x border-border/40' : 'bg-surface/40 hover:bg-surface/60'}`}>
                  {p.featured && (
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[hsl(var(--accent))] text-white font-mono text-[9px] uppercase tracking-[0.3em] px-4 py-1.5 rounded-full">
                      Recomendado
                    </div>
                  )}
                  <div className="container-trama grid gap-12 md:grid-cols-12 md:items-start">
                    <div className="md:col-span-4">
                      <div className="font-mono text-[10px] font-bold uppercase tracking-[0.3em] text-[hsl(var(--accent))]">PLAN / {p.name}</div>
                      <h3 className="font-heading text-4xl md:text-5xl mt-6 tracking-tight">{p.price}</h3>
                    </div>
                    
                    <div className="md:col-span-5">
                      <p className="text-lg leading-relaxed text-[#666666] max-w-md">{p.desc}</p>
                      <ul className="mt-8 space-y-4">
                        {p.includes.map((it) => (
                          <li key={it} className="flex items-center gap-4 text-[13px] text-[#444444]">
                            <div className="w-1.5 h-1.5 rounded-full bg-[hsl(var(--accent))] opacity-40" />
                            {it}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="md:col-span-3 flex md:justify-end md:pt-2">
                      <a
                        href={waLink(`Hola, me interesa el plan ${p.name}.`)}
                        className="btn-primary-trama group"
                      >
                        <span>Iniciar proyecto</span>
                        <div className="btn-icon-wrapper">
                          <ArrowUpRight className="w-4 h-4" />
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Extras — mismas filas que los planes */}
          {EXTRAS.map((m) => (
            <Reveal key={m.name}>
              <div className="border-b border-border py-10 transition-colors duration-300 hover:bg-surface/20">
                <div className="grid gap-6 md:grid-cols-12 md:items-center">
                  <div className="md:col-span-3 lg:col-span-3">
                    <div className="font-mono text-xs font-bold uppercase tracking-wider text-muted">{m.name}</div>
                  </div>
                  <div className="md:col-span-6 lg:col-span-6">
                    <p className="text-xs leading-relaxed text-muted/70 max-w-lg">{m.desc}</p>
                  </div>
                  <div className="md:col-span-3 lg:col-span-3 flex md:justify-end">
                    <div className="font-heading text-3xl text-muted">
                      {m.price}<span className="text-sm font-mono tracking-widest">{m.per}</span>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}

          {/* Footnote pago */}
          <p className="mt-8 text-[11px] text-muted/55 leading-relaxed max-w-2xl">
            <span className="font-mono uppercase tracking-[0.15em] text-muted/70 mr-2">Pago —</span>
            50% al inicio · 50% al entregar. Precios en USD, abonables en dólares o pesos al MEP del día.
          </p>
        </div>
      </section>

      {/* ── FAQ — grid layout (sin acordeón) ─────────────────────── */}
      <section className="bg-surface/40 py-32 md:py-48" id="faq">
        <div className="container-narrow">
          <Reveal><div className="eyebrow">PREGUNTAS QUE ME HACEN</div></Reveal>
          <Reveal delay={80}>
            <h2 className="h-section mt-4">
              Antes de <span className="italic text-[hsl(var(--accent))]">escribirme</span>.
            </h2>
          </Reveal>

          <div className="mt-20 grid gap-x-20 gap-y-20 md:grid-cols-2">
            {FAQS.map((item, i) => (
              <Reveal key={item.q} delay={i * 50}>
                <div>
                  <h3 className="font-heading text-xl italic leading-tight">{item.q}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{item.a}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOUNDER ──────────────────────────────────────────────── */}
      <section className="py-32 md:py-48" id="founder">
        <div className="container-trama">
          <div className="font-sans text-[11px] font-semibold uppercase tracking-[0.2em] text-[hsl(var(--accent))] mb-12">
            Fundador
          </div>
          <div className="grid gap-16 md:grid-cols-12 md:items-start">
            {/* Visual Block — Optimized for diverse viewports */}
            <div className="md:col-span-5 lg:col-span-4">
              <Reveal>
                <div className="group relative flex aspect-[4/5] min-h-[450px] w-full flex-col justify-end overflow-hidden rounded-sm border border-border bg-surface p-8">
                  <img 
                    src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop" 
                    alt="Abstract architecture" 
                    className="absolute inset-0 h-full w-full object-cover opacity-30 grayscale transition-all duration-700 group-hover:scale-105 group-hover:opacity-50 group-hover:grayscale-0"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent" />
                  
                  <div className="relative z-10">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="mb-6 text-[hsl(var(--accent))] opacity-60">
                      <path d="M3 21c3 0 7-1 7-8V5h-7v8h3c0 4-3 5-3 5z"></path>
                      <path d="M14 21c3 0 7-1 7-8V5h-7v8h3c0 4-3 5-3 5z"></path>
                    </svg>
                    <blockquote className="font-heading text-xl md:text-2xl italic leading-tight text-foreground">
                      "El diseño viene después — como consecuencia de lo que ya está claro, no como solución a lo que todavía no."
                    </blockquote>
                    <div className="mt-6 flex items-center gap-3">
                      <div className="h-[1px] w-6 bg-[hsl(var(--accent))]" />
                      <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                        Founder, Trama
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Copy Block */}
            <div className="md:col-span-7 lg:col-start-6">
              <Reveal><div className="eyebrow">CÓMO PIENSO</div></Reveal>
              <Reveal delay={80}>
                <h2 className="h-section mt-6">
                  No vendo páginas.
                  <br />
                  <span className="italic text-[hsl(var(--accent))]">Vendo criterio.</span>
                </h2>
              </Reveal>
              <div className="mt-10 flex flex-col gap-6">
                {[
                  "No diseño para gustar. Diseño para que el negocio detrás de la web se entienda antes de que alguien pregunte el precio. Eso requiere criterio sobre qué decir, cómo decirlo y cómo mostrarlo. Las tres cosas juntas, bajo el mismo estándar.",
                  "El proceso siempre empieza por la estrategia. Qué tiene que entender el visitante, en qué orden, con qué palabras.",
                  "El resultado no es una web bonita. Es un negocio que se ve a la altura de lo que vale. Construido con código que cualquier profesional puede mantener, para que no dependas de mí ni de nadie más para seguir adelante.",
                ].map((t, i) => (
                  <Reveal key={i} delay={140 + (i * 60)}>
                    <p className="text-base leading-relaxed text-muted max-w-xl">{t}</p>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CONTACTO ─────────────────────────────────────────────── */}
      <section className="border-t border-border py-24 text-center md:py-32" id="contacto">
        <div className="container-narrow">
          <Reveal>
            <h2 className="h-section max-w-[20ch] mx-auto" style={{ textWrap: "balance" }}>
              Contame qué tenés y qué buscás. El resto lo resolvemos juntos.
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="mx-auto mt-6 max-w-lg text-lg text-muted leading-relaxed">
              Sin compromiso. Me explicás tu situación en dos líneas y te digo
              concretamente qué se puede hacer.
            </p>
          </Reveal>
          <Reveal delay={220}>
            <a
              href={waLink("Hola, vi Trama Studio y quiero contarte sobre mi proyecto.")}
              className="btn-primary-trama large group mt-10"
            >
              <span>Iniciar conversación</span>
              <div className="btn-icon-wrapper">
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </a>
          </Reveal>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
