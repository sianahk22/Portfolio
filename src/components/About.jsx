import SectionHeader from "./SectionHeader.jsx";
import PortraitFrame from "./PortraitFrame.jsx";
import { site } from "../data/content.js";

export default function About() {
  return (
    <section id="a-propos" className="section">
      <div className="container about">
        <PortraitFrame />
        <div>
          <SectionHeader eyebrow="À propos" title={site.name} />
          <p>
            Anaïs Bay est développeuse web freelance et étudiante en informatique et software
            engineering à Paris. Elle accompagne les petites entreprises, indépendants et porteurs
            de projets dans la création d'une présence en ligne claire, moderne et adaptée aux
            mobiles.
          </p>
          <p className="muted">Langues : français, arabe et anglais.</p>
          <p className="muted">Technologies : HTML, CSS, JavaScript, Python et React.</p>
        </div>
      </div>
    </section>
  );
}