/**
 * @class DiagnosticExam
 * @description Motor configurable para exámenes de diagnóstico.
 * Gestiona el ciclo completo: inicio → preguntas → resultados con revisión.
 *
 * Formatos soportados: "opción_única" | "opción_múltiple" | "ordenamiento"
 */
class DiagnosticExam {

    /**
     * @param {Object} config
     * @param {HTMLElement} config.container - Elemento donde se monta la UI
     * @param {Array<Object>} config.questions - Banco completo de preguntas
     * @param {number} [config.examSize=10] - Número de preguntas por examen
     * @param {boolean} [config.showReset=true] - Muestra el botón Reiniciar en resultados
     * @param {number} [config.resultDelay=3000] - Milisegundos de delay antes de mostrar resultados
     * @param {string} [config.processingMessage='Procesando respuestas…'] - Mensaje durante el delay
     * @param {Object} [config.distributions] - Proporciones por cada tag key. Ej: { domain: { personas: 0.42 } }
     * @param {string[]} [config.reportDimensions] - Tags que aparecen en la tabla de resultados
     * @param {Object} [config.labels] - Etiquetas legibles por tag key y valor. Ej: { domain: { personas: 'Personas' } }
     */
    constructor(config) {
        this._cfg = {
            container:         config.container || document.body,
            title:             config.title || 'Evaluación de competencias',
            questions:         config.questions || [],
            examSize:          config.examSize ?? 10,
            showReset:         config.showReset ?? true,
            resultDelay:       config.resultDelay ?? 5000,
            processingMessage: config.processingMessage ?? 'Procesando respuestas…',
            distributions:     config.distributions     || {},
            reportDimensions:  config.reportDimensions  || Object.keys(config.distributions || {}),
            labels:            config.labels            || {}
        };

        /** @type {string} Clave de sessionStorage para persistir el estado del examen en curso */
        this._SESSION_KEY = 'de_session';

        /** @type {Array<Object>} Preguntas seleccionadas para este examen */
        this._selected = [];

        /** @type {Array<Array<string>|null>} Respuesta del usuario por índice */
        this._answers = [];

        /** @type {number} Índice de la pregunta actual */
        this._current = 0;

        /** @type {number|null} ID del intervalo del temporizador */
        this._timerInterval = null;

        /** @type {number} Segundos restantes */
        this._secondsLeft = 0;

        this._mount();
    }

    // ─── Montaje ──────────────────────────────────────────────────────────────

    /**
     * Inserta el HTML base del shell y muestra la pantalla de inicio.
     */
    _mount() {
        const c = this._cfg;
        c.container.innerHTML = `
            <div class="de-shell">
                <header class="de-header">
                    <div>
                        <h1>${c.title}</h1>
                        <p>Evaluación de competencias</p>
                    </div>
                    <div class="de-meta" id="de-meta" style="display:none">
                        <div class="de-meta-item">
                            <span class="val" id="de-q-current">1</span>
                            <span class="lbl">Pregunta</span>
                        </div>
                        <div class="de-meta-item">
                            <span class="val" id="de-q-total">—</span>
                            <span class="lbl">Total</span>
                        </div>
                        <div class="de-meta-item">
                            <span class="val" id="de-timer">—</span>
                            <span class="lbl">Tiempo</span>
                        </div>
                    </div>
                </header>

                <div class="de-progress" id="de-progress" style="display:none">
                    <div class="de-progress-info">
                        <span>Progreso</span>
                        <span id="de-progress-pct">0%</span>
                    </div>
                    <div class="de-progress-track">
                        <div class="de-progress-fill" id="de-progress-fill" style="width:0%"></div>
                    </div>
                </div>

                <div id="de-body"></div>
            </div>
        `;

        // Intentar restaurar una sesión en curso antes de mostrar el inicio
        if (!this._restoreSession()) {
            this._showStart();
        }
    }

    // ─── Pantalla de inicio ───────────────────────────────────────────────────

