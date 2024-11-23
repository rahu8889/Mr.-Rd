
const express = require("express");
const fs = require("fs");
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static("."));

const users = []; // Simple in-memory user store

app.post("/register", (req, res) => {
    const { mobile, password } = req.body;
    if (!mobile || !password) {
        return res.status(400).send("Missing fields");
    }
    users.push({ mobile, password });
    res.status(201).send("User registered");
});

app.post("/login", (req, res) => {
    const { mobile, password } = req.body;
    const user = users.find(u => u.mobile === mobile && u.password === password);
    if (user) {
        res.status(200).send("Login successful");
    } else {
        res.status(401).send("Invalid credentials");
    }
});

app.post("/sendMessage", (req, res) => {
    const { message } = req.body;
    if (!message) {
        return res.status(400).send("Message is required");
    }
    fs.appendFileSync("messages.txt", message + "\n");
    res.status(200).send("Message saved");
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
