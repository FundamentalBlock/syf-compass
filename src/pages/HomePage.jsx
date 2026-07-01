import ProductCard from "../molecules/ProductCard.jsx";
import { PRODUCTS } from "../data.js";

export default function HomePage({ onAddToCart }) {
  return (
    <div className="page">
      <div className="hero">
        <h1>Demo storefront for SYF Compass</h1>
        <p>
          Add a few items to your cart, then head to checkout and try switching
          payment cards.
        </p>
      </div>
      <div className="promo-grid">
        <div className="promo-card">
          <h3>Everyday essentials</h3>
          <div className="promo-mini-grid">
            <div>
              <div
                className="promo-thumb"
                style={{ background: "#eef2ff" }}
              >
                🎧
              </div>
              <div className="promo-thumb-label">Audio</div>
            </div>
            <div>
              <div
                className="promo-thumb"
                style={{ background: "#f0fdf4" }}
              >
                🧘
              </div>
              <div className="promo-thumb-label">Wellness</div>
            </div>
          </div>
          <a className="promo-link">Shop more essentials</a>
        </div>
        <div className="promo-card">
          <h3>Home refresh</h3>
          <div className="promo-mini-grid">
            <div>
              <div
                className="promo-thumb"
                style={{ background: "#fff7ed" }}
              >
                ☕
              </div>
              <div className="promo-thumb-label">Kitchen</div>
            </div>
            <div>
              <div
                className="promo-thumb"
                style={{ background: "#fefce8" }}
              >
                💡
              </div>
              <div className="promo-thumb-label">Lighting</div>
            </div>
          </div>
          <a className="promo-link">Shop more for home</a>
        </div>
        <div className="promo-card">
          <h3>Explore by price</h3>
          <div className="promo-mini-grid">
            <div>
              <div
                className="promo-thumb"
                style={{ background: "#faf5ff" }}
              >
                🔊
              </div>
              <div className="promo-thumb-label">Under $50</div>
            </div>
            <div>
              <div
                className="promo-thumb"
                style={{ background: "#fef2f2" }}
              >
                🎒
              </div>
              <div className="promo-thumb-label">Under $100</div>
            </div>
          </div>
          <a className="promo-link">Shop more by price</a>
        </div>
        <div className="promo-card single">
          <h3>Trending finds</h3>
          <div className="promo-thumb" style={{ background: "#eaeded" }}>
            ⭐
          </div>
          <a className="promo-link">See all</a>
        </div>
      </div>
      <div className="section-heading">Selected for you</div>
      <div className="grid">
        {PRODUCTS.map((p) => (
          <ProductCard key={p.id} product={p} onAddToCart={onAddToCart} />
        ))}
      </div>
    </div>
  );
}
