import CardBadge from "../atoms/CardBadge.jsx";
import { money } from "../data.js";

export default function PaymentCardOption({ card, selected, onSelect }) {
  const badgeLabel = card.isSynchrony
    ? "SYNC"
    : card.brand.slice(0, 4).toUpperCase();
  const subText = card.isSynchrony
    ? `Balance ${money(card.balance)} of ${money(card.limit)} limit · ${card.apr}% APR`
    : "Linked card";

  return (
    <div
      className={`card-option${selected ? " selected" : ""}`}
      onClick={() => onSelect(card)}
    >
      <input
        type="radio"
        checked={selected}
        onChange={() => onSelect(card)}
      />
      <CardBadge label={badgeLabel} color={card.color} />
      <div className="meta">
        <div className="name">
          {card.brand} •••• {card.last4}
        </div>
        <div className="sub">{subText}</div>
      </div>
    </div>
  );
}
