import { site } from "../data/content.js";
import Logo from "./Logo.jsx";

export default function PortraitFrame() {
  return (
    <figure className="portrait">
      <div className="portrait__inner">
        {site.portrait ? (
          <img
            src={site.portrait}
            alt="Portrait d'Anaïs Bay, développeuse web freelance"
            loading="lazy"
          />
        ) : (
          <div
            className="portrait__placeholder"
            role="img"
            aria-label="Emplacement de la photo d'Anaïs Bay, à remplacer"
          >
            <Logo size={64} />
            <span>Photo à ajouter</span>
          </div>
        )}
      </div>
    </figure>
  );
}