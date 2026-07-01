import Button from "../atoms/Button.jsx";
import PhoneFrame from "../organisms/PhoneFrame.jsx";

export default function ConfirmationPage({ onDone }) {
  return (
    <PhoneFrame variant="sync-screen confirmation">
      <div className="success-icon">✓</div>
      <h1>Order placed</h1>
      <p>This was a demo checkout. No real purchase was made.</p>
      <Button onClick={onDone}>Back to Synchrony</Button>
    </PhoneFrame>
  );
}
