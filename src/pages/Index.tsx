import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Reveal } from "@/components/Reveal";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { ContactForm } from "@/components/ContactForm";
import { waLink } from "@/data/projects";
import Metodologia from "@/components/Metodologia";
import { ServicesStack } from "@/components/ServicesStack";
import { setSeo } from "@/lib/seo";
import { ArrowUpRight } from "lucide-react";
import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/data/projects";

const FAQS = [
  {
    q: "¿Qué tipo de proyectos hacen?",
    body: "Diseñamos y desarrollamos software a medida, aplicaciones web y productos digitales desde cero o en etapa de rediseño. No hacemos plantillas prehechas ni servicios de marketing digital aislado.",
  },
  {
    q: "¿Tengo que tener definida la idea?",
    lead: "No.",
    body: "Podés llegar con una idea bastante clara o simplemente con un problema que necesitás resolver. Parte del trabajo es entender qué necesitás realmente antes de decidir qué construir.",
  },
  {
    q: "¿Ustedes diseñan y desarrollan?",
    lead: "Sí, por lo general las dos cosas juntas.",
    body: "Diseñar y construir en el mismo proceso evita que se pierda algo en el traspaso entre quien pensó la interfaz y quien la programó. Si ya tenés un diseño resuelto y necesitás solo la construcción, también podemos entrar únicamente en esa etapa.",
  },
  {
    q: "¿Trabajan con empresas o también con emprendedores?",
    lead: "Con ambos.",
    body: "Para emprendedores nos enfocamos en validar rápido la idea inicial y construir un producto mínimo funcional. Para empresas intervenimos sobre flujos existentes, optimizando la arquitectura y la experiencia sin interrumpir la operación.",
  },
  {
    q: "¿Qué pasa si no sé cuánto cuesta mi proyecto?",
    lead: "No necesitás llegar con un presupuesto cerrado.",
    body: "Primero entendemos qué querés hacer, qué necesitás y qué alcance tiene. A partir de eso podemos definir la mejor forma de abordarlo.",
  },
];