    /**
     * Renderiza la pantalla de bienvenida con las estadísticas del examen.
     */
    _showStart() {
        const size    = Math.min(this._cfg.examSize, this._cfg.questions.length);
        const minutes = Math.round(size * 1.5);

        this._el('de-body').innerHTML = `
            <div class="de-card de-start">
                <h2>Examen</h2>
                <p>Responde cada pregunta utilizando tu mejor criterio. Al finalizar verás el resultado y podrás revisar cada respuesta con su explicación.</p>
                <div class="de-stats">
                    <div class="de-stat">
                        <span class="sv">${size}</span>
                        <span class="sl">Preguntas</span>
                    </div>
                    <div class="de-stat">
                        <span class="sv">${minutes}</span>
                        <span class="sl">Minutos</span>
                    </div>
                </div>
                <button class="de-btn de-btn-success" id="de-btn-start"
                    style="font-size:.95rem;padding:12px 40px">
                    Comenzar examen →
                </button>
            </div>
        `;

        this._el('de-btn-start').addEventListener('click', () => this._startExam());
    }

    // ─── Inicio del examen ────────────────────────────────────────────────────

    /**
     * Prepara el estado y muestra la primera pregunta.
     * Puede llamarse tanto desde el inicio como desde el botón Reiniciar.
     */
    _startExam() {
        clearInterval(this._timerInterval);
        this._clearSession();

        const size     = Math.min(this._cfg.examSize, this._cfg.questions.length);
        this._selected = this._selectQuestions(size);
        this._answers  = new Array(size).fill(null);
        this._current  = 0;

        this._el('de-meta').style.display     = '';
        this._el('de-progress').style.display = '';
        this._el('de-q-total').textContent    = size;

        this._startTimer();
        this._saveSession();
        this._renderQuestion();
    }

    // ─── Selección de preguntas ───────────────────────────────────────────────

    /**
     * Mezcla un arreglo en orden aleatorio usando Fisher-Yates.
     * Devuelve un nuevo arreglo sin mutar el original.
     * @param {Array} arr - Arreglo a mezclar
     * @returns {Array}
     */
    _shuffleArray(arr) {
        const result = [...arr];
        for (let i = result.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [result[i], result[j]] = [result[j], result[i]];
        }
        return result;
    }

    /**
     * Selecciona preguntas del banco satisfaciendo todas las distribuciones
     * simultáneamente mediante intersección de celdas multidimensionales.
     *
     * Algoritmo:
     * 1. Construye todas las combinaciones posibles de valores de tags (celdas).
     * 2. Asigna a cada celda una cuota = producto de los ratios de cada dimensión × count.
     * 3. Selecciona aleatoriamente de cada celda hasta cubrir su cuota.
     * 4. Si una celda no tiene suficientes preguntas, distribuye el déficit
     *    proporcionalmente entre las celdas con superávit más cercanas.
     * 5. Completa cualquier diferencia residual del redondeo con preguntas
     *    aleatorias del pool restante.
     *
     * @param {number} count - Cantidad de preguntas a seleccionar
     * @returns {Array<Object>}
     */
    _selectQuestions(count) {
        const dist  = this._cfg.distributions;
        const keys  = Object.keys(dist);
        const pool  = [...this._cfg.questions].sort(() => Math.random() - .5);

        // Si no hay distribuciones configuradas, selección aleatoria pura
        if (!keys.length) {
            return this._finalizeSelection(pool.slice(0, count), count);
        }

        /**
         * Genera el producto cartesiano de los valores de cada dimensión.
         * Cada elemento del resultado es un objeto { key: value, ... } que
         * representa una celda única en el espacio multidimensional.
         * @param {string[]} dimensions - Claves de distribución
         * @returns {Object[]} Arreglo de combinaciones
         */
        const cartesian = (dimensions) => {
            return dimensions.reduce((combos, key) => {
                const values = Object.keys(dist[key]);
                return combos.flatMap(combo =>
                    values.map(val => ({ ...combo, [key]: val }))
                );
            }, [{}]);
        };

        const cells = cartesian(keys);

        /**
         * Calcula la cuota exacta (float) de una celda como producto de los
         * ratios de cada dimensión multiplicado por count.
         * @param {Object} cell - Combinación de tag values
         * @returns {number}
         */
        const cellQuota = (cell) =>
            keys.reduce((acc, key) => acc * (dist[key][cell[key]] || 0), count);

        /**
         * Verifica si una pregunta pertenece a una celda dada.
         * @param {Object} q - Pregunta
         * @param {Object} cell - Celda
         * @returns {boolean}
         */
        const matchesCell = (q, cell) =>
            keys.every(key => q.tags[key] === cell[key]);

        // Paso 1: agrupar preguntas del pool por celda
        const cellPools = cells.map(cell => ({
            cell,
            quota:     cellQuota(cell),
            questions: pool.filter(q => matchesCell(q, cell))
        }));

        // Paso 2: calcular cuotas enteras con método de Hamilton
        // (distribuye el residuo a las celdas con mayor parte decimal)
        const totalFloat  = cellPools.reduce((s, c) => s + c.quota, 0);
        const base        = cellPools.map(c => ({ ...c, floor: Math.floor(c.quota), frac: c.quota % 1 }));
        let   remainder   = count - base.reduce((s, c) => s + c.floor, 0);

        base.sort((a, b) => b.frac - a.frac);
        base.forEach((c, i) => { c.target = c.floor + (i < remainder ? 1 : 0); });

        // Paso 3: seleccionar de cada celda hasta su target
        // Si la celda tiene déficit, acumular el sobrante en un pool de rescate
        const selected   = [];
        const rescuePool = [];

        base.forEach(({ cell, target, questions }) => {
            const shuffled = this._shuffleArray(questions);
            const taken    = shuffled.slice(0, target);
            const leftover = shuffled.slice(target);
            selected.push(...taken);
            // Déficit: preguntas que faltan para cubrir el target
            // Se registra implícitamente — el rescue pool cubre el resto
            rescuePool.push(...leftover);
        });

        // Paso 4: completar déficit con rescue pool (preguntas no usadas)
        // mezclado aleatoriamente para no favorecer ninguna celda
        const shuffledRescue = this._shuffleArray(rescuePool);
        while (selected.length < count && shuffledRescue.length) {
            selected.push(shuffledRescue.shift());
        }

        return this._finalizeSelection(selected, count);
    }

