import type { ConFuente, Imagen } from "./types";

export interface Caso extends ConFuente {
  slug: string;
  etiqueta: string;
  titulo: string;
  h1: string;
  title: string;
  description: string;
  antes: Imagen;
  despues: Imagen;
  tratamientoSlug: string;
  tratamiento: string;
  duracion: string;
  sesiones: string;
  diagnostico: string;
  realizado: string[];
  tecnica: string;
  seguimiento: string;
  relacionados: string[];
}

const TRATAMIENTO = "Rehabilitación bimaxilar sobre carillas feldespáticas y disilicato";
const ETAPAS = [
  "Fotografía clínica y escaneo intraoral 3Shape.",
  "Terapia básica periodontal.",
  "Diseño de sonrisa del maxilar superior e inferior.",
  "Maquetas.",
  "Tallado.",
  "Cementado de coronas y carillas definitivas.",
];

// Preserve published URLs while replacing the previous draft case narratives.
const REGISTROS = [
  { slug: "rehabilitacion-oral-restauracion-forma-y-color-natural", foto: "patricia", antes: "1", despues: "2" },
  { slug: "diseno-de-sonrisa-cierre-de-espacios-y-armonia-dental", foto: "sofia", antes: "1", despues: "2" },
  { slug: "blanqueamiento-y-alineacion-sonrisa-renovada", foto: "puchi", antes: "2", despues: "1" },
];

export const CASOS: Caso[] = REGISTROS.map((registro, index) => ({
  _fuente: "real",
  slug: registro.slug,
  etiqueta: "Rehabilitación sobre carillas",
  titulo: TRATAMIENTO,
  h1: `${TRATAMIENTO}: caso ${index + 1}`,
  title: `Caso ${index + 1}: rehabilitación bimaxilar | Estudio Cunningham`,
  description: `${TRATAMIENTO}. Fotografía clínica, escaneo intraoral 3Shape, terapia periodontal, diseño, maquetas, tallado y cementado definitivo.`,
  antes: {
    src: `/images/${registro.foto}${registro.antes}-jpg.webp`,
    alt: `Caso ${index + 1}: antes de la rehabilitación bimaxilar sobre carillas`,
  },
  despues: {
    src: `/images/${registro.foto}${registro.despues}-jpg.webp`,
    alt: `Caso ${index + 1}: después de la rehabilitación bimaxilar sobre carillas`,
  },
  tratamientoSlug: "carillas-de-porcelana",
  tratamiento: TRATAMIENTO,
  duracion: "Plan por etapas",
  sesiones: "Según el plan de tratamiento",
  diagnostico: "Rehabilitación del maxilar superior e inferior, planificada con fotografía clínica y escaneo intraoral.",
  realizado: [...ETAPAS],
  tecnica: "Carillas feldespáticas y disilicato, con diseño de sonrisa de ambos maxilares, maquetas, tallado y cementado de coronas y carillas definitivas.",
  seguimiento: "Según el plan de tratamiento individual.",
  relacionados: ["carillas-de-porcelana", "coronas-dentales", "diseno-de-sonrisa"],
}));

export function casoPorSlug(slug: string) {
  return CASOS.find((caso) => caso.slug === slug);
}
