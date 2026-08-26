import type { ConFuente, Imagen } from "./types";

export interface Seccion {
  titulo: string;
  parrafos: string[];
  lista?: string[];
}

export interface Post extends ConFuente {
  slug: string;
  titulo: string;
  h1: string;
  title: string;
  description: string;
  categoria: string;
  fecha: string;
  fechaTexto: string;
  actualizado: string;
  lectura: string;
  imagen: Imagen;
  entradilla: string;
  secciones: Seccion[];
  /** Treatment slugs to link at the foot of the article. */
  relacionados: string[];
}

export const POSTS: Post[] = [
  {
    _fuente: "ia",
    slug: "cuanto-cuesta-un-implante-dental-en-buenos-aires",
    titulo: "Cuánto cuesta un implante dental en Buenos Aires y de qué depende",
    h1: "Cuánto cuesta un implante dental en Buenos Aires y de qué depende",
    title: "Cuánto Cuesta un Implante Dental en Buenos Aires | Smile Design Center",
    description:
      "Qué incluye realmente el presupuesto de un implante dental, por qué varía tanto entre consultorios y qué preguntas hacer antes de comparar precios.",
    categoria: "Precios",
    fecha: "2026-08-05",
    fechaTexto: "5 de agosto de 2026",
    actualizado: "agosto de 2026",
    lectura: "6 min",
    imagen: {
      src: "/images/implan1-jpg.webp",
      alt: "Implante dental que reemplaza una pieza perdida, antes y después",
    },
    entradilla:
      "Es la pregunta más buscada del rubro y la peor respondida: casi ningún sitio explica qué entra en el precio. Esto es lo que hay que mirar antes de comparar dos presupuestos.",
    secciones: [
      {
        titulo: "El presupuesto son dos cosas, no una",
        parrafos: [
          "Cuando alguien pregunta cuánto sale un implante, en general está preguntando por el diente terminado. Pero un implante y una corona sobre implante son dos etapas distintas, con materiales, tiempos y costos distintos, y la primera fuente de confusión al comparar presupuestos es que un consultorio cotice sólo la primera y otro cotice las dos.",
          "La etapa quirúrgica incluye el implante en sí —el tornillo de titanio— y su colocación. La etapa protésica incluye el pilar y la corona que va encima, y es la que define cómo se ve y cómo mastica la pieza. Un presupuesto serio dice explícitamente qué etapas cubre y en qué momento se abona cada una.",
        ],
      },
      {
        titulo: "Qué hace variar el precio entre un caso y otro",
        parrafos: [
          "Dos personas con la misma pieza faltante pueden recibir presupuestos muy distintos, y no necesariamente porque una esté cara. Estas son las variables que más pesan:",
        ],
        lista: [
          "Estado del hueso: si hace falta un procedimiento previo para tener volumen suficiente, el plan cambia.",
          "Sector de la boca: una pieza anterior tiene una exigencia estética que una posterior no tiene.",
          "Material de la corona: no todas las cerámicas cuestan lo mismo ni se comportan igual.",
          "Cantidad de piezas: cuando faltan varias, no siempre corresponde un implante por diente.",
          "Estado general de la boca: si hay enfermedad periodontal activa, primero hay que sanear.",
        ],
      },
      {
        titulo: "Las preguntas que conviene hacer antes de comparar",
        parrafos: [
          "Comparar precios sin comparar contenidos lleva a decisiones malas. Antes de poner dos presupuestos uno al lado del otro, conviene chequear que ambos respondan lo mismo: ¿incluye la corona? ¿Qué pasa si hace falta un procedimiento previo, ya está contemplado o se cotiza aparte? ¿Cuántos controles posteriores incluye? ¿Qué marca de implante se usa y hay repuestos disponibles en el país?",
          "Esa última pregunta parece técnica y es de las más importantes a diez años. Si el sistema de implante que te colocaron no tiene componentes disponibles localmente, cualquier reparación futura se complica.",
        ],
      },
      {
        titulo: "Por qué el precio bajo a veces sale caro",
        parrafos: [
          "En implantología, la mayor parte del costo real no está en el tornillo: está en la planificación, en el tiempo de sillón y en el seguimiento. Un presupuesto muy por debajo del promedio suele estar ahorrando en alguna de esas tres cosas, y las tres son las que determinan si el implante dura.",
          "Eso no significa que lo más caro sea automáticamente mejor. Significa que el precio, solo, no alcanza como criterio: hay que leerlo junto con lo que incluye, con quién lo hace y con qué pasa después.",
        ],
      },
      {
        titulo: "Cómo lo manejamos en el consultorio",
        parrafos: [
          "La consulta inicial es sin cargo y de ahí sale un plan por escrito, con las etapas separadas, lo que incluye cada una y los medios de pago disponibles. Los rangos orientativos por tratamiento están publicados en la página de precios, así que podés hacerte una idea antes de venir.",
          "Y si el caso no es viable o hay una alternativa más conservadora, se dice. Un implante bien indicado es una gran solución; uno mal indicado es un problema caro.",
        ],
      },
    ],
    relacionados: ["implantes-unitarios", "rehabilitacion-sobre-implantes", "extracciones-dentales"],
  },
  {
    _fuente: "ia",
    slug: "carillas-de-porcelana-lo-que-nadie-te-cuenta",
    titulo: "Carillas de porcelana: lo que conviene saber antes de decidir",
    h1: "Carillas de porcelana en Buenos Aires: lo que conviene saber antes de decidir",
    title: "Carillas de Porcelana: Qué Saber Antes de Decidir | Smile Design Center",
    description:
      "Cuánto diente se desgasta, cuánto duran, qué pasa con el bruxismo y por qué la planificación previa define el resultado de unas carillas de porcelana.",
    categoria: "Estética dental",
    fecha: "2026-07-22",
    fechaTexto: "22 de julio de 2026",
    actualizado: "agosto de 2026",
    lectura: "6 min",
    imagen: {
      src: "/images/carillas-2-jpg.webp",
      alt: "Carillas de porcelana colocadas en el sector anterior",
    },
    entradilla:
      "Las carillas resuelven muy bien lo que tienen que resolver. El problema aparece cuando se indican para algo que no les corresponde.",
    secciones: [
      {
        titulo: "Qué resuelve una carilla y qué no",
        parrafos: [
          "Una carilla de porcelana corrige color, forma, tamaño y pequeñas diferencias de posición en la cara visible del diente. Es la herramienta indicada cuando el diente está estructuralmente sano pero no te gusta cómo se ve.",
          "Lo que no es: una solución para un diente muy destruido —ahí corresponde una corona—, ni un reemplazo de la ortodoncia. Cuando el problema es de posición, mover el diente es siempre menos invasivo que tallarlo para disimular dónde está.",
        ],
      },
      {
        titulo: "¿Cuánto se desgasta?",
        parrafos: [
          "Depende del caso, y esta es la pregunta que hay que hacer siempre. Hay situaciones que se resuelven con desgaste mínimo o incluso sin desgaste, sobre todo cuando el objetivo es cerrar espacios o alargar bordes. Otras requieren preparación para dar lugar al espesor de la cerámica sin que el diente quede voluminoso.",
          "La diferencia la define la planificación previa, no una regla general. Por eso el orden importa: primero se diseña la sonrisa en digital y se prueba en boca, y recién con esa información se sabe cuánto hay que tallar. Al revés —tallar primero y ver después— es como se llega a desgastes innecesarios.",
        ],
      },
      {
        titulo: "El bruxismo no es un detalle",
        parrafos: [
          "Si apretás o rechinás los dientes de noche, esa fuerza va a caer sobre la cerámica todas las noches durante años. Es la causa número uno de fractura de carillas, muy por encima de cualquier problema del material.",
          "Por eso, en un paciente con bruxismo, la placa de descarga no es un accesorio opcional: es parte del tratamiento. Un plan de carillas que no menciona el bruxismo es un plan incompleto.",
        ],
      },
      {
        titulo: "Cómo se ve natural",
        parrafos: [
          "La naturalidad no viene del blanco. Viene de la proporción entre los incisivos centrales y los laterales, de la textura de la superficie, de la traslucidez del borde y de que la línea de los bordes acompañe al labio inferior al sonreír.",
          "Un set de carillas todas iguales, muy blancas y muy planas se lee como artificial aunque esté impecablemente hecho. La conversación sobre color y proporción hay que tenerla antes, con la prueba en boca puesta, no después de cementar.",
        ],
      },
      {
        titulo: "Cuidado a largo plazo",
        parrafos: [
          "La porcelana no toma pigmento como el composite, así que el color se sostiene. Lo que sí cambia con los años es el entorno: la encía, los dientes naturales vecinos y las restauraciones de alrededor.",
          "Con higiene, controles periódicos y protección frente al bruxismo, la expectativa de vida de una carilla se mide en años. Sin esas tres cosas, en bastante menos.",
        ],
      },
    ],
    relacionados: ["carillas-de-porcelana", "diseno-de-sonrisa", "coronas-dentales"],
  },
  {
    _fuente: "ia",
    slug: "por-que-sangran-las-encias",
    titulo: "Por qué sangran las encías y por qué no hay que ignorarlo",
    h1: "Por qué sangran las encías: qué hacer, explicado en Núñez, Buenos Aires",
    title: "Por Qué Sangran las Encías | Smile Design Center",
    description:
      "El sangrado de encías no es normal ni se resuelve cepillando más fuerte. Qué lo causa, cómo se trata y por qué es la principal causa de pérdida de dientes.",
    categoria: "Prevención",
    fecha: "2026-07-08",
    fechaTexto: "8 de julio de 2026",
    actualizado: "agosto de 2026",
    lectura: "5 min",
    imagen: {
      src: "/images/PERIODONCIA-jpg.webp",
      alt: "Encías sanas tras un tratamiento de limpieza profunda",
    },
    entradilla:
      "Mucha gente convive años con encías que sangran creyendo que es normal. No lo es, y el costo de ignorarlo es alto.",
    secciones: [
      {
        titulo: "Qué significa el sangrado",
        parrafos: [
          "Una encía sana no sangra cuando te cepillás ni cuando pasás hilo dental. El sangrado es señal de inflamación, y la inflamación casi siempre viene de la placa bacteriana acumulada en el margen de la encía.",
          "En su etapa inicial —gingivitis— el proceso es reversible: con una limpieza profesional y una técnica de higiene correcta, la encía se recupera en semanas. El problema es lo que pasa si sigue.",
        ],
      },
      {
        titulo: "De gingivitis a periodontitis",
        parrafos: [
          "Cuando la inflamación persiste, se extiende al hueso que sostiene al diente. Ese hueso empieza a reabsorberse y aparecen las bolsas periodontales: espacios entre el diente y la encía donde la bacteria vive fuera del alcance del cepillo.",
          "A diferencia de la gingivitis, la pérdida ósea no se revierte. Se puede frenar, y eso ya es mucho, pero el hueso perdido no vuelve. Por eso la enfermedad periodontal es la principal causa de pérdida de dientes en adultos, por encima de la caries.",
        ],
      },
      {
        titulo: "Lo que no funciona",
        parrafos: [
          "Cepillarse más fuerte es el reflejo más común y es contraproducente: no remueve mejor la placa y sí agrede el margen gingival, lo que con el tiempo produce retracciones y raíces expuestas.",
          "Dejar de pasar hilo porque sangra tampoco: el sangrado aparece justo donde hace falta limpiar. Con la técnica correcta y unos días de constancia, el sangrado disminuye.",
        ],
        lista: [
          "Cepillo suave, no duro.",
          "Movimiento en el margen de la encía, sin frotar horizontalmente.",
          "Elementos interdentales todos los días, no de vez en cuando.",
          "Control profesional periódico: hay sarro que ninguna técnica casera alcanza.",
        ],
      },
      {
        titulo: "Cómo se trata",
        parrafos: [
          "El tratamiento base es la limpieza profunda: raspaje y alisado de las superficies radiculares, incluyendo lo que está por debajo del margen de la encía, que es donde la enfermedad avanza en silencio.",
          "Después de la limpieza es normal notar algo de sensibilidad y que la encía se retraiga un poco: el sarro ocupaba ese espacio. Con la inflamación resuelta, el tejido se afirma y el sangrado desaparece en pocas semanas.",
        ],
      },
      {
        titulo: "Por qué importa antes de cualquier tratamiento estético",
        parrafos: [
          "Una carilla o una corona sobre una encía enferma tiene el fracaso incorporado desde el día uno: el margen queda expuesto, la encía sigue retrayéndose y el trabajo se ve mal a los pocos meses.",
          "Por eso, en cualquier plan de tratamiento, sanear la encía va primero. No es una etapa burocrática: es la condición para que lo demás dure.",
        ],
      },
    ],
    relacionados: ["limpieza-profunda", "retracciones-gingivales", "restauraciones-caries"],
  },
  {
    _fuente: "ia",
    slug: "escaner-intraoral-vs-moldes-de-pasta",
    titulo: "Escáner intraoral o moldes de pasta: qué cambia para el paciente",
    h1: "Escáner intraoral o moldes de pasta: qué cambia para el paciente en Buenos Aires",
    title: "Escáner Intraoral vs Moldes de Pasta | Smile Design Center",
    description:
      "Qué diferencia hay entre un registro digital con escáner 3Shape y una impresión con pasta, en precisión, en comodidad y en cantidad de visitas.",
    categoria: "Tecnología",
    fecha: "2026-06-24",
    fechaTexto: "24 de junio de 2026",
    actualizado: "agosto de 2026",
    lectura: "5 min",
    imagen: {
      src: "/images/DSC_0136-1024x683.jpg",
      alt: "Escáner intraoral 3Shape en uso durante un registro digital",
    },
    entradilla:
      "La cubeta con pasta es uno de los peores recuerdos que la gente tiene del odontólogo. Hace rato que dejó de ser necesaria.",
    secciones: [
      {
        titulo: "Qué es un registro y para qué sirve",
        parrafos: [
          "Cada vez que hay que fabricar algo que va a encajar en tu boca —una corona, una carilla, una incrustación, una placa, un juego de alineadores— hace falta una copia exacta de esa boca. Eso es el registro.",
          "Durante décadas se hizo con una cubeta cargada de pasta que se mantenía unos minutos en la boca hasta que fraguaba. Funciona, pero es incómodo, activa el reflejo nauseoso en mucha gente y tiene una precisión que depende de varias cosas que pueden salir mal.",
        ],
      },
      {
        titulo: "Qué cambia con el escáner",
        parrafos: [
          "El escáner intraoral toma miles de imágenes de la boca y arma un modelo tridimensional en pantalla. No hay cubeta, no hay pasta y el registro se ve en tiempo real: si una zona quedó incompleta, se vuelve a pasar sobre ella en el momento en vez de repetir la impresión entera.",
          "Para el paciente la diferencia más evidente es la comodidad. Para el trabajo, la más relevante es la precisión del ajuste marginal, que es lo que define si una corona filtra o no filtra.",
        ],
        lista: [
          "Sin pasta y sin cubeta, con mucho menos reflejo nauseoso.",
          "Se corrige en el momento, sin repetir el procedimiento completo.",
          "El modelo se guarda y se puede comparar con registros posteriores.",
          "Menos pasos entre el consultorio y el laboratorio, y menos margen de error.",
        ],
      },
      {
        titulo: "Comparar el antes y el después",
        parrafos: [
          "Hay un beneficio menos obvio: el modelo digital queda archivado. Eso permite comparar tu boca de hoy con la de hace dos años y ver, con dato objetivo, si hay desgaste progresivo o si una encía se está retrayendo.",
          "En pacientes con bruxismo esa comparación es especialmente útil, porque el desgaste es lento y difícil de percibir en el espejo.",
        ],
      },
      {
        titulo: "¿Sirve para todo?",
        parrafos: [
          "Para la enorme mayoría de los procedimientos, sí. Hay situaciones particulares en las que todavía puede convenir una técnica convencional, y en esos casos se explica por qué.",
          "En el consultorio trabajamos con escáner 3Shape para registros de rehabilitación, estética, ortodoncia e implantes. La regla es simple: si se puede hacer en digital, se hace en digital.",
        ],
      },
    ],
    relacionados: ["coronas-dentales", "diseno-de-sonrisa", "alineadores-invisibles"],
  },
  {
    _fuente: "ia",
    slug: "bruxismo-como-saber-si-aprietas-los-dientes",
    titulo: "Bruxismo: cómo saber si apretás los dientes y qué hacer",
    h1: "Bruxismo: cómo saber si apretás los dientes, explicado en Núñez, Buenos Aires",
    title: "Bruxismo: Cómo Saber si Apretás los Dientes | Smile Design Center",
    description:
      "Señales del bruxismo, por qué desgasta y fractura los dientes y qué hace realmente una placa de descarga. Consultorio odontológico en Núñez.",
    categoria: "Prevención",
    fecha: "2026-06-10",
    fechaTexto: "10 de junio de 2026",
    actualizado: "agosto de 2026",
    lectura: "5 min",
    imagen: {
      src: "/images/DSC_0143-1-1024x683.jpg",
      alt: "Desgaste dental por bruxismo visto en la consulta",
    },
    entradilla:
      "La mayoría de las personas con bruxismo no sabe que lo tiene. Lo descubre cuando algo se fractura.",
    secciones: [
      {
        titulo: "Las señales",
        parrafos: [
          "El bruxismo es apretar o rechinar los dientes fuera de la masticación, casi siempre de noche y de forma inconsciente. Como ocurre durmiendo, rara vez se detecta solo: se detecta por sus consecuencias.",
        ],
        lista: [
          "Dolor o cansancio en la mandíbula al despertar.",
          "Dolor de cabeza matutino, sobre todo en las sienes.",
          "Dientes con los bordes planos, como limados.",
          "Sensibilidad al frío en el cuello de los dientes.",
          "Restauraciones o carillas que se fracturan sin causa aparente.",
          "Chasquido o molestia en la articulación al abrir la boca.",
        ],
      },
      {
        titulo: "Por qué hace tanto daño",
        parrafos: [
          "La fuerza que se ejerce durante un episodio de bruxismo nocturno es muy superior a la de masticar, y se sostiene durante períodos largos sin la pausa que da comer. Sobre el diente eso produce desgaste; sobre una restauración, fractura.",
          "Con el tiempo, el desgaste generalizado acorta las piezas y hace perder altura de mordida. Cuando se llega a ese punto, la solución ya no es una restauración: es una rehabilitación completa. Detectar temprano cambia radicalmente el tamaño del problema.",
        ],
      },
      {
        titulo: "Qué hace una placa de descarga",
        parrafos: [
          "La placa no cura el bruxismo: no elimina el hábito. Lo que hace es interponerse entre las dos arcadas para que la fuerza caiga sobre el acrílico y no sobre tus dientes, tus carillas o tus coronas.",
          "Es, en la práctica, el seguro más barato que existe sobre cualquier trabajo estético o de rehabilitación. Por eso, cuando hay bruxismo, la placa forma parte del plan de tratamiento y no de una lista de opcionales.",
        ],
      },
      {
        titulo: "Qué más ayuda",
        parrafos: [
          "El bruxismo tiene un componente de estrés importante, así que todo lo que baje la carga nocturna ayuda: higiene del sueño, actividad física, manejo del estrés. También conviene revisar si hay interferencias en la mordida que estén contribuyendo.",
          "En la consulta se evalúan las dos cosas: el daño acumulado y los factores que lo mantienen. El plan se arma sobre ese diagnóstico, no sobre una placa entregada sin más.",
        ],
      },
    ],
    relacionados: ["restauraciones-caries", "coronas-dentales", "carillas-de-porcelana"],
  },
  {
    _fuente: "ia",
    slug: "primera-consulta-que-esperar",
    titulo: "Primera consulta odontológica: qué esperar y cómo prepararse",
    h1: "Primera consulta odontológica en Núñez: qué esperar y cómo prepararse",
    title: "Primera Consulta Odontológica: Qué Esperar | Smile Design Center",
    description:
      "Qué pasa en una primera consulta odontológica, cuánto dura, qué llevar y qué información deberías salir teniendo. Consultorio en Núñez, Buenos Aires.",
    categoria: "Primera visita",
    fecha: "2026-05-27",
    fechaTexto: "27 de mayo de 2026",
    actualizado: "agosto de 2026",
    lectura: "4 min",
    imagen: {
      src: "/images/thumbnail_image0-jpg-1440x800.webp",
      alt: "Recepción de la clínica con mostrador de atención y sala de espera",
    },
    entradilla:
      "El miedo al odontólogo casi siempre es miedo a lo desconocido. Saber qué va a pasar cambia bastante la experiencia.",
    secciones: [
      {
        titulo: "Cuánto dura y qué incluye",
        parrafos: [
          "En nuestro consultorio la primera consulta dura alrededor de 40 minutos y es sin cargo. Incluye una revisión completa de la boca: estado de las encías, de cada pieza, de las restauraciones existentes y de cómo contactan los dientes al morder.",
          "Cuando hace falta, se toman los registros correspondientes. No se hace tratamiento en esa cita, salvo que haya una urgencia que contener.",
        ],
      },
      {
        titulo: "Qué llevar",
        parrafos: [
          "Si tenés radiografías o estudios recientes, llevalos aunque sean de otro consultorio: sirven como punto de comparación. Si tomás medicación o estás en tratamiento médico por algo, contalo: hay condiciones y fármacos que cambian el plan.",
          "Y si hay algo que te preocupa puntualmente —un diente que molesta, algo que no te gusta de tu sonrisa, una experiencia mala anterior—, decilo al principio. La consulta se organiza mejor alrededor de eso.",
        ],
      },
      {
        titulo: "Con qué tenés que salir",
        parrafos: [
          "Con un plan de tratamiento por escrito. No con una idea general: con el detalle de qué hay que hacer, en qué orden, cuántas sesiones lleva y cuánto cuesta.",
          "Y con una distinción clara entre lo urgente, lo conveniente y lo opcional. Esa separación es la que te permite decidir con criterio propio en vez de aceptar un paquete completo sin entender qué parte era necesaria.",
        ],
      },
      {
        titulo: "Si hace mucho que no vas",
        parrafos: [
          "Es más común de lo que parece y no hay reproche que valga la pena. Cuanto más se posterga, más grande se hace el problema, así que el mejor momento para volver es siempre el próximo turno disponible.",
          "Si el motivo de la postergación es el miedo, decilo al pedir el turno. Se puede trabajar de otra manera: sesiones más cortas, explicando cada paso antes de hacerlo, sin sorpresas.",
        ],
      },
    ],
    relacionados: ["odontologia-general", "limpieza-profunda", "restauraciones-caries"],
  },
];

export function postPorSlug(slug: string) {
  return POSTS.find((p) => p.slug === slug);
}

export const POSTS_HOME = POSTS.slice(0, 3);
