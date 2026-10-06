import Button from "./Button.jsx";
import PortraitFrame from "./PortraitFrame.jsx";
import { site } from "../data/content.js";

export default function Hero() {
  return (
    <section id="accueil" className="section hero">
      <div className="container hero__grid">
        <div>
          <p className="eyebrow">
            {site.name} · {site.role}
          </p>
          <h1>Je crée votre site professionnel, clair et adapté aux mobiles.</h1>
          <p className="lead">
            Étudiante en informatique et software engineering à Paris, je conçois des sites
            professionnels pour petites entreprises et indépendants.
          </p>

          <ul className="pills" aria-label="L'essentiel de l'offre">
            <li>Projets à partir de 600 €</li>
            <li>Livraison habituelle sous environ 2 semaines</li>
            <li>{site.location} et projets à distance</li>
          </ul>

          <div className="actions">
            <Button href="#contact">Demander un devis</Button>
            <Button href="#projets" variant="secondary">
              Voir mes projets
            </Button>
            <Button href={site.phoneHref} variant="ghost">
              Appeler
            </Button>
          </div>
        </div>

        <PortraitFrame />
      </div>
    </section>
  );
}