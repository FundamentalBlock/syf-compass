import Button from "../atoms/Button.jsx";
import ShopShell from "../organisms/ShopShell.jsx";

const RETAILERS = [
  {
    id: "amazon",
    name: "Amazon",
    blurb: "Shop everyday essentials and electronics with flexible Synchrony financing.",
    accent: "#ff9900",
  },
  {
    id: "best-buy",
    name: "Best Buy",
    blurb: "Browse tech, appliances, and home upgrades from a trusted retailer.",
    accent: "#0046be",
  },
  {
    id: "target",
    name: "Target",
    blurb: "Pick up home, beauty, and seasonal essentials with your approved card.",
    accent: "#c8102e",
  },
  {
    id: "walmart",
    name: "Walmart",
    blurb: "Continue shopping across groceries, home goods, and everyday savings.",
    accent: "#0071ce",
  },
];

export default function RetailerMenuPage({ applicantName = "", onBack, onSelectRetailer }) {
  const displayName = applicantName.trim() || "there";

  return (
    <ShopShell title="Retailers" onBack={onBack} onCart={() => {}} cartCount={0}>
      <div className="retailer-scroll">
        <section className="retailer-intro">
          <p className="eyebrow">Partnered retailers</p>
          <h2>{displayName}, choose where you want to shop</h2>
          <p>
            Synchrony partners with these brands so you can continue shopping from the retailer of
            your choice.
          </p>
        </section>

        <section className="retailer-list">
          {RETAILERS.map((retailer) => (
            <button
              key={retailer.id}
              className="retailer-card"
              onClick={() => onSelectRetailer(retailer.name)}
            >
              <span className="retailer-badge" style={{ background: retailer.accent }} />
              <div>
                <strong>{retailer.name}</strong>
                <p>{retailer.blurb}</p>
              </div>
            </button>
          ))}
        </section>

        <section className="retailer-footer">
          <Button onClick={onBack}>Back</Button>
        </section>
      </div>
    </ShopShell>
  );
}
