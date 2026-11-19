import type { ConFuente, Imagen, MediaAsset } from "./types";

/**
 * Mission and vision, rewritten for the current clinic identity.
 */
export const MISION: ConFuente & { texto: string } = {
  _fuente: "real",
  texto:
    "El Estudio Odontológico Cunningham nace con el objetivo de mejorar la calidad de vida de sus pacientes a través de una atención odontológica profesional, honesta y apoyada en la planificación digital.",
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
    "El Estudio Odontológico Cunningham nace con el objetivo de mejorar la calidad de vida de sus pacientes a través de una atención odontológica profesional, honesta y apoyada en la planificación digital.",
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
    "Combinamos especialidades y especialistas para una rehabilitación cómoda y minuciosa, con un plan de tratamiento guiado por parámetros estéticos y una hoja de ruta clara.",
  tarjetas: [
    {
      titulo: "Atención integral",
      descripcion:
        "De la limpieza y el control preventivo a la rehabilitación completa sobre implantes. Todo el plan se resuelve en el mismo consultorio.",
      icono: "SebajAOsz6a8sWPvrYcEDu50c.svg",
    },
    {
      titulo: "Múltiples especialistas a cargo",
      descripcion:
        "Distintas especialidades trabajan de forma coordinada para brindar mejores resultados en cada etapa de tu rehabilitación.",
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
    src: "/images/estudio/DSC08092.jpg",
    alt: "Sala de espera con sillones, planta y bar de agua",
  },
  {
    src: "/images/estudio/DSC08120.jpg",
    alt: "Vista general de la sala de espera",
  },
  {
    src: "/images/estudio/DSC08098.jpg",
    alt: "Sillones de la sala de espera junto a un retrato",
  },
  {
    src: "/images/estudio/DSC08115.jpg",
    alt: "Rincón de lectura de la sala de espera",
  },
  {
    src: "/images/estudio/DSC08111.jpg",
    alt: "Bar de agua iluminado en la sala de espera",
  },
  {
    src: "/images/estudio/DSC08113.jpg",
    alt: "Detalle del mueble del bar de agua",
  },
  {
    src: "/images/estudio/DSC08063.jpg",
    alt: "Consultorio con sillón odontológico y microscopio",
  },
  {
    src: "/images/estudio/DSC08074.jpg",
    alt: "Consultorio luminoso con ventanal",
  },
  {
    src: "/images/estudio/DSC08075.jpg",
    alt: "Sillón odontológico y equipo de trabajo",
  },
  {
    src: "/images/estudio/DSC08047.jpg",
    alt: "Microscopio operatorio Newton",
  },
  {
    src: "/images/estudio/DSC08068.jpg",
    alt: "Cabezal del microscopio operatorio",
  },
  {
    src: "/images/estudio/DSC08084.jpg",
    alt: "Mesada y cajoneras del consultorio",
  },
  {
    src: "/images/estudio/DSC08053.jpg",
    alt: "Jeringas de composite organizadas por tono",
  },
  {
    src: "/images/estudio/DSC08054.jpg",
    alt: "Materiales Ultradent sobre la mesada",
  },
  {
    src: "/images/estudio/DSC08052.jpg",
    alt: "Piezas de mano del equipo odontológico",
  },
];

export interface Tecnologia extends ConFuente {
  /** Crop tighter: for wide shots where the subject is small in frame. */
  acercar?: boolean;
  nombre: string;
  descripcion: string;
  /** Optional until the clinic supplies a photo of this exact device. */
  imagen?: Imagen;
}

/**
 * Named equipment, not "última generación" — the direct correction of DOHO's
 * weakest differentiator (plan §3.4).
 */
export const TECNOLOGIA: Tecnologia[] = [
  {
    _fuente: "real",
    nombre: "Escáner intraoral Runyes 3DS V3 Pro",
    descripcion:
      "Registra digitalmente dientes y encías para planificar tratamientos, sin recurrir a las impresiones convencionales con pasta.",
    imagen: {
      src: "/images/tecnologia/runyes-3ds-v3-pro.webp",
      alt: "Escáner intraoral Runyes 3DS V3 Pro",
    },
  },
  {
    _fuente: "real",
    nombre: "Escáner intraoral Straumann SIRIOS",
    descripcion:
      "Captura registros digitales de dientes y encías como apoyo a la planificación de tratamientos restauradores e implantológicos.",
    imagen: {
      src: "/images/tecnologia/straumann-sirios.webp",
      alt: "Escáner intraoral Straumann SIRIOS",
    },
  },
  {
    _fuente: "real",
    nombre: "Escáner facial Omni (Italia)",
    descripcion:
      "Registra rasgos faciales para complementar la planificación digital de la sonrisa y valorar su integración estética.",
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
    titulo: "Evaluación inicial",
    descripcion:
      "Una primera evaluación de 40 minutos para revisar encías, piezas y mordida, y tomar los registros que hagan falta. Te explicamos el diagnóstico y el próximo paso, sin compromiso.",
    imagen: {
      src: "/images/estudio-16x9/paso-evaluacion.webp",
      alt: "Odontólogo revisando a un paciente en el sillón del consultorio",
    },
  },
  {
    titulo: "Plan",
    descripcion:
      "Te llevás el plan con lo que hay que hacer, en qué orden y cuánto lleva, separado en urgente, conveniente y opcional.",
    imagen: {
      src: "/images/estudio-16x9/paso-plan.webp",
      alt: "Plan de tratamiento revisado sobre un escaneo digital",
    },
  },
  {
    titulo: "Tratamiento",
    descripcion:
      "Escaneo intraoral en lugar de moldes, prueba en boca antes de lo definitivo y control de mordida en cada etapa.",
    imagen: {
      src: "/images/estudio-16x9/paso-tratamiento.webp",
      alt: "Escáner intraoral en mano junto al sillón odontológico",
    },
  },
  {
    titulo: "Controles",
    descripcion:
      "El tratamiento no termina cuando se cementa la última pieza. Quedan los controles que hacen que el trabajo dure.",
    imagen: {
      src: "/images/estudio-16x9/paso-controles.webp",
      alt: "Paciente revisando su sonrisa en un espejo durante un control",
    },
  },
];

/** Why us — the merged Values + Why us block (plan §3.2, block 08). */
export const DIFERENCIALES = [
  {
    titulo: "Múltiples especialistas a cargo",
    descripcion:
      "El equipo integra rehabilitación dentobucomaxilar, endodoncia, microcirugía apical, ortodoncia y periodoncia, con una planificación coordinada para cada caso.",
  },
  {
    titulo: "Ves el resultado antes de empezar",
    descripcion:
      "Diseño digital y prueba en boca antes de cualquier desgaste irreversible. Lo que no te convence se corrige en esa etapa.",
  },
  {
    titulo: "Equipamiento con nombre propio",
    descripcion:
      "Escáneres intraorales Runyes 3DS V3 Pro y Straumann SIRIOS, escáner facial Omni de Italia y láser para tejido blando.",
  },
  {
    titulo: "Acreditados por Invisalign",
    descripcion:
      "Estamos acreditados por Invisalign y definimos los parámetros estéticos del diseño tomando como referencia bibliográfica a Fradiani.",
  },
];
