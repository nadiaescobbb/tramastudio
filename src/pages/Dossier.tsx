import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import { projects, waLink } from "@/data/projects";
import { projectImages } from "@/data/project-images";
import { setSeo } from "@/lib/seo";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import NotFound from "./NotFound";

const Dossier = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = projects.find((p) => p.slug === slug);

  useEffect(() => {
    if (!project) return;

    setSeo({
      title: `${project.name} ${project.accent} — Proyecto de Trama Studio`,
      description: project.tagline,
      path: `/proyectos/${project.slug}`,
    });
  }, [project]);

  if (!project) return <NotFound />;

  const idx = projects.findIndex((p) => p.slug === slug);
  const next = projects[(idx + 1) % projects.length];

  return (
    <div className="dossier-page relative min-h-screen overflow-x-hidden bg-background selection:bg-[hsl(var(--accent))] selection:text-white">
      <Nav />

      {/* ── HERO DOSSIER — Split Architectural ───────────────────────────────────── */}
      <section className="relative lg:min-h-screen flex flex-col pt-32 lg:pt-0 overflow-hidden">
        <div className="flex-1 grid lg:grid-cols-12 lg:min-h-screen">
          
          {/* Left: Content */}
          <div className="min-w-0 overflow-hidden lg:col-span-5 flex flex-col justify-center p-6 md:p-12 lg:p-20 lg:pt-32 border-b lg:border-b-0 lg:border-r border-border/60 bg-surface/30 relative">
            {/* Subtle texture */}  
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
              style={{
                backgroundImage: `url(${projectImages[project.slug]})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-10">
                <div className="w-12 h-[1px] bg-[hsl(var(--accent))]" />
                <span className="font-mono text-[10px] font-bold uppercase tracking-[0.3em] text-[hsl(var(--accent))]">
                  Proyecto {project.number}
                </span>
              </div>

              <h1 className="max-w-[calc(100vw-48px)] font-heading text-[clamp(52px,16vw,88px)] md:max-w-none md:text-7xl lg:text-8xl leading-[0.95] tracking-[-0.05em] text-foreground">
                {project.name}
                <br />
                <span className="italic text-[hsl(var(--accent))]">{project.accent}</span>
              </h1>

              <p className="mt-8 lg:mt-10 max-w-[calc(100vw-48px)] md:max-w-sm text-base md:text-lg lg:text-xl text-muted leading-relaxed lg:leading-[1.6] [overflow-wrap:anywhere]">
                {project.tagline}
              </p>

            {/* Metadata Grid */}
            <div className="mt-12 lg:mt-16 grid grid-cols-1 gap-y-7 border-t border-border/60 pt-10 sm:grid-cols-2 lg:gap-x-12 lg:gap-y-10 lg:pt-12">
              {[
                { label: "Industria", value: project.industry },
                { label: "Formato", value: project.format },
                { label: "Conversión", value: project.conversion },
                ...(project.result ? [{ label: "Resultado", value: project.result }] : []),
                { label: "Live", value: project.liveUrl ?? "No publicado", isLink: Boolean(project.liveUrl) },
              ].map((item, i) => (
                  <div key={item.label} className="flex flex-col gap-2 lg:gap-3">
                    <span className="font-mono text-[9px] font-bold uppercase tracking-[0.25em] text-muted-foreground/60 flex items-center gap-2">
                      <div className="w-1 h-1 rounded-full bg-[hsl(var(--accent))]/40" />
                      {item.label}
                    </span>
                    {item.isLink ? (
                      <a
                        href={item.value}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center gap-3 px-4 py-2 bg-[hsl(var(--accent))] text-white text-[10px] lg:text-xs font-bold uppercase tracking-widest hover:bg-foreground transition-colors mt-2"
                      >
                        Visitar sitio
                        <ArrowUpRight className="w-3 h-3" />
                      </a>
                    ) : (
                      <span className="text-[10px] lg:text-sm font-bold text-foreground/90 uppercase tracking-tight [overflow-wrap:anywhere]">{item.value}</span>
                    )}
                  </div>
              ))}
            </div>
          </div>
          </div>

          {/* Right: Immersive Image */}
          <div className="lg:col-span-7 relative h-[50vh] lg:h-auto overflow-hidden bg-surface">
            <img
              src={projectImages[project.slug]}
              alt={project.name}
              loading="eager"
              decoding="async"
              className="absolute inset-0 w-full h-full object-cover transition-all duration-1000 scale-110 lg:scale-100"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background/20 to-transparent pointer-events-none" />
          </div>
        </div>
      </section>

      {/* ── NARRATIVA — Editorial ───────────────────────────────────── */}
      <section className="py-20 md:py-48 bg-surface/20 border-y border-border/40 overflow-hidden relative">
        {/* Ambient background */}
        <div 
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage: `url(${projectImages[project.slug]})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="container-trama relative z-10">
          <div className="space-y-32 lg:space-y-48">

            {/* Contexto */}
            <Reveal>
              <div className="max-w-2xl">
                <div className="font-mono text-[10px] font-bold uppercase tracking-[0.3em] text-[hsl(var(--accent))] mb-6 lg:mb-8">
                  El Contexto
                </div>
                <div className="flex flex-col gap-6 text-base md:text-lg text-muted leading-relaxed">
                  {project.challenge.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
              </div>
            </Reveal>

            {/* Image */}
            <div className="-mx-6 md:-mx-12 lg:-mx-16">
              <div className="trama-card p-2 overflow-hidden rounded-none md:rounded-2xl">
                <div className="trama-card-inner p-0">
                  <img 
                    src={projectImages[project.slug]} 
                    className="w-full aspect-[21/9] object-cover" 
                    alt={`Vista del proyecto ${project.name}`} 
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>
            </div>

            {/* Decisión */}
            <Reveal>
              <div className="max-w-2xl">
                <div className="font-mono text-[10px] font-bold uppercase tracking-[0.3em] text-[hsl(var(--accent))] mb-6 lg:mb-8">
                  La Decisión
                </div>
                <p className="text-base md:text-lg text-muted leading-relaxed">
                  {project.criterion.intro}
                </p>
                {project.criterion.points.length > 0 && (
                <div className="mt-8 flex flex-col gap-8">
                  {project.criterion.points.map((pt, i) => (
                    <div key={pt.label}>
                      <h3 className="font-heading text-lg md:text-xl mb-2">{pt.label}</h3>
                      <p className="text-base text-muted leading-relaxed">{pt.text}</p>
                    </div>
                  ))}
                </div>
                )}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── CRITERIO — Large Scale Quote ───────────────────────────────────── */}
      {project.pullQuote && (
        <section className="py-16 md:py-24 bg-background overflow-hidden">
          <div className="container-trama">
            <Reveal>
              <div className="max-w-5xl mx-auto text-center">
                <div className="flex flex-col items-center mb-12">
                  <span className="font-mono text-[10px] font-bold uppercase tracking-[0.4em] text-[hsl(var(--accent))]/50 mb-6">
                    ( FEEDBACK )
                  </span>
                  <div className="w-px h-16 bg-gradient-to-b from-transparent to-[hsl(var(--accent))]" />
                </div>
                <blockquote className="font-heading text-4xl md:text-6xl lg:text-7xl xl:text-8xl leading-[0.95] tracking-[-0.04em] text-foreground" style={{ textWrap: "balance" }}>
                  "{project.pullQuote.text}"
                </blockquote>
                {project.pullQuote.author && (
                  <div className="mt-16 flex items-center justify-center gap-6">
                    <div className="h-[1px] w-12 bg-border" />
                    <cite className="font-mono text-[11px] uppercase tracking-[0.3em] text-[hsl(var(--accent))] not-italic">
                      {project.pullQuote.author}
                    </cite>
                    <div className="h-[1px] w-12 bg-border" />
                  </div>
                )}
              </div>
            </Reveal>
          </div>
        </section>
      )}

      {/* ── RESULTADO ──────────────────────────────────────── */}
      <section className="py-32 md:py-48 bg-surface/30 border-t border-border relative overflow-hidden">
        {/* Ambient background */}
        <div 
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: `url(${projectImages[project.slug]})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="container-trama relative z-10">
          <Reveal>
            <div className="max-w-2xl">
              <div className="font-mono text-[10px] font-bold uppercase tracking-[0.3em] text-[hsl(var(--accent))] mb-6 lg:mb-8">
                El Resultado
              </div>
              <div className="flex flex-col gap-6 text-base md:text-lg text-muted leading-relaxed">
                {project.solution.map((s, i) => (
                  <p key={i}>{s}</p>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── BACK TO PROJECTS — Exit Point ───────────────────────────────────── */}
      <section className="py-20 md:py-32 bg-background text-center border-t border-border/40">
        <Reveal>
          <Link 
            to="/#trabajos" 
            className="inline-flex items-center gap-4 px-8 py-4 border border-border rounded-full text-[11px] lg:text-xs font-bold uppercase tracking-[0.3em] text-foreground hover:bg-surface hover:border-[hsl(var(--accent))] transition-all duration-300 group"
          >
            <ArrowRight className="w-4 h-4 rotate-180 transition-transform group-hover:-translate-x-2" />
            <span>Ver todos los proyectos</span>
          </Link>
        </Reveal>
      </section>

      {/* ── SIGUIENTE PROYECTO — Immersive Transition ────────────────────────── */}
      <section className="relative min-h-[60vh] lg:h-screen flex flex-col overflow-hidden bg-black border-t border-white/10 group">
        <img 
          src={projectImages[next.slug]} 
          className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-105 transition-all duration-1000 ease-out"
          alt={`Vista previa del proyecto ${next.name}`}
          loading="lazy"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/80" />
        
        <div className="relative flex-1 flex flex-col items-center justify-center text-center p-6 lg:p-8">
            <div className="font-mono text-[9px] lg:text-[10px] font-bold uppercase tracking-[0.5em] text-white/50 mb-8 lg:mb-10">
              Siguiente Proyecto
            </div>
            <Link to={`/proyectos/${next.slug}`} className="block">
              <h2 className="font-heading text-4xl md:text-8xl lg:text-[10rem] text-white leading-none tracking-[-0.06em] hover:text-[hsl(var(--accent))] transition-colors duration-500">
                {next.name}
                <span className="italic text-[hsl(var(--accent))] ml-2 lg:ml-4">{next.accent}</span>
              </h2>
            </Link>
            <Link to={`/proyectos/${next.slug}`} className="mt-12 lg:mt-16 inline-flex items-center gap-4 text-white/80 font-sans text-xs font-semibold uppercase tracking-[0.3em] hover:gap-8 transition-all duration-500">
              <span>Descubrir el proceso</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
        </div>
      </section>

      {/* ── FINAL CTA — Minimalist ─────────────────────────────────────────── */}
      <section className="py-32 md:py-48 bg-surface/10">
        <div className="container-narrow text-center">
          <Reveal>
            <h2 className="font-heading text-3xl md:text-5xl tracking-tight leading-[1.1]">
              ¿Hay algo en tu negocio que <br />
              <span className="italic text-[hsl(var(--accent))]">todavía no se está viendo?</span>
            </h2>
            <p className="mt-10 max-w-md mx-auto text-muted text-lg">
              Hablemos. Podemos encontrar una mejor forma de mostrarlo online.
            </p>
            <a
              href={waLink(`Hola, vi el caso de ${project.name} y quiero hablar de mi negocio.`)}
              className="btn-primary-trama large mt-12 inline-flex"
            >
              Iniciar conversación
            </a>
          </Reveal>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Dossier;