    /**
     * Aplica el shuffle final de orden y de opciones a la selección.
     * @param {Array<Object>} questions - Preguntas seleccionadas
     * @param {number} count - Cantidad máxima
     * @returns {Array<Object>}
     */
    _finalizeSelection(questions, count) {
        return questions.slice(0, count).sort(() => Math.random() - .5).map(q => {
            const f = q.tags.format;
            if (f === 'opción_única' || f === 'opción_múltiple') {
                return { ...q, options: this._shuffleArray(q.options) };
            }
            return q;
        });
    }

    // ─── Temporizador ─────────────────────────────────────────────────────────

    /**
     * Inicia la cuenta regresiva.
     * El tiempo asignado es 1.5 minutos por pregunta seleccionada.
     */
    _startTimer() {
        this._secondsLeft = Math.round(this._selected.length * 1.5) * 60;
        this._renderTimer();
        this._timerInterval = setInterval(() => {
            this._secondsLeft--;
            this._renderTimer();
            this._saveSession();
            if (this._secondsLeft <= 0) this._finishExam();
        }, 1000);
    }

    /**
     * Actualiza el texto del contador en el header.
     */
    _renderTimer() {
        const m = Math.floor(this._secondsLeft / 60);
        const s = String(this._secondsLeft % 60).padStart(2, '0');
        this._el('de-timer').textContent = `${m}:${s}`;
    }

    // ─── Preguntas ────────────────────────────────────────────────────────────

    /**
     * Actualiza barra de progreso y contadores del header.
     */
    _updateProgress() {
        const pct = Math.round((this._current / this._selected.length) * 100);
        this._el('de-progress-fill').style.width = pct + '%';
        this._el('de-progress-pct').textContent  = pct + '%';
        this._el('de-q-current').textContent     = this._current + 1;
    }

