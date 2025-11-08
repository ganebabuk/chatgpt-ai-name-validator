const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const OpenAI = require("openai");

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

app.post("/api/check-name", async (req, res) => {
  const { name } = req.body;
  const prompt = `
You are a smart name validator. Based on the input, respond with **exactly one** of these message styles:
1️⃣ If it's a valid English full name (like "John Wick", "Priya Kumar"), respond positively — something like:
   "✅ 'John Wick' looks like a valid English full name. Nice!"
2️⃣ If it's not an English name or gibberish (like "asdf" or "김지훈"), respond with an error message like:
   "⚠️ '김지훈' doesn't look like an English name. Please enter a valid English name."
3️⃣ If the name includes a vulgar/offensive word, respond with a scolding message like:
   "🚫 The name 'BadWord' is vulgar. Don't use such words, please!"

Return **only one** sentence with the emoji and message.
Now, check the following name: "${name}".
`;

  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [{ role: "user", content: prompt }],
    });
    const message = response.choices[0].message.content.trim();
    res.json({ message });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ message: "Something went wrong." });
  }
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
