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
  location: "Paris",
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
  // Photo d'ambiance libre de droits (CC0, domaine public) : « White cup and MacBook »,
  // Alex Knight (Unsplash), via Wikimedia Commons. Mention de l'auteur non obligatoire.
  photo: {
    avif: "/images/espace-travail-800.avif 800w, /images/espace-travail-1400.avif 1400w",
    webp: "/images/espace-travail-800.webp 800w, /images/espace-travail-1400.webp 1400w",
    fallback: "/images/espace-travail-1200.jpg",
    width: 1200,
    height: 747,
    alt: "Ordinateur portable et tasse de café sur une table en bois, dans un café lumineux",
  },
};

// Tuiles du hero : uniquement des faits vérifiés sur anaisweb.tech.
export const status = {
  url: "anaisweb.tech",
  label: "En ligne",
  checks: ["HTTPS actif", "Formulaire connecté", "Responsive"],
};
export const stack = ["React", "Vite", "Netlify"];

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
    tech: ["React", "Vite", "CSS", "Netlify Forms"],
    image: {
      avif: "/images/projet-portfolio.avif",
      webp: "/images/projet-portfolio.webp",
      fallback: "/images/projet-portfolio.jpg",
      width: 1200,
      height: 750,
      alt: "Aperçu de la page d'accueil du site anaisweb.tech",
    },
    demo: "https://anaisweb.tech",
    code: "https://github.com/sianahk22/Portfolio",
  },
];
export const projectsNote = "D'autres réalisations sont en cours et seront présentées ici prochainement.";

export const about = {
  title: "Je transforme une idée ou une activité en une présence web claire, moderne et accessible.",
  text: "Basée à Paris, je travaille avec des indépendants, des petites structures et des porteurs de projets. Mon approche est simple : comprendre votre besoin, proposer une solution adaptée, puis vous expliquer clairement ce que je livre.",
  facts: [
    { label: "Formation", value: "Informatique et software engineering" },
    { label: "Langues", value: "Français, arabe, anglais" },
    { label: "Ouverte à", value: "Missions, collaborations et postes en entreprise" },
  ],
  tools: ["HTML", "CSS", "JavaScript", "React", "Vite", "Python", "Git & GitHub", "Netlify"],
};

export const steps = [
  { title: "Comprendre", text: "Vos objectifs, votre public et vos contraintes." },
  { title: "Concevoir", text: "La structure des pages et la direction visuelle." },
  { title: "Développer", text: "Le site, le formulaire et les intégrations." },
  { title: "Mettre en ligne", text: "La publication, les vérifications, puis les ajustements." },
];

// Conditions essentielles, en version courte.
export const conditions = [
  "Devis gratuit et sans engagement",
  "Deux séries de retouches incluses",
  "Délai fixé ensemble dans le devis",
  "Maintenance possible, sur devis",
];
export const conditionsNote =
  "Toute demande hors du périmètre validé est annoncée et chiffrée avant d'être réalisée. Le délai démarre à la réception des contenus.";

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
