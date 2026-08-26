import type { Pilar } from "./tipos";

export const IMPLANTES_DENTALES: Pilar = {
  _fuente: "ia",
  slug: "implantes-dentales",
  nombre: "Implantes dentales",
  h1: "Implantes dentales en Núñez, Buenos Aires",
  title: "Implantes Dentales en Núñez, Buenos Aires | Smile Design Center",
  description:
    "Implantes dentales unitarios y rehabilitación sobre implantes en Núñez, con planificación digital y control de mordida. Consulta inicial sin cargo.",
  eyebrow: "Implantes",
  resumen:
    "Reemplazo de piezas perdidas con implante de titanio y corona planificada en digital, sin desgastar los dientes vecinos.",
  tarjeta:
    "Reemplazamos la pieza perdida sin tocar los dientes de al lado, con planificación digital de la posición y de la corona final.",
  imagen: {
    src: "/images/implan1-jpg.webp",
    alt: "Implante dental que reemplaza una pieza perdida, antes y después",
  },
  queEs: [
    "Un implante dental es un tornillo de titanio que se coloca en el hueso maxilar y cumple la función de la raíz que se perdió. Sobre él se atornilla o cementa una corona, y el conjunto reemplaza a la pieza faltante sin apoyarse en los dientes vecinos. Esa es la diferencia central con un puente convencional: para hacer un puente hay que tallar los dientes de al lado, que muchas veces están sanos.",
    "El titanio tiene la propiedad de integrarse al hueso, un proceso que lleva algunos meses y que se llama osteointegración. Ese tiempo de espera no es negociable: la corona definitiva se coloca cuando el implante está firme, no antes. Mientras tanto, según el caso y la zona, se puede llevar una solución provisoria para no quedar con el espacio a la vista.",
    "La planificación es la parte que define el resultado. Antes de colocar nada se estudia el volumen y la calidad del hueso, la distancia a estructuras anatómicas y, sobre todo, dónde va a quedar la corona: la posición del implante se decide desde el diente que se quiere lograr, no al revés. En el consultorio esa planificación se apoya en el escaneo intraoral 3Shape y en el estudio radiográfico correspondiente, y el diseño de la corona final lo lleva un especialista en rehabilitación dentobucomaxilar que además es técnico de laboratorio.",
  ],
  paraQuien: [
    "Falta de una pieza por extracción, fractura o ausencia congénita.",
    "Personas que no quieren desgastar los dientes vecinos para hacer un puente.",
    "Portadores de prótesis removible que buscan una solución fija.",
    "Varias piezas contiguas ausentes, resueltas con implantes y prótesis fija.",
    "Casos donde una pieza está condenada y conviene planificar el implante junto con la extracción.",
  ],
  proceso: [
    {
      titulo: "Estudio y planificación",
      descripcion:
        "Evaluación clínica, estudio radiográfico y escaneo intraoral. Se define la posición del implante a partir de dónde debe quedar la corona y se revisa el estado de la encía y del hueso.",
    },
    {
      titulo: "Colocación quirúrgica",
      descripcion:
        "Se coloca el implante con anestesia local en una intervención ambulatoria. Se indican pautas de cuidado y control postoperatorio a los pocos días.",
    },
    {
      titulo: "Osteointegración",
      descripcion:
        "Período de integración al hueso, con controles. Es el tiempo que asegura que el implante soporte la carga masticatoria sin moverse.",
    },
    {
      titulo: "Corona definitiva",
      descripcion:
        "Registro digital, confección de la corona y colocación con ajuste de contactos. A partir de ahí, controles periódicos de encía y de mordida.",
    },
  ],
  beneficios: [
    {
      titulo: "No se tocan los dientes vecinos",
      descripcion:
        "El implante se sostiene solo. Es la única solución que repone la pieza sin desgastar estructura sana de al lado.",
    },
    {
      titulo: "Posición planificada desde la corona",
      descripcion:
        "Se decide primero cómo tiene que quedar el diente y después dónde va el implante. El orden inverso es la causa habitual de coronas mal emergentes.",
    },
    {
      titulo: "Registro sin pasta ni moldes",
      descripcion:
        "El escaneo intraoral 3Shape reemplaza la impresión convencional, más incómoda y menos precisa.",
    },
    {
      titulo: "Mantiene el hueso",
      descripcion:
        "Al recibir carga, el hueso de la zona se estimula, cosa que no ocurre bajo una prótesis removible apoyada en la encía.",
    },
  ],
  faqs: [
    {
      _fuente: "ia",
      pregunta: "¿Duele colocar un implante?",
      respuesta:
        "La cirugía se hace con anestesia local y suele ser menos molesta de lo que la gente espera; en muchos casos es más simple que una extracción. El postoperatorio se maneja con analgésicos comunes y las indicaciones que se entregan por escrito.",
    },
    {
      _fuente: "ia",
      pregunta: "¿Cuánto tiempo lleva todo el tratamiento?",
      respuesta:
        "Entre la colocación y la corona definitiva hay un período de integración al hueso de varios meses. Los tiempos exactos dependen de la zona, de la calidad del hueso y de si hubo que hacer algún procedimiento previo; se te informan en el plan de tratamiento.",
    },
    {
      _fuente: "ia",
      pregunta: "¿Me quedo sin diente durante la espera?",
      respuesta:
        "En el sector visible se planifica una solución provisoria para que no quedes con el espacio a la vista. En sectores posteriores a veces no hace falta.",
    },
    {
      _fuente: "ia",
      pregunta: "¿Cualquiera puede hacerse un implante?",
      respuesta:
        "Se necesita hueso suficiente, encías sanas y una situación general compatible. Fumar y el bruxismo no controlado empeoran el pronóstico. Todo eso se evalúa antes, no durante.",
    },
    {
      _fuente: "pendiente-validacion",
      pregunta: "¿Cuánto cuesta un implante dental?",
      respuesta:
        "El presupuesto contempla dos etapas: el implante y la corona sobre implante. Se entrega por escrito después de la consulta inicial, que es sin cargo, con el detalle de cada etapa y los medios de pago disponibles.",
    },
  ],
  hijos: [
    {
      _fuente: "ia",
      slug: "implantes-unitarios",
      pilar: "implantes-dentales",
      nombre: "Implantes unitarios",
      h1: "Implante dental unitario en Núñez, Buenos Aires",
      title: "Implante Dental Unitario en Núñez | Smile Design Center",
      description:
        "Implante unitario en Núñez para reemplazar una pieza sin tallar los dientes vecinos. Planificación digital. Consulta inicial sin cargo.",
      resumen:
        "Reemplazo de una sola pieza con implante de titanio y corona individual.",
      imagen: {
        src: "/images/implan2-jpg.webp",
        alt: "Implante unitario con corona colocada en el sector anterior",
      },
      queEs: [
        "El implante unitario resuelve la ausencia de una pieza con un implante y una corona propia. Es la indicación más frecuente y la más previsible: se repone el diente faltante sin involucrar a los vecinos y sin prótesis removible de por medio.",
        "El punto crítico está en el sector anterior, donde además de función hay que resolver estética: la emergencia de la corona a través de la encía tiene que imitar a la de un diente natural. Eso depende de la posición tridimensional del implante y del perfil de emergencia que se le da al provisorio antes de la corona definitiva. Por eso el caso se planifica desde el resultado final hacia atrás.",
      ],
      paraQuien: [
        "Falta una sola pieza y los dientes vecinos están sanos.",
        "Ausencia congénita de una pieza, frecuente en incisivos laterales.",
        "Pérdida de un diente por fractura o por fracaso de una endodoncia.",
        "Reemplazo de un puente viejo, evitando volver a tallar los pilares.",
      ],
      proceso: [
        {
          titulo: "Planificación",
          descripcion:
            "Estudio radiográfico, escaneo intraoral y definición de la posición del implante a partir de la corona prevista.",
        },
        {
          titulo: "Colocación e integración",
          descripcion:
            "Cirugía ambulatoria con anestesia local y período de osteointegración con controles.",
        },
        {
          titulo: "Corona sobre implante",
          descripcion:
            "Registro digital, confección de la corona y colocación con control de contactos y de perfil de encía.",
        },
      ],
      duracion: "Varios meses entre la colocación y la corona definitiva",
      sesiones: "3 a 5 visitas más los controles",
      faqs: [
        {
          _fuente: "ia",
          pregunta: "¿Se ve distinto al resto de los dientes?",
          respuesta:
            "El objetivo es que no. El color se selecciona con registro y la forma se diseña sobre el modelo digital, con atención especial a cómo emerge la corona de la encía.",
        },
        {
          _fuente: "ia",
          pregunta: "¿Se puede colocar el mismo día de la extracción?",
          respuesta:
            "En algunos casos sí y en otros conviene esperar la cicatrización. Depende del estado del hueso y de si había infección en la zona.",
        },
        {
          _fuente: "ia",
          pregunta: "¿Qué cuidados necesita después?",
          respuesta:
            "Higiene específica alrededor del implante y controles periódicos. La encía alrededor de un implante se inflama igual que la de un diente si no se limpia bien.",
        },
      ],
      relacionados: [
        "rehabilitacion-sobre-implantes",
        "extracciones-dentales",
        "coronas-dentales",
      ],
    },
    {
      _fuente: "ia",
      slug: "rehabilitacion-sobre-implantes",
      pilar: "implantes-dentales",
      nombre: "Rehabilitación sobre implantes",
      h1: "Rehabilitación sobre implantes en Núñez, Buenos Aires",
      title: "Rehabilitación sobre Implantes en Núñez | Smile Design Center",
      description:
        "Prótesis fija sobre implantes en Núñez para varias piezas ausentes, planificada por un especialista en rehabilitación. Consulta sin cargo.",
      resumen:
        "Prótesis fija sobre varios implantes para resolver sectores o arcadas completas.",
      imagen: {
        src: "/images/implan1-jpg.webp",
        alt: "Rehabilitación protésica sobre implantes en sector posterior",
      },
      queEs: [
        "Cuando faltan varias piezas contiguas o una arcada completa, la solución no es un implante por diente sino una prótesis fija sostenida por un número planificado de implantes. El diseño define cuántos implantes hacen falta, dónde se ubican y cómo se distribuye la carga masticatoria entre ellos.",
        "Es el terreno propio de la rehabilitación dentobucomaxilar: hay que resolver la altura de mordida, la relación entre las dos arcadas, el soporte del labio y la higiene futura de la prótesis, además de la estética. Un caso así se planifica por etapas y con provisorios que permiten probar la forma y la función antes de confeccionar lo definitivo. Para pacientes que viajan desde otras provincias o desde el exterior, las etapas se agrupan para reducir el número de viajes.",
      ],
      paraQuien: [
        "Varias piezas contiguas ausentes en el mismo sector.",
        "Arcada completa sin dientes o con piezas condenadas.",
        "Portadores de prótesis removible que quieren una solución fija.",
        "Rehabilitaciones amplias donde hay que recuperar altura de mordida.",
      ],
      proceso: [
        {
          titulo: "Diagnóstico y diseño",
          descripcion:
            "Estudio del hueso, de la mordida y del soporte facial. Se define el número y la posición de los implantes y el tipo de prótesis.",
        },
        {
          titulo: "Cirugía y provisorios",
          descripcion:
            "Colocación de los implantes e instalación de provisorios que permiten probar función y estética durante la integración.",
        },
        {
          titulo: "Prótesis definitiva",
          descripcion:
            "Registro digital, confección, prueba y colocación, con ajuste de contactos y plan de controles e higiene.",
        },
      ],
      duracion: "Varios meses, planificado por etapas",
      sesiones: "Depende del caso; se agrupa para pacientes que viajan",
      faqs: [
        {
          _fuente: "ia",
          pregunta: "¿Cuántos implantes necesito?",
          respuesta:
            "No hay un número fijo: depende del hueso disponible, del sector y del tipo de prótesis. Se define en la planificación y se explica antes de empezar.",
        },
        {
          _fuente: "ia",
          pregunta: "¿La prótesis se saca para limpiar?",
          respuesta:
            "Hay diseños fijos y diseños removibles sobre implantes. Cada uno tiene su indicación y su rutina de higiene; se decide junto con vos en la planificación.",
        },
        {
          _fuente: "ia",
          pregunta: "¿Sirve si vengo del exterior?",
          respuesta:
            "Sí. El plan se organiza en menos visitas y más largas, coordinando la agenda con anticipación. Es parte del programa de turismo odontológico.",
        },
      ],
      relacionados: [
        "implantes-unitarios",
        "coronas-dentales",
        "extracciones-dentales",
      ],
    },
  ],
};