    /**
     * Renderiza la pregunta en el índice _current.
     */
    _renderQuestion() {
        this._updateProgress();
        const q   = this._selected[this._current];
        const idx = this._current;

        const card = document.createElement('div');
        card.className = 'de-card';

        card.innerHTML = `
            <div class="de-q-meta">
                <span class="de-q-num">${idx + 1} / ${this._selected.length}</span>
            </div>
            <p class="de-q-text">${q.question}</p>
            <p class="de-q-hint">${this._hintText(q.tags.format)}</p>
        `;

        card.appendChild(this._renderInput(q, idx));

        const isFirst = idx === 0;
        const isLast  = idx === this._selected.length - 1;

        const actions = document.createElement('div');
        actions.className = 'de-actions de-actions-between';

        // Botón Anterior: siempre presente para mantener la posición del layout,
        // invisible en la primera pregunta con visibility:hidden
        const btnPrev = document.createElement('button');
        btnPrev.className   = 'de-btn de-btn-ghost';
        btnPrev.textContent = '← Anterior';
        btnPrev.style.visibility = isFirst ? 'hidden' : 'visible';
        if (!isFirst) {
            btnPrev.addEventListener('click', () => {
                this._current--;
                this._saveSession();
                this._renderQuestion();
            });
        }
        actions.appendChild(btnPrev);

        // Botón principal: Terminar (última) o Siguiente
        const btnNext = document.createElement('button');
        btnNext.id       = 'de-btn-next';
        btnNext.disabled = !this._answers[idx];

        if (isLast) {
            btnNext.className   = 'de-btn de-btn-danger';
            btnNext.textContent = 'Terminar examen';
            btnNext.addEventListener('click', () => this._finishExam());
        } else {
            btnNext.className   = 'de-btn de-btn-primary';
            btnNext.textContent = 'Siguiente →';
            btnNext.addEventListener('click', () => {
                this._current++;
                this._saveSession();
                this._renderQuestion();
            });
        }

        actions.appendChild(btnNext);
        card.appendChild(actions);

        this._el('de-body').innerHTML = '';
        this._el('de-body').appendChild(card);
    }

    /**
     * Devuelve el widget de respuesta adecuado para el formato de la pregunta.
     * @param {Object} q
     * @param {number} idx
     * @returns {HTMLElement}
     */
    _renderInput(q, idx) {
        switch (q.tags.format) {
            case 'opción_única':    return this._renderSingle(q, idx);
            case 'opción_múltiple': return this._renderMultiple(q, idx);
            case 'ordenamiento':    return this._renderOrdering(q, idx);
            default:                return document.createElement('div');
        }
    }

    /** Habilita el botón Siguiente/Terminar. */
    _enableNext() {
        const btn = this._el('de-btn-next');
        if (btn) btn.disabled = false;
    }

    /**
     * Renderiza opciones de selección única.
     * Restaura la selección previa si el usuario volvió a la pregunta.
     * @param {Object} q
     * @param {number} idx
     * @returns {HTMLElement}
     */
    _renderSingle(q, idx) {
        const wrap    = document.createElement('div');
        wrap.className = 'de-options';
        const letters  = ['A','B','C','D','E','F'];
        const prev     = this._answers[idx];

        q.options.forEach((opt, i) => {
            const btn = document.createElement('button');
            btn.className = 'de-opt' + (prev && prev[0] === opt ? ' selected' : '');
            btn.innerHTML = `<span class="de-opt-marker">${letters[i]}</span><span>${opt}</span>`;
            btn.addEventListener('click', () => {
                wrap.querySelectorAll('.de-opt').forEach(b => b.classList.remove('selected'));
                btn.classList.add('selected');
                this._answers[idx] = [opt];
                this._enableNext();
            });
            wrap.appendChild(btn);
        });

        return wrap;
    }

    /**
     * Renderiza opciones de selección múltiple.
     * Restaura la selección previa si el usuario volvió a la pregunta.
     * @param {Object} q
     * @param {number} idx
     * @returns {HTMLElement}
     */
    _renderMultiple(q, idx) {
        const wrap    = document.createElement('div');
        wrap.className = 'de-options';
        const letters  = ['A','B','C','D','E','F'];
        const prev     = this._answers[idx] || [];
        this._answers[idx] = [...prev];

        q.options.forEach((opt, i) => {
            const btn = document.createElement('button');
            btn.className = 'de-opt' + (prev.includes(opt) ? ' selected' : '');
            btn.innerHTML = `<span class="de-opt-marker">${letters[i]}</span><span>${opt}</span>`;
            btn.addEventListener('click', () => {
                const sel = this._answers[idx];
                const pos = sel.indexOf(opt);
                if (pos === -1) { sel.push(opt); btn.classList.add('selected'); }
                else            { sel.splice(pos, 1); btn.classList.remove('selected'); }
                const next = this._el('de-btn-next');
                if (next) next.disabled = sel.length === 0;
            });
            wrap.appendChild(btn);
        });

        return wrap;
    }

