import type { Faq } from "./types";

/** Questions grouped by the topics patients need before booking. */
export const BLOQUES_FAQ = [
  "Tratamientos",
  "Medios de pago",
  "Primera consulta",
  "Turismo odontológico",
] as const;

export const FAQS: Faq[] = [
  // ---- Tratamientos ----
  {
    _fuente: "ia",
    bloque: "Tratamientos",
    pregunta: "¿Qué tratamientos hacen en el consultorio?",
    respuesta:
      "Trabajamos en siete áreas: estética dental y diseño de sonrisa, rehabilitación oral y prótesis, implantes, ortodoncia, endodoncia, cirugía y periodoncia láser, y odontología general y prevención. Cada una tiene su página con el detalle del procedimiento.",
  },
  {
    _fuente: "ia",
    bloque: "Tratamientos",
    pregunta: "¿Cuánto dura un diseño de sonrisa?",
    respuesta:
      "Entre cuatro y seis semanas en la mayoría de los casos, contando la planificación digital, la prueba en boca y la ejecución. Los casos que sólo requieren blanqueamiento y retoques se resuelven en dos o tres sesiones.",
  },
  {
    _fuente: "ia",
    bloque: "Tratamientos",
    pregunta: "¿Hay que desgastar los dientes para poner carillas?",
    respuesta:
      "No siempre. Hay casos que se resuelven sin desgaste o con un desgaste mínimo del esmalte. La decisión sale de la planificación digital y de la prueba en boca, que se hacen antes de tocar nada.",
  },
  {
    _fuente: "ia",
    bloque: "Tratamientos",
    pregunta: "¿Duele el tratamiento de conducto?",
    respuesta:
      "El procedimiento se hace con anestesia local. Lo que duele es la inflamación previa: la mayoría de los pacientes llega con dolor y se va sin él. Puede quedar molestia al morder durante unos días.",
  },
  {
    _fuente: "ia",
    bloque: "Tratamientos",
    pregunta: "¿Qué tecnología usan?",
    respuesta:
      "Escáner intraoral Runyes 3DS para registros digitales sin pasta de impresión, láser para procedimientos de tejido blando y planificación digital para diseño de sonrisa y para la posición de los implantes.",
  },
  {
    _fuente: "ia",
    bloque: "Tratamientos",
    pregunta: "¿Alineadores o brackets?",
    respuesta:
      "Depende del caso. Los alineadores resuelven muy bien apiñamientos leves a moderados y espacios; los brackets controlan mejor los movimientos complejos y no dependen de las horas de uso. Se define por diagnóstico, no por preferencia.",
  },
  {
    _fuente: "ia",
    bloque: "Tratamientos",
    pregunta: "¿Qué pasa si aprieto los dientes de noche?",
    respuesta:
      "El bruxismo es la principal causa de fractura de restauraciones y carillas. Cuando está presente, la placa de descarga forma parte del tratamiento: no es un accesorio opcional.",
  },
  // ---- Medios de pago ----
  {
    _fuente: "real",
    bloque: "Medios de pago",
    pregunta: "¿Qué medios de pago aceptan?",
    respuesta:
      "Efectivo en pesos o dólares, transferencia bancaria, Mercado Pago, tarjeta de débito y tarjeta de crédito. La modalidad se coordina al definir el plan.",
  },
  // ---- Primera consulta ----
  {
    _fuente: "ia",
    bloque: "Primera consulta",
    pregunta: "¿Cómo pido un turno?",
    respuesta:
      "Por WhatsApp al +54 9 11 2156 1445 o completando el formulario del sitio. Si escribís por el formulario, te contactamos para coordinar día y horario.",
  },
  {
    _fuente: "ia",
    bloque: "Primera consulta",
    pregunta: "¿Qué pasa en la primera consulta?",
    respuesta:
      "Dura alrededor de 40 minutos. Se revisa la boca completa, se evalúan encías y piezas, se toman los registros que hagan falta y salís con un plan de tratamiento por escrito.",
  },
  {
    _fuente: "ia",
    bloque: "Primera consulta",
    pregunta: "¿Tengo que llevar algo?",
    respuesta:
      "Si tenés radiografías o estudios recientes, traelos. Si estás en tratamiento médico o tomás medicación, contanoslo en la consulta.",
  },
  {
    _fuente: "real",
    bloque: "Primera consulta",
    pregunta: "¿Dónde queda el consultorio?",
    respuesta:
      "En Manuel Ugarte 2548, 6.º A, barrio de Núñez, Ciudad de Buenos Aires. Atendemos también a pacientes de Belgrano, Saavedra, Colegiales, Coghlan, Vicente López y Olivos.",
  },
  {
    _fuente: "real",
    bloque: "Primera consulta",
    pregunta: "¿Cuál es el horario de atención?",
    respuesta:
      "Lunes a sábado de 9 a 20 h, con turno previo. Los turnos se coordinan por WhatsApp.",
  },
  // ---- Turismo odontológico ----
  {
    _fuente: "ia",
    bloque: "Turismo odontológico",
    pregunta: "¿Atienden pacientes del exterior?",
    respuesta:
      "Sí. El programa de turismo odontológico está pensado para argentinos que viven afuera, extranjeros y pacientes del interior. La evaluación arranca online, antes de que compres el pasaje.",
  },
  {
    _fuente: "ia",
    bloque: "Turismo odontológico",
    pregunta: "¿Cuántos días tengo que quedarme?",
    respuesta:
      "Depende del tratamiento. En la página de turismo odontológico hay una tabla con sesiones y días de estadía estimados por tipo de tratamiento, para que puedas planificar el viaje.",
  },
  {
    _fuente: "ia",
    bloque: "Turismo odontológico",
    pregunta: "¿Qué incluye el programa?",
    respuesta:
      "Coordinación del traslado al consultorio, orientación de transporte, estadía, turismo y gastronomía. El tratamiento y los servicios de viaje se presupuestan por separado.",
  },
];

export function faqsPorBloque(bloque: string) {
  return FAQS.filter((f) => f.bloque === bloque);
}

/**
 * The questions shown on the home — the most useful answers without
 * requiring another click.
 */
export const FAQS_HOME: Faq[] = [
  FAQS.find((f) => f.pregunta.startsWith("¿Qué tecnología usan"))!,
  FAQS.find((f) => f.pregunta.startsWith("¿Qué medios de pago"))!,
  FAQS.find((f) => f.pregunta.startsWith("¿Qué pasa en la primera consulta"))!,
  FAQS.find((f) => f.pregunta.startsWith("¿Cuánto dura un diseño de sonrisa"))!,
  FAQS.find((f) => f.pregunta.startsWith("¿Atienden pacientes del exterior"))!,
];
