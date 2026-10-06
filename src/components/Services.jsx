import SectionHeader from "./SectionHeader.jsx";
import Button from "./Button.jsx";
import { services } from "../data/content.js";

export default function Services() {
  return (
    <section id="services" className="section section--alt">
      <div className="container">
        <SectionHeader
          eyebrow="Services"
          title="Du site le plus simple au plus complet"
          intro="Chaque projet commence à partir de 600 €. Le devis dépend de votre besoin : nombre de pages, contenus, fonctionnalités."
        />
        <div className="grid">
          {services.map((s) => (
            <article className="card" key={s.title}>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
              <p className="card__price">À partir de 600 €</p>
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