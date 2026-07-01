export default function SummaryLine({ label, value, total = false }) {
  return (
    <div className={`summary-line ${total ? "total" : ""}`}>
      <span>{label}</span>
      <strong>{value}</strong>
    </div>
  );
}
