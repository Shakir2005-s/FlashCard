
export default function FlashCardList({ flashcards = [] }) {
    return (
        <>
            {flashcards.map((card) => (
                <FlashCardItem key={card._id} flashcard={card} />
            ))}
        </>
    );
}