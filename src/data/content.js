// Tout le contenu modifiable du site est ici.
// Règle : ne rien inventer (ni client, ni chiffre, ni résultat, ni témoignage).

export const site = {
  name: "Anaïs Bay",
  role: "Développeuse web junior",
  specialty: "Applications web, automatisation & IA",
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
  { href: "#a-propos", label: "À propos" },
  { href: "#services", label: "Services" },
  { href: "#competences", label: "Compétences" },
  { href: "#projets", label: "Projets" },
  { href: "#methode", label: "Méthode" },
  { href: "#contact", label: "Contact" },
];

export const hero = {
  title: "Des outils web simples pour vous faire gagner du temps.",
  lead:
    "Je conçois des sites et des applications web, et j'automatise les tâches répétitives, y compris avec l'intelligence artificielle. Mon approche : comprendre votre besoin, proposer une solution simple et vous expliquer clairement ce que je livre.",
  highlights: ["Sites & applications web", "Automatisation & IA", "Sur devis, à Paris et à distance"],
};

export const audiences = [
  {
    title: "Indépendants, petites entreprises, associations",
    text: "Vous avez besoin d'un site clair, d'un outil sur mesure ou d'automatiser une tâche qui vous prend du temps ? Décrivez-moi votre besoin : je vous dis honnêtement si je peux vous aider, comment, et pour quel budget.",
    cta: { href: "#contact", label: "Discuter de mon projet" },
  },
  {
    title: "Recruteurs et entreprises",
    text: "Étudiante en informatique, je suis ouverte aux stages, alternances, CDI, missions freelance et collaborations. Je travaille avec React, JavaScript et Python, et je m'intéresse particulièrement à l'automatisation et à l'IA.",
    cta: { href: "#contact", label: "Me proposer une opportunité" },
  },
];

export const about = {
  text: [
    "Je suis étudiante en informatique et en software engineering à Paris. J'aime transformer un besoin concret en une solution qui fonctionne : un site lisible, une application utile, ou une automatisation qui supprime une tâche répétitive.",
    "Je m'intéresse particulièrement à l'automatisation et à l'intégration de l'IA dans des outils du quotidien, avec une règle simple : l'IA aide, mais une personne garde toujours le contrôle sur les décisions importantes.",
  ],
  facts: [
    { label: "Formation", value: "Étudiante en informatique et software engineering, Paris" },
    { label: "Ouverte à", value: "Stage, alternance, CDI, missions freelance, collaborations" },
    { label: "Langues", value: "Français, arabe, anglais" },
  ],
};

export const services = [
  {
    title: "Sites web & landing pages",
    for: "Indépendants, associations, commerces",
    text: "Un site clair et adapté aux mobiles pour présenter votre activité et permettre aux visiteurs de vous contacter. Refonte d'un site existant possible.",
    items: ["Site vitrine ou page unique", "Responsive et accessible", "Formulaire de contact", "Aide à la mise en ligne"],
  },
  {
    title: "Applications web sur mesure",
    for: "Structures avec un besoin précis",
    text: "Un outil web pensé pour votre fonctionnement : prise de demandes, petit catalogue, tableau de suivi, espace de gestion simple.",
    items: ["Analyse du besoin", "Interface simple à utiliser", "Développement avec React", "Explications à la livraison"],
  },
  {
    title: "Automatisation & IA",
    for: "Toute structure qui perd du temps sur des tâches répétitives",
    text: "Relier vos outils entre eux et automatiser ce qui peut l'être : formulaires, tableurs, emails. L'IA peut aider à trier ou résumer des demandes, toujours avec une validation humaine.",
    items: ["Automatisation de tâches répétitives", "Intégration de l'IA dans vos outils", "Validation humaine prévue", "Attention portée à vos données"],
  },
];

export const skills = [
  { group: "Front-end", items: ["HTML", "CSS", "JavaScript", "React", "Responsive design", "Accessibilité web"] },
  { group: "Back-end & scripts", items: ["Python"] },
  { group: "Automatisation & IA", items: ["Automatisation de tâches", "Intégration d'IA dans des applications"] },
  { group: "Outils", items: ["Git", "GitHub", "Vite"] },
];

// Projets réels uniquement. Pour en ajouter un, copier un objet et remplir les champs.
// `demo` et `code` sont facultatifs : mettre null s'il n'y a pas de lien public.
export const projects = [
  {
    title: "Ce portfolio",
    type: "Projet personnel",
    text: "Site one-page conçu et développé de A à Z : contenu séparé du code, design responsive, accessibilité, référencement et formulaire de contact relié à Netlify Forms avec protection anti-spam.",
    tech: ["React", "Vite", "CSS", "Netlify Forms"],
    demo: null,
    code: "https://github.com/sianahk22/Portfolio",
  },
];

export const steps = [
  { title: "Premier échange", text: "Vous décrivez votre besoin, vos objectifs et vos contraintes." },
  { title: "Proposition et devis", text: "Je reformule le besoin et vous envoie un devis détaillé, gratuit et sans engagement." },
  { title: "Conception et développement", text: "Je construis la solution par étapes et vous montre l'avancement." },
  { title: "Retours et ajustements", text: "Vous testez une version complète et demandez des corrections." },
  { title: "Livraison et explications", text: "Je vérifie, je mets en ligne et je vous explique comment l'utiliser." },
];

export const conditions = [
  {
    title: "Tarifs",
    text: "Chaque projet est sur devis. Le prix dépend du nombre de pages ou d'écrans, des contenus disponibles (textes, images, logo) et des fonctionnalités demandées.",
  },
  {
    title: "Retouches",
    text: "Deux séries de retouches sont incluses dans le périmètre validé. Une nouvelle page, une nouvelle fonctionnalité ou un changement complet de direction artistique sont des demandes supplémentaires, toujours annoncées et chiffrées avant d'être réalisées.",
  },
  {
    title: "Délais",
    text: "Le délai est fixé ensemble dans le devis. Il commence lorsque tous les contenus nécessaires sont reçus ; un retard de validation ou de transmission peut décaler la livraison.",
  },
  {
    title: "Maintenance",
    text: "Possible ponctuellement ou dans la durée, sur devis : petites modifications, remplacement d'images, vérification du formulaire, corrections. Son contenu est précisé à l'avance.",
  },
];

// Listes du formulaire de contact.
export const contactOptions = {
  profiles: ["Indépendant·e", "Entreprise", "Association", "Recruteur / recruteuse", "Particulier", "Autre"],
  needs: [
    "Site web ou landing page",
    "Application web sur mesure",
    "Automatisation & IA",
    "Refonte d'un site existant",
    "Opportunité : stage, alternance, CDI",
    "Mission freelance ou collaboration",
    "Autre / je ne sais pas encore",
  ],
  budgets: ["Je ne sais pas encore", "Moins de 500 €", "500 € à 1 500 €", "1 500 € à 3 000 €", "Plus de 3 000 €", "Non concerné (recrutement)"],
  deadlines: ["Pas de date précise", "Moins d'un mois", "1 à 3 mois", "Plus de 3 mois"],
};

// Mentions légales : à relire avant la mise en ligne.
export const legal = {
  host: "Netlify, Inc., 512 2nd Street, Suite 200, San Francisco, CA 94107, États-Unis · netlify.com",
};