    /**
     * Renderiza una lista ordenable con drag & drop.
     * @param {Object} q
     * @param {number} idx
     * @returns {HTMLElement}
     */
    _renderOrdering(q, idx) {
        const shuffled = [...q.options].sort(() => Math.random() - .5);
        this._answers[idx] = [...shuffled];

        const wrap = document.createElement('div');
        wrap.className = 'de-ordering';
        let dragSrc = null;

        /** Reconstruye la lista reflejando el orden actual en _answers[idx]. */
        const build = () => {
            wrap.innerHTML = '';
            this._answers[idx].forEach((text, i) => {
                const item = document.createElement('div');
                item.className = 'de-ord-item';
                item.draggable = true;
                item.innerHTML = `
                    <span class="de-drag-handle">⠿</span>
                    <span class="de-ord-badge">${i + 1}</span>
                    <span>${text}</span>
                `;

                item.addEventListener('dragstart', e => {
                    dragSrc = i;
                    item.classList.add('dragging');
                    e.dataTransfer.effectAllowed = 'move';
                });
                item.addEventListener('dragend', () => {
                    item.classList.remove('dragging');
                    wrap.querySelectorAll('.de-ord-item').forEach(el => el.classList.remove('drag-over'));
                });
                item.addEventListener('dragover', e => {
                    e.preventDefault();
                    wrap.querySelectorAll('.de-ord-item').forEach(el => el.classList.remove('drag-over'));
                    item.classList.add('drag-over');
                });
                item.addEventListener('drop', e => {
                    e.preventDefault();
                    if (dragSrc === null || dragSrc === i) return;
                    const [moved] = this._answers[idx].splice(dragSrc, 1);
                    this._answers[idx].splice(i, 0, moved);
                    build();
                    this._enableNext();
                });

                wrap.appendChild(item);
            });
        };

        build();
        // El usuario puede aceptar el orden inicial sin arrastrar
        setTimeout(() => this._enableNext(), 0);
        return wrap;
    }

    // ─── Fin del examen ───────────────────────────────────────────────────────

    /**
     * Detiene el temporizador, limpia la sesión y muestra la pantalla
     * de procesamiento antes de mostrar los resultados tras el delay configurado.
     */
    _finishExam() {
        clearInterval(this._timerInterval);
        this._clearSession();
        this._el('de-progress').style.display = 'none';
        this._el('de-meta').style.display     = 'none';

        // Pantalla de procesamiento con animación
        this._el('de-body').innerHTML = `
            <div class="de-card de-processing">
                <div class="de-processing-spinner"></div>
                <p>${this._cfg.processingMessage}</p>
            </div>
        `;

        setTimeout(() => this._renderResults(), this._cfg.resultDelay);
    }

    // ─── Resultados ───────────────────────────────────────────────────────────

