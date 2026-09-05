import { Link } from "react-router-dom";
import { ArrowUpRight, Code2, Layers, Cpu } from "lucide-react";
import { projects } from "@/data/projects";
import { projectImages } from "@/data/project-images";

export function FeaturedCaseStudies() {
  const pFamvar = projects.find((p) => p.slug === "famvar") || projects[0];
  const pCuore = projects.find((p) => p.slug === "joyeria-cuore") || projects[1];

  return (
    <section className="py-24 md:py-36 bg-background" id="casos">
      <div className="container-trama px-6 md:px-12 lg:px-16">
        {/* Section Header */}
        <div className="flex flex-row items-baseline justify-between mb-12 md:mb-16">
          <div>
            <span className="font-mono text-micro uppercase tracking-wider text-[hsl(var(--editorial-accent))] block mb-3">
              CASOS DE ESTUDIO & SOFTWARE
            </span>
            <h2 className="font-heading text-4xl md:text-6xl tracking-tight leading-none text-foreground">
              Proyectos <span className="font-serif italic font-normal">Destacados</span>
            </h2>
          </div>

          <Link
            to="/#casos"
            className="inline-flex items-center gap-2 bg-black text-white px-5 py-2.5 rounded-full font-mono text-xs font-semibold hover:bg-black/90 transition-all duration-300 ease-out shadow-md group shrink-0"
          >
            <span>Ver Todos</span>
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        {/* Bento Box Asymmetric 12-Column Grid (7 Cols FAMVAR / 5 Cols CUORE) */}
        <div className="grid grid-cols-12 gap-8 items-stretch">
          {/* Bento Card 1: FAMVAR (7 Columns) */}
          <div className="col-span-12 lg:col-span-7 flex flex-col">
            <Link
              to={`/proyectos/${pFamvar.slug}`}
              className="group flex flex-col h-full rounded-2xl bg-[hsl(var(--studio-dark-bg))] border border-[hsl(var(--studio-dark-border))] p-6 md:p-8 shadow-xl transition-all duration-300 ease-out hover:-translate-y-1.5 hover:shadow-2xl hover:border-[hsl(var(--editorial-accent))]/60 relative overflow-hidden"
            >
              {/* Subtle Terracotta Radial Light */}
              <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-[hsl(var(--editorial-accent))]/15 blur-3xl group-hover:scale-150 transition-transform duration-700 pointer-events-none" />

              {/* IDE Chrome Bar Header */}
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-[hsl(var(--studio-dark-border))] z-10">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                  <span className="font-mono text-micro text-[hsl(var(--studio-dark-muted))] ml-2">famvar.com.ar</span>
                </div>
                <div className="flex items-center gap-2 font-mono text-micro text-[hsl(var(--studio-dark-muted))]">
                  <Code2 className="w-3.5 h-3.5 text-[hsl(var(--editorial-accent))]" />
                  <span>E-Commerce & Catálogo</span>
                </div>
              </div>

              {/* Technical Stack Badges */}
              <div className="flex flex-wrap gap-2 mb-6 z-10">
                {["React 18", "TypeScript", "Tailwind CSS", "WhatsApp API"].map((tech) => (
                  <span
                    key={tech}
                    className="font-mono text-micro font-medium px-3 py-1 rounded-full bg-[hsl(var(--studio-dark-card))] border border-[hsl(var(--studio-dark-border))] text-[hsl(var(--studio-dark-text))] shadow-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Showcase Image Container */}
              <div className="overflow-hidden rounded-xl border border-[hsl(var(--studio-dark-border))] aspect-[16/10] relative mb-6 z-10">
                <img
                  src={projectImages["famvar"]}
                  alt={`Caso de estudio ${pFamvar.name}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Footer Meta Details */}
              <div className="mt-auto pt-2 flex items-center justify-between z-10">
                <div>
                  <h3 className="font-heading text-2xl font-normal text-[hsl(var(--studio-dark-text))] tracking-tight group-hover:text-[hsl(var(--editorial-accent))] transition-colors duration-300">
                    {pFamvar.name} <span className="font-serif italic font-normal text-[hsl(var(--studio-dark-muted))]">{pFamvar.accent}</span>
                  </h3>
                  <p className="text-sm font-sans text-[hsl(var(--studio-dark-muted))] mt-1 max-w-md">
                    {pFamvar.tagline}
                  </p>
                </div>
                <span className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center font-bold shrink-0 shadow-md group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300">
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </div>
            </Link>
          </div>

          {/* Bento Card 2: CUORE (5 Columns) */}
          <div className="col-span-12 lg:col-span-5 flex flex-col">
            <Link
              to={`/proyectos/${pCuore.slug}`}
              className="group flex flex-col h-full rounded-2xl bg-[hsl(var(--studio-dark-bg))] border border-[hsl(var(--studio-dark-border))] p-6 md:p-8 shadow-xl transition-all duration-300 ease-out hover:-translate-y-1.5 hover:shadow-2xl hover:border-[hsl(var(--editorial-accent))]/60 relative overflow-hidden"
            >
              {/* Subtle Terracotta Radial Light */}
              <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-[hsl(var(--editorial-accent))]/15 blur-3xl group-hover:scale-150 transition-transform duration-700 pointer-events-none" />

              {/* Technical Header */}
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-[hsl(var(--studio-dark-border))] z-10">
                <div className="flex items-center gap-2 font-mono text-micro text-[hsl(var(--studio-dark-muted))]">
                  <Cpu className="w-3.5 h-3.5 text-[hsl(var(--editorial-accent))]" />
                  <span>Tecnología & Taller</span>
                </div>
                <span className="font-mono text-micro text-[hsl(var(--editorial-accent))] font-semibold">40 Años</span>
              </div>

              {/* Technical Stack Badges */}
              <div className="flex flex-wrap gap-2 mb-6 z-10">
                {["Joyería Laser", "Relojería", "Catálogo Web"].map((tech) => (
                  <span
                    key={tech}
                    className="font-mono text-micro font-medium px-3 py-1 rounded-full bg-[hsl(var(--studio-dark-card))] border border-[hsl(var(--studio-dark-border))] text-[hsl(var(--studio-dark-text))] shadow-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Showcase Image Container */}
              <div className="overflow-hidden rounded-xl border border-[hsl(var(--studio-dark-border))] aspect-[16/10] relative mb-6 z-10">
                <img
                  src={projectImages["joyeria-cuore"]}
                  alt={`Caso de estudio ${pCuore.name}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Footer Meta Details */}
              <div className="mt-auto pt-2 flex items-center justify-between z-10">
                <div>
                  <h3 className="font-heading text-2xl font-normal text-[hsl(var(--studio-dark-text))] tracking-tight group-hover:text-[hsl(var(--editorial-accent))] transition-colors duration-300">
                    {pCuore.name} <span className="font-serif italic font-normal text-[hsl(var(--studio-dark-muted))]">{pCuore.accent}</span>
                  </h3>
                  <p className="text-sm font-sans text-[hsl(var(--studio-dark-muted))] mt-1 max-w-sm">
                    {pCuore.tagline}
                  </p>
                </div>
                <span className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center font-bold shrink-0 shadow-md group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300">
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

