# Anaïs Bay · Portfolio

Développeuse web à Paris : **sites web modernes, responsives et automatisés**.

Je conçois et réalise des sites clairs et adaptés aux besoins de chaque client : sites vitrines,
portfolios, landing pages, formulaires connectés et mise en ligne. L'intelligence artificielle
fait partie de mes outils de travail et d'automatisation, toujours avec une validation humaine.

Ce dépôt contient le code source de mon portfolio, en ligne sur
[anaisweb.tech](https://anaisweb.tech).

## Services

- Création de site vitrine, portfolio professionnel et landing page
- Interfaces responsives, du téléphone à l'ordinateur
- Formulaire de contact validé et protégé contre le spam
- Mise en ligne et déploiement (hébergement, nom de domaine, HTTPS)
- Automatisation simple et optimisation de la visibilité en ligne

Chaque projet est sur devis. Je suis également ouverte aux missions freelance, collaborations,
stages, alternances et CDI.

## Technologies utilisées

- [React 18](https://react.dev/) et JavaScript (JSX)
- [Vite 5](https://vitejs.dev/) pour le développement et le build
- CSS sans framework (variables CSS, approche mobile-first)
- [Netlify](https://www.netlify.com/) pour l'hébergement et Netlify Forms pour le formulaire
- Git et GitHub

## Fonctionnalités

- Interface inspirée des tableaux de bord : cartes, mini tableau de bord, hiérarchie visuelle forte
- Site one-page responsive, avec navigation collante et menu mobile accessible
- Accessibilité : lien d'évitement, navigation au clavier, contrastes vérifiés, textes
  alternatifs, respect de la préférence « réduire les animations »
- Formulaire de contact (type de projet, budget, délai) avec validation, messages d'erreur,
  confirmation d'envoi et protection anti-spam
- Référencement : métadonnées, aperçu de partage (Open Graph), données structurées,
  `robots.txt`, `sitemap.xml` et page 404 dédiée
- Images optimisées (AVIF, WebP et JPEG de secours), icônes SVG sans bibliothèque externe
- En-têtes de sécurité et de cache configurés pour Netlify
- Contenu séparé du code : tous les textes sont dans `src/data/content.js`

## Installation et lancement

Prérequis : [Node.js](https://nodejs.org/) 18 ou plus récent.

```bash
npm install        # installer les dépendances
npm run dev        # lancer en local sur http://localhost:5173
```

## Build de production

```bash
npm run build      # génère le site statique dans dist/
npm run preview    # prévisualise le build en local
```

## Structure

```
index.html            métadonnées SEO et copie du formulaire pour Netlify
netlify.toml          configuration du déploiement Netlify
public/               images, favicon, robots.txt, sitemap.xml, page 404
src/data/content.js   tout le contenu du site
src/components/       une section par composant
src/styles.css        feuille de styles unique
```

## Déploiement (Netlify)

Le fichier `netlify.toml` contient la configuration :

- commande de build : `npm run build`
- dossier publié : `dist`
- en-têtes de sécurité (CSP, protection contre l'intégration en iframe…) et règles de cache

Le formulaire de contact utilise Netlify Forms : la détection des formulaires doit être activée
dans le tableau de bord Netlify. L'envoi ne fonctionne qu'une fois le site déployé sur Netlify ;
en local, le formulaire affiche un message d'erreur, ce qui est normal.

## Liens

- GitHub : [github.com/sianahk22](https://github.com/sianahk22)
- Site : [anaisweb.tech](https://anaisweb.tech)
- Code source : [github.com/sianahk22/Portfolio](https://github.com/sianahk22/Portfolio)
- Contact : via le formulaire du site
