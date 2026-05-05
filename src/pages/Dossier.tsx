import { Link, useParams } from "react-router-dom";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import { MouseGlow } from "@/components/MouseGlow";
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
      <MouseGlow />
      <Nav />

      {/* ── HERO DOSSIER — Split Architectural ───────────────────────────────────── */}
      <section className="relative min-h-screen flex flex-col pt-32 lg:pt-0">
        <div className="flex-1 grid lg:grid-cols-12 min-h-full">
          
          {/* Left: Content */}
          <div className="lg:col-span-5 flex flex-col justify-center p-8 md:p-12 lg:p-20 border-r border-border/60 bg-surface/30">
            <Reveal>
              <div className="flex items-center gap-4 mb-10">
                <div className="w-12 h-[1px] bg-[hsl(var(--accent))]" />
                <span className="font-mono text-[10px] font-bold uppercase tracking-[0.3em] text-[hsl(var(--accent))]">
                  Proyecto {project.number}
                </span>
              </div>
            </Reveal>

            <Reveal delay={100}>
              <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl leading-[0.95] tracking-[-0.05em] text-foreground">
                {project.name}
                <br />
                <span className="italic text-[hsl(var(--accent))]">{project.accent}</span>
              </h1>
            </Reveal>

            <Reveal delay={200}>
              <p className="mt-10 max-w-sm text-lg text-muted leading-relaxed">
                {project.tagline}
              </p>
            </Reveal>

            {/* Metadata Grid */}
            <div className="mt-16 grid grid-cols-2 gap-y-10 gap-x-12 border-t border-border/60 pt-12">
              {[
                { label: "Industria", value: project.industry },
                { label: "Formato", value: project.format },
                { label: "Conversión", value: project.conversion },
                { label: "Live", value: project.liveUrl, isLink: true },
              ].map((item, i) => (
                <Reveal key={item.label} delay={300 + i * 50}>
                  <div className="flex flex-col gap-3">
                    <span className="font-mono text-[9px] font-bold uppercase tracking-[0.25em] text-muted-foreground/60 flex items-center gap-2">
                      <div className="w-1 h-1 rounded-full bg-[hsl(var(--accent))]/40" />
                      {item.label}
                    </span>
                    {item.isLink ? (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-[hsl(var(--accent))] hover:translate-x-1 transition-transform"
                      >
                        {project.isConcept ? "Concepto" : "Visitar"}
                        <ArrowUpRight className="w-3 h-3" />
                      </a>
                    ) : (
                      <span className="text-sm font-bold text-foreground/90 uppercase tracking-tight">{item.value}</span>
                    )}
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Right: Immersive Image */}
          <div className="lg:col-span-7 relative h-[60vh] lg:h-auto overflow-hidden bg-surface">
            <img
              src={projectImages[project.slug]}
              alt={project.name}
              className="absolute inset-0 w-full h-full object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-1000 scale-110 lg:scale-100"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background/20 to-transparent pointer-events-none" />
          </div>
        </div>
      </section>

      {/* ── NARRATIVA — Editorial Bento ───────────────────────────────────── */}
      <section className="py-32 md:py-48 bg-surface/20 border-y border-border/40">
        <div className="container-trama">
          <div className="grid gap-20 lg:grid-cols-12 items-start">
            
            {/* Context */}
            <div className="lg:col-span-4 sticky top-32">
              <Reveal>
                <div className="font-mono text-[10px] font-bold uppercase tracking-[0.3em] text-[hsl(var(--accent))] mb-8">
                  01 — El Desafío
                </div>
                <h2 className="font-heading text-4xl md:text-5xl leading-tight tracking-tighter">
                  El sitio no era <span className="italic text-muted">una herramienta</span> de venta.
                </h2>
                <div className="mt-8 flex flex-col gap-6 text-muted leading-relaxed">
                  {project.challenge.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
              </Reveal>
            </div>

            {/* Asymmetric Visual Blocks */}
            <div className="lg:col-span-8 flex flex-col gap-12">
              <Reveal delay={200}>
                <div className="trama-card overflow-hidden">
                  <div className="trama-card-inner !p-0">
                    <img 
                      src={projectImages[project.slug]} 
                      className="w-full aspect-[16/9] object-cover" 
                      alt="Mockup Detail" 
                    />
                  </div>
                </div>
              </Reveal>
              
              <div className="grid md:grid-cols-2 gap-12">
                <Reveal delay={300}>
                  <div className="trama-card bg-surface/40 p-10 flex flex-col justify-between min-h-[300px]">
                    <CornerDownRight className="w-8 h-8 text-[hsl(var(--accent))]" />
                    <div>
                      <h4 className="font-heading text-xl mb-4">Arquitectura de Conversión</h4>
                      <p className="text-sm text-muted leading-relaxed">Eliminamos la fricción técnica para que el diseño no distraiga, sino que dirija la atención al valor del producto.</p>
                    </div>
                  </div>
                </Reveal>
                <Reveal delay={400}>
                  <div className="trama-card bg-surface/40 p-10 flex flex-col justify-between min-h-[300px]">
                    <div className="font-mono text-[40px] font-black text-[hsl(var(--accent))]/20 leading-none">60FPS</div>
                    <div>
                      <h4 className="font-heading text-xl mb-4">Performance Editorial</h4>
                      <p className="text-sm text-muted leading-relaxed">Implementación de animaciones fluidas que refuerzan la sensación de autoridad y calidad del estudio.</p>
                    </div>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CRITERIO — Large Scale Quote ───────────────────────────────────── */}
      {project.pullQuote && (
        <section className="py-32 md:py-64 bg-background">
          <div className="container-trama">
            <Reveal>
              <div className="max-w-5xl mx-auto text-center">
                <div className="flex justify-center mb-16">
                  <div className="w-px h-24 bg-gradient-to-b from-transparent to-[hsl(var(--accent))]" />
                </div>
                <blockquote className="font-heading text-4xl md:text-6xl lg:text-8xl leading-[0.95] tracking-[-0.04em] text-foreground">
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
            <div className="lg:col-span-7 flex flex-col gap-4">
              {project.criterion.points.map((pt, i) => (
                <Reveal key={pt.label} delay={i * 100}>
                  <div className="group trama-card hover:bg-surface/50 transition-colors p-8 md:p-10">
                    <div className="flex items-start gap-8">
                      <span className="font-mono text-[10px] font-black text-[hsl(var(--accent))]/40 mt-1">
                        (0{i + 1})
                      </span>
                      <div>
                        <h3 className="font-heading text-xl md:text-2xl mb-4 group-hover:text-[hsl(var(--accent))] transition-colors">
                          {pt.label}
                        </h3>
                        <p className="text-muted leading-relaxed">
                          {pt.text}
                        </p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SIGUIENTE PROYECTO — Immersive Transition ────────────────────────── */}
      <section className="relative h-screen flex flex-col overflow-hidden bg-black border-t border-white/10 group">
        <img 
          src={projectImages[next.slug]} 
          className="absolute inset-0 w-full h-full object-cover opacity-40 grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-[1500ms] ease-out"
          alt="Next Project"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/80" />
        
        <div className="relative flex-1 flex flex-col items-center justify-center text-center p-8">
          <Reveal>
            <div className="font-mono text-[10px] font-bold uppercase tracking-[0.5em] text-white/50 mb-10">
              Siguiente Proyecto
            </div>
            <Link to={`/proyectos/${next.slug}`} className="block">
              <h2 className="font-heading text-6xl md:text-8xl lg:text-[10rem] text-white leading-none tracking-[-0.06em] hover:text-[hsl(var(--accent))] transition-colors duration-500">
                {next.name}
                <span className="italic text-[hsl(var(--accent))] ml-4">{next.accent}</span>
              </h2>
            </Link>
            <Link to={`/proyectos/${next.slug}`} className="mt-16 inline-flex items-center gap-4 text-white/80 font-sans text-xs font-semibold uppercase tracking-[0.3em] hover:gap-8 transition-all duration-500">
              <span>Descubrir el proceso</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Reveal>
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

