// Shared mock data and small pure helper functions used across the app.

export const USER = {
  first: "Christopher",
  full: "Christopher Frias",
  city: "Bridgeport",
  zip: "06610",
};

export const PRODUCTS = [
  {
    id: 1,
    name: "Wireless Earbuds, Noise Cancelling",
    price: 29.99,
    emoji: "🎧",
    color: "#eef2ff",
    rating: "4.3 ★ (2,104)",
  },
  {
    id: 2,
    name: "Non-Slip Yoga Mat, 6mm",
    price: 19.99,
    emoji: "🧘",
    color: "#f0fdf4",
    rating: "4.6 ★ (891)",
  },
  {
    id: 3,
    name: "12-Cup Programmable Coffee Maker",
    price: 49.99,
    emoji: "☕",
    color: "#fff7ed",
    rating: "4.4 ★ (3,320)",
  },
  {
    id: 4,
    name: "Portable Bluetooth Speaker",
    price: 34.99,
    emoji: "🔊",
    color: "#faf5ff",
    rating: "4.2 ★ (1,567)",
  },
  {
    id: 5,
    name: "LED Desk Lamp with USB Port",
    price: 24.99,
    emoji: "💡",
    color: "#fefce8",
    rating: "4.5 ★ (712)",
  },
  {
    id: 6,
    name: "Everyday Travel Backpack, 25L",
    price: 39.99,
    emoji: "🎒",
    color: "#fef2f2",
    rating: "4.7 ★ (4,032)",
  },
];

export const CARDS = [
  {
    id: "visa",
    brand: "Visa",
    last4: "4242",
    isSynchrony: false,
    color: "#1a1f71",
  },
  {
    id: "mc",
    brand: "Mastercard",
    last4: "1234",
    isSynchrony: false,
    color: "#eb001b",
  },
  {
    id: "syn-low",
    brand: "Synchrony Store Card",
    last4: "7788",
    isSynchrony: true,
    color: "#004f9f",
    balance: 150,
    limit: 1000,
    apr: 29.99,
  },
  {
    id: "syn-mid",
    brand: "Synchrony Store Card",
    last4: "3311",
    isSynchrony: true,
    color: "#004f9f",
    balance: 550,
    limit: 1000,
    apr: 29.99,
  },
  {
    id: "syn-high",
    brand: "Synchrony Store Card",
    last4: "9042",
    isSynchrony: true,
    color: "#004f9f",
    balance: 850,
    limit: 1000,
    apr: 29.99,
  },
];

export function getTier(pct) {
  if (pct < 30) return "green";
  if (pct < 70) return "yellow";
  return "red";
}

export const TIER_META = {
  green: {
    label: "Low risk",
    pillClass: "tier-green",
    barColor: "#2e9e42",
    icon: "✓",
    iconBg: "#d7f2dc",
  },
  yellow: {
    label: "Moderate risk",
    pillClass: "tier-yellow",
    barColor: "#e0a300",
    icon: "!",
    iconBg: "#fdf0d2",
  },
  red: {
    label: "High risk",
    pillClass: "tier-red",
    barColor: "#c81e2c",
    icon: "!",
    iconBg: "#fbdede",
  },
};

export function money(n) {
  return n.toLocaleString("en-US", { style: "currency", currency: "USD" });
}
