import { money } from "../utils/money.js";

export default function ProductCard({ product, onAdd }) {
  return (
    <article className="amazon-product-card">
      <div className="amazon-product-img" style={{ background: product.color }}>
        <span>{product.emoji}</span>
      </div>

      <div className="amazon-product-info">
        <div className="amazon-badge">{product.tag}</div>
        <h3>{product.name}</h3>
        <p className="rating-line">
          ⭐⭐⭐⭐⭐ <span>{product.rating}</span> <a>({product.reviews})</a>
        </p>
        <p className="price-line">{money(product.price)}</p>
        <p className="delivery-line">{product.delivery}</p>
        <button onClick={() => onAdd(product.id)}>Add to Cart</button>
      </div>
    </article>
  );
}