    /**
     * Calcula el puntaje y renderiza el reporte estilo PMI con revisión colapsable.
     * La tabla de resultados se genera dinámicamente para cada reportDimension.
     */
    _renderResults() {
        const total   = this._selected.length;
        let correct   = 0;

        // Calcular aciertos totales
        this._selected.forEach((q, i) => {
            if (this._isCorrect(q, i)) correct++;
        });

        const pct       = Math.round((correct / total) * 100);
        const band      = this._performanceBand(pct);
        const markerPct = this._markerPosition(pct, band);

        // Construir tabla por cada dimensión de reporte
        const dimTables = this._cfg.reportDimensions.map(key => {
            const byValue = {};
            this._selected.forEach((q, i) => {
                const val = q.tags[key];
                if (val === undefined) return;
                if (!byValue[val]) byValue[val] = { correct: 0, total: 0 };
                byValue[val].total++;
                if (this._isCorrect(q, i)) byValue[val].correct++;
            });

            const headers = Object.keys(byValue)
                .map(v => `<th>${this._label(key, v)}</th>`).join('');
            const values  = Object.entries(byValue)
                .map(([v, s]) => {
                    const dpct  = Math.round((s.correct / s.total) * 100);
                    const dband = this._performanceBand(dpct);
                    return `<td style="color:var(--accent);font-weight:600">${dband.label}</td>`;
                }).join('');

            const dimLabel = (this._cfg.labels[key] && this._cfg.labels[key]._label)
                || key.charAt(0).toUpperCase() + key.slice(1);

            return `
                <h3 style="font-size:.95rem;font-weight:600;margin:28px 0 8px">
                    Tu desempeño por ${dimLabel.toLowerCase()}:
                </h3>
                <table class="de-domain-table">
                    <thead><tr>${headers}</tr></thead>
                    <tbody><tr>${values}</tr></tbody>
                </table>`;
        }).join('');

        const card = document.createElement('div');
        card.className = 'de-card';

        card.innerHTML = `
            <div class="de-result-header">
                <h2>Tu resultado general: <span style="color:var(--accent)">${band.label}</span></h2>
                <p>Basado en ${correct} de ${total} preguntas correctas (${pct}%)</p>
            </div>

            <div class="de-perf-bar-wrap">
                <div class="de-perf-bar-track">
                    <div class="de-perf-segment de-perf-segment-ni"></div>
                    <div class="de-perf-segment de-perf-segment-bt"></div>
                    <div class="de-perf-segment de-perf-segment-t"></div>
                    <div class="de-perf-segment de-perf-segment-at"></div>
                </div>
                <div class="de-perf-marker-wrap">
                    <div class="de-perf-marker" style="left:${markerPct}%">
                        <span class="de-perf-marker-label">TÚ</span>
                        <div class="de-perf-marker-line"></div>
                    </div>
                </div>
                <div class="de-perf-labels">
                    <span class="${band.key === 'ni' ? 'active' : ''}">Necesita mejorar</span>
                    <span class="${band.key === 'bt' ? 'active' : ''}">Bajo el objetivo</span>
                    <span class="${band.key === 't'  ? 'active' : ''}">En el objetivo</span>
                    <span class="${band.key === 'at' ? 'active' : ''}">Sobre el objetivo</span>
                </div>
            </div>

            ${dimTables}

            <div class="de-result-actions">
                <button class="de-btn de-btn-ghost" id="de-btn-restart"
                    style="visibility:${this._cfg.showReset ? 'visible' : 'hidden'}">
                    Reiniciar
                </button>
                <button class="de-btn de-btn-primary" id="de-btn-review">Revisar respuestas</button>
            </div>

            <div class="de-review-panel" id="de-review-panel" style="display:none">
                <div class="de-review-panel-body open" id="de-review-body"></div>
            </div>
        `;

        this._el('de-body').innerHTML = '';
        this._el('de-body').appendChild(card);

        this._el('de-btn-restart').addEventListener('click', () => this._startExam());

        this._el('de-btn-review').addEventListener('click', () => {
            const panel = this._el('de-review-panel');
            const btn   = this._el('de-btn-review');
            const body  = this._el('de-review-body');

            if (panel.style.display === 'none') {
                panel.style.display = 'block';
                btn.textContent = 'Ocultar revisión';
                if (!body.hasChildNodes()) {
                    const list = document.createElement('div');
                    list.className = 'de-review-list';
                    this._selected.forEach((q, i) => this._renderReviewItem(list, q, i));
                    body.appendChild(list);
                }
                setTimeout(() => panel.scrollIntoView({ behavior: 'smooth', block: 'start' }), 50);
            } else {
                panel.style.display = 'none';
                btn.textContent = 'Revisar respuestas';
            }
        });
    }

    /**
     * Determina la banda de performance PMI según el porcentaje de aciertos.
     * Umbrales aproximados: NI < 40%, BT 40-59%, T 60-79%, AT >= 80%.
     * @param {number} pct - Porcentaje de aciertos (0-100)
     * @returns {{ key: string, label: string }}
     */
    _performanceBand(pct) {
        if (pct >= 80) return { key: 'at', label: 'Sobre el objetivo' };
        if (pct >= 60) return { key: 't',  label: 'En el objetivo' };
        if (pct >= 40) return { key: 'bt', label: 'Bajo el objetivo' };
        return             { key: 'ni', label: 'Necesita mejorar' };
    }

    /**
     * Calcula la posición del marcador en la barra de performance (0-100%).
     * Cada banda ocupa un cuarto de la barra (0-25, 25-50, 50-75, 75-100).
     * @param {number} pct - Porcentaje de aciertos
     * @param {{ key: string }} band - Banda calculada
     * @returns {number} Posición en porcentaje del ancho total
     */
    _markerPosition(pct, band) {
        const segments = { ni: [0, 40], bt: [40, 60], t: [60, 80], at: [80, 100] };
        const bars     = { ni: [0, 25], bt: [25, 50], t: [50, 75], at: [75, 100] };
        const [scoreMin, scoreMax] = segments[band.key];
        const [barMin,   barMax]   = bars[band.key];
        const ratio = (pct - scoreMin) / (scoreMax - scoreMin);
        return Math.min(barMin + ratio * (barMax - barMin), 98);
    }

