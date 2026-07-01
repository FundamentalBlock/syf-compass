import Button from "../atoms/Button.jsx";
import SummaryLine from "../atoms/SummaryLine.jsx";
import CartRow from "../molecules/CartRow.jsx";
import ShopShell from "../organisms/ShopShell.jsx";
import { PRODUCTS } from "../data.js";
import { money } from "../utils/money.js";

export default function CartPage({ cart, onBack, onCheckout, onQty, onRemove }) {
  const items = cart.map((item) => ({
    ...item,
    product: PRODUCTS.find((p) => p.id === item.productId),
  }));

  const subtotal = items.reduce((sum, item) => sum + item.product.price * item.qty, 0);
  const cartCount = cart.reduce((sum, item) => sum + item.qty, 0);

  return (
    <ShopShell title="Cart" cartCount={cartCount} onBack={onBack} onCart={() => {}}>
      <div className="market-scroll">
        <section className="panel-card">
          <h2>Your cart</h2>
          {items.length === 0 ? (
            <p className="muted">Your cart is empty.</p>
          ) : (
            items.map((item) => (
              <CartRow
                key={item.productId}
                item={item}
                onQty={onQty}
                onRemove={onRemove}
              />
            ))
          )}
        </section>

        <section className="checkout-card">
          <SummaryLine label="Subtotal" value={money(subtotal)} total />
          <p>Use Synchrony at checkout to earn points on eligible purchases.</p>
          <Button disabled={!items.length} onClick={onCheckout}>
            Proceed to checkout
          </Button>
        </section>
      </div>
    </ShopShell>
  );
}
