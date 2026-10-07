import SectionHeader from "./SectionHeader.jsx";
import { steps, conditions } from "../data/content.js";

export default function Process() {
  return (
    <section id="methode" className="section section--alt">
      <div className="container">
        <SectionHeader
          eyebrow="Méthode"
          title="Comment se passe un projet"
          intro="Un déroulé simple et transparent, du premier échange à la livraison."
        />
        <ol className="steps">
          {steps.map((s) => (
            <li key={s.title} className="reveal">
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </li>
          ))}
        </ol>

        <h3 className="conditions__title">Tarifs, délais et maintenance</h3>
        <dl className="conditions">
          {conditions.map((c) => (
            <div className="card reveal" key={c.title}>
              <dt>{c.title}</dt>
              <dd>{c.text}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
