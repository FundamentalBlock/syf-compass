import CartItem from "../molecules/CartItem.jsx";
import Button from "../atoms/Button.jsx";
import { money } from "../data.js";

export default function CartPage({ cart, onQty, onRemove, onNav }) {
  const subtotal = cart.reduce((s, i) => s + i.product.price * i.qty, 0);
  const count = cart.reduce((s, i) => s + i.qty, 0);

  return (
    <div className="page">
      {cart.length > 0 && (
        <div className="savings-banner">
          <div className="sb-thumb">{cart[0].product.emoji}</div>
          <div className="sb-text">
            <b>Christopher, get $10 off instantly </b>
            upon approval for the Synchrony Store Card.
          </div>
          <div className="sb-figures">
            <div>
              Current subtotal
              <span>{money(subtotal)}</span>
            </div>
            <div>
              After savings
              <span style={{ color: "#c81e2c" }}>
                {money(Math.max(0, subtotal - 10))}
              </span>
            </div>
          </div>
          <Button>Learn more</Button>
        </div>
      )}
      <div className="cart-layout">
        <div className="panel">
          <h2 className="section-title">Shopping cart</h2>
          {cart.length === 0 && (
            <p style={{ color: "#565959" }}>
              Your cart is empty.{" "}
              <a
                style={{ color: "#007185" }}
                onClick={() => onNav("home")}
              >
                Continue shopping
              </a>
            </p>
          )}
          {cart.map((i) => (
            <CartItem
              key={i.productId}
              item={i}
              onQty={onQty}
              onRemove={onRemove}
            />
          ))}
        </div>
        <div className="panel">
          <div className="side-note">
            Add {money(Math.max(0, 35 - subtotal))} of eligible items for free
            delivery.
          </div>
          <div className="summary-row summary-total">
            <span>Subtotal ({count} items)</span>
            <span>{money(subtotal)}</span>
          </div>
          <Button
            variant="primary"
            block
            style={{ marginTop: 14 }}
            disabled={cart.length === 0}
            onClick={() => onNav("checkout")}
          >
            Proceed to checkout
          </Button>
          {cart.length > 0 && (
            <div>
              <div className="group-label" style={{ marginTop: 20 }}>
                Complete your basket
              </div>
              <div className="reco-item">
                <div
                  className="reco-thumb"
                  style={{ background: "#eef2ff" }}
                >
                  🧴
                </div>
                <div>
                  <div className="r-name">Refill pack, 2-count</div>
                  <div className="r-price">$9.28</div>
                </div>
              </div>
              <div className="reco-item">
                <div
                  className="reco-thumb"
                  style={{ background: "#f0fdf4" }}
                >
                  🧻
                </div>
                <div>
                  <div className="r-name">Household bundle</div>
                  <div className="r-price">$18.50</div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
