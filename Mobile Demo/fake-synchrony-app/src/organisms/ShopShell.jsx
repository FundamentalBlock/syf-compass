import PhoneFrame from "./PhoneFrame.jsx";

export default function ShopShell({
  children,
  cartCount,
  onBack,
  onCart,
  title = "Shop",
}) {
  return (
    <PhoneFrame variant="market-phone">
      <header className="amazon-top">
        <button className="amazon-back" onClick={onBack}>‹</button>
        <div className="amazon-wordmark">
          <strong>shop</strong><span>plus</span>
        </div>
        <button className="amazon-cart" onClick={onCart}>
          <span>{cartCount}</span>
          🛒
        </button>
      </header>
      {children}
    </PhoneFrame>
  );
}
