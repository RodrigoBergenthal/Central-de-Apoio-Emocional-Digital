// script.js

// Função para adicionar uma mensagem ao chatbox
function addMessage(sender, text) {
    const chatbox = document.getElementById('chatbox');
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message');
    messageDiv.classList.add(sender + '-message'); // 'bot-message' ou 'user-message'
    messageDiv.textContent = text;
    chatbox.appendChild(messageDiv);
    chatbox.scrollTop = chatbox.scrollHeight; // Rola para o final
}

// Função para categorizar palavras-chave
function categorizeMessage(message) {
    const lowerCaseMessage = message.toLowerCase();

    // Palavras-chave para diferentes categorias
    const categories = {
        'saudacoes': ['oi', 'olá', 'ola', 'oi tudo bem', 'ola tudo bem'],
        'bem-estar': ['bem', 'ótimo', 'otimo', 'feliz', 'contente', 'maravilhoso', 'bom'],
        'mal-estar': ['mal', 'triste', 'ansioso', 'ansiosa', 'nervoso', 'nervosa', 'confuso', 'confusa',
                      'frustado', 'frustada', 'cansado', 'cansada', 'deprimido', 'deprimida'],
        'agradecimento': ['obrigado', 'obrigada', 'ajudou', 'ajudou muito', 'grato', 'grata'],
        'solidao': ['sozinho', 'isolado', 'solidão', 'sozinha', 'afastado', 'afastada'],
        'medo': ['medo', 'preocupado', 'preocupada', 'ansiedade', 'ansiedade'],
        'raiva': ['raiva', 'irritado', 'irritada', 'furioso', 'furiosa', 'com raiva'],
        'choro': ['chorei', 'lágrimas', 'chorando', 'choro'],
        'crise': ['não aguento', 'desesperado', 'desesperada', 'colapso', 'tudo demais'],
        'ajuda': ['ajuda', 'preciso de apoio', 'socorro', 'me ajude', 'preciso de ajuda'],
        'respiracao': ['calma', 'respirar', 'respiração', 'respiracao'],
        'emergencia': ['suicídio', 'suicidio', 'morrer', 'acabar com tudo', 'fim da vida', 'me matar', 'matar-se', 'acabar com a vida'],
        'autoajuda': ['autoajuda', 'técnicas', 'tecnica', 'exercícios', 'exercicios'],
        'diario': ['diário', 'diario', 'registrar', 'sentimentos', 'emocoes', 'emotions'],
        'localizacao': ['localização de ajuda', 'localizacao de ajuda', 'clínicas', 'clinicas', 'psicologia',
                        'psicólogo', 'psicologo', 'psicóloga', 'psicologa', 'terapia', 'terapeuta', 'saúde mental', 'saude mental'],
        'gratidao': ['gratidão', 'gratidao', 'agradecer', 'reconhecimento'],
        'esperanca': ['esperança', 'esperanca', 'força', 'forca', 'coragem', 'esperança'],
        'meditacao': ['meditação', 'meditacao', 'mindfulness', 'atenção plena', 'atencao plena'],
        'sono': ['sono', 'dormir', 'descansar', 'dormindo', 'noite'],
        'exercicio': ['exercício', 'exercicio', 'atividade física', 'atividade fisica', 'movimento', 'caminhar'],
        'respiracao_guiada': ['respirar', 'respiração', 'respiracao', 'respiração guiada', 'exercício de respiração', 'exercicio de respiracao']
    };

    // Verifica cada categoria
    for (const [category, keywords] of Object.entries(categories)) {
        if (keywords.some(keyword => lowerCaseMessage.includes(keyword))) {
            return category;
        }
    }

    // Retorna 'outros' se nenhuma categoria for encontrada
    return 'outros';
}