    /**
     * Agrega la revisión de una pregunta al listado de resultados.
     * @param {HTMLElement} container
     * @param {Object} q
     * @param {number} idx
     */
    _renderReviewItem(container, q, idx) {
        const ok   = this._isCorrect(q, idx);
        const item = document.createElement('div');
        item.className = 'de-review-item';

        item.innerHTML = `
            <div class="de-review-item-header">
                <div class="de-review-item-badges">
                    <span class="de-badge">${idx + 1}. ${this._label('domain', q.tags.domain || '')}</span>
                    <span class="de-badge">${this._capitalize(q.tags.format.replace(/_/g, ' '))}</span>
                </div>
                <span class="de-status-badge ${ok ? 'ok' : 'err'}">${ok ? '✓ Correcta' : '✗ Incorrecta'}</span>
            </div>
            <p class="de-review-q">${q.question}</p>
        `;

        item.appendChild(this._renderReviewInput(q, idx));

        const rat = document.createElement('div');
        rat.className = 'de-rationale';
        rat.innerHTML = `<strong>Explicación</strong>${q.rationale}`;
        item.appendChild(rat);

        container.appendChild(item);
    }

    /**
     * Renderiza las opciones de una pregunta en modo solo lectura para la revisión.
     * @param {Object} q
     * @param {number} idx
     * @returns {HTMLElement}
     */
    _renderReviewInput(q, idx) {
        if (q.tags.format === 'opción_única' || q.tags.format === 'opción_múltiple') {
            return this._renderReviewOptions(q, idx);
        }
        if (q.tags.format === 'ordenamiento') {
            return this._renderReviewOrdering(q, idx);
        }
        return document.createElement('div');
    }

    /**
     * Opciones de revisión para formatos single/multiple.
     * @param {Object} q
     * @param {number} idx
     * @returns {HTMLElement}
     */
    _renderReviewOptions(q, idx) {
        const wrap    = document.createElement('div');
        wrap.className = 'de-options';
        const userAns = this._answers[idx] || [];
        const letters = ['A','B','C','D','E','F'];

        q.options.forEach((opt, i) => {
            const btn    = document.createElement('button');
            btn.disabled = true;
            const inUser  = userAns.includes(opt);
            const inRight = q.answer.includes(opt);

            let cls = 'de-opt';
            if (inUser && inRight) cls += ' review-correct';
            else if (inUser)       cls += ' review-wrong';
            else if (inRight)      cls += ' review-missed';

            btn.className = cls;
            btn.innerHTML = `<span class="de-opt-marker">${letters[i]}</span><span>${opt}</span>`;
            wrap.appendChild(btn);
        });

        return wrap;
    }

    /**
     * Lista de revisión para formato ordenamiento.
     * Muestra el orden del usuario y, para los incorrectos, cuál era el correcto.
     * @param {Object} q
     * @param {number} idx
     * @returns {HTMLElement}
     */
    _renderReviewOrdering(q, idx) {
        const wrap    = document.createElement('div');
        wrap.className = 'de-ordering';
        const userOrd = this._answers[idx] || [];

        userOrd.forEach((text, i) => {
            const isOk = text === q.answer[i];
            const item = document.createElement('div');
            item.className = `de-ord-item ${isOk ? 'review-correct' : 'review-wrong'}`;
            item.innerHTML = `
                <span class="de-drag-handle" style="color:var(--border)">⠿</span>
                <span class="de-ord-badge">${i + 1}</span>
                <span style="flex:1">${text}</span>
                ${!isOk
                    ? `<span style="font-size:.75rem;color:var(--muted);white-space:nowrap">
                           → correcto: ${q.answer[i]}
                       </span>`
                    : ''}
            `;
            wrap.appendChild(item);
        });

        return wrap;
    }

    // ─── Persistencia de sesión ───────────────────────────────────────────────

