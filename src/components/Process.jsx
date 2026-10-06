import SectionHeader from "./SectionHeader.jsx";
import { steps } from "../data/content.js";

export default function Process() {
  return (
    <section id="methode" className="section">
      <div className="container">
        <SectionHeader
          eyebrow="Méthode"
          title="Sept étapes, du premier échange à la mise en ligne"
        />
        <ol className="steps">
          {steps.map((s) => (
            <li key={s.title}>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}