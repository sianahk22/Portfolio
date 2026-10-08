import SectionHeader from "./SectionHeader.jsx";
import Button from "./Button.jsx";
import Icon from "./Icon.jsx";
import { projects, projectsNote } from "../data/content.js";

export default function Projects() {
  return (
    <section id="projets" className="section">
      <div className="container">
        <SectionHeader eyebrow="Projets" title="Réalisations" />
        <ul className="projects">
          {projects.map((p) => (
            <li className="card project reveal" key={p.title}>
              {p.image && (
                <div className="project__media">
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
              )}
              <div className="project__body">
                <p className="project__type">{p.type}</p>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
                <ul className="chips" aria-label="Technologies utilisées">
                  {p.tech.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
                <div className="project__links">
                  {p.demo && (
                    <Button href={p.demo} external>
                      Voir le projet
                      <Icon name="external" size={16} />
                      <span className="sr-only"> {p.title} (nouvel onglet)</span>
                    </Button>
                  )}
                  {p.code && (
                    <Button href={p.code} variant="ghost" external>
                      <Icon name="github" size={16} />
                      Code source
                      <span className="sr-only"> de {p.title} (nouvel onglet)</span>
                    </Button>
                  )}
                </div>
              </div>
            </li>
          ))}
        </ul>
        <p className="projects__note">{projectsNote}</p>
      </div>
    </section>
  );
}
