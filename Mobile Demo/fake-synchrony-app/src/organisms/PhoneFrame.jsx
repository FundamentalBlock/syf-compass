export default function PhoneFrame({ children, variant = "sync-screen" }) {
  return (
    <main className="app-bg center">
      <section className={`phone ${variant}`}>{children}</section>
    </main>
  );
}
