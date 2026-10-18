import SectionHeader from "./SectionHeader.jsx";
import { about } from "../data/content.js";

// Transforme « **mot** » en <strong>mot</strong> (gras), sans HTML dans le contenu.
function withBold(text) {
  return text.split(/\*\*(.+?)\*\*/g).map((part, i) => (i % 2 ? <strong key={i}>{part}</strong> : part));
}

export default function About() {
  return (
    <section id="a-propos" className="section">
      <div className="container about">
        <div className="about__main reveal">
          <SectionHeader eyebrow="À propos" title={about.title} />
          <p className="about__text">{withBold(about.text)}</p>
        </div>
        <div className="about__side reveal">
          <dl className="facts">
            {about.facts.map((f) => (
              <div key={f.label}>
                <dt>{f.label}</dt>
                <dd>{f.value}</dd>
              </div>
            ))}
          </dl>
          <p className="facts__label">Outils</p>
          <ul className="chips">
            {about.tools.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
