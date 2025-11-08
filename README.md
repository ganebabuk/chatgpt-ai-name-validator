# chatgpt-ai-name-validator

# 🧠 AI Name Validator (React + Node.js + ChatGPT API)

A simple Proof-of-Concept (POC) project built using **React**, **Node.js (Express)**, and the **OpenAI ChatGPT API**.  
This app validates whether a given full name looks like a **valid English human name**, a **non-English or invalid name**, or a **vulgar/offensive name** — and displays friendly or strict messages accordingly.

---

## 🚀 Features

- ✅ Checks if the entered full name looks like a **real English human name**  
- ⚠️ Detects **invalid or non-English** names (e.g., gibberish, random letters, other scripts)  
- 🚫 Identifies **vulgar or offensive words** and returns a warning/scolding message  
- 💬 Real-time feedback shown directly in the UI  
- 🔒 API key securely stored on the Node.js backend (never exposed to frontend)

---

## 🧩 Tech Stack

| Layer | Technology |
|-------|-------------|
| **Frontend** | React (Create React App) |
| **Backend** | Node.js + Express |
| **AI Model** | OpenAI GPT-4o-mini / GPT-4-turbo |
| **Styling** | CSS |
| **Environment Variables** | dotenv |

---

## 📁 Project Structure

chatgpt-ai-name-validator/
├── client/ # React frontend
│ ├── src/
│ │ ├── App.js
│ │ └── App.css
│ └── package.json
├── server/ # Node.js backend
│ ├── index.js
│ ├── .env
│ └── package.json
└── README.md


---

## ⚙️ How It Works

1. User enters a full name in the React form.
2. The frontend sends the name to `/api/check-name` (Node.js backend).
3. The backend calls **OpenAI’s ChatGPT API** with a structured prompt:
   - If valid → returns a ✅ positive message  
   - If invalid / non-English → returns ⚠️ a warning message  
   - If vulgar → returns 🚫 a scolding message mentioning the word  
4. The response message is directly displayed on the UI.

---

## 🧠 Example Outputs

| Input | Output |
|-------|---------|
| `John Wick` | ✅ "John Wick looks like a valid English full name. Nice!" |
| `김지훈` | ⚠️ "김지훈 doesn't look like an English name. Please enter a valid English name." |
| `F***er Boy` | 🚫 "The name 'F***er Boy' is vulgar. Don't use such words, please!" |

---

## 🛠️ Setup Instructions

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/yourusername/chatgpt-ai-name-validator.git
cd chatgpt-ai-name-validator
