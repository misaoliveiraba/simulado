document.addEventListener('DOMContentLoaded', () => {
    const topics = [
        "Compreensão e interpretação de texto", "Tipologia e gêneros textuais", "Figuras de linguagem",
        "Significação de palavras e expressões", "Relações de sinonímia e de antonímia", "Ortografia",
        "Acentuação gráfica", "Uso da crase", "Fonética e Fonologia", "Morfologia", "Locuções verbais",
        "Funções do 'que' e do 'se'", "Formação de palavras", "Elementos de comunicação", "Sintaxe",
        "Concordância verbal e nominal", "Regência verbal e nominal", "Colocação pronominal",
        "Emprego dos sinais de pontuação", "Elementos de coesão", "Função textual dos vocábulos", "Variação linguística"
    ];

    const questions = {
        0: [ // Compreensão e interpretação de texto
            { question: "Inferir uma informação significa:", options: ["Identificar o que está escrito no texto.", "Concluir algo a partir de pistas do texto.", "Resumir a ideia principal.", "Encontrar um sinônimo para uma palavra."], answer: "Concluir algo a partir de pistas do texto." },
            { question: "A ideia principal de um parágrafo é chamada de:", options: ["Argumento secundário", "Exemplo", "Tópico frasal", "Conclusão"], answer: "Tópico frasal" },
            { question: "O que é intertextualidade?", options: ["A relação entre o texto e seu autor.", "A relação entre diferentes textos.", "A estrutura interna de um texto.", "A correção gramatical do texto."], answer: "A relação entre diferentes textos." },
            { question: "Qual a finalidade de um texto dissertativo-argumentativo?", options: ["Contar uma história.", "Descrever um lugar.", "Instruir sobre um procedimento.", "Defender um ponto de vista com argumentos."], answer: "Defender um ponto de vista com argumentos." },
            { question: "O que significa 'ler nas entrelinhas'?", options: ["Ler em voz alta.", "Perceber o que não foi dito explicitamente.", "Corrigir os erros do texto.", "Decorar o conteúdo."], answer: "Perceber o que não foi dito explicitamente." },
            { question: "A ironia é um recurso que consiste em:", options: ["Exagerar uma ideia.", "Comparar dois elementos.", "Dizer o contrário do que se pensa.", "Suavizar uma expressão."], answer: "Dizer o contrário do que se pensa." },
            { question: "Um texto é considerado coeso quando:", options: ["Tem palavras difíceis.", "É muito longo e detalhado.", "Suas partes estão bem conectadas.", "O autor é famoso."], answer: "Suas partes estão bem conectadas." },
            { question: "A ambiguidade em um texto ocorre quando uma frase:", options: ["É muito curta.", "Usa linguagem formal.", "Tem mais de um sentido possível.", "Contém erros de ortografia."], answer: "Tem mais de um sentido possível." },
            { question: "O que é o contexto de produção de um texto?", options: ["O local onde o texto foi impresso.", "O conjunto de circunstâncias (época, autor, etc.) em que foi criado.", "O número de páginas do texto.", "O idioma em que foi escrito."], answer: "O conjunto de circunstâncias (época, autor, etc.) em que foi criado." },
            { question: "Para interpretar um texto corretamente, o leitor deve:", options: ["Apenas decodificar as palavras.", "Considerar seus conhecimentos prévios e as pistas do texto.", "Ignorar o título e o autor.", "Ler o texto apenas uma vez."], answer: "Considerar seus conhecimentos prévios e as pistas do texto." },
        ],
        1: [ // Tipologia e gêneros textuais
            { question: "Uma receita culinária é um exemplo de texto predominantemente:", options: ["Narrativo", "Descritivo", "Injuntivo", "Dissertativo"], answer: "Injuntivo" },
            { question: "O diário pessoal e a biografia são exemplos de gêneros textuais da tipologia:", options: ["Descritiva", "Expositiva", "Argumentativa", "Narrativa"], answer: "Narrativa" },
            { question: "A principal característica de um texto descritivo é:", options: ["Contar uma história com começo, meio e fim.", "Apresentar características de um ser, objeto ou lugar.", "Defender uma ideia com argumentos.", "Ensinar a realizar uma tarefa."], answer: "Apresentar características de um ser, objeto ou lugar." },
            { question: "Notícia de jornal, verbete de dicionário e artigo científico são gêneros da tipologia:", options: ["Narrativa", "Expositiva", "Injuntiva", "Descritiva"], answer: "Expositiva" },
            { question: "A fábula é um gênero textual que se caracteriza por:", options: ["Ser um texto longo e complexo.", "Apresentar animais como personagens com características humanas e uma moral no final.", "Não ter narrador.", "Ser escrito em versos."], answer: "Apresentar animais como personagens com características humanas e uma moral no final." },
            { question: "Manuais de instrução e propagandas pertencem a qual tipo textual?", options: ["Narrativo", "Descritivo", "Injuntivo", "Expositivo"], answer: "Injuntivo" },
            { question: "Qual a diferença entre tipologia e gênero textual?", options: ["Não há diferença, são sinônimos.", "Tipologia é a forma (narração, descrição), gênero é a aplicação social (conto, receita).", "Gênero é a forma, tipologia é a aplicação social.", "Tipologia refere-se a textos literários, e gênero a textos não literários."], answer: "Tipologia é a forma (narração, descrição), gênero é a aplicação social (conto, receita)." },
            { question: "Um editorial de jornal é um texto:", options: ["Narrativo, pois conta um fato.", "Descritivo, pois detalha um evento.", "Argumentativo, pois expressa a opinião do veículo de comunicação.", "Injuntivo, pois dá uma ordem ao leitor."], answer: "Argumentativo, pois expressa a opinião do veículo de comunicação." },
            { question: "A crônica é um gênero que geralmente aborda:", options: ["Acontecimentos históricos complexos.", "Assuntos científicos aprofundados.", "Fatos do cotidiano de forma leve e reflexiva.", "Instruções para montagem de aparelhos."], answer: "Fatos do cotidiano de forma leve e reflexiva." },
            { question: "O conto de fadas é um gênero textual do tipo:", options: ["Narrativo", "Descritivo", "Expositivo", "Argumentativo"], answer: "Narrativo" },
        ],
        2: [ // Figuras de linguagem
            { question: "Na frase 'Aquele homem é um leão', qual figura de linguagem está presente?", options: ["Metáfora", "Comparação", "Metonímia", "Hipérbole"], answer: "Metáfora" },
            { question: "'Rios de lágrimas corriam de seus olhos.' A frase contém um(a):", options: ["Eufemismo", "Ironia", "Hipérbole", "Antítese"], answer: "Hipérbole" },
            { question: "Qual figura de linguagem ocorre em 'O Sol beijava a face da montanha'?", options: ["Metonímia", "Sinestesia", "Gradação", "Prosopopeia (ou Personificação)"], answer: "Prosopopeia (ou Personificação)" },
            { question: "Em 'Ele entregou a alma a Deus', temos um exemplo de:", options: ["Ironia", "Eufemismo", "Pleonasmo", "Anáfora"], answer: "Eufemismo" },
            { question: "'O silêncio era ensurdecedor.' Esta frase é um exemplo de:", options: ["Paradoxo", "Hipérbole", "Metáfora", "Comparação"], answer: "Paradoxo" },
            { question: "A repetição da conjunção 'e' em 'E chora, e ri, e soluça, e grita' é chamada de:", options: ["Assíndeto", "Polissíndeto", "Anáfora", "Elipse"], answer: "Polissíndeto" },
            { question: "Qual frase contém uma metonímia?", options: ["Seus olhos são duas esmeraldas.", "Estou lendo Machado de Assis.", "Ele é forte como um touro.", "A vida é uma longa estrada."], answer: "Estou lendo Machado de Assis." },
            { question: "'O cheiro doce e verde da mata.' Nesta frase, ocorre:", options: ["Antítese", "Sinestesia", "Ironia", "Gradação"], answer: "Sinestesia" },
            { question: "A oposição de ideias em 'O amor é fogo que arde sem se ver; é ferida que dói e não se sente' caracteriza a:", options: ["Antítese", "Hipérbole", "Comparação", "Gradação"], answer: "Antítese" },
            { question: "'Vi com meus próprios olhos.' A repetição de ideia nesta frase é um:", options: ["Pleonasmo", "Eufemismo", "Paradoxo", "Elipse"], answer: "Pleonasmo" },
        ],
        3: [ // Significação de palavras e expressões
            { question: "O que significa a expressão 'acertar na mosca'?", options: ["Errar o alvo", "Acertar com precisão", "Matar um inseto", "Falar alto"], answer: "Acertar com precisão" },
            { question: "Uma palavra polissêmica é aquela que:", options: ["Tem apenas um significado.", "Tem vários significados.", "É escrita da mesma forma que outra, mas tem som diferente.", "Tem o som igual a outra, mas escrita diferente."], answer: "Tem vários significados." },
            { question: "Na frase 'O banco da praça está quebrado', a palavra 'banco' refere-se a:", options: ["Instituição financeira", "Assento", "Conjunto de dados", "Ato de bancar algo"], answer: "Assento" },
            { question: "Denotação é o sentido ________ da palavra.", options: ["Figurado", "Literal", "Poético", "Amplo"], answer: "Literal" },
            { question: "Conotação é o sentido ________ da palavra.", options: ["Original", "Do dicionário", "Figurado", "Exato"], answer: "Figurado" },
            { question: "A expressão 'pôr a mão no fogo' por alguém significa:", options: ["Queimar-se por ela", "Confiar plenamente nela", "Brigar com ela", "Aquecer as mãos"], answer: "Confiar plenamente nela" },
            { question: "O que é um neologismo?", options: ["Uma palavra antiga que caiu em desuso.", "Uma palavra estrangeira usada no idioma.", "Uma palavra ou expressão nova criada na língua.", "Um erro de gramática."], answer: "Uma palavra ou expressão nova criada na língua." },
            { question: "Em qual frase a palavra 'ponto' é usada em sentido conotativo?", options: ["Marquei um ponto no jogo.", "Este é o ponto final da discussão.", "Coloque um ponto no final da frase.", "Meu ponto de ônibus é o próximo."], answer: "Este é o ponto final da discussão." },
            { question: "O que significa 'chover no molhado'?", options: ["Falar ou fazer algo que é inútil ou repetitivo.", "Gostar muito de chuva.", "Causar uma inundação.", "Plantar em época de chuva."], answer: "Falar ou fazer algo que é inútil ou repetitivo." },
            { question: "A palavra 'vela' pode se referir a um objeto de cera para iluminar ou à parte de um barco. Isso a caracteriza como:", options: ["Parônima", "Homônima", "Antônima", "Sinônima"], answer: "Homônima" },
        ],
        4: [ // Relações de sinonímia e de antonímia
            { question: "Qual palavra é antônimo de 'rápido'?", options: ["Veloz", "Ligeiro", "Lento", "Ágil"], answer: "Lento" },
            { question: "Qual palavra é sinônimo de 'belo'?", options: ["Feio", "Formoso", "Horrível", "Comum"], answer: "Formoso" },
            { question: "O antônimo de 'mal' (advérbio) é:", options: ["Bom", "Bem", "Mau", "Ruim"], answer: "Bem" },
            { question: "O sinônimo de 'residência' é:", options: ["Comércio", "Prédio", "Moradia", "Escritório"], answer: "Moradia" },
            { question: "Assinale o par de palavras que NÃO são antônimas.", options: ["Ordem / Anarquia", "Amor / Ódio", "Economizar / Gastar", "Calmo / Sábio"], answer: "Calmo / Sábio" },
            { question: "'Extrovertido' e 'introvertido' são palavras:", options: ["Sinônimas", "Antônimas", "Parônimas", "Homônimas"], answer: "Antônimas" },
            { question: "Qual alternativa apresenta um sinônimo para a palavra 'problema'?", options: ["Solução", "Facilidade", "Questão", "Resposta"], answer: "Questão" },
            { question: "O antônimo de 'construir' é:", options: ["Edificar", "Erguer", "Demolir", "Reformar"], answer: "Demolir" },
            { question: "'Questionar' e 'indagar' são termos:", options: ["Sinônimos", "Antônimos", "Homófonos", "Parônimos"], answer: "Sinônimos" },
            { question: "O contrário de 'progresso' é:", options: ["Avanço", "Desenvolvimento", "Evolução", "Regresso"], answer: "Regresso" },
        ],
        5: [ // Ortografia
            { question: "Qual a forma correta?", options: ["Exceção", "Excessão", "Eceção", "Essessão"], answer: "Exceção" },
            { question: "A palavra 'paralização' está escrita corretamente?", options: ["Sim", "Não"], answer: "Não" },
            { question: "Complete a frase: 'Ele teve um _______ súbito.'", options: ["mal", "mau"], answer: "mal" },
            { question: "Qual das palavras abaixo é escrita com 'J'?", options: ["Jiló", "Gesto", "Gibi", "Gíria"], answer: "Jiló" },
            { question: "A forma correta do porquê para perguntas diretas é:", options: ["Porque", "Porquê", "Por que", "Por quê"], answer: "Por que" },
            { question: "Assinale a palavra escrita incorretamente:", options: ["Piscina", "Conciência", "Crescer", "Adolescente"], answer: "Conciência" },
            { question: "Complete: 'Ela não veio ______ estava doente.'", options: ["porque", "por que", "por quê", "porquê"], answer: "porque" },
            { question: "O uso de 'mas' e 'mais' está correto na frase:", options: ["Ele estudou mas não passou.", "Quero mas comida.", "Ela é a aluna mas inteligente.", "Ele correu mas rápido que eu."], answer: "Ele estudou mas não passou." },
        ],
        6: [ // Acentuação gráfica
            { question: "Qual palavra está acentuada incorretamente?", options: ["Jiló", "Paraíso", "Hífen", "Ítem"], answer: "Ítem" },
            { question: "Todas as proparoxítonas são acentuadas. Esta afirmação é:", options: ["Verdadeira", "Falsa"], answer: "Verdadeira" },
            { question: "Qual destas palavras NÃO deveria ter acento?", options: ["Herói", "Ideia", "Chapéu", "Anéis"], answer: "Ideia" },
            { question: "A palavra 'saúde' é acentuada por ser um:", options: ["Ditongo", "Hiato", "Dígrafo", "Encontro consonantal"], answer: "Hiato" },
            { question: "Assinale a alternativa em que todas as palavras são acentuadas pela mesma regra.", options: ["Sofá, café, jiló", "Lâmpada, ônibus, médico", "História, série, mágoa", "País, saúde, baú"], answer: "Lâmpada, ônibus, médico" },
            { question: "O acento diferencial é usado em 'pôr' (verbo) para diferenciá-lo de:", options: ["Por (preposição)", "Pode (verbo)", "Para (preposição)", "Pelo (contração)"], answer: "Por (preposição)" },
            { question: "Qual monossílabo tônico deve ser acentuado?", options: ["Fe", "Noz", "Pe", "Sol"], answer: "Pe" },
            { question: "A palavra 'juiz' não tem acento, mas 'juízes' tem. Por quê?", options: ["Porque 'juízes' é proparoxítona.", "Porque o 'i' tônico forma hiato com a vogal anterior e está seguido de 'z' no singular e 's' no plural.", "Porque 'juízes' é uma palavra maior.", "Porque a regra mudou."], answer: "Porque o 'i' tônico forma hiato com a vogal anterior e está seguido de 'z' no singular e 's' no plural." },
            { question: "Qual oxítona está acentuada incorretamente?", options: ["Urubu", "Parabéns", "Ninguém", "Vovô"], answer: "Urubu" },
            { question: "A palavra 'também' é acentuada por ser:", options: ["Proparoxítona", "Paroxítona terminada em 'em'", "Oxítona terminada em 'em'", "Monossílabo tônico"], answer: "Oxítona terminada em 'em'" },
        ],
        7: [ // Uso da crase
            { question: "Assinale a opção em que o uso da crase está correto:", options: ["Fui à feira.", "Começou a chover.", "Ele se referiu a ela.", "O texto foi escrito a lápis."], answer: "Fui à feira." },
            { question: "Em qual frase NÃO se deve usar a crase?", options: ["Refiro-me àquele aluno.", "Cheguei às duas horas.", "Voltarei a pé para casa.", "Assisti à peça de teatro."], answer: "Voltarei a pé para casa." },
            { question: "A crase é a fusão da preposição 'a' com o artigo definido feminino 'a'.", options: ["Verdadeiro", "Falso"], answer: "Verdadeiro" },
            { question: "Complete: 'Entreguei o livro ___ professora.'", options: ["a", "à", "á", "ah"], answer: "à" },
            { question: "Em 'Fomos a Roma', não há crase. Mas em 'Fomos à Roma dos Césares', há. Por quê?", options: ["Porque 'Roma' é uma cidade grande.", "Porque a palavra 'Roma' está especificada.", "Porque a segunda frase é mais longa.", "Porque é uma exceção à regra."], answer: "Porque a palavra 'Roma' está especificada." },
            { question: "Qual expressão com horas está incorreta?", options: ["A reunião será de 9h às 10h.", "Saio às 18h.", "Chegarei após as 20h.", "O evento vai de 8h a 12h."], answer: "A reunião será de 9h às 10h." },
            { question: "Não se usa crase antes de:", options: ["Palavras femininas", "Pronomes possessivos femininos", "Verbos no infinitivo", "Nomes de lugares"], answer: "Verbos no infinitivo" },
            { question: "Complete: 'Ele tem um estilo semelhante ___ de seu pai.'", options: ["a", "à", "ao", "a o"], answer: "ao" },
            { question: "O uso da crase é facultativo em qual caso?", options: ["Antes de nomes de cidades.", "Antes de pronomes possessivos femininos (minha, sua, nossa).", "Antes da palavra 'casa'.", "Antes de verbos."], answer: "Antes de pronomes possessivos femininos (minha, sua, nossa)." },
            { question: "Em 'Vou à Bahia', o uso da crase está correto?", options: ["Sim", "Não"], answer: "Sim" },
        ],
        8: [ // Fonética e Fonologia
            { question: "Na palavra 'carro', temos um:", options: ["Encontro consonantal", "Dígrafo", "Hiato", "Ditongo"], answer: "Dígrafo" },
            { question: "Quantos fonemas tem a palavra 'táxi'?", options: ["3", "4", "5", "6"], answer: "5" },
            { question: "Qual palavra contém um ditongo decrescente?", options: ["Pai", "Água", "Saúde", "Poeta"], answer: "Pai" },
            { question: "A palavra 'guerra' tem:", options: ["6 letras e 6 fonemas", "6 letras e 5 fonemas", "6 letras e 4 fonemas", "5 letras e 5 fonemas"], answer: "6 letras e 4 fonemas" },
            { question: "Qual das alternativas contém um hiato?", options: ["Cadeira", "País", "Noite", "Coração"], answer: "País" },
            { question: "Na palavra 'psicologia', as letras 'ps' formam um:", options: ["Dígrafo", "Encontro vocálico", "Encontro consonantal", "Hiato"], answer: "Encontro consonantal" },
            { question: "Fonema é:", options: ["A representação gráfica do som.", "A menor unidade sonora de uma língua.", "A sílaba mais forte da palavra.", "O encontro de duas vogais."], answer: "A menor unidade sonora de uma língua." },
            { question: "Em 'chapéu', o encontro vocálico é um:", options: ["Hiato", "Ditongo crescente", "Ditongo decrescente", "Tritongo"], answer: "Ditongo decrescente" },
            { question: "Qual palavra possui dígrafo e encontro consonantal?", options: ["Churrasco", "Trabalho", "Crescer", "Exceção"], answer: "Trabalho" },
            { question: "A palavra 'Uruguai' possui um:", options: ["Ditongo", "Hiato", "Tritongo", "Dígrafo"], answer: "Tritongo" },
        ],
        9: [ // Morfologia
            { question: "Na frase 'O menino feliz chegou', 'feliz' é um:", options: ["Substantivo", "Verbo", "Advérbio", "Adjetivo"], answer: "Adjetivo" },
            { question: "Qual das palavras abaixo é uma conjunção adversativa?", options: ["E", "Portanto", "Mas", "Porque"], answer: "Mas" },
            { question: "'Ele correu muito.' A palavra 'muito' é um:", options: ["Adjetivo", "Pronome", "Advérbio de intensidade", "Numeral"], answer: "Advérbio de intensidade" },
            { question: "As palavras 'eu', 'tu', 'ele' são classificadas como:", options: ["Artigos", "Pronomes pessoais do caso reto", "Pronomes oblíquos", "Conjunções"], answer: "Pronomes pessoais do caso reto" },
            { question: "Qual classe de palavras é invariável?", options: ["Substantivo", "Adjetivo", "Verbo", "Preposição"], answer: "Preposição" },
            { question: "Em 'Comprei três cadernos', 'três' é um:", options: ["Artigo", "Adjetivo", "Numeral", "Pronome"], answer: "Numeral" },
            { question: "A palavra que liga duas orações ou dois termos de mesma função é a:", options: ["Preposição", "Conjunção", "Interjeição", "Advérbio"], answer: "Conjunção" },
            { question: "'Nossa!', 'Ufa!', 'Ah!' são exemplos de:", options: ["Advérbios", "Conjunções", "Preposições", "Interjeições"], answer: "Interjeições" },
            { question: "Qual é o substantivo coletivo de 'lobos'?", options: ["Manada", "Cardume", "Alcateia", "Rebanho"], answer: "Alcateia" },
            { question: "Na frase 'O jantar está na mesa', a palavra 'jantar' funciona como:", options: ["Verbo", "Substantivo", "Adjetivo", "Advérbio"], answer: "Substantivo" },
        ],
        10: [ // Locuções verbais
            { question: "Em 'Eu vou estudar amanhã', a expressão 'vou estudar' é uma:", options: ["Locução adjetiva", "Locução adverbial", "Locução verbal", "Locução prepositiva"], answer: "Locução verbal" },
            { question: "Uma locução verbal é formada por:", options: ["Dois substantivos juntos", "Verbo auxiliar + verbo principal", "Um verbo e um advérbio", "Duas preposições"], answer: "Verbo auxiliar + verbo principal" },
            { question: "Na locução verbal, qual verbo é conjugado?", options: ["O verbo principal", "O verbo auxiliar", "Ambos", "Nenhum"], answer: "O verbo auxiliar" },
            { question: "Qual o tempo verbal expresso pela locução 'tenho estudado'?", options: ["Pretérito perfeito composto", "Futuro do presente composto", "Pretérito mais-que-perfeito composto", "Presente contínuo"], answer: "Pretérito perfeito composto" },
            { question: "A frase 'Ele estava saindo quando o telefone tocou' contém uma locução verbal que indica:", options: ["Ação concluída", "Ação futura", "Ação em andamento no passado", "Ação habitual"], answer: "Ação em andamento no passado" },
            { question: "Qual alternativa NÃO contém uma locução verbal?", options: ["Os alunos devem respeitar os professores.", "Preciso de sua ajuda agora.", "Ele anda falando sozinho.", "Eles foram convidados para a festa."], answer: "Preciso de sua ajuda agora." },
            { question: "Em 'A matéria foi explicada pelo professor', a locução verbal 'foi explicada' está na:", options: ["Voz ativa", "Voz passiva", "Voz reflexiva", "Voz neutra"], answer: "Voz passiva" },
            { question: "O verbo principal em uma locução verbal aparece em uma das formas nominais: infinitivo, gerúndio ou particípio.", options: ["Verdadeiro", "Falso"], answer: "Verdadeiro" },
            { question: "Qual locução verbal pode substituir o verbo 'estudarei'?", options: ["Estou estudando", "Ia estudar", "Vou estudar", "Tenho estudado"], answer: "Vou estudar" },
            { question: "Em 'Havia de chegar mais cedo', o verbo auxiliar é:", options: ["Havia", "De", "Chegar", "Mais"], answer: "Havia" },
        ],
        11: [ // Funções do 'que' e do 'se'
            { question: "Na frase 'A casa que comprei é grande', o 'que' é um:", options: ["Pronome relativo", "Conjunção integrante", "Advérbio", "Preposição"], answer: "Pronome relativo" },
            { question: "Em 'Espero que você venha', a palavra 'que' é uma:", options: ["Conjunção integrante", "Conjunção explicativa", "Pronome relativo", "Partícula expletiva"], answer: "Conjunção integrante" },
            { question: "Na frase 'Aluga-se esta casa', o 'se' é:", options: ["Pronome reflexivo", "Índice de indeterminação do sujeito", "Partícula apassivadora", "Conjunção condicional"], answer: "Partícula apassivadora" },
            { question: "Em 'Precisa-se de funcionários', a partícula 'se' funciona como:", options: ["Pronome apassivador", "Índice de indeterminação do sujeito", "Parte integrante do verbo", "Pronome reflexivo"], answer: "Índice de indeterminação do sujeito" },
            { question: "Em 'O menino quebrou-se todo', o 'se' é um pronome:", options: ["Reflexivo", "Recíproco", "Apassivador", "Expletivo"], answer: "Reflexivo" },
            { question: "'Ele se queixava de tudo.' Neste caso, o 'se' é:", options: ["Índice de indeterminação do sujeito", "Partícula apassivadora", "Parte integrante do verbo", "Pronome recíproco"], answer: "Parte integrante do verbo" },
            { question: "Na frase 'Que dia lindo!', o 'que' é um:", options: ["Pronome interrogativo", "Advérbio de intensidade", "Pronome relativo", "Conjunção"], answer: "Advérbio de intensidade" },
            { question: "Em 'Os jogadores abraçaram-se após o gol', o 'se' indica uma ação:", options: ["Reflexiva", "Passiva", "Recíproca", "Indeterminada"], answer: "Recíproca" },
            { question: "A palavra 'que' pode ser substituída por 'o qual' (e suas variações) quando for:", options: ["Conjunção integrante", "Pronome relativo", "Conjunção consecutiva", "Preposição"], answer: "Pronome relativo" },
            { question: "Em 'Se você estudar, passará na prova', o 'se' é uma:", options: ["Conjunção condicional", "Conjunção integrante", "Pronome reflexivo", "Partícula apassivadora"], answer: "Conjunção condicional" },
        ],
        12: [ // Formação de palavras
            { question: "A palavra 'infelizmente' é formada por:", options: ["Derivação sufixal", "Derivação prefixal", "Derivação parassintética", "Derivação prefixal e sufixal"], answer: "Derivação prefixal e sufixal" },
            { question: "O processo de formação da palavra 'girassol' é:", options: ["Aglutinação", "Justaposição", "Derivação regressiva", "Hibridismo"], answer: "Justaposição" },
            { question: "Qual palavra é formada por aglutinação?", options: ["Passatempo", "Beija-flor", "Embora (em boa hora)", "Guarda-chuva"], answer: "Embora (em boa hora)" },
            { question: "A palavra 'anoitecer' é um exemplo de derivação:", options: ["Prefixal", "Sufixal", "Regressiva", "Parassintética"], answer: "Parassintética" },
            { question: "O substantivo 'o choro', derivado do verbo 'chorar', é formado por derivação:", options: ["Imprópria", "Regressiva", "Prefixal", "Sufixal"], answer: "Regressiva" },
            { question: "O que é hibridismo?", options: ["A formação de uma palavra com elementos de idiomas diferentes.", "A junção de duas palavras sem perda de fonemas.", "A criação de uma palavra a partir da redução de outra.", "A mudança de classe gramatical de uma palavra."], answer: "A formação de uma palavra com elementos de idiomas diferentes." },
            { question: "A palavra 'foto' (de fotografia) é formada por:", options: ["Composição", "Derivação", "Abreviação", "Onomatopeia"], answer: "Abreviação" },
            { question: "Em 'O porquê de tudo isso é um mistério', a palavra 'porquê' sofreu qual processo de formação?", options: ["Derivação regressiva", "Derivação parassintética", "Composição por justaposição", "Derivação imprópria"], answer: "Derivação imprópria" },
            { question: "'Pontapé' é uma palavra formada por:", options: ["Justaposição", "Aglutinação", "Sufixação", "Prefixação"], answer: "Justaposição" },
            { question: "A palavra 'tique-taque' é um exemplo de:", options: ["Hibridismo", "Neologismo", "Onomatopeia", "Abreviação"], answer: "Onomatopeia" },
        ],
        13: [ // Elementos de comunicação
            { question: "Quem emite a mensagem no processo de comunicação é chamado de:", options: ["Receptor", "Canal", "Emissor", "Código"], answer: "Emissor" },
            { question: "O meio físico pelo qual a mensagem é transmitida é o:", options: ["Código", "Contexto", "Canal", "Referente"], answer: "Canal" },
            { question: "O conjunto de signos usado para elaborar a mensagem (ex: língua portuguesa) é o:", options: ["Emissor", "Receptor", "Canal", "Código"], answer: "Código" },
            { question: "A função da linguagem focada no emissor, expressando seus sentimentos e emoções, é a:", options: ["Função Poética", "Função Emotiva ou Expressiva", "Função Conativa", "Função Fática"], answer: "Função Emotiva ou Expressiva" },
            { question: "Em uma propaganda que diz 'Compre já!', predomina a função:", options: ["Referencial", "Metalinguística", "Apelativa ou Conativa", "Emotiva"], answer: "Apelativa ou Conativa" },
            { question: "Quando o foco da comunicação é testar o canal ('Alô?', 'Está me ouvindo?'), temos a função:", options: ["Fática", "Poética", "Referencial", "Emotiva"], answer: "Fática" },
            { question: "A função que usa o próprio código para explicar o código (ex: um dicionário) é a:", options: ["Poética", "Referencial", "Metalinguística", "Fática"], answer: "Metalinguística" },
            { question: "Em uma notícia de jornal que informa objetivamente sobre um fato, predomina a função:", options: ["Emotiva", "Apelativa", "Referencial ou Denotativa", "Poética"], answer: "Referencial ou Denotativa" },
            { question: "O elemento da comunicação que corresponde ao destinatário da mensagem é o:", options: ["Emissor", "Receptor", "Canal", "Código"], answer: "Receptor" },
            { question: "A função poética da linguagem tem como foco principal:", options: ["O referente", "O emissor", "A própria mensagem e sua elaboração", "O canal de comunicação"], answer: "A própria mensagem e sua elaboração" },
        ],
        14: [ // Sintaxe
            { question: "Na frase 'O sol ilumina a cidade', qual é o sujeito?", options: ["A cidade", "Ilumina", "O sol", "Ilumina a cidade"], answer: "O sol" },
            { question: "O que é um período composto?", options: ["Aquele que tem apenas uma oração.", "Aquele que tem mais de uma oração.", "Aquele que não tem verbo.", "Aquele que tem sujeito e predicado."], answer: "Aquele que tem mais de uma oração." },
            { question: "Em 'Choveu muito ontem', o sujeito da oração é:", options: ["Oculto (eu)", "Indeterminado", "Inexistente", "Composto"], answer: "Inexistente" },
            { question: "Na frase 'Eu comprei um livro', 'um livro' é o:", options: ["Sujeito", "Objeto direto", "Objeto indireto", "Predicativo do sujeito"], answer: "Objeto direto" },
            { question: "As orações coordenadas são sintaticamente independentes entre si.", options: ["Verdadeiro", "Falso"], answer: "Verdadeiro" },
            { question: "Em 'Gosto de pessoas que são sinceras', a segunda oração é:", options: ["Coordenada sindética aditiva", "Subordinada substantiva", "Subordinada adjetiva", "Coordenada assindética"], answer: "Subordinada adjetiva" },
            { question: "Qual o predicado da frase 'Os atletas pareciam cansados'?", options: ["Verbal", "Nominal", "Verbo-nominal", "Inexistente"], answer: "Verbo-nominal" },
            { question: "Na oração 'Preciso de sua ajuda', 'de sua ajuda' é o:", options: ["Objeto direto", "Complemento nominal", "Objeto indireto", "Agente da passiva"], answer: "Objeto indireto" },
            { question: "Um período simples possui apenas um verbo (ou uma locução verbal).", options: ["Verdadeiro", "Falso"], answer: "Verdadeiro" },
            { question: "Em 'Penso, logo existo', a segunda oração é coordenada sindética:", options: ["Aditiva", "Adversativa", "Alternativa", "Conclusiva"], answer: "Conclusiva" },
        ],
        15: [ // Concordância verbal e nominal
            { question: "Assinale a frase com erro de concordância:", options: ["Fazem cinco anos que não o vejo.", "Havia muitos problemas na cidade.", "Compramos bastantes livros.", "Ela mesma consertou o carro."], answer: "Fazem cinco anos que não o vejo." },
            { question: "Qual a forma correta: 'Aluga-se casas' ou 'Alugam-se casas'?", options: ["Aluga-se casas", "Alugam-se casas"], answer: "Alugam-se casas" },
            { question: "Complete: 'Um e outro aluno ______ a resposta.'", options: ["sabia", "sabiam"], answer: "sabia" },
            { question: "A concordância correta é:", options: ["É proibido entrada de estranhos.", "É proibida a entrada de estranhos.", "É proibido a entrada de estranhos.", "É proibida entrada de estranhos."], answer: "É proibida a entrada de estranhos." },
            { question: "O verbo 'haver' no sentido de 'existir' é:", options: ["Pessoal e variável", "Impessoal e invariável", "Pessoal e invariável", "Impessoal e variável"], answer: "Impessoal e invariável" },
            { question: "Assinale a frase correta quanto à concordância nominal:", options: ["Ela ficou meio preocupada.", "Comi meia pizza.", "Era meio-dia e meia.", "Todas estão corretas."], answer: "Todas estão corretas." },
            { question: "Complete: 'Seguem ______ os documentos.'", options: ["anexo", "anexos", "em anexo", "anexa"], answer: "anexos" },
            { question: "Na expressão 'Haja vista os problemas', a concordância está:", options: ["Correta", "Incorreta"], answer: "Correta" },
            { question: "Qual a concordância correta para o verbo 'ser' indicando horas?", options: ["Era duas horas da tarde.", "Eram duas horas da tarde.", "Foi duas horas da tarde.", "Haviam sido duas horas da tarde."], answer: "Eram duas horas da tarde." },
            { question: "Complete: 'Água é ______ para a saúde.'", options: ["bom", "boa", "bons", "boas"], answer: "bom" },
        ],
        16: [ // Regência verbal e nominal
            { question: "O verbo 'assistir' no sentido de 'ver' exige a preposição:", options: ["a", "em", "de", "com"], answer: "a" },
            { question: "Qual frase apresenta a regência verbal correta?", options: ["Eu lhe vi ontem na rua.", "Obdeça o regulamento.", "Aspiro o ar puro da manhã.", "Prefiro mais doce do que salgado."], answer: "Aspiro o ar puro da manhã." },
            { question: "O verbo 'implicar', no sentido de 'acarretar', 'resultar em', é:", options: ["Transitivo indireto", "Transitivo direto", "Intransitivo", "De ligação"], answer: "Transitivo direto" },
            { question: "Complete: 'Lembrei-____ de nosso compromisso.'", options: ["o", "lhe", "me", "se"], answer: "me" },
            { question: "A regência do verbo 'namorar' está correta em:", options: ["João namora com Maria.", "João namora Maria."], answer: "João namora Maria." },
            { question: "Assinale a regência nominal incorreta:", options: ["Tenho aversão por mentiras.", "Ele é apto para o cargo.", "Sua atitude é compatível ao grupo.", "Estou ansioso por notícias."], answer: "Sua atitude é compatível ao grupo." },
            { question: "O verbo 'esquecer', quando pronominal (esquecer-se), exige a preposição 'de'.", options: ["Verdadeiro", "Falso"], answer: "Verdadeiro" },
            { question: "Complete: 'O filme a que assisti é excelente.' A regência está:", options: ["Correta", "Incorreta"], answer: "Correta" },
            { question: "Qual a regência correta para o verbo 'pagar'?", options: ["Paguei o médico.", "Paguei ao médico.", "Paguei o salário ao médico.", "Todas estão corretas dependendo do complemento."], answer: "Todas estão corretas dependendo do complemento." },
            { question: "Complete: 'Tenho certeza ____ que ele virá.'", options: ["em", "a", "de", "com"], answer: "de" },
        ],
        17: [ // Colocação pronominal
            { question: "Qual frase apresenta a colocação pronominal correta?", options: ["Me disseram a verdade.", "Nunca direi-te isso.", "Não se preocupe.", "Falarei-lhe amanhã."], answer: "Não se preocupe." },
            { question: "A próclise é obrigatória quando há uma palavra atrativa antes do verbo, como um advérbio de negação.", options: ["Verdadeiro", "Falso"], answer: "Verdadeiro" },
            { question: "Em qual caso a ênclise (pronome depois do verbo) é a única opção correta?", options: ["Em frases negativas.", "No início de frases.", "Em frases com gerúndio.", "Em frases exclamativas."], answer: "No início de frases." },
            { question: "A mesóclise (pronome no meio do verbo) ocorre com verbos no:", options: ["Presente do indicativo ou no imperativo.", "Futuro do presente ou futuro do pretérito.", "Pretérito perfeito ou no gerúndio.", "Infinitivo ou no particípio."], answer: "Futuro do presente ou futuro do pretérito." },
            { question: "Assinale a alternativa incorreta quanto à colocação pronominal:", options: ["Em se tratando de negócios, ele é um expert.", "Deus te abençoe.", "Quem me chamou?", "Irei-te buscar às oito."], answer: "Irei-te buscar às oito." },
            { question: "A forma correta para 'Vou encontrar ela amanhã' na linguagem culta é:", options: ["Vou encontrar-lhe amanhã.", "Vou lhe encontrar amanhã.", "Vou encontrá-la amanhã.", "Vou a encontrar amanhã."], answer: "Vou encontrá-la amanhã." },
            { question: "Com verbos no infinitivo, a colocação do pronome é livre (próclise ou ênclise), desde que não haja palavra atrativa.", options: ["Verdadeiro", "Falso"], answer: "Verdadeiro" },
            { question: "Qual a forma correta de reescrever 'Darei a você um presente' usando pronome oblíquo?", options: ["Dar-te-ei um presente.", "Te darei um presente.", "Darei-te um presente.", "Darei um presente a você."], answer: "Dar-te-ei um presente." },
            { question: "A colocação pronominal está correta em:", options: ["Quando se fala em crise, todos se preocupam.", "Quando fala-se em crise, todos preocupam-se.", "Quando se fala em crise, todos preocupam-se.", "Quando fala-se em crise, todos se preocupam."], answer: "Quando se fala em crise, todos se preocupam." },
            { question: "'Não empreste-me seu livro' está incorreto. A forma correta é:", options: ["Não me empreste seu livro.", "Não empresta-me seu livro.", "Empreste-me não seu livro.", "Não seu livro empreste-me."], answer: "Não me empreste seu livro." },
        ],
        18: [ // Emprego dos sinais de pontuação
            { question: "Qual sinal de pontuação é usado para introduzir uma enumeração ou a fala de alguém?", options: ["Ponto final (.)", "Vírgula (,)", "Dois-pontos (:)", "Ponto e vírgula (;)"], answer: "Dois-pontos (:)" },
            { question: "A vírgula é usada para separar o vocativo. Ex: 'Maria, venha cá.'", options: ["Verdadeiro", "Falso"], answer: "Verdadeiro" },
            { question: "Em qual frase o uso da vírgula está incorreto?", options: ["O menino, que era muito esperto, resolveu o problema.", "Comprei pão, queijo, presunto e leite.", "O presidente, viajou para o exterior.", "Belo Horizonte, 25 de setembro de 2025."], answer: "O presidente, viajou para o exterior." },
            { question: "O ponto e vírgula (;) é usado para:", options: ["Indicar uma pausa mais longa que a vírgula e mais curta que o ponto.", "Separar itens de uma lista ou enumeração.", "Separar orações coordenadas que já possuem vírgulas internas.", "Todas as alternativas estão corretas."], answer: "Todas as alternativas estão corretas." },
            { question: "As aspas podem ser usadas para:", options: ["Indicar uma citação direta.", "Destacar uma palavra estrangeira ou gíria.", "Marcar ironia.", "Todas as alternativas estão corretas."], answer: "Todas as alternativas estão corretas." },
            { question: "As reticências (...) indicam:", options: ["Uma interrupção do pensamento ou uma citação incompleta.", "O final de uma frase declarativa.", "Uma pergunta direta.", "Uma ordem."], answer: "Uma interrupção do pensamento ou uma citação incompleta." },
            { question: "O travessão (—) pode ser usado para:", options: ["Indicar a fala de um personagem.", "Isolar um aposto explicativo.", "Substituir os parênteses.", "Todas as alternativas estão corretas."], answer: "Todas as alternativas estão corretas." },
            { question: "Qual pontuação deve ser usada no final da frase 'Que horror'?", options: ["Ponto de interrogação (?)", "Ponto de exclamação (!)", "Ponto final (.)", "Reticências (...)"], answer: "Ponto de exclamação (!)" },
            { question: "Nunca se deve separar por vírgula:", options: ["O sujeito do predicado.", "O vocativo do resto da frase.", "O aposto explicativo.", "Orações coordenadas."], answer: "O sujeito do predicado." },
            { question: "Os parênteses ( ) são usados para:", options: ["Introduzir uma fala.", "Isolar uma explicação ou comentário acessório.", "Indicar uma pausa longa.", "Finalizar uma frase."], answer: "Isolar uma explicação ou comentário acessório." },
        ],
        19: [ // Elementos de coesão
            { question: "Em 'Maria é estudiosa. Ela tira boas notas', o pronome 'Ela' é um elemento de coesão:", options: ["Lexical por sinônimo", "Referencial anafórica", "Sequencial", "Referencial catafórica"], answer: "Referencial anafórica" },
            { question: "A coesão referencial que antecipa um termo que ainda será mencionado é chamada de:", options: ["Anafórica", "Elipse", "Catafórica", "Reiteração"], answer: "Catafórica" },
            { question: "Qual dos conectivos abaixo expressa uma ideia de conclusão?", options: ["Mas", "Embora", "Portanto", "Ou"], answer: "Portanto" },
            { question: "A omissão de um termo que pode ser facilmente identificado pelo contexto é chamada de:", options: ["Elipse", "Repetição", "Sinonímia", "Anáfora"], answer: "Elipse" },
            { question: "Em 'O Brasil é um país rico; todavia, a desigualdade é grande', o conectivo 'todavia' estabelece uma relação de:", options: ["Adição", "Conclusão", "Explicação", "Adversidade"], answer: "Adversidade" },
            { question: "A substituição de 'Pedro Álvares Cabral' por 'o descobridor do Brasil' é um exemplo de coesão:", options: ["Referencial", "Lexical por sinônimo/expressão sinônima", "Sequencial", "Elíptica"], answer: "Lexical por sinônimo/expressão sinônima" },
            { question: "Conjunções, preposições e advérbios são importantes para a coesão:", options: ["Referencial", "Lexical", "Sequencial", "Gramatical"], answer: "Sequencial" },
            { question: "'Primeiramente... em segundo lugar... finalmente...' são marcadores de coesão que indicam:", options: ["Oposição", "Ordenação textual", "Causa e consequência", "Comparação"], answer: "Ordenação textual" },
            { question: "Na frase 'Só desejo isto: que você seja feliz', o pronome 'isto' estabelece uma coesão:", options: ["Anafórica", "Catafórica", "Por elipse", "Lexical"], answer: "Catafórica" },
            { question: "A repetição intencional de uma palavra ou expressão para dar ênfase é um recurso de coesão.", options: ["Verdadeiro", "Falso"], answer: "Verdadeiro" },
        ],
        20: [ // Função textual dos vocábulos
            { question: "Na frase 'Infelizmente, o projeto não foi aprovado', o termo 'infelizmente' expressa:", options: ["Tempo", "Modo", "Opinião do enunciador", "Intensidade"], answer: "Opinião do enunciador" },
            { question: "Em 'O homem honesto pagou a dívida', 'honesto' tem a função de:", options: ["Explicar uma característica inerente", "Restringir o sentido de 'homem'", "Indicar uma opinião", "Definir o sujeito"], answer: "Restringir o sentido de 'homem'" },
            { question: "A escolha de 'residir' em vez de 'morar' em um texto formal demonstra uma preocupação com:", options: ["A coesão textual", "A adequação vocabular ao gênero", "A regência verbal", "A pontuação"], answer: "A adequação vocabular ao gênero" },
            { question: "Em 'Este, sim, é um bom livro', a palavra 'sim' funciona como:", options: ["Advérbio de afirmação", "Partícula de realce", "Conjunção", "Substantivo"], answer: "Partícula de realce" },
            { question: "O uso de diminutivos como 'jeitinho' ou 'cafezinho' pode, dependendo do contexto, expressar:", options: ["Apenas tamanho reduzido", "Carinho, ironia ou depreciação", "Apenas afetividade", "Apenas crítica"], answer: "Carinho, ironia ou depreciação" },
            { question: "Em 'O mar, imenso mar, trazia perigos', a repetição de 'mar' serve para:", options: ["Corrigir um erro", "Enfatizar a ideia", "Confundir o leitor", "Iniciar uma nova frase"], answer: "Enfatizar a ideia" },
            { question: "Na frase 'Ele era um gigante de dois metros', a palavra 'gigante' é usada em sentido:", options: ["Literal", "Hiperbólico (exagerado)", "Irônico", "Técnico"], answer: "Hiperbólico (exagerado)" },
            { question: "A palavra 'aí' em 'E aí, tudo bem?' tem a função de:", options: ["Indicar lugar", "Estabelecer contato (função fática)", "Marcar tempo", "Expressar dúvida"], answer: "Estabelecer contato (função fática)" },
            { question: "Em 'Ele agiu conforme a lei', a expressão 'conforme a' introduz uma ideia de:", options: ["Causa", "Finalidade", "Conformidade", "Condição"], answer: "Conformidade" },
            { question: "O vocábulo 'apenas' na frase 'Ele comeu apenas a salada' tem a função de:", options: ["Afirmar", "Incluir", "Excluir/Limitar", "Intensificar"], answer: "Excluir/Limitar" },
        ],
        21: [ // Variação linguística
            { question: "O uso da palavra 'mandioca', 'aipim' ou 'macaxeira' em diferentes regiões do Brasil é um exemplo de variação:", options: ["Histórica", "Social", "Situacional", "Geográfica"], answer: "Geográfica" },
            { question: "A diferença entre a fala de um jovem e a de um idoso representa uma variação:", options: ["Geográfica (diatópica)", "Social/Etária (diastrática)", "Situacional (diafásica)", "Histórica (diacrônica)"], answer: "Social/Etária (diastrática)" },
            { question: "O uso de 'vossa mercê', que evoluiu para 'você', é um exemplo de variação:", options: ["Geográfica", "Social", "Situacional", "Histórica"], answer: "Histórica" },
            { question: "A escolha entre usar 'a gente vai' ou 'nós iremos' dependendo da formalidade da situação é uma variação:", options: ["Histórica", "Situacional (diafásica)", "Geográfica", "Social"], answer: "Situacional (diafásica)" },
            { question: "Gírias e jargões profissionais são exemplos de variação:", options: ["Social (diastrática)", "Histórica", "Geográfica", "Situacional"], answer: "Social (diastrática)" },
            { question: "O 'preconceito linguístico' consiste em:", options: ["Achar que uma variedade linguística é superior a outra.", "Estudar as diferentes variações da língua.", "Preferir a norma culta em todas as situações.", "Corrigir erros gramaticais."], answer: "Achar que uma variedade linguística é superior a outra." },
            { question: "A norma-padrão (ou norma culta) é:", options: ["A única variedade correta da língua.", "A variedade usada por pessoas sem estudo.", "A variedade de prestígio social, ensinada nas escolas.", "A variedade que não sofre mudanças."], answer: "A variedade de prestígio social, ensinada nas escolas." },
            { question: "Qual das alternativas representa uma marca de oralidade?", options: ["Uso de concordância verbal rigorosa", "Vocabulário rebuscado", "Uso de hesitações como 'né?', 'tipo assim...'", "Períodos longos e complexos"], answer: "Uso de hesitações como 'né?', 'tipo assim...'" },
            { question: "A língua é um sistema vivo e em constante mudança.", options: ["Verdadeiro", "Falso"], answer: "Verdadeiro" },
            { question: "A diferença de sotaques (ex: o 'r' retroflexo do interior de SP e o 'chiado' do RJ) é um tipo de variação:", options: ["Fonética, ligada à variação geográfica.", "Sintática, ligada à variação social.", "Lexical, ligada à variação histórica.", "Semântica, ligada à variação situacional."], answer: "Fonética, ligada à variação geográfica." },
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
                // Fecha outros painéis abertos
                document.querySelectorAll('.accordion-btn.active').forEach(activeBtn => {
                    if (activeBtn !== this) {
                        activeBtn.classList.remove('active');
                        activeBtn.nextElementSibling.style.maxHeight = null;
                    }
                });

                // Abre ou fecha o painel atual
                this.classList.toggle('active');
                const currentPanel = this.nextElementSibling;
                if (currentPanel.style.maxHeight) {
                    currentPanel.style.maxHeight = null;
                } else {
                    currentPanel.style.maxHeight = currentPanel.scrollHeight + "px";
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
        questionText.textContent = `Questão ${currentQuestionIndex + 1}: ${questionData.question}`;
        
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
        submitBtn.disabled = false;
        while (optionsContainer.firstChild) {
            optionsContainer.removeChild(optionsContainer.firstChild);
        }
        selectedOption = null;
    }
    
    function selectOption(optionButton) {
        if (submitBtn.disabled) return; // Não permite selecionar nova opção após enviar

        Array.from(optionsContainer.children).forEach(btn => {
            btn.classList.remove('selected');
        });
        
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
        const totalQuestions = questions[currentTopicId] ? questions[currentTopicId].length : 10;
        if (currentQuestionIndex < totalQuestions) {
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
        
        const totalQuestions = questions[currentTopicId] ? questions[currentTopicId].length : 10;
        document.getElementById('score').textContent = score;
        document.querySelector('#results-container p').innerHTML = `Você acertou <span id="score">${score}</span> de ${totalQuestions} questões.`;
        const resultMessage = document.getElementById('result-message');
        const percentage = (score / totalQuestions) * 100;
        
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