import SectionHeader from "./SectionHeader.jsx";
import PortraitFrame from "./PortraitFrame.jsx";
import { site, about } from "../data/content.js";

export default function About() {
  return (
    <section id="a-propos" className="section">
      <div className="container">
        <SectionHeader eyebrow="À propos" title={about.title} />
        <div className="about">
          <div className="card about__photo reveal">
            <PortraitFrame />
            <div className="about__id">
              <strong>{site.name}</strong>
              <span>
                {site.role} · {site.location}
              </span>
            </div>
          </div>

          <div className="about__content">
            <div className="about__blocks">
              {about.blocks.map((b) => (
                <div className="card mini reveal" key={b.title}>
                  <h3>{b.title}</h3>
                  <p>{b.text}</p>
                </div>
              ))}
            </div>
            <div className="card mini reveal">
              <h3>Mes outils principaux</h3>
              <ul className="chips">
                {about.tools.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
              <p className="about__lang">Langues : {about.languages}.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
