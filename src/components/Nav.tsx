import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { waLink } from "@/data/projects";
import { Logo } from "./Logo";

export const Nav = () => {
  const [hidden, setHidden] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { pathname } = useLocation();
  const isHome = pathname === "/";

  useEffect(() => {
    let last = 0;
    const onScroll = () => {
      const c = Math.max(0, window.scrollY);
      setHidden(c > last && c > 120);
      last = c;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav
        className={`nav-island ${hidden && !isOpen ? "-translate-y-32" : ""} ${isOpen ? "open" : ""}`}
      >
        <div className="flex items-center justify-between w-full">
          <Link
            to="/"
            className="flex items-center gap-3 group transition-transform duration-500 hover:scale-[1.02]"
            onClick={() => setIsOpen(false)}
          >
            {isHome ? (
              <>
                <Logo size={24} className="text-[hsl(var(--accent))]" />
                <span className="nav-link-premium">Trama Studio</span>
              </>
            ) : (
              <span className="nav-link-premium">← Volver</span>
            )}
          </Link>

          {/* Desktop Links */}
          {isHome && (
            <div className="hidden lg:flex items-center gap-10">
              <a href="#trabajos" className="nav-link-premium">Trabajos</a>
              <a href="#metodo" className="nav-link-premium">Método</a>
              <a href="#servicios" className="nav-link-premium">Servicios</a>
            </div>
          )}

          <div className="flex items-center gap-4">
            <a
              href={waLink("Hola, vi Trama Studio y quiero contarte sobre mi proyecto.")}
              className="btn-primary-trama group hidden lg:inline-flex"
            >
              <span>Hablemos</span>
              <div className="btn-icon-wrapper">
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </a>

            {/* Hamburger Toggle */}
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="flex flex-col gap-1.5 p-2 lg:hidden"
            >
              <div className="hamburger-line line-1" />
              <div className="hamburger-line line-2" />
            </button>
          </div>
        </div>

        {/* Mobile Overlay Content */}
        {isOpen && (
          <div className="absolute top-[120%] left-0 w-full bg-surface/95 backdrop-blur-3xl rounded-[2rem] border border-border p-10 flex flex-col gap-8 lg:hidden">
            {[
              { t: "Trabajos", h: "#trabajos" },
              { t: "Método", h: "#metodo" },
              { t: "Servicios", h: "#servicios" },
              { t: "Contacto", h: "#contacto" },
            ].map((link, i) => (
              <a
                key={link.t}
                href={link.h}
                onClick={() => setIsOpen(false)}
                className="mobile-overlay-link"
                style={{ transitionDelay: `${100 + i * 100}ms` }}
              >
                {link.t}
              </a>
            ))}
            <div className="mt-8 pt-8 border-t border-border">
              <a 
                href={waLink("Hola, quiero iniciar un proyecto.")}
                className="btn-primary-trama group w-full justify-center"
              >
                <span>Iniciar proyecto</span>
                <div className="btn-icon-wrapper">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </a>
            </div>
          </div>
        )}
      </nav>
      
      {/* Dimmer Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-[90] bg-background/40 backdrop-blur-sm animate-in fade-in duration-700"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};
