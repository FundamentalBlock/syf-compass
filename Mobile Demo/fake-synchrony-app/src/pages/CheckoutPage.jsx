import { useMemo, useState } from "react";
import Button from "../atoms/Button.jsx";
import SummaryLine from "../atoms/SummaryLine.jsx";
import MiniRisk from "../molecules/MiniRisk.jsx";
import PaymentOption from "../molecules/PaymentOption.jsx";
import CompassBottomSheet from "../organisms/CompassBottomSheet.jsx";
import ShopShell from "../organisms/ShopShell.jsx";
import { CARDS, USER, getProductById } from "../data.js";
import { calculateCompass } from "../utils/credit.js";
import { money } from "../utils/money.js";

export default function CheckoutPage({
  cart,
  applicantName = "",
  accountBalance = 0,
  approvedCard = { limit: 2500, apr: 0, aprText: "0% APR for 12 months" },
  onBack,
  onPlaceOrder,
}) {
  const [selectedCardId, setSelectedCardId] = useState("");
  const [sheetOpen, setSheetOpen] = useState(false);
  const [acknowledged, setAcknowledged] = useState(false);

  const items = cart.map((item) => ({
    ...item,
    product: getProductById(item.productId),
  }));

  const subtotal = items.reduce((sum, item) => sum + item.product.price * item.qty, 0);
  const tax = subtotal * 0.0635;
  const total = subtotal + tax;

  const selectedCard = CARDS.find((card) => card.id === selectedCardId);
  const compassCard = selectedCard?.isSynchrony
    ? {
        ...selectedCard,
        balance: accountBalance,
        limit: approvedCard.limit,
        apr: approvedCard.apr,
        aprLabel: approvedCard.aprText,
      }
    : selectedCard;

  const compass = useMemo(
    () => calculateCompass(compassCard, total),
    [compassCard, total]
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
            {(applicantName || USER.full).trim()} · {USER.city}, {USER.state} {USER.zip}
          </p>
        </section>

        <section className="panel-card">
          <h2>Payment method</h2>
          <div className="points-callout">
            <strong>Earn points</strong>
            <span>Pay with an eligible Synchrony card through the app.</span>
          </div>

          {CARDS.map((card) => {
            const displayCard = card.isSynchrony
              ? {
                  ...card,
                  balance: accountBalance,
                  limit: approvedCard.limit,
                  apr: approvedCard.apr,
                  aprLabel: approvedCard.aprText,
                }
              : card;

            return (
              <PaymentOption
                key={card.id}
                card={displayCard}
                selected={selectedCardId === card.id}
                onSelect={() => handleSelect(card)}
              />
            );
          })}

          {selectedCard?.isSynchrony && compass && <MiniRisk compass={compass} />}
        </section>

        <section className="checkout-card sticky-summary">
          <SummaryLine label="Items" value={money(subtotal)} />
          <SummaryLine label="Estimated tax" value={money(tax)} />
          <SummaryLine label="Order total" value={money(total)} total />
          <Button disabled={!canPlaceOrder} onClick={() => onPlaceOrder(selectedCardId)}>
            Place order
          </Button>
          {selectedCardId && !acknowledged && (
            <p className="warning-text">Review the SYF Compass guidance to continue.</p>
          )}
        </section>
      </div>

      {sheetOpen && compassCard && compass && (
        <CompassBottomSheet
          card={compassCard}
          total={total}
          compass={compass}
          onClose={() => setSheetOpen(false)}
          onContinue={handleCompassContinue}
        />
      )}
    </ShopShell>
  );
}
