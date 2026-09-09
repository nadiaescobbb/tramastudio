import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Reveal } from "@/components/Reveal";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { ContactForm } from "@/components/ContactForm";
import { waLink } from "@/data/projects";
import Metodologia from "@/components/Metodologia";
import { ServicesStack } from "@/components/ServicesStack";
import { AsciiHandsHero } from "@/components/AsciiHandsHero";
import { setSeo } from "@/lib/seo";
import { ArrowUpRight } from "lucide-react";

const FAQS = [
  {
    q: "¿Qué tipo de proyectos hacen?",
    boldPrefix: "",
    // Precisar el alcance concreto de desarrollo a medida delimitando lo que sí hacemos y lo que no
    a: "Diseñamos y desarrollamos software a medida, aplicaciones web y productos digitales desde cero o en etapa de rediseño. No hacemos plantillas prehechas ni servicios de marketing digital aislado.",
  },
  {
    q: "¿Tengo que tener definida la idea?",
    boldPrefix: "No.",
    a: "Podés llegar con una idea bastante clara o simplemente con un problema que necesitás resolver. Parte del trabajo es entender qué necesitás realmente antes de decidir qué construir.",
  },
  {
    q: "¿Ustedes diseñan y desarrollan?",
    boldPrefix: "Sí, por lo general las dos cosas juntas.",
    a: "Diseñar y construir en el mismo proceso evita que se pierda algo en el traspaso entre quien pensó la interfaz y quien la programó. Si ya tenés un diseño resuelto y necesitás solo la construcción, también podemos entrar únicamente en esa etapa.",
  },
  {
    q: "¿Trabajan con empresas o también con emprendedores?",
    boldPrefix: "Con ambos.",
    // Explicar el valor y método diferenciado según el tipo de cliente (emprendedor vs empresa) en lugar de repetir la pregunta
    a: "Para emprendedores nos enfocamos en validar rápido la idea inicial y construir un producto mínimo funcional. Para empresas intervenimos sobre flujos existentes, optimizando la arquitectura y la experiencia sin interrumpir la operación.",
  },
  {
    q: "¿Qué pasa si no sé cuánto cuesta mi proyecto?",
    boldPrefix: "No necesitás llegar con un presupuesto cerrado.",
    a: "Primero entendemos qué querés hacer, qué necesitás y qué alcance tiene. A partir de eso podemos definir la mejor forma de abordarlo.",
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

    if (window.location.hash) {
      window.history.replaceState(null, "", window.location.pathname);
    }
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative min-h-screen selection:bg-[hsl(var(--accent))] selection:text-white overflow-x-clip">
      <Nav />

      {/* Usar min-h-[100dvh] sin overflow-hidden en el contenedor de la sección para evitar el recorte accidental de texto y CTAs en pantallas móviles pequeñas */}
      <section className="hero-start relative min-h-[100dvh] flex flex-col justify-center items-center pt-20 sm:pt-24 pb-8 sm:pb-12">
        <div className="hero-texture" />
        <AsciiHandsHero />
        <div className="container-trama relative z-10 w-full text-center max-w-4xl lg:max-w-[58rem] mx-auto px-6 flex flex-col items-center justify-center my-auto">
          {/* Centered Large H1 with Emil Kowalski Sequential Reading Choreography */}
          <h1 className="font-heading text-[1.95rem] sm:text-5xl md:text-6xl lg:text-[3.95rem] font-medium tracking-tight leading-[1.38] text-foreground">
            {/* Actualizar el H1 con el titular enfocado en resolución directa de problemas y software */}
            <span className="inline-block animate-reading-text" style={{ animationDelay: "100ms" }}>
              Estudio de producto: entendemos el problema y construimos el software que lo resuelve.
            </span>
          </h1>

          {/* Centered CTAs Row */}
          <div
            className="pt-8 sm:pt-12 md:pt-14 flex flex-wrap items-center justify-center gap-4 sm:gap-6 animate-reading-text"
            style={{ animationDelay: "2450ms" }}
          >
            {/* Unificar mensaje de WhatsApp mediante waLink() para mantener consistencia en todos los puntos de contacto del sitio */}
            <a href={waLink("Hola, vi HeyTrama y quiero contarte sobre mi proyecto.")} className="hero-primary-cta group text-sm sm:text-base px-7 py-4">
              <span>Contar mi proyecto</span>
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>

            {/* Reemplazar font-semibold por font-medium para evitar negrita sintética en fuente Aventa */}
            <Link
              to="/proyectos"
              className="hidden sm:inline-block font-sans text-xs sm:text-sm font-medium text-foreground/80 hover:text-foreground hover:underline underline-offset-4 transition-colors px-3 py-3"
            >
              Ver proyectos
            </Link>
          </div>
        </div>
      </section>

      {/* ── METODOLOGÍA / NUESTRO PROCESO ─────────────────────── */}
      <Metodologia />

      {/* ── SERVICIOS STACKED ────────────────────────────────────── */}
      <ServicesStack />

      {/* ── PREGUNTAS FRECUENTES ───────────────────────────────── */}
      <section className="bg-surface/10 py-20 md:py-28" id="preguntas">
        <div className="container-narrow px-6">
          <Reveal>
            {/* Mantener etiqueta de categoría sobria y disciplinada en opacidad suave del texto principal */}
            <div className="font-sans text-xs font-medium uppercase tracking-widest text-foreground/70">
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
                        <span className="font-mono text-sm text-foreground/50 flex-shrink-0">
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
                      className="grid transition-[grid-template-rows,opacity] duration-300 ease-[var(--ease-standard,cubic-bezier(0.2,0,0,1))]"
                      style={{
                        gridTemplateRows: isOpen ? "1fr" : "0fr",
                        opacity: isOpen ? 1 : 0,
                      }}
                    >
                      <div className="overflow-hidden">
                        <p className="text-base md:text-lg leading-relaxed text-foreground max-w-2xl font-light pt-1 pb-6 pl-10 md:pl-16">
                          {item.boldPrefix && (
                            <span className="text-foreground font-medium block mb-1">
                              {item.boldPrefix}
                            </span>
                          )}
                          {item.a}
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

      {/* ── CONTACTO (Fondo adaptativo: contact-portrait.avif en mobile, contact-.avif en desktop) ── */}
      <section className="relative py-20 md:py-28 bg-[url('/contact-portrait.avif')] md:bg-[url('/contact-.avif')] bg-cover bg-center" id="contacto">
        <div className="container-trama">
          <div className="grid grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Columna Izquierda (Contexto y contacto directo) */}
            <div className="col-span-12 lg:col-span-5 space-y-6">
              <Reveal>
                {/* Cambiar la etiqueta CONTACTO a color negro (text-foreground) en lugar de acento editorial */}
                <span className="font-sans text-micro uppercase tracking-wider text-foreground font-medium block mb-4">
                  CONTACTO
                </span>
                {/* Titular H2 principal de contacto */}
                <h2 className="h-section leading-tight font-normal">
                  Contanos qué necesita resolver tu negocio.
                </h2>
                {/* Bloque de datos de contacto sin línea divisoria (border-t eliminada) */}
                <div className="pt-4 space-y-3 font-sans text-subtle mt-4">
                  <p className="text-foreground font-medium">
                    Email directo:{" "}
                    {/* Remover subrayado (underline) del enlace de correo electrónico */}
                    <a
                      href="mailto:hola@heytrama.com"
                      className="text-foreground font-medium hover:text-[hsl(var(--editorial-accent))] transition-colors"
                    >
                      hola@heytrama.com
                    </a>
                  </p>
                  <p className="text-foreground font-medium">
                    WhatsApp:{" "}
                    {/* Remover subrayado (underline) del enlace de WhatsApp */}
                    <a
                      href={waLink("Hola, vi HeyTrama y quiero contarte sobre mi proyecto.")}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground font-medium hover:text-[hsl(var(--editorial-accent))] transition-colors"
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

