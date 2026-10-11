import SectionHeader from "./SectionHeader.jsx";
import Icon from "./Icon.jsx";
import { projects, projectsNote } from "../data/content.js";

// Chaque projet : une maquette (capture dans un cadre de navigateur) et un texte court.
// Avec `demo`, toute la carte est cliquable : le bouton « Voir le projet » est le seul lien,
// et son pseudo-élément ::after s'étend sur la carte (voir .project__cta dans styles.css).
export default function Projects() {
  return (
    <section id="projets" className="section">
      <div className="container">
        <SectionHeader eyebrow="Projets" title="Réalisations" />
        <ul className="projects">
          {projects.map((p) => (
            <li className={`card project reveal${p.demo ? " project--link" : ""}`} key={p.title}>
              {p.image && (
                <div className="project__media">
                  <div className="project__frame">
                    <span className="project__bar" aria-hidden="true">
                      <i />
                      <i />
                      <i />
                    </span>
                    <picture>
                      <source type="image/avif" srcSet={p.image.avif} />
                      <source type="image/webp" srcSet={p.image.webp} />
                      <img
                        src={p.image.fallback}
                        alt={p.image.alt}
                        width={p.image.width}
                        height={p.image.height}
                        loading="lazy"
                        decoding="async"
                      />
                    </picture>
                  </div>
                </div>
              )}
              <div className="project__body">
                <p className="project__type">{p.type}</p>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
                {p.demo ? (
                  <a className="btn btn--primary project__cta" href={p.demo} target="_blank" rel="noopener noreferrer">
                    Voir le projet
                    <Icon name="external" size={16} />
                    <span className="sr-only"> {p.title} (nouvel onglet)</span>
                  </a>
                ) : (
                  <p className="project__soon">Démo en ligne bientôt disponible</p>
                )}
              </div>
            </li>
          ))}
        </ul>
        <p className="projects__note">{projectsNote}</p>
      </div>
    </section>
  );
}
