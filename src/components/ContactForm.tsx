import { useState, type FormEvent } from "react";
import { ArrowUpRight, Check } from "lucide-react";
import { waLink } from "@/data/projects";

const FORM_ENDPOINT = "https://formsubmit.co/ajax/hola@heytrama.com";

// Opciones de servicios alineadas exactamente con los 5 servicios del estudio (ServicesStack.tsx)
const SERVICES_OPTIONS = [
  "Sitios web y landing pages",
  "Rediseño de sitios",
  "Programación de interfaces",
  "Apps, catálogos y herramientas internas",
  "Estrategia y MVP (primera versión)",
  "No estoy seguro todavía",
];

const BUDGET_OPTIONS = [
  "USD 400–1.000",
  "USD 1.000–2.500",
  "USD 2.500–5.000",
  "Necesito orientación",
];

export const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [service, setService] = useState("");
  const [budget, setBudget] = useState("");
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
          whatsapp,
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
      /* Mensaje de confirmación apoyado directamente sobre la sección de contacto */
      <div role="status" aria-live="polite" className="text-center space-y-4 py-10 bg-transparent p-4">
        {/* Badge de confirmación alineado a font-medium sin negritas sintéticas */}
        <div className="w-12 h-12 rounded-full bg-foreground text-background flex items-center justify-center mx-auto text-xl font-medium shadow-md">
          <Check className="w-6 h-6" />
        </div>
        <h4 className="font-heading text-2xl font-medium text-foreground">
          Recibimos tu proyecto. Te respondemos por email en [PLAZO].
        </h4>
      </div>
    );
  }

  return (
    /* Contenedor del formulario transparente sin caja ni bordes, apoyado sobre el fondo de la sección de contacto */
    <form onSubmit={handleSubmit} className="space-y-8 bg-transparent">
      <p className="font-sans text-sm text-foreground">
        <span aria-hidden="true">*</span> Campo obligatorio
      </p>
      {/* Grid de 2 columnas en desktop para Nombre completo y Email de contacto, colapsando a 1 en mobile */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-8">
        {/* 1. Nombre Completo */}
        <div className="space-y-1.5">
          {/* Label en font-medium para evitar negrita sintética */}
          <label htmlFor="contact-name" className="font-sans text-micro uppercase text-foreground font-medium block">
            Nombre completo *
          </label>
          {/* Input con borde inferior simple y fondo transparente */}
          <input
            id="contact-name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            placeholder="Tu nombre y apellido"
            className="w-full rounded-md border border-[#6F6A62] bg-white/70 px-3 py-2.5 text-[15px] font-sans text-foreground outline-none transition-colors placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-[#C45A3A] focus-visible:ring-offset-2 focus-visible:ring-offset-background md:text-sm"
          />
        </div>

        {/* 2. Email */}
        <div className="space-y-8">
          <div className="space-y-1.5">
            {/* Label en font-medium para evitar negrita sintética */}
            <label htmlFor="contact-email" className="font-sans text-micro uppercase text-foreground font-medium block">
              Email de contacto *
            </label>
            {/* Input con borde inferior simple y fondo transparente */}
            <input
              id="contact-email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="tu@email.com"
              className="w-full rounded-md border border-[#6F6A62] bg-white/70 px-3 py-2.5 text-[15px] font-sans text-foreground outline-none transition-colors placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-[#C45A3A] focus-visible:ring-offset-2 focus-visible:ring-offset-background md:text-sm"
            />
          </div>
          <div className="space-y-1.5">
            <label htmlFor="contact-whatsapp" className="font-sans text-micro uppercase text-foreground font-medium block">
              WhatsApp (opcional)
            </label>
            <input
              id="contact-whatsapp"
              type="tel"
              value={whatsapp}
              onChange={(e) => setWhatsapp(e.target.value)}
              placeholder="+54 9 ..."
              className="w-full rounded-md border border-[#6F6A62] bg-white/70 px-3 py-2.5 text-[15px] font-sans text-foreground outline-none transition-colors placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-[#C45A3A] focus-visible:ring-offset-2 focus-visible:ring-offset-background md:text-sm"
            />
          </div>
        </div>
      </div>

      {/* 3. Tipo de Servicio / ¿Qué querés construir? */}
      <fieldset className="space-y-3">
        {/* Reemplazar font-semibold por font-medium para evitar negrita sintética en fuente Aventa */}
        <legend className="font-sans text-micro uppercase text-foreground font-medium">
          ¿Qué querés construir? *
        </legend>
        <div className="flex flex-wrap gap-2">
          {SERVICES_OPTIONS.map((item) => {
            const isSelected = service === item;
            return (
              <label key={item} className="cursor-pointer">
                <input
                  type="radio"
                  name="service"
                  value={item}
                  checked={isSelected}
                  onChange={() => setService(item)}
                  required
                  className="peer sr-only"
                />
                <span
                  className={`inline-flex rounded-full border px-3.5 py-1.5 font-sans text-tag font-medium transition-all duration-300 ease-out peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-[#C45A3A] ${
                    isSelected
                      ? "border-primary bg-primary text-primary-foreground shadow-sm"
                      : "border-[#6F6A62] bg-background text-foreground hover:-translate-y-0.5 hover:border-foreground hover:text-foreground"
                  }`}
                >
                  {item}
                </span>
              </label>
            );
          })}
        </div>
      </fieldset>

      {/* 4. Presupuesto Estimado */}
      <fieldset className="space-y-3">
        {/* Reemplazar font-semibold por font-medium para evitar negrita sintética en fuente Aventa */}
        <legend className="font-sans text-micro uppercase text-foreground font-medium">
          Presupuesto estimado *
        </legend>
        <div className="flex flex-wrap gap-2">
          {BUDGET_OPTIONS.map((item) => {
            const isSelected = budget === item;
            return (
              <label key={item} className="cursor-pointer">
                <input
                  type="radio"
                  name="budget"
                  value={item}
                  checked={isSelected}
                  onChange={() => setBudget(item)}
                  required
                  className="peer sr-only"
                />
                <span
                  className={`inline-flex rounded-full border px-3.5 py-1.5 font-sans text-tag font-medium transition-all duration-300 ease-out peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-[#C45A3A] ${
                    isSelected
                      ? "border-primary bg-primary text-primary-foreground shadow-sm"
                      : "border-[#6F6A62] bg-background text-foreground hover:-translate-y-0.5 hover:border-foreground hover:text-foreground"
                  }`}
                >
                  {item}
                </span>
              </label>
            );
          })}
        </div>
      </fieldset>

      {/* 5. Detalle del Proyecto */}
      <div className="space-y-1.5">
        {/* Reemplazar font-semibold por font-medium para evitar negrita sintética en fuente Aventa */}
        <label htmlFor="contact-message" className="font-sans text-micro uppercase text-foreground font-medium block">
          Contanos un poco más
        </label>
        <textarea
          id="contact-message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={3}
          placeholder="¿Qué problema querés resolver o qué te gustaría mejorar?"
          className="w-full resize-none rounded-md border border-[#6F6A62] bg-white/70 px-3 py-2.5 text-[15px] font-sans text-foreground outline-none transition-colors placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-[#C45A3A] focus-visible:ring-offset-2 focus-visible:ring-offset-background md:text-sm"
        />
      </div>

      {error && (
        <div className="space-y-2 pt-2">
          <p className="text-[15px] md:text-sm text-[hsl(var(--editorial-accent))] font-sans font-medium">{error}</p>
          <a
            href={whatsappMessage}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-[15px] md:text-sm font-sans font-medium underline text-foreground hover:text-[hsl(var(--editorial-accent))] transition-colors"
          >
            <span>Enviar directamente por WhatsApp ↗</span>
          </a>
        </div>
      )}

      {/* Submit Button en font-medium sin negritas sintéticas */}
      <button
        type="submit"
        className="btn-primary-trama group w-full justify-center py-3.5 font-sans text-btn font-medium"
      >
        <span>Enviar mi proyecto</span>
        <div className="btn-icon-wrapper">
          <ArrowUpRight className="h-4 w-4" />
        </div>
      </button>
    </form>
  );
};
