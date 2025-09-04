const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());

// 1. Greeting API
app.get("/greet/:name", (req, res) => {
  const name = req.params.name;
  res.json({ message: `Hello, ${name}! Welcome to our API.` });
});

// 2. Mindbreaks API
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
  "Every person you pass is living a life as vivid and complex as yours.",
  "You are not alone Lord have you always in all ways.",
  "You’ve never actually seen your own face, only reflections or pictures."
];

// GET random mindbreak
app.get("/mindbreak", (req, res) => {
  const randomIndex = Math.floor(Math.random() * mindbreaks.length);
  res.json({ thought: mindbreaks[randomIndex] });
});

// 3. Personality Test API
// Simple function to generate a fun personality message
function generatePersonality(name, color) {
  const traits = [
    `a bold innovator of the ${color} realm`,
    `a gentle soul with a ${color} aura`,
    `a cosmic explorer of ${color} skies`,
    `a ${color}-powered creative genius`,
    `a secret ${color} ninja of kindness`,
    `a ${color} wizard of wisdom`
  ];
  const trait = traits[Math.floor(Math.random() * traits.length)];
  return `${name}, you are ${trait}!`;
}

// POST endpoint for personality test
app.post("/personality", (req, res) => {
  const { name, favoriteColor } = req.body;

  if (!name || !favoriteColor) {
    return res.status(400).json({
      error: "Please include both 'name' and 'favoriteColor' in the request body"
    });
  }

  const personality = generatePersonality(name, favoriteColor);
  res.json({
    name,
    favoriteColor,
    personality
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
