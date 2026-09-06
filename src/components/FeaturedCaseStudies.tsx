import { Link } from "react-router-dom";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { projects } from "@/data/projects";

const studioDarkStyle = {
  bg: "bg-gradient-to-br from-[#161514] via-[#1c1b19] to-[#0f0e0d]",
  accent: "text-[hsl(var(--editorial-accent))]",
  glow: "bg-[hsl(var(--editorial-accent))]/15",
};

export function FeaturedCaseStudies() {
  const pFamvar = projects.find((p) => p.slug === "famvar") || projects[0];
  const pCuore = projects.find((p) => p.slug === "joyeria-cuore") || projects[1];

  const renderGradientCard = (
    project: typeof pCuore,
    aspectClass: string
  ) => {
    return (
      <Link to={`/proyectos/${project.slug}`} className="group block">
        <div
          className={`relative overflow-hidden rounded-2xl ${studioDarkStyle.bg} mb-3 border border-[hsl(var(--studio-dark-border))] shadow-xl ${aspectClass} transition-all duration-500 group-hover:border-white/20`}
        >
          {/* Subtle Ambient Radial Glow */}
          <div
            className={`absolute -top-12 -right-12 w-48 h-48 rounded-full ${studioDarkStyle.glow} blur-3xl group-hover:scale-150 transition-transform duration-700 pointer-events-none`}
          />

          {/* Normal State: Centered Minimalist Typography */}
          <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center group-hover:opacity-0 transition-opacity duration-300">
            <span className="font-mono text-micro uppercase tracking-wider text-[hsl(var(--studio-dark-muted))] mb-2">
              {project.category}
            </span>
            <h4 className="font-heading font-normal text-[hsl(var(--studio-dark-text))] text-xl md:text-2xl tracking-tight drop-shadow-md">
              {project.name}
              {project.accent && (
                <span className={`font-serif italic font-normal ml-2 ${studioDarkStyle.accent}`}>
                  {project.accent}
                </span>
              )}
            </h4>
          </div>

          {/* Hover State: Glassmorphism Blur Overlay with Details */}
          <div className="absolute inset-0 bg-[#0d0c0c]/85 backdrop-blur-md p-6 md:p-8 flex flex-col justify-between opacity-0 group-hover:opacity-100 transition-all duration-300">
            <div>
              <span className="font-mono text-micro uppercase tracking-wider text-[hsl(var(--editorial-accent))] mb-2 block">
                {project.category}
              </span>
              <p className="text-[hsl(var(--studio-dark-text))] text-sm md:text-base font-sans leading-relaxed max-w-md">
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
          <h3 className="font-heading text-lg font-bold text-foreground tracking-tight group-hover:text-[hsl(var(--editorial-accent))] transition-colors">
            {project.name} {project.accent}
          </h3>
          <p className="font-mono text-xs text-foreground font-medium mt-0.5">
            {project.format}
          </p>
        </div>
      </Link>
    );
  };

  return (
    <section className="pt-16 md:pt-24 pb-10 md:pb-14 bg-background" id="casos">
      <div className="container-trama px-6 md:px-12 lg:px-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 md:mb-16">
          <div className="max-w-2xl space-y-4">
            <h2 className="font-heading text-4xl md:text-6xl tracking-tight leading-tight text-foreground">
              Proyectos que llevamos <br className="hidden sm:inline" />
              <span className="font-serif italic font-normal">de la idea a algo real.</span>
            </h2>
          </div>

          <Link
            to="/#casos"
            className="inline-flex items-center gap-2 bg-black text-white px-5 py-2.5 rounded-full font-mono text-xs font-semibold hover:bg-black/90 transition-all shadow-md group shrink-0 w-fit"
          >
            <span>Ver todos los proyectos</span>
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        {/* Grid 2 Columns: FAMVAR & CUORE */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {renderGradientCard(pFamvar, "aspect-[4/3]")}
          {renderGradientCard(pCuore, "aspect-[4/3]")}
        </div>
      </div>
    </section>
  );
}
