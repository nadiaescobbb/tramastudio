import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";

import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";


const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="relative min-h-screen flex flex-col">
      <Nav />
      
      <main className="flex-1 flex flex-col items-center justify-center pt-32 pb-24">
        <div className="container-trama text-center">
          <div className="eyebrow">ERROR 404</div>
          
          <h1 className="h-display mt-6 italic text-[hsl(var(--accent))]">
            Página no encontrada
          </h1>
          
          <div className="mt-8 max-w-xl mx-auto">
            <p className="text-base text-muted leading-relaxed md:text-lg">
              Parece que el activo que buscás no existe o fue movido. 
              En el diseño, el copy y el código de Trama, nada queda al azar, 
              pero aquí parece que llegamos a un callejón sin salida.
            </p>
          </div>
          
          <div className="mt-12">
            <Link to="/" className="btn-primary-trama large">
              Volver al inicio
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default NotFound;
