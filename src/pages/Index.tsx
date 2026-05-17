import { Link } from "react-router-dom";
import { Reveal } from "@/components/Reveal";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { projects, waLink } from "@/data/projects";
import { projectImages } from "@/data/project-images";
import { ArrowUpRight, Copy, Sparkle } from "lucide-react";



const PLANS = [
  {
    name: "Landing Trama",
    price: "USD 450",
    desc: "Para cuando necesitás claridad inmediata y una presencia que proyecte el valor real de tu trabajo.",
    summary: "Ideal para marcas de autor y perfiles profesionales.",
    includes: ["Estrategia de posicionamiento", "Copy y redacción", "Diseño a medida (no templates)", "Desarrollo en código propio", "Propiedad total del sitio", "Diagnóstico de 60 min."],
    excludes: ["Dominio y hosting", "Sesión de fotos"],
    featured: false,
  },
  {
    name: "Web de Autoridad",
    price: "USD 750",
    desc: "Para cuando tu negocio necesita filtrar al cliente correcto antes de la primera conversación.",
    summary: "Ideal para estudios y empresas de servicios B2B.",
    includes: ["Todo lo del plan Landing", "Hasta 5 secciones estratégicas", "Justificación de valor/precio", "Integración de métricas", "Guía de Edición (Soberanía)", "Diagnóstico de 60 min."],
    excludes: ["Dominio y hosting", "Sesión de fotos"],
    featured: true,
  },
  {
    name: "Sistemas a Medida",
    price: "Consultar",
    desc: "Plataformas complejas, catálogos o gestores de contenido. Código optimizado y documentado.",
    summary: "Ideal para startups y productos digitales.",
    includes: ["Todo lo del plan Autoridad", "Desarrollo de funcionalidades", "Arquitectura escalable", "Optimización extrema", "Documentación técnica", "Acompañamiento post-lanzamiento"],
    excludes: ["Dominio y hosting"],
    featured: false,
  },
];

const EXTRAS = [
  { name: "Mantenimiento", desc: "Trama disponible después de la entrega. Hasta 3 cambios por mes, respuesta en 48h. Mínimo 3 meses.", price: "USD 80", per: "/mes" },
  { name: "Dominio", desc: "Gestionamos el registro y la configuración. Al finalizar queda transferido a tu nombre. No incluye renovación anual.", price: "USD 20", per: "" },
];

const STEPS = [
  { n: "01", t: "Estrategia", d: "Defino **qué tiene que entender el visitante** y en qué orden. El diagnóstico es la base de todo." },
  { n: "02", t: "Copywriting", d: "Escribo cada palabra con un objetivo: que la web **demuestre tu reputación y autoridad**." },
  { n: "03", t: "Diseño y Código", d: "El diseño es una **consecuencia de la estrategia**. Código propio, rápido y optimizado." },
  { n: "04", t: "Propiedad", d: "El sitio es tuyo. Sin cuotas mensuales ni dependencias. Te entrego el **control total**." },
];

const FAQS = [
  { q: "¿Por qué no me cobrás por hora?", a: "Porque no te conviene a vos ni a mí. Cobro por proyecto, con alcance y plazo definidos. Vos sabés lo que vas a pagar antes de empezar. Yo me concentro en hacerlo bien, no en estirar las horas." },
  { q: "¿Puedo editar la web después?", a: "Sí. Te entrego el código + una Guía de Soberanía para que puedas editar textos, imágenes y secciones desde una interfaz visual. No quedás atado a mí ni a ninguna plataforma cerrada." },
  { q: "¿Y si no me gusta el diseño?", a: "Antes de tocar una sola línea de código te muestro la dirección visual y la estructura del copy. Iteramos ahí, no después. Cuando empiezo a programar, ya sabemos los dos a dónde vamos." },
  { q: "¿Cuánto tarda?", a: "Una Landing Trama entre 8 y 10 días hábiles. Una Web de Autoridad entre 15 y 18. Un Motor de Ventas entre 25 y 30. Plazos reales, no marketing." },
  { q: "¿Trabajás con clientes fuera de Argentina?", a: "Sí. La facturación es en USD y la comunicación es por WhatsApp o llamada según prefieras. Toda la documentación queda en español o inglés." },
];

