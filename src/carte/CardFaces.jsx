import { site, card } from "../data/content.js";
import Icon from "../components/Icon.jsx";
import CardLogo from "./CardLogo.jsx";
import TechArt from "./TechArt.jsx";
import QrCode from "./QrCode.jsx";

const short = (url) => url.replace(/^https?:\/\/(www\.)?/, "");
const mailto = `mailto:${site.email}?subject=${encodeURIComponent("Demande de projet")}`;

// Coordonnées affichées au verso. `text` est ce qui apparaît (lisible aussi sur papier).
// L'adresse du site n'y figure pas : elle est déjà sur le recto et dans le QR code,
// et la place est comptée (5 lignes au maximum avec le téléphone).
const contacts = [
  { icon: "mail", href: mailto, text: site.email, label: "Écrire un e-mail" },
  card.showPhone && card.phone && { icon: "phone", href: card.phoneHref, text: card.phone, label: "Appeler" },
  { icon: "linkedin", href: site.linkedin, text: short(site.linkedin), label: "LinkedIn", external: true },
  { icon: "github", href: site.github, text: short(site.github), label: "GitHub", external: true },
  { icon: "instagram", href: site.instagram, text: short(site.instagram), label: "Instagram", external: true },
].filter(Boolean);

const newTab = { target: "_blank", rel: "noopener noreferrer" };

// Une face = fond + zone de la carte (85 × 55 à l'impression) + contenu avec marge de sécurité.
function Face({ side, hidden, labelledBy, children }) {
  return (
    <section
      className={`bc-face bc-face--${side}`}
      aria-labelledby={labelledBy}
      aria-hidden={hidden || undefined}
      // `inert` empêche d'atteindre au clavier les liens de la face cachée.
      {...(hidden ? { inert: "" } : {})}
    >
      <div className="bc-face__trim">
        <div className="bc-face__content">{children}</div>
      </div>
    </section>
  );
}

export function CardFront({ hidden }) {
  return (
    <Face side="front" hidden={hidden} labelledBy="bc-front-title">
      <CardLogo className="bc-front__logo" />
      <TechArt className="bc-front__art" />

      <div className="bc-front__text">
        <h2 id="bc-front-title" className="bc-front__name">
          {site.name}
        </h2>
        <p className="bc-front__title">{card.title}</p>
        <p className="bc-front__hook">{card.hook}</p>
      </div>

      <div className="bc-front__foot">
        <a className="bc-front__link" href={site.url} {...newTab}>
          <span>{short(site.url)}</span>
          <Icon name="arrow" size={16} />
          <span className="sr-only"> : voir le portfolio (nouvel onglet)</span>
        </a>
        <p className="bc-front__meta">
          <Icon name="pin" size={14} />
          {card.location}
        </p>
      </div>
    </Face>
  );
}

export function CardBack({ hidden }) {
  return (
    <Face side="back" hidden={hidden} labelledBy="bc-back-title">
      <div className="bc-back__main">
        <p className="bc-back__eyebrow">{card.fullName}</p>
        <h2 id="bc-back-title" className="sr-only">
          Présentation et coordonnées
        </h2>
        <p className="bc-back__intro">{card.intro}</p>

        <h3 className="sr-only">Services</h3>
        <ul className="bc-back__services">
          {card.services.map((service) => (
            <li key={service}>
              <Icon name="check" size={12} />
              {service}
            </li>
          ))}
        </ul>

        <h3 className="sr-only">Coordonnées</h3>
        <ul className="bc-back__contacts">
          {contacts.map((c) => (
            <li key={c.icon}>
              <a href={c.href} {...(c.external ? newTab : {})}>
                <Icon name={c.icon} size={14} />
                <span className="sr-only">{c.label} : </span>
                {c.text}
                {c.external && <span className="sr-only"> (nouvel onglet)</span>}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="bc-back__side">
        <QrCode src="/images/qr-anaisweb.svg" url={site.url} label={card.qrLabel} />
        <div className="bc-back__cta">
          <p className="bc-back__cta-text">{card.cta}</p>
          <a className="bc-back__cta-btn" href={mailto}>
            <Icon name="mail" size={14} />
            Me contacter
          </a>
        </div>
      </div>
    </Face>
  );
}
