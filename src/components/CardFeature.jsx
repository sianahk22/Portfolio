import Button from "./Button.jsx";
import Icon from "./Icon.jsx";
import CardLogo from "../carte/CardLogo.jsx";
import DeskArt from "../carte/DeskArt.jsx";
import { site, card, cardPromo } from "../data/content.js";

// Section qui présente la carte de visite et mène à /carte/.
// L'aperçu est une miniature décorative du recto (masquée aux lecteurs d'écran) :
// toutes ses informations sont dans le texte et sur la page de la carte.
export default function CardFeature() {
  return (
    <section className="section section--tight" aria-labelledby="carte-pro-titre">
      <div className="container">
        <div className="card-feature reveal">
          <div className="card-feature__text">
            <p className="eyebrow">{cardPromo.eyebrow}</p>
            <h2 id="carte-pro-titre">{cardPromo.title}</h2>
            <p className="card-feature__intro">{cardPromo.text}</p>
            <Button href={cardPromo.href} className="card-feature__btn">
              {cardPromo.cta}
              <Icon name="arrow" size={18} />
            </Button>
          </div>

          <div className="card-feature__stage" aria-hidden="true">
            <div className="card-feature__mini">
              <DeskArt className="card-feature__desk" screen="/images/projet-portfolio.webp" variant="night" />
              <div className="card-feature__panel">
                <CardLogo className="card-feature__logo" />
                <p className="card-feature__name">{site.name}</p>
                <p className="card-feature__title">{card.title}</p>
                <p className="card-feature__url">{site.url.replace(/^https?:\/\//, "")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
