import type { Faq } from "./types";

/** 25 questions in 5 blocks — the DOHO model (plan §4.8). */
export const BLOQUES_FAQ = [
  "Tratamientos",
  "Precios y pagos",
  "Obras sociales",
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
      "Escáner intraoral 3Shape para registros digitales sin pasta de impresión, láser para procedimientos de tejido blando, y planificación digital para diseño de sonrisa y para la posición de los implantes.",
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
  // ---- Precios y pagos ----
  {
    _fuente: "pendiente-validacion",
    bloque: "Precios y pagos",
    pregunta: "¿Cuánto cuesta un implante dental?",
    respuesta:
      "El presupuesto de un implante contempla dos etapas: el implante y la corona. Los rangos orientativos están en la página de precios y el presupuesto definitivo se entrega por escrito después de la consulta inicial, que es sin cargo.",
  },
  {
    _fuente: "pendiente-validacion",
    bloque: "Precios y pagos",
    pregunta: "¿Cuánto cuestan las carillas de porcelana?",
    respuesta:
      "Se presupuestan por pieza, así que el total depende de cuántas piezas entren en el plan. En la página de precios están los rangos desde y en la consulta inicial se te entrega el detalle por escrito.",
  },
  {
    _fuente: "real",
    bloque: "Precios y pagos",
    pregunta: "¿Qué medios de pago aceptan?",
    respuesta:
      "Efectivo en pesos o en dólares, transferencia bancaria, Mercado Pago, tarjeta de débito y tarjeta de crédito. Las condiciones de cada medio están detalladas en la página de precios.",
  },
  {
    _fuente: "pendiente-validacion",
    bloque: "Precios y pagos",
    pregunta: "¿Se puede pagar en cuotas?",
    respuesta:
      "Sí, con tarjeta de crédito. En la página de precios está la condición de financiación que aplica a ese medio de pago.",
  },
  {
    _fuente: "ia",
    bloque: "Precios y pagos",
    pregunta: "¿El presupuesto tiene costo?",
    respuesta:
      "No. La consulta inicial es sin cargo e incluye evaluación, diagnóstico y plan de tratamiento por escrito, sin compromiso de contratar nada.",
  },
  {
    _fuente: "ia",
    bloque: "Precios y pagos",
    pregunta: "¿Se puede pagar por etapas?",
    respuesta:
      "En tratamientos largos el plan se organiza en etapas y cada etapa se abona al realizarse. Eso se define junto con el plan, antes de empezar.",
  },
  // ---- Obras sociales ----
  {
    _fuente: "pendiente-validacion",
    bloque: "Obras sociales",
    pregunta: "¿Trabajan con obras sociales o prepagas?",
    respuesta:
      "Estamos actualizando el listado de coberturas vigentes. Escribinos por WhatsApp con el nombre de tu obra social o prepaga y tu plan, y te confirmamos tu caso el mismo día.",
  },
  {
    _fuente: "pendiente-validacion",
    bloque: "Obras sociales",
    pregunta: "¿Qué cubre normalmente una prepaga en odontología?",
    respuesta:
      "En general las coberturas alcanzan prestaciones básicas como consulta, limpieza y restauraciones simples, y dejan fuera o cubren parcialmente los tratamientos estéticos, la ortodoncia y los implantes. El alcance exacto depende de tu plan.",
  },
  {
    _fuente: "ia",
    bloque: "Obras sociales",
    pregunta: "¿Cómo consulto por mi cobertura?",
    respuesta:
      "Mandanos el nombre de la obra social y del plan por WhatsApp. Te respondemos qué alcanza tu cobertura, qué queda a cargo tuyo y con qué medios de pago se puede abonar la diferencia.",
  },
  {
    _fuente: "ia",
    bloque: "Obras sociales",
    pregunta: "¿Puedo atenderme como paciente particular?",
    respuesta:
      "Sí. La mayor parte de los tratamientos estéticos y de rehabilitación se realizan de forma particular, con presupuesto por escrito y los medios de pago disponibles.",
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
      "Dura alrededor de 40 minutos y es sin cargo. Se revisa la boca completa, se evalúan encías y piezas, se toman los registros que hagan falta y salís con un plan de tratamiento por escrito.",
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
      "En Arribeños 2659 5c, barrio de Núñez, Ciudad de Buenos Aires. Atendemos también a pacientes de Belgrano, Saavedra, Colegiales, Coghlan, Vicente López y Olivos.",
  },
  {
    _fuente: "real",
    bloque: "Primera consulta",
    pregunta: "¿Cuál es el horario de atención?",
    respuesta:
      "Lunes a viernes de 9 a 19 h y sábados de 9 a 13 h. Los turnos se coordinan con anticipación por WhatsApp.",
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
 * The six questions shown on the home — price and coverage visible without
 * interaction (plan §3.2, block 13).
 */
export const FAQS_HOME: Faq[] = [
  FAQS.find((f) => f.pregunta.startsWith("¿Trabajan con obras sociales"))!,
  FAQS.find((f) => f.pregunta.startsWith("¿Cuánto cuesta un implante"))!,
  FAQS.find((f) => f.pregunta.startsWith("¿Qué medios de pago"))!,
  FAQS.find((f) => f.pregunta.startsWith("¿Qué pasa en la primera consulta"))!,
  FAQS.find((f) => f.pregunta.startsWith("¿Cuánto dura un diseño de sonrisa"))!,
  FAQS.find((f) => f.pregunta.startsWith("¿Atienden pacientes del exterior"))!,
];
