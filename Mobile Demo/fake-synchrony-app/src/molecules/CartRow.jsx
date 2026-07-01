import { money } from "../utils/money.js";

export default function CartRow({ item, onQty, onRemove }) {
  return (
    <div className="cart-row">
      <div className="cart-thumb" style={{ background: item.product.color }}>
        {item.product.emoji}
      </div>
      <div>
        <h3>{item.product.name}</h3>
        <strong>{money(item.product.price)}</strong>
        <div className="qty-controls">
          <button onClick={() => onQty(item.productId, -1)}>−</button>
          <span>{item.qty}</span>
          <button onClick={() => onQty(item.productId, 1)}>+</button>
          <button className="delete-btn" onClick={() => onRemove(item.productId)}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
