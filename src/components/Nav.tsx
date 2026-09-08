import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { waLink } from "@/data/projects";
import { Logo } from "./Logo";

export const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { pathname } = useLocation();
  const isHome = pathname === "/";

  // Referencias para gestionar el foco de accesibilidad en el modal desplegable móvil
  const toggleBtnRef = useRef<HTMLButtonElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Gestionar el foco de accesibilidad, trampas de teclado (Tab/Shift+Tab) y tecla Escape al abrir/cerrar el menú desplegable móvil
  useEffect(() => {
    if (!isOpen) return;

    // Transferir el foco al primer elemento interactivo del menú al abrir el modal
    const focusTimer = setTimeout(() => {
      firstLinkRef.current?.focus();
    }, 50);

    const handleKeyDown = (e: KeyboardEvent) => {
      // Cerrar el modal desplegable al presionar Escape y retornar el foco al botón de alternancia
      if (e.key === "Escape") {
        setIsOpen(false);
        toggleBtnRef.current?.focus();
      } else if (e.key === "Tab" && overlayRef.current) {
        // Atrapar la navegación por teclado (Tab) dentro del contenedor del modal móvil
        const focusables = overlayRef.current.querySelectorAll<HTMLElement>(
          'a[href], button, input, textarea, select, [tabindex]:not([tabindex="-1"])'
        );
        if (focusables.length === 0) return;
        const firstEl = focusables[0];
        const lastEl = focusables[focusables.length - 1];

        if (e.shiftKey && document.activeElement === firstEl) {
          e.preventDefault();
          lastEl.focus();
        } else if (!e.shiftKey && document.activeElement === lastEl) {
          e.preventDefault();
          firstEl.focus();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      clearTimeout(focusTimer);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const handleToggle = () => {
    if (isOpen) {
      // Retornar el foco al botón de alternancia al cerrar el menú móvil manualmente
      setIsOpen(false);
      toggleBtnRef.current?.focus();
    } else {
      setIsOpen(true);
    }
  };

  return (
    <>
      {/* Agregar aria-label descriptivo al elemento nav de la marca para diferenciarlo en lectores de pantalla */}
      <nav className="nav-brand-pill" aria-label="Marca">
        <Link
          // Redirigir siempre a la raíz ("/") en lugar del anchor id inexistente "#trabajos" para ofrecer una navegación real a la home
          to="/"
          className="flex items-center gap-2.5"
          onClick={() => setIsOpen(false)}
        >
          {/* Renderizar el ícono de marca solo cuando isHome sea true para simplificar la estética del botón "Volver" */}
          {isHome && (
            <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-black text-white">
              <Logo size={18} />
            </span>
          )}
          <span>{isHome ? "HeyTrama" : "Volver"}</span>
        </Link>
      </nav>

      {/* Agregar aria-label descriptivo al elemento nav principal para lectores de pantalla */}
      <nav className={`nav-menu-pill ${isOpen ? "open" : ""}`} aria-label="Navegación principal">
        <div className="hidden items-center gap-2 md:flex">
          <Link to="/proyectos" className="nav-menu-link">Proyectos</Link>
          <a href="/#proceso" className="nav-menu-link">Cómo trabajamos</a>
          <a href="/#servicios" className="nav-menu-link">Servicios</a>
          <a href="/#preguntas" className="nav-menu-link">Preguntas</a>
        </div>

        <a
          // Unificar mensaje de WhatsApp mediante waLink() para mantener consistencia en todos los puntos de contacto del sitio
          href={waLink("Hola, vi HeyTrama y quiero contarte sobre mi proyecto.")}
          className={`nav-menu-cta group ${!isScrolled && isHome ? "unscrolled" : ""}`}
        >
          <span>Contar mi proyecto</span>
          <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>

        <button
          ref={toggleBtnRef}
          type="button"
          onClick={handleToggle}
          className="nav-mobile-toggle md:hidden"
          aria-label={isOpen ? "Cerrar menu" : "Abrir menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </button>

        {isOpen && (
          <div
            ref={overlayRef}
            // Asignar rol dialog y atributo aria-modal para cumplir con especificaciones de accesibilidad en modales
            role="dialog"
            aria-modal="true"
            aria-label="Menú de navegación"
            className="absolute right-0 top-[calc(100%+0.75rem)] w-[calc(100vw-2rem)] max-w-sm rounded-[1.75rem] border border-black/10 bg-white/95 p-8 shadow-[0_24px_80px_rgba(0,0,0,0.18)] backdrop-blur-2xl md:hidden"
          >
            {[
              { t: "Proyectos", h: "/proyectos" },
              { t: "Cómo trabajamos", h: "/#proceso" },
              { t: "Servicios", h: "/#servicios" },
              { t: "Preguntas", h: "/#preguntas" },
            ].map((link, i) => (
              <Link
                key={link.t}
                ref={i === 0 ? firstLinkRef : undefined}
                to={link.h}
                onClick={() => setIsOpen(false)}
                className="mobile-overlay-link"
                style={{ transitionDelay: `${100 + i * 100}ms` }}
              >
                {link.t}
              </Link>
            ))}
            <div className="mt-8 border-t border-border pt-8">
              <a
                // Unificar mensaje de WhatsApp mediante waLink() para mantener consistencia en todos los puntos de contacto del sitio
                href={waLink("Hola, vi HeyTrama y quiero contarte sobre mi proyecto.")}
                className="btn-primary-trama group w-full justify-center"
              >
                <span>Contar mi proyecto</span>
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
          onClick={() => {
            setIsOpen(false);
            toggleBtnRef.current?.focus();
          }}
        />
      )}
    </>
  );
};

