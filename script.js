document.addEventListener('DOMContentLoaded', () => {
    const topics = [
        "Compreensão e interpretação de texto", "Tipologia e gêneros textuais", "Figuras de linguagem",
        "Significação de palavras e expressões", "Relações de sinonímia e de antonímia", "Ortografia",
        "Acentuação gráfica", "Uso da crase", "Fonética e Fonologia", "Morfologia", "Locuções verbais",
        "Funções do 'que' e do 'se'", "Formação de palavras", "Elementos de comunicação", "Sintaxe",
        "Concordância verbal e nominal", "Regência verbal e nominal", "Colocação pronominal",
        "Emprego dos sinais de pontuação", "Elementos de coesão", "Função textual dos vocábulos", "Variação linguística"
    ];

    // BANCO DE QUESTÕES - Adicione 10 questões para cada 'topicId'
    const questions = {
        0: [ // Compreensão e interpretação de texto
            {
                question: "A principal diferença entre compreensão e interpretação de texto é que a primeira se refere ao que está explícito, enquanto a segunda se refere ao que está implícito.",
                options: ["Verdadeiro", "Falso"],
                answer: "Verdadeiro"
            },
            // Adicione mais 9 questões aqui...
        ],
        1: [ // Tipologia e gêneros textuais
            {
                question: "Uma receita culinária é um exemplo de texto predominantemente:",
                options: ["Narrativo", "Descritivo", "Injuntivo", "Dissertativo"],
                answer: "Injuntivo"
            },
            // Adicione mais 9 questões aqui...
        ],
        2: [ // Figuras de linguagem
            {
                question: "Na frase 'Aquele homem é um leão', qual figura de linguagem está presente?",
                options: ["Metáfora", "Comparação", "Metonímia", "Hipérbole"],
                answer: "Metáfora"
            },
        ],
        3: [ // Significação de palavras e expressões
            {
                question: "O que significa a expressão 'acertar na mosca'?",
                options: ["Errar o alvo", "Acertar com precisão", "Matar um inseto", "Falar alto"],
                answer: "Acertar com precisão"
            },
        ],
        4: [ // Relações de sinonímia e de antonímia
            {
                question: "Qual palavra é antônimo de 'rápido'?",
                options: ["Veloz", "Ligeiro", "Lento", "Ágil"],
                answer: "Lento"
            },
        ],
        5: [ // Ortografia
            {
                question: "Qual a forma correta?",
                options: ["Exceção", "Excessão", "Eceção", "Essessão"],
                answer: "Exceção"
            },
        ],
        6: [ // Acentuação gráfica
            {
                question: "Qual palavra está acentuada incorretamente?",
                options: ["Jiló", "Paraíso", "Hífen", "Ítem"],
                answer: "Ítem"
            },
        ],
        7: [ // Uso da crase
            {
                question: "Assinale a opção em que o uso da crase está correto:",
                options: ["Fui à feira.", "Começou a chover.", "Ele se referiu a ela.", "O texto foi escrito a lápis."],
                answer: "Fui à feira."
            },
        ],
        8: [ // Fonética e Fonologia
            {
                question: "Na palavra 'carro', temos um:",
                options: ["Encontro consonantal", "Dígrafo", "Hiato", "Ditongo"],
                answer: "Dígrafo"
            },
        ],
        9: [ // Morfologia
            {
                question: "Na frase 'O menino feliz chegou', 'feliz' é um:",
                options: ["Substantivo", "Verbo", "Advérbio", "Adjetivo"],
                answer: "Adjetivo"
            },
        ],
        10: [ // Locuções verbais
            {
                question: "Em 'Eu vou estudar amanhã', a expressão 'vou estudar' é uma:",
                options: ["Locução adjetiva", "Locução adverbial", "Locução verbal", "Locução prepositiva"],
                answer: "Locução verbal"
            },
        ],
        11: [ // Funções do 'que' e do 'se'
            {
                question: "Na frase 'A casa que comprei é grande', o 'que' é um:",
                options: ["Pronome relativo", "Conjunção integrante", "Advérbio", "Preposição"],
                answer: "Pronome relativo"
            },
        ],
        12: [ // Formação de palavras
            {
                question: "A palavra 'infelizmente' é formada por:",
                options: ["Derivação sufixal", "Derivação prefixal", "Derivação parassintética", "Derivação prefixal e sufixal"],
                answer: "Derivação prefixal e sufixal"
            },
        ],
        13: [ // Elementos de comunicação
            {
                question: "Quem emite a mensagem no processo de comunicação é chamado de:",
                options: ["Receptor", "Canal", "Emissor", "Código"],
                answer: "Emissor"
            },
        ],
        14: [ // Sintaxe
            {
                question: "Na frase 'O sol ilumina a cidade', qual é o sujeito?",
                options: ["A cidade", "Ilumina", "O sol", "Ilumina a cidade"],
                answer: "O sol"
            },
        ],
        15: [ // Concordância verbal e nominal
            {
                question: "Assinale a frase com erro de concordância:",
                options: ["Fazem cinco anos que não o vejo.", "Havia muitos problemas na cidade.", "Compramos bastantes livros.", "Ela mesma consertou o carro."],
                answer: "Fazem cinco anos que não o vejo."
            },
        ],
        16: [ // Regência verbal e nominal
            {
                question: "O verbo 'assistir' no sentido de 'ver' exige a preposição:",
                options: ["a", "em", "de", "com"],
                answer: "a"
            },
        ],
        17: [ // Colocação pronominal
            {
                question: "Qual frase apresenta a colocação pronominal correta?",
                options: ["Me disseram a verdade.", "Nunca direi-te isso.", "Não se preocupe.", "Falarei-lhe amanhã."],
                answer: "Não se preocupe."
            },
        ],
        18: [ // Emprego dos sinais de pontuação
            {
                question: "Qual sinal de pontuação é usado para introduzir uma enumeração ou a fala de alguém?",
                options: ["Ponto final (.)", "Vírgula (,)", "Dois-pontos (:)", "Ponto e vírgula (;)"],
                answer: "Dois-pontos (:)"
            },
        ],
        19: [ // Elementos de coesão
            {
                question: "Em 'Maria é estudiosa. Ela tira boas notas', o pronome 'Ela' é um elemento de coesão:",
                options: ["Lexical por sinônimo", "Referencial anafórica", "Sequencial", "Referencial catafórica"],
                answer: "Referencial anafórica"
            },
        ],
        20: [ // Função textual dos vocábulos
            {
                question: "Na frase 'Infelizmente, o projeto não foi aprovado', o termo 'infelizmente' expressa:",
                options: ["Tempo", "Modo", "Opinião do enunciador", "Intensidade"],
                answer: "Opinião do enunciador"
            },
        ],
        21: [ // Variação linguística
            {
                question: "O uso da palavra 'mandioca', 'aipim' ou 'macaxeira' em diferentes regiões do Brasil é um exemplo de variação:",
                options: ["Histórica", "Social", "Situacional", "Geográfica"],
                answer: "Geográfica"
            },
        ],
    };

    const topicsContainer = document.getElementById('topics-container');
    const quizContainer = document.getElementById('quiz-container');
    const resultsContainer = document.getElementById('results-container');
    const quizTitle = document.getElementById('quiz-title');
    const questionText = document.getElementById('question-text');
    const optionsContainer = document.getElementById('options-container');
    const feedbackArea = document.getElementById('feedback-area');
    const submitBtn = document.getElementById('submit-btn');
    const nextBtn = document.getElementById('next-btn');
    const restartBtn = document.getElementById('restart-btn');

    let currentTopicId = -1;
    let currentQuestionIndex = 0;
    let score = 0;
    let selectedOption = null;

    function init() {
        createTopicAccordions();
    }

    function createTopicAccordions() {
        topics.forEach((topic, index) => {
            const button = document.createElement('button');
            button.className = 'accordion-btn';
            button.textContent = `${index + 1}. ${topic}`;
            
            const panel = document.createElement('div');
            panel.className = 'panel';
            
            const startBtn = document.createElement('button');
            startBtn.className = 'start-quiz-btn';
            startBtn.textContent = 'Iniciar Simulado';
            startBtn.addEventListener('click', () => startQuiz(index));
            
            panel.appendChild(startBtn);
            topicsContainer.appendChild(button);
            topicsContainer.appendChild(panel);

            button.addEventListener('click', function() {
                this.classList.toggle('active');
                const panel = this.nextElementSibling;
                if (panel.style.maxHeight) {
                    panel.style.maxHeight = null;
                } else {
                    panel.style.maxHeight = panel.scrollHeight + "px";
                }
            });
        });
    }

    function startQuiz(topicId) {
        currentTopicId = topicId;
        currentQuestionIndex = 0;
        score = 0;
        topicsContainer.classList.add('hidden');
        resultsContainer.classList.add('hidden');
        quizContainer.classList.remove('hidden');
        quizTitle.textContent = topics[currentTopicId];
        showQuestion();
    }

    function showQuestion() {
        resetState();
        const questionData = questions[currentTopicId][currentQuestionIndex];
        questionText.textContent = questionData.question;
        
        questionData.options.forEach(option => {
            const button = document.createElement('button');
            button.textContent = option;
            button.classList.add('option');
            button.addEventListener('click', () => selectOption(button));
            optionsContainer.appendChild(button);
        });
    }

    function resetState() {
        feedbackArea.innerHTML = '';
        nextBtn.classList.add('hidden');
        submitBtn.classList.remove('hidden');
        submitBtn.classList.remove('disabled');
        submitBtn.disabled = false;
        while (optionsContainer.firstChild) {
            optionsContainer.removeChild(optionsContainer.firstChild);
        }
        selectedOption = null;
    }
    
    function selectOption(optionButton) {
        // Deselect previous
        Array.from(optionsContainer.children).forEach(btn => {
            btn.classList.remove('selected');
        });
        // Select new
        optionButton.classList.add('selected');
        selectedOption = optionButton;
    }
    
    submitBtn.addEventListener('click', () => {
        if (!selectedOption) {
            alert('Por favor, selecione uma resposta.');
            return;
        }

        const answer = questions[currentTopicId][currentQuestionIndex].answer;
        if (selectedOption.textContent === answer) {
            score++;
            feedbackArea.innerHTML = `<p class="correct">Correto!</p>`;
        } else {
            feedbackArea.innerHTML = `<p class="incorrect">Incorreto! A resposta certa é: <strong>${answer}</strong></p>`;
        }

        submitBtn.classList.add('hidden');
        nextBtn.classList.remove('hidden');
        submitBtn.disabled = true;
    });

    nextBtn.addEventListener('click', () => {
        currentQuestionIndex++;
        if (currentQuestionIndex < questions[currentTopicId].length) {
            showQuestion();
        } else {
            showResults();
        }
    });

    restartBtn.addEventListener('click', () => {
        resultsContainer.classList.add('hidden');
        topicsContainer.classList.remove('hidden');
    });

    function showResults() {
        quizContainer.classList.add('hidden');
        resultsContainer.classList.remove('hidden');
        
        document.getElementById('score').textContent = score;
        const resultMessage = document.getElementById('result-message');
        const percentage = (score / questions[currentTopicId].length) * 100;
        
        if(percentage >= 70) {
            resultMessage.textContent = "Excelente desempenho! Continue assim.";
            resultMessage.style.color = 'var(--correct-color)';
        } else if (percentage >= 50) {
            resultMessage.textContent = "Bom resultado! Continue praticando para melhorar.";
            resultMessage.style.color = '#ffc107'; // a warm yellow
        } else {
            resultMessage.textContent = "Não desanime! A prática leva à perfeição. Tente novamente.";
            resultMessage.style.color = 'var(--incorrect-color)';
        }
    }

    init();
});