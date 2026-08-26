import type { ConFuente, Imagen } from "./types";

export interface Caso extends ConFuente {
  slug: string;
  /** Short label used on cards and on the before/after slider. */
  etiqueta: string;
  titulo: string;
  h1: string;
  title: string;
  description: string;
  antes: Imagen;
  despues: Imagen;
  /** Pillar slug this case belongs to. */
  pilar: string;
  tratamiento: string;
  duracion: string;
  sesiones: string;
  diagnostico: string;
  realizado: string[];
  tecnica: string;
  seguimiento: string;
  relacionados: string[];
}

/**
 * The three real before/after cases from the clinic. Images and treatment are
 * real; the clinical narrative around them is drafted and pending review.
 */
export const CASOS: Caso[] = [
  {
    _fuente: "ia",
    slug: "rehabilitacion-oral-restauracion-forma-y-color-natural",
    etiqueta: "Rehabilitación oral",
    titulo: "Rehabilitación oral: forma y color natural recuperados",
    h1: "Rehabilitación oral: forma y color natural recuperados",
    title: "Caso: Rehabilitación Oral en Núñez | Smile Design Center",
    description:
      "Caso clínico real de rehabilitación oral en Núñez: piezas restauradas con forma, función y color natural. Antes y después con detalle del tratamiento.",
    antes: {
      src: "/images/patricia1-jpg.webp",
      alt: "Antes de la rehabilitación oral: piezas desgastadas y restauraciones vencidas",
    },
    despues: {
      src: "/images/patricia2-jpg.webp",
      alt: "Después de la rehabilitación oral: dientes restaurados con forma y color natural",
    },
    pilar: "rehabilitacion-oral",
    tratamiento: "Rehabilitación oral con restauraciones y coronas",
    duracion: "Plan por etapas",
    sesiones: "Varias sesiones planificadas",
    diagnostico:
      "Desgaste generalizado con pérdida de anatomía en el sector posterior y restauraciones antiguas con margen abierto en el sector visible. El color de las restauraciones existentes ya no coincidía con el de las piezas naturales, y los contactos estaban desorganizados por el desgaste acumulado.",
    realizado: [
      "Saneamiento previo: control de encías y resolución de las lesiones activas.",
      "Registro digital de la mordida con escáner intraoral 3Shape.",
      "Plan de rehabilitación por etapas, empezando por las piezas en riesgo.",
      "Restauración de forma y anatomía pieza por pieza, con control de contactos.",
      "Selección de color con toma digital y guía convencional.",
    ],
    tecnica:
      "Rehabilitación con criterio conservador: se repuso sólo la estructura perdida en cada pieza, reservando la cobertura total para las que no tenían pared sana suficiente. El color se definió con doble registro para que las restauraciones nuevas se integraran con las piezas naturales.",
    seguimiento:
      "Controles periódicos de contacto y de encía, con protección nocturna para preservar el trabajo frente al desgaste.",
    relacionados: ["coronas-dentales", "incrustaciones-ceramicas", "cambio-de-amalgamas"],
  },
  {
    _fuente: "ia",
    slug: "diseno-de-sonrisa-cierre-de-espacios-y-armonia-dental",
    etiqueta: "Diseño de sonrisa",
    titulo: "Diseño de sonrisa: cierre de espacios y armonía dental",
    h1: "Diseño de sonrisa: cierre de espacios y armonía dental",
    title: "Caso: Diseño de Sonrisa en Núñez | Smile Design Center",
    description:
      "Caso clínico real de diseño de sonrisa en Núñez: cierre de espacios y armonía en la línea de los dientes. Antes y después con el detalle del tratamiento.",
    antes: {
      src: "/images/sofia1-jpg.webp",
      alt: "Antes del diseño de sonrisa: espacios entre los dientes y línea despareja",
    },
    despues: {
      src: "/images/sofia2-jpg.webp",
      alt: "Después del diseño de sonrisa: cierre de espacios y armonía en la línea de los dientes",
    },
    pilar: "estetica-dental",
    tratamiento: "Diseño de sonrisa con cierre de diastemas",
    duracion: "Plan estético en pocas semanas",
    sesiones: "Planificación, prueba y ejecución",
    diagnostico:
      "Espacios entre las piezas del sector anterior y proporción despareja entre incisivos centrales y laterales, con una línea de bordes incisales irregular. La encía estaba sana, lo que permitió trabajar sin una etapa periodontal previa.",
    realizado: [
      "Fotografía clínica y escaneo intraoral 3Shape.",
      "Diseño digital de la sonrisa con corrección de proporción y línea media.",
      "Ensayo provisorio en boca para aprobar forma y color antes de ejecutar.",
      "Cierre de los espacios y armonización de la línea incisal.",
      "Control de mordida y pulido final.",
    ],
    tecnica:
      "El caso se planificó en digital y se probó en boca antes de cualquier desgaste. Esa etapa permitió ajustar la proporción de los centrales respecto de los laterales, que es lo que define si el resultado se lee como natural o como una hilera pareja sin carácter.",
    seguimiento:
      "Controles de mantenimiento y pautas de higiene específicas para el sector anterior restaurado.",
    relacionados: ["diseno-de-sonrisa", "carillas-de-porcelana", "blanqueamiento-dental"],
  },
  {
    _fuente: "ia",
    slug: "blanqueamiento-y-alineacion-sonrisa-renovada",
    etiqueta: "Blanqueamiento y alineación",
    titulo: "Blanqueamiento y alineación: sonrisa renovada",
    h1: "Blanqueamiento y alineación: sonrisa renovada",
    title: "Caso: Blanqueamiento y Alineación en Núñez | Smile Design Center",
    description:
      "Caso clínico real en Núñez: dientes alineados y blanqueados con criterio conservador. Antes y después con el detalle del tratamiento realizado.",
    antes: {
      src: "/images/puchi2-jpg.webp",
      alt: "Antes del tratamiento: dientes desalineados y oscurecidos",
    },
    despues: {
      src: "/images/puchi1-jpg.webp",
      alt: "Después del tratamiento: sonrisa renovada con dientes alineados y blanqueados",
    },
    pilar: "ortodoncia",
    tratamiento: "Alineación seguida de blanqueamiento dental",
    duracion: "Tratamiento en etapas: primero alinear, después aclarar",
    sesiones: "Controles de alineación más sesiones de blanqueamiento",
    diagnostico:
      "Apiñamiento en el sector anterior con color oscurecido en las piezas visibles. La combinación es frecuente: el apiñamiento dificulta la higiene y eso acelera la pigmentación.",
    realizado: [
      "Registro fotográfico y escaneo intraoral.",
      "Plan de movimientos y alineación del sector anterior.",
      "Limpieza profesional y control de encías al finalizar la alineación.",
      "Blanqueamiento dental con registro de color antes y después.",
      "Contención para sostener la posición alcanzada.",
    ],
    tecnica:
      "El orden importa: primero se alineó y recién después se blanqueó. Alinear antes permite que el blanqueamiento actúe de forma pareja sobre superficies que quedaron accesibles, y evita tener que desgastar esmalte para corregir por estética lo que se puede corregir moviendo.",
    seguimiento:
      "Uso de contención según indicación y controles periódicos de color y de posición.",
    relacionados: ["alineadores-invisibles", "blanqueamiento-dental", "limpieza-profunda"],
  },
];

export function casoPorSlug(slug: string) {
  return CASOS.find((c) => c.slug === slug);
}

export function casosPorPilar(pilar: string) {
  return CASOS.filter((c) => c.pilar === pilar);
}
