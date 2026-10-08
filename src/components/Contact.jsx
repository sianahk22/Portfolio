import { useRef, useState } from "react";
import SectionHeader from "./SectionHeader.jsx";
import Icon from "./Icon.jsx";
import { site, contactOptions } from "../data/content.js";

// Formulaire envoyé à Netlify Forms (formulaire « contact »).
// Netlify détecte le formulaire grâce à sa copie cachée dans index.html :
// si un champ est ajouté ou renommé ici, il faut faire de même là-bas.
const FORM_NAME = "contact";

const initialValues = {
  nom: "",
  email: "",
  besoin: "",
  budget: contactOptions.budgets[0],
  delai: contactOptions.deadlines[0],
  message: "",
  "bot-field": "", // champ piège invisible : seuls les robots le remplissent
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validate(v) {
  const errors = {};
  if (v.nom.trim().length < 2) errors.nom = "Indiquez votre nom (au moins 2 caractères).";
  if (!EMAIL_RE.test(v.email.trim())) errors.email = "Indiquez une adresse email valide, par exemple nom@domaine.fr.";
  if (!v.besoin) errors.besoin = "Choisissez le type de projet.";
  const len = v.message.trim().length;
  if (len < 20) errors.message = "Décrivez votre projet en quelques phrases (au moins 20 caractères).";
  else if (len > 3000) errors.message = "Votre message est trop long (3 000 caractères maximum).";
  return errors;
}

const fieldOrder = ["nom", "email", "besoin", "message"];

function FieldError({ name, message }) {
  if (!message) return null;
  return (
    <span className="field__error" id={`f-${name}-err`}>
      {message}
    </span>
  );
}

export default function Contact() {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const formRef = useRef(null);

  const onChange = (e) => {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
    if (errors[name]) setErrors((er) => ({ ...er, [name]: undefined }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const found = validate(values);
    setErrors(found);
    const firstError = fieldOrder.find((f) => found[f]);
    if (firstError) {
      formRef.current?.elements[firstError]?.focus();
      return;
    }

    setStatus("sending");
    try {
      const body = new URLSearchParams({ "form-name": FORM_NAME, ...values }).toString();
      const res = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body,
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      setStatus("success");
      setValues(initialValues);
    } catch (err) {
      console.error("Envoi du formulaire impossible :", err);
      setStatus("error");
    }
  };

  // Propriétés communes d'accessibilité pour chaque champ.
  const a11y = (name) => ({
    id: `f-${name}`,
    name,
    value: values[name],
    onChange,
    "aria-invalid": errors[name] ? "true" : undefined,
    "aria-describedby": errors[name] ? `f-${name}-err` : undefined,
  });

  return (
    <section id="contact" className="section section--panel">
      <div className="container">
        <SectionHeader
          eyebrow="Contact"
          title="Parlons de votre projet"
          intro="Vous avez une idée ou un projet ? Écrivez-moi et discutons-en."
        />

        <div className="contact">
          <aside className="card contact__info">
            <h3>Me contacter directement</h3>
            <ul className="contact__links">
              <li>
                <a href={`mailto:${site.email}`}>
                  <Icon name="mail" size={18} />
                  {site.email}
                </a>
              </li>
              <li>
                <a href={site.linkedin} target="_blank" rel="noopener noreferrer">
                  <Icon name="linkedin" size={18} />
                  LinkedIn<span className="sr-only"> (nouvel onglet)</span>
                </a>
              </li>
              <li>
                <a href={site.github} target="_blank" rel="noopener noreferrer">
                  <Icon name="github" size={18} />
                  GitHub<span className="sr-only"> (nouvel onglet)</span>
                </a>
              </li>
              <li className="contact__place">
                <Icon name="pin" size={18} />
                {site.location} · projets à distance
              </li>
            </ul>

            <h3>Et ensuite ?</h3>
            <ol className="next-steps">
              <li>Je lis votre demande.</li>
              <li>Je vous réponds personnellement pour en discuter.</li>
              <li>Si nous avançons, je vous envoie un devis gratuit et sans engagement.</li>
            </ol>
          </aside>

          <form
            ref={formRef}
            className="card form"
            name={FORM_NAME}
            method="POST"
            data-netlify="true"
            netlify-honeypot="bot-field"
            onSubmit={onSubmit}
            noValidate
          >
            <input type="hidden" name="form-name" value={FORM_NAME} />
            <p className="sr-only" aria-hidden="true">
              <label>
                Ne pas remplir ce champ
                <input name="bot-field" value={values["bot-field"]} onChange={onChange} tabIndex={-1} autoComplete="off" />
              </label>
            </p>

            <div className="form__row">
              <div className="field">
                <label htmlFor="f-nom">Nom *</label>
                <input {...a11y("nom")} autoComplete="name" required />
                <FieldError name="nom" message={errors.nom} />
              </div>
              <div className="field">
                <label htmlFor="f-email">Email *</label>
                <input {...a11y("email")} type="email" autoComplete="email" required />
                <FieldError name="email" message={errors.email} />
              </div>
            </div>

            <div className="field">
              <label htmlFor="f-besoin">Type de projet *</label>
              <select {...a11y("besoin")} required>
                <option value="">Choisir…</option>
                {contactOptions.needs.map((o) => (
                  <option key={o}>{o}</option>
                ))}
              </select>
              <FieldError name="besoin" message={errors.besoin} />
            </div>

            <div className="form__row">
              <div className="field">
                <label htmlFor="f-budget">Budget indicatif</label>
                <select {...a11y("budget")}>
                  {contactOptions.budgets.map((o) => (
                    <option key={o}>{o}</option>
                  ))}
                </select>
              </div>
              <div className="field">
                <label htmlFor="f-delai">Délai souhaité</label>
                <select {...a11y("delai")}>
                  {contactOptions.deadlines.map((o) => (
                    <option key={o}>{o}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="field">
              <label htmlFor="f-message">Message *</label>
              <textarea
                {...a11y("message")}
                rows="5"
                required
                maxLength={3000}
                placeholder="Votre activité, ce que vous souhaitez obtenir, vos contraintes éventuelles."
              />
              <FieldError name="message" message={errors.message} />
            </div>

            <p className="form__privacy">
              Les champs marqués d'un * sont obligatoires. Vos informations servent uniquement à
              répondre à votre demande (<a href="#mentions-legales">confidentialité</a>).
            </p>

            <button type="submit" className="btn btn--primary btn--block" disabled={status === "sending"}>
              {status === "sending" ? "Envoi en cours…" : "Envoyer ma demande"}
            </button>

            <div className="form__status" role="status" aria-live="polite">
              {status === "success" && (
                <p className="alert alert--success">
                  Merci, votre demande a bien été envoyée. Je vous réponds dès que possible à
                  l'adresse indiquée.
                </p>
              )}
              {status === "error" && (
                <p className="alert alert--error">
                  L'envoi n'a pas fonctionné. Vos informations sont toujours dans le formulaire :
                  réessayez dans un instant, ou écrivez-moi directement à{" "}
                  <a href={`mailto:${site.email}`}>{site.email}</a>.
                </p>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
