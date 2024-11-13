document.addEventListener("DOMContentLoaded", function() {
    const welcomeMessage = document.createElement("div");
    welcomeMessage.textContent = "مرحباً بك في موقعي الشخصي!";
    welcomeMessage.style.position = "fixed";
    welcomeMessage.style.top = "20px";
    welcomeMessage.style.left = "50%";
    welcomeMessage.style.transform = "translateX(-50%)";
    welcomeMessage.style.backgroundColor = "#4a90e2";
    welcomeMessage.style.color = "#fff";
    welcomeMessage.style.padding = "10px 20px";
    welcomeMessage.style.borderRadius = "5px";
    welcomeMessage.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.3)";
    welcomeMessage.style.opacity = "0";
    welcomeMessage.style.transition = "opacity 1s ease";

    document.body.appendChild(welcomeMessage);

    setTimeout(() => {
        welcomeMessage.style.opacity = "1";
    }, 500);

    setTimeout(() => {
        welcomeMessage.style.opacity = "0";
    }, 3500);
});
