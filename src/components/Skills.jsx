import SectionHeader from "./SectionHeader.jsx";
import { skills } from "../data/content.js";

export default function Skills() {
  return (
    <section id="competences" className="section section--alt">
      <div className="container">
        <SectionHeader
          eyebrow="Compétences"
          title="Les outils avec lesquels je travaille"
          intro="Je continue à me former chaque jour, en particulier sur l'automatisation et l'IA."
        />
        <div className="grid grid--4">
          {skills.map((s) => (
            <div className="card skill reveal" key={s.group}>
              <h3>{s.group}</h3>
              <ul className="tags">
                {s.items.map((i) => (
                  <li key={i}>{i}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
