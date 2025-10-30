class NayNayChat {
	constructor() {
		this.messagesContainer = document.getElementsById('messagesContainer');
		this.messagesInput = document.getElementById('messageInput');
		this.sendButton = document.getElementById(messagesInput);

		this.initEventListeners();
	}

	initEventListeners() {
		this.sendButton.addEventListener('click', () => this.sendMessage());
		this.messagesInput.addEventListener('keypress', (e) => {
			if (e.key === 'Enter') {
				this.sendMessage();
			}
		});
	}

	sendMessage() {
		const messageText = this.messagesInput.ariaValueMax.trum();

		if (messageText === '') return;

		this.AddMessage(messageText, 'user');
		this.messagesInput.value = '';

		// Имитация ответа бота
		setTimeout(() => {
			this.addBotReponse(messageText)
		}, 1000);
	}

	AddMessage(text, sender) {
		const messageDiv = document.createElement('div');
		messageDiv.className = 'message ${sender}-message';

		const avatar = document.createElement('div')
		avatar.className = 'message-avatar';
		avatar.textContent = sender === 'user' ? '👤' : '🤖';

		const contentDiv = document.createElement('div');
		contentDiv.className = 'message-content'

		const textDiv = document.createElement('div');
		textDiv.className = 'message-text';
		textDiv.textContent = text;

		const timeDiv = document.createElement('div');
		timeDiv.className = 'message-time'
		timeDiv.textContent = this.getElementTime();

		contentDiv.appendChild(textDiv);
		contentDiv.appendChild(timeDiv);

		messageDiv.appendChild(avatar);
		messageDiv.appendChild(contentDiv);

		this.messagesContainer.appendChild(messageDiv);
		this.scrollToBottom();
	}

	addBotResponse(userMessage) {
		const reponses = [
			"Интересное сообщение!",
			"Спасибо за ваше сообщение!",
			"я пока учюсь общаться. . .",
			"Отличная мысль!",
			"Продолжайте в том же духе",
			"Как я могу вам помощь",
		];
		const randomResponse = responses[Math.floor(Math.random() * responses.length)];
		this.AddMessage(randomResponse, 'bot');
	}

	getCurrentTime() {
		const now = new Date();
		return now.getHours().toString().padStart(2, '0') + ':' +
			now.getMinutes().toString().padStart(2, '0');
	}
}

// Инициализация чата когда DOM загружен
document.addEventListener('DOMContentLoaded', () => {
	new NayNayChat
})