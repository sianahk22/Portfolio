import { useEffect, useState } from "react";
import { nav, site } from "../data/content.js";
import Logo from "./Logo.jsx";
import Button from "./Button.jsx";

export default function Header() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  // Fermer le menu mobile avec la touche Échap.
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="header">
      <div className="header__bar">
        <a href="#accueil" className="brand" onClick={close}>
          <Logo size={34} />
          <span>
            {site.name}
            <small>{site.role}</small>
          </span>
        </a>

        <button
          type="button"
          className="burger"
          aria-expanded={open}
          aria-controls="menu"
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="burger__lines" aria-hidden="true" />
        </button>

        <nav id="menu" className={`nav ${open ? "is-open" : ""}`} aria-label="Navigation principale">
          <ul>
            {nav.map((item) => (
              <li key={item.href}>
                <a href={item.href} onClick={close}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <Button href="#contact" onClick={close} className="nav__cta">
            Me contacter
          </Button>
        </nav>
      </div>
    </header>
  );
}
