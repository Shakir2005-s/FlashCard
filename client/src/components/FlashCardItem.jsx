import { useState } from "react";

export default function FlashCardItem({
  flashcard,
  updateFlashcard,
  deleteFlashcard
}) {
  const [isEditing, setIsEditing] = useState(false);

  const [question, setQuestion] = useState(
    flashcard.question
  );

  const [answer, setAnswer] = useState(
    flashcard.answer
  );

  const handleSave = () => {
    updateFlashcard(
      flashcard._id,
      question,
      answer
    );

    setIsEditing(false);
  };

  return (
    <div style={{ border: "1px solid black", padding: "10px", marginTop: "10px" }}>
      {isEditing ? (
        <>
          <input
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
          />

          <input
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
          />

          <button onClick={handleSave}>
            Save
          </button>
        </>
      ) : (
        <>
          <h2>{flashcard.question}</h2>
          <p>{flashcard.answer}</p>

          <button onClick={() => setIsEditing(true)}>
            Edit
          </button>

          <button onClick={() => deleteFlashcard(flashcard._id)}>
            Delete
          </button>
        </>
      )}
    </div>
  );
}