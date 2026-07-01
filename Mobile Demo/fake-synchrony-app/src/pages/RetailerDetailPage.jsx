import Button from "../atoms/Button.jsx";
import ProductCard from "../molecules/ProductCard.jsx";
import ShopShell from "../organisms/ShopShell.jsx";
import { RETAILER_PRODUCTS } from "../data/retailers.js";

export default function RetailerDetailPage({
  applicantName = "",
  cart = [],
  retailerName = "Retailer",
  onAdd,
  onBack,
  onCart,
}) {
  const displayName = applicantName.trim() || "there";
  const products = RETAILER_PRODUCTS[retailerName] || [];
  const cartCount = cart.reduce((sum, item) => sum + item.qty, 0);

  return (
    <ShopShell title={retailerName} onBack={onBack} onCart={onCart} cartCount={cartCount}>
      <div className="market-scroll">
        <section className="retailer-intro">
          <p className="eyebrow">Shopping with Synchrony</p>
          <h2>{displayName}, you’re ready to shop at {retailerName}</h2>
          <p>
            Browse featured products from {retailerName} and add them to your cart for checkout.
          </p>
        </section>

        <section className="retailer-product-list">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} onAdd={onAdd} />
          ))}
        </section>

        <section className="retailer-panel">
          <h3>Featured offers</h3>
          <ul>
            <li>Flexible payments with Synchrony approval</li>
            <li>Rewards and exclusive partner deals</li>
            <li>Fast checkout and account visibility</li>
          </ul>
          <Button onClick={onBack}>Back to retailers</Button>
        </section>
      </div>
    </ShopShell>
  );
}
