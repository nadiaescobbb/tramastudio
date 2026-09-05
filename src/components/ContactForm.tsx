import { useState, type FormEvent } from "react";
import { ArrowUpRight } from "lucide-react";
import { waLink } from "@/data/projects";

const FORM_ENDPOINT = "https://formsubmit.co/ajax/tramapriv@gmail.com";

const SERVICES_OPTIONS = [
  "UI UX Design",
  "Mobile App Design",
  "MVP Design",
  "Full Stack Development",
  "Custom Web App",
];

const BUDGET_OPTIONS = [
  "Hasta USD 400",
  "USD 400 – 700",
  "USD 700 – 1000",
  "A definir según proyecto",
];

export const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [service, setService] = useState("UI UX Design");
  const [budget, setBudget] = useState("USD 400 – 700");
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
        body: JSON.stringify({
          name,
          email,
          service,
          budget,
          message,
          _subject: `Nuevo contacto de ${name} — ${service} (${budget})`,
        }),
      });

      if (res.ok) {
        setSent(true);
      } else {
        setError("No se pudo enviar por email. Abrir directamente en WhatsApp.");
      }
    } catch {
      setError("Error de conexión. Abrir directamente en WhatsApp.");
    }
  };

  const whatsappMessage = waLink(
    `Hola Nadia, soy ${name || "[Tu Nombre]"} (${email || "[Email]"}). Quiero consultar sobre ${service} con un presupuesto de ${budget}. Detalle: ${message || "Sin detalle"}`
  );

  if (sent) {
    return (
      <div className="text-center space-y-4 py-8 bg-surface rounded-2xl border border-border p-8 shadow-sm">
        <div className="w-12 h-12 rounded-full bg-emerald-500/10 text-emerald-600 flex items-center justify-center mx-auto text-xl font-bold">
          ✓
        </div>
        <h4 className="font-heading text-2xl font-semibold text-foreground">
          Consulta enviada con éxito
        </h4>
        <p className="text-muted text-sm max-w-md mx-auto leading-relaxed">
          Gracias {name}. Nadia revisará tu consulta para <strong className="text-foreground">{service}</strong> ({budget}) y te responderá a la brevedad.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8 bg-surface/50 p-6 md:p-8 rounded-2xl border border-border shadow-sm">
      {/* 1. Nombre Completo */}
      <div className="space-y-1.5">
        <label className="font-mono text-micro uppercase tracking-wider text-muted block">
          Nombre completo *
        </label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          placeholder="Tu nombre y apellido"
          className="w-full border-b border-border bg-transparent py-2.5 text-sm font-sans text-foreground outline-none transition-colors focus:border-primary placeholder:text-muted/50"
        />
      </div>

      {/* 2. Email */}
      <div className="space-y-1.5">
        <label className="font-mono text-micro uppercase tracking-wider text-muted block">
          Email de contacto *
        </label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          placeholder="tu@email.com"
          className="w-full border-b border-border bg-transparent py-2.5 text-sm font-sans text-foreground outline-none transition-colors focus:border-primary placeholder:text-muted/50"
        />
      </div>

      {/* 3. Tipo de Servicio (Chips de Selección Única) */}
      <div className="space-y-3">
        <label className="font-mono text-micro uppercase tracking-wider text-muted block">
          Tipo de servicio *
        </label>
        <div className="flex flex-wrap gap-2">
          {SERVICES_OPTIONS.map((item) => {
            const isSelected = service === item;
            return (
              <button
                type="button"
                key={item}
                onClick={() => setService(item)}
                className={`px-3.5 py-1.5 rounded-full font-mono text-tag font-medium transition-all duration-300 ease-out cursor-pointer border ${
                  isSelected
                    ? "bg-primary text-primary-foreground border-primary shadow-sm"
                    : "bg-background text-muted border-border hover:border-foreground/40 hover:text-foreground hover:-translate-y-0.5"
                }`}
              >
                {item}
              </button>
            );
          })}
        </div>
      </div>

      {/* 4. Presupuesto Estimado (Chips de Selección Única) */}
      <div className="space-y-3">
        <label className="font-mono text-micro uppercase tracking-wider text-muted block">
          Presupuesto estimado *
        </label>
        <div className="flex flex-wrap gap-2">
          {BUDGET_OPTIONS.map((item) => {
            const isSelected = budget === item;
            return (
              <button
                type="button"
                key={item}
                onClick={() => setBudget(item)}
                className={`px-3.5 py-1.5 rounded-full font-mono text-tag font-medium transition-all duration-300 ease-out cursor-pointer border ${
                  isSelected
                    ? "bg-primary text-primary-foreground border-primary shadow-sm"
                    : "bg-background text-muted border-border hover:border-foreground/40 hover:text-foreground hover:-translate-y-0.5"
                }`}
              >
                {item}
              </button>
            );
          })}
        </div>
      </div>

      {/* 5. Detalle del Proyecto */}
      <div className="space-y-1.5">
        <label className="font-mono text-micro uppercase tracking-wider text-muted block">
          Detalle del proyecto
        </label>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={3}
          placeholder="Contanos sobre tus objetivos, plazos o cualquier detalle relevante..."
          className="w-full border-b border-border bg-transparent py-2.5 text-sm font-sans text-foreground outline-none transition-colors focus:border-primary resize-none placeholder:text-muted/50"
        />
      </div>

      {error && (
        <div className="space-y-2 pt-2">
          <p className="text-xs text-red-500 font-mono">{error}</p>
          <a
            href={whatsappMessage}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-mono font-bold underline text-foreground"
          >
            <span>Enviar directamente por WhatsApp ↗</span>
          </a>
        </div>
      )}

      {/* Submit Button */}
      <button
        type="submit"
        className="btn-primary-trama group w-full justify-center py-3.5 font-mono text-btn font-semibold tracking-wide"
      >
        <span>Enviar consulta</span>
        <div className="btn-icon-wrapper">
          <ArrowUpRight className="h-4 w-4" />
        </div>
      </button>
    </form>
  );
};
