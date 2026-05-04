import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Reveal } from "@/components/Reveal";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { MouseGlow } from "@/components/MouseGlow";
import { HeroCarousel, HeroThumbnails } from "@/components/HeroCarousel";
import { projects, waLink } from "@/data/projects";
import { projectImages } from "@/data/project-images";

const HERO_SLIDES = [
  { slug: "bosco", label: "Bosco Argentina" },
  { slug: "estudio-norte", label: "Estudio Norte" },
  { slug: "clinica-nova", label: "Clínica Nova" },
  { slug: "camila-correa", label: "Camila Correa" },
];

const WORKS_LAYOUT = [
  "md:col-span-3 md:row-span-2",
  "md:col-span-2 md:row-span-2",
  "md:col-span-2 md:row-span-1",
  "md:col-span-3 md:row-span-1",
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

  useEffect(() => {
    const t = setInterval(
      () => setActiveSlide((p) => (p + 1) % HERO_SLIDES.length),
      3200
    );
    return () => clearInterval(t);
  }, []);

  return (
    <div className="relative">
      <MouseGlow />
      <Nav />

      {/* ── HERO — split screen ───────────────────────────────────── */}
      <section className="relative min-h-[100dvh] md:h-[100dvh] flex flex-col justify-center pt-20 pb-16 md:pt-24 md:pb-10">
        <div className="container-trama w-full">
          <div className="grid gap-8 lg:gap-14 md:grid-cols-2 items-center">

            {/* Left: copy */}
            <div className="order-2 md:order-1">
              <div
                className="eyebrow animate-slide-down opacity-0"
                style={{ animationDelay: "0ms" }}
              >
                DISEÑO - COPY - CÓDIGO
              </div>
                <h1
                className="font-heading mt-4 animate-slide-up opacity-0 leading-[1.05] tracking-tight text-[38px] md:text-6xl lg:text-7xl"
                style={{ animationDelay: "150ms" }}
              >
                Tu próximo cliente ya te está buscando.{" "}
                <span className="italic text-[hsl(var(--accent))]">¿Qué va a encontrar?</span>
              </h1>
              <p
                className="mt-6 max-w-md text-[15px] md:text-base text-muted leading-relaxed animate-slide-up opacity-0"
                style={{ animationDelay: "350ms" }}
              >
                Diseño, copy y código bajo el mismo criterio. Un solo responsable,
                de principio a fin. El sitio queda en tus manos el día que entrego.
              </p>

              <div
                className="mt-10 flex flex-wrap items-start gap-6 animate-slide-up opacity-0"
                style={{ animationDelay: "550ms" }}
              >
                <div className="flex flex-col gap-3">
                  <a
                    href={waLink("Hola, quiero contarte mi proyecto.")}
                    className="btn-primary-trama"
                  >
                    Escribime por WhatsApp
                  </a>
                  <span className="text-[11px] text-muted tracking-wide">
                    Sin formularios. Me contás qué necesitás y te digo si puedo ayudarte.
                  </span>
                </div>
              </div>

            </div>

            {/* Right: auto-rotating carousel */}
            <div className="order-1 md:order-2">
              <HeroCarousel
                slides={HERO_SLIDES}
                active={activeSlide}
                setActive={setActiveSlide}
              />
            </div>
          </div>


        </div>
      </section>

      {/* ── PROBLEMA ─────────────────────────────────────────────── */}
      <section className="bg-surface/40 py-24 md:py-32" id="problema">
        <div className="container-trama">
          <Reveal><div className="eyebrow">EL PROBLEMA</div></Reveal>
          <Reveal delay={80}>
            <h2 className="h-section mt-4 max-w-[18ch]">
              Tus mejores clientes llegaron por recomendación.
              <br />
              <span className="italic text-[hsl(var(--accent))]">
                Los próximos te están googleando ahora.
              </span>
            </h2>
          </Reveal>

          <div className="mt-16 grid gap-4 md:grid-cols-3">
            <Reveal className="trama-card md:col-span-2 md:row-span-1">
              <div className="font-mono text-xs font-bold tracking-widest text-[hsl(var(--accent))]">01</div>
              <h3 className="h-card mt-4">El que no te conoce</h3>
              <p className="mt-3 text-base leading-relaxed text-muted">
                Tus clientes actuales llegaron por recomendación. Los que no te conocen buscan en internet y{" "}
                <span className="text-foreground">no encuentran nada que les diga por qué elegirte a vos</span>.
                Con web o sin ella, esa ausencia te cuesta clientes todos los días.
              </p>
            </Reveal>
            <Reveal className="trama-card" delay={100}>
              <div className="font-mono text-xs font-bold tracking-widest text-[hsl(var(--accent))]">02</div>
              <h3 className="h-card mt-4">Percepción de valor</h3>
              <p className="mt-3 text-base leading-relaxed text-muted">
                Si lo que mostrás online no está a la altura de tu servicio real, tu precio no tiene dónde apoyarse. Y el cliente que dudaba, no escribe.
              </p>
            </Reveal>
            <Reveal className="trama-card md:col-span-3" delay={150}>
              <div className="flex flex-col gap-6 md:flex-row md:items-center md:gap-12">
                <div className="md:w-1/3">
                  <div className="font-mono text-xs font-bold tracking-widest text-[hsl(var(--accent))]">03</div>
                  <h3 className="h-card mt-4">Atención perdida en 5 segundos</h3>
                </div>
                <p className="text-base leading-relaxed text-muted md:flex-1">
                  Si en los primeros cinco segundos no queda claro{" "}
                  <span className="text-foreground">qué hacés y para quién</span>, el visitante cierra la pestaña.
                  Y si no tenés web, directamente nunca llega. No es falta de interés. Es falta de presencia.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── TRABAJOS ─────────────────────────────────────────────── */}
      <section className="py-24 md:py-32" id="trabajos">
        <div className="container-trama">
          <Reveal><div className="eyebrow">TRABAJOS</div></Reveal>
          <Reveal delay={80}>
            <h2 className="h-section mt-4 max-w-[16ch]">
              Casos reales.
              <br />
              <span className="italic text-[hsl(var(--accent))]">Decisiones explicadas.</span>
            </h2>
          </Reveal>
          <Reveal delay={140}>
            <p className="mt-6 max-w-xl text-base text-muted leading-relaxed">
              Cada proyecto resuelve un problema concreto del negocio. No son screenshots bonitos:
              son decisiones de estrategia traducidas a píxeles.
            </p>
          </Reveal>

          {/* 5-col editorial grid */}
          <div className="mt-16 grid gap-4 md:grid-cols-5 md:auto-rows-[320px]">
            {projects.map((p, i) => (
              <Reveal key={p.slug} className={WORKS_LAYOUT[i]} delay={i * 60}>
                <Link
                  to={`/proyectos/${p.slug}`}
                  className="group relative block h-full min-h-[280px] overflow-hidden rounded-sm border border-border bg-surface transition-all duration-500 hover:border-[hsl(var(--border-strong))]"
                >
                  <img
                    src={projectImages[p.slug]}
                    alt={p.name}
                    loading="lazy"
                    width={1280}
                    height={960}
                    className="absolute inset-0 h-full w-full object-cover opacity-75 grayscale-[20%] transition-all duration-700 group-hover:scale-[1.04] group-hover:opacity-100 group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                  <div className="relative flex h-full flex-col justify-end p-7 md:p-9">
                    <div className="mb-2 font-mono text-[10px] uppercase tracking-[0.25em] text-[hsl(var(--accent))]">
                      {p.number} · {p.category}
                    </div>
                    <h3 className="font-heading text-2xl text-white md:text-3xl leading-tight">
                      {p.name} <span className="italic text-[hsl(var(--accent))]">{p.accent}</span>
                    </h3>
                    <p className="mt-2 max-w-sm text-xs leading-relaxed text-white/55 line-clamp-2">
                      {p.tagline}
                    </p>
                    <span className="mt-5 inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-[hsl(var(--accent))] opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
                      Ver el proceso
                      <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                    </span>
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

      {/* ── MÉTODO ───────────────────────────────────────────────── */}
      <section className="bg-surface/40 py-24 md:py-32" id="metodo">
        <div className="container-trama">
          <Reveal><div className="eyebrow">CÓMO TRABAJO</div></Reveal>
          <Reveal delay={80}>
            <h2 className="h-section mt-4 max-w-[16ch]">Método Trama™</h2>
          </Reveal>
          <Reveal delay={140}>
            <p className="mt-6 max-w-xl text-base text-muted leading-relaxed">
              Estrategia primero. Copy después. Diseño al final. En ese orden, porque
              al revés no funciona.
            </p>
          </Reveal>

          <div className="mt-16 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {STEPS.map((s, i) => (
              <Reveal key={s.n} delay={i * 70} className="trama-card">
                <div className="font-mono text-xs font-bold tracking-widest text-[hsl(var(--accent))]">{s.n}</div>
                <h3 className="font-heading text-2xl mt-4 leading-tight">{s.t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{s.d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICIOS — horizontal editorial rows ────────────────── */}
      <section className="py-24 md:py-32" id="servicios">
        <div className="container-trama">
          <Reveal><div className="eyebrow">SERVICIOS</div></Reveal>
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

          <div className="mt-16 border-t border-border">
            {PLANS.map((p, i) => (
              <Reveal key={p.name} delay={i * 80}>
                <div className="border-b border-border py-12 transition-colors duration-300 hover:bg-surface/20">
                  <div className="grid gap-8 md:grid-cols-12 md:items-start">
                    <div className="md:col-span-3 lg:col-span-3">
                      <div className="font-mono text-xs font-bold uppercase tracking-wider text-foreground">{p.name}</div>
                      <div className="font-heading text-4xl lg:text-5xl mt-3">{p.price}</div>
                    </div>
                    <div className="md:col-span-6 lg:col-span-6">
                      <p className="text-sm leading-relaxed text-muted max-w-xl">{p.desc}</p>
                      <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3">
                        {p.includes.map((it) => (
                          <li key={it} className="flex items-start gap-3 text-xs text-muted">
                            <span className="mt-0.5 text-[hsl(var(--accent))] shrink-0">—</span>
                            {it}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="md:col-span-3 lg:col-span-3 flex md:justify-end pt-1">
                      <a
                        href={waLink(`Hola, me interesa el plan ${p.name}.`)}
                        className="btn-primary-trama w-full md:w-auto"
                      >
                        Quiero este plan
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
      <section className="bg-surface/40 py-24 md:py-32" id="faq">
        <div className="container-narrow">
          <Reveal><div className="eyebrow">PREGUNTAS QUE ME HACEN</div></Reveal>
          <Reveal delay={80}>
            <h2 className="h-section mt-4">
              Antes de <span className="italic text-[hsl(var(--accent))]">escribirme</span>.
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-x-16 gap-y-10 md:grid-cols-2">
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
      <section className="py-24 md:py-32">
        <div className="container-trama">
          <div className="grid gap-16 md:grid-cols-12 md:items-center">
            {/* Visual Block */}
            <div className="md:col-span-5 lg:col-span-4">
              <Reveal>
                <div className="group relative flex aspect-[3/4] w-full flex-col justify-end overflow-hidden rounded-sm border border-border bg-surface p-8">
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
            <h2 className="h-section">
              Contame qué tenés y qué necesitás.
              <br />
              <span className="italic text-[hsl(var(--accent))]">El resto lo vemos juntos.</span>
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
              href={waLink("Hola, quiero contarte mi situación.")}
              className="btn-primary-trama large mt-10"
            >
              Escribime por WhatsApp
            </a>
          </Reveal>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
