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
    } else if (lowerCaseMessage.includes('mal') || lowerCaseMessage.includes('triste') || lowerCaseMessage.includes('ansioso') || lowerCaseMessage.includes('cansado')) {
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
            "Me conte mais, estou aqui para acolher você."
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