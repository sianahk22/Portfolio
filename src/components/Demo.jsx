import SectionHeader from "./SectionHeader.jsx";
import { site, demoPages } from "../data/content.js";

export default function Demo() {
  return (
    <section id="projets" className="section section--alt">
      <div className="container">
        <SectionHeader eyebrow="Projet de démonstration" title="Maison Sésame" />
        <div className="demo">
          <div className="demo__visual">
            {site.demoImage ? (
              <img
                src={site.demoImage}
                alt="Aperçu du site de démonstration Maison Sésame, restaurant parisien fictif"
                loading="lazy"
              />
            ) : (
              <div
                className="demo__placeholder"
                role="img"
                aria-label="Maquette temporaire du projet Maison Sésame, à remplacer"
              >
                <span>Maquette temporaire</span>
                <small>à remplacer par une capture du projet</small>
              </div>
            )}
          </div>
          <div className="demo__text">
            <p className="badge">Projet fictif · démonstration</p>
            <p>
              Projet personnel de démonstration pour un restaurant parisien fictif. Ce n'est pas
              un projet réalisé pour un client.
            </p>
            <h3>Ce que le projet présente</h3>
            <ul className="checklist">
              {demoPages.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}