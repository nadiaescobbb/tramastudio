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
    name: "BOSCO",
    accent: "Edición 01.",
    industry: "Gastronomía / Producto Artesanal",
    format: "Landing de Ventas",
    conversion: "Directo a WhatsApp",
    liveUrl: "https://universobosco.com.ar/",
    category: "Branding de Culto",
    tagline:
      "Alfajores de edición limitada. Aplicamos estética oscura para posicionar el producto como objeto de colección.",
    challenge: [
      "Bosco tenía web. El problema era que era una tienda Tiendanube estándar — idéntica a cientos de otras. Un producto artesanal de edición limitada, con identidad real, presentado en un template genérico con badge de descuento y carrito de compras.",
      "El dueño lo dijo directo: el sitio no representaba a Bosco.",
    ],
    criterion: {
      intro: "La gastronomía artesanal en Argentina vive en fondos blancos y tipografías redondeadas. Rompimos eso a propósito.",
      points: [
        { label: "Fondo casi negro", text: "para que el producto sea lo único que el ojo procesa." },
        { label: "Lookbook fotográfico", text: "en lugar de grilla de productos: proceso, alfajor, tarjeta numerada. Tres imágenes que cuentan la historia sin texto." },
        { label: "Tipografía de impacto", text: "para anclar la sensación de objeto de colección, no de alimento perecedero." },
      ],
    },
    solution: [
      "Sin carrito. Sin formulario. Sin fricción.",
      "Construimos un flujo de una sola dirección: el usuario entiende el producto, ve el precio, hace clic y abre WhatsApp con el pedido ya redactado. Lautaro recibe el mensaje y cierra la venta en minutos.",
      "75 unidades. Edición cerrada. El sitio sigue online como archivo de la Edición 01.",
    ],
    pullQuote: {
      text: "Era lo que quería. Quedó muy sólida. A dos semanas del lanzamiento, 60 de 75 cajas vendidas.",
      author: "Lautaro — Bosco Argentina",
    },
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
    category: "Identidad Corporativa",
    tagline:
      "Un arquitecto técnico que se presentaba como uno más. El sitio ahora filtra al cliente por criterio antes de que pregunte el precio.",
    challenge: [
      "Francisco tiene un estudio de arquitectura de alto nivel, pero su presencia digital no lo decía. Su sitio anterior era el clásico portfolio de \"renders lindos\" que atraía a mucha gente preguntando cuánto cobraba el metro cuadrado de obra barata.",
      "El objetivo no era solo diseñar, era filtrar. Necesitaba una web que proyecte tanta solidez y autoridad que el cliente que busca \"lo más barato\" ni se anime a escribir.",
    ],
    criterion: {
      intro: "Para un estudio técnico, la confianza se construye con orden y escala.",
      points: [
        { label: "Grilla rígida", text: "estructura de 1px que evoca planos técnicos y rigor arquitectónico." },
        { label: "Espacio negativo", text: "dejar que la obra respire. Si el proyecto es grande, el diseño no necesita gritar." },
        { label: "Tipografía de autor", text: "uso de Playfair para títulos, elevando la percepción de un estudio \"de firma\"." },
      ],
    },
    solution: [
      "Pasamos de un \"catálogo de fotos\" a una declaración de intenciones. El sitio ahora posiciona a Francisco como un arquitecto que lidera proyectos, no como alguien que solo dibuja planos.",
      "El resultado es eficiencia: las consultas que llegan ahora tienen un ticket promedio mucho más alto. El diseño hizo el trabajo sucio de filtrado.",
    ],
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
    category: "Posicionamiento Premium",
    tagline:
      "Una clínica que cobra USD 250 por sesión pero tenía una web de USD 20. El sitio ahora justifica el valor real del servicio.",
    challenge: [
      "Sebastián lidera una clínica de medicina estética donde los tratamientos no son baratos. El problema era que su web anterior parecía un catálogo de masajes de barrio. No había coherencia entre lo que la paciente pagaba en el consultorio y lo que veía en la pantalla.",
      "El desafío era eliminar la fricción por precio mediante un diseño que se sienta como una boutique médica de lujo.",
    ],
    criterion: {
      intro: "Para salud premium, la clave es el minimalismo quirúrgico: limpieza absoluta.",
      points: [
        { label: "Aire y blanco", text: "espacios amplios que transmiten higiene, orden y calma." },
        { label: "Fotografía de experiencia", text: "no mostrar \"clínica\", mostrar \"bienestar\". El paciente se enamora del lugar antes de ir." },
        { label: "Tipografía serena", text: "uso de serifas finas para los títulos, proyectando elegancia y cuidado personal." },
      ],
    },
    solution: [
      "El nuevo diseño hace que Clínica Nova se perciba al instante como la opción líder. El precio dejó de ser una objeción porque la web ya hizo la preventa de calidad.",
      "Aumentamos el deseo de compra sin usar una sola palabra de marketing barato. Es diseño que justifica el valor.",
    ],
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
    category: "Diseño Editorial",
    tagline:
      "Psicología clínica de alta complejidad. El sitio genera la confianza necesaria antes de que el paciente envíe el primer mensaje.",
    challenge: [
      "En el rubro de la salud mental, una web genérica destruye el perfil profesional. El desafío para Camila era crear un rincón en internet que se sienta íntimo y profundamente profesional, alejándola por completo de las típicas webs de psicología que parecen manuales de autoayuda.",
      "Buscábamos generar transferencia antes del primer contacto. Que el paciente sienta que ya conoce a la analista a través de su estética.",
    ],
    criterion: {
      intro: "Diseñamos una experiencia inspirada en libros de arte y revistas editoriales: calidez y rigor.",
      points: [
        { label: "Estilo literario", text: "tipografías con serifa que invitan a una lectura pausada, transmitiendo paz y escucha." },
        { label: "Paleta orgánica", text: "tonos crema y papel que se alejan del blanco clínico frío, buscando una conexión más humana." },
        { label: "Filtro de autoridad", text: "la página es tan refinada que naturalmente atrae a pacientes que valoran un espacio de trabajo serio." },
      ],
    },
    solution: [
      "Más que una página, construimos un espacio magnético. La web no busca convencer a cualquiera, busca conectar con el paciente correcto.",
      "Cualquier persona que entra siente instantáneamente que está frente a una profesional excepcional. Es un diseño que impone respeto y llena su agenda de pacientes comprometidos.",
    ],
  },
];

export const WHATSAPP_BASE = "https://wa.me/5493625142700";
export const waLink = (text: string) =>
  `${WHATSAPP_BASE}?text=${encodeURIComponent(text)}`;
