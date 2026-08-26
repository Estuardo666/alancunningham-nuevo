import type { ConFuente } from "./types";

export interface Cobertura extends ConFuente {
  nombre: string;
  /** What the coverage typically reaches. Never asserted as fact until validated. */
  alcance: string;
}

/**
 * Coverage list. Every entry is flagged `pendiente-validacion` on purpose:
 * claiming a coverage that does not exist is a legal and reputational problem
 * (plan §6.3). The UI ships; the list is confirmed with the clinic before prod.
 */
export const COBERTURAS: Cobertura[] = [
  { _fuente: "pendiente-validacion", nombre: "OSDE", alcance: "Consulta a confirmar con la clínica." },
  { _fuente: "pendiente-validacion", nombre: "Swiss Medical", alcance: "Consulta a confirmar con la clínica." },
  { _fuente: "pendiente-validacion", nombre: "Galeno", alcance: "Consulta a confirmar con la clínica." },
  { _fuente: "pendiente-validacion", nombre: "Medifé", alcance: "Consulta a confirmar con la clínica." },
  { _fuente: "pendiente-validacion", nombre: "OMINT", alcance: "Consulta a confirmar con la clínica." },
  { _fuente: "pendiente-validacion", nombre: "Premedic", alcance: "Consulta a confirmar con la clínica." },
];

export const COMO_CONSULTAR: string[] = [
  "Escribinos por WhatsApp con el nombre de tu cobertura y tu plan.",
  "Te confirmamos qué alcanza tu plan y qué queda a cargo tuyo, por escrito.",
  "Si tu cobertura no alcanza el tratamiento, te pasamos el presupuesto particular con los medios de pago disponibles.",
];

/** Shown when there is nothing validated yet, instead of inventing a list. */
export const AVISO_COBERTURA =
  "Estamos actualizando el listado de coberturas vigentes. Escribinos con el nombre de tu obra social o prepaga y te confirmamos tu caso el mismo día.";
