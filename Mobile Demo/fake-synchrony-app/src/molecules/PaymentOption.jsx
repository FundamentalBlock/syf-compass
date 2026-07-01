import CardIcon from "../atoms/CardIcon.jsx";
import { money } from "../utils/money.js";

export default function PaymentOption({ card, selected, onSelect }) {
  return (
    <button className={`payment-option ${selected ? "selected" : ""}`} onClick={onSelect}>
      <CardIcon card={card} />
      <span>
        <strong>{card.brand} •••• {card.last4}</strong>
        {card.isSynchrony ? (
          <small>
            Balance {money(card.balance)} / {money(card.limit)} · {card.apr}% APR
          </small>
        ) : (
          <small>Linked external card · no Compass check</small>
        )}
      </span>
      <b>{selected ? "✓" : ""}</b>
    </button>
  );
}
