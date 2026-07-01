import { RETAILER_PRODUCTS } from "./data/retailers.js";

export const PRODUCTS = [
  {
    id: 1,
    name: "Wireless Noise-Canceling Earbuds",
    price: 79.99,
    emoji: "🎧",
    rating: "4.6",
    reviews: "2,104",
    tag: "Deal",
    color: "#eef2ff",
    delivery: "FREE delivery Tomorrow",
  },
  {
    id: 2,
    name: "Everyday Travel Backpack, 25L",
    price: 49.99,
    emoji: "🎒",
    rating: "4.7",
    reviews: "4,032",
    tag: "Choice",
    color: "#fef2f2",
    delivery: "FREE delivery Wed",
  },
  {
    id: 3,
    name: "LED Desk Lamp with USB-C Port",
    price: 34.99,
    emoji: "💡",
    rating: "4.5",
    reviews: "712",
    tag: "Limited time",
    color: "#fefce8",
    delivery: "FREE delivery Tomorrow",
  },
  {
    id: 4,
    name: "Portable Bluetooth Speaker",
    price: 59.99,
    emoji: "🔊",
    rating: "4.4",
    reviews: "1,567",
    tag: "Popular",
    color: "#faf5ff",
    delivery: "FREE delivery Fri",
  },
  {
    id: 5,
    name: "12-Cup Programmable Coffee Maker",
    price: 89.99,
    emoji: "☕",
    rating: "4.3",
    reviews: "3,320",
    tag: "Home deal",
    color: "#fff7ed",
    delivery: "FREE delivery Tomorrow",
  },
  {
    id: 6,
    name: "Fitness Yoga Mat, 6mm Non-Slip",
    price: 24.99,
    emoji: "🧘",
    rating: "4.6",
    reviews: "891",
    tag: "Best seller",
    color: "#f0fdf4",
    delivery: "FREE delivery Thu",
  },
];

export const CARDS = [
  {
    id: "syn-new",
    brand: "Synchrony Store Card",
    last4: "7788",
    isSynchrony: true,
    balance: 0,
    limit: 1500,
    apr: 29.99,
    pointsMultiplier: 1,
  },
  {
    id: "visa",
    brand: "Visa Platinum",
    last4: "4242",
    isSynchrony: false,
  },
  {
    id: "amex",
    brand: "Amex Gold",
    last4: "9012",
    isSynchrony: false,
  },
  {
    id: "discover",
    brand: "Discover It",
    last4: "3141",
    isSynchrony: false,
  },
];

export function getProductById(productId) {
  const combinedProducts = [
    ...PRODUCTS,
    ...Object.values(RETAILER_PRODUCTS).flat(),
  ];

  return combinedProducts.find((product) => product.id === productId);
}

export const USER = {
  first: "Christopher",
  full: "Christopher Frias",
  city: "Bridgeport",
  state: "CT",
  zip: "06610",
};