    /**
     * Guarda el estado actual del examen en sessionStorage.
     * Persiste las preguntas seleccionadas (por índice del banco), las respuestas,
     * el índice actual y los segundos restantes.
     */
    _saveSession() {
        try {
            // Guarda índice + opciones mezcladas de cada pregunta, ya que el shuffle
            // produce copias que no coinciden con los objetos originales del banco
            const snapshot = this._selected.map(q => ({
                idx:     this._cfg.questions.findIndex(orig => orig.question === q.question),
                options: q.options
            }));
            const state = {
                snapshot,
                answers:     this._answers,
                current:     this._current,
                secondsLeft: this._secondsLeft
            };
            sessionStorage.setItem(this._SESSION_KEY, JSON.stringify(state));
        } catch (_) {
            // sessionStorage no disponible: continuar sin persistencia
        }
    }

    /**
     * Intenta restaurar un examen en curso desde sessionStorage.
     * Si la sesión es válida, reanuda el examen desde donde se dejó.
     * @returns {boolean} true si se restauró una sesión, false si no había ninguna
     */
    _restoreSession() {
        try {
            const raw = sessionStorage.getItem(this._SESSION_KEY);
            if (!raw) return false;

            const state = JSON.parse(raw);

            // Validar estructura mínima
            if (!Array.isArray(state.snapshot) || !state.snapshot.length) {
                this._clearSession(); return false;
            }

            // Validar que todos los índices corresponden al banco actual
            const valid = state.snapshot.every(({ idx }) =>
                idx >= 0 && idx < this._cfg.questions.length
            );
            if (!valid) { this._clearSession(); return false; }

            // Reconstruir preguntas usando el índice del banco + las opciones mezcladas guardadas
            this._selected    = state.snapshot.map(({ idx, options }) =>
                ({ ...this._cfg.questions[idx], options })
            );
            this._answers     = state.answers;
            this._current     = state.current;
            this._secondsLeft = state.secondsLeft;

            // Restaurar la UI
            const size = this._selected.length;
            this._el('de-meta').style.display     = '';
            this._el('de-progress').style.display = '';
            this._el('de-q-total').textContent    = size;

            // Reanudar el temporizador desde los segundos que quedaban
            this._renderTimer();
            this._timerInterval = setInterval(() => {
                this._secondsLeft--;
                this._renderTimer();
                this._saveSession();
                if (this._secondsLeft <= 0) this._finishExam();
            }, 1000);

            this._renderQuestion();
            return true;
        } catch (_) {
            this._clearSession();
            return false;
        }
    }

    /**
     * Elimina el estado guardado en sessionStorage.
     */
    _clearSession() {
        try {
            sessionStorage.removeItem(this._SESSION_KEY);
        } catch (_) {
            // sessionStorage no disponible: ignorar
        }
    }

    // ─── Utilidades ───────────────────────────────────────────────────────────

    /**
     * Evalúa si la respuesta del usuario es correcta.
     * @param {Object} q
     * @param {number} idx
     * @returns {boolean}
     */
    _isCorrect(q, idx) {
        const ua = this._answers[idx];
        if (!ua) return false;
        if (q.tags.format === 'opción_única') {
            return ua[0] === q.answer[0];
        }
        if (q.tags.format === 'opción_múltiple') {
            return ua.length === q.answer.length && q.answer.every(a => ua.includes(a));
        }
        if (q.tags.format === 'ordenamiento') {
            return JSON.stringify(ua) === JSON.stringify(q.answer);
        }
        return false;
    }

    /**
     * Devuelve la etiqueta legible de un valor de tag.
     * Si no hay etiqueta configurada, capitaliza el valor crudo.
     * @param {string} key - Clave del tag (ej: 'domain')
     * @param {string} value - Valor del tag (ej: 'personas')
     * @returns {string}
     */
    _label(key, value) {
        return (this._cfg.labels[key] && this._cfg.labels[key][value]) || this._capitalize(value);
    }

    /**
     * Capitaliza la primera letra.
     * @param {string} s
     * @returns {string}
     */
    _capitalize(s) {
        return s.charAt(0).toUpperCase() + s.slice(1);
    }

    /**
     * Texto de ayuda según el formato de la pregunta.
     * @param {string} format
     * @returns {string}
     */
    _hintText(format) {
        return {
            opción_única:    'Selecciona una respuesta.',
            opción_múltiple: 'Selecciona todas las respuestas correctas.',
            ordenamiento:    'Arrastra los elementos para ordenarlos correctamente.'
        }[format] || '';
    }

    /**
     * Atajo para document.getElementById dentro del contenedor.
     * @param {string} id
     * @returns {HTMLElement}
     */
    _el(id) {
        return document.getElementById(id);
    }
}