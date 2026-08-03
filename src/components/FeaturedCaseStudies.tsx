import { Link } from "react-router-dom";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { projects } from "@/data/projects";

const projectGradients: Record<
  string,
  { bg: string; accent: string; glow: string }
> = {
  "joyeria-cuore": {
    bg: "bg-gradient-to-br from-[#2a1715] via-[#4a2622] to-[#120807]",
    accent: "text-[#e8b49b]",
    glow: "bg-[#e8b49b]/20",
  },
  "estudio-norte": {
    bg: "bg-gradient-to-br from-[#0c211b] via-[#1a3e32] to-[#06110d]",
    accent: "text-[#5ec49e]",
    glow: "bg-[#5ec49e]/20",
  },
  bosco: {
    bg: "bg-gradient-to-br from-[#331b10] via-[#572d1a] to-[#120803]",
    accent: "text-[#ed955a]",
    glow: "bg-[#ed955a]/20",
  },
  "clinica-nova": {
    bg: "bg-gradient-to-br from-[#191638] via-[#2f275e] to-[#090817]",
    accent: "text-[#a293f5]",
    glow: "bg-[#a293f5]/20",
  },
  "camila-correa": {
    bg: "bg-gradient-to-br from-[#381e16] via-[#593023] to-[#140a07]",
    accent: "text-[#db9276]",
    glow: "bg-[#db9276]/20",
  },
};

export function FeaturedCaseStudies() {
  const pCuore = projects.find((p) => p.slug === "joyeria-cuore") || projects[4];
  const pNorte = projects.find((p) => p.slug === "estudio-norte") || projects[1];
  const pBosco = projects.find((p) => p.slug === "bosco") || projects[0];
  const pNova = projects.find((p) => p.slug === "clinica-nova") || projects[2];
  const pCamila = projects.find((p) => p.slug === "camila-correa") || projects[3];

  const renderGradientCard = (
    project: typeof pCuore,
    aspectClass: string,
    isWide: boolean = false
  ) => {
    const style = projectGradients[project.slug] || {
      bg: "bg-gradient-to-br from-slate-900 to-black",
      accent: "text-white",
      glow: "bg-white/10",
    };

    return (
      <Link to={`/proyectos/${project.slug}`} className="group block">
        <div
          className={`relative overflow-hidden rounded-2xl ${style.bg} mb-3 border border-white/10 shadow-xl ${aspectClass} transition-all duration-500 group-hover:border-white/20`}
        >
          {/* Subtle Ambient Radial Glow */}
          <div
            className={`absolute -top-12 -right-12 w-48 h-48 rounded-full ${style.glow} blur-3xl group-hover:scale-150 transition-transform duration-700 pointer-events-none`}
          />

          {/* Normal State: Centered Minimalist Typography */}
          <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center group-hover:opacity-0 transition-opacity duration-300">
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/50 mb-2">
              {project.category}
            </span>
            <h4 className="font-heading font-bold text-white text-2xl md:text-3xl tracking-tight drop-shadow-md">
              {project.name}
              {project.accent && (
                <span className={`font-serif italic font-normal ml-2 ${style.accent}`}>
                  {project.accent}
                </span>
              )}
            </h4>
          </div>

          {/* Hover State: Glassmorphism Blur Overlay with Details */}
          <div className="absolute inset-0 bg-black/75 backdrop-blur-md p-6 md:p-8 flex flex-col justify-between opacity-0 group-hover:opacity-100 transition-all duration-300">
            <div>
              <span className={`font-mono text-[10px] font-bold uppercase tracking-widest ${style.accent} mb-2 block`}>
                Caso de Estudio
              </span>
              <p className="text-white/95 text-sm md:text-base font-sans leading-relaxed max-w-md">
                {project.tagline}
              </p>
            </div>
            <div>
              <span className="inline-flex items-center gap-2 bg-white text-black px-4 py-2 rounded-full font-mono text-xs font-bold shadow-lg transition-transform duration-200 group-hover:translate-x-0.5">
                <span>Ver Proyecto</span>
                <ArrowUpRight className="h-3.5 w-3.5" />
              </span>
            </div>
          </div>
        </div>

        {/* Card Title & Format Below Box */}
        <div>
          <h3 className="font-heading text-lg font-bold text-foreground tracking-tight group-hover:text-[hsl(var(--accent))] transition-colors">
            {project.name} {project.accent}
          </h3>
          <p className="font-mono text-xs text-muted font-medium mt-0.5">
            {project.format}
          </p>
        </div>
      </Link>
    );
  };

  return (
    <section className="py-24 md:py-36 bg-background border-b border-border" id="casos">
      <div className="container-trama px-6 md:px-12 lg:px-16">
        {/* Section Header */}
        <div className="flex flex-row items-center justify-between mb-12 md:mb-16">
          <h2 className="font-heading text-4xl md:text-6xl tracking-tight leading-none text-foreground">
            Proyectos <span className="font-serif italic font-normal">Destacados</span>
          </h2>

          <Link
            to="/#casos"
            className="inline-flex items-center gap-2 bg-black text-white px-5 py-2.5 rounded-full font-mono text-xs font-semibold hover:bg-black/90 transition-all shadow-md group"
          >
            <span>Ver Todos</span>
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        {/* Row 1: 3 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {renderGradientCard(pCuore, "aspect-[4/3.4]")}
          {renderGradientCard(pNorte, "aspect-[4/3.4]")}
          {renderGradientCard(pBosco, "aspect-[4/3.4]")}
        </div>

        {/* Row 2: Asymmetric Layout (5 cols + 7 cols) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-5">
            {renderGradientCard(pNova, "aspect-[1/1]")}
          </div>
          <div className="md:col-span-7">
            {renderGradientCard(pCamila, "aspect-[16/9] md:aspect-[1.5/1]", true)}
          </div>
        </div>
      </div>
    </section>
  );
}
