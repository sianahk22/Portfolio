import SectionHeader from "./SectionHeader.jsx";
import Icon from "./Icon.jsx";
import { services } from "../data/content.js";

export default function Services() {
  return (
    <section id="services" className="section section--panel">
      <div className="container">
        <SectionHeader
          eyebrow="Services"
          title="Ce que je peux réaliser pour vous"
          intro="Chaque projet est sur devis, après un premier échange sur votre besoin."
        />
        <ul className="grid grid--4">
          {services.map((s) => (
            <li className="card service reveal" key={s.title}>
              <span className="icon-tile">
                <Icon name={s.icon} />
              </span>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
