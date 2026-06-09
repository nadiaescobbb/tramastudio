export const Footer = () => {
  return (
    <footer className="border-t border-border bg-background pt-24 pb-12">
      <div className="container-trama">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3 items-end">
          <div className="lg:col-span-2">
            <h2 className="font-heading text-4xl md:text-6xl leading-none tracking-tight">
              Trama Studio
            </h2>
            <p className="mt-4 text-muted max-w-sm">Diseño y desarrollo web.</p>
            <p className="mt-1 text-muted max-w-sm">
              Sitios claros, escritos y diseñados para que tu negocio se entienda mejor.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <a href="https://wa.me/5493625142700" className="hover:text-[hsl(var(--accent))] transition-colors w-fit">WhatsApp</a>
            <a href="mailto:hola@tramastudio.com" className="hover:text-[hsl(var(--accent))] transition-colors w-fit">Email</a>
            <a href="https://instagram.com/trama.sstudio" target="_blank" rel="noopener noreferrer" className="hover:text-[hsl(var(--accent))] transition-colors w-fit">Instagram</a>
          </div>
        </div>

        <div className="mt-24 flex flex-wrap items-center justify-between gap-6 border-t border-border pt-8 font-mono text-[10px] uppercase tracking-widest text-muted">
          <div>© {new Date().getFullYear()} Trama Studio</div>
          <span>Argentina</span>
        </div>
      </div>
    </footer>
  );
};
