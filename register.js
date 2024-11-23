
document.getElementById("registerForm").addEventListener("submit", async function(e) {
    e.preventDefault();
    const mobile = document.getElementById("mobile").value;
    const password = document.getElementById("password").value;

    const response = await fetch("/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ mobile, password })
    });
    if (response.ok) {
        alert("Registration successful!");
        window.location.href = "login.html";
    } else {
        alert("Registration failed!");
    }
});
