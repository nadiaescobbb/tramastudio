import { ArrowUpRight } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { waLink } from "@/data/projects";

interface FooterProps {
  showIntro?: boolean;
}

export const Footer = ({ showIntro = true }: FooterProps) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const year = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleHashClick = (event: React.MouseEvent<HTMLAnchorElement>, to: string) => {
    event.preventDefault();
    navigate(to);

    const hash = to.slice(to.indexOf("#"));
    window.setTimeout(() => {
      document.getElementById(hash.slice(1))?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    /* Footer completo de HeyTrama en ambiente oscuro tokenizado con bg-foreground con letras blancas y marca en mayúsculas */
    <footer className="bg-[#050505] text-white pt-20 md:pt-28 pb-12 overflow-hidden">
      <div className="container-trama px-6 md:px-12 lg:px-16">
        {showIntro && (
          <div className="grid grid-cols-12 items-start gap-8 pb-16 lg:gap-12 md:pb-24">
            <div className="col-span-12 space-y-6 lg:col-span-7">
              <h2 className="max-w-2xl font-heading text-3xl font-normal leading-[1.12] tracking-tight text-white sm:text-5xl lg:text-6xl">
                ¿Tenés un proyecto o una necesidad de negocio en mente?
              </h2>
              <div className="pt-4">
                <a
                  href="mailto:hola@heytrama.com"
                  aria-label="Enviar correo directo a hola@heytrama.com"
                  className="group inline-flex items-center gap-3 font-sans text-2xl font-medium text-white transition-colors hover:text-white sm:text-3xl"
                >
                  <span>hola@heytrama.com</span>
                  <ArrowUpRight className="h-7 w-7 text-[hsl(var(--editorial-accent))] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </a>
              </div>
            </div>
            <div className="col-span-12 space-y-4 lg:col-span-5 lg:pt-4">
              <span className="block font-mono text-[15px] font-medium uppercase tracking-[0.01em] text-white/70 md:text-sm">
                ESTUDIO DE PRODUCTO & SOFTWARE
              </span>
              <p className="max-w-md font-sans text-[15px] font-normal leading-relaxed text-white/80 sm:text-base">
                Diseñamos y desarrollamos aplicaciones, plataformas y software a medida para convertir ideas y necesidades de negocio en productos digitales que funcionan.
              </p>
            </div>
          </div>
        )}

        {/* Bloque Medio: Navegación organizada en 4 columnas en texto blanco */}
        <div className="grid grid-cols-12 gap-8 lg:gap-10 py-16 md:py-20 border-b border-white/10 font-sans">
          {/* Columna 1: Navegación */}
          <div className="col-span-6 sm:col-span-3 space-y-4">
            <span className="font-mono text-micro font-medium uppercase text-white/70 block">
              NAVEGACIÓN
            </span>
            <ul className="space-y-2.5 text-[15px] md:text-sm font-medium">
              <li>
                <Link
                  to="/"
                  onClick={() => {
                    if (pathname === "/") scrollToTop();
                  }}
                  className="text-white/90 hover:text-white transition-colors"
                >
                  Inicio
                </Link>
              </li>
              <li>
                <Link to="/proyectos" className="text-white/90 hover:text-white transition-colors">
                  Proyectos
                </Link>
              </li>
              <li>
                <a href="/#proceso" onClick={(event) => handleHashClick(event, "/#proceso")} className="text-white/90 hover:text-white transition-colors">
                  Cómo trabajamos
                </a>
              </li>
              <li>
                <a href="/#servicios" onClick={(event) => handleHashClick(event, "/#servicios")} className="text-white/90 hover:text-white transition-colors">
                  Servicios
                </a>
              </li>
              <li>
                <a href="/#preguntas" onClick={(event) => handleHashClick(event, "/#preguntas")} className="text-white/90 hover:text-white transition-colors">
                  Preguntas
                </a>
              </li>
            </ul>
          </div>

          {/* Columna 2: Servicios (Alineados exactamente con los 5 servicios canónicos del estudio) */}
          <div className="col-span-6 sm:col-span-3 space-y-4">
            <span className="font-mono text-micro font-medium uppercase text-white/70 block">
              SERVICIOS
            </span>
            <ul className="space-y-2.5 text-[15px] md:text-sm font-medium text-white/80">
              <li>Sitios web & Landing Pages</li>
              <li>Rediseño de sitios y productos existentes</li>
              <li>Implementación de interfaces</li>
              <li>Web Apps, catálogos & herramientas internas</li>
              <li>MVP</li>
            </ul>
          </div>

          {/* Columna 3: Contacto */}
          <div className="col-span-6 sm:col-span-3 space-y-4">
            <span className="font-mono text-micro font-medium uppercase text-white/70 block">
              CONTACTO
            </span>
            <ul className="space-y-2.5 text-[15px] md:text-sm font-medium">
              <li>
                <a href="mailto:hola@heytrama.com" className="text-white/90 hover:text-white transition-colors">
                  hola@heytrama.com
                </a>
              </li>
              <li>
                <a href={waLink("Hola, vi HeyTrama y quiero contarte sobre mi proyecto.")} target="_blank" rel="noopener noreferrer" className="text-white/90 hover:text-white transition-colors">
                  +54 9 362 514-2700
                </a>
              </li>
              <li>
                <a href="/#contacto" onClick={(event) => handleHashClick(event, "/#contacto")} className="text-white/90 hover:text-white transition-colors">
                  Enviar formulario ↗
                </a>
              </li>
            </ul>
          </div>

          {/* Columna 4: Redes Sociales */}
          <div className="col-span-6 sm:col-span-3 space-y-4">
            <span className="font-mono text-micro font-medium uppercase text-white/70 block">
              REDES SOCIALES
            </span>
            <ul className="space-y-2.5 text-[15px] md:text-sm font-medium">
              <li>
                <a
                  href="https://instagram.com/heytrama"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram de HeyTrama"
                  className="text-white/90 hover:text-white transition-colors inline-flex items-center gap-1"
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
                  className="text-white/90 hover:text-white transition-colors inline-flex items-center gap-1"
                >
                  WhatsApp ↗
                </a>
              </li>
              <li>
                <a
                  href="mailto:hola@heytrama.com"
                  className="text-white/90 hover:text-white transition-colors inline-flex items-center gap-1"
                >
                  Email Directo ↗
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bloque Inferior: Derechos de autor y botón Scroll Top */}
        <div className="pt-8 flex flex-wrap items-center justify-between gap-4 font-mono text-micro uppercase text-white/70 border-t border-white/10">
          <div>© {year} HeyTrama. Todos los derechos reservados.</div>

          <div className="flex items-center gap-6">
            <span>Argentina</span>
            <button
              type="button"
              onClick={scrollToTop}
              aria-label="Volver arriba en la página"
              className="inline-flex items-center gap-1 text-white hover:text-white transition-colors cursor-pointer"
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
