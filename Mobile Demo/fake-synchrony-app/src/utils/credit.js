export function getTier(projectedPct) {
  if (projectedPct < 30) return "green";
  if (projectedPct < 80) return "yellow";
  return "red";
}

export function getTierCopy(tier) {
  if (tier === "green") {
    return {
      title: "Great choice",
      text: "This purchase keeps your utilization in a healthy range.",
      action: "Continue",
    };
  }

  if (tier === "yellow") {
    return {
      title: "Heads up",
      text: "This purchase is still manageable, but your utilization is climbing. Try paying this balance before your statement closes.",
      action: "I understand",
    };
  }

  return {
    title: "We recommend another option",
    text: "This purchase would push this card above 80% utilization. High utilization can hurt credit health and increase interest owed.",
    action: "Confirm anyway",
  };
}

export function calculateCompass(card, purchaseTotal) {
  if (!card?.isSynchrony) return null;

  const currentPct = Math.round((card.balance / card.limit) * 100);
  const projectedBalance = card.balance + purchaseTotal;
  const projectedPct = Math.round((projectedBalance / card.limit) * 100);
  const tier = getTier(projectedPct);

  return {
    currentPct,
    projectedPct,
    projectedBalance,
    tier,
    copy: getTierCopy(tier),
  };
}
