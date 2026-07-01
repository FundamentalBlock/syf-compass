export default function Button({
  children,
  variant = "primary",
  block = true,
  disabled = false,
  onClick,
  className = "",
}) {
  const classes = [
    variant === "primary" ? "primary-btn" : "secondary-btn",
    block ? "btn-block" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button className={classes} disabled={disabled} onClick={onClick}>
      {children}
    </button>
  );
}
