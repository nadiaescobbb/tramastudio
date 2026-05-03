import { Link, useParams } from "react-router-dom";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import { MouseGlow } from "@/components/MouseGlow";
import { projects, waLink } from "@/data/projects";
import { projectImages } from "@/data/project-images";
import NotFound from "./NotFound";

const Dossier = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = projects.find((p) => p.slug === slug);
  if (!project) return <NotFound />;

  const idx = projects.findIndex((p) => p.slug === slug);
  const next = projects[(idx + 1) % projects.length];

  return (
    <div className="relative">
      <MouseGlow />
      <Nav />

      {/* HERO DOSSIER */}
      <section className="pt-40 pb-16 md:pt-48 md:pb-20">
        <div className="container-trama">
          <Reveal><div className="eyebrow">PROYECTO {project.number}</div></Reveal>
          <Reveal delay={100}>
            <h1 className="h-display mt-6">
              {project.name}
              <br />
              <span className="italic text-[hsl(var(--accent))]">{project.accent}</span>
            </h1>
          </Reveal>

          <Reveal delay={200}>
            <div className="mt-12 grid gap-8 border-t border-border pt-8 md:grid-cols-4">
              {[
                ["Industria", project.industry],
                ["Formato", project.format],
                ["Conversión", project.conversion],
                ["Sitio", null],
              ].map(([label, value]) => (
                <div key={label as string} className="flex flex-col gap-2">
                  <span className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-muted">
                    {label}
                  </span>
                  {value ? (
                    <span className="text-sm font-semibold text-foreground leading-snug">{value}</span>
                  ) : (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-semibold text-[hsl(var(--accent))] underline underline-offset-4"
                    >
                      Ver en vivo →
                    </a>
                  )}
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* IMAGEN ANCLA */}
      <section className="pb-16 md:pb-24">
        <div className="container-trama">
          <Reveal>
            <div className="overflow-hidden rounded-sm border border-border">
              <img
                src={projectImages[project.slug]}
                alt={`${project.name} ${project.accent}`}
                width={1280}
                height={960}
                className="h-auto w-full object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* CONTENIDO */}
      <section className="pb-24 md:pb-32">
        <div className="container-narrow flex flex-col gap-20">
          <Block num="01" title="El sitio no representaba al negocio.">
            {project.challenge.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </Block>

          <Block num="02" title="El criterio visual.">
            <p>{project.criterion.intro}</p>
            <ul className="mt-6 flex flex-col gap-4">
              {project.criterion.points.map((pt) => (
                <li
                  key={pt.label}
                  className="border-l-2 border-[hsl(var(--accent))] pl-5 leading-relaxed"
                >
                  <strong className="text-foreground">{pt.label}</strong>{" "}
                  <span className="text-muted">— {pt.text}</span>
                </li>
              ))}
            </ul>
          </Block>

          {project.pullQuote && (
            <Reveal>
              <blockquote className="pull-quote">"{project.pullQuote.text}"</blockquote>
              {project.pullQuote.author && (
                <div className="mt-4 font-mono text-xs uppercase tracking-[0.25em] text-muted">
                  {project.pullQuote.author}
                </div>
              )}
            </Reveal>
          )}

          <Block num="03" title="La solución.">
            {project.solution.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </Block>
        </div>
      </section>

      {/* SIGUIENTE PROYECTO */}
      <section className="border-t border-border py-20">
        <div className="container-trama flex flex-wrap items-end justify-between gap-8">
          <div>
            <div className="eyebrow">SIGUIENTE PROYECTO</div>
            <Link
              to={`/proyectos/${next.slug}`}
              className="mt-4 inline-block font-heading text-5xl leading-none transition-colors hover:text-[hsl(var(--accent))] md:text-6xl"
            >
              {next.name} <span className="italic text-[hsl(var(--accent))]">{next.accent}</span>
            </Link>
          </div>
          <Link to={`/proyectos/${next.slug}`} className="btn-ghost-trama">
            Ver el proceso →
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border py-24 text-center md:py-32">
        <div className="container-narrow">
          <Reveal>
            <h2 className="h-section">
              ¿Querés algo así
              <br />
              <span className="italic text-[hsl(var(--accent))]">para tu negocio?</span>
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="mx-auto mt-6 max-w-md text-lg text-muted leading-relaxed">
              Contame qué necesitás. Te digo concretamente qué se puede hacer y cuánto sale.
            </p>
          </Reveal>
          <Reveal delay={220}>
            <a
              href={waLink(`Hola, vi el caso de ${project.name} y quiero hablar de mi negocio.`)}
              className="btn-primary-trama large mt-10"
            >
              Quiero algo así
            </a>
          </Reveal>
        </div>
      </section>

      <Footer />
    </div>
  );
};

const Block = ({
  num,
  title,
  children,
}: {
  num: string;
  title: string;
  children: React.ReactNode;
}) => (
  <Reveal>
    <div className="flex flex-col gap-6">
      <div>
        <span className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-[hsl(var(--accent))]">
          {num}
        </span>
        <h2 className="h-card mt-3 text-2xl md:text-4xl">{title}</h2>
      </div>
      <div className="flex flex-col gap-4 text-base leading-[1.8] text-muted md:text-lg [&>p>strong]:text-foreground">
        {children}
      </div>
    </div>
  </Reveal>
);

export default Dossier;
