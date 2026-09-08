import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import { projects } from "@/data/projects";
import { projectImages } from "@/data/project-images";
import { setSeo } from "@/lib/seo";

const CATEGORIES = [
  "TODOS",
  "Sitios web",
  "Landing Pages",
  "Rediseño UX/UI",
  "Frontend",
  "Web Apps",
  "MVPs",
];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("TODOS");

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
      : projects.filter((p) => {
          const catMatch = p.category.toLowerCase().includes(activeFilter.toLowerCase());
          const tagMatch = p.tags?.some((t) => t.toLowerCase() === activeFilter.toLowerCase());
          return catMatch || tagMatch;
        });

  const displayProjects = filteredProjects.length > 0 ? filteredProjects : projects;

  return (
    <div className="relative min-h-screen bg-[#050505] text-white selection:bg-[hsl(var(--accent))] selection:text-white overflow-x-hidden">
      <Nav />

      {/* ── 1. HERO SECTION (EXACT REFERENCE MARKUP) ─────────────── */}
      <section className="hero">
        <div className="hero__blur-1" />
        <img
          src="/assets/images/blurs/red-blur.webp"
          alt="elipse decorativa"
          className="hero__ellipse-small-center-blur"
        />
        <img
          src="/assets/images/blurs/blur-black-4.webp"
          alt="capa de desenfoque decorativa"
          className="hero__blur-4"
        />
        <img
          src="/assets/images/blurs/projects-big-blur.webp"
          alt="capa decorativa"
          className="hero__ellipse-big-fade-black"
        />

        {/* GRID WRAPPER */}
        <div className="hero-grid">
          <Reveal>
            <h1 className="hero__heading">
              PROYECTOS
            </h1>
          </Reveal>
        </div>
      </section>

      {/* ── 2. PROJECTS SECTION (EXACT REFERENCE STRUCTURE) ────────── */}
      <section className="projects" role="group" data-filter-group="" data-max-count="10">
        {/* SELECTORS */}
        <div className="projects-selectors">
          {CATEGORIES.map((cat) => {
            const isActive = activeFilter === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveFilter(cat)}
                className={`cta-2 btn w-inline-block ${isActive ? "--is-active" : ""}`}
                data-filter-target={cat.toLowerCase()}
                data-filter-status={isActive ? "active" : "not-active"}
              >
                <div className="btn__bg" />
                <div className="btn__circle-wrap">
                  <div className="btn__circle">
                    <div className="before__100" />
                  </div>
                </div>
                <div className="btn__text">
                  <p className="btn-text-p" translate="no">
                    {cat}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {/* PROJECTS GRID */}
        <div className="projects-grid" aria-live="polite" role="list" id="filter-list">
          {displayProjects.map((project, index) => {
            const coverImage =
              projectImages[project.slug] || "/famvarhome.avif";

            return (
              <Reveal key={project.slug} delay={index * 100}>
                <Link
                  to={`/proyectos/${project.slug}`}
                  className="project-grid__item"
                  role="listitem"
                >
                  <div className="project-grid__image-wrapper">
                    <img
                      src={coverImage}
                      alt={`Proyecto ${project.name}`}
                      loading="lazy"
                    />
                  </div>

                  <h4 className="project-grid__service">
                    {project.category} · {project.format}
                  </h4>

                  <div className="project-grid__link">
                    <span className="project-grid__link-text">
                      {project.name}{" "}
                      {project.accent && (
                        <span className="font-serif italic font-normal text-white/60 text-xl ml-2">
                          {project.accent}
                        </span>
                      )}
                    </span>

                    <span className="project-grid__link-arrow-wrapper">
                      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M9.0967 0.245454C8.4414 0.248377 7.91255 0.781966 7.91548 1.43726C7.9184 2.09255 8.45199 2.6214 9.10728 2.61848L13.0341 2.60096C14.6278 2.59385 15.7228 2.59076 16.5569 2.68185C16.828 2.71145 17.0545 2.7496 17.2469 2.79571L0.43233 19.6103C-0.0310365 20.0737 -0.0310366 20.8249 0.432331 21.2883C0.895697 21.7517 1.64696 21.7517 2.11033 21.2883L18.9249 4.47371C18.971 4.66609 19.0092 4.89264 19.0388 5.16371C19.1299 5.99782 19.1268 7.09282 19.1197 8.6865L19.1021 12.6133C19.0992 13.2686 19.6281 13.8022 20.2834 13.8051C20.9386 13.8081 21.4722 13.2792 21.4752 12.6239L21.493 8.62633C21.4997 7.1207 21.5053 5.89015 21.3978 4.90609C21.286 3.88279 21.0399 2.97681 20.4366 2.19721C20.3043 2.0263 20.1615 1.86413 20.009 1.71163C19.8565 1.55913 19.6943 1.41629 19.5234 1.28402C18.7438 0.680691 17.8378 0.434576 16.8145 0.322825C15.8305 0.215359 14.5999 0.220872 13.0942 0.227617L9.0967 0.245454Z"
                          fill="#FF8200"
                        />
                      </svg>
                    </span>
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </section>

      <Footer />
    </div>
  );
}

