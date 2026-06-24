import { useState, type FormEvent } from "react";

const FORM_ENDPOINT = "https://formsubmit.co/ajax/tramapriv@gmail.com";

export const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ name, email, message, _subject: "Nuevo contacto desde HeyTrama" }),
      });

      if (res.ok) {
        setSent(true);
      } else {
        setError("No se pudo enviar. Escribime directo a WhatsApp.");
      }
    } catch {
      setError("Error de conexión. Escribime directo a WhatsApp.");
    }
  };

  if (sent) {
    return (
      <p className="text-center text-muted font-mono text-[11px] uppercase tracking-widest">
        Gracias. Te respondo a la brevedad.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-1">
        <label className="font-mono text-[10px] font-bold uppercase tracking-widest text-muted">Nombre</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="w-full border-b border-border bg-transparent py-2.5 text-sm font-sans outline-none transition-colors focus:border-[hsl(var(--accent))]"
        />
      </div>
      <div className="space-y-1">
        <label className="font-mono text-[10px] font-bold uppercase tracking-widest text-muted">Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full border-b border-border bg-transparent py-2.5 text-sm font-sans outline-none transition-colors focus:border-[hsl(var(--accent))]"
        />
      </div>
      <div className="space-y-1">
        <label className="font-mono text-[10px] font-bold uppercase tracking-widest text-muted">Tu proyecto</label>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          rows={3}
          className="w-full border-b border-border bg-transparent py-2.5 text-sm font-sans outline-none transition-colors focus:border-[hsl(var(--accent))] resize-none"
        />
      </div>
      {error && <p className="text-sm text-red-500">{error}</p>}
      <button
        type="submit"
        className="btn-primary-trama group w-full justify-center"
      >
        <span>Enviar consulta</span>
      </button>
    </form>
  );
};
