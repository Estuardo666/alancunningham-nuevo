import type { ConFuente, Imagen, MediaAsset } from "./types";

/**
 * Mission and vision, taken from the old site's `/quienes-somos` and corrected:
 * "Desing" → "Design", "Tecnologias" → "Tecnologías".
 */
export const MISION: ConFuente & { texto: string } = {
  _fuente: "real",
  texto:
    "La clínica de alta tecnología de Smile Design Center nace con el objetivo de cambiar la calidad de vida de sus pacientes a través de la salud dental, mediante una excelente calidad de atención odontológica enmarcada en el profesionalismo y la honestidad de sus especialistas. Nuestra experiencia avala el compromiso con nuestros pacientes.",
};

export const HISTORIA: ConFuente & {
  eyebrow: string;
  titulo: string;
  texto: string;
} = {
  _fuente: "real",
  eyebrow: "Nuestra historia",
  titulo: "Las primeras impresiones comienzan con una sonrisa",
  texto:
    "La clínica de altas tecnologías de Smile Design Center nace con el objetivo de cambiar la calidad de vida de sus pacientes a través de la salud dental, mediante una excelente calidad de atención odontológica enmarcada en el profesionalismo y la honestidad de sus especialistas. Nuestra experiencia avala el compromiso con nuestros pacientes.",
};

export const VISION: ConFuente & { texto: string } = {
  _fuente: "real",
  texto:
    "Entregar a la sociedad una solución odontológica innovadora basada en las nuevas tecnologías para mejorar la atención, los tiempos de trabajo y la calidad de los mismos, siempre bajo los pilares de la honestidad y la transparencia.",
};

/**
 * Post-hero "about" block: one long scroll-revealed sentence plus three cards.
 * Kept deliberately distinct from `DIFERENCIALES` so no proof point is repeated
 * twice on the same page (the AM P2 habituation error).
 */
export const SOBRE_LA_CLINICA = {
  eyebrow: "Sobre el consultorio",
  titular:
    "Combinamos un especialista a cargo de cada caso, planificación digital y un plan de tratamiento por escrito, para que sepas qué necesitás, cuánto lleva y cuánto cuesta antes de empezar.",
  tarjetas: [
    {
      titulo: "Atención integral",
      descripcion:
        "De la limpieza y el control preventivo a la rehabilitación completa sobre implantes. Todo el plan se resuelve en el mismo consultorio.",
      icono: "SebajAOsz6a8sWPvrYcEDu50c.svg",
    },
    {
      titulo: "Un especialista a cargo",
      descripcion:
        "Rehabilitación dentobucomaxilar, docencia en la UBA y oficio de técnico de laboratorio. La misma persona planifica y ejecuta tu caso.",
      icono: "xa99qvpg8IUc9n1GZ7kGFxevJ0.svg",
    },
    {
      titulo: "Plan por escrito",
      descripcion:
        "Te llevás qué hay que hacer y en qué orden, con lo urgente separado de lo conveniente y de lo opcional. Sin presión y sin tratamientos inventados.",
      icono: "QVULYcKsFklavhQU9fbshqfZw.svg",
    },
  ],
} as const;

/** The current facility photos supplied by the clinic. */
export const INSTALACIONES: MediaAsset[] = [
  {
    src: "/consultorio/fotos/image2.jpeg",
    alt: "Instalaciones del consultorio odontológico en Núñez, vista interior 1",
  },
  {
    src: "/consultorio/fotos/image3.jpeg",
    alt: "Instalaciones del consultorio odontológico en Núñez, vista interior 2",
  },
  {
    src: "/consultorio/fotos/image4.jpeg",
    alt: "Instalaciones del consultorio odontológico en Núñez, vista interior 3",
  },
  {
    src: "/consultorio/fotos/image5.jpeg",
    alt: "Instalaciones del consultorio odontológico en Núñez, vista interior 4",
  },
  {
    src: "/consultorio/fotos/image6.jpeg",
    alt: "Instalaciones del consultorio odontológico en Núñez, vista interior 5",
  },
  {
    src: "/consultorio/fotos/image7.jpeg",
    alt: "Instalaciones del consultorio odontológico en Núñez, vista interior 6",
  },
  {
    src: "/consultorio/fotos/image8.jpeg",
    alt: "Instalaciones del consultorio odontológico en Núñez, vista interior 7",
  },
  {
    src: "/consultorio/fotos/image9.jpeg",
    alt: "Instalaciones del consultorio odontológico en Núñez, vista interior 8",
  },
  {
    src: "/consultorio/fotos/image10.jpeg",
    alt: "Instalaciones del consultorio odontológico en Núñez, vista interior 9",
  },
  {
    src: "/consultorio/fotos/image11.jpeg",
    alt: "Instalaciones del consultorio odontológico en Núñez, vista interior 10",
  },
  {
    src: "/consultorio/fotos/image12.jpeg",
    alt: "Instalaciones del consultorio odontológico en Núñez, vista interior 11",
  },
];

