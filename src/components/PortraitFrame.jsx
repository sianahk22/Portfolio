import { site } from "../data/content.js";
import Logo from "./Logo.jsx";

// Photo de la section À propos : AVIF ou WebP selon le navigateur, JPEG de secours.
// Chargée en différé, car elle n'est pas visible au premier écran.
export default function PortraitFrame() {
  const p = site.portrait;
  return (
    <figure className="portrait">
      {p ? (
        <picture>
          <source type="image/avif" srcSet={p.avif} sizes="(min-width: 900px) 360px, 90vw" />
          <source type="image/webp" srcSet={p.webp} sizes="(min-width: 900px) 360px, 90vw" />
          <img src={p.fallback} alt={p.alt} width={p.width} height={p.height} loading="lazy" decoding="async" />
        </picture>
      ) : (
        <div className="portrait__placeholder" role="img" aria-label={`Photo de ${site.name} à venir`}>
          <Logo size={64} />
        </div>
      )}
    </figure>
  );
}
