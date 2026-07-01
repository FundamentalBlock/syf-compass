export default function CardIcon({ card }) {
  const label = card.isSynchrony
    ? "SYNC"
    : card.brand.slice(0, 4).toUpperCase();

  return (
    <span className={card.isSynchrony ? "card-icon sync" : "card-icon"}>
      {label}
    </span>
  );
}
