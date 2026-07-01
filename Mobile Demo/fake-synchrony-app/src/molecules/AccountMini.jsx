export default function AccountMini({ title, balance, status }) {
  return (
    <article className="account-mini">
      <div>
        <h3>{title}</h3>
        <p>{status}</p>
      </div>
      <strong>{balance}</strong>
    </article>
  );
}
