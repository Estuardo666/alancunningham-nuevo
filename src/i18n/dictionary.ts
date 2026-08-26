/**
 * ES → EN. The key is the Spanish string exactly as it is written in the
 * component or in `src/content`, with its whitespace collapsed (`normalizar`).
 * A key that is missing here simply stays in Spanish.
 *
 * English is deliberately shorter than the Spanish it replaces: the layout is
 * built around Spanish line lengths, and a literal translation overflows the
 * hero headline, the step pills and the card titles. Wherever the two languages
 * fight, English wins on brevity, not on symmetry.
 */
export const EN: Record<string, string> = {
  // ─── Navigation and global CTAs ────────────────────────────────────────────
  Nosotros: "About",
  Tratamientos: "Treatments",
  Casos: "Cases",
  "Turismo odontológico": "Dental tourism",
  Precios: "Pricing",
  Contacto: "Contact",
  Inicio: "Home",
  "Agendá tu consulta": "Book a visit",
  "Navegación principal": "Main navigation",
  "Abrir menú": "Open menu",
  "Cerrar menú": "Close menu",
  "Escribinos por WhatsApp": "Message us on WhatsApp",
  "Migas de pan": "Breadcrumb",
  "Redes y ubicación": "Social and location",

  // ─── Hero ──────────────────────────────────────────────────────────────────
  "Odontología con planificación digital": "Digitally planned dentistry",
  "Implantes y diseño de sonrisa en Núñez":
    "Implants and smile design in Núñez",
  "Planificamos en digital y te mostramos el resultado antes de tocar un diente.":
    "We plan it digitally and show you the result before touching a tooth.",
  "Ver precios y medios de pago": "See prices and payment",
  "¿Trabajan con mi obra social?": "Do you take my insurance?",

  // ─── About block ───────────────────────────────────────────────────────────
  "Sobre el consultorio": "About the practice",
  "Combinamos un especialista a cargo de cada caso, planificación digital y un plan de tratamiento por escrito, para que sepas qué necesitás, cuánto lleva y cuánto cuesta antes de empezar.":
    "One specialist on every case, digital planning and a written treatment plan: you know what you need, how long it takes and what it costs before we start.",
  "Conocé el consultorio": "See the practice",
  "Ver casos reales": "See real cases",
  "Antes y después": "Before and after",
  "Atención integral": "Full-scope care",
  "De la limpieza y el control preventivo a la rehabilitación completa sobre implantes. Todo el plan se resuelve en el mismo consultorio.":
    "From cleanings and check-ups to full implant rehabilitation, all under one roof.",
  "Un especialista a cargo": "One specialist in charge",
  "Rehabilitación dentobucomaxilar, docencia en la UBA y oficio de técnico de laboratorio. La misma persona planifica y ejecuta tu caso.":
    "Oral rehabilitation, teaching at UBA and lab-technician training. The same person plans and does your case.",
  "Plan por escrito": "Written plan",
  "Te llevás qué hay que hacer y en qué orden, con lo urgente separado de lo conveniente y de lo opcional. Sin presión y sin tratamientos inventados.":
    "What to do and in what order, with urgent, advisable and optional kept apart. No pressure, no invented treatments.",

  // ─── Ticker · treatment pillars ────────────────────────────────────────────
  "Áreas de tratamiento": "Treatment areas",
  "Estética dental y diseño de sonrisa": "Cosmetic dentistry",
  "Rehabilitación oral y prótesis": "Oral rehabilitation",
  "Implantes dentales": "Dental implants",
  Ortodoncia: "Orthodontics",
  Endodoncia: "Root canal",
  "Cirugía y periodoncia láser": "Laser gum surgery",
  "Odontología general y prevención": "General dentistry",
  "Diseño de sonrisa digital, carillas de porcelana y blanqueamiento. Vas a ver el resultado antes de empezar el tratamiento.":
    "Digital smile design, porcelain veneers and whitening. You see the result before we start.",
  "Coronas, incrustaciones cerámicas y de resina, y reemplazo de amalgamas. Recuperás la función de masticar y la estética al mismo tiempo.":
    "Crowns, ceramic and resin inlays, amalgam replacement. Chewing and looks recovered together.",
  "Reemplazamos la pieza perdida sin tocar los dientes de al lado, con planificación digital de la posición y de la corona final.":
    "We replace the missing tooth without touching its neighbours, planning position and crown digitally.",
  "Alineadores invisibles y brackets. Planificamos el movimiento en digital y te mostramos a dónde va a llegar cada diente.":
    "Clear aligners and braces. We plan each movement digitally and show you where every tooth lands.",
  "Tratamiento de conducto y reconstrucción con postes. El objetivo siempre es conservar tu diente, no reemplazarlo.":
    "Root canal and post build-ups. The goal is always to keep your tooth, not replace it.",
  "Extracciones, frenectomía, gingivectomía y tratamiento de retracciones. Trabajamos con láser para un postoperatorio más corto.":
    "Extractions, frenectomy, gingivectomy and recession treatment, with laser for a shorter recovery.",
  "Limpieza profunda, restauraciones de caries y controles. Es la base sobre la que se apoya todo lo demás.":
    "Deep cleaning, fillings and check-ups. The base everything else rests on.",

  // ─── Cases ─────────────────────────────────────────────────────────────────
  "Resultados reales": "Real results",
  "Casos tratados en el consultorio": "Cases treated at the practice",
  "Tres casos reales con el tratamiento indicado y su duración.":
    "Three real cases, with the treatment used and how long it took.",
  "Ver todos los casos clínicos": "See all clinical cases",
  "Rehabilitación oral": "Oral rehabilitation",
  "Diseño de sonrisa": "Smile design",
  "Blanqueamiento y alineación": "Whitening and alignment",
  "Plan por etapas": "Staged plan",
  "Plan estético en pocas semanas": "Cosmetic plan in weeks",
  Antes: "Before",
  Después: "After",

  // ─── Team ──────────────────────────────────────────────────────────────────
  "Quién te va a atender": "Who will treat you",
  "El profesional detrás de cada tratamiento":
    "The professional behind every treatment",

  // ─── Price and coverage ────────────────────────────────────────────────────
  "Precio y cobertura": "Price and coverage",
  "Cuánto cuesta y con qué se paga, sin tener que preguntar":
    "What it costs and how you pay, without asking",
  "Los rangos orientativos por tratamiento, los medios de pago y las coberturas, visibles acá y en detalle en su propia página.":
    "Guide prices per treatment, payment methods and coverage, summarised here and detailed on their own page.",
  "Rangos orientativos": "Guide prices",
  "Ver precios y condiciones": "See prices and terms",
  "Medios de pago y coberturas": "Payment and coverage",
  "Consultar tu obra social": "Check your insurance",
  "Rango orientativo. El presupuesto definitivo se entrega por escrito luego de la evaluación inicial.":
    "Guide range. The final quote is given in writing after the first visit.",
  "Estamos actualizando los rangos publicados. El presupuesto definitivo se entrega por escrito luego de la evaluación inicial.":
    "Published ranges are being updated. The final quote is given in writing after the first visit.",
  Efectivo: "Cash",
  "Transferencia bancaria": "Bank transfer",
  "Tarjeta de débito": "Debit card",
  "Tarjeta de crédito": "Credit card",

  // ─── Treatments carousel ───────────────────────────────────────────────────
  "Nuestros tratamientos": "Our treatments",
  "Tratamiento experto para cada necesidad": "Expert care for every need",
  "Ver todos los tratamientos": "See all treatments",
  "Ver tratamiento": "See treatment",
  Anterior: "Previous",
  Siguiente: "Next",
  Entrar: "Open",

  // ─── Approach ──────────────────────────────────────────────────────────────
  "Nuestro enfoque": "Our approach",
  "Cómo trabajamos, paso por paso": "How we work, step by step",
  "De la evaluación inicial al control de mantenimiento: qué pasa en cada etapa y qué te llevás de cada una.":
    "From the first visit to maintenance check-ups: what happens at each stage.",
  "Evaluación inicial": "First visit",
  "Una primera evaluación de 40 minutos para revisar encías, piezas y mordida, y tomar los registros que hagan falta. Te explicamos el diagnóstico y el próximo paso, sin compromiso.":
    "A 40-minute check of gums, teeth and bite, plus any records needed. You get the diagnosis and the next step, with no commitment.",
  Plan: "Plan",
  "Te llevás el plan con lo que hay que hacer, en qué orden, cuánto lleva y cuánto cuesta. Separado en urgente, conveniente y opcional.":
    "You leave with what to do, in what order, how long it takes and what it costs. Split into urgent, advisable and optional.",
  Tratamiento: "Treatment",
  "Escaneo intraoral en lugar de moldes, prueba en boca antes de lo definitivo y control de mordida en cada etapa.":
    "Intraoral scanning instead of impressions, a try-in before anything final, and bite checks at every stage.",
  Controles: "Check-ups",
  "El tratamiento no termina cuando se cementa la última pieza. Quedan los controles que hacen que el trabajo dure.":
    "Treatment does not end with the last crown. The check-ups are what make the work last.",

  // ─── Reviews ───────────────────────────────────────────────────────────────
  "Opiniones de pacientes": "Patient reviews",
  "Lo que dicen quienes se atendieron acá": "What our patients say",
  "Ver reseñas anteriores": "Previous reviews",
  "Ver más reseñas": "More reviews",
  "Cargando reseñas de Google": "Loading Google reviews",
  "No se pudieron cargar las reseñas.": "Reviews could not be loaded.",
  "Ver calificación y reseñas reales en Google":
    "See the rating and real reviews on Google",

  // ─── Facilities ────────────────────────────────────────────────────────────
  "El consultorio": "The practice",
  "Un consultorio pensado para cada detalle":
    "A practice designed down to the detail",
  "Conocé los espacios y el equipamiento que usamos para planificar y acompañar cada tratamiento.":
    "The rooms and the equipment we use to plan and follow every treatment.",
  "Instalaciones del consultorio": "Practice facilities",
  "Ver la tecnología": "See the technology",

  // ─── Dental tourism ────────────────────────────────────────────────────────
  "¿Venís de otra provincia o del exterior?":
    "Coming from abroad or another province?",
  "La evaluación arranca online: nos mandás fotos y estudios, y te decimos si el caso se resuelve en los días que vas a estar en Buenos Aires. Llegás con el presupuesto por escrito y la agenda armada.":
    "It starts online: send photos and X-rays, and we tell you whether your case fits the days you will be in Buenos Aires. You arrive with a written quote and the dates booked.",
  "Publicamos además los tiempos de estadía estimados por tratamiento, que es el dato que hace falta para planificar el viaje y que casi ninguna clínica publica.":
    "We also publish how many days each treatment takes — the one figure you need to plan a trip, and one almost no clinic publishes.",
  "Cuántos días necesitás": "How many days you need",
  "Ver la tabla completa y cómo funciona": "See the full table",
  "Consulta online": "Online consultation",
  "Plan y presupuesto": "Plan and quote",
  "Coordinación del viaje": "Trip coordination",
  "Blanqueamiento dental": "Teeth whitening",
  "Carillas de porcelana": "Porcelain veneers",
  "Diseño de sonrisa completo": "Full smile design",
  "Corona dental": "Dental crown",
  "Tratamiento de conducto": "Root canal treatment",
  "3 a 5 días": "3 to 5 days",
  "10 a 14 días": "10 to 14 days",
  "12 a 18 días": "12 to 18 days",
  "7 a 10 días": "7 to 10 days",
  "4 a 7 días": "4 to 7 days",

  // ─── FAQ ───────────────────────────────────────────────────────────────────
  "Preguntas frecuentes": "FAQ",
  "Precios, coberturas y primera consulta": "Prices, coverage, first visit",
  "¿Tenés otra consulta? Escribinos y te respondemos el mismo día.":
    "Another question? Message us and we answer the same day.",
  "Ver todas las preguntas": "See all questions",
  "¿Trabajan con obras sociales o prepagas?":
    "Do you work with insurance plans?",
  "Estamos actualizando el listado de coberturas vigentes. Escribinos por WhatsApp con el nombre de tu obra social o prepaga y tu plan, y te confirmamos tu caso el mismo día.":
    "We are updating the list of accepted plans. Send us your insurer and plan on WhatsApp and we confirm the same day.",
  "¿Cuánto cuesta un implante dental?": "What does an implant cost?",
  "El presupuesto de un implante contempla dos etapas: el implante y la corona. Los rangos orientativos están en la página de precios y el presupuesto definitivo se entrega por escrito después de la consulta inicial, que es sin cargo.":
    "An implant is quoted in two stages, the implant and the crown. Guide ranges are on the pricing page; the final quote is written up after the free first visit.",
  "¿Qué medios de pago aceptan?": "Which payment methods do you take?",
  "Efectivo en pesos o en dólares, transferencia bancaria, Mercado Pago, tarjeta de débito y tarjeta de crédito. Las condiciones de cada medio están detalladas en la página de precios.":
    "Cash in pesos or dollars, bank transfer, Mercado Pago, debit and credit card. Terms for each are on the pricing page.",
  "¿Qué pasa en la primera consulta?": "What happens at the first visit?",
  "Dura alrededor de 40 minutos y es sin cargo. Se revisa la boca completa, se evalúan encías y piezas, se toman los registros que hagan falta y salís con un plan de tratamiento por escrito.":
    "It takes about 40 minutes and is free. We check the whole mouth, gums and teeth, take any records needed, and you leave with a written plan.",
  "¿Cuánto dura un diseño de sonrisa?": "How long does a smile design take?",
  "Entre cuatro y seis semanas en la mayoría de los casos, contando la planificación digital, la prueba en boca y la ejecución. Los casos que sólo requieren blanqueamiento y retoques se resuelven en dos o tres sesiones.":
    "Four to six weeks in most cases, including digital planning, the try-in and the work itself. Whitening-only cases take two or three sessions.",
  "¿Atienden pacientes del exterior?": "Do you treat patients from abroad?",
  "Sí. El programa de turismo odontológico está pensado para argentinos que viven afuera, extranjeros y pacientes del interior. La evaluación arranca online, antes de que compres el pasaje.":
    "Yes. Our dental tourism programme is built for expats, foreign patients and people from other provinces. The assessment starts online, before you book a flight.",

  // ─── Blog ──────────────────────────────────────────────────────────────────
  "Lo que conviene saber antes de decidir": "Worth knowing before you decide",
  "Ver todos los artículos": "See all articles",
  "Leer artículo": "Read article",

  // ─── Footer ────────────────────────────────────────────────────────────────
  "Empecemos por tu próximo paso": "Let us start with your next step",
  "Contanos qué necesitás. Salís con un plan claro y un presupuesto por escrito.":
    "Tell us what you need. You leave with a clear plan and a written quote.",
  Secciones: "Sections",
  Información: "Information",
  "Compará opciones": "Compare options",
  "Casos clínicos": "Clinical cases",
  "Precios y medios de pago": "Prices and payment",
  "Obras sociales": "Insurance",
  "Dentista en Núñez": "Dentist in Núñez",
  "Lunes a viernes de 9 a 19 h · Sábados de 9 a 13 h":
    "Monday to Friday 9–19 h · Saturday 9–13 h",
  "Todos los derechos reservados.": "All rights reserved.",
  "Carillas o coronas": "Veneers or crowns",
  "Alineadores o brackets": "Aligners or braces",
  "Implantes o prótesis": "Implants or dentures",
  // ─── Prices, payment methods and coverage rows ─────────────────────────────
  "Precio orientativo": "Guide price",
  Desde: "From",
  Moneda: "Currency",
  "Ver todos los precios y medios de pago": "See all prices and payment",
  "Diseño de sonrisa (planificación digital)":
    "Smile design (digital planning)",
  "Carilla de porcelana (por pieza)": "Porcelain veneer (per tooth)",
  "Corona dental (por pieza)": "Dental crown (per tooth)",
  "Implante unitario (implante + corona)":
    "Single implant (implant + crown)",
  "Alineadores invisibles (tratamiento completo)":
    "Clear aligners (full treatment)",
  "Ortodoncia con brackets (tratamiento completo)":
    "Braces (full treatment)",
  "Limpieza profunda": "Deep cleaning",
  "Rehabilitación sobre implantes": "Implant-supported rehabilitation",
  "Restauración de caries (por pieza)": "Filling (per tooth)",
  "El presupuesto depende del número de implantes y del tipo de prótesis.":
    "The quote depends on how many implants and which type of prosthesis.",
  "Pago directo desde tu banco o billetera virtual.":
    "Straight from your bank or digital wallet.",
  "Con dinero en cuenta, débito o crédito.":
    "With account balance, debit or credit.",
  "Todas las tarjetas de débito de plaza.": "All local debit cards.",
  "Para tratamientos que se abonan en cuotas.":
    "For treatments paid in instalments.",
  "En pesos o en dólares, en el consultorio.":
    "In pesos or dollars, at the practice.",

  // ─── Cards and shared affordances ──────────────────────────────────────────
  "Ver el caso": "See the case",
  "Comparar antes y después": "Compare before and after",
  reseñas: "reviews",
  "Estética dental": "Cosmetic dentistry",
  Prevención: "Prevention",
  "Primera visita": "First visit",
  Tecnología: "Technology",

  // ─── Intent cards ──────────────────────────────────────────────────────────
  "Obras sociales y prepagas": "Insurance and health plans",
  "Para quien quiere saber cuánto cuesta": "If you want to know the cost",
  "Para quien tiene cobertura": "If you have coverage",
  "Para quien compara: qué me conviene": "If you are comparing options",
  "Rangos orientativos por tratamiento, medios de pago disponibles y condiciones, en una sola página.":
    "Guide ranges per treatment, payment methods and terms, on one page.",
  "Cómo consultar tu plan, qué suele cubrir una prepaga en odontología y qué queda a cargo tuyo.":
    "How to check your plan, what dental insurance usually covers and what you pay.",
  "Cuánto diente conserva cada opción, en qué casos se indica una u otra y qué esperar de cada una.":
    "How much tooth each option keeps, when each is indicated and what to expect.",
  "Qué resuelve mejor cada técnica, cuánto pesa la disciplina de uso y cómo se decide por diagnóstico.":
    "What each technique solves best, how much wear time matters, and how the call is made.",
  "Qué implica cada solución para los dientes vecinos, para el hueso y para el mantenimiento a largo plazo.":
    "What each solution means for neighbouring teeth, for bone and for long-term upkeep.",
  // ─── The professional ──────────────────────────────────────────────────────
  "Especialista en rehabilitación dentobucomaxilar":
    "Specialist in oral rehabilitation",
  "Alan Cunningham es odontólogo, especialista en rehabilitación dentobucomaxilar y docente de la Universidad de Buenos Aires. Es el titular de Smile Design Center, el consultorio de Arribeños 2659, en Núñez.":
    "Alan Cunningham is a dentist, a specialist in oral rehabilitation and a lecturer at the University of Buenos Aires. He owns Smile Design Center, the practice at Arribeños 2659, in Núñez.",
  "Su formación tiene una particularidad que se nota en el trabajo diario: además de odontólogo es técnico de laboratorio. Eso significa que conoce de primera mano cómo se fabrica una corona, una carilla o una prótesis, y no sólo cómo se indica. La distancia entre lo que se diseña en el consultorio y lo que llega terminado desde el laboratorio se acorta cuando la misma persona entiende los dos lados del proceso.":
    "His training has one detail that shows in daily work: he is also a dental technician. He knows first-hand how a crown, a veneer or a prosthesis is made, not only how it is prescribed — and that closes the gap between what is designed in the chair and what comes back from the lab.",
  "Su práctica se concentra en rehabilitación oral, implantes y estética dental, con un criterio conservador: se desgasta lo mínimo indispensable, se conserva todo lo que sea conservable y cada plan se entrega por escrito, con lo urgente separado de lo conveniente y de lo opcional.":
    "His work centres on oral rehabilitation, implants and cosmetic dentistry, with a conservative rule: grind the minimum, keep whatever can be kept, and put every plan in writing, with urgent, advisable and optional kept apart.",
  Odontólogo: "Dentist",
  "Especialista en rehabilitación oral y prótesis":
    "Specialist in oral rehabilitation and prosthetics",
  "Técnico de laboratorio dental": "Dental laboratory technician",
  "Docente de la Universidad de Buenos Aires (UBA)":
    "Lecturer at the University of Buenos Aires",

  // ─── Payment conditions and case durations ─────────────────────────────────
  "Transferencia bancaria, Mercado Pago y tarjeta de débito llevan el 21% de IVA correspondiente.":
    "Bank transfer, Mercado Pago and debit card carry the 21% VAT.",
  "El pago con tarjeta de crédito tiene un recargo del 38% por costos de financiación.":
    "Credit card payments carry a 38% financing surcharge.",
  "El presupuesto se entrega por escrito después de la consulta inicial y se sostiene por el plazo que allí se indica.":
    "The quote is given in writing after the first visit and holds for the period stated on it.",
  "Tratamiento en etapas: primero alinear, después aclarar":
    "Staged treatment: align first, whiten after",
};
