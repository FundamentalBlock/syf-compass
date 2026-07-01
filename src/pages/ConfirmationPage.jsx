import Button from "../atoms/Button.jsx";
import { USER } from "../data.js";

export default function ConfirmationPage({ onNav }) {
  return (
    <div className="page">
      <div className="panel confirm-box">
        <div className="confirm-check">✅</div>
        <h2 style={{ margin: "0 0 8px" }}>Order placed, {USER.first}!</h2>
        <p style={{ color: "#565959", marginBottom: 20 }}>
          This was a demo checkout — no real charge was made.
        </p>
        <Button variant="primary" onClick={() => onNav("home")}>
          Back to shopping
        </Button>
      </div>
    </div>
  );
}
