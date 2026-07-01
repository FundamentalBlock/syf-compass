export default function CardBadge({ label, color }) {
  return (
    <div className="card-badge" style={{ background: color }}>
      {label}
    </div>
  );
}
