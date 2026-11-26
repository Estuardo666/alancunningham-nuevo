import type { ConFuente, Imagen } from "./types";

export interface Profesional extends ConFuente {
  slug: string;
  nombre: string;
  /** Shown under the name, e.g. "Odontólogo · M.N. 42463". */
  titulo: string;
  matricula: string;
  especialidad: string;
  foto: Imagen;
  /**
   * Tailwind `object-[x_y]` class that keeps the face in frame when the team
   * card opens and the portrait gets shorter. Defaults to `object-[50%_8%]`.
   */
  encuadre?: string;
  bio: string[];
  formacion: string[];
  /** Slugs of the treatments this professional works on. */
  tratamientos: string[];
  /** Universities, for `alumniOf` in the Person schema. */
  alumniOf: string[];
  credenciales: string[];
  /** Only the clinic owner is the site's content reviewer (E-E-A-T). */
  revisor?: boolean;
}

export const EQUIPO: Profesional[] = [
  {
    _fuente: "real",
    slug: "alan-cunningham",
    nombre: "Dr. Esp. Alan Cunningham",
    titulo: "Odontólogo · M.N. 42463",
    matricula: "M.N. 42463",
    especialidad: "Especialista en rehabilitación dentobucomaxilar",
    foto: {
      src: "/team/alan-cunningham.jpg",
      alt: "Od. Alan Cunningham, titular del consultorio",
    },
    encuadre: "object-[50%_42%]",
    bio: [
      "Alan Cunningham es odontólogo, especialista en rehabilitación dentobucomaxilar y docente de la Universidad de Buenos Aires. Es el titular del Estudio Odontológico Cunningham, en Núñez. El estudio está acreditado por Invisalign y los parámetros estéticos se definen tomando como referencia bibliográfica a Fradiani.",
      "Su formación tiene una particularidad que se nota en el trabajo diario: además de odontólogo es técnico de laboratorio. Eso significa que conoce de primera mano cómo se fabrica una corona, una carilla o una prótesis, y no sólo cómo se indica. La distancia entre lo que se diseña en el consultorio y lo que llega terminado desde el laboratorio se acorta cuando la misma persona entiende los dos lados del proceso.",
      "Su práctica se concentra en rehabilitación oral, implantes y estética dental, con un criterio conservador: se desgasta lo mínimo indispensable, se conserva todo lo que sea conservable y cada plan se entrega por escrito, con lo urgente separado de lo conveniente y de lo opcional.",
    ],
    formacion: [
      "Odontólogo",
      "Especialista en Rehabilitación Oral y Prótesis (UBA)",
      "Técnico de laboratorio dental",
      "Docente de la Universidad de Buenos Aires (UBA)",
    ],
    tratamientos: [
      "diseno-de-sonrisa",
      "carillas-de-porcelana",
      "coronas-dentales",
      "implantes-unitarios",
      "rehabilitacion-sobre-implantes",
      "tratamiento-de-conducto",
    ],
    alumniOf: ["Universidad de Buenos Aires"],
    credenciales: [
      "Matrícula Nacional 42463",
      "Especialidad en rehabilitación dentobucomaxilar",
      "Técnico de laboratorio dental",
      "Acreditado por Invisalign",
    ],
    revisor: true,
  },
  {
    _fuente: "real",
    slug: "marcela-altamiranda",
    nombre: "Dra. Esp. Marcela Altamiranda",
    titulo: "Especialista en ortodoncia y alineadores",
    matricula: "",
    especialidad: "Especialista en ortodoncia y alineadores",
    foto: {
      src: "/team/marcela-altamiranda.jpg",
      alt: "Dra. Esp. Marcela Altamiranda",
    },
    bio: ["Marcela es nuestra especialista en ortodoncia y alineadores. Cuenta con las acreditaciones correspondientes de Invisalign, Keep Smile, Line Up, Little Smile y UFORIA. Además, tiene conocimientos y experiencia en el diseño y la fabricación de alineadores."],
    formacion: ["Especialista en ortodoncia", "Diseño y fabricación de alineadores"],
    tratamientos: ["alineadores-invisibles", "brackets"],
    alumniOf: [],
    credenciales: ["Invisalign", "Keep Smile", "Line Up", "Little Smile", "UFORIA"],
  },
];

