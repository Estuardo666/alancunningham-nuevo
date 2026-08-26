import type { ConFuente, Imagen, Paso } from "./types";

export const TURISMO_META = {
  h1: "Turismo odontológico en Buenos Aires",
  title: "Turismo Odontológico en Buenos Aires | Smile Design Center",
  description:
    "Tratamiento odontológico en Buenos Aires con evaluación online previa, plan cerrado antes de viajar y tiempos de estadía estimados por tratamiento.",
  bajada:
    "Evaluación online, presupuesto por escrito y agenda armada antes de que compres el pasaje.",
};

/** Who the programme is for. */
export const PERFILES: { titulo: string; descripcion: string }[] = [
  {
    titulo: "Argentinos que viven en el exterior",
    descripcion:
      "Aprovechás el viaje familiar para resolver el tratamiento que venías postergando, con atención en tu idioma y con la agenda concentrada en los días que estás en el país.",
  },
  {
    titulo: "Pacientes del exterior",
    descripcion:
      "Combinás el tratamiento con un viaje a Buenos Aires. La evaluación arranca online y el plan queda cerrado antes de que compres el pasaje.",
  },
  {
    titulo: "Pacientes del interior del país",
    descripcion:
      "Viajás a Buenos Aires por unos días con las sesiones agrupadas, para no tener que volver una vez por semana durante meses.",
  },
];

/** Four reasons, each with a concrete data point rather than an adjective. */
export const RAZONES: {
  titulo: string;
  descripcion: string;
  imagen: Imagen;
}[] = [
  {
    titulo: "El plan se cierra antes de viajar",
    descripcion:
      "La evaluación empieza online con fotos y estudios. Llegás con presupuesto por escrito, cantidad de sesiones y días de estadía estimados.",
    imagen: {
      src: "/images/obelisco-buenos-aires.jpg",
      alt: "Obelisco de Buenos Aires al atardecer",
    },
  },
  {
    titulo: "Tecnología sin pasta de impresión",
    descripcion:
      "Escáner intraoral 3Shape para todos los registros y láser para procedimientos de tejido blando, que acorta el postoperatorio: importa cuando tenés vuelo de vuelta.",
    imagen: {
      src: "/images/escaner-intraoral-3shape.jpg",
      alt: "Escáner intraoral 3Shape del consultorio",
    },
  },
  {
    titulo: "Un solo responsable del caso",
    descripcion:
      "El titular es especialista en rehabilitación dentobucomaxilar y técnico de laboratorio. La planificación y la ejecución técnica están en la misma cabeza.",
    imagen: {
      src: "/images/Asset-1.png",
      alt: "Profesional del estudio odontológico",
    },
  },
  {
    titulo: "Una ciudad para el tiempo entre sesiones",
    descripcion:
      "Buenos Aires tiene con qué llenar los días que no estás en el sillón, y el consultorio está en Núñez, bien conectado con el resto de la ciudad.",
    imagen: {
      src: "/images/vicente-lopez.jpg",
      alt: "Costanera y espacios verdes cerca de Buenos Aires",
    },
  },
];

/** The five-step timeline — one of the two differentiating blocks (plan §5.3). */
export const COMO_FUNCIONA: Paso[] = [
  {
    titulo: "1 · Consulta online",
    descripcion:
      "Nos escribís por WhatsApp y nos mandás fotos de tu boca y los estudios que tengas. Hacemos una primera evaluación a distancia y te decimos si el caso es viable en el tiempo que vas a estar en Buenos Aires.",
  },
  {
    titulo: "2 · Plan y presupuesto",
    descripcion:
      "Recibís el plan de tratamiento por escrito, con las etapas, la cantidad de sesiones, el rango de precio y los medios de pago disponibles. Todo antes de comprar el pasaje.",
  },
  {
    titulo: "3 · Coordinación del viaje",
    descripcion:
      "Armamos la agenda de sesiones alrededor de tus fechas y coordinamos traslado al consultorio, estadía y todo lo que necesites resolver mientras estés acá.",
  },
  {
    titulo: "4 · Tratamiento",
    descripcion:
      "Las sesiones se concentran en los días de estadía. Los registros se toman en digital, lo que reduce visitas, y en la primera cita se confirma el plan sobre la boca real.",
  },
  {
    titulo: "5 · Seguimiento a distancia",
    descripcion:
      "Después de volver seguimos el caso por videollamada y por mensaje, con controles pautados. Si hay que ajustar algo, se coordina con tu odontólogo local o en tu próximo viaje.",
  },
];

