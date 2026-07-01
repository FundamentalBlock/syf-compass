import BottomNav from "../organisms/BottomNav.jsx";
import PhoneFrame from "../organisms/PhoneFrame.jsx";

export default function MorePage({ onBack, onShop }) {
  return (
    <PhoneFrame>
      <header className="mini-header">
        <button className="text-btn" onClick={onBack}>Back</button>
        <h1>More</h1>
        <span />
      </header>

      <section className="menu-card">
        <div className="menu-icon">🛍️</div>
        <div>
          <h2>Shop marketplace</h2>
          <p>Earn points and get SYF Compass guidance before checkout.</p>
        </div>
        <button className="small-pill" onClick={onShop}>Open</button>
      </section>

      <section className="menu-list">
        <div>Payments</div>
        <div>Rewards</div>
        <div>Credit score simulator</div>
        <div>Support</div>
      </section>

      <BottomNav active="more" onShop={onShop} />
    </PhoneFrame>
  );
}
