import SectionHeader from "./SectionHeader.jsx";
import { technologies } from "../data/content.js";

export default function Tech() {
  return (
    <section id="technologies" className="section">
      <div className="container">
        <SectionHeader
          eyebrow="Technologies"
          title="Les outils utilisés pour ce site"
          intro="De la conception à la mise en ligne."
        />
        <ul className="tech">
          {technologies.map((t) => (
            <li key={t.name} className="tech__item reveal">
              <strong>{t.name}</strong>
              <span>{t.role}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
