export default function MiniRisk({ compass }) {
  return (
    <div className={`mini-risk ${compass.tier}`}>
      <span>SYF Compass</span>
      <strong>
        {compass.currentPct}% → {compass.projectedPct}% utilization
      </strong>
    </div>
  );
}
