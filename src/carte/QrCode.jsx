import { useState } from "react";

// QR code statique (généré par `npm run qr` dans public/images/).
// Pendant le chargement : un fond animé discret. En cas d'échec : l'adresse en clair,
// pour que la carte reste utilisable même sans l'image.
export default function QrCode({ src, url, label }) {
  const [state, setState] = useState("loading"); // "loading" | "ready" | "error"
  const display = url.replace(/^https?:\/\//, "");

  return (
    <figure className={`bc-qr bc-qr--${state}`}>
      <div className="bc-qr__box">
        {state === "error" ? (
          <span className="bc-qr__fallback">{display}</span>
        ) : (
          <img
            className="bc-qr__img"
            src={src}
            width="29"
            height="29"
            alt={`QR code menant à ${display}`}
            onLoad={() => setState("ready")}
            onError={() => setState("error")}
          />
        )}
      </div>
      <figcaption className="bc-qr__label">{label}</figcaption>
    </figure>
  );
}
