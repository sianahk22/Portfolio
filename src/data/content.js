// Tout le contenu modifiable du site est ici.
// Règle : ne rien inventer (ni client, ni chiffre, ni résultat, ni témoignage).

export const site = {
  name: "Anaïs Bay",
  role: "Développeuse web",
  tagline: "Sites web modernes, responsives et automatisés.",
  email: "bonjour@anaisweb.tech",
  url: "https://anaisweb.tech",
  github: "https://github.com/sianahk22",
  linkedin: "https://www.linkedin.com/in/anais-ben-chabane",
  instagram: "https://www.instagram.com/anais_bay_tech",
  location: "Paris",
};

// Carte de visite (page /carte/). Le reste des coordonnées vient de `site`.
export const card = {
  fullName: "Anaïs BEN CHABANE",
  title: "Développeuse web moderne",
  hook: "Des expériences digitales modernes pour des entreprises ambitieuses.",
  // Version courte, imprimée au verso (la place est comptée sur 85 × 55 mm).
  // Version complète, affichée sous la carte sur la page web.
  about:
    "Je conçois des sites web et des applications modernes pour les entreprises. Je développe également des automatisations qui s'appuient sur l'intelligence artificielle pour vous faire gagner du temps. Déterminée, efficace et réactive, je livre des projets soignés dans des délais tenus.",
  services: [
    "Sites web modernes et responsives",
    "Applications web",
    "Automatisation des tâches avec l'IA",
    "Accompagnement numérique",
  ],
  facts: ["Étudiante en informatique et ingénierie logicielle", "2 ans d'expérience", "Français · Anglais · Arabe"],
  location: "Paris 13e · Sur site ou à distance",
  cta: "Parlons de votre prochain projet.",
  qrLabel: "Scannez pour découvrir mon portfolio",
  // Téléphone masqué pour le moment (le numéro n'est volontairement pas enregistré dans Git).
  // Pour l'afficher : remplir phone (ex. "06 00 00 00 00") et phoneHref (ex. "tel:+33600000000"),
  // puis passer showPhone à true. Il sera alors public, en ligne, sur la carte imprimée et sur GitHub.
  phone: "",
  phoneHref: "",
  showPhone: false,
};

// Section du portfolio (entre Méthode et Contact) qui mène à la carte de visite.
export const cardPromo = {
  eyebrow: "Carte de visite",
  title: "Découvrez ma carte professionnelle",
  text: "Retrouvez mes coordonnées, mes services et mes liens professionnels dans ma carte de visite digitale.",
  cta: "Voir ma carte de visite",
  href: "/carte/",
};

export const nav = [
  { href: "#accueil", label: "Accueil" },
  { href: "#a-propos", label: "À propos" },
  { href: "#services", label: "Services" },
  { href: "#projets", label: "Projets" },
  { href: "#contact", label: "Contact" },
];

export const hero = {
  badge: "Développeuse web · Paris",
  title: "Des sites web modernes, pensés pour votre activité.",
  lead: "Je conçois et développe des sites responsives et automatisés pour les indépendants, les petites entreprises et les porteurs de projets : clairs, rapides et faciles à faire évoluer.",
};

// Pastille flottante de l'accueil : uniquement un fait vérifié sur anaisweb.tech.
export const status = {
  url: "anaisweb.tech",
  label: "En ligne",
};

export const services = [
  {
    icon: "layout",
    title: "Sites vitrines et landing pages",
    text: "Des pages claires et rapides, pensées pour transformer vos visiteurs en contacts.",
  },
  {
    icon: "user",
    title: "Portfolios professionnels",
    text: "Une vitrine soignée pour présenter votre parcours, vos réalisations et vos services.",
  },
  {
    icon: "zap",
    title: "Formulaires et automatisation",
    text: "Des formulaires fiables et protégés, et des tâches répétitives automatisées pour gagner du temps.",
  },
  {
    icon: "rocket",
    title: "Mise en ligne et visibilité",
    text: "Hébergement, nom de domaine, HTTPS et référencement de base, pour être trouvé sur Google.",
  },
];

// Projets réels uniquement. Pour en ajouter un, copier un objet et remplir les champs.
// `image`, `demo` et `code` sont facultatifs : mettre null s'il n'y a rien de public.
export const projects = [
  {
    title: "anaisweb.tech",
    type: "Conception et développement",
    text: "Mon site professionnel, conçu de A à Z : design responsive, formulaire de contact connecté, référencement et déploiement continu sur Netlify.",
    image: {
      avif: "/images/projet-portfolio.avif",
      webp: "/images/projet-portfolio.webp",
      fallback: "/images/projet-portfolio.jpg",
      width: 1200,
      height: 750,
      alt: "Aperçu de la page d'accueil du site anaisweb.tech",
    },
    demo: "https://anaisweb.tech",
  },
  {
    // Projet personnel : marque, produits et données fictifs (le dire clairement aux visiteurs).
    title: "Maison Aria",
    type: "Projet personnel · marque fictive",
    text: "Application web de démonstration pour une marque fictive de décoration : boutique filtrable, panier, réservation de consultations sans double réservation, assistant de recommandation et tableau de bord.",
    image: {
      avif: "/images/projet-maison-aria.avif",
      webp: "/images/projet-maison-aria.webp",
      fallback: "/images/projet-maison-aria.jpg",
      width: 1200,
      height: 750,
      alt: "Aperçu de la page d'accueil de Maison Aria : titre « Des intérieurs pensés pour durer » et photo d'un salon",
    },
    demo: "https://maison-aria.vercel.app",
    // Légende affichée sous l'ordinateur de l'accueil quand son écran montre ce projet.
    heroCaption: "Boutique e-commerce Maison Aria",
  },
];
export const projectsNote = "D'autres réalisations sont en cours et seront présentées ici prochainement.";

export const about = {
  title: "Salut, moi c'est Anaïs, une développeuse web créative.",
  // Les passages entre ** ** sont affichés en gras (voir About.jsx).
  text: "Étudiante en génie logiciel issue de l'École Supérieure d'Informatique et poursuivant mon parcours à Paris, je me passionne pour le web moderne. J'enrichis chaque projet en combinant **rigueur technique**, **créativité** et **sens du détail**.",
  facts: [
    { label: "Langues", value: "Français, arabe, anglais" },
    { label: "Ouverte à", value: "Missions, collaborations et postes en entreprise" },
  ],
  tools: ["HTML", "CSS", "JavaScript", "React", "Vite", "Python", "Git & GitHub", "Netlify"],
};


// Conditions essentielles, en version courte.



// Listes du formulaire de contact.
export const contactOptions = {
  needs: [
    "Site vitrine",
    "Portfolio",
    "Landing page",
    "Refonte d'un site existant",
    "Automatisation",
    "Mission freelance ou collaboration",
    "Stage, alternance ou CDI",
    "Autre / je ne sais pas encore",
  ],
  budgets: ["Je ne sais pas encore", "Moins de 500 €", "500 € à 1 500 €", "1 500 € à 3 000 €", "Plus de 3 000 €", "Non concerné"],
  deadlines: ["Pas de date précise", "Moins d'un mois", "1 à 3 mois", "Plus de 3 mois"],
};

// Mentions légales : à relire avant chaque modification importante.
export const legal = {
  host: "Netlify, Inc., 512 2nd Street, Suite 200, San Francisco, CA 94107, États-Unis · netlify.com",
};
