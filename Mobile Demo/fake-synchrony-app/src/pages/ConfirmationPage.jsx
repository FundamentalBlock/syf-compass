import Button from "../atoms/Button.jsx";
import PhoneFrame from "../organisms/PhoneFrame.jsx";

export default function ConfirmationPage({ onDone, pointsEarned = 0 }) {
  return (
    <PhoneFrame variant="sync-screen confirmation">
      <div className="success-icon">✓</div>
      <h1>Order placed</h1>
      <p>Your demo order is complete and your rewards are ready.</p>

      <div className="points-earned-card">
        <span>Points earned</span>
        <strong>{pointsEarned} pts</strong>
      </div>

      <Button onClick={onDone}>Back to Synchrony</Button>
    </PhoneFrame>
  );
}
