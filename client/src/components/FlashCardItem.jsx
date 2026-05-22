import { useState } from "react";
import "./FlashCardItem.css"
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
    <div className="card">
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

          <button className="save" onClick={handleSave}>
            Save
          </button>
        </>
      ) : (
        <>
          <h2>{flashcard.question}</h2>
          <p>{flashcard.answer}</p>

          <button className="edit" onClick={() => setIsEditing(true)}>
            Edit
          </button>

          <button className="delete" onClick={() => deleteFlashcard(flashcard._id)}>
            Delete
          </button>
        </>
      )}
    </div>
  );
}