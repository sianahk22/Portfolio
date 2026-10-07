# Anaïs Bay · Portfolio

Développeuse web junior à Paris : **applications web, automatisation et IA**.

Je suis étudiante en informatique et en software engineering. Je conçois des sites et des
applications web, et j'automatise les tâches répétitives, y compris avec l'intelligence
artificielle, avec une règle simple : l'IA aide, mais une personne garde le contrôle sur les
décisions importantes.

Ce dépôt contient le code source de mon portfolio. Il présente mes services, mes compétences et
mes projets, et permet aux clients comme aux recruteurs de me contacter.

## Services

- **Sites web & landing pages** : sites clairs, adaptés aux mobiles et accessibles, pour
  indépendants, associations et commerces.
- **Applications web sur mesure** : outils pensés pour un besoin précis (prise de demandes,
  tableau de suivi, espace de gestion simple).
- **Automatisation & IA** : relier des outils entre eux et automatiser les tâches répétitives,
  avec une validation humaine.

Chaque projet est sur devis. Je suis également ouverte aux stages, alternances, CDI, missions
freelance et collaborations.

## Technologies utilisées

- [React 18](https://react.dev/) et JavaScript (JSX)
- [Vite 5](https://vitejs.dev/) pour le développement et le build
- CSS sans framework (variables CSS, approche mobile-first)
- [Netlify](https://www.netlify.com/) pour l'hébergement et Netlify Forms pour le formulaire

## Fonctionnalités

- Site one-page responsive, du mobile au grand écran, avec navigation horizontale et menu mobile
- Accessibilité : lien d'évitement, navigation au clavier, contrastes vérifiés, textes
  alternatifs, respect de la préférence « réduire les animations »
- Formulaire de contact qualifié (profil, besoin, budget, délai) avec validation, messages
  d'erreur, confirmation d'envoi et protection anti-spam
- Référencement : métadonnées, aperçu de partage (Open Graph), données structurées,
  `robots.txt` et `sitemap.xml`
- Images optimisées (AVIF, WebP et JPEG de secours) et chargement rapide
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
public/               images, favicon, robots.txt, sitemap.xml
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
- Code source : [github.com/sianahk22/Portfolio](https://github.com/sianahk22/Portfolio)
- Contact : via le formulaire du site
