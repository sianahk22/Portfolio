import { site, card } from "../data/content.js";
import Icon from "../components/Icon.jsx";
import CardLogo from "./CardLogo.jsx";
import QrCode from "./QrCode.jsx";
import DeskArt from "./DeskArt.jsx";

const short = (url) => url.replace(/^https?:\/\/(www\.)?/, "");
const mailto = `mailto:${site.email}?subject=${encodeURIComponent("Demande de projet")}`;

// Coordonnées écrites au verso (lisibles aussi sur papier) : l'e-mail, et le téléphone s'il est activé.
const contacts = [
  { icon: "mail", href: mailto, text: site.email, label: "Écrire un e-mail" },
  card.showPhone && card.phone && { icon: "phone", href: card.phoneHref, text: card.phone, label: "Appeler" },
].filter(Boolean);

// Réseaux : seulement les logos, chacun cliquable (le nom est lu par les lecteurs d'écran).
const socials = [
  { icon: "linkedin", href: site.linkedin, label: "LinkedIn" },
  { icon: "github", href: site.github, label: "GitHub" },
  { icon: "instagram", href: site.instagram, label: "Instagram" },
];

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
      {/* Photo du bureau, le soir (miroir du verso : photo à gauche, panneau à droite) */}
      <div className="bc-front__visual">
        <DeskArt className="bc-front__desk" screen="/images/projet-portfolio.jpg" variant="night" />
      </div>

      {/* Panneau sombre : logo, nom, métier, accroche, lien vers le portfolio et lieu */}
      <div className="bc-front__panel">
        <CardLogo className="bc-front__logo" />

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
      </div>
    </Face>
  );
}

export function CardBack({ hidden }) {
  return (
    <Face side="back" hidden={hidden} labelledBy="bc-back-title">
      {/* Panneau coloré : nom, services, coordonnées, réseaux et QR code en bas à gauche */}
      <div className="bc-back__info">
        <p className="bc-back__eyebrow">{card.fullName}</p>
        <h2 id="bc-back-title" className="sr-only">
          Services et coordonnées
        </h2>

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
              <a href={c.href}>
                <Icon name={c.icon} size={14} />
                <span className="sr-only">{c.label} : </span>
                {c.text}
              </a>
            </li>
          ))}
        </ul>
        <ul className="bc-back__socials" aria-label="Réseaux">
          {socials.map((s) => (
            <li key={s.icon}>
              <a href={s.href} {...newTab} aria-label={`${s.label} (nouvel onglet)`}>
                <Icon name={s.icon} size={16} />
              </a>
            </li>
          ))}
        </ul>

        <QrCode src="/images/qr-anaisweb.svg" url={site.url} label={card.qrLabel} />
      </div>

      {/* Scène de bureau et appel à l'action, posé sur le bureau */}
      <div className="bc-back__visual">
        <DeskArt className="bc-back__desk" screen="/images/projet-portfolio.jpg" />
        <a className="bc-back__cta" href={`${site.url}/#contact`} {...newTab}>
          {card.cta}
          <span className="sr-only"> : formulaire de contact (nouvel onglet)</span>
        </a>
      </div>
    </Face>
  );
}
