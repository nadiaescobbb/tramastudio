import { useCallback, useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ArrowLeft, ArrowUpRight, Menu, X } from "lucide-react";
import { waLink } from "@/data/projects";
import { Logo } from "./Logo";

const NAV_LINKS = [
  { label: "Proyectos", to: "/proyectos", isHash: false },
  { label: "Cómo trabajamos", to: "/#proceso", isHash: true },
  { label: "Servicios", to: "/#servicios", isHash: true },
  { label: "Preguntas", to: "/#preguntas", isHash: true },
] as const;

const WHATSAPP_MESSAGE = "Hola, vi HeyTrama y quiero contarte sobre mi proyecto.";

export const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const isHome = pathname === "/";

  const toggleBtnRef = useRef<HTMLButtonElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 100);

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;

    const focusTimer = window.setTimeout(() => firstLinkRef.current?.focus(), 50);
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
        toggleBtnRef.current?.focus();
        return;
      }

      if (event.key !== "Tab" || !overlayRef.current) return;

      const focusables = overlayRef.current.querySelectorAll<HTMLElement>(
        'a[href], button, input, textarea, select, [tabindex]:not([tabindex="-1"])'
      );
      if (focusables.length === 0) return;

      const firstElement = focusables[0];
      const lastElement = focusables[focusables.length - 1];

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.clearTimeout(focusTimer);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const handleHashClick = useCallback(
    (event: React.MouseEvent<HTMLAnchorElement>, to: string) => {
      event.preventDefault();
      setIsOpen(false);

      const hash = to.slice(to.indexOf("#"));
      if (pathname !== "/") {
        navigate(`/${hash}`);
      } else {
        navigate(hash, { replace: true });
      }

      window.requestAnimationFrame(() => {
        window.requestAnimationFrame(() => {
          document.getElementById(hash.slice(1))?.scrollIntoView({ behavior: "smooth" });
        });
      });
    },
    [navigate, pathname]
  );

  const handleVolver = useCallback(() => {
    if (window.history.length > 1) {
      navigate(-1);
    } else {
      navigate("/");
    }
  }, [navigate]);

  const closeMenu = () => {
    setIsOpen(false);
    toggleBtnRef.current?.focus();
  };

  return (
    <>
      <header className="fixed top-0 inset-x-0 z-[100] flex justify-between items-center p-4 md:p-6 pointer-events-none">
        <div className="pointer-events-auto flex items-center gap-2">
          <Link
            to="/"
            className="nav-brand-pill !static pointer-events-auto flex items-center gap-2.5"
            onClick={() => setIsOpen(false)}
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-black text-white">
              <Logo size={20} invert />
            </span>
            <span>HeyTrama</span>
          </Link>
          {!isHome && (
            <button
              type="button"
              onClick={handleVolver}
              aria-label="Volver atrás"
              className="nav-volver-pill pointer-events-auto inline-flex items-center gap-1.5 rounded-full border border-black/10 bg-white/80 px-3 py-2 text-sm text-[#171717] shadow-sm backdrop-blur-md"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
              <span>Volver</span>
            </button>
          )}
        </div>

        <nav
          className={`nav-menu-pill !static !max-w-none pointer-events-auto ${isOpen ? "open" : ""}`}
          aria-label="Navegación principal"
        >
          <div className="hidden items-center gap-2 md:flex">
            {NAV_LINKS.map(({ label, to, isHash }) =>
              isHash ? (
                <a
                  key={label}
                  href={to}
                  className="nav-menu-link"
                  onClick={(event) => handleHashClick(event, to)}
                >
                  {label}
                </a>
              ) : (
                <Link key={label} to={to} className="nav-menu-link">
                  {label}
                </Link>
              )
            )}
          </div>

          <a
            href={waLink(WHATSAPP_MESSAGE)}
            target="_blank"
            rel="noopener noreferrer"
            className={`nav-menu-cta group ${!isScrolled && isHome ? "unscrolled" : ""}`}
          >
            <span>Contar mi proyecto</span>
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>

          <button
            ref={toggleBtnRef}
            type="button"
            onClick={() => setIsOpen((open) => !open)}
            className="nav-mobile-toggle md:hidden"
            aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
          >
            {isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>

          {isOpen && (
            <div
              id="mobile-navigation"
              ref={overlayRef}
              role="dialog"
              aria-modal="true"
              aria-label="Menú de navegación"
              className="absolute right-0 top-[calc(100%+0.75rem)] w-[calc(100vw-2rem)] max-w-sm rounded-[1.75rem] border border-black/10 bg-white/95 p-8 shadow-[0_24px_80px_rgba(0,0,0,0.18)] backdrop-blur-2xl md:hidden"
            >
              {NAV_LINKS.map(({ label, to, isHash }, index) =>
                isHash ? (
                  <a
                    key={label}
                    ref={index === 0 ? firstLinkRef : undefined}
                    href={to}
                    onClick={(event) => handleHashClick(event, to)}
                    className="mobile-overlay-link"
                    style={{ transitionDelay: `${100 + index * 100}ms` }}
                  >
                    {label}
                  </a>
                ) : (
                  <Link
                    key={label}
                    ref={index === 0 ? firstLinkRef : undefined}
                    to={to}
                    onClick={() => setIsOpen(false)}
                    className="mobile-overlay-link"
                    style={{ transitionDelay: `${100 + index * 100}ms` }}
                  >
                    {label}
                  </Link>
                )
              )}
              <div className="mt-8 border-t border-border pt-8">
                <a
                  href={waLink(WHATSAPP_MESSAGE)}
                  target="_blank"
                  rel="noopener noreferrer"
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
      </header>

      {isOpen && (
        <div
          className="fixed inset-0 z-[90] bg-background/30 backdrop-blur-sm animate-in fade-in duration-700 md:hidden"
          onClick={closeMenu}
        />
      )}
    </>
  );
};
