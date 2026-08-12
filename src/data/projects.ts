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
    designSystem: {
      swatches: [
        { color: "#331B10", hex: "#331B10", label: "Marrón Cacao" },
        { color: "#FBFBFA", hex: "#FBFBFA", label: "Superficie Marfil" },
        { color: "#ED955A", hex: "#ED955A", label: "Acento Caramelo" },
        { color: "score", hex: "100 / 100", label: "Performance Score" },
      ],
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
    pullQuote: {
      text: "Diferenciarnos en arquitectura B2B no significaba mostrar más renders, sino explicar nuestro proceso proyectual con claridad para atraer clientes verdaderamente alineados con nuestro criterio técnico.",
      author: "Estudio Norte — Arquitectura B2B",
    },
    designSystem: {
      swatches: [
        { color: "#0C211B", hex: "#0C211B", label: "Verde Esmeralda" },
        { color: "#F8F9F8", hex: "#F8F9F8", label: "Fondo Blanco" },
        { color: "#5EC49E", hex: "#5EC49E", label: "Acento Plano" },
        { color: "score", hex: "100 / 100", label: "Performance Score" },
      ],
    },
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
    category: "Ejercicio de diseño",
    tagline:
      "Landing para una clínica estética. El objetivo era que la persona llegue a la consulta ya sabiendo qué tratamiento busca, en vez de preguntarlo todo en el primer mensaje.",
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
    pullQuote: {
      text: "En salud estética, la interfaz no busca convencer de forma agresiva: una tipografía equilibrada y una jerarquía limpia inspiran la calma y confianza previa que el paciente necesita para agendar su consulta.",
      author: "Dirección Médica — Clínica Nova",
    },
    designSystem: {
      swatches: [
        { color: "#191638", hex: "#191638", label: "Índigo Clínico" },
        { color: "#FAFAFF", hex: "#FAFAFF", label: "Blanco Limpio" },
        { color: "#A293F5", hex: "#A293F5", label: "Acento Suave" },
        { color: "score", hex: "100 / 100", label: "Performance Score" },
      ],
    },
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
    category: "Ejercicio de diseño",
    tagline:
      "Sitio para una profesional de salud mental. El desafío era que alguien eligiera escribirle a ella y no a otra opción de la lista de resultados, sin depender de una foto o una frase de efecto.",
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
    pullQuote: {
      text: "Una presencia digital en psicoanálisis debe ofrecer una pausa: la lectura tranquila y los bloques de texto contenidos transmiten la seriedad y resguardo del encuadre profesional.",
      author: "Lic. Camila Correa — Psicoanálisis Clínico",
    },
    designSystem: {
      swatches: [
        { color: "#2A2620", hex: "#2A2620", label: "Carbón Sobrio" },
        { color: "#FBF9F6", hex: "#FBF9F6", label: "Superficie Crema" },
        { color: "#D4C5B9", hex: "#D4C5B9", label: "Taupe Cálido" },
        { color: "score", hex: "100 / 100", label: "Performance Score" },
      ],
    },
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
