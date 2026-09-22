import type { ConFuente } from "./types";

export interface MedioDePago extends ConFuente {
  nombre: string;
  detalle: string;
  imagen?: string;
}

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
    detalle: "Consultá las condiciones al coordinar tu tratamiento.",
  },
  {
    _fuente: "real",
    nombre: "Efectivo",
    detalle: "En pesos o en dólares, en el estudio.",
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
