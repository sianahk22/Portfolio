import { useState } from "react";
import { nav, site, mailtoQuote } from "../data/content.js";
import Logo from "./Logo.jsx";
import Button from "./Button.jsx";

export default function Sidebar() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <>
      <header className="topbar">
        <a href="#accueil" className="brand" aria-label="Anaïs Bay, retour à l'accueil">
          <Logo size={36} />
          <span>{site.name}</span>
        </a>
        <div className="topbar__actions">
          <Button href={site.phoneHref} variant="primary">
            Appeler
          </Button>
          <button
            type="button"
            className="burger"
            aria-expanded={open}
            aria-controls="menu"
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <span aria-hidden="true">{open ? "✕" : "☰"}</span>
          </button>
        </div>
      </header>

      <aside id="menu" className={`sidebar ${open ? "is-open" : ""}`}>
        <a href="#accueil" className="brand sidebar__brand" onClick={close}>
          <Logo size={44} />
          <span>
            {site.name}
            <small>{site.role}</small>
          </span>
        </a>

        <nav aria-label="Navigation principale">
          <ul>
            {nav.map((item) => (
              <li key={item.href}>
                <a href={item.href} onClick={close}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="sidebar__cta">
          <Button href="#contact" onClick={close}>
            Demander un devis
          </Button>
          <Button href={site.phoneHref} variant="secondary">
            Appeler
          </Button>
        </div>
      </aside>
    </>
  );
}