import SectionHeader from "./SectionHeader.jsx";
import Button from "./Button.jsx";
import { services } from "../data/content.js";

export default function Services() {
  return (
    <section id="services" className="section">
      <div className="container">
        <SectionHeader
          eyebrow="Services"
          title="Trois façons de vous aider"
          intro="Chaque projet est sur devis, après un premier échange sur votre besoin."
        />
        <div className="grid grid--3">
          {services.map((s) => (
            <article className="card service reveal" key={s.title}>
              <h3>{s.title}</h3>
              <p className="service__for">{s.for}</p>
              <p>{s.text}</p>
              <ul className="checklist">
                {s.items.map((i) => (
                  <li key={i}>{i}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <p className="center">
          <Button href="#contact">Demander un devis</Button>
        </p>
      </div>
    </section>
  );
}
