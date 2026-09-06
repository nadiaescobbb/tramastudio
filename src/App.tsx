import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { lazy, Suspense, useEffect } from "react";
import Index from "./pages/Index.tsx";
import ScrollToTop from "./components/ScrollToTop";
import { FloatingWhatsApp } from "./components/FloatingWhatsApp";

const Dossier = lazy(() => import("./pages/Dossier.tsx"));
const NotFound = lazy(() => import("./pages/NotFound.tsx"));

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

const GoogleAnalyticsTracker = () => {
  const location = useLocation();

  useEffect(() => {
    if (typeof window.gtag === "function") {
      window.gtag("config", "G-WX7ELP1JQF", {
        page_path: location.pathname + location.search,
      });
    }
  }, [location]);

  return null;
};

const App = () => (
  <BrowserRouter>
    <GoogleAnalyticsTracker />
    <ScrollToTop />
    <FloatingWhatsApp />
    <Routes>
      <Route path="/" element={<Index />} />
      <Route
        path="/proyectos"
        element={
          <Suspense
            fallback={
              <div className="min-h-screen flex items-center justify-center text-muted font-mono text-[11px] uppercase tracking-widest">
                Cargando...
              </div>
            }
          >
            <Dossier />
          </Suspense>
        }
      />
      <Route
        path="/proyectos/:slug"
        element={
          <Suspense
            fallback={
              <div className="min-h-screen flex items-center justify-center text-muted font-mono text-[11px] uppercase tracking-widest">
                Cargando...
              </div>
            }
          >
            <Dossier />
          </Suspense>
        }
      />
      <Route
        path="*"
        element={
          <Suspense
            fallback={
              <div className="min-h-screen flex items-center justify-center text-muted font-mono text-[11px] uppercase tracking-widest">
                Cargando...
              </div>
            }
          >
            <NotFound />
          </Suspense>
        }
      />
    </Routes>
  </BrowserRouter>
);

export default App;
