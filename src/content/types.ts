/**
 * Content layer shared types.
 *
 * Every record that is not verified with the clinic carries a `_fuente` flag so
 * `npm run audit:contenido` can list what still needs validation before deploy.
 */

/** Provenance of a piece of content. */
export type Fuente = "real" | "ia" | "pendiente-validacion";

export interface ConFuente {
  /** Where this content comes from. `ia` and `pendiente-validacion` block prod. */
  _fuente: Fuente;
}

export interface Faq extends ConFuente {
  pregunta: string;
  respuesta: string;
  /** Grouping used by /faq. */
  bloque?: string;
}

export interface Paso {
  titulo: string;
  descripcion: string;
}

/**
 * A gallery tile. With `video` the tile plays a clip and `src` becomes its
 * poster frame, so photographs and video share one content shape.
 */
export interface MedioGaleria extends Imagen {
  /** Path to an mp4/webm. When present the tile renders a `<video>`. */
  video?: string;
}

export interface Imagen {
  src: string;
  alt: string;
}

/** Visual asset for rails that may mix still images and silent autoplay videos. */
export interface MediaAsset extends Imagen {
  tipo?: "image" | "video";
  poster?: string;
}

export interface RangoPrecio extends ConFuente {
  /** Treatment slug this range belongs to. */
  tratamiento: string;
  etiqueta: string;
  /** `null` renders as "$—" until the clinic validates the number. */
  desde: number | null;
  moneda: "ARS" | "USD";
  nota?: string;
}
