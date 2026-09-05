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

          <div className="flex flex-col gap-3 font-mono text-xs text-foreground font-semibold">
            <a
              href="https://wa.me/5493625142700"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[hsl(var(--editorial-accent))] transition-colors w-fit"
            >
              WhatsApp
            </a>
            <a
              href="mailto:hola@heytrama.com"
              className="hover:text-[hsl(var(--editorial-accent))] transition-colors w-fit"
            >
              Email
            </a>
            <a
              href="https://instagram.com/trama.sstudio"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[hsl(var(--editorial-accent))] transition-colors w-fit"
            >
              Instagram
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
