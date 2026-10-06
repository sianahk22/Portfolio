import SectionHeader from "./SectionHeader.jsx";
import Button from "./Button.jsx";
import { priceFactors } from "../data/content.js";

export default function Pricing() {
  return (
    <section id="tarifs" className="section section--alt">
      <div className="container">
        <SectionHeader
          eyebrow="Tarifs"
          title="Projets à partir de 600 €"
          intro="Le prix final est défini dans un devis, après un échange sur votre besoin."
        />

        <div className="pricing">
          <div className="pricing__main">
            <p className="pricing__amount">Projets à partir de 600 €</p>
            <p className="pricing__included">Deux séries de retouches incluses.</p>
            <Button href="#contact" variant="light">
              Demander un devis
            </Button>
          </div>

          <div className="pricing__col">
            <h3>Le prix dépend notamment de</h3>
            <ul className="checklist">
              {priceFactors.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
          </div>

          <div className="pricing__col">
            <h3>Retouches et suppléments</h3>
            <p>
              Une retouche est une correction ou une modification liée au périmètre validé dans le
              devis. Ne sont pas des retouches :
            </p>
            <ul className="checklist checklist--dash">
              <li>L'ajout d'une nouvelle page</li>
              <li>L'ajout d'une nouvelle fonctionnalité</li>
              <li>Un changement complet de direction artistique</li>
              <li>Un changement d'idée majeur après validation</li>
            </ul>
            <p>Ces demandes sont facturées en supplément, selon leur complexité :</p>
            <ul className="checklist checklist--dash">
              <li>Demande supplémentaire : à partir de 100 €</li>
              <li>Changement complet de direction artistique : à partir de 300 €</li>
            </ul>
            <p>Tout supplément est annoncé et chiffré avant d'être réalisé.</p>
          </div>
        </div>
      </div>
    </section>
  );
}