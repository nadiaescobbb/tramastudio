import { useState, type FormEvent } from "react";
import { ArrowUpRight, Check } from "lucide-react";
import { waLink } from "@/data/projects";

const FORM_ENDPOINT = "https://formsubmit.co/ajax/hola@heytrama.com";

const SERVICES_OPTIONS = [
  "Sitios web & Landing Pages",
  "Rediseño UX/UI",
  "Desarrollo Frontend a medida",
  "Web Apps & Catálogos",
  "Estrategia & MVPs",
];

const BUDGET_OPTIONS = [
  "Hasta USD 500",
  "USD 500 – 1.500",
  "USD 1.500 – 3.000",
  "Más de USD 3.000",
  "Necesito orientación",
];

export const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [service, setService] = useState("Sitios web & Landing Pages");
  const [budget, setBudget] = useState("USD 500 – 1.500");
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
          _subject: `Nuevo proyecto de ${name} — ${service} (${budget})`,
        }),
      });

      if (res.ok) {
        setSent(true);
      } else {
        setError("No se pudo enviar por email. Podés abrirlo directamente por WhatsApp.");
      }
    } catch {
      setError("Error de conexión. Podés abrirlo directamente por WhatsApp.");
    }
  };

  const whatsappMessage = waLink(
    `Hola Nadia, soy ${name || "[Tu Nombre]"} (${email || "[Email]"}). Quiero consultar sobre ${service} con un presupuesto de ${budget}. Detalle: ${message || "Sin detalle"}`
  );

  if (sent) {
    return (
      <div className="text-center space-y-4 py-10 bg-surface rounded-2xl border border-border p-8 shadow-sm">
        <div className="w-12 h-12 rounded-full bg-foreground text-background flex items-center justify-center mx-auto text-xl font-bold shadow-md">
          <Check className="w-6 h-6" />
        </div>
        <h4 className="font-heading text-2xl font-semibold text-foreground">
          Proyecto enviado con éxito
        </h4>
        <p className="text-muted-foreground text-sm max-w-md mx-auto leading-relaxed font-sans">
          Gracias {name}. Nadia revisará tu proyecto para <strong className="text-foreground">{service}</strong> ({budget}) y te responderá a la brevedad.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8 bg-surface/50 p-6 md:p-8 rounded-2xl border border-border shadow-sm">
      {/* 1. Nombre Completo */}
      <div className="space-y-1.5">
        <label className="font-mono text-micro uppercase tracking-wider text-foreground font-semibold block">
          Nombre completo *
        </label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          placeholder="Tu nombre y apellido"
          className="w-full border-b border-border bg-transparent py-2.5 text-sm font-sans text-foreground outline-none transition-colors focus:border-primary placeholder:text-muted-foreground/50"
        />
      </div>

      {/* 2. Email */}
      <div className="space-y-1.5">
        <label className="font-mono text-micro uppercase tracking-wider text-foreground font-semibold block">
          Email de contacto *
        </label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          placeholder="tu@email.com"
          className="w-full border-b border-border bg-transparent py-2.5 text-sm font-sans text-foreground outline-none transition-colors focus:border-primary placeholder:text-muted-foreground/50"
        />
      </div>

      {/* 3. Tipo de Servicio / ¿Qué querés construir? */}
      <div className="space-y-3">
        <label className="font-mono text-micro uppercase tracking-wider text-foreground font-semibold block">
          ¿Qué querés construir? *
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
                    : "bg-background text-foreground font-medium border-border hover:border-foreground/40 hover:text-foreground hover:-translate-y-0.5"
                }`}
              >
                {item}
              </button>
            );
          })}
        </div>
      </div>

      {/* 4. Presupuesto Estimado */}
      <div className="space-y-3">
        <label className="font-mono text-micro uppercase tracking-wider text-foreground font-semibold block">
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
                    : "bg-background text-foreground font-medium border-border hover:border-foreground/40 hover:text-foreground hover:-translate-y-0.5"
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
        <label className="font-mono text-micro uppercase tracking-wider text-foreground font-semibold block">
          Contanos un poco más
        </label>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={3}
          placeholder="¿Qué querés construir, qué problema querés resolver o qué te gustaría mejorar?"
          className="w-full border-b border-border bg-transparent py-2.5 text-sm font-sans text-foreground outline-none transition-colors focus:border-primary resize-none placeholder:text-muted-foreground/50"
        />
      </div>

      {error && (
        <div className="space-y-2 pt-2">
          <p className="text-xs text-[hsl(var(--editorial-accent))] font-mono font-medium">{error}</p>
          <a
            href={whatsappMessage}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-mono font-bold underline text-foreground hover:text-[hsl(var(--editorial-accent))] transition-colors"
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
        <span>Enviar proyecto</span>
        <div className="btn-icon-wrapper">
          <ArrowUpRight className="h-4 w-4" />
        </div>
      </button>
    </form>
  );
};
