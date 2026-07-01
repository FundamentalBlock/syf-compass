import { useState } from "react";
import LoadingPage from "./pages/LoadingPage.jsx";
import SynchronyHome from "./pages/SynchronyHome.jsx";
import MorePage from "./pages/MorePage.jsx";
import MarketplacePage from "./pages/MarketplacePage.jsx";
import CartPage from "./pages/CartPage.jsx";
import CheckoutPage from "./pages/CheckoutPage.jsx";
import ConfirmationPage from "./pages/ConfirmationPage.jsx";

export default function App() {
  const [loaded, setLoaded] = useState(false);
  const [view, setView] = useState("home");
  const [cart, setCart] = useState([]);

  function addToCart(productId) {
    setCart((prev) => {
      const existing = prev.find((item) => item.productId === productId);

      if (existing) {
        return prev.map((item) =>
          item.productId === productId ? { ...item, qty: item.qty + 1 } : item
        );
      }

      return [...prev, { productId, qty: 1 }];
    });
  }

  function changeQty(productId, delta) {
    setCart((prev) =>
      prev
        .map((item) =>
          item.productId === productId ? { ...item, qty: item.qty + delta } : item
        )
        .filter((item) => item.qty > 0)
    );
  }

  function removeItem(productId) {
    setCart((prev) => prev.filter((item) => item.productId !== productId));
  }

  function placeOrder() {
    setCart([]);
    setView("confirmation");
  }

  if (!loaded) return <LoadingPage onFinish={() => setLoaded(true)} />;

  if (view === "more") {
    return <MorePage onBack={() => setView("home")} onShop={() => setView("market")} />;
  }

  if (view === "market") {
    return (
      <MarketplacePage
        cart={cart}
        onAdd={addToCart}
        onBack={() => setView("home")}
        onCart={() => setView("cart")}
      />
    );
  }

  if (view === "cart") {
    return (
      <CartPage
        cart={cart}
        onBack={() => setView("market")}
        onCheckout={() => setView("checkout")}
        onQty={changeQty}
        onRemove={removeItem}
      />
    );
  }

  if (view === "checkout") {
    return (
      <CheckoutPage
        cart={cart}
        onBack={() => setView("cart")}
        onPlaceOrder={placeOrder}
      />
    );
  }

  if (view === "confirmation") {
    return <ConfirmationPage onDone={() => setView("home")} />;
  }

  return <SynchronyHome onShop={() => setView("market")} onMore={() => setView("more")} />;
}
