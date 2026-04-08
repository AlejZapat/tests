/** @type {Array<Object>} Banco de preguntas para examen PMI-PMOCP */
const pmoQuestions = [

    // ─────────────────────────────────────────────────────────────────────────
    // DOMINIO I: DESARROLLO Y ALINEAMIENTO ORGANIZACIONAL (16 preguntas)
    // ─────────────────────────────────────────────────────────────────────────

    // --- Tarea 1: Mejorar la Dirección de Proyectos Organizacionales ---
    {
        question: "La PMO de una empresa de manufactura recibe el mandato de elevar las competencias de Dirección de Proyectos Organizacionales (OPM). El primer paso es entender el punto de partida. ¿Cuál es la acción MÁS adecuada?",
        options: [
            "Lanzar de inmediato un programa de certificación PMP para todos los gerentes de proyecto.",
            "Realizar una evaluación integral de las competencias actuales de OPM en toda la organización antes de diseñar cualquier intervención.",
            "Contratar a consultores externos para que implementen las mejores prácticas de OPM sin evaluación previa.",
            "Definir el marco de competencias OPM basándose exclusivamente en los estándares de la industria, sin considerar el contexto organizacional."
        ],
        answer: ["Realizar una evaluación integral de las competencias actuales de OPM en toda la organización antes de diseñar cualquier intervención."],
        rationale: "La Tarea 1 del Dominio I establece que el primer paso es realizar una evaluación integral de las competencias actuales de OPM. Sin un diagnóstico preciso del estado actual, cualquier programa de desarrollo puede desperdiciar recursos en áreas que no lo necesitan o ignorar brechas críticas. La evaluación es el fundamento de una intervención efectiva.",
        tags: { format: "opción_única", domain: "desarrollo_y_alineamiento_organizacional", method: "predictivo", cognitive: "aplicación" }
    },
    {
        question: "La PMO identifica que los gerentes de proyecto senior tienen alto dominio técnico pero carecen de habilidades de gestión de interesados. Los coordinadores de proyecto, en cambio, tienen debilidades en planificación del cronograma. ¿Cuál es el enfoque MÁS adecuado para diseñar los programas de capacitación?",
        options: [
            "Implementar un único programa de capacitación estándar para todos los niveles para garantizar coherencia.",
            "Implementar programas de capacitación y talleres específicos para diferentes niveles de competencia, abordando las brechas identificadas en cada grupo.",
            "Priorizar la capacitación del nivel senior ya que tienen mayor impacto organizacional.",
            "Subcontratar toda la capacitación a un proveedor externo sin personalización."
        ],
        answer: ["Implementar programas de capacitación y talleres específicos para diferentes niveles de competencia, abordando las brechas identificadas en cada grupo."],
        rationale: "La Tarea 1 del Dominio I establece implementar programas de capacitación y talleres específicos para diferentes niveles de competencia. Un programa único para todos ignora las brechas diferenciadas por nivel. La efectividad del desarrollo de competencias depende de la pertinencia del contenido para cada audiencia específica.",
        tags: { format: "opción_única", domain: "desarrollo_y_alineamiento_organizacional", method: "predictivo", cognitive: "aplicación" }
    },
    {
        question: "¿Cuáles de las siguientes acciones forman parte de un programa completo para elevar las competencias de OPM según el ECO PMI-PMOCP? (Selecciona todas las que apliquen)",
        options: [
            "Desarrollar un marco de competencias OPM personalizado alineado con estándares de la industria y necesidades organizacionales.",
            "Establecer un programa de mentoría que relacione profesionales experimentados con profesionales en desarrollo.",
            "Integrar las competencias OPM en los sistemas de gestión del desempeño y progresión profesional.",
            "Reemplazar anualmente a los gerentes de proyecto con menor desempeño para mantener el estándar.",
            "Crear planes de desarrollo individuales y de equipo para mejorar competencias específicas de OPM."
        ],
        answer: [
            "Desarrollar un marco de competencias OPM personalizado alineado con estándares de la industria y necesidades organizacionales.",
            "Establecer un programa de mentoría que relacione profesionales experimentados con profesionales en desarrollo.",
            "Integrar las competencias OPM en los sistemas de gestión del desempeño y progresión profesional.",
            "Crear planes de desarrollo individuales y de equipo para mejorar competencias específicas de OPM."
        ],
        rationale: "La Tarea 1 del Dominio I incluye: marco personalizado, planes individuales y de equipo, programas de capacitación diferenciados, mentoría e integración en sistemas de desempeño. Reemplazar a los de menor desempeño no es una práctica de desarrollo de competencias, sino una medida punitiva que no construye capacidades organizacionales.",
        tags: { format: "opción_múltiple", domain: "desarrollo_y_alineamiento_organizacional", method: "predictivo", cognitive: "conocimiento" }
    },

    // --- Tarea 2: Dar forma a la Cultura Organizacional de OPM ---
    {
        question: "La PMO detecta que los proyectos fracasan frecuentemente no por razones técnicas sino porque los equipos no comparten los mismos valores sobre la importancia de la gestión de proyectos. ¿Cuál es la causa raíz que debe abordar la PMO?",
        options: [
            "La falta de herramientas de gestión de proyectos adecuadas en la organización.",
            "La ausencia de una visión clara y un conjunto de valores que respalden la cultura de proyecto en la organización.",
            "La insuficiente experiencia técnica de los gerentes de proyecto.",
            "La falta de un presupuesto adecuado para los proyectos."
        ],
        answer: ["La ausencia de una visión clara y un conjunto de valores que respalden la cultura de proyecto en la organización."],
        rationale: "La Tarea 2 del Dominio I establece que la PMO debe desarrollar una visión clara y un conjunto de valores que respalden la cultura del proyecto. Cuando los fracasos son culturales (no técnicos), la solución también debe ser cultural: articular una visión compartida y valores que orienten el comportamiento de todos los miembros de la organización respecto a la gestión de proyectos.",
        tags: { format: "opción_única", domain: "desarrollo_y_alineamiento_organizacional", method: "predictivo", cognitive: "análisis" }
    },
    {
        question: "La PMO tiene el apoyo verbal del CEO para impulsar la cultura OPM, pero los directores de área rara vez participan en las iniciativas de la PMO y no modelan las prácticas recomendadas. ¿Cuál es la acción MÁS efectiva según el ECO PMI-PMOCP?",
        options: [
            "Continuar con las iniciativas de la PMO sin el apoyo de los directores, enfocándose en los equipos operativos.",
            "Involucrar activamente al liderazgo en la promoción de las prácticas de OPM y demostración de compromiso visible.",
            "Documentar la falta de participación de los directores y reportarla al CEO.",
            "Reemplazar las iniciativas culturales por controles formales de cumplimiento de metodología."
        ],
        answer: ["Involucrar activamente al liderazgo en la promoción de las prácticas de OPM y demostración de compromiso visible."],
        rationale: "La Tarea 2 del Dominio I establece involucrar al liderazgo en la promoción de las prácticas de OPM y demostrar compromiso. El apoyo verbal del CEO sin el modelamiento activo de los directores de área crea una brecha entre el discurso y la práctica. La cultura se moldea por los comportamientos observables del liderazgo, no por las declaraciones formales.",
        tags: { format: "opción_única", domain: "desarrollo_y_alineamiento_organizacional", method: "predictivo", cognitive: "aplicación" }
    },

    // --- Tarea 3: Impulsar la Madurez Organizacional de OPM ---
    {
        question: "La PMO quiere demostrar al comité directivo el progreso de la organización en madurez OPM durante los últimos 18 meses. ¿Qué debe haber implementado previamente para poder hacer esta demostración?",
        options: [
            "Un sistema de certificaciones PMP para medir el número de gerentes certificados.",
            "Indicadores clave de desempeño (KPI) para medir el progreso de la madurez OPM desde el inicio del período.",
            "Un reporte cualitativo basado en la percepción del equipo de la PMO.",
            "Una encuesta de satisfacción a los patrocinadores de proyecto realizada al final del período."
        ],
        answer: ["Indicadores clave de desempeño (KPI) para medir el progreso de la madurez OPM desde el inicio del período."],
        rationale: "La Tarea 3 del Dominio I establece desarrollar e implementar KPI para medir el progreso de la madurez OPM. Para demostrar progreso es necesario haber definido y medido los KPI desde el inicio. Sin medición de línea base, no hay comparación posible. Los KPI de madurez OPM pueden incluir: porcentaje de proyectos que siguen la metodología, tasa de éxito de proyectos, varianza de cronograma y costo, entre otros.",
        tags: { format: "opción_única", domain: "desarrollo_y_alineamiento_organizacional", method: "predictivo", cognitive: "análisis" }
    },
    {
        question: "Ordena los pasos del proceso de mejora de madurez OPM según la secuencia correcta del ECO PMI-PMOCP:",
        options: [
            "Implementar programas de capacitación para abordar las brechas de madurez identificadas",
            "Realizar una evaluación integral de la madurez OPM usando modelos establecidos",
            "Comparar periódicamente las prácticas de OPM con estándares de la industria",
            "Desarrollar una hoja de ruta para la mejora de la madurez con hitos y objetivos claros",
            "Desarrollar e implementar KPI para medir el progreso de la madurez OPM"
        ],
        answer: [
            "Realizar una evaluación integral de la madurez OPM usando modelos establecidos",
            "Desarrollar una hoja de ruta para la mejora de la madurez con hitos y objetivos claros",
            "Desarrollar e implementar KPI para medir el progreso de la madurez OPM",
            "Implementar programas de capacitación para abordar las brechas de madurez identificadas",
            "Comparar periódicamente las prácticas de OPM con estándares de la industria"
        ],
        rationale: "La Tarea 3 del Dominio I sigue esta lógica: primero se evalúa el estado actual de madurez (punto de partida), luego se desarrolla la hoja de ruta con metas claras, se definen los KPI para medir el progreso, se implementan los programas de capacitación para cerrar las brechas identificadas, y finalmente se hace benchmarking continuo contra la industria para validar el nivel alcanzado.",
        tags: { format: "ordenamiento", domain: "desarrollo_y_alineamiento_organizacional", method: "predictivo", cognitive: "conocimiento" }
    },

    // --- Tarea 4: Cultivar las Capacidades de OPM ---
    {
        question: "La PMO de una empresa de servicios financieros quiere desarrollar un plan de capacidades OPM. El análisis inicial revela que la organización tiene procesos bien documentados pero carece de herramientas tecnológicas integradas y el personal tiene habilidades heterogéneas. ¿Qué debe incluir el plan de desarrollo de capacidades?",
        options: [
            "Enfocarse exclusivamente en la adquisición de herramientas tecnológicas ya que los procesos están bien documentados.",
            "Desarrollar un plan de capacidades que aborde personas, procesos y tecnología de manera integrada, priorizando según las brechas identificadas.",
            "Contratar nuevo personal con las habilidades requeridas para reemplazar al personal actual.",
            "Documentar las capacidades actuales sin proponer cambios hasta la próxima evaluación anual."
        ],
        answer: ["Desarrollar un plan de capacidades que aborde personas, procesos y tecnología de manera integrada, priorizando según las brechas identificadas."],
        rationale: "La Tarea 4 del Dominio I establece desarrollar un plan de capacidades que aborde personas, procesos y tecnología. Las tres dimensiones son interdependientes: mejorar solo la tecnología sin desarrollar las habilidades del personal produce subutilización; mejorar solo las personas sin procesos claros genera inconsistencia. El plan integrado garantiza que las mejoras sean sostenibles.",
        tags: { format: "opción_única", domain: "desarrollo_y_alineamiento_organizacional", method: "híbrido", cognitive: "análisis" }
    },
    {
        question: "¿Cuáles de los siguientes son pasos válidos para cultivar las capacidades OPM de una organización según el ECO PMI-PMOCP? (Selecciona todos los que apliquen)",
        options: [
            "Identificar y priorizar las capacidades clave de OPM necesarias para el éxito organizacional.",
            "Evaluar las capacidades actuales de OPM contra el estado futuro deseado para identificar brechas.",
            "Implementar inmediatamente todas las capacidades identificadas sin priorización.",
            "Desarrollar un plan de capacidades que aborde personas, procesos y tecnología.",
            "Asignar presupuesto exclusivamente a las capacidades tecnológicas por su mayor retorno de inversión."
        ],
        answer: [
            "Identificar y priorizar las capacidades clave de OPM necesarias para el éxito organizacional.",
            "Evaluar las capacidades actuales de OPM contra el estado futuro deseado para identificar brechas.",
            "Desarrollar un plan de capacidades que aborde personas, procesos y tecnología."
        ],
        rationale: "La Tarea 4 del Dominio I establece: identificar y priorizar capacidades clave, evaluar el estado actual vs. futuro y desarrollar el plan integrando personas, procesos y tecnología. Implementar sin priorización es ineficiente y arriesgado; asignar presupuesto solo a tecnología ignora las dimensiones humana y de procesos que son igualmente críticas.",
        tags: { format: "opción_múltiple", domain: "desarrollo_y_alineamiento_organizacional", method: "predictivo", cognitive: "conocimiento" }
    },
    {
        question: "La PMO lidera un programa de cambio cultural hacia OPM en una organización con gestión de proyectos reactiva. Después de seis meses, las encuestas muestran resistencia persistente del personal de nivel medio. ¿Cuál es la causa más probable y la acción correcta?",
        options: [
            "El personal de nivel medio no tiene capacidad de aprender nuevas prácticas; debe reemplazarse.",
            "Seis meses es tiempo insuficiente para evaluar el cambio cultural; debe esperarse al menos dos años antes de actuar.",
            "Las estrategias de gestión del cambio no están siendo efectivas para facilitar el cambio cultural a ese nivel; deben revisarse y adaptarse para abordar las preocupaciones específicas del personal de nivel medio.",
            "La resistencia es normal y debe ignorarse; eventualmente el cambio se consolidará por sí solo."
        ],
        answer: ["Las estrategias de gestión del cambio no están siendo efectivas para facilitar el cambio cultural a ese nivel; deben revisarse y adaptarse para abordar las preocupaciones específicas del personal de nivel medio."],
        rationale: "La Tarea 2 del Dominio I establece implementar estrategias de gestión del cambio para facilitar el cambio cultural. La resistencia persistente en un nivel específico indica que las estrategias actuales no están abordando las preocupaciones reales de ese grupo. La respuesta correcta es diagnosticar las causas de la resistencia y adaptar las estrategias, no ignorar la señal ni atacar a las personas.",
        tags: { format: "opción_única", domain: "desarrollo_y_alineamiento_organizacional", method: "predictivo", cognitive: "análisis" }
    },
    {
        question: "La PMO implementa un programa de mentoría para desarrollar competencias OPM. ¿Cuál es el principio de diseño MÁS importante para que el programa sea efectivo según el ECO PMI-PMOCP?",
        options: [
            "Asignar mentores de otras organizaciones para garantizar perspectivas externas.",
            "Relacionar a profesionales experimentados con profesionales en desarrollo, asegurando que los mentores tengan las competencias que el mentee necesita desarrollar.",
            "Limitar el programa a los gerentes de proyecto con certificación PMP.",
            "Establecer un único formato de mentoría grupal para maximizar el alcance del programa."
        ],
        answer: ["Relacionar a profesionales experimentados con profesionales en desarrollo, asegurando que los mentores tengan las competencias que el mentee necesita desarrollar."],
        rationale: "La Tarea 1 del Dominio I establece establecer un programa de mentoría que relacione profesionales experimentados con profesionales en desarrollo. La efectividad del programa depende de la calidad del emparejamiento: el mentor debe tener precisamente las competencias que el mentee necesita fortalecer, basándose en los planes de desarrollo individual previamente elaborados.",
        tags: { format: "opción_única", domain: "desarrollo_y_alineamiento_organizacional", method: "predictivo", cognitive: "aplicación" }
    },
    {
        question: "En una organización que adopta metodologías ágiles en sus proyectos, la PMO debe actualizar el marco de competencias OPM para reflejar esta evolución. ¿Cuál es la acción correcta según el ECO PMI-PMOCP?",
        options: [
            "Mantener el marco de competencias original ya que las competencias de gestión de proyectos son universales e inmutables.",
            "Reemplazar completamente el marco predictivo por uno ágil para alinearse con la nueva metodología.",
            "Evaluar y actualizar periódicamente el marco de competencias para reflejar las tendencias cambiantes de la industria y los requisitos organizacionales, integrando las competencias ágiles relevantes.",
            "Crear un segundo marco de competencias paralelo exclusivamente para proyectos ágiles."
        ],
        answer: ["Evaluar y actualizar periódicamente el marco de competencias para reflejar las tendencias cambiantes de la industria y los requisitos organizacionales, integrando las competencias ágiles relevantes."],
        rationale: "La Tarea 1 del Dominio I establece evaluar y actualizar periódicamente el marco de competencias para reflejar las tendencias cambiantes de la industria y los requisitos organizacionales. La adopción de metodologías ágiles es exactamente el tipo de cambio que justifica una actualización del marco. La respuesta correcta integra las nuevas competencias en lugar de crear silos o descartar lo que funciona.",
        tags: { format: "opción_única", domain: "desarrollo_y_alineamiento_organizacional", method: "ágil", cognitive: "aplicación" }
    },
    {
        question: "La PMO evalúa el estado actual de la cultura OPM y encuentra que la organización valora la entrega de proyectos a tiempo y dentro del presupuesto, pero no considera la gestión de interesados como parte del trabajo de gestión de proyectos. ¿Cuál debe ser la acción de la PMO?",
        options: [
            "Aceptar la cultura actual ya que el enfoque en tiempo y presupuesto es suficiente para el éxito de los proyectos.",
            "Evaluar la brecha entre la cultura actual y los principios OPM, y desarrollar estrategias de gestión del cambio para incorporar la gestión de interesados como competencia central.",
            "Imponer la gestión de interesados como requisito obligatorio en todos los proyectos mediante controles formales.",
            "Limitar el alcance de la PMO a los aspectos de cronograma y costo que ya son valorados por la organización."
        ],
        answer: ["Evaluar la brecha entre la cultura actual y los principios OPM, y desarrollar estrategias de gestión del cambio para incorporar la gestión de interesados como competencia central."],
        rationale: "La Tarea 2 del Dominio I establece evaluar la cultura organizacional actual y su alineamiento con los principios OPM, e implementar estrategias de gestión del cambio para facilitar el cambio cultural. Una cultura que excluye la gestión de interesados está incompleta en su visión de OPM. La PMO debe cerrar esta brecha mediante cambio cultural, no solo mediante controles formales.",
        tags: { format: "opción_única", domain: "desarrollo_y_alineamiento_organizacional", method: "predictivo", cognitive: "análisis" }
    },

    // ─────────────────────────────────────────────────────────────────────────
    // DOMINIO II: ELEMENTOS ESTRATÉGICOS DE LA PMO (18 preguntas)
    // ─────────────────────────────────────────────────────────────────────────

    // --- Tarea 1: Diseñar la Estrategia de PMO ---
    {
        question: "Una organización de logística decide crear su primera PMO. El director designado de la PMO comienza a definir la visión y los objetivos estratégicos. ¿Qué debe hacer PRIMERO según el ECO PMI-PMOCP?",
        options: [
            "Definir la visión y misión de la PMO basándose en las mejores prácticas de la industria.",
            "Seleccionar las herramientas de gestión de proyectos que utilizará la PMO.",
            "Evaluar el estado actual de la gestión de proyectos y las necesidades organizacionales antes de definir la estrategia.",
            "Contratar al personal de la PMO para comenzar a operar lo antes posible."
        ],
        answer: ["Evaluar el estado actual de la gestión de proyectos y las necesidades organizacionales antes de definir la estrategia."],
        rationale: "La Tarea 1 del Dominio II establece como primer paso evaluar el estado actual de la gestión de proyectos y las necesidades organizacionales. Una PMO cuya estrategia no está basada en un diagnóstico real del contexto organizacional corre el riesgo de resolver los problemas equivocados o de crear servicios que nadie necesita.",
        tags: { format: "opción_única", domain: "elementos_estratégicos_de_la_pmo", method: "predictivo", cognitive: "aplicación" }
    },
    {
        question: "¿Cuáles de los siguientes elementos deben incluirse en la estrategia de una PMO según el ECO PMI-PMOCP? (Selecciona todos los que apliquen)",
        options: [
            "Visión, misión y objetivos estratégicos de la PMO.",
            "Un plan de gestión de riesgos para la PMO.",
            "La nómina detallada del personal de la PMO.",
            "Un plan de comunicación para articular el valor de la PMO e involucrar a los interesados.",
            "Una hoja de ruta para la implementación con hitos claros.",
            "Métricas de desempeño para medir el valor de la PMO y su impacto estratégico."
        ],
        answer: [
            "Visión, misión y objetivos estratégicos de la PMO.",
            "Un plan de gestión de riesgos para la PMO.",
            "Un plan de comunicación para articular el valor de la PMO e involucrar a los interesados.",
            "Una hoja de ruta para la implementación con hitos claros.",
            "Métricas de desempeño para medir el valor de la PMO y su impacto estratégico."
        ],
        rationale: "La Tarea 1 del Dominio II incluye: visión/misión/objetivos, plan de riesgos, hoja de ruta, plan de comunicación y métricas de impacto. La nómina del personal es un elemento operativo, no estratégico, que no forma parte de la estrategia de la PMO.",
        tags: { format: "opción_múltiple", domain: "elementos_estratégicos_de_la_pmo", method: "predictivo", cognitive: "conocimiento" }
    },
    {
        question: "La PMO de una empresa de telecomunicaciones elabora su hoja de ruta de implementación. El director general pregunta cómo sabrán si la PMO está generando valor. ¿Qué debe tener implementado la PMO para responder esta pregunta en el futuro?",
        options: [
            "Un sistema de reporte de horas trabajadas por el equipo de la PMO.",
            "Métricas de desempeño definidas desde el inicio para medir el valor de la PMO y su impacto estratégico.",
            "Un ranking de satisfacción de los gerentes de proyecto con los servicios de la PMO.",
            "Un conteo del número de proyectos gestionados por la PMO."
        ],
        answer: ["Métricas de desempeño definidas desde el inicio para medir el valor de la PMO y su impacto estratégico."],
        rationale: "La Tarea 1 del Dominio II establece implementar métricas de desempeño para medir el valor de la PMO y el impacto estratégico. Las métricas deben definirse antes de operar, no después, para poder establecer líneas base y medir el cambio. El número de proyectos gestionados mide actividad, no valor; las horas trabajadas miden esfuerzo, no impacto.",
        tags: { format: "opción_única", domain: "elementos_estratégicos_de_la_pmo", method: "predictivo", cognitive: "análisis" }
    },

    // --- Tarea 2: Administrar el Mandato de la PMO ---
    {
        question: "La PMO tiene dificultades para que los gerentes de proyecto sigan sus lineamientos metodológicos. Algunos argumentan que la PMO no tiene autoridad real sobre sus proyectos. ¿Cuál es la causa raíz de este problema?",
        options: [
            "Los gerentes de proyecto tienen mayor experiencia que el equipo de la PMO.",
            "El alcance y la autoridad de la PMO no fueron claramente definidos dentro de la organización desde el inicio.",
            "La PMO está imponiendo metodologías inadecuadas para los tipos de proyectos de la organización.",
            "Los gerentes de proyecto no han recibido suficiente capacitación sobre los beneficios de la PMO."
        ],
        answer: ["El alcance y la autoridad de la PMO no fueron claramente definidos dentro de la organización desde el inicio."],
        rationale: "La Tarea 2 del Dominio II establece definir claramente el alcance y la autoridad de la PMO dentro de la organización. Cuando la autoridad de la PMO no está formalmente definida y comunicada, surge la ambigüedad sobre quién tiene la última palabra. Este es un problema de mandato, no de competencia técnica ni de calidad metodológica.",
        tags: { format: "opción_única", domain: "elementos_estratégicos_de_la_pmo", method: "predictivo", cognitive: "análisis" }
    },
    {
        question: "La PMO está elaborando su acta de constitución. ¿Cuáles de los siguientes elementos son esenciales en este documento según el ECO PMI-PMOCP? (Selecciona todos los que apliquen)",
        options: [
            "El propósito y los objetivos de la PMO.",
            "Las funciones clave de la PMO.",
            "El detalle del presupuesto operativo anual de la PMO.",
            "Los roles y responsabilidades de la PMO en relación con los proyectos y los interesados.",
            "El alcance y la autoridad de la PMO dentro de la organización."
        ],
        answer: [
            "El propósito y los objetivos de la PMO.",
            "Las funciones clave de la PMO.",
            "Los roles y responsabilidades de la PMO en relación con los proyectos y los interesados.",
            "El alcance y la autoridad de la PMO dentro de la organización."
        ],
        rationale: "La Tarea 2 del Dominio II establece que el acta de constitución de la PMO debe detallar: propósito, objetivos, funciones clave, roles y responsabilidades, y alcance y autoridad. El presupuesto operativo es un documento financiero separado, no parte del acta de constitución que define el mandato institucional de la PMO.",
        tags: { format: "opción_múltiple", domain: "elementos_estratégicos_de_la_pmo", method: "predictivo", cognitive: "conocimiento" }
    },
    {
        question: "La PMO logra el apoyo del CEO pero los directores de área se muestran escépticos sobre el valor que aportará. ¿Cuál es la acción MÁS efectiva para construir la aceptación del mandato de la PMO?",
        options: [
            "Esperar a que los resultados hablen por sí solos; el escepticismo se resolverá con el tiempo.",
            "Implementar un plan de participación de los interesados para construir la aceptación del mandato de la PMO entre los directores de área.",
            "Solicitar al CEO que emita una directiva obligando a los directores a colaborar con la PMO.",
            "Reducir el alcance de la PMO para evitar conflictos con los directores escépticos."
        ],
        answer: ["Implementar un plan de participación de los interesados para construir la aceptación del mandato de la PMO entre los directores de área."],
        rationale: "La Tarea 2 del Dominio II establece implementar un plan de participación de los interesados para lograr la aceptación del mandato de la PMO. El escepticismo de los directores es una señal de que sus preguntas y preocupaciones no han sido respondidas. El plan de participación debe identificar sus intereses específicos y diseñar interacciones que demuestren el valor de la PMO para cada uno.",
        tags: { format: "opción_única", domain: "elementos_estratégicos_de_la_pmo", method: "predictivo", cognitive: "aplicación" }
    },

    // --- Tarea 3: Establecer y Mantener la Gobernanza de la PMO ---
    {
        question: "La PMO de una empresa de tecnología necesita establecer su marco de gobernanza. ¿Cuál es el elemento MÁS crítico que debe definir este marco según el ECO PMI-PMOCP?",
        options: [
            "La lista de herramientas de software que usará la PMO.",
            "Los procesos de supervisión y toma de decisiones de la PMO.",
            "El calendario de vacaciones del equipo de la PMO.",
            "Las métricas de desempeño individual de cada miembro de la PMO."
        ],
        answer: ["Los procesos de supervisión y toma de decisiones de la PMO."],
        rationale: "La Tarea 3 del Dominio II establece establecer un marco de gobernanza que defina los procesos de supervisión y toma de decisiones de la PMO. Sin claridad sobre quién decide qué, cuándo y cómo se escalan los problemas, la gobernanza no puede funcionar. Las herramientas, calendarios y métricas individuales son elementos operativos, no de gobernanza.",
        tags: { format: "opción_única", domain: "elementos_estratégicos_de_la_pmo", method: "predictivo", cognitive: "conocimiento" }
    },
    {
        question: "La PMO tiene un marco de gobernanza establecido hace dos años. El entorno organizacional ha cambiado significativamente: la empresa adquirió una subsidiaria y adoptó metodologías ágiles en el 40% de sus proyectos. ¿Cuál es la acción correcta?",
        options: [
            "Mantener el marco de gobernanza actual ya que fue diseñado por expertos y no debe modificarse frecuentemente.",
            "Reemplazar completamente el marco de gobernanza por uno nuevo diseñado para el entorno actual.",
            "Implementar revisiones periódicas de gobernanza para garantizar su efectividad y adaptarlo a las necesidades cambiantes.",
            "Crear un segundo marco de gobernanza paralelo para los proyectos ágiles de la subsidiaria."
        ],
        answer: ["Implementar revisiones periódicas de gobernanza para garantizar su efectividad y adaptarlo a las necesidades cambiantes."],
        rationale: "La Tarea 3 del Dominio II establece implementar revisiones periódicas de gobernanza para garantizar la efectividad y adaptarse a las necesidades cambiantes. Un marco de gobernanza no es estático; debe evolucionar con la organización. La adquisición de una subsidiaria y la adopción de metodologías ágiles son cambios que justifican una revisión y actualización del marco.",
        tags: { format: "opción_única", domain: "elementos_estratégicos_de_la_pmo", method: "híbrido", cognitive: "aplicación" }
    },
    {
        question: "La PMO identifica que varios proyectos críticos están experimentando problemas que no llegan a su conocimiento hasta que ya son crisis. ¿Qué elemento del marco de gobernanza está fallando?",
        options: [
            "Las métricas de desempeño de los gerentes de proyecto.",
            "Los procedimientos de escalación y las estructuras de reporte y canales de comunicación para la gobernanza efectiva.",
            "La metodología de gestión de proyectos implementada por la PMO.",
            "El tamaño del equipo de la PMO, que es insuficiente para monitorear todos los proyectos."
        ],
        answer: ["Los procedimientos de escalación y las estructuras de reporte y canales de comunicación para la gobernanza efectiva."],
        rationale: "La Tarea 3 del Dominio II establece establecer estructuras de reporte y canales de comunicación para una gobernanza efectiva, y desarrollar procedimientos de escalación. Cuando los problemas no llegan a tiempo a la PMO, los canales de comunicación y los procedimientos de escalación son insuficientes o no están funcionando. Sin estos mecanismos, la PMO solo puede actuar reactivamente.",
        tags: { format: "opción_única", domain: "elementos_estratégicos_de_la_pmo", method: "predictivo", cognitive: "análisis" }
    },
    {
        question: "Ordena los pasos para diseñar e implementar la estrategia de una PMO desde cero según el ECO PMI-PMOCP:",
        options: [
            "Crear la hoja de ruta de implementación con hitos claros",
            "Evaluar el estado actual de la gestión de proyectos y las necesidades organizacionales",
            "Implementar métricas de desempeño para medir el valor e impacto estratégico",
            "Definir la visión, misión y objetivos estratégicos de la PMO",
            "Desarrollar el plan de comunicación para articular el valor de la PMO"
        ],
        answer: [
            "Evaluar el estado actual de la gestión de proyectos y las necesidades organizacionales",
            "Definir la visión, misión y objetivos estratégicos de la PMO",
            "Crear la hoja de ruta de implementación con hitos claros",
            "Desarrollar el plan de comunicación para articular el valor de la PMO",
            "Implementar métricas de desempeño para medir el valor e impacto estratégico"
        ],
        rationale: "La Tarea 1 del Dominio II establece esta secuencia lógica: primero el diagnóstico (sin él no hay estrategia válida), luego la definición de visión y objetivos, después la hoja de ruta que operacionaliza la estrategia, el plan de comunicación para involucrar a los interesados, y finalmente las métricas para medir el impacto una vez que la PMO está operando.",
        tags: { format: "ordenamiento", domain: "elementos_estratégicos_de_la_pmo", method: "predictivo", cognitive: "conocimiento" }
    },
    {
        question: "La PMO de una empresa multinacional opera en un entorno donde la mitad de los proyectos son predictivos y la otra mitad son ágiles. ¿Cómo debe diseñar su estrategia para ser relevante para ambos tipos de proyectos?",
        options: [
            "Diseñar la estrategia exclusivamente para proyectos predictivos y contratar una segunda PMO para los ágiles.",
            "Desarrollar una estrategia que aborde los puntos críticos de ambos enfoques y defina cómo la PMO agrega valor en cada contexto.",
            "Limitarse a la gobernanza y reportes, evitando tomar postura sobre las metodologías.",
            "Estandarizar todos los proyectos en metodología predictiva para simplificar la estrategia de la PMO."
        ],
        answer: ["Desarrollar una estrategia que aborde los puntos críticos de ambos enfoques y defina cómo la PMO agrega valor en cada contexto."],
        rationale: "La Tarea 1 del Dominio II establece desarrollar una estrategia de PMO que se alinee con los objetivos organizacionales y aborde los puntos críticos clave. El ECO PMI-PMOCP reconoce que los profesionales trabajan en entornos mixtos. Una PMO efectiva en un entorno híbrido debe tener servicios y propuestas de valor diferenciadas para cada tipo de proyecto.",
        tags: { format: "opción_única", domain: "elementos_estratégicos_de_la_pmo", method: "híbrido", cognitive: "análisis" }
    },
    {
        question: "La PMO necesita obtener el patrocinio ejecutivo para su mandato. El CEO está interesado pero el CFO es escéptico sobre el retorno de inversión de la PMO. ¿Cuál es la acción MÁS efectiva?",
        options: [
            "Ignorar al CFO y trabajar directamente con el CEO para avanzar con el mandato.",
            "Asegurar el patrocinio y apoyo ejecutivo mediante una presentación que demuestre el impacto financiero de la PMO usando métricas de valor relevantes para el CFO.",
            "Reducir el presupuesto solicitado para la PMO para disminuir la resistencia del CFO.",
            "Esperar a que la PMO demuestre resultados antes de buscar el patrocinio del CFO."
        ],
        answer: ["Asegurar el patrocinio y apoyo ejecutivo mediante una presentación que demuestre el impacto financiero de la PMO usando métricas de valor relevantes para el CFO."],
        rationale: "La Tarea 2 del Dominio II establece asegurar el patrocinio y apoyo ejecutivo para el mandato de la PMO. El CFO requiere argumentos en su propio lenguaje: retorno de inversión, reducción de sobrecostos, beneficios realizados. La PMO debe traducir su valor en términos financieros para obtener el apoyo de este interesado crítico. Ignorarlo o esperar crea vulnerabilidades en el mandato.",
        tags: { format: "opción_única", domain: "elementos_estratégicos_de_la_pmo", method: "predictivo", cognitive: "aplicación" }
    },
    {
        question: "La PMO lleva dos años operando con un mandato aprobado en 2022. La organización ha cambiado su modelo de negocio hacia servicios digitales, lo que ha transformado el tipo y complejidad de los proyectos. ¿Cuál es la acción correcta respecto al mandato de la PMO?",
        options: [
            "Mantener el mandato original ya que fue formalmente aprobado por el comité directivo.",
            "Crear un marco para revisar y actualizar periódicamente el mandato de la PMO para asegurar su relevancia en el nuevo contexto organizacional.",
            "Disolver la PMO actual y crear una nueva con un mandato diferente.",
            "Expandir el mandato unilateralmente sin aprobación del comité directivo para adaptarse a los cambios."
        ],
        answer: ["Crear un marco para revisar y actualizar periódicamente el mandato de la PMO para asegurar su relevancia en el nuevo contexto organizacional."],
        rationale: "La Tarea 2 del Dominio II establece crear un marco para revisar y actualizar periódicamente el mandato de la PMO. Un mandato obsoleto puede hacer que la PMO pierda relevancia o, peor, que sus servicios sean contraproducentes para el nuevo modelo de negocio. La revisión periódica con el patrocinio ejecutivo garantiza la alineación estratégica continua.",
        tags: { format: "opción_única", domain: "elementos_estratégicos_de_la_pmo", method: "predictivo", cognitive: "aplicación" }
    },

    // ─────────────────────────────────────────────────────────────────────────
    // DOMINIO III: DISEÑO Y ESTRUCTURA DE LA PMO (18 preguntas)
    // ─────────────────────────────────────────────────────────────────────────

    // --- Tarea 1: Gestión de Clientes de la PMO ---
    {
        question: "La PMO de una empresa de retail identifica los siguientes grupos como sus clientes: gerentes de proyecto, directores de área, el comité ejecutivo y equipos de proyecto. ¿Cuál es el paso siguiente según el ECO PMI-PMOCP?",
        options: [
            "Diseñar los mismos servicios para todos los grupos ya que todos son clientes de la PMO.",
            "Desarrollar perfiles de clientes para cada grupo que permitan entender sus diferentes necesidades y expectativas.",
            "Priorizar al comité ejecutivo como el cliente principal y diseñar los servicios según sus expectativas.",
            "Solicitar a cada grupo que defina los servicios que necesita de la PMO."
        ],
        answer: ["Desarrollar perfiles de clientes para cada grupo que permitan entender sus diferentes necesidades y expectativas."],
        rationale: "La Tarea 1 del Dominio III establece desarrollar perfiles de clientes para comprender diferentes necesidades y expectativas. Los distintos grupos tienen necesidades radicalmente diferentes: un gerente de proyecto necesita soporte metodológico; el comité ejecutivo necesita visibilidad del portafolio; los equipos de proyecto necesitan herramientas y plantillas. Sin perfiles de clientes, la PMO no puede diseñar servicios pertinentes.",
        tags: { format: "opción_única", domain: "diseño_y_estructura_de_la_pmo", method: "predictivo", cognitive: "aplicación" }
    },
    {
        question: "La PMO quiere promover sus servicios a potenciales clientes internos que aún no la utilizan. ¿Cuál es la estrategia MÁS adecuada según el ECO PMI-PMOCP?",
        options: [
            "Enviar correos masivos describiendo todos los servicios disponibles de la PMO.",
            "Desarrollar una estrategia para promover los servicios de la PMO a clientes potenciales, adaptando el mensaje a las necesidades específicas de cada grupo.",
            "Esperar a que los clientes potenciales acudan a la PMO cuando tengan necesidades.",
            "Hacer obligatorio el uso de los servicios de la PMO para todos los proyectos de la organización."
        ],
        answer: ["Desarrollar una estrategia para promover los servicios de la PMO a clientes potenciales, adaptando el mensaje a las necesidades específicas de cada grupo."],
        rationale: "La Tarea 1 del Dominio III establece desarrollar una estrategia para promover los servicios de la PMO a clientes potenciales. La PMO debe ser proactiva en la atracción de nuevos clientes internos. Una comunicación masiva genérica es menos efectiva que mensajes adaptados a las necesidades específicas de cada grupo potencial de clientes.",
        tags: { format: "opción_única", domain: "diseño_y_estructura_de_la_pmo", method: "predictivo", cognitive: "aplicación" }
    },

    // --- Tarea 2: Orquestar Soluciones para las Necesidades del Cliente ---
    {
        question: "La PMO recibe múltiples solicitudes de servicios de distintos clientes internos simultáneamente: el área de TI solicita soporte en gestión de riesgos, el área comercial pide plantillas de planificación y el comité ejecutivo solicita un dashboard de portafolio. Los recursos de la PMO son limitados. ¿Cuál es el enfoque correcto?",
        options: [
            "Atender las solicitudes en orden de llegada para ser equitativos con todos los clientes.",
            "Priorizar las solicitudes del comité ejecutivo por su nivel jerárquico.",
            "Aplicar un marco de priorización basado en la importancia estratégica de cada necesidad para la organización.",
            "Rechazar todas las solicitudes hasta tener más recursos disponibles en la PMO."
        ],
        answer: ["Aplicar un marco de priorización basado en la importancia estratégica de cada necesidad para la organización."],
        rationale: "La Tarea 2 del Dominio III establece crear un marco de priorización para abordar las necesidades de los clientes de la PMO basado en la importancia estratégica. La prioridad no debe determinarse por jerarquía del solicitante ni por orden de llegada, sino por el alineamiento de cada necesidad con los objetivos estratégicos de la organización y el impacto potencial de la intervención.",
        tags: { format: "opción_única", domain: "diseño_y_estructura_de_la_pmo", method: "predictivo", cognitive: "análisis" }
    },
    {
        question: "La PMO implementa encuestas trimestrales a sus clientes internos para evaluar sus necesidades. Los resultados muestran que los gerentes de proyecto están satisfechos con las plantillas actuales pero solicitan más soporte en gestión de interesados. ¿Cuál es el siguiente paso correcto?",
        options: [
            "Ignorar la solicitud ya que los gerentes están satisfechos con los servicios actuales.",
            "Desarrollar un ciclo de retroalimentación para mejorar continuamente los servicios de la PMO basándose en el input de los clientes, incorporando el soporte en gestión de interesados como nuevo servicio.",
            "Esperar a la próxima encuesta trimestral para confirmar que la necesidad persiste.",
            "Contratar a un consultor externo en gestión de interesados para que cubra esta necesidad."
        ],
        answer: ["Desarrollar un ciclo de retroalimentación para mejorar continuamente los servicios de la PMO basándose en el input de los clientes, incorporando el soporte en gestión de interesados como nuevo servicio."],
        rationale: "La Tarea 2 del Dominio III establece desarrollar un ciclo de retroalimentación para mejorar continuamente los servicios de la PMO basándose en el input de los clientes. El propósito de las encuestas es identificar necesidades y actuar sobre ellas. Ignorar o posponer las necesidades identificadas invalida el mecanismo de retroalimentación y erosiona la confianza de los clientes en la PMO.",
        tags: { format: "opción_única", domain: "diseño_y_estructura_de_la_pmo", method: "predictivo", cognitive: "aplicación" }
    },

    // --- Tarea 3: Articular y Desarrollar la Propuesta de Valor ---
    {
        question: "La PMO lleva 18 meses operando y ha mejorado la tasa de éxito de proyectos del 52% al 71%. Sin embargo, el comité directivo cuestiona si este resultado se debe a la PMO o a otros factores. ¿Qué debería tener implementado la PMO para responder esta pregunta?",
        options: [
            "Un sistema para medir y cuantificar la contribución de la PMO al éxito organizacional, establecido desde el inicio de sus operaciones.",
            "Un informe de actividades detallando todas las acciones realizadas por la PMO en los últimos 18 meses.",
            "Testimonios de gerentes de proyecto que atribuyen el éxito a la PMO.",
            "Una comparación con PMOs de otras organizaciones del sector."
        ],
        answer: ["Un sistema para medir y cuantificar la contribución de la PMO al éxito organizacional, establecido desde el inicio de sus operaciones."],
        rationale: "La Tarea 3 del Dominio III establece implementar un sistema para medir y cuantificar la contribución de la PMO al éxito organizacional. Este sistema debe estar operando desde el inicio, no implementarse cuando alguien cuestiona el valor. Sin medición desde el inicio, es imposible aislar la contribución de la PMO de otros factores. Los testimonios son útiles pero no suficientes para demostraciones cuantitativas.",
        tags: { format: "opción_única", domain: "diseño_y_estructura_de_la_pmo", method: "predictivo", cognitive: "análisis" }
    },
    {
        question: "La PMO quiere demostrar su valor a diferentes grupos de interesados. ¿Cuál es la estrategia MÁS efectiva según el ECO PMI-PMOCP?",
        options: [
            "Usar el mismo mensaje de valor para todos los grupos para garantizar coherencia.",
            "Desarrollar mensajes específicos para diferentes grupos de clientes que comuniquen el valor de la PMO en términos relevantes para cada audiencia.",
            "Publicar un informe anual de resultados disponible para todos los interesados.",
            "Limitar la comunicación de valor al comité ejecutivo que toma decisiones sobre el presupuesto de la PMO."
        ],
        answer: ["Desarrollar mensajes específicos para diferentes grupos de clientes que comuniquen el valor de la PMO en términos relevantes para cada audiencia."],
        rationale: "La Tarea 3 del Dominio III establece desarrollar mensajes específicos para diferentes grupos de clientes para comunicar el valor de la PMO. El valor se percibe de forma diferente: para los gerentes de proyecto el valor puede ser soporte metodológico; para el CFO puede ser reducción de sobrecostos; para el CEO puede ser alineación estratégica del portafolio. Mensajes genéricos no resuenan con ninguna audiencia específica.",
        tags: { format: "opción_única", domain: "diseño_y_estructura_de_la_pmo", method: "predictivo", cognitive: "aplicación" }
    },
    {
        question: "¿Cuáles de los siguientes son elementos de la propuesta de valor de una PMO según el ECO PMI-PMOCP? (Selecciona todos los que apliquen)",
        options: [
            "Articular claramente los beneficios y el valor que la PMO aporta a la organización.",
            "Crear casos de estudio e historias de éxito que demuestren el impacto de la PMO.",
            "Establecer un proceso de mejora continua para mejorar la entrega de valor de la PMO.",
            "Mantener la propuesta de valor estática para garantizar consistencia en la comunicación.",
            "Implementar un sistema para medir y cuantificar la contribución de la PMO."
        ],
        answer: [
            "Articular claramente los beneficios y el valor que la PMO aporta a la organización.",
            "Crear casos de estudio e historias de éxito que demuestren el impacto de la PMO.",
            "Establecer un proceso de mejora continua para mejorar la entrega de valor de la PMO.",
            "Implementar un sistema para medir y cuantificar la contribución de la PMO."
        ],
        rationale: "La Tarea 3 del Dominio III incluye articular el valor, crear casos de estudio, medir y cuantificar la contribución, y revisar periódicamente la propuesta de valor. Mantenerla estática es incorrecto: la Tarea 3 establece explícitamente revisar y actualizar la propuesta de valor para alinearla con las necesidades cambiantes de la organización.",
        tags: { format: "opción_múltiple", domain: "diseño_y_estructura_de_la_pmo", method: "predictivo", cognitive: "conocimiento" }
    },

    // --- Tarea 4: Diseño e Implementación de Servicios de la PMO ---
    {
        question: "La PMO diseña su catálogo de servicios. ¿Cuál es el beneficio principal de crear un catálogo de servicios que detalle las ofertas de la PMO y sus beneficios?",
        options: [
            "Permite a la PMO cobrar internamente por sus servicios mediante un modelo de chargeback.",
            "Establece expectativas claras con los clientes sobre qué puede y qué no puede hacer la PMO, y facilita la promoción de sus servicios a clientes potenciales.",
            "Reemplaza la necesidad de reuniones de retroalimentación con los clientes.",
            "Garantiza que todos los clientes usen todos los servicios disponibles."
        ],
        answer: ["Establece expectativas claras con los clientes sobre qué puede y qué no puede hacer la PMO, y facilita la promoción de sus servicios a clientes potenciales."],
        rationale: "La Tarea 4 del Dominio III establece desarrollar un catálogo de servicios que detalle las ofertas de la PMO y sus beneficios. El catálogo cumple dos funciones: internamente, alinea las expectativas de los clientes actuales; externamente, permite a la PMO promover sus servicios a clientes potenciales que desconocen lo que la PMO puede ofrecer.",
        tags: { format: "opción_única", domain: "diseño_y_estructura_de_la_pmo", method: "predictivo", cognitive: "conocimiento" }
    },
    {
        question: "La PMO implementa un marco de Acuerdos de Nivel de Servicio (SLA) para sus ofertas. ¿Cuál es el propósito principal de este marco?",
        options: [
            "Crear un mecanismo legal para penalizar a los clientes que no utilicen los servicios de la PMO.",
            "Definir los compromisos de calidad y tiempos de respuesta de la PMO para cada servicio, generando expectativas claras y métricas de desempeño medibles.",
            "Limitar el alcance de los servicios de la PMO para controlar la carga de trabajo del equipo.",
            "Establecer el presupuesto máximo que la PMO puede gastar en cada tipo de servicio."
        ],
        answer: ["Definir los compromisos de calidad y tiempos de respuesta de la PMO para cada servicio, generando expectativas claras y métricas de desempeño medibles."],
        rationale: "La Tarea 4 del Dominio III establece implementar un marco de SLA para las ofertas de la PMO. Los SLA definen los parámetros de calidad y entrega que la PMO se compromete a cumplir para cada servicio. Esto crea accountability bilateral: los clientes saben qué esperar y la PMO tiene métricas claras para evaluar su desempeño.",
        tags: { format: "opción_única", domain: "diseño_y_estructura_de_la_pmo", method: "predictivo", cognitive: "conocimiento" }
    },
    {
        question: "Ordena los pasos para diseñar e implementar los servicios de una PMO según el ECO PMI-PMOCP:",
        options: [
            "Crear procesos estandarizados para cada servicio de la PMO",
            "Realizar una evaluación de necesidades para identificar los servicios requeridos",
            "Implementar un mecanismo de mejora continua basado en retroalimentación y desempeño",
            "Crear ofertas de servicio personalizadas para diferentes grupos de clientes",
            "Desarrollar el catálogo de servicios e implementar el marco de SLA"
        ],
        answer: [
            "Realizar una evaluación de necesidades para identificar los servicios requeridos",
            "Crear ofertas de servicio personalizadas para diferentes grupos de clientes",
            "Crear procesos estandarizados para cada servicio de la PMO",
            "Desarrollar el catálogo de servicios e implementar el marco de SLA",
            "Implementar un mecanismo de mejora continua basado en retroalimentación y desempeño"
        ],
        rationale: "La Tarea 4 del Dominio III sigue esta lógica: primero identificar qué necesitan los clientes (evaluación), luego diseñar los servicios personalizados, estandarizar los procesos para garantizar consistencia, documentarlos en el catálogo con SLA, y finalmente establecer el mecanismo de mejora continua para evolucionar los servicios en el tiempo.",
        tags: { format: "ordenamiento", domain: "diseño_y_estructura_de_la_pmo", method: "predictivo", cognitive: "conocimiento" }
    },
    {
        question: "La PMO de una empresa de servicios tecnológicos trabaja con equipos que usan tanto metodologías predictivas como Scrum. ¿Cómo debe diseñar sus servicios para ser relevante para ambos tipos de equipos?",
        options: [
            "Diseñar servicios exclusivamente para proyectos predictivos y requerir que los equipos ágiles se adapten a ellos.",
            "Crear ofertas de servicio personalizadas para cada grupo de clientes, adaptando las herramientas, plantillas y soporte a las necesidades específicas de equipos predictivos y ágiles.",
            "Unificar todos los proyectos en una sola metodología para simplificar el diseño de servicios.",
            "Limitar los servicios de la PMO a las funciones que son comunes a ambas metodologías."
        ],
        answer: ["Crear ofertas de servicio personalizadas para cada grupo de clientes, adaptando las herramientas, plantillas y soporte a las necesidades específicas de equipos predictivos y ágiles."],
        rationale: "La Tarea 4 del Dominio III establece crear ofertas de servicio personalizadas para satisfacer las diversas necesidades de diferentes grupos de clientes. En un entorno híbrido, los equipos predictivos pueden necesitar plantillas de EDT y cronogramas Gantt, mientras que los equipos ágiles pueden necesitar soporte en retrospectivas y gestión del backlog. La PMO efectiva sirve a ambos en su propio lenguaje.",
        tags: { format: "opción_única", domain: "diseño_y_estructura_de_la_pmo", method: "híbrido", cognitive: "aplicación" }
    },
    {
        question: "La PMO implementa un nuevo servicio de revisión de riesgos de proyectos. Tras tres meses, los gerentes de proyecto reportan que el proceso es demasiado burocrático y tarda una semana cuando necesitan retroalimentación en 24 horas. ¿Cuál es la acción correcta?",
        options: [
            "Mantener el proceso estándar ya que garantiza la calidad del servicio.",
            "Eliminar el servicio de revisión de riesgos ya que no cumple las expectativas de los clientes.",
            "Activar el mecanismo de mejora continua: analizar el feedback, identificar los pasos innecesarios del proceso y rediseñar el servicio para que cumpla los tiempos requeridos sin sacrificar calidad.",
            "Modificar el SLA para extender el tiempo de respuesta a una semana y alinearlo con el proceso actual."
        ],
        answer: ["Activar el mecanismo de mejora continua: analizar el feedback, identificar los pasos innecesarios del proceso y rediseñar el servicio para que cumpla los tiempos requeridos sin sacrificar calidad."],
        rationale: "La Tarea 4 del Dominio III establece establecer un mecanismo de mejora continua del servicio basado en la retroalimentación y el desempeño. El feedback de los gerentes de proyecto es exactamente la información que debe alimentar este mecanismo. Modificar el SLA para adaptarse a un proceso ineficiente en lugar de mejorar el proceso es incorrecto: el SLA debe reflejar el valor para el cliente, no las limitaciones internas.",
        tags: { format: "opción_única", domain: "diseño_y_estructura_de_la_pmo", method: "ágil", cognitive: "aplicación" }
    },

    // ─────────────────────────────────────────────────────────────────────────
    // DOMINIO IV: OPERACIÓN Y DESEMPEÑO DE LA PMO (15 preguntas)
    // ─────────────────────────────────────────────────────────────────────────

    // --- Tarea 1: Incorporación de Servicios de la PMO ---
    {
        question: "La PMO lanza un nuevo servicio de gestión de portafolio. El primer cliente es la dirección de operaciones, que nunca ha trabajado con la PMO. ¿Cuál es el primer elemento del proceso de incorporación según el ECO PMI-PMOCP?",
        options: [
            "Realizar inmediatamente la primera revisión del portafolio de operaciones.",
            "Desarrollar e implementar un proceso de incorporación estructurado para nuevos clientes del servicio, incluyendo documentación, capacitación y soporte inicial.",
            "Enviar el catálogo de servicios de la PMO al director de operaciones.",
            "Asignar un miembro del equipo de la PMO como responsable exclusivo de este cliente."
        ],
        answer: ["Desarrollar e implementar un proceso de incorporación estructurado para nuevos clientes del servicio, incluyendo documentación, capacitación y soporte inicial."],
        rationale: "La Tarea 1 del Dominio IV establece desarrollar un proceso de incorporación estructurado para nuevos clientes de servicios de la PMO. El onboarding efectivo garantiza que el cliente entienda cómo funciona el servicio, qué se espera de él y qué soporte tiene disponible. Sin este proceso, los primeros meses de servicio son caóticos y la experiencia del cliente sufre.",
        tags: { format: "opción_única", domain: "operación_y_desempeño_de_la_pmo", method: "predictivo", cognitive: "aplicación" }
    },
    {
        question: "¿Cuáles de los siguientes son componentes de un proceso de incorporación efectivo para nuevos clientes de la PMO según el ECO PMI-PMOCP? (Selecciona todos los que apliquen)",
        options: [
            "Documentación y guías de usuario para los servicios de la PMO.",
            "Un programa de capacitación para educar a los clientes sobre los servicios y procesos de la PMO.",
            "Un acuerdo formal que obligue al cliente a usar todos los servicios de la PMO.",
            "Un sistema de soporte para asistir a los usuarios durante la fase de incorporación.",
            "Un mecanismo de retroalimentación para recopilar información durante el proceso de incorporación."
        ],
        answer: [
            "Documentación y guías de usuario para los servicios de la PMO.",
            "Un programa de capacitación para educar a los clientes sobre los servicios y procesos de la PMO.",
            "Un sistema de soporte para asistir a los usuarios durante la fase de incorporación.",
            "Un mecanismo de retroalimentación para recopilar información durante el proceso de incorporación."
        ],
        rationale: "La Tarea 1 del Dominio IV incluye: documentación/guías, programa de capacitación, sistema de soporte y mecanismo de retroalimentación. Obligar al cliente a usar todos los servicios no es un componente de onboarding: la PMO debe ganarse la adopción mediante valor demostrado, no mediante obligación.",
        tags: { format: "opción_múltiple", domain: "operación_y_desempeño_de_la_pmo", method: "predictivo", cognitive: "conocimiento" }
    },

    // --- Tarea 2: Gestión de Servicios de la PMO ---
    {
        question: "La PMO va a implementar un servicio de gestión de programas de alto impacto que involucrará a múltiples áreas de la organización. ¿Cuál es el enfoque de implementación MÁS adecuado?",
        options: [
            "Implementar el servicio completo simultáneamente en todos los programas para maximizar el impacto.",
            "Implementar un enfoque por fases para servicios complejos o de alto impacto, comenzando con un piloto y escalando progresivamente.",
            "Esperar a que los clientes soliciten el servicio antes de implementarlo.",
            "Implementar el servicio solo en los programas con mayor presupuesto."
        ],
        answer: ["Implementar un enfoque por fases para servicios complejos o de alto impacto, comenzando con un piloto y escalando progresivamente."],
        rationale: "La Tarea 2 del Dominio IV establece implementar un enfoque por fases para servicios complejos o de alto impacto. Un lanzamiento simultáneo en todos los programas de alto impacto expone a la PMO a múltiples puntos de falla simultáneos. El enfoque por fases permite aprender, ajustar y mejorar el servicio antes de escalar, reduciendo el riesgo.",
        tags: { format: "opción_única", domain: "operación_y_desempeño_de_la_pmo", method: "predictivo", cognitive: "aplicación" }
    },
    {
        question: "La PMO tiene un proceso de revisión de riesgos de proyectos, pero diferentes miembros del equipo lo ejecutan de manera diferente, generando inconsistencia en la calidad del servicio. ¿Cuál es la solución correcta según el ECO PMI-PMOCP?",
        options: [
            "Asignar un único miembro del equipo para ejecutar todas las revisiones de riesgos.",
            "Desarrollar medidas de control de calidad y procesos estandarizados para mantener la consistencia en la prestación del servicio.",
            "Reducir el número de revisiones de riesgos para minimizar la variabilidad.",
            "Permitir que cada miembro del equipo adapte el proceso según su criterio profesional."
        ],
        answer: ["Desarrollar medidas de control de calidad y procesos estandarizados para mantener la consistencia en la prestación del servicio."],
        rationale: "La Tarea 2 del Dominio IV establece establecer procesos y flujos de trabajo de prestación de servicios claros y desarrollar medidas de control de calidad para mantener la consistencia. La inconsistencia en la ejecución del servicio daña la credibilidad de la PMO. Los procesos estandarizados garantizan que la calidad del servicio no dependa de quién lo ejecute.",
        tags: { format: "opción_única", domain: "operación_y_desempeño_de_la_pmo", method: "predictivo", cognitive: "aplicación" }
    },
    {
        question: "La PMO reporta a sus clientes métricas mensuales sobre el desempeño de sus servicios. Un cliente reporta que el tiempo de respuesta para la revisión de documentos pasó de 2 a 5 días. ¿Cuál es la acción correcta?",
        options: [
            "Actualizar el SLA para reflejar el nuevo tiempo de respuesta de 5 días.",
            "Investigar la causa del deterioro usando las métricas de desempeño del servicio, implementar mejoras y comunicar el plan de corrección al cliente.",
            "Informar al cliente que los tiempos de respuesta dependen de la carga de trabajo del equipo de la PMO.",
            "Contratar personal adicional para reducir el tiempo de respuesta."
        ],
        answer: ["Investigar la causa del deterioro usando las métricas de desempeño del servicio, implementar mejoras y comunicar el plan de corrección al cliente."],
        rationale: "La Tarea 2 del Dominio IV establece implementar métricas de desempeño para rastrear y optimizar la eficiencia de la prestación de servicios, y establecer procedimientos de escalación para gestionar problemas de prestación de servicios. El deterioro del servicio es una desviación que requiere análisis de causa raíz y acción correctiva, no ajuste del SLA para ocultar el problema.",
        tags: { format: "opción_única", domain: "operación_y_desempeño_de_la_pmo", method: "predictivo", cognitive: "aplicación" }
    },

    // --- Tarea 3: Gestión de Recursos de la PMO ---
    {
        question: "La PMO recibe una nueva solicitud de servicio que requiere competencias en gestión ágil de proyectos. Al revisar el equipo actual, ningún miembro tiene esta competencia. ¿Cómo debe gestionar la PMO esta situación?",
        options: [
            "Rechazar la solicitud ya que la PMO no tiene la competencia requerida.",
            "Usar la matriz de habilidades para confirmar la brecha e implementar un proceso de gestión de recursos externos o desarrollar la competencia internamente según la urgencia y el plan de capacidades.",
            "Asignar al miembro del equipo con mayor experiencia general para atender la solicitud.",
            "Subcontratar toda la gestión ágil a un proveedor externo de forma permanente."
        ],
        answer: ["Usar la matriz de habilidades para confirmar la brecha e implementar un proceso de gestión de recursos externos o desarrollar la competencia internamente según la urgencia y el plan de capacidades."],
        rationale: "La Tarea 3 del Dominio IV establece implementar una matriz de habilidades para hacer coincidir los recursos de la PMO con las competencias requeridas, y establecer un proceso para gestionar recursos externos y contratistas. La matriz de habilidades diagnostica la brecha; la decisión entre desarrollar internamente o gestionar un recurso externo depende de la urgencia y la estrategia de capacidades de la PMO.",
        tags: { format: "opción_única", domain: "operación_y_desempeño_de_la_pmo", method: "híbrido", cognitive: "análisis" }
    },
    {
        question: "Ordena los pasos del proceso de gestión de recursos de la PMO según el ECO PMI-PMOCP:",
        options: [
            "Establecer un proceso de planificación de capacidad para optimizar la utilización de recursos",
            "Desarrollar un plan de gestión de recursos alineado con las demandas de servicio de la PMO",
            "Gestionar recursos externos y contratistas cuando sea necesario",
            "Implementar una matriz de habilidades para hacer coincidir recursos con competencias requeridas",
            "Monitorear y ajustar la asignación de recursos según la demanda de servicios"
        ],
        answer: [
            "Desarrollar un plan de gestión de recursos alineado con las demandas de servicio de la PMO",
            "Implementar una matriz de habilidades para hacer coincidir recursos con competencias requeridas",
            "Establecer un proceso de planificación de capacidad para optimizar la utilización de recursos",
            "Gestionar recursos externos y contratistas cuando sea necesario",
            "Monitorear y ajustar la asignación de recursos según la demanda de servicios"
        ],
        rationale: "La Tarea 3 del Dominio IV sigue esta lógica: primero el plan de gestión de recursos que define el marco, luego la matriz de habilidades que mapea las competencias disponibles, la planificación de capacidad que optimiza la utilización, la gestión de recursos externos para cubrir brechas y finalmente el monitoreo continuo para ajustar según la demanda real.",
        tags: { format: "ordenamiento", domain: "operación_y_desempeño_de_la_pmo", method: "predictivo", cognitive: "conocimiento" }
    },
    {
        question: "La PMO está implementando nuevos servicios de soporte a proyectos ágiles. ¿Cuál es el enfoque MÁS adecuado para garantizar que los recursos de la PMO puedan soportar este nuevo tipo de proyectos?",
        options: [
            "Esperar a que los proyectos ágiles generen problemas para identificar qué competencias faltan.",
            "Actualizar la matriz de habilidades para incluir competencias ágiles, identificar las brechas y desarrollar planes de capacitación o gestionar recursos externos con estas competencias.",
            "Contratar un equipo separado de consultores ágiles que no pertenezca a la PMO.",
            "Requerir que todos los miembros del equipo de la PMO obtengan la certificación CSM antes de soportar proyectos ágiles."
        ],
        answer: ["Actualizar la matriz de habilidades para incluir competencias ágiles, identificar las brechas y desarrollar planes de capacitación o gestionar recursos externos con estas competencias."],
        rationale: "La Tarea 3 del Dominio IV establece implementar una matriz de habilidades para hacer coincidir los recursos de la PMO con las competencias requeridas. Para soportar nuevos tipos de proyectos, la PMO debe primero actualizar su mapa de competencias, identificar brechas específicas y cerrarlas de manera planificada. Exigir una certificación específica sin evaluar las brechas reales puede ser excesivo o insuficiente.",
        tags: { format: "opción_única", domain: "operación_y_desempeño_de_la_pmo", method: "ágil", cognitive: "aplicación" }
    },

    // ─────────────────────────────────────────────────────────────────────────
    // DOMINIO V: MEJORA Y EFECTIVIDAD DE LA PMO (18 preguntas)
    // ─────────────────────────────────────────────────────────────────────────

    // --- Tarea 1: Optimizar el Rendimiento del Servicio ---
    {
        question: "La PMO quiere implementar un sistema de monitoreo en tiempo real del rendimiento de sus servicios. ¿Cuál es la herramienta MÁS adecuada para este propósito según el ECO PMI-PMOCP?",
        options: [
            "Un informe mensual enviado por correo a todos los interesados.",
            "Un dashboard en tiempo real para monitorear el rendimiento del servicio.",
            "Reuniones semanales de revisión de desempeño con el equipo de la PMO.",
            "Un cuaderno de registro manual actualizado por los miembros del equipo."
        ],
        answer: ["Un dashboard en tiempo real para monitorear el rendimiento del servicio."],
        rationale: "La Tarea 1 del Dominio V establece crear un dashboard para el monitoreo en tiempo real del rendimiento del servicio. Un dashboard en tiempo real permite detectar desviaciones inmediatamente y tomar acciones correctivas proactivas. Los informes mensuales o las reuniones semanales son demasiado lentos para responder a problemas operativos que pueden afectar a los clientes de la PMO.",
        tags: { format: "opción_única", domain: "mejora_y_efectividad_de_la_pmo", method: "predictivo", cognitive: "conocimiento" }
    },
    {
        question: "La PMO detecta mediante sus KPI que el tiempo promedio de cierre de proyectos se ha incrementado de 15 a 28 días en el último trimestre. ¿Cuál es el proceso correcto para abordar esta brecha de desempeño?",
        options: [
            "Actualizar el KPI para reflejar el nuevo tiempo promedio como estándar.",
            "Desarrollar un proceso para abordar las brechas de desempeño: analizar la causa raíz del incremento, diseñar e implementar mejoras, y verificar su efectividad.",
            "Notificar a los gerentes de proyecto que deben mejorar sus tiempos de cierre.",
            "Eliminar el KPI de tiempo de cierre ya que genera presión innecesaria sobre los gerentes de proyecto."
        ],
        answer: ["Desarrollar un proceso para abordar las brechas de desempeño: analizar la causa raíz del incremento, diseñar e implementar mejoras, y verificar su efectividad."],
        rationale: "La Tarea 1 del Dominio V establece desarrollar un proceso para abordar las brechas de desempeño e implementar mejoras. Los KPI tienen valor cuando las desviaciones generan acciones correctivas, no cuando se ajustan para ocultar el problema. El proceso correcto es: diagnosticar la causa raíz, diseñar la solución, implementarla y verificar que resolvió el problema.",
        tags: { format: "opción_única", domain: "mejora_y_efectividad_de_la_pmo", method: "predictivo", cognitive: "análisis" }
    },
    {
        question: "¿Cuáles de los siguientes son elementos de un sistema de optimización del rendimiento de los servicios de la PMO según el ECO PMI-PMOCP? (Selecciona todos los que apliquen)",
        options: [
            "KPI para cada servicio de la PMO.",
            "Ciclos regulares de revisión de desempeño para los servicios de la PMO.",
            "Un sistema de ranking de los gerentes de proyecto por desempeño.",
            "Un ciclo de retroalimentación para incorporar la satisfacción del cliente en las evaluaciones.",
            "Un dashboard para el monitoreo en tiempo real del rendimiento del servicio."
        ],
        answer: [
            "KPI para cada servicio de la PMO.",
            "Ciclos regulares de revisión de desempeño para los servicios de la PMO.",
            "Un ciclo de retroalimentación para incorporar la satisfacción del cliente en las evaluaciones.",
            "Un dashboard para el monitoreo en tiempo real del rendimiento del servicio."
        ],
        rationale: "La Tarea 1 del Dominio V incluye: KPI por servicio, ciclos de revisión de desempeño, dashboard en tiempo real y ciclo de retroalimentación de satisfacción del cliente. Un ranking de gerentes de proyecto es una herramienta de gestión del desempeño individual, no un elemento del sistema de optimización de los servicios de la PMO.",
        tags: { format: "opción_múltiple", domain: "mejora_y_efectividad_de_la_pmo", method: "predictivo", cognitive: "conocimiento" }
    },

    // --- Tarea 2: Evaluar y Mejorar la Madurez de los Servicios ---
    {
        question: "La PMO decide adoptar un modelo de madurez de servicios existente en lugar de desarrollar uno propio. ¿Cuál es la ventaja principal de esta decisión?",
        options: [
            "Es más económico que desarrollar un modelo propio.",
            "Permite a la PMO compararse con otras organizaciones usando un lenguaje y criterios comunes de la industria, facilitando el benchmarking.",
            "Los modelos existentes son siempre más completos que los modelos personalizados.",
            "Elimina la necesidad de realizar evaluaciones periódicas de madurez."
        ],
        answer: ["Permite a la PMO compararse con otras organizaciones usando un lenguaje y criterios comunes de la industria, facilitando el benchmarking."],
        rationale: "La Tarea 2 del Dominio V establece desarrollar un modelo de madurez de servicios de la PMO o adoptar un marco existente. La ventaja de los marcos existentes es la estandarización: permiten el benchmarking con otras PMOs y organizaciones usando criterios comunes. Un modelo puramente interno dificulta la comparación externa. El costo puede ser similar o mayor si el modelo externo requiere licencia.",
        tags: { format: "opción_única", domain: "mejora_y_efectividad_de_la_pmo", method: "predictivo", cognitive: "análisis" }
    },
    {
        question: "La PMO realiza una evaluación de madurez de sus servicios y obtiene los resultados. ¿Cuál es el siguiente paso según el ECO PMI-PMOCP?",
        options: [
            "Publicar los resultados de la evaluación para todos los interesados.",
            "Crear una hoja de ruta para avanzar en la madurez de los servicios de la PMO basándose en los resultados de la evaluación.",
            "Esperar al próximo ciclo de evaluación para definir las acciones de mejora.",
            "Contratar consultores externos para implementar las mejoras identificadas."
        ],
        answer: ["Crear una hoja de ruta para avanzar en la madurez de los servicios de la PMO basándose en los resultados de la evaluación."],
        rationale: "La Tarea 2 del Dominio V establece crear una hoja de ruta para avanzar en la madurez de los servicios de la PMO. La evaluación sin una hoja de ruta de mejora es un diagnóstico sin tratamiento. La hoja de ruta convierte los hallazgos de la evaluación en acciones concretas, priorizadas y con plazos definidos.",
        tags: { format: "opción_única", domain: "mejora_y_efectividad_de_la_pmo", method: "predictivo", cognitive: "aplicación" }
    },

    // --- Tarea 3: Evaluar y Mejorar las Competencias del Equipo ---
    {
        question: "La PMO elabora planes de desarrollo individual para cada miembro de su equipo. ¿Cuál es el primer paso necesario para que estos planes sean pertinentes?",
        options: [
            "Definir el presupuesto de capacitación disponible para el equipo de la PMO.",
            "Realizar evaluaciones periódicas de habilidades de los miembros del equipo de la PMO para identificar las brechas de competencias.",
            "Solicitar a cada miembro que proponga su propio plan de desarrollo.",
            "Definir el marco de competencias de la PMO antes de evaluar a los individuos."
        ],
        answer: ["Definir el marco de competencias de la PMO antes de evaluar a los individuos."],
        rationale: "La Tarea 3 del Dominio V establece desarrollar primero un marco de competencias específico para los roles de la PMO y luego realizar evaluaciones periódicas de habilidades. Sin un marco de referencia claro, las evaluaciones individuales no tienen un estándar contra el cual compararse. El marco define qué se espera; la evaluación mide dónde está cada persona respecto a ese estándar.",
        tags: { format: "opción_única", domain: "mejora_y_efectividad_de_la_pmo", method: "predictivo", cognitive: "aplicación" }
    },
    {
        question: "La PMO implementa una plataforma de intercambio de conocimientos para su equipo. ¿Cuál es el propósito principal de esta iniciativa según el ECO PMI-PMOCP?",
        options: [
            "Reemplazar los programas formales de capacitación por aprendizaje autodidacta.",
            "Facilitar el aprendizaje entre pares, permitiendo que los miembros del equipo compartan experiencias, lecciones aprendidas y mejores prácticas entre sí.",
            "Crear un repositorio de documentos de proyectos para referencia futura.",
            "Demostrar a los clientes de la PMO que el equipo está continuamente aprendiendo."
        ],
        answer: ["Facilitar el aprendizaje entre pares, permitiendo que los miembros del equipo compartan experiencias, lecciones aprendidas y mejores prácticas entre sí."],
        rationale: "La Tarea 3 del Dominio V establece desarrollar una plataforma de intercambio de conocimientos para facilitar el aprendizaje entre pares. El aprendizaje entre pares complementa los programas formales: permite transferir el conocimiento tácito (experiencias, lecciones aprendidas) que no está en los manuales pero que es fundamental para el desempeño efectivo del equipo de la PMO.",
        tags: { format: "opción_única", domain: "mejora_y_efectividad_de_la_pmo", method: "predictivo", cognitive: "conocimiento" }
    },
    {
        question: "Un miembro del equipo de la PMO fue contratado hace un año con experiencia en gestión de proyectos predictivos. La organización está adoptando enfoques ágiles y este miembro muestra dificultades en soportar proyectos ágiles. ¿Cuál es el enfoque correcto?",
        options: [
            "Reemplazar al miembro del equipo por uno con experiencia ágil.",
            "Actualizar el plan de desarrollo individual de este miembro para incluir capacitación en metodologías ágiles, mentoring y certificación relevante.",
            "Asignar a este miembro exclusivamente a proyectos predictivos donde tiene experiencia.",
            "Esperar a que el miembro desarrolle las competencias ágiles por cuenta propia al interactuar con los equipos."
        ],
        answer: ["Actualizar el plan de desarrollo individual de este miembro para incluir capacitación en metodologías ágiles, mentoring y certificación relevante."],
        rationale: "La Tarea 3 del Dominio V establece crear planes de desarrollo individuales para el personal de la PMO e implementar programas de capacitación y certificación para mejorar las competencias. Los planes de desarrollo individual son el mecanismo para responder a brechas de competencias específicas de cada persona. Reemplazar o aislar al miembro no desarrolla las capacidades que la organización necesita.",
        tags: { format: "opción_única", domain: "mejora_y_efectividad_de_la_pmo", method: "híbrido", cognitive: "aplicación" }
    },

    // --- Tarea 4: Optimizar el Valor de la PMO ---
    {
        question: "La PMO desarrolla métricas para cuantificar su contribución al éxito organizacional. ¿Cuál de los siguientes indicadores representa MEJOR una métrica de valor de la PMO?",
        options: [
            "El número de horas trabajadas por el equipo de la PMO.",
            "El número de proyectos en los que la PMO ha intervenido.",
            "La reducción porcentual en sobrecostos y retrasos de proyectos atribuible a las intervenciones de la PMO.",
            "El número de plantillas y metodologías desarrolladas por la PMO."
        ],
        answer: ["La reducción porcentual en sobrecostos y retrasos de proyectos atribuible a las intervenciones de la PMO."],
        rationale: "La Tarea 4 del Dominio V establece desarrollar métricas para cuantificar la contribución de la PMO al éxito organizacional. Las horas trabajadas, el número de proyectos y las plantillas desarrolladas son métricas de actividad, no de valor. El valor se mide por el impacto real en los resultados organizacionales: reducción de sobrecostos, mejora en tasas de éxito de proyectos, alineación estratégica del portafolio.",
        tags: { format: "opción_única", domain: "mejora_y_efectividad_de_la_pmo", method: "predictivo", cognitive: "análisis" }
    },
    {
        question: "La PMO quiere demostrar al comité directivo que sus intervenciones generan valor tangible. ¿Qué herramienta de comunicación es MÁS efectiva para este propósito según el ECO PMI-PMOCP?",
        options: [
            "Un informe técnico con todas las metodologías implementadas por la PMO.",
            "Casos de estudio que demuestren las contribuciones concretas de la PMO a la organización con métricas de impacto.",
            "Un listado de certificaciones obtenidas por el equipo de la PMO.",
            "Una presentación con el organigrama y las funciones del equipo de la PMO."
        ],
        answer: ["Casos de estudio que demuestren las contribuciones concretas de la PMO a la organización con métricas de impacto."],
        rationale: "La Tarea 4 del Dominio V establece crear casos de estudio que demuestren las contribuciones de la PMO a la organización. Los casos de estudio son narrativas concretas que combinan contexto, intervención de la PMO y resultados medibles. Para el comité directivo, este formato es más persuasivo que informes técnicos o listas de actividades porque conecta el trabajo de la PMO con resultados de negocio.",
        tags: { format: "opción_única", domain: "mejora_y_efectividad_de_la_pmo", method: "predictivo", cognitive: "aplicación" }
    },
    {
        question: "Ordena los pasos para optimizar el valor de la PMO según el ECO PMI-PMOCP:",
        options: [
            "Desarrollar una estrategia de comunicación para articular el valor de la PMO a los clientes clave",
            "Desarrollar métricas para cuantificar la contribución de la PMO al éxito organizacional",
            "Implementar un proceso de benchmarking para comparar el valor de la PMO con estándares de la industria",
            "Implementar un sistema de seguimiento de valor para monitorear el impacto a lo largo del tiempo",
            "Realizar encuestas periódicas a los clientes para evaluar el valor percibido de la PMO"
        ],
        answer: [
            "Desarrollar métricas para cuantificar la contribución de la PMO al éxito organizacional",
            "Implementar un sistema de seguimiento de valor para monitorear el impacto a lo largo del tiempo",
            "Realizar encuestas periódicas a los clientes para evaluar el valor percibido de la PMO",
            "Desarrollar una estrategia de comunicación para articular el valor de la PMO a los clientes clave",
            "Implementar un proceso de benchmarking para comparar el valor de la PMO con estándares de la industria"
        ],
        rationale: "La Tarea 4 del Dominio V sigue esta lógica: primero definir las métricas (sin ellas no hay medición), luego implementar el sistema de seguimiento para monitorear en el tiempo, evaluar el valor percibido por los clientes, comunicar ese valor a los interesados clave y finalmente hacer benchmarking para contextualizar el desempeño contra la industria.",
        tags: { format: "ordenamiento", domain: "mejora_y_efectividad_de_la_pmo", method: "predictivo", cognitive: "conocimiento" }
    },

    // ─────────────────────────────────────────────────────────────────────────
    // DOMINIO VI: PERSONAS (15 preguntas)
    // ─────────────────────────────────────────────────────────────────────────

    // --- Tarea 1: Habilitar una Mentalidad Basada en Valores ---
    {
        question: "El director de la PMO recibe datos que muestran que los proyectos ágiles tienen una tasa de éxito del 78% mientras que los predictivos tienen 61%. El comité directivo quiere entender qué factores explican esta diferencia. ¿Qué habilidad de la Tarea 1 del Dominio VI está aplicando el director de la PMO al analizar estos datos?",
        options: [
            "Gestión de interesados.",
            "Análisis de datos para la toma de decisiones informadas.",
            "Gestión del tiempo de manera eficaz.",
            "Optimización de procesos."
        ],
        answer: ["Análisis de datos para la toma de decisiones informadas."],
        rationale: "La Tarea 1 del Dominio VI establece analizar datos para la toma de decisiones informadas como parte de la mentalidad basada en valores. El análisis de datos permite al profesional de PMO ir más allá de las percepciones y basar las decisiones en evidencia. Identificar qué factores explican la diferencia en tasas de éxito es un ejemplo de análisis de datos aplicado a la mejora organizacional.",
        tags: { format: "opción_única", domain: "personas", method: "predictivo", cognitive: "aplicación" }
    },
    {
        question: "La PMO identifica que el proceso de reporte de estado de proyectos toma en promedio 4 horas semanales por gerente de proyecto y genera informes que pocas personas leen. ¿Qué habilidad debe aplicar el profesional de PMO para resolver esta situación?",
        options: [
            "Negociar con los gerentes de proyecto para que acepten el proceso actual.",
            "Impulsar la mejora continua de procesos identificando el desperdicio en el proceso actual y rediseñándolo para generar valor real con menor esfuerzo.",
            "Gestionar los interesados que requieren los informes para eliminar el requerimiento.",
            "Demostrar adaptabilidad aceptando que el proceso es ineficiente pero inevitable."
        ],
        answer: ["Impulsar la mejora continua de procesos identificando el desperdicio en el proceso actual y rediseñándolo para generar valor real con menor esfuerzo."],
        rationale: "La Tarea 1 del Dominio VI establece impulsar la mejora continua de procesos. Un proceso que consume 4 horas semanales y genera reportes que nadie lee es un desperdicio clásico. El profesional de PMO orientado a valor debe identificar el desperdicio, entender qué información sí se necesita y rediseñar el proceso para generar ese valor con el mínimo esfuerzo posible.",
        tags: { format: "opción_única", domain: "personas", method: "predictivo", cognitive: "análisis" }
    },
    {
        question: "¿Cuáles de las siguientes son habilidades de la mentalidad basada en valores que el ECO PMI-PMOCP establece para el profesional de PMO? (Selecciona todas las que apliquen)",
        options: [
            "Analizar datos para la toma de decisiones informadas.",
            "Impulsar la innovación en los procesos y servicios de la PMO.",
            "Gestionar el presupuesto de la PMO dentro del rango autorizado.",
            "Tomar decisiones estratégicas basadas en la visión de la PMO.",
            "Resolver problemas de manera efectiva.",
            "Pensar estratégicamente para anticipar tendencias y sus implicaciones para la PMO."
        ],
        answer: [
            "Analizar datos para la toma de decisiones informadas.",
            "Impulsar la innovación en los procesos y servicios de la PMO.",
            "Tomar decisiones estratégicas basadas en la visión de la PMO.",
            "Resolver problemas de manera efectiva.",
            "Pensar estratégicamente para anticipar tendencias y sus implicaciones para la PMO."
        ],
        rationale: "La Tarea 1 del Dominio VI incluye: análisis de datos, mejora continua de procesos, decisiones estratégicas, innovación, resolución de problemas y pensamiento estratégico. Gestionar el presupuesto dentro del rango autorizado es una responsabilidad administrativa, no una habilidad de mentalidad basada en valores.",
        tags: { format: "opción_múltiple", domain: "personas", method: "predictivo", cognitive: "conocimiento" }
    },

    // --- Tarea 2: Fomentar la Orientación al Cliente ---
    {
        question: "El profesional de PMO facilita una reunión entre el área de TI y el área financiera para definir los requisitos del nuevo servicio de reporte de portafolio. Las dos áreas tienen posiciones opuestas sobre el nivel de detalle requerido. ¿Qué habilidad de la Tarea 2 del Dominio VI es más crítica en este momento?",
        options: [
            "Análisis de datos para determinar qué nivel de detalle es correcto.",
            "Gestión de conflictos para facilitar la convergencia de posiciones hacia una solución aceptable para ambas partes.",
            "Pensamiento estratégico para determinar cuál área tiene mayor prioridad.",
            "Resiliencia para manejar la tensión de la reunión."
        ],
        answer: ["Gestión de conflictos para facilitar la convergencia de posiciones hacia una solución aceptable para ambas partes."],
        rationale: "La Tarea 2 del Dominio VI establece la gestión de conflictos como una habilidad clave para fomentar la orientación al cliente y mejorar las relaciones interpersonales. Cuando dos clientes de la PMO tienen posiciones opuestas, el profesional de PMO actúa como facilitador neutral que ayuda a encontrar una solución que satisfaga las necesidades legítimas de ambas partes.",
        tags: { format: "opción_única", domain: "personas", method: "predictivo", cognitive: "aplicación" }
    },
    {
        question: "El profesional de PMO necesita obtener la aprobación del director de finanzas para ampliar el presupuesto de la PMO. El director es conocido por su resistencia a incrementos presupuestarios sin justificación cuantitativa clara. ¿Qué habilidad de la Tarea 2 del Dominio VI debe aplicar principalmente?",
        options: [
            "Demostrar adaptabilidad ajustando la solicitud a lo que el director acepte.",
            "Negociar hábilmente, presentando el caso con los argumentos y métricas de valor más relevantes para las prioridades del director.",
            "Gestionar el tiempo para presentar la solicitud en el momento más oportuno.",
            "Aplicar la inteligencia interpersonal para entender las motivaciones del director."
        ],
        answer: ["Negociar hábilmente, presentando el caso con los argumentos y métricas de valor más relevantes para las prioridades del director."],
        rationale: "La Tarea 2 del Dominio VI establece negociar hábilmente como habilidad clave. La negociación efectiva con el director de finanzas requiere presentar el caso en términos de retorno de inversión y valor financiero. Conocer las motivaciones del director (inteligencia interpersonal) es un habilitador de la negociación, pero la habilidad principal en este escenario es la negociación misma.",
        tags: { format: "opción_única", domain: "personas", method: "predictivo", cognitive: "análisis" }
    },

    // --- Tarea 3: Aumentar el Impacto y la Efectividad Personal ---
    {
        question: "La PMO está implementando una nueva metodología cuando recibe la noticia de que la organización será adquirida por una empresa más grande con su propia PMO establecida. El plan de implementación actual quedaría obsoleto. ¿Qué habilidad personal es MÁS crítica para el profesional de PMO en esta situación?",
        options: [
            "Mantener la objetividad y continuar con el plan original hasta recibir instrucciones formales.",
            "Demostrar adaptabilidad evaluando rápidamente cómo la adquisición afecta el plan y reposicionando la PMO para agregar valor en el nuevo contexto.",
            "Actuar proactivamente comunicando al comité directivo los riesgos para la PMO.",
            "Desarrollar resiliencia para manejar la incertidumbre sin cambiar el rumbo."
        ],
        answer: ["Demostrar adaptabilidad evaluando rápidamente cómo la adquisición afecta el plan y reposicionando la PMO para agregar valor en el nuevo contexto."],
        rationale: "La Tarea 3 del Dominio VI establece demostrar adaptabilidad como habilidad personal crítica. Ante cambios significativos como una adquisición, el profesional de PMO efectivo no se aferra al plan original ni espera instrucciones pasivamente. La adaptabilidad implica revaluar rápidamente el contexto y ajustar proactivamente el rumbo para seguir siendo relevante y agregar valor en la nueva realidad.",
        tags: { format: "opción_única", domain: "personas", method: "híbrido", cognitive: "análisis" }
    },
    {
        question: "El profesional de PMO recibe información preliminar que sugiere que un proyecto clave podría tener problemas de viabilidad financiera, aunque los análisis formales aún no están completos. ¿Qué habilidad personal debe aplicar según el ECO PMI-PMOCP?",
        options: [
            "Mantener la objetividad esperando a que los análisis formales estén completos antes de actuar.",
            "Actuar proactivamente comunicando las preocupaciones a los interesados clave con la información disponible, antes de que el problema se materialice.",
            "Demostrar resiliencia gestionando el estrés de la incertidumbre sin escalar el problema.",
            "Gestionar el tiempo para priorizar los análisis pendientes sobre otras actividades."
        ],
        answer: ["Actuar proactivamente comunicando las preocupaciones a los interesados clave con la información disponible, antes de que el problema se materialice."],
        rationale: "La Tarea 3 del Dominio VI establece actuar proactivamente como habilidad personal clave. Esperar a tener análisis completos antes de comunicar un problema potencial de viabilidad puede ser demasiado tarde. El profesional de PMO proactivo comunica las señales de alerta con la información disponible, permitiendo que los interesados tomen decisiones anticipadas en lugar de reactivas.",
        tags: { format: "opción_única", domain: "personas", method: "predictivo", cognitive: "aplicación" }
    },

    // --- Tarea 4: Aprovechar las Habilidades Técnicas ---
    {
        question: "La PMO identifica que el proceso de solicitud de cambios en los proyectos tiene cinco pasos con aprobaciones duplicadas que generan retrasos de hasta 10 días. ¿Qué habilidad técnica de la Tarea 4 del Dominio VI debe aplicar el profesional de PMO?",
        options: [
            "Gestionar proyectos para implementar el proceso de cambios como un proyecto independiente.",
            "Optimizar procesos eliminando las redundancias y rediseñando el flujo para reducir el tiempo de ciclo sin sacrificar el control necesario.",
            "Responder a los riesgos que genera el proceso de cambios lento.",
            "Impartir capacitación a los gerentes de proyecto sobre el proceso actual."
        ],
        answer: ["Optimizar procesos eliminando las redundancias y rediseñando el flujo para reducir el tiempo de ciclo sin sacrificar el control necesario."],
        rationale: "La Tarea 4 del Dominio VI establece optimizar procesos como habilidad técnica clave. Las aprobaciones duplicadas son un ejemplo clásico de redundancia que puede eliminarse sin reducir el control. La optimización de procesos combina el análisis de flujos de trabajo con el rediseño orientado a valor, una habilidad técnica fundamental del profesional de PMO.",
        tags: { format: "opción_única", domain: "personas", method: "predictivo", cognitive: "aplicación" }
    },
    {
        question: "¿Cuáles de las siguientes son habilidades técnicas que el ECO PMI-PMOCP establece para el profesional de PMO en la Tarea 4 del Dominio VI? (Selecciona todas las que apliquen)",
        options: [
            "Optimizar procesos.",
            "Gestionar proyectos.",
            "Negociar contratos con proveedores externos.",
            "Responder a los riesgos.",
            "Impartir capacitación.",
            "Desarrollar software de gestión de proyectos."
        ],
        answer: [
            "Optimizar procesos.",
            "Gestionar proyectos.",
            "Responder a los riesgos.",
            "Impartir capacitación."
        ],
        rationale: "La Tarea 4 del Dominio VI incluye exactamente cuatro habilidades técnicas: optimizar procesos, gestionar proyectos, responder a los riesgos e impartir capacitación. Negociar contratos y desarrollar software no están listados como habilidades técnicas del profesional de PMO en el ECO.",
        tags: { format: "opción_múltiple", domain: "personas", method: "predictivo", cognitive: "conocimiento" }
    },

    // --- Tarea 5: Moldear la Dirección Organizacional ---
    {
        question: "La PMO debe recomendar al comité directivo si la organización debe adoptar metodologías ágiles para sus proyectos de transformación digital. Para hacer esta recomendación, el profesional de PMO necesita entender las dinámicas del mercado, las tendencias tecnológicas y el impacto financiero de la decisión. ¿Qué habilidad de la Tarea 5 del Dominio VI está aplicando?",
        options: [
            "Demostrar conciencia cultural para entender las implicaciones del cambio metodológico.",
            "Aplicar la perspicacia empresarial para entender las implicaciones estratégicas y financieras de la adopción ágil en el contexto del mercado.",
            "Guiar y empoderar al equipo para que adopte la nueva metodología.",
            "Influir en la dirección estratégica mediante la presentación de los beneficios de las metodologías ágiles."
        ],
        answer: ["Aplicar la perspicacia empresarial para entender las implicaciones estratégicas y financieras de la adopción ágil en el contexto del mercado."],
        rationale: "La Tarea 5 del Dominio VI establece aplicar la perspicacia empresarial como habilidad para moldear la dirección organizacional. La perspicacia empresarial (business acumen) implica entender cómo las decisiones de gestión de proyectos impactan el negocio: dinámicas de mercado, competitividad, retorno financiero. Es la habilidad que permite al profesional de PMO hablar el lenguaje del comité directivo.",
        tags: { format: "opción_única", domain: "personas", method: "híbrido", cognitive: "análisis" }
    },
    {
        question: "La PMO lidera la implementación de una nueva metodología de gestión de proyectos en una organización con equipos distribuidos en cinco países con culturas de trabajo muy diferentes. Algunos equipos adoptan la metodología rápidamente; otros muestran resistencia. ¿Qué habilidad de la Tarea 5 del Dominio VI es más crítica para gestionar esta situación?",
        options: [
            "Influir en la dirección estratégica para obtener más recursos para la implementación.",
            "Aplicar perspicacia empresarial para calcular el ROI de la implementación por país.",
            "Demostrar conciencia cultural para adaptar el enfoque de implementación a las características culturales de cada equipo.",
            "Guiar y empoderar al equipo de la PMO para que lidere la implementación en cada país."
        ],
        answer: ["Demostrar conciencia cultural para adaptar el enfoque de implementación a las características culturales de cada equipo."],
        rationale: "La Tarea 5 del Dominio VI establece demostrar conciencia cultural como habilidad para moldear la dirección organizacional. La resistencia diferenciada por país en una implementación global es una señal de que los factores culturales están influyendo en la adopción. La conciencia cultural permite al profesional de PMO diseñar enfoques de implementación adaptados a cada contexto cultural.",
        tags: { format: "opción_única", domain: "personas", method: "ágil", cognitive: "aplicación" }
    }
    ,
    // ─── DOMINIO I: preguntas adicionales (3) ───────────────────────────────

    {
        question: "La PMO implementa un ciclo de revisión anual del marco de competencias OPM. En la última revisión se detecta que las competencias de gestión de proyectos ágiles no están incluidas aunque el 35% de los proyectos de la organización ya operan con Scrum. ¿Cuál es la acción correcta?",
        options: [
            "Esperar al siguiente ciclo de revisión para evaluar si la tendencia ágil se consolida.",
            "Actualizar el marco de competencias para incorporar las competencias ágiles relevantes, dado que reflejan una necesidad organizacional ya consolidada.",
            "Crear un marco de competencias separado para proyectos ágiles.",
            "Solicitar que los proyectos ágiles adopten metodología predictiva para alinearse con el marco existente."
        ],
        answer: ["Actualizar el marco de competencias para incorporar las competencias ágiles relevantes, dado que reflejan una necesidad organizacional ya consolidada."],
        rationale: "La Tarea 1 del Dominio I establece evaluar y actualizar periódicamente el marco de competencias para reflejar las tendencias cambiantes de la industria y los requisitos organizacionales. Con el 35% de proyectos en metodología ágil, esta ya no es una tendencia emergente sino una realidad establecida. El marco debe reflejar las necesidades actuales de la organización.",
        tags: { format: "opción_única", domain: "desarrollo_y_alineamiento_organizacional", method: "híbrido", cognitive: "aplicación" }
    },
    {
        question: "La PMO necesita integrar las competencias OPM en el sistema de gestión del desempeño de la organización. ¿Cuál es el beneficio principal de esta integración?",
        options: [
            "Permite a la PMO controlar las evaluaciones de desempeño de los gerentes de proyecto.",
            "Alinea los incentivos individuales con el desarrollo de competencias OPM, haciendo que el crecimiento en estas competencias tenga impacto en la progresión profesional y compensación.",
            "Reduce la carga administrativa del área de recursos humanos.",
            "Garantiza que todos los empleados obtengan la certificación PMP."
        ],
        answer: ["Alinea los incentivos individuales con el desarrollo de competencias OPM, haciendo que el crecimiento en estas competencias tenga impacto en la progresión profesional y compensación."],
        rationale: "La Tarea 1 del Dominio I establece integrar las competencias OPM en los sistemas de gestión del desempeño y progresión profesional. La integración en el sistema de desempeño crea el incentivo correcto: los profesionales desarrollan competencias OPM porque ello impacta su carrera, no solo por obligación. Sin esta integración, el desarrollo de competencias queda desconectado de los motivadores individuales.",
        tags: { format: "opción_única", domain: "desarrollo_y_alineamiento_organizacional", method: "predictivo", cognitive: "análisis" }
    },
    {
        question: "La PMO realizó un benchmark de madurez OPM y encontró que la organización está en el nivel 2 de 5 mientras que las empresas líderes del sector están en el nivel 4. ¿Cuál es el uso correcto de esta información?",
        options: [
            "Establecer como meta inmediata alcanzar el nivel 4 en el próximo año.",
            "Usar los resultados del benchmark para priorizar las iniciativas de mejora de madurez y definir hitos realistas en la hoja de ruta de mejora.",
            "Comunicar públicamente el nivel de madurez actual como señal de transparencia organizacional.",
            "Descalificar el benchmark ya que las empresas líderes tienen condiciones diferentes."
        ],
        answer: ["Usar los resultados del benchmark para priorizar las iniciativas de mejora de madurez y definir hitos realistas en la hoja de ruta de mejora."],
        rationale: "La Tarea 3 del Dominio I establece comparar periódicamente las prácticas de OPM con los estándares de la industria. El benchmark no es un fin en sí mismo sino un insumo para la toma de decisiones: identifica las brechas prioritarias y establece un norte de referencia. Establecer una meta irrealista de alcanzar el nivel 4 en un año ignora la complejidad del cambio organizacional.",
        tags: { format: "opción_única", domain: "desarrollo_y_alineamiento_organizacional", method: "predictivo", cognitive: "análisis" }
    },

    // ─── DOMINIO II: preguntas adicionales (5) ───────────────────────────────

    {
        question: "La PMO de una empresa manufacturera elabora su plan de comunicación para articular su valor. El equipo propone usar el mismo formato de informe mensual para el CEO, los directores de área y los gerentes de proyecto. ¿Cuál es el problema con este enfoque?",
        options: [
            "Los informes mensuales son demasiado frecuentes para el nivel directivo.",
            "Un único formato no puede satisfacer las diferentes necesidades de información de audiencias con distintos roles, intereses y niveles de detalle requeridos.",
            "El plan de comunicación no es un componente de la estrategia de la PMO.",
            "No hay problema; la consistencia en el formato garantiza credibilidad."
        ],
        answer: ["Un único formato no puede satisfacer las diferentes necesidades de información de audiencias con distintos roles, intereses y niveles de detalle requeridos."],
        rationale: "La Tarea 1 del Dominio II establece desarrollar un plan de comunicación para articular el valor de la PMO e involucrar a los interesados. El CEO necesita visión estratégica y resumen ejecutivo; los directores necesitan impacto en sus áreas; los gerentes de proyecto necesitan información operativa. Un formato único garantiza que ninguna audiencia reciba exactamente lo que necesita.",
        tags: { format: "opción_única", domain: "elementos_estratégicos_de_la_pmo", method: "predictivo", cognitive: "análisis" }
    },
    {
        question: "¿Cuáles de las siguientes son responsabilidades que deben establecerse claramente en el acta de constitución de la PMO según el ECO PMI-PMOCP? (Selecciona todas las que apliquen)",
        options: [
            "Los roles y responsabilidades de la PMO en relación con los proyectos.",
            "El alcance y la autoridad de la PMO dentro de la organización.",
            "Los salarios de los miembros del equipo de la PMO.",
            "Los roles y responsabilidades de la PMO en relación con los interesados.",
            "El propósito y los objetivos de la PMO."
        ],
        answer: [
            "Los roles y responsabilidades de la PMO en relación con los proyectos.",
            "El alcance y la autoridad de la PMO dentro de la organización.",
            "Los roles y responsabilidades de la PMO en relación con los interesados.",
            "El propósito y los objetivos de la PMO."
        ],
        rationale: "La Tarea 2 del Dominio II establece que el acta de constitución debe incluir: propósito, objetivos, funciones clave, roles y responsabilidades (tanto con proyectos como con interesados) y alcance y autoridad. Los salarios son información de recursos humanos confidencial, no parte del documento de mandato institucional.",
        tags: { format: "opción_múltiple", domain: "elementos_estratégicos_de_la_pmo", method: "predictivo", cognitive: "conocimiento" }
    },
    {
        question: "La PMO revisa su marco de gobernanza y encuentra que los procedimientos de escalación no están claramente definidos. Como resultado, los gerentes de proyecto no saben cuándo ni cómo escalar un problema a la PMO. ¿Cuál es el impacto principal de esta deficiencia?",
        options: [
            "Los gerentes de proyecto resuelven todos sus problemas de manera independiente, lo cual es positivo.",
            "Los problemas no llegan a la PMO o llegan cuando ya son crisis, limitando la capacidad de respuesta proactiva de la PMO.",
            "El impacto es mínimo ya que la mayoría de los proyectos se resuelven sin necesidad de escalar.",
            "Los gerentes de proyecto perderán confianza en la PMO como soporte técnico."
        ],
        answer: ["Los problemas no llegan a la PMO o llegan cuando ya son crisis, limitando la capacidad de respuesta proactiva de la PMO."],
        rationale: "La Tarea 3 del Dominio II establece desarrollar procedimientos de escalación como parte del marco de gobernanza. Sin procedimientos claros, se producen dos efectos negativos: la sub-escalación (problemas que no llegan a la PMO porque nadie sabe cuándo escalar) y la sobre-escalación tardía (problemas que llegan solo cuando ya son crisis). Ambos limitan la efectividad de la gobernanza.",
        tags: { format: "opción_única", domain: "elementos_estratégicos_de_la_pmo", method: "predictivo", cognitive: "análisis" }
    },
    {
        question: "La PMO de una empresa de manufactura opera en un entorno donde los proyectos de mejora de procesos usan Lean y los proyectos de TI usan Scrum. ¿Cómo debe adaptar su marco de gobernanza para ser efectiva en este entorno híbrido?",
        options: [
            "Aplicar los mismos criterios de gobernanza a todos los proyectos independientemente de su metodología.",
            "Diseñar un marco de gobernanza flexible que defina criterios adaptados a los diferentes enfoques metodológicos, manteniendo principios comunes de supervisión y toma de decisiones.",
            "Excluir los proyectos ágiles del marco de gobernanza de la PMO.",
            "Crear dos PMOs separadas: una para proyectos Lean y otra para proyectos Scrum."
        ],
        answer: ["Diseñar un marco de gobernanza flexible que defina criterios adaptados a los diferentes enfoques metodológicos, manteniendo principios comunes de supervisión y toma de decisiones."],
        rationale: "La Tarea 3 del Dominio II establece implementar revisiones periódicas de gobernanza para adaptarse a las necesidades cambiantes. Un marco de gobernanza rígido que ignora las diferencias metodológicas crea fricción con los equipos ágiles. La gobernanza efectiva en entornos híbridos mantiene los principios de supervisión y toma de decisiones pero adapta los mecanismos específicos a cada metodología.",
        tags: { format: "opción_única", domain: "elementos_estratégicos_de_la_pmo", method: "híbrido", cognitive: "aplicación" }
    },
    {
        question: "Ordena los pasos para establecer y mantener la gobernanza de la PMO según el ECO PMI-PMOCP:",
        options: [
            "Implementar revisiones periódicas de gobernanza para garantizar efectividad",
            "Establecer un marco de gobernanza que defina los procesos de supervisión y toma de decisiones",
            "Adaptar la gobernanza a las necesidades cambiantes de la organización",
            "Establecer estructuras de reporte y canales de comunicación para la gobernanza efectiva",
            "Desarrollar procedimientos de escalación"
        ],
        answer: [
            "Establecer un marco de gobernanza que defina los procesos de supervisión y toma de decisiones",
            "Establecer estructuras de reporte y canales de comunicación para la gobernanza efectiva",
            "Desarrollar procedimientos de escalación",
            "Implementar revisiones periódicas de gobernanza para garantizar efectividad",
            "Adaptar la gobernanza a las necesidades cambiantes de la organización"
        ],
        rationale: "La Tarea 3 del Dominio II sigue esta lógica: primero se define el marco conceptual de gobernanza, luego se establecen las estructuras de comunicación y reporte que lo hacen operable, se definen los procedimientos de escalación para situaciones específicas, se implementan revisiones periódicas para evaluar su efectividad y finalmente se adapta cuando el entorno cambia.",
        tags: { format: "ordenamiento", domain: "elementos_estratégicos_de_la_pmo", method: "predictivo", cognitive: "conocimiento" }
    },

    // ─── DOMINIO III: preguntas adicionales (6) ───────────────────────────────

    {
        question: "La PMO recibe retroalimentación de sus clientes de que el proceso de onboarding para nuevos servicios es confuso y tarda demasiado. El equipo de la PMO dedica mucho tiempo a resolver dudas básicas que no están documentadas. ¿Cuál es la solución correcta según el ECO PMI-PMOCP?",
        options: [
            "Contratar más personal de soporte para atender las consultas de los clientes.",
            "Crear documentación completa y guías de usuario para los servicios de la PMO, y mejorar el proceso de incorporación con capacitación estructurada.",
            "Limitar el número de clientes nuevos por trimestre para no saturar al equipo.",
            "Solicitar a los clientes que lean el catálogo de servicios antes de solicitar soporte."
        ],
        answer: ["Crear documentación completa y guías de usuario para los servicios de la PMO, y mejorar el proceso de incorporación con capacitación estructurada."],
        rationale: "La Tarea 1 del Dominio IV establece crear documentación y guías de usuario para los servicios de la PMO, e implementar un programa de capacitación para educar a los clientes. Un onboarding deficiente que genera muchas consultas básicas indica que la documentación es insuficiente. La solución correcta es mejorar la documentación y la capacitación, no contratar más soporte para compensar la deficiencia.",
        tags: { format: "opción_única", domain: "diseño_y_estructura_de_la_pmo", method: "predictivo", cognitive: "aplicación" }
    },
    {
        question: "La PMO establece mecanismos de revisión periódica con sus clientes clave. ¿Cuál es el propósito principal de estos mecanismos según el ECO PMI-PMOCP?",
        options: [
            "Demostrar la actividad de la PMO ante el comité directivo.",
            "Establecer retroalimentación regular que permita a la PMO entender la evolución de las necesidades de sus clientes y ajustar sus servicios proactivamente.",
            "Obligar a los clientes a participar en la gobernanza de la PMO.",
            "Documentar las quejas de los clientes para el reporte anual de la PMO."
        ],
        answer: ["Establecer retroalimentación regular que permita a la PMO entender la evolución de las necesidades de sus clientes y ajustar sus servicios proactivamente."],
        rationale: "La Tarea 1 del Dominio III establece establecer mecanismos de revisión y retroalimentación regulares con los clientes clave. El propósito es entender cómo evolucionan las necesidades antes de que los clientes dejen de usar los servicios de la PMO por no ser relevantes. La retroalimentación regular es el mecanismo de alerta temprana que permite a la PMO adaptarse proactivamente.",
        tags: { format: "opción_única", domain: "diseño_y_estructura_de_la_pmo", method: "predictivo", cognitive: "conocimiento" }
    },
    {
        question: "La PMO identifica que varios directores de área desconocen todos los servicios disponibles de la PMO. Muchos estarían dispuestos a usar servicios que la PMO ya ofrece si supieran que existen. ¿Cuál es la acción correcta?",
        options: [
            "Enviar el catálogo de servicios completo por correo a todos los directores.",
            "Desarrollar e implementar una estrategia para promover los servicios de la PMO a estos clientes potenciales, con mensajes adaptados a las necesidades específicas de cada director.",
            "Esperar a que los directores pregunten por los servicios cuando los necesiten.",
            "Hacer obligatorio el uso de todos los servicios de la PMO para los proyectos de cada área."
        ],
        answer: ["Desarrollar e implementar una estrategia para promover los servicios de la PMO a estos clientes potenciales, con mensajes adaptados a las necesidades específicas de cada director."],
        rationale: "La Tarea 1 del Dominio III establece desarrollar una estrategia para promover los servicios de la PMO a clientes potenciales. El desconocimiento de los servicios es un problema de marketing interno que requiere comunicación activa y personalizada. Un correo masivo con el catálogo completo probablemente no sea leído; los mensajes adaptados a las necesidades específicas de cada director son mucho más efectivos.",
        tags: { format: "opción_única", domain: "diseño_y_estructura_de_la_pmo", method: "predictivo", cognitive: "aplicación" }
    },
    {
        question: "La PMO necesita capturar sistemáticamente las expectativas y requisitos de sus clientes. ¿Cuáles de los siguientes son métodos válidos para este propósito según el ECO PMI-PMOCP? (Selecciona todos los que apliquen)",
        options: [
            "Realizar encuestas periódicas a los clientes de la PMO.",
            "Conducir entrevistas con clientes clave para entender sus necesidades en profundidad.",
            "Analizar los datos de uso de los servicios actuales de la PMO.",
            "Inferir las necesidades de los clientes a partir de los proyectos fallidos del año anterior.",
            "Desarrollar un enfoque sistemático para capturar y analizar las expectativas y requisitos de los clientes."
        ],
        answer: [
            "Realizar encuestas periódicas a los clientes de la PMO.",
            "Conducir entrevistas con clientes clave para entender sus necesidades en profundidad.",
            "Desarrollar un enfoque sistemático para capturar y analizar las expectativas y requisitos de los clientes."
        ],
        rationale: "La Tarea 2 del Dominio III establece realizar encuestas y entrevistas periódicas, y desarrollar un enfoque sistemático para capturar expectativas y requisitos. Analizar proyectos fallidos puede dar información sobre síntomas pero no sobre necesidades actuales. La captura sistemática debe ser prospectiva, no solo retrospectiva.",
        tags: { format: "opción_múltiple", domain: "diseño_y_estructura_de_la_pmo", method: "predictivo", cognitive: "conocimiento" }
    },
    {
        question: "La PMO actualiza su propuesta de valor anualmente. Este año, la organización ha priorizado la transformación digital como objetivo estratégico. ¿Cómo debe ajustar la PMO su propuesta de valor?",
        options: [
            "Mantener la propuesta de valor anterior ya que los servicios de la PMO no han cambiado.",
            "Revisar y actualizar la propuesta de valor para mostrar cómo los servicios de la PMO contribuyen específicamente a los objetivos de transformación digital de la organización.",
            "Agregar un nuevo servicio de transformación digital sin modificar la propuesta de valor existente.",
            "Esperar a que la transformación digital esté completada antes de actualizar la propuesta de valor."
        ],
        answer: ["Revisar y actualizar la propuesta de valor para mostrar cómo los servicios de la PMO contribuyen específicamente a los objetivos de transformación digital de la organización."],
        rationale: "La Tarea 3 del Dominio III establece revisar y actualizar periódicamente la propuesta de valor para alinearse con las necesidades cambiantes de la organización. La propuesta de valor debe resonar con las prioridades estratégicas actuales. Cuando la organización pivota hacia la transformación digital, la PMO debe demostrar su relevancia en ese contexto específico.",
        tags: { format: "opción_única", domain: "diseño_y_estructura_de_la_pmo", method: "predictivo", cognitive: "aplicación" }
    },
    {
        question: "La PMO está creando los procesos estandarizados para su servicio de revisión de lecciones aprendidas. Un miembro del equipo propone un proceso de 12 pasos muy detallado. Otro propone un proceso simplificado de 4 pasos. ¿Cuál es el criterio correcto para definir el nivel de detalle adecuado?",
        options: [
            "El proceso más detallado es siempre mejor porque garantiza mayor calidad.",
            "El proceso más simple es siempre mejor porque reduce la carga administrativa.",
            "El nivel de detalle debe equilibrar la consistencia y calidad del servicio con la facilidad de uso para los clientes, garantizando que el proceso sea adoptado en la práctica.",
            "El nivel de detalle debe definirlo el cliente del servicio, no la PMO."
        ],
        answer: ["El nivel de detalle debe equilibrar la consistencia y calidad del servicio con la facilidad de uso para los clientes, garantizando que el proceso sea adoptado en la práctica."],
        rationale: "La Tarea 4 del Dominio III establece crear procesos estandarizados para cada servicio de la PMO. Los procesos demasiado complejos no son adoptados; los demasiado simples no garantizan consistencia. El criterio de diseño correcto es el equilibrio entre calidad/consistencia y facilidad de adopción, con el objetivo final de que el proceso sea efectivamente utilizado por los clientes.",
        tags: { format: "opción_única", domain: "diseño_y_estructura_de_la_pmo", method: "predictivo", cognitive: "análisis" }
    },

    // ─── DOMINIO IV: preguntas adicionales (7) ───────────────────────────────

    {
        question: "La PMO lanza un nuevo servicio de soporte en gestión de riesgos de proyectos. Antes de comunicarlo a toda la organización, decide probarlo con un proyecto piloto en el área de operaciones. ¿Qué principio de la Tarea 2 del Dominio IV está aplicando?",
        options: [
            "Gestión de recursos de la PMO para asegurar que hay suficiente equipo.",
            "Implementación por fases para servicios complejos o de alto impacto, comenzando con un piloto antes de escalar.",
            "Incorporación de servicios de la PMO con documentación y capacitación.",
            "Creación del catálogo de servicios detallando las ofertas de la PMO."
        ],
        answer: ["Implementación por fases para servicios complejos o de alto impacto, comenzando con un piloto antes de escalar."],
        rationale: "La Tarea 2 del Dominio IV establece implementar un enfoque por fases para servicios complejos o de alto impacto. El piloto es la primera fase: permite probar el servicio en un entorno controlado, identificar problemas y ajustar antes del lanzamiento masivo. Este enfoque reduce el riesgo de un lanzamiento fallido a gran escala.",
        tags: { format: "opción_única", domain: "operación_y_desempeño_de_la_pmo", method: "ágil", cognitive: "aplicación" }
    },
    {
        question: "La PMO establece un sistema de retroalimentación de clientes para mejorar continuamente la prestación de servicios. Después del primer trimestre, los datos muestran que el 72% de los clientes valoran positivamente el servicio de soporte metodológico pero el 58% califica negativamente los tiempos de respuesta. ¿Cuál es la acción correcta?",
        options: [
            "Priorizar mantener la calidad metodológica ya que tiene mayor valoración positiva.",
            "Investigar las causas del bajo desempeño en tiempos de respuesta, implementar mejoras específicas en ese aspecto y monitorear el impacto en la próxima medición.",
            "Establecer un SLA más flexible para los tiempos de respuesta para reducir la insatisfacción.",
            "Solicitar a los clientes que ajusten sus expectativas sobre los tiempos de respuesta."
        ],
        answer: ["Investigar las causas del bajo desempeño en tiempos de respuesta, implementar mejoras específicas en ese aspecto y monitorear el impacto en la próxima medición."],
        rationale: "La Tarea 2 del Dominio IV establece crear un sistema de retroalimentación del cliente para mejorar continuamente la prestación del servicio. El 58% de insatisfacción en tiempos de respuesta es una brecha de desempeño significativa que requiere acción correctiva. Ajustar el SLA para adaptarse al problema en lugar de resolver el problema es la respuesta incorrecta.",
        tags: { format: "opción_única", domain: "operación_y_desempeño_de_la_pmo", method: "predictivo", cognitive: "aplicación" }
    },
    {
        question: "La PMO detecta que tres proyectos críticos simultáneos requieren soporte intensivo de gestión de riesgos durante el mismo mes, sobrepasando la capacidad actual del equipo. ¿Cuál es la solución correcta según la Tarea 3 del Dominio IV?",
        options: [
            "Priorizar los proyectos por criterio jerárquico del solicitante y atender solo los más importantes.",
            "Establecer un proceso de planificación de capacidad que anticipe picos de demanda y un proceso para gestionar recursos externos cuando sea necesario.",
            "Rechazar el soporte a los proyectos adicionales para no comprometer la calidad.",
            "Contratar personal permanente adicional para cubrir los picos de demanda."
        ],
        answer: ["Establecer un proceso de planificación de capacidad que anticipe picos de demanda y un proceso para gestionar recursos externos cuando sea necesario."],
        rationale: "La Tarea 3 del Dominio IV establece establecer un proceso de planificación de capacidad para optimizar la utilización de recursos y un proceso para gestionar recursos externos y contratistas. Los picos de demanda simultáneos son previsibles con una planificación adecuada. La solución estructural combina planificación anticipada con la flexibilidad de recursos externos para picos eventuales.",
        tags: { format: "opción_única", domain: "operación_y_desempeño_de_la_pmo", method: "predictivo", cognitive: "análisis" }
    },
    {
        question: "¿Cuáles son los pasos para gestionar eficazmente los servicios de la PMO según el ECO PMI-PMOCP? (Selecciona todos los que apliquen)",
        options: [
            "Implementar un enfoque por fases para servicios complejos o de alto impacto.",
            "Establecer procesos y flujos de trabajo claros para cada oferta de la PMO.",
            "Permitir que cada miembro del equipo personalice el servicio según su criterio.",
            "Desarrollar medidas de control de calidad para mantener consistencia en la prestación.",
            "Implementar métricas de desempeño para rastrear y optimizar la eficiencia."
        ],
        answer: [
            "Implementar un enfoque por fases para servicios complejos o de alto impacto.",
            "Establecer procesos y flujos de trabajo claros para cada oferta de la PMO.",
            "Desarrollar medidas de control de calidad para mantener consistencia en la prestación.",
            "Implementar métricas de desempeño para rastrear y optimizar la eficiencia."
        ],
        rationale: "La Tarea 2 del Dominio IV incluye: enfoque por fases, procesos claros, control de calidad y métricas de desempeño. Permitir que cada miembro personalice el servicio según su criterio es lo opuesto a la estandarización que garantiza consistencia; la personalización excesiva introduce variabilidad que daña la calidad percibida del servicio.",
        tags: { format: "opción_múltiple", domain: "operación_y_desempeño_de_la_pmo", method: "predictivo", cognitive: "conocimiento" }
    },
    {
        question: "La PMO implementa un plan de comunicación para introducir un nuevo servicio de soporte a la gestión de beneficios. ¿Cuál es el propósito principal de este plan según el ECO PMI-PMOCP?",
        options: [
            "Documentar formalmente el lanzamiento del nuevo servicio para el acta de constitución.",
            "Presentar el nuevo servicio a los potenciales clientes para que conozcan su existencia, propósito y cómo acceder a él.",
            "Justificar el costo de desarrollo del servicio ante el comité directivo.",
            "Obtener la aprobación del nuevo servicio por parte de los usuarios finales."
        ],
        answer: ["Presentar el nuevo servicio a los potenciales clientes para que conozcan su existencia, propósito y cómo acceder a él."],
        rationale: "La Tarea 1 del Dominio IV establece desarrollar un plan de comunicación para introducir nuevos servicios a los potenciales clientes. El mejor servicio no genera valor si los clientes potenciales no saben que existe. El plan de comunicación garantiza que el nuevo servicio llegue a las audiencias correctas con el mensaje adecuado sobre qué es, para qué sirve y cómo pueden acceder a él.",
        tags: { format: "opción_única", domain: "operación_y_desempeño_de_la_pmo", method: "predictivo", cognitive: "conocimiento" }
    },
    {
        question: "La PMO de una empresa de servicios adopta un enfoque de mejora continua ágil para sus propios servicios, realizando retrospectivas internas al final de cada mes. ¿Cuál es el beneficio principal de este enfoque para la operación de la PMO?",
        options: [
            "Permite a la PMO certificarse como organización ágil.",
            "Permite identificar y corregir problemas de prestación de servicios en ciclos cortos, mejorando la experiencia del cliente de forma continua.",
            "Reduce la necesidad de evaluaciones formales de desempeño del equipo.",
            "Elimina la necesidad de un plan de gestión de recursos de la PMO."
        ],
        answer: ["Permite identificar y corregir problemas de prestación de servicios en ciclos cortos, mejorando la experiencia del cliente de forma continua."],
        rationale: "La Tarea 2 del Dominio IV establece crear un sistema de retroalimentación del cliente para mejorar continuamente la prestación del servicio. Las retrospectivas mensuales son una implementación ágil de este principio: ciclos cortos de inspección y adaptación que permiten corregir el rumbo rápidamente antes de que los problemas se acumulen. Esta es una aplicación del concepto de mejora continua al propio funcionamiento de la PMO.",
        tags: { format: "opción_única", domain: "operación_y_desempeño_de_la_pmo", method: "ágil", cognitive: "análisis" }
    },
    {
        question: "La PMO tiene una matriz de habilidades actualizada. Al revisar las asignaciones del próximo trimestre, identifica que un proyecto de alta complejidad requiere un experto en gestión de programas que el equipo no tiene. ¿Cuáles son las opciones válidas según el ECO PMI-PMOCP?",
        options: [
            "Cancelar el soporte al proyecto hasta que el equipo desarrolle la competencia.",
            "Asignar al miembro del equipo más cercano en perfil aunque no tenga la competencia exacta.",
            "Gestionar un recurso externo o contratista con la competencia requerida para cubrir la necesidad inmediata, y paralelamente desarrollar la competencia internamente para el futuro.",
            "Solicitar al proyecto que reduzca su complejidad para adaptarse a las competencias disponibles."
        ],
        answer: ["Gestionar un recurso externo o contratista con la competencia requerida para cubrir la necesidad inmediata, y paralelamente desarrollar la competencia internamente para el futuro."],
        rationale: "La Tarea 3 del Dominio IV establece establecer un proceso para gestionar recursos externos y contratistas cuando sea necesario. La combinación de recurso externo para la necesidad inmediata y desarrollo interno para el futuro es la respuesta óptima: atiende la necesidad presente sin renunciar a construir capacidades organizacionales propias.",
        tags: { format: "opción_única", domain: "operación_y_desempeño_de_la_pmo", method: "predictivo", cognitive: "aplicación" }
    },

    // ─── DOMINIO V: preguntas adicionales (7) ───────────────────────────────

    {
        question: "La PMO ha implementado un dashboard de rendimiento de servicios. El director nota que la pantalla muestra datos de hace 48 horas. ¿Cuál es el problema y su impacto?",
        options: [
            "El dashboard funciona correctamente; 48 horas es una frecuencia de actualización aceptable.",
            "Los datos desactualizados en el dashboard limitan la capacidad de la PMO de detectar y responder a problemas de servicio en tiempo real, perdiendo el propósito principal de la herramienta.",
            "El problema es técnico y debe resolverlo el área de TI sin impacto operativo.",
            "La frecuencia de actualización de 48 horas solo es problemática para servicios de alta criticidad."
        ],
        answer: ["Los datos desactualizados en el dashboard limitan la capacidad de la PMO de detectar y responder a problemas de servicio en tiempo real, perdiendo el propósito principal de la herramienta."],
        rationale: "La Tarea 1 del Dominio V establece crear un dashboard para el monitoreo en tiempo real del rendimiento del servicio. El propósito central del dashboard es la detección temprana de problemas para responder proactivamente. Con datos de 48 horas de retraso, los problemas que surgen no son visibles hasta el día siguiente, eliminando la capacidad de respuesta en tiempo real.",
        tags: { format: "opción_única", domain: "mejora_y_efectividad_de_la_pmo", method: "predictivo", cognitive: "análisis" }
    },
    {
        question: "La PMO condujo una evaluación de madurez de sus servicios y obtuvo los resultados. El equipo identifica que los servicios de soporte a proyectos predictivos están en nivel 4 de madurez pero los servicios de soporte a proyectos ágiles están en nivel 1. ¿Cuál es el siguiente paso correcto?",
        options: [
            "Discontinuar los servicios de soporte ágil ya que tienen baja madurez.",
            "Crear una hoja de ruta para avanzar la madurez de los servicios ágiles, priorizando las iniciativas de mejora basándose en los resultados de la evaluación.",
            "Aplicar las mismas prácticas de los servicios predictivos a los servicios ágiles.",
            "Esperar a la próxima evaluación anual para evaluar si la brecha persiste."
        ],
        answer: ["Crear una hoja de ruta para avanzar la madurez de los servicios ágiles, priorizando las iniciativas de mejora basándose en los resultados de la evaluación."],
        rationale: "La Tarea 2 del Dominio V establece crear una hoja de ruta para avanzar en la madurez de los servicios de la PMO basándose en los resultados de la evaluación. La brecha entre servicios predictivos (nivel 4) y ágiles (nivel 1) es una prioridad de mejora clara. Aplicar ciegamente las prácticas predictivas a los ágiles ignoraría las diferencias fundamentales entre los dos enfoques.",
        tags: { format: "opción_única", domain: "mejora_y_efectividad_de_la_pmo", method: "híbrido", cognitive: "aplicación" }
    },
    {
        question: "La PMO implementa un proceso de gestión del cambio para soportar las iniciativas de mejora de madurez. ¿Cuál es la razón principal para incluir gestión del cambio en el proceso de mejora de madurez?",
        options: [
            "Cumplir con el estándar PMI-PMOCP que requiere gestión del cambio en todos los proyectos.",
            "Las mejoras de madurez generalmente implican cambios en cómo trabajan las personas, y sin gestión del cambio los esfuerzos de mejora enfrentan resistencia que puede hacer fracasar las iniciativas.",
            "La gestión del cambio reduce el tiempo de implementación de las mejoras de madurez.",
            "La gestión del cambio es necesaria solo cuando las mejoras implican cambios de sistema."
        ],
        answer: ["Las mejoras de madurez generalmente implican cambios en cómo trabajan las personas, y sin gestión del cambio los esfuerzos de mejora enfrentan resistencia que puede hacer fracasar las iniciativas."],
        rationale: "La Tarea 2 del Dominio V establece implementar un proceso de gestión del cambio para soportar las iniciativas de mejora de madurez. Las mejoras de madurez OPM son fundamentalmente cambios en comportamientos, procesos y cultura. Sin abordar la dimensión humana del cambio, las nuevas prácticas pueden no adoptarse efectivamente aunque sean técnicamente correctas.",
        tags: { format: "opción_única", domain: "mejora_y_efectividad_de_la_pmo", method: "predictivo", cognitive: "análisis" }
    },
    {
        question: "La PMO implementa un programa de mentoría interno para el equipo. El mentor asignado a un analista junior es el director de la PMO. Después de tres meses, el analista reporta que las reuniones se cancelan con frecuencia y que el director no tiene tiempo para las sesiones. ¿Cuál es la causa del problema y la solución?",
        options: [
            "El analista debe buscar un mentor externo a la organización.",
            "El diseño del programa asignó mentores sin considerar la disponibilidad real; debe rediseñarse para que los mentores sean profesionales experimentados con tiempo dedicado para el rol.",
            "El director debe reorganizar su agenda para cumplir con el compromiso de mentoría.",
            "El programa debe eliminarse ya que es difícil de implementar en la práctica."
        ],
        answer: ["El diseño del programa asignó mentores sin considerar la disponibilidad real; debe rediseñarse para que los mentores sean profesionales experimentados con tiempo dedicado para el rol."],
        rationale: "La Tarea 3 del Dominio V establece establecer iniciativas de mentoría y coaching dentro del equipo de la PMO. Un programa de mentoría fallido por falta de disponibilidad del mentor indica un problema de diseño: los mentores deben tener no solo la competencia sino también la disponibilidad real. Rediseñar el programa con mentores de nivel apropiado que tengan tiempo dedicado es la solución estructural correcta.",
        tags: { format: "opción_única", domain: "mejora_y_efectividad_de_la_pmo", method: "predictivo", cognitive: "análisis" }
    },
    {
        question: "La PMO realiza encuestas periódicas de satisfacción a sus clientes. Los resultados del último trimestre muestran que el valor percibido de la PMO cayó de 7.8 a 6.2 sobre 10. ¿Cuál es el proceso correcto según la Tarea 4 del Dominio V?",
        options: [
            "Ignorar la caída ya que puede ser una fluctuación estadística normal.",
            "Investigar las causas de la caída en el valor percibido, identificar las áreas de servicio que generan insatisfacción y diseñar un plan de mejora enfocado en mejorar la entrega de valor.",
            "Cambiar la metodología de la encuesta para obtener resultados más favorables.",
            "Comunicar al comité directivo que el bajo resultado se debe a expectativas irrazonables de los clientes."
        ],
        answer: ["Investigar las causas de la caída en el valor percibido, identificar las áreas de servicio que generan insatisfacción y diseñar un plan de mejora enfocado en mejorar la entrega de valor."],
        rationale: "La Tarea 4 del Dominio V establece realizar encuestas periódicas para evaluar el valor percibido y establecer un proceso de mejora continua enfocado en mejorar la entrega de valor. Una caída de 1.6 puntos en el índice de satisfacción es una señal de alerta que requiere investigación y acción. El proceso correcto es diagnóstico → plan de mejora → implementación → verificación.",
        tags: { format: "opción_única", domain: "mejora_y_efectividad_de_la_pmo", method: "predictivo", cognitive: "aplicación" }
    },
    {
        question: "¿Cuáles de las siguientes son actividades para evaluar y mejorar las competencias del equipo de PMO según el ECO PMI-PMOCP? (Selecciona todas las que apliquen)",
        options: [
            "Desarrollar un marco de competencias específico para los roles y responsabilidades de la PMO.",
            "Realizar evaluaciones periódicas de habilidades de los miembros del equipo.",
            "Reemplazar anualmente al 20% del equipo con menor desempeño.",
            "Crear planes de desarrollo individuales para el personal de la PMO.",
            "Desarrollar una plataforma de intercambio de conocimientos para facilitar el aprendizaje entre pares."
        ],
        answer: [
            "Desarrollar un marco de competencias específico para los roles y responsabilidades de la PMO.",
            "Realizar evaluaciones periódicas de habilidades de los miembros del equipo.",
            "Crear planes de desarrollo individuales para el personal de la PMO.",
            "Desarrollar una plataforma de intercambio de conocimientos para facilitar el aprendizaje entre pares."
        ],
        rationale: "La Tarea 3 del Dominio V incluye: marco de competencias, evaluaciones periódicas, planes individuales, programa de capacitación y certificación, mentoría y coaching, y plataforma de intercambio de conocimientos. Reemplazar al 20% de menor desempeño es una práctica de gestión de talento agresiva que no forma parte del enfoque de desarrollo de competencias del ECO PMI-PMOCP.",
        tags: { format: "opción_múltiple", domain: "mejora_y_efectividad_de_la_pmo", method: "predictivo", cognitive: "conocimiento" }
    },
    {
        question: "La PMO implementa un proceso de benchmarking anual para comparar su valor contra estándares de la industria. En el último benchmarking, descubre que su tasa de éxito de proyectos (74%) está por debajo del promedio de la industria (81%). ¿Cuál es la acción correcta?",
        options: [
            "Cuestionar la validez del benchmark ya que las condiciones de cada organización son diferentes.",
            "Usar los resultados del benchmarking para identificar las brechas específicas que explican la diferencia y priorizar las iniciativas de mejora de valor de la PMO.",
            "Publicar solo los indicadores en los que la PMO supera el promedio de la industria.",
            "Esperar al próximo ciclo de benchmarking para ver si la brecha se cierra sola."
        ],
        answer: ["Usar los resultados del benchmarking para identificar las brechas específicas que explican la diferencia y priorizar las iniciativas de mejora de valor de la PMO."],
        rationale: "La Tarea 4 del Dominio V establece implementar un proceso de benchmarking para comparar el valor de la PMO con los estándares de la industria. El propósito del benchmarking es identificar oportunidades de mejora, no justificar el statu quo. Una brecha de 7 puntos en la tasa de éxito de proyectos respecto a la industria es una señal valiosa que debe convertirse en acciones de mejora concretas.",
        tags: { format: "opción_única", domain: "mejora_y_efectividad_de_la_pmo", method: "predictivo", cognitive: "análisis" }
    },

    // ─── DOMINIO VI: preguntas adicionales (4) ───────────────────────────────

    {
        question: "El profesional de PMO observa que el proceso actual de aprobación de proyectos tarda 6 semanas cuando podría optimizarse a 2 semanas eliminando aprobaciones redundantes. Para implementar este cambio necesitará la aprobación de tres directores que no se han mostrado receptivos a cambios. ¿Cuál es la combinación de habilidades del Dominio VI más relevante?",
        options: [
            "Optimizar procesos y gestionar el tiempo de manera eficaz.",
            "Pensar estratégicamente, negociar hábilmente con los directores e influir en la dirección estratégica para obtener el apoyo necesario.",
            "Demostrar adaptabilidad aceptando el proceso actual si los directores no apoyan el cambio.",
            "Analizar datos para demostrar el beneficio del cambio y gestionar proyectos para implementarlo."
        ],
        answer: ["Pensar estratégicamente, negociar hábilmente con los directores e influir en la dirección estratégica para obtener el apoyo necesario."],
        rationale: "Las Tareas 1, 2 y 5 del Dominio VI convergen en este escenario. El profesional de PMO necesita pensar estratégicamente para enmarcar el cambio en términos de valor organizacional, negociar hábilmente para superar la resistencia de los directores, e influir en la dirección estratégica para que el cambio sea aprobado. La habilidad técnica de optimizar el proceso es solo el punto de partida; las habilidades de influencia son las críticas.",
        tags: { format: "opción_única", domain: "personas", method: "predictivo", cognitive: "análisis" }
    },
    {
        question: "¿Cuáles de las siguientes son habilidades de la Tarea 5 (Moldear la Dirección Organizacional) del Dominio VI según el ECO PMI-PMOCP? (Selecciona todas las que apliquen)",
        options: [
            "Aplicar perspicacia empresarial.",
            "Demostrar conciencia cultural.",
            "Gestionar el tiempo de manera eficaz.",
            "Guiar y empoderar equipos.",
            "Influir en la dirección estratégica.",
            "Garantizar la exactitud en el trabajo."
        ],
        answer: [
            "Aplicar perspicacia empresarial.",
            "Demostrar conciencia cultural.",
            "Guiar y empoderar equipos.",
            "Influir en la dirección estratégica."
        ],
        rationale: "La Tarea 5 del Dominio VI incluye: perspicacia empresarial, conciencia cultural, guiar y empoderar equipos, e influir en la dirección estratégica. Gestionar el tiempo eficazmente pertenece a la Tarea 3 (Aumentar el impacto personal); garantizar exactitud también es parte de la Tarea 3. La Tarea 5 se enfoca en habilidades de liderazgo estratégico y organizacional.",
        tags: { format: "opción_múltiple", domain: "personas", method: "predictivo", cognitive: "conocimiento" }
    },
    {
        question: "El profesional de PMO facilita un taller de planificación estratégica donde representantes de cinco países de la organización tienen estilos de comunicación muy diferentes: algunos son directos y confrontacionales, otros son indirectos y evitan el conflicto abierto. ¿Cómo debe adaptar su facilitación?",
        options: [
            "Establecer desde el inicio que todos deben usar el estilo de comunicación directo para garantizar eficiencia.",
            "Ignorar las diferencias culturales y facilitar el taller de la misma manera para todos los participantes.",
            "Demostrar conciencia cultural diseñando una dinámica de facilitación que permita a todos los estilos de comunicación contribuir, usando tanto discusiones abiertas como mecanismos anónimos o escritos.",
            "Dividir el taller en grupos por país para evitar los conflictos culturales."
        ],
        answer: ["Demostrar conciencia cultural diseñando una dinámica de facilitación que permita a todos los estilos de comunicación contribuir, usando tanto discusiones abiertas como mecanismos anónimos o escritos."],
        rationale: "La Tarea 5 del Dominio VI establece demostrar conciencia cultural. En un grupo multicultural, los estilos de comunicación directos e indirectos son igualmente válidos. El profesional de PMO debe diseñar dinámicas inclusivas: discusiones abiertas para los estilos directos y mecanismos escritos o anónimos para quienes prefieren contribuir sin confrontación directa. Esto garantiza que todas las perspectivas sean capturadas.",
        tags: { format: "opción_única", domain: "personas", method: "híbrido", cognitive: "aplicación" }
    },
    {
        question: "El profesional de PMO identifica que los gerentes de proyecto de su organización tienen dificultades con la gestión de interesados en proyectos de transformación digital. En lugar de resolver cada caso individualmente, diseña e imparte un taller sobre gestión de interesados para todos los gerentes. ¿Qué habilidades de la Tarea 4 del Dominio VI está demostrando?",
        options: [
            "Optimizar procesos y responder a los riesgos.",
            "Gestionar proyectos e influir en la dirección estratégica.",
            "Impartir capacitación y optimizar procesos al transformar un problema recurrente en un programa de desarrollo.",
            "Aplicar inteligencia interpersonal y fomentar la colaboración."
        ],
        answer: ["Impartir capacitación y optimizar procesos al transformar un problema recurrente en un programa de desarrollo."],
        rationale: "La Tarea 4 del Dominio VI incluye impartir capacitación y optimizar procesos como habilidades técnicas. El profesional de PMO demuestra ambas: imparte capacitación al diseñar e impartir el taller, y optimiza procesos al transformar la atención individual de casos recurrentes en una solución sistémica (el taller) que resuelve el problema de raíz para todos los gerentes simultáneamente.",
        tags: { format: "opción_única", domain: "personas", method: "predictivo", cognitive: "aplicación" }
    }

];