export type Project = {
  slug: string;
  number: string;
  name: string;
  accent: string; // segunda parte del título
  industry: string;
  format: string;
  conversion: string;
  liveUrl?: string;
  isConcept?: boolean; // Para diferenciar proyectos reales de conceptos de autor
  tagline: string;
  category: string;
  result?: string; // Social proof or outcome
  // Hero del dossier
  challenge: string[];
  criterion: {
    intro: string;
    points: { label: string; text: string }[];
  };
  solution: string[];
  pullQuote?: { text: string; author?: string };
  designSystem?: {
    swatches: { color: string; hex: string; label: string }[];
  };
};

export const projects: Project[] = [
  {
    slug: "famvar",
    number: "01",
    name: "FAMVAR",
    accent: "E-Commerce.",
    industry: "Tecnología & E-Commerce",
    format: "Catálogo Digital",
    conversion: "Consulta Directa por WhatsApp",
    category: "Caso real",
    isConcept: false,
    tagline:
      "Catálogo web moderno y estructurado para exhibición de tecnología, accesorios importados y bazar de alta gama.",
    challenge: [
      "Famvar necesitaba ordenar un catálogo diverso de productos (celulares, termos importados, accesorios) facilitando la consulta directa por WhatsApp.",
      "La interfaz debía transmitir confianza, claridad de stock y facilidades de pago sin la pesadez ni la frialdad de un e-commerce tradicional.",
    ],
    criterion: {
      intro: "Estructuramos una navegación ágil por categorías con fichas técnicas claras y llamados a la acción inmediatos por WhatsApp.",
      points: [
        { label: "Jerarquía de Productos", text: "Organización por marcas, modelos y especificaciones de alto impacto." },
        { label: "Badges de Disponibilidad", text: "Filtros e indicadores visuales de stock sin recargar la interfaz." },
        { label: "Consulta Inmediata", text: "Botones de WhatsApp personalizados con detalle automático del producto." },
      ],
    },
    solution: [
      "Desarrollamos una plataforma ágil y elegante que facilita la decisión de compra antes de contactar al vendedor.",
    ],
    pullQuote: {
      text: "Un catálogo rápido y estructurado donde el cliente encuentra especificaciones claras y consulta en un toque.",
      author: "Dirección — FAMVAR Argentina",
    },
    designSystem: {
      swatches: [
        { color: "#0F172A", hex: "#0F172A", label: "Navy Slate" },
        { color: "#F8FAFC", hex: "#F8FAFC", label: "Warm Canvas" },
        { color: "#C2410C", hex: "#C2410C", label: "Terracota Accent" },
        { color: "score", hex: "100 / 100", label: "Performance Score" },
      ],
    },
  },
  {
    slug: "joyeria-cuore",
    number: "02",
    name: "CUORE",
    accent: "Joyería y Relojería.",
    industry: "Joyas y Relojería de Alta Gama",
    format: "Catálogo y taller",
    conversion: "Consulta de Pieza Personalizada",
    category: "Caso real",
    isConcept: false,
    tagline:
      "40 años de trayectoria en Tierra del Fuego. La unión entre la fabricación artesanal y la tecnología láser de precisión.",
    challenge: [
      "El taller tenía 40 años de trayectoria y confianza construida en el local físico, pero ninguna presencia digital que la reflejara. Sin web propia, esa historia y esa confianza no llegaban a una clientela más joven que busca y decide online.",
    ],
    criterion: {
      intro: "El diseño se apoya en la historia del taller, la consulta directa y la confianza que ya existe en el local físico.",
      points: [
        { label: "Legado y técnica", text: "La combinación tipográfica diferencia tradición, detalle técnico y lectura comercial." },
        { label: "Catálogo sin precio", text: "La consulta por WhatsApp mantiene el trato personal y evita reducir piezas especiales a una lista de precios." },
        { label: "Foco en fabricación", text: "El equipamiento láser y el trabajo manual aparecen como motivos concretos para confiar." },
      ],
    },
    solution: [
      "Diseñamos una web que traduce esa trayectoria sin perder la esencia del taller familiar — mostrando fabricación propia, reparación y stock, sin caer en la frialdad de un e-commerce genérico.",
    ],
    pullQuote: {
      text: "Combinar 40 años de oficio con tecnología de precisión exigía una interfaz sin frialdad comercial: la consulta directa por WhatsApp preserva el trato personalizado de taller mientras la web exhibe la solidez del proceso.",
      author: "Taller Cuore — Río Grande, Tierra del Fuego",
    },
    designSystem: {
      swatches: [
        { color: "#3E2718", hex: "#3E2718", label: "Chocolate Taller" },
        { color: "#F7F5F0", hex: "#F7F5F0", label: "Superficie Crema" },
        { color: "#B89368", hex: "#B89368", label: "Oro & Relojería" },
        { color: "score", hex: "100 / 100", label: "Performance Score" },
      ],
    },
  },
];

export const WHATSAPP_BASE = "https://wa.me/5493625142700";
export const waLink = (text: string) =>
  `${WHATSAPP_BASE}?text=${encodeURIComponent(text)}`;
