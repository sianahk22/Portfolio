// Tout le contenu modifiable du site est ici.

export const site = {
  name: "Anaïs Bay",
  role: "Développeuse web freelance",
  email: "bonjour@anaisweb.tech",
  phoneDisplay: "+33 7 51 44 12 95",
  phoneHref: "tel:+33751441295",
  github: "https://github.com/sianahk22",
  linkedin: "https://www.linkedin.com/in/anais-ben-chabane",
  location: "Paris 13e",
  // Pour ajouter ta photo : place le fichier dans public/images/ puis écris par ex. "/images/anais.jpg"
  portrait: null,
  // Pour ajouter la maquette Maison Sésame : par ex. "/images/maison-sesame.png"
  demoImage: null,
};

export const mailtoQuote = `mailto:${site.email}?subject=${encodeURIComponent(
  "Demande de devis · site web"
)}`;

export const nav = [
  { href: "#accueil", label: "Accueil" },
  { href: "#services", label: "Services" },
  { href: "#pour-qui", label: "Pour qui" },
  { href: "#projets", label: "Projet de démo" },
  { href: "#methode", label: "Méthode" },
  { href: "#tarifs", label: "Tarifs" },
  { href: "#delais", label: "Délais" },
  { href: "#maintenance", label: "Maintenance" },
  { href: "#a-propos", label: "À propos" },
  { href: "#contact", label: "Contact" },
];

export const services = [
  {
    title: "Site vitrine essentiel",
    text: "Quelques pages claires pour présenter votre activité et permettre de vous contacter.",
  },
  {
    title: "Site vitrine professionnel",
    text: "Plus de pages et un travail visuel plus poussé pour renforcer votre image.",
  },
  {
    title: "Site vitrine avancé",
    text: "Pour les besoins spécifiques : fonctionnalités sur mesure définies ensemble dans le devis.",
  },
  {
    title: "Landing page",
    text: "Une seule page, centrée sur une action précise : prendre contact, réserver, s'inscrire.",
  },
  {
    title: "Refonte de site",
    text: "Moderniser un site existant : design, lisibilité, adaptation aux mobiles.",
  },
  {
    title: "Mise en ligne",
    text: "Nom de domaine, hébergement et publication : je m'occupe de la mise en ligne.",
  },
];

export const audiences = [
  "Restaurants",
  "Cabinets",
  "Écoles",
  "Indépendants",
  "Artisans",
  "Commerçants",
  "Consultants",
  "Associations",
  "Porteurs de projets",
];

export const demoPages = [
  "Page d'accueil",
  "Présentation",
  "Menu",
  "Galerie",
  "Horaires",
  "Contact",
  "Responsive mobile",
];

export const steps = [
  { title: "Premier échange", text: "On discute de votre activité, de vos objectifs et de vos contraintes." },
  { title: "Proposition et devis", text: "Je définis le besoin et vous envoie un devis détaillé à valider." },
  { title: "Structure et direction visuelle", text: "Je propose l'organisation des pages et l'univers graphique." },
  { title: "Développement", text: "Je construis le site, adapté aux ordinateurs, tablettes et mobiles." },
  { title: "Présentation", text: "Je vous présente une première version complète." },
  { title: "Deux séries de retouches", text: "Vous demandez des corrections dans le cadre du projet validé." },
  { title: "Tests et mise en ligne", text: "Je vérifie le site, puis je le publie." },
];

export const priceFactors = [
  "Le nombre de pages",
  "Les contenus (textes fournis ou à rédiger)",
  "Le branding disponible (logo, couleurs, charte)",
  "Les images et photos",
  "L'idée ou la maquette déjà préparée",
  "Le nom de domaine",
  "L'hébergement",
  "Les fonctionnalités demandées",
];

export const maintenanceIncludes = [
  "Petites modifications de texte",
  "Remplacement d'images",
  "Vérification du formulaire de contact",
  "Petites corrections",
  "Mises à jour raisonnables",
];