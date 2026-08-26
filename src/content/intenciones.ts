import type { ConFuente } from "./types";

/** The "Explorá por intención" hub — AM's best architectural decision. */
export interface Intencion {
  titulo: string;
  /** The mental state this route captures, in the patient's own words. */
  etiqueta: string;
  descripcion: string;
  href: string;
}

export const INTENCIONES: Intencion[] = [
  {
    titulo: "Precios y medios de pago",
    etiqueta: "Para quien quiere saber cuánto cuesta",
    descripcion:
      "Rangos orientativos por tratamiento, medios de pago disponibles y condiciones, en una sola página.",
    href: "/precios",
  },
  {
    titulo: "Obras sociales y prepagas",
    etiqueta: "Para quien tiene cobertura",
    descripcion:
      "Cómo consultar tu plan, qué suele cubrir una prepaga en odontología y qué queda a cargo tuyo.",
    href: "/obras-sociales",
  },
  {
    titulo: "Carillas o coronas",
    etiqueta: "Para quien compara: qué me conviene",
    descripcion:
      "Cuánto diente conserva cada opción, en qué casos se indica una u otra y qué esperar de cada una.",
    href: "/carillas-vs-coronas",
  },
  {
    titulo: "Alineadores o brackets",
    etiqueta: "Para quien compara: qué me conviene",
    descripcion:
      "Qué resuelve mejor cada técnica, cuánto pesa la disciplina de uso y cómo se decide por diagnóstico.",
    href: "/alineadores-vs-brackets",
  },
  {
    titulo: "Implantes o prótesis",
    etiqueta: "Para quien compara: qué me conviene",
    descripcion:
      "Qué implica cada solución para los dientes vecinos, para el hueso y para el mantenimiento a largo plazo.",
    href: "/implantes-vs-protesis",
  },
];

export interface Comparativa extends ConFuente {
  slug: string;
  h1: string;
  title: string;
  description: string;
  /** Short lead for the hero. The long `description` is for the meta tag. */
  resumen: string;
  eyebrow: string;
  intro: string[];
  /** Left and right of the comparison. */
  opciones: {
    nombre: string;
    resumen: string;
    aFavor: string[];
    enContra: string[];
    tratamiento: string;
  }[];
  /** Row-by-row table: criterion, option A, option B. */
  tabla: { criterio: string; a: string; b: string }[];
  cuandoElegir: { titulo: string; texto: string }[];
  cierre: string[];
}

