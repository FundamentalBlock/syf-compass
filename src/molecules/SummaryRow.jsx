export default function SummaryRow({ label, value, total = false }) {
  return (
    <div className={`summary-row${total ? " summary-total" : ""}`}>
      <span>{label}</span>
      <span>{value}</span>
    </div>
  );
}
