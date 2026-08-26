import type { Pilar } from "./tipos";

export const CIRUGIA_Y_PERIODONCIA: Pilar = {
  _fuente: "ia",
  slug: "cirugia-y-periodoncia",
  nombre: "Cirugía y periodoncia láser",
  h1: "Cirugía y periodoncia láser en Núñez, Buenos Aires",
  title: "Cirugía Oral y Periodoncia Láser en Núñez | Smile Design Center",
  description:
    "Extracciones, frenectomía y gingivectomía con láser y tratamiento de retracciones gingivales en Núñez. Menos sangrado y mejor postoperatorio. Consulta sin cargo.",
  eyebrow: "Cirugía y periodoncia",
  resumen:
    "Procedimientos sobre encía y tejidos de soporte resueltos con láser, que reduce sangrado y acorta el postoperatorio.",
  tarjeta:
    "Extracciones, frenectomía, gingivectomía y tratamiento de retracciones. Trabajamos con láser para un postoperatorio más corto.",
  imagen: {
    src: "/images/3422342342_result.png",
    alt: "Gingivectomía con láser para armonizar el contorno de la encía",
  },
  queEs: [
    "Este pilar agrupa los procedimientos que se hacen sobre la encía, el hueso y los tejidos que sostienen al diente: desde una extracción hasta la corrección del contorno gingival que define cuánta encía se ve al sonreír. Son intervenciones que muchas veces preceden o acompañan a un tratamiento estético o de rehabilitación, y por eso se planifican dentro del caso completo y no como episodios sueltos.",
    "El consultorio trabaja con láser en los procedimientos de tejido blando. La diferencia práctica frente al bisturí convencional es concreta: el láser corta y coagula al mismo tiempo, así que hay menos sangrado durante la intervención, mejor visibilidad del campo, en general menos necesidad de sutura y un postoperatorio más corto y más cómodo. En procedimientos como la frenectomía o la gingivectomía eso cambia bastante la experiencia del paciente.",
    "La periodoncia, por su parte, se ocupa de la salud del tejido de soporte. Encías que sangran, que se retraen y dejan la raíz expuesta, o bolsas periodontales que no se limpian con el cepillo, son la causa número uno de pérdida de piezas en adultos, por encima de la caries. Tratar eso antes de cualquier trabajo estético no es un paso burocrático: una corona o una carilla sobre una encía enferma tiene el fracaso incorporado desde el día uno.",
  ],
  paraQuien: [
    "Piezas condenadas, restos radiculares o cordales que necesitan extracción.",
    "Frenillo labial o lingual que traba el movimiento o abre un espacio entre los incisivos.",
    "Sonrisa gingival o contorno de encía desparejo entre una pieza y otra.",
    "Retracciones gingivales con raíz expuesta y sensibilidad.",
    "Encías que sangran al cepillarse o al usar hilo dental.",
    "Preparación del terreno antes de un tratamiento estético o protésico.",
  ],
  proceso: [
    {
      titulo: "Diagnóstico",
      descripcion:
        "Evaluación clínica y radiográfica del tejido de soporte y de la pieza involucrada. Se define si el procedimiento es aislado o parte de un plan mayor.",
    },
    {
      titulo: "Preparación del terreno",
      descripcion:
        "Cuando hay inflamación o placa, primero se resuelve eso. Ninguna cirugía de encía se hace sobre un tejido inflamado si puede evitarse.",
    },
    {
      titulo: "Intervención",
      descripcion:
        "Procedimiento con anestesia local y, en tejido blando, con láser. Se explican las indicaciones postoperatorias por escrito antes de que te vayas.",
    },
    {
      titulo: "Control y cicatrización",
      descripcion:
        "Control a los pocos días para verificar la cicatrización y continuar con la etapa siguiente del plan si corresponde.",
    },
  ],
  beneficios: [
    {
      titulo: "Láser en tejido blando",
      descripcion:
        "Menos sangrado, mejor visibilidad durante el procedimiento y un postoperatorio en general más corto.",
    },
    {
      titulo: "Menos sutura",
      descripcion:
        "Muchos procedimientos con láser no requieren puntos, lo que simplifica la recuperación.",
    },
    {
      titulo: "La encía se trata antes que la estética",
      descripcion:
        "El tejido de soporte se sanea primero. Es la condición para que cualquier trabajo posterior dure.",
    },
    {
      titulo: "Casos documentados",
      descripcion:
        "El consultorio conserva registro en video de tratamientos de retracción gingival, disponibles para ver antes de decidir.",
    },
  ],
  faqs: [
    {
      _fuente: "ia",
      pregunta: "¿El láser duele menos?",
      respuesta:
        "El procedimiento se hace igualmente con anestesia local. Lo que cambia es el después: menos sangrado, en general menos inflamación y una cicatrización más rápida que con bisturí.",
    },
    {
      _fuente: "ia",
      pregunta: "¿Cuánto dura la recuperación?",
      respuesta:
        "En procedimientos de tejido blando con láser la molestia suele ser leve y de pocos días. En extracciones depende de la complejidad de la pieza; se te indica el tiempo esperado antes de la intervención.",
    },
    {
      _fuente: "ia",
      pregunta: "¿Por qué me sangran las encías?",
      respuesta:
        "El sangrado es señal de inflamación, casi siempre por placa acumulada en el margen de la encía. No es normal y no se resuelve cepillando más fuerte: se resuelve con un tratamiento periodontal y una técnica de higiene adecuada.",
    },
    {
      _fuente: "ia",
      pregunta: "¿Se puede corregir la sonrisa gingival?",
      respuesta:
        "En muchos casos sí, con gingivectomía láser que armoniza el contorno. Hay que evaluar antes la causa, porque no todas las sonrisas gingivales son de origen gingival.",
    },
    {
      _fuente: "pendiente-validacion",
      pregunta: "¿Cuánto cuesta una extracción o una cirugía de encía?",
      respuesta:
        "Depende de la complejidad del procedimiento. El presupuesto se entrega por escrito después de la consulta inicial, que es sin cargo, con el detalle de lo que incluye.",
    },
  ],
  hijos: [
    {
      _fuente: "ia",
      slug: "extracciones-dentales",
      pilar: "cirugia-y-periodoncia",
      nombre: "Extracciones dentales",
      h1: "Extracciones dentales en Núñez, Buenos Aires",
      title: "Extracciones Dentales en Núñez, Buenos Aires | Smile Design Center",
      description:
        "Extracciones dentales en Núñez con anestesia local e indicaciones postoperatorias claras, y plan para reponer la pieza. Consulta sin cargo.",
      resumen:
        "Retiro de piezas no recuperables, con plan de reposición definido desde la misma consulta.",
      imagen: {
        src: "/images/EEEX_result.png",
        alt: "Extracción dental realizada en el consultorio",
      },
      queEs: [
        "La extracción es siempre la última opción, no la primera. Se indica cuando la pieza no es recuperable: fracturas verticales de raíz, destrucción muy avanzada, compromiso periodontal severo o cordales que generan problemas. Antes de indicarla se evalúa si hay alguna alternativa conservadora, porque ningún reemplazo iguala al diente propio.",
        "El procedimiento se hace con anestesia local y las indicaciones postoperatorias se entregan por escrito: qué esperar las primeras horas, qué comer, qué evitar y cuándo consultar. Igual de importante es lo que viene después: dejar un espacio vacío hace que los dientes vecinos migren y el antagonista extruya, así que la reposición —implante, prótesis o el plan que corresponda— se decide en la misma consulta en la que se decide la extracción.",
      ],
      paraQuien: [
        "Piezas con fractura de raíz o destrucción irrecuperable.",
        "Compromiso periodontal severo con movilidad marcada.",
        "Cordales retenidas o que generan inflamación recurrente.",
        "Extracciones planificadas dentro de un tratamiento de ortodoncia.",
      ],
      proceso: [
        {
          titulo: "Evaluación",
          descripcion:
            "Estudio clínico y radiográfico para confirmar que no hay alternativa conservadora y planificar la reposición.",
        },
        {
          titulo: "Extracción",
          descripcion:
            "Procedimiento ambulatorio con anestesia local y cuidado del hueso remanente pensando en el implante futuro.",
        },
        {
          titulo: "Control y reposición",
          descripcion:
            "Control de la cicatrización y ejecución del plan de reposición acordado.",
        },
      ],
      duracion: "1 sesión, más el control postoperatorio",
      sesiones: "1 a 2 sesiones",
      faqs: [
        {
          _fuente: "ia",
          pregunta: "¿Duele después?",
          respuesta:
            "Es esperable molestia e inflamación durante los primeros días, que se controlan con la medicación indicada. Si el dolor aumenta en vez de disminuir, hay que consultar.",
        },
        {
          _fuente: "ia",
          pregunta: "¿Puedo quedarme sin reponer la pieza?",
          respuesta:
            "Podés, pero tiene costo biológico: los dientes vecinos se inclinan hacia el espacio y el antagonista baja. Con el tiempo, reponer se vuelve más complejo y más caro.",
        },
        {
          _fuente: "ia",
          pregunta: "¿Cuánto hay que esperar para el implante?",
          respuesta:
            "Depende del estado del hueso y de si había infección. A veces se coloca en el mismo acto y otras conviene esperar la cicatrización; se define en la planificación.",
        },
      ],
      relacionados: [
        "implantes-unitarios",
        "rehabilitacion-sobre-implantes",
        "tratamiento-de-conducto",
      ],
    },
    {
      _fuente: "ia",
      slug: "frenectomia-laser",
      pilar: "cirugia-y-periodoncia",
      nombre: "Frenectomía láser",
      h1: "Frenectomía con láser en Núñez, Buenos Aires",
      title: "Frenectomía Láser en Núñez, Buenos Aires | Smile Design Center",
      description:
        "Frenectomía labial y lingual con láser en Núñez: procedimiento breve, poco sangrado y recuperación rápida. Consulta inicial sin cargo.",
      resumen:
        "Liberación del frenillo labial o lingual con láser, con mínimo sangrado y sin sutura en la mayoría de los casos.",
      imagen: {
        src: "/images/frenec1-jpg.webp",
        alt: "Frenectomía con láser: liberación del frenillo labial antes y después",
      },
      queEs: [
        "El frenillo es el pliegue de tejido que une el labio o la lengua con la encía. Cuando su inserción es demasiado baja o demasiado corta puede empujar la encía, abrir un espacio entre los incisivos centrales, limitar el movimiento de la lengua o complicar la estabilidad de una prótesis.",
        "La frenectomía libera esa inserción. Hecha con láser, el procedimiento es breve, tiene poco sangrado, en la mayoría de los casos no requiere sutura y la cicatrización es rápida. Es frecuente indicarla junto con ortodoncia —para cerrar y mantener cerrado el espacio entre los incisivos— o como paso previo a un tratamiento protésico.",
      ],
      paraQuien: [
        "Espacio entre los incisivos centrales asociado a un frenillo labial bajo.",
        "Frenillo lingual corto que limita el movimiento de la lengua.",
        "Retracción de la encía provocada por la tracción del frenillo.",
        "Prótesis que se desestabiliza por la inserción del frenillo.",
      ],
      proceso: [
        {
          titulo: "Evaluación",
          descripcion:
            "Se estudia la inserción del frenillo y su relación con el motivo de consulta.",
        },
        {
          titulo: "Procedimiento con láser",
          descripcion:
            "Intervención breve con anestesia local, con mínimo sangrado y generalmente sin puntos.",
        },
        {
          titulo: "Control",
          descripcion:
            "Control de la cicatrización y coordinación con la etapa de ortodoncia o de prótesis si corresponde.",
        },
      ],
      duracion: "Una sesión breve",
      sesiones: "1 sesión más control",
      faqs: [
        {
          _fuente: "ia",
          pregunta: "¿Deja cicatriz?",
          respuesta:
            "La cicatrización con láser suele ser muy buena y el tejido se reorganiza sin marca visible en la mayoría de los casos.",
        },
        {
          _fuente: "ia",
          pregunta: "¿Cierra solo el espacio entre los dientes?",
          respuesta:
            "No siempre. La frenectomía quita la causa, pero el cierre del espacio suele necesitar ortodoncia y después contención para que no se vuelva a abrir.",
        },
        {
          _fuente: "ia",
          pregunta: "¿Qué cuidados hay después?",
          respuesta:
            "Dieta blanda y fría los primeros días, higiene suave de la zona y la medicación que se indique. Las molestias son leves.",
        },
      ],
      relacionados: [
        "gingivectomia-laser",
        "alineadores-invisibles",
        "retracciones-gingivales",
      ],
    },
    {
      _fuente: "ia",
      slug: "gingivectomia-laser",
      pilar: "cirugia-y-periodoncia",
      nombre: "Gingivectomía láser",
      h1: "Gingivectomía con láser en Núñez, Buenos Aires",
      title: "Gingivectomía Láser en Núñez, Buenos Aires | Smile Design Center",
      description:
        "Gingivectomía con láser en Núñez para armonizar el contorno de la encía y corregir la sonrisa gingival. Consulta inicial sin cargo.",
      resumen:
        "Remodelado del contorno gingival con láser para equilibrar la proporción de la sonrisa.",
      imagen: {
        src: "/images/3422342342_result.png",
        alt: "Gingivectomía con láser para armonizar el contorno de la encía",
      },
      queEs: [
        "La gingivectomía remodela el contorno de la encía. Es un procedimiento estético y funcional a la vez: corrige la sonrisa gingival, empareja el nivel de la encía entre una pieza y otra y, en algunos casos, expone la estructura dental necesaria para poder restaurar bien una pieza.",
        "Hecha con láser, el corte y la coagulación ocurren a la vez, así que el campo queda limpio, se ve con precisión el contorno que se está creando y la cicatrización es rápida. Suele integrarse dentro de un plan estético: primero se define el diseño de sonrisa, y el contorno gingival se ajusta a esa proporción antes de hacer carillas o restauraciones.",
      ],
      paraQuien: [
        "Sonrisa gingival, donde se ve más encía que diente.",
        "Contorno de encía desparejo entre piezas contiguas.",
        "Dientes que se ven cortos por exceso de encía y no por desgaste.",
        "Necesidad de exponer estructura dental antes de una restauración.",
      ],
      proceso: [
        {
          titulo: "Diseño del contorno",
          descripcion:
            "Se define el nivel de encía deseado dentro del diseño de sonrisa, no de forma aislada.",
        },
        {
          titulo: "Procedimiento con láser",
          descripcion:
            "Remodelado con anestesia local, con mínimo sangrado y visualización precisa del contorno.",
        },
        {
          titulo: "Cicatrización y etapa estética",
          descripcion:
            "Control de la cicatrización y, cuando corresponde, ejecución de las restauraciones planificadas.",
        },
      ],
      duracion: "Una sesión, más el tiempo de cicatrización antes de restaurar",
      sesiones: "1 sesión más controles",
      faqs: [
        {
          _fuente: "ia",
          pregunta: "¿La encía vuelve a crecer?",
          respuesta:
            "Si el diagnóstico y la técnica fueron correctos, el contorno se mantiene estable. Cuando la causa es otra —por ejemplo un exceso óseo o un problema de labio— la gingivectomía sola no alcanza.",
        },
        {
          _fuente: "ia",
          pregunta: "¿Se puede hacer junto con las carillas?",
          respuesta:
            "Se hace antes, y se espera la cicatrización para que el margen de la restauración quede definitivo y estable.",
        },
        {
          _fuente: "ia",
          pregunta: "¿Es dolorosa?",
          respuesta:
            "Se hace con anestesia local y el postoperatorio con láser suele ser leve, con molestia de pocos días.",
        },
      ],
      relacionados: [
        "diseno-de-sonrisa",
        "carillas-de-porcelana",
        "frenectomia-laser",
      ],
    },
    {
      _fuente: "ia",
      slug: "retracciones-gingivales",
      pilar: "cirugia-y-periodoncia",
      nombre: "Retracciones gingivales",
      h1: "Tratamiento de retracciones gingivales en Núñez, Buenos Aires",
      title: "Retracciones Gingivales en Núñez | Smile Design Center",
      description:
        "Tratamiento de retracciones gingivales en Núñez: cubre la raíz expuesta, reduce la sensibilidad y frena la progresión. Consulta sin cargo.",
      resumen:
        "Tratamiento de la encía retraída que deja la raíz expuesta y genera sensibilidad.",
      imagen: {
        src: "/images/thumbnail_image0-6-jpg.webp",
        alt: "Resultado de tratamiento de retracción gingival, vista clínica",
      },
      queEs: [
        "La retracción gingival es el desplazamiento del margen de la encía hacia la raíz, que queda expuesta. Se ve como un diente más largo, muchas veces con un escalón amarillento en el cuello, y suele venir acompañada de sensibilidad al frío. Las causas más frecuentes son el cepillado traumático, la enfermedad periodontal, el bruxismo y ciertas posiciones dentarias.",
        "El tratamiento tiene dos partes. Primero hay que detener la causa: corregir la técnica de cepillado, tratar la enfermedad periodontal si está presente, controlar el bruxismo con placa. Segundo, según el caso, se puede cubrir la superficie expuesta mediante procedimientos de recubrimiento radicular. El consultorio tiene registro en video de tratamientos realizados, que se pueden ver en la consulta antes de decidir.",
      ],
      paraQuien: [
        "Sensibilidad al frío en el cuello del diente.",
        "Dientes que se ven cada vez más largos.",
        "Raíz expuesta visible en el sector estético.",
        "Antecedentes de cepillado traumático o de enfermedad periodontal.",
      ],
      proceso: [
        {
          titulo: "Diagnóstico de la causa",
          descripcion:
            "Se identifica qué está produciendo la retracción antes de intentar cubrirla: sin eso, vuelve.",
        },
        {
          titulo: "Control de los factores",
          descripcion:
            "Corrección de la técnica de higiene, tratamiento periodontal y placa de descarga si hay bruxismo.",
        },
        {
          titulo: "Recubrimiento",
          descripcion:
            "Cuando está indicado, procedimiento para cubrir la superficie radicular expuesta y control posterior.",
        },
      ],
      duracion: "Según el caso; incluye etapa de control de causas",
      sesiones: "2 a 4 sesiones",
      videos: [
        "/videos/Alan1.mp4",
        "/videos/Alan2.mp4",
        "/videos/Alan3.mp4",
      ],
      faqs: [
        {
          _fuente: "ia",
          pregunta: "¿La encía vuelve sola a su lugar?",
          respuesta:
            "No. El tejido perdido no se regenera espontáneamente; lo que sí se puede hacer es frenar la progresión y, en casos seleccionados, cubrir la superficie expuesta.",
        },
        {
          _fuente: "ia",
          pregunta: "¿Por qué me duele con el frío?",
          respuesta:
            "Porque la raíz no tiene esmalte que la aísle. Al quedar expuesta, los estímulos llegan más directo. Se maneja con desensibilizantes mientras se trata la causa.",
        },
        {
          _fuente: "ia",
          pregunta: "¿Estoy cepillando mal?",
          respuesta:
            "Es una de las causas más frecuentes: demasiada fuerza, cerdas duras y movimiento horizontal. En la consulta se corrige la técnica, que es gratis y es lo que más impacto tiene.",
        },
      ],
      relacionados: [
        "limpieza-profunda",
        "gingivectomia-laser",
        "restauraciones-caries",
      ],
    },
  ],
};
