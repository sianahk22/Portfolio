import { useState } from "react";
import { site, card } from "../data/content.js";
import Icon from "../components/Icon.jsx";
import Logo from "../components/Logo.jsx";
import { CardFront, CardBack } from "./CardFaces.jsx";

const mailto = `mailto:${site.email}?subject=${encodeURIComponent("Demande de projet")}`;
const pageUrl = `${site.url}/carte/`;

export default function CardPage() {
  const [flipped, setFlipped] = useState(false);
  const [shareMsg, setShareMsg] = useState("");

  // Partage natif sur mobile ; sinon, copie du lien dans le presse-papiers.
  async function share() {
    try {
      if (navigator.share) {
        await navigator.share({ title: `${site.name} — ${card.title}`, url: pageUrl });
        return;
      }
      await navigator.clipboard.writeText(pageUrl);
      setShareMsg("Lien copié dans le presse-papiers.");
    } catch (err) {
      // Partage annulé par l'utilisateur : rien à signaler.
      if (err?.name !== "AbortError") setShareMsg(`Copie impossible. Le lien : ${pageUrl}`);
    }
  }

  return (
    <>
      <a href="#carte" className="skip-link">
        Aller à la carte
      </a>
      <header className="bc-top">
        <a className="bc-top__brand" href="/">
          <Logo size={32} />
          <span>{site.name}</span>
          <span className="sr-only"> : retour au portfolio</span>
        </a>
        <a className="bc-top__back" href="/">
          Voir le portfolio
        </a>
      </header>

      <main className="bc-page">
        <div className="bc-intro">
          <p className="bc-intro__eyebrow">Carte de visite</p>
          <h1 className="bc-intro__title">
            {site.name}, {card.title.toLowerCase()}
          </h1>
        </div>

        <div className="bc-stage" id="carte" tabIndex={-1}>
          <div className={`bc-card${flipped ? " is-flipped" : ""}`}>
            <CardFront hidden={flipped} />
            <CardBack hidden={!flipped} />
          </div>
        </div>

        <div className="bc-actions" role="group" aria-label="Actions sur la carte">
          <button type="button" className="btn btn--secondary" onClick={() => setFlipped((f) => !f)}>
            <Icon name="rotate" size={18} />
            {flipped ? "Voir le recto" : "Voir le verso"}
          </button>
          <button type="button" className="btn btn--primary" onClick={() => window.print()}>
            <Icon name="printer" size={18} />
            Télécharger la carte au format PDF
          </button>
          <a className="btn btn--secondary" href={mailto}>
            <Icon name="mail" size={18} />
            M'écrire
          </a>
          {card.showPhone && card.phone && (
            <a className="btn btn--secondary" href={card.phoneHref}>
              <Icon name="phone" size={18} />
              Appeler
            </a>
          )}
          <button type="button" className="btn btn--ghost" onClick={share}>
            <Icon name="external" size={18} />
            Partager
          </button>
        </div>
        <p className="bc-hint" role="status">
          {shareMsg ||
            "Pour le PDF : dans la fenêtre d'impression, choisissez « Enregistrer au format PDF ». Format 85 × 55 mm, recto-verso, avec 3 mm de fond perdu."}
        </p>

        <p className="bc-about">{card.about}</p>

        <ul className="bc-facts" aria-label="En bref">
          {[card.fullName, ...card.facts].map((fact) => (
            <li key={fact}>{fact}</li>
          ))}
          <li>{card.location}</li>
        </ul>
      </main>
    </>
  );
}
