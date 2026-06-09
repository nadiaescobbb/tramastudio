import { useEffect, useRef, type WheelEvent } from "react";
import { Link } from "react-router-dom";
import { Reveal } from "@/components/Reveal";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { ContactForm } from "@/components/ContactForm";
import { projects, waLink } from "@/data/projects";
import { projectImages } from "@/data/project-images";
import { setSeo } from "@/lib/seo";
import { ArrowUpRight } from "lucide-react";



const PLANS = [
  {
    name: "Esencial",
    target: "Profesionales y marcas personales",
    desc: "Una web clara para presentar tu trabajo y facilitar el primer contacto.",
    includes: ["Estrategia de contenido", "Redacción del sitio", "Diseño a medida", "Desarrollo en código propio", "Sitio responsive", "Preparación básica para edición", "Reunión inicial de 60 min."],
    featured: false,
  },
  {
    name: "Autoridad",
    target: "Estudios, consultoras y empresas de servicios",
    desc: "Explicá mejor cómo trabajás y generá consultas más alineadas.",
    includes: ["Todo lo del plan Esencial", "Hasta 5 secciones clave", "Estructura pensada para servicios de mayor ticket", "Copy orientado a la toma de decisión", "Integración de métricas", "Guía para editar textos e imágenes"],
    featured: false,
  },
  {
    name: "A Medida",
    target: "Proyectos con requerimientos específicos",
    desc: "Funcionalidades específicas, integraciones o una arquitectura preparada para crecer.",
    includes: ["Todo lo del plan Autoridad", "Desarrollo de funcionalidades personalizadas", "Arquitectura escalable", "Optimización de carga y estructura", "Documentación técnica básica", "Acompañamiento post-lanzamiento inicial"],
    featured: false,
  },
];

const EXTRAS = [
  { name: "Mantenimiento opcional", desc: "Si después de la entrega necesitás ayuda con cambios o actualizaciones, podés contratar mantenimiento cuando lo necesites." },
  { name: "Gestión técnica inicial", desc: "Configuración de dominio y entorno para que no tengas que lidiar con esa parte. El registro siempre queda a tu nombre." },
];

const STEPS = [
  { n: "01", t: "Estrategia", d: "Defino **qué necesita entender la persona que entra a tu web**: qué ofrecés, para quién es, por qué confiar y cuál es el próximo paso." },
  { n: "02", t: "Copywriting", d: "Escribo el contenido del sitio para que las personas entiendan qué hacés, cómo trabajás y por qué elegirte." },
  { n: "03", t: "Diseño y código", d: "Diseño una interfaz que acompañe el contenido. Después la desarrollo en **código propio**, cuidando velocidad, estructura y adaptación a cada pantalla." },
  { n: "04", t: "Entrega", d: "El sitio queda listo para usar, editar y gestionar. Si después necesitás ayuda con cambios o mantenimiento, **podés contratarlo por separado**." },
];

const FAQS = [
  { q: "¿Cuánto cuesta?", a: "Cada proyecto es diferente.\n\nPrimero conversamos sobre tu negocio y lo que necesitás. Después recibís una propuesta clara, con alcance, tiempos y presupuesto definidos." },
  { q: "¿Puedo editar la web después?", a: "Sí. Te dejo una guía simple para editar textos e imágenes básicas.\n\nSi preferís delegar cambios, también podés contratar mantenimiento." },
  { q: "¿Necesito tener textos, fotos o marca antes de empezar?", a: "No necesariamente.\n\nSi ya tenés material, lo reviso y lo organizo. Si falta algo, te indico qué conviene producir y qué puede resolverse desde el contenido y la estructura del sitio." },
  { q: "¿Qué pasa si no sé qué decir en mi web?", a: "Es parte del trabajo.\n\nPrimero ordenamos tu oferta, tus servicios y las dudas de tus clientes. Después escribo el contenido para que se entienda con claridad." },
  { q: "¿Hay mensualidad obligatoria?", a: "No.\n\nEl sitio se desarrolla por proyecto. El mantenimiento es opcional." },
  { q: "¿Qué plan me conviene?", a: "Lo definimos en la primera conversación.\n\nTe recomiendo el alcance que mejor se adapte a tu situación y objetivos." },
  { q: "¿Cuánto tarda?", a: "Un sitio con estructura habitual suele tomar entre 4 y 6 semanas de trabajo enfocado.\n\nEn desarrollos a medida o con requerimientos específicos, definimos el plazo exacto durante la primera conversación." },
  { q: "¿Trabajás con clientes fuera de Argentina?", a: "Sí.\n\nTrabajo con clientes de distintos países y la comunicación puede ser por WhatsApp o llamada." },
];

