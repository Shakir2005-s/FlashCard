import { useState } from "react";
import "./FlashCardForm.css";
export default function FlashCardForm({ addFlashcard }) {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted!")

    if (!question || !answer) return;

    addFlashcard(question, answer);

    setQuestion("");
    setAnswer("");
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter question"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
      />

      <input
        type="text"
        placeholder="Enter answer"
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
      />

      <button type="submit">Add Card</button>
    </form>
  );
}