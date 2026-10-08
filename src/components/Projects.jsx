import SectionHeader from "./SectionHeader.jsx";
import Button from "./Button.jsx";
import Icon from "./Icon.jsx";
import { projects, upcomingProjects } from "../data/content.js";

export default function Projects() {
  return (
    <section id="projets" className="section">
      <div className="container">
        <SectionHeader
          eyebrow="Projets"
          title="Réalisations"
          intro="Uniquement des projets réels. De nouvelles réalisations sont en préparation."
        />
        <ul className="grid grid--3">
          {projects.map((p) => (
            <li className="card project reveal" key={p.title}>
              <div className="project__media">
                {p.image ? (
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
                ) : (
                  <span className="project__placeholder" aria-hidden="true" />
                )}
              </div>
              <div className="project__body">
                <p className="tag">{p.type}</p>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
                <ul className="chips chips--small" aria-label="Technologies utilisées">
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
                      Code
                      <span className="sr-only"> de {p.title} sur GitHub (nouvel onglet)</span>
                    </Button>
                  )}
                </div>
              </div>
            </li>
          ))}

          {Array.from({ length: upcomingProjects }, (_, i) => (
            <li className="card project project--upcoming reveal" key={`a-venir-${i}`}>
              <div className="project__media project__media--empty" aria-hidden="true">
                <Icon name="plus" size={28} />
              </div>
              <div className="project__body">
                <p className="tag tag--muted">En préparation</p>
                <h3>Nouveau projet à venir</h3>
                <p>Cet emplacement accueillera une prochaine réalisation.</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
