/** @type {Array<Object>} Banco de preguntas para examen PMI-CP */
const cpQuestions = [

    // ─────────────────────────────────────────────────────────────────────────
    // DOMINIO I: GESTIÓN DE CONTRATOS (30 preguntas)
    // ─────────────────────────────────────────────────────────────────────────

    // --- Tarea 1: Gestionar los riesgos y el proceso de riesgo ---

    {
        question: "Durante la planificación inicial (Front End Planning) de un proyecto de construcción de una planta industrial, el equipo identifica que la disponibilidad de grúas de gran tonelaje en la región es limitada. ¿Cómo debe el profesional de construcción gestionar esta situación?",
        options: [
            "Registrar la situación como una restricción del proyecto y continuar con la planificación.",
            "Reconocer esta situación como un riesgo positivo (oportunidad) si se contrata anticipadamente el equipo, y gestionarla proactivamente para mejorar los resultados del proyecto.",
            "Transferir el riesgo al contratista de izaje mediante una cláusula contractual.",
            "Esperar a la fase de ejecución para determinar si el riesgo se materializa."
        ],
        answer: ["Reconocer esta situación como un riesgo positivo (oportunidad) si se contrata anticipadamente el equipo, y gestionarla proactivamente para mejorar los resultados del proyecto."],
        rationale: "El ECO PMI-CP establece en el Dominio I, Tarea 1, que el profesional debe reconocer el riesgo positivo y utilizarlo para mejorar los resultados del proyecto. La escasez de grúas es tanto una amenaza (si no se actúa) como una oportunidad (si se contrata antes que los competidores). Gestionarla proactivamente durante el FEP convierte el riesgo en ventaja competitiva.",
        tags: {
            format:    "opción_única",
            domain:    "gestión_de_contratos",
            method:    "predictivo",
            cognitive: "análisis"
        }
    },
    {
        question: "¿Cuáles de las siguientes acciones son parte de la gestión del proceso de riesgo a lo largo de un proyecto de construcción según el ECO PMI-CP? (Selecciona todas las que apliquen)",
        options: [
            "Obtener información de los interesados pertinentes durante la gestión del riesgo.",
            "Aplicar las diferentes clasificaciones de riesgo de manera adecuada según el contexto del proyecto.",
            "Gestionar la priorización de riesgos únicamente durante la planificación inicial.",
            "Gestionar el proceso de riesgo durante todo el ciclo de vida del proyecto.",
            "Identificar y evaluar riesgos para una mejor distribución, evasión y gestión."
        ],
        answer: [
            "Obtener información de los interesados pertinentes durante la gestión del riesgo.",
            "Aplicar las diferentes clasificaciones de riesgo de manera adecuada según el contexto del proyecto.",
            "Gestionar el proceso de riesgo durante todo el ciclo de vida del proyecto.",
            "Identificar y evaluar riesgos para una mejor distribución, evasión y gestión."
        ],
        rationale: "La Tarea 1 del Dominio I establece que la gestión del riesgo es continua durante todo el proyecto, no solo en la planificación inicial. Incluye obtener información de interesados, aplicar clasificaciones adecuadas e identificar/evaluar riesgos. La opción sobre gestionar priorización únicamente durante el FEP es incorrecta: el ECO indica que la priorización ocurre durante FEP Y la ejecución.",
        tags: {
            format:    "opción_múltiple",
            domain:    "gestión_de_contratos",
            method:    "predictivo",
            cognitive: "conocimiento"
        }
    },
    {
        question: "En un megaproyecto de construcción de infraestructura, el equipo necesita priorizar los riesgos identificados. ¿En qué momento del ciclo de vida del proyecto es MÁS crítico gestionar la priorización de riesgos según el ECO PMI-CP?",
        options: [
            "Durante el cierre del proyecto, para documentar lecciones aprendidas.",
            "Durante la planificación inicial (Front End Planning) y a lo largo de la ejecución del proyecto.",
            "Únicamente durante la fase de diseño de ingeniería.",
            "Solo cuando ocurre un incidente que afecta el cronograma o el costo."
        ],
        answer: ["Durante la planificación inicial (Front End Planning) y a lo largo de la ejecución del proyecto."],
        rationale: "El ECO PMI-CP establece en la Tarea 1 del Dominio I que se debe gestionar el proceso de priorización de riesgos durante el Front End Planning (FEP) y la ejecución. El FEP es crítico porque las decisiones tempranas tienen mayor impacto en el resultado, pero la priorización no termina ahí: los riesgos evolucionan durante la construcción y deben reevaluarse continuamente.",
        tags: {
            format:    "opción_única",
            domain:    "gestión_de_contratos",
            method:    "predictivo",
            cognitive: "aplicación"
        }
    },

    // --- Tarea 2: Determinar cómo aplicar las herramientas de riesgo ---

    {
        question: "El gerente de un proyecto de construcción de una subestación eléctrica necesita mejorar la forma en que se gestionan los riesgos del proyecto. ¿Qué herramienta específica del ECO PMI-CP está diseñada para este propósito en proyectos del entorno de la construcción?",
        options: [
            "El análisis FODA (SWOT) aplicado a los contratos del proyecto.",
            "La herramienta de Evaluación Integrada de Riesgos del Proyecto (IPRA).",
            "El diagrama de Ishikawa para identificar causas raíz de riesgos técnicos.",
            "La matriz de interesados para mapear la influencia de cada parte."
        ],
        answer: ["La herramienta de Evaluación Integrada de Riesgos del Proyecto (IPRA)."],
        rationale: "La Tarea 2 del Dominio I menciona explícitamente la herramienta IPRA (Integrated Project Risk Assessment) como la herramienta diseñada específicamente para mejorar la gestión de riesgos en proyectos de construcción. Es una herramienta distintiva del ECO PMI-CP que no aparece en otros estándares de gestión de proyectos.",
        tags: {
            format:    "opción_única",
            domain:    "gestión_de_contratos",
            method:    "predictivo",
            cognitive: "conocimiento"
        }
    },
    {
        question: "Un equipo de construcción aplica una simulación Monte Carlo al cronograma de un proyecto de instalación de líneas de transmisión. ¿Cuál es el propósito principal de esta técnica en el contexto del ECO PMI-CP?",
        options: [
            "Determinar el costo exacto del proyecto al momento de la adjudicación del contrato.",
            "Impulsar un mejor proceso de riesgo mediante técnicas probabilísticas que modelan la incertidumbre en múltiples variables simultáneamente.",
            "Reemplazar el registro de riesgos como herramienta principal de seguimiento.",
            "Calcular el valor monetario esperado de cada cláusula contractual."
        ],
        answer: ["Impulsar un mejor proceso de riesgo mediante técnicas probabilísticas que modelan la incertidumbre en múltiples variables simultáneamente."],
        rationale: "La Tarea 2 del Dominio I incluye las simulaciones Monte Carlo entre las técnicas de gestión de riesgos probabilísticas para impulsar un mejor proceso de riesgo. En proyectos de construcción, esta técnica es especialmente valiosa para modelar la incertidumbre en duraciones de actividades, precios de materiales y disponibilidad de recursos, generando distribuciones de probabilidad del costo y cronograma.",
        tags: {
            format:    "opción_única",
            domain:    "gestión_de_contratos",
            method:    "predictivo",
            cognitive: "aplicación"
        }
    },
    {
        question: "Ordena los pasos para movilizar un marco de gestión de riesgos al inicio de un proyecto de construcción según las mejores prácticas del ECO PMI-CP:",
        options: [
            "Aplicar herramientas de riesgo (IPRA, Monte Carlo, registro de riesgos)",
            "Movilizar el marco de gestión de riesgos desde el inicio del proyecto",
            "Identificar y clasificar los riesgos del proyecto",
            "Gestionar y monitorear el proceso de riesgo durante la ejecución",
            "Definir el proceso y las herramientas de gestión de riesgos a utilizar"
        ],
        answer: [
            "Movilizar el marco de gestión de riesgos desde el inicio del proyecto",
            "Definir el proceso y las herramientas de gestión de riesgos a utilizar",
            "Identificar y clasificar los riesgos del proyecto",
            "Aplicar herramientas de riesgo (IPRA, Monte Carlo, registro de riesgos)",
            "Gestionar y monitorear el proceso de riesgo durante la ejecución"
        ],
        rationale: "El ECO PMI-CP establece en la Tarea 2 del Dominio I que el marco de gestión de riesgos debe movilizarse al inicio del proyecto. La secuencia lógica es: establecer el marco primero, luego definir el proceso y herramientas específicas, identificar y clasificar los riesgos, aplicar las herramientas seleccionadas y finalmente gestionar y monitorear durante la ejecución.",
        tags: {
            format:    "ordenamiento",
            domain:    "gestión_de_contratos",
            method:    "predictivo",
            cognitive: "conocimiento"
        }
    },

    // --- Tarea 3: Gestionar el proceso de reclamaciones ---

    {
        question: "Durante la construcción de una subestación eléctrica, el contratista presenta una solicitud formal argumentando que un cambio en las especificaciones técnicas emitido por el propietario genera costos adicionales no contemplados en el contrato original. ¿Cómo debe clasificar el profesional de construcción esta solicitud?",
        options: [
            "Como una orden de cambio, ya que implica una modificación al alcance del contrato.",
            "Como una reclamación, ya que es una solicitud de compensación por un evento que el contratista considera que genera derecho a pago adicional y que no fue acordado como orden de cambio.",
            "Como un riesgo residual del proceso de diseño de ingeniería.",
            "Como un problema de comunicación entre el propietario y el contratista."
        ],
        answer: ["Como una reclamación, ya que es una solicitud de compensación por un evento que el contratista considera que genera derecho a pago adicional y que no fue acordado como orden de cambio."],
        rationale: "La Tarea 3 del Dominio I establece que el profesional debe distinguir la diferencia entre órdenes de cambio/variación y reclamaciones. Una orden de cambio es un acuerdo bilateral sobre una modificación al contrato. Una reclamación es una solicitud unilateral de compensación por un evento que el reclamante considera que genera un derecho contractual. La distinción es fundamental para gestionar correctamente el proceso.",
        tags: {
            format:    "opción_única",
            domain:    "gestión_de_contratos",
            method:    "predictivo",
            cognitive: "análisis"
        }
    },
    {
        question: "Un proyecto de construcción de infraestructura ha experimentado múltiples reclamaciones relacionadas con condiciones de subsuelo diferentes a las indicadas en los documentos licitatorios. ¿Cuál es la acción MÁS efectiva para prevenir reclamaciones similares en futuros proyectos?",
        options: [
            "Incluir una cláusula de exoneración de responsabilidad por condiciones de subsuelo en todos los contratos futuros.",
            "Utilizar las lecciones aprendidas y datos de proyectos anteriores para identificar áreas problemáticas, mejorar las investigaciones geotécnicas en el FEP y aplicar mejores prácticas de documentación.",
            "Transferir todo el riesgo de condiciones de subsuelo al contratista mediante un contrato de suma global.",
            "Establecer una reserva de contingencia del 20% para cubrir todas las reclamaciones potenciales."
        ],
        answer: ["Utilizar las lecciones aprendidas y datos de proyectos anteriores para identificar áreas problemáticas, mejorar las investigaciones geotécnicas en el FEP y aplicar mejores prácticas de documentación."],
        rationale: "La Tarea 3 del Dominio I establece usar lecciones aprendidas y datos previos para identificar áreas problemáticas, aplicar mejores prácticas para prevenir reclamaciones y aplicar el marco de gestión de riesgos para reducirlas. Trasladar contractualmente el riesgo al contratista no lo elimina: genera precios más altos y frecuentemente deriva en reclamaciones de todos modos.",
        tags: {
            format:    "opción_única",
            domain:    "gestión_de_contratos",
            method:    "predictivo",
            cognitive: "análisis"
        }
    },
    {
        question: "¿Cuáles de las siguientes son mejores prácticas para prevenir reclamaciones y disputas en proyectos de construcción según el ECO PMI-CP? (Selecciona todas las que apliquen)",
        options: [
            "Implementar una planificación inicial robusta (Front End Planning, FEP).",
            "Establecer un panel de resolución de disputas (Dispute Resolution Board, DRB).",
            "Evitar documentar decisiones verbales para mantener la flexibilidad contractual.",
            "Mantener una comunicación clara y oportuna entre todas las partes.",
            "Utilizar el marco de gestión de riesgos de manera eficaz para reducir reclamaciones.",
            "Aprobar todas las órdenes de cambio después del cierre del proyecto para evitar interrupciones."
        ],
        answer: [
            "Implementar una planificación inicial robusta (Front End Planning, FEP).",
            "Establecer un panel de resolución de disputas (Dispute Resolution Board, DRB).",
            "Mantener una comunicación clara y oportuna entre todas las partes.",
            "Utilizar el marco de gestión de riesgos de manera eficaz para reducir reclamaciones."
        ],
        rationale: "La Tarea 3 del Dominio I menciona explícitamente FEP, DRB, documentación y comunicación como mejores prácticas para prevenir reclamaciones. Evitar documentar decisiones y aprobar cambios al cierre son prácticas que aumentan las reclamaciones, no las reducen. La documentación adecuada es uno de los pilares de la prevención de disputas en construcción.",
        tags: {
            format:    "opción_múltiple",
            domain:    "gestión_de_contratos",
            method:    "predictivo",
            cognitive: "conocimiento"
        }
    },
    {
        question: "Un proyecto de construcción de una línea de transmisión tiene una disputa activa entre el propietario y el contratista por un retraso en la entrega de equipos importados. El contrato incluye una cláusula de DRB. ¿Cuál es el beneficio principal de utilizar este mecanismo según el ECO PMI-CP?",
        options: [
            "El DRB elimina completamente la posibilidad de arbitraje o litigio futuro.",
            "El DRB permite utilizar puntos de intervención tempranos en el proceso de reclamaciones para lograr una resolución antes de que la disputa escale a arbitraje o litigio.",
            "El DRB es más económico que negociar directamente entre las partes.",
            "El DRB obliga a ambas partes a aceptar su decisión sin posibilidad de apelación."
        ],
        answer: ["El DRB permite utilizar puntos de intervención tempranos en el proceso de reclamaciones para lograr una resolución antes de que la disputa escale a arbitraje o litigio."],
        rationale: "La Tarea 3 del Dominio I establece utilizar el proceso de reclamaciones y los puntos clave de intervención para lograr una resolución temprana. El DRB es un mecanismo de intervención temprana que conoce el proyecto desde el inicio, lo que le permite emitir recomendaciones o decisiones oportunas que previenen que las disputas escalen. No elimina otras vías, pero reduce significativamente su necesidad.",
        tags: {
            format:    "opción_única",
            domain:    "gestión_de_contratos",
            method:    "predictivo",
            cognitive: "aplicación"
        }
    },

    // --- Tarea 4: Gestionar el ciclo de vida del contrato ---

    {
        question: "El propietario de un proyecto de construcción de una planta de energía evalúa qué tipo de contrato utilizar. El proyecto tiene un alcance bien definido, diseño completamente desarrollado y bajo nivel de incertidumbre técnica. ¿Qué estructura contractual es MÁS adecuada?",
        options: [
            "Contrato de reembolso de costos (Cost Plus), para mantener flexibilidad ante cambios.",
            "Contrato de suma global (Lump Sum / Fixed Price), ya que el alcance está bien definido y el riesgo de sobrecosto puede asignarse al contratista.",
            "Contrato de tiempo y materiales (T&M), para mayor control de los costos unitarios.",
            "Contrato IPCA (Integrated Project Cooperation Agreement), para maximizar la colaboración."
        ],
        answer: ["Contrato de suma global (Lump Sum / Fixed Price), ya que el alcance está bien definido y el riesgo de sobrecosto puede asignarse al contratista."],
        rationale: "La Tarea 4 del Dominio I establece utilizar los distintos métodos de entrega y estructuras de contrato disponibles según la distribución de riesgos, roles y responsabilidades. Con alcance bien definido y bajo nivel de incertidumbre, el contrato de suma global es adecuado porque transfiere el riesgo de costo al contratista, quien tiene certeza suficiente para cotizar con precisión.",
        tags: {
            format:    "opción_única",
            domain:    "gestión_de_contratos",
            method:    "predictivo",
            cognitive: "aplicación"
        }
    },
    {
        question: "En un proyecto de infraestructura con alta incertidumbre en el alcance y necesidad de colaboración temprana entre propietario y contratista, el profesional de construcción recomienda utilizar Lean Integrated Project Delivery (IPD). ¿Cuál es el principal beneficio de este enfoque según el ECO PMI-CP?",
        options: [
            "El IPD elimina todos los riesgos contractuales al distribuirlos equitativamente entre las partes.",
            "El IPD permite resolver algunos de los problemas de contratación de la industria mediante un enfoque colaborativo que alinea los incentivos de propietario, diseñador y contratista.",
            "El IPD es el único método de entrega compatible con proyectos de megainfraestructura.",
            "El IPD reduce el tiempo de construcción en al menos un 50% respecto a métodos tradicionales."
        ],
        answer: ["El IPD permite resolver algunos de los problemas de contratación de la industria mediante un enfoque colaborativo que alinea los incentivos de propietario, diseñador y contratista."],
        rationale: "La Tarea 4 del Dominio I menciona explícitamente el Lean Integrated Project Delivery y el IFOA (Integrated Form of Agreement) como mecanismos para resolver problemas de contratación de la industria. El IPD alinea los incentivos de todas las partes: ganan juntos o pierden juntos, lo que reduce reclamaciones y fomenta la resolución colaborativa de problemas.",
        tags: {
            format:    "opción_única",
            domain:    "gestión_de_contratos",
            method:    "híbrido",
            cognitive: "conocimiento"
        }
    },
    {
        question: "Durante la ejecución de un contrato de construcción de subestación, el profesional identifica que los arreglos contractuales entre el propietario, el contratista general y tres subcontratistas especializados están generando brechas de comunicación. ¿Qué debe reconocer el profesional respecto a esta situación?",
        options: [
            "Las brechas de comunicación son inevitables en proyectos complejos y deben aceptarse como riesgo residual.",
            "Esta es una señal de que el contrato debe renegociarse completamente.",
            "Los arreglos contractuales en proyectos de capital tienen el potencial de generar brechas de comunicación, y el profesional debe implementar mecanismos para identificarlas y resolverlas.",
            "El problema es de gestión operativa del contratista general y no corresponde al profesional de construcción del propietario."
        ],
        answer: ["Los arreglos contractuales en proyectos de capital tienen el potencial de generar brechas de comunicación, y el profesional debe implementar mecanismos para identificarlas y resolverlas."],
        rationale: "La Tarea 4 del Dominio I establece que el profesional debe reconocer el potencial de brechas de comunicación causadas por los arreglos contractuales en proyectos de capital. Las estructuras contractuales complejas (propietario-contratista general-subcontratistas) crean interfaces donde la información puede perderse o distorsionarse. Reconocer este riesgo es el primer paso para gestionarlo.",
        tags: {
            format:    "opción_única",
            domain:    "gestión_de_contratos",
            method:    "predictivo",
            cognitive: "análisis"
        }
    },
    {
        question: "¿Cuáles de los siguientes son aspectos que el profesional de construcción debe supervisar durante el ciclo de vida completo del contrato según el ECO PMI-CP? (Selecciona todos los que apliquen)",
        options: [
            "Desde el proceso de descubrimiento hasta el cierre del contrato.",
            "La distribución adecuada de riesgos entre las partes contractuales.",
            "Los salarios individuales de los trabajadores del contratista.",
            "Las cláusulas importantes presentes en los contratos del entorno de la construcción.",
            "El método de entrega y la estructura contractual que mejor se ajusten a las necesidades del proyecto."
        ],
        answer: [
            "Desde el proceso de descubrimiento hasta el cierre del contrato.",
            "La distribución adecuada de riesgos entre las partes contractuales.",
            "Las cláusulas importantes presentes en los contratos del entorno de la construcción.",
            "El método de entrega y la estructura contractual que mejor se ajusten a las necesidades del proyecto."
        ],
        rationale: "La Tarea 4 del Dominio I establece supervisar el ciclo de vida completo desde el descubrimiento hasta el cierre, utilizar cláusulas importantes, asesorar sobre el método de entrega y estructura contractual, y gestionar la distribución de riesgos. Los salarios de trabajadores del contratista son una responsabilidad operativa de este, no del profesional de construcción del propietario.",
        tags: {
            format:    "opción_múltiple",
            domain:    "gestión_de_contratos",
            method:    "predictivo",
            cognitive: "conocimiento"
        }
    },
    {
        question: "Un profesional de construcción asesora al comité directivo de una organización sobre la selección del método de entrega para un proyecto de planta industrial. El comité tiene poca experiencia técnica en construcción. ¿Cuál es la responsabilidad principal del profesional en este contexto?",
        options: [
            "Decidir unilateralmente el método de entrega para agilizar el proceso.",
            "Presentar solo el método de entrega que el profesional considera óptimo para evitar confusión.",
            "Asesorar a los interesados senior sobre el método de entrega y estructura contractual que mejor se ajuste a las necesidades del proyecto, explicando la distribución de riesgos y responsabilidades de cada opción.",
            "Contratar a un consultor externo para que asesore al comité directivo."
        ],
        answer: ["Asesorar a los interesados senior sobre el método de entrega y estructura contractual que mejor se ajuste a las necesidades del proyecto, explicando la distribución de riesgos y responsabilidades de cada opción."],
        rationale: "La Tarea 4 del Dominio I establece que el profesional debe informar a los interesados principales sobre el método de entrega y la estructura del contrato que mejor se ajuste al proyecto, y aplicar su conocimiento para apoyar a los líderes senior durante todo el ciclo de vida del contrato. El rol del profesional es asesor experto, no tomador de decisiones unilateral.",
        tags: {
            format:    "opción_única",
            domain:    "gestión_de_contratos",
            method:    "predictivo",
            cognitive: "aplicación"
        }
    },

    // --- Tarea 5: Implementar el proceso de gestión de interfaces ---

    {
        question: "En un megaproyecto de construcción de infraestructura eléctrica con múltiples paquetes de trabajo contratados independientemente, ¿cuál es la primera acción que debe tomar el profesional de construcción para implementar la gestión de interfaces?",
        options: [
            "Contratar a un consultor externo especializado en gestión de interfaces para que maneje el proceso.",
            "Establecer y planificar todos los puntos de interfaz (IP) entre los diferentes paquetes de trabajo.",
            "Esperar a que surjan problemas de interfaz durante la construcción para abordarlos reactivamente.",
            "Incluir en todos los contratos una cláusula que haga a cada contratista responsable de sus propias interfaces."
        ],
        answer: ["Establecer y planificar todos los puntos de interfaz (IP) entre los diferentes paquetes de trabajo."],
        rationale: "La Tarea 5 del Dominio I establece que el primer paso es establecer y planificar todos los puntos de interfaz entre los diferentes paquetes. En megaproyectos de construcción, las interfaces no gestionadas entre paquetes (civil, eléctrico, mecánico, instrumentación) son una de las principales causas de retrasos y reclamaciones. La gestión proactiva desde el inicio es fundamental.",
        tags: {
            format:    "opción_única",
            domain:    "gestión_de_contratos",
            method:    "predictivo",
            cognitive: "aplicación"
        }
    },
    {
        question: "El profesional de construcción de un megaproyecto necesita implementar un plan de gestión de interfaces. ¿Cuáles de las siguientes habilidades son necesarias para liderar efectivamente este plan según el ECO PMI-CP? (Selecciona todas las que apliquen)",
        options: [
            "Habilidades sólidas de comunicación.",
            "Conocimiento avanzado de software de modelado estructural.",
            "Gestión de relaciones entre múltiples partes.",
            "Habilidades de negociación.",
            "Dominio del lenguaje, definiciones y elementos comunes de la gestión de interfaces."
        ],
        answer: [
            "Habilidades sólidas de comunicación.",
            "Gestión de relaciones entre múltiples partes.",
            "Habilidades de negociación.",
            "Dominio del lenguaje, definiciones y elementos comunes de la gestión de interfaces."
        ],
        rationale: "La Tarea 5 del Dominio I especifica las habilidades necesarias para liderar un plan de gestión de interfaces: comunicación, gestión de relaciones, negociación y el dominio del lenguaje común de gestión de interfaces. El conocimiento de software estructural es una habilidad técnica de diseño, no una habilidad de gestión de interfaces.",
        tags: {
            format:    "opción_múltiple",
            domain:    "gestión_de_contratos",
            method:    "predictivo",
            cognitive: "conocimiento"
        }
    },
    {
        question: "En un megaproyecto de transmisión eléctrica, el profesional de construcción debe clasificar los tipos de interfaces presentes. ¿Cuál de los siguientes es un ejemplo de una interfaz física entre paquetes?",
        options: [
            "La diferencia de zonas horarias entre los equipos de diseño en distintos países.",
            "El punto de conexión entre la cimentación civil (Paquete A) y la estructura metálica de la torre (Paquete B), donde ambos contratistas deben coordinar tolerancias y secuencia de trabajo.",
            "El procedimiento de aprobación de facturas entre el propietario y el contratista.",
            "La diferencia en los sistemas de gestión de calidad de dos subcontratistas."
        ],
        answer: ["El punto de conexión entre la cimentación civil (Paquete A) y la estructura metálica de la torre (Paquete B), donde ambos contratistas deben coordinar tolerancias y secuencia de trabajo."],
        rationale: "La Tarea 5 del Dominio I incluye clasificar los diferentes tipos de interfaces en megaproyectos. Una interfaz física es el punto de conexión tangible entre dos paquetes de trabajo donde existe dependencia técnica y de secuencia. Las diferencias de zonas horarias, procedimientos de facturación y sistemas de calidad son interfaces organizacionales o de proceso, no físicas.",
        tags: {
            format:    "opción_única",
            domain:    "gestión_de_contratos",
            method:    "predictivo",
            cognitive: "análisis"
        }
    },
    {
        question: "Ordena los pasos para implementar la gestión de interfaces en un megaproyecto de construcción según el ECO PMI-CP:",
        options: [
            "Monitorear los puntos de interfaz durante la ejecución del proyecto",
            "Clasificar los tipos de interfaces del megaproyecto",
            "Establecer y planificar todos los puntos de interfaz entre paquetes",
            "Diseñar y aplicar prácticas efectivas de gestión de interfaces",
            "Reconocer y seleccionar los marcos y sistemas líderes de la industria para implementar la gestión de interfaces"
        ],
        answer: [
            "Establecer y planificar todos los puntos de interfaz entre paquetes",
            "Clasificar los tipos de interfaces del megaproyecto",
            "Reconocer y seleccionar los marcos y sistemas líderes de la industria para implementar la gestión de interfaces",
            "Diseñar y aplicar prácticas efectivas de gestión de interfaces",
            "Monitorear los puntos de interfaz durante la ejecución del proyecto"
        ],
        rationale: "La Tarea 5 del Dominio I sigue esta lógica: primero se establecen y planifican los puntos de interfaz, luego se clasifican, se seleccionan los marcos de la industria, se diseñan las prácticas específicas y finalmente se monitorea durante la ejecución. Identificar antes de clasificar, y planificar antes de ejecutar, son principios fundamentales de la gestión de interfaces.",
        tags: {
            format:    "ordenamiento",
            domain:    "gestión_de_contratos",
            method:    "predictivo",
            cognitive: "conocimiento"
        }
    },
    {
        question: "En un proyecto de construcción de una subestación con enfoque híbrido, el equipo de diseño trabaja con metodología ágil mientras los contratistas de construcción operan con enfoque predictivo. ¿Cómo impacta esta diferencia en la gestión de interfaces?",
        options: [
            "La diferencia metodológica no afecta la gestión de interfaces ya que los puntos de interfaz son siempre físicos.",
            "Genera un tipo de interfaz organizacional-metodológica: las entregas de diseño en ciclos iterativos deben coordinarse con los cronogramas fijos de construcción, requiriendo puntos de interfaz bien definidos y protocolos de congelamiento de diseño.",
            "El equipo ágil debe adoptar metodología predictiva para eliminar la interfaz metodológica.",
            "El equipo predictivo debe adoptar metodología ágil para adaptarse a los cambios de diseño."
        ],
        answer: ["Genera un tipo de interfaz organizacional-metodológica: las entregas de diseño en ciclos iterativos deben coordinarse con los cronogramas fijos de construcción, requiriendo puntos de interfaz bien definidos y protocolos de congelamiento de diseño."],
        rationale: "En proyectos híbridos, las interfaces entre metodologías son una fuente de riesgo específica. El diseño ágil puede generar cambios en iteraciones posteriores que afecten el trabajo ya contratado o iniciado. El profesional de construcción debe establecer puntos de congelamiento de diseño como interfaces formales entre el equipo ágil y los contratos de construcción predictivos.",
        tags: {
            format:    "opción_única",
            domain:    "gestión_de_contratos",
            method:    "híbrido",
            cognitive: "análisis"
        }
    },
    {
        question: "El profesional de construcción identifica que un punto de interfaz entre el paquete de instrumentación y el paquete eléctrico no fue correctamente definido en los contratos. Como resultado, ningún contratista asumió la responsabilidad del cableado de conexión entre ambos sistemas. ¿Cuál es la consecuencia MÁS probable y la acción correcta?",
        options: [
            "Ignorar el problema hasta que uno de los contratistas lo resuelva voluntariamente.",
            "Esta brecha de interfaz probablemente generará una reclamación de ambos contratistas. El profesional debe identificar y resolver la brecha mediante una orden de cambio a uno de los contratos, documentando la causa raíz para lecciones aprendidas.",
            "Terminar ambos contratos y re-licitar el trabajo de conexión como un paquete independiente.",
            "Asignar la responsabilidad al contratista de menor costo entre los dos."
        ],
        answer: ["Esta brecha de interfaz probablemente generará una reclamación de ambos contratistas. El profesional debe identificar y resolver la brecha mediante una orden de cambio a uno de los contratos, documentando la causa raíz para lecciones aprendidas."],
        rationale: "Las brechas de interfaz no definidas son una causa frecuente de reclamaciones en proyectos de construcción. Cuando ningún contratista tiene la responsabilidad explícita de un entregable, ambos la rechazarán. La Tarea 5 del Dominio I y la Tarea 3 convergen aquí: gestionar la interfaz para prevenir la reclamación, y si ya ocurrió, gestionarla correctamente mediante una orden de cambio documentada.",
        tags: {
            format:    "opción_única",
            domain:    "gestión_de_contratos",
            method:    "predictivo",
            cognitive: "análisis"
        }
    },
    {
        question: "Un profesional de construcción implementa un sistema de gestión de interfaces basado en un marco de la industria reconocido. ¿Cuál es el beneficio principal de utilizar el lenguaje común y las definiciones estándar de gestión de interfaces en un megaproyecto?",
        options: [
            "Permite cobrar honorarios más altos al propietario por el uso de metodologías certificadas.",
            "Garantiza que todas las partes (propietario, contratistas, subcontratistas) interpreten los puntos de interfaz de manera consistente, reduciendo malentendidos y disputas.",
            "Elimina la necesidad de reuniones de coordinación entre los diferentes equipos de proyecto.",
            "Permite que los contratistas gestionen sus interfaces de manera independiente sin supervisión del propietario."
        ],
        answer: ["Garantiza que todas las partes (propietario, contratistas, subcontratistas) interpreten los puntos de interfaz de manera consistente, reduciendo malentendidos y disputas."],
        rationale: "La Tarea 5 del Dominio I establece utilizar el lenguaje común, las definiciones y los elementos de la gestión de interfaces. En megaproyectos con múltiples contratistas de diferentes países y culturas, la consistencia en el lenguaje es crítica. Cuando todos entienden lo mismo por 'punto de interfaz', 'documento de interfaz' y 'congelamiento de diseño', se reducen drásticamente los malentendidos y las disputas contractuales.",
        tags: {
            format:    "opción_única",
            domain:    "gestión_de_contratos",
            method:    "predictivo",
            cognitive: "aplicación"
        }
    },

    // ─────────────────────────────────────────────────────────────────────────
    // DOMINIO II: PARTICIPACIÓN DE LOS INTERESADOS (18 preguntas)
    // ─────────────────────────────────────────────────────────────────────────

    // --- Tarea 1: Utilizar herramientas de comunicación apropiadas ---

    {
        question: "El equipo de un proyecto de construcción de infraestructura necesita mejorar la toma de decisiones y la comunicación entre múltiples equipos distribuidos geográficamente. ¿Qué herramienta del ECO PMI-CP está específicamente diseñada para mejorar la comunicación y las decisiones del proyecto?",
        options: [
            "El registro de riesgos actualizado semanalmente.",
            "El Sistema de Información para la Gestión de Proyectos (PMIS) como plataforma central de comunicación.",
            "El diagrama de Gantt compartido entre los equipos.",
            "El análisis de valor ganado (EVM) como indicador de comunicación."
        ],
        answer: ["El Sistema de Información para la Gestión de Proyectos (PMIS) como plataforma central de comunicación."],
        rationale: "La Tarea 1 del Dominio II establece utilizar el PMIS para mejorar la comunicación y las decisiones del proyecto, e incorporar una plataforma central de comunicación. En proyectos de construcción de infraestructura con equipos distribuidos, el PMIS centraliza la información, elimina versiones múltiples de documentos y asegura que todos los interesados trabajen con la misma información actualizada.",
        tags: {
            format:    "opción_única",
            domain:    "participación_de_interesados",
            method:    "predictivo",
            cognitive: "conocimiento"
        }
    },
    {
        question: "En un proyecto de construcción de planta industrial, el director de proyecto propone implementar una sala Obeya (Big Room) para mejorar las actividades del programa. ¿Cuál es el propósito principal de esta herramienta según el ECO PMI-CP?",
        options: [
            "Crear un espacio físico o virtual donde los líderes clave del proyecto se reúnen regularmente para visualizar el estado del proyecto, tomar decisiones colaborativas y mejorar la coordinación.",
            "Almacenar toda la documentación técnica del proyecto en un único repositorio.",
            "Reemplazar las reuniones de seguimiento semanales con informes automatizados.",
            "Facilitar la gestión de reclamaciones mediante la visualización de las disputas activas."
        ],
        answer: ["Crear un espacio físico o virtual donde los líderes clave del proyecto se reúnen regularmente para visualizar el estado del proyecto, tomar decisiones colaborativas y mejorar la coordinación."],
        rationale: "La Tarea 1 del Dominio II menciona la Obeya/Big Room como herramienta para mejorar las actividades del programa. Proveniente de la metodología Lean/Toyota, la sala Obeya reúne a los tomadores de decisiones clave en un espacio común (físico o virtual) con visualización en tiempo real del estado del proyecto, lo que acelera la toma de decisiones y mejora la comunicación interfuncional.",
        tags: {
            format:    "opción_única",
            domain:    "participación_de_interesados",
            method:    "híbrido",
            cognitive: "conocimiento"
        }
    },
    {
        question: "El líder de un proyecto de construcción nota que su equipo usa la sala Obeya pero los resultados no han mejorado: las reuniones son largas, los indicadores no se actualizan y los problemas se discuten sin llegar a decisiones. ¿Cuál es el pitfall (error común) de Obeya que está experimentando el equipo?",
        options: [
            "La sala Obeya no es compatible con proyectos de construcción de infraestructura.",
            "El equipo está usando la sala como un espacio de reunión tradicional en lugar de aplicar correctamente sus principios: visualización actualizada, discusiones breves orientadas a decisiones y responsabilidad clara de cada indicador.",
            "La sala Obeya requiere software especializado que el equipo no tiene instalado.",
            "La sala Obeya solo funciona cuando todo el equipo está físicamente presente en la misma ubicación."
        ],
        answer: ["El equipo está usando la sala como un espacio de reunión tradicional en lugar de aplicar correctamente sus principios: visualización actualizada, discusiones breves orientadas a decisiones y responsabilidad clara de cada indicador."],
        rationale: "La Tarea 1 del Dominio II establece reconocer los errores comunes (pitfalls) de Obeya/Big Room. El error más frecuente es usar el espacio físico sin aplicar los principios Lean subyacentes: la visualización debe ser actualizada en tiempo real, las reuniones deben ser breves y orientadas a decisiones, y cada indicador debe tener un responsable claro. Sin estos principios, la Obeya se convierte en una reunión tradicional más costosa.",
        tags: {
            format:    "opción_única",
            domain:    "participación_de_interesados",
            method:    "ágil",
            cognitive: "análisis"
        }
    },
    {
        question: "El gerente de un proyecto de construcción quiere mejorar los compromisos de entrega entre los equipos. Decide implementar la Administración Basada en Compromisos (Commitment-based Management, CbM). ¿Cuál es el principio central de esta herramienta?",
        options: [
            "Establecer penalizaciones contractuales por incumplimiento de cada entregable del cronograma.",
            "Basar la coordinación del trabajo en compromisos explícitos y verificables entre los miembros del equipo, donde cada compromiso tiene un responsable, una fecha y condiciones de satisfacción claras.",
            "Usar software de gestión de proyectos para rastrear automáticamente el cumplimiento de entregas.",
            "Centralizar todas las decisiones de coordinación en el director del proyecto para garantizar el cumplimiento."
        ],
        answer: ["Basar la coordinación del trabajo en compromisos explícitos y verificables entre los miembros del equipo, donde cada compromiso tiene un responsable, una fecha y condiciones de satisfacción claras."],
        rationale: "La Tarea 1 del Dominio II menciona la CbM como herramienta para lograr resultados efectivos en equipos y proyectos. La CbM reemplaza las instrucciones unilaterales por compromisos bilaterales: el solicitante y el ejecutor acuerdan explícitamente qué se entregará, cuándo y bajo qué condiciones. Esto mejora la confiabilidad de los compromisos y la rendición de cuentas.",
        tags: {
            format:    "opción_única",
            domain:    "participación_de_interesados",
            method:    "híbrido",
            cognitive: "conocimiento"
        }
    },

    // --- Tarea 2: Prevenir problemas de comunicación ---

    {
        question: "Al inicio de un proyecto de construcción de subestación con 12 interesados de distintos niveles organizacionales, el profesional de construcción desarrolla una estrategia de comunicación. ¿Cuáles de los siguientes elementos son esenciales en esta estrategia según el ECO PMI-CP? (Selecciona todos los que apliquen)",
        options: [
            "Identificar y satisfacer todas las necesidades de comunicación del proyecto.",
            "Aplicar enfoques para aumentar la participación de los interesados y la alineación desde el inicio.",
            "Eliminar a los interesados que no participan activamente en las reuniones.",
            "Crear mensajes que mejoren la comprensión para audiencias específicas.",
            "Prevenir los efectos de una mala comunicación desde perspectivas financieras y de cierre del proyecto."
        ],
        answer: [
            "Identificar y satisfacer todas las necesidades de comunicación del proyecto.",
            "Aplicar enfoques para aumentar la participación de los interesados y la alineación desde el inicio.",
            "Crear mensajes que mejoren la comprensión para audiencias específicas.",
            "Prevenir los efectos de una mala comunicación desde perspectivas financieras y de cierre del proyecto."
        ],
        rationale: "La Tarea 2 del Dominio II establece que la estrategia de comunicación debe identificar y satisfacer las necesidades de comunicación, aumentar la participación desde el inicio, crear mensajes para audiencias específicas y prevenir los efectos de la mala comunicación. Eliminar interesados pasivos es contraproducente: a menudo los interesados silenciosos tienen poder de bloqueo y deben ser gestionados, no ignorados.",
        tags: {
            format:    "opción_múltiple",
            domain:    "participación_de_interesados",
            method:    "predictivo",
            cognitive: "conocimiento"
        }
    },
    {
        question: "Un proyecto de construcción de infraestructura ha experimentado sobrecostos recurrentes en proyectos anteriores debido a malentendidos entre el propietario y los contratistas sobre el alcance de los entregables. ¿Cuál es el impacto principal de la mala comunicación en proyectos de capital que el profesional debe prevenir?",
        options: [
            "La mala comunicación solo afecta el clima laboral del equipo, sin impacto financiero directo.",
            "La mala comunicación en proyectos de capital tiene impactos financieros significativos (reclamaciones, sobrecostos, re-trabajos) y puede afectar el cierre exitoso del proyecto.",
            "La mala comunicación es un problema de recursos humanos que debe resolver el departamento de personal.",
            "El impacto de la mala comunicación se limita a retrasos menores en el cronograma."
        ],
        answer: ["La mala comunicación en proyectos de capital tiene impactos financieros significativos (reclamaciones, sobrecostos, re-trabajos) y puede afectar el cierre exitoso del proyecto."],
        rationale: "La Tarea 2 del Dominio II establece prevenir los efectos de la mala comunicación en proyectos de capital desde perspectivas financieras y de cierre. En la industria de la construcción, estudios estiman que entre el 25% y el 50% de los sobrecostos en proyectos de capital están relacionados con problemas de comunicación: alcance mal entendido, instrucciones ambiguas, falta de documentación de decisiones.",
        tags: {
            format:    "opción_única",
            domain:    "participación_de_interesados",
            method:    "predictivo",
            cognitive: "análisis"
        }
    },

    // --- Tarea 3: Mitigar problemas de comunicación ---

    {
        question: "Durante la construcción de una línea de transmisión, el profesional identifica una brecha de comunicación: los informes de avance del contratista no están siendo comprendidos por el equipo de finanzas del propietario, lo que retrasa las aprobaciones de pago. ¿Cuál es la acción MÁS adecuada?",
        options: [
            "Reemplazar al responsable de elaborar los informes del contratista.",
            "Implementar un ciclo de retroalimentación con el equipo de finanzas para identificar qué información necesitan y en qué formato, y ajustar el protocolo de informes para resolver la brecha.",
            "Eliminar los informes de avance y reemplazarlos por reuniones presenciales semanales.",
            "Escalar el problema al patrocinador del proyecto para que instruya al equipo de finanzas."
        ],
        answer: ["Implementar un ciclo de retroalimentación con el equipo de finanzas para identificar qué información necesitan y en qué formato, y ajustar el protocolo de informes para resolver la brecha."],
        rationale: "La Tarea 3 del Dominio II establece implementar ciclos de retroalimentación para identificar brechas y presentar cambios para resolverlas. El ciclo de retroalimentación es el mecanismo correcto: diagnostica la brecha específica (¿qué no se entiende? ¿qué formato necesitan?), genera un plan de acción y verifica que la solución funcione. Escalar o reemplazar personas no resuelve el problema sistémico.",
        tags: {
            format:    "opción_única",
            domain:    "participación_de_interesados",
            method:    "predictivo",
            cognitive: "aplicación"
        }
    },
    {
        question: "El profesional de construcción identifica que un grupo de interesados comunitarios se opone a la instalación de torres de transmisión cerca de su localidad. Esta resistencia está retrasando los permisos ambientales. ¿Cuál es el enfoque MÁS adecuado para superar esta resistencia según el ECO PMI-CP?",
        options: [
            "Continuar el proceso de permisos ignorando la oposición comunitaria y confiando en el marco legal.",
            "Aplicar enfoques para superar la resistencia y asegurar el apoyo mediante comunicación de alto impacto, desarrollando mensajes adaptados a las preocupaciones específicas de la comunidad.",
            "Ofrecer compensación económica directa a los líderes comunitarios para obtener su apoyo.",
            "Solicitar a las autoridades competentes que intervengan para obligar a la comunidad a aceptar el proyecto."
        ],
        answer: ["Aplicar enfoques para superar la resistencia y asegurar el apoyo mediante comunicación de alto impacto, desarrollando mensajes adaptados a las preocupaciones específicas de la comunidad."],
        rationale: "La Tarea 3 del Dominio II establece aplicar enfoques para superar la resistencia y asegurar el apoyo a través de comunicación de alto impacto. La resistencia comunitaria generalmente surge de preocupaciones legítimas (salud, medio ambiente, impacto visual). La comunicación de alto impacto implica escuchar activamente, responder a las preocupaciones específicas con información relevante y construir confianza gradualmente.",
        tags: {
            format:    "opción_única",
            domain:    "participación_de_interesados",
            method:    "predictivo",
            cognitive: "aplicación"
        }
    },

    // --- Tarea 4: Gestionar eficazmente a los interesados ---

    {
        question: "Al inicio de un proyecto de construcción de subestación en una región multicultural, el profesional de construcción nota que sus mensajes de comunicación no generan el nivel de participación esperado de los interesados locales. ¿Qué factor debe reconocer el profesional como determinante?",
        options: [
            "La frecuencia de comunicación es insuficiente y debe incrementarse.",
            "El presupuesto de comunicación del proyecto es demasiado bajo.",
            "La cultura tiene un impacto significativo en cómo los interesados perciben y responden a la comunicación; el profesional debe adaptar su enfoque al contexto cultural específico.",
            "Los interesados locales no tienen la capacidad técnica para entender los mensajes del proyecto."
        ],
        answer: ["La cultura tiene un impacto significativo en cómo los interesados perciben y responden a la comunicación; el profesional debe adaptar su enfoque al contexto cultural específico."],
        rationale: "La Tarea 4 del Dominio II establece reconocer el rol de la cultura y su impacto en la comunicación con los interesados. En proyectos de infraestructura global, las diferencias culturales en estilos de comunicación (directa vs. indirecta), jerarquía, toma de decisiones colectiva vs. individual y relación con el tiempo afectan directamente cómo los interesados reciben y procesan la información.",
        tags: {
            format:    "opción_única",
            domain:    "participación_de_interesados",
            method:    "predictivo",
            cognitive: "análisis"
        }
    },
    {
        question: "Ordena los pasos para gestionar eficazmente a los interesados en un proyecto de construcción de infraestructura según el ECO PMI-CP:",
        options: [
            "Adaptar los mensajes de comunicación a las necesidades y características de cada interesado",
            "Identificar y evaluar a los interesados del proyecto",
            "Monitorear la participación de los interesados y ajustar la estrategia según sea necesario",
            "Desarrollar una estrategia de comunicación efectiva basada en el análisis de interesados",
            "Implementar la estrategia de comunicación y documentar los resultados"
        ],
        answer: [
            "Identificar y evaluar a los interesados del proyecto",
            "Desarrollar una estrategia de comunicación efectiva basada en el análisis de interesados",
            "Adaptar los mensajes de comunicación a las necesidades y características de cada interesado",
            "Implementar la estrategia de comunicación y documentar los resultados",
            "Monitorear la participación de los interesados y ajustar la estrategia según sea necesario"
        ],
        rationale: "La Tarea 4 del Dominio II establece identificar y evaluar a los interesados para establecer una estrategia de comunicación efectiva. La secuencia lógica es: identificar → analizar → diseñar mensajes adaptados → implementar → monitorear y ajustar. No se puede diseñar una estrategia efectiva sin entender quiénes son los interesados y qué necesitan.",
        tags: {
            format:    "ordenamiento",
            domain:    "participación_de_interesados",
            method:    "predictivo",
            cognitive: "conocimiento"
        }
    },
    {
        question: "En un proyecto de construcción de planta industrial con un equipo distribuido en tres países, el profesional detecta que las decisiones técnicas tomadas en reuniones virtuales frecuentemente no se implementan correctamente porque los participantes remotos no se sienten involucrados. ¿Cuál es la acción MÁS efectiva?",
        options: [
            "Centralizar todas las decisiones en la sede principal del proyecto para eliminar la ambigüedad.",
            "Aplicar métodos de comunicación matizados que involucren a múltiples partes en un nivel más profundo, considerando las diferencias de zona horaria, idioma y contexto cultural.",
            "Reducir el número de participantes en las reuniones para agilizar la toma de decisiones.",
            "Documentar todas las decisiones en actas escritas y enviarlas por correo electrónico para que todos los equipos las reciban."
        ],
        answer: ["Aplicar métodos de comunicación matizados que involucren a múltiples partes en un nivel más profundo, considerando las diferencias de zona horaria, idioma y contexto cultural."],
        rationale: "La Tarea 2 del Dominio II establece utilizar métodos de comunicación matizados para involucrar a múltiples partes en un nivel más profundo. La participación pasiva en reuniones virtuales es una brecha de comunicación frecuente en equipos distribuidos. Las soluciones incluyen rotación de horarios para las reuniones, facilitación activa que involucre a los remotos, y canales asíncronos que complementen las reuniones sincrónicas.",
        tags: {
            format:    "opción_única",
            domain:    "participación_de_interesados",
            method:    "híbrido",
            cognitive: "aplicación"
        }
    },

    // ─────────────────────────────────────────────────────────────────────────
    // DOMINIO III: GESTIÓN DE ESTRATEGIAS Y ALCANCE (9 preguntas)
    // ─────────────────────────────────────────────────────────────────────────

    // --- Tarea 1: Gestionar el alcance con enfoque en resultados ---

    {
        question: "El propietario de un proyecto de construcción de subestación pide al profesional agregar nuevas especificaciones de equipos que no estaban en el alcance original. El profesional reconoce que estos cambios podrían lograr un mejor resultado operacional, pero alterarán el costo y el cronograma. ¿Cuál es el enfoque MÁS adecuado?",
        options: [
            "Rechazar todos los cambios para proteger el cronograma y el presupuesto aprobados.",
            "Implementar las revisiones de alcance necesarias para lograr un alcance preciso y maduro que se alinee con los resultados del proyecto, evaluando el impacto en costo y cronograma.",
            "Aceptar los cambios verbalmente sin documentarlos para mantener la agilidad del proyecto.",
            "Implementar los cambios inmediatamente sin análisis adicional ya que el propietario tiene autoridad para solicitarlos."
        ],
        answer: ["Implementar las revisiones de alcance necesarias para lograr un alcance preciso y maduro que se alinee con los resultados del proyecto, evaluando el impacto en costo y cronograma."],
        rationale: "La Tarea 1 del Dominio III establece implementar revisiones de alcance para lograr un alcance preciso y maduro, impulsando el proyecto por sus resultados o misiones. Un alcance maduro es uno que refleja fielmente lo que el proyecto debe lograr. Las revisiones de alcance son válidas si se gestionan correctamente: evaluando impacto, documentando y aprobando formalmente.",
        tags: {
            format:    "opción_única",
            domain:    "gestión_de_estrategias_y_alcance",
            method:    "predictivo",
            cognitive: "aplicación"
        }
    },
    {
        question: "El equipo de un proyecto de construcción está orientando sus decisiones de alcance exclusivamente a cumplir los entregables contractuales sin considerar si estos lograrán el resultado operacional esperado por el propietario. ¿Cuál es el riesgo principal de este enfoque?",
        options: [
            "El proyecto podría terminar dentro del presupuesto pero sin generar el valor operacional para el que fue concebido.",
            "El enfoque en entregables contractuales siempre garantiza el éxito del proyecto.",
            "El riesgo principal es que el contratista reclame bonificaciones por cumplimiento.",
            "No hay riesgo si todos los entregables contractuales se completan según especificaciones."
        ],
        answer: ["El proyecto podría terminar dentro del presupuesto pero sin generar el valor operacional para el que fue concebido."],
        rationale: "La Tarea 1 del Dominio III establece definir el alcance e impulsar los proyectos centrándose en los resultados o misiones del proyecto. Esta es una distinción crítica en construcción: completar los entregables no es lo mismo que lograr los resultados. Un proyecto puede instalar todos los equipos especificados pero si estos no permiten operar la instalación según el diseño previsto, el proyecto ha fallado en su propósito.",
        tags: {
            format:    "opción_única",
            domain:    "gestión_de_estrategias_y_alcance",
            method:    "predictivo",
            cognitive: "análisis"
        }
    },

    // --- Tarea 2: Implementar y gestionar el proceso de órdenes de cambio ---

    {
        question: "Un contratista presenta una solicitud de orden de cambio por trabajos adicionales de cimentación descubiertos durante la excavación. El proceso de aprobación toma 45 días, bloqueando el avance de la construcción. ¿Cuál es la causa raíz de este problema y la solución según el ECO PMI-CP?",
        options: [
            "El contratista debería haber previsto estos trabajos en su cotización original.",
            "El proceso de órdenes de cambio es demasiado burocrático y debe eliminarse.",
            "El proceso de órdenes de cambio no fue diseñado de manera robusta ni finalizado en la parte adecuada del ciclo de vida del proyecto. Se necesita un proceso ágil para gestionar órdenes de cambio de manera eficiente y rápida.",
            "El problema es exclusivamente del propietario, que no tiene suficiente personal para aprobar cambios."
        ],
        answer: ["El proceso de órdenes de cambio no fue diseñado de manera robusta ni finalizado en la parte adecuada del ciclo de vida del proyecto. Se necesita un proceso ágil para gestionar órdenes de cambio de manera eficiente y rápida."],
        rationale: "La Tarea 2 del Dominio III establece crear un proceso sólido de órdenes de cambio, finalizar el proceso en la parte adecuada del ciclo de vida, y diseñar procesos ágiles para gestionar las órdenes de cambio de manera eficiente y rápida. Un proceso que tarda 45 días en aprobar cambios en un proyecto de construcción activo es una falla de diseño del proceso, no solo un problema de burocracia.",
        tags: {
            format:    "opción_única",
            domain:    "gestión_de_estrategias_y_alcance",
            method:    "predictivo",
            cognitive: "análisis"
        }
    },
    {
        question: "¿Cuáles de los siguientes son principios para implementar y gestionar el proceso de órdenes de cambio según el ECO PMI-CP? (Selecciona todos los que apliquen)",
        options: [
            "Crear un proceso sólido y predefinido para gestionar órdenes de cambio.",
            "Evaluar todos los cambios de alcance en relación con los resultados principales del proyecto.",
            "Aprobar automáticamente todos los cambios solicitados por el propietario sin análisis.",
            "Diseñar procesos ágiles para gestionar órdenes de cambio de manera eficiente.",
            "Finalizar el proceso de cambios en la parte del ciclo de vida del proyecto que corresponda."
        ],
        answer: [
            "Crear un proceso sólido y predefinido para gestionar órdenes de cambio.",
            "Evaluar todos los cambios de alcance en relación con los resultados principales del proyecto.",
            "Diseñar procesos ágiles para gestionar órdenes de cambio de manera eficiente.",
            "Finalizar el proceso de cambios en la parte del ciclo de vida del proyecto que corresponda."
        ],
        rationale: "La Tarea 2 del Dominio III establece estos cuatro principios. Aprobar automáticamente todos los cambios sin análisis es una práctica incorrecta que lleva al scope creep y al descontrol financiero. Cada cambio debe evaluarse contra los resultados del proyecto para determinar si agrega valor real antes de aprobarse.",
        tags: {
            format:    "opción_múltiple",
            domain:    "gestión_de_estrategias_y_alcance",
            method:    "predictivo",
            cognitive: "conocimiento"
        }
    },
    {
        question: "En un proyecto de construcción de planta industrial, el equipo evalúa usar una plataforma digital para gestionar las órdenes de cambio. El director de proyecto pregunta sobre los beneficios y riesgos de este enfoque. ¿Cuál es la respuesta MÁS balanceada según el ECO PMI-CP?",
        options: [
            "La tecnología siempre mejora la gestión de órdenes de cambio sin ningún inconveniente.",
            "La tecnología no es adecuada para gestionar órdenes de cambio en proyectos de construcción.",
            "La tecnología puede agilizar el proceso y mejorar la trazabilidad, pero también puede generar dependencia de la herramienta, requerir capacitación y potencialmente burocratizar el proceso si no se implementa correctamente.",
            "La decisión de usar tecnología debe tomarla el contratista, no el propietario."
        ],
        answer: ["La tecnología puede agilizar el proceso y mejorar la trazabilidad, pero también puede generar dependencia de la herramienta, requerir capacitación y potencialmente burocratizar el proceso si no se implementa correctamente."],
        rationale: "La Tarea 2 del Dominio III establece reconocer los beneficios y los inconvenientes de utilizar tecnología para gestionar el alcance y las órdenes de cambio. El ECO PMI-CP adopta una posición equilibrada: la tecnología es una herramienta, no una solución automática. Sus beneficios (velocidad, trazabilidad, visibilidad) deben evaluarse contra sus riesgos (dependencia, curva de aprendizaje, rigidez del proceso).",
        tags: {
            format:    "opción_única",
            domain:    "gestión_de_estrategias_y_alcance",
            method:    "híbrido",
            cognitive: "análisis"
        }
    },

    // --- Tarea 3: Desarrollar y aplicar métodos para gestionar el alcance ---

    {
        question: "El equipo de un proyecto de construcción de subestación identifica que el alcance actual incluye elementos de alto costo que no contribuyen directamente al resultado operacional requerido. ¿Qué herramienta de gestión de alcance es MÁS adecuada para analizar y optimizar esta situación?",
        options: [
            "El análisis de la ruta crítica para identificar actividades con mayor impacto en el cronograma.",
            "La ingeniería de valor para identificar funciones innecesarias y reducir costos sin sacrificar el desempeño requerido.",
            "La simulación Monte Carlo para cuantificar el riesgo de los elementos de alto costo.",
            "El diagrama de Gantt para visualizar la secuencia de actividades del alcance."
        ],
        answer: ["La ingeniería de valor para identificar funciones innecesarias y reducir costos sin sacrificar el desempeño requerido."],
        rationale: "La Tarea 3 del Dominio III menciona explícitamente las herramientas de gestión de alcance, incluyendo la ingeniería de valor como medio para gestionar y optimizar el alcance. La ingeniería de valor analiza sistemáticamente las funciones de cada elemento del alcance versus su costo, identificando oportunidades de eliminar o simplificar elementos que no agregan valor al resultado funcional del proyecto.",
        tags: {
            format:    "opción_única",
            domain:    "gestión_de_estrategias_y_alcance",
            method:    "predictivo",
            cognitive: "aplicación"
        }
    },
    {
        question: "Al revisar el alcance de un proyecto de construcción de infraestructura eléctrica, el profesional utiliza herramientas de evaluación de alcance y encuentra brechas: hay entregables requeridos por el cliente final que no están incluidos en los contratos actuales. ¿Cuál es la acción MÁS adecuada?",
        options: [
            "Ignorar las brechas y esperar a que el cliente las identifique durante la recepción del proyecto.",
            "Utilizar las herramientas de evaluación de alcance para identificar las brechas formalmente y gestionarlas mediante el proceso de órdenes de cambio antes de que se conviertan en reclamaciones.",
            "Incluir los entregables faltantes en el alcance de los contratos existentes sin notificar al contratista.",
            "Eliminar los requisitos del cliente que no están en los contratos para simplificar el alcance."
        ],
        answer: ["Utilizar las herramientas de evaluación de alcance para identificar las brechas formalmente y gestionarlas mediante el proceso de órdenes de cambio antes de que se conviertan en reclamaciones."],
        rationale: "La Tarea 3 del Dominio III establece usar herramientas de evaluación de alcance para identificar brechas en el alcance. Las brechas de alcance identificadas tempranamente son oportunidades de gestión proactiva; identificadas tardíamente se convierten en reclamaciones, re-trabajos y costos adicionales. El profesional de construcción debe actuar en cuanto las detecta, usando el proceso formal de cambios.",
        tags: {
            format:    "opción_única",
            domain:    "gestión_de_estrategias_y_alcance",
            method:    "predictivo",
            cognitive: "aplicación"
        }
    },

    // ─────────────────────────────────────────────────────────────────────────
    // DOMINIO IV: GOBERNANZA DEL PROYECTO (3 preguntas)
    // ─────────────────────────────────────────────────────────────────────────

    {
        question: "El propietario de un megaproyecto de transmisión eléctrica necesita implementar un modelo de gobernanza que asegure que las decisiones del proyecto estén alineadas con los objetivos estratégicos de la organización. ¿Cuál es el propósito principal de implementar un modelo de gobernanza en proyectos de construcción según el ECO PMI-CP?",
        options: [
            "Establecer un comité de revisión que apruebe todas las decisiones técnicas del proyecto.",
            "Implementar modelos de gobernanza para impulsar los resultados del proyecto, asegurando que las decisiones se tomen en el nivel adecuado y estén alineadas con los objetivos estratégicos.",
            "Crear una capa burocrática adicional que controle las actividades del contratista general.",
            "Reemplazar al director de proyecto como tomador de decisiones principal."
        ],
        answer: ["Implementar modelos de gobernanza para impulsar los resultados del proyecto, asegurando que las decisiones se tomen en el nivel adecuado y estén alineadas con los objetivos estratégicos."],
        rationale: "La Tarea 1 del Dominio IV establece implementar modelos de gobernanza para impulsar los resultados del proyecto. La gobernanza no es burocracia adicional: es el marco que define quién toma qué decisiones, cómo se escalan los problemas, cómo se rinden cuentas y cómo se asegura que el proyecto siga alineado con la estrategia organizacional a lo largo de su ciclo de vida.",
        tags: {
            format:    "opción_única",
            domain:    "gobernanza_del_proyecto",
            method:    "predictivo",
            cognitive: "conocimiento"
        }
    },
    {
        question: "Un proyecto de construcción de subestación ha tenido cambios frecuentes de alcance sin aprobación formal, lo que ha generado sobrecostos y confusión sobre las responsabilidades. ¿Qué estructura de gobernanza del alcance debe implementar el profesional para resolver este problema?",
        options: [
            "Prohibir todos los cambios de alcance durante la fase de construcción.",
            "Establecer estructuras y prácticas de gobernanza del alcance que definan claramente: quién puede solicitar cambios, quién los evalúa, quién los aprueba y cómo se comunican a los contratistas.",
            "Delegar la gestión del alcance completamente al contratista general.",
            "Reducir el alcance del proyecto para minimizar la posibilidad de cambios."
        ],
        answer: ["Establecer estructuras y prácticas de gobernanza del alcance que definan claramente: quién puede solicitar cambios, quién los evalúa, quién los aprueba y cómo se comunican a los contratistas."],
        rationale: "La Tarea 2 del Dominio IV establece establecer estructuras y prácticas de gobernanza del alcance en proyectos del entorno de la construcción. La gobernanza del alcance requiere un proceso claro: roles definidos para la solicitud, evaluación y aprobación de cambios, criterios de escalamiento y mecanismos de comunicación a los contratistas. Sin esta estructura, el scope creep es inevitable.",
        tags: {
            format:    "opción_única",
            domain:    "gobernanza_del_proyecto",
            method:    "predictivo",
            cognitive: "aplicación"
        }
    },
    {
        question: "El comité directivo de un proyecto de infraestructura eléctrica solicita al profesional de construcción que desarrolle un análisis costo-beneficio para decidir si incorporar una tecnología de automatización en la subestación. ¿A cuál dominio y tarea del ECO PMI-CP corresponde esta actividad?",
        options: [
            "Dominio I, Tarea 3: Gestionar el proceso de reclamaciones.",
            "Dominio II, Tarea 1: Utilizar herramientas de comunicación.",
            "Dominio IV, Tarea 3: Desarrollar y aplicar métodos, herramientas y técnicas para gestionar el alcance del proyecto.",
            "Dominio III, Tarea 1: Gestionar el alcance con enfoque en resultados."
        ],
        answer: ["Dominio IV, Tarea 3: Desarrollar y aplicar métodos, herramientas y técnicas para gestionar el alcance del proyecto."],
        rationale: "El análisis costo-beneficio aparece explícitamente en la Tarea 3 del Dominio IV como herramienta para desarrollar y gestionar el alcance del proyecto desde la perspectiva de gobernanza. Aunque la Tarea 3 del Dominio III también menciona herramientas de alcance, el análisis costo-beneficio para una decisión estratégica presentada al comité directivo corresponde a la dimensión de gobernanza del proyecto (Dominio IV).",
        tags: {
            format:    "opción_única",
            domain:    "gobernanza_del_proyecto",
            method:    "predictivo",
            cognitive: "análisis"
        }
    },

    // ─────────────────────────────────────────────────────────────────────────
    // PREGUNTAS COMPLEMENTARIAS — distribución equilibrada
    // ─────────────────────────────────────────────────────────────────────────

    // --- Gestión de Contratos (8 preguntas adicionales) ---
    {
        question: "Un proyecto de construcción de línea de transmisión está siendo ejecutado bajo un contrato de precio fijo global. A mitad de la construcción, el contratista argumenta que las condiciones geológicas son significativamente diferentes a las descritas en los documentos de licitación, solicitando un ajuste de precio. ¿Cuál es la acción correcta del profesional de construcción del propietario?",
        options: [
            "Rechazar automáticamente la solicitud ya que el contrato es de precio fijo y el contratista asumió todos los riesgos.",
            "Revisar los documentos contractuales para determinar si existe una cláusula de condiciones de sitio diferentes (Differing Site Conditions) que otorgue al contratista derecho a compensación, y evaluar la evidencia presentada.",
            "Aprobar automáticamente el ajuste solicitado para mantener la relación con el contratista.",
            "Terminar el contrato y relicitar el trabajo restante con mejores estudios geotécnicos."
        ],
        answer: ["Revisar los documentos contractuales para determinar si existe una cláusula de condiciones de sitio diferentes (Differing Site Conditions) que otorgue al contratista derecho a compensación, y evaluar la evidencia presentada."],
        rationale: "La Tarea 3 del Dominio I establece distinguir entre órdenes de cambio y reclamaciones, y utilizar el proceso de reclamaciones correctamente. La solicitud del contratista es una reclamación basada en las cláusulas contractuales de condiciones de sitio. El profesional debe evaluar si hay derecho contractual antes de aprobar o rechazar, no asumir ninguna de las dos posiciones extremas.",
        tags: {
            format:    "opción_única",
            domain:    "gestión_de_contratos",
            method:    "predictivo",
            cognitive: "aplicación"
        }
    },
    {
        question: "¿Cuáles de las siguientes técnicas de resolución de disputas pueden aplicarse en proyectos de construcción cuando una reclamación no se resuelve en el primer nivel de negociación directa? (Selecciona todas las que apliquen)",
        options: [
            "Mediación: un tercero neutral facilita el acuerdo entre las partes.",
            "Panel de Resolución de Disputas (DRB): un comité conocedor del proyecto emite recomendaciones o decisiones.",
            "Rescisión automática del contrato por parte del propietario.",
            "Arbitraje: proceso cuasi-judicial ante un árbitro o panel de árbitros.",
            "Litigio ante tribunales competentes como último recurso."
        ],
        answer: [
            "Mediación: un tercero neutral facilita el acuerdo entre las partes.",
            "Panel de Resolución de Disputas (DRB): un comité conocedor del proyecto emite recomendaciones o decisiones.",
            "Arbitraje: proceso cuasi-judicial ante un árbitro o panel de árbitros.",
            "Litigio ante tribunales competentes como último recurso."
        ],
        rationale: "La Tarea 3 del Dominio I establece aplicar las diferentes técnicas de resolución de disputas disponibles. La secuencia típica en contratos de construcción es: negociación directa → mediación → DRB → arbitraje → litigio. La rescisión automática no es una técnica de resolución de disputas, sino una consecuencia contractual por incumplimiento grave.",
        tags: {
            format:    "opción_múltiple",
            domain:    "gestión_de_contratos",
            method:    "predictivo",
            cognitive: "conocimiento"
        }
    },
    {
        question: "En un proyecto de construcción de planta industrial bajo un contrato EPCM (Engineering, Procurement and Construction Management), el contratista EPCM gestiona múltiples subcontratistas especializados en nombre del propietario. ¿Cuál es el riesgo principal de esta estructura contractual que el profesional del propietario debe gestionar?",
        options: [
            "El propietario pierde visibilidad sobre el avance real del proyecto porque el EPCM actúa como intermediario.",
            "La estructura EPCM elimina la posibilidad de reclamaciones de los subcontratistas.",
            "Los contratos EPCM siempre resultan más costosos que los contratos de suma global.",
            "El propietario no puede solicitar cambios de diseño una vez iniciada la construcción."
        ],
        answer: ["El propietario pierde visibilidad sobre el avance real del proyecto porque el EPCM actúa como intermediario."],
        rationale: "La Tarea 4 del Dominio I establece reconocer el potencial de brechas de comunicación causadas por los arreglos contractuales en proyectos de capital. En un contrato EPCM, la capa adicional del contratista gerenciador puede generar brechas de información entre el propietario y los subcontratistas que ejecutan el trabajo. El profesional del propietario debe establecer mecanismos de visibilidad directa para mitigar este riesgo.",
        tags: {
            format:    "opción_única",
            domain:    "gestión_de_contratos",
            method:    "predictivo",
            cognitive: "análisis"
        }
    },
    {
        question: "Un proyecto ágil de diseño de subestación genera versiones de planos en sprints de dos semanas. Los contratistas de construcción necesitan planos congelados con al menos seis semanas de anticipación para planificar su trabajo. ¿Cómo debe el profesional de construcción gestionar esta interfaz entre el proceso ágil de diseño y el proceso predictivo de construcción?",
        options: [
            "Exigir al equipo de diseño que adopte metodología predictiva para eliminar la incompatibilidad.",
            "Establecer un protocolo de congelamiento de diseño como punto de interfaz formal: los planos de cada paquete constructivo se congelan en un sprint específico, garantizando la anticipación requerida por los contratistas.",
            "Pedir a los contratistas que acepten trabajar con planos preliminares bajo su propio riesgo.",
            "Suspender el proceso ágil de diseño hasta que todos los planos estén completamente finalizados."
        ],
        answer: ["Establecer un protocolo de congelamiento de diseño como punto de interfaz formal: los planos de cada paquete constructivo se congelan en un sprint específico, garantizando la anticipación requerida por los contratistas."],
        rationale: "La Tarea 5 del Dominio I sobre gestión de interfaces y el reconocimiento de enfoques híbridos del ECO PMI-CP convergen aquí. En proyectos híbridos diseño-construcción, el congelamiento de diseño es el punto de interfaz crítico: define cuándo el diseño pasa de ser iterativo a ser comprometido para la construcción. Sin este mecanismo, el equipo ágil generará re-trabajos en campo constantemente.",
        tags: {
            format:    "opción_única",
            domain:    "gestión_de_contratos",
            method:    "híbrido",
            cognitive: "aplicación"
        }
    },
    {
        question: "El profesional de construcción de un megaproyecto de infraestructura eléctrica recibe una solicitud de su organización para reducir el tiempo de adjudicación de contratos de 90 a 45 días. ¿Qué riesgo debe advertir al equipo directivo antes de implementar esta reducción?",
        options: [
            "Ninguno, ya que reducir el tiempo de adjudicación siempre beneficia al proyecto.",
            "Comprimir el proceso de licitación puede reducir la calidad del Front End Planning contractual, generando alcances mal definidos que resultan en más reclamaciones y sobrecostos durante la ejecución.",
            "El riesgo es que los contratistas no tendrán tiempo suficiente para preparar sus ofertas económicas.",
            "El riesgo es únicamente reputacional para la organización propietaria."
        ],
        answer: ["Comprimir el proceso de licitación puede reducir la calidad del Front End Planning contractual, generando alcances mal definidos que resultan en más reclamaciones y sobrecostos durante la ejecución."],
        rationale: "La Tarea 3 del Dominio I establece determinar la causa raíz de las reclamaciones y áreas que requieren mayor atención en la etapa inicial de los proyectos. El FEP insuficiente es una de las principales causas de reclamaciones en la industria. Comprimir el proceso de adjudicación sin reducir el tiempo de preparación del alcance y los documentos contractuales es una falsa economía: se ahorra tiempo al inicio pero se paga múltiplo durante la ejecución.",
        tags: {
            format:    "opción_única",
            domain:    "gestión_de_contratos",
            method:    "predictivo",
            cognitive: "análisis"
        }
    },
    {
        question: "Ordena los pasos del proceso de gestión de una reclamación en construcción desde su origen hasta su resolución según el ECO PMI-CP:",
        options: [
            "Aplicar técnicas de resolución de disputas (mediación, DRB, arbitraje) si no hay acuerdo",
            "Identificar la causa raíz de la reclamación y la base contractual",
            "Negociar directamente entre las partes para lograr una resolución temprana",
            "Documentar y notificar formalmente la reclamación según los plazos contractuales",
            "Cerrar la reclamación y documentar lecciones aprendidas"
        ],
        answer: [
            "Identificar la causa raíz de la reclamación y la base contractual",
            "Documentar y notificar formalmente la reclamación según los plazos contractuales",
            "Negociar directamente entre las partes para lograr una resolución temprana",
            "Aplicar técnicas de resolución de disputas (mediación, DRB, arbitraje) si no hay acuerdo",
            "Cerrar la reclamación y documentar lecciones aprendidas"
        ],
        rationale: "La Tarea 3 del Dominio I establece utilizar el proceso de reclamaciones y los puntos clave de intervención para lograr resolución temprana. La secuencia correcta es: entender la causa y base contractual → notificar formalmente (crítico para preservar el derecho) → negociar directamente → escalar a mecanismos de resolución alternativa → cerrar y documentar. Saltarse la notificación formal puede extinguir el derecho contractual.",
        tags: {
            format:    "ordenamiento",
            domain:    "gestión_de_contratos",
            method:    "predictivo",
            cognitive: "conocimiento"
        }
    },
    {
        question: "En un proyecto de construcción de subestación, el propietario evalúa utilizar un contrato de Entrega Integrada de Proyecto (IPD/IFOA) por primera vez. Un miembro del comité directivo pregunta cómo este enfoque distribuye los riesgos entre las partes. ¿Cuál es la característica distintiva del IPD respecto a los contratos tradicionales?",
        options: [
            "En el IPD, el propietario asume todos los riesgos del proyecto para maximizar la colaboración.",
            "En el IPD, el contratista asume todos los riesgos a cambio de un incentivo por terminación temprana.",
            "En el IPD, los riesgos y recompensas se comparten entre propietario, diseñador y contratista mediante un pool de contingencia compartido, alineando los incentivos de todas las partes hacia el éxito del proyecto.",
            "El IPD elimina completamente los riesgos del proyecto mediante contratos de suma global con múltiples partes."
        ],
        answer: ["En el IPD, los riesgos y recompensas se comparten entre propietario, diseñador y contratista mediante un pool de contingencia compartido, alineando los incentivos de todas las partes hacia el éxito del proyecto."],
        rationale: "La Tarea 4 del Dominio I establece el IPD/IFOA como mecanismo para resolver problemas de contratación de la industria. La característica fundamental del IPD es la distribución compartida de riesgos y recompensas: todas las partes tienen incentivos alineados porque ganan juntos si el proyecto tiene éxito y comparten las pérdidas si hay sobrecostos. Esto contrasta con los contratos adversariales donde el éxito de una parte puede ser la pérdida de otra.",
        tags: {
            format:    "opción_única",
            domain:    "gestión_de_contratos",
            method:    "híbrido",
            cognitive: "conocimiento"
        }
    },
    {
        question: "El profesional de construcción de un proyecto de transmisión eléctrica identifica que uno de los puntos de interfaz entre el paquete civil y el paquete eléctrico no tiene un responsable claramente asignado en ninguno de los dos contratos. Al plantear esto en la reunión de coordinación, ambos contratistas argumentan que no es su responsabilidad. ¿Cuál es la habilidad del profesional de construcción que es más crítica para resolver esta situación?",
        options: [
            "Conocimiento del software de modelado BIM para visualizar el conflicto técnico.",
            "Habilidades de negociación para facilitar un acuerdo entre los contratistas sobre la asignación de responsabilidad, evitando que la brecha se convierta en una reclamación.",
            "Conocimiento legal para determinar qué contratista tiene la responsabilidad según la ley.",
            "Autoridad para imponer unilateralmente la responsabilidad a uno de los contratistas."
        ],
        answer: ["Habilidades de negociación para facilitar un acuerdo entre los contratistas sobre la asignación de responsabilidad, evitando que la brecha se convierta en una reclamación."],
        rationale: "La Tarea 5 del Dominio I establece que las habilidades de negociación son esenciales para liderar un plan de gestión de interfaces. Cuando dos contratistas disputan la responsabilidad de una interfaz, el profesional de construcción actúa como facilitador neutral. Sus habilidades de negociación permiten encontrar una solución consensuada (usualmente mediante una orden de cambio a uno de los contratos) antes de que la situación escale a una reclamación formal.",
        tags: {
            format:    "opción_única",
            domain:    "gestión_de_contratos",
            method:    "predictivo",
            cognitive: "aplicación"
        }
    },

    // --- Participación de Interesados (5 preguntas adicionales) ---
    {
        question: "El profesional de construcción recopila datos del sistema PMIS sobre las tasas de aprobación de documentos por parte de los interesados del proyecto. Nota que un interesado clave tiene una tasa de aprobación del 35% (rechaza o solicita revisión en el 65% de los documentos). ¿Qué acción debe tomar?",
        options: [
            "Reemplazar al interesado en el proceso de aprobación para agilizar el flujo de documentos.",
            "Evaluar los datos recopilados para inferir perspectivas significativas: determinar si el alto índice de rechazo indica problemas de calidad en los documentos, expectativas mal alineadas o falta de claridad en los requisitos, y tomar acción correctiva.",
            "Ignorar la tasa de rechazo ya que es responsabilidad del contratista mejorar la calidad de sus documentos.",
            "Reducir el número de documentos que requieren aprobación de este interesado para agilizar el proceso."
        ],
        answer: ["Evaluar los datos recopilados para inferir perspectivas significativas: determinar si el alto índice de rechazo indica problemas de calidad en los documentos, expectativas mal alineadas o falta de claridad en los requisitos, y tomar acción correctiva."],
        rationale: "La Tarea 1 del Dominio II establece evaluar los datos recopilados para inferir perspectivas significativas y tomar acción. Una tasa de rechazo del 65% es una señal de alerta que puede tener múltiples causas: baja calidad de los documentos, estándares no comunicados claramente, o expectativas desalineadas entre las partes. El profesional debe diagnosticar la causa raíz antes de implementar la solución.",
        tags: {
            format:    "opción_única",
            domain:    "participación_de_interesados",
            method:    "predictivo",
            cognitive: "análisis"
        }
    },
    {
        question: "Un proyecto de construcción de infraestructura eléctrica en etapa de inicio tiene interesados con diferentes niveles de experiencia técnica: ingenieros experimentados, directivos financieros y autoridades regulatorias. ¿Cuál es el enfoque MÁS efectivo para comunicar el estado del proyecto a estas audiencias según el ECO PMI-CP?",
        options: [
            "Usar un único informe técnico detallado para todas las audiencias para garantizar coherencia en la información.",
            "Crear mensajes y formatos diferenciados que impulsen la comprensión de cada audiencia: indicadores técnicos para ingenieros, métricas financieras para directivos y cumplimiento regulatorio para las autoridades.",
            "Simplificar toda la comunicación al mínimo para que todos la entiendan sin importar su especialidad.",
            "Delegar la comunicación con cada grupo a un especialista diferente, sin coordinación central."
        ],
        answer: ["Crear mensajes y formatos diferenciados que impulsen la comprensión de cada audiencia: indicadores técnicos para ingenieros, métricas financieras para directivos y cumplimiento regulatorio para las autoridades."],
        rationale: "La Tarea 2 del Dominio II establece crear mensajes que mejoren la comprensión para audiencias específicas y utilizar métodos de comunicación matizados para involucrar a múltiples partes en un nivel más profundo. Comunicar lo mismo de la misma forma a audiencias con diferentes intereses y bagaje técnico es una garantía de baja participación. La personalización del mensaje por audiencia es una práctica fundamental en proyectos de construcción.",
        tags: {
            format:    "opción_única",
            domain:    "participación_de_interesados",
            method:    "predictivo",
            cognitive: "aplicación"
        }
    },
    {
        question: "El profesional de construcción detecta que hay un patrón recurrente de decisiones que se toman en reuniones de equipo pero que luego no son implementadas porque los responsables no se sienten comprometidos con ellas. ¿Qué herramienta del ECO PMI-CP es MÁS adecuada para resolver este problema?",
        options: [
            "Implementar penalizaciones por incumplimiento de decisiones en los contratos de los subcontratistas.",
            "Aplicar la Administración Basada en Compromisos (CbM) para transformar las decisiones de reunión en compromisos explícitos con responsable, fecha y condiciones de satisfacción claras.",
            "Grabar todas las reuniones de equipo para tener evidencia del compromiso de cada participante.",
            "Reducir la frecuencia de reuniones para que solo se discutan temas con decisiones maduras."
        ],
        answer: ["Aplicar la Administración Basada en Compromisos (CbM) para transformar las decisiones de reunión en compromisos explícitos con responsable, fecha y condiciones de satisfacción claras."],
        rationale: "La Tarea 1 del Dominio II establece aplicar la Administración Basada en Compromisos (CbM) para lograr resultados efectivos. El problema descrito es precisamente el que CbM resuelve: la diferencia entre 'acordar algo en reunión' y 'comprometerse explícitamente a ejecutarlo'. CbM requiere que cada decisión se convierta en un compromiso bilateral con términos claros, lo que genera rendición de cuentas real.",
        tags: {
            format:    "opción_única",
            domain:    "participación_de_interesados",
            method:    "ágil",
            cognitive: "aplicación"
        }
    },
    {
        question: "Durante un proyecto de construcción de subestación, el profesional identifica mediante la herramienta Compass que hay deficiencias de comunicación en el flujo de información entre el equipo de ingeniería y el equipo de adquisiciones. ¿Cuál es el próximo paso según el ECO PMI-CP?",
        options: [
            "Documentar las deficiencias y esperar al cierre del proyecto para incluirlas en lecciones aprendidas.",
            "Desarrollar un plan de acción específico para resolver las brechas de comunicación identificadas, implementando cambios en los procesos o canales de comunicación entre los equipos afectados.",
            "Reemplazar a los líderes de los equipos de ingeniería y adquisiciones.",
            "Aceptar las deficiencias como parte natural de la complejidad del proyecto."
        ],
        answer: ["Desarrollar un plan de acción específico para resolver las brechas de comunicación identificadas, implementando cambios en los procesos o canales de comunicación entre los equipos afectados."],
        rationale: "La Tarea 3 del Dominio II establece desarrollar planes de acción para resolver brechas de comunicación. La herramienta Compass sirve para diagnosticar; el plan de acción es la respuesta al diagnóstico. En proyectos de construcción, la brecha entre ingeniería y adquisiciones es especialmente crítica porque retrasos en las especificaciones técnicas impactan directamente los tiempos de compra de equipos de largo plazo de entrega.",
        tags: {
            format:    "opción_única",
            domain:    "participación_de_interesados",
            method:    "predictivo",
            cognitive: "aplicación"
        }
    },
    {
        question: "¿Cuáles de las siguientes situaciones representan errores comunes (pitfalls) en la implementación de la sala Obeya en proyectos de construcción según el ECO PMI-CP? (Selecciona todos los que apliquen)",
        options: [
            "Los indicadores visuales no se actualizan antes de cada sesión, mostrando datos desactualizados.",
            "Las sesiones de Obeya se usan para tomar decisiones operativas críticas del proyecto.",
            "Los participantes asisten a la Obeya pero las discusiones no terminan en decisiones concretas con responsables asignados.",
            "Solo los líderes de cada disciplina participan en las sesiones de Obeya.",
            "La Obeya se convierte en una reunión de reporte de estatus en lugar de una sesión de resolución de problemas."
        ],
        answer: [
            "Los indicadores visuales no se actualizan antes de cada sesión, mostrando datos desactualizados.",
            "Los participantes asisten a la Obeya pero las discusiones no terminan en decisiones concretas con responsables asignados.",
            "La Obeya se convierte en una reunión de reporte de estatus en lugar de una sesión de resolución de problemas."
        ],
        rationale: "La Tarea 1 del Dominio II establece reconocer los errores comunes de Obeya/Big Room. Los pitfalls más frecuentes son: visualizaciones desactualizadas (pierde su propósito), discusiones sin decisiones (pierde su valor) y convertirse en sesión de reporte en lugar de resolución de problemas (pierde su naturaleza colaborativa). Que solo participen líderes o que se usen para decisiones críticas no son pitfalls, sino características deseables.",
        tags: {
            format:    "opción_múltiple",
            domain:    "participación_de_interesados",
            method:    "híbrido",
            cognitive: "análisis"
        }
    },

    // --- Gestión de Estrategias y Alcance (2 preguntas adicionales) ---
    {
        question: "El propietario de un proyecto de construcción de planta industrial solicita implementar un sistema de energía solar en las instalaciones, arguyendo que mejorará la imagen de sostenibilidad de la empresa. El profesional de construcción evalúa el cambio y determina que no contribuye a los resultados operacionales principales del proyecto y duplicaría el tiempo de construcción. ¿Cuál debe ser su recomendación?",
        options: [
            "Aceptar el cambio sin cuestionamientos ya que el propietario tiene autoridad para solicitarlo.",
            "Rechazar el cambio porque el propietario no tiene derecho a modificar el alcance durante la construcción.",
            "Evaluar el cambio en relación con los resultados principales del proyecto: si no contribuye a los objetivos operacionales y genera un impacto desproporcionado en cronograma y costo, recomendar excluirlo o diferirlo a una fase posterior del proyecto.",
            "Implementar el cambio en paralelo con el proyecto principal para no afectar el cronograma."
        ],
        answer: ["Evaluar el cambio en relación con los resultados principales del proyecto: si no contribuye a los objetivos operacionales y genera un impacto desproporcionado en cronograma y costo, recomendar excluirlo o diferirlo a una fase posterior del proyecto."],
        rationale: "La Tarea 2 del Dominio III establece evaluar todos los cambios de alcance en relación con los resultados principales del proyecto. Esta es precisamente la responsabilidad del profesional de construcción: no es simplemente ejecutar lo que el propietario solicita, sino asesorar técnicamente sobre el impacto y la pertinencia de los cambios respecto a los objetivos del proyecto. Diferir a una fase posterior es frecuentemente la mejor solución.",
        tags: {
            format:    "opción_única",
            domain:    "gestión_de_estrategias_y_alcance",
            method:    "predictivo",
            cognitive: "análisis"
        }
    },
    {
        question: "Ordena los pasos para gestionar el alcance de un proyecto de construcción de infraestructura eléctrica desde la definición hasta el control según el ECO PMI-CP:",
        options: [
            "Controlar cambios de alcance mediante el proceso formal de órdenes de cambio",
            "Aplicar herramientas de evaluación para identificar brechas en el alcance",
            "Definir el alcance orientado a los resultados operacionales del proyecto",
            "Aplicar ingeniería de valor y análisis costo-beneficio para optimizar el alcance",
            "Implementar revisiones de alcance para lograr un alcance preciso y maduro"
        ],
        answer: [
            "Definir el alcance orientado a los resultados operacionales del proyecto",
            "Implementar revisiones de alcance para lograr un alcance preciso y maduro",
            "Aplicar herramientas de evaluación para identificar brechas en el alcance",
            "Aplicar ingeniería de valor y análisis costo-beneficio para optimizar el alcance",
            "Controlar cambios de alcance mediante el proceso formal de órdenes de cambio"
        ],
        rationale: "El Dominio III del ECO PMI-CP establece esta secuencia de gestión del alcance: definir primero con enfoque en resultados (Tarea 1), luego revisar y madurar el alcance (Tarea 1), identificar brechas con herramientas de evaluación (Tarea 3), optimizar con ingeniería de valor (Tarea 3) y controlar cambios durante la ejecución (Tarea 2). La secuencia refleja el ciclo natural del alcance en proyectos de construcción.",
        tags: {
            format:    "ordenamiento",
            domain:    "gestión_de_estrategias_y_alcance",
            method:    "predictivo",
            cognitive: "conocimiento"
        }
    }
    ,
    {
        question: "En un proyecto de construcción de subestación, el director de proyecto nota que un interesado clave del área financiera lleva tres semanas sin responder correos ni asistir a reuniones de revisión. ¿Cuál es la acción MÁS adecuada según el ECO PMI-CP?",
        options: [
            "Continuar el proyecto y documentar la falta de participación del interesado para efectos de responsabilidad.",
            "Identificar la razón de la baja participación mediante una comunicación directa y personalizada, y aplicar enfoques para aumentar la alineación del interesado desde una perspectiva de sus intereses y preocupaciones específicas.",
            "Excluir al interesado del proceso de aprobaciones para no retrasar el proyecto.",
            "Escalar la situación al patrocinador del proyecto sin intentar primero un contacto directo."
        ],
        answer: ["Identificar la razón de la baja participación mediante una comunicación directa y personalizada, y aplicar enfoques para aumentar la alineación del interesado desde una perspectiva de sus intereses y preocupaciones específicas."],
        rationale: "La Tarea 2 del Dominio II establece aplicar enfoques para aumentar la participación de los interesados y la alineación desde el inicio del proyecto. La desconexión de un interesado clave es una señal de alerta que puede indicar preocupaciones no expresadas, falta de claridad sobre su rol o conflictos internos. La comunicación directa y personalizada es el primer paso antes de escalar.",
        tags: {
            format:    "opción_única",
            domain:    "participación_de_interesados",
            method:    "predictivo",
            cognitive: "aplicación"
        }
    },
    {
        question: "El profesional de construcción de un proyecto de infraestructura eléctrica multinacional debe comunicar un retraso significativo en el cronograma a tres grupos de interesados: el equipo del proyecto, el comité directivo del propietario y los reguladores gubernamentales. ¿Cuáles de los siguientes principios de comunicación debe aplicar según el ECO PMI-CP? (Selecciona todos los que apliquen)",
        options: [
            "Adaptar el mensaje y el nivel de detalle a las necesidades específicas de cada audiencia.",
            "Utilizar el mismo mensaje para todos los grupos para garantizar consistencia y transparencia.",
            "Informar primero al comité directivo antes de comunicar al equipo del proyecto.",
            "Desarrollar planes de acción concretos para resolver la brecha de comunicación generada por el retraso.",
            "Aplicar métodos de comunicación nuanceados para involucrar a cada grupo en el nivel adecuado."
        ],
        answer: [
            "Adaptar el mensaje y el nivel de detalle a las necesidades específicas de cada audiencia.",
            "Desarrollar planes de acción concretos para resolver la brecha de comunicación generada por el retraso.",
            "Aplicar métodos de comunicación nuanceados para involucrar a cada grupo en el nivel adecuado."
        ],
        rationale: "Las Tareas 2, 3 y 4 del Dominio II convergen en esta situación. Cada audiencia necesita información diferente: el equipo necesita detalles operativos y el plan de recuperación; el comité directivo necesita el impacto financiero y las decisiones requeridas; los reguladores necesitan la implicación en compromisos regulatorios. Usar el mismo mensaje para todos es inefectivo. Informar primero al comité directivo es una preferencia organizacional, no un principio del ECO.",
        tags: {
            format:    "opción_múltiple",
            domain:    "participación_de_interesados",
            method:    "predictivo",
            cognitive: "análisis"
        }
    }

    ,

    // ─────────────────────────────────────────────────────────────────────────
    // PREGUNTAS ADICIONALES — 40 preguntas para completar 100
    // ─────────────────────────────────────────────────────────────────────────

    // ─── DOMINIO I: GESTIÓN DE CONTRATOS +20 ─────────────────────────────────

    {
        question: "Durante la ejecución de un proyecto de construcción de una planta de energía, el contratista alega que la emisión tardía de planos de diseño por parte del propietario le generó costos adicionales por inactividad de cuadrillas. El contrato incluye una cláusula de compensación por interferencias del propietario. ¿Cuál es la acción correcta del profesional de construcción del propietario?",
        options: [
            "Rechazar la solicitud argumentando que el contratista debía anticipar posibles retrasos en los planos.",
            "Revisar la cláusula contractual, verificar si la emisión tardía de planos está documentada y constituye una interferencia del propietario, y evaluar la compensación que corresponde según el contrato.",
            "Aceptar automáticamente todos los costos adicionales reclamados para mantener la relación con el contratista.",
            "Terminar el contrato ya que el contratista demostró falta de capacidad de gestión."
        ],
        answer: ["Revisar la cláusula contractual, verificar si la emisión tardía de planos está documentada y constituye una interferencia del propietario, y evaluar la compensación que corresponde según el contrato."],
        rationale: "La Tarea 3 del Dominio I establece gestionar el proceso de reclamaciones aplicando el marco contractual. Cuando existe una cláusula específica sobre interferencias del propietario, el profesional debe evaluar si los hechos cumplen los criterios contractuales. Ni el rechazo automático ni la aceptación incondicional son correctos; la evaluación basada en evidencia y el contrato es el proceso correcto.",
        tags: { format: "opción_única", domain: "gestión_de_contratos", method: "predictivo", cognitive: "aplicación" }
    },
    {
        question: "Un proyecto de construcción de una subestación eléctrica tiene tres paquetes contratados por separado: civil, eléctrico y de sistemas de protección. Al revisar los contratos, el profesional de construcción detecta que ninguno de los tres contempla el trabajo de comisionamiento integral de los sistemas. ¿Cuál es la consecuencia más probable y la acción correcta?",
        options: [
            "El comisionamiento se realizará automáticamente por el contratista civil al ser el de mayor valor.",
            "Esta brecha de alcance contractual generará disputas al cierre del proyecto. El profesional debe emitir una orden de cambio a uno de los contratos o contratar el comisionamiento por separado antes de que sea una reclamación.",
            "El propietario debe asumir directamente el comisionamiento con personal propio.",
            "El problema se resolverá durante la ejecución cuando los contratistas coordinen entre sí."
        ],
        answer: ["Esta brecha de alcance contractual generará disputas al cierre del proyecto. El profesional debe emitir una orden de cambio a uno de los contratos o contratar el comisionamiento por separado antes de que sea una reclamación."],
        rationale: "Las Tareas 3, 4 y 5 del Dominio I convergen: una brecha de alcance no asignada a ningún contratista es fuente segura de reclamaciones al cierre. El profesional de construcción debe actuar preventivamente emitiendo una orden de cambio o un contrato adicional para cubrir el trabajo faltante, documentando la causa raíz como lección aprendida.",
        tags: { format: "opción_única", domain: "gestión_de_contratos", method: "predictivo", cognitive: "análisis" }
    },
    {
        question: "El profesional de construcción evalúa dos métodos de entrega para un proyecto de expansión de subestación: EPC (Engineering, Procurement, Construction) y EPCM (Engineering, Procurement, Construction Management). El propietario tiene alta capacidad técnica interna pero limitada experiencia en gestión de construcción. ¿Cuál es la recomendación MÁS adecuada?",
        options: [
            "EPC siempre es superior porque transfiere más riesgo al contratista.",
            "EPCM es más adecuado ya que el propietario retiene el control de la gestión de construcción mientras el contratista EPCM aporta la experiencia que le falta, aprovechando la capacidad técnica interna del propietario.",
            "Ninguno de los dos es adecuado; debe usarse un contrato de suma global puro.",
            "EPCM es siempre más costoso y debe evitarse en proyectos de expansión."
        ],
        answer: ["EPCM es más adecuado ya que el propietario retiene el control de la gestión de construcción mientras el contratista EPCM aporta la experiencia que le falta, aprovechando la capacidad técnica interna del propietario."],
        rationale: "La Tarea 4 del Dominio I establece asesorar a los interesados sobre el método de entrega que mejor se ajuste a las necesidades del proyecto. El EPCM es apropiado cuando el propietario quiere control pero carece de experiencia en gestión de construcción: retiene la autoridad de decisión mientras el contratista EPCM gestiona la ejecución. El EPC transfiere más control, lo que sería contraproducente dado el perfil del propietario.",
        tags: { format: "opción_única", domain: "gestión_de_contratos", method: "predictivo", cognitive: "análisis" }
    },
    {
        question: "¿Cuáles de las siguientes son características del contrato IPD (Integrated Project Delivery) que lo distinguen de los contratos tradicionales según el ECO PMI-CP? (Selecciona todas las que apliquen)",
        options: [
            "Los riesgos y recompensas se comparten entre propietario, diseñador y contratista.",
            "El propietario asume todos los riesgos a cambio de mayor control sobre el proyecto.",
            "Existe un pool de contingencia compartido que alinea los incentivos de todas las partes.",
            "Los contratos IPD son contratos de precio fijo que protegen al propietario de sobrecostos.",
            "El enfoque promueve la colaboración temprana entre las partes para mejorar los resultados del proyecto."
        ],
        answer: [
            "Los riesgos y recompensas se comparten entre propietario, diseñador y contratista.",
            "Existe un pool de contingencia compartido que alinea los incentivos de todas las partes.",
            "El enfoque promueve la colaboración temprana entre las partes para mejorar los resultados del proyecto."
        ],
        rationale: "La Tarea 4 del Dominio I establece el IPD como mecanismo para resolver problemas de contratación de la industria. Sus características distintivas son: distribución compartida de riesgos y recompensas, pool de contingencia común e involucramiento temprano de todas las partes. El propietario no asume todos los riesgos (eso sería lo opuesto a IPD) ni es un contrato de precio fijo tradicional.",
        tags: { format: "opción_múltiple", domain: "gestión_de_contratos", method: "híbrido", cognitive: "conocimiento" }
    },
    {
        question: "El profesional de construcción detecta que en un proyecto de construcción de líneas de transmisión, el contratista de obras civiles y el contratista de montaje eléctrico tienen actividades que se superponen en la misma zona de trabajo durante tres semanas. ¿Cuál es el riesgo principal de esta situación y la acción correcta?",
        options: [
            "No hay riesgo porque ambos contratistas son profesionales con experiencia.",
            "La superposición de zonas de trabajo es un punto de interfaz no gestionado que puede generar accidentes, retrasos, reclamaciones por interferencias y pérdida de productividad. Debe establecerse un protocolo de coordinación en ese punto de interfaz.",
            "El riesgo es únicamente económico; debe establecerse una penalización contractual si alguno de los contratistas causa retrasos al otro.",
            "El contratista de mayor valor contractual tiene prioridad sobre la zona de trabajo."
        ],
        answer: ["La superposición de zonas de trabajo es un punto de interfaz no gestionado que puede generar accidentes, retrasos, reclamaciones por interferencias y pérdida de productividad. Debe establecerse un protocolo de coordinación en ese punto de interfaz."],
        rationale: "La Tarea 5 del Dominio I establece identificar y planificar los puntos de interfaz entre paquetes. Las zonas de trabajo superpuestas son interfaces espaciales y temporales críticas que afectan la seguridad, la productividad y la armonía entre contratistas. El protocolo de coordinación define quién trabaja cuándo, cómo se secuencian las actividades y cómo se gestionan los conflictos.",
        tags: { format: "opción_única", domain: "gestión_de_contratos", method: "predictivo", cognitive: "análisis" }
    },
    {
        question: "Un proyecto de construcción de subestación tiene 8 paquetes de trabajo con 47 puntos de interfaz identificados. El profesional de construcción debe implementar un sistema para gestionar estos puntos. ¿Cuál es el primer paso según el ECO PMI-CP?",
        options: [
            "Contratar a un especialista en gestión de interfaces para cada paquete.",
            "Reconocer y seleccionar los marcos y sistemas líderes de la industria para implementar la gestión de interfaces, y aplicar el lenguaje y definiciones comunes.",
            "Crear una reunión semanal de coordinación entre todos los contratistas.",
            "Delegar la responsabilidad de las interfaces a los contratistas para que las resuelvan entre ellos."
        ],
        answer: ["Reconocer y seleccionar los marcos y sistemas líderes de la industria para implementar la gestión de interfaces, y aplicar el lenguaje y definiciones comunes."],
        rationale: "La Tarea 5 del Dominio I establece reconocer y usar los marcos y sistemas líderes de la industria para implementar la gestión de interfaces. Con 47 puntos de interfaz, la gestión ad hoc no es viable. Un marco estandarizado con lenguaje común garantiza que todos los contratistas interpreten los puntos de interfaz de manera consistente, reduciendo malentendidos y disputas.",
        tags: { format: "opción_única", domain: "gestión_de_contratos", method: "predictivo", cognitive: "aplicación" }
    },
    {
        question: "El profesional de construcción trabaja en un proyecto donde el contratista general subcontrata el 85% del trabajo. ¿Cuál es el riesgo contractual principal que debe gestionar el profesional del propietario?",
        options: [
            "El riesgo de que el contratista general obtenga márgenes excesivos por la subcontratación.",
            "Los arreglos de subcontratación masiva pueden generar brechas de comunicación entre el propietario y los equipos que realmente ejecutan el trabajo, diluir la responsabilidad contractual y dificultar el control de calidad.",
            "Los subcontratistas siempre tienen menor calidad técnica que el contratista general.",
            "El riesgo es exclusivamente del contratista general, quien responde por todos los subcontratistas."
        ],
        answer: ["Los arreglos de subcontratación masiva pueden generar brechas de comunicación entre el propietario y los equipos que realmente ejecutan el trabajo, diluir la responsabilidad contractual y dificultar el control de calidad."],
        rationale: "La Tarea 4 del Dominio I establece reconocer el potencial de brechas de comunicación causadas por los arreglos contractuales en proyectos de capital. Con 85% subcontratado, el contratista general actúa principalmente como intermediario. Esto crea múltiples capas entre el propietario y la ejecución real, generando riesgos de calidad, comunicación y responsabilidad que el profesional debe gestionar activamente.",
        tags: { format: "opción_única", domain: "gestión_de_contratos", method: "predictivo", cognitive: "análisis" }
    },
    {
        question: "Ordena los pasos del proceso de gestión del ciclo de vida del contrato en un proyecto de construcción según el ECO PMI-CP:",
        options: [
            "Supervisar la ejecución y gestionar cambios y reclamaciones durante la construcción",
            "Asesorar sobre el método de entrega y estructura contractual adecuados",
            "Cerrar el contrato documentando lecciones aprendidas",
            "Estructurar los documentos de licitación y adjudicar el contrato",
            "Definir el alcance y los requisitos del proyecto durante el Front End Planning"
        ],
        answer: [
            "Definir el alcance y los requisitos del proyecto durante el Front End Planning",
            "Asesorar sobre el método de entrega y estructura contractual adecuados",
            "Estructurar los documentos de licitación y adjudicar el contrato",
            "Supervisar la ejecución y gestionar cambios y reclamaciones durante la construcción",
            "Cerrar el contrato documentando lecciones aprendidas"
        ],
        rationale: "La Tarea 4 del Dominio I establece supervisar el ciclo de vida completo del contrato desde el descubrimiento hasta el cierre. La secuencia lógica es: FEP para definir el alcance → selección del método de entrega → licitación y adjudicación → ejecución con gestión de cambios y reclamaciones → cierre con lecciones aprendidas. Cada fase prepara las condiciones para la siguiente.",
        tags: { format: "ordenamiento", domain: "gestión_de_contratos", method: "predictivo", cognitive: "conocimiento" }
    },
    {
        question: "Un contrato de construcción de infraestructura eléctrica incluye una cláusula de incentivo por terminación anticipada: si el contratista entrega antes de la fecha comprometida, recibe el 30% del ahorro generado en costos de supervisión del propietario. El contratista entrega 45 días antes. ¿Qué debe hacer el profesional de construcción?",
        options: [
            "Ignorar la cláusula de incentivo ya que la entrega anticipada fue responsabilidad del contratista.",
            "Calcular los ahorros reales en costos de supervisión durante los 45 días y procesar el pago del 30% correspondiente según la cláusula contractual.",
            "Negociar el porcentaje de incentivo a la baja ya que el contrato ya fue completado.",
            "Transferir el incentivo al equipo de supervisión del propietario como reconocimiento por su trabajo."
        ],
        answer: ["Calcular los ahorros reales en costos de supervisión durante los 45 días y procesar el pago del 30% correspondiente según la cláusula contractual."],
        rationale: "La Tarea 4 del Dominio I establece utilizar las cláusulas importantes presentes en los contratos del entorno de la construcción para respaldar la entrega del proyecto. Las cláusulas de incentivo son mecanismos contractuales que alinean los intereses del contratista con los del propietario. Cumplir con las obligaciones contractuales del propietario es tan importante como exigir las del contratista.",
        tags: { format: "opción_única", domain: "gestión_de_contratos", method: "predictivo", cognitive: "aplicación" }
    },
    {
        question: "La organización propietaria de un proyecto de construcción de planta industrial tiene una política de tolerancia cero a reclamaciones. El equipo del proyecto interpreta esto como 'nunca aprobar cambios para evitar reclamaciones'. ¿Cuál es el problema con esta interpretación?",
        options: [
            "No hay problema; la política refleja correctamente la estrategia de gestión de reclamaciones.",
            "Rechazar cambios legítimos no elimina las reclamaciones; al contrario, las incentiva porque el contratista buscará compensación por trabajos adicionales no pagados. La política debe entenderse como 'prevenir reclamaciones mediante buenas prácticas', no como 'rechazar cambios'.",
            "La política de tolerancia cero es inaplicable en la práctica y debe modificarse.",
            "El equipo tiene razón; no aprobar cambios es la única forma de prevenir reclamaciones."
        ],
        answer: ["Rechazar cambios legítimos no elimina las reclamaciones; al contrario, las incentiva porque el contratista buscará compensación por trabajos adicionales no pagados. La política debe entenderse como 'prevenir reclamaciones mediante buenas prácticas', no como 'rechazar cambios'."],
        rationale: "La Tarea 3 del Dominio I establece aplicar mejores prácticas para prevenir reclamaciones. La prevención real proviene de un FEP robusto, documentación rigurosa y gestión adecuada de cambios, no de rechazar cambios legítimos. Rechazar cambios justificados genera la condición exacta que la política quiere evitar: el contratista presentará reclamaciones para recuperar los costos no compensados.",
        tags: { format: "opción_única", domain: "gestión_de_contratos", method: "predictivo", cognitive: "análisis" }
    },
    {
        question: "Un proyecto de construcción de subestación usa un contrato de tiempo y materiales (T&M) para trabajos de alto riesgo técnico. El propietario observa que los costos reales están siendo un 40% superiores a las estimaciones. ¿Cuál es la causa probable y la acción correcta del profesional de construcción?",
        options: [
            "El contratista está actuando de mala fe; debe terminarse el contrato inmediatamente.",
            "El contrato T&M es inadecuado para este tipo de trabajo; debe reemplazarse por un contrato de suma global.",
            "En contratos T&M el propietario asume el riesgo de costo; la desviación puede reflejar la incertidumbre técnica que justificó este tipo de contrato. El profesional debe revisar si las tarifas y cantidades son razonables y si el alcance evolucionó según lo esperado.",
            "El propietario debe reducir el alcance del trabajo para ajustarse al presupuesto estimado."
        ],
        answer: ["En contratos T&M el propietario asume el riesgo de costo; la desviación puede reflejar la incertidumbre técnica que justificó este tipo de contrato. El profesional debe revisar si las tarifas y cantidades son razonables y si el alcance evolucionó según lo esperado."],
        rationale: "La Tarea 4 del Dominio I establece utilizar los distintos métodos de entrega considerando la distribución de riesgos. El contrato T&M transfiere el riesgo de costo al propietario precisamente porque existe alta incertidumbre técnica. Una desviación del 40% puede ser el resultado esperado de esa incertidumbre. El profesional debe verificar que las tarifas y cantidades sean razonables, no asumir mala fe.",
        tags: { format: "opción_única", domain: "gestión_de_contratos", method: "predictivo", cognitive: "análisis" }
    },
    {
        question: "El profesional de construcción identifica que el diseño ágil del sistema SCADA de la subestación genera versiones cada dos semanas, pero el contrato de instalación tiene un cronograma fijo basado en los planos de la versión inicial. ¿Cuál es el riesgo principal de esta situación?",
        options: [
            "El equipo ágil producirá más versiones de las necesarias, generando documentación excesiva.",
            "Las actualizaciones iterativas del diseño pueden generar órdenes de cambio frecuentes o trabajos no compensados si el contratista instala según planos desactualizados, creando un conflicto entre el ciclo ágil de diseño y el contrato predictivo de instalación.",
            "El contratista de instalación deberá adoptar metodología ágil para adaptarse al diseño.",
            "No hay riesgo si el contratista es suficientemente flexible para adaptarse a los cambios de diseño."
        ],
        answer: ["Las actualizaciones iterativas del diseño pueden generar órdenes de cambio frecuentes o trabajos no compensados si el contratista instala según planos desactualizados, creando un conflicto entre el ciclo ágil de diseño y el contrato predictivo de instalación."],
        rationale: "Las Tareas 4 y 5 del Dominio I en contexto híbrido establecen que las interfaces entre metodologías son fuente de riesgo contractual. Un contrato de instalación fijo no contempla los cambios iterativos del diseño ágil. Sin un mecanismo explícito de gestión de cambios entre ambas metodologías (como congelamiento de diseño antes de la instalación), se generarán conflictos contractuales.",
        tags: { format: "opción_única", domain: "gestión_de_contratos", method: "híbrido", cognitive: "análisis" }
    },
    {
        question: "¿Cuáles de los siguientes son elementos que debe incluir un documento de interfaz (Interface Register) en un megaproyecto de construcción según el ECO PMI-CP? (Selecciona todos los que apliquen)",
        options: [
            "Identificación única del punto de interfaz.",
            "Las partes responsables de cada lado de la interfaz.",
            "El salario de los ingenieros responsables de gestionar la interfaz.",
            "Los documentos técnicos que deben intercambiarse en ese punto de interfaz.",
            "El estado actual de la interfaz (pendiente, en progreso, cerrada).",
            "El número de reuniones realizadas para discutir la interfaz."
        ],
        answer: [
            "Identificación única del punto de interfaz.",
            "Las partes responsables de cada lado de la interfaz.",
            "Los documentos técnicos que deben intercambiarse en ese punto de interfaz.",
            "El estado actual de la interfaz (pendiente, en progreso, cerrada)."
        ],
        rationale: "La Tarea 5 del Dominio I establece utilizar el lenguaje común, definiciones y elementos de la gestión de interfaces. Un registro de interfaces efectivo incluye: ID único (para trazabilidad), responsables de cada parte (para accountability), documentos de transferencia (para claridad técnica) y estado (para monitoreo). Los salarios son confidenciales y el número de reuniones es un indicador de actividad, no un elemento del registro.",
        tags: { format: "opción_múltiple", domain: "gestión_de_contratos", method: "predictivo", cognitive: "conocimiento" }
    },
    {
        question: "El profesional de construcción recibe una solicitud de su organización para revisar si el contrato actual con el contratista principal puede modificarse para incluir objetivos de sostenibilidad ambiental que no estaban en el alcance original. ¿Cuál es la acción correcta?",
        options: [
            "Rechazar la solicitud ya que los contratos no pueden modificarse una vez firmados.",
            "Evaluar las cláusulas del contrato para determinar si admite modificaciones de alcance, el impacto en costo y cronograma, y la disposición del contratista, y gestionar el cambio mediante el proceso formal de órdenes de cambio si es viable.",
            "Instruir al contratista verbalmente para que incorpore los objetivos de sostenibilidad sin modificar el contrato.",
            "Cancelar el contrato actual y relicitar con los nuevos requisitos de sostenibilidad."
        ],
        answer: ["Evaluar las cláusulas del contrato para determinar si admite modificaciones de alcance, el impacto en costo y cronograma, y la disposición del contratista, y gestionar el cambio mediante el proceso formal de órdenes de cambio si es viable."],
        rationale: "La Tarea 4 del Dominio I establece supervisar el ciclo de vida completo del contrato y utilizar las cláusulas importantes presentes en los contratos. Los contratos de construcción generalmente admiten modificaciones de alcance mediante órdenes de cambio. El proceso correcto es evaluar la viabilidad contractual, técnica y económica del cambio antes de proceder formalmente.",
        tags: { format: "opción_única", domain: "gestión_de_contratos", method: "predictivo", cognitive: "aplicación" }
    },
    {
        question: "Un proyecto de construcción de infraestructura eléctrica tiene un DRB (Dispute Resolution Board) activo. El contratista presenta una disputa sobre el alcance de los trabajos de pruebas de aceptación. El DRB emite una recomendación favorable al contratista. El propietario no está de acuerdo con la recomendación. ¿Cuál es la acción correcta del profesional de construcción?",
        options: [
            "Ignorar la recomendación del DRB ya que no es vinculante.",
            "Revisar las opciones según el contrato: si la recomendación es no vinculante, el propietario puede rechazarla y proceder a arbitraje; si es vinculante, debe cumplirse salvo que se apele según los procedimientos contractuales.",
            "Aceptar automáticamente la recomendación del DRB para mantener una buena relación con el contratista.",
            "Disolver el DRB ya que no cumplió las expectativas del propietario."
        ],
        answer: ["Revisar las opciones según el contrato: si la recomendación es no vinculante, el propietario puede rechazarla y proceder a arbitraje; si es vinculante, debe cumplirse salvo que se apele según los procedimientos contractuales."],
        rationale: "La Tarea 3 del Dominio I establece aplicar las diferentes técnicas de resolución de disputas. El efecto de las recomendaciones del DRB (vinculante o no vinculante) depende del contrato. El profesional debe conocer el tipo de DRB contratado y las opciones disponibles si el propietario no está de acuerdo. Ignorar o disolver el DRB unilateralmente viola el acuerdo contractual.",
        tags: { format: "opción_única", domain: "gestión_de_contratos", method: "predictivo", cognitive: "aplicación" }
    },
    {
        question: "Al inicio de un proyecto de construcción de una planta industrial, el profesional de construcción recomienda invertir tiempo adicional en el Front End Planning antes de emitir los documentos de licitación. El director financiero objeta el retraso. ¿Cuál es el argumento más sólido del profesional?",
        options: [
            "El FEP es un requisito del PMI y debe cumplirse independientemente del costo.",
            "Un FEP robusto reduce la frecuencia de reclamaciones durante la construcción, ya que la mayoría de las reclamaciones tienen su causa raíz en un alcance mal definido en las etapas iniciales del proyecto.",
            "El FEP es necesario para obtener aprobaciones regulatorias.",
            "Sin un FEP completo el contrato no puede ser legalmente válido."
        ],
        answer: ["Un FEP robusto reduce la frecuencia de reclamaciones durante la construcción, ya que la mayoría de las reclamaciones tienen su causa raíz en un alcance mal definido en las etapas iniciales del proyecto."],
        rationale: "La Tarea 3 del Dominio I establece determinar la causa raíz de las reclamaciones y las áreas que requieren mayor atención en la etapa inicial. La industria de la construcción documenta consistentemente que el FEP insuficiente es la principal causa raíz de reclamaciones costosas. El argumento financiero es el más efectivo con un director financiero: el costo del FEP adicional es una fracción del costo de las reclamaciones que previene.",
        tags: { format: "opción_única", domain: "gestión_de_contratos", method: "predictivo", cognitive: "análisis" }
    },
    {
        question: "En un proyecto de construcción bajo enfoque ágil para la fase de ingeniería y predictivo para la fase de construcción, ¿cuál es el mecanismo de interfaz MÁS importante entre ambas fases?",
        options: [
            "Las reuniones de revisión de sprint donde el equipo de construcción puede observar el progreso del diseño.",
            "El congelamiento formal del diseño en hitos específicos que permiten al equipo de construcción planificar y contratar con suficiente anticipación, con un protocolo claro de gestión de cambios después del congelamiento.",
            "La asignación de un representante del equipo de construcción como parte del equipo ágil de diseño.",
            "La eliminación de la fase ágil de diseño y su reemplazo por diseño predictivo completo antes de la construcción."
        ],
        answer: ["El congelamiento formal del diseño en hitos específicos que permiten al equipo de construcción planificar y contratar con suficiente anticipación, con un protocolo claro de gestión de cambios después del congelamiento."],
        rationale: "La Tarea 5 del Dominio I en entornos híbridos establece identificar y aplicar los principios y el tiempo adecuado para implementar la gestión de interfaces. El congelamiento de diseño es el punto de interfaz crítico entre el ciclo ágil de diseño y el proceso predictivo de construcción. Define cuándo el diseño deja de ser iterativo para convertirse en comprometido, permitiendo la contratación y planificación formal de la construcción.",
        tags: { format: "opción_única", domain: "gestión_de_contratos", method: "híbrido", cognitive: "aplicación" }
    },
    {
        question: "Un profesional de construcción revisa los contratos de un megaproyecto de 5 paquetes y encuentra que los puntos de interfaz entre los paquetes están identificados pero no se ha asignado responsabilidad a ninguna de las partes para gestionarlos. ¿Cuál es el impacto de esta omisión?",
        options: [
            "Los contratistas resolverán naturalmente las interfaces durante la ejecución por su propio interés.",
            "La falta de responsabilidad asignada en los puntos de interfaz creará zonas grises donde ningún contratista asumirá responsabilidad, generando trabajo no ejecutado, reclamaciones cruzadas y retrasos en la coordinación.",
            "El impacto es menor ya que los puntos de interfaz ya fueron identificados.",
            "El propietario debe asumir directamente la gestión de todos los puntos de interfaz."
        ],
        answer: ["La falta de responsabilidad asignada en los puntos de interfaz creará zonas grises donde ningún contratista asumirá responsabilidad, generando trabajo no ejecutado, reclamaciones cruzadas y retrasos en la coordinación."],
        rationale: "La Tarea 5 del Dominio I establece aplicar las habilidades para liderar efectivamente un plan de gestión de interfaces. Identificar los puntos de interfaz es solo el primer paso; asignar responsabilidades claras es lo que hace operativo el plan. Sin responsabilidad asignada, cada contratista esperará que el otro gestione la interfaz, creando las condiciones exactas para disputas y trabajos no ejecutados.",
        tags: { format: "opción_única", domain: "gestión_de_contratos", method: "predictivo", cognitive: "análisis" }
    },
    {
        question: "El profesional de construcción de un proyecto de subestación necesita gestionar una reclamación del contratista civil que alega que las instrucciones verbales del inspector del propietario modificaron el alcance sin compensación. ¿Cuál es la lección aprendida principal que debe documentarse para futuros proyectos?",
        options: [
            "Los inspectores del propietario no deben tener comunicación directa con los contratistas.",
            "Las instrucciones verbales que modifican el alcance son una práctica inadecuada; todo cambio debe documentarse formalmente mediante el proceso de órdenes de cambio independientemente del nivel jerárquico del emisor.",
            "El contratista debería haber solicitado compensación inmediata al recibir la instrucción verbal.",
            "El inspector actuó correctamente; la reclamación es infundada."
        ],
        answer: ["Las instrucciones verbales que modifican el alcance son una práctica inadecuada; todo cambio debe documentarse formalmente mediante el proceso de órdenes de cambio independientemente del nivel jerárquico del emisor."],
        rationale: "La Tarea 3 del Dominio I establece usar lecciones aprendidas para identificar áreas problemáticas y aplicar mejores prácticas. Las instrucciones verbales sin documentación son una causa frecuente de reclamaciones en la industria. La lección aprendida debe reforzar el protocolo de que cualquier cambio de alcance, independientemente de su tamaño o de quién lo emita, debe procesarse formalmente.",
        tags: { format: "opción_única", domain: "gestión_de_contratos", method: "predictivo", cognitive: "aplicación" }
    },
    {
        question: "Ordena los pasos para implementar la gestión de interfaces en un proyecto de construcción desde la planificación hasta el cierre según el ECO PMI-CP:",
        options: [
            "Cerrar formalmente cada punto de interfaz cuando ambas partes confirman su resolución",
            "Clasificar los tipos de interfaces del proyecto",
            "Establecer y planificar todos los puntos de interfaz entre paquetes",
            "Monitorear el estado de los puntos de interfaz durante la ejecución",
            "Diseñar y aplicar prácticas efectivas de gestión de interfaces usando marcos de la industria"
        ],
        answer: [
            "Establecer y planificar todos los puntos de interfaz entre paquetes",
            "Clasificar los tipos de interfaces del proyecto",
            "Diseñar y aplicar prácticas efectivas de gestión de interfaces usando marcos de la industria",
            "Monitorear el estado de los puntos de interfaz durante la ejecución",
            "Cerrar formalmente cada punto de interfaz cuando ambas partes confirman su resolución"
        ],
        rationale: "La Tarea 5 del Dominio I establece el ciclo completo de gestión de interfaces: planificación de puntos de interfaz → clasificación → diseño de prácticas → monitoreo durante ejecución → cierre formal. El cierre formal de interfaces es crítico: garantiza que ambas partes confirman que el trabajo en ese punto de interfaz está completamente resuelto antes del cierre del proyecto.",
        tags: { format: "ordenamiento", domain: "gestión_de_contratos", method: "predictivo", cognitive: "conocimiento" }
    },

    // ─── DOMINIO II: PARTICIPACIÓN DE INTERESADOS +12 ─────────────────────────

    {
        question: "El profesional de construcción de un proyecto de subestación rural identifica que las autoridades municipales locales no han sido involucradas en la planificación. Al consultar con ellas, descubre preocupaciones sobre el impacto en vías locales durante la construcción. ¿Cuál es el impacto de no haberlas identificado desde el inicio?",
        options: [
            "Ninguno; las autoridades municipales no son interesados relevantes en proyectos de infraestructura eléctrica.",
            "La identificación tardía de un interesado con poder de bloqueo (permisos de uso de vías) puede generar retrasos significativos en la fase de construcción que podrían haberse evitado con una gestión temprana.",
            "El impacto es solo reputacional para la organización propietaria.",
            "Las autoridades municipales deben ser ignoradas ya que su jurisdicción no aplica a proyectos de infraestructura nacional."
        ],
        answer: ["La identificación tardía de un interesado con poder de bloqueo (permisos de uso de vías) puede generar retrasos significativos en la fase de construcción que podrían haberse evitado con una gestión temprana."],
        rationale: "La Tarea 4 del Dominio II establece identificar y evaluar a los interesados para establecer una estrategia de comunicación efectiva. Los interesados con poder de bloqueo identificados tardíamente son especialmente costosos: tienen la capacidad de detener actividades críticas en un momento en que las presiones de tiempo y costo son máximas. La identificación temprana permite gestionar sus preocupaciones preventivamente.",
        tags: { format: "opción_única", domain: "participación_de_interesados", method: "predictivo", cognitive: "análisis" }
    },
    {
        question: "La comunidad cercana a una línea de transmisión en construcción tiene preocupaciones sobre campos electromagnéticos. El equipo del proyecto tiene estudios técnicos que demuestran que los niveles están dentro de los estándares regulatorios. La comunidad no acepta estos argumentos. ¿Cuál es la causa probable de la brecha de comunicación?",
        options: [
            "La comunidad no tiene la formación técnica para entender los estudios.",
            "Los estudios técnicos son incorrectos y deben revisarse.",
            "Los mensajes técnicos no están siendo comunicados de manera matizada para la audiencia específica; los argumentos regulatorios no responden a las preocupaciones emocionales y culturales de la comunidad.",
            "La brecha es inevitable y debe resolverse mediante acción legal."
        ],
        answer: ["Los mensajes técnicos no están siendo comunicados de manera matizada para la audiencia específica; los argumentos regulatorios no responden a las preocupaciones emocionales y culturales de la comunidad."],
        rationale: "La Tarea 2 del Dominio II establece crear mensajes que mejoren la comprensión para audiencias específicas y utilizar métodos de comunicación matizados. Las preocupaciones comunitarias sobre salud son frecuentemente emocionales y culturales, no técnicas. Responder solo con datos técnicos a preocupaciones emocionales no resuelve la brecha; se necesitan mensajes que reconozcan las preocupaciones y las respondan en el lenguaje de la comunidad.",
        tags: { format: "opción_única", domain: "participación_de_interesados", method: "predictivo", cognitive: "análisis" }
    },
    {
        question: "En un proyecto de construcción de infraestructura eléctrica en etapa de inicio, el profesional de construcción realiza el análisis de interesados y los clasifica en una matriz de poder/interés. Un regulador gubernamental tiene alto poder y bajo interés actual. ¿Cuál es la estrategia correcta para este interesado?",
        options: [
            "Ignorarlo ya que su bajo interés indica que no afectará el proyecto.",
            "Mantenerlo informado proactivamente sobre el cumplimiento regulatorio para prevenir que su poder se active negativamente si surge algún incumplimiento.",
            "Convertirlo en un defensor del proyecto involucrándolo activamente en las decisiones.",
            "Transferir la responsabilidad de gestión de este interesado al área legal de la organización."
        ],
        answer: ["Mantenerlo informado proactivamente sobre el cumplimiento regulatorio para prevenir que su poder se active negativamente si surge algún incumplimiento."],
        rationale: "La Tarea 4 del Dominio II establece identificar y evaluar a los interesados para establecer una estrategia de comunicación efectiva. Un regulador con alto poder y bajo interés debe mantenerse satisfecho: aunque no esté activamente involucrado, tiene la capacidad de generar interrupciones significativas si detecta incumplimientos. La comunicación proactiva sobre cumplimiento previene que su poder se active de forma adversa.",
        tags: { format: "opción_única", domain: "participación_de_interesados", method: "predictivo", cognitive: "aplicación" }
    },
    {
        question: "El equipo de un proyecto de construcción de planta industrial usa un PMIS para gestionar la comunicación. Varios interesados reportan que reciben demasiada información irrelevante y han dejado de leer los reportes del sistema. ¿Cuál es el problema y la solución correcta?",
        options: [
            "El PMIS debe reemplazarse por un sistema más moderno.",
            "El PMIS no fue configurado para enviar información diferenciada por audiencia; debe ajustarse para que cada interesado reciba solo la información relevante para su rol e intereses.",
            "Los interesados deben recibir capacitación para usar el PMIS correctamente.",
            "Debe reducirse la frecuencia de todos los reportes a mensual para disminuir el volumen de información."
        ],
        answer: ["El PMIS no fue configurado para enviar información diferenciada por audiencia; debe ajustarse para que cada interesado reciba solo la información relevante para su rol e intereses."],
        rationale: "La Tarea 1 del Dominio II establece utilizar el PMIS para mejorar la comunicación y las decisiones del proyecto. Un PMIS que envía información masiva e indiferenciada genera sobrecarga de información, que es tan dañina como la falta de información. La solución es configurar el sistema para filtrar y personalizar la información según el perfil de cada interesado.",
        tags: { format: "opción_única", domain: "participación_de_interesados", method: "predictivo", cognitive: "aplicación" }
    },
    {
        question: "¿Cuáles de los siguientes son componentes de una estrategia de comunicación efectiva para un proyecto de construcción de infraestructura según el ECO PMI-CP? (Selecciona todos los que apliquen)",
        options: [
            "Identificar y satisfacer todas las necesidades de comunicación del proyecto.",
            "Crear mensajes diferenciados para distintas audiencias.",
            "Usar un único canal de comunicación para garantizar consistencia.",
            "Prevenir los efectos de la mala comunicación desde perspectivas financieras y de cierre del proyecto.",
            "Aplicar enfoques para aumentar la participación de los interesados desde el inicio del proyecto."
        ],
        answer: [
            "Identificar y satisfacer todas las necesidades de comunicación del proyecto.",
            "Crear mensajes diferenciados para distintas audiencias.",
            "Prevenir los efectos de la mala comunicación desde perspectivas financieras y de cierre del proyecto.",
            "Aplicar enfoques para aumentar la participación de los interesados desde el inicio del proyecto."
        ],
        rationale: "La Tarea 2 del Dominio II incluye todos estos elementos excepto usar un único canal. Una estrategia de comunicación efectiva usa múltiples canales adaptados a cada audiencia; insistir en un único canal puede ser inadecuado para interesados con diferentes preferencias o acceso tecnológico.",
        tags: { format: "opción_múltiple", domain: "participación_de_interesados", method: "predictivo", cognitive: "conocimiento" }
    },
    {
        question: "El profesional de construcción implementa ciclos de retroalimentación con los interesados del proyecto. Al revisar los resultados del primer ciclo, identifica que el equipo técnico del propietario no entiende los informes de avance del contratista. ¿Cuál debe ser el plan de acción?",
        options: [
            "Reemplazar al equipo técnico del propietario por personal con mayor experiencia.",
            "Desarrollar un plan de acción específico: identificar qué elementos del informe generan confusión, rediseñar el formato para esa audiencia y validar con el equipo técnico antes de implementar.",
            "Simplificar todos los informes al nivel más básico para que todos los puedan entender.",
            "Capacitar al equipo técnico del propietario en los formatos de informe del contratista."
        ],
        answer: ["Desarrollar un plan de acción específico: identificar qué elementos del informe generan confusión, rediseñar el formato para esa audiencia y validar con el equipo técnico antes de implementar."],
        rationale: "La Tarea 3 del Dominio II establece desarrollar planes de acción para resolver brechas de comunicación e implementar ciclos de retroalimentación. El plan de acción debe ser específico para la brecha identificada: no es lo mismo simplificar un informe complejo que rediseñarlo para una audiencia técnica específica. La validación con el equipo antes de implementar garantiza que la solución responde a la necesidad real.",
        tags: { format: "opción_única", domain: "participación_de_interesados", method: "predictivo", cognitive: "aplicación" }
    },
    {
        question: "El profesional de construcción de un megaproyecto de transmisión eléctrica implementa la sala Obeya para mejorar la coordinación entre los equipos de ingeniería, adquisiciones y construcción. Después de dos meses, el equipo de adquisiciones deja de asistir regularmente. ¿Cuál es la acción correcta?",
        options: [
            "Continuar con la Obeya sin el equipo de adquisiciones ya que su participación no es crítica.",
            "Investigar por qué el equipo de adquisiciones dejó de asistir: puede indicar que la Obeya no está siendo relevante para sus necesidades específicas o que hay un problema de compromiso de liderazgo.",
            "Hacer obligatoria la asistencia del equipo de adquisiciones mediante instrucción directiva.",
            "Suspender la Obeya ya que no está funcionando como se esperaba."
        ],
        answer: ["Investigar por qué el equipo de adquisiciones dejó de asistir: puede indicar que la Obeya no está siendo relevante para sus necesidades específicas o que hay un problema de compromiso de liderazgo."],
        rationale: "La Tarea 1 del Dominio II establece reconocer los pitfalls de la Obeya/Big Room. La deserción de un equipo es una señal de que la Obeya no está generando valor para ese grupo. La investigación puede revelar que las discusiones no son relevantes para adquisiciones, que el tiempo de reunión no les conviene, o que su liderazgo no valora su participación. Imponer la asistencia sin resolver la causa raíz perpetúa el problema.",
        tags: { format: "opción_única", domain: "participación_de_interesados", method: "híbrido", cognitive: "análisis" }
    },
    {
        question: "En un proyecto de construcción de planta industrial con contratistas de cuatro países, el profesional de construcción nota que las negociaciones de cambios de alcance son tensas porque los representantes del contratista latinoamericano esperan un proceso de negociación relacional más largo, mientras el propietario europeo quiere decisiones rápidas. ¿Qué debe hacer el profesional?",
        options: [
            "Imponer el estilo de negociación europeo por ser el propietario del proyecto.",
            "Reconocer el impacto de las diferencias culturales en los estilos de comunicación y negociación, y facilitar un proceso que respete ambos enfoques sin sacrificar la eficiencia del proyecto.",
            "Eliminar las negociaciones directas y reemplazarlas por comunicación escrita exclusivamente.",
            "Contratar un intérprete cultural para cada reunión de negociación."
        ],
        answer: ["Reconocer el impacto de las diferencias culturales en los estilos de comunicación y negociación, y facilitar un proceso que respete ambos enfoques sin sacrificar la eficiencia del proyecto."],
        rationale: "La Tarea 4 del Dominio II establece reconocer el rol de la cultura y su impacto en la comunicación con los interesados. Las diferencias en estilos de negociación son un obstáculo real en proyectos multinacionales. El profesional de construcción debe facilitar un proceso que sea efectivo para ambas culturas: puede incluir reuniones de construcción de relación antes de las negociaciones de alcance formales.",
        tags: { format: "opción_única", domain: "participación_de_interesados", method: "predictivo", cognitive: "aplicación" }
    },
    {
        question: "El profesional de construcción aplica la herramienta Compass para evaluar la comunicación en su proyecto. Los resultados muestran deficiencias en el flujo de información entre el equipo de diseño y el equipo de construcción en campo. ¿Cuál es la acción correcta según el ECO PMI-CP?",
        options: [
            "Documentar las deficiencias en el informe de lecciones aprendidas al cierre del proyecto.",
            "Evaluar los datos del Compass para inferir las causas de la deficiencia y desarrollar un plan de acción que mejore los canales de comunicación entre diseño y campo.",
            "Reemplazar la herramienta Compass por un sistema de comunicación más moderno.",
            "Informar al patrocinador del proyecto que hay problemas de comunicación sin proponer soluciones."
        ],
        answer: ["Evaluar los datos del Compass para inferir las causas de la deficiencia y desarrollar un plan de acción que mejore los canales de comunicación entre diseño y campo."],
        rationale: "La Tarea 1 del Dominio II establece usar la herramienta Compass para identificar deficiencias de comunicación, evaluar los datos recopilados para inferir perspectivas significativas y tomar acción. El diagnóstico del Compass sin un plan de acción es incompleto. La brecha entre diseño y campo en construcción es especialmente crítica porque genera re-trabajos, cambios de alcance y reclamaciones.",
        tags: { format: "opción_única", domain: "participación_de_interesados", method: "predictivo", cognitive: "aplicación" }
    },
    {
        question: "Durante la construcción de una línea de transmisión, el equipo del propietario aplica Commitment-based Management (CbM) para coordinar con los contratistas. Al revisar el registro de compromisos, el profesional nota que el 35% de los compromisos del contratista eléctrico no se cumplen en la fecha acordada. ¿Cuál es el primer paso correcto?",
        options: [
            "Emitir una carta de incumplimiento formal al contratista eléctrico.",
            "Analizar el patrón de incumplimientos para entender si hay una causa sistémica: recursos insuficientes, compromisos irrealistas desde el inicio, impedimentos externos no comunicados, o falta de consecuencias por incumplimiento.",
            "Reemplazar al representante del contratista eléctrico en las reuniones de CbM.",
            "Eliminar el CbM ya que el contratista eléctrico no respeta los compromisos."
        ],
        answer: ["Analizar el patrón de incumplimientos para entender si hay una causa sistémica: recursos insuficientes, compromisos irrealistas desde el inicio, impedimentos externos no comunicados, o falta de consecuencias por incumplimiento."],
        rationale: "La Tarea 1 del Dominio II establece aplicar la CbM para lograr resultados efectivos. Un 35% de incumplimiento es una señal de que algo en el sistema de compromisos no funciona. Antes de escalar, el profesional debe diagnosticar la causa raíz: los compromisos pueden ser irrealistas, puede haber impedimentos no comunicados o el sistema puede carecer de consecuencias que generen accountability real.",
        tags: { format: "opción_única", domain: "participación_de_interesados", method: "ágil", cognitive: "análisis" }
    },
    {
        question: "¿Cuáles de las siguientes situaciones requieren la activación del ciclo de retroalimentación para resolver brechas de comunicación según el ECO PMI-CP? (Selecciona todas las que apliquen)",
        options: [
            "El equipo de construcción en campo no recibe las actualizaciones de planos a tiempo para planificar sus actividades.",
            "El patrocinador del proyecto solicita más detalle técnico en los informes de avance.",
            "Todos los interesados están satisfechos con la comunicación actual del proyecto.",
            "Las autoridades regulatorias no están recibiendo la documentación de cumplimiento en los plazos requeridos.",
            "Un subcontratista reporta que no entiende las instrucciones de cambio de alcance que recibe del contratista general."
        ],
        answer: [
            "El equipo de construcción en campo no recibe las actualizaciones de planos a tiempo para planificar sus actividades.",
            "El patrocinador del proyecto solicita más detalle técnico en los informes de avance.",
            "Las autoridades regulatorias no están recibiendo la documentación de cumplimiento en los plazos requeridos.",
            "Un subcontratista reporta que no entiende las instrucciones de cambio de alcance que recibe del contratista general."
        ],
        rationale: "La Tarea 3 del Dominio II establece implementar ciclos de retroalimentación para identificar y resolver brechas de comunicación. Las tres situaciones descritas son brechas reales: planos tardíos afectan la planificación, la insatisfacción del patrocinador afecta el soporte al proyecto, el incumplimiento con reguladores puede generar sanciones, y las instrucciones incomprendidas generan re-trabajos. Cuando todos están satisfechos no hay brecha que resolver.",
        tags: { format: "opción_múltiple", domain: "participación_de_interesados", method: "predictivo", cognitive: "aplicación" }
    },
    {
        question: "El profesional de construcción de un proyecto de infraestructura eléctrica decide implementar sesiones de Obeya semanales con los líderes de todos los paquetes de trabajo. Para garantizar que las sesiones sean efectivas, ¿qué principios de diseño debe aplicar?",
        options: [
            "Las sesiones deben durar al menos 3 horas para cubrir todos los temas del proyecto.",
            "Los indicadores visuales deben actualizarse antes de cada sesión, las discusiones deben ser breves y orientadas a decisiones, y cada indicador debe tener un responsable claramente asignado.",
            "Solo deben asistir los líderes con problemas activos para no desperdiciar el tiempo de los demás.",
            "Las sesiones de Obeya deben reemplazar todas las demás reuniones de coordinación del proyecto."
        ],
        answer: ["Los indicadores visuales deben actualizarse antes de cada sesión, las discusiones deben ser breves y orientadas a decisiones, y cada indicador debe tener un responsable claramente asignado."],
        rationale: "La Tarea 1 del Dominio II establece utilizar Obeya/Big Room correctamente y reconocer sus pitfalls. Los tres principios mencionados son la esencia de una Obeya efectiva: visualización actualizada (para que refleje la realidad actual), discusiones orientadas a decisiones (no a reportes de estatus) y responsabilidad asignada (para garantizar accountability). Sesiones largas y sin estructura son el pitfall más común.",
        tags: { format: "opción_única", domain: "participación_de_interesados", method: "ágil", cognitive: "aplicación" }
    },

    // ─── DOMINIO III: GESTIÓN DE ESTRATEGIAS Y ALCANCE +6 ──────────────────────

    {
        question: "El propietario de un proyecto de construcción de subestación quiere agregar un sistema de monitoreo remoto de activos que no estaba en el diseño original. El profesional de construcción evalúa que este sistema alinea perfectamente con los resultados operacionales del proyecto y puede incorporarse sin impacto crítico en cronograma. ¿Cuál es la acción correcta?",
        options: [
            "Rechazar el cambio para proteger el cronograma original.",
            "Evaluar el cambio mediante el proceso formal de órdenes de cambio, confirmar su alineamiento con los resultados del proyecto, y si el análisis es favorable, proceder con la aprobación formal y la actualización de contratos afectados.",
            "Incorporar el cambio informalmente sin documentación para agilizar el proceso.",
            "Posponer la decisión hasta el próximo ciclo de revisión trimestral del alcance."
        ],
        answer: ["Evaluar el cambio mediante el proceso formal de órdenes de cambio, confirmar su alineamiento con los resultados del proyecto, y si el análisis es favorable, proceder con la aprobación formal y la actualización de contratos afectados."],
        rationale: "La Tarea 2 del Dominio III establece implementar y gestionar el proceso de órdenes de cambio efectivamente y evaluar todos los cambios en relación con los resultados del proyecto. Un cambio que alinea con los resultados y no impacta críticamente el cronograma puede ser aprobado, pero siempre mediante el proceso formal. La informalidad crea las condiciones para reclamaciones futuras.",
        tags: { format: "opción_única", domain: "gestión_de_estrategias_y_alcance", method: "predictivo", cognitive: "aplicación" }
    },
    {
        question: "El análisis costo-beneficio de un cambio de alcance propuesto para un proyecto de línea de transmisión muestra: costo del cambio $800,000, beneficio operacional neto en 10 años $3,200,000, impacto en cronograma: 15 días de retraso. ¿Cómo debe el profesional de construcción presentar esta evaluación al comité directivo?",
        options: [
            "Recomendar el rechazo ya que genera un retraso de 15 días.",
            "Recomendar la aprobación ya que el beneficio es claramente superior al costo, y presentar el retraso de 15 días como una variable que el comité debe valorar contra el retorno de $2.4M adicionales.",
            "Abstenerse de hacer recomendaciones; el comité debe decidir sin influencia del profesional.",
            "Recomendar una versión reducida del cambio que no genere retraso."
        ],
        answer: ["Recomendar la aprobación ya que el beneficio es claramente superior al costo, y presentar el retraso de 15 días como una variable que el comité debe valorar contra el retorno de $2.4M adicionales."],
        rationale: "La Tarea 3 del Dominio III establece aplicar el análisis costo-beneficio como herramienta de gestión de alcance. Un ratio beneficio/costo de 4:1 ($3.2M vs $800K) es favorable. El profesional de construcción debe hacer una recomendación fundamentada, no abstenerse. El retraso de 15 días debe contextualizarse: el comité puede valorarlo de manera diferente conociendo el retorno adicional.",
        tags: { format: "opción_única", domain: "gestión_de_estrategias_y_alcance", method: "predictivo", cognitive: "análisis" }
    },
    {
        question: "La organización propietaria de un proyecto de construcción de planta industrial establece que todos los cambios de alcance deben aprobarse antes del inicio de la fase de construcción (congelamiento de diseño). Sin embargo, durante la construcción surgen cambios necesarios por condiciones de campo imprevistas. ¿Cuál es el enfoque correcto?",
        options: [
            "Ignorar la política de congelamiento ya que las condiciones de campo no podían preverse.",
            "Aplicar el principio de finalizar el proceso de cambios en la parte adecuada del ciclo de vida: el congelamiento aplica a cambios discrecionales; los cambios necesarios por condiciones imprevistas deben gestionarse mediante un proceso ágil de órdenes de cambio de campo con autorización expedita.",
            "Cancelar el proyecto hasta que todos los cambios necesarios sean evaluados formalmente.",
            "Instruir al contratista a continuar con el diseño original ignorando las condiciones de campo."
        ],
        answer: ["Aplicar el principio de finalizar el proceso de cambios en la parte adecuada del ciclo de vida: el congelamiento aplica a cambios discrecionales; los cambios necesarios por condiciones imprevistas deben gestionarse mediante un proceso ágil de órdenes de cambio de campo con autorización expedita."],
        rationale: "La Tarea 2 del Dominio III establece finalizar el proceso de cambio en la parte del ciclo de vida que corresponda y diseñar procesos ágiles para cambios urgentes. Las políticas de congelamiento se diseñan para prevenir el scope creep discrecional, no para impedir la respuesta a condiciones técnicas reales. Un proceso expedito para cambios de campo es una práctica estándar en la industria de construcción.",
        tags: { format: "opción_única", domain: "gestión_de_estrategias_y_alcance", method: "híbrido", cognitive: "análisis" }
    },
    {
        question: "La PMO de una empresa constructora implementa una herramienta digital para gestionar las órdenes de cambio. Los gerentes de proyecto reportan que la herramienta ha reducido el tiempo de procesamiento pero ha creado una dependencia: cuando el sistema falla, el proceso de cambios se paraliza completamente. ¿Cómo debe el profesional interpretar este resultado según el ECO PMI-CP?",
        options: [
            "El beneficio de velocidad supera el riesgo de dependencia; debe mantenerse el sistema como único canal.",
            "Este es un ejemplo del inconveniente de usar tecnología para gestionar el alcance: la eficiencia digital puede crear fragilidad cuando el sistema falla. Debe desarrollarse un proceso de respaldo.",
            "El sistema debe reemplazarse por uno más robusto inmediatamente.",
            "Los gerentes de proyecto deben capacitarse para no depender de herramientas digitales."
        ],
        answer: ["Este es un ejemplo del inconveniente de usar tecnología para gestionar el alcance: la eficiencia digital puede crear fragilidad cuando el sistema falla. Debe desarrollarse un proceso de respaldo."],
        rationale: "La Tarea 2 del Dominio III establece reconocer los beneficios y los inconvenientes de usar tecnología para gestionar el alcance y las órdenes de cambio. La dependencia total de una herramienta digital es un riesgo operativo real. La solución equilibrada combina el beneficio de eficiencia de la herramienta con un proceso de respaldo para continuidad cuando el sistema no está disponible.",
        tags: { format: "opción_única", domain: "gestión_de_estrategias_y_alcance", method: "predictivo", cognitive: "análisis" }
    },
    {
        question: "¿Cuáles de los siguientes son elementos de un proceso robusto de gestión de órdenes de cambio en proyectos de construcción según el ECO PMI-CP? (Selecciona todos los que apliquen)",
        options: [
            "Un proceso estructurado y predefinido para evaluar y aprobar cambios.",
            "La evaluación de cada cambio en relación con los resultados del proyecto.",
            "La aprobación automática de todos los cambios solicitados por el propietario.",
            "La finalización del proceso de cambios en el momento adecuado del ciclo de vida del proyecto.",
            "Un proceso ágil para gestionar cambios urgentes de campo de manera eficiente."
        ],
        answer: [
            "Un proceso estructurado y predefinido para evaluar y aprobar cambios.",
            "La evaluación de cada cambio en relación con los resultados del proyecto.",
            "La finalización del proceso de cambios en el momento adecuado del ciclo de vida del proyecto.",
            "Un proceso ágil para gestionar cambios urgentes de campo de manera eficiente."
        ],
        rationale: "La Tarea 2 del Dominio III incluye todos estos elementos excepto la aprobación automática. La aprobación automática de cambios es la antítesis de una gestión de alcance disciplinada: todos los cambios deben evaluarse contra los resultados del proyecto antes de aprobarse, independientemente de quién los solicite.",
        tags: { format: "opción_múltiple", domain: "gestión_de_estrategias_y_alcance", method: "predictivo", cognitive: "conocimiento" }
    },
    {
        question: "Al revisar el alcance de un proyecto de modernización de subestación, el profesional de construcción aplica una herramienta de evaluación de alcance e identifica que el diseño actual incluye redundancias en los sistemas de protección que superan los estándares regulatorios en un 40%. ¿Cuál es la acción correcta?",
        options: [
            "Mantener el diseño actual ya que más protección siempre es mejor.",
            "Aplicar ingeniería de valor para analizar si las redundancias adicionales generan un beneficio operacional proporcional a su costo, y optimizar el diseño si el análisis muestra que pueden reducirse sin comprometer la seguridad requerida.",
            "Eliminar todas las redundancias para reducir costos al máximo.",
            "Escalar la situación al regulador para que determine el nivel de redundancia requerido."
        ],
        answer: ["Aplicar ingeniería de valor para analizar si las redundancias adicionales generan un beneficio operacional proporcional a su costo, y optimizar el diseño si el análisis muestra que pueden reducirse sin comprometer la seguridad requerida."],
        rationale: "La Tarea 3 del Dominio III establece aplicar la ingeniería de valor como herramienta de gestión de alcance. Las redundancias que superan los estándares en un 40% son candidatas para análisis de valor: ¿qué función adicional proveen? ¿Ese beneficio justifica el costo adicional? La ingeniería de valor responde esta pregunta sistemáticamente, permitiendo optimizar el alcance sin sacrificar la seguridad requerida.",
        tags: { format: "opción_única", domain: "gestión_de_estrategias_y_alcance", method: "predictivo", cognitive: "aplicación" }
    },

    // ─── DOMINIO IV: GOBERNANZA DEL PROYECTO +2 ────────────────────────────────

    {
        question: "El comité directivo de un proyecto de construcción de infraestructura eléctrica nota que las decisiones sobre cambios de alcance se toman en diferentes niveles de la organización sin criterios claros sobre qué decisiones requieren aprobación del comité versus las que puede aprobar el gerente del proyecto. ¿Cuál es la solución correcta según el Dominio IV del ECO PMI-CP?",
        options: [
            "Centralizar todas las decisiones de cambio en el comité directivo para garantizar control.",
            "Implementar un modelo de gobernanza que defina claramente los niveles de autoridad para la toma de decisiones sobre cambios de alcance, con umbrales por impacto en costo, cronograma y riesgo.",
            "Delegar todas las decisiones de cambio al gerente de proyecto para agilizar el proceso.",
            "Establecer una regla simple: todos los cambios de más de $50,000 van al comité directivo."
        ],
        answer: ["Implementar un modelo de gobernanza que defina claramente los niveles de autoridad para la toma de decisiones sobre cambios de alcance, con umbrales por impacto en costo, cronograma y riesgo."],
        rationale: "La Tarea 1 del Dominio IV establece implementar modelos de gobernanza para impulsar los resultados del proyecto. Un modelo de gobernanza efectivo define la matriz de autoridad de decisiones: qué puede decidir el gerente de proyecto, qué requiere aprobación del director, qué va al comité directivo. Los umbrales deben considerar múltiples dimensiones de impacto, no solo el costo.",
        tags: { format: "opción_única", domain: "gobernanza_del_proyecto", method: "predictivo", cognitive: "aplicación" }
    },
    {
        question: "La organización implementa prácticas de gobernanza del alcance en sus proyectos de construcción. El equipo del proyecto reporta que las prácticas son burocráticas y generan más trabajo que el valor que aportan. ¿Cuál es la causa más probable y la acción correcta según el Dominio IV del ECO PMI-CP?",
        options: [
            "La gobernanza del alcance es inherentemente burocrática y no puede simplificarse.",
            "Las estructuras y prácticas de gobernanza no fueron diseñadas específicamente para el contexto de proyectos del entorno de la construcción; deben revisarse y adaptarse para ser efectivas y proporcionales al tamaño y riesgo de cada proyecto.",
            "El equipo del proyecto debe aceptar la burocracia como parte de los estándares de gobernanza.",
            "Debe eliminarse la gobernanza del alcance para liberar tiempo del equipo de proyecto."
        ],
        answer: ["Las estructuras y prácticas de gobernanza no fueron diseñadas específicamente para el contexto de proyectos del entorno de la construcción; deben revisarse y adaptarse para ser efectivas y proporcionales al tamaño y riesgo de cada proyecto."],
        rationale: "La Tarea 2 del Dominio IV establece establecer estructuras y prácticas de gobernanza del alcance específicamente para proyectos del entorno de la construcción. Una gobernanza percibida como burocrática sin valor genera rechazo y evasión. La gobernanza debe ser proporcional al tamaño y riesgo del proyecto: controles rigurosos para proyectos grandes y complejos, controles más ligeros para proyectos pequeños.",
        tags: { format: "opción_única", domain: "gobernanza_del_proyecto", method: "predictivo", cognitive: "análisis" }
    }

];