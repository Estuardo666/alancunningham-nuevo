import type { ConFuente, RangoPrecio } from "./types";

/**
 * Price ranges. Every `desde` is `null` on purpose: the UI is built and renders
 * "$—" until the clinic validates the numbers (plan §6.3). Filling these in is
 * a data edit, not a UI change.
 */
export const PRECIOS: RangoPrecio[] = [
  { _fuente: "pendiente-validacion", tratamiento: "diseno-de-sonrisa", etiqueta: "Diseño de sonrisa (planificación digital)", desde: null, moneda: "ARS" },
  { _fuente: "pendiente-validacion", tratamiento: "carillas-de-porcelana", etiqueta: "Carilla de porcelana (por pieza)", desde: null, moneda: "ARS" },
  { _fuente: "pendiente-validacion", tratamiento: "blanqueamiento-dental", etiqueta: "Blanqueamiento dental", desde: null, moneda: "ARS" },
  { _fuente: "pendiente-validacion", tratamiento: "coronas-dentales", etiqueta: "Corona dental (por pieza)", desde: null, moneda: "ARS" },
  { _fuente: "pendiente-validacion", tratamiento: "incrustaciones-ceramicas", etiqueta: "Incrustación cerámica", desde: null, moneda: "ARS" },
  { _fuente: "pendiente-validacion", tratamiento: "incrustaciones-de-resina", etiqueta: "Incrustación de resina", desde: null, moneda: "ARS" },
  { _fuente: "pendiente-validacion", tratamiento: "cambio-de-amalgamas", etiqueta: "Cambio de amalgama (por pieza)", desde: null, moneda: "ARS" },
  { _fuente: "pendiente-validacion", tratamiento: "implantes-unitarios", etiqueta: "Implante unitario (implante + corona)", desde: null, moneda: "USD" },
  { _fuente: "pendiente-validacion", tratamiento: "rehabilitacion-sobre-implantes", etiqueta: "Rehabilitación sobre implantes", desde: null, moneda: "USD", nota: "El presupuesto depende del número de implantes y del tipo de prótesis." },
  { _fuente: "pendiente-validacion", tratamiento: "alineadores-invisibles", etiqueta: "Alineadores invisibles (tratamiento completo)", desde: null, moneda: "ARS" },
  { _fuente: "pendiente-validacion", tratamiento: "brackets", etiqueta: "Ortodoncia con brackets (tratamiento completo)", desde: null, moneda: "ARS" },
  { _fuente: "pendiente-validacion", tratamiento: "tratamiento-de-conducto", etiqueta: "Tratamiento de conducto", desde: null, moneda: "ARS" },
  { _fuente: "pendiente-validacion", tratamiento: "postes-y-reconstruccion", etiqueta: "Poste y reconstrucción", desde: null, moneda: "ARS" },
  { _fuente: "pendiente-validacion", tratamiento: "extracciones-dentales", etiqueta: "Extracción dental", desde: null, moneda: "ARS" },
  { _fuente: "pendiente-validacion", tratamiento: "frenectomia-laser", etiqueta: "Frenectomía láser", desde: null, moneda: "ARS" },
  { _fuente: "pendiente-validacion", tratamiento: "gingivectomia-laser", etiqueta: "Gingivectomía láser", desde: null, moneda: "ARS" },
  { _fuente: "pendiente-validacion", tratamiento: "retracciones-gingivales", etiqueta: "Tratamiento de retracción gingival", desde: null, moneda: "ARS" },
  { _fuente: "pendiente-validacion", tratamiento: "limpieza-profunda", etiqueta: "Limpieza profunda", desde: null, moneda: "ARS" },
  { _fuente: "pendiente-validacion", tratamiento: "restauraciones-caries", etiqueta: "Restauración de caries (por pieza)", desde: null, moneda: "ARS" },
];

export interface MedioDePago extends ConFuente {
  nombre: string;
  detalle: string;
  imagen?: string;
}

/**
 * Payment methods, reframed in positive terms (plan §4.6): what you can use
 * comes first, the surcharge condition comes after and stated once.
 */
export const MEDIOS_DE_PAGO: MedioDePago[] = [
  {
    _fuente: "real",
    nombre: "Transferencia bancaria",
    detalle: "Pago directo desde tu banco o billetera virtual.",
  },
  {
    _fuente: "real",
    nombre: "Mercado Pago",
    detalle: "Con dinero en cuenta, débito o crédito.",
  },
  {
    _fuente: "real",
    nombre: "Tarjeta de débito",
    detalle: "Todas las tarjetas de débito de plaza.",
  },
  {
    _fuente: "real",
    nombre: "Tarjeta de crédito",
    detalle: "Para tratamientos que se abonan en cuotas.",
  },
  {
    _fuente: "real",
    nombre: "Efectivo",
    detalle: "En pesos o en dólares, en el consultorio.",
  },
];

export const IMAGENES_PAGO = [
  {
    src: "/images/pago1_1.png",
    alt: "Medios de pago aceptados: transferencia bancaria, Mercado Pago y tarjeta de débito",
  },
  {
    src: "/images/pago2.png",
    alt: "Medios de pago aceptados: tarjetas de crédito",
  },
];

/** Stated once, after the available methods — never as the headline. */
export const CONDICIONES_PAGO: (ConFuente & { texto: string })[] = [
  {
    _fuente: "pendiente-validacion",
    texto:
      "Transferencia bancaria, Mercado Pago y tarjeta de débito llevan el 21% de IVA correspondiente.",
  },
  {
    _fuente: "pendiente-validacion",
    texto:
      "El pago con tarjeta de crédito tiene un recargo del 38% por costos de financiación.",
  },
  {
    _fuente: "pendiente-validacion",
    texto:
      "El presupuesto se entrega por escrito después de la consulta inicial y se sostiene por el plazo que allí se indica.",
  },
];

export function precioPorTratamiento(slug: string) {
  return PRECIOS.find((p) => p.tratamiento === slug);
}

/** Formats a range for display; `null` renders as the placeholder. */
export function formatearDesde(precio?: RangoPrecio) {
  if (!precio || precio.desde === null) return "$—";
  const formato = new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: precio.moneda,
    maximumFractionDigits: 0,
  });
  return formato.format(precio.desde);
}
