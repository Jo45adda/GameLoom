// Chatbot functionality
document.getElementById('chat-send').addEventListener('click', function() {
    const userInput = document.getElementById('chat-input').value;
    const chatWindow = document.getElementById('chat-window');
    
    if (userInput) {
        const userMessage = document.createElement('p');
        userMessage.textContent = "Vous : " + userInput;
        chatWindow.appendChild(userMessage);

        // Predefined response
        const botMessage = document.createElement('p');
        if (userInput.toLowerCase().includes('inscription')) {
            botMessage.textContent = "Bot : Vous pouvez vous inscrire en cliquant sur le bouton Rejoignez-nous !";
        } else {
            botMessage.textContent = "Bot : Je suis désolé, je ne comprends pas votre question.";
        }
        chatWindow.appendChild(botMessage);
        
        // Clear input
        document.getElementById('chat-input').value = '';
        chatWindow.scrollTop = chatWindow.scrollHeight;
    }
});

// Form submission event
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Merci pour votre message ! Nous vous contacterons bientôt.');
});

document.getElementById("toggle-chat").addEventListener("click", function() {
    var chatbot = document.getElementById("chatbot");
    var chatBody = document.getElementById("chatbot-body");
    
    // Basculer la classe "open" pour ouvrir ou fermer
    chatbot.classList.toggle("open");
    chatBody.classList.toggle("hidden");
});

// Toggle the visibility of the signup form when "Rejoignez-nous" is clicked
document.getElementById('join-us-btn').addEventListener('click', function() {
    var formOverlay = document.getElementById('signup-form-overlay');
    formOverlay.style.display = formOverlay.style.display === 'block' ? 'none' : 'block';
});

// Close the form when the close button is clicked
document.getElementById('close-form').addEventListener('click', function() {
    document.getElementById('signup-form-overlay').style.display = 'none';
});

// Google sign-in functionality (Placeholder)
function onGoogleSignIn() {
    console.log("Google sign-in triggered");
    // Add Google API integration here
}

// Facebook sign-in functionality (Placeholder)
function onFacebookSignIn() {
    console.log("Facebook sign-in triggered");
    // Add Facebook API integration here
}

// Make the chatbot minimize/maximize when clicking the bot icon
document.getElementById('bot-icon').addEventListener('click', function() {
    var chatWindow = document.getElementById('chat-window');
    chatWindow.style.display = chatWindow.style.display === 'block' ? 'none' : 'block';
});
