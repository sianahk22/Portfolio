import Button from "./Button.jsx";
import Icon from "./Icon.jsx";
import { hero, status, stack } from "../data/content.js";

export default function Hero() {
  const p = hero.photo;
  return (
    <section id="accueil" className="hero">
      <div className="container hero__grid">
        <div className="hero__text">
          <p className="badge">{hero.badge}</p>
          <h1>{hero.title}</h1>
          <p className="lead">{hero.lead}</p>
          <div className="actions">
            <Button href="#projets">Voir mes projets</Button>
            <Button href="#contact" variant="secondary">
              Me contacter
            </Button>
          </div>
        </div>

        <div className="bento">
          <figure className="bento__photo">
            <picture>
              <source type="image/avif" srcSet={p.avif} sizes="(min-width: 960px) 560px, 92vw" />
              <source type="image/webp" srcSet={p.webp} sizes="(min-width: 960px) 560px, 92vw" />
              <img src={p.fallback} alt={p.alt} width={p.width} height={p.height} fetchpriority="high" decoding="async" />
            </picture>
          </figure>

          {/* État réel de ce site, vérifié en ligne. */}
          <div className="tile tile--status">
            <p className="tile__head">
              <span className="status-dot" aria-hidden="true" />
              {status.url} · {status.label}
            </p>
            <ul className="tile__checks">
              {status.checks.map((c) => (
                <li key={c}>
                  <Icon name="check" size={16} />
                  {c}
                </li>
              ))}
            </ul>
          </div>

          <div className="tile tile--stack">
            <p className="tile__label">Stack de ce site</p>
            <p className="tile__value">{stack.join(" · ")}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
