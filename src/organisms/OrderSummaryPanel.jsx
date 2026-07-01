import SummaryRow from "../molecules/SummaryRow.jsx";
import { money } from "../data.js";

export default function OrderSummaryPanel({
  items,
  subtotal,
  tax,
  total,
  showTax,
}) {
  return (
    <div>
      {items.map((i) => (
        <SummaryRow
          key={i.productId}
          label={`${i.product.name} × ${i.qty}`}
          value={money(i.product.price * i.qty)}
        />
      ))}
      {showTax && (
        <SummaryRow label="Shipping & handling" value="$0.00" />
      )}
      {showTax && (
        <SummaryRow label="Estimated tax" value={money(tax)} />
      )}
      <SummaryRow label="Order total" value={money(total)} total />
    </div>
  );
}