// Função para gerar uma resposta simulada do bot
function getBotResponse(userMessage) {
    const category = categorizeMessage(userMessage);

    switch(category) {
        case 'saudacoes':
            return "Olá! É um prazer te ver aqui. Como posso te ajudar hoje?";
        case 'bem-estar':
            return "Que bom que você está bem! É sempre bom compartilhar os bons momentos. Tem algo específico que gostaria de conversar?";
        case 'mal-estar':
            return "Sinto muito que você esteja se sentindo assim. É importante reconhecer esses sentimentos. Você quer falar mais sobre o que está te deixando assim?";
        case 'agradecimento':
            return "Fico feliz em poder conversar com você. Lembre-se, este é um espaço seguro. Se precisar, estarei aqui.";
        case 'solidao':
            return "Você não está sozinho. Estou aqui com você, e podemos conversar o quanto quiser.";
        case 'medo':
            return "É normal sentir medo às vezes. Quer me contar o que está te preocupando?";
        case 'raiva':
            return "Sentir raiva é humano. Se quiser, podemos explorar juntos o que está por trás desse sentimento.";
        case 'choro':
            return "Chorar é uma forma de liberar o que está dentro. Estou aqui para te ouvir com carinho.";
        case 'crise':
            return "Sinto muito que esteja se sentindo assim. Vamos respirar juntos. Quer conversar sobre o que está te sobrecarregando?";
        case 'ajuda':
            return "Claro, estou aqui para te apoiar. Me diga mais sobre o que você está passando.";
        case 'respiracao':
            return "Vamos respirar juntos. Inspire profundamente... segure... e expire devagar. Está tudo bem.";
        case 'emergencia':
            return "Sinto muito que você esteja passando por isso. Sua vida tem valor e você merece apoio. Por favor, entre em contato com o CVV (Centro de Valorização da Vida) no 188. Eles estão disponíveis 24h para ouvir você com carinho e respeito. <a href='tel:188' style='color:#4a6fa5; font-weight:bold;'>Ligar para 188</a>";
        case 'autoajuda':
            return "Tenho algumas sugestões que podem ajudar: respiração profunda (4s inspirar, 4s segurar, 4s expirar), caminhada curta, ouvir música calma, ou escrever sobre seus sentimentos. Deseja que eu te guie por alguma dessas?";
        case 'diario':
            return "Você sabia que temos um Diário de Emoções no nosso site? É um espaço seguro para registrar como você está se sentindo. Deseja que eu te leve até lá?";
        case 'localizacao':
            return "Se você está buscando apoio psicológico profissional, temos uma lista de clínicas e serviços de psicologia gratuitos ou de baixo custo em Porto Alegre. Deseja que eu te encaminhe para a página de localização de ajuda?";
        case 'gratidao':
            return "Praticar gratidão pode ser muito poderoso. Que tal compartilhar algo pelo qual você é grato hoje?";
        case 'esperanca':
            return "Mesmo nos momentos difíceis, lembre-se que tudo passa. Cada dia é uma nova oportunidade. Você é mais forte do que imagina.";
        case 'meditacao':
            return "A meditação pode trazer mais calma e clareza. Posso te guiar por uma meditação curta, ou posso sugerir apps e recursos úteis.";
        case 'sono':
            return "Um bom sono é essencial para a saúde mental. Algumas dicas: mantenha o quarto escuro e fresco, evite telas antes de dormir, e crie uma rotina tranquila antes de dormir.";
        case 'exercicio':
            return "A atividade física é uma grande aliada da saúde mental. Mesmo uma caminhada curta pode fazer diferença. Quer ideias de exercícios leves?";
        case 'respiracao_guiada':
            return "Vamos fazer uma respiração guiada juntos? Inspire profundamente por 4 segundos... segure por 4 segundos... e expire lentamente por 4 segundos. Vamos repetir isso mais algumas vezes. Como está se sentindo agora?";
        default:
            const responses = [
                "Entendo. Continue compartilhando, estou aqui para ouvir.",
                "Obrigado por confiar e compartilhar isso comigo.",
                "Isso parece importante para você. O que mais você gostaria de dizer?",
                "Sua sensação é válida. Como você se sente em relação a isso?",
                "Às vezes, falar sobre o que sentimos já é um grande alívio.",
                "Estou aqui com você. Vamos passar por isso juntos.",
                "Você merece cuidado e atenção. Estou ouvindo.",
                "Se quiser, podemos pensar juntos em formas de lidar com isso.",
                "Você está fazendo o melhor que pode. Isso já é muito.",
                "Me conte mais, estou aqui para acolher você.",
                "Sua jornada importa. Cada passo, por menor que seja, é significativo.",
                "Você não precisa passar por isso sozinho(a). Estou aqui para apoiar."
            ];
            return responses[Math.floor(Math.random() * responses.length)];
    }
}

// Evento para o botão de enviar
document.getElementById('sendBtn').addEventListener('click', function() {
    const userInput = document.getElementById('userInput');
    const message = userInput.value.trim();

    if (message) {
        // Adiciona a mensagem do usuário
        addMessage('user', message);
        userInput.value = ''; // Limpa o input

        // Simula um pequeno atraso para a resposta do bot, como em uma conversa real
        setTimeout(() => {
            const botResponse = getBotResponse(message);
            addMessage('bot', botResponse);
        }, 500);
    }
});

// Permite enviar a mensagem pressionando Enter
document.getElementById('userInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        document.getElementById('sendBtn').click();
    }
});