export type Project = {
  slug: string;
  number: string;
  name: string;
  accent: string; // segunda parte del título
  industry: string;
  format: string;
  conversion: string;
  liveUrl: string;
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
  highlights: { title: string; text: string; sub: string }[];
};

export const projects: Project[] = [
  {
    slug: "bosco",
    number: "01",
    name: "BOSCO",
    accent: "Edición 01.",
    industry: "Gastronomía / Producto Artesanal",
    format: "Landing de Ventas",
    conversion: "Directo a WhatsApp",
    liveUrl: "https://universobosco.com.ar/",
    category: "Identidad Estratégica",
    result: "Liquidación de stock en 18 días.",
    tagline:
      "De infraestructura estándar a plataforma de autoridad. Optimización del flujo de conversión para edición limitada de 75 unidades.",
    challenge: [
      "Bosco contaba con tracción comercial, pero su infraestructura digital no reflejaba el valor técnico del producto. La dependencia de plataformas estándar generaba una percepción de consumo masivo que entraba en conflicto con el carácter limitado de la marca.",
      "El diagnóstico estratégico indicó que el sitio debía ser una extensión de la marca. La interfaz se diseñó como una pieza de precisión, no como un catálogo transaccional.",
    ],
    criterion: {
      intro: "Implementamos una dirección visual que posiciona al producto como una pieza de valor, rompiendo con los esquemas visuales genéricos del sector.",
      points: [
        { label: "Contraste Absoluto", text: "El uso de negro puro optimiza la percepción cromática del producto y refuerza su posicionamiento nocturno." },
        { label: "Gestión Directa", text: "Priorizamos el contacto directo vía WhatsApp para eliminar la fricción técnica y cerrar la venta de forma eficiente." },
        { label: "Rigor Fotográfico", text: "La decisión de compra se apoya en la calidad del registro visual, tratando cada imagen como un documento de valor." },
      ],
    },
    solution: [
      "Eliminación de sistemas de gestión intermedios.",
      "Construimos un flujo de una sola dirección: el usuario comprende el valor, verifica el precio y ejecuta la acción de compra mediante un canal directo.",
      "75 unidades. Edición cerrada. El sitio se mantiene como registro de archivo de la Edición 01.",
    ],
    pullQuote: {
      text: "Buscábamos una comprensión del negocio más allá de la interfaz. El resultado es una estructura sólida y funcional.",
      author: "Lautaro — Bosco Argentina",
    },
    highlights: [
      {
        title: "Conversión Directa",
        text: "Eliminamos el carrito para que nada interfiera en el proceso de decisión. Un clic y gestión cerrada.",
        sub: "EFICIENCIA"
      },
      {
        title: "Arquitectura Visual",
        text: "Tratamiento del producto como pieza de colección. El scroll controlado asegura la percepción del detalle técnico.",
        sub: "FLUIDEZ"
      }
    ]
  },
  {
    slug: "estudio-norte",
    number: "02",
    name: "ESTUDIO",
    accent: "Norte.",
    industry: "Arquitectura / B2B",
    format: "Gabinete Técnico Institucional",
    conversion: "Filtrado de Leads por Criterio",
    liveUrl: "https://estudio-norte.vercel.app/",
    isConcept: true,
    category: "Caso conceptual",
    tagline:
      "Arquitectura de autoridad para un gabinete técnico. Un estudio sobre cómo construir una barrera de entrada basada en el rigor profesional.",
    challenge: [
      "El estudio requería diferenciar su rigor técnico de la oferta genérica del mercado.",
      "El objetivo estratégico fue construir una barrera de entrada basada en la autoridad profesional. Una interfaz con un nivel de precisión tal que funcione como filtro natural para clientes no alineados.",
    ],
    criterion: {
      intro: "En arquitectura, la confianza se fundamenta en la precisión técnica de la comunicación visual.",
      points: [
        { label: "Estética de Documento", text: "Uso de fondo hueso y grilla de 1px. La web se comporta como un plano técnico, proyectando rigor y sobriedad." },
        { label: "Dato Estructurado", text: "Tipografía monospaciada para información técnica: escalas, fechas y mediciones comunicadas con precisión." },
        { label: "Neutralidad Visual", text: "Diseño invisible que prioriza la obra. La arquitectura de la información no interfiere con la percepción de calidad." },
      ],
    },
    solution: [
      "Transición de catálogo visual a declaración de principios técnicos.",
      "El diseño posiciona la figura del director de obra sobre la ejecución técnica secundaria, automatizando el proceso de filtrado de prospectos.",
    ],
    highlights: [
      {
        title: "Filtro de Autoridad",
        text: "Interfaz diseñada para proyectar un rigor técnico que atrae perfiles orientados a la excelencia.",
        sub: "ESTRATEGIA"
      },
      {
        title: "Rigor Matemático",
        text: "Alineación a una grilla estricta donde cada píxel comunica la precisión de la ejecución arquitectónica.",
        sub: "PRECISIÓN"
      }
    ]
  },
  {
    slug: "clinica-nova",
    number: "03",
    name: "CLÍNICA",
    accent: "Nova.",
    industry: "Medicina Estética / Salud",
    format: "Landing de Alta Intención",
    conversion: "Justificación de Ticket Premium",
    liveUrl: "https://clinicanova.vercel.app/",
    isConcept: true,
    category: "Caso conceptual",
    tagline:
      "Arquitectura de valor para medicina estética. Justificación del posicionamiento mediante el rigor visual y la higiene de interfaz.",
    challenge: [
      "La infraestructura digital no reflejaba la precisión técnica de la práctica clínica. Existía una desconexión entre la experiencia física y la percepción online.",
      "El desafío consistió en alinear la expectativa del paciente con el nivel de la clínica, eliminando la objeción por precio mediante un entorno visual de alta autoridad.",
    ],
    criterion: {
      intro: "En medicina estética, la confianza técnica se proyecta a través de la claridad absoluta del entorno digital.",
      points: [
        { label: "Higiene de Interfaz", text: "Espacios negativos y blancos puros que transmiten orden quirúrgico y seguridad profesional." },
        { label: "Proyección de Resultados", text: "Priorizamos la visualización del resultado final para reducir la barrera de entrada y generar confianza previa." },
        { label: "Tipografía de Precisión", text: "Uso de serifas finas para comunicar cuidado y detalle, reflejando el rigor del consultorio." },
      ],
    },
    solution: [
      "Posicionamiento de la clínica como líder técnico del sector.",
      "Arquitectura visual diseñada para que el valor percibido justifique la inversión, realizando una preventa basada en la excelencia.",
    ],
    highlights: [
      {
        title: "Higiene Visual",
        text: "Minimalismo diseñado para proyectar seguridad médica y orden antes de la consulta presencial.",
        sub: "CONFIANZA"
      },
      {
        title: "Valor Proyectado",
        text: "Estructura pensada para justificar el posicionamiento premium mediante una estética de alta gama.",
        sub: "AUTORIDAD"
      }
    ]
  },
  {
    slug: "camila-correa",
    number: "04",
    name: "CAMILA",
    accent: "Correa.",
    industry: "Psicoanálisis Clínico",
    format: "Dossier Visual Médico",
    conversion: "Generación de Confianza Previa",
    liveUrl: "https://camilacorreapsico.vercel.app/",
    isConcept: true,
    category: "Caso conceptual",
    tagline:
      "Psicología clínica de alta complejidad. Arquitectura diseñada para establecer autoridad profesional antes del primer contacto.",
    challenge: [
      "El desafío era crear un entorno digital que respete la profundidad del encuadre analítico, evitando códigos visuales genéricos.",
      "Buscábamos facilitar la transferencia profesional permitiendo que el paciente perciba el rigor de la práctica mediante una estética editorial sobria.",
    ],
    criterion: {
      intro: "Diseñamos una experiencia inspirada en el rigor editorial: calidez humana y precisión técnica.",
      points: [
        { label: "Legibilidad Profesional", text: "Tipografías con serifa que facilitan la lectura pausada y proyectan un entorno de escucha." },
        { label: "Paleta Orgánica", text: "Tonos crema y texturas que se alejan de la frialdad clínica, buscando una conexión profesional humana." },
        { label: "Filtro de Perfil", text: "El refinamiento visual atrae naturalmente a perfiles que valoran un espacio de trabajo serio y estructurado." },
      ],
    },
    solution: [
      "Proyección de un entorno de autoridad técnica. El diseño busca filtrar y conectar con el perfil de paciente específico mediante el rigor visual.",
      "El diseño está estructurado para establecer respeto profesional y facilitar la elección de la analista de forma fundamentada.",
    ],
    highlights: [
      {
        title: "Rigor Editorial",
        text: "Inspirado en publicaciones técnicas para establecer una conexión profesional sólida desde el primer contacto.",
        sub: "AUTORIDAD"
      },
      {
        title: "Entorno de Escucha",
        text: "Arquitectura diseñada para facilitar la introspección y la elección analítica fundamentada.",
        sub: "TRANSFERENCIA"
      }
    ]
  },
  {
    slug: "joyeria-cuore",
    number: "05",
    name: "CUORE",
    accent: "Joyería.",
    industry: "Joyas y Relojería de Alta Gama",
    format: "Catálogo de Autoridad y Taller",
    conversion: "Consulta de Pieza Personalizada",
    liveUrl: "#",
    category: "Identidad Estratégica",
    tagline:
      "40 años de trayectoria en Tierra del Fuego. La unión entre la fabricación artesanal y la tecnología láser de precisión.",
    challenge: [
      "Traducir 40 años de prestigio físico a una interfaz digital que no pierda la esencia del taller familiar.",
      "El objetivo es atraer a una clientela más joven sin alienar a los clientes frecuentes, resaltando la capacidad de fabricación propia y el equipamiento tecnológico de última generación.",
    ],
    criterion: {
      intro: "El diseño se apoya en el rigor técnico del taller y la exclusividad del stock permanente.",
      points: [
        { label: "Legado y Técnica", text: "Uso de tipografía Lora para evocar la tradición de 40 años y Liberation Sans para los detalles técnicos del taller." },
        { label: "Catálogo sin Precio", text: "Fomentamos la exclusividad y la conversación directa mediante WhatsApp, eliminando la frialdad del e-commerce tradicional." },
        { label: "Foco en la Fabricación", text: "Resaltamos el equipamiento láser y el trabajo manual como el verdadero diferencial competitivo." },
      ],
    },
    solution: [
      "Estructura editorial que prioriza la historia y la capacidad técnica del taller propio.",
      "Sistema de consulta directa para piezas de alta gama, manteniendo la exclusividad del trato personalizado.",
    ],
    highlights: [
      {
        title: "Tradición Taller",
        text: "Fabricación propia de alianzas y reparaciones con tecnología de punta.",
        sub: "ARTESANÍA"
      },
      {
        title: "Autoridad Regional",
        text: "La joyería más grande y surtida de la provincia, ahora con presencia digital coherente.",
        sub: "LEGADO"
      }
    ]
  },
];

export const WHATSAPP_BASE = "https://wa.me/5493625142700";
export const waLink = (text: string) =>
  `${WHATSAPP_BASE}?text=${encodeURIComponent(text)}`;
