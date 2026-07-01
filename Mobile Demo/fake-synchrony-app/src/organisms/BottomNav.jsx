export default function BottomNav({ active, onShop, onMore }) {
  return (
    <nav className="bottom-nav">
      <button className={active === "accounts" ? "active" : ""}>
        🏦<span>Accounts</span>
      </button>
      <button>
        💳<span>Payments</span>
      </button>
      <button onClick={onShop} className={active === "shop" ? "active" : ""}>
        🛍️<span>Shop</span>
      </button>
      <button onClick={onMore} className={active === "more" ? "active" : ""}>
        ⋯<span>More</span>
      </button>
    </nav>
  );
}
