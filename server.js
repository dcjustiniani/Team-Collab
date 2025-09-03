const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());

// 1. Greeting API
app.get("/greet/:name", (req, res) => {
  const name = req.params.name;
  res.json({ message: `Hello, ${name}! Welcome to our API.` });
});

// 2. Random Joke API
const jokes = [
  "Why do programmers prefer dark mode? Because the light attracts bugs.",
  "Why was the computer cold? It forgot to close its Windows.",
  "Why did the developer go broke? Because he used up all his cache.",
  "Why was the JavaScript developer sad? Because he didn’t know how to null his feelings.",
  "Why don’t programmers like to go outside? The sun causes too many glare errors."
];


app.get("/joke", (req, res) => {
  const randomIndex = Math.floor(Math.random() * jokes.length);
  res.json({ joke: jokes[randomIndex] });
});

// 3. Math Calculator API (Add, Subtract, Multiply, Divide)
app.post("/:operation", (req, res) => {
  const { num1, num2 } = req.body;
  const operation = req.params.operation;

  if (typeof num1 !== "number" || typeof num2 !== "number") {
    return res.status(400).json({ error: "Please provide two numbers" });
  }

  let result;
  switch (operation) {
    case "add":
      result = num1 + num2;
      break;
    case "subtract":
      result = num1 - num2;
      break;
    case "multiply":
      result = num1 * num2;
      break;
    case "divide":
      if (num2 === 0) {
        return res.status(400).json({ error: "Division by zero is not allowed" });
      }
      result = num1 / num2;
      break;
    default:
      return res.status(400).json({ error: "Invalid operation. Use add, subtract, multiply, or divide." });
  }

  res.json({ operation, result });
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
