import { Link, useParams } from "react-router-dom";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import { projects, waLink } from "@/data/projects";
import { projectImages } from "@/data/project-images";
import { ArrowUpRight, ArrowRight, CornerDownRight } from "lucide-react";
import NotFound from "./NotFound";

const Dossier = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = projects.find((p) => p.slug === slug);
  if (!project) return <NotFound />;

  const idx = projects.findIndex((p) => p.slug === slug);
  const next = projects[(idx + 1) % projects.length];

  return (
    <div className="relative min-h-screen bg-background selection:bg-[hsl(var(--accent))] selection:text-white">
      <Nav />

      {/* ── HERO DOSSIER — Split Architectural ───────────────────────────────────── */}
      <section className="relative lg:min-h-screen flex flex-col pt-32 lg:pt-0 overflow-hidden">
        <div className="flex-1 grid lg:grid-cols-12 lg:min-h-screen">
          
          {/* Left: Content */}
          <div className="lg:col-span-5 flex flex-col justify-center p-6 md:p-12 lg:p-20 lg:pt-32 border-b lg:border-b-0 lg:border-r border-border/60 bg-surface/30">
              <div className="flex items-center gap-4 mb-10">
                <div className="w-12 h-[1px] bg-[hsl(var(--accent))]" />
                <span className="font-mono text-[10px] font-bold uppercase tracking-[0.3em] text-[hsl(var(--accent))]">
                  Proyecto {project.number}
                </span>
              </div>

              <h1 className="font-heading text-4xl md:text-7xl lg:text-8xl leading-[0.95] tracking-[-0.05em] text-foreground">
                {project.name}
                <br />
                <span className="italic text-[hsl(var(--accent))]">{project.accent}</span>
              </h1>

              <p className="mt-8 lg:mt-10 max-w-sm text-base md:text-lg lg:text-xl text-muted leading-relaxed lg:leading-[1.6]">
                {project.tagline}
              </p>

            {/* Metadata Grid */}
            <div className="mt-12 lg:mt-16 grid grid-cols-2 gap-y-8 lg:gap-y-10 gap-x-12 border-t border-border/60 pt-10 lg:pt-12">
              {[
                { label: "Industria", value: project.industry },
                { label: "Formato", value: project.format },
                { label: "Conversión", value: project.conversion },
                { label: "Live", value: project.liveUrl, isLink: true },
              ].map((item, i) => (
                  <div key={item.label} className="flex flex-col gap-2 lg:gap-3">
                    <span className="font-mono text-[9px] font-bold uppercase tracking-[0.25em] text-muted-foreground/60 flex items-center gap-2">
                      <div className="w-1 h-1 rounded-full bg-[hsl(var(--accent))]/40" />
                      {item.label}
                    </span>
                    {item.isLink ? (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center gap-3 px-4 py-2 bg-[hsl(var(--accent))] text-white text-[10px] lg:text-xs font-bold uppercase tracking-widest hover:bg-foreground transition-colors mt-2"
                      >
                        {project.isConcept ? "Caso conceptual" : "Visitar Sitio"}
                        <ArrowUpRight className="w-3 h-3" />
                      </a>
                    ) : (
                      <span className="text-[10px] lg:text-sm font-bold text-foreground/90 uppercase tracking-tight">{item.value}</span>
                    )}
                  </div>
              ))}
            </div>
          </div>

          {/* Right: Immersive Image */}
          <div className="lg:col-span-7 relative h-[50vh] lg:h-auto overflow-hidden bg-surface">
            <img
              src={projectImages[project.slug]}
              alt={project.name}
              className="absolute inset-0 w-full h-full object-cover transition-all duration-1000 scale-110 lg:scale-100"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background/20 to-transparent pointer-events-none" />
          </div>
        </div>
      </section>

      {/* ── NARRATIVA — Editorial Bento ───────────────────────────────────── */}
      <section className="py-20 md:py-48 bg-surface/20 border-y border-border/40 overflow-hidden">
        <div className="container-trama">
          <div className="grid gap-16 lg:gap-20 lg:grid-cols-12 items-start">
            
            {/* Context */}
            <div className="lg:col-span-4 lg:sticky lg:top-32">
              <Reveal>
                <div className="font-mono text-[10px] font-bold uppercase tracking-[0.3em] text-[hsl(var(--accent))] mb-6 lg:mb-8">
                  01 — El Desafío
                </div>
                <h2 className="font-heading text-3xl md:text-5xl leading-tight tracking-tighter">
                  El sitio no era <span className="italic text-muted">una herramienta</span> de venta.
                </h2>
                <div className="mt-6 lg:mt-8 flex flex-col gap-6 text-sm md:text-base text-muted leading-relaxed">
                  {project.challenge.map((p, i) => (
                    <p key={i} className="animate-in fade-in duration-700">{p}</p>
                  ))}
                </div>
              </Reveal>
            </div>

            {/* Asymmetric Visual Blocks */}
            <div className="lg:col-span-8 flex flex-col gap-8 lg:gap-12">
              <div className="trama-card p-2 overflow-hidden">
                  <div className="trama-card-inner p-0">
                    <img 
                      src={projectImages[project.slug]} 
                      className="w-full aspect-[16/9] object-cover" 
                      alt="Mockup Detail" 
                    />
                  </div>
                </div>
              
              <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                {project.highlights.map((highlight, i) => (
                    <div key={highlight.title} className="trama-card bg-surface/40 p-8 lg:p-10 flex flex-col justify-between min-h-[250px] lg:min-h-[300px]">
                      <div className="font-mono text-[24px] lg:text-[32px] font-black text-[hsl(var(--accent))]/20 leading-none">
                        {highlight.sub}
                      </div>
                      <div>
                        <h4 className="font-heading text-lg lg:text-xl mb-3 lg:mb-4">{highlight.title}</h4>
                        <p className="text-xs lg:text-sm text-muted leading-relaxed">{highlight.text}</p>
                      </div>
                    </div>
                ))}
              </div>
            </div>
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

      {/* ── ESTRATEGIA — Technical Points ───────────────────────────────────── */}
      <section className="py-32 md:py-48 border-t border-border">
        <div className="container-trama">
          <div className="grid lg:grid-cols-12 gap-20">
            <div className="lg:col-span-5">
              <Reveal>
                <div className="font-mono text-[10px] font-bold uppercase tracking-[0.3em] text-[hsl(var(--accent))] mb-8">
                  02 — El Criterio
                </div>
                <h2 className="font-heading text-4xl md:text-5xl leading-[1.1] tracking-tight">
                  Diseñar con un <span className="italic text-[hsl(var(--accent))]">objetivo de negocio.</span>
                </h2>
                <p className="mt-8 text-lg text-muted leading-relaxed">
                  {project.criterion.intro}
                </p>
              </Reveal>
            </div>
            <div className="lg:col-span-7 flex flex-col gap-6">
              {project.criterion.points.map((pt, i) => (
                  <div key={pt.label} className="group trama-card hover:bg-surface/50 transition-colors p-10 md:p-14">
                    <div className="flex items-start gap-8">
                      <span className="font-mono text-[10px] font-black text-[hsl(var(--accent))]/40 mt-1">
                        (0{i + 1})
                      </span>
                      <div>
                        <h3 className="font-heading text-xl md:text-2xl mb-4 group-hover:text-[hsl(var(--accent))] transition-colors">
                          {pt.label}
                        </h3>
                        <p className="text-muted leading-relaxed animate-in fade-in duration-700">
                          {pt.text}
                        </p>
                      </div>
                    </div>
                  </div>
              ))}
            </div>
          </div>
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
          className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-105 transition-all duration-[1500ms] ease-out"
          alt="Next Project"
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
            <h2 className="font-heading text-4xl md:text-6xl tracking-tight leading-[1.1]">
              ¿Tu proyecto necesita <br />
              <span className="italic text-[hsl(var(--accent))]">este nivel de ejecución?</span>
            </h2>
            <p className="mt-10 max-w-md mx-auto text-muted text-lg">
              Hablemos. Te doy una visión técnica y estratégica clara sin compromisos.
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

