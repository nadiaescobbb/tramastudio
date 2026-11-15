export type Project = {
  slug: string;
  name: string;
  accent: string;
  format: string;
  category: string;
  tags: string[];
  demoUrl: string;
  status: "maqueta" | "en-desarrollo" | "publicado";
};

export const projects: Project[] = [
  {
    slug: "famvar",
    name: "FAMVAR",
    accent: "E-Commerce",
    format: "Catálogo + tienda online",
    category: "E-Commerce",
    tags: ["Sitios web", "Web Apps", "Frontend", "MVPs"],
    demoUrl: "https://famvar.vercel.app/",
    status: "en-desarrollo",
  },
  {
    slug: "joyeria-cuore",
    name: "CUORE",
    accent: "Joyería y relojería",
    format: "Catálogo + experiencia digital",
    category: "Joyería y relojería",
    tags: ["Sitios web", "Landing Pages", "Rediseño UX/UI", "Frontend"],
    demoUrl: "https://cuore-joyeria.vercel.app/",
    status: "en-desarrollo",
  },
];

export const WHATSAPP_BASE = "https://wa.me/5493625142700";

export const waLink = (text: string) =>
  `${WHATSAPP_BASE}?text=${encodeURIComponent(text)}`;
