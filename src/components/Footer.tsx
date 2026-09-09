import { ArrowUpRight } from "lucide-react";
import { waLink } from "@/data/projects";

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    /* Footer completo de HeyTrama en ambiente oscuro tokenizado con bg-foreground con letras blancas y marca en mayúsculas */
    <footer className="bg-foreground text-white pt-20 md:pt-28 pb-12 overflow-hidden border-t border-white/10">
      <div className="container-trama px-6 md:px-12 lg:px-16">
        {/* Bloque Superior: CTA Principal y Declaración del Estudio */}
        <div className="grid grid-cols-12 gap-8 lg:gap-12 items-start pb-16 md:pb-24 border-b border-white/10">
          {/* Pregunta principal y enlace directo de correo en blanco */}
          <div className="col-span-12 lg:col-span-7 space-y-6">
            <h2 className="font-heading text-3xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-white leading-[1.12] max-w-2xl">
              ¿Tenés un proyecto o una necesidad de negocio en mente?
            </h2>

            <div className="pt-4">
              <a
                href="mailto:hola@heytrama.com"
                aria-label="Enviar correo directo a hola@heytrama.com"
                className="group inline-flex items-center gap-3 font-sans text-2xl sm:text-3xl font-medium text-white hover:text-[hsl(var(--editorial-accent))] transition-colors"
              >
                <span>hola@heytrama.com</span>
                <ArrowUpRight className="w-7 h-7 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 text-[hsl(var(--editorial-accent))]" />
              </a>
            </div>
          </div>

          {/* Posicionamiento y propósito del estudio */}
          <div className="col-span-12 lg:col-span-5 space-y-4 lg:pt-4">
            <span className="font-mono text-xs font-medium uppercase tracking-widest text-white/60 block">
              ESTUDIO DE PRODUCTO & SOFTWARE
            </span>
            <p className="font-sans text-sm sm:text-base leading-relaxed text-white/80 font-normal max-w-md">
              Diseñamos y desarrollamos aplicaciones, plataformas y software a medida para convertir ideas y necesidades de negocio en productos digitales que funcionan.
            </p>
          </div>
        </div>

        {/* Bloque Medio: Navegación organizada en 4 columnas en texto blanco */}
        <div className="grid grid-cols-12 gap-8 lg:gap-10 py-16 md:py-20 border-b border-white/10 font-sans">
          {/* Columna 1: Navegación */}
          <div className="col-span-6 sm:col-span-3 space-y-4">
            <span className="font-mono text-micro font-medium uppercase tracking-widest text-white/50 block">
              NAVEGACIÓN
            </span>
            <ul className="space-y-2.5 text-sm font-medium">
              <li>
                <a href="#hero" className="text-white/90 hover:text-[hsl(var(--editorial-accent))] transition-colors">
                  Inicio
                </a>
              </li>
              <li>
                <a href="/proyectos" className="text-white/90 hover:text-[hsl(var(--editorial-accent))] transition-colors">
                  Proyectos
                </a>
              </li>
              <li>
                <a href="#proceso" className="text-white/90 hover:text-[hsl(var(--editorial-accent))] transition-colors">
                  Cómo trabajamos
                </a>
              </li>
              <li>
                <a href="#servicios" className="text-white/90 hover:text-[hsl(var(--editorial-accent))] transition-colors">
                  Servicios
                </a>
              </li>
              <li>
                <a href="#preguntas" className="text-white/90 hover:text-[hsl(var(--editorial-accent))] transition-colors">
                  Preguntas
                </a>
              </li>
            </ul>
          </div>

          {/* Columna 2: Servicios (Alineados exactamente con los 5 servicios canónicos del estudio) */}
          <div className="col-span-6 sm:col-span-3 space-y-4">
            <span className="font-mono text-micro font-medium uppercase tracking-widest text-white/50 block">
              SERVICIOS
            </span>
            <ul className="space-y-2.5 text-sm font-medium text-white/80">
              <li>Sitios web & Landing Pages</li>
              <li>Rediseño de sitios y productos existentes</li>
              <li>Implementación de interfaces</li>
              <li>Web Apps, catálogos & herramientas internas</li>
              <li>MVP</li>
            </ul>
          </div>

          {/* Columna 3: Contacto */}
          <div className="col-span-6 sm:col-span-3 space-y-4">
            <span className="font-mono text-micro font-medium uppercase tracking-widest text-white/50 block">
              CONTACTO
            </span>
            <ul className="space-y-2.5 text-sm font-medium">
              <li>
                <a href="mailto:hola@heytrama.com" className="text-white/90 hover:text-[hsl(var(--editorial-accent))] transition-colors">
                  hola@heytrama.com
                </a>
              </li>
              <li>
                <a href={waLink("Hola, vi HeyTrama y quiero contarte sobre mi proyecto.")} target="_blank" rel="noopener noreferrer" className="text-white/90 hover:text-[hsl(var(--editorial-accent))] transition-colors">
                  +54 9 362 514-2700
                </a>
              </li>
              <li>
                <a href="#contacto" className="text-white/90 hover:text-[hsl(var(--editorial-accent))] transition-colors">
                  Enviar formulario ↗
                </a>
              </li>
            </ul>
          </div>

          {/* Columna 4: Redes Sociales */}
          <div className="col-span-6 sm:col-span-3 space-y-4">
            <span className="font-mono text-micro font-medium uppercase tracking-widest text-white/50 block">
              REDES SOCIALES
            </span>
            <ul className="space-y-2.5 text-sm font-medium">
              <li>
                <a
                  href="https://instagram.com/heytrama"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram de HeyTrama"
                  className="text-white/90 hover:text-[hsl(var(--editorial-accent))] transition-colors inline-flex items-center gap-1"
                >
                  Instagram ↗
                </a>
              </li>
              <li>
                <a
                  href={waLink("Hola, vi HeyTrama y quiero contarte sobre mi proyecto.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp de HeyTrama"
                  className="text-white/90 hover:text-[hsl(var(--editorial-accent))] transition-colors inline-flex items-center gap-1"
                >
                  WhatsApp ↗
                </a>
              </li>
              <li>
                <a
                  href="mailto:hola@heytrama.com"
                  className="text-white/90 hover:text-[hsl(var(--editorial-accent))] transition-colors inline-flex items-center gap-1"
                >
                  Email Directo ↗
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bloque Gigante de Marca: Logotipo HEYTRAMA gigante en MAYÚSCULAS y blanco */}
        <div className="py-12 md:py-16 text-center select-none pointer-events-none overflow-hidden">
          <span className="font-heading text-[15vw] sm:text-[16vw] leading-[0.82] font-normal tracking-tight text-white uppercase block">
            HEYTRAMA
          </span>
        </div>

        {/* Bloque Inferior: Derechos de autor y botón Scroll Top */}
        <div className="pt-8 flex flex-wrap items-center justify-between gap-4 font-mono text-micro uppercase tracking-widest text-white/60 border-t border-white/10">
          <div>© {new Date().getFullYear()} HeyTrama. Todos los derechos reservados.</div>

          <div className="flex items-center gap-6">
            <span>Argentina</span>
            <button
              type="button"
              onClick={scrollToTop}
              aria-label="Volver arriba en la página"
              className="inline-flex items-center gap-1 text-white hover:text-[hsl(var(--editorial-accent))] transition-colors cursor-pointer"
            >
              <span>SCROLL TOP</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
