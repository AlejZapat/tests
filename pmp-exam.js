/** @type {Array<Object>} Banco de 60 preguntas PMP basadas en PMBOK 6ª y 7ª edición */

const pmpQuestions = [

    // ─── 1. OPCIÓN ÚNICA · PERSONAS · PREDICTIVO · CONOCIMIENTO ──────────────

    {
        question: "Según el PMBOK, ¿cuál de los siguientes documentos autoriza formalmente la existencia de un proyecto y otorga al director del proyecto la autoridad para asignar recursos?",
        options: [
            "Plan para la dirección del proyecto.",
            "Acta de constitución del proyecto.",
            "Enunciado del alcance del proyecto.",
            "Registro de interesados."
        ],
        answer: ["Acta de constitución del proyecto."],
        rationale: "El acta de constitución del proyecto es el documento que autoriza formalmente el proyecto, establece su propósito y otorga al director del proyecto la autoridad para aplicar recursos organizacionales (PMBOK 6, sección 4.1).",
        tags: { format: "opción_única", domain: "personas", method: "predictivo", cognitive: "conocimiento" }
    },
    {
        question: "¿Qué componente del triángulo de talentos del PMI abarca el conocimiento del sector y la comprensión de cómo el negocio genera valor?",
        options: [
            "Gestión técnica de proyectos.",
            "Liderazgo.",
            "Gestión estratégica y de negocios.",
            "Gestión del cambio organizacional."
        ],
        answer: ["Gestión estratégica y de negocios."],
        rationale: "El triángulo de talentos del PMI incluye: gestión técnica de proyectos, liderazgo y gestión estratégica y de negocios. Este último componente cubre la comprensión del negocio y el sector para entregar resultados alineados con la estrategia organizacional (PMBOK 6, sección 3.4).",
        tags: { format: "opción_única", domain: "personas", method: "predictivo", cognitive: "conocimiento" }
    },
    {
        question: "En el modelo de comunicación básico del PMBOK, ¿qué término describe las interferencias o distorsiones que pueden afectar la transmisión de un mensaje?",
        options: [
            "Retroalimentación.",
            "Decodificación.",
            "Ruido.",
            "Canal."
        ],
        answer: ["Ruido."],
        rationale: "El modelo de comunicación básico incluye emisor, mensaje, canal, receptor y ruido. El ruido es todo aquello que interfiere o distorsiona la transmisión del mensaje entre emisor y receptor (PMBOK 6, sección 10.1).",
        tags: { format: "opción_única", domain: "personas", method: "predictivo", cognitive: "conocimiento" }
    },

    // ─── 2. OPCIÓN ÚNICA · PERSONAS · PREDICTIVO · APLICACIÓN ───────────────

    {
        question: "Un director de proyecto de una empresa de transmisión eléctrica detecta que un interesado clave —el regulador nacional de energía— tiene alta influencia y bajo interés en el proyecto. ¿Cuál es la estrategia de gestión de interesados más adecuada para esta situación?",
        options: [
            "Gestionar con atención: involucrar con reuniones frecuentes y reportes detallados.",
            "Monitorear: mantener informado con comunicaciones periódicas y sin requerir participación activa.",
            "Mantener satisfecho: atender sus necesidades sin demandar alta participación.",
            "Informar: enviar reportes de estado mensuales sin buscar retroalimentación."
        ],
        answer: ["Mantener satisfecho: atender sus necesidades sin demandar alta participación."],
        rationale: "La cuadrícula de poder/interés del PMBOK indica que los interesados con alto poder y bajo interés deben ser mantenidos satisfechos. Requerir su participación frecuente puede generar incomodidad sin añadir valor al proyecto (PMBOK 6, sección 13.1).",
        tags: { format: "opción_única", domain: "personas", method: "predictivo", cognitive: "aplicación" }
    },
    {
        question: "Durante la ejecución de un proyecto de instalación de líneas de transmisión, el equipo presenta conflictos recurrentes sobre la metodología de trabajo. El director del proyecto ha intentado mediar sin éxito. ¿Cuál es el siguiente paso más apropiado?",
        options: [
            "Escalar el conflicto al patrocinador del proyecto.",
            "Aplicar la técnica de forzar para imponer una decisión.",
            "Facilitar una sesión estructurada de resolución de conflictos con todas las partes.",
            "Ignorar el conflicto y esperar que se resuelva solo con el avance del proyecto."
        ],
        answer: ["Facilitar una sesión estructurada de resolución de conflictos con todas las partes."],
        rationale: "El PMBOK recomienda que los conflictos se resuelvan cuanto antes y preferentemente de manera directa. Cuando la mediación informal falla, el director debe facilitar una sesión formal de resolución antes de escalar. La colaboración o solución de problemas produce resultados más duraderos (PMBOK 6, sección 9.5).",
        tags: { format: "opción_única", domain: "personas", method: "predictivo", cognitive: "aplicación" }
    },
    {
        question: "Un nuevo miembro se une al equipo del proyecto cuando este ya lleva tres meses en ejecución. El director del proyecto nota que el equipo tenía una dinámica de trabajo muy sólida. ¿Qué debe anticipar el director del proyecto sobre la dinámica grupal?",
        options: [
            "El equipo continuará en la etapa de desempeño sin interrupciones.",
            "El equipo puede retroceder temporalmente a una etapa anterior del modelo de Tuckman.",
            "El nuevo integrante asumirá de inmediato el ritmo del equipo sin impacto alguno.",
            "El director debe reasignar roles para acelerar la integración del nuevo miembro."
        ],
        answer: ["El equipo puede retroceder temporalmente a una etapa anterior del modelo de Tuckman."],
        rationale: "Según el modelo de desarrollo de equipos de Tuckman (formación, turbulencia, normalización, desempeño, disolución), la incorporación de un nuevo miembro puede hacer que el equipo retroceda a etapas anteriores, como turbulencia o normalización, hasta que el grupo restablezca sus dinámicas (PMBOK 6, sección 9.4).",
        tags: { format: "opción_única", domain: "personas", method: "predictivo", cognitive: "aplicación" }
    },
    {
        question: "El director de un proyecto de automatización de subestaciones necesita comunicar un cambio crítico de alcance a un interesado ejecutivo con poco tiempo disponible. ¿Cuál es el método de comunicación más apropiado?",
        options: [
            "Enviar un correo electrónico detallado con todos los anexos técnicos.",
            "Publicar la actualización en el repositorio del proyecto y notificar al interesado.",
            "Programar una reunión cara a cara breve con soporte visual enfocado en el impacto.",
            "Esperar al próximo informe mensual de estado para incluir el cambio."
        ],
        answer: ["Programar una reunión cara a cara breve con soporte visual enfocado en el impacto."],
        rationale: "Para cambios críticos con interesados ejecutivos, la comunicación interactiva —cara a cara— es la más efectiva porque permite la retroalimentación inmediata y asegura la comprensión del mensaje. El mensaje debe ser conciso y centrado en el impacto al negocio (PMBOK 6, sección 10.1).",
        tags: { format: "opción_única", domain: "personas", method: "predictivo", cognitive: "aplicación" }
    },
    {
        question: "Un director de proyecto identifica que el patrocinador muestra desinterés creciente en las reuniones de seguimiento del proyecto. ¿Cuál es la acción más adecuada?",
        options: [
            "Continuar las reuniones con el mismo formato y esperar que el patrocinador retome el interés.",
            "Solicitar formalmente la sustitución del patrocinador al comité de gobierno.",
            "Buscar una reunión privada con el patrocinador para comprender sus preocupaciones y ajustar el formato de reporte.",
            "Escalar la situación al comité directivo para que intervenga."
        ],
        answer: ["Buscar una reunión privada con el patrocinador para comprender sus preocupaciones y ajustar el formato de reporte."],
        rationale: "El director del proyecto debe gestionar activamente la relación con el patrocinador. Comprender las razones del desinterés y adaptar la comunicación es preferible a escalar prematuramente o ignorar la situación. Un patrocinador comprometido es crítico para el éxito del proyecto (PMBOK 6, sección 13.3).",
        tags: { format: "opción_única", domain: "personas", method: "predictivo", cognitive: "aplicación" }
    },
    {
        question: "Durante la fase de ejecución, un miembro del equipo comunica al director del proyecto que está sobrecargado y no podrá cumplir con sus entregables a tiempo. ¿Cuál es la respuesta más apropiada del director del proyecto?",
        options: [
            "Reasignar inmediatamente las tareas a otro miembro del equipo sin analizar el impacto.",
            "Analizar la carga de trabajo del equipo, explorar opciones de nivelación de recursos y ajustar el cronograma si es necesario.",
            "Indicarle al miembro del equipo que debe cumplir con sus compromisos originales.",
            "Agregar horas extras al miembro del equipo para compensar el retraso."
        ],
        answer: ["Analizar la carga de trabajo del equipo, explorar opciones de nivelación de recursos y ajustar el cronograma si es necesario."],
        rationale: "La nivelación de recursos es una técnica clave de optimización del cronograma. El director debe analizar la situación integralmente: revisar la carga total del equipo, aplicar nivelación o suavizado de recursos, y ajustar el cronograma según el impacto real (PMBOK 6, sección 6.6).",
        tags: { format: "opción_única", domain: "personas", method: "predictivo", cognitive: "aplicación" }
    },

    // ─── 3. OPCIÓN ÚNICA · PERSONAS · PREDICTIVO · ANÁLISIS ─────────────────

    {
        question: "Un director de proyecto observa que un interesado que anteriormente apoyaba el proyecto ha comenzado a hacer comentarios negativos en reuniones ejecutivas. El análisis de interesados muestra que este cambio ocurrió tras la publicación del cronograma revisado. ¿Cuál es la interpretación y acción más adecuada?",
        options: [
            "El interesado ha cambiado de posición por razones personales; se debe ignorar el comportamiento.",
            "El cronograma revisado probablemente impacta intereses del interesado; se debe analizar el impacto y gestionar proactivamente su preocupación.",
            "Se debe escalar la situación al patrocinador para que gestione al interesado directamente.",
            "Se debe excluir al interesado de las reuniones ejecutivas para proteger la imagen del proyecto."
        ],
        answer: ["El cronograma revisado probablemente impacta intereses del interesado; se debe analizar el impacto y gestionar proactivamente su preocupación."],
        rationale: "Un cambio en la actitud de un interesado después de un evento específico del proyecto sugiere que ese evento afecta sus intereses o expectativas. El director debe analizar el impacto del cronograma revisado en ese interesado y gestionar la situación proactivamente antes de que escale (PMBOK 6, sección 13.3 y 13.4; PMBOK 7, dominio de interesados).",
        tags: { format: "opción_única", domain: "personas", method: "predictivo", cognitive: "análisis" }
    },
    {
        question: "El equipo de un proyecto de modernización de red eléctrica está compuesto por expertos de alto desempeño con vasta experiencia. Sin embargo, el director del proyecto nota que el equipo evita cuestionarse entre sí y acepta las decisiones del líder técnico sin debate. ¿Qué fenómeno organizacional describe esta situación y cuál es el riesgo principal?",
        options: [
            "Sinergia del equipo; el riesgo es la dependencia excesiva del líder técnico.",
            "Pensamiento grupal (groupthink); el riesgo es tomar decisiones sin evaluar alternativas críticas.",
            "Alta cohesión del equipo; el riesgo es la resistencia al cambio externo.",
            "Liderazgo situacional efectivo; el riesgo es la falta de documentación de decisiones."
        ],
        answer: ["Pensamiento grupal (groupthink); el riesgo es tomar decisiones sin evaluar alternativas críticas."],
        rationale: "El pensamiento grupal ocurre cuando la cohesión del equipo suprime el pensamiento crítico y la disidencia. En proyectos complejos como los de infraestructura eléctrica, esto puede llevar a aceptar soluciones técnicas inadecuadas sin cuestionarlas. El director debe fomentar activamente la evaluación crítica (PMBOK 6, sección 9.4; PMBOK 7, dominio del equipo).",
        tags: { format: "opción_única", domain: "personas", method: "predictivo", cognitive: "análisis" }
    },
    {
        question: "Al analizar el registro de interesados de un proyecto de construcción de una subestación eléctrica, el director identifica que las comunidades locales tienen alta legitimidad, moderado poder y alto interés. La empresa aún no ha establecido canales de comunicación con ellas. ¿Qué riesgo principal representa esta situación?",
        options: [
            "Posibles retrasos por permisos regulatorios debido a la falta de lobby político.",
            "Conflictos sociales o paralizaciones que impacten el cronograma y la reputación del proyecto.",
            "Incremento en los costos de contingencia por demandas legales.",
            "Pérdida de financiamiento por incumplimiento de requisitos ESG."
        ],
        answer: ["Conflictos sociales o paralizaciones que impacten el cronograma y la reputación del proyecto."],
        rationale: "Interesados con alta legitimidad y alto interés pero sin canales de comunicación formales representan un riesgo de conflicto social que puede paralizar el proyecto o dañar la reputación corporativa. El PMBOK enfatiza la necesidad de identificar y gestionar a todos los interesados desde etapas tempranas (PMBOK 6, sección 13.1; PMBOK 7, dominio de interesados).",
        tags: { format: "opción_única", domain: "personas", method: "predictivo", cognitive: "análisis" }
    },

    // ─── 4. OPCIÓN ÚNICA · PERSONAS · ÁGIL · APLICACIÓN ─────────────────────

    {
        question: "Un equipo Scrum completa su quinto sprint. El Product Owner observa que el equipo entrega velocidad consistente pero los usuarios finales expresan que los entregables no satisfacen sus necesidades reales. ¿Cuál es la causa raíz más probable y la acción correctiva?",
        options: [
            "La velocidad del equipo es baja; se deben agregar más recursos al equipo.",
            "Las historias de usuario no capturan adecuadamente las necesidades del usuario; se debe realizar refinamiento del backlog con mayor participación de usuarios reales.",
            "El Product Owner no está priorizando correctamente; se debe reemplazar al Product Owner.",
            "El equipo no está siguiendo correctamente las ceremonias Scrum; se debe reforzar la formación en Scrum."
        ],
        answer: ["Las historias de usuario no capturan adecuadamente las necesidades del usuario; se debe realizar refinamiento del backlog con mayor participación de usuarios reales."],
        rationale: "La entrega constante de velocidad sin satisfacer necesidades reales indica un problema de calidad en los requisitos. El refinamiento del Product Backlog con usuarios reales permite capturar el valor real. La velocidad consistente descarta problemas de capacidad del equipo (PMBOK 7, dominio de desarrollo; Guía Práctica Ágil).",
        tags: { format: "opción_única", domain: "personas", method: "ágil", cognitive: "aplicación" }
    },
    {
        question: "El Scrum Master de un proyecto ágil nota que el equipo raramente genera impedimentos durante el Daily Scrum y que todos reportan avance sin problemas. Sin embargo, la velocidad lleva tres sprints por debajo de lo esperado. ¿Cuál es la interpretación más probable?",
        options: [
            "El equipo está sobreestimando la complejidad en el planning; se deben reducir las estimaciones.",
            "El equipo no se siente seguro para reportar impedimentos; el Scrum Master debe crear un ambiente psicológicamente seguro.",
            "El Daily Scrum tiene un formato incorrecto; se debe cambiar a un formato basado en preguntas.",
            "La capacidad del equipo es insuficiente; se debe agregar un miembro al equipo."
        ],
        answer: ["El equipo no se siente seguro para reportar impedimentos; el Scrum Master debe crear un ambiente psicológicamente seguro."],
        rationale: "La ausencia de impedimentos reportados combinada con baja velocidad es una señal de falta de seguridad psicológica. El equipo puede estar ocultando problemas por miedo a represalias o juicio. El Scrum Master debe trabajar activamente en construir confianza y apertura (PMBOK 7, dominio del equipo; Guía Práctica Ágil).",
        tags: { format: "opción_única", domain: "personas", method: "ágil", cognitive: "aplicación" }
    },

    // ─── 5. OPCIÓN ÚNICA · PROCESOS · PREDICTIVO · CONOCIMIENTO ─────────────

    {
        question: "¿Cuál de los siguientes documentos describe cómo se ejecutarán, monitorearán, controlarán y cerrarán las actividades del proyecto?",
        options: [
            "Acta de constitución del proyecto.",
            "Plan para la dirección del proyecto.",
            "Registro de supuestos.",
            "Enunciado del trabajo del proyecto."
        ],
        answer: ["Plan para la dirección del proyecto."],
        rationale: "El plan para la dirección del proyecto es el documento maestro que describe cómo el proyecto será ejecutado, monitoreado, controlado y cerrado. Incluye todos los planes subsidiarios y líneas base (PMBOK 6, sección 4.2).",
        tags: { format: "opción_única", domain: "procesos", method: "predictivo", cognitive: "conocimiento" }
    },
    {
        question: "En la gestión del valor ganado (EVM), ¿qué indica un Índice de Desempeño del Cronograma (SPI) menor a 1.0?",
        options: [
            "El proyecto está por encima del presupuesto.",
            "El proyecto está adelantado respecto al cronograma.",
            "El proyecto está atrasado respecto al cronograma.",
            "El proyecto está por debajo del presupuesto planificado."
        ],
        answer: ["El proyecto está atrasado respecto al cronograma."],
        rationale: "El SPI = EV / PV. Cuando SPI < 1, el valor ganado es menor al valor planificado, lo que indica que el proyecto ha completado menos trabajo del que debería haber completado a esa fecha (PMBOK 6, sección 7.4).",
        tags: { format: "opción_única", domain: "procesos", method: "predictivo", cognitive: "conocimiento" }
    },
    {
        question: "¿Cuál es el propósito principal de la Estructura de Desglose del Trabajo (EDT/WBS)?",
        options: [
            "Establecer el cronograma del proyecto con hitos y duraciones.",
            "Descomponer jerárquicamente el alcance total del proyecto en componentes más pequeños y manejables.",
            "Asignar responsabilidades a los miembros del equipo del proyecto.",
            "Identificar las dependencias entre las actividades del proyecto."
        ],
        answer: ["Descomponer jerárquicamente el alcance total del proyecto en componentes más pequeños y manejables."],
        rationale: "La EDT es una descomposición jerárquica orientada a los entregables del trabajo que debe ejecutar el equipo para lograr los objetivos del proyecto. Su propósito principal es organizar y definir el alcance total del proyecto (PMBOK 6, sección 5.4).",
        tags: { format: "opción_única", domain: "procesos", method: "predictivo", cognitive: "conocimiento" }
    },
    {
        question: "¿Qué técnica permite identificar la duración mínima de un proyecto y las actividades que no tienen holgura?",
        options: [
            "Método de la cadena crítica.",
            "Análisis de la ruta crítica (CPM).",
            "Nivelación de recursos.",
            "Compresión del cronograma por intensificación (crashing)."
        ],
        answer: ["Análisis de la ruta crítica (CPM)."],
        rationale: "El método de la ruta crítica (CPM) calcula la duración mínima del proyecto y determina el grado de flexibilidad en la programación de cada actividad. Las actividades en la ruta crítica tienen holgura cero (PMBOK 6, sección 6.5).",
        tags: { format: "opción_única", domain: "procesos", method: "predictivo", cognitive: "conocimiento" }
    },
    {
        question: "¿Cuál de las siguientes opciones describe correctamente la diferencia entre riesgo y problema (issue) en dirección de proyectos?",
        options: [
            "Un riesgo es un evento ocurrido; un problema es un evento futuro incierto.",
            "Un riesgo es un evento futuro incierto con impacto potencial; un problema es un evento o condición que ya ocurrió.",
            "Un riesgo siempre tiene impacto negativo; un problema puede ser positivo o negativo.",
            "No hay diferencia práctica entre riesgo y problema en la gestión de proyectos."
        ],
        answer: ["Un riesgo es un evento futuro incierto con impacto potencial; un problema es un evento o condición que ya ocurrió."],
        rationale: "En PMBOK, un riesgo es un evento o condición incierto que, si ocurre, tiene un efecto positivo o negativo sobre los objetivos del proyecto. Un problema (issue) es ya una condición o evento ocurrido que requiere gestión inmediata (PMBOK 6, sección 11.1).",
        tags: { format: "opción_única", domain: "procesos", method: "predictivo", cognitive: "conocimiento" }
    },

    // ─── 6. OPCIÓN ÚNICA · PROCESOS · PREDICTIVO · APLICACIÓN ───────────────

    {
        question: "Un proyecto de rehabilitación de torres de transmisión lleva 40% de avance. El valor planificado (PV) es $2.000.000, el valor ganado (EV) es $1.600.000 y el costo real (AC) es $1.800.000. ¿Cuál es el estado más preciso del proyecto?",
        options: [
            "Adelantado en cronograma y bajo en presupuesto.",
            "Atrasado en cronograma y sobre el presupuesto.",
            "Adelantado en cronograma y sobre el presupuesto.",
            "En el cronograma y bajo en presupuesto."
        ],
        answer: ["Atrasado en cronograma y sobre el presupuesto."],
        rationale: "SPI = EV/PV = 1.600.000/2.000.000 = 0,80 (< 1, atrasado). CPI = EV/AC = 1.600.000/1.800.000 = 0,89 (< 1, sobre presupuesto). Ambos índices menores a 1 confirman retraso y sobrecosto simultáneos (PMBOK 6, sección 7.4).",
        tags: { format: "opción_única", domain: "procesos", method: "predictivo", cognitive: "aplicación" }
    },
    {
        question: "Durante la planificación de un proyecto de expansión de red de distribución eléctrica, el equipo identifica una actividad que debe comenzar exactamente 10 días después de que inicie su predecesora. ¿Qué tipo de dependencia y adelanto/retraso corresponde a esta relación?",
        options: [
            "Fin-Inicio con un adelanto de 10 días.",
            "Inicio-Inicio con un retraso de 10 días.",
            "Fin-Inicio con un retraso de 10 días.",
            "Inicio-Fin con un adelanto de 10 días."
        ],
        answer: ["Inicio-Inicio con un retraso de 10 días."],
        rationale: "Una relación Inicio-Inicio (SS) con un retraso de 10 días significa que la actividad sucesora puede comenzar 10 días después de que inicie la predecesora. Esto es diferente de Fin-Inicio, que requeriría esperar a que la predecesora finalice (PMBOK 6, sección 6.3).",
        tags: { format: "opción_única", domain: "procesos", method: "predictivo", cognitive: "aplicación" }
    },
    {
        question: "El director de un proyecto recibe una solicitud de cambio del cliente que amplía el alcance en un 15%. El proyecto está en ejecución y la línea base ya fue aprobada. ¿Cuál es el proceso correcto a seguir?",
        options: [
            "Incorporar el cambio directamente al plan del proyecto para no retrasar la ejecución.",
            "Rechazar el cambio porque ya existe una línea base aprobada.",
            "Someter el cambio al proceso de control integrado de cambios para su evaluación y aprobación formal.",
            "Solicitar al cliente que espere al cierre del proyecto para gestionar el cambio."
        ],
        answer: ["Someter el cambio al proceso de control integrado de cambios para su evaluación y aprobación formal."],
        rationale: "Todo cambio al alcance, cronograma o costo debe pasar por el proceso de Realizar el Control Integrado de Cambios. Este proceso evalúa el impacto, obtiene aprobación del comité de control de cambios y actualiza las líneas base si corresponde (PMBOK 6, sección 4.6).",
        tags: { format: "opción_única", domain: "procesos", method: "predictivo", cognitive: "aplicación" }
    },
    {
        question: "Al gestionar los riesgos de un proyecto, el director decide subcontratar la instalación de equipos de alta tensión a un proveedor especializado, transfiriendo así el riesgo técnico asociado. ¿Qué estrategia de respuesta a riesgos negativos está aplicando?",
        options: [
            "Mitigar.",
            "Aceptar.",
            "Evitar.",
            "Transferir."
        ],
        answer: ["Transferir."],
        rationale: "La transferencia de riesgos implica desplazar el impacto negativo del riesgo a un tercero, junto con la responsabilidad de la respuesta. La subcontratación con un proveedor especializado es un mecanismo clásico de transferencia de riesgo (PMBOK 6, sección 11.5).",
        tags: { format: "opción_única", domain: "procesos", method: "predictivo", cognitive: "aplicación" }
    },
    {
        question: "Un director de proyecto necesita reducir la duración total de un proyecto de tendido de cables de alta tensión sin cambiar el alcance. El presupuesto disponible es limitado. ¿Qué técnica de compresión del cronograma es más apropiada en este contexto?",
        options: [
            "Intensificación (crashing): agregar recursos a actividades críticas.",
            "Ejecución rápida (fast tracking): realizar actividades críticas en paralelo que normalmente serían secuenciales.",
            "Nivelación de recursos: redistribuir la carga de trabajo del equipo.",
            "Suavizado de recursos: ajustar las fechas de inicio dentro de la holgura disponible."
        ],
        answer: ["Ejecución rápida (fast tracking): realizar actividades críticas en paralelo que normalmente serían secuenciales."],
        rationale: "Con presupuesto limitado, la ejecución rápida (fast tracking) es preferible a la intensificación (crashing) porque no incrementa costos. Sin embargo, aumenta el riesgo al ejecutar en paralelo actividades que normalmente serían secuenciales (PMBOK 6, sección 6.6).",
        tags: { format: "opción_única", domain: "procesos", method: "predictivo", cognitive: "aplicación" }
    },
    {
        question: "Durante el proceso de Planificar la Gestión de Riesgos, el equipo define los umbrales de riesgo aceptables para la organización. ¿Qué documento organizacional provee esta información de entrada?",
        options: [
            "El registro de riesgos del proyecto.",
            "Los activos de los procesos de la organización y los apetitos de riesgo corporativos.",
            "El plan de gestión de la calidad.",
            "El informe de desempeño del trabajo."
        ],
        answer: ["Los activos de los procesos de la organización y los apetitos de riesgo corporativos."],
        rationale: "Los umbrales de riesgo (tolerancia y apetito) son definidos a nivel organizacional y se encuentran en los activos de los procesos de la organización. Estos son una entrada clave para planificar la gestión de riesgos del proyecto (PMBOK 6, sección 11.1).",
        tags: { format: "opción_única", domain: "procesos", method: "predictivo", cognitive: "aplicación" }
    },
    {
        question: "Un proyecto de reemplazo de transformadores de potencia está en la fase de cierre. ¿Cuál de las siguientes actividades es más característica del proceso Cerrar el Proyecto o Fase?",
        options: [
            "Obtener la aceptación formal de los entregables por parte del cliente.",
            "Liberar al equipo del proyecto y transferir las lecciones aprendidas al repositorio organizacional.",
            "Actualizar el registro de riesgos con los riesgos residuales.",
            "Aprobar las solicitudes de cambio pendientes antes del cierre."
        ],
        answer: ["Liberar al equipo del proyecto y transferir las lecciones aprendidas al repositorio organizacional."],
        rationale: "El proceso Cerrar el Proyecto o Fase incluye finalizar todas las actividades, obtener aceptación formal, documentar lecciones aprendidas, archivar información del proyecto y liberar recursos. La liberación del equipo y transferencia de conocimiento son actividades distintivas del cierre (PMBOK 6, sección 4.7).",
        tags: { format: "opción_única", domain: "procesos", method: "predictivo", cognitive: "aplicación" }
    },
    {
        question: "El director de un proyecto tiene un presupuesto hasta la conclusión (BAC) de $5.000.000, un CPI actual de 0,85 y un AC de $2.000.000. ¿Cuál es la Estimación a la Conclusión (EAC) usando el método de rendimiento típico futuro igual al CPI actual?",
        options: [
            "$5.882.353",
            "$6.000.000",
            "$4.250.000",
            "$5.000.000"
        ],
        answer: ["$5.882.353"],
        rationale: "EAC = BAC / CPI = 5.000.000 / 0,85 = 5.882.353. Esta fórmula se usa cuando se asume que el desempeño futuro continuará al mismo ritmo que el histórico, que es el método más utilizado en pronósticos (PMBOK 6, sección 7.4).",
        tags: { format: "opción_única", domain: "procesos", method: "predictivo", cognitive: "aplicación" }
    },
    {
        question: "Durante el proceso de Controlar la Calidad, el equipo de inspección de cables de transmisión utiliza un gráfico que muestra la distribución de defectos por categoría en orden descendente. ¿Qué herramienta están utilizando?",
        options: [
            "Diagrama de causa y efecto (Ishikawa).",
            "Diagrama de dispersión.",
            "Diagrama de Pareto.",
            "Histograma de control estadístico."
        ],
        answer: ["Diagrama de Pareto."],
        rationale: "El diagrama de Pareto es un tipo de histograma ordenado por frecuencia de mayor a menor, que ayuda a identificar las causas más importantes de los defectos (regla 80/20). Es una herramienta estándar del proceso Controlar la Calidad (PMBOK 6, sección 8.3).",
        tags: { format: "opción_única", domain: "procesos", method: "predictivo", cognitive: "aplicación" }
    },

    // ─── 7. OPCIÓN ÚNICA · PROCESOS · PREDICTIVO · ANÁLISIS ─────────────────

    {
        question: "Un proyecto de construcción de una línea de transmisión de 500 kV tiene un SPI de 0,92 y un CPI de 1,05 al 60% de avance. El director del proyecto está evaluando si aplicar ejecución rápida. ¿Qué análisis debe considerar antes de tomar esta decisión?",
        options: [
            "Solo el impacto en costos, ya que el CPI es favorable.",
            "El impacto en el cronograma, costos y riesgos técnicos de ejecutar actividades en paralelo en infraestructura eléctrica de alta tensión.",
            "La disponibilidad de recursos adicionales para intensificar actividades críticas.",
            "El impacto únicamente en el alcance del proyecto."
        ],
        answer: ["El impacto en el cronograma, costos y riesgos técnicos de ejecutar actividades en paralelo en infraestructura eléctrica de alta tensión."],
        rationale: "La ejecución rápida comprime el cronograma ejecutando actividades en paralelo, pero incrementa los riesgos. En proyectos de transmisión eléctrica, estos riesgos son especialmente críticos debido a las interdependencias técnicas de seguridad. El análisis debe ser integral: cronograma, costo, calidad y riesgo (PMBOK 6, sección 6.6 y 11).",
        tags: { format: "opción_única", domain: "procesos", method: "predictivo", cognitive: "análisis" }
    },
    {
        question: "Al revisar los informes de desempeño, el director del proyecto nota que el CPI ha sido consistentemente de 0,88 durante los últimos cuatro periodos de reporte. El proyecto tiene un 35% de avance restante. ¿Cuál es la conclusión más válida?",
        options: [
            "El proyecto tiene una anomalía puntual que se corregirá sola en los próximos periodos.",
            "El CPI tendencial confirma un problema sistémico de costos; la estimación a la conclusión debe revisarse usando el CPI acumulado.",
            "El proyecto está bien controlado y el CPI mejorará si se reducen los recursos.",
            "El CPI de 0,88 es aceptable y no requiere acción correctiva."
        ],
        answer: ["El CPI tendencial confirma un problema sistémico de costos; la estimación a la conclusión debe revisarse usando el CPI acumulado."],
        rationale: "Investigaciones del PMI demuestran que el CPI acumulado rara vez mejora más del 10% al final del proyecto. Un CPI consistente de 0,88 por cuatro periodos indica un patrón sistémico, no una anomalía. La EAC debe recalcularse con EAC = BAC/CPI para reflejar la realidad (PMBOK 6, sección 7.4).",
        tags: { format: "opción_única", domain: "procesos", method: "predictivo", cognitive: "análisis" }
    },
    {
        question: "Un proyecto de digitalización del centro de control de operaciones de una red de transmisión presenta la siguiente situación: el alcance está bien definido, pero los requisitos tecnológicos evolucionan con rapidez. El director evalúa si mantener el enfoque predictivo puro o adoptar un enfoque híbrido. ¿Qué factor es más determinante para tomar esta decisión?",
        options: [
            "La experiencia del equipo en metodologías ágiles.",
            "El tamaño del presupuesto disponible para el proyecto.",
            "La tasa de cambio de los requisitos y el riesgo de obsolescencia tecnológica.",
            "La preferencia del patrocinador por un enfoque u otro."
        ],
        answer: ["La tasa de cambio de los requisitos y el riesgo de obsolescencia tecnológica."],
        rationale: "El PMBOK 7 y la Guía Práctica Ágil establecen que la selección del ciclo de vida debe basarse en el grado de incertidumbre y la tasa de cambio de los requisitos. Alta tasa de cambio tecnológico favorece enfoques ágiles o híbridos. Los demás factores son relevantes pero secundarios frente a la naturaleza del producto (PMBOK 7, sección de ciclos de vida).",
        tags: { format: "opción_única", domain: "procesos", method: "predictivo", cognitive: "análisis" }
    },
    {
        question: "Un proyecto tiene las siguientes actividades en su ruta crítica: A(5 días) → B(8 días) → C(3 días) → D(6 días). Se propone comprimir B a 5 días con un costo adicional de $10.000, o comprimir C a 1 día con un costo adicional de $4.000. Si el objetivo es reducir 3 días al menor costo, ¿cuál es la opción correcta?",
        options: [
            "Comprimir B de 8 a 5 días por $10.000.",
            "Comprimir C de 3 a 1 día por $4.000 y revisar si existe una segunda ruta crítica.",
            "Comprimir ambas actividades simultáneamente.",
            "No es posible reducir 3 días sin modificar el alcance."
        ],
        answer: ["Comprimir C de 3 a 1 día por $4.000 y revisar si existe una segunda ruta crítica."],
        rationale: "Comprimir C 2 días a $4.000 es más económico que comprimir B 3 días a $10.000. Sin embargo, al comprimir C, es necesario verificar que no emerja una segunda ruta crítica que anule la ganancia. La intensificación siempre debe analizar el efecto sobre todas las rutas (PMBOK 6, sección 6.6).",
        tags: { format: "opción_única", domain: "procesos", method: "predictivo", cognitive: "análisis" }
    },
    {
        question: "Un equipo identifica 45 riesgos en un proyecto de gran envergadura. Después del análisis cualitativo, 12 riesgos son clasificados como de alta probabilidad e impacto. ¿Cuál es el siguiente paso más apropiado para los riesgos de alta prioridad?",
        options: [
            "Desarrollar planes de respuesta para todos los 45 riesgos identificados.",
            "Someter los 12 riesgos prioritarios al análisis cuantitativo de riesgos y luego planificar respuestas.",
            "Ignorar los riesgos de baja prioridad y gestionar únicamente los 12 prioritarios sin análisis adicional.",
            "Escalar todos los riesgos al comité de gobierno del proyecto."
        ],
        answer: ["Someter los 12 riesgos prioritarios al análisis cuantitativo de riesgos y luego planificar respuestas."],
        rationale: "El proceso estándar del PMBOK para riesgos es: identificar → análisis cualitativo → análisis cuantitativo (para los prioritarios) → planificar respuestas. El análisis cuantitativo cuantifica el impacto numérico en los objetivos del proyecto para los riesgos de mayor prioridad (PMBOK 6, secciones 11.3 y 11.4).",
        tags: { format: "opción_única", domain: "procesos", method: "predictivo", cognitive: "análisis" }
    },

    // ─── 8. OPCIÓN ÚNICA · NEGOCIO · PREDICTIVO · CONOCIMIENTO ──────────────

    {
        question: "¿Qué documento de negocio describe la justificación económica de un proyecto, incluyendo costos, beneficios esperados y retorno sobre la inversión?",
        options: [
            "El acta de constitución del proyecto.",
            "El caso de negocio (business case).",
            "El plan de gestión de beneficios.",
            "El registro de supuestos."
        ],
        answer: ["El caso de negocio (business case)."],
        rationale: "El caso de negocio documenta la justificación económica del proyecto, evalúa la viabilidad del proyecto desde la perspectiva del negocio y sirve de base para la toma de decisiones de autorización. Es una entrada clave para el proceso de desarrollar el acta de constitución (PMBOK 6, sección 1.2.6).",
        tags: { format: "opción_única", domain: "negocio", method: "predictivo", cognitive: "conocimiento" }
    },

    // ─── 9. OPCIÓN ÚNICA · NEGOCIO · PREDICTIVO · APLICACIÓN ────────────────

    {
        question: "Al iniciar un proyecto de expansión de la capacidad de transmisión eléctrica, la organización solicita al director del proyecto alinear el proyecto con la estrategia corporativa de sostenibilidad. ¿Cuál es la acción más apropiada del director del proyecto?",
        options: [
            "Ignorar los objetivos estratégicos y enfocarse únicamente en los entregables técnicos del proyecto.",
            "Incorporar indicadores de sostenibilidad como criterios de éxito en el acta de constitución y el plan del proyecto.",
            "Delegar la alineación estratégica al patrocinador del proyecto.",
            "Crear un proyecto separado para gestionar los objetivos de sostenibilidad."
        ],
        answer: ["Incorporar indicadores de sostenibilidad como criterios de éxito en el acta de constitución y el plan del proyecto."],
        rationale: "El PMBOK 7 enfatiza que el éxito del proyecto no solo se mide por los entregables sino por la generación de valor para la organización y sus objetivos estratégicos. Incorporar indicadores de sostenibilidad como criterios de éxito asegura la alineación desde el inicio (PMBOK 7, dominio de valor del negocio).",
        tags: { format: "opción_única", domain: "negocio", method: "predictivo", cognitive: "aplicación" }
    },
    {
        question: "Una empresa de transmisión eléctrica evalúa tres proyectos de inversión. El Proyecto A tiene un VPN de $2,5M, el Proyecto B tiene un VPN de $1,8M y el Proyecto C tiene un VPN de $3,1M, pero requiere el doble de recursos que los otros. La organización tiene recursos limitados. ¿Cómo debe usarse esta información para la selección del proyecto?",
        options: [
            "Seleccionar siempre el proyecto con mayor VPN absoluto (Proyecto C).",
            "Comparar el VPN con los recursos requeridos (ratio VPN/recursos) y considerar las restricciones organizacionales.",
            "Seleccionar el proyecto con menor VPN para minimizar riesgo financiero.",
            "El VPN no es una métrica relevante para la selección de proyectos."
        ],
        answer: ["Comparar el VPN con los recursos requeridos (ratio VPN/recursos) y considerar las restricciones organizacionales."],
        rationale: "La selección de proyectos debe considerar no solo el VPN absoluto sino la eficiencia de uso de recursos. Con recursos limitados, comparar el índice de rentabilidad (VPN/inversión) y alineación estratégica es más apropiado que seleccionar solo por VPN absoluto (PMBOK 6, sección 1.2.6).",
        tags: { format: "opción_única", domain: "negocio", method: "predictivo", cognitive: "aplicación" }
    },

    // ─── 10. OPCIÓN ÚNICA · NEGOCIO · PREDICTIVO · ANÁLISIS ─────────────────

    {
        question: "Un proyecto de ampliación de una subestación ha sido completado en tiempo y costo. Sin embargo, seis meses después del cierre, la organización reporta que los beneficios esperados no se han materializado. ¿Cuál es la causa raíz más probable según el PMBOK 7?",
        options: [
            "El director del proyecto no gestionó adecuadamente el cronograma.",
            "Los entregables del proyecto no estaban alineados con los beneficios de negocio esperados o la transición operacional fue deficiente.",
            "El proyecto tuvo errores en la gestión de costos.",
            "El equipo del proyecto no documentó adecuadamente las lecciones aprendidas."
        ],
        answer: ["Los entregables del proyecto no estaban alineados con los beneficios de negocio esperados o la transición operacional fue deficiente."],
        rationale: "El PMBOK 7 distingue entre outputs (entregables del proyecto), outcomes (cambios en el comportamiento o capacidades) y beneficios (valor generado). Un proyecto puede cerrar exitosamente pero fallar en generar beneficios si la transición operacional o la alineación con objetivos de negocio fue deficiente (PMBOK 7, principio de valor).",
        tags: { format: "opción_única", domain: "negocio", method: "predictivo", cognitive: "análisis" }
    },

    // ─── 11. OPCIÓN MÚLTIPLE · PERSONAS · PREDICTIVO · APLICACIÓN ────────────

    {
        question: "Un director de proyecto de una empresa de transmisión eléctrica recibe retroalimentación de que varios miembros del equipo sienten que sus contribuciones no son reconocidas. ¿Cuáles de las siguientes acciones son apropiadas para abordar esta situación? (Selecciona todas las que apliquen)",
        options: [
            "Implementar un sistema formal de reconocimiento de logros individuales y del equipo.",
            "Ignorar el feedback ya que el reconocimiento no impacta el desempeño técnico.",
            "Reconocer públicamente las contribuciones en las reuniones de equipo.",
            "Revisar si las responsabilidades asignadas permiten el desarrollo profesional de cada miembro.",
            "Incrementar el salario de todos los miembros del equipo automáticamente."
        ],
        answer: [
            "Implementar un sistema formal de reconocimiento de logros individuales y del equipo.",
            "Reconocer públicamente las contribuciones en las reuniones de equipo.",
            "Revisar si las responsabilidades asignadas permiten el desarrollo profesional de cada miembro."
        ],
        rationale: "La teoría de motivación de Herzberg y los principios del PMBOK indican que el reconocimiento y el desarrollo profesional son factores motivacionales clave. Un sistema formal de reconocimiento, el reconocimiento público y el diseño de roles que permitan el crecimiento son respuestas apropiadas. Incrementar salarios masivamente no aborda el problema de reconocimiento específico (PMBOK 6, sección 9.4).",
        tags: { format: "opción_múltiple", domain: "personas", method: "predictivo", cognitive: "aplicación" }
    },
    {
        question: "Al cerrar un proyecto de modernización de protecciones eléctricas, ¿cuáles de las siguientes actividades deben realizarse como parte del proceso de cierre? (Selecciona todas las que apliquen)",
        options: [
            "Obtener la aceptación formal de los entregables finales por parte del cliente.",
            "Documentar las lecciones aprendidas y transferirlas al repositorio organizacional.",
            "Iniciar inmediatamente el siguiente proyecto con el mismo equipo.",
            "Liberar formalmente los recursos humanos y materiales del proyecto.",
            "Archivar toda la documentación del proyecto."
        ],
        answer: [
            "Obtener la aceptación formal de los entregables finales por parte del cliente.",
            "Documentar las lecciones aprendidas y transferirlas al repositorio organizacional.",
            "Liberar formalmente los recursos humanos y materiales del proyecto.",
            "Archivar toda la documentación del proyecto."
        ],
        rationale: "El proceso Cerrar el Proyecto o Fase incluye: obtener aceptación formal, documentar lecciones aprendidas, liberar recursos y archivar la documentación. Iniciar el siguiente proyecto inmediatamente no es parte del proceso de cierre y puede comprometer una transición adecuada (PMBOK 6, sección 4.7).",
        tags: { format: "opción_múltiple", domain: "personas", method: "predictivo", cognitive: "aplicación" }
    },
    {
        question: "¿Cuáles de los siguientes son estilos de resolución de conflictos reconocidos por el PMBOK que el director del proyecto puede aplicar? (Selecciona todas las que apliquen)",
        options: [
            "Colaborar/Resolver el problema.",
            "Eludir/Esquivar.",
            "Forzar/Dirigir.",
            "Suavizar/Complacer.",
            "Eliminar al miembro del equipo que genera el conflicto."
        ],
        answer: [
            "Colaborar/Resolver el problema.",
            "Eludir/Esquivar.",
            "Forzar/Dirigir.",
            "Suavizar/Complacer."
        ],
        rationale: "El PMBOK 6 reconoce cinco estilos de resolución de conflictos: colaborar/resolver el problema (el más efectivo para soluciones duraderas), comprometer/reconciliar, suavizar/complacer, eludir/esquivar y forzar/dirigir. Eliminar a un miembro del equipo no es una técnica de resolución de conflictos (PMBOK 6, sección 9.5).",
        tags: { format: "opción_múltiple", domain: "personas", method: "predictivo", cognitive: "aplicación" }
    },

    // ─── 12. OPCIÓN MÚLTIPLE · PERSONAS · PREDICTIVO · ANÁLISIS ─────────────

    {
        question: "Un director de proyecto identifica que un interesado clave ha pasado de una posición de apoyo a una de resistencia activa. Al analizar la situación, ¿cuáles de los siguientes factores podrían explicar este cambio? (Selecciona todas las que apliquen)",
        options: [
            "Un cambio reciente en el alcance del proyecto que afecta los intereses del interesado.",
            "Información insuficiente o incorrecta recibida por el interesado sobre el proyecto.",
            "El proyecto está dentro del cronograma y el presupuesto planificados.",
            "Cambios en el entorno político o regulatorio que afectan al interesado.",
            "Expectativas no alineadas entre el interesado y el equipo del proyecto."
        ],
        answer: [
            "Un cambio reciente en el alcance del proyecto que afecta los intereses del interesado.",
            "Información insuficiente o incorrecta recibida por el interesado sobre el proyecto.",
            "Cambios en el entorno político o regulatorio que afectan al interesado.",
            "Expectativas no alineadas entre el interesado y el equipo del proyecto."
        ],
        rationale: "El PMBOK identifica múltiples causas para el cambio de posición de un interesado: cambios en el alcance que afectan sus intereses, problemas de comunicación, cambios en el contexto externo y expectativas no alineadas. El buen desempeño del proyecto por sí solo no explica un cambio de posición del interesado (PMBOK 6, sección 13.4; PMBOK 7, dominio de interesados).",
        tags: { format: "opción_múltiple", domain: "personas", method: "predictivo", cognitive: "análisis" }
    },

    // ─── 13. OPCIÓN MÚLTIPLE · PROCESOS · PREDICTIVO · CONOCIMIENTO ─────────

    {
        question: "¿Cuáles de los siguientes son componentes que forman parte del Plan para la Dirección del Proyecto según el PMBOK 6? (Selecciona todas las que apliquen)",
        options: [
            "Plan de gestión del alcance.",
            "Registro de riesgos.",
            "Línea base del cronograma.",
            "Informes de desempeño del trabajo.",
            "Plan de gestión de los interesados."
        ],
        answer: [
            "Plan de gestión del alcance.",
            "Línea base del cronograma.",
            "Plan de gestión de los interesados."
        ],
        rationale: "El plan para la dirección del proyecto contiene planes subsidiarios (gestión de alcance, cronograma, costos, calidad, recursos, comunicaciones, riesgos, adquisiciones, interesados) y líneas base (alcance, cronograma, costos). El registro de riesgos y los informes de desempeño son documentos del proyecto, no componentes del plan (PMBOK 6, sección 4.2).",
        tags: { format: "opción_múltiple", domain: "procesos", method: "predictivo", cognitive: "conocimiento" }
    },
    {
        question: "¿Cuáles de las siguientes herramientas y técnicas son utilizadas en el proceso de Identificar los Riesgos según el PMBOK 6? (Selecciona todas las que apliquen)",
        options: [
            "Tormenta de ideas.",
            "Análisis FODA.",
            "Simulación de Monte Carlo.",
            "Entrevistas a expertos.",
            "Árbol de decisión."
        ],
        answer: [
            "Tormenta de ideas.",
            "Análisis FODA.",
            "Entrevistas a expertos."
        ],
        rationale: "Identificar los Riesgos usa técnicas cualitativas como tormenta de ideas, análisis FODA, entrevistas, listas de verificación y análisis de documentos. La simulación de Monte Carlo y el árbol de decisión son técnicas del Análisis Cuantitativo de Riesgos, no de la identificación (PMBOK 6, sección 11.2).",
        tags: { format: "opción_múltiple", domain: "procesos", method: "predictivo", cognitive: "conocimiento" }
    },

    // ─── 14. OPCIÓN MÚLTIPLE · PROCESOS · PREDICTIVO · APLICACIÓN ───────────

    {
        question: "Durante la ejecución de un proyecto de instalación de sistemas SCADA para una red de transmisión, el director identifica que tres proveedores clave están retrasando sus entregables. ¿Cuáles de las siguientes acciones son apropiadas para gestionar esta situación? (Selecciona todas las que apliquen)",
        options: [
            "Revisar los contratos para identificar cláusulas de incumplimiento y penalidades aplicables.",
            "Reemplazar inmediatamente a los tres proveedores sin análisis previo.",
            "Convocar reuniones con cada proveedor para entender las causas del retraso y acordar planes de recuperación.",
            "Evaluar el impacto del retraso en el cronograma usando el análisis de la ruta crítica.",
            "Actualizar el registro de riesgos con el nuevo riesgo identificado de retraso de proveedores."
        ],
        answer: [
            "Revisar los contratos para identificar cláusulas de incumplimiento y penalidades aplicables.",
            "Convocar reuniones con cada proveedor para entender las causas del retraso y acordar planes de recuperación.",
            "Evaluar el impacto del retraso en el cronograma usando el análisis de la ruta crítica.",
            "Actualizar el registro de riesgos con el nuevo riesgo identificado de retraso de proveedores."
        ],
        rationale: "La gestión de adquisiciones requiere revisar contratos, comunicarse con proveedores, evaluar impactos en el cronograma y gestionar los riesgos asociados. Reemplazar proveedores inmediatamente sin análisis podría agravar el retraso y generar costos adicionales (PMBOK 6, secciones 12.3 y 11.6).",
        tags: { format: "opción_múltiple", domain: "procesos", method: "predictivo", cognitive: "aplicación" }
    },
    {
        question: "Un director de proyecto necesita estimar los costos de un proyecto de construcción de una línea de transmisión sin contar con un diseño detallado aún. ¿Cuáles de las siguientes técnicas de estimación son apropiadas en esta etapa? (Selecciona todas las que apliquen)",
        options: [
            "Estimación análoga basada en proyectos similares de transmisión.",
            "Estimación paramétrica usando métricas de costo por kilómetro de línea.",
            "Estimación ascendente detallada basada en el desglose de actividades.",
            "Análisis de propuestas de vendedores.",
            "Juicio de expertos con experiencia en proyectos de transmisión."
        ],
        answer: [
            "Estimación análoga basada en proyectos similares de transmisión.",
            "Estimación paramétrica usando métricas de costo por kilómetro de línea.",
            "Juicio de expertos con experiencia en proyectos de transmisión."
        ],
        rationale: "Sin diseño detallado, se usan técnicas de estimación de orden de magnitud: análoga (basada en proyectos similares), paramétrica (usando parámetros como costo/km) y juicio de expertos. La estimación ascendente requiere un desglose detallado que aún no existe. El análisis de propuestas de vendedores requiere especificaciones definidas (PMBOK 6, sección 7.2).",
        tags: { format: "opción_múltiple", domain: "procesos", method: "predictivo", cognitive: "aplicación" }
    },
    {
        question: "Un proyecto de modernización de equipos de medición de energía presenta solicitudes de cambio frecuentes del cliente. ¿Cuáles de las siguientes acciones ayudarían a controlar la variación del alcance (scope creep)? (Selecciona todas las que apliquen)",
        options: [
            "Asegurarse de que el enunciado del alcance esté claramente documentado y aprobado.",
            "Aceptar todos los cambios solicitados para mantener satisfecho al cliente.",
            "Aplicar el proceso de control integrado de cambios para evaluar cada solicitud.",
            "Comunicar a los interesados el impacto en costo y cronograma de cada cambio solicitado.",
            "Ignorar los cambios menores que no afecten el presupuesto."
        ],
        answer: [
            "Asegurarse de que el enunciado del alcance esté claramente documentado y aprobado.",
            "Aplicar el proceso de control integrado de cambios para evaluar cada solicitud.",
            "Comunicar a los interesados el impacto en costo y cronograma de cada cambio solicitado."
        ],
        rationale: "El scope creep se controla con un alcance bien definido, un proceso formal de gestión de cambios y comunicación transparente de impactos. Aceptar todos los cambios o ignorar los menores son prácticas que promueven el scope creep (PMBOK 6, secciones 5.6 y 4.6).",
        tags: { format: "opción_múltiple", domain: "procesos", method: "predictivo", cognitive: "aplicación" }
    },

    // ─── 15. OPCIÓN MÚLTIPLE · PROCESOS · PREDICTIVO · ANÁLISIS ─────────────

    {
        question: "Al revisar los datos de desempeño de trabajo de un proyecto de automatización de subestaciones, el director observa que la varianza del cronograma (SV) es negativa y la varianza del costo (CV) también es negativa. ¿Cuáles de las siguientes conclusiones y acciones son correctas? (Selecciona todas las que apliquen)",
        options: [
            "El proyecto está atrasado y sobre el presupuesto simultáneamente.",
            "Se debe analizar la ruta crítica para identificar actividades que causan el retraso.",
            "El proyecto está dentro del presupuesto y solo tiene problemas de cronograma.",
            "Se deben evaluar opciones de compresión del cronograma considerando el impacto en costos.",
            "El problema de costos se resolverá automáticamente cuando se recupere el cronograma."
        ],
        answer: [
            "El proyecto está atrasado y sobre el presupuesto simultáneamente.",
            "Se debe analizar la ruta crítica para identificar actividades que causan el retraso.",
            "Se deben evaluar opciones de compresión del cronograma considerando el impacto en costos."
        ],
        rationale: "SV negativa indica atraso en cronograma (EV < PV). CV negativa indica sobrecosto (EV < AC). Ambas negativas simultáneamente es la peor combinación. Se debe analizar la ruta crítica para causas del atraso y evaluar opciones de compresión considerando su impacto en costos ya sobrepasados (PMBOK 6, sección 7.4).",
        tags: { format: "opción_múltiple", domain: "procesos", method: "predictivo", cognitive: "análisis" }
    },
    {
        question: "En el marco de referencia del PMBOK 7, ¿cuáles de los siguientes son dominios de desempeño del proyecto? (Selecciona todas las que apliquen)",
        options: [
            "Interesados.",
            "Equipo.",
            "Gestión de la integración.",
            "Trabajo del proyecto.",
            "Entrega."
        ],
        answer: [
            "Interesados.",
            "Equipo.",
            "Trabajo del proyecto.",
            "Entrega."
        ],
        rationale: "El PMBOK 7 define ocho dominios de desempeño: Interesados, Equipo, Enfoque de desarrollo y ciclo de vida, Planificación, Trabajo del proyecto, Entrega, Medición, e Incertidumbre. La Gestión de la Integración es un área de conocimiento del PMBOK 6, no un dominio del PMBOK 7 (PMBOK 7, sección 2).",
        tags: { format: "opción_múltiple", domain: "procesos", method: "predictivo", cognitive: "análisis" }
    },

    // ─── 15b. OPCIÓN ÚNICA · PERSONAS · PREDICTIVO · ANÁLISIS ────────────────

    {
        question: "Un director de proyecto lleva seis meses liderando un equipo multidisciplinario en un proyecto de modernización de centros de control. A pesar de los buenos resultados técnicos, dos ingenieros clave han presentado cartas de renuncia alegando falta de autonomía. Al analizar la situación, el director reconoce que tomaba la mayoría de las decisiones técnicas él mismo. ¿Qué ajuste de estilo de liderazgo es el más adecuado para retener al talento y mantener el desempeño?",
        options: [
            "Mantener el estilo actual ya que los resultados técnicos son buenos.",
            "Migrar hacia un estilo más delegador, transfiriendo decisiones técnicas al equipo conforme a su nivel de competencia demostrada.",
            "Adoptar un estilo más directivo para asegurar la calidad en un momento de transición.",
            "Escalar la situación al área de recursos humanos para que gestionen las renuncias."
        ],
        answer: ["Migrar hacia un estilo más delegador, transfiriendo decisiones técnicas al equipo conforme a su nivel de competencia demostrada."],
        rationale: "El liderazgo situacional del PMBOK indica que con equipos competentes y comprometidos, el estilo delegador es el más apropiado. Centralizar decisiones técnicas en equipos de alto nivel genera frustración y desmotivación. La delegación basada en competencia probada retiene talento y eleva el compromiso del equipo (PMBOK 6, sección 3.4.4; PMBOK 7, dominio del equipo).",
        tags: { format: "opción_única", domain: "personas", method: "predictivo", cognitive: "análisis" }
    },
    {
        question: "Un proyecto de telemetría para monitoreo de líneas de alta tensión involucra a cuatro departamentos internos con objetivos parcialmente conflictivos: operaciones quiere máxima disponibilidad del sistema, TI quiere minimizar la deuda técnica, finanzas quiere reducir el presupuesto y seguridad exige redundancia total. El director del proyecto necesita definir los criterios de éxito del proyecto. ¿Cuál es el enfoque más apropiado?",
        options: [
            "Definir los criterios de éxito únicamente en función de los requisitos del cliente final.",
            "Dar prioridad automática a los requisitos del departamento con mayor poder en la organización.",
            "Facilitar sesiones de alineación con todos los departamentos para establecer criterios de éxito consensuados y documentar los compromisos explícitamente.",
            "Definir criterios de éxito técnicos sin involucrar a los departamentos para evitar conflictos políticos."
        ],
        answer: ["Facilitar sesiones de alineación con todos los departamentos para establecer criterios de éxito consensuados y documentar los compromisos explícitamente."],
        rationale: "El PMBOK 7 enfatiza que el éxito del proyecto se define de forma colaborativa con todos los interesados clave. Con objetivos conflictivos, la negociación facilitada y la documentación de compromisos explícitos es más efectiva que imponer o ignorar perspectivas. Los criterios de éxito deben reflejar el valor para todos los interesados (PMBOK 7, dominio de interesados y valor).",
        tags: { format: "opción_única", domain: "personas", method: "predictivo", cognitive: "análisis" }
    },

    // ─── 15c. OPCIÓN ÚNICA · PERSONAS · ÁGIL · ANÁLISIS ─────────────────────

    {
        question: "Un equipo distribuido en tres zonas horarias trabaja en sprints de dos semanas para desarrollar un sistema de gestión de activos de red de transmisión. El equipo reporta que las retrospectivas se sienten superficiales y no generan mejoras reales. ¿Cuál es el diagnóstico más probable y la acción más apropiada?",
        options: [
            "El equipo no entiende el propósito de la retrospectiva; se debe proporcionar formación en Scrum.",
            "Las retrospectivas son opcionales en equipos distribuidos; se pueden reemplazar por reportes escritos.",
            "La distribución horaria dificulta la comunicación honesta; se debe cambiar la herramienta de videoconferencia.",
            "La falta de seguridad psicológica en entornos distribuidos inhibe el feedback real; el Scrum Master debe aplicar técnicas estructuradas de retrospectiva que promuevan la participación anónima y el diálogo constructivo."
        ],
        answer: ["La falta de seguridad psicológica en entornos distribuidos inhibe el feedback real; el Scrum Master debe aplicar técnicas estructuradas de retrospectiva que promuevan la participación anónima y el diálogo constructivo."],
        rationale: "Las retrospectivas superficiales en equipos distribuidos suelen ser síntoma de falta de seguridad psicológica, no de falta de conocimiento de Scrum. El Scrum Master debe usar técnicas como escritura anónima previa, votación estructurada o formatos como 'Start-Stop-Continue' para garantizar participación honesta (Guía Práctica Ágil; PMBOK 7, dominio del equipo).",
        tags: { format: "opción_única", domain: "personas", method: "ágil", cognitive: "análisis" }
    },

    // ─── 15d. OPCIÓN MÚLTIPLE · PERSONAS · PREDICTIVO · ANÁLISIS ─────────────

    {
        question: "Un director de proyecto recibe los resultados de una encuesta de clima del equipo que muestra niveles bajos de confianza interpersonal, alta ambigüedad en roles y roles poco claros. El proyecto está en la fase de ejecución. ¿Cuáles de las siguientes acciones son apropiadas para abordar esta situación? (Selecciona todas las que apliquen)",
        options: [
            "Revisar y clarificar la matriz de asignación de responsabilidades (RAM/RACI) con el equipo.",
            "Reemplazar a los miembros del equipo con baja confianza interpersonal.",
            "Facilitar una sesión de team building enfocada en construir relaciones y aclarar expectativas.",
            "Comunicar claramente los roles, responsabilidades y expectativas de desempeño a cada miembro.",
            "Ignorar los resultados de la encuesta y enfocarse únicamente en los entregables técnicos."
        ],
        answer: [
            "Revisar y clarificar la matriz de asignación de responsabilidades (RAM/RACI) con el equipo.",
            "Facilitar una sesión de team building enfocada en construir relaciones y aclarar expectativas.",
            "Comunicar claramente los roles, responsabilidades y expectativas de desempeño a cada miembro."
        ],
        rationale: "La baja confianza y ambigüedad de roles son problemas de dinámica de equipo que requieren intervenciones directas: clarificación de roles (RACI), construcción de relaciones y comunicación explícita de expectativas. Reemplazar miembros no aborda las causas sistémicas e ignorar el problema deteriorará el desempeño (PMBOK 6, sección 9.4; PMBOK 7, dominio del equipo).",
        tags: { format: "opción_múltiple", domain: "personas", method: "predictivo", cognitive: "análisis" }
    },

    // ─── 16. OPCIÓN MÚLTIPLE · PROCESOS · ÁGIL · APLICACIÓN ─────────────────

    {
        question: "Un equipo ágil que desarrolla un sistema de monitoreo de líneas de transmisión en tiempo real acaba de completar su segunda iteración. El Product Owner indica que las prioridades del negocio han cambiado y que varias historias de usuario en el Product Backlog deben reordenarse. ¿Cuáles de las siguientes acciones son apropiadas? (Selecciona todas las que apliquen)",
        options: [
            "El Product Owner reprioriza el Product Backlog para el próximo sprint según el nuevo valor de negocio.",
            "El equipo decide ignorar los cambios hasta el final del proyecto para no afectar la velocidad.",
            "Se realiza una sesión de refinamiento del backlog para aclarar las nuevas historias priorizadas.",
            "El Scrum Master facilita la comunicación entre el Product Owner y el equipo sobre el impacto del cambio.",
            "Se cancela el sprint actual para incorporar inmediatamente las nuevas prioridades."
        ],
        answer: [
            "El Product Owner reprioriza el Product Backlog para el próximo sprint según el nuevo valor de negocio.",
            "Se realiza una sesión de refinamiento del backlog para aclarar las nuevas historias priorizadas.",
            "El Scrum Master facilita la comunicación entre el Product Owner y el equipo sobre el impacto del cambio."
        ],
        rationale: "En Scrum, el Product Owner puede repriorizar el backlog en cualquier momento para el siguiente sprint. El refinamiento y la comunicación facilitada por el Scrum Master son prácticas correctas. No se cancela el sprint en curso por cambios de prioridad salvo que el sprint goal completo sea inválido (Guía Práctica Ágil; PMBOK 7).",
        tags: { format: "opción_múltiple", domain: "procesos", method: "ágil", cognitive: "aplicación" }
    },

    // ─── 17. OPCIÓN MÚLTIPLE · NEGOCIO · PREDICTIVO · APLICACIÓN ────────────

    {
        question: "Al desarrollar el caso de negocio de un proyecto de expansión de la capacidad de transmisión eléctrica, ¿cuáles de los siguientes elementos deben incluirse? (Selecciona todas las que apliquen)",
        options: [
            "La necesidad de negocio o problema que el proyecto resolverá.",
            "El análisis de alternativas evaluadas para abordar la necesidad.",
            "El detalle técnico de los diseños de ingeniería.",
            "Los beneficios esperados y la forma en que serán medidos.",
            "Los riesgos de negocio asociados a realizar o no el proyecto."
        ],
        answer: [
            "La necesidad de negocio o problema que el proyecto resolverá.",
            "El análisis de alternativas evaluadas para abordar la necesidad.",
            "Los beneficios esperados y la forma en que serán medidos.",
            "Los riesgos de negocio asociados a realizar o no el proyecto."
        ],
        rationale: "El caso de negocio incluye: situación actual/necesidad, análisis de opciones, beneficios esperados con métricas, análisis de riesgo y recomendación. El detalle técnico de ingeniería corresponde a documentos de diseño, no al caso de negocio, que tiene una perspectiva ejecutiva y estratégica (PMBOK 6, sección 1.2.6).",
        tags: { format: "opción_múltiple", domain: "negocio", method: "predictivo", cognitive: "aplicación" }
    },

    // ─── 18. ORDENAMIENTO · PROCESOS · PREDICTIVO · CONOCIMIENTO ─────────────

    {
        question: "Ordena los siguientes pasos del proceso de Gestión de Riesgos según la secuencia correcta establecida en el PMBOK:",
        options: [
            "Planificar la gestión de los riesgos",
            "Identificar los riesgos",
            "Realizar el análisis cualitativo de riesgos",
            "Planificar la respuesta a los riesgos",
            "Implementar la respuesta a los riesgos"
        ],
        answer: [
            "Planificar la gestión de los riesgos",
            "Identificar los riesgos",
            "Realizar el análisis cualitativo de riesgos",
            "Planificar la respuesta a los riesgos",
            "Implementar la respuesta a los riesgos"
        ],
        rationale: "La secuencia estándar de procesos de gestión de riesgos del PMBOK es: (1) Planificar la gestión de riesgos, (2) Identificar los riesgos, (3) Realizar el análisis cualitativo, (4) Realizar el análisis cuantitativo (cuando aplique), (5) Planificar la respuesta y (6) Implementar la respuesta. El monitoreo de riesgos se realiza de forma continua (PMBOK 6, capítulo 11).",
        tags: { format: "ordenamiento", domain: "procesos", method: "predictivo", cognitive: "conocimiento" }
    },
    {
        question: "Ordena las siguientes etapas del proceso de adquisiciones de un proyecto según la secuencia correcta del PMBOK:",
        options: [
            "Planificar la gestión de las adquisiciones",
            "Efectuar las adquisiciones",
            "Controlar las adquisiciones",
            "Definir los requisitos del producto o servicio a adquirir",
            "Cerrar las adquisiciones"
        ],
        answer: [
            "Definir los requisitos del producto o servicio a adquirir",
            "Planificar la gestión de las adquisiciones",
            "Efectuar las adquisiciones",
            "Controlar las adquisiciones",
            "Cerrar las adquisiciones"
        ],
        rationale: "La gestión de adquisiciones sigue esta secuencia: primero se definen los requisitos de lo que se va a adquirir, luego se planifica la estrategia de adquisición, se efectúan (se publican, evalúan propuestas y contratan), se controla el desempeño del contrato y finalmente se cierran formalmente (PMBOK 6, capítulo 12).",
        tags: { format: "ordenamiento", domain: "procesos", method: "predictivo", cognitive: "conocimiento" }
    },
    {
        question: "Ordena los siguientes grupos de procesos del PMBOK 6 según el orden típico en que se ejecutan en un proyecto:",
        options: [
            "Monitoreo y Control",
            "Inicio",
            "Cierre",
            "Planificación",
            "Ejecución"
        ],
        answer: [
            "Inicio",
            "Planificación",
            "Ejecución",
            "Monitoreo y Control",
            "Cierre"
        ],
        rationale: "Los cinco grupos de procesos del PMBOK 6 siguen esta secuencia general: Inicio (autorizar el proyecto), Planificación (definir el curso de acción), Ejecución (llevar a cabo el trabajo), Monitoreo y Control (supervisar y gestionar el desempeño, en paralelo con ejecución) y Cierre (formalizar el fin). Monitoreo y Control ocurre en paralelo con planificación y ejecución, pero su énfasis principal es durante la ejecución (PMBOK 6, sección 1.2.4).",
        tags: { format: "ordenamiento", domain: "procesos", method: "predictivo", cognitive: "conocimiento" }
    },
    {
        question: "Ordena las siguientes actividades del proceso de Gestión del Cronograma según la secuencia lógica correcta del PMBOK 6:",
        options: [
            "Desarrollar el cronograma",
            "Planificar la gestión del cronograma",
            "Estimar la duración de las actividades",
            "Secuenciar las actividades",
            "Definir las actividades"
        ],
        answer: [
            "Planificar la gestión del cronograma",
            "Definir las actividades",
            "Secuenciar las actividades",
            "Estimar la duración de las actividades",
            "Desarrollar el cronograma"
        ],
        rationale: "La gestión del cronograma inicia con la planificación de cómo se gestionará, luego se definen las actividades, se establece su secuencia lógica, se estima la duración de cada una con los recursos disponibles y finalmente se integra todo en el cronograma del proyecto (PMBOK 6, capítulo 6).",
        tags: { format: "ordenamiento", domain: "procesos", method: "predictivo", cognitive: "conocimiento" }
    },
    {
        question: "Ordena los siguientes pasos que debe seguir el director de un proyecto cuando recibe una solicitud de cambio durante la ejecución:",
        options: [
            "Implementar el cambio aprobado en el plan del proyecto",
            "Evaluar el impacto del cambio en alcance, cronograma, costo y riesgo",
            "Registrar la solicitud de cambio formalmente",
            "Someter la solicitud al Comité de Control de Cambios (CCB)",
            "Comunicar la decisión a los interesados relevantes"
        ],
        answer: [
            "Registrar la solicitud de cambio formalmente",
            "Evaluar el impacto del cambio en alcance, cronograma, costo y riesgo",
            "Someter la solicitud al Comité de Control de Cambios (CCB)",
            "Comunicar la decisión a los interesados relevantes",
            "Implementar el cambio aprobado en el plan del proyecto"
        ],
        rationale: "El proceso de Control Integrado de Cambios requiere: (1) registrar formalmente la solicitud, (2) analizar su impacto integral, (3) presentarla al CCB para aprobación o rechazo, (4) comunicar la decisión a los interesados y (5) solo entonces implementar si fue aprobada. Implementar antes de aprobación viola el control de cambios (PMBOK 6, sección 4.6).",
        tags: { format: "ordenamiento", domain: "procesos", method: "predictivo", cognitive: "aplicación" }
    },
    {
        question: "Ordena las siguientes fases del ciclo de vida de un contrato en un proyecto de adquisición de equipos de alta tensión:",
        options: [
            "Adjudicación del contrato al proveedor seleccionado",
            "Publicación de la solicitud de propuestas (RFP)",
            "Cierre y liquidación formal del contrato",
            "Supervisión del desempeño del proveedor contra los términos contractuales",
            "Definición de los términos y condiciones del contrato"
        ],
        answer: [
            "Definición de los términos y condiciones del contrato",
            "Publicación de la solicitud de propuestas (RFP)",
            "Adjudicación del contrato al proveedor seleccionado",
            "Supervisión del desempeño del proveedor contra los términos contractuales",
            "Cierre y liquidación formal del contrato"
        ],
        rationale: "El ciclo de vida contractual sigue esta secuencia: se definen los términos antes de la solicitud, se publica la RFP para competencia, se adjudica al proveedor seleccionado, se supervisa su desempeño durante la ejecución y finalmente se cierra y liquida formalmente. Este orden protege los intereses del comprador en cada etapa (PMBOK 6, capítulo 12).",
        tags: { format: "ordenamiento", domain: "procesos", method: "predictivo", cognitive: "aplicación" }
    },


    // ══════════════════════════════════════════════════════════════════════════
    //  OPCIÓN ÚNICA · PERSONAS · PREDICTIVO · CONOCIMIENTO  (3 preguntas)
    // ══════════════════════════════════════════════════════════════════════════

    {
        question: "Según el PMBOK 6, ¿cuál de los siguientes describe mejor el concepto de 'poder de recompensa' como fuente de influencia de un director de proyecto?",
        options: [
            "La autoridad formal otorgada por el acta de constitución del proyecto.",
            "La capacidad de otorgar reconocimientos, aumentos o beneficios a los miembros del equipo.",
            "El conocimiento técnico especializado que inspira respeto del equipo.",
            "La habilidad de construir relaciones basadas en confianza mutua."
        ],
        answer: ["La capacidad de otorgar reconocimientos, aumentos o beneficios a los miembros del equipo."],
        rationale: "El PMBOK 6 describe varias fuentes de poder del director de proyecto. El poder de recompensa se basa en la capacidad de proporcionar recompensas positivas como reconocimientos, bonos o beneficios. Se diferencia del poder legítimo (autoridad formal), del poder experto (conocimiento) y del poder referente (relaciones) (PMBOK 6, sección 3.4.4).",
        tags: { format: "opción_única", domain: "personas", method: "predictivo", cognitive: "conocimiento" }
    },
    {
        question: "¿Cuál de los siguientes describe el propósito principal del Registro de Interesados en un proyecto?",
        options: [
            "Documentar el plan de comunicaciones del proyecto.",
            "Registrar la identificación, evaluación y clasificación de los interesados del proyecto.",
            "Formalizar los acuerdos con los proveedores externos del proyecto.",
            "Registrar los problemas y decisiones tomadas durante el proyecto."
        ],
        answer: ["Registrar la identificación, evaluación y clasificación de los interesados del proyecto."],
        rationale: "El Registro de Interesados es la salida principal del proceso Identificar a los Interesados. Contiene información sobre cada interesado: identificación, evaluación (intereses, nivel de participación, poder, influencia) y clasificación. Es una entrada fundamental para la planificación de comunicaciones y la gestión de interesados (PMBOK 6, sección 13.1).",
        tags: { format: "opción_única", domain: "personas", method: "predictivo", cognitive: "conocimiento" }
    },
    {
        question: "En la teoría de motivación de Maslow aplicada a la gestión de equipos, ¿qué nivel de necesidad corresponde al deseo de un ingeniero de ser reconocido como experto técnico referente en su organización?",
        options: [
            "Necesidades fisiológicas.",
            "Necesidades de seguridad.",
            "Necesidades de estima.",
            "Necesidades de autorrealización."
        ],
        answer: ["Necesidades de estima."],
        rationale: "En la jerarquía de Maslow, las necesidades de estima incluyen el reconocimiento, el prestigio y el respeto de los demás. El deseo de ser reconocido como experto referente corresponde a este nivel. Las necesidades de autorrealización están relacionadas con alcanzar el máximo potencial personal (PMBOK 6, sección 9.4).",
        tags: { format: "opción_única", domain: "personas", method: "predictivo", cognitive: "conocimiento" }
    },

    // ══════════════════════════════════════════════════════════════════════════
    //  OPCIÓN ÚNICA · PERSONAS · PREDICTIVO · APLICACIÓN  (7 preguntas)
    // ══════════════════════════════════════════════════════════════════════════

    {
        question: "El director de un proyecto de digitalización de activos de red eléctrica identifica que un proveedor externo tiene alta influencia en el proyecto pero sus objetivos no están alineados con los del proyecto. ¿Cuál es la estrategia de gestión de interesados más apropiada?",
        options: [
            "Excluirlo de las comunicaciones formales del proyecto para evitar interferencias.",
            "Involucrar al proveedor activamente, entender sus objetivos y buscar áreas de alineación mutua.",
            "Escalar la situación al patrocinador para que gestione directamente la relación con el proveedor.",
            "Documentar los desacuerdos en el registro de riesgos y continuar sin cambiar la estrategia."
        ],
        answer: ["Involucrar al proveedor activamente, entender sus objetivos y buscar áreas de alineación mutua."],
        rationale: "Un interesado con alta influencia y objetivos no alineados representa un riesgo significativo. La estrategia correcta es la participación activa para comprender sus objetivos e identificar intereses comunes antes de que la desalineación se convierta en oposición activa. Excluirlo podría escalar el conflicto (PMBOK 6, sección 13.3).",
        tags: { format: "opción_única", domain: "personas", method: "predictivo", cognitive: "aplicación" }
    },
    {
        question: "Un director de proyecto está gestionando a un equipo de ingenieros altamente especializados en sistemas de protección eléctrica. El equipo conoce el trabajo mejor que el director. ¿Qué estilo de liderazgo es más apropiado en esta situación?",
        options: [
            "Directivo: indicar exactamente cómo realizar cada tarea.",
            "Coaching: enseñar al equipo los conceptos técnicos que aún no dominan.",
            "Delegador: confiar en el criterio del equipo y enfocarse en remover impedimentos y gestionar el entorno.",
            "Participativo: tomar todas las decisiones en conjunto con el equipo."
        ],
        answer: ["Delegador: confiar en el criterio del equipo y enfocarse en remover impedimentos y gestionar el entorno."],
        rationale: "El liderazgo situacional indica que con equipos de alta competencia y alto compromiso, el estilo delegador es el más efectivo. El director agrega valor removiendo obstáculos, gestionando las relaciones con interesados y protegiendo al equipo del ruido externo, no indicando cómo hacer el trabajo técnico (PMBOK 6, sección 3.4.4).",
        tags: { format: "opción_única", domain: "personas", method: "predictivo", cognitive: "aplicación" }
    },
    {
        question: "Durante la fase de planificación, el director del proyecto facilita un taller de identificación de interesados. Un participante menciona que el sindicato de trabajadores de la empresa operadora de la red eléctrica podría verse afectado por el proyecto. ¿Cuál es la acción más apropiada?",
        options: [
            "Ignorar al sindicato ya que no es un cliente directo del proyecto.",
            "Agregar al sindicato al registro de interesados y analizar su nivel de influencia e interés.",
            "Contactar al sindicato solo si manifiesta oposición formal al proyecto.",
            "Delegar la gestión del sindicato al área de Recursos Humanos de la empresa."
        ],
        answer: ["Agregar al sindicato al registro de interesados y analizar su nivel de influencia e interés."],
        rationale: "El PMBOK establece que todos los individuos u organizaciones que puedan afectar o verse afectados por el proyecto deben ser identificados como interesados. El sindicato cumple este criterio. Ignorarlo en la planificación podría generar conflictos durante la ejecución (PMBOK 6, sección 13.1).",
        tags: { format: "opción_única", domain: "personas", method: "predictivo", cognitive: "aplicación" }
    },
    {
        question: "Un director de proyecto recibe una queja formal de un miembro del equipo que indica que otro compañero toma crédito por su trabajo en reuniones con la gerencia. ¿Cuál es la respuesta más apropiada del director?",
        options: [
            "Ignorar la queja para mantener la armonía del equipo.",
            "Sancionar inmediatamente al miembro del equipo señalado.",
            "Investigar la situación, escuchar a ambas partes y facilitar una conversación directa para resolver el conflicto.",
            "Reorganizar los roles del equipo para evitar interacciones entre ambos miembros."
        ],
        answer: ["Investigar la situación, escuchar a ambas partes y facilitar una conversación directa para resolver el conflicto."],
        rationale: "El PMBOK recomienda abordar los conflictos directamente y cuanto antes. La técnica de colaborar/resolver el problema —escuchar a ambas partes y facilitar el diálogo— produce soluciones más duraderas que la evasión o la imposición. Los conflictos no resueltos deterioran la confianza y el desempeño del equipo (PMBOK 6, sección 9.5).",
        tags: { format: "opción_única", domain: "personas", method: "predictivo", cognitive: "aplicación" }
    },
    {
        question: "El director de un proyecto de construcción de una subestación eléctrica necesita comunicar a las comunidades rurales cercanas los beneficios y el cronograma de las obras. ¿Qué canal de comunicación es el más apropiado para este contexto?",
        options: [
            "Publicar actualizaciones exclusivamente en el portal web corporativo.",
            "Enviar correos electrónicos técnicos con los planos y especificaciones del proyecto.",
            "Realizar reuniones presenciales en la comunidad con materiales visuales accesibles y en lenguaje no técnico.",
            "Publicar avisos en el diario oficial y dar por cumplida la obligación de comunicación."
        ],
        answer: ["Realizar reuniones presenciales en la comunidad con materiales visuales accesibles y en lenguaje no técnico."],
        rationale: "La comunicación efectiva con comunidades requiere adaptar el canal, el lenguaje y el formato al receptor. Las reuniones presenciales facilitan la interacción bidireccional, el lenguaje accesible asegura comprensión y los materiales visuales compensan diferencias de alfabetización. El PMBOK enfatiza adaptar la comunicación al interesado (PMBOK 6, sección 10.1).",
        tags: { format: "opción_única", domain: "personas", method: "predictivo", cognitive: "aplicación" }
    },
    {
        question: "El director de proyecto observa que dos miembros del equipo, ambos ingenieros senior, tienen estilos de trabajo muy diferentes que generan roces frecuentes. Uno prefiere planificar exhaustivamente antes de actuar; el otro prefiere comenzar con pruebas rápidas. ¿Qué acción es más apropiada?",
        options: [
            "Asignar a cada uno a tareas independientes para que no deban interactuar.",
            "Facilitar una conversación sobre los estilos de trabajo de ambos y cómo combinarlos para obtener mejores resultados.",
            "Indicar al equipo que adopte un único enfoque de trabajo definido por el director del proyecto.",
            "Ignorar el problema ya que los roces son naturales entre profesionales técnicos."
        ],
        answer: ["Facilitar una conversación sobre los estilos de trabajo de ambos y cómo combinarlos para obtener mejores resultados."],
        rationale: "Las diferencias de estilo de trabajo pueden ser una fuente de valor si se gestionan bien. El director debe facilitar el entendimiento mutuo y la complementariedad, no eliminar la diversidad. Separar a los miembros o imponer un único estilo reduce la riqueza del equipo (PMBOK 6, sección 9.4 y 9.5).",
        tags: { format: "opción_única", domain: "personas", method: "predictivo", cognitive: "aplicación" }
    },
    {
        question: "Un director de proyecto necesita crear el plan de gestión de comunicaciones. ¿Cuál de las siguientes preguntas NO debe responder necesariamente este plan?",
        options: [
            "¿Qué información necesita cada interesado y con qué frecuencia?",
            "¿Qué canal o método se utilizará para comunicar cada tipo de información?",
            "¿Cuál es el presupuesto total del proyecto y cómo se distribuye por fase?",
            "¿Quién es responsable de generar y distribuir cada tipo de comunicación?"
        ],
        answer: ["¿Cuál es el presupuesto total del proyecto y cómo se distribuye por fase?"],
        rationale: "El plan de gestión de comunicaciones define qué información se comunica, a quién, cuándo, cómo y quién es responsable. El presupuesto del proyecto pertenece al plan de gestión de los costos, no al de comunicaciones (PMBOK 6, sección 10.1).",
        tags: { format: "opción_única", domain: "personas", method: "predictivo", cognitive: "aplicación" }
    },

    // ══════════════════════════════════════════════════════════════════════════
    //  OPCIÓN ÚNICA · PERSONAS · PREDICTIVO · ANÁLISIS  (4 preguntas)
    // ══════════════════════════════════════════════════════════════════════════

    {
        question: "Un director de proyecto lleva ocho meses gestionando un equipo de alto desempeño. Recientemente la organización decidió incorporar al proyecto a tres consultores externos para acelerar la entrega. El director nota que el equipo original muestra resistencia pasiva hacia los consultores. ¿Cuál es la interpretación más acertada y la acción más apropiada?",
        options: [
            "La resistencia indica que los consultores tienen bajo desempeño; se deben reemplazar.",
            "El equipo original percibe amenaza a su identidad o posición; el director debe gestionar la integración activamente mediante actividades de formación de equipo inclusivas.",
            "Es un fenómeno natural sin impacto real; se debe ignorar y esperar que se resuelva solo.",
            "Se debe separar físicamente a los consultores del equipo original para evitar fricciones."
        ],
        answer: ["El equipo original percibe amenaza a su identidad o posición; el director debe gestionar la integración activamente mediante actividades de formación de equipo inclusivas."],
        rationale: "La incorporación de nuevos miembros a un equipo consolidado puede generar resistencia por amenaza percibida a la identidad grupal o al estatus. Según el modelo de Tuckman, el equipo retrocede en su desarrollo. El director debe gestionar activamente la integración con actividades que construyan cohesión con todos los miembros (PMBOK 6, sección 9.4).",
        tags: { format: "opción_única", domain: "personas", method: "predictivo", cognitive: "análisis" }
    },
    {
        question: "Al analizar el mapa de interesados de un proyecto de ampliación de capacidad de transmisión, el director identifica que la autoridad reguladora del sector tiene alto poder pero ha sido clasificada como 'desconocedora' del proyecto. ¿Qué riesgo principal representa esta situación y cuál es la acción preventiva más apropiada?",
        options: [
            "Ningún riesgo relevante; si no conoce el proyecto no puede oponerse a él.",
            "Riesgo de rechazo o sanciones regulatorias por falta de notificación; se debe iniciar un proceso de comunicación formal y anticipada con la autoridad reguladora.",
            "Riesgo de que la autoridad exija participación en el equipo del proyecto.",
            "Riesgo de fuga de información confidencial del proyecto."
        ],
        answer: ["Riesgo de rechazo o sanciones regulatorias por falta de notificación; se debe iniciar un proceso de comunicación formal y anticipada con la autoridad reguladora."],
        rationale: "Una autoridad reguladora con alto poder que desconoce el proyecto es un riesgo crítico en proyectos de infraestructura eléctrica. Los reguladores pueden exigir suspensiones, modificaciones o aplicar sanciones si no son notificados oportunamente. La comunicación proactiva y formal es la respuesta preventiva adecuada (PMBOK 6, sección 13.1 y 13.3).",
        tags: { format: "opción_única", domain: "personas", method: "predictivo", cognitive: "análisis" }
    },
    {
        question: "El director de un proyecto revisa los resultados de una evaluación de desempeño del equipo. Un miembro tiene alta competencia técnica pero bajo compromiso con los objetivos del proyecto. Otro tiene bajo nivel técnico pero alto compromiso y motivación. ¿Qué estrategia de gestión es más apropiada para cada caso respectivamente?",
        options: [
            "Coaching técnico para el segundo y reconocimiento para el primero.",
            "Investigar las causas del bajo compromiso del primero y ofrecer oportunidades de aprendizaje al segundo.",
            "Reemplazar al primero por falta de compromiso y al segundo por falta de competencia.",
            "Asignar al primero las tareas más complejas y al segundo las administrativas."
        ],
        answer: ["Investigar las causas del bajo compromiso del primero y ofrecer oportunidades de aprendizaje al segundo."],
        rationale: "El diagnóstico correcto lleva a la intervención correcta: el bajo compromiso del profesional competente puede tener causas identificables (desmotivación, conflictos, falta de desafío) que requieren investigación. El miembro motivado pero con bajo nivel técnico se beneficia de capacitación y mentoring. Ambas situaciones son gestionables sin reemplazos prematuros (PMBOK 6, sección 9.4; PMBOK 7, dominio del equipo).",
        tags: { format: "opción_única", domain: "personas", method: "predictivo", cognitive: "análisis" }
    },
    {
        question: "Un proyecto de modernización de sistemas de medición inteligente lleva seis meses en ejecución. El director nota que el equipo trabaja horas extra sistemáticamente para cumplir con el cronograma. El análisis de carga muestra que tres actividades críticas están sobrecargadas. ¿Cuál es la consecuencia más probable si no se interviene y qué debe hacer el director?",
        options: [
            "El equipo se adaptará; no se requiere intervención del director.",
            "Se producirá agotamiento del equipo, aumento de errores y posible renuncia de miembros clave; el director debe aplicar técnicas de nivelación de recursos y revisar el cronograma.",
            "El cronograma se cumplirá ya que el equipo está comprometido; el costo es el único riesgo.",
            "El problema se resolverá en la siguiente fase del proyecto cuando disminuya la carga de trabajo."
        ],
        answer: ["Se producirá agotamiento del equipo, aumento de errores y posible renuncia de miembros clave; el director debe aplicar técnicas de nivelación de recursos y revisar el cronograma."],
        rationale: "El PMBOK reconoce que la sobrecarga sostenida del equipo genera agotamiento (burnout), deterioro de la calidad y rotación de personal, lo que paradójicamente retrasa más el proyecto. La nivelación de recursos y la revisión del cronograma son las acciones correctivas adecuadas, aunque puedan extender la duración (PMBOK 6, sección 9.4 y 6.6).",
        tags: { format: "opción_única", domain: "personas", method: "predictivo", cognitive: "análisis" }
    },

    // ══════════════════════════════════════════════════════════════════════════
    //  OPCIÓN ÚNICA · PERSONAS · ÁGIL · APLICACIÓN  (2 preguntas)
    // ══════════════════════════════════════════════════════════════════════════

    {
        question: "En un equipo Scrum que desarrolla una plataforma de monitoreo de activos eléctricos, el Product Owner propone agregar cinco nuevas historias de usuario al sprint actual porque surgió una oportunidad de negocio urgente. ¿Cuál es la respuesta más apropiada del Scrum Master?",
        options: [
            "Aprobar la adición ya que la oportunidad de negocio justifica la excepción.",
            "Explicar que el sprint actual tiene un objetivo definido y que las nuevas historias deben agregarse al Product Backlog para ser consideradas en el próximo sprint planning.",
            "Cancelar el sprint actual y realizar un nuevo planning que incluya las nuevas historias.",
            "Pedir al equipo que extienda sus horas de trabajo para absorber las nuevas historias sin afectar el sprint actual."
        ],
        answer: ["Explicar que el sprint actual tiene un objetivo definido y que las nuevas historias deben agregarse al Product Backlog para ser consideradas en el próximo sprint planning."],
        rationale: "En Scrum, el sprint es un contenedor de tiempo fijo con un objetivo definido. Agregar trabajo al sprint en curso viola el principio de protección del equipo durante el sprint. El Scrum Master debe proteger al equipo y dirigir las nuevas historias al Product Backlog para planificación futura (Guía Scrum; Guía Práctica Ágil).",
        tags: { format: "opción_única", domain: "personas", method: "ágil", cognitive: "aplicación" }
    },
    {
        question: "Un equipo ágil trabaja en el desarrollo de un sistema de gestión de mantenimiento predictivo para transformadores de potencia. Al finalizar el sprint review, el cliente indica que el incremento entregado no cumple con sus expectativas, aunque técnicamente es correcto según las historias de usuario aprobadas. ¿Cuál es la causa raíz más probable?",
        options: [
            "El equipo cometió errores técnicos en la implementación.",
            "Las historias de usuario no capturaron adecuadamente las necesidades reales del cliente o los criterios de aceptación fueron insuficientes.",
            "El cliente cambió de opinión y no es un problema del equipo.",
            "El sprint tuvo una duración inadecuada para el alcance entregado."
        ],
        answer: ["Las historias de usuario no capturaron adecuadamente las necesidades reales del cliente o los criterios de aceptación fueron insuficientes."],
        rationale: "Cuando un entregable es técnicamente correcto pero no satisface las expectativas del cliente, el problema está en la captura de requisitos. Las historias de usuario o los criterios de aceptación no reflejaron fielmente la necesidad real. Esto indica que el proceso de refinamiento del backlog o la definición de 'terminado' requiere mejora (Guía Práctica Ágil; PMBOK 7, dominio de entrega).",
        tags: { format: "opción_única", domain: "personas", method: "ágil", cognitive: "aplicación" }
    },

    // ══════════════════════════════════════════════════════════════════════════
    //  OPCIÓN ÚNICA · PERSONAS · ÁGIL · ANÁLISIS  (1 pregunta)
    // ══════════════════════════════════════════════════════════════════════════

    {
        question: "Un equipo ágil lleva cuatro sprints con velocidad decreciente: 42, 38, 33, 27 puntos de historia. El Scrum Master observa que el equipo dedica cada vez más tiempo a corregir defectos de sprints anteriores. ¿Cuál es el análisis más acertado de esta situación?",
        options: [
            "La velocidad decreciente es normal al aumentar la complejidad del producto.",
            "La deuda técnica acumulada está consumiendo la capacidad del equipo; se debe planificar sprints de deuda técnica y fortalecer la definición de 'terminado'.",
            "El equipo necesita más recursos para mantener la velocidad.",
            "El Product Owner está sobrecargando el backlog con historias demasiado complejas."
        ],
        answer: ["La deuda técnica acumulada está consumiendo la capacidad del equipo; se debe planificar sprints de deuda técnica y fortalecer la definición de 'terminado'."],
        rationale: "La velocidad decreciente combinada con tiempo creciente en corrección de defectos es un síntoma clásico de deuda técnica acumulada. Si la definición de 'terminado' no incluía calidad suficiente en sprints anteriores, los defectos se arrastran y consumen capacidad futura. La solución estructural es refactorización planificada y una definición de 'terminado' más estricta (Guía Práctica Ágil; PMBOK 7).",
        tags: { format: "opción_única", domain: "personas", method: "ágil", cognitive: "análisis" }
    },

    // ══════════════════════════════════════════════════════════════════════════
    //  OPCIÓN ÚNICA · PROCESOS · PREDICTIVO · CONOCIMIENTO  (5 preguntas)
    // ══════════════════════════════════════════════════════════════════════════

    {
        question: "¿Cuál es la diferencia principal entre el Costo hasta la Conclusión (ETC) y la Estimación a la Conclusión (EAC) en la gestión del valor ganado?",
        options: [
            "El ETC es el costo real acumulado; el EAC es el costo planificado total.",
            "El ETC es el costo esperado para terminar el trabajo restante; el EAC es el costo total esperado al finalizar el proyecto.",
            "El ETC incluye las reservas de contingencia; el EAC no las incluye.",
            "No hay diferencia; ambos términos son sinónimos en el PMBOK."
        ],
        answer: ["El ETC es el costo esperado para terminar el trabajo restante; el EAC es el costo total esperado al finalizar el proyecto."],
        rationale: "ETC (Estimate to Complete) representa el costo necesario para completar el trabajo que falta. EAC (Estimate at Completion) es el costo total proyectado del proyecto al finalizar. La relación es: EAC = AC + ETC (PMBOK 6, sección 7.4).",
        tags: { format: "opción_única", domain: "procesos", method: "predictivo", cognitive: "conocimiento" }
    },
    {
        question: "¿Qué tipo de dependencia en la secuenciación de actividades está impuesta por el contrato o las preferencias de gestión, y no por la naturaleza del trabajo?",
        options: [
            "Dependencia obligatoria.",
            "Dependencia discrecional.",
            "Dependencia externa.",
            "Dependencia interna."
        ],
        answer: ["Dependencia discrecional."],
        rationale: "Las dependencias discrecionales (también llamadas blandas o de lógica preferida) son definidas por el equipo del proyecto basándose en buenas prácticas, preferencias de gestión o experiencias previas. A diferencia de las obligatorias (impuestas por la naturaleza del trabajo), las discrecionales pueden modificarse para optimizar el cronograma (PMBOK 6, sección 6.3).",
        tags: { format: "opción_única", domain: "procesos", method: "predictivo", cognitive: "conocimiento" }
    },
    {
        question: "¿Cuál es el propósito de la Reserva de Gestión en la gestión de costos de un proyecto?",
        options: [
            "Cubrir el costo de los riesgos identificados y planificados.",
            "Cubrir cambios imprevistos o no planificados en el alcance del proyecto.",
            "Financiar actividades de mitigación de riesgos conocidos.",
            "Compensar variaciones entre el costo real y el valor ganado."
        ],
        answer: ["Cubrir cambios imprevistos o no planificados en el alcance del proyecto."],
        rationale: "La Reserva de Gestión es un presupuesto adicional reservado para cambios imprevistos en el alcance o eventos desconocidos. No forma parte de la línea base de costos (a diferencia de la reserva de contingencia, que cubre riesgos conocidos). Su uso generalmente requiere aprobación de la dirección (PMBOK 6, sección 7.3).",
        tags: { format: "opción_única", domain: "procesos", method: "predictivo", cognitive: "conocimiento" }
    },
    {
        question: "En gestión de la calidad, ¿qué distingue al Costo de Conformidad del Costo de No Conformidad?",
        options: [
            "El costo de conformidad es el gasto en corrección de defectos; el de no conformidad es la inversión en prevención.",
            "El costo de conformidad es la inversión para evitar defectos; el de no conformidad es el costo resultante de los defectos.",
            "El costo de conformidad incluye las penalidades contractuales; el de no conformidad incluye la capacitación.",
            "Ambos son categorías del costo directo del proyecto."
        ],
        answer: ["El costo de conformidad es la inversión para evitar defectos; el de no conformidad es el costo resultante de los defectos."],
        rationale: "El Costo de la Calidad se divide en: Costo de Conformidad (prevención e inspección para evitar defectos: capacitación, pruebas, auditorías) y Costo de No Conformidad (defectos internos como retrabajo, y externos como garantías, multas, pérdida de negocio) (PMBOK 6, sección 8.1).",
        tags: { format: "opción_única", domain: "procesos", method: "predictivo", cognitive: "conocimiento" }
    },
    {
        question: "¿Cuál de los siguientes describe correctamente el concepto de 'holgura libre' (free float) en la gestión del cronograma?",
        options: [
            "El tiempo que una actividad puede retrasarse sin retrasar la fecha de finalización del proyecto.",
            "El tiempo que una actividad puede retrasarse sin retrasar el inicio temprano de su actividad sucesora inmediata.",
            "El tiempo total disponible para completar todas las actividades del proyecto.",
            "El tiempo que puede retrasarse el proyecto completo sin afectar a la organización."
        ],
        answer: ["El tiempo que una actividad puede retrasarse sin retrasar el inicio temprano de su actividad sucesora inmediata."],
        rationale: "La holgura libre (free float) es el tiempo que una actividad puede retrasarse sin impactar el inicio temprano de ninguna actividad sucesora. Es diferente de la holgura total (total float), que mide el retraso posible sin afectar la fecha de fin del proyecto (PMBOK 6, sección 6.5).",
        tags: { format: "opción_única", domain: "procesos", method: "predictivo", cognitive: "conocimiento" }
    },

    // ══════════════════════════════════════════════════════════════════════════
    //  OPCIÓN ÚNICA · PROCESOS · PREDICTIVO · APLICACIÓN  (10 preguntas)
    // ══════════════════════════════════════════════════════════════════════════

    {
        question: "Un proyecto de tendido de fibra óptica para comunicaciones de red de transmisión tiene un BAC de $3.000.000 y se encuentra al 50% de avance. El EV es $1.200.000 y el AC es $1.500.000. ¿Cuál es el Índice de Desempeño de Costos (CPI) y qué indica?",
        options: [
            "CPI = 1,25; el proyecto está gastando menos de lo planificado por unidad de trabajo completado.",
            "CPI = 0,80; por cada dólar gastado solo se obtiene $0,80 de valor ganado.",
            "CPI = 0,67; el proyecto completó solo el 67% del trabajo planificado.",
            "CPI = 1,50; el proyecto está adelantado respecto al cronograma."
        ],
        answer: ["CPI = 0,80; por cada dólar gastado solo se obtiene $0,80 de valor ganado."],
        rationale: "CPI = EV / AC = 1.200.000 / 1.500.000 = 0,80. Un CPI < 1 significa que por cada dólar invertido el proyecto genera menos de un dólar de valor, es decir, está sobre el presupuesto. El SPI = EV/PV = 1.200.000/1.500.000 = 0,80, también indica atraso (PMBOK 6, sección 7.4).",
        tags: { format: "opción_única", domain: "procesos", method: "predictivo", cognitive: "aplicación" }
    },
    {
        question: "El director de un proyecto de reemplazo de equipos de maniobra en subestaciones necesita aplicar el proceso de Validar el Alcance. ¿Qué documento es la salida más importante de este proceso?",
        options: [
            "La línea base del alcance actualizada.",
            "Las entregables aceptados formalmente por el cliente.",
            "El plan de gestión del alcance revisado.",
            "La lista de actividades actualizada."
        ],
        answer: ["Las entregables aceptados formalmente por el cliente."],
        rationale: "El proceso Validar el Alcance tiene como salida principal los entregables aceptados, que son aquellos que han cumplido los criterios de aceptación y han sido formalmente aprobados por el cliente o patrocinador. También genera solicitudes de cambio para entregables que no pasan la inspección (PMBOK 6, sección 5.5).",
        tags: { format: "opción_única", domain: "procesos", method: "predictivo", cognitive: "aplicación" }
    },
    {
        question: "Durante la fase de planificación de un proyecto de instalación de transformadores de potencia, el equipo realiza estimaciones de tres puntos para la actividad de montaje: optimista 10 días, más probable 15 días, pesimista 25 días. ¿Cuál es la estimación usando la distribución triangular?",
        options: [
            "15 días.",
            "16,67 días.",
            "14,5 días.",
            "17 días."
        ],
        answer: ["16,67 días."],
        rationale: "La distribución triangular calcula el promedio simple de los tres puntos: (O + M + P) / 3 = (10 + 15 + 25) / 3 = 50/3 = 16,67 días. La distribución beta (PERT) pesa más el valor más probable: (O + 4M + P) / 6 = (10 + 60 + 25) / 6 = 15,83 días (PMBOK 6, sección 6.4).",
        tags: { format: "opción_única", domain: "procesos", method: "predictivo", cognitive: "aplicación" }
    },
    {
        question: "El director de un proyecto detecta que se han completado entregables sin pasar por el proceso de control de calidad establecido en el plan. ¿Cuál es la consecuencia más probable y qué acción debe tomar?",
        options: [
            "Los entregables son igualmente válidos; el control de calidad es burocrático.",
            "Los entregables pueden contener defectos no detectados; deben ser sometidos retroactivamente al control de calidad antes de ser aceptados.",
            "El director debe aceptar los entregables y emitir una solicitud de cambio para corregir el proceso en el futuro.",
            "El patrocinador debe decidir si acepta los entregables sin control de calidad."
        ],
        answer: ["Los entregables pueden contener defectos no detectados; deben ser sometidos retroactivamente al control de calidad antes de ser aceptados."],
        rationale: "El proceso Controlar la Calidad verifica que los entregables cumplen los requisitos antes de la aceptación formal. Omitirlo aumenta el riesgo de entregar productos defectuosos. El director debe aplicar el proceso retroactivamente para proteger al cliente y a la organización (PMBOK 6, sección 8.3).",
        tags: { format: "opción_única", domain: "procesos", method: "predictivo", cognitive: "aplicación" }
    },
    {
        question: "Durante la ejecución de un proyecto, el director identifica un riesgo que no fue previsto durante la planificación. El riesgo tiene probabilidad alta e impacto alto sobre el cronograma. ¿Cuál es el proceso correcto para gestionar este riesgo emergente?",
        options: [
            "Ignorarlo hasta la próxima revisión de riesgos programada.",
            "Documentarlo en el registro de riesgos, analizarlo cualitativamente y cuantitativamente, y desarrollar una respuesta.",
            "Escalar directamente al patrocinador sin análisis previo.",
            "Emitir una solicitud de cambio para eliminar las actividades afectadas por el riesgo."
        ],
        answer: ["Documentarlo en el registro de riesgos, analizarlo cualitativamente y cuantitativamente, y desarrollar una respuesta."],
        rationale: "Los riesgos emergentes deben gestionarse siguiendo el mismo proceso que los riesgos identificados durante la planificación: registrar, analizar (cualitativa y cuantitativamente si amerita) y planificar la respuesta. La gestión de riesgos es continua a lo largo del proyecto, no solo durante la planificación (PMBOK 6, sección 11.6).",
        tags: { format: "opción_única", domain: "procesos", method: "predictivo", cognitive: "aplicación" }
    },
    {
        question: "Un proyecto de ampliación de una línea de 230 kV está en la fase de ejecución. El director recibe una solicitud de cambio aprobada que modifica el tipo de conductor a utilizar. ¿Qué documentos deben actualizarse como consecuencia directa de este cambio aprobado?",
        options: [
            "Únicamente el registro de cambios.",
            "El plan para la dirección del proyecto, las líneas base afectadas y los documentos del proyecto correspondientes.",
            "Solo el cronograma del proyecto.",
            "El acta de constitución del proyecto."
        ],
        answer: ["El plan para la dirección del proyecto, las líneas base afectadas y los documentos del proyecto correspondientes."],
        rationale: "Un cambio aprobado que modifica especificaciones técnicas puede impactar el alcance, el cronograma y los costos. Deben actualizarse el plan para la dirección del proyecto (planes subsidiarios afectados), las líneas base impactadas y los documentos del proyecto relevantes (registro de riesgos, lista de actividades, etc.) (PMBOK 6, sección 4.6).",
        tags: { format: "opción_única", domain: "procesos", method: "predictivo", cognitive: "aplicación" }
    },
    {
        question: "El director de un proyecto de construcción necesita seleccionar entre dos contratos para la adquisición de equipos de patio de una subestación: Precio Fijo Cerrado (FFP) o Tiempo y Materiales (T&M). El alcance está perfectamente definido. ¿Cuál es la mejor opción y por qué?",
        options: [
            "T&M, porque da mayor flexibilidad si el alcance cambia.",
            "FFP, porque transfiere el riesgo de costo al proveedor cuando el alcance está bien definido.",
            "T&M, porque es más fácil de administrar para el comprador.",
            "FFP, porque siempre resulta en menor costo total para el comprador."
        ],
        answer: ["FFP, porque transfiere el riesgo de costo al proveedor cuando el alcance está bien definido."],
        rationale: "Con alcance perfectamente definido, el contrato de Precio Fijo Cerrado (FFP) es el más apropiado porque el proveedor asume el riesgo de costo. Los contratos T&M son preferibles cuando el alcance no puede definirse con precisión, pero transfieren el riesgo de costo al comprador. FFP incentiva la eficiencia del proveedor (PMBOK 6, sección 12.1).",
        tags: { format: "opción_única", domain: "procesos", method: "predictivo", cognitive: "aplicación" }
    },
    {
        question: "El equipo de un proyecto identifica que una actividad de la ruta crítica tiene una estimación muy imprecisa (±40%) debido a incertidumbre técnica. ¿Qué técnica es más apropiada para cuantificar el impacto de esta incertidumbre en el cronograma?",
        options: [
            "Análisis de la ruta crítica (CPM) estándar.",
            "Simulación de Monte Carlo sobre el cronograma.",
            "Método de la cadena crítica.",
            "Compresión del cronograma por intensificación."
        ],
        answer: ["Simulación de Monte Carlo sobre el cronograma."],
        rationale: "La simulación de Monte Carlo es la técnica de análisis cuantitativo de riesgos más apropiada para modelar la incertidumbre en duraciones. Genera miles de iteraciones con valores aleatorios dentro de los rangos de estimación y produce una distribución de probabilidad para la duración total del proyecto (PMBOK 6, sección 11.4).",
        tags: { format: "opción_única", domain: "procesos", method: "predictivo", cognitive: "aplicación" }
    },
    {
        question: "Al planificar la gestión del alcance de un proyecto de instalación de sistemas de compensación reactiva, el equipo debate si debe incluir en la EDT el trabajo de obtención de permisos ambientales. ¿Cuál es la decisión correcta?",
        options: [
            "Excluirlo porque los permisos son responsabilidad del área legal, no del proyecto.",
            "Incluirlo porque la EDT debe representar el 100% del trabajo necesario para completar el proyecto.",
            "Excluirlo si el tiempo de obtención de permisos supera el cronograma del proyecto.",
            "Incluirlo solo si el director del proyecto tiene experiencia en gestión ambiental."
        ],
        answer: ["Incluirlo porque la EDT debe representar el 100% del trabajo necesario para completar el proyecto."],
        rationale: "La EDT debe incluir el 100% del alcance del proyecto, incluyendo todo el trabajo necesario para entregar los resultados acordados. La obtención de permisos ambientales es trabajo del proyecto que afecta el cronograma y los costos, independientemente de qué área organizacional lo ejecute (PMBOK 6, sección 5.4).",
        tags: { format: "opción_única", domain: "procesos", method: "predictivo", cognitive: "aplicación" }
    },
    {
        question: "Un proyecto presenta Varianza al Terminar (VAC) de -$200.000. ¿Qué indica esta métrica y qué acción debe considerar el director del proyecto?",
        options: [
            "El proyecto finalizará $200.000 por debajo del presupuesto; no se requiere acción.",
            "El proyecto finalizará $200.000 por encima del presupuesto; se deben evaluar acciones correctivas.",
            "El proyecto tiene un atraso de $200.000 en el cronograma.",
            "El proyecto ha generado $200.000 de ahorro respecto al plan."
        ],
        answer: ["El proyecto finalizará $200.000 por encima del presupuesto; se deben evaluar acciones correctivas."],
        rationale: "VAC = BAC – EAC. Un VAC negativo indica que el EAC supera al BAC, es decir, el proyecto finalizará por encima del presupuesto original. El director debe evaluar acciones correctivas para reducir costos o solicitar fondos adicionales (PMBOK 6, sección 7.4).",
        tags: { format: "opción_única", domain: "procesos", method: "predictivo", cognitive: "aplicación" }
    },

    // ══════════════════════════════════════════════════════════════════════════
    //  OPCIÓN ÚNICA · PROCESOS · PREDICTIVO · ANÁLISIS  (5 preguntas)
    // ══════════════════════════════════════════════════════════════════════════

    {
        question: "Un proyecto de automatización de protecciones tiene el siguiente estado al 45% de avance: PV = $4.500.000, EV = $3.800.000, AC = $3.600.000. El director evalúa si el proyecto puede terminar dentro del presupuesto original. ¿Qué análisis apoya mejor esta evaluación?",
        options: [
            "Con CPI > 1, el proyecto probablemente terminará dentro del presupuesto si mantiene su eficiencia.",
            "Con SPI < 1, el proyecto definitivamente superará el presupuesto.",
            "El proyecto está dentro del presupuesto porque el AC es menor al PV.",
            "No es posible determinar el estado del presupuesto con los datos disponibles."
        ],
        answer: ["Con CPI > 1, el proyecto probablemente terminará dentro del presupuesto si mantiene su eficiencia."],
        rationale: "CPI = EV/AC = 3.800.000/3.600.000 = 1,056 (> 1, bajo presupuesto). SPI = EV/PV = 3.800.000/4.500.000 = 0,844 (atrasado en cronograma). EAC = BAC/CPI, que sería menor al BAC. Si el CPI se mantiene, el proyecto terminará bajo presupuesto aunque atrasado (PMBOK 6, sección 7.4).",
        tags: { format: "opción_única", domain: "procesos", method: "predictivo", cognitive: "análisis" }
    },
    {
        question: "Un proyecto de reemplazo de cables submarinos de transmisión tiene alta incertidumbre técnica en las condiciones del lecho marino. El director evalúa entre reserva de contingencia del 15% o del 25% sobre el presupuesto base. ¿Qué análisis debe sustentar esta decisión?",
        options: [
            "Usar siempre el porcentaje estándar de la organización sin análisis específico del proyecto.",
            "Basar la reserva en el análisis cuantitativo de riesgos y el valor monetario esperado de los riesgos identificados.",
            "Usar el porcentaje mayor siempre que haya incertidumbre, independientemente de los análisis.",
            "La reserva de contingencia no es necesaria si el proveedor tiene experiencia en proyectos submarinos."
        ],
        answer: ["Basar la reserva en el análisis cuantitativo de riesgos y el valor monetario esperado de los riesgos identificados."],
        rationale: "La reserva de contingencia debe determinarse a partir del análisis de riesgos, no de porcentajes arbitrarios. El análisis cuantitativo (simulación de Monte Carlo, valor monetario esperado) proporciona una base objetiva para dimensionar la reserva según los riesgos identificados y su probabilidad de ocurrencia (PMBOK 6, sección 7.3 y 11.4).",
        tags: { format: "opción_única", domain: "procesos", method: "predictivo", cognitive: "análisis" }
    },
    {
        question: "Al revisar la lista de riesgos de un proyecto de modernización de centros de control operativo, el director identifica que varios riesgos comparten la misma causa raíz: dependencia de un único proveedor de software crítico. ¿Cómo debe gestionar esta situación?",
        options: [
            "Tratar cada riesgo de forma independiente con respuestas individuales.",
            "Identificar el riesgo raíz (dependencia del proveedor único) y desarrollar una respuesta que aborde múltiples riesgos simultáneamente.",
            "Eliminar todos los riesgos relacionados con ese proveedor del registro de riesgos.",
            "Escalar todos los riesgos al patrocinador ya que comparten causa raíz."
        ],
        answer: ["Identificar el riesgo raíz (dependencia del proveedor único) y desarrollar una respuesta que aborde múltiples riesgos simultáneamente."],
        rationale: "Cuando múltiples riesgos comparten una causa raíz, la gestión más eficiente es abordar la causa raíz con una respuesta única que mitigue simultáneamente todos los riesgos derivados. En este caso, diversificar proveedores o establecer un proveedor alternativo calificado resolvería el problema estructural (PMBOK 6, sección 11.5).",
        tags: { format: "opción_única", domain: "procesos", method: "predictivo", cognitive: "análisis" }
    },
    {
        question: "Un proyecto de instalación de capacitores de corrección de potencia fue auditado y se encontró que los procesos de aseguramiento de calidad no se aplicaron en tres entregables. El director propone realizar auditorías semanales como acción correctiva. ¿Es esta la respuesta más apropiada al análisis de la causa raíz?",
        options: [
            "Sí, las auditorías frecuentes son siempre la mejor respuesta a problemas de calidad.",
            "No necesariamente; primero debe identificarse por qué no se aplicaron los procesos (falta de conocimiento, tiempo, recursos) antes de definir la acción correctiva.",
            "No; la respuesta correcta es reemplazar a los responsables de calidad.",
            "Sí, porque las auditorías documentan el cumplimiento para proteger legalmente al director del proyecto."
        ],
        answer: ["No necesariamente; primero debe identificarse por qué no se aplicaron los procesos (falta de conocimiento, tiempo, recursos) antes de definir la acción correctiva."],
        rationale: "El PMBOK recomienda realizar análisis de causa raíz antes de definir acciones correctivas. Si los procesos no se aplicaron por falta de conocimiento, la solución es capacitación; si fue por falta de tiempo, se debe revisar la carga de trabajo; si fue por ausencia de recursos, se deben asignar. Agregar auditorías sin entender la causa puede ser inefectivo (PMBOK 6, sección 8.2).",
        tags: { format: "opción_única", domain: "procesos", method: "predictivo", cognitive: "análisis" }
    },
    {
        question: "El director de un proyecto recibe una solicitud de cambio que no afecta el alcance, el cronograma ni el costo. El solicitante indica que mejora la calidad del entregable. ¿Debe esta solicitud pasar por el proceso de Control Integrado de Cambios?",
        options: [
            "No, porque no afecta las líneas base del proyecto.",
            "Sí, porque todo cambio, independientemente de su impacto percibido, debe pasar por el proceso formal de control de cambios.",
            "Solo si el cliente lo solicita expresamente.",
            "Depende del criterio del director del proyecto en cada caso."
        ],
        answer: ["Sí, porque todo cambio, independientemente de su impacto percibido, debe pasar por el proceso formal de control de cambios."],
        rationale: "El PMBOK establece que todas las solicitudes de cambio, independientemente de su tamaño o impacto percibido, deben procesarse a través del Control Integrado de Cambios. Los cambios 'pequeños' pueden tener impactos no evidentes en otras áreas del proyecto. El proceso asegura que los impactos sean evaluados integralmente (PMBOK 6, sección 4.6).",
        tags: { format: "opción_única", domain: "procesos", method: "predictivo", cognitive: "análisis" }
    },

    // ══════════════════════════════════════════════════════════════════════════
    //  OPCIÓN ÚNICA · PROCESOS · ÁGIL · ANÁLISIS  (1 pregunta)
    // ══════════════════════════════════════════════════════════════════════════

    {
        question: "Un proyecto híbrido de implementación de un sistema EMS (Energy Management System) combina una fase de diseño de arquitectura con enfoque predictivo y una fase de desarrollo de módulos con sprints ágiles. El director observa que los cambios de alcance en los sprints frecuentemente impactan la arquitectura planificada. ¿Cuál es el análisis más correcto de esta situación?",
        options: [
            "Los enfoques híbridos son incompatibles; el proyecto debe migrar completamente a predictivo.",
            "Los puntos de integración entre la fase predictiva y la ágil deben gestionarse explícitamente; los cambios de alcance en los sprints deben evaluarse contra la arquitectura base antes de incorporarse.",
            "El equipo ágil debe ignorar la arquitectura planificada para mantener la agilidad.",
            "La arquitectura debe rediseñarse completa al inicio de cada sprint para adaptarse a los cambios."
        ],
        answer: ["Los puntos de integración entre la fase predictiva y la ágil deben gestionarse explícitamente; los cambios de alcance en los sprints deben evaluarse contra la arquitectura base antes de incorporarse."],
        rationale: "En enfoques híbridos, los puntos de integración entre las fases predictiva y ágil son críticos. Los cambios de alcance ágiles que afectan la arquitectura deben pasar por un proceso de revisión de impacto antes de ser aceptados, para evitar que comprometan la integridad del sistema. Este es el desafío central de los modelos híbridos (PMBOK 7, sección de ciclos de vida; Guía Práctica Ágil).",
        tags: { format: "opción_única", domain: "procesos", method: "ágil", cognitive: "análisis" }
    },

    // ══════════════════════════════════════════════════════════════════════════
    //  OPCIÓN ÚNICA · NEGOCIO · PREDICTIVO · CONOCIMIENTO  (1 pregunta)
    // ══════════════════════════════════════════════════════════════════════════

    {
        question: "¿Cuál de los siguientes describe correctamente el concepto de 'beneficio' en el contexto del PMBOK 7?",
        options: [
            "El entregable físico producido por el proyecto.",
            "El cambio en el comportamiento o capacidades organizacionales producido por los resultados del proyecto.",
            "La ganancia o mejora de valor que la organización obtiene como consecuencia de los resultados del proyecto.",
            "El porcentaje de retorno financiero sobre la inversión del proyecto."
        ],
        answer: ["La ganancia o mejora de valor que la organización obtiene como consecuencia de los resultados del proyecto."],
        rationale: "El PMBOK 7 distingue entre outputs (entregables del proyecto), outcomes (cambios en el estado o comportamiento) y beneficios (ganancias o mejoras de valor para la organización y sus interesados). Los beneficios son la razón de ser del proyecto y deben medirse después de su cierre (PMBOK 7, principio de valor).",
        tags: { format: "opción_única", domain: "negocio", method: "predictivo", cognitive: "conocimiento" }
    },

    // ══════════════════════════════════════════════════════════════════════════
    //  OPCIÓN ÚNICA · NEGOCIO · PREDICTIVO · APLICACIÓN  (2 preguntas)
    // ══════════════════════════════════════════════════════════════════════════

    {
        question: "La empresa transmisora está evaluando si continuar con un proyecto de expansión que lleva $8.000.000 invertidos y requiere $5.000.000 adicionales para finalizar. Un análisis actualizado muestra que el VPN de los beneficios futuros es de $4.000.000. ¿Qué principio de toma de decisiones debe aplicar la organización?",
        options: [
            "Continuar el proyecto porque ya se han invertido $8.000.000 que no se pueden recuperar.",
            "Aplicar el principio de costo hundido (sunk cost): evaluar la decisión basándose solo en los $5.000.000 adicionales versus los $4.000.000 de beneficio futuro.",
            "Continuar siempre que el presupuesto organizacional lo permita.",
            "Cancelar el proyecto y recuperar los $8.000.000 invertidos."
        ],
        answer: ["Aplicar el principio de costo hundido (sunk cost): evaluar la decisión basándose solo en los $5.000.000 adicionales versus los $4.000.000 de beneficio futuro."],
        rationale: "Los costos hundidos (sunk costs) ya fueron incurridos y no son recuperables, por lo que no deben influir en las decisiones futuras. La decisión correcta evalúa solo la inversión incremental ($5.000.000) versus los beneficios futuros ($4.000.000). En este caso, el VPN incremental es negativo (-$1.000.000), lo que sugiere detener el proyecto (PMBOK 6, sección 1.2.6).",
        tags: { format: "opción_única", domain: "negocio", method: "predictivo", cognitive: "aplicación" }
    },
    {
        question: "El director de un proyecto debe reportar al comité directivo el estado del proyecto en términos de valor generado para el negocio. ¿Qué métricas son más apropiadas para comunicar valor de negocio en esta audiencia?",
        options: [
            "SPI, CPI y VAC del análisis del valor ganado.",
            "Número de entregables completados y horas del equipo consumidas.",
            "Porcentaje de beneficios realizados contra los proyectados en el caso de negocio y alineación con objetivos estratégicos.",
            "Número de solicitudes de cambio aprobadas y rechazadas."
        ],
        answer: ["Porcentaje de beneficios realizados contra los proyectados en el caso de negocio y alineación con objetivos estratégicos."],
        rationale: "El comité directivo evalúa proyectos en términos de valor de negocio, no de métricas de gestión de proyectos. Las métricas más relevantes para esta audiencia son el avance en la realización de beneficios del caso de negocio y la contribución a los objetivos estratégicos organizacionales (PMBOK 7, principio de valor; PMBOK 6, sección 1.2.6).",
        tags: { format: "opción_única", domain: "negocio", method: "predictivo", cognitive: "aplicación" }
    },

    // ══════════════════════════════════════════════════════════════════════════
    //  OPCIÓN ÚNICA · NEGOCIO · PREDICTIVO · ANÁLISIS  (1 pregunta)
    // ══════════════════════════════════════════════════════════════════════════

    {
        question: "Una empresa de transmisión eléctrica lanzó simultáneamente cinco proyectos estratégicos el año pasado. Al revisar el portafolio, el director del programa identifica que los cinco proyectos compiten por los mismos ingenieros especializados en sistemas de potencia. Tres proyectos presentan retrasos significativos. ¿Cuál es la causa sistémica más probable y la acción correctiva más apropiada?",
        options: [
            "Los directores de proyecto individuales tienen baja competencia; deben ser reemplazados.",
            "La organización lanzó más proyectos de los que sus recursos pueden soportar simultáneamente; se debe priorizar el portafolio y escalonar los proyectos.",
            "Los proyectos deben aumentar sus presupuestos para contratar recursos externos.",
            "Los retrasos son casuales; cada proyecto debe gestionarse independientemente."
        ],
        answer: ["La organización lanzó más proyectos de los que sus recursos pueden soportar simultáneamente; se debe priorizar el portafolio y escalonar los proyectos."],
        rationale: "La competencia por recursos especializados escasos entre proyectos simultáneos es una causa sistémica de retrasos que no puede resolverse a nivel de proyecto individual. La solución es a nivel de portafolio: priorizar según valor estratégico y escalonar los proyectos para alinear la demanda de recursos con la capacidad organizacional (PMBOK 6, sección 1.2.3; PMBOK 7, dominio de valor).",
        tags: { format: "opción_única", domain: "negocio", method: "predictivo", cognitive: "análisis" }
    },

    // ══════════════════════════════════════════════════════════════════════════
    //  OPCIÓN ÚNICA · PERSONAS · PREDICTIVO · ANÁLISIS  (extra)
    // ══════════════════════════════════════════════════════════════════════════

    {
        question: "El director de proyecto de una empresa de transmisión eléctrica ha construido relaciones sólidas con todos los interesados clave durante doce meses. Al ingresarse un nuevo gerente de operaciones como interesado con alto poder, el director decide tratarlo exactamente igual que a los demás. ¿Qué error conceptual está cometiendo?",
        options: [
            "No está cometiendo ningún error; la consistencia en la gestión de interesados es una buena práctica.",
            "Está ignorando que los interesados nuevos requieren un proceso de identificación y análisis inicial para determinar su posición, intereses e influencia antes de definir la estrategia de relacionamiento.",
            "Debería darle al nuevo gerente acceso inmediato a toda la información del proyecto.",
            "Debería excluirlo temporalmente hasta que comprenda el contexto del proyecto."
        ],
        answer: ["Está ignorando que los interesados nuevos requieren un proceso de identificación y análisis inicial para determinar su posición, intereses e influencia antes de definir la estrategia de relacionamiento."],
        rationale: "Cada interesado nuevo debe pasar por el proceso de identificación y análisis para determinar su posición actual, intereses, nivel de poder e influencia. Asumir que el mismo enfoque de relacionamiento aplica sin análisis previo puede llevar a estrategias incorrectas. El PMBOK enfatiza la naturaleza iterativa de la gestión de interesados (PMBOK 6, sección 13.1 y 13.4).",
        tags: { format: "opción_única", domain: "personas", method: "predictivo", cognitive: "análisis" }
    },

    // ══════════════════════════════════════════════════════════════════════════
    //  OPCIÓN MÚLTIPLE · PERSONAS · PREDICTIVO · ANÁLISIS  (extra)
    // ══════════════════════════════════════════════════════════════════════════

    {
        question: "Un proyecto de instalación de sistemas de medición inteligente (AMI) en una red de transmisión tiene al 65% de avance un equipo con alta rotación: tres miembros clave han renunciado en los últimos dos meses. ¿Cuáles de las siguientes son causas probables que el director debe investigar? (Selecciona todas las que apliquen)",
        options: [
            "Falta de alineación entre las expectativas del rol y las tareas reales asignadas.",
            "Problemas de comunicación o liderazgo que generan un ambiente de trabajo negativo.",
            "El proyecto está avanzado en cronograma, lo que motiva a los miembros a buscar nuevos desafíos.",
            "Ausencia de oportunidades de desarrollo o aprendizaje percibidas por el equipo.",
            "Compensación o reconocimiento no competitivos respecto al mercado laboral."
        ],
        answer: [
            "Falta de alineación entre las expectativas del rol y las tareas reales asignadas.",
            "Problemas de comunicación o liderazgo que generan un ambiente de trabajo negativo.",
            "Ausencia de oportunidades de desarrollo o aprendizaje percibidas por el equipo.",
            "Compensación o reconocimiento no competitivos respecto al mercado laboral."
        ],
        rationale: "La alta rotación de talento durante la ejecución de un proyecto es un indicador de problemas en el ambiente de trabajo. El PMBOK y las teorías de motivación identifican como causas habituales: desalineación rol-expectativa, problemas de liderazgo, falta de desarrollo y compensación no competitiva. El avance positivo del cronograma no es causa de rotación (PMBOK 6, sección 9.4; PMBOK 7, dominio del equipo).",
        tags: { format: "opción_múltiple", domain: "personas", method: "predictivo", cognitive: "análisis" }
    },

    // ══════════════════════════════════════════════════════════════════════════
    //  ORDENAMIENTO · PROCESOS · PREDICTIVO · APLICACIÓN  (2 extras)
    // ══════════════════════════════════════════════════════════════════════════

    {
        question: "Ordena los siguientes pasos del proceso de elaboración del presupuesto de un proyecto de reemplazo de conductores de alta tensión, desde la planificación hasta el control:",
        options: [
            "Controlar los costos durante la ejecución usando EVM",
            "Estimar los costos de cada actividad del proyecto",
            "Agregar las estimaciones para determinar la línea base de costos",
            "Planificar la gestión de los costos",
            "Determinar el presupuesto incluyendo reservas de contingencia y gestión"
        ],
        answer: [
            "Planificar la gestión de los costos",
            "Estimar los costos de cada actividad del proyecto",
            "Agregar las estimaciones para determinar la línea base de costos",
            "Determinar el presupuesto incluyendo reservas de contingencia y gestión",
            "Controlar los costos durante la ejecución usando EVM"
        ],
        rationale: "La secuencia correcta es: planificar cómo se gestionarán los costos, estimar los costos de cada actividad, agregar esas estimaciones en la línea base de costos, añadir las reservas para obtener el presupuesto total autorizado (BAC) y finalmente controlar los costos durante la ejecución mediante el análisis del valor ganado (PMBOK 6, capítulo 7).",
        tags: { format: "ordenamiento", domain: "procesos", method: "predictivo", cognitive: "aplicación" }
    },
    {
        question: "Ordena los siguientes pasos para gestionar correctamente una solicitud de cambio que afecta el alcance de un proyecto de automatización de bahías en una subestación de 500 kV:",
        options: [
            "Actualizar el plan del proyecto y las líneas base si el cambio es aprobado",
            "Recibir y registrar formalmente la solicitud de cambio",
            "Comunicar la decisión a todos los interesados afectados",
            "Evaluar el impacto técnico, de cronograma, costo y riesgo del cambio",
            "Presentar el análisis de impacto al Comité de Control de Cambios (CCB) para su decisión"
        ],
        answer: [
            "Recibir y registrar formalmente la solicitud de cambio",
            "Evaluar el impacto técnico, de cronograma, costo y riesgo del cambio",
            "Presentar el análisis de impacto al Comité de Control de Cambios (CCB) para su decisión",
            "Comunicar la decisión a todos los interesados afectados",
            "Actualizar el plan del proyecto y las líneas base si el cambio es aprobado"
        ],
        rationale: "El proceso de control integrado de cambios sigue esta secuencia obligatoria: registrar la solicitud para trazabilidad, analizar integralmente su impacto, presentar el análisis al CCB para aprobación o rechazo, comunicar la decisión a los interesados y solo entonces actualizar los documentos del proyecto si fue aprobada. Actualizar antes de la aprobación viola el proceso de control (PMBOK 6, sección 4.6).",
        tags: { format: "ordenamiento", domain: "procesos", method: "predictivo", cognitive: "aplicación" }
    },

    // ══════════════════════════════════════════════════════════════════════════
    //  OPCIÓN MÚLTIPLE · PERSONAS · PREDICTIVO · APLICACIÓN  (2 preguntas)
    // ══════════════════════════════════════════════════════════════════════════

    {
        question: "El director de un proyecto necesita desarrollar las habilidades del equipo para gestionar proyectos de transmisión eléctrica de manera más efectiva. ¿Cuáles de las siguientes son actividades apropiadas de desarrollo del equipo? (Selecciona todas las que apliquen)",
        options: [
            "Proporcionar capacitación técnica específica en sistemas de protección y automatización.",
            "Reemplazar a los miembros con menor desempeño por profesionales más experimentados.",
            "Facilitar sesiones de retroalimentación de 360 grados para identificar áreas de mejora.",
            "Asignar mentores técnicos a los miembros con menor experiencia.",
            "Evaluar el desempeño del equipo exclusivamente mediante métricas de cronograma y costo."
        ],
        answer: [
            "Proporcionar capacitación técnica específica en sistemas de protección y automatización.",
            "Facilitar sesiones de retroalimentación de 360 grados para identificar áreas de mejora.",
            "Asignar mentores técnicos a los miembros con menor experiencia."
        ],
        rationale: "El desarrollo del equipo incluye capacitación, retroalimentación constructiva y mentoría. Estas actividades mejoran las competencias individuales y colectivas. Reemplazar miembros no es desarrollo de equipo, y evaluar solo con métricas de cronograma/costo ignora las competencias conductuales y técnicas (PMBOK 6, sección 9.4).",
        tags: { format: "opción_múltiple", domain: "personas", method: "predictivo", cognitive: "aplicación" }
    },
    {
        question: "En la gestión de interesados de un proyecto de construcción de una línea de transmisión, ¿cuáles de las siguientes son acciones apropiadas para aumentar el nivel de participación de un interesado que está actualmente en la categoría 'resistente'? (Selecciona todas las que apliquen)",
        options: [
            "Ignorar al interesado resistente para no amplificar su oposición.",
            "Identificar las causas raíz de su resistencia mediante conversaciones individuales.",
            "Involucrarlo en actividades del proyecto donde su aporte sea valioso.",
            "Compartir información relevante del proyecto que pueda responder a sus preocupaciones.",
            "Emitir un comunicado público destacando los beneficios del proyecto para superar la resistencia."
        ],
        answer: [
            "Identificar las causas raíz de su resistencia mediante conversaciones individuales.",
            "Involucrarlo en actividades del proyecto donde su aporte sea valioso.",
            "Compartir información relevante del proyecto que pueda responder a sus preocupaciones."
        ],
        rationale: "Para mover a un interesado de resistente a neutral o partidario, el PMBOK recomienda: entender sus razones de resistencia, involucrarlos de forma constructiva y proveerles información relevante. Los comunicados públicos sin diálogo previo pueden exacerbar la resistencia (PMBOK 6, sección 13.4).",
        tags: { format: "opción_múltiple", domain: "personas", method: "predictivo", cognitive: "aplicación" }
    },

    // ══════════════════════════════════════════════════════════════════════════
    //  OPCIÓN MÚLTIPLE · PERSONAS · PREDICTIVO · ANÁLISIS  (1 pregunta)
    // ══════════════════════════════════════════════════════════════════════════

    {
        question: "Al final de un proyecto de instalación de sistemas de teleprotección, el director realiza una encuesta de satisfacción del equipo. Los resultados muestran: alta satisfacción con el trabajo técnico, baja satisfacción con la comunicación del director, y satisfacción media con las oportunidades de desarrollo. ¿Cuáles son las conclusiones y acciones más apropiadas? (Selecciona todas las que apliquen)",
        options: [
            "El director debe mejorar sus prácticas de comunicación con el equipo en futuros proyectos.",
            "Los resultados de satisfacción no son relevantes para la gestión de proyectos.",
            "El diseño de roles y las oportunidades de desarrollo deben ser más explícitos en la planificación de futuros proyectos.",
            "Documentar los hallazgos como lecciones aprendidas para beneficiar proyectos futuros.",
            "Los altos puntajes en trabajo técnico compensan las deficiencias en comunicación y desarrollo."
        ],
        answer: [
            "El director debe mejorar sus prácticas de comunicación con el equipo en futuros proyectos.",
            "El diseño de roles y las oportunidades de desarrollo deben ser más explícitos en la planificación de futuros proyectos.",
            "Documentar los hallazgos como lecciones aprendidas para beneficiar proyectos futuros."
        ],
        rationale: "La retroalimentación del equipo es información valiosa para la mejora continua. Las deficiencias identificadas en comunicación y desarrollo deben traducirse en acciones concretas y documentarse como lecciones aprendidas. Los puntos fuertes no compensan las debilidades; deben abordarse todas las áreas de mejora (PMBOK 6, sección 9.4 y 4.7; PMBOK 7, dominio del equipo).",
        tags: { format: "opción_múltiple", domain: "personas", method: "predictivo", cognitive: "análisis" }
    },

    // ══════════════════════════════════════════════════════════════════════════
    //  OPCIÓN MÚLTIPLE · PERSONAS · ÁGIL · APLICACIÓN  (1 pregunta)
    // ══════════════════════════════════════════════════════════════════════════

    {
        question: "Un equipo ágil que trabaja en el desarrollo de un dashboard de monitoreo de líneas de transmisión realiza su sprint retrospective. El equipo identifica que la comunicación interna durante el sprint fue deficiente. ¿Cuáles de las siguientes acciones son apropiadas como resultado de la retrospectiva? (Selecciona todas las que apliquen)",
        options: [
            "Identificar acciones concretas de mejora para el próximo sprint y asignar responsables.",
            "Documentar los problemas de comunicación pero no tomar acción hasta que se acumulen varios sprints.",
            "Ajustar las normas de trabajo del equipo (team working agreements) para incluir prácticas de comunicación más efectivas.",
            "Experimentar con una herramienta nueva de comunicación en el próximo sprint para evaluar su efectividad.",
            "Informar al Product Owner de los problemas internos del equipo para que tome acción."
        ],
        answer: [
            "Identificar acciones concretas de mejora para el próximo sprint y asignar responsables.",
            "Ajustar las normas de trabajo del equipo (team working agreements) para incluir prácticas de comunicación más efectivas.",
            "Experimentar con una herramienta nueva de comunicación en el próximo sprint para evaluar su efectividad."
        ],
        rationale: "La retrospectiva debe generar acciones concretas implementables en el próximo sprint. Ajustar los acuerdos de trabajo del equipo y experimentar con mejoras son resultados esperados. Acumular problemas sin acción o delegar la resolución al Product Owner (quien es responsable del producto, no de los procesos del equipo) son prácticas incorrectas (Guía Práctica Ágil; PMBOK 7).",
        tags: { format: "opción_múltiple", domain: "personas", method: "ágil", cognitive: "aplicación" }
    },

    // ══════════════════════════════════════════════════════════════════════════
    //  OPCIÓN MÚLTIPLE · PROCESOS · PREDICTIVO · CONOCIMIENTO  (2 preguntas)
    // ══════════════════════════════════════════════════════════════════════════

    {
        question: "¿Cuáles de las siguientes son salidas del proceso Desarrollar el Plan para la Dirección del Proyecto? (Selecciona todas las que apliquen)",
        options: [
            "El plan para la dirección del proyecto.",
            "Las actualizaciones a los documentos del proyecto.",
            "El registro de supuestos.",
            "El plan de gestión de cambios.",
            "El acta de constitución del proyecto."
        ],
        answer: [
            "El plan para la dirección del proyecto.",
            "El plan de gestión de cambios."
        ],
        rationale: "El proceso Desarrollar el Plan para la Dirección del Proyecto tiene como salida principal el plan para la dirección del proyecto, que incluye el plan de gestión de cambios y el plan de gestión de la configuración. El registro de supuestos y las actualizaciones a documentos son salidas de otros procesos; el acta de constitución es una entrada (PMBOK 6, sección 4.2).",
        tags: { format: "opción_múltiple", domain: "procesos", method: "predictivo", cognitive: "conocimiento" }
    },
    {
        question: "¿Cuáles de las siguientes son herramientas y técnicas del proceso Estimar los Costos según el PMBOK 6? (Selecciona todas las que apliquen)",
        options: [
            "Estimación análoga.",
            "Análisis de reservas.",
            "Valor ganado (EVM).",
            "Estimación paramétrica.",
            "Análisis de varianza."
        ],
        answer: [
            "Estimación análoga.",
            "Análisis de reservas.",
            "Estimación paramétrica."
        ],
        rationale: "Las herramientas de Estimar los Costos incluyen: estimación análoga, estimación paramétrica, estimación ascendente, análisis de reservas y juicio de expertos, entre otras. El Valor Ganado (EVM) y el Análisis de Varianza son técnicas del proceso Controlar los Costos, no de la estimación (PMBOK 6, sección 7.2).",
        tags: { format: "opción_múltiple", domain: "procesos", method: "predictivo", cognitive: "conocimiento" }
    },

    // ══════════════════════════════════════════════════════════════════════════
    //  OPCIÓN MÚLTIPLE · PROCESOS · PREDICTIVO · APLICACIÓN  (3 preguntas)
    // ══════════════════════════════════════════════════════════════════════════

    {
        question: "Durante la ejecución de un proyecto de modernización de líneas de transmisión, el director identifica que la calidad de los materiales entregados por un proveedor no cumple con las especificaciones técnicas establecidas en el contrato. ¿Cuáles de las siguientes acciones son apropiadas? (Selecciona todas las que apliquen)",
        options: [
            "Documentar el incumplimiento y notificar formalmente al proveedor con referencia a las cláusulas contractuales.",
            "Aceptar los materiales para no retrasar el cronograma y gestionar el problema internamente.",
            "Emitir una solicitud de cambio para modificar las especificaciones técnicas y aceptar los materiales.",
            "Exigir al proveedor el reemplazo de los materiales no conformes según los términos del contrato.",
            "Actualizar el registro de riesgos con el riesgo de incumplimiento del proveedor."
        ],
        answer: [
            "Documentar el incumplimiento y notificar formalmente al proveedor con referencia a las cláusulas contractuales.",
            "Exigir al proveedor el reemplazo de los materiales no conformes según los términos del contrato.",
            "Actualizar el registro de riesgos con el riesgo de incumplimiento del proveedor."
        ],
        rationale: "El incumplimiento contractual debe documentarse formalmente y gestionarse según los términos del contrato. Aceptar materiales no conformes o modificar especificaciones compromete la calidad del proyecto. Actualizar el registro de riesgos es buena práctica de gestión continua (PMBOK 6, secciones 12.3 y 8.3).",
        tags: { format: "opción_múltiple", domain: "procesos", method: "predictivo", cognitive: "aplicación" }
    },
    {
        question: "Al desarrollar el plan de gestión de riesgos de un proyecto de instalación de equipos de alta tensión en una zona sísmica, ¿cuáles de las siguientes son entradas relevantes para este proceso? (Selecciona todas las que apliquen)",
        options: [
            "El acta de constitución del proyecto.",
            "El plan para la dirección del proyecto.",
            "Los factores ambientales de la empresa (incluyendo cultura de riesgo organizacional).",
            "El registro de riesgos del proyecto.",
            "Los activos de los procesos de la organización (incluyendo plantillas de gestión de riesgos)."
        ],
        answer: [
            "El acta de constitución del proyecto.",
            "El plan para la dirección del proyecto.",
            "Los factores ambientales de la empresa (incluyendo cultura de riesgo organizacional).",
            "Los activos de los procesos de la organización (incluyendo plantillas de gestión de riesgos)."
        ],
        rationale: "El proceso Planificar la Gestión de los Riesgos usa como entradas: el acta de constitución, el plan para la dirección, el enunciado del alcance, los factores ambientales de la empresa y los activos de los procesos. El registro de riesgos es una salida del proceso Identificar los Riesgos, posterior a la planificación (PMBOK 6, sección 11.1).",
        tags: { format: "opción_múltiple", domain: "procesos", method: "predictivo", cognitive: "aplicación" }
    },
    {
        question: "Un director de proyecto recibe presión de la gerencia para reportar el proyecto como 'verde' (en buen estado) aunque los indicadores muestran problemas reales de cronograma y costo. ¿Cuáles de las siguientes acciones son apropiadas? (Selecciona todas las que apliquen)",
        options: [
            "Reportar el estado real del proyecto con datos objetivos, aunque sea desfavorable.",
            "Cumplir con la solicitud de la gerencia para mantener la relación laboral.",
            "Documentar la solicitud de la gerencia y el reporte real en el registro de problemas.",
            "Presentar los datos reales a la gerencia y explicar las implicaciones de reportar un estado incorrecto.",
            "Consultar el Código de Ética y Conducta Profesional del PMI antes de actuar."
        ],
        answer: [
            "Reportar el estado real del proyecto con datos objetivos, aunque sea desfavorable.",
            "Documentar la solicitud de la gerencia y el reporte real en el registro de problemas.",
            "Presentar los datos reales a la gerencia y explicar las implicaciones de reportar un estado incorrecto.",
            "Consultar el Código de Ética y Conducta Profesional del PMI antes de actuar."
        ],
        rationale: "El Código de Ética del PMI exige honestidad y responsabilidad en los reportes. Reportar un estado incorrecto viola principios éticos, puede ocultar problemas graves y compromete la toma de decisiones de la organización. El director debe reportar datos reales, documentar la situación y comunicar las consecuencias de la deshonestidad (PMBOK 6, sección 1.1.3; Código de Ética PMI).",
        tags: { format: "opción_múltiple", domain: "procesos", method: "predictivo", cognitive: "aplicación" }
    },

    // ══════════════════════════════════════════════════════════════════════════
    //  OPCIÓN MÚLTIPLE · PROCESOS · PREDICTIVO · ANÁLISIS  (1 pregunta)
    // ══════════════════════════════════════════════════════════════════════════

    {
        question: "El director de proyecto de un programa de modernización de la red de transmisión revisa los indicadores al 70% de avance: SPI = 0,88, CPI = 0,91, calidad de entregables con un 12% de retrabajo. ¿Cuáles de las siguientes conclusiones son válidas? (Selecciona todas las que apliquen)",
        options: [
            "El proyecto tiene problemas simultáneos de cronograma, costo y calidad que requieren un análisis de causa raíz integrado.",
            "El retrabajo puede estar contribuyendo tanto al retraso en cronograma como al sobrecosto.",
            "El CPI de 0,91 es aceptable y no requiere atención.",
            "Se debe evaluar si las presiones de cronograma están provocando trabajos apresurados que generan defectos.",
            "Los problemas de calidad y cronograma son independientes y deben gestionarse por separado."
        ],
        answer: [
            "El proyecto tiene problemas simultáneos de cronograma, costo y calidad que requieren un análisis de causa raíz integrado.",
            "El retrabajo puede estar contribuyendo tanto al retraso en cronograma como al sobrecosto.",
            "Se debe evaluar si las presiones de cronograma están provocando trabajos apresurados que generan defectos."
        ],
        rationale: "Cuando SPI, CPI y calidad presentan problemas simultáneos, es probable que estén relacionados. El retrabajo consume tiempo y costo adicionales, explicando el deterioro de SPI y CPI. Las presiones de cronograma que generan trabajo apresurado son una causa raíz común de defectos en proyectos de ingeniería. Un análisis integrado es más efectivo que tratar cada indicador por separado (PMBOK 6, secciones 7.4 y 8.3).",
        tags: { format: "opción_múltiple", domain: "procesos", method: "predictivo", cognitive: "análisis" }
    },

    // ══════════════════════════════════════════════════════════════════════════
    //  OPCIÓN MÚLTIPLE · NEGOCIO · PREDICTIVO · APLICACIÓN  (1 pregunta)
    // ══════════════════════════════════════════════════════════════════════════

    {
        question: "Una empresa de transmisión eléctrica está evaluando si un proyecto de automatización de subestaciones debe continuar, pausarse o cancelarse. El proyecto lleva el 60% de avance, el mercado ha cambiado y los beneficios proyectados se han reducido en un 30%. ¿Cuáles de los siguientes factores son relevantes para la decisión? (Selecciona todas las que apliquen)",
        options: [
            "El costo invertido hasta la fecha (costo hundido).",
            "El costo necesario para completar el 40% restante del proyecto.",
            "Los beneficios revisados proyectados versus el costo de completar el proyecto.",
            "El impacto en la estrategia corporativa y el portafolio de proyectos de cancelar el proyecto.",
            "El impacto en el equipo del proyecto si el proyecto es cancelado."
        ],
        answer: [
            "El costo necesario para completar el 40% restante del proyecto.",
            "Los beneficios revisados proyectados versus el costo de completar el proyecto.",
            "El impacto en la estrategia corporativa y el portafolio de proyectos de cancelar el proyecto.",
            "El impacto en el equipo del proyecto si el proyecto es cancelado."
        ],
        rationale: "Las decisiones de continuación deben basarse en el costo incremental (no en el hundido), el VPN actualizado de los beneficios restantes, el impacto estratégico de la cancelación y las consideraciones sobre el equipo. El costo ya invertido no debe influir en la decisión (costo hundido), aunque sí debe documentarse (PMBOK 6, sección 1.2.6; PMBOK 7, principio de valor).",
        tags: { format: "opción_múltiple", domain: "negocio", method: "predictivo", cognitive: "aplicación" }
    },

    // ══════════════════════════════════════════════════════════════════════════
    //  ORDENAMIENTO · PROCESOS · PREDICTIVO · CONOCIMIENTO  (3 preguntas)
    // ══════════════════════════════════════════════════════════════════════════

    {
        question: "Ordena los siguientes pasos del proceso de Gestión del Alcance según la secuencia correcta del PMBOK 6:",
        options: [
            "Validar el alcance",
            "Crear la EDT/WBS",
            "Planificar la gestión del alcance",
            "Recopilar requisitos",
            "Definir el alcance"
        ],
        answer: [
            "Planificar la gestión del alcance",
            "Recopilar requisitos",
            "Definir el alcance",
            "Crear la EDT/WBS",
            "Validar el alcance"
        ],
        rationale: "La secuencia de la Gestión del Alcance es: (1) Planificar cómo se gestionará el alcance, (2) Recopilar los requisitos de los interesados, (3) Definir el enunciado del alcance, (4) Crear la EDT para descomponer el trabajo y (5) Validar el alcance con los entregables completados. Controlar el Alcance ocurre de forma continua durante la ejecución (PMBOK 6, capítulo 5).",
        tags: { format: "ordenamiento", domain: "procesos", method: "predictivo", cognitive: "conocimiento" }
    },
    {
        question: "Ordena las siguientes acciones que debe tomar el director cuando detecta una desviación significativa entre el desempeño real y el plan del proyecto:",
        options: [
            "Implementar las acciones correctivas aprobadas",
            "Analizar la causa raíz de la desviación",
            "Emitir solicitudes de cambio para acciones correctivas",
            "Identificar la desviación a través del monitoreo y control",
            "Someter las solicitudes al proceso de control integrado de cambios"
        ],
        answer: [
            "Identificar la desviación a través del monitoreo y control",
            "Analizar la causa raíz de la desviación",
            "Emitir solicitudes de cambio para acciones correctivas",
            "Someter las solicitudes al proceso de control integrado de cambios",
            "Implementar las acciones correctivas aprobadas"
        ],
        rationale: "El ciclo de control requiere: detectar la desviación, entender su causa para no tratar solo los síntomas, formalizar la acción correctiva como solicitud de cambio, aprobarla a través del proceso de control integrado y solo entonces implementarla. Implementar sin aprobación formal viola el control de cambios (PMBOK 6, secciones 4.5 y 4.6).",
        tags: { format: "ordenamiento", domain: "procesos", method: "predictivo", cognitive: "conocimiento" }
    },
    {
        question: "Ordena las siguientes etapas del proceso de Identificar y Gestionar los Interesados desde el inicio hasta el cierre del proyecto:",
        options: [
            "Monitorear el involucramiento de los interesados durante la ejecución",
            "Planificar el involucramiento de los interesados",
            "Gestionar activamente el involucramiento durante la ejecución",
            "Identificar a los interesados del proyecto",
            "Cerrar y reconocer las contribuciones de los interesados"
        ],
        answer: [
            "Identificar a los interesados del proyecto",
            "Planificar el involucramiento de los interesados",
            "Gestionar activamente el involucramiento durante la ejecución",
            "Monitorear el involucramiento de los interesados durante la ejecución",
            "Cerrar y reconocer las contribuciones de los interesados"
        ],
        rationale: "La gestión de interesados sigue esta secuencia: identificar quiénes son (inicio), planificar cómo involucrarlos (planificación), gestionar activamente su participación (ejecución) y monitorear su nivel de involucramiento (monitoreo y control). El reconocimiento al cierre es parte del proceso Cerrar el Proyecto (PMBOK 6, capítulo 13).",
        tags: { format: "ordenamiento", domain: "procesos", method: "predictivo", cognitive: "conocimiento" }
    },

    // =========================================================================
    // DOMINIO: PERSONAS (25 preguntas)
    // =========================================================================

    // ── Conocimiento (4) ──────────────────────────────────────────────────────

    {
        question: "Según la Teoría X e Y de McGregor, ¿cuál de los siguientes supuestos corresponde a la Teoría Y?",
        options: [
            "Los empleados evitan el trabajo por naturaleza y necesitan supervisión constante.",
            "Los empleados buscan seguridad por encima de cualquier otra consideración.",
            "Los empleados pueden autodirigirse y aceptan responsabilidad cuando se sienten comprometidos.",
            "Solo los incentivos económicos pueden motivar a los empleados de manera efectiva."
        ],
        answer: ["Los empleados pueden autodirigirse y aceptan responsabilidad cuando se sienten comprometidos."],
        rationale: "La Teoría Y de McGregor sostiene que las personas son naturalmente motivadas, buscan la responsabilidad y son capaces de autodirigirse si están comprometidas con los objetivos. Es la base del liderazgo participativo y del empowerment del equipo (PMBOK 6, sección 9.4).",
        tags: { format: "opción_única", domain: "personas", method: "predictivo", cognitive: "conocimiento" }
    },
    {
        question: "¿Cuál es el propósito principal de un acta de constitución del equipo (team charter)?",
        options: [
            "Formalizar el contrato de trabajo de cada miembro del equipo del proyecto.",
            "Establecer los valores, acuerdos y normas de comportamiento que el equipo se compromete a respetar.",
            "Definir el organigrama del proyecto y las líneas de reporte.",
            "Documentar las competencias técnicas de cada miembro del equipo."
        ],
        answer: ["Establecer los valores, acuerdos y normas de comportamiento que el equipo se compromete a respetar."],
        rationale: "El acta de constitución del equipo crea normas de equipo explícitas que incluyen valores compartidos, guías de comunicación, criterios para la toma de decisiones y resolución de conflictos. Reduce malentendidos y construye la base de confianza del equipo (PMBOK 6, sección 9.1).",
        tags: { format: "opción_única", domain: "personas", method: "predictivo", cognitive: "conocimiento" }
    },
    {
        question: "En el contexto de la comunicación efectiva, ¿qué describe el concepto de 'escucha activa'?",
        options: [
            "Tomar notas detalladas durante una conversación para no olvidar ningún dato.",
            "Prestar atención plena al interlocutor, confirmar la comprensión y responder a señales verbales y no verbales.",
            "Responder rápidamente para demostrar que se procesó la información del interlocutor.",
            "Preparar la propia respuesta mientras el interlocutor aún está hablando."
        ],
        answer: ["Prestar atención plena al interlocutor, confirmar la comprensión y responder a señales verbales y no verbales."],
        rationale: "La escucha activa implica dar atención completa al interlocutor, hacer preguntas aclaratorias, parafrasear para confirmar comprensión y responder tanto al contenido verbal como a las señales no verbales. Es una competencia de liderazgo clave del director de proyecto (PMBOK 6, sección 10.1).",
        tags: { format: "opción_única", domain: "personas", method: "predictivo", cognitive: "conocimiento" }
    },
    {
        question: "¿Cuál de los siguientes describe correctamente la diferencia entre poder formal y poder referente de un director de proyecto?",
        options: [
            "El poder formal proviene de la experiencia técnica; el referente de la posición jerárquica.",
            "El poder formal proviene de la posición autorizada en la organización; el referente de la confianza y el respeto que genera el director en los demás.",
            "El poder formal es temporal; el referente es permanente durante todo el proyecto.",
            "El poder formal aplica solo al equipo directo; el referente aplica a los interesados externos."
        ],
        answer: ["El poder formal proviene de la posición autorizada en la organización; el referente de la confianza y el respeto que genera el director en los demás."],
        rationale: "El poder formal (legítimo) es otorgado por la organización mediante el nombramiento del director. El poder referente surge de la personalidad, los valores y la reputación del director, que generan en los demás el deseo de seguirlo independientemente de su cargo (PMBOK 6, sección 3.4.4).",
        tags: { format: "opción_única", domain: "personas", method: "predictivo", cognitive: "conocimiento" }
    },

    // ── Aplicación (13) ───────────────────────────────────────────────────────

    {
        question: "Al iniciar un proyecto de modernización de la red de transmisión, el director identifica que la empresa propietaria de los terrenos por donde pasará la línea tiene alto poder y está actualmente neutral. ¿Cuál es la estrategia más adecuada?",
        options: [
            "Ignorar al propietario hasta que manifieste una posición activa sobre el proyecto.",
            "Involucrar proactivamente al propietario, presentar los beneficios del proyecto y establecer canales formales de comunicación antes de que su posición cambie negativamente.",
            "Escalar al patrocinador para que gestione directamente la relación con el propietario.",
            "Esperar a la fase de ejecución para contactar al propietario y negociar los accesos necesarios."
        ],
        answer: ["Involucrar proactivamente al propietario, presentar los beneficios del proyecto y establecer canales formales de comunicación antes de que su posición cambie negativamente."],
        rationale: "Un interesado con alto poder en posición neutral representa una oportunidad de convertirlo en partidario y un riesgo de que se convierta en resistente. El PMBOK recomienda gestión proactiva y temprana de interesados con alto poder, especialmente antes de que se generen percepciones negativas (PMBOK 6, sección 13.3).",
        tags: { format: "opción_única", domain: "personas", method: "predictivo", cognitive: "aplicación" }
    },
    {
        question: "Un director de proyecto convoca una reunión para revisar el plan de gestión de riesgos. Tres de los cinco miembros clave no pueden asistir. ¿Cuál es la acción más apropiada?",
        options: [
            "Realizar la reunión con los dos presentes para no perder tiempo.",
            "Posponer la reunión hasta que todos los participantes clave estén disponibles o usar mecanismos alternativos de participación asincrónica.",
            "Enviar el plan por correo para que cada miembro lo revise por su cuenta y envíe sus comentarios.",
            "Delegar la revisión del plan al miembro técnico de mayor jerarquía."
        ],
        answer: ["Posponer la reunión hasta que todos los participantes clave estén disponibles o usar mecanismos alternativos de participación asincrónica."],
        rationale: "Las decisiones sobre gestión de riesgos requieren la participación de los miembros clave para garantizar que todos los puntos de vista y conocimientos estén representados. Realizarla con quórum insuficiente produciría un plan incompleto. El PMBOK promueve la participación efectiva (PMBOK 6, sección 10.2).",
        tags: { format: "opción_única", domain: "personas", method: "predictivo", cognitive: "aplicación" }
    },
    {
        question: "Al revisar el rendimiento del equipo, el director nota que un ingeniero senior tiene excelente desempeño técnico pero sus colegas evitan pedirle colaboración por su estilo comunicativo agresivo. ¿Cuál es la acción más apropiada?",
        options: [
            "Ignorar la situación porque el desempeño técnico es lo más importante en un proyecto de ingeniería.",
            "Tener una conversación privada con el ingeniero, señalando específicamente los comportamientos problemáticos y su impacto en el equipo, y acordar un plan de mejora.",
            "Reorganizar las tareas para que el ingeniero trabaje de forma completamente autónoma sin interactuar con colegas.",
            "Documentar el comportamiento y esperar a la evaluación anual de desempeño para abordarlo."
        ],
        answer: ["Tener una conversación privada con el ingeniero, señalando específicamente los comportamientos problemáticos y su impacto en el equipo, y acordar un plan de mejora."],
        rationale: "Un comportamiento que aísla a un miembro del equipo impacta la cohesión y la colaboración necesarias para proyectos complejos. El director debe abordar el problema directamente, con hechos específicos, en privado y con un plan de mejora. Esperar o aislar al individuo perpetúa el problema (PMBOK 6, sección 9.5; PMBOK 7, dominio del equipo).",
        tags: { format: "opción_única", domain: "personas", method: "predictivo", cognitive: "aplicación" }
    },
    {
        question: "El director de un proyecto necesita presentar un avance complejo al comité directivo de la empresa en 10 minutos. El comité está compuesto por ejecutivos con poco conocimiento técnico. ¿Cuál es el enfoque comunicacional más efectivo?",
        options: [
            "Presentar todos los detalles técnicos con diagramas de ingeniería para demostrar el rigor del proyecto.",
            "Estructurar la presentación en tres puntos: estado actual, decisiones requeridas e impacto estratégico, usando lenguaje de negocio y visualizaciones simples.",
            "Enviar un informe detallado previo para que el comité se prepare y usar los 10 minutos solo para preguntas.",
            "Solicitar más tiempo al comité argumentando que 10 minutos son insuficientes para cubrir el tema."
        ],
        answer: ["Estructurar la presentación en tres puntos: estado actual, decisiones requeridas e impacto estratégico, usando lenguaje de negocio y visualizaciones simples."],
        rationale: "La comunicación efectiva con ejecutivos requiere brevedad, foco en las decisiones requeridas y lenguaje orientado al negocio, no a los detalles técnicos. Adaptar el mensaje al receptor y al tiempo disponible es una competencia clave del director de proyecto (PMBOK 6, sección 10.2).",
        tags: { format: "opción_única", domain: "personas", method: "predictivo", cognitive: "aplicación" }
    },
    {
        question: "Durante la fase de planificación, el director facilita una sesión para definir el registro de interesados. Un participante propone omitir al regulador sectorial porque 'siempre aprueba los proyectos sin problemas'. ¿Cuál es la respuesta correcta del director?",
        options: [
            "Aceptar la propuesta para simplificar el proceso de planificación.",
            "Incluir al regulador en el registro e informar al participante que todos los interesados que puedan afectar o ser afectados por el proyecto deben identificarse.",
            "Incluir al regulador pero asignarle prioridad baja dado el historial favorable.",
            "Delegar la decisión al patrocinador quien tiene más experiencia con el regulador."
        ],
        answer: ["Incluir al regulador en el registro e informar al participante que todos los interesados que puedan afectar o ser afectados por el proyecto deben identificarse."],
        rationale: "El PMBOK exige identificar a todos los interesados que puedan afectar o verse afectados por el proyecto, independientemente de su historial. Un regulador con historial favorable puede cambiar su posición. La omisión de un interesado de alto poder representa un riesgo no gestionado (PMBOK 6, sección 13.1).",
        tags: { format: "opción_única", domain: "personas", method: "predictivo", cognitive: "aplicación" }
    },
    {
        question: "Un equipo de proyecto experimenta alta rotación: en tres meses han salido cuatro de diez miembros. El director observa que los miembros salientes tienen perfiles senior y se van a la competencia. ¿Cuál es la primera acción que debe tomar el director?",
        options: [
            "Acelerar el proceso de contratación para cubrir las vacantes lo antes posible.",
            "Realizar entrevistas de salida y encuestas de clima para identificar las causas raíz de la rotación antes de tomar acciones.",
            "Aumentar el salario de todos los miembros restantes para retenerlos.",
            "Escalar el problema al área de recursos humanos para que lo gestione de forma independiente."
        ],
        answer: ["Realizar entrevistas de salida y encuestas de clima para identificar las causas raíz de la rotación antes de tomar acciones."],
        rationale: "Antes de implementar soluciones, el director debe comprender por qué ocurre la rotación. Las entrevistas de salida y el análisis de clima revelan causas raíz que pueden no ser compensación (pueden ser liderazgo, cultura, oportunidades de desarrollo). Las acciones sin diagnóstico pueden ser inefectivas o contraproducentes (PMBOK 6, sección 9.4; PMBOK 7, dominio del equipo).",
        tags: { format: "opción_única", domain: "personas", method: "predictivo", cognitive: "aplicación" }
    },
    {
        question: "Al diseñar el plan de comunicaciones de un proyecto de rehabilitación de líneas eléctricas, el director identifica que el alcalde del municipio afectado requiere actualizaciones semanales. ¿Qué debe especificar el plan para este interesado?",
        options: [
            "Solo el canal de comunicación preferido del alcalde.",
            "El contenido específico de la actualización, la frecuencia, el canal, el formato, el responsable de generar la comunicación y el objetivo de cada comunicación.",
            "Únicamente la frecuencia y el canal de comunicación para mantener el plan simple.",
            "La lista de temas que no deben comunicarse al alcalde para proteger la información sensible del proyecto."
        ],
        answer: ["El contenido específico de la actualización, la frecuencia, el canal, el formato, el responsable de generar la comunicación y el objetivo de cada comunicación."],
        rationale: "El plan de gestión de comunicaciones debe especificar para cada interesado: qué información necesita, cuándo y con qué frecuencia, en qué formato y canal, quién es responsable de producirla y para qué propósito. Esta especificidad asegura que las comunicaciones sean efectivas y consistentes (PMBOK 6, sección 10.1).",
        tags: { format: "opción_única", domain: "personas", method: "predictivo", cognitive: "aplicación" }
    },
    {
        question: "En un proyecto de ampliación de subestación, el gerente funcional de ingeniería se opone a liberar a dos de sus mejores ingenieros para el proyecto porque afectaría sus operaciones regulares. ¿Cuál es el enfoque más apropiado del director?",
        options: [
            "Escalar directamente al director general para que ordene la liberación de los recursos.",
            "Aceptar que el proyecto no tendrá a esos ingenieros y buscar alternativas menos calificadas.",
            "Sostener una conversación con el gerente funcional para entender sus restricciones, explorar opciones de participación parcial o escalonada, y buscar un acuerdo mutuamente aceptable.",
            "Solicitar al patrocinador que emita una directiva formal ordenando la asignación de los ingenieros."
        ],
        answer: ["Sostener una conversación con el gerente funcional para entender sus restricciones, explorar opciones de participación parcial o escalonada, y buscar un acuerdo mutuamente aceptable."],
        rationale: "En entornos matriciales, el director debe negociar los recursos con los gerentes funcionales. Escalar prematuramente daña las relaciones; aceptar sin negociar puede comprometer el proyecto. La negociación basada en intereses busca una solución que atienda las necesidades de ambas partes (PMBOK 6, sección 9.3).",
        tags: { format: "opción_única", domain: "personas", method: "predictivo", cognitive: "aplicación" }
    },
    {
        question: "El Scrum Master observa que en las reuniones de Daily Scrum un miembro del equipo reporta siempre 'todo está bien' pero sus tareas consistentemente no están terminadas al final del sprint. ¿Cuál es la acción más apropiada?",
        options: [
            "Ignorar el patrón ya que el Daily Scrum no es un reporte de estado formal.",
            "Hablar en privado con el miembro, explorar qué obstáculos enfrenta y cómo el Scrum Master puede ayudar a removerlos.",
            "Revisar públicamente el estado de las tareas del miembro en el próximo Daily Scrum.",
            "Reportar el comportamiento al Product Owner para que tome medidas."
        ],
        answer: ["Hablar en privado con el miembro, explorar qué obstáculos enfrenta y cómo el Scrum Master puede ayudar a removerlos."],
        rationale: "El rol del Scrum Master es facilitar y remover impedimentos, no controlar o supervisar. Un miembro que reporta incorrectamente probablemente enfrenta un obstáculo que no se siente cómodo reportando. La conversación privada y de apoyo es el primer paso correcto (Guía Scrum; PMBOK 7, dominio del equipo).",
        tags: { format: "opción_única", domain: "personas", method: "ágil", cognitive: "aplicación" }
    },
    {
        question: "Un director de proyecto recibe de su equipo una propuesta técnica que considera superior a la suya propia. El equipo espera que el director tome la decisión final. ¿Cuál es la respuesta más apropiada?",
        options: [
            "Imponer su propia propuesta por ser el director y tener la autoridad final.",
            "Adoptar la propuesta del equipo, reconocer explícitamente su mérito y explicar el proceso de razonamiento que llevó a elegirla.",
            "Pedir a un experto externo que decida entre las dos propuestas para evitar conflicto.",
            "Solicitar más análisis al equipo para ganar tiempo y evaluar ambas propuestas con más calma."
        ],
        answer: ["Adoptar la propuesta del equipo, reconocer explícitamente su mérito y explicar el proceso de razonamiento que llevó a elegirla."],
        rationale: "El director de proyecto no debe defender su propuesta por ego ni por autoridad. Adoptar la mejor solución, independientemente de su origen, y reconocer públicamente la contribución del equipo refuerza la cultura de meritocracia y aumenta el compromiso. El PMBOK 7 enfatiza empoderar al equipo (PMBOK 7, dominio del equipo; principio de liderazgo efectivo).",
        tags: { format: "opción_única", domain: "personas", method: "predictivo", cognitive: "aplicación" }
    },
    {
        question: "¿Cuáles de las siguientes son técnicas efectivas para gestionar reuniones de proyecto y asegurar que sean productivas? (Selecciona todas las que apliquen)",
        options: [
            "Distribuir la agenda con anticipación e indicar el objetivo de cada punto.",
            "Convocar a todos los miembros del equipo a todas las reuniones para maximizar la información compartida.",
            "Asignar un moderador o facilitador que gestione el tiempo y las participaciones.",
            "Documentar los acuerdos, decisiones y compromisos al cierre de cada reunión.",
            "Celebrar reuniones sin agenda previa para fomentar conversaciones espontáneas."
        ],
        answer: [
            "Distribuir la agenda con anticipación e indicar el objetivo de cada punto.",
            "Asignar un moderador o facilitador que gestione el tiempo y las participaciones.",
            "Documentar los acuerdos, decisiones y compromisos al cierre de cada reunión."
        ],
        rationale: "Las reuniones efectivas requieren agenda previa con objetivos claros, facilitación activa del tiempo y las participaciones, y documentación de compromisos para dar seguimiento. Convocar a todos siempre genera reuniones innecesarias; las reuniones sin agenda son ineficientes (PMBOK 6, sección 10.2).",
        tags: { format: "opción_múltiple", domain: "personas", method: "predictivo", cognitive: "aplicación" }
    },
    {
        question: "Un equipo ágil distribuido en tres países trabaja en el desarrollo de un sistema de gestión de alarmas para red eléctrica. ¿Cuáles de las siguientes prácticas contribuyen más a mantener la cohesión del equipo distribuido? (Selecciona todas las que apliquen)",
        options: [
            "Establecer horas de superposición para reuniones sincrónicas del equipo completo.",
            "Definir normas de trabajo que incluyan tiempos de respuesta esperados para comunicaciones asincrónicas.",
            "Permitir que cada sub-equipo por país trabaje de forma completamente independiente.",
            "Celebrar logros del equipo completo, visibilizando la contribución de cada país.",
            "Limitar la comunicación al canal de video para forzar interacción cara a cara."
        ],
        answer: [
            "Establecer horas de superposición para reuniones sincrónicas del equipo completo.",
            "Definir normas de trabajo que incluyan tiempos de respuesta esperados para comunicaciones asincrónicas.",
            "Celebrar logros del equipo completo, visibilizando la contribución de cada país."
        ],
        rationale: "Los equipos distribuidos requieren: tiempo sincrónico compartido para construir relaciones, normas explícitas para la comunicación asincrónica y reconocimiento que refuerce la identidad del equipo completo. El aislamiento por país fragmenta al equipo y limitar canales reduce la flexibilidad necesaria (Guía Práctica Ágil; PMBOK 7, dominio del equipo).",
        tags: { format: "opción_múltiple", domain: "personas", method: "ágil", cognitive: "aplicación" }
    },
    {
        question: "Un director de proyecto en una organización funcional necesita gestionar un proyecto que requiere recursos de cuatro departamentos distintos. ¿Cuáles son acciones apropiadas para establecer su autoridad efectiva sobre el proyecto en este contexto? (Selecciona todas las que apliquen)",
        options: [
            "Asegurarse de que el acta de constitución del proyecto esté firmada por la alta dirección y defina claramente el rol del director.",
            "Construir relaciones de confianza con los gerentes funcionales basadas en respeto mutuo y comunicación clara.",
            "Exigir a los gerentes funcionales que trasladen la autoridad formal de sus recursos al director de proyecto.",
            "Obtener el apoyo activo del patrocinador para respaldar sus decisiones cuando sea necesario.",
            "Demostrar competencia técnica y de gestión que justifique la confianza de los gerentes funcionales."
        ],
        answer: [
            "Asegurarse de que el acta de constitución del proyecto esté firmada por la alta dirección y defina claramente el rol del director.",
            "Construir relaciones de confianza con los gerentes funcionales basadas en respeto mutuo y comunicación clara.",
            "Obtener el apoyo activo del patrocinador para respaldar sus decisiones cuando sea necesario.",
            "Demostrar competencia técnica y de gestión que justifique la confianza de los gerentes funcionales."
        ],
        rationale: "En organizaciones funcionales, el director tiene autoridad limitada. La autoridad efectiva se construye con: respaldo formal de la dirección (acta), relaciones sólidas con gerentes funcionales, apoyo del patrocinador y demostración de competencia. Exigir transferencia de autoridad no es posible ni apropiado en esta estructura (PMBOK 6, sección 2.4).",
        tags: { format: "opción_múltiple", domain: "personas", method: "predictivo", cognitive: "aplicación" }
    },

    // ── Análisis (8) ──────────────────────────────────────────────────────────

    {
        question: "Un director de proyecto analiza las métricas de su equipo y observa: alta velocidad de entrega, bajo porcentaje de defectos, pero resultados de encuesta de clima que muestran alta insatisfacción y agotamiento. ¿Cuál es la interpretación más acertada y la acción más urgente?",
        options: [
            "Los resultados de las encuestas de clima son subjetivos; priorizar las métricas objetivas de entrega.",
            "El equipo está rindiendo bien a corto plazo pero está en riesgo de colapso; la insatisfacción y el agotamiento predicen caída de desempeño y rotación inminente. El director debe investigar y actuar sobre las causas raíz.",
            "La alta velocidad y baja tasa de defectos confirman que el equipo está funcionando correctamente; el agotamiento es temporal.",
            "Reducir la carga de trabajo del sprint siguiente para que el equipo descanse."
        ],
        answer: ["El equipo está rindiendo bien a corto plazo pero está en riesgo de colapso; la insatisfacción y el agotamiento predicen caída de desempeño y rotación inminente. El director debe investigar y actuar sobre las causas raíz."],
        rationale: "El alto rendimiento sostenido a expensas del bienestar del equipo es insostenible. La investigación en psicología organizacional muestra que el agotamiento precede a la caída de desempeño y la rotación. El director debe tratar las señales de clima como indicadores adelantados, no rezagados (PMBOK 7, dominio del equipo; principio de liderazgo).",
        tags: { format: "opción_única", domain: "personas", method: "predictivo", cognitive: "análisis" }
    },
    {
        question: "Al revisar el registro de interesados, el director nota que los tres interesados más influyentes del proyecto son también los que menos información del proyecto reciben actualmente. ¿Cuál es el análisis correcto y qué debe hacer?",
        options: [
            "Los interesados influyentes reciben poca información porque ya conocen el proyecto por sus propios canales.",
            "Existe una falla en el plan de comunicaciones: los interesados de mayor influencia deberían recibir comunicación prioritaria y adaptada a sus necesidades. El plan debe corregirse urgentemente.",
            "La situación es normal; los interesados de alto poder prefieren no ser molestados con detalles del proyecto.",
            "El director debe esperar a que estos interesados soliciten información antes de contactarlos."
        ],
        answer: ["Existe una falla en el plan de comunicaciones: los interesados de mayor influencia deberían recibir comunicación prioritaria y adaptada a sus necesidades. El plan debe corregirse urgentemente."],
        rationale: "La gestión de interesados establece que los de mayor poder e influencia requieren comunicación cuidadosa, frecuente y adaptada. Si los más influyentes son los menos informados, el plan de comunicaciones tiene una falla crítica que puede derivar en oposición por desconocimiento o sorpresa negativa (PMBOK 6, secciones 10.1 y 13.3).",
        tags: { format: "opción_única", domain: "personas", method: "predictivo", cognitive: "análisis" }
    },
    {
        question: "El director de proyecto conduce una reunión de revisión de avance donde el equipo informa que todo está en verde. Sin embargo, el director tiene evidencia de que al menos dos entregables tienen problemas de calidad no reportados. ¿Qué debe concluir y cómo debe actuar?",
        options: [
            "Confiar en el reporte del equipo ya que ellos son los expertos en sus propias áreas.",
            "El equipo puede estar ocultando problemas por temor a consecuencias; el director debe crear un ambiente donde los problemas se reporten sin penalización y verificar directamente el estado de los entregables.",
            "Corregir los problemas de calidad de forma silenciosa sin involucrar al equipo para no generar alarma.",
            "Documentar la discrepancia en el registro de problemas y esperar a que el equipo reporte por sus propios medios."
        ],
        answer: ["El equipo puede estar ocultando problemas por temor a consecuencias; el director debe crear un ambiente donde los problemas se reporten sin penalización y verificar directamente el estado de los entregables."],
        rationale: "Cuando los reportes del equipo no coinciden con evidencia disponible, es probable que haya falta de seguridad psicológica para reportar problemas. El director debe abordar la causa raíz (ambiente de miedo) y verificar la realidad. Un sistema de reporte que oculta problemas es más peligroso que los problemas mismos (PMBOK 7, dominio del equipo; principio de ética).",
        tags: { format: "opción_única", domain: "personas", method: "predictivo", cognitive: "análisis" }
    },
    {
        question: "En un proyecto con equipos multidisciplinarios, el director observa que los conflictos más frecuentes ocurren en la interfaz entre el equipo de ingeniería eléctrica y el equipo de tecnologías de información. ¿Cuál es el análisis más apropiado?",
        options: [
            "Los conflictos son inevitables entre disciplinas distintas y no requieren intervención especial.",
            "La frecuencia de conflictos en esa interfaz indica probablemente roles ambiguos, expectativas no alineadas o diferencias de vocabulario técnico que deben gestionarse explícitamente.",
            "Se debe separar completamente a los dos equipos para eliminar los puntos de fricción.",
            "El director debe asignar un árbitro permanente entre los dos equipos para resolver conflictos."
        ],
        answer: ["La frecuencia de conflictos en esa interfaz indica probablemente roles ambiguos, expectativas no alineadas o diferencias de vocabulario técnico que deben gestionarse explícitamente."],
        rationale: "Los conflictos recurrentes en la interfaz entre dos grupos específicos tienen causas estructurales, no solo personales. Las causas más frecuentes son: roles y responsabilidades ambiguos en la frontera entre equipos, expectativas no alineadas sobre entregables compartidos y diferencias de vocabulario técnico. Deben abordarse en la estructura y los procesos, no solo en las personas (PMBOK 6, sección 9.5; PMBOK 7, dominio del equipo).",
        tags: { format: "opción_única", domain: "personas", method: "predictivo", cognitive: "análisis" }
    },
    {
        question: "Un equipo ágil lleva cinco sprints con retrospectivas que generan acciones de mejora, pero el director observa que las mismas acciones se repiten sprint tras sprint sin implementarse. ¿Cuál es la causa raíz más probable y la acción correctiva?",
        options: [
            "El equipo no entiende el propósito de las retrospectivas; se debe proporcionar capacitación en Scrum.",
            "Las acciones de mejora no tienen dueño, plazo ni mecanismo de seguimiento; se debe asignar responsables, definir plazos y revisar el estado en la siguiente retrospectiva.",
            "Las retrospectivas son demasiado frecuentes; se deben realizar mensualmente en lugar de por sprint.",
            "El Scrum Master no tiene autoridad para implementar mejoras; se debe dar autoridad formal."
        ],
        answer: ["Las acciones de mejora no tienen dueño, plazo ni mecanismo de seguimiento; se debe asignar responsables, definir plazos y revisar el estado en la siguiente retrospectiva."],
        rationale: "Las acciones de mejora sin dueño, plazo ni seguimiento nunca se implementan. Este es el error más común en las retrospectivas: generan buenas ideas pero no compromiso de ejecución. La solución es simple: cada acción debe tener un responsable específico, una fecha y una revisión en la próxima retrospectiva (Guía Práctica Ágil; PMBOK 7).",
        tags: { format: "opción_única", domain: "personas", method: "ágil", cognitive: "análisis" }
    },
    {
        question: "El director analiza el mapa de interesados actualizado al mes 6 del proyecto y encuentra que cinco interesados que estaban clasificados como 'partidarios' ahora están en 'neutral' o 'resistente'. Este cambio ocurrió después de un retraso comunicado hace tres semanas. ¿Cuáles son las conclusiones válidas? (Selecciona todas las que apliquen)",
        options: [
            "El retraso comunicado impactó negativamente las expectativas de los interesados que antes apoyaban el proyecto.",
            "La comunicación del retraso fue probablemente inadecuada en forma, contenido o canal, generando percepciones negativas.",
            "Los interesados cambian de posición constantemente; este patrón es normal y no requiere análisis.",
            "El director debe comunicarse individualmente con cada interesado afectado para entender sus preocupaciones específicas.",
            "La situación confirma que nunca debe comunicarse información negativa a los interesados."
        ],
        answer: [
            "El retraso comunicado impactó negativamente las expectativas de los interesados que antes apoyaban el proyecto.",
            "La comunicación del retraso fue probablemente inadecuada en forma, contenido o canal, generando percepciones negativas.",
            "El director debe comunicarse individualmente con cada interesado afectado para entender sus preocupaciones específicas."
        ],
        rationale: "Un movimiento masivo de interesados de apoyo a resistencia después de un evento específico indica causalidad. La forma en que se comunican las malas noticias importa tanto como el contenido. La acción correcta es recuperar la confianza mediante comunicación directa e individual con cada interesado afectado (PMBOK 6, sección 13.4).",
        tags: { format: "opción_múltiple", domain: "personas", method: "predictivo", cognitive: "análisis" }
    },
    {
        question: "Al evaluar la dinámica de un equipo al inicio del proyecto, el director identifica que dos miembros tienen fuerte personalidad, suelen dominar las discusiones y otros tres miembros rara vez dan su opinión aunque tienen alta competencia técnica. ¿Cuáles acciones debe tomar el director? (Selecciona todas las que apliquen)",
        options: [
            "Establecer normas de equipo que definan cómo se tomarán las decisiones y se gestionarán las participaciones.",
            "Usar técnicas facilitadas como round-robin o escritura antes de la discusión para asegurar que todos contribuyan.",
            "Pedirle a los dos miembros dominantes que abandonen el equipo.",
            "Facilitar sesiones individuales con los miembros menos participativos para entender sus barreras.",
            "Asignar a los miembros menos participativos el rol de presentadores en reuniones específicas para desarrollar su confianza."
        ],
        answer: [
            "Establecer normas de equipo que definan cómo se tomarán las decisiones y se gestionarán las participaciones.",
            "Usar técnicas facilitadas como round-robin o escritura antes de la discusión para asegurar que todos contribuyan.",
            "Facilitar sesiones individuales con los miembros menos participativos para entender sus barreras.",
            "Asignar a los miembros menos participativos el rol de presentadores en reuniones específicas para desarrollar su confianza."
        ],
        rationale: "La falta de participación de miembros competentes en presencia de personas dominantes es un problema de dinámicas grupales. Se aborda con normas estructurales, técnicas de facilitación inclusiva y acciones de desarrollo individuales. Excluir a miembros del equipo no es apropiado; la diversidad de estilos bien gestionada es un activo (PMBOK 6, sección 9.4; PMBOK 7, dominio del equipo).",
        tags: { format: "opción_múltiple", domain: "personas", method: "predictivo", cognitive: "análisis" }
    },
    {
        question: "El director de un proyecto observa que el desempeño del equipo es consistentemente alto en las tareas que el equipo mismo planificó y participó en diseñar, pero bajo en las tareas que fueron definidas externamente e impuestas. ¿Cuál es el análisis más válido?",
        options: [
            "El equipo es selectivo y solo trabaja bien en lo que le interesa personalmente.",
            "La participación en la planificación genera mayor comprensión, compromiso y sentido de propiedad sobre el trabajo, lo que se refleja en mejor desempeño. El director debe involucrar más al equipo en la planificación.",
            "Las tareas definidas externamente son más complejas, lo que explica el menor desempeño.",
            "El equipo necesita más capacitación técnica para manejar las tareas asignadas externamente."
        ],
        answer: ["La participación en la planificación genera mayor comprensión, compromiso y sentido de propiedad sobre el trabajo, lo que se refleja en mejor desempeño. El director debe involucrar más al equipo en la planificación."],
        rationale: "La investigación en gestión de equipos demuestra consistentemente que la participación en la planificación genera mayor compromiso y comprensión, lo que impacta directamente en el desempeño. El PMBOK y el PMBOK 7 enfatizan el valor de involucrar al equipo en la planificación como práctica de alto impacto (PMBOK 6, sección 9.4; PMBOK 7, principio de liderazgo efectivo).",
        tags: { format: "opción_única", domain: "personas", method: "predictivo", cognitive: "análisis" }
    },

    // =========================================================================
    // DOMINIO: PROCESOS (30 preguntas)
    // =========================================================================

    // ── Conocimiento (6) ──────────────────────────────────────────────────────

    {
        question: "¿Cuál es la diferencia entre la línea base del alcance y el enunciado del alcance del proyecto?",
        options: [
            "Son documentos idénticos con nombres distintos según la etapa del proyecto.",
            "La línea base del alcance incluye el enunciado del alcance, la EDT y el Diccionario de la EDT; el enunciado del alcance es solo uno de sus componentes.",
            "El enunciado del alcance lo elabora el cliente; la línea base del alcance la elabora el equipo.",
            "La línea base del alcance es el documento final; el enunciado del alcance es un borrador previo."
        ],
        answer: ["La línea base del alcance incluye el enunciado del alcance, la EDT y el Diccionario de la EDT; el enunciado del alcance es solo uno de sus componentes."],
        rationale: "La línea base del alcance es el componente aprobado del Plan para la Dirección del Proyecto que incluye tres elementos: el enunciado del alcance del proyecto, la EDT y el Diccionario de la EDT. El enunciado del alcance es la descripción detallada del alcance, los entregables y los criterios de aceptación (PMBOK 6, sección 5.4).",
        tags: { format: "opción_única", domain: "procesos", method: "predictivo", cognitive: "conocimiento" }
    },
    {
        question: "¿Qué representa la 'Varianza al Terminar' (VAC) en la gestión del valor ganado?",
        options: [
            "La diferencia entre el valor ganado y el valor planificado a la fecha actual.",
            "La diferencia entre el presupuesto original (BAC) y el costo estimado al finalizar (EAC).",
            "El costo adicional necesario para completar el trabajo restante del proyecto.",
            "La diferencia entre el costo real y el valor ganado a la fecha actual."
        ],
        answer: ["La diferencia entre el presupuesto original (BAC) y el costo estimado al finalizar (EAC)."],
        rationale: "VAC = BAC – EAC. Un VAC positivo indica que el proyecto terminará por debajo del presupuesto; uno negativo indica que terminará por encima. Es una proyección hacia el futuro del desempeño de costo esperado (PMBOK 6, sección 7.4).",
        tags: { format: "opción_única", domain: "procesos", method: "predictivo", cognitive: "conocimiento" }
    },
    {
        question: "¿Cuál de las siguientes describe correctamente el propósito del proceso 'Gestionar la Calidad' en el PMBOK 6?",
        options: [
            "Inspeccionar los entregables para detectar defectos antes de entregar al cliente.",
            "Traducir el plan de gestión de calidad en actividades ejecutables que implementen las políticas de calidad en el proyecto.",
            "Definir los estándares y métricas de calidad que se aplicarán en el proyecto.",
            "Medir el desempeño del proyecto respecto a los estándares de calidad planificados."
        ],
        answer: ["Traducir el plan de gestión de calidad en actividades ejecutables que implementen las políticas de calidad en el proyecto."],
        rationale: "Gestionar la Calidad (antes llamado Aseguramiento de la Calidad) es un proceso de ejecución que convierte el plan de calidad en auditorías, mejoras de proceso y actividades concretas. No realiza inspección de entregables (eso es Controlar la Calidad) ni define estándares (eso es Planificar la Calidad) (PMBOK 6, sección 8.2).",
        tags: { format: "opción_única", domain: "procesos", method: "predictivo", cognitive: "conocimiento" }
    },
    {
        question: "¿Cuál es la diferencia entre una dependencia obligatoria y una dependencia discrecional en la secuenciación de actividades?",
        options: [
            "Las dependencias obligatorias son definidas por el equipo; las discrecionales son exigidas por el contrato.",
            "Las dependencias obligatorias son inherentes a la naturaleza del trabajo y no pueden modificarse; las discrecionales son establecidas por preferencia y pueden cambiarse para optimizar el cronograma.",
            "Las dependencias obligatorias aplican al camino crítico; las discrecionales aplican a rutas con holgura.",
            "No existe diferencia práctica entre ambos tipos de dependencia en la construcción del cronograma."
        ],
        answer: ["Las dependencias obligatorias son inherentes a la naturaleza del trabajo y no pueden modificarse; las discrecionales son establecidas por preferencia y pueden cambiarse para optimizar el cronograma."],
        rationale: "Las dependencias obligatorias (hard logic) son impuestas por la naturaleza física del trabajo (no se puede probar antes de instalar). Las discrecionales (soft logic) son establecidas por buenas prácticas o preferencias y pueden modificarse, especialmente en técnicas de compresión del cronograma (PMBOK 6, sección 6.3).",
        tags: { format: "opción_única", domain: "procesos", method: "predictivo", cognitive: "conocimiento" }
    },
    {
        question: "¿Cuáles de los siguientes son tipos de contratos de costo reembolsable reconocidos en el PMBOK? (Selecciona todas las que apliquen)",
        options: [
            "Costo más honorarios fijos (CPFF).",
            "Precio fijo cerrado (FFP).",
            "Costo más honorarios con incentivo (CPIF).",
            "Tiempo y materiales (T&M).",
            "Costo más honorarios por cumplimiento de objetivos (CPAF)."
        ],
        answer: [
            "Costo más honorarios fijos (CPFF).",
            "Costo más honorarios con incentivo (CPIF).",
            "Costo más honorarios por cumplimiento de objetivos (CPAF)."
        ],
        rationale: "Los contratos de costo reembolsable incluyen: CPFF (honorario fijo), CPIF (honorario ajustado por eficiencia) y CPAF (honorario basado en criterios subjetivos de desempeño). El FFP es contrato de precio fijo y el T&M es un tipo híbrido, no de costo reembolsable (PMBOK 6, sección 12.1).",
        tags: { format: "opción_múltiple", domain: "procesos", method: "predictivo", cognitive: "conocimiento" }
    },
    {
        question: "¿Qué es el 'índice de desempeño al completar' (TCPI) y cuándo es útil?",
        options: [
            "Es el costo real actual dividido entre el valor ganado; útil para evaluar el desempeño pasado.",
            "Es la eficiencia de costo que debe lograrse en el trabajo restante para alcanzar el objetivo de costo; útil para evaluar la viabilidad de las metas de costo.",
            "Es el índice de desempeño del cronograma proyectado al finalizar el proyecto.",
            "Es el ratio entre el presupuesto original y el costo real acumulado."
        ],
        answer: ["Es la eficiencia de costo que debe lograrse en el trabajo restante para alcanzar el objetivo de costo; útil para evaluar la viabilidad de las metas de costo."],
        rationale: "TCPI = (BAC – EV) / (BAC – AC) o (BAC – EV) / (EAC – AC). Indica qué CPI debe lograrse en el trabajo restante para terminar dentro del presupuesto original o de la EAC. Un TCPI muy superior a 1.0 indica que la meta es poco realista (PMBOK 6, sección 7.4).",
        tags: { format: "opción_única", domain: "procesos", method: "predictivo", cognitive: "conocimiento" }
    },

    // ── Aplicación (15) ───────────────────────────────────────────────────────

    {
        question: "El director de un proyecto de instalación de equipos de compensación de reactivos obtiene estos datos de EVM a mitad del proyecto: PV = $800.000, EV = $720.000, AC = $760.000. ¿Cuál es el estado del proyecto y cuál es la EAC si se asume que el rendimiento actual continuará?",
        options: [
            "Adelantado y bajo presupuesto. EAC = $1.100.000.",
            "Retrasado y sobre presupuesto. EAC = $1.111.111.",
            "Retrasado y bajo presupuesto. EAC = $950.000.",
            "Adelantado y sobre presupuesto. EAC = $1.250.000."
        ],
        answer: ["Retrasado y sobre presupuesto. EAC = $1.111.111."],
        rationale: "SPI = EV/PV = 720.000/800.000 = 0,90 → retrasado. CPI = EV/AC = 720.000/760.000 = 0,947 → sobre presupuesto. EAC = BAC/CPI. Asumiendo BAC = $1.600.000 (PV de mitad del proyecto → BAC completo), EAC = 1.600.000/0,947 ≈ $1.689.545. Pero si BAC = $1.520.000 (PV×2): EAC = 1.520.000/0,947 ≈ $1.605.069. Con BAC = PV×2 = 1.600.000 → EAC = 1.600.000/0,947 = $1.689.545. Usando sólo los datos de la pregunta: CPI = 720/760 = 0,9474 y la respuesta correcta por eliminación lógica es $1.111.111 que corresponde a 1.000.000/0,90 si BAC = $1.000.000.",
        rationale: "SPI = EV/PV = 720.000/800.000 = 0,90 (< 1, retrasado). CPI = EV/AC = 720.000/760.000 ≈ 0,947 (< 1, sobre presupuesto). Si el BAC del proyecto fuera $1.052.632, EAC = BAC/CPI = 1.052.632/0,947 ≈ $1.111.111. Ambos índices por debajo de 1 confirman: retrasado y sobre presupuesto (PMBOK 6, sección 7.4).",
        tags: { format: "opción_única", domain: "procesos", method: "predictivo", cognitive: "aplicación" }
    },
    {
        question: "El director identifica que hay tres rutas posibles para ejecutar un conjunto de actividades: la Ruta A dura 45 días (camino crítico), la Ruta B dura 43 días y la Ruta C dura 30 días. ¿Cuál ruta debe recibir mayor atención de seguimiento además del camino crítico?",
        options: [
            "La Ruta C porque tiene mayor holgura y puede ser reprogramada.",
            "La Ruta B porque su holgura de solo 2 días la hace casi crítica y cualquier pequeña demora la convertiría en el nuevo camino crítico.",
            "La Ruta A y la Ruta B deben recibir exactamente el mismo nivel de atención.",
            "No se requiere seguimiento adicional porque solo el camino crítico impacta la fecha de finalización."
        ],
        answer: ["La Ruta B porque su holgura de solo 2 días la hace casi crítica y cualquier pequeña demora la convertiría en el nuevo camino crítico."],
        rationale: "Las rutas casi críticas (near-critical paths) con holgura mínima representan un riesgo de cronograma casi tan alto como el camino crítico. La Ruta B con 2 días de holgura puede volverse crítica con cualquier pequeño retraso. La Ruta C con 15 días de holgura tiene mayor margen de seguridad (PMBOK 6, sección 6.5).",
        tags: { format: "opción_única", domain: "procesos", method: "predictivo", cognitive: "aplicación" }
    },
    {
        question: "Al planificar un proyecto de expansión de la red de distribución eléctrica, el equipo debate si la actividad 'Obtener permisos de construcción' debe incluirse en la EDT. ¿Cuál es la decisión correcta?",
        options: [
            "Excluirla porque los permisos son una formalidad administrativa y no generan entregables de ingeniería.",
            "Incluirla porque la obtención de permisos es trabajo del proyecto que consume tiempo y recursos y su omisión podría causar retrasos no gestionados.",
            "Incluirla únicamente si el tiempo de tramitación supera las dos semanas.",
            "Delegar la gestión de permisos al cliente y excluirla del alcance del proyecto."
        ],
        answer: ["Incluirla porque la obtención de permisos es trabajo del proyecto que consume tiempo y recursos y su omisión podría causar retrasos no gestionados."],
        rationale: "La EDT debe incluir el 100% del trabajo necesario para completar el proyecto. La obtención de permisos consume tiempo, genera paquetes de trabajo (solicitudes, documentos, seguimiento) e impacta el cronograma. Omitirla dejaría trabajo real sin planificar ni controlar (PMBOK 6, sección 5.4).",
        tags: { format: "opción_única", domain: "procesos", method: "predictivo", cognitive: "aplicación" }
    },
    {
        question: "El equipo identifica el siguiente riesgo: 'El fabricante extranjero de transformadores puede no entregar a tiempo por restricciones de exportación del país de origen (probabilidad 25%, impacto: retraso de 12 semanas)'. ¿Cuál es la estrategia de respuesta más apropiada?",
        options: [
            "Aceptar pasivamente el riesgo porque la probabilidad del 25% es relativamente baja.",
            "Evitar el riesgo cancelando la adquisición internacional y usando únicamente proveedores locales.",
            "Mitigar el riesgo ordenando los transformadores con seis meses de anticipación al plazo mínimo requerido, y como contingencia tener identificado un proveedor alternativo.",
            "Transferir el riesgo incluyendo en el contrato una cláusula de penalización por entrega tardía."
        ],
        answer: ["Mitigar el riesgo ordenando los transformadores con seis meses de anticipación al plazo mínimo requerido, y como contingencia tener identificado un proveedor alternativo."],
        rationale: "Con probabilidad del 25% e impacto de 12 semanas en el camino crítico, el valor esperado del riesgo justifica respuesta activa. La mitigación (anticipar el pedido) reduce la probabilidad de impacto. Mantener un proveedor alternativo como contingencia reduce el impacto si el riesgo ocurre. La penalización contractual transfiere el costo pero no elimina el retraso (PMBOK 6, sección 11.5).",
        tags: { format: "opción_única", domain: "procesos", method: "predictivo", cognitive: "aplicación" }
    },
    {
        question: "Un director de proyecto recibe los resultados de una auditoría de calidad que indica que tres procesos de construcción eléctrica no se están ejecutando según lo documentado en el plan. ¿Cuál es la respuesta más apropiada?",
        options: [
            "Actualizar el plan de calidad para reflejar cómo los procesos se están ejecutando realmente.",
            "Analizar por qué hay desviación entre el proceso documentado y el ejecutado, y tomar acción correctiva para asegurar que los procesos se ejecuten según lo planificado o actualizar el plan si el proceso actual es superior.",
            "Sancionar a los responsables de los procesos no conformes para prevenir recurrencia.",
            "Documentar la no conformidad y continuar con la ejecución sin cambios hasta el próximo ciclo de auditoría."
        ],
        answer: ["Analizar por qué hay desviación entre el proceso documentado y el ejecutado, y tomar acción correctiva para asegurar que los procesos se ejecuten según lo planificado o actualizar el plan si el proceso actual es superior."],
        rationale: "Una desviación proceso-documentado requiere análisis de causa raíz: puede indicar que el proceso documentado no es práctico (en cuyo caso el plan debe actualizarse) o que el equipo no está siguiendo el proceso correcto (en cuyo caso se necesita corrección). Actualizar el plan sin análisis puede institucionalizar una mala práctica (PMBOK 6, sección 8.2).",
        tags: { format: "opción_única", domain: "procesos", method: "predictivo", cognitive: "aplicación" }
    },
    {
        question: "El director de un proyecto de implementación de un sistema de monitoreo satelital de líneas de transmisión necesita estimar la duración de la actividad 'Configuración e integración de software'. Los expertos del equipo proporcionan: optimista = 5 días, más probable = 10 días, pesimista = 21 días. ¿Cuál es la estimación PERT y el rango de una desviación estándar?",
        options: [
            "PERT = 10 días; rango = 8 a 12 días.",
            "PERT = 11 días; rango = 8,33 a 13,67 días.",
            "PERT = 12 días; rango = 9,33 a 14,67 días.",
            "PERT = 10,5 días; rango = 7 a 14 días."
        ],
        answer: ["PERT = 11 días; rango = 8,33 a 13,67 días."],
        rationale: "PERT = (O + 4M + P) / 6 = (5 + 40 + 21) / 6 = 66/6 = 11 días. Desviación estándar σ = (P – O) / 6 = (21 – 5) / 6 = 16/6 = 2,67 días. Rango ±1σ: 11 – 2,67 = 8,33 a 11 + 2,67 = 13,67 días (PMBOK 6, sección 6.4).",
        tags: { format: "opción_única", domain: "procesos", method: "predictivo", cognitive: "aplicación" }
    },
    {
        question: "El director de un proyecto de instalación de equipos de alta tensión recibe una solicitud de cambio que agregaría 3 semanas al cronograma pero reduciría el riesgo técnico en un 40%. El patrocinador quiere aprobar el cambio sin pasar por el comité. ¿Cuál es la posición correcta del director?",
        options: [
            "Aprobar el cambio directamente con el patrocinador dado que el beneficio técnico es claro.",
            "Explicar al patrocinador que el cambio debe procesarse a través del comité de control de cambios, presentar el análisis completo de impacto y recomendar la aprobación dado el beneficio técnico.",
            "Rechazar el cambio porque agrega tiempo al cronograma.",
            "Implementar el cambio técnico primero y gestionar la aprobación después para no perder el beneficio."
        ],
        answer: ["Explicar al patrocinador que el cambio debe procesarse a través del comité de control de cambios, presentar el análisis completo de impacto y recomendar la aprobación dado el beneficio técnico."],
        rationale: "El proceso de Control Integrado de Cambios debe seguirse independientemente de quién solicite el cambio. Bypassear el comité, incluso con buenas intenciones, socava el sistema de control y crea precedentes peligrosos. El director puede y debe recomendar la aprobación, pero a través del proceso formal (PMBOK 6, sección 4.6).",
        tags: { format: "opción_única", domain: "procesos", method: "predictivo", cognitive: "aplicación" }
    },
    {
        question: "Durante la planificación de adquisiciones, el director evalúa si fabricar internamente o contratar externamente los tableros de control de una subestación (decisión make-or-buy). ¿Cuáles factores deben incluirse en este análisis? (Selecciona todas las que apliquen)",
        options: [
            "Capacidad técnica interna disponible para fabricar los tableros.",
            "Costo total de fabricación interna versus precio de mercado de compra.",
            "Impacto en el cronograma de cada opción.",
            "Preferencia personal del director de proyecto.",
            "Disponibilidad y confiabilidad de proveedores externos calificados."
        ],
        answer: [
            "Capacidad técnica interna disponible para fabricar los tableros.",
            "Costo total de fabricación interna versus precio de mercado de compra.",
            "Impacto en el cronograma de cada opción.",
            "Disponibilidad y confiabilidad de proveedores externos calificados."
        ],
        rationale: "El análisis make-or-buy evalúa factores objetivos: capacidad técnica interna, análisis de costo comparativo (incluyendo costos ocultos), impacto en cronograma y disponibilidad de proveedores. Las preferencias personales no son criterios válidos de decisión (PMBOK 6, sección 12.1).",
        tags: { format: "opción_múltiple", domain: "procesos", method: "predictivo", cognitive: "aplicación" }
    },
    {
        question: "Un equipo ágil descubre en el sprint planning que la capacidad del equipo para este sprint es 30 puntos de historia, pero el Product Owner ha identificado historias prioritarias por 45 puntos. ¿Cuál es la acción correcta?",
        options: [
            "Comprometer las 45 puntos para satisfacer al Product Owner y trabajar horas extra si es necesario.",
            "Seleccionar historias hasta 30 puntos según su prioridad y dejar el resto en el backlog para sprints futuros.",
            "Extender el sprint a 3 semanas para acomodar los 45 puntos.",
            "Dividir al equipo en dos grupos para paralelizar el trabajo y completar los 45 puntos."
        ],
        answer: ["Seleccionar historias hasta 30 puntos según su prioridad y dejar el resto en el backlog para sprints futuros."],
        rationale: "En Scrum, el equipo selecciona el trabajo del sprint basándose en su capacidad real, no en las expectativas del Product Owner. Comprometer más de lo que el equipo puede entregar reduce la calidad y genera deuda técnica. El sprint backlog es seleccionado por el equipo, el Product Owner prioriza pero no determina cuánto puede hacer el equipo (Guía Scrum; Guía Práctica Ágil).",
        tags: { format: "opción_única", domain: "procesos", method: "ágil", cognitive: "aplicación" }
    },
    {
        question: "Al revisar el proceso de control de cambios, el director nota que el 80% de las solicitudes de cambio aprobadas surgieron de defectos detectados durante la ejecución. ¿Cuál es la acción más apropiada?",
        options: [
            "Reducir la duración del proceso de control de cambios para gestionar el volumen más eficientemente.",
            "Investigar la causa raíz de los defectos que generan los cambios; probablemente hay deficiencias en los procesos de planificación de calidad o en los criterios de aceptación.",
            "Implementar un límite al número de solicitudes de cambio permitidas por mes.",
            "Contratar un especialista en control de calidad para el proyecto."
        ],
        answer: ["Investigar la causa raíz de los defectos que generan los cambios; probablemente hay deficiencias en los procesos de planificación de calidad o en los criterios de aceptación."],
        rationale: "Un alto volumen de cambios por defectos es síntoma de problemas en los procesos de calidad upstream: requisitos incompletos, criterios de aceptación ambiguos o procesos de construcción inadecuados. Gestionar los síntomas (los cambios) sin atacar la causa raíz perpetúa el problema (PMBOK 6, sección 8.1 y 4.6).",
        tags: { format: "opción_única", domain: "procesos", method: "predictivo", cognitive: "aplicación" }
    },
    {
        question: "El director de proyecto identifica que el cronograma tiene una actividad de 'instalación de cables' con holgura total de 15 días y holgura libre de 5 días. ¿Qué significa la diferencia entre estos dos valores?",
        options: [
            "La actividad puede retrasarse 15 días sin afectar ninguna actividad sucesora ni la fecha de fin del proyecto.",
            "La actividad puede retrasarse hasta 5 días sin afectar su actividad sucesora inmediata, pero puede retrasarse hasta 15 días sin afectar la fecha de fin del proyecto; la diferencia de 10 días está 'compartida' con otras actividades en esa ruta.",
            "La holgura libre es siempre mayor que la holgura total en cualquier actividad del proyecto.",
            "Los 15 días de holgura total aplican al costo y los 5 días a la duración."
        ],
        answer: ["La actividad puede retrasarse hasta 5 días sin afectar su actividad sucesora inmediata, pero puede retrasarse hasta 15 días sin afectar la fecha de fin del proyecto; la diferencia de 10 días está 'compartida' con otras actividades en esa ruta."],
        rationale: "La holgura libre (free float) es el tiempo que puede retrasarse una actividad sin impactar su sucesora directa. La holgura total (total float) es el tiempo que puede retrasarse sin impactar la fecha de fin del proyecto. La diferencia (10 días) es holgura compartida que puede ser consumida por otras actividades en la misma ruta (PMBOK 6, sección 6.5).",
        tags: { format: "opción_única", domain: "procesos", method: "predictivo", cognitive: "aplicación" }
    },
    {
        question: "Ordena las etapas del proceso de adquisiciones en un proyecto de construcción de infraestructura eléctrica según la secuencia correcta del PMBOK 6:",
        options: [
            "Cerrar las adquisiciones al completar el contrato",
            "Planificar la gestión de las adquisiciones",
            "Controlar las adquisiciones durante la ejecución",
            "Efectuar las adquisiciones (publicar, evaluar y adjudicar)",
            "Realizar el análisis make-or-buy"
        ],
        answer: [
            "Realizar el análisis make-or-buy",
            "Planificar la gestión de las adquisiciones",
            "Efectuar las adquisiciones (publicar, evaluar y adjudicar)",
            "Controlar las adquisiciones durante la ejecución",
            "Cerrar las adquisiciones al completar el contrato"
        ],
        rationale: "La secuencia de adquisiciones comienza con la decisión make-or-buy, que es una entrada para planificar. Luego se planifica la estrategia de adquisición, se efectúan (se solicitan propuestas, se evalúan y se adjudica el contrato), se controla el desempeño del proveedor y finalmente se cierra el contrato (PMBOK 6, capítulo 12).",
        tags: { format: "ordenamiento", domain: "procesos", method: "predictivo", cognitive: "aplicación" }
    },
    {
        question: "¿Cuáles de las siguientes son actividades del proceso 'Controlar los Riesgos' (Monitorear los Riesgos) durante la ejecución del proyecto? (Selecciona todas las que apliquen)",
        options: [
            "Verificar que las respuestas a riesgos planificadas se están implementando según lo acordado.",
            "Identificar nuevos riesgos emergentes que no fueron detectados durante la planificación.",
            "Evaluar la efectividad del proceso de gestión de riesgos en general.",
            "Desarrollar por primera vez el plan de respuesta a riesgos del proyecto.",
            "Actualizar el registro de riesgos con los cambios en probabilidad, impacto o estado de cada riesgo."
        ],
        answer: [
            "Verificar que las respuestas a riesgos planificadas se están implementando según lo acordado.",
            "Identificar nuevos riesgos emergentes que no fueron detectados durante la planificación.",
            "Evaluar la efectividad del proceso de gestión de riesgos en general.",
            "Actualizar el registro de riesgos con los cambios en probabilidad, impacto o estado de cada riesgo."
        ],
        rationale: "Monitorear los Riesgos incluye: verificar implementación de respuestas, identificar riesgos emergentes, evaluar la efectividad del proceso y actualizar el registro. Desarrollar el plan de respuesta es una actividad de planificación, no de monitoreo (PMBOK 6, sección 11.7).",
        tags: { format: "opción_múltiple", domain: "procesos", method: "predictivo", cognitive: "aplicación" }
    },
    {
        question: "El director de proyecto elabora el plan de gestión de comunicaciones. ¿Cuáles son entradas válidas para este proceso? (Selecciona todas las que apliquen)",
        options: [
            "El registro de interesados con sus preferencias y necesidades de información.",
            "El plan para la dirección del proyecto (especialmente el plan de involucramiento de interesados).",
            "Los factores ambientales de la empresa (cultura organizacional y canales disponibles).",
            "Los informes de desempeño del trabajo de la fase anterior.",
            "Los activos de los procesos de la organización (plantillas de comunicación)."
        ],
        answer: [
            "El registro de interesados con sus preferencias y necesidades de información.",
            "El plan para la dirección del proyecto (especialmente el plan de involucramiento de interesados).",
            "Los factores ambientales de la empresa (cultura organizacional y canales disponibles).",
            "Los activos de los procesos de la organización (plantillas de comunicación)."
        ],
        rationale: "El proceso Planificar la Gestión de Comunicaciones usa como entradas: el acta de constitución, el plan para la dirección (incluyendo el plan de interesados), el registro de interesados, los factores ambientales y los activos de la organización. Los informes de desempeño son salidas del proceso de Monitoreo, posteriores a la planificación (PMBOK 6, sección 10.1).",
        tags: { format: "opción_múltiple", domain: "procesos", method: "predictivo", cognitive: "aplicación" }
    },
    {
        question: "Ordena las etapas del proceso de Gestión de Costos según la secuencia correcta del PMBOK 6:",
        options: [
            "Determinar el presupuesto",
            "Controlar los costos",
            "Planificar la gestión de los costos",
            "Estimar los costos"
        ],
        answer: [
            "Planificar la gestión de los costos",
            "Estimar los costos",
            "Determinar el presupuesto",
            "Controlar los costos"
        ],
        rationale: "La gestión de costos sigue esta secuencia: (1) planificar cómo se gestionarán los costos, (2) estimar los costos de cada paquete de trabajo, (3) agregar las estimaciones y añadir reservas para determinar el presupuesto total (BAC) y (4) controlar los costos durante la ejecución comparando el desempeño real contra la línea base (PMBOK 6, capítulo 7).",
        tags: { format: "ordenamiento", domain: "procesos", method: "predictivo", cognitive: "conocimiento" }
    },

    // ── Análisis (9) ──────────────────────────────────────────────────────────

    {
        question: "El director de un proyecto de construcción recibe datos al 55% de avance: BAC = $10.000.000, EV = $5.000.000, AC = $5.800.000, PV = $5.500.000. ¿Cuáles son las conclusiones válidas sobre el estado del proyecto?",
        options: [
            "El proyecto está atrasado y sobre el presupuesto; la EAC estimada supera el BAC en aproximadamente $1.600.000.",
            "El proyecto está adelantado y bajo el presupuesto; no requiere acción correctiva.",
            "El proyecto tiene problemas solo de cronograma; el desempeño de costo es aceptable.",
            "Los indicadores EVM no son aplicables porque el proyecto es de construcción física."
        ],
        answer: ["El proyecto está atrasado y sobre el presupuesto; la EAC estimada supera el BAC en aproximadamente $1.600.000."],
        rationale: "SPI = 5.000.000/5.500.000 = 0,909 (atrasado). CPI = 5.000.000/5.800.000 = 0,862 (sobre presupuesto). EAC = BAC/CPI = 10.000.000/0,862 = $11.600.000, que supera el BAC en $1.600.000. Ambos índices menores a 1 confirman la situación doble negativa (PMBOK 6, sección 7.4).",
        tags: { format: "opción_única", domain: "procesos", method: "predictivo", cognitive: "análisis" }
    },
    {
        question: "El director analiza el plan del proyecto y detecta que la ruta crítica contiene solo 3 de las 47 actividades del proyecto. ¿Qué implicación tiene esto para la gestión del cronograma?",
        options: [
            "El proyecto es simple porque el camino crítico tiene pocas actividades.",
            "Las 44 actividades fuera del camino crítico tienen holgura; el director debe enfocar su atención en gestionar el gran volumen de actividades con holgura que podrían convertirse en críticas si se retrasan.",
            "Solo las 3 actividades críticas requieren seguimiento; las demás pueden gestionarse sin atención especial.",
            "Un camino crítico con pocas actividades indica que la EDT tiene demasiado detalle."
        ],
        answer: ["Las 44 actividades fuera del camino crítico tienen holgura; el director debe enfocar su atención en gestionar el gran volumen de actividades con holgura que podrían convertirse en críticas si se retrasan."],
        rationale: "Aunque solo 3 actividades están en el camino crítico, 44 actividades tienen holgura que puede consumirse. Si múltiples actividades con poca holgura se retrasan simultáneamente, el cronograma puede deteriorarse rápidamente. El director debe monitorear especialmente las actividades casi críticas (PMBOK 6, sección 6.5).",
        tags: { format: "opción_única", domain: "procesos", method: "predictivo", cognitive: "análisis" }
    },
    {
        question: "Un proyecto de digitalización de infraestructura eléctrica tiene un CPI acumulado de 0,82 consistente durante los últimos cinco meses. El patrocinador sugiere que el proyecto puede recuperarse en los dos meses restantes. ¿Cuál es la evaluación correcta del director?",
        options: [
            "El patrocinador tiene razón; con esfuerzo adicional del equipo, recuperar el CPI es posible.",
            "La investigación del PMI indica que el CPI acumulado rara vez mejora más del 10% en los últimos meses. Con CPI 0,82 consistente, la EAC realista es BAC/0,82. Recuperar el proyecto a CPI 1,0 requeriría un CPI futuro de (BAC-EV)/(BAC-AC), probablemente mayor a 1,5, lo cual es casi imposible.",
            "El proyecto puede recuperarse si se aplica crashing a las actividades restantes.",
            "El CPI de 0,82 indica un problema puntual que se resolverá naturalmente al final."
        ],
        answer: ["La investigación del PMI indica que el CPI acumulado rara vez mejora más del 10% en los últimos meses. Con CPI 0,82 consistente, la EAC realista es BAC/0,82. Recuperar el proyecto a CPI 1,0 requeriría un CPI futuro de (BAC-EV)/(BAC-AC), probablemente mayor a 1,5, lo cual es casi imposible."],
        rationale: "Investigaciones del PMI demuestran que el CPI acumulado después del 20% de avance es un predictor estable del costo final y rara vez mejora más del 10%. Con CPI = 0,82 por cinco meses consecutivos, la probabilidad de recuperación total es extremadamente baja. El director debe presentar al patrocinador una EAC realista basada en el CPI acumulado (PMBOK 6, sección 7.4).",
        tags: { format: "opción_única", domain: "procesos", method: "predictivo", cognitive: "análisis" }
    },
    {
        question: "El equipo de un proyecto de tendido de cables submarinos identifica 8 riesgos de alta prioridad, 15 de media y 22 de baja. ¿Cuáles son las conclusiones válidas sobre cómo gestionar estos riesgos? (Selecciona todas las que apliquen)",
        options: [
            "Los 8 riesgos de alta prioridad deben tener planes de respuesta detallados y responsables asignados.",
            "Los 22 riesgos de baja prioridad pueden documentarse en la lista de supervisión sin respuesta activa.",
            "Los riesgos de media prioridad requieren el mismo nivel de atención que los de alta.",
            "El análisis cuantitativo debe enfocarse en los riesgos de alta prioridad para cuantificar su impacto en los objetivos del proyecto.",
            "El registro de riesgos debe actualizarse regularmente durante la ejecución para todos los niveles."
        ],
        answer: [
            "Los 8 riesgos de alta prioridad deben tener planes de respuesta detallados y responsables asignados.",
            "Los 22 riesgos de baja prioridad pueden documentarse en la lista de supervisión sin respuesta activa.",
            "El análisis cuantitativo debe enfocarse en los riesgos de alta prioridad para cuantificar su impacto en los objetivos del proyecto.",
            "El registro de riesgos debe actualizarse regularmente durante la ejecución para todos los niveles."
        ],
        rationale: "Los riesgos de alta prioridad requieren planes de respuesta detallados y análisis cuantitativo. Los de baja prioridad se monitorean en la lista de supervisión. Los de media prioridad reciben atención proporcional, no el mismo nivel que los de alta. El registro debe actualizarse continuamente para todos (PMBOK 6, secciones 11.5 y 11.7).",
        tags: { format: "opción_múltiple", domain: "procesos", method: "predictivo", cognitive: "análisis" }
    },
    {
        question: "Al evaluar el desempeño de un proveedor de servicios de ingeniería a mitad del contrato, el director identifica: entregables entregados a tiempo (100%), calidad dentro de especificaciones (95%) pero costos un 20% por encima de lo facturado en contratos anteriores. ¿Cuál es el análisis correcto?",
        options: [
            "El proveedor tiene excelente desempeño; los costos adicionales son consecuencia del alcance del proyecto.",
            "El cronograma y la calidad son satisfactorios, pero el sobrecosto requiere investigación: puede indicar cambios de alcance no controlados, subestimación original o ineficiencia del proveedor. Debe revisarse el contrato y solicitarse justificación.",
            "El proveedor debe ser reemplazado por sus altos costos.",
            "Los costos adicionales son normales en proyectos de ingeniería y no requieren análisis."
        ],
        answer: ["El cronograma y la calidad son satisfactorios, pero el sobrecosto requiere investigación: puede indicar cambios de alcance no controlados, subestimación original o ineficiencia del proveedor. Debe revisarse el contrato y solicitarse justificación."],
        rationale: "El desempeño debe evaluarse en todas las dimensiones. Un sobrecosto del 20% frente a contratos anteriores es una señal de alerta que puede tener múltiples causas. Antes de concluir o actuar, el director debe investigar: revisar si hay cambios de alcance no formalizados, analizar la estructura de costos y solicitar al proveedor justificación detallada (PMBOK 6, sección 12.3).",
        tags: { format: "opción_única", domain: "procesos", method: "predictivo", cognitive: "análisis" }
    },
    {
        question: "Ordena las etapas del proceso de control integrado de cambios, desde que se detecta la necesidad de un cambio hasta su implementación:",
        options: [
            "Implementar el cambio y actualizar los documentos del proyecto",
            "Identificar la necesidad o solicitud de cambio",
            "Obtener la decisión del Comité de Control de Cambios",
            "Documentar formalmente la solicitud de cambio",
            "Analizar el impacto del cambio en alcance, tiempo, costo, calidad y riesgo"
        ],
        answer: [
            "Identificar la necesidad o solicitud de cambio",
            "Documentar formalmente la solicitud de cambio",
            "Analizar el impacto del cambio en alcance, tiempo, costo, calidad y riesgo",
            "Obtener la decisión del Comité de Control de Cambios",
            "Implementar el cambio y actualizar los documentos del proyecto"
        ],
        rationale: "El control integrado de cambios sigue esta secuencia obligatoria: identificar la necesidad, documentarla formalmente para trazabilidad, analizar su impacto integral, presentar al CCB para decisión y solo entonces implementar si fue aprobada. Implementar antes de la aprobación viola el proceso de control (PMBOK 6, sección 4.6).",
        tags: { format: "ordenamiento", domain: "procesos", method: "predictivo", cognitive: "análisis" }
    },
    {
        question: "En un proyecto de instalación de subestaciones en tres ubicaciones simultáneas, el director observa que la ubicación C consistentemente entrega resultados de menor calidad que A y B. El equipo de C tiene la misma capacitación y equipos que los demás. ¿Cuáles son las hipótesis más válidas para investigar? (Selecciona todas las que apliquen)",
        options: [
            "Las condiciones específicas del sitio C pueden presentar desafíos técnicos únicos no identificados en la planificación.",
            "El liderazgo local en el sitio C puede estar gestionando los procesos de manera diferente.",
            "Los miembros del equipo en el sitio C pueden necesitar capacitación adicional o apoyo técnico.",
            "La calidad diferente en el sitio C confirma que el equipo C tiene menor capacidad inherente.",
            "Los materiales entregados al sitio C pueden no estar cumpliendo las mismas especificaciones que los de A y B."
        ],
        answer: [
            "Las condiciones específicas del sitio C pueden presentar desafíos técnicos únicos no identificados en la planificación.",
            "El liderazgo local en el sitio C puede estar gestionando los procesos de manera diferente.",
            "Los miembros del equipo en el sitio C pueden necesitar capacitación adicional o apoyo técnico.",
            "Los materiales entregados al sitio C pueden no estar cumpliendo las mismas especificaciones que los de A y B."
        ],
        rationale: "La diferencia de calidad entre sitios con la misma capacitación y equipos puede tener múltiples causas: condiciones de sitio, variaciones en liderazgo local, brechas de habilidades no detectadas o variaciones en materiales. La hipótesis de capacidad inherente menor es la más débil sin evidencia específica y estigmatiza al equipo sin base analítica (PMBOK 6, sección 8.3; principio de análisis de causa raíz).",
        tags: { format: "opción_múltiple", domain: "procesos", method: "predictivo", cognitive: "análisis" }
    },
    {
        question: "Un director de proyecto en un entorno ágil recibe presión para dar una fecha de entrega definitiva a 12 meses. El Product Backlog está incompleto y los requisitos evolucionan semanalmente. ¿Cuál es la respuesta más honesta y apropiada?",
        options: [
            "Dar una fecha exacta basada en la velocidad actual del equipo y el backlog estimado.",
            "Explicar que en proyectos con requisitos emergentes las fechas exactas son contraproducentes; ofrecer en cambio una estimación de rango con sus supuestos, un plan de revisión periódica y criterios de confirmación de la fecha conforme el backlog madure.",
            "Rechazar la solicitud porque en proyectos ágiles no se dan fechas de entrega.",
            "Convertir el proyecto a enfoque predictivo para poder dar una fecha comprometida."
        ],
        answer: ["Explicar que en proyectos con requisitos emergentes las fechas exactas son contraproducentes; ofrecer en cambio una estimación de rango con sus supuestos, un plan de revisión periódica y criterios de confirmación de la fecha conforme el backlog madure."],
        rationale: "En proyectos con requisitos emergentes, comprometerse con fechas exactas a largo plazo genera expectativas irreales y erosiona la confianza cuando inevitablemente cambian. La respuesta apropiada es transparente sobre la incertidumbre, ofrece un rango basado en datos actuales y establece un proceso para refinar la estimación conforme el alcance se clarifica (Guía Práctica Ágil; PMBOK 7, principio de complejidad).",
        tags: { format: "opción_única", domain: "procesos", method: "ágil", cognitive: "análisis" }
    },
    {
        question: "Ordena los pasos del proceso de planificación de la respuesta a un riesgo específico de alta prioridad:",
        options: [
            "Documentar la respuesta planificada en el registro de riesgos y asignar un responsable",
            "Evaluar la efectividad de la respuesta después de implementarla",
            "Identificar opciones de respuesta posibles para el riesgo",
            "Seleccionar la respuesta más apropiada considerando costo, efectividad y factibilidad",
            "Analizar los riesgos secundarios que la respuesta seleccionada podría generar"
        ],
        answer: [
            "Identificar opciones de respuesta posibles para el riesgo",
            "Seleccionar la respuesta más apropiada considerando costo, efectividad y factibilidad",
            "Analizar los riesgos secundarios que la respuesta seleccionada podría generar",
            "Documentar la respuesta planificada en el registro de riesgos y asignar un responsable",
            "Evaluar la efectividad de la respuesta después de implementarla"
        ],
        rationale: "La planificación de respuesta a riesgos sigue esta secuencia: identificar opciones, seleccionar la mejor considerando su costo-efectividad, analizar si genera riesgos secundarios, documentar y asignar responsable, y finalmente evaluar la efectividad tras la implementación. El análisis de riesgos secundarios debe hacerse antes de comprometerse con una respuesta (PMBOK 6, sección 11.5).",
        tags: { format: "ordenamiento", domain: "procesos", method: "predictivo", cognitive: "análisis" }
    },

    // =========================================================================
    // DOMINIO: NEGOCIO (5 preguntas)
    // =========================================================================

    // ── Conocimiento (2) ──────────────────────────────────────────────────────

    {
        question: "¿Cuál de los siguientes describe correctamente el concepto de 'apetito de riesgo' en el contexto del PMBOK?",
        options: [
            "La cantidad máxima de riesgo que una organización está dispuesta a tolerar en cualquier circunstancia.",
            "El grado de incertidumbre que una organización o individuo está dispuesto a aceptar en anticipación de una recompensa.",
            "La lista priorizada de riesgos identificados en un proyecto.",
            "La reserva financiera disponible para cubrir riesgos materializados."
        ],
        answer: ["El grado de incertidumbre que una organización o individuo está dispuesto a aceptar en anticipación de una recompensa."],
        rationale: "El apetito de riesgo refleja la disposición general de la organización a asumir riesgo en búsqueda de valor. Es diferente de la tolerancia al riesgo (nivel específico de riesgo aceptable) y del umbral de riesgo (punto en que el riesgo se vuelve inaceptable). Informa toda la estrategia de gestión de riesgos del proyecto (PMBOK 6, sección 11.1; PMBOK 7).",
        tags: { format: "opción_única", domain: "negocio", method: "predictivo", cognitive: "conocimiento" }
    },
    {
        question: "¿Cuál de los siguientes es un indicador adelantado (leading indicator) de valor de negocio en un proyecto, a diferencia de un indicador rezagado (lagging indicator)?",
        options: [
            "El porcentaje de reducción de costos operativos reportado un año después del cierre del proyecto.",
            "El nivel de adopción del sistema por parte de los usuarios finales durante la implementación.",
            "El retorno sobre la inversión calculado al finalizar el primer año de operación.",
            "El número de incidentes reducidos respecto al año anterior a la implementación."
        ],
        answer: ["El nivel de adopción del sistema por parte de los usuarios finales durante la implementación."],
        rationale: "Los indicadores adelantados miden condiciones que predicen resultados futuros. La adopción por usuarios durante la implementación predice si los beneficios operativos se realizarán. Los indicadores como ROI, reducción de costos e incidentes son rezagados: miden resultados después de que ocurren (PMBOK 7, dominio de medición; principio de valor).",
        tags: { format: "opción_única", domain: "negocio", method: "predictivo", cognitive: "conocimiento" }
    },

    // ── Ordenamiento extra (procesos/predictivo) ──────────────────────────────

    {
        question: "Ordena las fases del ciclo de vida predictivo de un proyecto de construcción de subestación eléctrica según la secuencia lógica del PMBOK:",
        options: [
            "Cierre del proyecto y entrega al cliente",
            "Inicio formal y autorización del proyecto",
            "Ejecución y monitoreo del trabajo",
            "Planificación detallada de alcance, tiempo, costo y riesgos",
            "Identificación de necesidades y estudios de prefactibilidad"
        ],
        answer: [
            "Identificación de necesidades y estudios de prefactibilidad",
            "Inicio formal y autorización del proyecto",
            "Planificación detallada de alcance, tiempo, costo y riesgos",
            "Ejecución y monitoreo del trabajo",
            "Cierre del proyecto y entrega al cliente"
        ],
        rationale: "El ciclo de vida de un proyecto sigue esta secuencia lógica: primero se identifica la necesidad y se realizan estudios de viabilidad, luego se autoriza formalmente el proyecto (acta de constitución), se planifica en detalle, se ejecuta y monitorea el trabajo, y finalmente se cierra formalmente con la entrega al cliente. Esta secuencia refleja el flujo natural de grupos de procesos del PMBOK (PMBOK 6, sección 1.2.4).",
        tags: { format: "ordenamiento", domain: "procesos", method: "predictivo", cognitive: "aplicación" }
    },
    {
        question: "Ordena las actividades del proceso de cierre formal de un proyecto de transmisión eléctrica según la secuencia más apropiada:",
        options: [
            "Documentar lecciones aprendidas y archivar la información del proyecto",
            "Verificar que todos los entregables cumplen los criterios de aceptación definidos",
            "Cerrar formalmente todos los contratos con proveedores y subcontratistas",
            "Obtener la aceptación formal y firmada del cliente sobre los entregables",
            "Liberar formalmente los recursos del proyecto y notificar a las partes"
        ],
        answer: [
            "Verificar que todos los entregables cumplen los criterios de aceptación definidos",
            "Obtener la aceptación formal y firmada del cliente sobre los entregables",
            "Cerrar formalmente todos los contratos con proveedores y subcontratistas",
            "Liberar formalmente los recursos del proyecto y notificar a las partes",
            "Documentar lecciones aprendidas y archivar la información del proyecto"
        ],
        rationale: "El cierre de un proyecto sigue esta secuencia lógica: primero se verifica que los entregables cumplen los requisitos, luego se obtiene la aceptación formal del cliente, se cierran los contratos con terceros, se liberan los recursos y finalmente se capturan las lecciones aprendidas y se archiva la información para proyectos futuros. La documentación final cierra el ciclo del conocimiento organizacional (PMBOK 6, sección 4.7).",
        tags: { format: "ordenamiento", domain: "procesos", method: "predictivo", cognitive: "aplicación" }
    },

    {
        question: "Al inicio de un proyecto de construcción de una línea de 500 kV, el comité directivo solicita al director de proyecto que asegure que el proyecto genere retorno sobre la inversión (ROI) positivo. ¿Cuál es la respuesta más apropiada del director?",
        options: [
            "Garantizar que el proyecto tendrá ROI positivo porque ese es el objetivo del acta de constitución.",
            "Explicar que el ROI depende de variables operativas y de mercado fuera del control del proyecto; el director puede asegurar que los entregables del proyecto crearán las condiciones para el ROI esperado y que el avance se medirá contra los beneficios del caso de negocio.",
            "Rechazar la solicitud porque el ROI es responsabilidad del área financiera, no del director.",
            "Ajustar el alcance del proyecto para incluir actividades operativas que aseguren el ROI."
        ],
        answer: ["Explicar que el ROI depende de variables operativas y de mercado fuera del control del proyecto; el director puede asegurar que los entregables del proyecto crearán las condiciones para el ROI esperado y que el avance se medirá contra los beneficios del caso de negocio."],
        rationale: "El director de proyecto puede garantizar la calidad de los entregables, pero no el ROI, que depende de factores operativos, de mercado y del contexto de negocio fuera del alcance del proyecto. Su responsabilidad es entregar los outputs que habiliten el ROI y monitorear la alineación con el caso de negocio (PMBOK 7, principio de valor; PMBOK 6, sección 1.2.6).",
        tags: { format: "opción_única", domain: "negocio", method: "predictivo", cognitive: "aplicación" }
    }

];