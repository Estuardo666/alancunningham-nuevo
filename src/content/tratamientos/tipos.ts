import type { ConFuente, Faq, Imagen, Paso } from "../types";

/** A child treatment: its own URL, ~400 words, always linked to its pillar. */
export interface Tratamiento extends ConFuente {
  slug: string;
  /** Slug of the pillar this treatment belongs to. */
  pilar: string;
  nombre: string;
  /** H1 — always carries the geo modifier (plan §7.2). */
  h1: string;
  title: string;
  description: string;
  resumen: string;
  imagen: Imagen;
  queEs: string[];
  paraQuien: string[];
  proceso: Paso[];
  duracion: string;
  sesiones: string;
  /** Real clinical videos, when the clinic has footage of this treatment. */
  videos?: string[];
  faqs: Faq[];
  /** Slugs of 3 related treatments. */
  relacionados: string[];
}

/** A pillar page: ~700 words, groups its children and never dead-ends. */
export interface Pilar extends ConFuente {
  slug: string;
  nombre: string;
  h1: string;
  title: string;
  description: string;
  eyebrow: string;
  resumen: string;
  /** Two lines used on the home and hub cards. */
  tarjeta: string;
  imagen: Imagen;
  queEs: string[];
  paraQuien: string[];
  proceso: Paso[];
  beneficios: { titulo: string; descripcion: string }[];
  faqs: Faq[];
  hijos: Tratamiento[];
  /** Slug of a clinical case to show on the pillar page, if any. */
  caso?: string;
}
