import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { Nav } from "@/components/Nav";
import { ProjectCard } from "@/components/ProjectCard";
import { Reveal } from "@/components/Reveal";
import { projects, waLink } from "@/data/projects";
import { setSeo } from "@/lib/seo";

const CATEGORIES = [
  "TODOS",
  "SITIOS WEB",
  "LANDING PAGES",
  "REDISEÑO UX/UI",
  "FRONTEND",
  "WEB APPS",
  "MVPS",
];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("TODOS");
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    setSeo({
      title: "Proyectos — HeyTrama | Productos Digitales y Software",
      description:
        "Explorá nuestro portafolio de sitios web, e-commerce y aplicaciones digitales diseñadas y construidas para marcas reales.",
      path: "/proyectos",
    });

    window.scrollTo(0, 0);
  }, []);

  const filteredProjects =
    activeFilter === "TODOS"
      ? projects
      : projects.filter((project) => {
          const filter = activeFilter.toLowerCase();
          const matchesCategory = project.category.toLowerCase().includes(filter);
          const matchesTag = project.tags?.some((tag) => tag.toLowerCase() === filter);
          return matchesCategory || matchesTag;
        });

  return (
    <div className="relative min-h-screen bg-[#050505] text-white selection:bg-[hsl(var(--accent))] selection:text-white overflow-x-hidden">
      <Nav variant="dark-transparent" />

      <section className="relative flex min-h-[58vh] flex-col items-center justify-center overflow-hidden bg-[#050505] px-6 pb-10 pt-28 md:min-h-[72vh]">
        <div
          className="pointer-events-none absolute left-1/2 top-[42%] h-[650px] w-[900px] max-h-[80vh] max-w-[100vw] -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(ellipse_at_center,rgba(120,35,5,0.55)_0%,rgba(80,20,0,0.25)_32%,transparent_68%)] blur-[100px]"
          aria-hidden="true"
        />
        <div className="relative z-10 px-6 text-center">
          <Reveal>
            <h1 className="font-heading text-[clamp(4rem,9.5vw,10rem)] font-normal uppercase leading-[0.9] tracking-tight text-white">
              PROYECTOS
            </h1>
          </Reveal>
        </div>
      </section>

      <section className="projects" aria-label="Proyectos de HeyTrama" style={{ backgroundColor: "#050505" }}>
        <div
          className="projects-selectors relative z-10 !mb-0 flex flex-wrap gap-2.5 bg-[#050505] px-6 pb-12 pt-6 md:px-12 lg:px-16"
          role="group"
          aria-label="Filtrar proyectos"
          data-fade-in-item
        >
          {CATEGORIES.map((category) => {
            const isActive = activeFilter === category;
            return (
              <button
                key={category}
                type="button"
                data-theme="clear"
                data-filter-target={category.toLowerCase()}
                data-filter-status={isActive ? "active" : "not-active"}
                onClick={() => setActiveFilter(category)}
                className={`cta-2 btn group relative isolate overflow-hidden rounded-full border px-5 py-2.5 text-xs uppercase tracking-widest transition-colors ${
                  isActive
                    ? "bg-white border-white text-black"
                    : "bg-[#111] border-white/15 text-white/60 hover:border-white/30"
                }`}
                aria-pressed={isActive}
              >
                <div className="btn__bg absolute inset-0 -z-20 rounded-full bg-[#111]" aria-hidden="true" />
                <div className="btn__circle-wrap absolute inset-0 -z-10 overflow-hidden rounded-full">
                  <motion.div
                    className="btn__circle absolute left-1/2 top-1/2 aspect-square w-[319%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white"
                    initial={false}
                    animate={{ scale: isActive ? 1 : 0 }}
                    whileHover={{ scale: 1 }}
                    transition={{
                      duration: shouldReduceMotion ? 0 : 0.6,
                      ease: [0.2, 0, 0, 1],
                    }}
                  />
                </div>
                <span
                  className="btn__text relative z-10 group-hover:text-black data-[active=true]:text-black"
                  data-active={isActive}
                  translate="no"
                >
                  {category}
                </span>
              </button>
            );
          })}
        </div>

        <div
          className="grid grid-cols-1 gap-8 px-6 md:grid-cols-2 md:px-12 lg:gap-10"
          aria-live="polite"
          aria-atomic="false"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.slug} project={project} index={index} />
            ))}
          </AnimatePresence>
        </div>

        {filteredProjects.length === 0 && (
          <p className="py-16 text-center font-sans text-sm text-white/60">
            No hay proyectos en esta categoría por el momento.
          </p>
        )}
      </section>

      <section className="relative flex min-h-[70vh] flex-col items-center justify-center overflow-hidden bg-[#050505] px-6 py-24 pb-32 md:py-32">
        <div
          className="pointer-events-none absolute left-[-12%] top-[10%] h-[520px] w-[620px] max-w-[90vw] bg-[radial-gradient(ellipse_at_center,rgba(120,30,5,0.28)_0%,transparent_62%)] blur-[100px]"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute bottom-0 right-[-10%] h-[520px] w-[620px] max-w-[90vw] bg-[radial-gradient(ellipse_at_center,rgba(80,25,0,0.28)_0%,transparent_62%)] blur-[100px]"
          aria-hidden="true"
        />
        <div className="relative z-10 flex max-w-5xl flex-col items-center text-center">
          <h2 className="font-heading text-[clamp(3rem,8vw,7rem)] font-normal leading-[0.9] tracking-tighter text-white">
            ¿Tenés una idea que
            <br />
            <span className="font-serif font-light italic">merece existir?</span>
          </h2>
          <p className="mt-8 max-w-2xl text-sm leading-[1.6] text-white/55 md:text-lg">
            Diseñamos y construimos productos digitales que funcionan. Contanos tu proyecto.
          </p>
          <a
            href={waLink("Hola, quiero contarles sobre mi proyecto.")}
            target="_blank"
            rel="noopener noreferrer"
            className="cta-2 btn group relative isolate mt-10 inline-flex items-center gap-2 overflow-hidden rounded-full !border-white !bg-white px-8 py-4 text-xs font-medium uppercase tracking-widest !text-black"
          >
            <span className="btn__circle-wrap pointer-events-none absolute inset-0 z-0 overflow-hidden rounded-full" aria-hidden="true">
              <span className="btn__circle absolute left-1/2 top-1/2 aspect-square w-[320%] -translate-x-1/2 -translate-y-1/2 scale-0 rounded-full bg-black transition-transform duration-700 group-hover:scale-100" />
            </span>
            <span className="btn__text relative z-10 transition-colors group-hover:!text-white">
              HABLEMOS
              <ArrowUpRight className="ml-1 inline h-4 w-4" aria-hidden="true" />
            </span>
          </a>
        </div>

        <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between gap-4 px-6 py-5 text-[10px] uppercase tracking-widest text-white/30 md:px-12">
          <span>© {new Date().getFullYear()} HeyTrama. Todos los derechos reservados.</span>
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="shrink-0 transition-colors hover:text-white/60"
          >
            Argentina — Scroll top
          </button>
        </div>
      </section>
    </div>
  );
}
