import { useEffect, useState } from "react";
import API from "./api";

import FlashCardForm from "./components/FlashCardForm";
import FlashCardList from "./components/FlashCardList";

export default function App() {
  const [flashcards, setFlashcards] = useState([]);

  const fetchFlashcards = async () => {
    const res = await API.get("/flashcards");
    setFlashcards(res.data);
  };

  const addFlashcard = async (question, answer) => {
    const res = await API.post("/flashcards", {
      question,
      answer,
    });

    setFlashcards((prev) => [...prev, res.data]);
  };

  useEffect(() => {
    fetchFlashcards();
  }, []);

  return (
    <>
      <h1>Flashcard App</h1>

      <FlashCardForm addFlashcard={addFlashcard} />
      <FlashCardList flashcards={flashcards} />
    </>
  );
}