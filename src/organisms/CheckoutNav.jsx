export default function CheckoutNav({ onNav }) {
  return (
    <div className="checkout-nav">
      <a className="logo" onClick={() => onNav("home")}>
        cart<span>ify</span>
      </a>
      <div className="title">Secure checkout</div>
      <div style={{ fontSize: 13 }}>🛒 Cart</div>
    </div>
  );
}
