import Button from "./Button.jsx";
import Icon from "./Icon.jsx";
import { hero, dashboard, highlights } from "../data/content.js";

export default function Hero() {
  return (
    <section id="accueil" className="hero">
      <div className="container hero__grid">
        <div className="hero__text">
          <p className="badge">
            <span className="badge__dot" aria-hidden="true" />
            {hero.badge}
          </p>
          <h1>{hero.title}</h1>
          <p className="lead">{hero.lead}</p>
          <div className="actions">
            <Button href="#projets">Voir mes projets</Button>
            <Button href="#contact" variant="secondary">
              Me contacter
            </Button>
          </div>
        </div>

        {/* Mini tableau de bord : l'état réel de ce site, à titre d'illustration de mon travail. */}
        <figure className="dash">
          <div className="dash__bar">
            <span className="dash__dots" aria-hidden="true">
              <i />
              <i />
              <i />
            </span>
            <span className="dash__url">{dashboard.url}</span>
            <span className="dash__status">
              <span className="status-dot" aria-hidden="true" />
              {dashboard.status}
            </span>
          </div>
          <div className="dash__body">
            <div className="dash__preview" aria-hidden="true">
              <span className="sk sk--nav" />
              <span className="sk sk--title" />
              <span className="sk sk--line" />
              <span className="sk sk--line sk--short" />
              <span className="sk-row">
                <span className="sk sk--btn" />
                <span className="sk sk--btn sk--ghost" />
              </span>
              <span className="sk-cards">
                <span className="sk sk--card" />
                <span className="sk sk--card" />
                <span className="sk sk--card" />
              </span>
            </div>
            <ul className="dash__tiles">
              {dashboard.tiles.map((t) => (
                <li key={t.label} className="dash__tile">
                  <span className="dash__label">{t.label}</span>
                  <span className="dash__value">
                    <Icon name="check" size={16} />
                    {t.value}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <figcaption className="dash__caption">Ce site : conçu, développé et mis en ligne par mes soins.</figcaption>
        </figure>
      </div>

      <div className="container">
        <ul className="stats" aria-label="Ce que j'apporte à chaque projet">
          {highlights.map((h) => (
            <li key={h.title} className="stat reveal">
              <span className="icon-tile">
                <Icon name={h.icon} />
              </span>
              <span>
                <strong>{h.title}</strong>
                <span className="stat__text">{h.text}</span>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
