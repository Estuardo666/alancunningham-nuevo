import { ESTETICA_DENTAL } from "./estetica-dental";
import { REHABILITACION_ORAL } from "./rehabilitacion-oral";
import { IMPLANTES_DENTALES } from "./implantes-dentales";
import { ORTODONCIA } from "./ortodoncia";
import { ENDODONCIA } from "./endodoncia";
import { CIRUGIA_Y_PERIODONCIA } from "./cirugia-y-periodoncia";
import { ODONTOLOGIA_GENERAL } from "./odontologia-general";
import type { Pilar, Tratamiento } from "./tipos";

export type { Pilar, Tratamiento };

/** The seven pillars, in the order they appear on the home and on the hub. */
export const PILARES: Pilar[] = [
  ESTETICA_DENTAL,
  REHABILITACION_ORAL,
  IMPLANTES_DENTALES,
  ORTODONCIA,
  ENDODONCIA,
  CIRUGIA_Y_PERIODONCIA,
  ODONTOLOGIA_GENERAL,
];

/** Editorial labels used in the visual eyebrow of each treatment page. */
export const PILAR_EYEBROWS: Record<string, string> = {
  "estetica-dental": "Diseño y armonía",
  "rehabilitacion-oral": "Función y recuperación",
  "implantes-dentales": "Planificación implantológica",
  ortodoncia: "Alineación y mordida",
  endodoncia: "Conservación dental",
  "cirugia-y-periodoncia": "Encías y cirugía",
  "odontologia-general": "Salud bucal",
};

/** Keeps location terms available for metadata without repeating them in H1s. */
export function tituloVisible(titulo: string) {
  return titulo.replace(/\s+en Núñez, Buenos Aires$/, "");
}

const TITULOS_QUE_ES: Record<string, string> = {
  "diseno-de-sonrisa": "Qué es el diseño de sonrisa",
  "carillas-de-porcelana": "Qué son las carillas de porcelana",
  "blanqueamiento-dental": "Qué es el blanqueamiento dental",
  "coronas-dentales": "Qué son las coronas dentales",
  "incrustaciones-ceramicas": "Qué son las incrustaciones cerámicas",
  "incrustaciones-de-resina": "Qué son las incrustaciones de resina",
  "cambio-de-amalgamas": "Qué es el cambio de amalgamas",
  "implantes-unitarios": "Qué son los implantes unitarios",
  "rehabilitacion-sobre-implantes": "Qué es la rehabilitación sobre implantes",
  "alineadores-invisibles": "Qué son los alineadores invisibles",
  brackets: "Qué son los brackets",
  "tratamiento-de-conducto": "Qué es el tratamiento de conducto",
  "postes-y-reconstruccion": "Qué son los postes y las reconstrucciones",
  "extracciones-dentales": "Qué son las extracciones dentales",
  "frenectomia-laser": "Qué es la frenectomía láser",
  "gingivectomia-laser": "Qué es la gingivectomía láser",
  "retracciones-gingivales": "Qué son las retracciones gingivales",
  "limpieza-profunda": "Qué es la limpieza profunda",
  "restauraciones-caries": "Qué son las restauraciones de caries",
};

export function tituloQueEs(tratamiento: Pick<Tratamiento, "slug" | "nombre">) {
  return (
    TITULOS_QUE_ES[tratamiento.slug] ??
    `Qué es ${tratamiento.nombre.toLowerCase()}`
  );
}

/** Every child treatment, flattened. 19 in total. */
export const TRATAMIENTOS: Tratamiento[] = PILARES.flatMap((p) => p.hijos);

export function pilarPorSlug(slug: string) {
  return PILARES.find((p) => p.slug === slug);
}

export function tratamientoPorSlug(slug: string) {
  return TRATAMIENTOS.find((t) => t.slug === slug);
}

export function rutaPilar(slug: string) {
  return `/tratamientos/${slug}`;
}

export function rutaTratamiento(t: Tratamiento) {
  return `/tratamientos/${t.pilar}/${t.slug}`;
}

/** Resolves a slug to its URL regardless of whether it is a pillar or a child. */
export function rutaPorSlug(slug: string) {
  const hijo = tratamientoPorSlug(slug);
  if (hijo) return rutaTratamiento(hijo);
  return rutaPilar(slug);
}

export function nombrePorSlug(slug: string) {
  return (
    tratamientoPorSlug(slug)?.nombre ?? pilarPorSlug(slug)?.nombre ?? slug
  );
}
