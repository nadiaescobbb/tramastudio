export const Footer = () => {
  return (
    <footer className="bg-background pt-20 pb-12">
      <div className="container-trama">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3 items-end">
          <div className="lg:col-span-2">
            <h2 className="font-heading text-4xl md:text-6xl leading-none tracking-tight">
              HeyTrama
            </h2>
            <p className="mt-4 text-foreground font-medium text-base max-w-md">
              Estudio de producto digital y desarrollo de software.
            </p>
            <p className="mt-1 text-foreground text-sm max-w-md leading-relaxed font-medium">
              Convertimos ideas y necesidades de negocio en productos digitales que funcionan.
            </p>
          </div>

          {/* Enlaces de contacto directo con tamaño táctil accesible (min 44px) y aria-labels explícitos */}
          <div className="flex flex-col gap-3 font-mono text-xs text-foreground font-medium">
            <a
              href="https://wa.me/5493625142700"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Abrir chat de WhatsApp con HeyTrama (se abre en una nueva pestaña)"
              className="hover:text-[hsl(var(--editorial-accent))] transition-colors w-fit py-1"
            >
              WhatsApp ↗
            </a>
            <a
              href="mailto:hola@heytrama.com"
              aria-label="Enviar correo electrónico directo a hola@heytrama.com"
              className="hover:text-[hsl(var(--editorial-accent))] transition-colors w-fit py-1"
            >
              Email ↗
            </a>
            {/* Actualizar URL de Instagram a @heytrama según el punto 03 del Briefing Maestro */}
            <a
              href="https://instagram.com/heytrama"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Ir al perfil oficial de Instagram @heytrama (se abre en una nueva pestaña)"
              className="hover:text-[hsl(var(--editorial-accent))] transition-colors w-fit py-1"
            >
              Instagram ↗
            </a>
          </div>
        </div>

        <div className="mt-20 flex flex-wrap items-center justify-between gap-6 pt-8 font-mono text-[10px] uppercase tracking-widest text-foreground font-medium border-t border-border/40">
          <div>© {new Date().getFullYear()} HeyTrama</div>
          <span>Argentina</span>
        </div>
      </div>
    </footer>
  );
};