const HERO_MARQUEE_ITEMS = [
  { slug: "bosco", title: "Bosco", label: "Landing de ventas", tone: "dark" },
  { slug: "joyeria-cuore", title: "Cuore", label: "Catálogo y taller", tone: "light" },
  { slug: "estudio-norte", title: "Estudio Norte", label: "Sitio institucional", tone: "light" },
  { slug: "clinica-nova", title: "Clínica Nova", label: "Caso conceptual", tone: "light" },
  { slug: "camila-correa", title: "Camila Correa", label: "Caso conceptual", tone: "light" },
];

const Index = () => {
  const heroMarqueeRef = useRef<HTMLDivElement>(null);
  const heroMarqueeOffset = useRef(0);

  useEffect(() => {
    setSeo({
      title: "Trama Studio — Diseño web, copy y desarrollo para servicios.",
      description: "Diseño web, copy y desarrollo a medida para profesionales, marcas personales y empresas de servicios que necesitan convertir visitas en consultas reales.",
    });
  }, []);

  const heroMarqueeTicking = useRef(false);
  const handleHeroMarqueeWheel = (event: WheelEvent<HTMLDivElement>) => {
    if (!heroMarqueeRef.current || heroMarqueeTicking.current) return;
    heroMarqueeTicking.current = true;

    event.preventDefault();
    heroMarqueeOffset.current = (heroMarqueeOffset.current - event.deltaY * 0.42) % 1800;

    requestAnimationFrame(() => {
      if (heroMarqueeRef.current) {
        heroMarqueeRef.current.style.setProperty("--hero-marquee-offset", `${heroMarqueeOffset.current}px`);
      }
      heroMarqueeTicking.current = false;
    });
  };

  return (
    <div className="relative min-h-screen selection:bg-[hsl(var(--accent))] selection:text-white overflow-x-hidden">
      <Nav />

      {/* HERO */}
      <section className="hero-start relative h-dvh overflow-hidden">
        <div className="hero-texture" />

        <div className="container-trama relative z-10 grid h-dvh items-center gap-10 pb-14 pt-28 md:grid-cols-[0.95fr_1.05fr] md:pb-8 md:pt-20 lg:gap-16">
          <div className="w-full min-w-0 max-w-[calc(100vw-48px)] overflow-hidden md:max-w-[640px]">
            <h1 className="hero-title animate-slide-up opacity-0" style={{ animationDelay: "80ms" }}>
              Sitios claros, escritos y diseñados <br />
              <span className="italic">para que tu negocio se entienda mejor.</span>
            </h1>
            <div className="hero-actions mt-6 flex flex-wrap items-center gap-3 animate-slide-up opacity-0" style={{ animationDelay: "520ms" }}>
              <a href={waLink("Hola, vi Trama Studio y quiero contarte sobre mi proyecto.")} className="hero-primary-cta group">
                <span>Contame de tu proyecto</span>
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </a>
              <a href="#trabajos" className="hero-secondary-cta">
                Ver trabajos
              </a>
            </div>
          </div>

          <div className="hero-visual hero-marquee-stage" aria-hidden="true" onWheel={handleHeroMarqueeWheel}>
            <div className="hero-marquee-fade hero-marquee-fade-top" />
            <div className="hero-marquee-fade hero-marquee-fade-bottom" />

            <div className="hero-marquee-track" ref={heroMarqueeRef}>
              {[...HERO_MARQUEE_ITEMS, ...HERO_MARQUEE_ITEMS].map((item, itemIndex) => (
                <article className={`hero-marquee-card is-${item.tone}`} key={`${item.slug}-${itemIndex}`}>
                  <img src={projectImages[item.slug]} alt="" loading={itemIndex < 2 ? "eager" : "lazy"} fetchpriority={itemIndex === 0 ? "high" : "auto"} decoding="async" />
                  <div className="hero-marquee-card-overlay" />
                  <div className="hero-marquee-card-copy">
                    <span>{item.label}</span>
                    <strong>{item.title}</strong>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* ── PANORAMA ─────────────────────────────────────────── */}
      <section className="relative py-24 md:py-36" id="problema">
        <div className="container-trama">
          <div className="font-sans text-[11px] font-semibold uppercase tracking-[0.2em] text-[hsl(var(--accent))] mb-8">
            El Panorama
          </div>
          <h2 className="font-heading text-3xl md:text-5xl lg:text-6xl leading-[1.1] tracking-tight max-w-[20ch]" style={{ textWrap: "balance" }}>
            Hay negocios que generan confianza apenas los conocés.
          </h2>
          <p className="mt-6 text-lg md:text-xl text-muted max-w-xl leading-relaxed">
            El desafío es transmitir eso antes del primer contacto.
          </p>
          <p className="mt-4 text-lg md:text-xl text-muted max-w-xl leading-relaxed">
            Por eso en Trama trabajo el contenido, el diseño y el desarrollo como partes de una misma experiencia.
          </p>
          <p className="mt-4 text-lg md:text-xl text-foreground max-w-xl leading-relaxed font-medium">
            Primero ordeno qué hay que decir. Después diseño cómo mostrarlo.
          </p>
        </div>
      </section>

      {/* ── TRABAJOS — Portfolio Grid ─────────────────────────────────────────── */}
      <section className="py-24 md:py-36 bg-surface/50 border-y border-border" id="trabajos">
        <div className="container-trama">
          <div className="font-sans text-[11px] font-semibold uppercase tracking-[0.2em] text-[hsl(var(--accent))] mb-8">
            Casos de estudio
          </div>
          
          <div className="mt-14 grid gap-8 md:grid-cols-2">
            {projects.slice(0, 6).map((project) => (
              <Link key={project.slug} to={`/proyectos/${project.slug}`} className="project-showcase-card group">
                <div className="project-showcase-media">
                    <img 
                      src={projectImages[project.slug === 'bosco' ? 'bosco-proj' : project.slug]} 
                      alt={project.name}
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105"
                    />
                    {project.isConcept && (
                      <div className="absolute top-3 left-3 z-10 font-mono text-[9px] font-bold uppercase tracking-[0.2em] bg-white/80 backdrop-blur-sm text-[#666] px-2.5 py-1 rounded-full border border-black/5">
                        Conceptual
                      </div>
                    )}
                    <div className="project-showcase-shade" />
                </div>
                <div className="project-showcase-footer">
                  <div className="min-w-0">
                    <h3>{project.name} <span>{project.accent}</span></h3>
                    <p>{project.isConcept ? "Caso conceptual" : project.format}</p>
                    {project.result && (
                      <p className="mt-1.5 text-[10px] font-semibold text-[hsl(var(--accent))]">{project.result}</p>
                    )}
                  </div>
                  <div className="project-showcase-arrow">
                    <ArrowUpRight className="h-4 w-4" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIAL EDITORIAL ──────────────────────────────────── */}
      <section className="border-y border-border py-24 md:py-36 bg-surface/20">
        <div className="container-trama text-center">
            <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-[hsl(var(--accent))]">
              Caso de éxito · Bosco Argentina
            </div>
            <blockquote className="mx-auto mt-8 max-w-4xl font-heading text-3xl md:text-5xl lg:text-6xl leading-[1.1] tracking-[-0.02em] text-foreground">
              "Buscábamos alguien que entienda el negocio, no solo que dibuje interfaces. El resultado fue una estructura sólida y funcional."
            </blockquote>
            <div className="mt-12 flex items-center justify-center gap-4">
              <div className="h-[1px] w-12 bg-border" />
              <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-foreground">
                Lautaro · Founder
              </div>
              <div className="h-[1px] w-12 bg-border" />
            </div>
        </div>
      </section>

      {/* ── MÉTODO — GSAP Pinned Section ───────────────────────────────────────────────── */}
      <section className="bg-background py-24 md:py-36" id="proceso">
        <div className="container-trama px-8 md:px-12 lg:px-16">
          <div className="grid gap-20 md:grid-cols-12">
            
            {/* Pinned Title — Balanced Spacing */}
            <div className="md:col-span-4 lg:col-span-5">
              <div id="metodo-title" className="md:pt-4">
                <div className="font-sans text-[11px] font-semibold uppercase tracking-[0.2em] text-[hsl(var(--accent))] mb-8">
                  El Proceso
                </div>
                <h2 className="font-heading text-3xl md:text-5xl leading-tight tracking-tight" style={{ textWrap: "balance" }}>
                  Primero ordeno qué hay que decir. <br />
                  <span className="italic text-[hsl(var(--accent))]">Después diseño cómo mostrarlo.</span>
                </h2>
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
                      <p 
                        className="text-xs md:text-sm leading-relaxed text-[#444444]"
                        dangerouslySetInnerHTML={{ __html: s.d.replace(/\*\*(.*?)\*\*/g, '<strong class="text-foreground font-bold">$1</strong>') }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICIOS — horizontal editorial rows ────────────────── */}
      <section className="py-24 md:py-36" id="servicios">
        <div className="container-trama">
          <div className="font-sans text-[11px] font-semibold uppercase tracking-[0.2em] text-[hsl(var(--accent))] mb-8">
            Servicios
          </div>
          <Reveal delay={80}>
            <h2 className="h-section mt-4 max-w-[14ch]">
              Cómo podemos <span className="italic text-[hsl(var(--accent))]">trabajar juntos</span>.
            </h2>
          </Reveal>
          <Reveal delay={140}>
            <p className="mt-6 max-w-xl text-base text-muted leading-relaxed">
              Trabajo la estructura, el contenido, el diseño y el desarrollo para que las personas entiendan mejor tu negocio desde el primer contacto.
            </p>
          </Reveal>

          <div className="mt-16 space-y-px bg-border border-y border-border">
            {PLANS.map((p, i) => (
                <div key={p.name} className={`group relative py-16 transition-all duration-500 ${p.featured ? 'bg-surface shadow-[0_0_50px_-12px_rgba(0,0,0,0.15)] z-10 scale-[1.02] border-x border-border' : 'bg-surface/40 hover:bg-surface/60'}`}>
                  {p.featured && (
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[hsl(var(--accent))] text-white font-mono text-[9px] uppercase tracking-[0.3em] px-4 py-1.5 rounded-full">
                      Recomendado
                    </div>
                  )}
                  <div className="container-trama grid gap-12 md:grid-cols-12 md:items-start">
                    <div className="md:col-span-4">
                      <div className="font-mono text-[10px] font-bold uppercase tracking-[0.3em] text-[hsl(var(--accent))]">PLAN / {p.name}</div>
                      <div className="font-heading text-xl md:text-2xl mt-4 tracking-tight text-foreground">
                        → {p.target}
                      </div>
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
                        <span>Contame tu proyecto</span>
                        <div className="btn-icon-wrapper">
                          <ArrowUpRight className="w-4 h-4" />
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
            ))}
          </div>

          {/* Extras — mismas filas que los planes */}
          {EXTRAS.map((m) => (
              <div key={m.name} className="border-b border-border py-10 transition-colors duration-300 hover:bg-surface/20">
                <div className="grid gap-6 md:grid-cols-12 md:items-center">
                  <div className="md:col-span-3 lg:col-span-3">
                    <div className="font-mono text-xs font-bold uppercase tracking-wider text-muted">{m.name}</div>
                  </div>
                  <div className="md:col-span-6 lg:col-span-6">
                    <p className="text-xs leading-relaxed text-muted/70 max-w-lg">{m.desc}</p>
                  </div>
                  <div className="md:col-span-3 lg:col-span-3 flex md:justify-end">
                    <span className="font-mono text-[10px] uppercase tracking-wider text-muted">Opcional</span>
                  </div>
                </div>
              </div>
          ))}

          {/* Inversión */}
          <div className="mt-20 max-w-prose">
            <div className="font-mono text-[10px] font-bold uppercase tracking-[0.3em] text-[hsl(var(--accent))] mb-6">Inversión</div>
            <p className="text-lg leading-relaxed text-muted">Una referencia para empezar.</p>
            <p className="mt-4 text-lg leading-relaxed text-muted">
              Los trabajos más habituales se encuentran entre USD 350 y USD 850, según alcance y complejidad. Los desarrollos a medida requieren una cotización específica.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-muted">
              Primero conversamos sobre el negocio y los objetivos. Después recibís una propuesta clara, con tiempos, alcance y presupuesto definidos.
            </p>
          </div>
        </div>
      </section>

      {/* ── FAQ — grid layout (sin acordeón) ─────────────────────── */}
      <section className="bg-surface/40 py-24 md:py-36" id="preguntas">
        <div className="container-narrow">
          <Reveal><div className="eyebrow">PREGUNTAS QUE ME HACEN</div></Reveal>
          <Reveal delay={80}>
            <h2 className="h-section mt-4">
              Antes de <span className="italic text-[hsl(var(--accent))]">escribirme</span>.
            </h2>
          </Reveal>

          <div className="mt-20 grid gap-x-20 gap-y-20 md:grid-cols-2">
            {FAQS.map((item, i) => (
                <div key={item.q}>
                  <h3 className="font-heading text-xl italic leading-tight">{item.q}</h3>
                  {item.a.split("\n\n").map((p, i) => (
                    <p key={i} className={`text-sm leading-relaxed text-muted ${i === 0 ? 'mt-3' : 'mt-4'}`}>{p}</p>
                  ))}
                </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOUNDER ──────────────────────────────────────────────── */}
      <section className="py-24 md:py-36" id="founder">
        <div className="container-trama">
          <div className="font-sans text-[11px] font-semibold uppercase tracking-[0.2em] text-[hsl(var(--accent))] mb-12">
            Fundadora
          </div>
          <div className="grid gap-16 md:grid-cols-12 md:items-start">
            {/* Visual Block — Optimized for diverse viewports */}
            <div className="md:col-span-5 lg:col-span-4">
              <Reveal>
                <div className="group relative flex aspect-[4/5] min-h-[450px] w-full flex-col justify-end overflow-hidden rounded-sm border border-border bg-surface p-8">
                  <img 
                    src="/founder-nadia.avif" 
                    alt="Retrato de la fundadora de Trama Studio" 
                    className="founder-portrait absolute inset-0 h-full w-full object-cover opacity-80 grayscale transition-all duration-700 group-hover:scale-105 group-hover:opacity-100 group-hover:grayscale-0"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/30 to-transparent" />
                  
                  <div className="relative z-10">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="mb-6 text-[hsl(var(--accent))] opacity-60">
                      <path d="M3 21c3 0 7-1 7-8V5h-7v8h3c0 4-3 5-3 5z"></path>
                      <path d="M14 21c3 0 7-1 7-8V5h-7v8h3c0 4-3 5-3 5z"></path>
                    </svg>
                    <blockquote className="font-heading text-xl md:text-2xl italic leading-tight text-foreground">
                      "El diseño viene después: primero tiene que estar claro qué hay que decir y por qué importa."
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
              <div className="trama-card p-2">
                <div className="trama-card-inner p-8 md:p-12">
                  <div className="eyebrow mb-6">CÓMO PIENSO</div>
                  <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl leading-tight tracking-tight mb-10">
                    No diseño páginas sueltas. <br />
                    <span className="italic text-[hsl(var(--accent))]">Diseño cómo se presenta un negocio cuando alguien todavía no lo conoce.</span>
                  </h2>
                  <div className="flex flex-col gap-8">
                    {[
                      "Por eso trabajo la estructura, el contenido, el diseño y el desarrollo como partes de una misma experiencia.",
                      "Cada decisión responde a una pregunta simple: qué necesita entender una persona para confiar y avanzar.",
                    ].map((t, i) => (
                      <p key={i} className="text-lg leading-relaxed text-muted max-w-xl animate-in fade-in duration-500">{t}</p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CONTACTO ─────────────────────────────────────────────── */}
      <section className="border-t border-border py-24 md:py-32" id="contacto">
        <div className="container-trama">
          <Reveal>
            <h2 className="h-section max-w-[20ch] text-center mx-auto" style={{ textWrap: "balance" }}>
              Hablemos de tu proyecto.
            </h2>
          </Reveal>
          <p className="mx-auto mt-6 max-w-lg text-center text-lg text-muted leading-relaxed">
            Contame qué hacés, qué querés comunicar y qué necesitás resolver.
          </p>
          <p className="mx-auto mt-2 max-w-lg text-center text-lg text-muted leading-relaxed">
            A partir de ahí vemos cuál es la mejor forma de construirlo.
          </p>

          <div className="mx-auto mt-14 grid max-w-3xl gap-10 md:grid-cols-2 md:gap-14">
            <div>
              <p className="font-mono text-[10px] font-bold uppercase tracking-widest text-muted mb-5">Mandame un mensaje</p>
              <ContactForm />
            </div>
            <div className="flex flex-col items-start">
              <p className="font-mono text-[10px] font-bold uppercase tracking-widest text-muted mb-5">O escribime directo</p>
              <a
                href={waLink("Hola, vi Trama Studio y quiero contar mi proyecto.")}
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
