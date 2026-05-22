import FlashCardItem from "./FlashCardItem";

export default function FlashCardList({
  flashcards = [],
  updateFlashcard,
  deleteFlashcard
}) {
  return (
    <>
      {flashcards.map((card) => (
        <FlashCardItem
          key={card._id}
          flashcard={card}
          updateFlashcard={updateFlashcard}
          deleteFlashcard={deleteFlashcard}
        />
      ))}
    </>
  );
}