const Index = () => {
  return (
    <div className="relative min-h-screen selection:bg-[hsl(var(--accent))] selection:text-white overflow-x-hidden">
      <Nav />

      {/* HERO */}
      <section className="hero-start relative min-h-[100svh] overflow-hidden">
        <div className="hero-texture" />

        <div className="container-trama relative z-10 grid min-h-[100svh] items-center gap-10 pb-16 pt-32 md:grid-cols-[0.95fr_1.05fr] md:pb-10 md:pt-24 lg:gap-20">
          <div className="max-w-[640px]">
            <h1 className="hero-title animate-slide-up opacity-0" style={{ animationDelay: "80ms" }}>
              Trama Studio
            </h1>
            <p className="hero-subtitle animate-slide-up opacity-0" style={{ animationDelay: "180ms" }}>
              Diseño y desarrollo web para marcas que necesitan verse tan sólidas como trabajan.
            </p>
            <p className="hero-kicker animate-slide-up opacity-0" style={{ animationDelay: "260ms" }}>
              — Menos plantilla, más criterio comercial
            </p>
            <p className="hero-copy animate-slide-up opacity-0" style={{ animationDelay: "340ms" }}>
              Construimos sitios con estrategia, copy y código propio para que tu presencia digital deje de explicar de menos el valor real de tu negocio.
            </p>

            <div className="hero-command animate-slide-up opacity-0" style={{ animationDelay: "430ms" }}>
              <span className="text-white/35">$</span>
              <code>diagnostico.trama --presencia-digital</code>
              <span className="ml-auto">COPY</span>
              <Copy className="h-4 w-4 text-white/60" />
            </div>

            <div className="mt-4 flex flex-wrap items-center gap-4 animate-slide-up opacity-0" style={{ animationDelay: "520ms" }}>
              <a href={waLink("Hola, vi Trama Studio y quiero solicitar un diagnóstico para mi proyecto.")} className="hero-primary-cta group">
                <span>Solicitar diagnóstico</span>
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </a>
              <div className="flex items-center gap-2 text-xs text-muted">
                <span className="h-1.5 w-1.5 rounded-full bg-[#ff5a1f]" />
                <span>Disponibilidad · Mayo 2026</span>
              </div>
            </div>
          </div>

          <div className="hero-visual" aria-hidden="true">
            <div className="hero-preview hero-preview-light">
              <div>
                <p className="hero-preview-title">Menos ruido, más dirección</p>
                <div className="mt-5 h-2 w-48 rounded-full bg-black/10" />
                <div className="mt-3 h-2 w-32 rounded-full bg-black/10" />
                <div className="mt-5 h-9 w-24 rounded-sm bg-black/5" />
              </div>
              <img src={projectImages["camila-correa"]} alt="" />
              <div className="hero-applied-badge">
                <Sparkle className="h-4 w-4" />
                Trama aplicada
              </div>
            </div>

            <div className="hero-preview hero-preview-dark">
              <img src={projectImages["bosco-proj"]} alt="" />
              <div className="absolute inset-0 bg-black/55" />
              <div className="relative z-10 max-w-[330px]">
                <p className="font-heading text-3xl leading-[0.98] tracking-tight text-white md:text-4xl">
                  Webs que justifican valor, filtran clientes y venden confianza.
                </p>
                <div className="mt-7 flex gap-2">
                  <span className="h-6 w-20 rounded-sm bg-[#cbff2e]" />
                  <span className="h-6 w-24 rounded-sm border border-white/25" />
                </div>
              </div>
              <div className="hero-grid-mark">
                {Array.from({ length: 9 }).map((_, i) => (
                  <span key={i} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* ── PROBLEMA — Scrubbing Reveal ─────────────────────────────────────────── */}
      <section className="relative py-32 md:py-48" id="problema">
        <div className="container-trama">
          <div className="font-sans text-[11px] font-semibold uppercase tracking-[0.2em] text-[hsl(var(--accent))] mb-8">
            El Panorama
          </div>
          <h2 className="font-heading text-3xl md:text-5xl lg:text-6xl leading-[1.1] tracking-tight max-w-[20ch]" style={{ textWrap: "balance" }}>
            Hay negocios muy buenos que online parecen menos de lo que son. Su reputación se construyó por recomendación, pero alguien que entra a su web por primera vez no lo vería.
          </h2>

          <div className="mt-16 grid gap-6 md:grid-cols-12">
            {/* Main Situational Card — Left */}
            <div className="trama-card p-2 md:col-span-7">
              <div className="trama-card-inner p-8 md:p-10 h-full flex flex-col justify-center">
                <div className="font-mono text-[10px] font-bold tracking-widest text-[hsl(var(--accent))] mb-6">01 / SITUACIÓN</div>
                <h3 className="h-card tracking-tight leading-tight">El trabajo habla solo, la web no.</h3>
                <p className="mt-4 text-base leading-relaxed text-[#444444]">
                  Tus clientes actuales vuelven y te recomiendan. Pero el tráfico frío que te investiga 
                  <span className="text-foreground font-medium"> se encuentra con una versión debilitada de lo que sos</span>. 
                  Ahí entra Trama.
                </p>
              </div>
            </div>
            
            {/* Right Column with two stacked cards */}
            <div className="md:col-span-5 flex flex-col gap-6">
              <div className="trama-card p-2 flex-1">
                <div className="trama-card-inner p-8 md:p-10 h-full">
                  <div className="font-mono text-[10px] font-bold tracking-widest text-[hsl(var(--accent))] mb-6">02 / VALOR</div>
                  <h3 className="h-card tracking-tight">Percepción de bajo valor.</h3>
                  <p className="mt-4 text-sm md:text-base leading-relaxed text-[#444444]">
                    Si tu presencia online no está a la altura de tu servicio real, tu precio no tiene dónde apoyarse.
                  </p>
                </div>
              </div>

              <div className="trama-card p-2 flex-1">
                <div className="trama-card-inner p-8 md:p-10 h-full">
                  <div className="font-mono text-[10px] font-bold tracking-widest text-[hsl(var(--accent))] mb-6">03 / CONVERSIÓN</div>
                  <h3 className="h-card tracking-tight">Mensaje poco claro.</h3>
                  <p className="mt-4 text-sm md:text-base leading-relaxed text-[#444444]">
                    Si en los primeros cinco segundos no queda claro qué hacés, el visitante se va.
                  </p>
                </div>
              </div>
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
            {projects.slice(0, 6).map((project, i) => (
              <Link key={project.slug} to={`/proyectos/${project.slug}`} className="trama-card p-2 group block overflow-hidden">
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
                          (Caso conceptual)
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
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIAL EDITORIAL ──────────────────────────────────── */}
      <section className="border-y border-border py-32 md:py-48 bg-surface/20">
        <div className="container-trama text-center">
            <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-[hsl(var(--accent))]">
              Caso de éxito · Bosco Argentina
            </div>
            <blockquote className="mx-auto mt-8 max-w-4xl font-heading text-3xl md:text-5xl lg:text-6xl leading-[1.1] tracking-[-0.02em] text-foreground">
              "Buscábamos alguien que entienda el negocio, no solo que dibuje interfaces. <span className="italic text-muted">Era lo que queríamos. Quedó muy sólida.</span>"
            </blockquote>
            <div className="mt-12 flex items-center justify-center gap-4">
              <div className="h-[1px] w-12 bg-border" />
              <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-foreground">
                Lautaro, Founder
              </div>
              <div className="h-[1px] w-12 bg-border" />
            </div>
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
                  <span className="italic text-[hsl(var(--accent))]">Trama</span>
                </h2>
                <p className="mt-10 max-w-sm text-lg text-muted leading-relaxed">
                  Todo empieza por entender qué tiene que quedar claro antes de diseñar una sola pantalla. El diseño es una consecuencia, no el origen.
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
      <section className="py-32 md:py-48" id="servicios">
        <div className="container-trama">
          <div className="font-sans text-[11px] font-semibold uppercase tracking-[0.2em] text-[hsl(var(--accent))] mb-8">
            Servicios
          </div>
          <Reveal delay={80}>
            <h2 className="h-section mt-4 max-w-[14ch]">
              Lo que <span className="italic text-[hsl(var(--accent))]">construimos</span>.
            </h2>
          </Reveal>
          <Reveal delay={140}>
            <p className="mt-6 max-w-xl text-base text-muted leading-relaxed">
              El resultado es un sitio que filtra al cliente correcto y demuestra tu reputación real. Inversión única, sin dependencias.
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
                      <h3 className="font-heading text-4xl md:text-5xl mt-6 tracking-tight">{p.price}</h3>
                    </div>
                    
                    <div className="md:col-span-5">
                      <div className="mb-4 inline-block bg-[hsl(var(--accent))]/10 text-[hsl(var(--accent))] text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-sm">
                        {p.summary}
                      </div>
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
                        <span>Solicitar diagnóstico</span>
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
                    <div className="font-heading text-3xl text-muted">
                      {m.price}<span className="text-sm font-mono tracking-widest">{m.per}</span>
                    </div>
                  </div>
                </div>
              </div>
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
                <div key={item.q}>
                  <h3 className="font-heading text-xl italic leading-tight">{item.q}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{item.a}</p>
                </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOUNDER ──────────────────────────────────────────────── */}
      <section className="py-32 md:py-48" id="founder">
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
              <div className="trama-card p-2">
                <div className="trama-card-inner p-8 md:p-12">
                  <div className="eyebrow mb-6">CÓMO PIENSO</div>
                  <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl leading-tight tracking-tight mb-10">
                    Trato cada sitio como una decisión de posicionamiento, <br />
                    <span className="italic text-[hsl(var(--accent))]">no como una pieza gráfica.</span>
                  </h2>
                  <div className="flex flex-col gap-8">
                    {[
                      "Trabajo con pocos proyectos a la vez. Mi foco no está en producir sitios rápido, sino en construir presencia digital alineada con el nivel real del negocio.",
                      "Cada decisión —copy, estructura, diseño y código— responde a una estrategia concreta: qué tiene que entender el visitante y en qué orden.",
                      "El resultado es un sitio que proyecta autoridad. Construido con código propio, sin plataformas cerradas, sin cuotas mensuales y sin dependencia técnica.",
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
      <section className="border-t border-border py-24 text-center md:py-32" id="contacto">
        <div className="container-narrow">
          <Reveal>
            <h2 className="h-section max-w-[20ch] mx-auto" style={{ textWrap: "balance" }}>
              Contame qué tenés y qué buscás. El resto lo resolvemos juntos.
            </h2>
          </Reveal>
            <p className="mx-auto mt-6 max-w-lg text-lg text-muted leading-relaxed">
              Sin compromiso. Me explicás tu situación en dos líneas y te digo
              concretamente qué se puede hacer.
            </p>
            <a
              href={waLink("Hola, vi Trama Studio y quiero solicitar un diagnóstico para mi proyecto.")}
              className="btn-primary-trama large group mt-10"
            >
              <span>Diagnosticar mi caso</span>
              <div className="btn-icon-wrapper">
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
