import { money } from "../data.js";

export default function CartItem({ item, onQty, onRemove }) {
  const p = item.product;

  return (
    <div className="cart-item">
      <div className="cart-thumb" style={{ background: p.color }}>
        {p.emoji}
      </div>
      <div style={{ flex: 1 }}>
        <div style={{ fontSize: 14, fontWeight: 500 }}>{p.name}</div>
        <div style={{ fontSize: 15, fontWeight: 700, marginTop: 4 }}>
          {money(p.price)}
        </div>
        <div className="qty-row">
          <button
            className="qty-btn"
            onClick={() => onQty(item.productId, -1)}
          >
            –
          </button>
          <span>{item.qty}</span>
          <button
            className="qty-btn"
            onClick={() => onQty(item.productId, 1)}
          >
            +
          </button>
          <a
            className="remove-link"
            onClick={() => onRemove(item.productId)}
          >
            Delete
          </a>
        </div>
      </div>
    </div>
  );
}
