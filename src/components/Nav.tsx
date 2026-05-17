import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { waLink } from "@/data/projects";
import { Logo } from "./Logo";

export const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { pathname } = useLocation();
  const isHome = pathname === "/";

  return (
    <>
      <nav className="nav-brand-pill">
        <Link
          to={isHome ? "/" : "/#trabajos"}
          className="flex items-center gap-2.5"
          onClick={() => setIsOpen(false)}
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-black text-white">
            <Logo size={18} />
          </span>
          <span>{isHome ? "Trama Studio" : "Volver"}</span>
        </Link>
      </nav>

      <nav className={`nav-menu-pill ${isOpen ? "open" : ""}`}>
        {isHome && (
          <div className="hidden items-center gap-2 md:flex">
            <a href="#trabajos" className="nav-menu-link">Trabajos</a>
            <a href="#metodo" className="nav-menu-link">Metodo</a>
            <a href="#servicios" className="nav-menu-link">Servicios</a>
            <a href="#faq" className="nav-menu-link">FAQ</a>
          </div>
        )}

        <a
          href={waLink("Hola, vi Trama Studio y quiero contarte sobre mi proyecto.")}
          className="nav-menu-cta group"
        >
          <span>Hablemos</span>
          <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>

        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="nav-mobile-toggle md:hidden"
          aria-label={isOpen ? "Cerrar menu" : "Abrir menu"}
        >
          {isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </button>

        {isOpen && (
          <div className="absolute right-0 top-[calc(100%+0.75rem)] w-[calc(100vw-2rem)] max-w-sm rounded-[1.75rem] border border-black/10 bg-white/95 p-8 shadow-[0_24px_80px_rgba(0,0,0,0.18)] backdrop-blur-2xl md:hidden">
            {[
              { t: "Trabajos", h: "#trabajos" },
              { t: "Metodo", h: "#metodo" },
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
            <div className="mt-8 border-t border-border pt-8">
              <a
                href={waLink("Hola, quiero iniciar un proyecto.")}
                className="btn-primary-trama group w-full justify-center"
              >
                <span>Iniciar proyecto</span>
                <div className="btn-icon-wrapper">
                  <ArrowUpRight className="h-4 w-4" />
                </div>
              </a>
            </div>
          </div>
        )}
      </nav>

      {isOpen && (
        <div
          className="fixed inset-0 z-[90] bg-background/30 backdrop-blur-sm animate-in fade-in duration-700 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};