export interface ServicioTurismo extends ConFuente {
  nombre: string;
  descripcion: string;
}

/** The five real services listed on the old site, rewritten and spell-checked. */
export const SERVICIOS: ServicioTurismo[] = [
  {
    _fuente: "real",
    nombre: "Traslado al consultorio",
    descripcion:
      "Coordinamos cómo llegás a Arribeños 2659 el día de cada sesión, para que no pierdas tiempo resolviéndolo.",
  },
  {
    _fuente: "real",
    nombre: "Transporte",
    descripcion:
      "Te orientamos con el transporte en la ciudad y con los traslados desde y hacia el aeropuerto.",
  },
  {
    _fuente: "real",
    nombre: "Estadía",
    descripcion:
      "Te recomendamos alojamiento en zonas cercanas al consultorio y bien conectadas con el centro.",
  },
  {
    _fuente: "real",
    nombre: "Turismo",
    descripcion:
      "Armamos sugerencias para los días entre sesiones, según el tiempo libre que te deje la agenda.",
  },
  {
    _fuente: "real",
    nombre: "Gastronomía",
    descripcion:
      "Recomendaciones de dónde comer, con la salvedad de las indicaciones de dieta que corresponda a cada etapa del tratamiento.",
  },
];

export interface TiempoEstadia extends ConFuente {
  tratamiento: string;
  slug: string;
  sesiones: string;
  estadia: string;
  nota?: string;
}

/**
 * The stay-time table — the block no other Argentine clinic publishes and the
 * one that answers the segment's dominant objection (plan §5.3).
 * Clinical timings: flagged until validated with the clinic.
 */
export const TIEMPOS_ESTADIA: TiempoEstadia[] = [
  {
    _fuente: "pendiente-validacion",
    tratamiento: "Blanqueamiento dental",
    slug: "blanqueamiento-dental",
    sesiones: "1 a 2",
    estadia: "3 a 5 días",
  },
  {
    _fuente: "pendiente-validacion",
    tratamiento: "Carillas de porcelana",
    slug: "carillas-de-porcelana",
    sesiones: "3 a 4",
    estadia: "10 a 14 días",
    nota: "Incluye planificación, prueba en boca y cementado definitivo.",
  },
  {
    _fuente: "pendiente-validacion",
    tratamiento: "Diseño de sonrisa completo",
    slug: "diseno-de-sonrisa",
    sesiones: "4 a 5",
    estadia: "12 a 18 días",
  },
  {
    _fuente: "pendiente-validacion",
    tratamiento: "Corona dental",
    slug: "coronas-dentales",
    sesiones: "2 a 3",
    estadia: "7 a 10 días",
  },
  {
    _fuente: "pendiente-validacion",
    tratamiento: "Tratamiento de conducto",
    slug: "tratamiento-de-conducto",
    sesiones: "1 a 2",
    estadia: "4 a 7 días",
    nota: "La reconstrucción posterior puede sumar días.",
  },
  {
    _fuente: "pendiente-validacion",
    tratamiento: "Implante unitario",
    slug: "implantes-unitarios",
    sesiones: "2 etapas",
    estadia: "Dos viajes o un viaje largo",
    nota: "Entre la colocación y la corona hay meses de integración al hueso.",
  },
  {
    _fuente: "pendiente-validacion",
    tratamiento: "Rehabilitación sobre implantes",
    slug: "rehabilitacion-sobre-implantes",
    sesiones: "Por etapas",
    estadia: "Se planifica caso por caso",
  },
  {
    _fuente: "pendiente-validacion",
    tratamiento: "Limpieza profunda",
    slug: "limpieza-profunda",
    sesiones: "1 a 2",
    estadia: "2 a 4 días",
  },
];

