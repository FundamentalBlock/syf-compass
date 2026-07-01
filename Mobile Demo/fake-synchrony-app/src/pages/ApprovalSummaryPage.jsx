import Button from "../atoms/Button.jsx";
import PhoneFrame from "../organisms/PhoneFrame.jsx";

function formatMoney(amount) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(amount);
}

export default function ApprovalSummaryPage({ cardSummary = { limit: 2500, aprText: "0% APR for 12 months" }, onAccept }) {
  return (
    <PhoneFrame variant="sync-screen">
      <div className="application-shell">
        <div className="application-header">
          <p className="eyebrow">Approved</p>
          <h1>Your card is ready</h1>
          <p>
            Here’s a quick AI-generated summary of the card you’re getting, with the key details
            pulled to the front.
          </p>
        </div>

        <div className="application-card">
          <div className="summary-pill">AI summary</div>
          <ul className="summary-list">
            <li>
              <strong>Starting limit:</strong> up to {formatMoney(cardSummary.limit)}
            </li>
            <li>
              <strong>Intro offer:</strong> {cardSummary.aprText}
            </li>
            <li>
              <strong>Rewards:</strong> 3x points on everyday purchases
            </li>
            <li>
              <strong>Annual fee:</strong> $0 for the first year
            </li>
          </ul>

          <Button onClick={onAccept}>Accept & continue</Button>
        </div>
      </div>
    </PhoneFrame>
  );
}
