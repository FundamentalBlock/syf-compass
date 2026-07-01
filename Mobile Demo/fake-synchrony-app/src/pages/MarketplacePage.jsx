import ProductCard from "../molecules/ProductCard.jsx";
import ShopShell from "../organisms/ShopShell.jsx";
import { PRODUCTS, USER } from "../data.js";

const CATEGORIES = ["Deals", "Home", "Electronics", "Beauty", "Fashion", "Grocery"];

export default function MarketplacePage({ cart, onAdd, onBack, onCart }) {
  const cartCount = cart.reduce((sum, item) => sum + item.qty, 0);

  return (
    <ShopShell cartCount={cartCount} onBack={onBack} onCart={onCart}>
      <div className="amazon-scroll">
        <section className="amazon-search-wrap">
          <div className="amazon-search">🔍 Search products</div>
        </section>

        <section className="amazon-delivery">
          📍 Deliver to {USER.first} - {USER.city} {USER.zip}
        </section>

        <section className="amazon-categories">
          {CATEGORIES.map((category) => (
            <button key={category}>{category}</button>
          ))}
        </section>

        <section className="amazon-hero">
          <div>
            <p>Shop through Synchrony</p>
            <h2>Deals picked for your mobile demo</h2>
            <span>Earn points on eligible purchases. SYF Compass checks credit impact at checkout.</span>
          </div>
          <div className="hero-box">🛍️</div>
        </section>

        <section className="amazon-tile-row">
          <div>
            <strong>Keep shopping for</strong>
            <span>Tech essentials</span>
            <div>🎧</div>
          </div>
          <div>
            <strong>Deals under $50</strong>
            <span>Home & everyday</span>
            <div>💡</div>
          </div>
        </section>

        <section className="amazon-product-section">
          <h2>Results</h2>
          <div className="amazon-product-list">
            {PRODUCTS.map((product) => (
              <ProductCard key={product.id} product={product} onAdd={onAdd} />
            ))}
          </div>
        </section>
      </div>
    </ShopShell>
  );
}
