export default function Button({ href, variant = "primary", external = false, children, ...rest }) {
  const extra = external ? { target: "_blank", rel: "noopener noreferrer" } : {};
  return (
    <a className={`btn btn--${variant}`} href={href} {...extra} {...rest}>
      {children}
    </a>
  );
}