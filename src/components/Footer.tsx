export const Footer = () => {
  return (
    <footer className="border-t bg-background py-16">
      <div className="container-trama flex flex-wrap items-start justify-between gap-8">
        <div>
          <div className="font-mono text-sm font-bold uppercase tracking-[0.25em] text-foreground">
            TRAMA STUDIO
          </div>
          <div className="mt-2 text-xs text-muted">
            Webs para negocios que ya facturan.
          </div>
        </div>
        <div className="flex items-center gap-8">
          <a
            href="https://instagram.com/trama.sstudio"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-muted hover:text-foreground transition-colors"
          >
            Instagram
          </a>
          <a
            href="https://wa.me/5493625142700"
            className="text-xs text-muted hover:text-foreground transition-colors"
          >
            WhatsApp
          </a>
        </div>
        <div className="text-[11px] uppercase tracking-[0.15em] text-muted">
          Argentina · {new Date().getFullYear()}
        </div>
      </div>
    </footer>
  );
};
