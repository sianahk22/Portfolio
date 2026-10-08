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
  // Photo : versions optimisées dans public/images/ (AVIF, WebP, JPEG de secours).
  // Mettre `portrait: null` affiche un emplacement réservé à la place.
  portrait: {
    avif: "/images/portrait-anais-bay-320.avif 320w, /images/portrait-anais-bay-480.avif 480w, /images/portrait-anais-bay-530.avif 530w",
    webp: "/images/portrait-anais-bay-320.webp 320w, /images/portrait-anais-bay-480.webp 480w, /images/portrait-anais-bay-530.webp 530w",
    fallback: "/images/portrait-anais-bay-480.jpg",
    width: 480,
    height: 600,
    alt: "Portrait d'Anaïs Bay, souriante, avec de grandes lunettes noires et des écouteurs",
  },
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
  title: "Je crée des expériences web modernes, claires et efficaces.",
  lead: "Je conçois des sites web responsives et automatisés pour aider les indépendants, les petites entreprises et les porteurs de projets à présenter leur activité en ligne.",
};

// Mini tableau de bord du hero : uniquement des faits vérifiés sur anaisweb.tech.
export const dashboard = {
  url: "anaisweb.tech",
  status: "En ligne",
  tiles: [
    { label: "Sécurité", value: "HTTPS actif" },
    { label: "Formulaire", value: "Connecté" },
    { label: "Affichage", value: "Responsive" },
    { label: "Hébergement", value: "Netlify" },
  ],
};

// Cartes « dashboard » : intitulés qualitatifs, sans chiffres inventés.
export const highlights = [
  { icon: "devices", title: "Design responsive", text: "Mobile, tablette et ordinateur." },
  { icon: "code", title: "Code propre", text: "Structuré, lisible et facile à faire évoluer." },
  { icon: "mail", title: "Formulaires connectés", text: "Les demandes arrivent directement par email." },
  { icon: "rocket", title: "Mise en ligne", text: "Hébergement, nom de domaine et HTTPS." },
];

export const about = {
  title: "Je transforme une idée ou une activité en une présence web claire, moderne et accessible.",
  blocks: [
    { title: "Qui je suis", text: "Développeuse web à Paris, étudiante en informatique et en software engineering." },
    { title: "Mon approche", text: "Comprendre votre besoin, proposer une solution simple, puis expliquer clairement ce que je livre." },
    { title: "Ce qui compte", text: "Des sites rapides, lisibles sur mobile et faciles à faire évoluer." },
    { title: "Ouverte à", text: "Missions freelance, collaborations, stages, alternances et CDI." },
  ],
  tools: ["HTML", "CSS", "JavaScript", "React", "Python", "Git & GitHub", "Netlify"],
  languages: "Français, arabe, anglais",
};

export const services = [
  { icon: "layout", title: "Création de site vitrine", text: "Un site clair pour présenter votre activité et permettre aux visiteurs de vous contacter." },
  { icon: "user", title: "Portfolio professionnel", text: "Une vitrine soignée pour mettre en valeur votre parcours et vos réalisations." },
  { icon: "target", title: "Landing page", text: "Une page unique, centrée sur une action : prendre contact, réserver ou s'inscrire." },
  { icon: "devices", title: "Interface responsive", text: "Un affichage adapté à chaque écran, du téléphone à l'ordinateur." },
  { icon: "mail", title: "Formulaire de contact", text: "Un formulaire validé, protégé contre le spam et relié à votre boîte email." },
  { icon: "rocket", title: "Mise en ligne et déploiement", text: "Hébergement, nom de domaine et HTTPS : je m'occupe de la publication." },
  { icon: "zap", title: "Automatisation simple", text: "Relier vos outils pour gagner du temps. L'IA peut aider, toujours avec une validation humaine." },
  { icon: "search", title: "Visibilité en ligne", text: "Titres, descriptions, sitemap et Google Search Console, pour être trouvé plus facilement." },
];

// Projets réels uniquement. Pour en ajouter un, copier un objet et remplir les champs.
// `image`, `demo` et `code` sont facultatifs : mettre null s'il n'y a rien de public.
export const projects = [
  {
    title: "anaisweb.tech",
    type: "Projet personnel",
    text: "Conception, développement et mise en ligne de ce portfolio : design responsive, formulaire connecté, référencement et déploiement continu.",
    tech: ["React", "Vite", "CSS", "Netlify Forms"],
    image: {
      avif: "/images/projet-portfolio.avif",
      webp: "/images/projet-portfolio.webp",
      fallback: "/images/projet-portfolio.jpg",
      width: 1200,
      height: 750,
      alt: "Aperçu de la page d'accueil du portfolio anaisweb.tech",
    },
    demo: "https://anaisweb.tech",
    code: "https://github.com/sianahk22/Portfolio",
  },
];

// Nombre de cartes « Nouveau projet à venir » affichées après les projets réels.
export const upcomingProjects = 2;

export const steps = [
  { title: "Comprendre le besoin", text: "Un premier échange pour cerner vos objectifs, votre public et vos contraintes." },
  { title: "Concevoir la structure et le design", text: "Je propose l'organisation des pages et une direction visuelle, à valider ensemble." },
  { title: "Développer et connecter", text: "Je construis le site, le formulaire et les intégrations, en vous montrant l'avancement." },
  { title: "Mettre en ligne et améliorer", text: "Je publie le site, je vérifie chaque détail, puis je l'ajuste selon vos retours." },
];

// Conditions essentielles, en version courte.
export const conditions = [
  "Devis gratuit et sans engagement",
  "Deux séries de retouches incluses",
  "Délai fixé ensemble dans le devis",
  "Maintenance possible, sur devis",
];
export const conditionsNote =
  "Toute demande hors du périmètre validé (nouvelle page, nouvelle fonctionnalité) est annoncée et chiffrée avant d'être réalisée. Le délai démarre à la réception des contenus.";

// Technologies réellement utilisées pour ce site.
export const technologies = [
  { name: "HTML", role: "Structure" },
  { name: "CSS", role: "Design" },
  { name: "JavaScript", role: "Interactions" },
  { name: "React", role: "Interface" },
  { name: "Vite", role: "Build" },
  { name: "Git", role: "Versions" },
  { name: "GitHub", role: "Code source" },
  { name: "Netlify", role: "Hébergement" },
];

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
