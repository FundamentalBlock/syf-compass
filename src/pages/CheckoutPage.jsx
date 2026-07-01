import { useState, useMemo } from "react";
import CheckoutNav from "../organisms/CheckoutNav.jsx";
import PaymentCardOption from "../molecules/PaymentCardOption.jsx";
import UtilizationModal from "../organisms/UtilizationModal.jsx";
import OrderSummaryPanel from "../organisms/OrderSummaryPanel.jsx";
import { CARDS, USER, getTier, money } from "../data.js";

export default function CheckoutPage({ cart, onNav, onPlaceOrder }) {
  const subtotal = cart.reduce((s, i) => s + i.product.price * i.qty, 0);
  const tax = subtotal * 0.0635;
  const total = subtotal + tax;

  const [selectedId, setSelectedId] = useState(null);
  const [orderReady, setOrderReady] = useState(false);
  const [modalTier, setModalTier] = useState(null);

  const selectedCard = CARDS.find((c) => c.id === selectedId);

  const projectedPct = useMemo(() => {
    if (!selectedCard || !selectedCard.isSynchrony) return null;
    return Math.round(
      ((selectedCard.balance + subtotal) / selectedCard.limit) * 100
    );
  }, [selectedCard, subtotal]);

  function handleSelect(card) {
    setSelectedId(card.id);
    if (!card.isSynchrony) {
      setOrderReady(true);
      setModalTier(null);
      return;
    }
    const currentPct = (card.balance / card.limit) * 100;
    setOrderReady(false);
    setModalTier(getTier(currentPct));
  }

  function handleAcknowledge() {
    setOrderReady(true);
    setModalTier(null);
  }

  const payDisabled = !selectedId || !orderReady;

  return (
    <div>
      <CheckoutNav onNav={onNav} />
      <div className="page narrow">
        <div className="checkout-layout">
          <div>
            <div className="panel" style={{ marginBottom: 16 }}>
              <h2 className="section-title">
                Delivering to {USER.full}
                <a className="addr-change">Change</a>
              </h2>
              <div className="addr-block">
                {USER.city}, CT {USER.zip}, United States
              </div>
            </div>
            <div className="panel">
              <h2 className="section-title">Payment method</h2>
              <div className="card-promo">
                <div className="cp-thumb">SYNC</div>
                <div className="cp-text">
                  Unlock a $10 gift card: apply and pay less if approved for the{" "}
                  <a>Synchrony Store Card</a>
                </div>
              </div>
              <div className="group-label">Your credit and debit cards</div>
              {CARDS.map((c) => (
                <PaymentCardOption
                  key={c.id}
                  card={c}
                  selected={selectedId === c.id}
                  onSelect={handleSelect}
                />
              ))}
              <div className="group-label">Payment plans</div>
              <div className="plan-row">
                <span>Pay over time</span>
                <span style={{ marginLeft: "auto", fontSize: 12 }}>
                  Ineligible — cart total is below the plan minimum
                </span>
              </div>
              <div className="group-label">Other payment methods</div>
              <div className="other-row">
                <a>Learn more about the Synchrony Store Card</a>
                <span className="sub-txt">
                  {" "}
                  — No annual fee. Zero fraud liability.
                </span>
              </div>
              <div className="other-row">
                <a>Add a personal checking account</a>
              </div>
              <button
                className="use-pay-btn"
                disabled={payDisabled}
                onClick={onPlaceOrder}
              >
                Use this payment method
              </button>
              {selectedId && !orderReady && (
                <p style={{ fontSize: 12, color: "#a4141f", marginTop: 8 }}>
                  Please review the message above to continue.
                </p>
              )}
            </div>
          </div>
          <div className="panel">
            <button
              className="use-pay-btn"
              style={{ marginTop: 0, marginBottom: 16 }}
              disabled={payDisabled}
              onClick={onPlaceOrder}
            >
              Use this payment method
            </button>
            <h2 className="section-title">Order summary</h2>
            <OrderSummaryPanel
              items={cart}
              subtotal={subtotal}
              tax={tax}
              total={total}
              showTax
            />
          </div>
        </div>
      </div>
      {modalTier && selectedCard && (
        <UtilizationModal
          card={selectedCard}
          tier={modalTier}
          projectedPct={projectedPct}
          onAcknowledge={handleAcknowledge}
        />
      )}
    </div>
  );
}
