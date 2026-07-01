export default function Eyebrow({ children, dark = false }) {
  return <p className={`eyebrow${dark ? " dark" : ""}`}>{children}</p>;
}
