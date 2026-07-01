import Button from "../atoms/Button.jsx";
import Eyebrow from "../atoms/Eyebrow.jsx";
import BottomNav from "../organisms/BottomNav.jsx";
import PhoneFrame from "../organisms/PhoneFrame.jsx";

function formatMoney(amount) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(amount);
}

export default function SynchronyHome({
  applicantName = "",
  transactions = [],
  points = 0,
  creditLimit = 2500,
  aprText = "0% APR for 12 months",
  onShop,
  onMore,
}) {
  const displayName = applicantName.trim() || "there";
  const initials = applicantName
    .trim()
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase() || "U";

  // Calculate card balance
  const cardLimit = creditLimit;
  const totalSpent = transactions.reduce((sum, t) => sum + t.amount, 0);
  const availableBalance = cardLimit - totalSpent;

  return (
    <PhoneFrame>
      <header className="sync-header">
        <div className="sync-header-left">
          <div>
            <Eyebrow>Hello</Eyebrow>
            <h1>{displayName}</h1>
          </div>
          <div className="top-points-pill">
            <p>Points</p>
            <strong>{points} pts</strong>
          </div>
        </div>
        <button className="avatar">{initials}</button>
      </header>

      <section className="card-display">
        <div className="credit-card">
          <div className="card-header">
            <span className="card-chip">●●●●</span>
            <span className="card-brand">Synchrony</span>
          </div>
          <div className="card-number">•••• •••• •••• 4829</div>
          <div className="card-footer">
            <div>
              <p className="card-label">Cardholder</p>
              <p className="card-name">{displayName.toUpperCase()}</p>
            </div>
            <div>
              <p className="card-label">Exp</p>
              <p className="card-exp">12/27</p>
            </div>
          </div>
        </div>

        <div className="card-statement">
          <div className="statement-item">
            <p>Current Balance</p>
            <strong>{formatMoney(totalSpent)}</strong>
          </div>
          <div className="statement-divider"></div>
          <div className="statement-item">
            <p>Available Credit</p>
            <strong className={availableBalance < 300 ? "warning" : ""}>{formatMoney(availableBalance)}</strong>
          </div>
          <div className="statement-divider"></div>
          <div className="statement-item">
            <p>Credit Limit</p>
            <strong>{formatMoney(cardLimit)}</strong>
          </div>
          <div className="statement-divider"></div>
          <div className="statement-item">
            <p>Intro APR</p>
            <strong className="statement-apr">{aprText}</strong>
          </div>
        </div>
      </section>

      <section className="transaction-card">
        <div className="transaction-card-header">
          <h3>Recent spending</h3>
          <span>{transactions.length ? "Live activity" : "No purchases yet"}</span>
        </div>

        {transactions.length === 0 ? (
          <p className="transaction-empty">
            Your spending log will appear here after you buy something in the shop.
          </p>
        ) : (
          <div className="transaction-list">
            {transactions.map((transaction) => (
              <div key={transaction.id} className="transaction-row">
                <div>
                  <strong>{transaction.title}</strong>
                  <p>
                    {transaction.source || "Retailer"} • {transaction.qty} item{transaction.qty > 1 ? "s" : ""} • {transaction.when}
                  </p>
                </div>
                <span>{formatMoney(transaction.amount)}</span>
              </div>
            ))}
          </div>
        )}
      </section>

      <BottomNav active="accounts" onShop={onShop} onMore={onMore} />
    </PhoneFrame>
  );
}
