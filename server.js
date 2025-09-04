const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());

// 1. Greeting API
app.get("/greet/:name", (req, res) => {
  const name = req.params.name;
  res.json({ message: `Hello, ${name}! Welcome to our API.` });
});

// 2. Mind Breaks API
const mindbreaks = [
  "If you try to fail and succeed, did you fail or succeed?",
  "Your future self is watching you through memories.",
  "When you clean a vacuum cleaner, you become the vacuum cleaner.",
  "Every second that passes is the youngest you’ll ever be again.",
  "If nothing is impossible, is it possible for something to be impossible?",
  "You can never stand in the same river twice.",
  "The word 'dictionary' is in the dictionary.",
  "The present is the only time that truly exists, yet it’s gone the moment you notice it.",
  "If practice makes perfect, and nobody’s perfect, why practice?",
  "When you think of your brain, your brain is thinking about itself.",
  "Every person you pass is living a life as vivid and complex as yours."
];

// GET random mindbreak
app.get("/mindbreak", (req, res) => {
  const randomIndex = Math.floor(Math.random() * mindbreaks.length);
  res.json({ thought: mindbreaks[randomIndex] });
});

// DELETE mindbreak by index
app.delete("/mindbreak/:index", (req, res) => {
  const index = parseInt(req.params.index);

  if (isNaN(index) || index < 0 || index >= mindbreaks.length) {
    return res.status(400).json({ error: "Invalid index" });
  }

  const removed = mindbreaks.splice(index, 1);
  res.json({
    message: "🗑️ Mindbreak deleted successfully",
    deleted: removed[0],
    remaining: mindbreaks.length
  });
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
      return res.status(400).json({ 
        error: "Invalid operation. Use add, subtract, multiply, or divide." 
      });
  }

  res.json({ operation, result });
});

// Start the server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
