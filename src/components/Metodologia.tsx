import { Reveal } from "@/components/Reveal";
import { ArrowUpRight } from "lucide-react";

const steps = [
  {
    number: "01",
    label: "PASO 01",
    concept: "Entender",
    title: "Definir qué tiene que resolver el producto.",
    text: "Nos metemos en el negocio, el problema y las necesidades de las personas que van a usarlo. Antes de diseñar, necesitamos saber qué estamos intentando resolver y por qué.",
  },
  {
    number: "02",
    label: "PASO 02",
    concept: "Estructurar",
    title: "Ordenar la experiencia antes de construirla.",
    text: "Definimos qué necesita encontrar, entender y hacer el usuario. Organizamos la información, los contenidos y los recorridos antes de convertirlos en pantallas.",
  },
  {
    number: "03",
    label: "PASO 03",
    concept: "Construir",
    title: "Convertir la idea en un producto que funciona.",
    text: "Diseñamos la interfaz y desarrollamos el producto para que sea rápido, claro y confiable en el uso real.",
  },
  {
    number: "04",
    label: "PASO 04",
    concept: "Evolucionar",
    title: "Publicar es el comienzo, no el final.",
    text: "Observamos cómo funciona el producto una vez que está en uso y hacemos los ajustes necesarios a medida que aparecen nuevas necesidades.",
  },
];

export default function Metodologia() {
  return (
    <section className="relative z-10 bg-background pt-10 md:pt-16 pb-20 md:pb-28 scroll-mt-36" id="proceso">
      <div className="container-trama px-6 md:px-12 lg:px-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 md:mb-16">
          <Reveal>
            <div>
              <span className="font-mono text-xs font-semibold uppercase tracking-widest text-[hsl(var(--editorial-accent))] mb-4 block">
                NUESTRO PROCESO
              </span>
              <h2 className="font-heading text-3xl md:text-5xl tracking-tight leading-snug text-slate-900 max-w-lg">
                Pensamos primero qué tiene que <span className="font-serif italic font-normal text-[hsl(var(--editorial-accent))]">resolver</span>. Después, cómo construirlo.
              </h2>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <p className="text-xs md:text-sm text-slate-900 max-w-md leading-relaxed font-sans md:text-right">
              No empezamos por la pantalla ni por el código. Primero entendemos el problema, después ordenamos la solución y finalmente la construimos. Así evitamos desarrollar cosas que no hacen falta y tomar decisiones solo porque “se ven bien”.
            </p>
          </Reveal>
        </div>

        {/* Process Flow Cards Row (Tanj Style: Warm light cards with bottom glow on hover) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((step, idx) => (
            <Reveal key={step.number} delay={idx * 100}>
              <div className="group relative h-full min-h-[340px] md:min-h-[380px] flex flex-col justify-between p-6 md:p-7 rounded-3xl bg-[#f4f3ef] border border-black/5 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden cursor-pointer">
                
                {/* Bottom Terracotta Hover Glow Effect */}
                <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-[hsl(var(--editorial-accent))] via-[hsl(var(--editorial-accent))]/75 via-45% to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out pointer-events-none rounded-b-3xl" />

                {/* Top Card Content */}
                <div className="relative z-10 space-y-3">
                  {/* Step Label & Number */}
                  <div className="flex items-center justify-between font-mono text-xs text-slate-900/60">
                    <span className="font-bold tracking-widest text-[hsl(var(--editorial-accent))] group-hover:text-foreground/80 transition-colors">
                      {step.label}
                    </span>
                    <span className="font-bold text-sm text-slate-900/60 group-hover:text-foreground/60 transition-colors">
                      {step.number}
                    </span>
                  </div>

                  {/* Headline: Serif Concept & Bold Title */}
                  <h3 className="font-heading text-lg md:text-xl font-medium text-slate-900 tracking-tight leading-snug">
                    <span className="font-serif italic font-normal text-[hsl(var(--editorial-accent))] block mb-1">
                      {step.concept}
                    </span>
                    {step.title}
                  </h3>

                  {/* Body Text */}
                  <p className="font-sans text-xs md:text-sm text-slate-900 leading-relaxed font-normal">
                    {step.text}
                  </p>
                </div>

                {/* Bottom Card Footer Tag: Lights up on Hover */}
                <div className="relative z-10 flex items-center justify-between font-mono text-xs text-slate-900 group-hover:text-white transition-colors duration-300">
                  <div className="flex items-center gap-2">
                    <span className="font-bold tracking-wider uppercase text-[10px]">HeyTrama</span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}


