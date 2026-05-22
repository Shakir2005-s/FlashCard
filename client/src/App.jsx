import { useEffect, useState } from "react";
import API from "./api";

import FlashCardForm from "./components/FlashCardForm";
import FlashCardList from "./components/FlashCardList";

export default function App() {
  const [flashcards, setFlashcards] = useState([]);

  // GET all flashcards
  const fetchFlashcards = async () => {
    const res = await API.get("/flashcards");
    setFlashcards(res.data);
  };

  // CREATE flashcard
  const addFlashcard = async (question, answer) => {
    const res = await API.post("/flashcards", {
      question,
      answer,
    });

    setFlashcards((prev) => [...prev, res.data]);
  };

  // UPDATE flashcard
  const updateFlashcard = async (
    id,
    question,
    answer
  ) => {
    const res = await API.put(
      `/flashcards/${id}`,
      {
        question,
        answer,
      }
    );

    setFlashcards((prev) =>
      prev.map((card) =>
        card._id === id
          ? res.data
          : card
      )
    );
  };

  // Load data once
  useEffect(() => {
    fetchFlashcards();
  }, []);

  //Delete card
  const deleteFlashcard = async (id) => {
  await API.delete(`/flashcards/${id}`);

  setFlashcards((prev) =>
    prev.filter((card) => card._id !== id)
  );
};

  return (
    <>
      <h1>Flashcard App</h1>

      <FlashCardForm
        addFlashcard={addFlashcard}
      />

      <FlashCardList
        flashcards={flashcards}
        updateFlashcard={updateFlashcard}
        deleteFlashcard={deleteFlashcard}
      />
    </>
  );
}