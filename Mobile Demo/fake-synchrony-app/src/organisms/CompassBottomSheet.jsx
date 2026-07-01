import { useState } from "react";
import Button from "../atoms/Button.jsx";
import Eyebrow from "../atoms/Eyebrow.jsx";
import Stat from "../atoms/Stat.jsx";
import { money } from "../utils/money.js";

export default function CompassBottomSheet({
  card,
  total,
  compass,
  onClose,
  onContinue,
}) {
  const [checked, setChecked] = useState(false);
  const needsConfirm = compass.tier === "red";
  const aprLabel = card?.aprLabel || `${card?.apr ?? 0}%`;
  const sampleCarryAmount = 200;
  const sampleCarryMonths = 2;
  const monthlyRate = (card?.apr ?? 0) / 100 / 12;
  const sampleInterest = sampleCarryAmount * monthlyRate * sampleCarryMonths;
  const interestText = card?.apr
    ? `If you carried $200 for 2 months at this rate, you’d pay about ${money(sampleInterest)} in interest.`
    : "With a 0% intro APR, carrying a balance for a while would cost you $0 in interest during the intro period.";
  const recommendation = compass.tier === "green"
    ? "This is a healthy balance range, and paying it down before your statement closes can keep your credit profile strong."
    : compass.tier === "yellow"
      ? "This is still manageable, but paying a little extra now can prevent interest from stacking up."
      : "This balance would be high for this card, so it may be smarter to use a lower-utilization option if you can.";

  return (
    <div className="sheet-backdrop">
      <section className={`bottom-sheet ${compass.tier}`}>
        <div className="sheet-handle" />

        <header>
          <div>
            <Eyebrow dark>SYF Compass</Eyebrow>
            <h2>{compass.copy.title}</h2>
          </div>
          <button onClick={onClose}>×</button>
        </header>

        <p className="sheet-copy">{compass.copy.text}</p>

        <div className="util-row">
          <div>
            <span>Now</span>
            <strong>{compass.currentPct}%</strong>
          </div>
          <div className="arrow">→</div>
          <div>
            <span>After purchase</span>
            <strong>{compass.projectedPct}%</strong>
          </div>
        </div>

        <div className="bar-track">
          <div
            className="bar-current"
            style={{ width: `${Math.min(compass.currentPct, 100)}%` }}
          />
          <div
            className="bar-projected"
            style={{ width: `${Math.min(compass.projectedPct, 100)}%` }}
          />
        </div>

        <div className="stat-grid">
          <Stat label="Purchase total" value={money(total)} />
          <Stat label="New balance" value={money(compass.projectedBalance)} />
          <Stat label="Credit limit" value={money(card.limit)} />
          <Stat label="APR" value={aprLabel} />
        </div>

        <div className="sheet-explain-card">
          <p>{interestText}</p>
          <strong>{recommendation}</strong>
        </div>

        {needsConfirm && (
          <label className="confirm-check">
            <input
              checked={checked}
              onChange={(e) => setChecked(e.target.checked)}
              type="checkbox"
            />
            I understand this may increase my utilization and interest owed.
          </label>
        )}

        <div className="sheet-actions">
          <Button variant="secondary" onClick={onClose}>
            Switch card
          </Button>
          <Button disabled={needsConfirm && !checked} onClick={onContinue}>
            {compass.copy.action}
          </Button>
        </div>
      </section>
    </div>
  );
}
