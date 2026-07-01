import { useState } from "react";
import Navbar from "./organisms/Navbar.jsx";
import HomePage from "./pages/HomePage.jsx";
import CartPage from "./pages/CartPage.jsx";
import CheckoutPage from "./pages/CheckoutPage.jsx";
import ConfirmationPage from "./pages/ConfirmationPage.jsx";
import { PRODUCTS } from "./data.js";

export default function App() {
  const [view, setView] = useState("home");
  const [cart, setCart] = useState([]);

  function addToCart(productId) {
    setCart((prev) => {
      const existing = prev.find((i) => i.productId === productId);
      if (existing) {
        return prev.map((i) =>
          i.productId === productId ? { ...i, qty: i.qty + 1 } : i
        );
      }
      return [...prev, { productId, qty: 1 }];
    });
  }

  function changeQty(productId, delta) {
    setCart((prev) =>
      prev
        .map((i) =>
          i.productId === productId ? { ...i, qty: i.qty + delta } : i
        )
        .filter((i) => i.qty > 0)
    );
  }

  function removeItem(productId) {
    setCart((prev) => prev.filter((i) => i.productId !== productId));
  }

  function placeOrder() {
    setCart([]);
    setView("confirmation");
  }

  const cartWithProducts = cart.map((ci) => ({
    ...ci,
    product: PRODUCTS.find((p) => p.id === ci.productId),
  }));
  const cartCount = cart.reduce((s, i) => s + i.qty, 0);

  return (
    <div>
      {view !== "checkout" && (
        <Navbar cartCount={cartCount} onNav={setView} />
      )}
      {view === "home" && <HomePage onAddToCart={addToCart} />}
      {view === "cart" && (
        <CartPage
          cart={cartWithProducts}
          onQty={changeQty}
          onRemove={removeItem}
          onNav={setView}
        />
      )}
      {view === "checkout" && (
        <CheckoutPage
          cart={cartWithProducts}
          onNav={setView}
          onPlaceOrder={placeOrder}
        />
      )}
      {view === "confirmation" && <ConfirmationPage onNav={setView} />}
    </div>
  );
}