export const COMPARATIVAS: Comparativa[] = [
  {
    _fuente: "ia",
    slug: "carillas-vs-coronas",
    h1: "Carillas o coronas: cuál conviene en cada caso — Núñez, Buenos Aires",
    title: "Carillas o Coronas: Cuál Conviene | Smile Design Center",
    description:
      "Diferencias reales entre carillas de porcelana y coronas dentales: cuánto diente conserva cada una, cuándo se indica y qué esperar. Consulta sin cargo en Núñez.",
    resumen: "Cuánto diente conserva cada opción y cuándo se indica una u otra.",
    eyebrow: "Qué me conviene",
    intro: [
      "Es una de las preguntas más frecuentes en la consulta y casi siempre está mal planteada. Carillas y coronas no son dos versiones del mismo tratamiento, una más barata que la otra: resuelven situaciones distintas, y la que corresponde la define cuánta estructura sana le queda al diente.",
      "La regla clínica es simple de enunciar: se elige siempre la opción que conserve más diente propio y que aun así resista la carga masticatoria de esa pieza. Todo lo demás —color, forma, estética— se puede lograr con cualquiera de las dos.",
    ],
    opciones: [
      {
        nombre: "Carillas de porcelana",
        resumen:
          "Lámina cerámica adherida a la cara visible del diente. Conserva las paredes y la cara masticatoria.",
        aFavor: [
          "Conserva mucha más estructura dental propia.",
          "En casos seleccionados se puede hacer con desgaste mínimo o nulo.",
          "Excelente resultado estético en el sector anterior.",
          "Menor tiempo de sillón por pieza.",
        ],
        enContra: [
          "Necesita un diente con buena estructura de base.",
          "No resiste bien en piezas muy destruidas o endodonciadas.",
          "Más sensible al bruxismo si no se protege con placa.",
        ],
        tratamiento: "carillas-de-porcelana",
      },
      {
        nombre: "Coronas dentales",
        resumen:
          "Funda que cubre la pieza completa y toma a su cargo su forma y su resistencia.",
        aFavor: [
          "Resuelve piezas con destrucción amplia o poca pared sana.",
          "Protege dientes endodonciados del riesgo de fractura.",
          "Soporta bien la carga en sectores posteriores.",
          "Permite recuperar altura de mordida en rehabilitaciones.",
        ],
        enContra: [
          "Requiere tallar la pieza en todo su contorno.",
          "Más tiempo de sillón y de laboratorio.",
          "Sobre un diente sano es un exceso de tratamiento.",
        ],
        tratamiento: "coronas-dentales",
      },
    ],
    tabla: [
      { criterio: "Estructura dental que conserva", a: "Alta: sólo la cara visible", b: "Baja: se talla todo el contorno" },
      { criterio: "Indicación principal", a: "Estética con diente estructuralmente sano", b: "Diente muy destruido o endodonciado" },
      { criterio: "Sector recomendado", a: "Anterior, sobre todo", b: "Anterior y posterior" },
      { criterio: "Sesiones habituales", a: "3 a 4", b: "2 a 3" },
      { criterio: "Requiere placa si hay bruxismo", a: "Sí, indispensable", b: "Sí, recomendable" },
      { criterio: "Reversibilidad", a: "Baja, pero conserva más diente", b: "Nula" },
    ],
    cuandoElegir: [
      {
        titulo: "Elegí carillas si...",
        texto:
          "Tus dientes están sanos pero no te gusta su color, su forma o su proporción, o si hay espacios que querés cerrar sin ortodoncia. La carilla resuelve estética sin sacrificar estructura.",
      },
      {
        titulo: "Elegí coronas si...",
        texto:
          "La pieza está muy destruida, tuvo tratamiento de conducto, se fracturó o forma parte de una rehabilitación donde hay que recuperar altura de mordida.",
      },
      {
        titulo: "Puede que necesites otra cosa",
        texto:
          "Si el problema es de posición y no de forma, alinear es menos invasivo que tallar. Y si la destrucción es media, una incrustación conserva más diente que una corona.",
      },
    ],
    cierre: [
      "En la consulta inicial, que es sin cargo, se evalúa pieza por pieza y se te entrega el plan por escrito con la técnica indicada para cada una y el motivo clínico de esa indicación.",
    ],
  },
  {
    _fuente: "ia",
    slug: "alineadores-vs-brackets",
    h1: "Alineadores o brackets: cuál conviene en cada caso — Núñez, Buenos Aires",
    title: "Alineadores o Brackets: Cuál Conviene | Smile Design Center",
    description:
      "Diferencias reales entre alineadores invisibles y brackets: qué resuelve mejor cada técnica y cómo se decide por diagnóstico. Consulta sin cargo en Núñez.",
    resumen: "Qué resuelve mejor cada técnica y cuánto pesa la disciplina de uso.",
    eyebrow: "Qué me conviene",
    intro: [
      "La comparación suele plantearse como estética contra eficacia, y no es así. Las dos técnicas mueven dientes aplicando fuerzas controladas; lo que cambia es cómo se aplican esas fuerzas y de qué depende que el plan se cumpla.",
      "La variable que más pesa en la decisión no es el aspecto: es el tipo de movimiento que el caso necesita y qué tan realista es sostener las horas de uso que un alineador exige.",
    ],
    opciones: [
      {
        nombre: "Alineadores invisibles",
        resumen:
          "Placas transparentes removibles que se cambian cada pocas semanas.",
        aFavor: [
          "Prácticamente no se notan.",
          "Se retiran para comer y para higienizarse.",
          "Higiene mucho más simple durante el tratamiento.",
          "Podés ver la posición final proyectada antes de empezar.",
        ],
        enContra: [
          "El resultado depende de cumplir las horas de uso.",
          "Algunos movimientos complejos se controlan peor.",
          "Requiere disciplina diaria sostenida en el tiempo.",
        ],
        tratamiento: "alineadores-invisibles",
      },
      {
        nombre: "Brackets",
        resumen:
          "Aparatología fija adherida al diente, con arcos que se ajustan en cada control.",
        aFavor: [
          "Trabajan las veinticuatro horas, sin depender del paciente.",
          "Mejor control en rotaciones y movimientos complejos.",
          "Opción más previsible en casos severos.",
          "Compatible con tratamientos combinados con cirugía.",
        ],
        enContra: [
          "Visibles durante todo el tratamiento.",
          "Higiene más trabajosa y con más elementos.",
          "Restricciones de dieta para no despegar piezas.",
        ],
        tratamiento: "brackets",
      },
    ],
    tabla: [
      { criterio: "Visibilidad", a: "Muy baja", b: "Alta" },
      { criterio: "Depende del uso diario", a: "Sí, es determinante", b: "No" },
      { criterio: "Movimientos complejos", a: "Limitado en algunos casos", b: "Mejor control" },
      { criterio: "Higiene durante el tratamiento", a: "Simple: se retiran", b: "Requiere técnica y elementos" },
      { criterio: "Restricciones de dieta", a: "Ninguna", b: "Sí" },
      { criterio: "Contención posterior", a: "Obligatoria", b: "Obligatoria" },
    ],
    cuandoElegir: [
      {
        titulo: "Elegí alineadores si...",
        texto:
          "Tu caso es de apiñamiento leve a moderado o de espacios, y podés sostener el uso durante prácticamente todo el día. La discreción es una ventaja real para adultos.",
      },
      {
        titulo: "Elegí brackets si...",
        texto:
          "Hay rotaciones marcadas, apiñamiento severo, corrección de mordida o un plan combinado con extracciones o cirugía. También si sabés que no vas a sostener las horas de uso.",
      },
      {
        titulo: "Lo que aplica a las dos",
        texto:
          "La contención posterior no es opcional en ninguna de las dos técnicas. La mayoría de las recidivas viene de tratamientos terminados sin esa etapa.",
      },
    ],
    cierre: [
      "El diagnóstico define la técnica. En la consulta inicial se toman los registros, se proyecta el plan de movimientos y se te informa el tiempo estimado antes de que decidas.",
    ],
  },
  {
    _fuente: "ia",
    slug: "implantes-vs-protesis",
    h1: "Implantes o prótesis: cuál conviene en cada caso — Núñez, Buenos Aires",
    title: "Implantes o Prótesis: Cuál Conviene | Smile Design Center",
    description:
      "Diferencias entre implantes dentales, puente y prótesis removible: qué implica cada opción para los dientes vecinos y para el hueso. Consulta sin cargo en Núñez.",
    resumen: "Qué le pasa a los dientes vecinos y al hueso con cada solución.",
    eyebrow: "Qué me conviene",
    intro: [
      "Cuando falta una pieza hay tres caminos posibles: implante, puente fijo apoyado en los dientes vecinos, o prótesis removible. Los tres reponen el diente perdido, pero tienen costos biológicos muy distintos y eso es lo que suele quedar fuera de la conversación.",
      "La pregunta correcta no es sólo cuánto sale cada opción hoy, sino qué le pasa a la boca en diez años con cada una.",
    ],
    opciones: [
      {
        nombre: "Implante dental",
        resumen:
          "Tornillo de titanio integrado al hueso, con una corona propia encima.",
        aFavor: [
          "No involucra a los dientes vecinos.",
          "Mantiene estimulado el hueso de la zona.",
          "Se higieniza como un diente natural.",
          "Solución fija, sin quitar y poner.",
        ],
        enContra: [
          "Requiere cirugía y un período de integración de varios meses.",
          "Necesita hueso suficiente y encías sanas.",
          "Mayor inversión inicial.",
        ],
        tratamiento: "implantes-unitarios",
      },
      {
        nombre: "Prótesis y puentes",
        resumen:
          "Puente fijo apoyado en los dientes vecinos, o prótesis removible apoyada en la encía.",
        aFavor: [
          "Resolución más rápida, sin cirugía ni espera de integración.",
          "Menor inversión inicial.",
          "Alternativa válida cuando el implante está contraindicado.",
        ],
        enContra: [
          "El puente obliga a tallar dientes vecinos que suelen estar sanos.",
          "La removible no estimula el hueso, que sigue reabsorbiéndose.",
          "Mantenimiento y recambios a lo largo del tiempo.",
        ],
        tratamiento: "rehabilitacion-sobre-implantes",
      },
    ],
    tabla: [
      { criterio: "Involucra dientes vecinos", a: "No", b: "Sí, en el puente" },
      { criterio: "Preserva el hueso", a: "Sí", b: "No" },
      { criterio: "Tiempo hasta el resultado", a: "Varios meses", b: "Semanas" },
      { criterio: "Requiere cirugía", a: "Sí", b: "No" },
      { criterio: "Higiene", a: "Como un diente natural", b: "Requiere técnica específica" },
      { criterio: "Horizonte a largo plazo", a: "Alta previsibilidad con controles", b: "Recambios periódicos" },
    ],
    cuandoElegir: [
      {
        titulo: "Elegí implante si...",
        texto:
          "Tenés hueso y encías en condiciones, los dientes vecinos están sanos y podés esperar el tiempo de integración. Es la opción que menos compromete al resto de la boca.",
      },
      {
        titulo: "Elegí prótesis o puente si...",
        texto:
          "Hay una contraindicación para la cirugía, los dientes vecinos ya necesitan cobertura por otro motivo, o el caso requiere una solución en un plazo corto.",
      },
      {
        titulo: "Lo que no conviene",
        texto:
          "Dejar el espacio sin reponer. Los dientes vecinos se inclinan y el antagonista extruye, y con el tiempo cualquier solución se vuelve más compleja y más cara.",
      },
    ],
    cierre: [
      "El plan se define con el estudio del hueso y de la mordida adelante. En la consulta inicial, sin cargo, se te explican las alternativas viables para tu caso con el costo biológico de cada una.",
    ],
  },
];

export function comparativaPorSlug(slug: string) {
  return COMPARATIVAS.find((c) => c.slug === slug);
}
