import { useState } from "react";
import LoadingPage from "./pages/LoadingPage.jsx";
import ApplicationPage from "./pages/ApplicationPage.jsx";
import ApprovalSummaryPage from "./pages/ApprovalSummaryPage.jsx";
import SynchronyHome from "./pages/SynchronyHome.jsx";
import MorePage from "./pages/MorePage.jsx";
import RetailerMenuPage from "./pages/RetailerMenuPage.jsx";
import RetailerDetailPage from "./pages/RetailerDetailPage.jsx";
import CartPage from "./pages/CartPage.jsx";
import CheckoutPage from "./pages/CheckoutPage.jsx";
import ConfirmationPage from "./pages/ConfirmationPage.jsx";
import { CARDS, getProductById } from "./data.js";

export default function App() {
  const [loaded, setLoaded] = useState(false);
  const [view, setView] = useState("application");
  const [cart, setCart] = useState([]);
  const [applicantName, setApplicantName] = useState("");
  const [transactions, setTransactions] = useState([]);
  const [points, setPoints] = useState(0);
  const [lastPointsEarned, setLastPointsEarned] = useState(0);
  const [approvedCard, setApprovedCard] = useState({
    limit: 2500,
    apr: 0,
    aprText: "0% APR for 12 months",
  });
  const [selectedRetailer, setSelectedRetailer] = useState("");

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

  function getRewardPoints(totalAmount) {
    if (totalAmount >= 500) return 500;
    if (totalAmount >= 300) return 300;
    if (totalAmount >= 150) return 150;
    if (totalAmount >= 50) return 50;
    return 0;
  }

  function placeOrder(selectedCardId) {
    const subtotal = cart.reduce((sum, { productId, qty }) => {
      const product = getProductById(productId);
      return sum + (product?.price ?? 0) * qty;
    }, 0);

    const tax = subtotal * 0.0635;
    const total = subtotal + tax;
    const selectedCard = CARDS.find((card) => card.id === selectedCardId);
    const earnedPoints = selectedCard?.isSynchrony ? getRewardPoints(total) : 0;

    const newTransactions = cart
      .map(({ productId, qty }) => {
        const product = getProductById(productId);
        if (!product) return null;

        return {
          id: `${product.id}-${Date.now()}-${qty}`,
          title: product.name,
          amount: product.price * qty,
          qty,
          source: selectedRetailer || "Retailer",
          when: "Just now",
        };
      })
      .filter(Boolean);

    if (newTransactions.length) {
      setTransactions((prev) => [...newTransactions, ...prev]);
    }

    if (earnedPoints > 0) {
      setPoints((prev) => prev + earnedPoints);
    }
    setLastPointsEarned(earnedPoints);
    setCart([]);
    setView("confirmation");
  }

  if (!loaded) return <LoadingPage onFinish={() => setLoaded(true)} />;

  function handleApplicationSubmit(form) {
    setApplicantName(form.fullName.trim());
    setApprovedCard({
      limit: 2500,
      apr: 0,
      aprText: "0% APR for 12 months",
    });
    setView("approval");
  }

  if (view === "application") {
    return <ApplicationPage onSubmit={handleApplicationSubmit} />;
  }

  if (view === "approval") {
    return <ApprovalSummaryPage cardSummary={approvedCard} onAccept={() => setView("home")} />;
  }

  if (view === "more") {
    return <MorePage onBack={() => setView("home")} onShop={() => setView("market")} />;
  }

  if (view === "market") {
    return (
      <RetailerMenuPage
        applicantName={applicantName}
        onBack={() => setView("home")}
        onSelectRetailer={(retailerName) => {
          setSelectedRetailer(retailerName);
          setView("retailer");
        }}
      />
    );
  }

  if (view === "retailer") {
    return (
      <RetailerDetailPage
        applicantName={applicantName}
        cart={cart}
        retailerName={selectedRetailer || "Retailer"}
        onAdd={addToCart}
        onBack={() => setView("market")}
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
    const accountBalance = transactions.reduce((sum, transaction) => sum + transaction.amount, 0);

    return (
      <CheckoutPage
        cart={cart}
        applicantName={applicantName}
        accountBalance={accountBalance}
        approvedCard={approvedCard}
        onBack={() => setView("cart")}
        onPlaceOrder={placeOrder}
      />
    );
  }

  if (view === "confirmation") {
    return <ConfirmationPage pointsEarned={lastPointsEarned} onDone={() => setView("home")} />;
  }

  return (
    <SynchronyHome
      applicantName={applicantName}
      transactions={transactions}
      points={points}
      creditLimit={approvedCard.limit}
      aprText={approvedCard.aprText}
      onShop={() => setView("market")}
      onMore={() => setView("more")}
    />
  );
}
