const chatbotResponses = {
  welcome: "Hello! I'm your virtual assistant. How can I help you today?",
  movieRecommendations: "Based on your preferences, I recommend: 'Inception', 'The Grand Budapest Hotel', and 'Parasite'.",
  ticketPurchase: "To purchase a ticket, please select your seat in the lobby and proceed to payment.",
  platformGuide: "You can navigate the theater using the virtual lobby. Feel free to ask for assistance at any time!",
  default: "I'm sorry, I don't understand that. Could you please rephrase?"
};

const messagesContainer = document.getElementById("messages");
const userInput = document.getElementById("user-input");
const sendBtn = document.getElementById("send-btn");
const chatbotPopup = document.getElementById("chatbot-popup");

function createMessage(content, isUser = true) {
  const messageElement = document.createElement("div");
  messageElement.className = "message " + (isUser ? "user-message" : "bot-message");
  messageElement.textContent = content;
  messagesContainer.appendChild(messageElement);
  messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

function handleUserInput() {
  const userMessage = userInput.value.trim();
  if (!userMessage) return;

  createMessage(userMessage, true);
  userInput.value = "";

  let botResponse;
  if (userMessage.toLowerCase().includes("recommend")) {
    botResponse = chatbotResponses.movieRecommendations;
  } else if (userMessage.toLowerCase().includes("buy") || userMessage.toLowerCase().includes("ticket")) {
    botResponse = chatbotResponses.ticketPurchase;
  } else if (userMessage.toLowerCase().includes("guide") || userMessage.toLowerCase().includes("navigate")) {
    botResponse = chatbotResponses.platformGuide;
  } else {
    botResponse = chatbotResponses.default;
  }

  setTimeout(() => createMessage(botResponse, false), 500);
}

sendBtn.addEventListener("click", handleUserInput);

userInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    handleUserInput();
  }
});

// Open chatbot when button is clicked
const chatbotButton = document.getElementById("chatbot-button");
chatbotButton.addEventListener("click", () => {
  chatbotPopup.style.display = chatbotPopup.style.display === "none" ? "block" : "none";
});

// Initial Bot Message
window.onload = () => {
  createMessage(chatbotResponses.welcome, false);
};
