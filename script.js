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

// Função para gerar uma resposta simulada do bot
function getBotResponse(userMessage) {
    const lowerCaseMessage = userMessage.toLowerCase();
    if (lowerCaseMessage.includes('oi') || lowerCaseMessage.includes('olá')) {
        return "Olá! É um prazer te ver aqui. Como posso te ajudar hoje?";
    } else if (lowerCaseMessage.includes('bem') || lowerCaseMessage.includes('ótimo') || lowerCaseMessage.includes('feliz')) {
        return "Que bom que você está bem! É sempre bom compartilhar os bons momentos. Tem algo específico que gostaria de conversar?";
    } else if (lowerCaseMessage.includes('mal') || lowerCaseMessage.includes('triste') || lowerCaseMessage.includes('ansioso') || lowerCaseMessage.includes('ansiosa') || lowerCaseMessage.includes('nervoso') || lowerCaseMessage.includes('nervosa') || lowerCaseMessage.includes('confuso') || lowerCaseMessage.includes('confusa') || lowerCaseMessage.includes('frustado') || lowerCaseMessage.includes('frustada') || lowerCaseMessage.includes('cansado')) {
        return "Sinto muito que você esteja se sentindo assim. É importante reconhecer esses sentimentos. Você quer falar mais sobre o que está te deixando assim?";
    } else if (lowerCaseMessage.includes('obrigado') || lowerCaseMessage.includes('ajudou')) {
        return "Fico feliz em poder conversar com você. Lembre-se, este é um espaço seguro. Se precisar, estarei aqui.";
    } else if (lowerCaseMessage.includes('sozinho') || lowerCaseMessage.includes('isolado')) {
        return "Você não está sozinho. Estou aqui com você, e podemos conversar o quanto quiser.";
    } else if (lowerCaseMessage.includes('medo') || lowerCaseMessage.includes('preocupado')) {
        return "É normal sentir medo às vezes. Quer me contar o que está te preocupando?";
    } else if (lowerCaseMessage.includes('raiva') || lowerCaseMessage.includes('irritado')) {
        return "Sentir raiva é humano. Se quiser, podemos explorar juntos o que está por trás desse sentimento.";
    } else if (lowerCaseMessage.includes('chorei') || lowerCaseMessage.includes('lágrimas')) {
        return "Chorar é uma forma de liberar o que está dentro. Estou aqui para te ouvir com carinho.";
    } else if (lowerCaseMessage.includes('não aguento') || lowerCaseMessage.includes('desesperado')) {
        return "Sinto muito que esteja se sentindo assim. Vamos respirar juntos. Quer conversar sobre o que está te sobrecarregando?";
    } else if (lowerCaseMessage.includes('ajuda') || lowerCaseMessage.includes('preciso de apoio')) {
        return "Claro, estou aqui para te apoiar. Me diga mais sobre o que você está passando.";
    } else if (lowerCaseMessage.includes('calma') || lowerCaseMessage.includes('respirar')) {
        return "Vamos respirar juntos. Inspire profundamente... segure... e expire devagar. Está tudo bem.";
    } else if (lowerCaseMessage.includes('suicídio') || lowerCaseMessage.includes('morrer') || lowerCaseMessage.includes('acabar com tudo') || lowerCaseMessage.includes('fim da vida')) {
        return "Sinto muito que você esteja passando por isso. Sua vida tem valor e você merece apoio. Por favor, entre em contato com o CVV (Centro de Valorização da Vida) no 188. Eles estão disponíveis 24h para ouvir você com carinho e respeito.";
    } else if (lowerCaseMessage.includes('autoajuda') || lowerCaseMessage.includes('técnicas') || lowerCaseMessage.includes('exercícios')) {
        return "Tenho algumas sugestões que podem ajudar: respiração profunda (4s inspirar, 4s segurar, 4s expirar), caminhada curta, ouvir música calma, ou escrever sobre seus sentimentos. Deseja que eu te guie por alguma dessas?";
    } else if (lowerCaseMessage.includes('diário') || lowerCaseMessage.includes('registrar') || lowerCaseMessage.includes('sentimentos')) {
        return "Você sabia que temos um Diário de Emoções no nosso site? É um espaço seguro para registrar como você está se sentindo. Deseja que eu te leve até lá?";
    } else if (lowerCaseMessage.includes('gratidão') || lowerCaseMessage.includes('agradecer')) {
        return "Praticar gratidão pode ser muito poderoso. Que tal compartilhar algo pelo qual você é grato hoje?";
    } else if (lowerCaseMessage.includes('esperança') || lowerCaseMessage.includes('força')) {
        return "Mesmo nos momentos difíceis, lembre-se que tudo passa. Cada dia é uma nova oportunidade. Você é mais forte do que imagina.";
    } else if (lowerCaseMessage.includes('meditação') || lowerCaseMessage.includes('mindfulness')) {
        return "A meditação pode trazer mais calma e clareza. Posso te guiar por uma meditação curta, ou posso sugerir apps e recursos úteis.";
    } else if (lowerCaseMessage.includes('sono') || lowerCaseMessage.includes('dormir') || lowerCaseMessage.includes('descansar')) {
        return "Um bom sono é essencial para a saúde mental. Algumas dicas: mantenha o quarto escuro e fresco, evite telas antes de dormir, e crie uma rotina tranquila antes de dormir.";
    } else if (lowerCaseMessage.includes('exercício') || lowerCaseMessage.includes('atividade física') || lowerCaseMessage.includes('movimento')) {
        return "A atividade física é uma grande aliada da saúde mental. Mesmo uma caminhada curta pode fazer diferença. Quer ideias de exercícios leves?";
    } else if (lowerCaseMessage.includes('respirar') || lowerCaseMessage.includes('respiração') || lowerCaseMessage.includes('respiração guiada') || lowerCaseMessage.includes('exercício de respiração')) {
        return "Vamos fazer uma respiração guiada juntos? Inspire profundamente por 4 segundos... segure por 4 segundos... e expire lentamente por 4 segundos. Vamos repetir isso mais algumas vezes. Como está se sentindo agora?";
    } else {
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