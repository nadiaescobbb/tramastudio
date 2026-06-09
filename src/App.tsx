import { BrowserRouter, Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import Index from "./pages/Index.tsx";
import ScrollToTop from "./components/ScrollToTop";

const Dossier = lazy(() => import("./pages/Dossier.tsx"));
const NotFound = lazy(() => import("./pages/NotFound.tsx"));

const App = () => (
  <BrowserRouter>
    <ScrollToTop />
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/proyectos/:slug" element={
        <Suspense fallback={<div className="min-h-screen flex items-center justify-center text-muted font-mono text-[11px] uppercase tracking-widest">Cargando...</div>}>
          <Dossier />
        </Suspense>
      } />
      <Route path="*" element={
        <Suspense fallback={<div className="min-h-screen flex items-center justify-center text-muted font-mono text-[11px] uppercase tracking-widest">Cargando...</div>}>
          <NotFound />
        </Suspense>
      } />
    </Routes>
  </BrowserRouter>
);

export default App;
