import { site } from "../data/content.js";
import Logo from "./Logo.jsx";

// Photo affichée en haut de page : chargée en priorité (pas de lazy loading),
// en AVIF ou WebP selon le navigateur, avec un JPEG de secours.
export default function PortraitFrame() {
  const p = site.portrait;
  return (
    <figure className="portrait">
      <div className="portrait__inner">
        {p ? (
          <picture>
            <source type="image/avif" srcSet={p.avif} sizes="(min-width: 900px) 340px, 280px" />
            <source type="image/webp" srcSet={p.webp} sizes="(min-width: 900px) 340px, 280px" />
            <img
              src={p.fallback}
              alt={p.alt}
              width={p.width}
              height={p.height}
              fetchpriority="high"
              decoding="async"
            />
          </picture>
        ) : (
          <div className="portrait__placeholder" role="img" aria-label={`Photo de ${site.name} à venir`}>
            <Logo size={64} />
          </div>
        )}
      </div>
    </figure>
  );
}
