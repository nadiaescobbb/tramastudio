import { useEffect, useRef, useState, type MouseEvent as ReactMouseEvent } from "react";
import { ArrowUpRight } from "lucide-react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";
import { Link } from "react-router-dom";
import type { Project } from "@/data/projects";
import { projectImages } from "@/data/project-images";

interface ProjectCardProps {
  project: Project;
  index: number;
  theme?: "dark" | "light";
}

const revealEase = [0.2, 0, 0, 1] as const;

export const ProjectCard = ({ project, index, theme = "dark" }: ProjectCardProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const tiltRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const rotateXValue = useTransform(pointerY, [-0.5, 0.5], [6, -6]);
  const rotateYValue = useTransform(pointerX, [-0.5, 0.5], [-8, 8]);
  const rotateX = useSpring(rotateXValue, { stiffness: 300, damping: 30 });
  const rotateY = useSpring(rotateYValue, { stiffness: 300, damping: 30 });
  useEffect(() => {
    setImageLoaded(false);
  }, [project.slug]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  const imageY = useTransform(
    scrollYProgress,
    [0, 1],
    shouldReduceMotion ? [0, 0] : [-20, 20]
  );
  const image = projectImages[project.slug] ?? "/famvarhome.avif";
  const tags = [project.category, ...project.format.split(/\s*\+\s*/)].join(" · ");
  const isLight = theme === "light";

  const handleMouseMove = (event: ReactMouseEvent<HTMLDivElement>) => {
    if (shouldReduceMotion) return;

    const rect = event.currentTarget.getBoundingClientRect();
    if (rect.width === 0 || rect.height === 0) return;

    pointerX.set((event.clientX - rect.left) / rect.width - 0.5);
    pointerY.set((event.clientY - rect.top) / rect.height - 0.5);
  };

  const handleTiltReset = () => {
    pointerX.set(0);
    pointerY.set(0);
  };

  return (
    <motion.div
      layout
      initial={{
        y: shouldReduceMotion ? 0 : 80,
        opacity: 0,
        clipPath: shouldReduceMotion ? "inset(0% 0 0 0)" : "inset(20% 0 0 0)",
      }}
      whileInView={{ y: 0, opacity: 1, clipPath: "inset(0% 0 0 0)" }}
      exit={{ y: shouldReduceMotion ? 0 : 24, opacity: 0, clipPath: "inset(10% 0 0 0)" }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{
        duration: shouldReduceMotion ? 0.2 : 0.9,
        ease: revealEase,
        delay: index * 0.07,
        layout: { duration: 0.35, ease: revealEase },
      }}
    >
      <Link
        to={`/proyectos/${project.slug}`}
        className={`group block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-4 ${
          isLight
            ? "text-foreground focus-visible:ring-offset-background"
            : "text-white focus-visible:ring-offset-black"
        }`}
      >
        <motion.div
          ref={containerRef}
          style={{ perspective: 1000 }}
          onFocus={handleTiltReset}
          onBlur={handleTiltReset}
          className="relative"
        >
          <motion.div
            ref={tiltRef}
            style={{
              rotateX: shouldReduceMotion ? 0 : rotateX,
              rotateY: shouldReduceMotion ? 0 : rotateY,
              transformStyle: "preserve-3d",
            }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleTiltReset}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className={`relative aspect-[16/11] overflow-hidden rounded-2xl ${
              isLight ? "bg-[#FFFBF5]" : "bg-neutral-900"
            }`}
          >
            <div
              className={`absolute inset-0 flex items-center justify-center transition-opacity duration-700 ${
                isLight ? "bg-[#F1ECE3]" : "bg-neutral-800"
              } ${
                imageLoaded ? "opacity-0" : "opacity-100"
              }`}
              aria-hidden="true"
            >
              <span className={`select-none font-heading text-7xl font-medium lowercase blur-sm ${
                isLight ? "text-foreground/15" : "text-white/20"
              }`}>
                ht
              </span>
            </div>

            <motion.div className="absolute inset-0" style={{ y: imageY }}>
              <div
                className={`absolute inset-0 scale-[1] transition-transform duration-700 ${
                  shouldReduceMotion
                    ? "transition-none"
                    : "group-hover:scale-[1.08] group-focus-visible:scale-[1.08]"
                }`}
                style={{ transitionTimingFunction: "cubic-bezier(0.2, 0, 0, 1)" }}
              >
                <img
                  src={image}
                  alt={`Proyecto ${project.name}`}
                  loading="lazy"
                  decoding="async"
                  onLoad={() => setImageLoaded(true)}
                  className="h-full w-full object-cover"
                />
              </div>
            </motion.div>

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-focus-visible:opacity-100" />

          </motion.div>
        </motion.div>

        <p className={`pt-4 font-mono text-[15px] md:text-sm uppercase tracking-[0.01em] ${
          isLight ? "text-muted" : "text-white/70"
        }`}>
          {tags}
        </p>

        <div className="flex justify-between gap-4 pt-2">
          <div>
            <h2 className={`font-heading text-2xl font-normal tracking-tight transition-colors duration-300 group-hover:text-orange-500 ${
              isLight ? "text-foreground" : "text-white"
            }`}>
              {project.name}
            </h2>
            {project.accent && (
              <span className={`font-serif text-lg font-normal italic ${
                isLight ? "text-muted" : "text-white/60"
              }`}>
                {project.accent}
              </span>
            )}
          </div>
          <ArrowUpRight
            aria-hidden="true"
            className="mt-1 h-5 w-5 shrink-0 text-orange-500 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-focus-visible:translate-x-1 group-focus-visible:-translate-y-1"
          />
        </div>
      </Link>
    </motion.div>
  );
};