export interface Tecnologia extends ConFuente {
  /** Crop tighter: for wide shots where the subject is small in frame. */
  acercar?: boolean;
  nombre: string;
  descripcion: string;
  imagen: Imagen;
}

/**
 * Named equipment, not "última generación" — the direct correction of DOHO's
 * weakest differentiator (plan §3.4).
 */
export const TECNOLOGIA: Tecnologia[] = [
  {
    _fuente: "real",
    nombre: "Escáner intraoral 3Shape",
    descripcion:
      "Reemplaza la impresión con pasta por un registro digital de la boca. Más preciso para el ajuste de coronas, carillas e incrustaciones, y bastante más cómodo: no hay cubeta, no hay arcadas.",
    imagen: {
      src: "/images/escaner-intraoral-3shape.jpg",
      alt: "Escáner intraoral 3Shape en uso durante un registro digital",
    },
  },
  {
    _fuente: "real",
    nombre: "Láser para tejido blando",
    descripcion:
      "Corta y coagula al mismo tiempo, así que hay menos sangrado durante el procedimiento, en general no hace falta sutura y el postoperatorio es más corto. Se usa en frenectomía, gingivectomía y periodoncia.",
    imagen: {
      src: "/images/laser-tejido-blando.jpg",
      alt: "Procedimiento de gingivectomía realizado con láser",
    },
  },
  {
    _fuente: "real",
    nombre: "Planificación digital y toma de color",
    acercar: true,
    descripcion:
      "El diseño de sonrisa se proyecta sobre el modelo escaneado y el color se define con registro digital más guía convencional, en lugar de elegirse sólo a ojo.",
    imagen: {
      src: "/images/DSC_0123-1024x683.jpg",
      alt: "Toma de color dental digital y con guía convencional",
    },
  },
];

/** The clinic's clinical process, shown on the home (plan §3.2, block 09). */
export const COMO_TRABAJAMOS = [
  {
    titulo: "Consulta inicial sin cargo",
    descripcion:
      "40 minutos de evaluación completa: encías, piezas, mordida y los registros que hagan falta. Sin compromiso de contratar nada.",
    imagen: {
      src: "/images/thumbnail_image1-2-jpg-1440x800.webp",
      alt: "Consultorio equipado con sillón dental y lámpara de trabajo",
    },
  },
  {
    titulo: "Plan por escrito",
    descripcion:
      "Te llevás el plan con lo que hay que hacer, en qué orden, cuánto lleva y cuánto cuesta. Separado en urgente, conveniente y opcional.",
    imagen: {
      src: "/images/DSC_0135-1-1024x683.jpg",
      alt: "Registro clínico y planificación del tratamiento",
    },
  },
  {
    titulo: "Tratamiento con registro digital",
    descripcion:
      "Escaneo intraoral en lugar de moldes, prueba en boca antes de lo definitivo y control de mordida en cada etapa.",
    imagen: {
      src: "/images/DSC_0136-1024x683.jpg",
      alt: "Escáner intraoral 3Shape en uso durante un registro digital",
    },
  },
  {
    titulo: "Controles de mantenimiento",
    descripcion:
      "El tratamiento no termina cuando se cementa la última pieza. Quedan los controles que hacen que el trabajo dure.",
    imagen: {
      src: "/images/PERIODONCIA-jpg.webp",
      alt: "Control periodontal con encías sanas tras el tratamiento",
    },
  },
];

/** Why us — the merged Values + Why us block (plan §3.2, block 08). */
export const DIFERENCIALES = [
  {
    titulo: "Un especialista, no una cadena",
    descripcion:
      "El titular es especialista en rehabilitación dentobucomaxilar, docente de la UBA y técnico de laboratorio. Tu caso lo planifica y lo ejecuta la misma persona.",
  },
  {
    titulo: "Ves el resultado antes de empezar",
    descripcion:
      "Diseño digital y prueba en boca antes de cualquier desgaste irreversible. Lo que no te convence se corrige en esa etapa.",
  },
  {
    titulo: "Equipamiento con nombre propio",
    descripcion:
      "Escáner intraoral 3Shape y láser para tejido blando. No decimos «última generación»: decimos qué equipo y para qué sirve.",
  },
  {
    titulo: "Presupuesto por escrito y sin presión",
    descripcion:
      "Te decimos qué necesitás y qué no. Sin tratamientos inventados y sin urgencias fabricadas para cerrar la venta.",
  },
];
