/** @type {Array<Object>} Banco de preguntas para examen PMI-RMP */
const rmpQuestions = [

    // ─────────────────────────────────────────────────────────────────────────
    // DOMINIO I: ESTRATEGIA Y PLANIFICACIÓN DEL RIESGO (13 preguntas)
    // ─────────────────────────────────────────────────────────────────────────

    {
        question: "Eres el gerente de riesgos de un proyecto de construcción de una subestación eléctrica. Antes de iniciar la identificación formal de riesgos, ¿cuál es la acción MÁS importante que debes realizar?",
        options: [
            "Convocar al equipo a una sesión de lluvia de ideas para listar todos los riesgos posibles.",
            "Revisar documentos preliminares como lecciones aprendidas de proyectos similares, benchmarks de la industria y datos históricos.",
            "Definir el presupuesto de contingencia basado en la experiencia del equipo.",
            "Solicitar al patrocinador que apruebe el plan de gestión de riesgos antes de cualquier análisis."
        ],
        answer: ["Revisar documentos preliminares como lecciones aprendidas de proyectos similares, benchmarks de la industria y datos históricos."],
        rationale: "Según el ECO PMI-RMP, el Task 1 del Dominio I establece que el análisis de documentos preliminares es el punto de partida. Revisar lecciones aprendidas, benchmarks e históricos proporciona el contexto necesario antes de cualquier actividad de identificación, garantizando que el proceso se base en evidencia y no solo en percepción.",
        tags: {
            format:    "opción_única",
            domain:    "estrategia_y_planificación",
            method:    "predictivo",
            cognitive: "aplicación"
        }
    },
    {
        question: "Durante la fase de planificación de un proyecto de modernización de red eléctrica, el gerente de riesgos realiza un análisis PESTLE. ¿Cuál es el propósito principal de este análisis en el contexto de la gestión de riesgos?",
        options: [
            "Identificar los riesgos técnicos asociados al diseño de la red.",
            "Evaluar los factores del entorno externo que pueden representar amenazas u oportunidades para el proyecto.",
            "Determinar el apetito al riesgo de la organización.",
            "Establecer los umbrales de riesgo aceptables para el patrocinador."
        ],
        answer: ["Evaluar los factores del entorno externo que pueden representar amenazas u oportunidades para el proyecto."],
        rationale: "El análisis PESTLE (Político, Económico, Social, Tecnológico, Legal, Ambiental) es una herramienta para evaluar factores del entorno externo. En el Task 2 del Dominio I, el ECO PMI-RMP lo menciona explícitamente como herramienta para analizar el ambiente del proyecto en busca de amenazas y oportunidades.",
        tags: {
            format:    "opción_única",
            domain:    "estrategia_y_planificación",
            method:    "predictivo",
            cognitive: "conocimiento"
        }
    },
    {
        question: "El comité directivo de tu organización tiene una postura conservadora ante las pérdidas financieras, pero acepta variaciones moderadas en el cronograma. ¿Cómo debe reflejarse esto en el plan de gestión de riesgos?",
        options: [
            "Definiendo umbrales de riesgo diferenciados: uno más estricto para impactos en costo y uno más flexible para impactos en cronograma.",
            "Aplicando el mismo umbral de tolerancia a todas las categorías de riesgo para mantener consistencia.",
            "Delegando la definición de umbrales al equipo de proyecto, ya que conocen mejor los detalles técnicos.",
            "Esperando a completar el análisis cualitativo antes de definir umbrales."
        ],
        answer: ["Definiendo umbrales de riesgo diferenciados: uno más estricto para impactos en costo y uno más flexible para impactos en cronograma."],
        rationale: "La Tarea 3 del Dominio I establece que los umbrales de riesgo deben alinearse al apetito al riesgo organizacional. Cuando ese apetito es diferente por dimensión (costo vs. cronograma), los umbrales deben ser diferenciados para reflejar con precisión la tolerancia real de la organización.",
        tags: {
            format:    "opción_única",
            domain:    "estrategia_y_planificación",
            method:    "predictivo",
            cognitive: "análisis"
        }
    },
    {
        question: "Dos patrocinadores de un proyecto tienen posiciones opuestas sobre el nivel de riesgo aceptable: uno exige tolerancia cero a demoras y el otro acepta hasta 30 días de retraso si se reduce el costo. ¿Cuál es la responsabilidad del gerente de riesgos en este escenario?",
        options: [
            "Adoptar el umbral más restrictivo para proteger el proyecto.",
            "Presentar ambas posturas al director general para que tome la decisión.",
            "Liderar una resolución de conflictos entre los interesados para lograr un acuerdo sobre el apetito al riesgo.",
            "Promediar ambas posiciones y documentar el umbral resultante en el plan."
        ],
        answer: ["Liderar una resolución de conflictos entre los interesados para lograr un acuerdo sobre el apetito al riesgo."],
        rationale: "La Tarea 3 del Dominio I asigna explícitamente al gerente de riesgos la responsabilidad de liderar la resolución de conflictos entre interesados cuando hay desacuerdo sobre el apetito al riesgo. Adoptar un umbral sin consenso o escalar sin intentar resolver el conflicto son enfoques menos efectivos.",
        tags: {
            format:    "opción_única",
            domain:    "estrategia_y_planificación",
            method:    "predictivo",
            cognitive: "aplicación"
        }
    },
    {
        question: "¿Cuáles de los siguientes elementos deben estar incluidos en un plan de gestión de riesgos bien documentado? (Selecciona todos los que apliquen)",
        options: [
            "Roles y responsabilidades en la gestión de riesgos.",
            "Lista detallada de todos los riesgos identificados con su probabilidad e impacto.",
            "Criterios de priorización de riesgos.",
            "Metodología y herramientas para gestionar riesgos.",
            "Plan de comunicación de riesgos.",
            "Presupuesto aprobado para contingencias."
        ],
        answer: [
            "Roles y responsabilidades en la gestión de riesgos.",
            "Criterios de priorización de riesgos.",
            "Metodología y herramientas para gestionar riesgos.",
            "Plan de comunicación de riesgos."
        ],
        rationale: "Según el Task 5 del Dominio I y la Guía PMBOK, el plan de gestión de riesgos define: metodología, roles y responsabilidades, categorías de riesgo, definiciones de probabilidad e impacto, criterios de priorización y plan de comunicación. La lista de riesgos identificados pertenece al registro de riesgos, no al plan. El presupuesto de contingencias resulta del análisis, no del plan en sí.",
        tags: {
            format:    "opción_múltiple",
            domain:    "estrategia_y_planificación",
            method:    "predictivo",
            cognitive: "conocimiento"
        }
    },
    {
        question: "Durante la planificación de un proyecto de expansión de líneas de transmisión, el gerente de riesgos descubre que el equipo no tiene cultura de reporte de riesgos: los miembros omiten mencionar problemas para no parecer negativos. ¿Cuál es la acción MÁS adecuada?",
        options: [
            "Establecer métricas de desempeño que penalicen a quienes no reporten riesgos.",
            "Capacitar, entrenar y empoderar a los interesados en principios de gestión de riesgos para crear comprensión compartida y fomentar participación.",
            "Asumir la identificación de riesgos como responsabilidad exclusiva del gerente de riesgos.",
            "Escalar la situación al patrocinador para que exija el reporte de riesgos al equipo."
        ],
        answer: ["Capacitar, entrenar y empoderar a los interesados en principios de gestión de riesgos para crear comprensión compartida y fomentar participación."],
        rationale: "La Tarea 6 del Dominio I establece explícitamente que el gerente de riesgos debe entrenar, asesorar y educar a los interesados en principios y procesos de riesgo para crear comprensión compartida y fomentar el compromiso. La penalización o la centralización del proceso son contraproducentes para construir una cultura de riesgo.",
        tags: {
            format:    "opción_única",
            domain:    "estrategia_y_planificación",
            method:    "predictivo",
            cognitive: "aplicación"
        }
    },
    {
        question: "La Estructura de Desglose de Riesgos (RBS) es una herramienta clave en la planificación de la gestión de riesgos. ¿Cuál es su función principal dentro del plan de gestión de riesgos?",
        options: [
            "Asignar propietarios a cada riesgo identificado en el registro.",
            "Organizar y categorizar las fuentes potenciales de riesgo de forma jerárquica para facilitar su identificación y análisis.",
            "Definir el presupuesto de reservas de contingencia por categoría.",
            "Establecer la secuencia en que deben atenderse los riesgos según su prioridad."
        ],
        answer: ["Organizar y categorizar las fuentes potenciales de riesgo de forma jerárquica para facilitar su identificación y análisis."],
        rationale: "La RBS es una representación jerárquica de las fuentes de riesgo organizadas por categoría. Su propósito es estructurar el pensamiento sobre de dónde pueden provenir los riesgos, apoyando tanto la identificación como la planificación. La Tarea 5 del Dominio I la menciona como soporte al plan de gestión de riesgos.",
        tags: {
            format:    "opción_única",
            domain:    "estrategia_y_planificación",
            method:    "predictivo",
            cognitive: "conocimiento"
        }
    },
    {
        question: "En un proyecto ágil de implementación de un sistema SCADA para monitoreo de red eléctrica, el equipo trabaja en sprints de dos semanas. ¿Cómo debe adaptarse la estrategia de gestión de riesgos a este contexto?",
        options: [
            "Crear un plan de gestión de riesgos completo al inicio y no modificarlo durante el proyecto.",
            "Integrar la identificación y revisión de riesgos en las ceremonias del sprint, como la retrospectiva y la planificación.",
            "Eliminar la gestión formal de riesgos ya que el enfoque ágil incorpora la incertidumbre de forma natural.",
            "Aplicar gestión de riesgos únicamente al inicio de cada fase mayor del proyecto."
        ],
        answer: ["Integrar la identificación y revisión de riesgos en las ceremonias del sprint, como la retrospectiva y la planificación."],
        rationale: "En entornos ágiles, la gestión de riesgos se integra en el ciclo iterativo. Las ceremonias del sprint son el espacio natural para revisar riesgos emergentes, evaluar el impacto de cambios y ajustar estrategias. El ECO PMI-RMP reconoce que los tres enfoques (predictivo, ágil, híbrido) coexisten y el gerente de riesgos debe adaptar su estrategia al contexto.",
        tags: {
            format:    "opción_única",
            domain:    "estrategia_y_planificación",
            method:    "ágil",
            cognitive: "aplicación"
        }
    },
    {
        question: "Un proyecto híbrido de modernización de subestaciones combina fases predictivas de ingeniería con fases ágiles de configuración de software. ¿Cuál es el enfoque MÁS adecuado para la estrategia de gestión de riesgos?",
        options: [
            "Aplicar un plan de gestión de riesgos predictivo estándar a todas las fases del proyecto.",
            "Diseñar una estrategia diferenciada: planificación formal para las fases de ingeniería e integración iterativa de riesgos para las fases ágiles.",
            "Dejar que cada equipo gestione sus propios riesgos según su metodología sin un marco unificado.",
            "Usar solo el registro de riesgos como herramienta unificada y prescindir de un plan formal."
        ],
        answer: ["Diseñar una estrategia diferenciada: planificación formal para las fases de ingeniería e integración iterativa de riesgos para las fases ágiles."],
        rationale: "En proyectos híbridos, el ECO PMI-RMP señala que el gerente de riesgos debe adaptar la estrategia al enfoque de cada fase. Las fases predictivas requieren planificación formal con umbrales, registros y planes de respuesta estructurados; las fases ágiles integran la gestión de riesgos en los ciclos iterativos. Un marco unificado pero flexible es la clave.",
        tags: {
            format:    "opción_única",
            domain:    "estrategia_y_planificación",
            method:    "híbrido",
            cognitive: "análisis"
        }
    },
    {
        question: "Ordena los siguientes pasos del proceso de planificación de la gestión de riesgos según la secuencia correcta del estándar PMI:",
        options: [
            "Documentar el plan de gestión de riesgos",
            "Realizar el análisis del entorno del proyecto (EEF/OPA)",
            "Confirmar los umbrales de riesgo basados en el apetito al riesgo",
            "Establecer la estrategia de gestión de riesgos",
            "Planificar y liderar actividades de gestión de riesgos con interesados"
        ],
        answer: [
            "Realizar el análisis del entorno del proyecto (EEF/OPA)",
            "Confirmar los umbrales de riesgo basados en el apetito al riesgo",
            "Establecer la estrategia de gestión de riesgos",
            "Documentar el plan de gestión de riesgos",
            "Planificar y liderar actividades de gestión de riesgos con interesados"
        ],
        rationale: "Según el Dominio I del ECO PMI-RMP, la secuencia lógica inicia con el análisis del entorno para entender el contexto, luego se definen los umbrales alineados al apetito al riesgo, se establece la estrategia, se formaliza en el plan documentado y finalmente se involucra a los interesados para alinear expectativas y compromisos.",
        tags: {
            format:    "ordenamiento",
            domain:    "estrategia_y_planificación",
            method:    "predictivo",
            cognitive: "conocimiento"
        }
    },
    {
        question: "El gerente de riesgos de un proyecto de infraestructura eléctrica identifica que la organización tiene una cultura de riesgo inmadura: los equipos no documentan riesgos y las decisiones se toman de manera reactiva. ¿Cuál es la acción MÁS efectiva a largo plazo?",
        options: [
            "Implementar controles estrictos que obliguen a los equipos a reportar riesgos semanalmente bajo penalización.",
            "Enfocarse en los riesgos del proyecto actual y dejar la transformación cultural para después.",
            "Fomentar activamente una cultura de conciencia del riesgo mediante capacitación, liderazgo servicial y empoderamiento de los interesados.",
            "Contratar un consultor externo que gestione todos los riesgos del proyecto."
        ],
        answer: ["Fomentar activamente una cultura de conciencia del riesgo mediante capacitación, liderazgo servicial y empoderamiento de los interesados."],
        rationale: "El ECO PMI-RMP en el Task 2 y Task 6 del Dominio I establece que el gerente de riesgos debe fomentar una cultura de conciencia del riesgo. El liderazgo servicial (servant leadership) es el enfoque recomendado: guiar con el ejemplo, capacitar y empoderar. Los controles coercitivos generan reporte superficial, no cultura genuina.",
        tags: {
            format:    "opción_única",
            domain:    "estrategia_y_planificación",
            method:    "predictivo",
            cognitive: "análisis"
        }
    },
    {
        question: "Al iniciar la planificación de riesgos de un proyecto, el gerente descubre que existe información contradictoria en los documentos preliminares: los datos históricos sugieren alta probabilidad de demoras por permisos ambientales, pero la gerencia asume que no habrá problemas. ¿Qué debe hacer el gerente de riesgos?",
        options: [
            "Tomar los datos históricos como base y documentar el riesgo de demoras por permisos en el registro.",
            "Alinearse con la posición de la gerencia para evitar conflictos en la fase de planificación.",
            "Presentar la contradicción a los interesados clave, respaldándose en los datos históricos, y facilitar una discusión para definir el enfoque correcto.",
            "Solicitar un estudio adicional antes de tomar cualquier decisión sobre el riesgo."
        ],
        answer: ["Presentar la contradicción a los interesados clave, respaldándose en los datos históricos, y facilitar una discusión para definir el enfoque correcto."],
        rationale: "El gerente de riesgos tiene la responsabilidad de basar el proceso en evidencia y de facilitar conversaciones difíciles. Ignorar datos históricos por conveniencia política introduce sesgo de optimismo. La solución es transparencia: presentar los datos, facilitar la discusión y lograr consenso informado. La Tarea 1 y Task 6 del Dominio I respaldan esta postura.",
        tags: {
            format:    "opción_única",
            domain:    "estrategia_y_planificación",
            method:    "predictivo",
            cognitive: "análisis"
        }
    },
    {
        question: "¿Cuáles de los siguientes son factores que el gerente de riesgos debe analizar al evaluar el entorno del proyecto para amenazas y oportunidades? (Selecciona todos los que apliquen)",
        options: [
            "Factores ambientales de la empresa (EEF) como la cultura organizacional y las condiciones del mercado.",
            "Activos de los procesos de la organización (OPA) como plantillas, lecciones aprendidas y bases de datos históricas.",
            "El salario de los miembros del equipo de proyecto.",
            "La metodología de gestión de proyectos adoptada (ágil, predictiva, híbrida).",
            "El análisis de interesados realizado por el director de proyecto."
        ],
        answer: [
            "Factores ambientales de la empresa (EEF) como la cultura organizacional y las condiciones del mercado.",
            "Activos de los procesos de la organización (OPA) como plantillas, lecciones aprendidas y bases de datos históricas.",
            "La metodología de gestión de proyectos adoptada (ágil, predictiva, híbrida).",
            "El análisis de interesados realizado por el director de proyecto."
        ],
        rationale: "La Tarea 2 del Dominio I establece que el gerente de riesgos debe considerar EEF, OPA, la metodología del proyecto y el análisis de interesados. Los salarios individuales no son factores de entorno relevantes para la evaluación de riesgos estratégicos del proyecto.",
        tags: {
            format:    "opción_múltiple",
            domain:    "estrategia_y_planificación",
            method:    "predictivo",
            cognitive: "conocimiento"
        }
    },

    // ─────────────────────────────────────────────────────────────────────────
    // DOMINIO II: IDENTIFICACIÓN DE RIESGOS (14 preguntas)
    // ─────────────────────────────────────────────────────────────────────────

    {
        question: "Durante una sesión de identificación de riesgos para un proyecto de instalación de torres de transmisión, un miembro del equipo menciona que 'siempre ha llovido en la zona durante los meses de construcción'. ¿Cómo debe clasificar el gerente de riesgos esta información?",
        options: [
            "Como un supuesto del proyecto que no requiere gestión de riesgos.",
            "Como una restricción del cronograma que debe documentarse en el acta de constitución.",
            "Como un disparador de riesgo que debe analizarse para determinar su impacto en el cronograma y documentarse en el registro de riesgos.",
            "Como información irrelevante, ya que las condiciones climáticas no son controlables."
        ],
        answer: ["Como un disparador de riesgo que debe analizarse para determinar su impacto en el cronograma y documentarse en el registro de riesgos."],
        rationale: "La lluvia estacional es un riesgo predecible con disparador conocido (la temporada de lluvias). La Tarea 3 del Dominio II establece que deben documentarse los disparadores, causas y tiempos de los riesgos. Clasificarla como supuesto sin análisis significa ignorar un riesgo real; descartarla por ser incontrolable elimina la posibilidad de planificar una respuesta.",
        tags: {
            format:    "opción_única",
            domain:    "identificación_de_riesgos",
            method:    "predictivo",
            cognitive: "aplicación"
        }
    },
    {
        question: "En una sesión de identificación de riesgos, el equipo identifica que el principal proveedor de transformadores tiene historial de incumplimientos en proyectos anteriores. ¿Cuál es la clasificación MÁS adecuada para este riesgo?",
        options: [
            "Riesgo interno y amenaza.",
            "Riesgo externo y amenaza.",
            "Riesgo externo y oportunidad.",
            "Riesgo interno y oportunidad."
        ],
        answer: ["Riesgo externo y amenaza."],
        rationale: "El proveedor es una entidad externa a la organización ejecutora. El historial de incumplimientos representa una amenaza (impacto negativo potencial) sobre el cronograma y/o el costo del proyecto. La Tarea 4 del Dominio II establece que los riesgos deben clasificarse por origen (interno/externo) y tipo (amenaza/oportunidad).",
        tags: {
            format:    "opción_única",
            domain:    "identificación_de_riesgos",
            method:    "predictivo",
            cognitive: "aplicación"
        }
    },
    {
        question: "El equipo de un proyecto identifica el siguiente enunciado: 'Si el regulador modifica los requisitos de seguridad eléctrica durante la fase de construcción, entonces el proyecto deberá rediseñar los sistemas de protección, lo que podría incrementar el costo en un 15%'. ¿Qué componentes del registro de riesgos están representados en este enunciado?",
        options: [
            "Únicamente la causa y el impacto.",
            "El riesgo, la causa y el impacto.",
            "El disparador, el riesgo y la respuesta.",
            "La condición de riesgo, el evento de riesgo y el efecto sobre los objetivos del proyecto."
        ],
        answer: ["La condición de riesgo, el evento de riesgo y el efecto sobre los objetivos del proyecto."],
        rationale: "El enunciado sigue el formato estándar de riesgo: condición (modificación regulatoria), evento (rediseño requerido), efecto (incremento del 15% en costo). Este formato de tres partes es fundamental para documentar riesgos de manera precisa en el registro. La Tarea 4 del Dominio II enfatiza analizar atributos como probabilidad, impacto y origen.",
        tags: {
            format:    "opción_única",
            domain:    "identificación_de_riesgos",
            method:    "predictivo",
            cognitive: "análisis"
        }
    },
    {
        question: "Durante la identificación de riesgos, el equipo discute el supuesto de que 'los permisos de servidumbre serán obtenidos sin oposición de los propietarios de terrenos'. ¿Cuál es la acción MÁS adecuada del gerente de riesgos respecto a este supuesto?",
        options: [
            "Aceptar el supuesto tal como está, ya que es responsabilidad del área legal manejarlo.",
            "Eliminar el supuesto del plan ya que introduce incertidumbre.",
            "Evaluar el riesgo asociado al supuesto: si falla, ¿cuál es la probabilidad e impacto sobre los objetivos del proyecto?",
            "Convertir el supuesto en una restricción para eliminar la ambigüedad."
        ],
        answer: ["Evaluar el riesgo asociado al supuesto: si falla, ¿cuál es la probabilidad e impacto sobre los objetivos del proyecto?"],
        rationale: "La Tarea 2 del Dominio II establece explícitamente que se debe evaluar el riesgo asociado a cada supuesto y restricción. Los supuestos son fuente directa de riesgos: si el supuesto falla, hay un impacto sobre los objetivos. La oposición de propietarios de terrenos es un riesgo real en proyectos de infraestructura de transmisión.",
        tags: {
            format:    "opción_única",
            domain:    "identificación_de_riesgos",
            method:    "predictivo",
            cognitive: "aplicación"
        }
    },
    {
        question: "¿Cuáles de las siguientes son técnicas válidas para conducir ejercicios de identificación de riesgos según el ECO PMI-RMP? (Selecciona todas las que apliquen)",
        options: [
            "Entrevistas con expertos en la materia (SME).",
            "Revisión del cronograma de proyecto aprobado.",
            "Grupos focales con interesados clave.",
            "Análisis del valor ganado (EVM).",
            "Lluvia de ideas facilitada por el gerente de riesgos.",
            "Revisión de transcripciones de proyectos anteriores y datos de telemetría."
        ],
        answer: [
            "Entrevistas con expertos en la materia (SME).",
            "Grupos focales con interesados clave.",
            "Lluvia de ideas facilitada por el gerente de riesgos.",
            "Revisión de transcripciones de proyectos anteriores y datos de telemetría."
        ],
        rationale: "La Tarea 1 del Dominio II menciona: reuniones, entrevistas, grupos focales, soporte de SME, análisis de documentos, transcripciones de audio y datos de telemetría. La revisión del cronograma es una entrada, no una técnica de identificación. El EVM es una herramienta de monitoreo y control, no de identificación de riesgos.",
        tags: {
            format:    "opción_múltiple",
            domain:    "identificación_de_riesgos",
            method:    "predictivo",
            cognitive: "conocimiento"
        }
    },
    {
        question: "El equipo identifica que un nuevo cambio en la normativa ambiental podría requerir estudios adicionales que retrasen el inicio de obras. Sin embargo, este mismo cambio podría eliminar la necesidad de ciertos permisos que actualmente son costosos y tardados. ¿Cómo debe documentar el gerente de riesgos esta situación?",
        options: [
            "Como una amenaza exclusivamente, dado que el retraso es el efecto más probable.",
            "Registrar dos entradas separadas en el registro de riesgos: una amenaza (retraso por estudios adicionales) y una oportunidad (eliminación de permisos costosos).",
            "Como un problema, ya que la normativa ya cambió.",
            "Ignorar la oportunidad y enfocarse únicamente en la amenaza para ser conservador."
        ],
        answer: ["Registrar dos entradas separadas en el registro de riesgos: una amenaza (retraso por estudios adicionales) y una oportunidad (eliminación de permisos costosos)."],
        rationale: "La Tarea 1 y Task 4 del Dominio II establecen que los riesgos deben identificarse tanto como amenazas como oportunidades. Un mismo evento puede tener ambos efectos y deben documentarse por separado para permitir una respuesta adecuada a cada uno. Ignorar las oportunidades va en contra del principio de gestión integral del riesgo.",
        tags: {
            format:    "opción_única",
            domain:    "identificación_de_riesgos",
            method:    "predictivo",
            cognitive: "análisis"
        }
    },
    {
        question: "Durante la identificación de riesgos en un proyecto ágil de despliegue de medidores inteligentes, el Product Owner cuestiona la relevancia de documentar riesgos en el backlog. ¿Cuál es la respuesta más adecuada del gerente de riesgos?",
        options: [
            "Acordar con el PO y eliminar el proceso formal de registro de riesgos.",
            "Explicar que en entornos ágiles los riesgos pueden gestionarse como impedimentos en el backlog y en las retrospectivas, manteniendo la visibilidad necesaria.",
            "Insistir en mantener un registro de riesgos formal separado del backlog para cumplir con el estándar PMI.",
            "Escalar al patrocinador para que instruya al PO sobre la importancia de la gestión de riesgos."
        ],
        answer: ["Explicar que en entornos ágiles los riesgos pueden gestionarse como impedimentos en el backlog y en las retrospectivas, manteniendo la visibilidad necesaria."],
        rationale: "El ECO PMI-RMP reconoce que en entornos ágiles la gestión de riesgos se integra en los artefactos y ceremonias existentes. Los riesgos como impedimentos en el backlog es una práctica válida. El gerente de riesgos debe adaptar el proceso al contexto, no imponer herramientas predictivas rígidas en un entorno ágil.",
        tags: {
            format:    "opción_única",
            domain:    "identificación_de_riesgos",
            method:    "ágil",
            cognitive: "aplicación"
        }
    },
    {
        question: "Al revisar el análisis de supuestos de un proyecto de expansión de subestaciones, el gerente de riesgos nota que el equipo técnico no ha cuestionado la suposición de que 'los equipos importados llegarán en los plazos del proveedor'. ¿Qué debe hacer el gerente de riesgos?",
        options: [
            "Aceptar el supuesto como válido ya que proviene del equipo técnico con experiencia.",
            "Empoderar a los interesados para que cuestionen los supuestos y restricciones existentes, facilitando un análisis del riesgo asociado al incumplimiento del plazo.",
            "Agregar una reserva de contingencia al cronograma sin discutir el supuesto con el equipo.",
            "Solicitar al proveedor una carta de compromiso antes de continuar con la planificación."
        ],
        answer: ["Empoderar a los interesados para que cuestionen los supuestos y restricciones existentes, facilitando un análisis del riesgo asociado al incumplimiento del plazo."],
        rationale: "La Tarea 2 del Dominio II establece que el gerente de riesgos debe alentar a los interesados a cuestionar supuestos y restricciones. No cuestionar este supuesto en proyectos de transmisión con equipos importados (transformadores, interruptores) es un error frecuente que lleva a cronogramas irreales. La respuesta correcta combina empoderamiento y análisis.",
        tags: {
            format:    "opción_única",
            domain:    "identificación_de_riesgos",
            method:    "predictivo",
            cognitive: "aplicación"
        }
    },
    {
        question: "El registro de riesgos de un proyecto de líneas de transmisión incluye la siguiente entrada: 'Riesgo de accidente por trabajos en altura'. Al revisar el registro, el gerente nota que falta información crítica. ¿Qué atributos adicionales son necesarios para que la entrada sea completa? (Selecciona todos los que apliquen)",
        options: [
            "Probabilidad estimada de ocurrencia.",
            "Impacto potencial sobre los objetivos del proyecto.",
            "Nombre del consultor externo que identificó el riesgo.",
            "Urgencia (ventana de tiempo para responder antes de que ocurra).",
            "Propietario del riesgo.",
            "Nombre del software de gestión de riesgos utilizado."
        ],
        answer: [
            "Probabilidad estimada de ocurrencia.",
            "Impacto potencial sobre los objetivos del proyecto.",
            "Urgencia (ventana de tiempo para responder antes de que ocurra).",
            "Propietario del riesgo."
        ],
        rationale: "La Tarea 4 del Dominio II establece que el registro de riesgos debe incluir atributos como probabilidad, impacto, urgencia, origen, propietario y clasificación. El nombre del consultor o el software son datos administrativos, no atributos esenciales del riesgo. La urgencia es especialmente crítica en riesgos de seguridad donde la ventana de respuesta es corta.",
        tags: {
            format:    "opción_múltiple",
            domain:    "identificación_de_riesgos",
            method:    "predictivo",
            cognitive: "análisis"
        }
    },
    {
        question: "Durante una entrevista de identificación de riesgos con el gerente de operaciones, este menciona que 'en este tipo de proyectos siempre hay imprevistos, pero aquí ya sabemos cómo manejarlos'. ¿Cuál es la preocupación principal del gerente de riesgos ante esta declaración?",
        options: [
            "Que el gerente de operaciones no tiene experiencia suficiente para participar en la identificación de riesgos.",
            "Que la declaración puede indicar sesgo de exceso de confianza que lleve a subestimar riesgos reales o a no documentarlos formalmente.",
            "Que el gerente de operaciones está revelando información confidencial del proyecto.",
            "Que la declaración confirma que los riesgos ya están controlados y no requieren gestión adicional."
        ],
        answer: ["Que la declaración puede indicar sesgo de exceso de confianza que lleve a subestimar riesgos reales o a no documentarlos formalmente."],
        rationale: "El exceso de confianza es uno de los sesgos cognitivos más documentados en la gestión de riesgos. El hecho de haber manejado situaciones similares antes no elimina la necesidad de identificar y documentar riesgos formalmente. El gerente de riesgos debe reconocer este sesgo y asegurarse de que la experiencia previa enriquezca el proceso sin reemplazarlo.",
        tags: {
            format:    "opción_única",
            domain:    "identificación_de_riesgos",
            method:    "predictivo",
            cognitive: "análisis"
        }
    },
    {
        question: "Ordena los siguientes pasos del proceso de desarrollo del registro de riesgos según la secuencia correcta:",
        options: [
            "Clasificar los riesgos como amenazas u oportunidades",
            "Conducir ejercicios de identificación de riesgos",
            "Documentar disparadores, causas y tiempos de los riesgos",
            "Analizar la validez de los riesgos identificados",
            "Examinar los atributos del riesgo: probabilidad, impacto, urgencia"
        ],
        answer: [
            "Conducir ejercicios de identificación de riesgos",
            "Documentar disparadores, causas y tiempos de los riesgos",
            "Analizar la validez de los riesgos identificados",
            "Examinar los atributos del riesgo: probabilidad, impacto, urgencia",
            "Clasificar los riesgos como amenazas u oportunidades"
        ],
        rationale: "La secuencia lógica del Dominio II inicia con la recopilación de riesgos mediante ejercicios de identificación, luego se documentan sus disparadores y causas, se valida que sean riesgos reales (no problemas ni supuestos), se examinan sus atributos para poder priorizarlos y finalmente se clasifican como amenazas u oportunidades para orientar la respuesta.",
        tags: {
            format:    "ordenamiento",
            domain:    "identificación_de_riesgos",
            method:    "predictivo",
            cognitive: "conocimiento"
        }
    },
    {
        question: "Un proyecto de rehabilitación de líneas de transmisión en zona montañosa identifica el riesgo de derrumbes. El equipo no ha podido determinar con precisión cuándo podría ocurrir ni qué tan seguido. ¿Cómo debe el gerente de riesgos gestionar la información incompleta sobre este riesgo?",
        options: [
            "Eliminar el riesgo del registro hasta tener datos suficientes para calificarlo.",
            "Documentar el riesgo con la información disponible, marcando los atributos faltantes como 'por determinar', y planificar la obtención de más datos.",
            "Asumir la peor probabilidad e impacto posibles para ser conservadores.",
            "Transferir el riesgo al contratista ya que es un riesgo de construcción."
        ],
        answer: ["Documentar el riesgo con la información disponible, marcando los atributos faltantes como 'por determinar', y planificar la obtención de más datos."],
        rationale: "La incertidumbre sobre los atributos de un riesgo no justifica su exclusión del registro. El registro de riesgos es un documento vivo. Documentar con información parcial y planificar la recopilación de datos adicionales (estudios geológicos, datos históricos) es la práctica correcta. Eliminar un riesgo conocido porque no está completamente caracterizado es una falla de proceso.",
        tags: {
            format:    "opción_única",
            domain:    "identificación_de_riesgos",
            method:    "predictivo",
            cognitive: "aplicación"
        }
    },
    {
        question: "En un proyecto híbrido de construcción y puesta en marcha de una subestación, el equipo de construcción usa metodología predictiva y el equipo de puesta en marcha usa sprints. Durante la revisión del registro de riesgos, el gerente nota que los riesgos de integración entre ambas fases no han sido identificados. ¿Cuál es la causa más probable de esta omisión?",
        options: [
            "El registro de riesgos no es una herramienta compatible con entornos híbridos.",
            "Los equipos trabajan con herramientas y ciclos distintos, lo que genera silos de información que impiden identificar riesgos en las interfaces.",
            "Los riesgos de integración son responsabilidad exclusiva del director de proyecto, no del gerente de riesgos.",
            "En proyectos híbridos, los riesgos de integración se identifican automáticamente durante las retrospectivas."
        ],
        answer: ["Los equipos trabajan con herramientas y ciclos distintos, lo que genera silos de información que impiden identificar riesgos en las interfaces."],
        rationale: "En proyectos híbridos, uno de los riesgos más frecuentes es precisamente el de las interfaces entre metodologías. Los silos de información son la causa raíz: cada equipo gestiona sus riesgos dentro de su metodología sin coordinar los puntos de transición. El gerente de riesgos debe establecer mecanismos de integración explícitos para identificar estos riesgos.",
        tags: {
            format:    "opción_única",
            domain:    "identificación_de_riesgos",
            method:    "híbrido",
            cognitive: "análisis"
        }
    },
    {
        question: "El gerente de riesgos recibe el registro de riesgos revisado por el equipo y nota que todos los riesgos identificados son amenazas. No se registró ninguna oportunidad. ¿Qué debe hacer?",
        options: [
            "Aceptar el registro ya que es posible que el proyecto no tenga oportunidades reales.",
            "Agregar oportunidades genéricas basadas en proyectos similares para cumplir con el formato.",
            "Cuestionar el proceso de identificación: facilitar una nueva sesión enfocada explícitamente en identificar oportunidades potenciales.",
            "Solicitar al equipo que re-clasifique algunas amenazas como oportunidades para balancear el registro."
        ],
        answer: ["Cuestionar el proceso de identificación: facilitar una nueva sesión enfocada explícitamente en identificar oportunidades potenciales."],
        rationale: "Un registro con solo amenazas y sin ninguna oportunidad suele ser indicativo de un proceso de identificación incompleto o de un sesgo negativo del equipo. La Tarea 1 del Dominio II establece que los riesgos deben indicarse como amenazas u oportunidades. El gerente de riesgos debe facilitar activamente la identificación de oportunidades, no forzar re-clasificaciones ni inventar oportunidades.",
        tags: {
            format:    "opción_única",
            domain:    "identificación_de_riesgos",
            method:    "predictivo",
            cognitive: "análisis"
        }
    },

    // ─────────────────────────────────────────────────────────────────────────
    // DOMINIO III: ANÁLISIS DE RIESGOS (14 preguntas)
    // ─────────────────────────────────────────────────────────────────────────

    {
        question: "En el análisis cualitativo de riesgos de un proyecto de transmisión eléctrica, el equipo utiliza una matriz de probabilidad e impacto. Un riesgo es calificado con probabilidad media (0.5) e impacto muy alto en costo (0.8). Según el estándar PMI, ¿cómo debe priorizarse este riesgo?",
        options: [
            "Baja prioridad, porque la probabilidad no es alta.",
            "Alta prioridad, porque el producto de probabilidad e impacto (0.40) lo ubica en zona roja según criterios típicos.",
            "Media prioridad, porque ninguna dimensión es extrema.",
            "La prioridad no puede determinarse solo con probabilidad e impacto; se requiere análisis cuantitativo."
        ],
        answer: ["Alta prioridad, porque el producto de probabilidad e impacto (0.40) lo ubica en zona roja según criterios típicos."],
        rationale: "La matriz de probabilidad e impacto calcula el score multiplicando ambos valores. Un score de 0.40 (0.5 × 0.8) generalmente cae en zona roja (alta prioridad) según los umbrales típicos del estándar PMI. La Tarea 1 del Dominio III establece que la priorización debe basarse en impacto y urgencia usando criterios preestablecidos en el plan.",
        tags: {
            format:    "opción_única",
            domain:    "análisis_de_riesgos",
            method:    "predictivo",
            cognitive: "aplicación"
        }
    },
    {
        question: "El gerente de riesgos de un proyecto de construcción de subestación necesita determinar cuánto podría variar el costo total del proyecto debido a la incertidumbre en los precios de equipos importados. ¿Qué técnica de análisis cuantitativo es MÁS adecuada para esta situación?",
        options: [
            "Análisis FODA (SWOT).",
            "Simulación Monte Carlo aplicada a las estimaciones de costo.",
            "Diagrama de Ishikawa para identificar causas raíz.",
            "Análisis de valor ganado (EVM)."
        ],
        answer: ["Simulación Monte Carlo aplicada a las estimaciones de costo."],
        rationale: "La simulación Monte Carlo permite modelar la incertidumbre en múltiples variables simultáneamente (precio de equipos, tipo de cambio, aranceles) y obtener una distribución probabilística del costo total. La Tarea 2 del Dominio III la menciona explícitamente como técnica de análisis de sensibilidad. El EVM mide desempeño actual, no incertidumbre futura.",
        tags: {
            format:    "opción_única",
            domain:    "análisis_de_riesgos",
            method:    "predictivo",
            cognitive: "aplicación"
        }
    },
    {
        question: "El equipo analiza si continuar con el diseño actual de la subestación o invertir en un diseño modular de mayor costo inicial pero que reduce el riesgo de expansiones futuras costosas. ¿Qué técnica cuantitativa es MÁS apropiada para tomar esta decisión?",
        options: [
            "Análisis de supuestos.",
            "Árbol de decisiones con valor monetario esperado (EMV).",
            "Análisis de la ruta crítica.",
            "Diagrama de Tornado."
        ],
        answer: ["Árbol de decisiones con valor monetario esperado (EMV)."],
        rationale: "El árbol de decisiones permite comparar el valor monetario esperado de diferentes cursos de acción bajo incertidumbre. El EMV combina probabilidades e impactos financieros para cada rama del árbol. La Tarea 2 del Dominio III menciona árboles de decisión y EMV como técnicas de análisis cuantitativo. El diagrama de Tornado es para análisis de sensibilidad, no para comparar decisiones.",
        tags: {
            format:    "opción_única",
            domain:    "análisis_de_riesgos",
            method:    "predictivo",
            cognitive: "análisis"
        }
    },
    {
        question: "Durante el análisis cuantitativo, la simulación Monte Carlo del proyecto de transmisión muestra que hay un 80% de probabilidad de que el proyecto se complete dentro del presupuesto de $50M y un 20% de probabilidad de excederlo hasta $58M. ¿Cómo debe interpretar el gerente de riesgos este resultado?",
        options: [
            "El proyecto definitivamente costará $50M ya que es el valor más probable.",
            "El proyecto tiene una reserva de contingencia adecuada si el presupuesto aprobado es de $50M.",
            "Existe un riesgo residual de sobrecosto de hasta $8M que afecta al 20% de los escenarios, lo que puede requerir una reserva de contingencia adicional.",
            "El análisis cuantitativo es innecesario ya que el análisis cualitativo es suficiente para tomar decisiones."
        ],
        answer: ["Existe un riesgo residual de sobrecosto de hasta $8M que afecta al 20% de los escenarios, lo que puede requerir una reserva de contingencia adicional."],
        rationale: "La simulación Monte Carlo no da un número definitivo, sino una distribución de probabilidad. Que el 20% de los escenarios supere $50M significa que sin reserva adicional, uno de cada cinco proyectos similares excedería el presupuesto. El gerente de riesgos debe comunicar este resultado a los tomadores de decisión para evaluar si la exposición es aceptable o se requiere contingencia.",
        tags: {
            format:    "opción_única",
            domain:    "análisis_de_riesgos",
            method:    "predictivo",
            cognitive: "análisis"
        }
    },
    {
        question: "¿Cuáles de las siguientes son actividades del análisis cualitativo de riesgos según el ECO PMI-RMP? (Selecciona todas las que apliquen)",
        options: [
            "Clasificar los riesgos usando la RBS con categorías del plan de gestión de riesgos.",
            "Estimar el impacto del riesgo en cronograma, presupuesto, recursos y alcance.",
            "Calcular la distribución estadística del costo total mediante simulación.",
            "Aplicar matrices de riesgo con criterios preestablecidos.",
            "Priorizar riesgos basándose en impacto y urgencia.",
            "Calcular el valor monetario esperado de cada riesgo."
        ],
        answer: [
            "Clasificar los riesgos usando la RBS con categorías del plan de gestión de riesgos.",
            "Estimar el impacto del riesgo en cronograma, presupuesto, recursos y alcance.",
            "Aplicar matrices de riesgo con criterios preestablecidos.",
            "Priorizar riesgos basándose en impacto y urgencia."
        ],
        rationale: "La Tarea 1 del Dominio III define el análisis cualitativo como la clasificación nominal y ordinal de riesgos usando herramientas como la RBS, matrices de impacto, estimaciones cualitativas de efecto y priorización. El cálculo de distribuciones estadísticas y el EMV pertenecen al análisis cuantitativo (Task 2).",
        tags: {
            format:    "opción_múltiple",
            domain:    "análisis_de_riesgos",
            method:    "predictivo",
            cognitive: "conocimiento"
        }
    },
    {
        question: "Al analizar los riesgos de un proyecto de mantenimiento de líneas de alta tensión, el equipo detecta que el riesgo de 'falla de equipos de protección personal' tiene alta probabilidad, impacto crítico en seguridad y muy corta ventana de respuesta antes de que ocurra. ¿Qué atributo del riesgo determina la necesidad de atención inmediata independientemente del score de la matriz de probabilidad-impacto?",
        options: [
            "La categoría técnica del riesgo.",
            "El origen externo del riesgo.",
            "La urgencia: la corta ventana temporal para implementar una respuesta antes de que el riesgo se materialice.",
            "El impacto en el presupuesto del proyecto."
        ],
        answer: ["La urgencia: la corta ventana temporal para implementar una respuesta antes de que el riesgo se materialice."],
        rationale: "La urgencia es un atributo independiente del score de probabilidad-impacto. Un riesgo puede tener impacto alto pero ocurrir en seis meses (baja urgencia) o puede tener impacto moderado pero ocurrir mañana (alta urgencia). La Tarea 1 del Dominio III menciona explícitamente priorizar por impacto Y urgencia. En riesgos de seguridad, la urgencia suele ser el factor determinante.",
        tags: {
            format:    "opción_única",
            domain:    "análisis_de_riesgos",
            method:    "predictivo",
            cognitive: "análisis"
        }
    },
    {
        question: "El gerente de riesgos presenta el análisis de riesgos al comité directivo. El comité pregunta cuál es el riesgo individual que más impacta en la variabilidad del costo total del proyecto. ¿Qué herramienta debe usar para responder esta pregunta?",
        options: [
            "Registro de riesgos ordenado por score cualitativo.",
            "Diagrama de Tornado, que muestra la sensibilidad del resultado a cada variable de riesgo.",
            "Árbol de decisiones para comparar escenarios alternativos.",
            "Análisis de la ruta crítica para identificar actividades con mayor holgura."
        ],
        answer: ["Diagrama de Tornado, que muestra la sensibilidad del resultado a cada variable de riesgo."],
        rationale: "El diagrama de Tornado es la herramienta estándar de análisis de sensibilidad. Muestra, de mayor a menor, cuáles variables de riesgo tienen el mayor impacto en el resultado (costo, cronograma). La Tarea 2 del Dominio III lo incluye entre las técnicas de análisis cuantitativo. Responde exactamente la pregunta del comité: ¿qué variable mueve más el resultado?",
        tags: {
            format:    "opción_única",
            domain:    "análisis_de_riesgos",
            method:    "predictivo",
            cognitive: "aplicación"
        }
    },
    {
        question: "Durante el análisis de riesgos, el gerente evalúa si los objetivos del proyecto de construcción de una subestación están alineados con los objetivos estratégicos de la organización en materia de cumplimiento regulatorio. ¿A qué actividad del Dominio III corresponde esta evaluación?",
        options: [
            "Análisis cualitativo de los riesgos técnicos.",
            "Evaluación de los objetivos de cumplimiento del proyecto contra los objetivos estratégicos organizacionales, incluyendo gobernanza corporativa y regulatoria.",
            "Análisis cuantitativo de los riesgos financieros.",
            "Identificación de amenazas y oportunidades del Task 3."
        ],
        answer: ["Evaluación de los objetivos de cumplimiento del proyecto contra los objetivos estratégicos organizacionales, incluyendo gobernanza corporativa y regulatoria."],
        rationale: "La Tarea 3 del Dominio III incluye explícitamente: evaluar los objetivos de cumplimiento del proyecto contra los objetivos estratégicos organizacionales, considerando procedimientos, planes de proyecto, gobernanza corporativa y de proyecto, y gobernanza regulatoria. En el sector eléctrico, el cumplimiento con la regulación del ente regulador es un riesgo estratégico crítico.",
        tags: {
            format:    "opción_única",
            domain:    "análisis_de_riesgos",
            method:    "predictivo",
            cognitive: "conocimiento"
        }
    },
    {
        question: "En un proyecto ágil de implementación de un sistema de gestión de activos de transmisión, el equipo usa un gráfico de burndown para monitorear el progreso. ¿Cómo puede este artefacto apoyar el análisis de riesgos?",
        options: [
            "El burndown no tiene relación con la gestión de riesgos en entornos ágiles.",
            "El burndown muestra tendencias del trabajo completado; una desviación negativa sostenida puede ser un indicador de riesgo de no cumplir el objetivo del release.",
            "El burndown reemplaza al registro de riesgos en entornos ágiles.",
            "El burndown únicamente sirve para calcular la velocidad del equipo, sin relación con riesgos."
        ],
        answer: ["El burndown muestra tendencias del trabajo completado; una desviación negativa sostenida puede ser un indicador de riesgo de no cumplir el objetivo del release."],
        rationale: "En entornos ágiles, los artefactos como el burndown son fuentes de datos para el análisis de riesgos. Una tendencia de burndown que se desvía del plan es un disparador de riesgo observable. La Tarea 2 del Dominio III menciona el análisis de datos de desempeño del proceso y tendencias históricas y nuevas. El gerente de riesgos debe leer estos datos como señales de alerta.",
        tags: {
            format:    "opción_única",
            domain:    "análisis_de_riesgos",
            method:    "ágil",
            cognitive: "análisis"
        }
    },
    {
        question: "Ordena los siguientes pasos del proceso de análisis cuantitativo de riesgos según la secuencia correcta:",
        options: [
            "Presentar los resultados (distribución de probabilidad del costo/cronograma)",
            "Recopilar datos de riesgo e información de desempeño del proceso",
            "Realizar análisis de sensibilidad (diagrama de Tornado)",
            "Ejecutar la simulación Monte Carlo",
            "Realizar análisis de pronóstico y tendencias"
        ],
        answer: [
            "Recopilar datos de riesgo e información de desempeño del proceso",
            "Realizar análisis de pronóstico y tendencias",
            "Ejecutar la simulación Monte Carlo",
            "Realizar análisis de sensibilidad (diagrama de Tornado)",
            "Presentar los resultados (distribución de probabilidad del costo/cronograma)"
        ],
        rationale: "El proceso cuantitativo sigue esta lógica: primero se recopilan los datos de entrada (Task 2 Dominio III), luego se analizan tendencias para enriquecer los parámetros del modelo, se ejecuta la simulación para obtener la distribución de resultados, se realiza el análisis de sensibilidad para identificar los factores más influyentes y finalmente se comunican los resultados a los tomadores de decisión.",
        tags: {
            format:    "ordenamiento",
            domain:    "análisis_de_riesgos",
            method:    "predictivo",
            cognitive: "conocimiento"
        }
    },
    {
        question: "Al capacitar al equipo de proyecto sobre la matriz de riesgo, el gerente de riesgos enfatiza que dos riesgos con el mismo score (probabilidad × impacto) no necesariamente requieren el mismo tratamiento. ¿Cuál es el fundamento de esta afirmación?",
        options: [
            "Los scores siempre son subjetivos, por lo que no hay fundamento técnico.",
            "La distribución del score puede ser distinta: un riesgo puede tener alta probabilidad con bajo impacto (muchos eventos menores) mientras que otro tiene baja probabilidad con impacto catastrófico (evento raro pero devastador). La estrategia de respuesta adecuada es diferente en cada caso.",
            "El score es el único criterio válido; dos riesgos con el mismo score deben tratarse igual.",
            "La diferencia la determina únicamente el propietario del riesgo, no el análisis."
        ],
        answer: ["La distribución del score puede ser distinta: un riesgo puede tener alta probabilidad con bajo impacto (muchos eventos menores) mientras que otro tiene baja probabilidad con impacto catastrófico (evento raro pero devastador). La estrategia de respuesta adecuada es diferente en cada caso."],
        rationale: "Este es un principio fundamental del análisis de riesgos: el mismo score puede resultar de combinaciones muy diferentes de probabilidad e impacto. Un riesgo de 0.9 × 0.1 = 0.09 (muy frecuente, bajo impacto → mitigar) es diferente a 0.1 × 0.9 = 0.09 (raro, catastrófico → transferir o evitar). La Tarea 1 del Dominio III enfatiza usar criterios preestablecidos y definiciones claras de probabilidad e impacto.",
        tags: {
            format:    "opción_única",
            domain:    "análisis_de_riesgos",
            method:    "predictivo",
            cognitive: "análisis"
        }
    },
    {
        question: "Un proyecto de instalación de líneas de transmisión está en zona sísmica. El equipo quiere usar un análisis FODA para identificar y analizar los riesgos relacionados con esta condición. ¿Es esta la herramienta más adecuada para este propósito específico?",
        options: [
            "Sí, el FODA es la mejor herramienta para cualquier tipo de análisis de riesgo.",
            "No, el análisis FODA es útil para identificar y analizar la complejidad del riesgo del proyecto en el Task 3 del Dominio III, pero para cuantificar el impacto sísmico se necesitarían estudios de ingeniería específicos y posiblemente simulación.",
            "No, el FODA no puede usarse en proyectos de ingeniería.",
            "Sí, pero solo si el equipo tiene experiencia previa con proyectos sísmicos."
        ],
        answer: ["No, el análisis FODA es útil para identificar y analizar la complejidad del riesgo del proyecto en el Task 3 del Dominio III, pero para cuantificar el impacto sísmico se necesitarían estudios de ingeniería específicos y posiblemente simulación."],
        rationale: "El FODA (SWOT) es mencionado en el Task 3 del Dominio III para evaluar la complejidad del riesgo del proyecto. Sin embargo, para cuantificar el impacto de un riesgo sísmico específico se requieren estudios geotécnicos, análisis de vulnerabilidad estructural y modelos especializados. El gerente de riesgos debe reconocer las limitaciones de cada herramienta y complementar el análisis con experticias técnicas específicas.",
        tags: {
            format:    "opción_única",
            domain:    "análisis_de_riesgos",
            method:    "predictivo",
            cognitive: "análisis"
        }
    },
    {
        question: "En un proyecto híbrido de construcción de subestación, el equipo predice que una demora en la llegada de transformadores de potencia (probabilidad 60%, impacto: retraso de 45 días) impactaría directamente la ruta crítica. ¿Cuál es el valor de reserva de tiempo (buffer) que se justificaría solo para este riesgo, usando el Valor Monetario Esperado del cronograma?",
        options: [
            "45 días, porque el riesgo existe y debe cubrirse completamente.",
            "27 días (60% × 45 días), como estimación del impacto esperado ponderado por probabilidad.",
            "0 días, porque primero debe agotarse la contingencia de costo antes de tocar el cronograma.",
            "45 días dividido entre todos los riesgos identificados del proyecto."
        ],
        answer: ["27 días (60% × 45 días), como estimación del impacto esperado ponderado por probabilidad."],
        rationale: "El valor esperado (EMV) del impacto en cronograma se calcula como la probabilidad multiplicada por el impacto: 0.60 × 45 = 27 días. Este es el aporte estadístico de este riesgo individual a la reserva de cronograma. Reservar 45 días completos sería sobreestimar si la probabilidad es 60%, no 100%. La Tarea 2 del Dominio III menciona el EMV como técnica cuantitativa estándar.",
        tags: {
            format:    "opción_única",
            domain:    "análisis_de_riesgos",
            method:    "híbrido",
            cognitive: "aplicación"
        }
    },
    {
        question: "El gerente de riesgos asesora al equipo sobre cómo categorizar los riesgos identificados usando la RBS. ¿Cuál es el beneficio principal de esta actividad en el análisis cualitativo?",
        options: [
            "Permite calcular el costo total de los riesgos del proyecto.",
            "Facilita identificar concentraciones de riesgo en ciertas categorías (técnico, organizacional, externo, etc.) que podrían requerir atención especial o estrategias de respuesta colectivas.",
            "Determina automáticamente quién debe ser el propietario de cada riesgo.",
            "Reemplaza la necesidad de una matriz de probabilidad e impacto."
        ],
        answer: ["Facilita identificar concentraciones de riesgo en ciertas categorías (técnico, organizacional, externo, etc.) que podrían requerir atención especial o estrategias de respuesta colectivas."],
        rationale: "La categorización mediante la RBS en el análisis cualitativo (Task 1, Dominio III) permite detectar patrones: si el 70% de los riesgos son técnicos, eso señala una debilidad sistémica. Estas concentraciones sugieren necesidades de mitigación colectiva (ej. refuerzo técnico del equipo) más eficientes que tratar cada riesgo individualmente.",
        tags: {
            format:    "opción_única",
            domain:    "análisis_de_riesgos",
            method:    "predictivo",
            cognitive: "conocimiento"
        }
    },

    // ─────────────────────────────────────────────────────────────────────────
    // DOMINIO IV: RESPUESTA A RIESGOS (8 preguntas)
    // ─────────────────────────────────────────────────────────────────────────

    {
        question: "El equipo de un proyecto de transmisión identifica que el riesgo de incremento en el precio del cobre podría aumentar el costo de los cables en un 20%. La organización ya tiene experiencia gestionando este tipo de fluctuaciones. ¿Cuál es la estrategia de respuesta MÁS adecuada?",
        options: [
            "Evitar: rediseñar el proyecto para no usar cables de cobre.",
            "Aceptar pasivamente: no hacer nada y asumir el incremento si ocurre.",
            "Transferir: incluir en el contrato con el proveedor una cláusula de precio fijo para los cables.",
            "Mitigar: comprar los cables con anticipación antes de que suba el precio, asegurando el precio actual."
        ],
        answer: ["Transferir: incluir en el contrato con el proveedor una cláusula de precio fijo para los cables."],
        rationale: "La transferencia mediante contratos de precio fijo es la estrategia estándar para riesgos financieros de fluctuación de materias primas cuando el proveedor tiene capacidad de absorber ese riesgo. La mitigación (compra anticipada) también es válida, pero transfiere el riesgo financiero sin riesgo de obsolescencia. La estrategia óptima depende del contexto, pero la transferencia contractual es la más eficiente cuando es viable.",
        tags: {
            format:    "opción_única",
            domain:    "respuesta_a_riesgos",
            method:    "predictivo",
            cognitive: "aplicación"
        }
    },
    {
        question: "Durante la ejecución de un proyecto, el equipo implementa el plan de respuesta al riesgo de 'falla en el sistema de comunicaciones de la subestación'. Al ejecutar la respuesta, identifican que esta genera un nuevo riesgo: la solución alternativa de comunicación tiene un protocolo incompatible con el sistema SCADA existente. ¿Cómo se clasifica este nuevo riesgo?",
        options: [
            "Riesgo residual: es lo que queda del riesgo original después de aplicar la respuesta.",
            "Riesgo secundario: surge como consecuencia directa de implementar la respuesta al riesgo.",
            "Riesgo aceptado: ya que fue identificado durante la ejecución.",
            "Riesgo transferido: porque el proveedor de comunicaciones es responsable."
        ],
        answer: ["Riesgo secundario: surge como consecuencia directa de implementar la respuesta al riesgo."],
        rationale: "La Tarea 2 del Dominio IV establece que al implementar las respuestas se deben evaluar los riesgos secundarios y residuales. Un riesgo secundario es el que emerge directamente de la implementación de una respuesta. Debe documentarse, analizarse y gestionarse como cualquier otro riesgo. Confundirlo con riesgo residual es un error frecuente.",
        tags: {
            format:    "opción_única",
            domain:    "respuesta_a_riesgos",
            method:    "predictivo",
            cognitive: "conocimiento"
        }
    },
    {
        question: "¿Cuáles de las siguientes son estrategias de respuesta válidas para OPORTUNIDADES según el estándar PMI? (Selecciona todas las que apliquen)",
        options: [
            "Explotar: eliminar la incertidumbre para asegurar que la oportunidad se materialice.",
            "Mitigar: reducir la probabilidad de que la oportunidad ocurra.",
            "Mejorar: aumentar la probabilidad o el impacto positivo de la oportunidad.",
            "Compartir: asignar la oportunidad a un tercero mejor posicionado para capitalizarla.",
            "Evitar: eliminar la causa de la oportunidad para reducir el riesgo.",
            "Aceptar: reconocer la oportunidad pero no tomar acción proactiva."
        ],
        answer: [
            "Explotar: eliminar la incertidumbre para asegurar que la oportunidad se materialice.",
            "Mejorar: aumentar la probabilidad o el impacto positivo de la oportunidad.",
            "Compartir: asignar la oportunidad a un tercero mejor posicionado para capitalizarla.",
            "Aceptar: reconocer la oportunidad pero no tomar acción proactiva."
        ],
        rationale: "Las estrategias de respuesta para oportunidades según PMBOK son: Explotar, Mejorar, Compartir y Aceptar. Mitigar y Evitar son estrategias para amenazas, no para oportunidades. La Tarea 1 del Dominio IV menciona estas estrategias explícitamente. Conocer la diferencia entre estrategias para amenazas vs. oportunidades es un elemento central del ECO PMI-RMP.",
        tags: {
            format:    "opción_múltiple",
            domain:    "respuesta_a_riesgos",
            method:    "predictivo",
            cognitive: "conocimiento"
        }
    },
    {
        question: "El gerente de riesgos identifica que el riesgo de huelga del sindicato de instaladores eléctricos tiene un 40% de probabilidad y podría paralizar el proyecto durante 3 semanas. Planificar una respuesta activa (negociación preventiva con el sindicato) costaría $15,000. ¿Cómo debe el gerente de riesgos evaluar si esta respuesta es apropiada?",
        options: [
            "Si el costo de la respuesta ($15,000) es menor que el valor monetario esperado del riesgo (0.40 × costo de 3 semanas de paralización), la respuesta es económicamente justificada.",
            "El costo de la respuesta siempre es justificado si el riesgo afecta el cronograma.",
            "La respuesta no es adecuada porque la probabilidad del 40% no es suficientemente alta.",
            "El costo de la respuesta debe ser siempre menor al 5% del presupuesto total del proyecto."
        ],
        answer: ["Si el costo de la respuesta ($15,000) es menor que el valor monetario esperado del riesgo (0.40 × costo de 3 semanas de paralización), la respuesta es económicamente justificada."],
        rationale: "La Tarea 1 del Dominio IV establece que se debe evaluar la efectividad de las acciones de respuesta contra los objetivos del proyecto y su impacto en costo. La comparación entre el costo de la respuesta y el EMV del riesgo es el criterio estándar. Si 3 semanas de paralización equivalen a $100,000, el EMV del riesgo es $40,000 y pagar $15,000 por prevenirlo es altamente rentable.",
        tags: {
            format:    "opción_única",
            domain:    "respuesta_a_riesgos",
            method:    "predictivo",
            cognitive: "análisis"
        }
    },
    {
        question: "Al presentar el plan de respuesta a riesgos al comité directivo, el gerente quiere mostrar la evolución esperada de la exposición al riesgo del proyecto a lo largo del tiempo conforme se implementan las respuestas. ¿Qué herramienta visual es MÁS adecuada para esto?",
        options: [
            "Diagrama de red del cronograma.",
            "Gráfico de burndown de riesgos (risk burndown chart).",
            "Registro de riesgos ordenado por score.",
            "Diagrama de Gantt con las respuestas a riesgos como actividades."
        ],
        answer: ["Gráfico de burndown de riesgos (risk burndown chart)."],
        rationale: "La Tarea 1 del Dominio IV menciona explícitamente el gráfico de burndown de riesgos como herramienta para ilustrar y comunicar la efectividad de las estrategias de respuesta. Muestra cómo la exposición total al riesgo disminuye en el tiempo conforme se implementan respuestas. Es una herramienta de comunicación ejecutiva muy efectiva.",
        tags: {
            format:    "opción_única",
            domain:    "respuesta_a_riesgos",
            method:    "predictivo",
            cognitive: "conocimiento"
        }
    },
    {
        question: "Un equipo ágil que trabaja en la configuración de protecciones de una subestación identifica durante el sprint que un riesgo técnico previamente aceptado se ha materializado como impedimento. ¿Cuál es la respuesta MÁS adecuada?",
        options: [
            "Continuar el sprint según lo planeado y escalar el impedimento al patrocinador al final.",
            "Pausar el sprint y revisar todo el plan de gestión de riesgos antes de continuar.",
            "El Scrum Master debe facilitar la eliminación del impedimento de inmediato y el equipo debe evaluar si se necesita ajustar el plan de respuesta a riesgos para el resto del proyecto.",
            "Cancelar el sprint ya que los riesgos aceptados que se materializan invalidan los compromisos del sprint."
        ],
        answer: ["El Scrum Master debe facilitar la eliminación del impedimento de inmediato y el equipo debe evaluar si se necesita ajustar el plan de respuesta a riesgos para el resto del proyecto."],
        rationale: "En entornos ágiles, los impedimentos son el equivalente operativo de los riesgos materializados. El Scrum Master tiene la responsabilidad de facilitar su eliminación. Adicionalmente, el Task 2 del Dominio IV establece que al ejecutar respuestas se deben evaluar riesgos secundarios y residuales, e improvisar según sea necesario. La transparencia y adaptación son pilares del enfoque ágil.",
        tags: {
            format:    "opción_única",
            domain:    "respuesta_a_riesgos",
            method:    "ágil",
            cognitive: "aplicación"
        }
    },
    {
        question: "El plan de respuesta al riesgo de 'retraso en la obtención de permiso de construcción' incluye como workaround: iniciar trabajos preparatorios en zonas que no requieren permiso. Al ejecutar este workaround, el equipo descubre que el área alternativa tiene mayor complejidad geológica. ¿Cómo debe proceder el gerente de riesgos?",
        options: [
            "Continuar con el workaround original ya que fue aprobado en el plan.",
            "Documentar la complejidad geológica como un nuevo riesgo secundario, evaluarlo y ajustar el plan de respuesta si el impacto es significativo.",
            "Cancelar el workaround y esperar el permiso original.",
            "Escalar la situación al patrocinador sin documentar nada hasta tener más información."
        ],
        answer: ["Documentar la complejidad geológica como un nuevo riesgo secundario, evaluarlo y ajustar el plan de respuesta si el impacto es significativo."],
        rationale: "La Tarea 2 del Dominio IV establece explícitamente que se deben evaluar y reaccionar ante riesgos secundarios y residuales que emergen de la implementación del plan de respuesta, e improvisar según sea necesario. La complejidad geológica inesperada es un riesgo secundario clásico. Documentarlo, analizarlo y ajustar el plan es la respuesta correcta.",
        tags: {
            format:    "opción_única",
            domain:    "respuesta_a_riesgos",
            method:    "predictivo",
            cognitive: "aplicación"
        }
    },
    {
        question: "En un proyecto híbrido, el gerente de riesgos necesita asignar la responsabilidad de monitorear y ejecutar las respuestas a riesgos. ¿Cuáles son las consideraciones MÁS importantes al asignar propietarios de riesgo? (Selecciona todas las que apliquen)",
        options: [
            "El propietario del riesgo debe tener autoridad y capacidad para ejecutar la respuesta asignada.",
            "Los propietarios de riesgo siempre deben ser miembros del equipo de gestión de riesgos.",
            "La asignación debe reflejarse en la matriz de responsabilidades (RACI) del proyecto.",
            "Un mismo riesgo puede tener un propietario diferente en las fases predictivas y en las iteraciones ágiles si el contexto lo requiere.",
            "El gerente de riesgos debe ser propietario de todos los riesgos de alta prioridad."
        ],
        answer: [
            "El propietario del riesgo debe tener autoridad y capacidad para ejecutar la respuesta asignada.",
            "La asignación debe reflejarse en la matriz de responsabilidades (RACI) del proyecto.",
            "Un mismo riesgo puede tener un propietario diferente en las fases predictivas y en las iteraciones ágiles si el contexto lo requiere."
        ],
        rationale: "La Tarea 1 del Dominio IV establece que se deben identificar propietarios de las acciones de respuesta y distribuir responsabilidades. Los propietarios deben tener autoridad y capacidad real. La RACI alinea las responsabilidades formalmente. En entornos híbridos, la propiedad puede transferirse entre fases según el contexto. El gerente de riesgos coordina, pero concentrar todos los riesgos en él mismo es un anti-patrón.",
        tags: {
            format:    "opción_múltiple",
            domain:    "respuesta_a_riesgos",
            method:    "híbrido",
            cognitive: "análisis"
        }
    },

    // ─────────────────────────────────────────────────────────────────────────
    // DOMINIO V: MONITOREO Y CIERRE DE RIESGOS (11 preguntas)
    // ─────────────────────────────────────────────────────────────────────────

    {
        question: "Durante el monitoreo de riesgos, el gerente detecta que el indicador de desempeño del cronograma (SPI) ha caído a 0.82 durante tres semanas consecutivas. ¿Cómo debe interpretar este dato desde la perspectiva de la gestión de riesgos?",
        options: [
            "El SPI de 0.82 es solo un indicador de productividad y no tiene relación directa con los riesgos del proyecto.",
            "El SPI sostenidamente por debajo de 1.0 es una señal de alerta que puede indicar que uno o más riesgos del registro se han materializado o que hay amenazas emergentes no identificadas.",
            "El SPI de 0.82 confirma que el proyecto terminará con un 18% de retraso y no requiere más análisis.",
            "El gerente de riesgos debe esperar a que el SPI caiga por debajo de 0.70 antes de tomar acción."
        ],
        answer: ["El SPI sostenidamente por debajo de 1.0 es una señal de alerta que puede indicar que uno o más riesgos del registro se han materializado o que hay amenazas emergentes no identificadas."],
        rationale: "La Tarea 1 del Dominio V establece que el gerente de riesgos debe recopilar y analizar datos de desempeño y comparar contra la línea base. Un SPI sostenido de 0.82 es un indicador de que algo está impactando el cronograma. Puede ser la materialización de riesgos identificados, riesgos secundarios o riesgos no identificados. Es un disparador para revisar el registro de riesgos.",
        tags: {
            format:    "opción_única",
            domain:    "monitoreo_y_cierre",
            method:    "predictivo",
            cognitive: "análisis"
        }
    },
    {
        question: "Al cierre de una fase del proyecto de construcción de líneas de transmisión, el gerente de riesgos identifica varios riesgos que estaban en el registro pero nunca se materializaron durante la fase. ¿Cuál es la acción correcta?",
        options: [
            "Mantenerlos en el registro activo por si ocurren en fases posteriores.",
            "Cerrar formalmente los riesgos caducados, documentar la razón del cierre y actualizar el registro.",
            "Trasladarlos directamente a lecciones aprendidas sin cerrarlos formalmente.",
            "Eliminarlos del registro sin documentación para simplificar el seguimiento."
        ],
        answer: ["Cerrar formalmente los riesgos caducados, documentar la razón del cierre y actualizar el registro."],
        rationale: "La Tarea 3 del Dominio V establece que el gerente de riesgos debe monitorear y cerrar los riesgos caducados (expirados). Cerrarlos formalmente con documentación mantiene la integridad del registro y proporciona información valiosa para lecciones aprendidas. Eliminarlos sin documentación o mantenerlos activos indefinidamente son malas prácticas.",
        tags: {
            format:    "opción_única",
            domain:    "monitoreo_y_cierre",
            method:    "predictivo",
            cognitive: "aplicación"
        }
    },
    {
        question: "El gerente de riesgos prepara informes de estado de riesgos para tres audiencias diferentes: el equipo técnico, el comité directivo y el patrocinador del proyecto. ¿Por qué es importante adaptar el informe a cada audiencia?",
        options: [
            "No es necesario adaptarlos; el mismo informe detallado sirve para todas las audiencias.",
            "Porque el Task 4 del Dominio V establece que se deben preparar informes diferenciados para distintos interesados: el comité ejecutivo necesita resúmenes de exposición al riesgo y decisiones necesarias, mientras el equipo técnico necesita detalles operativos.",
            "Porque cada audiencia tiene acceso a sistemas diferentes de gestión de información.",
            "Solo se necesitan informes diferenciados cuando el proyecto tiene problemas graves."
        ],
        answer: ["Porque el Task 4 del Dominio V establece que se deben preparar informes diferenciados para distintos interesados: el comité ejecutivo necesita resúmenes de exposición al riesgo y decisiones necesarias, mientras el equipo técnico necesita detalles operativos."],
        rationale: "La Tarea 4 del Dominio V establece explícitamente: preparar informes para diferentes interesados y comunicar los niveles de riesgo a interesados clave. La comunicación efectiva de riesgos requiere adaptar el nivel de detalle, el lenguaje y el enfoque a cada audiencia. Un informe técnico detallado presentado al comité directivo es tan inefectivo como un resumen ejecutivo presentado al equipo de ingeniería.",
        tags: {
            format:    "opción_única",
            domain:    "monitoreo_y_cierre",
            method:    "predictivo",
            cognitive: "conocimiento"
        }
    },
    {
        question: "Un riesgo de corrosión en estructuras metálicas de torres de transmisión fue respondido con un tratamiento anticorrosivo durante la construcción. Al monitorear el riesgo, el equipo observa que la corrosión aún se presenta en zonas de soldadura no tratadas. ¿Cómo se clasifica el riesgo remanente?",
        options: [
            "Riesgo secundario, porque surge de la implementación del tratamiento.",
            "Riesgo residual, porque es la parte del riesgo original que permanece después de implementar la respuesta.",
            "Nuevo riesgo, porque ocurre en zonas no previstas originalmente.",
            "Riesgo transferido, porque la responsabilidad es del contratista que aplicó el tratamiento."
        ],
        answer: ["Riesgo residual, porque es la parte del riesgo original que permanece después de implementar la respuesta."],
        rationale: "El riesgo residual es el riesgo que permanece después de implementar las respuestas planificadas. La corrosión en zonas no tratadas es exactamente eso: la porción del riesgo original que no fue completamente cubierta por la respuesta. La Tarea 2 del Dominio V establece que se deben monitorear los riesgos residuales y evaluar su impacto en los objetivos del proyecto.",
        tags: {
            format:    "opción_única",
            domain:    "monitoreo_y_cierre",
            method:    "predictivo",
            cognitive: "conocimiento"
        }
    },
    {
        question: "¿Cuáles de las siguientes son actividades del Task 3 del Dominio V (Proveer información para actualizar documentos relevantes del proyecto)? (Selecciona todas las que apliquen)",
        options: [
            "Agregar y resumir datos de riesgo para actualizar el registro de riesgos.",
            "Actualizar el plan de gestión del proyecto con los cambios derivados de la gestión de riesgos.",
            "Ejecutar las respuestas a los riesgos de alta prioridad.",
            "Documentar lecciones aprendidas derivadas de la gestión de riesgos.",
            "Cerrar los riesgos caducados o resueltos.",
            "Calcular nuevamente el presupuesto total del proyecto."
        ],
        answer: [
            "Agregar y resumir datos de riesgo para actualizar el registro de riesgos.",
            "Actualizar el plan de gestión del proyecto con los cambios derivados de la gestión de riesgos.",
            "Documentar lecciones aprendidas derivadas de la gestión de riesgos.",
            "Cerrar los riesgos caducados o resueltos."
        ],
        rationale: "La Tarea 3 del Dominio V incluye: agregar y resumir datos de riesgo, actualizar documentos del proyecto (registro de riesgos, lecciones aprendidas, plan de gestión, logs de cambios) y cerrar riesgos caducados. La ejecución de respuestas pertenece al Dominio IV. El recálculo del presupuesto total es una actividad del director de proyecto, no específica del gerente de riesgos.",
        tags: {
            format:    "opción_múltiple",
            domain:    "monitoreo_y_cierre",
            method:    "predictivo",
            cognitive: "conocimiento"
        }
    },
    {
        question: "Durante el monitoreo de un proyecto, el gerente de riesgos realiza un análisis de varianza y encuentra que el costo real de las obras civiles supera en un 12% el presupuesto planificado. ¿Cuál es la acción MÁS adecuada desde la perspectiva de la gestión de riesgos?",
        options: [
            "Informar la varianza al director del proyecto y esperar instrucciones.",
            "Comparar la varianza con los riesgos del registro para determinar si alguno se materializó, evaluar el impacto en la exposición general del proyecto y actualizar el registro y los documentos pertinentes.",
            "Solicitar inmediatamente una reserva adicional al patrocinador para cubrir el sobrecosto.",
            "Realizar un análisis de causa raíz de la varianza antes de actualizar cualquier documento."
        ],
        answer: ["Comparar la varianza con los riesgos del registro para determinar si alguno se materializó, evaluar el impacto en la exposición general del proyecto y actualizar el registro y los documentos pertinentes."],
        rationale: "La Tarea 1 del Dominio V establece que se debe analizar los datos para determinar el estado de cumplimiento contra la línea base y monitorear el impacto sobre la exposición general al riesgo. Una varianza del 12% en obras civiles puede ser la materialización de riesgos identificados (suelos diferentes, incremento de materiales) o de riesgos no identificados. Ambos casos requieren actualizar el registro.",
        tags: {
            format:    "opción_única",
            domain:    "monitoreo_y_cierre",
            method:    "predictivo",
            cognitive: "aplicación"
        }
    },
    {
        question: "Un proyecto de líneas de transmisión está en la fase final de pruebas. El gerente de riesgos evalúa el nivel de riesgo residual del proyecto y concluye que está dentro del umbral aceptable definido en el plan. ¿Qué debe hacer a continuación?",
        options: [
            "Continuar monitoreando indefinidamente hasta que se declare el cierre formal del proyecto.",
            "Preparar un informe de cierre de riesgos, documentar las lecciones aprendidas y actualizar los activos organizacionales con los datos de riesgo del proyecto.",
            "Transferir todos los riesgos residuales al equipo de operaciones sin documentación adicional.",
            "Eliminar el registro de riesgos ya que el proyecto está casi terminado."
        ],
        answer: ["Preparar un informe de cierre de riesgos, documentar las lecciones aprendidas y actualizar los activos organizacionales con los datos de riesgo del proyecto."],
        rationale: "El Dominio V incluye el cierre formal de riesgos como parte del proceso. Preparar el informe de cierre, documentar lecciones aprendidas y actualizar los OPA es la forma en que el conocimiento del proyecto se transfiere a la organización para futuros proyectos. Estos activos son precisamente las entradas que el Task 1 del Dominio I menciona para proyectos futuros.",
        tags: {
            format:    "opción_única",
            domain:    "monitoreo_y_cierre",
            method:    "predictivo",
            cognitive: "aplicación"
        }
    },
    {
        question: "Ordena los siguientes pasos del proceso de monitoreo de riesgos según la secuencia correcta del estándar PMI:",
        options: [
            "Comunicar los niveles de riesgo a los interesados clave",
            "Recopilar y reconciliar datos de desempeño de los paquetes de trabajo relevantes para el riesgo",
            "Actualizar los documentos del proyecto (registro de riesgos, lecciones aprendidas, plan)",
            "Realizar análisis de varianza contra la línea base",
            "Evaluar el nivel de riesgo del proyecto"
        ],
        answer: [
            "Recopilar y reconciliar datos de desempeño de los paquetes de trabajo relevantes para el riesgo",
            "Realizar análisis de varianza contra la línea base",
            "Evaluar el nivel de riesgo del proyecto",
            "Actualizar los documentos del proyecto (registro de riesgos, lecciones aprendidas, plan)",
            "Comunicar los niveles de riesgo a los interesados clave"
        ],
        rationale: "La secuencia del Dominio V sigue la lógica: recopilación de datos → análisis de varianza → evaluación del nivel de riesgo → actualización de documentos → comunicación. No se puede evaluar el nivel de riesgo sin analizar varianzas, y no se debe comunicar antes de actualizar los documentos con la información más reciente.",
        tags: {
            format:    "ordenamiento",
            domain:    "monitoreo_y_cierre",
            method:    "predictivo",
            cognitive: "conocimiento"
        }
    },
    {
        question: "En un proyecto ágil de modernización de sistemas de medición de energía, el equipo realiza retrospectivas al final de cada sprint. ¿Cómo debe el gerente de riesgos aprovechar estas ceremonias en el contexto del monitoreo de riesgos?",
        options: [
            "Las retrospectivas son exclusivamente para el equipo de desarrollo y el gerente de riesgos no debe participar.",
            "Usar las retrospectivas para revisar qué riesgos se materializaron durante el sprint, qué respuestas funcionaron, identificar riesgos emergentes y actualizar el backlog de riesgos.",
            "Presentar el registro de riesgos completo en cada retrospectiva para que el equipo lo revise.",
            "Limitar la participación del gerente de riesgos a las retrospectivas de los sprints con incidentes graves."
        ],
        answer: ["Usar las retrospectivas para revisar qué riesgos se materializaron durante el sprint, qué respuestas funcionaron, identificar riesgos emergentes y actualizar el backlog de riesgos."],
        rationale: "En entornos ágiles, las retrospectivas son el equivalente a las revisiones de riesgos en metodologías predictivas. El gerente de riesgos debe integrar el monitoreo de riesgos en estas ceremonias: revisar materializaciones, efectividad de respuestas e identificar nuevos riesgos. El ECO PMI-RMP reconoce la adaptación del proceso de monitoreo al contexto ágil.",
        tags: {
            format:    "opción_única",
            domain:    "monitoreo_y_cierre",
            method:    "ágil",
            cognitive: "aplicación"
        }
    },
    {
        question: "El gerente de riesgos de un proyecto de transmisión nota que el riesgo de 'falla de la línea de suministro de aisladores de porcelana' fue clasificado como 'bajo' en el análisis inicial. Sin embargo, tras tres meses de ejecución, el proveedor principal ha tenido dos interrupciones de producción. ¿Qué debe hacer el gerente de riesgos?",
        options: [
            "Mantener la clasificación original ya que el análisis fue realizado con metodología correcta.",
            "Re-evaluar el riesgo con la nueva información: la frecuencia de interrupciones del proveedor es nueva evidencia que puede cambiar la probabilidad y justifica actualizar la prioridad en el registro.",
            "Escalar inmediatamente al patrocinador para cambiar de proveedor.",
            "Esperar a que el riesgo se materialice antes de re-clasificarlo, para basar la decisión en hechos concretos."
        ],
        answer: ["Re-evaluar el riesgo con la nueva información: la frecuencia de interrupciones del proveedor es nueva evidencia que puede cambiar la probabilidad y justifica actualizar la prioridad en el registro."],
        rationale: "El registro de riesgos es un documento vivo. La Tarea 1 y Task 4 del Dominio V establecen que se debe monitorear el nivel de riesgo del proyecto usando datos actuales. Dos interrupciones de producción en tres meses son una señal inequívoca de que la probabilidad del riesgo ha aumentado. El gerente de riesgos debe re-evaluar y actualizar el registro, no esperar a que el daño ocurra.",
        tags: {
            format:    "opción_única",
            domain:    "monitoreo_y_cierre",
            method:    "predictivo",
            cognitive: "análisis"
        }
    },
    {
        question: "En un proyecto híbrido de expansión de capacidad de transmisión, el gerente de riesgos necesita monitorear la exposición al riesgo tanto en las fases predictivas como en las iteraciones ágiles. ¿Cuál es el enfoque MÁS adecuado?",
        options: [
            "Aplicar solo indicadores predictivos (SPI, CPI) ya que son los más robustos para monitoreo de riesgos.",
            "Usar solo los artefactos ágiles (burndown, velocidad) ya que las fases ágiles son más dinámicas.",
            "Integrar ambos tipos de indicadores: indicadores de desempeño para las fases predictivas y artefactos ágiles para las iteraciones, con un reporte consolidado que muestre la exposición total del proyecto.",
            "Separar completamente el monitoreo de riesgos de las fases predictivas y ágiles, con registros independientes."
        ],
        answer: ["Integrar ambos tipos de indicadores: indicadores de desempeño para las fases predictivas y artefactos ágiles para las iteraciones, con un reporte consolidado que muestre la exposición total del proyecto."],
        rationale: "En proyectos híbridos, el monitoreo de riesgos debe adaptarse a cada contexto metodológico sin perder la visión integrada del proyecto. La Tarea 4 del Dominio V establece la necesidad de evaluar el nivel de riesgo del proyecto como un todo. Un reporte consolidado que combine indicadores de ambos enfoques permite a los interesados tener una visión unificada de la exposición al riesgo.",
        tags: {
            format:    "opción_única",
            domain:    "monitoreo_y_cierre",
            method:    "híbrido",
            cognitive: "análisis"
        }
    }
    ,

    // ─────────────────────────────────────────────────────────────────────────
    // PREGUNTAS ADICIONALES — 40 preguntas para completar 100
    // ─────────────────────────────────────────────────────────────────────────

    // ─── DOMINIO I: ESTRATEGIA Y PLANIFICACIÓN +9 ─────────────────────────────

    {
        question: "La PMO de una empresa de servicios requiere que todos los proyectos nuevos incluyan un análisis de interesados como parte de la planificación de riesgos. El gerente de riesgos de un proyecto de implementación de software argumenta que ya existe un análisis de interesados en el plan del proyecto. ¿Cuál es la postura correcta del gerente de riesgos?",
        options: [
            "El análisis de interesados del plan del proyecto es suficiente; no se necesita repetirlo para riesgos.",
            "El análisis de interesados es una entrada valiosa para la planificación de riesgos: permite identificar las actitudes al riesgo de cada interesado, sus umbrales individuales y su rol en la gestión de riesgos. Debe aprovecharse y complementarse, no duplicarse.",
            "El análisis de interesados no tiene relación con la gestión de riesgos del proyecto.",
            "El gerente de riesgos debe elaborar su propio análisis de interesados independiente del del proyecto."
        ],
        answer: ["El análisis de interesados es una entrada valiosa para la planificación de riesgos: permite identificar las actitudes al riesgo de cada interesado, sus umbrales individuales y su rol en la gestión de riesgos. Debe aprovecharse y complementarse, no duplicarse."],
        rationale: "La Tarea 2 del Dominio I establece que el gerente de riesgos debe aprovechar el análisis de interesados realizado por el director de proyecto. Los interesados tienen diferentes apetitos al riesgo, tolerancias y roles en la gestión de riesgos. Reutilizar y enriquecer este análisis es más eficiente que rehacerlo desde cero.",
        tags: { format: "opción_única", domain: "estrategia_y_planificación", method: "predictivo", cognitive: "aplicación" }
    },
    {
        question: "El gerente de riesgos de un proyecto de expansión de red eléctrica está definiendo las categorías de riesgo para la RBS. ¿Cuáles de los siguientes son factores que debe considerar al definir estas categorías según el ECO PMI-RMP? (Selecciona todos los que apliquen)",
        options: [
            "Las características específicas del proyecto y su contexto organizacional.",
            "Las categorías utilizadas en proyectos similares anteriores de la organización.",
            "El número de miembros del equipo de proyecto.",
            "Los factores ambientales de la empresa (EEF) relevantes para el tipo de proyecto.",
            "Las preferencias del patrocinador sobre qué riesgos desea ver reportados."
        ],
        answer: [
            "Las características específicas del proyecto y su contexto organizacional.",
            "Las categorías utilizadas en proyectos similares anteriores de la organización.",
            "Los factores ambientales de la empresa (EEF) relevantes para el tipo de proyecto."
        ],
        rationale: "La Tarea 4 del Dominio I establece identificar las categorías de riesgo apropiadas para el proyecto. Las categorías deben reflejar el tipo de proyecto, el contexto organizacional y la experiencia previa con proyectos similares. El número de miembros del equipo no determina las categorías; las preferencias del patrocinador pueden influir en los reportes pero no deben distorsionar las categorías técnicas de riesgo.",
        tags: { format: "opción_múltiple", domain: "estrategia_y_planificación", method: "predictivo", cognitive: "aplicación" }
    },
    {
        question: "El gerente de riesgos presenta al equipo de proyecto la diferencia entre apetito al riesgo, tolerancia al riesgo y umbral de riesgo. ¿Cuál de las siguientes descripciones refleja correctamente estas tres dimensiones?",
        options: [
            "Son sinónimos que describen el nivel de riesgo que la organización está dispuesta a aceptar.",
            "El apetito es la disposición general de la organización hacia el riesgo; la tolerancia es el rango aceptable de variación alrededor de los objetivos; el umbral es el punto específico más allá del cual el riesgo no es aceptable y requiere acción.",
            "El apetito y la tolerancia son conceptos del nivel estratégico; el umbral es exclusivamente operativo.",
            "El umbral de riesgo es siempre un valor numérico; el apetito y la tolerancia son siempre cualitativos."
        ],
        answer: ["El apetito es la disposición general de la organización hacia el riesgo; la tolerancia es el rango aceptable de variación alrededor de los objetivos; el umbral es el punto específico más allá del cual el riesgo no es aceptable y requiere acción."],
        rationale: "La Tarea 3 del Dominio I establece confirmar los umbrales de riesgo basados en el apetito al riesgo. La distinción entre estas tres dimensiones es fundamental: el apetito define la filosofía general, la tolerancia define los rangos aceptables por objetivo, y el umbral define el punto de acción específico. Confundirlos lleva a definir respuestas inadecuadas.",
        tags: { format: "opción_única", domain: "estrategia_y_planificación", method: "predictivo", cognitive: "conocimiento" }
    },
    {
        question: "En un proyecto de implementación de un sistema de gestión de activos para una empresa de transmisión eléctrica, el equipo trabaja con sprints de tres semanas. El gerente de riesgos debe adaptar el plan de comunicación de riesgos a este contexto. ¿Cuál es el enfoque MÁS adecuado?",
        options: [
            "Mantener el ciclo mensual de reporte de riesgos estándar independientemente de los sprints.",
            "Alinear el ciclo de reporte y revisión de riesgos con el ritmo de los sprints: revisión rápida en la planificación del sprint, reporte completo en la retrospectiva, y alertas inmediatas para riesgos críticos emergentes.",
            "Eliminar el plan de comunicación formal de riesgos en entornos ágiles.",
            "Reportar riesgos únicamente al sponsor al final de cada release, no en cada sprint."
        ],
        answer: ["Alinear el ciclo de reporte y revisión de riesgos con el ritmo de los sprints: revisión rápida en la planificación del sprint, reporte completo en la retrospectiva, y alertas inmediatas para riesgos críticos emergentes."],
        rationale: "La Tarea 5 del Dominio I establece definir un plan de comunicación de riesgos. En entornos ágiles, el plan de comunicación debe adaptarse al cadence del equipo. Alinear la comunicación de riesgos con las ceremonias del sprint garantiza que la información llegue en el momento en que el equipo puede actuar sobre ella.",
        tags: { format: "opción_única", domain: "estrategia_y_planificación", method: "ágil", cognitive: "aplicación" }
    },
    {
        question: "Ordena los pasos para establecer la estrategia de gestión de riesgos de un proyecto según el ECO PMI-RMP:",
        options: [
            "Capacitar y entrenar a los interesados en principios y procesos de gestión de riesgos",
            "Realizar el análisis del entorno del proyecto (EEF, OPA, metodología)",
            "Documentar el plan de gestión de riesgos con roles, RBS y criterios de priorización",
            "Establecer herramientas, procesos y categorías de riesgo",
            "Confirmar los umbrales de riesgo alineados al apetito organizacional"
        ],
        answer: [
            "Realizar el análisis del entorno del proyecto (EEF, OPA, metodología)",
            "Confirmar los umbrales de riesgo alineados al apetito organizacional",
            "Establecer herramientas, procesos y categorías de riesgo",
            "Documentar el plan de gestión de riesgos con roles, RBS y criterios de priorización",
            "Capacitar y entrenar a los interesados en principios y procesos de gestión de riesgos"
        ],
        rationale: "El Dominio I del ECO PMI-RMP sigue esta secuencia: primero entender el entorno (Task 2), luego definir los umbrales basados en el apetito (Task 3), establecer la estrategia con herramientas y categorías (Task 4), documentar el plan (Task 5), y finalmente involucrar y capacitar a los interesados (Task 6). El entorno informa los umbrales; los umbrales informan la estrategia; todo se formaliza en el plan.",
        tags: { format: "ordenamiento", domain: "estrategia_y_planificación", method: "predictivo", cognitive: "conocimiento" }
    },
    {
        question: "El gerente de riesgos de un proyecto descubre que la organización nunca ha documentado sus lecciones aprendidas en gestión de riesgos y no tiene datos históricos de proyectos anteriores. ¿Cómo debe gestionar esta limitación en la planificación de riesgos?",
        options: [
            "Posponer el inicio de la identificación de riesgos hasta que se generen datos históricos propios.",
            "Buscar fuentes externas: benchmarks de la industria, bases de datos de riesgos sectoriales, experiencia de expertos y proyectos similares de otras organizaciones, documentando estas fuentes en el plan.",
            "Aceptar que la planificación de riesgos será superficial dado que no hay datos históricos.",
            "Crear datos históricos ficticios para tener una línea base desde la cual partir."
        ],
        answer: ["Buscar fuentes externas: benchmarks de la industria, bases de datos de riesgos sectoriales, experiencia de expertos y proyectos similares de otras organizaciones, documentando estas fuentes en el plan."],
        rationale: "La Tarea 1 del Dominio I establece revisar documentos preliminares incluyendo benchmarks de la industria y datos históricos de fuentes externas cuando los internos no están disponibles. La ausencia de datos históricos internos es una limitación gestionable: los benchmarks sectoriales y la experiencia de expertos son sustitutos válidos que deben documentarse como fuentes del proceso.",
        tags: { format: "opción_única", domain: "estrategia_y_planificación", method: "predictivo", cognitive: "aplicación" }
    },
    {
        question: "En un proyecto híbrido de construcción y digitalización de una subestación, el gerente de riesgos nota que el equipo de construcción y el equipo digital tienen culturas de riesgo completamente diferentes: el equipo de construcción tiene procesos formales de seguridad y riesgo muy maduros, mientras el equipo digital gestiona riesgos de manera informal y reactiva. ¿Cuál es la acción correcta?",
        options: [
            "Imponer los procesos del equipo de construcción al equipo digital por ser más maduros.",
            "Permitir que cada equipo gestione riesgos según su propia cultura sin intentar integrarlos.",
            "Diseñar una estrategia de riesgos híbrida que adopte las mejores prácticas de ambos equipos y establezca un lenguaje y proceso común para los riesgos que afectan a ambas partes del proyecto.",
            "Contratar a un especialista en riesgos digitales para gestionar los riesgos del equipo digital de forma independiente."
        ],
        answer: ["Diseñar una estrategia de riesgos híbrida que adopte las mejores prácticas de ambos equipos y establezca un lenguaje y proceso común para los riesgos que afectan a ambas partes del proyecto."],
        rationale: "La Tarea 2 del Dominio I establece determinar la metodología de gestión de riesgos adecuada y analizar la cultura de madurez de riesgo del entorno. En proyectos híbridos con culturas de riesgo diferentes, la estrategia óptima integra las fortalezas de ambas culturas y establece un lenguaje común para los riesgos interfuncionales, sin imponer un solo modelo que puede generar rechazo.",
        tags: { format: "opción_única", domain: "estrategia_y_planificación", method: "híbrido", cognitive: "análisis" }
    },
    {
        question: "El plan de gestión de riesgos define la matriz de probabilidad e impacto con escalas del 1 al 5 para ambas dimensiones. El patrocinador pregunta por qué se usa una escala ordinal en lugar de probabilidades reales (0-100%). ¿Cuál es la respuesta correcta del gerente de riesgos?",
        options: [
            "Las escalas ordinales son más fáciles de usar pero menos precisas que las probabilidades reales.",
            "En el análisis cualitativo, las escalas ordinales son intencionalmente más simples: permiten una clasificación rápida y comparativa de riesgos sin la falsa precisión de probabilidades exactas que rara vez pueden sustentarse. Para mayor precisión se usa el análisis cuantitativo.",
            "Las probabilidades reales son ilegales en gestión de proyectos según el estándar PMI.",
            "Las escalas ordinales siempre producen resultados idénticos a las probabilidades reales."
        ],
        answer: ["En el análisis cualitativo, las escalas ordinales son intencionalmente más simples: permiten una clasificación rápida y comparativa de riesgos sin la falsa precisión de probabilidades exactas que rara vez pueden sustentarse. Para mayor precisión se usa el análisis cuantitativo."],
        rationale: "La Tarea 1 del Dominio I establece definir criterios de priorización y las definiciones de probabilidad e impacto. Las escalas ordinales del análisis cualitativo son una herramienta de clasificación relativa, no de medición absoluta. Asignar probabilidades exactas (ej. 37%) sin datos estadísticos sólidos introduce falsa precisión. El análisis cuantitativo con técnicas como Monte Carlo es el método apropiado cuando se necesita mayor precisión.",
        tags: { format: "opción_única", domain: "estrategia_y_planificación", method: "predictivo", cognitive: "análisis" }
    },
    {
        question: "¿Cuáles de los siguientes elementos debe contener el plan de gestión de riesgos para que sea completo y operativo según el ECO PMI-RMP? (Selecciona todos los que apliquen)",
        options: [
            "Roles y responsabilidades en la gestión de riesgos alineados con la RACI del proyecto.",
            "La lista completa de todos los riesgos identificados con sus respuestas planificadas.",
            "Definición de la Estructura de Desglose de Riesgos (RBS) y sus categorías.",
            "Plan de comunicación de riesgos adaptado a los diferentes interesados.",
            "Criterios de priorización de riesgos y definiciones de probabilidad e impacto."
        ],
        answer: [
            "Roles y responsabilidades en la gestión de riesgos alineados con la RACI del proyecto.",
            "Definición de la Estructura de Desglose de Riesgos (RBS) y sus categorías.",
            "Plan de comunicación de riesgos adaptado a los diferentes interesados.",
            "Criterios de priorización de riesgos y definiciones de probabilidad e impacto."
        ],
        rationale: "La Tarea 5 del Dominio I establece los componentes del plan de gestión de riesgos: roles/responsabilidades, RBS, plan de comunicación y criterios de priorización. La lista de riesgos identificados pertenece al registro de riesgos, no al plan de gestión, que define el proceso pero no los riesgos específicos del proyecto.",
        tags: { format: "opción_múltiple", domain: "estrategia_y_planificación", method: "predictivo", cognitive: "conocimiento" }
    },

    // ─── DOMINIO II: IDENTIFICACIÓN DE RIESGOS +9 ─────────────────────────────

    {
        question: "El gerente de riesgos facilita una sesión de identificación de riesgos con un equipo de 12 personas. Nota que los participantes más junior no expresan sus ideas cuando los directores están presentes. ¿Cuál es la técnica MÁS adecuada para mitigar este sesgo?",
        options: [
            "Excluir a los directores de la sesión de identificación de riesgos.",
            "Usar técnicas que permitan contribuciones anónimas o individuales primero, como el método Delphi o lluvia de ideas escrita, antes de la discusión grupal abierta.",
            "Pedir a los directores que hablen menos durante la sesión.",
            "Limitar el tiempo de participación de cada director a 5 minutos."
        ],
        answer: ["Usar técnicas que permitan contribuciones anónimas o individuales primero, como el método Delphi o lluvia de ideas escrita, antes de la discusión grupal abierta."],
        rationale: "La Tarea 1 del Dominio II establece conducir ejercicios de identificación de riesgos mediante reuniones, entrevistas y grupos focales. La dinámica de poder jerárquico es un sesgo conocido que suprime la participación de niveles junior. Las técnicas que permiten contribuciones anónimas o individuales antes de la discusión grupal reducen este efecto, garantizando que todas las perspectivas sean capturadas.",
        tags: { format: "opción_única", domain: "identificación_de_riesgos", method: "predictivo", cognitive: "aplicación" }
    },
    {
        question: "Durante la identificación de riesgos de un proyecto de modernización de subestación, el equipo técnico menciona que 'los transformadores de potencia tienen un tiempo de entrega de 18 meses'. ¿Cómo debe el gerente de riesgos clasificar esta información?",
        options: [
            "Como un hecho conocido que no requiere gestión de riesgos.",
            "Como un supuesto implícito que debe examinarse: si el proyecto tiene menos de 18 meses de anticipación para ordenar los equipos, el tiempo de entrega es un riesgo real de demora para la fecha de puesta en servicio.",
            "Como una restricción de costo que debe documentarse en el presupuesto.",
            "Como información técnica irrelevante para la gestión de riesgos."
        ],
        answer: ["Como un supuesto implícito que debe examinarse: si el proyecto tiene menos de 18 meses de anticipación para ordenar los equipos, el tiempo de entrega es un riesgo real de demora para la fecha de puesta en servicio."],
        rationale: "La Tarea 2 del Dominio II establece examinar los supuestos y restricciones y evaluar el riesgo asociado a cada uno. El tiempo de entrega de 18 meses es un dato que se convierte en riesgo si hay insuficiente anticipación. El gerente de riesgos debe verificar si los tiempos del proyecto contemplan este lead time y documentarlo como riesgo si no es así.",
        tags: { format: "opción_única", domain: "identificación_de_riesgos", method: "predictivo", cognitive: "análisis" }
    },
    {
        question: "El equipo de un proyecto identifica el siguiente riesgo: 'Si las lluvias de la temporada alta coinciden con la fase de excavación de cimientos, entonces el trabajo se detendrá entre 15 y 30 días, generando un retraso en la ruta crítica'. ¿Qué atributos del registro de riesgos están completos en este enunciado y cuáles faltan?",
        options: [
            "El enunciado está completo; no falta ningún atributo.",
            "El enunciado tiene la condición, el evento y el efecto, pero faltan atributos como: probabilidad estimada, urgencia, propietario del riesgo y posibles respuestas.",
            "El enunciado tiene el riesgo documentado correctamente pero falta la firma del gerente de proyecto.",
            "El enunciado es incorrecto porque un riesgo no puede tener un rango de impacto; debe ser un valor único."
        ],
        answer: ["El enunciado tiene la condición, el evento y el efecto, pero faltan atributos como: probabilidad estimada, urgencia, propietario del riesgo y posibles respuestas."],
        rationale: "La Tarea 4 del Dominio II establece examinar los atributos del riesgo como probabilidad, impacto, urgencia y establecer el origen y la propiedad. El enunciado tiene una buena estructura de causa-evento-efecto, pero un registro de riesgos completo requiere también la cuantificación (probabilidad), el tiempo de respuesta disponible (urgencia), quién es responsable (propietario) y las acciones planificadas.",
        tags: { format: "opción_única", domain: "identificación_de_riesgos", method: "predictivo", cognitive: "análisis" }
    },
    {
        question: "El gerente de riesgos de un proyecto ágil de instalación de medidores inteligentes integra la identificación de riesgos en el backlog del equipo. Al revisar el backlog con el Product Owner, descubre que hay impedimentos técnicos recurrentes relacionados con la compatibilidad de protocolos de comunicación. ¿Cómo debe tratar esta información?",
        options: [
            "Los impedimentos recurrentes son problemas operativos del sprint, no riesgos que deban documentarse.",
            "Un impedimento técnico recurrente puede ser el síntoma de un riesgo sistémico no identificado: la incompatibilidad de protocolos puede afectar el objetivo de release completo. Debe analizarse como riesgo y documentarse en el registro.",
            "El impedimento debe transferirse al registro de problemas (issue log) del proyecto.",
            "El Product Owner es responsable de gestionar los impedimentos; el gerente de riesgos no debe involucrarse."
        ],
        answer: ["Un impedimento técnico recurrente puede ser el síntoma de un riesgo sistémico no identificado: la incompatibilidad de protocolos puede afectar el objetivo de release completo. Debe analizarse como riesgo y documentarse en el registro."],
        rationale: "La Tarea 1 del Dominio II establece analizar datos y entender el contexto de la información identificada. En entornos ágiles, los impedimentos recurrentes son señales de riesgos más profundos. Un problema que se repite en múltiples sprints trasciende el nivel operativo y debe gestionarse como riesgo a nivel de producto o proyecto.",
        tags: { format: "opción_única", domain: "identificación_de_riesgos", method: "ágil", cognitive: "análisis" }
    },
    {
        question: "¿Cuáles de los siguientes son disparadores (triggers) de riesgo válidos que deben documentarse en el registro de riesgos de un proyecto de construcción eléctrica? (Selecciona todos los que apliquen)",
        options: [
            "El inicio de la temporada de lluvias en la región donde se construye la subestación.",
            "La publicación de un proyecto de ley que podría modificar los estándares técnicos aplicables.",
            "La finalización exitosa de la fase de diseño de ingeniería.",
            "El anuncio de fusión entre el principal proveedor de transformadores y un competidor.",
            "La aprobación del presupuesto del proyecto por el comité directivo."
        ],
        answer: [
            "El inicio de la temporada de lluvias en la región donde se construye la subestación.",
            "La publicación de un proyecto de ley que podría modificar los estándares técnicos aplicables.",
            "El anuncio de fusión entre el principal proveedor de transformadores y un competidor."
        ],
        rationale: "La Tarea 3 del Dominio II establece documentar los disparadores de riesgo, sus causas y tiempos. Un disparador es un evento observable que indica que un riesgo puede estar materializándose o que aumenta su probabilidad. La temporada de lluvias dispara el riesgo de retrasos por lluvia; el proyecto de ley dispara el riesgo de cambio regulatorio; la fusión del proveedor dispara el riesgo de desabasto. La finalización del diseño y la aprobación del presupuesto son hitos positivos, no disparadores de riesgo.",
        tags: { format: "opción_múltiple", domain: "identificación_de_riesgos", method: "predictivo", cognitive: "aplicación" }
    },
    {
        question: "El gerente de riesgos de un proyecto revisa el registro y nota que todos los riesgos identificados son eventos futuros e inciertos. Sin embargo, el equipo también ha listado 'problemas' actuales como riesgos. ¿Cuál es la distinción correcta y cómo debe manejarla?",
        options: [
            "No hay diferencia práctica; los problemas y los riesgos deben gestionarse de la misma manera.",
            "Un riesgo es un evento incierto que puede ocurrir en el futuro; un problema es una situación que ya ocurrió y requiere acción inmediata. Los problemas deben trasladarse al registro de problemas y gestionarse por el proceso de control de cambios, no por el proceso de riesgos.",
            "Los problemas actuales son riesgos de alta probabilidad y deben mantenerse en el registro con probabilidad del 100%.",
            "El gerente de riesgos debe ignorar los problemas ya que están fuera del alcance de la gestión de riesgos."
        ],
        answer: ["Un riesgo es un evento incierto que puede ocurrir en el futuro; un problema es una situación que ya ocurrió y requiere acción inmediata. Los problemas deben trasladarse al registro de problemas y gestionarse por el proceso de control de cambios, no por el proceso de riesgos."],
        rationale: "La Tarea 4 del Dominio II establece analizar la validez de los riesgos identificados. Una distinción fundamental es que el riesgo tiene incertidumbre; el problema ya es una certeza. Mezclar problemas con riesgos distorsiona el análisis: un problema no tiene probabilidad de ocurrencia (ya ocurrió), por lo que no puede priorizarse con los mismos criterios que un riesgo.",
        tags: { format: "opción_única", domain: "identificación_de_riesgos", method: "predictivo", cognitive: "conocimiento" }
    },
    {
        question: "Ordena los pasos del proceso de desarrollo del registro de riesgos en un proyecto híbrido de transmisión eléctrica según la secuencia correcta del ECO PMI-RMP:",
        options: [
            "Asignar propietarios y documentar los atributos completos de cada riesgo",
            "Realizar ejercicios de identificación con el equipo y expertos",
            "Clasificar cada riesgo como amenaza u oportunidad",
            "Validar que los eventos identificados son riesgos reales (no problemas ni supuestos sin analizar)",
            "Documentar los disparadores, causas y condiciones de cada riesgo"
        ],
        answer: [
            "Realizar ejercicios de identificación con el equipo y expertos",
            "Documentar los disparadores, causas y condiciones de cada riesgo",
            "Validar que los eventos identificados son riesgos reales (no problemas ni supuestos sin analizar)",
            "Asignar propietarios y documentar los atributos completos de cada riesgo",
            "Clasificar cada riesgo como amenaza u oportunidad"
        ],
        rationale: "El Dominio II del ECO PMI-RMP sigue esta lógica: primero identificar (Task 1), documentar los contextos de cada riesgo incluyendo disparadores y causas (Task 3), validar que son riesgos genuinos (Task 4), completar los atributos incluyendo propietario (Task 4) y finalmente clasificar como amenaza u oportunidad para orientar la respuesta (Task 4).",
        tags: { format: "ordenamiento", domain: "identificación_de_riesgos", method: "híbrido", cognitive: "conocimiento" }
    },
    {
        question: "El gerente de riesgos facilita una sesión de identificación de riesgos para un proyecto de rehabilitación de líneas de transmisión. Al analizar los documentos de contratos preliminares, encuentra que el contrato incluye cláusulas de penalización por retrasos muy estrictas. ¿Cómo debe usar esta información?",
        options: [
            "Ignorar las cláusulas contractuales ya que son responsabilidad del área legal.",
            "Reconocer que las cláusulas de penalización amplifican el impacto financiero de los riesgos de retraso: el impacto en el registro debe incluir tanto el costo directo del retraso como la penalización contractual.",
            "Documentar las cláusulas contractuales en el registro de supuestos, no en el registro de riesgos.",
            "Solicitar la renegociación del contrato para eliminar las cláusulas de penalización antes de continuar con la identificación de riesgos."
        ],
        answer: ["Reconocer que las cláusulas de penalización amplifican el impacto financiero de los riesgos de retraso: el impacto en el registro debe incluir tanto el costo directo del retraso como la penalización contractual."],
        rationale: "La Tarea 1 del Dominio I establece revisar documentos preliminares incluyendo contratos, y el Task 4 del Dominio II establece documentar el impacto de cada riesgo. Las penalizaciones contractuales son un multiplicador del impacto financiero de los riesgos de cronograma. No considerarlas lleva a subestimar el impacto real y, por tanto, a priorizar incorrectamente estos riesgos.",
        tags: { format: "opción_única", domain: "identificación_de_riesgos", method: "predictivo", cognitive: "análisis" }
    },
    {
        question: "El equipo de un proyecto de instalación de líneas de transmisión identifica que una nueva regulación gubernamental sobre servidumbres de paso podría simplificar significativamente el proceso de obtención de permisos. ¿Cómo debe clasificar y gestionar el gerente de riesgos esta situación?",
        options: [
            "Como una amenaza, ya que cualquier cambio regulatorio durante el proyecto es un riesgo negativo.",
            "Como una oportunidad: documentarla en el registro, evaluar su probabilidad e impacto positivo en el cronograma y costo, y diseñar una respuesta para explotar o mejorar la oportunidad.",
            "Como información irrelevante hasta que la regulación sea aprobada definitivamente.",
            "Como un supuesto del proyecto que debe incluirse en el acta de constitución."
        ],
        answer: ["Como una oportunidad: documentarla en el registro, evaluar su probabilidad e impacto positivo en el cronograma y costo, y diseñar una respuesta para explotar o mejorar la oportunidad."],
        rationale: "La Tarea 4 del Dominio II establece clasificar los riesgos como amenazas u oportunidades. Una simplificación regulatoria que reduce el tiempo de obtención de permisos es una oportunidad real que puede impactar positivamente el cronograma y el costo. Ignorarla o clasificarla incorrectamente como amenaza significa perder la posibilidad de capitalizar una ventaja potencial.",
        tags: { format: "opción_única", domain: "identificación_de_riesgos", method: "predictivo", cognitive: "aplicación" }
    },

    // ─── DOMINIO III: ANÁLISIS DE RIESGOS +9 ──────────────────────────────────

    {
        question: "El gerente de riesgos presenta al equipo la diferencia entre análisis cualitativo y cuantitativo de riesgos. Un gerente de proyecto pregunta cuándo es necesario el análisis cuantitativo. ¿Cuál es la respuesta correcta?",
        options: [
            "El análisis cuantitativo siempre es necesario; el cualitativo es solo un paso previo obligatorio.",
            "El análisis cuantitativo es necesario cuando se requiere una estimación numérica de la exposición total al riesgo del proyecto (distribución de probabilidad de costo o cronograma), para proyectos de alta complejidad o cuando las decisiones estratégicas requieren datos probabilísticos precisos.",
            "El análisis cuantitativo es opcional y solo se usa cuando el patrocinador lo solicita explícitamente.",
            "El análisis cualitativo es siempre suficiente para proyectos de menos de $10 millones."
        ],
        answer: ["El análisis cuantitativo es necesario cuando se requiere una estimación numérica de la exposición total al riesgo del proyecto (distribución de probabilidad de costo o cronograma), para proyectos de alta complejidad o cuando las decisiones estratégicas requieren datos probabilísticos precisos."],
        rationale: "La Tarea 2 del Dominio III establece las técnicas del análisis cuantitativo. La decisión de realizar análisis cuantitativo depende de la complejidad del proyecto, las necesidades de los tomadores de decisión y los recursos disponibles. No es necesario para todos los proyectos, pero es crítico cuando se necesita entender la distribución de probabilidad de los resultados, no solo la prioridad relativa de los riesgos.",
        tags: { format: "opción_única", domain: "análisis_de_riesgos", method: "predictivo", cognitive: "conocimiento" }
    },
    {
        question: "Un proyecto de construcción de subestación realiza una simulación Monte Carlo del costo. Los resultados muestran que el P50 es $45M y el P80 es $52M. El presupuesto aprobado es $47M. ¿Cuál es la implicación correcta de estos resultados?",
        options: [
            "El proyecto definitivamente costará entre $45M y $52M.",
            "Con el presupuesto de $47M, existe aproximadamente un 50% de probabilidad de completar el proyecto dentro del presupuesto. Para tener un 80% de confianza se necesitarían $52M. El equipo debe analizar si la exposición del 50% al sobrerun es aceptable o si se requiere contingencia adicional.",
            "El presupuesto de $47M es incorrecto y debe ajustarse al P50 de $45M.",
            "La simulación indica que el proyecto no es viable financieramente."
        ],
        answer: ["Con el presupuesto de $47M, existe aproximadamente un 50% de probabilidad de completar el proyecto dentro del presupuesto. Para tener un 80% de confianza se necesitarían $52M. El equipo debe analizar si la exposición del 50% al sobrerun es aceptable o si se requiere contingencia adicional."],
        rationale: "La Tarea 2 del Dominio III establece interpretar los resultados de la simulación Monte Carlo. El P50 y P80 son percentiles de la distribución: el 50% de los escenarios simulados cuesta $45M o menos, el 80% cuesta $52M o menos. Un presupuesto en $47M (entre P50 y P80) implica que hay aproximadamente un 30% de probabilidad de excederlo. Esta información es crítica para decidir si se necesita reserva de contingencia adicional.",
        tags: { format: "opción_única", domain: "análisis_de_riesgos", method: "predictivo", cognitive: "análisis" }
    },
    {
        question: "El gerente de riesgos realiza un análisis de pronóstico y tendencias en los datos de desempeño del proyecto. Observa que el CPI ha caído de 1.05 a 0.89 en las últimas cuatro semanas de manera consistente. ¿Cómo debe interpretar esta tendencia desde la perspectiva del análisis de riesgos?",
        options: [
            "La caída del CPI es un problema de desempeño del equipo y no tiene relación con los riesgos.",
            "Una tendencia sostenida de deterioro del CPI puede indicar que riesgos de costo identificados se están materializando o que existen amenazas emergentes no identificadas. El gerente de riesgos debe revisar el registro y evaluar si algún riesgo está siendo la causa raíz.",
            "El CPI de 0.89 es solo ligeramente bajo y no requiere análisis adicional hasta que caiga debajo de 0.80.",
            "El análisis de tendencias solo es válido para proyectos de más de 12 meses de duración."
        ],
        answer: ["Una tendencia sostenida de deterioro del CPI puede indicar que riesgos de costo identificados se están materializando o que existen amenazas emergentes no identificadas. El gerente de riesgos debe revisar el registro y evaluar si algún riesgo está siendo la causa raíz."],
        rationale: "La Tarea 2 del Dominio III establece realizar análisis de pronóstico y tendencias sobre información nueva e histórica. El análisis de tendencias en indicadores de desempeño es una fuente de datos de riesgo: un CPI que cae consistentemente puede ser la señal de un riesgo materializándose. El gerente de riesgos no debe esperar a que el problema sea evidente; debe investigar proactivamente la causa raíz.",
        tags: { format: "opción_única", domain: "análisis_de_riesgos", method: "predictivo", cognitive: "análisis" }
    },
    {
        question: "El gerente de riesgos capacita al equipo sobre el uso del diagrama de Tornado. Un ingeniero pregunta qué hace que este diagrama sea más útil que la simple lista de riesgos ordenada por score. ¿Cuál es la respuesta correcta?",
        options: [
            "El diagrama de Tornado no tiene ventajas sobre la lista ordenada; son herramientas equivalentes.",
            "El diagrama de Tornado muestra la sensibilidad relativa del resultado del proyecto a cada variable de riesgo individual, permitiendo identificar cuáles tienen mayor influencia en la variabilidad total del resultado. Esto orienta la priorización hacia los riesgos con mayor impacto sistémico.",
            "El diagrama de Tornado es solo una visualización más atractiva de los mismos datos del registro de riesgos.",
            "El diagrama de Tornado es exclusivamente para análisis de cronograma; para análisis de costo se usa la simulación Monte Carlo."
        ],
        answer: ["El diagrama de Tornado muestra la sensibilidad relativa del resultado del proyecto a cada variable de riesgo individual, permitiendo identificar cuáles tienen mayor influencia en la variabilidad total del resultado. Esto orienta la priorización hacia los riesgos con mayor impacto sistémico."],
        rationale: "La Tarea 2 del Dominio III incluye el análisis de sensibilidad mediante el diagrama de Tornado. Su valor diferencial es mostrar la contribución relativa de cada riesgo a la variabilidad total del resultado: un riesgo con score moderado puede tener alta sensibilidad (gran impacto en el resultado si varía) mientras que un riesgo con score alto puede tener baja sensibilidad. Esta perspectiva complementa la priorización cualitativa.",
        tags: { format: "opción_única", domain: "análisis_de_riesgos", method: "predictivo", cognitive: "análisis" }
    },
    {
        question: "¿Cuáles de las siguientes son técnicas válidas para el análisis cuantitativo de riesgos según el ECO PMI-RMP? (Selecciona todas las que apliquen)",
        options: [
            "Simulación Monte Carlo del cronograma y costo.",
            "Análisis de árbol de decisiones con valor monetario esperado (EMV).",
            "Matriz de probabilidad e impacto con escalas del 1 al 5.",
            "Análisis de sensibilidad mediante diagrama de Tornado.",
            "Clasificación nominal de riesgos usando la RBS.",
            "Técnicas de gestión de riesgos probabilísticas."
        ],
        answer: [
            "Simulación Monte Carlo del cronograma y costo.",
            "Análisis de árbol de decisiones con valor monetario esperado (EMV).",
            "Análisis de sensibilidad mediante diagrama de Tornado.",
            "Técnicas de gestión de riesgos probabilísticas."
        ],
        rationale: "La Tarea 2 del Dominio III incluye como técnicas cuantitativas: Monte Carlo, árboles de decisión, EMV, análisis de sensibilidad y técnicas probabilísticas. La matriz de probabilidad e impacto y la clasificación nominal mediante RBS son herramientas del análisis cualitativo (Task 1), no cuantitativo.",
        tags: { format: "opción_múltiple", domain: "análisis_de_riesgos", method: "predictivo", cognitive: "conocimiento" }
    },
    {
        question: "El gerente de riesgos de un proyecto de líneas de transmisión realiza el análisis cualitativo y obtiene 47 riesgos clasificados. Al presentar al patrocinador, este pide que el equipo trabaje en todos los riesgos simultáneamente. ¿Cuál es la respuesta correcta del gerente de riesgos?",
        options: [
            "Aceptar la solicitud del patrocinador y asignar recursos para trabajar en todos los riesgos.",
            "Explicar que la priorización es el propósito central del análisis cualitativo: gestionar todos los riesgos simultáneamente dispersa los recursos y es ineficiente. El enfoque correcto es concentrar la atención y los recursos en los riesgos de alta prioridad primero.",
            "Reducir la lista a 10 riesgos para que sea manejable según la solicitud del patrocinador.",
            "Delegar la gestión de los riesgos de baja prioridad a los propietarios de los paquetes de trabajo sin supervisión."
        ],
        answer: ["Explicar que la priorización es el propósito central del análisis cualitativo: gestionar todos los riesgos simultáneamente dispersa los recursos y es ineficiente. El enfoque correcto es concentrar la atención y los recursos en los riesgos de alta prioridad primero."],
        rationale: "La Tarea 1 del Dominio III establece que el propósito del análisis cualitativo es priorizar los riesgos basándose en impacto y urgencia. La priorización existe precisamente porque los recursos son limitados. Trabajar en todos simultáneamente ignora las diferencias de criticidad y puede llevar a gestionar riesgos de bajo impacto con el mismo esfuerzo que los críticos.",
        tags: { format: "opción_única", domain: "análisis_de_riesgos", method: "predictivo", cognitive: "aplicación" }
    },
    {
        question: "En un proyecto ágil de implementación de sistemas de protección eléctrica, el equipo completa la revisión del sprint 4 de 8. El burndown del release muestra que la velocidad actual completará solo el 65% del backlog comprometido para el release. ¿Cuál es el análisis de riesgo correcto?",
        options: [
            "No hay riesgo; el equipo tiene cuatro sprints restantes para recuperar el 35% faltante.",
            "La tendencia de velocidad indica un riesgo significativo de no cumplir el objetivo del release. El gerente de riesgos debe analizar si el 65% completable incluye los ítems críticos del backlog, evaluar las causas de la baja velocidad y determinar si hay riesgos subyacentes no gestionados.",
            "El burndown solo es relevante para el sprint actual, no para el análisis de riesgos del release.",
            "El equipo debe agregar más sprints al release para cumplir con el 100% del backlog."
        ],
        answer: ["La tendencia de velocidad indica un riesgo significativo de no cumplir el objetivo del release. El gerente de riesgos debe analizar si el 65% completable incluye los ítems críticos del backlog, evaluar las causas de la baja velocidad y determinar si hay riesgos subyacentes no gestionados."],
        rationale: "La Tarea 3 del Dominio III establece evaluar la complejidad del riesgo y su impacto en los objetivos del proyecto. En entornos ágiles, la tendencia de velocidad es un indicador de riesgo de alcance del release. El análisis debe ir más allá del número: ¿qué ítems forman el 65% completable? ¿Los elementos de mayor valor están incluidos? ¿Qué factores están limitando la velocidad?",
        tags: { format: "opción_única", domain: "análisis_de_riesgos", method: "ágil", cognitive: "análisis" }
    },
    {
        question: "El gerente de riesgos evalúa los objetivos de cumplimiento regulatorio de un proyecto de subestación contra los objetivos estratégicos de la organización. Identifica que los plazos regulatorios para la puesta en servicio son más exigentes que los compromisos contractuales del proyecto. ¿Cuál es la implicación para el análisis de riesgos?",
        options: [
            "Los plazos regulatorios son responsabilidad del área legal, no del gerente de riesgos.",
            "La discrepancia entre plazos regulatorios y contractuales crea un riesgo de cumplimiento: si el proyecto sigue el cronograma contractual podría incumplir los plazos regulatorios. Este riesgo debe priorizarse y gestionarse activamente.",
            "El plazo más restrictivo es el regulatorio; por tanto el cronograma contractual debe ignorarse.",
            "No hay riesgo si la organización tiene relaciones positivas con el ente regulador."
        ],
        answer: ["La discrepancia entre plazos regulatorios y contractuales crea un riesgo de cumplimiento: si el proyecto sigue el cronograma contractual podría incumplir los plazos regulatorios. Este riesgo debe priorizarse y gestionarse activamente."],
        rationale: "La Tarea 3 del Dominio III establece evaluar los objetivos de cumplimiento del proyecto contra los objetivos estratégicos organizacionales incluyendo la gobernanza regulatoria. Las discrepancias entre diferentes marcos normativos (contrato vs. regulación) son fuentes de riesgo que pueden tener consecuencias severas: multas, suspensión de operaciones y daño reputacional.",
        tags: { format: "opción_única", domain: "análisis_de_riesgos", method: "híbrido", cognitive: "análisis" }
    },
    {
        question: "Ordena los pasos del proceso de análisis cualitativo de riesgos según la secuencia correcta del ECO PMI-RMP:",
        options: [
            "Priorizar los riesgos por impacto y urgencia para enfoque de respuesta",
            "Clasificar los riesgos usando la RBS con categorías del plan de gestión de riesgos",
            "Asesorar a los interesados sobre las estrategias de categorización",
            "Estimar el impacto de cada riesgo en cronograma, presupuesto, recursos y alcance",
            "Aplicar la matriz de riesgo con criterios preestablecidos para cada riesgo"
        ],
        answer: [
            "Clasificar los riesgos usando la RBS con categorías del plan de gestión de riesgos",
            "Estimar el impacto de cada riesgo en cronograma, presupuesto, recursos y alcance",
            "Aplicar la matriz de riesgo con criterios preestablecidos para cada riesgo",
            "Priorizar los riesgos por impacto y urgencia para enfoque de respuesta",
            "Asesorar a los interesados sobre las estrategias de categorización"
        ],
        rationale: "La Tarea 1 del Dominio III sigue esta lógica: clasificar usando la RBS para organizar los riesgos por categoría, estimar los impactos en los objetivos del proyecto, aplicar la matriz para calcular el score de cada riesgo, priorizar combinando impacto y urgencia, y asesorar a los interesados sobre el resultado. La categorización precede a la estimación; la estimación precede a la aplicación de la matriz.",
        tags: { format: "ordenamiento", domain: "análisis_de_riesgos", method: "predictivo", cognitive: "conocimiento" }
    },

    // ─── DOMINIO IV: RESPUESTA A RIESGOS +5 ───────────────────────────────────

    {
        question: "El gerente de riesgos identifica que el riesgo de 'falla en el suministro de conductores de aluminio' tiene alta probabilidad pero existe un proveedor alternativo confiable que podría cubrir la demanda con un 10% de sobrecosto. ¿Cuál es la estrategia de respuesta MÁS adecuada y por qué?",
        options: [
            "Evitar: cambiar el diseño para no usar conductores de aluminio.",
            "Mitigar: pre-calificar y mantener al proveedor alternativo como opción de contingencia activable si el proveedor principal falla, limitando el impacto a un 10% de sobrecosto conocido.",
            "Aceptar pasivamente: no hacer nada y esperar a que ocurra la falla para buscar alternativas.",
            "Transferir: incluir en el contrato una cláusula que haga al contratista responsable de conseguir el material."
        ],
        answer: ["Mitigar: pre-calificar y mantener al proveedor alternativo como opción de contingencia activable si el proveedor principal falla, limitando el impacto a un 10% de sobrecosto conocido."],
        rationale: "La Tarea 1 del Dominio IV establece seleccionar la estrategia de respuesta apropiada. Con un proveedor alternativo identificado, la mitigación es la estrategia más eficiente: pre-calificar al proveedor alternativo reduce la probabilidad de impacto severo sin el costo de evitar completamente el riesgo (rediseño) ni la incertidumbre de la aceptación pasiva. El 10% de sobrecosto es el costo conocido y acotado de la respuesta.",
        tags: { format: "opción_única", domain: "respuesta_a_riesgos", method: "predictivo", cognitive: "aplicación" }
    },
    {
        question: "El equipo identifica que existe una oportunidad de reducir el costo del proyecto en un 8% si se adelanta la compra de equipos antes de que entren en vigor nuevos aranceles de importación. La probabilidad de que los aranceles se implementen es del 70%. ¿Qué estrategia de respuesta debe aplicar el gerente de riesgos para capitalizar esta oportunidad?",
        options: [
            "Aceptar la oportunidad y no tomar ninguna acción proactiva.",
            "Explotar la oportunidad: tomar acción para asegurar que la compra anticipada ocurra antes de la entrada en vigor de los aranceles, eliminando la incertidumbre y garantizando el ahorro.",
            "Mejorar la oportunidad: aumentar la cantidad de equipos a comprar para maximizar el ahorro.",
            "Compartir la oportunidad con el contratista mediante un contrato de incentivo."
        ],
        answer: ["Explotar la oportunidad: tomar acción para asegurar que la compra anticipada ocurra antes de la entrada en vigor de los aranceles, eliminando la incertidumbre y garantizando el ahorro."],
        rationale: "La Tarea 1 del Dominio IV establece las estrategias de respuesta para oportunidades. Con una probabilidad del 70% y un beneficio del 8%, explotar es la estrategia correcta: se toma acción para garantizar que la oportunidad se materialice (compra anticipada), en lugar de solo aumentar su probabilidad (mejorar) o esperar pasivamente (aceptar). Explotar elimina la incertidumbre convirtiendo la oportunidad potencial en resultado garantizado.",
        tags: { format: "opción_única", domain: "respuesta_a_riesgos", method: "predictivo", cognitive: "aplicación" }
    },
    {
        question: "¿Cuáles de las siguientes son diferencias clave entre un plan de contingencia y un plan de workaround según el ECO PMI-RMP? (Selecciona todas las que apliquen)",
        options: [
            "El plan de contingencia se prepara con anticipación para riesgos identificados; el workaround es una respuesta improvisada a riesgos no identificados o a situaciones inesperadas.",
            "El plan de contingencia requiere un disparador específico para activarse; el workaround se activa cuando el riesgo ya se materializó sin plan previo.",
            "Los planes de contingencia son siempre más costosos que los workarounds.",
            "El workaround no requiere documentación; el plan de contingencia siempre requiere aprobación formal.",
            "Ambos buscan reducir el impacto de los riesgos que se materializan, pero difieren en el momento de su elaboración."
        ],
        answer: [
            "El plan de contingencia se prepara con anticipación para riesgos identificados; el workaround es una respuesta improvisada a riesgos no identificados o a situaciones inesperadas.",
            "El plan de contingencia requiere un disparador específico para activarse; el workaround se activa cuando el riesgo ya se materializó sin plan previo.",
            "Ambos buscan reducir el impacto de los riesgos que se materializan, pero difieren en el momento de su elaboración."
        ],
        rationale: "La Tarea 1 del Dominio IV establece determinar el workaround como parte de la planificación de respuestas. La distinción clave es temporal: el plan de contingencia se diseña antes de que ocurra el riesgo y tiene un disparador definido; el workaround se elabora en el momento en que ocurre un evento no anticipado. Ambos buscan minimizar el impacto, pero el primero ofrece mayor eficiencia al estar preparado de antemano.",
        tags: { format: "opción_múltiple", domain: "respuesta_a_riesgos", method: "predictivo", cognitive: "conocimiento" }
    },
    {
        question: "Al implementar el plan de respuesta al riesgo de 'retraso en la obtención de permisos ambientales', el equipo ejecuta la estrategia de mitigación: contratar a una firma especializada en gestión de permisos. Tres meses después, el gerente nota que esta firma tiene conflictos de interés con el ente regulador. ¿Cómo debe clasificar y gestionar esta situación?",
        options: [
            "Como un problema operativo del contrato con la firma especializada.",
            "Como un riesgo secundario surgido de la implementación de la respuesta: el conflicto de interés puede empeorar la situación de permisos en lugar de mejorarla. Debe evaluarse su impacto y ajustarse la respuesta.",
            "Como el riesgo original materializándose en una nueva forma.",
            "Como información irrelevante si la firma tiene experiencia demostrada en proyectos similares."
        ],
        answer: ["Como un riesgo secundario surgido de la implementación de la respuesta: el conflicto de interés puede empeorar la situación de permisos en lugar de mejorarla. Debe evaluarse su impacto y ajustarse la respuesta."],
        rationale: "La Tarea 2 del Dominio IV establece evaluar y reaccionar ante riesgos secundarios y residuales de la implementación del plan. El conflicto de interés del proveedor de respuesta es un riesgo secundario clásico: nació directamente de la acción tomada para mitigar el riesgo original. Si no se gestiona, puede convertir una respuesta protectora en una amenaza adicional.",
        tags: { format: "opción_única", domain: "respuesta_a_riesgos", method: "predictivo", cognitive: "análisis" }
    },
    {
        question: "Ordena los pasos del proceso de implementación de respuesta a riesgos en un proyecto de transmisión eléctrica según el ECO PMI-RMP:",
        options: [
            "Evaluar y gestionar los riesgos secundarios y residuales generados por la respuesta",
            "Ejecutar las acciones de respuesta según el plan aprobado",
            "Obtener retroalimentación de los interesados sobre la efectividad de la respuesta",
            "Activar el plan de contingencia si el disparador del riesgo se presenta",
            "Improvisar ajustes según sea necesario basándose en la efectividad observada"
        ],
        answer: [
            "Activar el plan de contingencia si el disparador del riesgo se presenta",
            "Ejecutar las acciones de respuesta según el plan aprobado",
            "Obtener retroalimentación de los interesados sobre la efectividad de la respuesta",
            "Evaluar y gestionar los riesgos secundarios y residuales generados por la respuesta",
            "Improvisar ajustes según sea necesario basándose en la efectividad observada"
        ],
        rationale: "La Tarea 2 del Dominio IV establece el proceso de implementación: la contingencia se activa cuando el disparador se presenta, luego se ejecutan las acciones planificadas, se recoge retroalimentación de los interesados, se evalúan los riesgos secundarios y residuales generados, y finalmente se improvisan ajustes si los resultados no son los esperados. La improvisación es el último recurso, no el primer paso.",
        tags: { format: "ordenamiento", domain: "respuesta_a_riesgos", method: "predictivo", cognitive: "conocimiento" }
    },

    // ─── DOMINIO V: MONITOREO Y CIERRE +8 ─────────────────────────────────────

    {
        question: "El gerente de riesgos de un proyecto de líneas de transmisión realiza el análisis de varianza mensual. Encuentra que la varianza en el costo de materiales es del +18% respecto al presupuesto, pero todos los riesgos de costo en el registro están marcados como 'no ocurridos'. ¿Cuál es la conclusión más probable?",
        options: [
            "El presupuesto original estaba mal estimado; no hay relación con la gestión de riesgos.",
            "Existe un riesgo no identificado que se está materializando, o un riesgo identificado que no fue correctamente monitorizado y su materialización no fue detectada oportunamente.",
            "La varianza del 18% está dentro del margen de error normal de las estimaciones de presupuesto.",
            "El equipo de compras es responsable de la varianza; el gerente de riesgos no debe involucrarse."
        ],
        answer: ["Existe un riesgo no identificado que se está materializando, o un riesgo identificado que no fue correctamente monitorizado y su materialización no fue detectada oportunamente."],
        rationale: "La Tarea 1 del Dominio V establece analizar los datos para determinar el estado de cumplimiento contra la línea base y monitorear el impacto sobre la exposición general al riesgo del proyecto. Una varianza del 18% con todos los riesgos marcados como no ocurridos indica una inconsistencia: algo está impactando los costos y el sistema de monitoreo no lo está capturando. Esto es una señal de falla en el proceso de monitoreo o de riesgos no identificados.",
        tags: { format: "opción_única", domain: "monitoreo_y_cierre", method: "predictivo", cognitive: "análisis" }
    },
    {
        question: "¿Cuáles de las siguientes son actividades del proceso de monitoreo de riesgos según el ECO PMI-RMP Dominio V? (Selecciona todas las que apliquen)",
        options: [
            "Recopilar y reconciliar datos de desempeño de los paquetes de trabajo relevantes para el riesgo.",
            "Monitorear la respuesta a riesgos y documentar los riesgos residuales.",
            "Diseñar nuevas estrategias de respuesta para riesgos ya cerrados.",
            "Actualizar los documentos del proyecto incluyendo el registro de riesgos y las lecciones aprendidas.",
            "Evaluar el impacto de riesgos residuales y secundarios sobre los objetivos del proyecto.",
            "Comunicar los niveles de riesgo a los interesados clave."
        ],
        answer: [
            "Recopilar y reconciliar datos de desempeño de los paquetes de trabajo relevantes para el riesgo.",
            "Monitorear la respuesta a riesgos y documentar los riesgos residuales.",
            "Actualizar los documentos del proyecto incluyendo el registro de riesgos y las lecciones aprendidas.",
            "Evaluar el impacto de riesgos residuales y secundarios sobre los objetivos del proyecto.",
            "Comunicar los niveles de riesgo a los interesados clave."
        ],
        rationale: "El Dominio V incluye los Tasks 1-4: recopilación de datos, monitoreo de residuales y secundarios, actualización de documentos y comunicación del nivel de riesgo. Diseñar estrategias para riesgos ya cerrados no es una actividad de monitoreo: los riesgos cerrados no requieren nuevas respuestas. Si un riesgo reaparece, debe reabrirse en el registro, no tratarse como si estuviera cerrado.",
        tags: { format: "opción_múltiple", domain: "monitoreo_y_cierre", method: "predictivo", cognitive: "conocimiento" }
    },
    {
        question: "El gerente de riesgos monitorea un riesgo de 'falla en el sistema de control de la subestación' que fue respondido con una prueba de aceptación en fábrica (FAT). La FAT se completó exitosamente. ¿Cuál es el estado correcto de este riesgo?",
        options: [
            "El riesgo puede cerrarse ya que la respuesta fue exitosa y el disparador ya pasó.",
            "El riesgo tiene un riesgo residual: aunque la FAT fue exitosa, la instalación en campo y las pruebas de puesta en servicio representan escenarios diferentes. El riesgo debe mantenerse activo pero con menor probabilidad hasta completar las pruebas en sitio.",
            "El riesgo debe eliminarse del registro ya que los equipos fueron probados.",
            "El riesgo debe escalarse a alta prioridad ya que la FAT exitosa es un disparador de nuevos riesgos."
        ],
        answer: ["El riesgo tiene un riesgo residual: aunque la FAT fue exitosa, la instalación en campo y las pruebas de puesta en servicio representan escenarios diferentes. El riesgo debe mantenerse activo pero con menor probabilidad hasta completar las pruebas en sitio."],
        rationale: "La Tarea 2 del Dominio V establece monitorear el riesgo residual y documentarlo. Una FAT exitosa reduce significativamente la probabilidad de falla del sistema de control, pero no la elimina: las condiciones de campo (transporte, instalación, interferencias electromagnéticas, temperatura) son diferentes a las de la fábrica. El riesgo residual debe mantenerse en el registro con la probabilidad actualizada.",
        tags: { format: "opción_única", domain: "monitoreo_y_cierre", method: "predictivo", cognitive: "aplicación" }
    },
    {
        question: "El gerente de riesgos de un proyecto ágil de modernización de red eléctrica usa el tablero Kanban del equipo para monitorear riesgos. Detecta que una columna de 'impedimentos' lleva tres semanas con los mismos ítems sin resolución. ¿Cuál es la acción correcta desde la perspectiva del monitoreo de riesgos?",
        options: [
            "Los impedimentos en el tablero son responsabilidad del Scrum Master, no del gerente de riesgos.",
            "Los impedimentos sin resolver por tres semanas son señales de riesgos que se están materializando o de amenazas sistémicas no gestionadas. El gerente de riesgos debe analizar la causa raíz, actualizar el registro y evaluar el impacto acumulado en los objetivos del proyecto.",
            "Escalar todos los impedimentos al patrocinador del proyecto.",
            "Agregar los impedimentos como nuevas historias de usuario en el backlog para que el equipo los resuelva en el próximo sprint."
        ],
        answer: ["Los impedimentos sin resolver por tres semanas son señales de riesgos que se están materializando o de amenazas sistémicas no gestionadas. El gerente de riesgos debe analizar la causa raíz, actualizar el registro y evaluar el impacto acumulado en los objetivos del proyecto."],
        rationale: "La Tarea 1 del Dominio V establece monitorear el impacto sobre la exposición general al riesgo del proyecto. En entornos ágiles, los impedimentos persistentes son indicadores de riesgo observable. Un impedimento que dura tres sprints ya no es operativo sino sistémico, y su impacto acumulado puede estar deteriorando la velocidad del equipo y comprometiendo los objetivos del release.",
        tags: { format: "opción_única", domain: "monitoreo_y_cierre", method: "ágil", cognitive: "análisis" }
    },
    {
        question: "Al cierre de un proyecto de construcción de subestación, el gerente de riesgos prepara el informe de cierre de riesgos. ¿Cuáles son los elementos MÁS importantes que debe incluir este informe para maximizar el valor para futuros proyectos?",
        options: [
            "La lista completa de todos los riesgos identificados con su probabilidad inicial.",
            "Las lecciones aprendidas sobre qué riesgos se materializaron, cuáles no, qué respuestas funcionaron, qué falló en el proceso de gestión de riesgos y recomendaciones para proyectos similares.",
            "El costo total de las reservas de contingencia utilizadas durante el proyecto.",
            "La evaluación del desempeño individual de cada propietario de riesgo."
        ],
        answer: ["Las lecciones aprendidas sobre qué riesgos se materializaron, cuáles no, qué respuestas funcionaron, qué falló en el proceso de gestión de riesgos y recomendaciones para proyectos similares."],
        rationale: "La Tarea 3 del Dominio V establece actualizar los documentos del proyecto incluyendo las lecciones aprendidas. El mayor valor del informe de cierre para futuros proyectos no está en la lista de riesgos originales sino en el aprendizaje: qué predicciones fueron correctas, qué herramientas de respuesta funcionaron, dónde falló el proceso de monitoreo. Este conocimiento enriquece los OPA de la organización para el próximo proyecto.",
        tags: { format: "opción_única", domain: "monitoreo_y_cierre", method: "predictivo", cognitive: "análisis" }
    },
    {
        question: "El gerente de riesgos prepara reportes diferenciados para tres audiencias: el equipo de proyecto, el comité directivo y el cliente externo. ¿Cuáles son los criterios correctos para diferenciar el contenido de estos reportes?",
        options: [
            "El reporte del equipo debe ser el más corto ya que ellos conocen el proyecto; el del comité directivo el más largo.",
            "El equipo de proyecto necesita detalle operativo (riesgos activos, acciones pendientes, propietarios); el comité necesita el nivel de exposición total y decisiones requeridas; el cliente necesita solo la información que impacta los compromisos contractuales.",
            "Los tres grupos deben recibir el mismo reporte para garantizar transparencia y consistencia.",
            "El cliente externo no debe recibir información de riesgos para no generar preocupaciones innecesarias."
        ],
        answer: ["El equipo de proyecto necesita detalle operativo (riesgos activos, acciones pendientes, propietarios); el comité necesita el nivel de exposición total y decisiones requeridas; el cliente necesita solo la información que impacta los compromisos contractuales."],
        rationale: "La Tarea 4 del Dominio V establece preparar reportes para diferentes interesados y comunicar los niveles de riesgo a los interesados clave. Cada audiencia tiene necesidades de información diferentes: el equipo necesita guía operativa; el comité necesita información para la toma de decisiones estratégicas; el cliente necesita transparencia sobre los riesgos que pueden afectar sus compromisos sin exponerlo a detalles internos irrelevantes.",
        tags: { format: "opción_única", domain: "monitoreo_y_cierre", method: "predictivo", cognitive: "aplicación" }
    },
    {
        question: "El gerente de riesgos realiza una revisión del registro de riesgos a mitad del proyecto y encuentra que 12 de los 47 riesgos originales ya no son relevantes porque el contexto del proyecto cambió. ¿Cuál es la acción correcta?",
        options: [
            "Mantener todos los riesgos en el registro sin cambios para no alterar el historial del proyecto.",
            "Cerrar formalmente los riesgos caducados documentando la razón del cierre, y realizar una nueva sesión de identificación para capturar los riesgos emergentes del nuevo contexto.",
            "Eliminar los riesgos irrelevantes del registro sin documentación para simplificar el seguimiento.",
            "Transferir los riesgos caducados a un archivo histórico separado y continuar con los 35 restantes."
        ],
        answer: ["Cerrar formalmente los riesgos caducados documentando la razón del cierre, y realizar una nueva sesión de identificación para capturar los riesgos emergentes del nuevo contexto."],
        rationale: "La Tarea 3 del Dominio V establece monitorear y cerrar los riesgos caducados. El cierre formal con documentación mantiene la integridad del registro y provee información valiosa para lecciones aprendidas. Adicionalmente, un cambio significativo de contexto que invalida 12 riesgos probablemente también genera nuevos riesgos que deben ser identificados y agregados al registro actualizado.",
        tags: { format: "opción_única", domain: "monitoreo_y_cierre", method: "predictivo", cognitive: "aplicación" }
    },
    {
        question: "Ordena los pasos del proceso de monitoreo de riesgos secundarios según el ECO PMI-RMP:",
        options: [
            "Comunicar el impacto de los riesgos secundarios a los interesados relevantes",
            "Identificar los riesgos secundarios generados por las respuestas implementadas",
            "Actualizar el registro de riesgos con los secundarios identificados y su estado",
            "Evaluar el impacto de los riesgos secundarios sobre los objetivos del proyecto",
            "Monitorear la respuesta a los riesgos secundarios y documentar los residuales"
        ],
        answer: [
            "Identificar los riesgos secundarios generados por las respuestas implementadas",
            "Evaluar el impacto de los riesgos secundarios sobre los objetivos del proyecto",
            "Actualizar el registro de riesgos con los secundarios identificados y su estado",
            "Monitorear la respuesta a los riesgos secundarios y documentar los residuales",
            "Comunicar el impacto de los riesgos secundarios a los interesados relevantes"
        ],
        rationale: "La Tarea 2 del Dominio V establece el proceso de gestión de riesgos secundarios: primero identificarlos como consecuencia de las respuestas (no pueden gestionarse antes de implementar las respuestas), luego evaluar su impacto en los objetivos, actualizar el registro para que sean visibles y trazables, monitorear su evolución y los residuales que generan, y comunicar el impacto a los interesados que deben tomar decisiones.",
        tags: { format: "ordenamiento", domain: "monitoreo_y_cierre", method: "predictivo", cognitive: "conocimiento" }
    }

];