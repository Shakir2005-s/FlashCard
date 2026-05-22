export default function FlashCardItem({ flashcard }) {
  return (
    <div style={{ border: "1px solid black", padding: "10px", marginTop: "10px" }}>
      <h2>{flashcard.question}</h2>
      <p>{flashcard.answer}</p>
    </div>
  );
}