import { ESTETICA_DENTAL } from "./estetica-dental";
import { REHABILITACION_ORAL } from "./rehabilitacion-oral";
import { IMPLANTES_DENTALES } from "./implantes-dentales";
import { ORTODONCIA } from "./ortodoncia";
import { ENDODONCIA } from "./endodoncia";
import { CIRUGIA_Y_PERIODONCIA } from "./cirugia-y-periodoncia";
import { ODONTOLOGIA_GENERAL } from "./odontologia-general";
import type { Pilar, Tratamiento } from "./tipos";

export type { Tratamiento };

/**
 * Source files are still grouped by clinical area, but the site has no
 * hierarchy: every treatment is a sibling of every other one, with its own URL
 * directly under /tratamientos. The grouping never reaches the UI.
 */
const ARCHIVOS: Pilar[] = [
  ESTETICA_DENTAL,
  REHABILITACION_ORAL,
  IMPLANTES_DENTALES,
  ORTODONCIA,
  ENDODONCIA,
  CIRUGIA_Y_PERIODONCIA,
  ODONTOLOGIA_GENERAL,
];

/** Keeps the location modifier in both metadata and the visible H1. */
export function tituloVisible(titulo: string) {
  return titulo;
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

/** The 19 treatments, all at the same level. */
export const TRATAMIENTOS: Tratamiento[] = ARCHIVOS.flatMap((p) => p.hijos);

export function tratamientoPorSlug(slug: string) {
  return TRATAMIENTOS.find((t) => t.slug === slug);
}

export function rutaTratamiento(t: Pick<Tratamiento, "slug">) {
  return `/tratamientos/${t.slug}`;
}

/** Resolves any treatment slug to its URL, or to the hub when unknown. */
export function rutaPorSlug(slug: string) {
  return tratamientoPorSlug(slug) ? `/tratamientos/${slug}` : "/tratamientos";
}

export function nombrePorSlug(slug: string) {
  return tratamientoPorSlug(slug)?.nombre ?? slug;
}
