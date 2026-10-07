import { useEffect, useRef } from "react";
import Logo from "./Logo.jsx";
import { site, nav, legal } from "../data/content.js";

export default function Footer() {
  const legalRef = useRef(null);

  // Ouvrir les mentions légales quand on arrive via un lien #mentions-legales.
  useEffect(() => {
    const openIfTargeted = () => {
      if (window.location.hash === "#mentions-legales" && legalRef.current) legalRef.current.open = true;
    };
    openIfTargeted();
    window.addEventListener("hashchange", openIfTargeted);
    return () => window.removeEventListener("hashchange", openIfTargeted);
  }, []);

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div>
            <p className="brand">
              <Logo size={32} />
              <span>
                {site.name}
                <small>
                  {site.role} · {site.specialty}
                </small>
              </span>
            </p>
            <p>
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </p>
          </div>
          <nav aria-label="Liens du pied de page">
            <ul className="footer__links">
              {nav.map((item) => (
                <li key={item.href}>
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
              <li>
                <a href={site.linkedin} target="_blank" rel="noopener noreferrer">
                  LinkedIn<span className="sr-only"> (nouvel onglet)</span>
                </a>
              </li>
              <li>
                <a href={site.github} target="_blank" rel="noopener noreferrer">
                  GitHub<span className="sr-only"> (nouvel onglet)</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <details id="mentions-legales" className="legal" ref={legalRef}>
          <summary>Mentions légales et confidentialité</summary>
          <h2 className="h3">Éditrice du site</h2>
          <p>
            {site.name}, développeuse web junior, étudiante, {site.location}. Contact :{" "}
            <a href={`mailto:${site.email}`}>{site.email}</a>.
          </p>
          <h2 className="h3">Hébergement</h2>
          <p>{legal.host}</p>
          <h2 className="h3">Données personnelles</h2>
          <p>
            Les informations envoyées via le formulaire de contact (nom, email, profil, besoin,
            budget, délai, message) servent uniquement à répondre à votre demande. Elles sont
            transmises par le service de formulaires de l'hébergeur Netlify, dont les serveurs
            peuvent se situer hors de l'Union européenne, et ne sont ni revendues ni utilisées à
            des fins publicitaires. Elles sont conservées au maximum 3 ans après notre dernier
            échange.
          </p>
          <p>
            Vous pouvez demander l'accès, la rectification ou la suppression de vos données en
            écrivant à <a href={`mailto:${site.email}`}>{site.email}</a>. Vous pouvez aussi
            adresser une réclamation à la CNIL (cnil.fr).
          </p>
          <p>Ce site n'utilise ni cookie publicitaire ni outil de mesure d'audience.</p>
        </details>

        <p className="footer__copy">
          © {new Date().getFullYear()} {site.name}
        </p>
      </div>
    </footer>
  );
}
