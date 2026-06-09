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
};

export const projects: Project[] = [
  {
    slug: "bosco",
    number: "01",
    name: "Bosco",
    accent: "",
    industry: "Gastronomía / Producto Artesanal",
    format: "Landing de Ventas",
    conversion: "Directo a WhatsApp",
    liveUrl: "https://universobosco.com.ar/",
    category: "Caso real",
    tagline:
      "Sitio para una edición limitada de 75 unidades. El objetivo era explicar mejor el producto y facilitar la consulta por WhatsApp.",
    challenge: [
      "Bosco ya tenía interés por parte de los clientes, pero la web no ayudaba a entender qué hacía especial a esta edición.",
      "La información estaba dispersa y el recorrido no acompañaba la decisión de compra.",
    ],
    criterion: {
      intro: "Organizamos el sitio alrededor de una idea simple: entender el producto primero, consultar después. Cada sección tenía que responder una pregunta antes de avanzar a la siguiente.",
      points: [],
    },
    solution: [
      "Una landing pensada para presentar la edición, responder las dudas más importantes y facilitar la consulta por WhatsApp.",
    ],
    pullQuote: {
      text: "Buscábamos una comprensión del negocio más allá de la interfaz. El resultado es una estructura sólida y funcional.",
      author: "Lautaro — Bosco Argentina",
    },
  },
  {
    slug: "estudio-norte",
    number: "02",
    name: "Estudio Norte",
    accent: "",
    industry: "Arquitectura / B2B",
    format: "Sitio institucional",
    conversion: "Consultas más alineadas",
    liveUrl: "https://estudio-norte.vercel.app/",
    isConcept: false,
    category: "Caso real",
    tagline:
      "Un estudio de arquitectura que necesita explicar cómo trabaja y atraer consultas más alineadas.",
    challenge: [
      "El estudio necesitaba diferenciarse de propuestas más genéricas sin sonar frío ni inaccesible.",
      "La web tenía que mostrar criterio técnico, obra y forma de trabajo para que el cliente entienda si el estudio es para su proyecto.",
    ],
    criterion: {
      intro: "El sitio tenía que ayudar a entender cómo trabaja el estudio, no solo mostrar proyectos. La información se organizó para explicar el proceso, dar contexto sobre las obras y facilitar una evaluación más clara por parte de futuros clientes.",
      points: [],
    },
    solution: [
      "Pasamos de un catálogo visual a una presentación más clara del proceso y del criterio de trabajo.",
      "El sitio ayuda a que la consulta llegue con más contexto: qué tipo de obra busca, qué valora y por qué el estudio puede ser una buena opción.",
    ],
  },
  {
    slug: "clinica-nova",
    number: "03",
    name: "Clínica Nova",
    accent: "",
    industry: "Medicina Estética / Salud",
    format: "Landing de consulta",
    conversion: "Confianza antes de reservar",
    liveUrl: "https://clinicanova.vercel.app/",
    isConcept: true,
    category: "Caso conceptual",
    tagline:
      "Caso conceptual para una clínica estética que necesita transmitir cuidado, claridad y confianza antes de la consulta.",
    challenge: [
      "La web tenía que acompañar una decisión sensible: elegir una clínica no depende solo del precio, sino de la confianza que transmite.",
      "El desafío fue mostrar tratamientos, criterio profesional y resultados sin caer en un tono frío o exagerado.",
    ],
    criterion: {
      intro: "En medicina estética, una web tiene que ordenar información y reducir dudas sin prometer resultados mágicos.",
      points: [
        { label: "Higiene de interfaz", text: "Blancos amplios, jerarquías claras y secciones fáciles de revisar." },
        { label: "Resultados con contexto", text: "Las imágenes se usan para orientar expectativas, no como promesa automática." },
        { label: "Tono cuidado", text: "La tipografía y el ritmo visual buscan transmitir calma, detalle y profesionalismo." },
      ],
    },
    solution: [
      "El sitio presenta tratamientos, enfoque y próximo paso de forma ordenada.",
      "La idea es que la persona llegue a la consulta con menos dudas y una percepción más clara del nivel de atención.",
    ],
  },
  {
    slug: "camila-correa",
    number: "04",
    name: "Camila Correa",
    accent: "",
    industry: "Psicoanálisis Clínico",
    format: "Sitio profesional",
    conversion: "Generación de Confianza Previa",
    liveUrl: "https://camilacorreapsico.vercel.app/",
    isConcept: true,
    category: "Caso conceptual",
    tagline:
      "Caso conceptual para una profesional de salud mental que necesita transmitir seriedad, cuidado y confianza antes del primer contacto.",
    challenge: [
      "La web tenía que evitar dos extremos: verse demasiado clínica o demasiado liviana.",
      "El objetivo fue construir una presentación sobria, clara y humana para que la persona entienda el encuadre antes de escribir.",
    ],
    criterion: {
      intro: "La dirección visual se apoya en lectura pausada, calidez y una estructura que no apura la decisión.",
      points: [
        { label: "Legibilidad profesional", text: "Serifas y bloques de texto medidos para una lectura más tranquila." },
        { label: "Paleta cercana", text: "Tonos crema y texturas suaves para evitar una estética fría o impersonal." },
        { label: "Encuadre claro", text: "El sitio explica cómo trabaja la profesional y qué puede esperar una persona antes de consultar." },
      ],
    },
    solution: [
      "El sitio ordena presentación, enfoque y contacto sin convertir un tema sensible en un embudo agresivo.",
      "La estética acompaña la confianza, pero la decisión se sostiene en claridad y tono profesional.",
    ],
  },
  {
    slug: "joyeria-cuore",
    number: "05",
    name: "CUORE",
    accent: "Joyería.",
    industry: "Joyas y Relojería de Alta Gama",
    format: "Catálogo y taller",
    conversion: "Consulta de Pieza Personalizada",
    category: "Caso real",
    isConcept: false,
    tagline:
      "40 años de trayectoria en Tierra del Fuego. La unión entre la fabricación artesanal y la tecnología láser de precisión.",
    challenge: [
      "Traducir 40 años de trayectoria a una web clara sin perder la esencia del taller familiar.",
      "El objetivo es acercar la marca a una clientela más joven, mostrando fabricación propia, reparación y stock sin convertir la experiencia en un e-commerce frío.",
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
      "Estructura editorial que prioriza la historia y la capacidad técnica del taller propio.",
      "Sistema de consulta directa para piezas de alta gama, manteniendo la exclusividad del trato personalizado.",
    ],
  },
];

export const WHATSAPP_BASE = "https://wa.me/5493625142700";
export const waLink = (text: string) =>
  `${WHATSAPP_BASE}?text=${encodeURIComponent(text)}`;
