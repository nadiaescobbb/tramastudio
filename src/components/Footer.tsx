import { Logo } from "./Logo";

export const Footer = () => {
  return (
    <footer className="border-t border-border bg-background pt-24 pb-12">
      <div className="container-trama">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4 items-end">
          <div className="lg:col-span-2">
            <Logo size={48} className="mb-6 text-[hsl(var(--accent))]" />
            <h2 className="font-heading text-4xl md:text-6xl leading-none tracking-tight">
              Trama Studio
            </h2>
            <p className="mt-4 text-muted max-w-sm">
              Hacemos que internet refleje el nivel real de tu negocio. 
            </p>
          </div>
          
          <div className="flex flex-col gap-3">
            <div className="font-mono text-[10px] font-bold uppercase tracking-widest text-muted mb-2">Contacto</div>
            <a href="https://wa.me/5493625142700" className="hover:text-[hsl(var(--accent))] transition-colors w-fit">WhatsApp</a>
            <a href="mailto:hola@tramastudio.com" className="hover:text-[hsl(var(--accent))] transition-colors w-fit">Email</a>
          </div>

          <div className="flex flex-col gap-3">
            <div className="font-mono text-[10px] font-bold uppercase tracking-widest text-muted mb-2">Social</div>
            <a href="https://instagram.com/trama.sstudio" target="_blank" rel="noopener noreferrer" className="hover:text-[hsl(var(--accent))] transition-colors w-fit">Instagram</a>
            <a href="#" className="hover:text-[hsl(var(--accent))] transition-colors w-fit">Awwwards</a>
          </div>
        </div>

        <div className="mt-24 flex flex-wrap items-center justify-between gap-6 border-t border-border pt-8 font-mono text-[10px] uppercase tracking-widest text-muted">
          <div>© {new Date().getFullYear()} Trama Studio. Todos los derechos reservados.</div>
          <div className="flex gap-6">
            <span>Buenos Aires, ARG</span>
            <span>{new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', timeZone: 'America/Argentina/Buenos_Aires' })}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