export const TITULAR = EQUIPO[0];

export function profesionalPorSlug(slug: string) {
  return EQUIPO.find((p) => p.slug === slug);
}

/** Last clinical review date for the content on the site. */
export const FECHA_REVISION = "2026-08-21";

/**
 * Published portraits supplied and identified by the clinic.
 */
export interface MiembroCarrusel extends ConFuente {
  slug: string;
  nombre: string;
  especialidad: string;
  /** Short label shown in the pill at the foot of the card. */
  etiqueta: string;
  /** Credentials listed under the role line. */
  especialidades?: string[];
  foto: Imagen;
  /** See `Profesional.encuadre`. */
  encuadre?: string;
  /** Palette tint for the card. `titular` is the only solid one. */
  tono: "titular" | "coral" | "cyan" | "lima" | "violeta" | "blanca";
  /** Only the owner links to a profile page. */
  ficha?: boolean;
  bio?: string;
}

export const EQUIPO_CARRUSEL: MiembroCarrusel[] = [
  {
    _fuente: "real",
    slug: TITULAR.slug,
    nombre: TITULAR.nombre,
    especialidad: TITULAR.especialidad,
    etiqueta: TITULAR.matricula,
    especialidades: TITULAR.formacion,
    foto: TITULAR.foto,
    encuadre: TITULAR.encuadre,
    tono: "titular",
    ficha: true,
    bio: TITULAR.bio[0],
  },
  {
    _fuente: "real",
    slug: "marcela-altamiranda",
    nombre: "Dra. Esp. Marcela Altamiranda",
    especialidad: "Especialista en ortodoncia y alineadores",
    etiqueta: "Ortodoncia y alineadores",
    foto: {
      src: "/team/marcela-altamiranda.jpg",
      alt: "Dra. Esp. Marcela Altamiranda, especialista en ortodoncia y alineadores",
    },
    tono: "coral",
    ficha: true,
    bio: "Marcela es nuestra especialista en ortodoncia y alineadores. Cuenta con acreditaciones de Invisalign, Keep Smile, Line Up, Little Smile y UFORIA, además de conocimientos en diseño y fabricación de alineadores.",
  },
  {
    _fuente: "real",
    slug: "andres-loyola",
    nombre: "Dr. Esp. Andrés Loyola",
    especialidad: "Especialista en endodoncia y microcirugía apical",
    etiqueta: "Endodoncia",
    foto: {
      src: "/team/andres-loyola.jpg",
      alt: "Dr. Esp. Andrés Loyola, especialista en endodoncia y microcirugía apical",
    },
    tono: "cyan",
    bio: "Andrés es nuestro especialista en endodoncia y microcirugía apical, además de ser docente de la Universidad de Buenos Aires.",
  },
  {
    _fuente: "real",
    slug: "estefano-alban",
    nombre: "Dr. Esp. Estefano Alban",
    especialidad: "Especialista en endodoncia y microcirugía apical",
    etiqueta: "Endodoncia",
    foto: {
      src: "/team/estefano-alban.jpg",
      alt: "Dr. Esp. Estefano Alban, especialista en endodoncia y microcirugía apical",
    },
    tono: "lima",
    bio: "Estefano es nuestro segundo especialista en endodoncia y microcirugía apical, además de ser docente de la Universidad de Buenos Aires. Se destaca por la eliminación de instrumentos fracturados y la atención de derivaciones de colegas.",
  },
  {
    _fuente: "real",
    slug: "avril-penalva",
    nombre: "Avril Peñalva",
    especialidad: "Asistente dental",
    etiqueta: "Asistente dental",
    foto: {
      src: "/team/avril-penalva.jpg",
      alt: "Avril Peñalva, asistente dental",
    },
    tono: "violeta",
    bio: "Avril es nuestra asistente dental y está a cargo de la organización y el orden de nuestra clínica.",
  },
];

/** Confirmed biography; the portrait will be supplied separately. */
export const EQUIPO_PENDIENTE_FOTO = [
  {
    nombre: "Dra. Meryl Williams",
    bio: "Meryl es nuestra especialista en periodoncia y está a cargo de las cirugías periodontales. Actualmente es docente de la Universidad de Buenos Aires.",
  },
] as const;
