import SectionHeader from "./SectionHeader.jsx";
import { audiences } from "../data/content.js";

export default function Audience() {
  return (
    <section id="pour-qui" className="section">
      <div className="container">
        <SectionHeader
          eyebrow="Pour qui"
          title="Un site pour celles et ceux qui n'ont pas le temps de le faire"
          intro="Vous gérez votre activité : je m'occupe de votre présence en ligne."
        />
        <ul className="chips">
          {audiences.map((a) => (
            <li key={a}>{a}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}