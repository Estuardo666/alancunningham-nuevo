import type { ConFuente, Imagen } from "./types";

export interface Profesional extends ConFuente {
  slug: string;
  nombre: string;
  /** Shown under the name, e.g. "Odontólogo · M.N. 42463". */
  titulo: string;
  matricula: string;
  especialidad: string;
  foto: Imagen;
  bio: string[];
  formacion: string[];
  /** Slugs of the pillars this professional works on. */
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
    nombre: "Od. Alan Cunningham",
    titulo: "Odontólogo · M.N. 42463",
    matricula: "M.N. 42463",
    especialidad: "Especialista en rehabilitación dentobucomaxilar",
    foto: {
      src: "/team/Alan.jpeg",
      alt: "Od. Alan Cunningham, titular del consultorio",
    },
    bio: [
      "Alan Cunningham es odontólogo, especialista en rehabilitación dentobucomaxilar y docente de la Universidad de Buenos Aires. Es el titular de Smile Design Center, el consultorio de Arribeños 2659, en Núñez.",
      "Su formación tiene una particularidad que se nota en el trabajo diario: además de odontólogo es técnico de laboratorio. Eso significa que conoce de primera mano cómo se fabrica una corona, una carilla o una prótesis, y no sólo cómo se indica. La distancia entre lo que se diseña en el consultorio y lo que llega terminado desde el laboratorio se acorta cuando la misma persona entiende los dos lados del proceso.",
      "Su práctica se concentra en rehabilitación oral, implantes y estética dental, con un criterio conservador: se desgasta lo mínimo indispensable, se conserva todo lo que sea conservable y cada plan se entrega por escrito, con lo urgente separado de lo conveniente y de lo opcional.",
    ],
    formacion: [
      "Odontólogo",
      "Especialista en rehabilitación oral y prótesis",
      "Técnico de laboratorio dental",
      "Docente de la Universidad de Buenos Aires (UBA)",
    ],
    tratamientos: [
      "rehabilitacion-oral",
      "implantes-dentales",
      "estetica-dental",
      "endodoncia",
      "cirugia-y-periodoncia",
      "odontologia-general",
    ],
    alumniOf: ["Universidad de Buenos Aires"],
    credenciales: [
      "Matrícula Nacional 42463",
      "Especialidad en rehabilitación dentobucomaxilar",
      "Técnico de laboratorio dental",
    ],
    revisor: true,
  },
];

export const TITULAR = EQUIPO[0];

const FOTO_MIEMBRO_2: Imagen = {
  src: "/team/miembro 2.jpg",
  alt: "Profesional del equipo del consultorio",
};

const FOTO_MIEMBRO_3: Imagen = {
  src: "/team/Miembro 3.jpeg",
  alt: "Profesional del equipo del consultorio",
};

export function profesionalPorSlug(slug: string) {
  return EQUIPO.find((p) => p.slug === slug);
}

/** Last clinical review date for the content on the site. */
export const FECHA_REVISION = "2026-08-21";

/**
 * Carousel roster. Only the owner has an individual page; the rest are
 * placeholders for the section layout and are flagged so
 * `npm run audit:contenido` blocks them before production.
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
  /** Palette tint for the card. `titular` is the only solid one. */
  tono: "titular" | "coral" | "cyan" | "lima" | "violeta" | "blanca";
  /** Only the owner links to a profile page. */
  ficha?: boolean;
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
    tono: "titular",
    ficha: true,
  },
  {
    _fuente: "pendiente-validacion",
    slug: "martina-rossi",
    nombre: "Od. Martina Rossi",
    especialidad: "Ortodoncia y alineadores invisibles",
    etiqueta: "Ortodoncia",
    foto: FOTO_MIEMBRO_2,
    tono: "coral",
  },
  {
    _fuente: "pendiente-validacion",
    slug: "julian-ferrer",
    nombre: "Od. Julián Ferrer",
    especialidad: "Implantología y cirugía guiada",
    etiqueta: "Implantes",
    foto: TITULAR.foto,
    tono: "cyan",
  },
  {
    _fuente: "pendiente-validacion",
    slug: "camila-duarte",
    nombre: "Od. Camila Duarte",
    especialidad: "Endodoncia y microscopía",
    etiqueta: "Endodoncia",
    foto: FOTO_MIEMBRO_3,
    tono: "lima",
  },
  {
    _fuente: "pendiente-validacion",
    slug: "tomas-aguirre",
    nombre: "Od. Tomás Aguirre",
    especialidad: "Cirugía y periodoncia",
    etiqueta: "Periodoncia",
    foto: TITULAR.foto,
    tono: "violeta",
  },
  {
    _fuente: "pendiente-validacion",
    slug: "paula-nieva",
    nombre: "Lic. Paula Nieva",
    especialidad: "Higiene dental y prevención",
    etiqueta: "Prevención",
    foto: FOTO_MIEMBRO_2,
    tono: "blanca",
  },
];
