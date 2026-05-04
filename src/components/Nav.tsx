import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { waLink } from "@/data/projects";

export const Nav = () => {
  const [hidden, setHidden] = useState(false);
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
    <nav
      className="fixed inset-x-0 top-0 z-50 border-b backdrop-blur-xl transition-transform duration-300"
      style={{
        background: "hsl(var(--background) / 0.78)",
        transform: hidden ? "translateY(-100%)" : "translateY(0)",
      }}
    >
      <div className="container-trama flex items-center justify-between py-4">
        <Link
          to="/"
          className="font-mono text-[11px] font-bold uppercase tracking-[0.15em] text-foreground"
        >
          {isHome ? "TRAMA STUDIO" : "← VOLVER AL INICIO"}
        </Link>
        <div className="flex items-center gap-8">
          {isHome && (
            <>
              <a href="#trabajos" className="hidden text-xs text-muted hover:text-foreground transition-colors sm:inline-block">Trabajos</a>
              <a href="#metodo" className="hidden text-xs text-muted hover:text-foreground transition-colors sm:inline-block">Método</a>
              <a href="#servicios" className="hidden text-xs text-muted hover:text-foreground transition-colors sm:inline-block">Servicios</a>
            </>
          )}
          <a
            href={waLink("Hola, quiero contarte mi proyecto.")}
            className="btn-primary-trama"
            style={{ padding: "10px 20px" }}
          >
            Hablemos
          </a>
        </div>
      </div>
    </nav>
  );
};
