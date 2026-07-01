import Button from "../atoms/Button.jsx";

export default function ProductCard({ product, onAddToCart }) {
  return (
    <div className="card">
      <div className="thumb" style={{ background: product.color }}>
        {product.emoji}
      </div>
      <p className="p-name">{product.name}</p>
      <div className="p-rating">{product.rating}</div>
      <p className="p-price">
        <sup>$</sup>
        {product.price.toFixed(2)}
      </p>
      <Button onClick={() => onAddToCart(product.id)}>Add to cart</Button>
    </div>
  );
}
