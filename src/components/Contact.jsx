import { useState } from "react";
import SectionHeader from "./SectionHeader.jsx";
import Button from "./Button.jsx";
import { site, mailtoQuote } from "../data/content.js";

const projectTypes = [
  "Site vitrine essentiel",
  "Site vitrine professionnel",
  "Site vitrine avancé",
  "Landing page",
  "Refonte de site",
  "Mise en ligne",
  "Maintenance",
  "Autre / je ne sais pas encore",
];

const budgets = [
  "Je ne sais pas encore",
  "Autour de 600 €",
  "Entre 600 € et 1 000 €",
  "Plus de 1 000 €",
];

export default function Contact() {
  const [values, setValues] = useState({
    nom: "",
    email: "",
    type: projectTypes[0],
    budget: budgets[0],
    message: "",
  });

  const onChange = (e) => setValues((v) => ({ ...v, [e.target.name]: e.target.value }));

  // Ce formulaire n'envoie rien : il prépare un email dans la messagerie du visiteur.
  const onSubmit = (e) => {
    e.preventDefault();
    const body = [
      `Nom : ${values.nom}`,
      `Email : ${values.email}`,
      `Type de projet : ${values.type}`,
      `Budget indicatif : ${values.budget}`,
      "",
      values.message,
    ].join("\n");
    const subject = `Demande de devis · ${values.type}`;
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section id="contact" className="section section--alt">
      <div className="container">
        <SectionHeader
          eyebrow="Contact"
          title="Parlons de votre projet"
          intro="Écrivez-moi ou appelez-moi : je vous réponds pour discuter de votre besoin et préparer un devis."
        />

        <div className="contact">
          <div className="card contact__info">
            <div className="actions actions--stack">
              <Button href={mailtoQuote}>Envoyer un email</Button>
              <Button href={site.phoneHref} variant="secondary">
                Appeler
              </Button>
            </div>
            <ul className="contact__list">
              <li>
                Email : <a href={`mailto:${site.email}`}>{site.email}</a>
              </li>
              <li>
                Téléphone : <a href={site.phoneHref}>{site.phoneDisplay}</a>
              </li>
              <li>
                <a href={site.linkedin} target="_blank" rel="noopener noreferrer">
                  LinkedIn
                </a>
                {" · "}
                <a href={site.github} target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
              </li>
              <li>{site.location}</li>
              <li>Projets à distance</li>
            </ul>
          </div>

          <form className="card form" onSubmit={onSubmit}>
            <h3>Préparer mon email de demande de devis</h3>
            <p className="muted small">
              Ce formulaire n'envoie rien automatiquement : il ouvre votre messagerie avec un
              email déjà rédigé, que vous envoyez vous-même. Il sera connecté à un service
              d'envoi ultérieurement.
            </p>

            <label>
              Nom
              <input name="nom" value={values.nom} onChange={onChange} required autoComplete="name" />
            </label>
            <label>
              Email
              <input
                type="email"
                name="email"
                value={values.email}
                onChange={onChange}
                required
                autoComplete="email"
              />
            </label>
            <label>
              Type de projet
              <select name="type" value={values.type} onChange={onChange}>
                {projectTypes.map((t) => (
                  <option key={t}>{t}</option>
                ))}
              </select>
            </label>
            <label>
              Budget indicatif
              <select name="budget" value={values.budget} onChange={onChange}>
                {budgets.map((b) => (
                  <option key={b}>{b}</option>
                ))}
              </select>
            </label>
            <label>
              Message
              <textarea name="message" rows="5" value={values.message} onChange={onChange} required />
            </label>

            <button type="submit" className="btn btn--primary">
              Préparer mon email
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}