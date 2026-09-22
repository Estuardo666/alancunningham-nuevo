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
  "Estudio Odontológico Cunningham": "Cunningham Dental Studio",
  "Diseño de sonrisa e implantes guiados con planificación digital en Núñez":
    "Digitally planned smile design and guided implants in Núñez",
  "Antes de tocar tus dientes, visualizamos y planificamos cada etapa de tu tratamiento.":
    "Before touching your teeth, we visualise and plan every stage of your treatment.",

  // ─── About block ───────────────────────────────────────────────────────────
  "Sobre el consultorio": "About the practice",
  "Combinamos un especialista a cargo de cada caso, planificación digital y un plan de tratamiento por escrito, para que sepas qué necesitás y cuánto lleva antes de empezar.":
    "One specialist on every case, digital planning and a written treatment plan: you know what you need and how long it takes before we start.",
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

  // ─── Ticker · treatments ───────────────────────────────────────────────────
  "Extracciones dentales": "Tooth extractions",
  "Frenectomía láser": "Laser frenectomy",
  "Gingivectomía láser": "Laser gingivectomy",
  "Retracciones gingivales": "Gum recession treatment",
  "Postes y reconstrucción": "Posts and build-ups",
  "Implantes unitarios": "Single implants",
  "Restauraciones de caries": "Fillings",
  "Alineadores invisibles": "Clear aligners",
  Brackets: "Braces",
  "Coronas dentales": "Dental crowns",
  "Incrustaciones cerámicas": "Ceramic inlays",
  "Incrustaciones de resina": "Resin inlays",
  "Cambio de amalgamas": "Amalgam replacement",

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

  // ─── Payment methods ──────────────────────────────────────────────────────
  "Medios de pago": "Payment methods",
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
  "Te llevás el plan con lo que hay que hacer, en qué orden y cuánto lleva, separado en urgente, conveniente y opcional.":
    "You leave with what to do, in what order and how long it takes, split into urgent, advisable and optional.",
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
  "La evaluación arranca online: nos mandás fotos y estudios, y te decimos si el caso se resuelve en los días que vas a estar en Buenos Aires. Llegás con el plan de tratamiento por escrito y la agenda armada.":
    "It starts online: send photos and X-rays, and we tell you whether your case fits the days you will be in Buenos Aires. You arrive with a written plan and the dates booked.",
  "Publicamos además los tiempos de estadía estimados por tratamiento, que es el dato que hace falta para planificar el viaje y que casi ninguna clínica publica.":
    "We also publish how many days each treatment takes — the one figure you need to plan a trip, and one almost no clinic publishes.",
  "Cuántos días necesitás": "How many days you need",
  "Ver la tabla completa y cómo funciona": "See the full table",
  "Consulta online": "Online consultation",
  "Plan y agenda": "Plan and schedule",
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
  "Tratamientos, medios de pago, primera consulta y turismo odontológico":
    "Treatments, payment methods, first visit and dental tourism",
  "¿Tenés otra consulta? Escribinos y te respondemos el mismo día.":
    "Another question? Message us and we answer the same day.",
  "Ver todas las preguntas": "See all questions",
  "¿Qué medios de pago aceptan?": "Which payment methods do you take?",
  "¿Qué pasa en la primera consulta?": "What happens at the first visit?",
  "Dura alrededor de 40 minutos. Se revisa la boca completa, se evalúan encías y piezas, se toman los registros que hagan falta y salís con un plan de tratamiento por escrito.":
    "It takes about 40 minutes. We check the whole mouth, gums and teeth, take any records needed, and you leave with a written plan.",
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
  "Contanos qué necesitás. Salís con un plan claro y los próximos pasos definidos.":
    "Tell us what you need. You leave with a clear plan and the next steps defined.",
  Secciones: "Sections",
  Información: "Information",
  "Compará opciones": "Compare options",
  "Casos clínicos": "Clinical cases",
  "Dentista en Núñez": "Dentist in Núñez",
  "Lunes a sábado de 9 a 20 h · Con turno previo":
    "Monday to Saturday 9–20 h · By appointment",
  "Todos los derechos reservados.": "All rights reserved.",
  "Carillas o coronas": "Veneers or crowns",
  "Alineadores o brackets": "Aligners or braces",
  "Implantes o prótesis": "Implants or dentures",
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
  "Para quien compara: qué me conviene": "If you are comparing options",
  "Cuánto diente conserva cada opción, en qué casos se indica una u otra y qué esperar de cada una.":
    "How much tooth each option keeps, when each is indicated and what to expect.",
  "Qué resuelve mejor cada técnica, cuánto pesa la disciplina de uso y cómo se decide por diagnóstico.":
    "What each technique solves best, how much wear time matters, and how the call is made.",
  "Qué implica cada solución para los dientes vecinos, para el hueso y para el mantenimiento a largo plazo.":
    "What each solution means for neighbouring teeth, for bone and for long-term upkeep.",
  // ─── The professional ──────────────────────────────────────────────────────
  "Especialista en rehabilitación dentobucomaxilar":
    "Specialist in oral rehabilitation",
  "Alan Cunningham es odontólogo, especialista en rehabilitación dentobucomaxilar y docente de la Universidad de Buenos Aires. Es el titular de Estudio Odontológico Cunningham, el consultorio de Manuel Ugarte 2548, en Núñez.":
    "Alan Cunningham is a dentist, a specialist in oral rehabilitation and a lecturer at the University of Buenos Aires. He owns Estudio Odontológico Cunningham, the practice at Manuel Ugarte 2548, in Núñez.",
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

  "Tratamiento en etapas: primero alinear, después aclarar":
    "Staged treatment: align first, whiten after",
};
