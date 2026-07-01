import { TIER_META } from "../data.js";

export default function TierPill({ tier }) {
  const meta = TIER_META[tier];
  return <span className={`tier-pill ${meta.pillClass}`}>{meta.label}</span>;
}
