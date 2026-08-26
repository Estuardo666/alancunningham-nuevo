import type { Pilar } from "./tipos";

export const ODONTOLOGIA_GENERAL: Pilar = {
  _fuente: "ia",
  slug: "odontologia-general",
  nombre: "Odontología general y prevención",
  h1: "Odontología general y prevención en Núñez, Buenos Aires",
  title: "Odontología General y Prevención en Núñez | Smile Design Center",
  description:
    "Limpieza profunda, restauraciones de caries y controles preventivos en Núñez. La base sobre la que se apoya cualquier tratamiento. Consulta sin cargo.",
  eyebrow: "Odontología general",
  resumen:
    "Limpieza, restauraciones y control periódico: lo que evita que un problema chico se convierta en una rehabilitación.",
  tarjeta:
    "Limpieza profunda, restauraciones de caries y controles. Es la base sobre la que se apoya todo lo demás.",
  imagen: {
    src: "/images/PERIODONCIA-jpg.webp",
    alt: "Limpieza profunda periodontal con encías sanas tras el tratamiento",
  },
  queEs: [
    "La odontología general es la puerta de entrada de cualquier plan. Incluye el control periódico, la limpieza profesional, el tratamiento de caries y el diagnóstico temprano de todo lo demás. No es la parte más vistosa del trabajo, pero sí la que decide cuánto tratamiento complejo vas a necesitar dentro de diez años.",
    "El control periódico permite detectar caries cuando todavía se resuelven con una restauración simple, y encías inflamadas antes de que haya pérdida ósea. Cuando esas dos cosas se detectan tarde, la conversación deja de ser sobre una tapadura y pasa a ser sobre endodoncias, coronas o implantes: exactamente el tipo de tratamiento que la prevención evita.",
    "La limpieza profesional, por su parte, remueve el sarro que el cepillo no alcanza, sobre todo por debajo del margen de la encía. Ahí no llega ninguna técnica de higiene domiciliaria, y es donde la enfermedad periodontal avanza en silencio. En la sesión, además, se revisa y se corrige la técnica de cepillado, que es la intervención más barata y más efectiva de toda la odontología.",
  ],
  paraQuien: [
    "Hace más de un año que no te ves con un odontólogo.",
    "Encías que sangran al cepillarte o al pasar hilo dental.",
    "Sensibilidad, molestia al morder o manchas visibles en un diente.",
    "Sarro visible, mal aliento persistente o cambio de color en la encía.",
    "Control previo antes de empezar un tratamiento estético o de ortodoncia.",
    "Pacientes con implantes o prótesis que necesitan controles de mantenimiento.",
  ],
  proceso: [
    {
      titulo: "Consulta inicial",
      descripcion:
        "Revisión completa de la boca, evaluación de encías y de piezas, y estudio radiográfico cuando corresponde. La consulta inicial es sin cargo y dura alrededor de 40 minutos.",
    },
    {
      titulo: "Plan por escrito",
      descripcion:
        "Se te entrega el plan con lo que hay que hacer, en qué orden y qué es urgente y qué no. Sin tratamientos inventados y sin presión.",
    },
    {
      titulo: "Saneamiento",
      descripcion:
        "Limpieza profesional y resolución de caries activas. Es el piso obligatorio antes de cualquier trabajo estético o protésico.",
    },
    {
      titulo: "Controles de mantenimiento",
      descripcion:
        "Controles periódicos para sostener el resultado y detectar temprano lo que aparezca.",
    },
  ],
  beneficios: [
    {
      titulo: "Consulta inicial sin cargo",
      descripcion:
        "40 minutos de evaluación, diagnóstico y plan por escrito, sin compromiso de tratamiento.",
    },
    {
      titulo: "Se dice lo que no hace falta",
      descripcion:
        "El plan distingue lo urgente de lo conveniente y de lo opcional. Vos decidís con esa información adelante.",
    },
    {
      titulo: "Prevención con criterio",
      descripcion:
        "Corregir la técnica de cepillado y controlar a tiempo evita la mayor parte del tratamiento complejo.",
    },
    {
      titulo: "Base para lo demás",
      descripcion:
        "Estética, ortodoncia e implantes se apoyan en una boca sana. Acá empieza cualquiera de esos caminos.",
    },
  ],
  faqs: [
    {
      _fuente: "ia",
      pregunta: "¿Cada cuánto tengo que hacerme una limpieza?",
      respuesta:
        "La frecuencia habitual es cada seis meses, pero se ajusta a cada persona: quien tiene tendencia a formar sarro, fuma o tuvo enfermedad periodontal necesita controles más seguidos.",
    },
    {
      _fuente: "ia",
      pregunta: "¿La limpieza debilita el esmalte?",
      respuesta:
        "No. Remueve sarro y pigmento, no esmalte. La sensación de sensibilidad posterior es transitoria y aparece porque el cuello del diente queda expuesto al sacar el sarro que lo cubría.",
    },
    {
      _fuente: "ia",
      pregunta: "¿Cómo sé si tengo caries si no me duele?",
      respuesta:
        "La mayoría de las caries no duelen hasta que llegan cerca del nervio. Por eso el control periódico con revisión y radiografía es lo único que las detecta a tiempo.",
    },
    {
      _fuente: "ia",
      pregunta: "¿La consulta inicial tiene costo?",
      respuesta:
        "No. La primera consulta es sin cargo e incluye evaluación, diagnóstico y plan de tratamiento por escrito, sin compromiso.",
    },
    {
      _fuente: "pendiente-validacion",
      pregunta: "¿Trabajan con obras sociales?",
      respuesta:
        "Las coberturas vigentes están detalladas en la página de obras sociales. Si la tuya no figura, escribinos y te contamos cómo se puede resolver el caso.",
    },
  ],
  hijos: [
    {
      _fuente: "ia",
      slug: "limpieza-profunda",
      pilar: "odontologia-general",
      nombre: "Limpieza profunda",
      h1: "Limpieza dental profunda en Núñez, Buenos Aires",
      title: "Limpieza Dental Profunda en Núñez | Smile Design Center",
      description:
        "Limpieza profunda y tratamiento periodontal en Núñez: elimina el sarro subgingival y frena la enfermedad de encías. Consulta sin cargo.",
      resumen:
        "Remoción del sarro por encima y por debajo del margen de la encía, con corrección de la técnica de higiene.",
      imagen: {
        src: "/images/PERIODONCIA-jpg.webp",
        alt: "Limpieza profunda periodontal con encías sanas tras el tratamiento",
      },
      queEs: [
        "La limpieza profunda va más allá de la limpieza de rutina: además de remover el sarro visible, trabaja por debajo del margen de la encía, donde se aloja el cálculo que sostiene la inflamación y que ningún cepillo alcanza. Es el tratamiento base de la enfermedad periodontal, la principal causa de pérdida de dientes en adultos.",
        "La sesión incluye el raspaje y alisado de las superficies radiculares, el pulido final y la revisión de la técnica de higiene. Después de la limpieza es normal sentir algo de sensibilidad y notar que la encía se retrae un poco: el sarro estaba ocupando ese espacio. Con la inflamación resuelta, el tejido se afirma y el sangrado desaparece en pocas semanas.",
      ],
      paraQuien: [
        "Encías que sangran al cepillarse o al usar hilo dental.",
        "Sarro visible, mal aliento persistente o encía enrojecida.",
        "Diagnóstico de enfermedad periodontal o bolsas periodontales.",
        "Mantenimiento periódico en pacientes con implantes o prótesis.",
      ],
      proceso: [
        {
          titulo: "Evaluación periodontal",
          descripcion:
            "Revisión del estado de la encía y de la profundidad de las bolsas para definir el alcance del tratamiento.",
        },
        {
          titulo: "Raspaje y alisado",
          descripcion:
            "Remoción del cálculo supragingival y subgingival, por sectores cuando el caso lo requiere.",
        },
        {
          titulo: "Pulido y técnica de higiene",
          descripcion:
            "Pulido final y corrección de la técnica de cepillado y del uso de elementos interdentales.",
        },
      ],
      duracion: "1 a 2 sesiones según el estado de la encía",
      sesiones: "1 a 4 sesiones en casos periodontales",
      faqs: [
        {
          _fuente: "ia",
          pregunta: "¿Duele?",
          respuesta:
            "En casos con inflamación importante puede haber molestia, y se trabaja con anestesia local por sectores. En una limpieza de mantenimiento no suele hacer falta.",
        },
        {
          _fuente: "ia",
          pregunta: "¿Me van a quedar los dientes más separados?",
          respuesta:
            "Puede notarse el espacio que ocupaba el sarro. No es un efecto de la limpieza, es lo que la enfermedad ya había producido y estaba tapado.",
        },
        {
          _fuente: "ia",
          pregunta: "¿Blanquea los dientes?",
          respuesta:
            "Remueve pigmento superficial, así que suelen verse más claros, pero no cambia el color propio del diente. Para eso está el blanqueamiento.",
        },
      ],
      relacionados: [
        "restauraciones-caries",
        "retracciones-gingivales",
        "blanqueamiento-dental",
      ],
    },
    {
      _fuente: "ia",
      slug: "restauraciones-caries",
      pilar: "odontologia-general",
      nombre: "Restauraciones de caries",
      h1: "Restauraciones y tratamiento de caries en Núñez, Buenos Aires",
      title: "Tratamiento de Caries y Restauraciones en Núñez | Smile Design Center",
      description:
        "Restauraciones estéticas de caries en Núñez: composite del color del diente, con anatomía y punto de contacto bien reconstruidos. Consulta sin cargo.",
      resumen:
        "Eliminación de la caries y reconstrucción de la pieza con material estético adherido.",
      imagen: {
        src: "/images/image2-jpeg.webp",
        alt: "Restauración plástica con composite que elimina la caries",
      },
      queEs: [
        "La restauración elimina el tejido afectado por la caries y reconstruye la parte perdida con un material que se adhiere al diente. Cuando la lesión se detecta temprano, el procedimiento es simple, se resuelve en una sesión y conserva prácticamente toda la estructura sana.",
        "Se trabaja con composite del color del diente, seleccionado por tono y estratificado para imitar la traslucidez del esmalte. Los dos puntos que definen la calidad de una restauración son la anatomía masticatoria y el punto de contacto con el diente vecino: si el contacto queda abierto, se acumula comida y aparece una caries nueva en el mismo lugar. Cuando la destrucción es demasiado amplia para el composite directo, se plantea una incrustación.",
      ],
      paraQuien: [
        "Caries detectadas en el control o con sensibilidad asociada.",
        "Manchas oscuras o rugosidad en la superficie de un diente.",
        "Restauraciones antiguas con filtración o desgaste.",
        "Fracturas pequeñas de esmalte o bordes astillados.",
      ],
      proceso: [
        {
          titulo: "Diagnóstico",
          descripcion:
            "Revisión clínica y radiográfica para conocer la extensión real de la lesión.",
        },
        {
          titulo: "Eliminación y aislación",
          descripcion:
            "Remoción del tejido afectado con anestesia local y aislación del campo para asegurar la adhesión.",
        },
        {
          titulo: "Reconstrucción y pulido",
          descripcion:
            "Restauración con composite estratificado, reconstrucción del punto de contacto, ajuste de mordida y pulido.",
        },
      ],
      duracion: "1 sesión por pieza en la mayoría de los casos",
      sesiones: "1 sesión",
      faqs: [
        {
          _fuente: "ia",
          pregunta: "¿Se nota la restauración?",
          respuesta:
            "El composite se selecciona por color y se pule para integrarse con el esmalte. Bien hecha, no se distingue a simple vista.",
        },
        {
          _fuente: "ia",
          pregunta: "¿Cuánto dura?",
          respuesta:
            "Depende del tamaño, de la higiene y de la carga masticatoria. Las restauraciones grandes en molares tienen más desgaste, y ahí a veces conviene una incrustación desde el inicio.",
        },
        {
          _fuente: "ia",
          pregunta: "¿Puedo comer después?",
          respuesta:
            "Sí, una vez que pasa la anestesia. El composite queda endurecido en la misma sesión.",
        },
      ],
      relacionados: [
        "incrustaciones-de-resina",
        "limpieza-profunda",
        "cambio-de-amalgamas",
      ],
    },
  ],
};
