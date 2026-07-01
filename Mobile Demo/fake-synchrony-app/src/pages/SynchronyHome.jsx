import Button from "../atoms/Button.jsx";
import Eyebrow from "../atoms/Eyebrow.jsx";
import AccountMini from "../molecules/AccountMini.jsx";
import BottomNav from "../organisms/BottomNav.jsx";
import PhoneFrame from "../organisms/PhoneFrame.jsx";

export default function SynchronyHome({ onShop, onMore }) {
  return (
    <PhoneFrame>
      <header className="sync-header">
        <div>
          <Eyebrow>Good morning</Eyebrow>
          <h1>Christopher</h1>
        </div>
        <button className="avatar">CF</button>
      </header>

      <section className="insight-card">
        <Eyebrow>SYF Compass</Eyebrow>
        <h2>Shop smarter with credit guidance at checkout.</h2>
        <p>
          Earn rewards when you shop through Synchrony, then get a credit
          health check before you pay.
        </p>
        <Button onClick={onShop}>Shop with points</Button>
      </section>

      <section className="account-list">
        <AccountMini title="Synchrony Store Card" balance="$150.00" status="Low utilization" />
        <AccountMini title="CareCredit" balance="$300.00" status="Payment due Oct 30" />
        <AccountMini title="Verizon" balance="$100.00" status="Autopay on" />
      </section>

      <BottomNav active="accounts" onShop={onShop} onMore={onMore} />
    </PhoneFrame>
  );
}
