import { useEffect } from "react";
import PhoneFrame from "../organisms/PhoneFrame.jsx";

export default function LoadingPage({ onFinish }) {
  useEffect(() => {
    const timer = setTimeout(onFinish, 1200);
    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <PhoneFrame variant="loading-phone">
      <div className="sync-logo-dot" />
      <h1>synchrony</h1>
      <p>Loading your mobile wallet...</p>
    </PhoneFrame>
  );
}
