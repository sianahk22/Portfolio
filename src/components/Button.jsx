export default function Button({ href, variant = "primary", external = false, className = "", children, ...rest }) {
  const extra = external ? { target: "_blank", rel: "noopener noreferrer" } : {};
  return (
    <a className={`btn btn--${variant} ${className}`.trim()} href={href} {...extra} {...rest}>
      {children}
    </a>
  );
}
