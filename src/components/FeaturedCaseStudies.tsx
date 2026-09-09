import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/projects";
import { projectImages } from "@/data/project-images";

export function FeaturedCaseStudies() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeProject = projects[activeIndex] || projects[0];
  const activeImage = projectImages[activeProject.slug] || "/famvarhome.avif";

  return (
    <section className="py-16 md:py-24 bg-[#FBFBFA] text-[#111111]" id="casos">
      <div className="container-trama px-6 md:px-12 lg:px-16">
        {/* ── 3-COLUMN SHOWCASE GRID ─────────────────────────────── */}
        <div className="grid grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* ── COL 1: VERTICAL PROJECT SELECTOR MENU (Left) ─────── */}
          <div className="col-span-12 lg:col-span-3 flex flex-col justify-center space-y-4">
            {projects.map((project, index) => {
              const isActive = index === activeIndex;
              return (
                <button
                  key={project.slug}
                  onClick={() => setActiveIndex(index)}
                  className={`w-full text-left font-heading text-xl sm:text-2xl font-medium tracking-tight uppercase transition-all duration-300 flex items-center justify-between group ${
                    isActive
                      ? "text-[#111111] border-l-2 border-[#111111] pl-4 py-1"
                      : "text-[#111111]/35 hover:text-[#111111]/70 border-l-2 border-transparent pl-4 py-1"
                  }`}
                >
                  <span>{project.name}</span>
                </button>
              );
            })}
          </div>

          {/* ── COL 2: CENTER MOCKUP / VISUAL PREVIEW CARD (Wide & Compact) ── */}
          <div className="col-span-12 lg:col-span-6 flex items-center justify-center">
            <div className="relative w-full aspect-[16/9] max-h-[360px] overflow-hidden shadow-md group flex items-center justify-center">
              <img
                key={activeProject.slug}
                src={activeImage}
                alt={activeProject.name}
                className="w-full h-full object-cover object-top transition-all duration-500 animate-fadeIn"
                loading="lazy"
              />
            </div>
          </div>

          {/* ── COL 3: RIGHT DARK DETAIL CARD (Sharp Edge) ─────────── */}
          <div className="col-span-12 lg:col-span-3 flex flex-col">
            <div className="w-full bg-[#111111] text-[#FBFBFA] p-6 sm:p-8 flex flex-col justify-between shadow-xl min-h-[320px]">
              <div className="space-y-5">
                {/* Header: Circle Badge + Title con peso font-medium sobrio */}
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-white text-black font-heading font-medium text-sm flex items-center justify-center shrink-0">
                    {activeProject.name.charAt(0)}
                  </div>
                  <h3 className="font-heading text-lg sm:text-xl font-medium tracking-tight text-white">
                    {activeProject.name}
                  </h3>
                </div>

                {/* Tagline Description */}
                <p className="font-sans text-xs sm:text-sm leading-relaxed text-white/80">
                  {activeProject.tagline}
                </p>

                {/* Category & Tag Chips */}
                <div className="flex flex-wrap gap-2 pt-1">
                  <span className="bg-white/10 text-white/90 font-sans text-[11px] font-medium px-2.5 py-1">
                    {activeProject.category}
                  </span>
                  <span className="bg-white/10 text-white/90 font-sans text-[11px] font-medium px-2.5 py-1">
                    {activeProject.format.split("+")[0].trim()}
                  </span>
                </div>
              </div>

              {/* Bottom CTA Button alineado a font-medium */}
              <div className="pt-6">
                <Link
                  to={`/proyectos/${activeProject.slug}`}
                  className="w-full bg-[#FBFBFA] text-[#111111] py-3 px-4 flex items-center justify-between font-sans text-xs font-medium hover:bg-white transition-all shadow-sm group"
                >
                  <span>Ver proyecto</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
