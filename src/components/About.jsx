import SectionHeader from "./SectionHeader.jsx";
import { site, about } from "../data/content.js";

export default function About() {
  return (
    <section id="a-propos" className="section section--alt">
      <div className="container about">
        <div className="reveal">
          <SectionHeader eyebrow="À propos" title={`Je suis ${site.name}`} />
          {about.text.map((t) => (
            <p key={t}>{t}</p>
          ))}
          <p className="about__links">
            <a href={site.linkedin} target="_blank" rel="noopener noreferrer">
              LinkedIn<span className="sr-only"> (nouvel onglet)</span>
            </a>
            <a href={site.github} target="_blank" rel="noopener noreferrer">
              GitHub<span className="sr-only"> (nouvel onglet)</span>
            </a>
          </p>
        </div>
        <dl className="card facts reveal">
          {about.facts.map((f) => (
            <div key={f.label}>
              <dt>{f.label}</dt>
              <dd>{f.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
