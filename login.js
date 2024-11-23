
document.getElementById("loginForm").addEventListener("submit", async function(e) {
    e.preventDefault();
    const mobile = document.getElementById("mobile").value;
    const password = document.getElementById("password").value;

    const response = await fetch("/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ mobile, password })
    });
    if (response.ok) {
        alert("Login successful!");
        window.location.href = "chat.html";
    } else {
        alert("Login failed!");
    }
});
