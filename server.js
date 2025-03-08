const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

let messages = [];

app.post("/submit", (req, res) => {
    const { name, message } = req.body;
    messages.push({ name, message });
    res.redirect("/");
});

app.get("/messages", (req, res) => {
    res.json(messages);
});

app.listen(port, () => {
    console.log("Server running at http://localhost:${port}");
});