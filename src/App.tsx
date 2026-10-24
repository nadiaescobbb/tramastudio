import { lazy, Suspense, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { ErrorBoundary } from "./components/ErrorBoundary";
import { FloatingWhatsApp } from "./components/FloatingWhatsApp";
import ScrollToTop from "./components/ScrollToTop";
import Index from "./pages/Index.tsx";

const Projects = lazy(() => import("./pages/Projects.tsx"));
const Dossier = lazy(() => import("./pages/Dossier.tsx"));
const NotFound = lazy(() => import("./pages/NotFound.tsx"));

const loadingFallback = (
  <div className="min-h-screen flex items-center justify-center text-muted font-mono text-[11px] uppercase tracking-widest">
    Cargando...
  </div>
);

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

const GoogleAnalyticsTracker = () => {
  const location = useLocation();

  useEffect(() => {
    const measurementId = import.meta.env.VITE_GA_MEASUREMENT_ID;
    const isLocalhost = ["localhost", "127.0.0.1"].includes(window.location.hostname);

    if (!measurementId || isLocalhost || typeof window.gtag !== "function") {
      return;
    }

    window.gtag("config", measurementId, {
      page_path: `${location.pathname}${location.search}`,
    });
  }, [location]);

  return null;
};

const App = () => (
  <>
    <GoogleAnalyticsTracker />
    <ScrollToTop />
    <FloatingWhatsApp />

    <ErrorBoundary>
      <Suspense fallback={loadingFallback}>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/proyectos" element={<Projects />} />
          <Route path="/proyectos/:slug" element={<Dossier />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </ErrorBoundary>
  </>
);

export default App;
