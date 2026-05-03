import { Link } from "react-router-dom";
import { Reveal } from "@/components/Reveal";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { MouseGlow } from "@/components/MouseGlow";
import { projects, waLink } from "@/data/projects";
import { projectImages } from "@/data/project-images";

const Index = () => {
  return (
    <div className="relative">
      <MouseGlow />
      <Nav />

      {/* HERO */}
      <section className="relative pt-40 pb-24 md:pt-48 md:pb-32">
        <div className="container-trama">
          <div className="eyebrow animate-slide-down opacity-0" style={{ animationDelay: "0ms" }}>
            DISEÑO · COPY · CÓDIGO
          </div>

          <h1
            className="h-display mt-6 max-w-[14ch] animate-slide-up opacity-0"
            style={{ animationDelay: "150ms" }}
          >
            Webs para negocios{" "}
            <span className="italic text-[hsl(var(--accent))]">que ya facturan</span>{" "}
            — y merecen verse así.
          </h1>

          <p
            className="mt-8 max-w-xl text-base text-muted leading-relaxed animate-slide-up opacity-0 md:text-lg"
            style={{ animationDelay: "350ms" }}
          >
            Tu cliente nuevo decide en 4 segundos si te toma en serio. Hago el
            diseño, el copy y el código para que esa decisión sea siempre la
            misma: <span className="text-foreground">sí</span>.
          </p>

          <div
            className="mt-12 flex flex-wrap items-start gap-8 animate-slide-up opacity-0"
            style={{ animationDelay: "550ms" }}
          >
            <div className="flex flex-col gap-3">
              <a
                href={waLink("Hola, quiero contarte mi proyecto.")}
                className="btn-primary-trama large"
              >
                Escribime por WhatsApp
              </a>
              <span className="text-[11px] text-muted tracking-wide">
                Sin formularios. Me contás qué necesitás y te digo si puedo ayudarte.
              </span>
            </div>
            <a href="#trabajos" className="btn-ghost-trama mt-3">Ver trabajos →</a>
          </div>

          {/* Marquee de tags */}
          <div
            className="mt-20 overflow-hidden border-y border-border py-5 animate-slide-up opacity-0"
            style={{ animationDelay: "750ms" }}
          >
            <div className="flex animate-marquee gap-12 whitespace-nowrap text-[11px] uppercase tracking-[0.3em] text-muted">
              {Array.from({ length: 2 }).map((_, i) => (
                <div key={i} className="flex shrink-0 items-center gap-12">
                  {[
                    "Estrategia primero",
                    "Copy incluido",
                    "Código tuyo",
                    "Sin plataformas cerradas",
                    "Entregas en 10–18 días",
                    "Pago 50/50",
                    "Sin cuotas mensuales",
                  ].map((t) => (
                    <span key={`${i}-${t}`} className="flex items-center gap-12">
                      {t}
                      <span className="text-[hsl(var(--accent))]">/</span>
                    </span>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PROBLEMA — bento asimétrico */}
      <section className="theme-light bg-background py-24 md:py-32" id="problema">
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
                Si lo que mostrás online no está a la altura de tu servicio real, tu precio no tiene dónde apoyarse.
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

      {/* TRABAJOS — bento asimétrico */}
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

          <div className="mt-16 grid gap-5 md:grid-cols-6 md:auto-rows-[280px]">
            {projects.map((p, i) => {
              const layout = [
                "md:col-span-4 md:row-span-2",
                "md:col-span-2 md:row-span-1",
                "md:col-span-2 md:row-span-1",
                "md:col-span-6 md:row-span-2",
              ][i];
              return (
                <Reveal
                  key={p.slug}
                  className={layout}
                  delay={i * 60}
                >
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
                      className="absolute inset-0 h-full w-full object-cover opacity-50 grayscale transition-all duration-700 group-hover:scale-[1.04] group-hover:opacity-90 group-hover:grayscale-0"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent" />
                    <div className="relative flex h-full flex-col justify-end p-8 md:p-10">
                      <div className="mb-3 font-mono text-[11px] uppercase tracking-[0.25em] text-[hsl(var(--accent))]">
                        {p.number} · {p.category}
                      </div>
                      <h3 className="font-heading text-3xl text-white md:text-4xl">
                        {p.name} <span className="italic text-[hsl(var(--accent))]">{p.accent}</span>
                      </h3>
                      <p className="mt-3 max-w-xl text-sm leading-relaxed text-white/60 md:text-base">
                        {p.tagline}
                      </p>
                      <span className="mt-5 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-white">
                        Ver el proceso
                        <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                      </span>
                    </div>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* PULL QUOTE */}
      <section className="border-y border-border py-24">
        <div className="container-narrow">
          <Reveal>
            <div className="font-mono text-[11px] uppercase tracking-[0.3em] text-muted">
              BOSCO · ED. 01 — 2026
            </div>
          </Reveal>
          <Reveal delay={100}>
            <blockquote className="pull-quote mt-6">
              "Era lo que quería. Quedó muy sólida. Lautaro lo dijo el día del lanzamiento.
              Las 75 unidades se agotaron en una semana."
            </blockquote>
          </Reveal>
          <Reveal delay={200}>
            <div className="mt-6 font-mono text-xs uppercase tracking-[0.25em] text-muted">
              LAUTARO — BOSCO ARGENTINA
            </div>
          </Reveal>
        </div>
      </section>

      {/* MÉTODO */}
      <section className="theme-light bg-background py-24 md:py-32" id="metodo">
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
            {[
              { n: "01", t: "Conversación", d: "Antes de cualquier presupuesto, entiendo tu negocio en una sesión de diagnóstico de 60 min. Sin cuestionarios genéricos." },
              { n: "02", t: "Estrategia y copy", d: "Extraigo tu conocimiento y lo traduzco a un mensaje que venda. Defino qué decir y en qué orden." },
              { n: "03", t: "Diseño y código", d: "Código estático, rápido y documentado. Construido para durar, sin depender de plataformas cerradas." },
              { n: "04", t: "Entrega total", d: "Recibís el código y una Guía de Soberanía para editar contenidos. Sos dueño total de tu activo." },
            ].map((s, i) => (
              <Reveal key={s.n} delay={i * 70} className="trama-card">
                <div className="font-mono text-xs font-bold tracking-widest text-[hsl(var(--accent))]">{s.n}</div>
                <h3 className="font-heading text-2xl mt-4 leading-tight">{s.t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{s.d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICIOS */}
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

          <div className="mt-16 grid gap-5 lg:grid-cols-3">
            {[
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
            ].map((p, i) => (
              <Reveal
                key={p.name}
                delay={i * 80}
                className={`relative flex flex-col rounded-sm border bg-surface p-8 transition-all duration-500 hover:-translate-y-2 ${
                  p.featured ? "border-[hsl(var(--accent))] shadow-[0_32px_64px_rgba(0,0,0,0.4)]" : "border-border"
                }`}
              >
                {p.featured && (
                  <div className="absolute -top-3 left-8 bg-[hsl(var(--accent))] px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-white">
                    Recomendado
                  </div>
                )}
                <div className="mb-2 font-mono text-sm font-bold uppercase tracking-wider text-foreground">{p.name}</div>
                <div className="font-heading text-5xl">{p.price}</div>
                <p className="mt-4 text-sm leading-relaxed text-muted">{p.desc}</p>

                <div className="mt-8">
                  <div className="border-b border-border pb-2 font-mono text-[10px] font-bold uppercase tracking-[0.2em]">Incluye</div>
                  <ul className="mt-3 flex flex-col">
                    {p.includes.map((it) => (
                      <li key={it} className="border-b border-border/50 py-3 pl-5 text-sm text-muted relative">
                        <span className="absolute left-0 text-[hsl(var(--accent))]">→</span>
                        {it}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-6">
                  <div className="border-b border-border pb-2 font-mono text-[10px] font-bold uppercase tracking-[0.2em]">No incluye</div>
                  <ul className="mt-3 flex flex-col">
                    {p.excludes.map((it) => (
                      <li key={it} className="border-b border-border/50 py-3 pl-5 text-sm text-muted/60 relative">
                        <span className="absolute left-0 text-muted">—</span>
                        {it}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Extras */}
          <div className="mt-12 grid gap-2">
            {[
              { name: "Mantenimiento", desc: "Trama disponible después de la entrega. Hasta 3 cambios por mes, respuesta en 48h. Mínimo 3 meses.", price: "USD 60", per: "/mes" },
              { name: "Dominio", desc: "Gestionamos el registro y la configuración. Al finalizar queda transferido a tu nombre. No incluye renovación anual.", price: "USD 20", per: "" },
            ].map((m) => (
              <Reveal key={m.name}>
                <div className="flex flex-wrap items-center justify-between gap-6 rounded-sm bg-surface p-7">
                  <div className="flex-1 min-w-[260px]">
                    <div className="font-mono text-sm font-bold uppercase tracking-wider">{m.name}</div>
                    <p className="mt-2 text-sm leading-relaxed text-muted max-w-xl">{m.desc}</p>
                  </div>
                  <div className="font-heading text-3xl text-[hsl(var(--accent))]">
                    {m.price}<span className="text-sm text-muted">{m.per}</span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-12 grid gap-8 border-t border-border pt-12 md:grid-cols-2">
            <div>
              <div className="font-mono text-[11px] font-bold uppercase tracking-[0.2em]">Modalidad de pago</div>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                50% al inicio para congelar el presupuesto y comenzar el diseño. 50% al
                entregar la web, una vez que el código esté en tus manos. Sin letra chica.
              </p>
            </div>
            <div>
              <div className="font-mono text-[11px] font-bold uppercase tracking-[0.2em]">Moneda de facturación</div>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                Los precios están expresados en USD. Pueden ser abonados en dólares
                o en pesos argentinos a la cotización del MEP del día.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="theme-light bg-background py-24 md:py-32" id="faq">
        <div className="container-narrow">
          <Reveal><div className="eyebrow">PREGUNTAS QUE ME HACEN</div></Reveal>
          <Reveal delay={80}>
            <h2 className="h-section mt-4">
              Antes de <span className="italic text-[hsl(var(--accent))]">escribirme</span>.
            </h2>
          </Reveal>

          <div className="mt-12 flex flex-col">
            {[
              { q: "¿Por qué no me cobrás por hora?", a: "Porque no te conviene a vos ni a mí. Cobro por proyecto, con alcance y plazo definidos. Vos sabés lo que vas a pagar antes de empezar. Yo me concentro en hacerlo bien, no en estirar las horas." },
              { q: "¿Puedo editar la web después?", a: "Sí. Te entrego el código + una Guía de Soberanía para que puedas editar textos, imágenes y secciones desde una interfaz visual. No quedás atado a mí ni a ninguna plataforma cerrada." },
              { q: "¿Y si no me gusta el diseño?", a: "Antes de tocar una sola línea de código te muestro la dirección visual y la estructura del copy. Iteramos ahí, no después. Cuando empiezo a programar, ya sabemos los dos a dónde vamos." },
              { q: "¿Cuánto tarda?", a: "Una landing entre 8 y 10 días hábiles. Una web institucional entre 15 y 18. Un motor de ventas entre 25 y 30. Plazos reales, no marketing." },
              { q: "¿Trabajás con clientes fuera de Argentina?", a: "Sí. La facturación es en USD y la comunicación es por WhatsApp o llamada según prefieras. Toda la documentación queda en español o inglés." },
            ].map((item, i) => (
              <Reveal key={item.q} delay={i * 50}>
                <details className="group border-b border-border py-6">
                  <summary className="flex cursor-pointer items-center justify-between gap-4 font-heading text-xl md:text-2xl list-none">
                    <span>{item.q}</span>
                    <span className="font-mono text-2xl text-[hsl(var(--accent))] transition-transform duration-300 group-open:rotate-45">+</span>
                  </summary>
                  <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">{item.a}</p>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FOUNDER */}
      <section className="py-24 md:py-32">
        <div className="container-narrow">
          <Reveal><div className="eyebrow">CÓMO PIENSO</div></Reveal>
          <Reveal delay={80}>
            <h2 className="h-section mt-6 max-w-[14ch]">
              No vendo páginas.
              <br />
              <span className="italic text-[hsl(var(--accent))]">Vendo criterio.</span>
            </h2>
          </Reveal>
          <div className="mt-10 flex flex-col gap-6 max-w-2xl">
            {[
              "No diseño para gustar. Diseño para que el negocio detrás de la web se entienda antes de que alguien pregunte el precio. Eso requiere criterio sobre qué decir, cómo decirlo y cómo mostrarlo. Las tres cosas juntas, bajo el mismo estándar.",
              "El proceso siempre empieza por la estrategia. Qué tiene que entender el visitante, en qué orden, con qué palabras. El diseño viene después — como consecuencia de lo que ya está claro, no como solución a lo que todavía no.",
              "El resultado no es una web bonita. Es un negocio que se ve a la altura de lo que vale. Construido con código que cualquier profesional puede mantener, para que no dependas de mí ni de nadie más para seguir adelante.",
            ].map((t, i) => (
              <Reveal key={i} delay={i * 80}>
                <p className="text-lg leading-relaxed text-muted">{t}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACTO */}
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
