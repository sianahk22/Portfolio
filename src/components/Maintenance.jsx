import SectionHeader from "./SectionHeader.jsx";
import Button from "./Button.jsx";
import { maintenanceIncludes } from "../data/content.js";

export default function Maintenance() {
  return (
    <section id="maintenance" className="section section--alt">
      <div className="container">
        <SectionHeader
          eyebrow="Maintenance"
          title="Un site qui reste à jour"
          intro="Ponctuelle ou mensuelle, selon votre besoin. La maintenance mensuelle commence à partir de 60 €/mois."
        />
        <div className="two-col">
          <div className="card">
            <h3>Ce que la maintenance peut inclure</h3>
            <ul className="checklist">
              {maintenanceIncludes.map((m) => (
                <li key={m}>{m}</li>
              ))}
            </ul>
          </div>
          <div className="card">
            <h3>À savoir</h3>
            <ul className="checklist checklist--dash">
              <li>
                Les bugs liés au périmètre livré sont corrigés pendant une courte période après la
                mise en ligne.
              </li>
              <li>Les nouvelles fonctionnalités sont facturées séparément.</li>
              <li>
                Le contenu de la maintenance est précisé dans le devis : la disponibilité n'est pas
                illimitée.
              </li>
            </ul>
          </div>
        </div>
        <p className="center">
          <Button href="#contact">Demander un devis</Button>
        </p>
      </div>
    </section>
  );
}