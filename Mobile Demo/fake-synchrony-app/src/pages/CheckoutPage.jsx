import { useMemo, useState } from "react";
import Button from "../atoms/Button.jsx";
import SummaryLine from "../atoms/SummaryLine.jsx";
import MiniRisk from "../molecules/MiniRisk.jsx";
import PaymentOption from "../molecules/PaymentOption.jsx";
import CompassBottomSheet from "../organisms/CompassBottomSheet.jsx";
import ShopShell from "../organisms/ShopShell.jsx";
import { CARDS, PRODUCTS, USER } from "../data.js";
import { calculateCompass } from "../utils/credit.js";
import { money } from "../utils/money.js";

export default function CheckoutPage({ cart, onBack, onPlaceOrder }) {
  const [selectedCardId, setSelectedCardId] = useState("");
  const [sheetOpen, setSheetOpen] = useState(false);
  const [acknowledged, setAcknowledged] = useState(false);

  const items = cart.map((item) => ({
    ...item,
    product: PRODUCTS.find((p) => p.id === item.productId),
  }));

  const subtotal = items.reduce((sum, item) => sum + item.product.price * item.qty, 0);
  const tax = subtotal * 0.0635;
  const total = subtotal + tax;

  const selectedCard = CARDS.find((card) => card.id === selectedCardId);

  const compass = useMemo(
    () => calculateCompass(selectedCard, total),
    [selectedCard, total]
  );

  function handleSelect(card) {
    setSelectedCardId(card.id);

    if (!card.isSynchrony) {
      setAcknowledged(true);
      setSheetOpen(false);
      return;
    }

    setAcknowledged(false);
    setSheetOpen(true);
  }

  function handleCompassContinue() {
    setAcknowledged(true);
    setSheetOpen(false);
  }

  const cartCount = cart.reduce((sum, item) => sum + item.qty, 0);
  const canPlaceOrder = selectedCardId && acknowledged;

  return (
    <ShopShell title="Checkout" cartCount={cartCount} onBack={onBack} onCart={() => {}}>
      <div className="market-scroll checkout-scroll">
        <section className="panel-card">
          <h2>Delivery</h2>
          <p className="muted">
            {USER.full} · {USER.city}, {USER.state} {USER.zip}
          </p>
        </section>

        <section className="panel-card">
          <h2>Payment method</h2>
          <div className="points-callout">
            <strong>Earn points</strong>
            <span>Pay with an eligible Synchrony card through the app.</span>
          </div>

          {CARDS.map((card) => (
            <PaymentOption
              key={card.id}
              card={card}
              selected={selectedCardId === card.id}
              onSelect={() => handleSelect(card)}
            />
          ))}

          {selectedCard?.isSynchrony && compass && <MiniRisk compass={compass} />}
        </section>

        <section className="checkout-card sticky-summary">
          <SummaryLine label="Items" value={money(subtotal)} />
          <SummaryLine label="Estimated tax" value={money(tax)} />
          <SummaryLine label="Order total" value={money(total)} total />
          <Button disabled={!canPlaceOrder} onClick={onPlaceOrder}>
            Place order
          </Button>
          {selectedCardId && !acknowledged && (
            <p className="warning-text">Review the SYF Compass guidance to continue.</p>
          )}
        </section>
      </div>

      {sheetOpen && selectedCard && compass && (
        <CompassBottomSheet
          card={selectedCard}
          total={total}
          compass={compass}
          onClose={() => setSheetOpen(false)}
          onContinue={handleCompassContinue}
        />
      )}
    </ShopShell>
  );
}
