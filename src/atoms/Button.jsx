export default function Button({
  children,
  variant = "secondary",
  block = false,
  onClick,
  disabled = false,
  style = {},
}) {
  const classes = ["btn"];
  if (variant === "primary") classes.push("primary");
  if (variant === "secondary") classes.push("secondary");
  if (block) classes.push("btn-block");

  return (
    <button
      className={classes.join(" ")}
      onClick={onClick}
      disabled={disabled}
      style={style}
    >
      {children}
    </button>
  );
}
