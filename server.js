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
  "I am a sinner, who's probably gonna sin again. Lord forgive me.",
  "Every person you pass is living a life as vivid and complex as yours."
];

app.get("/mindbreak", (req, res) => {
  const randomIndex = Math.floor(Math.random() * mindbreaks.length);
  res.json({ thought: mindbreaks[randomIndex] });
});

// 3. Math Challenge API (Random operation)
app.get("/math-challenge", (req, res) => {
  const num1 = Math.floor(Math.random() * 10) + 1;
  const num2 = Math.floor(Math.random() * 10) + 1;
  const operations = ["add", "subtract", "multiply", "divide"];
  const operation = operations[Math.floor(Math.random() * operations.length)];

  let challenge, answer;

  switch (operation) {
    case "add":
      challenge = `${num1} + ${num2}`;
      answer = num1 + num2;
      break;
    case "subtract":
      challenge = `${num1} - ${num2}`;
      answer = num1 - num2;
      break;
    case "multiply":
      challenge = `${num1} × ${num2}`;
      answer = num1 * num2;
      break;
    case "divide":
      challenge = `${num1} ÷ ${num2}`;
      answer = Number((num1 / num2).toFixed(2)); // rounded to 2 decimals
      break;
  }

  res.json({ challenge, operation, hint: "Solve and POST your answer to /math-challenge" , answer });
});

app.post("/math-challenge", (req, res) => {
  const { operation, num1, num2, userAnswer } = req.body;

  let correctAnswer;
  switch (operation) {
    case "add":
      correctAnswer = num1 + num2;
      break;
    case "subtract":
      correctAnswer = num1 - num2;
      break;
    case "multiply":
      correctAnswer = num1 * num2;
      break;
    case "divide":
      correctAnswer = Number((num1 / num2).toFixed(2));
      break;
    default:
      return res.status(400).json({ error: "Invalid operation" });
  }

  if (userAnswer === correctAnswer) {
    return res.json({ message: "✅ Correct! You solved the challenge." });
  } else {
    return res.json({ message: `❌ Incorrect. The correct answer was ${correctAnswer}.` });
  }
});


app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
