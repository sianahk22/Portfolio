import SectionHeader from "./SectionHeader.jsx";
import Icon from "./Icon.jsx";
import { steps, conditions, conditionsNote } from "../data/content.js";

export default function Process() {
  return (
    <section id="methode" className="section section--panel">
      <div className="container">
        <SectionHeader
          eyebrow="Méthode"
          title="Comment je travaille avec vous"
          intro="Aucune connaissance technique n'est nécessaire : je vous explique chaque étape avec des mots simples."
        />
        <ol className="steps">
          {steps.map((s, i) => (
            <li key={s.title} className="card step reveal">
              <span className="step__num" aria-hidden="true">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </li>
          ))}
        </ol>

        <div className="card conditions reveal">
          <h3 className="sr-only">Conditions</h3>
          <ul className="conditions__list">
            {conditions.map((c) => (
              <li key={c}>
                <Icon name="check" size={18} />
                {c}
              </li>
            ))}
          </ul>
          <p className="conditions__note">{conditionsNote}</p>
        </div>
      </div>
    </section>
  );
}
