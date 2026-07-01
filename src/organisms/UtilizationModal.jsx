import { useState } from "react";
import Button from "../atoms/Button.jsx";
import TierPill from "../atoms/TierPill.jsx";
import StatBox from "../atoms/StatBox.jsx";
import { TIER_META, money } from "../data.js";

export default function UtilizationModal({
  card,
  tier,
  projectedPct,
  onAcknowledge,
}) {
  const meta = TIER_META[tier];
  const [checked, setChecked] = useState(false);
  const currentPct = Math.round((card.balance / card.limit) * 100);

  let message = "";
  if (tier === "green") {
    message = `You're in good shape on this card. This purchase would bring you to about ${projectedPct}% utilization, well within a healthy range.`;
  } else if (tier === "yellow") {
    message = `You're carrying a moderate balance on this card. This purchase is still within a manageable range, but keep an eye on your utilization.`;
  } else if (tier === "red") {
    message = `This card is already close to its limit. Completing this purchase would push your utilization to about ${projectedPct}%. High utilization can hurt your credit score and make it harder to pay down your balance.`;
  }

  return (
    <div className="overlay">
      <div className="modal">
        <div className="modal-brand">
          <span className="dot" />
          SYF Compass
        </div>
        <div className="modal-head">
          <div
            className="modal-icon"
            style={{ background: meta.iconBg, color: meta.barColor }}
          >
            {meta.icon}
          </div>
          <p className="modal-title">Before you continue</p>
        </div>
        <p className="modal-sub">
          {card.brand} •••• {card.last4} — <TierPill tier={tier} />
        </p>
        <div className="bar-track">
          <div
            className="bar-fill"
            style={{ width: `${currentPct}%`, background: meta.barColor }}
          />
        </div>
        <div style={{ fontSize: 12, color: "#565959" }}>
          {currentPct}% of your credit limit currently in use
        </div>
        <div className="stat-grid">
          <StatBox label="Current balance" value={money(card.balance)} />
          <StatBox label="Credit limit" value={money(card.limit)} />
          <StatBox label="APR" value={`${card.apr}%`} />
          <StatBox
            label="After this purchase"
            value={`${projectedPct}%`}
          />
        </div>
        {message && <div className="modal-msg">{message}</div>}
        {tier === "red" ? (
          <>
            <label className="check-row">
              <input
                type="checkbox"
                checked={checked}
                onChange={(e) => setChecked(e.target.checked)}
              />
              I understand this purchase will raise my utilization to about{" "}
              {projectedPct}% and may increase the interest I owe.
            </label>
            <Button
              variant="primary"
              block
              disabled={!checked}
              onClick={onAcknowledge}
            >
              Confirm and continue
            </Button>
          </>
        ) : (
          <Button variant="primary" block onClick={onAcknowledge}>
            Continue to checkout
          </Button>
        )}
      </div>
    </div>
  );
}
