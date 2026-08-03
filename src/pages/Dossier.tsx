import { useEffect } from "react";
import { Link, useParams, useLocation } from "react-router-dom";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import { projects, waLink } from "@/data/projects";
import { projectImages } from "@/data/project-images";
import { setSeo } from "@/lib/seo";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import NotFound from "./NotFound";

const Dossier = () => {
  const { slug: paramSlug } = useParams<{ slug: string }>();
  const location = useLocation();
  const pathSlug = location.pathname.split("/").filter(Boolean)[1];
  const slug = paramSlug || pathSlug;
  const targetSlug = slug || "joyeria-cuore";
  const project = projects.find((p) => p.slug === targetSlug);

  useEffect(() => {
    if (!project) return;

    setSeo({
      title: `${project.name} ${project.accent} — Caso de Estudio HeyTrama`,
      description: project.tagline,
      path: `/proyectos/${project.slug}`,
    });
  }, [project]);

  if (!project) return <NotFound />;

  const idx = projects.findIndex((p) => p.slug === targetSlug);
  const next = projects[(idx + 1) % projects.length];
  const image = projectImages[project.slug];

  return (
    <div className="dossier-page relative min-h-screen overflow-x-hidden bg-background text-foreground selection:bg-[hsl(var(--accent))] selection:text-white">
      <Nav />

      {/* ── 1. HEADER SECTION ────────────────────────────────────────────────── */}
      <section className="pt-32 pb-12 md:pt-40 md:pb-16 bg-background">
        <div className="container-trama px-6 md:px-12 lg:px-16">
          {/* Top Title Bar */}
          <div className="flex flex-row items-baseline justify-between mb-8 md:mb-12">
            <h1 className="font-heading text-5xl md:text-7xl lg:text-9xl font-bold tracking-tight text-foreground">
              {project.name}
              {project.accent && (
                <span className="font-serif italic font-normal text-[hsl(var(--accent))] ml-3 md:ml-6">
                  {project.accent}
                </span>
              )}
            </h1>

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-black text-white px-5 py-2.5 rounded-full font-mono text-xs font-semibold hover:bg-black/90 transition-all shadow-md group shrink-0"
              >
                <span>Visitar Sitio</span>
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            )}
          </div>

          {/* Hero Full-bleed Cover Image */}
          <div className="overflow-hidden rounded-2xl border border-border bg-surface shadow-xl aspect-[16/9] md:aspect-[21/9] relative group">
            <img
              src={image}
              alt={`Caso de estudio ${project.name}`}
              loading="eager"
              decoding="async"
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
          </div>
        </div>
      </section>

      {/* ── 2. SUMMARY & METADATA SPECS GRID ────────────────────────────────────── */}
      <section className="py-16 md:py-24 border-b border-border bg-surface/30">
        <div className="container-trama px-6 md:px-12 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Tagline & Challenge intro */}
            <div className="lg:col-span-7 space-y-6">
              <span className="font-mono text-xs font-semibold uppercase tracking-widest text-[hsl(var(--accent))] block">
                Proyecto {project.number} · {project.category}
              </span>
              <h2 className="font-heading text-2xl md:text-4xl text-foreground font-medium leading-tight">
                {project.tagline}
              </h2>
              <div className="space-y-4 text-muted text-base md:text-lg leading-relaxed pt-2">
                {project.challenge.map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>
            </div>

            {/* Metadata Specs Table */}
            <div className="lg:col-span-5 bg-background rounded-2xl p-8 border border-border shadow-sm space-y-6">
              <h3 className="font-mono text-xs uppercase tracking-widest text-muted font-bold pb-4 border-b border-border">
                Ficha Técnica
              </h3>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <span className="font-mono text-[10px] uppercase tracking-wider text-muted/70 block mb-1">
                    Cliente / Marca
                  </span>
                  <span className="font-heading font-semibold text-foreground text-sm">
                    {project.name}
                  </span>
                </div>
                <div>
                  <span className="font-mono text-[10px] uppercase tracking-wider text-muted/70 block mb-1">
                    Industria
                  </span>
                  <span className="font-heading font-semibold text-foreground text-sm">
                    {project.industry}
                  </span>
                </div>
                <div>
                  <span className="font-mono text-[10px] uppercase tracking-wider text-muted/70 block mb-1">
                    Formato
                  </span>
                  <span className="font-heading font-semibold text-foreground text-sm">
                    {project.format}
                  </span>
                </div>
                <div>
                  <span className="font-mono text-[10px] uppercase tracking-wider text-muted/70 block mb-1">
                    Objetivo
                  </span>
                  <span className="font-heading font-semibold text-foreground text-sm">
                    {project.conversion}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. CENTERED PULLQUOTE / STRATEGY STATEMENT ───────────────────────────── */}
      <section className="py-24 md:py-36 bg-background">
        <div className="container-trama px-6 md:px-12 lg:px-16 text-center max-w-4xl mx-auto">
          <Reveal>
            <p className="font-heading text-2xl md:text-4xl lg:text-5xl text-foreground font-normal leading-relaxed tracking-tight">
              "{project.criterion.intro}"
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── 4. SHOWCASE GALLERY 1 (Full-width & Grid Cards) ────────────────────────── */}
      <section className="py-12 bg-background">
        <div className="container-trama px-6 md:px-12 lg:px-16 space-y-12">
          {/* Main Showcase Hero */}
          <div className="overflow-hidden rounded-2xl border border-border bg-surface shadow-xl aspect-[16/9]">
            <img
              src={image}
              alt={`Captura ${project.name}`}
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>

          {/* 2-Column Side-by-Side Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="overflow-hidden rounded-2xl border border-border bg-surface shadow-md aspect-[4/3]">
              <img
                src={image}
                alt="Detalle de interfaz"
                loading="lazy"
                className="w-full h-full object-cover scale-105"
              />
            </div>
            <div className="overflow-hidden rounded-2xl border border-border bg-surface shadow-md aspect-[4/3]">
              <img
                src={image}
                alt="Experiencia responsive"
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. OVERVIEW / CRITERIA SECTION (01. OVERVIEW) ────────────────────────── */}
      <section className="py-24 md:py-36 bg-surface/30 border-y border-border">
        <div className="container-trama px-6 md:px-12 lg:px-16 space-y-16">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            <div className="md:col-span-4">
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-[hsl(var(--accent))]">
                01. OVERVIEW & CRITERIO
              </span>
            </div>
            <div className="md:col-span-8 space-y-6">
              <h3 className="font-heading text-3xl md:text-5xl font-semibold tracking-tight text-foreground">
                Diseñar para comunicar con jerarquía y precisión.
              </h3>
              <p className="text-muted text-base md:text-lg leading-relaxed">
                Cada elemento de la pantalla responde a una prioridad de negocio: ordenar la oferta, responder las objeciones clave del usuario y guiarlo directamente hacia la acción.
              </p>
            </div>
          </div>

          {/* Criteria Points Breakdown */}
          {project.criterion.points.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8">
              {project.criterion.points.map((point) => (
                <div
                  key={point.label}
                  className="bg-background rounded-2xl p-8 border border-border shadow-sm space-y-3"
                >
                  <div className="w-8 h-8 rounded-full bg-[hsl(var(--accent))]/10 text-[hsl(var(--accent))] flex items-center justify-center font-mono text-xs font-bold mb-4">
                    ✓
                  </div>
                  <h4 className="font-heading text-xl font-bold text-foreground">
                    {point.label}
                  </h4>
                  <p className="text-muted text-sm leading-relaxed">
                    {point.text}
                  </p>
                </div>
              ))}
            </div>
          )}

          {/* Dark Showcase Banner Card (Whyte / Dark Theme style) */}
          <div className="overflow-hidden rounded-2xl bg-[#090909] text-white p-8 md:p-16 relative shadow-2xl">
            <div className="relative z-10 max-w-2xl space-y-6">
              <span className="font-mono text-xs uppercase tracking-widest text-white/50">
                PROCESO EDITORIAL & FRONTEND
              </span>
              <blockquote className="font-heading text-3xl md:text-5xl font-medium tracking-tight leading-tight">
                "{project.pullQuote?.text || project.tagline}"
              </blockquote>
              {project.pullQuote?.author && (
                <p className="font-mono text-xs uppercase tracking-widest text-[hsl(var(--accent))]">
                  — {project.pullQuote.author}
                </p>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. DESIGN SYSTEM & PERFORMANCE (02. DESIGN SYSTEM) ───────────────────── */}
      <section className="py-24 md:py-36 bg-background">
        <div className="container-trama px-6 md:px-12 lg:px-16 space-y-16">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            <div className="md:col-span-4">
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-[hsl(var(--accent))]">
                02. SISTEMA Y PERFORMANCE
              </span>
            </div>
            <div className="md:col-span-8 space-y-4">
              <h3 className="font-heading text-3xl md:text-5xl font-semibold tracking-tight text-foreground">
                Arquitectura limpia y velocidad de carga.
              </h3>
              <p className="text-muted text-base md:text-lg leading-relaxed">
                Desarrollo en React y Vite optimizado para que las imágenes vuelen, la interfaz sea fluida y la experiencia responda de forma impecable en mobile.
              </p>
            </div>
          </div>

          {/* Color & Spec Swatches Showcase */}
          <div className="bg-surface/50 rounded-2xl p-8 border border-border grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="space-y-2">
              <div className="h-16 rounded-xl bg-foreground border border-border" />
              <span className="font-mono text-xs font-semibold text-foreground block">#090909</span>
              <span className="font-mono text-[10px] text-muted uppercase">Contraste Alto</span>
            </div>
            <div className="space-y-2">
              <div className="h-16 rounded-xl bg-white border border-border" />
              <span className="font-mono text-xs font-semibold text-foreground block">#FFFFFF</span>
              <span className="font-mono text-[10px] text-muted uppercase">Superficie Limpia</span>
            </div>
            <div className="space-y-2">
              <div className="h-16 rounded-xl bg-[hsl(var(--accent))] border border-border" />
              <span className="font-mono text-xs font-semibold text-foreground block">ACCENT</span>
              <span className="font-mono text-[10px] text-muted uppercase">Acento Editorial</span>
            </div>
            <div className="space-y-2">
              <div className="h-16 rounded-xl bg-surface border border-border flex items-center justify-center font-mono text-xs font-bold text-foreground">
                100 / 100
              </div>
              <span className="font-mono text-xs font-semibold text-foreground block">PERFORMANCE</span>
              <span className="font-mono text-[10px] text-muted uppercase">Score Vite</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── 7. RESULTADO E IMPACTO (03. IMPACT) ─────────────────────────────────── */}
      <section className="py-24 md:py-36 bg-surface/30 border-t border-border">
        <div className="container-trama px-6 md:px-12 lg:px-16 space-y-16">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            <div className="md:col-span-4">
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-[hsl(var(--accent))]">
                03. RESULTADO
              </span>
            </div>
            <div className="md:col-span-8 space-y-6">
              <h3 className="font-heading text-3xl md:text-5xl font-semibold tracking-tight text-foreground">
                Una herramienta de negocio que genera confianza.
              </h3>
              <div className="space-y-4 text-muted text-base md:text-lg leading-relaxed">
                {project.solution.map((sol, i) => (
                  <p key={i}>{sol}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 8. SIGUIENTE PROYECTO BANNER (Immersive Transition) ────────────────────── */}
      <section className="relative min-h-[50vh] flex flex-col overflow-hidden bg-black text-white group">
        <img
          src={projectImages[next.slug]}
          className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-105 transition-all duration-1000 ease-out"
          alt={`Siguiente proyecto ${next.name}`}
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/80" />

        <div className="relative flex-1 flex flex-col items-center justify-center text-center p-8 z-10 my-16">
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-white/60 mb-6">
            Siguiente Proyecto
          </span>
          <Link to={`/proyectos/${next.slug}`}>
            <h2 className="font-heading text-5xl md:text-8xl font-bold text-white tracking-tight hover:text-[hsl(var(--accent))] transition-colors">
              {next.name}
              {next.accent && (
                <span className="font-serif italic font-normal text-[hsl(var(--accent))] ml-4">
                  {next.accent}
                </span>
              )}
            </h2>
          </Link>
          <Link
            to={`/proyectos/${next.slug}`}
            className="mt-8 inline-flex items-center gap-3 bg-white text-black px-6 py-3 rounded-full font-mono text-xs font-bold hover:bg-white/90 transition-all shadow-lg"
          >
            <span>Ver Proyecto</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* ── FINAL CONVERSATION CTA ──────────────────────────────────────────────── */}
      <section className="py-24 md:py-36 bg-background">
        <div className="container-trama px-6 md:px-12 lg:px-16 text-center max-w-3xl mx-auto space-y-8">
          <h2 className="font-heading text-3xl md:text-5xl font-semibold tracking-tight">
            ¿Querés construir una presencia digital con este nivel de <span className="font-serif italic font-normal text-[hsl(var(--accent))]">criterio y detalle</span>?
          </h2>
          <p className="text-muted text-base md:text-lg">
            Hablemos sobre tu proyecto y definamos la mejor estrategia visual y tecnológica.
          </p>
          <div>
            <a
              href={waLink(`Hola, vi el caso de ${project.name} y quiero hablar de mi proyecto.`)}
              className="inline-flex items-center gap-3 bg-[hsl(var(--accent))] text-white px-8 py-4 rounded-full font-mono text-xs font-bold uppercase tracking-wider hover:bg-foreground transition-colors shadow-lg"
            >
              <span>Iniciar Conversación</span>
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Dossier;