const Index = () => {
  // Estado para gestionar de forma determinista qué item del acordeón de FAQS está desplegado
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    setSeo({
      title: "HeyTrama — Productos Digitales y Software a Medida",
      description:
        "Diseñamos y desarrollamos aplicaciones, plataformas y software a medida para convertir ideas y necesidades de negocio en productos digitales que funcionan.",
      ogDescription:
        "Convertimos ideas y necesidades de negocio en productos digitales que funcionan.",
      path: "/",
    });

    const hash = window.location.hash.slice(1);
    if (hash) {
      window.requestAnimationFrame(() => {
        document.getElementById(hash)?.scrollIntoView({ behavior: "smooth" });
      });
    } else {
      window.scrollTo(0, 0);
    }
  }, []);

  return (
    <div className="relative min-h-screen selection:bg-[hsl(var(--accent))] selection:text-white overflow-x-clip">
      <Nav />

      {/* Sección Hero con fondo animado integrado por mezcla suave sin cortes de bordes */}
      <section className="hero-start relative min-h-[100dvh] flex flex-col justify-center items-center pt-20 sm:pt-24 pb-8 sm:pb-12 overflow-hidden">
        {/* Capa de fondo animada con la imagen frame-faq.avif y fundido en la parte inferior */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <div
            className="w-full h-full bg-cover bg-center animate-hero-bg-pulse opacity-70"
            style={{ backgroundImage: "url('/frame-faq.avif')" }}
            aria-hidden="true"
          />
        </div>
        <div className="container-trama relative z-10 w-full text-center max-w-4xl lg:max-w-[58rem] mx-auto px-6 flex flex-col items-center justify-center my-auto">
          {/* Centered Large H1 with Emil Kowalski Sequential Reading Choreography */}
          <h1 className="font-heading text-[1.95rem] sm:text-5xl md:text-6xl lg:text-[3.95rem] font-medium tracking-tight leading-[1.38] text-foreground">
            <span className="inline-block animate-reading-text" style={{ animationDelay: "100ms" }}>
              entendemos el problema y construimos el software que lo resuelve.
            </span>
          </h1>

          {/* Centered CTAs Row */}
          <div
            className="pt-8 sm:pt-12 md:pt-14 flex flex-col sm:flex-row items-center justify-center gap-5 sm:gap-8 animate-reading-text"
            style={{ animationDelay: "400ms" }}
          >
            {/* Unificar mensaje de WhatsApp mediante waLink() para mantener consistencia en todos los puntos de contacto del sitio */}
            <a href={waLink("Hola, vi HeyTrama y quiero contarte sobre mi proyecto.")} className="hero-primary-cta group text-sm sm:text-base px-7 py-4">
              <span>Contar mi proyecto</span>
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>

            <Link
              to="/proyectos"
              className="group inline-flex items-center gap-2 py-2 font-sans text-[15px] md:text-base font-medium tracking-[0.01em] text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-foreground"
            >
              <span className="relative py-1">
                Ver proyectos
                <span className="absolute inset-x-0 bottom-0 h-px bg-current opacity-30" aria-hidden="true" />
                <span
                  className="absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-current transition-transform [transition-duration:250ms] [transition-timing-function:var(--ease-standard)] group-hover:scale-x-100 group-focus-visible:scale-x-100 motion-reduce:transition-none"
                  aria-hidden="true"
                />
              </span>
              <ArrowUpRight
                className="h-4 w-4 transition-transform [transition-duration:250ms] [transition-timing-function:var(--ease-standard)] group-hover:translate-x-1 group-hover:-translate-y-1 group-focus-visible:translate-x-1 group-focus-visible:-translate-y-1 motion-reduce:transition-none"
                aria-hidden="true"
              />
            </Link>
          </div>
        </div>
      </section>

      {/* ── METODOLOGÍA / NUESTRO PROCESO ─────────────────────── */}
      <Metodologia />

      {/* ── SERVICIOS STACKED ────────────────────────────────────── */}
      <ServicesStack />

      <section className="bg-[#050505] py-20 text-white md:py-28" id="proyectos">
        <div className="container-trama px-6 md:px-12 lg:px-16">
          <div className="mb-12 md:mb-16">
            <div>
              <p className="font-mono text-micro font-medium uppercase tracking-[0.01em] text-white/70">
                TRABAJO SELECCIONADO
              </p>
              <h2 className="mt-4 font-heading text-4xl font-normal tracking-tight text-white sm:text-5xl">
                Proyectos
              </h2>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-8">
            {projects.slice(0, 3).map((project, index) => (
              <ProjectCard key={project.slug} project={project} index={index} />
            ))}
          </div>
          <div className="mt-12 flex justify-center md:mt-16">
            <Link
              to="/proyectos"
              className="group inline-flex items-center gap-2 rounded-full border border-white/25 px-6 py-3 font-sans text-[15px] font-medium tracking-[0.01em] text-white transition-colors hover:border-white hover:bg-white hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white md:text-base"
            >
              Ver todos los proyectos
              <ArrowUpRight
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                aria-hidden="true"
              />
            </Link>
          </div>
        </div>
      </section>

      {/* ── PREGUNTAS FRECUENTES (Fondo faq-.avif integrado sin líneas divisoras duras, tokenizado con bg-background) ── */}
      <section className="relative py-20 md:py-28 bg-background" id="preguntas">
        {/* Capa de fondo sutil con opacidad atenuada al 20% y desenfoque suave para lectura impecable */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <div
            className="w-full h-full bg-cover bg-center opacity-20 mix-blend-multiply blur-[20px] [mask-image:linear-gradient(to_bottom,transparent_0%,black_20%,black_80%,transparent_100%)]"
            style={{ backgroundImage: "url('/faq-.avif')" }}
            aria-hidden="true"
          />
        </div>
        <div className="container-narrow relative z-10 px-6">
          <Reveal>
            {/* Mantener etiqueta de categoría sobria y disciplinada en opacidad suave del texto principal */}
            <div className="font-sans text-[15px] md:text-sm font-medium uppercase tracking-[0.01em] text-foreground">
              PREGUNTAS FRECUENTES
            </div>
          </Reveal>
          <Reveal delay={80}>
            {/* Titular H2 plano y sobrio eliminando la itálica en una sola palabra según la regla del skill frontend-design */}
            <h2 className="h-section mt-4 mb-16 font-normal">
              Antes de empezar.
            </h2>
          </Reveal>

          {/* Acordeón numerado interactivo con semántica y atributos de accesibilidad WCAG */}
          <div className="divide-y divide-border/40 border-t border-border/40">
            {FAQS.map((item, i) => {
              const isOpen = openFaq === i;
              const triggerId = `faq-trigger-${i}`;
              const contentId = `faq-content-${i}`;
              const formattedIndex = `[${String(i + 1).padStart(2, "0")}]`;

              return (
                <Reveal key={item.q} delay={i * 80}>
                  <div className="border-b border-border/40 last:border-0">
                    {/* Botón trigger del acordeón con id y atributos de accesibilidad */}
                    <button
                      id={triggerId}
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={contentId}
                      onClick={() => setOpenFaq(isOpen ? null : i)}
                      className="w-full flex items-center justify-between py-6 text-left group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--editorial-accent))] rounded-sm transition-colors"
                    >
                      <div className="flex items-center gap-4 md:gap-6">
                        {/* Índice numerado en formato [01], [02], etc. */}
                        <span className="font-mono text-[15px] md:text-sm text-foreground flex-shrink-0">
                          {formattedIndex}
                        </span>

                        {/* Pregunta con cambio de color al estar abierta */}
                        <h3
                          className={`font-heading text-xl md:text-2xl tracking-tight font-medium transition-colors duration-300 ${
                            isOpen
                              ? "text-[hsl(var(--editorial-accent))]"
                              : "text-foreground group-hover:text-[hsl(var(--editorial-accent))]"
                          }`}
                        >
                          {item.q}
                        </h3>
                      </div>

                      {/* Flecha con rotación de 45 grados en estado abierto */}
                      <ArrowUpRight
                        className="h-5 w-5 transition-transform duration-300 flex-shrink-0 ml-4 text-foreground/70 group-hover:text-[hsl(var(--editorial-accent))]"
                        style={{ transform: isOpen ? "rotate(45deg)" : "rotate(0deg)" }}
                      />
                    </button>

                    {/* Contenido expansible del acordeón con transición de altura por grid CSS */}
                    <div
                      id={contentId}
                      role="region"
                      aria-labelledby={triggerId}
                      className="grid transition-[grid-template-rows,opacity] duration-300"
                      style={{
                        gridTemplateRows: isOpen ? "1fr" : "0fr",
                        opacity: isOpen ? 1 : 0,
                        transitionTimingFunction: "var(--ease-standard, cubic-bezier(0.2, 0, 0, 1))",
                      }}
                    >
                      <div className="overflow-hidden">
                        <p className="text-base md:text-lg leading-relaxed text-foreground max-w-2xl font-light pt-1 pb-6 pl-10 md:pl-16">
                          {item.lead && (
                            <>
                              <strong className="text-foreground font-medium">{item.lead}</strong>{" "}
                            </>
                          )}
                          {item.body}
                        </p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CONTACTO (Fondo adaptativo integrado suavemente por máscara, tokenizado con bg-background) ── */}
      <section className="relative py-20 md:py-28 bg-background" id="contacto">
        {/* Capa de fondo sutil (contact-portrait.avif en mobile, contact-.avif en desktop) con opacidad atenuada y desenfoque suave */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <div
            className="w-full h-full bg-cover bg-center opacity-25 mix-blend-multiply blur-[15px] [mask-image:linear-gradient(to_bottom,transparent_0%,black_25%,black_100%)] md:hidden"
            style={{ backgroundImage: "url('/contact-portrait.avif')" }}
            aria-hidden="true"
          />
          <div
            className="hidden w-full h-full bg-cover bg-center opacity-25 mix-blend-multiply blur-[15px] [mask-image:linear-gradient(to_bottom,transparent_0%,black_25%,black_100%)] md:block"
            style={{ backgroundImage: "url('/contact-.avif')" }}
            aria-hidden="true"
          />
        </div>
        <div className="container-trama relative z-10 px-6 md:px-12 lg:px-16">
          <div className="mx-auto max-w-3xl">
            <Reveal>
              <div className="mb-8">
                <span className="font-sans text-micro font-medium uppercase text-foreground">
                  CONTACTO
                </span>
                <h2 className="h-section mt-4 leading-tight font-normal">
                  Contanos qué necesita resolver tu negocio.
                </h2>
              </div>
            </Reveal>
            <Reveal delay={150}>
              <ContactForm />
            </Reveal>
          </div>
        </div>
      </section>

      <Footer showIntro={false} />
    </div>
  );
};

export default Index;
