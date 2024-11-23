
document.getElementById("chatForm").addEventListener("submit", async function(e) {
    e.preventDefault();
    const message = document.getElementById("messageInput").value;
    const response = await fetch("/sendMessage", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message })
    });
    if (response.ok) {
        const chatMessages = document.getElementById("chatMessages");
        chatMessages.innerHTML += `<p>${message}</p>`;
        document.getElementById("messageInput").value = "";
    } else {
        alert("Failed to send message!");
    }
});
