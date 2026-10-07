import SectionHeader from "./SectionHeader.jsx";
import Button from "./Button.jsx";
import { site, projects } from "../data/content.js";

export default function Projects() {
  return (
    <section id="projets" className="section">
      <div className="container">
        <SectionHeader
          eyebrow="Projets"
          title="Ce que j'ai réalisé"
          intro="Uniquement des projets réels. D'autres réalisations arrivent : vous pouvez suivre mon travail sur GitHub."
        />
        <div className="grid grid--2">
          {projects.map((p) => (
            <article className="card project reveal" key={p.title}>
              <p className="badge">{p.type}</p>
              <h3>{p.title}</h3>
              <p>{p.text}</p>
              <ul className="tags" aria-label="Technologies utilisées">
                {p.tech.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
              <div className="actions actions--small">
                {p.demo && (
                  <Button href={p.demo} external>
                    Voir la démo<span className="sr-only"> de {p.title} (nouvel onglet)</span>
                  </Button>
                )}
                {p.code && (
                  <Button href={p.code} variant="secondary" external>
                    Voir le code<span className="sr-only"> de {p.title} (nouvel onglet)</span>
                  </Button>
                )}
              </div>
            </article>
          ))}
          <article className="card project project--cta reveal">
            <h3>Votre projet pourrait être le prochain</h3>
            <p>Un site, une application ou une tâche à automatiser ? Parlons-en, sans engagement.</p>
            <div className="actions actions--small">
              <Button href="#contact">Discuter de mon projet</Button>
              <Button href={site.github} variant="ghost" external>
                Mon GitHub<span className="sr-only"> (nouvel onglet)</span>
              </Button>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