/** Treatments most requested by travelling patients. */
export const TRATAMIENTOS_DESTACADOS = [
  "estetica-dental",
  "rehabilitacion-oral",
  "implantes-dentales",
  "odontologia-general",
];

/** The ten real Buenos Aires photos from the old site. */
export const FOTOS_BUENOS_AIRES: Imagen[] = [
  { src: "/images/turismdsadsa1e21.jpg", alt: "Vista panorámica de la arquitectura de Buenos Aires" },
  { src: "/images/turismo-odontologico-jpg.webp", alt: "Calle emblemática de Buenos Aires con edificios históricos" },
  { src: "/images/turismo-odontoogico-jpg-1536x1024.webp", alt: "Avenida porteña rodeada de arquitectura clásica" },
  { src: "/images/vicente-lopez.jpg", alt: "Costanera de Vicente López junto al Río de la Plata" },
  { src: "/images/2332321turismo-odontologico-jpg.webp", alt: "Plaza tradicional en el centro de Buenos Aires" },
  { src: "/images/dasdad-turismo-odontologico-jpg.webp", alt: "Fachada colorida de un barrio típico de Buenos Aires" },
  { src: "/images/dsadadsadsdaas.jpg", alt: "Monumento icónico de la ciudad de Buenos Aires" },
  { src: "/images/dsfdsfdsafdsafsaffaf-jpg.webp", alt: "Paseo peatonal con arquitectura porteña al atardecer" },
  { src: "/images/foto-de-capital-hoja-1-jpg-1536x1024.webp", alt: "Vista aérea de la ciudad capital de Buenos Aires" },
  { src: "/images/foto-segunda-hoja-hd-n2-1-jpg-1536x1013.webp", alt: "Panorámica del skyline de Buenos Aires" },
];

export const FOTO_HERO_TURISMO: Imagen = {
  src: "/images/obelisco-buenos-aires.jpg",
  alt: "Obelisco de Buenos Aires, punto de referencia de la ciudad",
};

export const FAQS_TURISMO = [
  {
    _fuente: "ia" as const,
    pregunta: "¿Cómo empieza el proceso si vivo afuera?",
    respuesta:
      "Escribinos por WhatsApp con fotos de tu boca y los estudios que tengas. Hacemos una evaluación online y te decimos si el caso se puede resolver en los días que vas a estar en Buenos Aires, antes de que compres el pasaje.",
  },
  {
    _fuente: "ia" as const,
    pregunta: "¿Cuántos días necesito quedarme?",
    respuesta:
      "Depende del tratamiento. En la tabla de tiempos estimados de esta página está el detalle por tipo de tratamiento, con la cantidad de sesiones y los días de estadía previstos.",
  },
  {
    _fuente: "ia" as const,
    pregunta: "¿En qué moneda se paga?",
    respuesta:
      "Aceptamos pesos y dólares en efectivo, transferencia bancaria, Mercado Pago y tarjetas. Las condiciones de cada medio de pago están en la página de precios.",
  },
  {
    _fuente: "ia" as const,
    pregunta: "¿Qué pasa si necesito un control después de volver?",
    respuesta:
      "El seguimiento se hace por videollamada y por mensaje, con controles pautados. Si hace falta una intervención presencial, se coordina con tu odontólogo local o en tu próximo viaje.",
  },
  {
    _fuente: "ia" as const,
    pregunta: "¿El programa incluye el alojamiento?",
    respuesta:
      "Coordinamos y recomendamos, pero el tratamiento y los servicios de viaje se presupuestan por separado. Te ayudamos a que todo encaje con la agenda de sesiones.",
  },
  {
    _fuente: "ia" as const,
    pregunta: "¿Atienden en inglés?",
    respuesta:
      "Podemos coordinar la atención en inglés. Avisanos al escribir y organizamos la consulta en consecuencia.",
  },
];
