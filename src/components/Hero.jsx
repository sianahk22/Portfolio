import Button from "./Button.jsx";
import PortraitFrame from "./PortraitFrame.jsx";
import { site, hero } from "../data/content.js";

export default function Hero() {
  return (
    <section id="accueil" className="section hero">
      <div className="container hero__grid">
        <div className="hero__text">
          <p className="eyebrow">
            {site.name} · {site.role}
          </p>
          <h1>{hero.title}</h1>
          <p className="lead">{hero.lead}</p>

          <ul className="pills" aria-label="En bref">
            {hero.highlights.map((h) => (
              <li key={h}>{h}</li>
            ))}
          </ul>

          <div className="actions">
            <Button href="#contact">Discuter de mon projet</Button>
            <Button href="#projets" variant="secondary">
              Voir mes projets
            </Button>
          </div>
          <p className="hero__recruiters">
            Vous recrutez ? <a href="#a-propos">Découvrir mon profil</a>
          </p>
        </div>

        <PortraitFrame />
      </div>
    </section>
  );
}
