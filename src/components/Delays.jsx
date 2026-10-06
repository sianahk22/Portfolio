import SectionHeader from "./SectionHeader.jsx";

export default function Delays() {
  return (
    <section id="delais" className="section">
      <div className="container">
        <SectionHeader eyebrow="Délais" title="Livraison habituelle sous environ 2 semaines." />
        <div className="notice">
          <p>
            <strong>
              Le délai commence après réception de l'acompte et de tous les contenus nécessaires.
            </strong>
          </p>
          <p>
            Les retards de validation ou de transmission des contenus (textes, images, logo…)
            peuvent décaler la livraison.
          </p>
        </div>
      </div>
    </section>
  );
}