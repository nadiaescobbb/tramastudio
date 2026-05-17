import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { waLink } from "@/data/projects";
import { Logo } from "./Logo";

export const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { pathname } = useLocation();
  const isHome = pathname === "/";



  return (
    <>
      <nav
        className={`nav-island ${isOpen ? "open" : ""}`}
      >
        <div className="flex items-center justify-between w-full">
          <Link
            to="/#trabajos"
            className="flex items-center gap-3 group transition-transform duration-500"
            onClick={() => setIsOpen(false)}
          >
            {isHome ? (
              <>
                <Logo size={24} className="text-[hsl(var(--accent))]" />
                <span className="nav-link">Trama Studio</span>
              </>
            ) : (
              <span className="nav-link">← Volver</span>
            )}
          </Link>

          {/* Desktop Links */}
          {isHome && (
            <div className="hidden md:flex items-center gap-8">
              <a href="#trabajos" className="nav-link">Trabajos</a>
              <a href="#metodo" className="nav-link">Método</a>
              <a href="#servicios" className="nav-link">Servicios</a>
              <a href="#faq" className="nav-link">FAQ</a>
            </div>
          )}

          <div className="flex items-center gap-4">
            <a
              href={waLink("Hola, vi Trama Studio y quiero contarte sobre mi proyecto.")}
              className="btn-primary-trama group flex items-center px-4 py-2 md:px-6 md:py-3 text-[10px] md:text-xs relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
              <span className="relative z-10">Hablemos</span>
              <div className="btn-icon-wrapper relative z-10 ml-2">
                <ArrowUpRight className="w-3 h-3 md:w-4 md:h-4" />
              </div>
            </a>

            {/* Hamburger Toggle */}
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="flex flex-col gap-1.5 p-2 md:hidden"
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
