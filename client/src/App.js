import { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name.trim()) return;
    setMessage("⏳ Checking...");

    const res = await fetch("http://localhost:5000/api/check-name", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name }),
    });

    const data = await res.json();
    setMessage(data.message);
  };

  return (
    <div className="container">
      <h2>Full Name Checker 🧠</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter full name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <button type="submit">Check</button>
      </form>

      {message && <p className="result">{message}</p>}
    </div>
  );
}

export default App;
