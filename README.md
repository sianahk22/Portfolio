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

- Design chaleureux et épuré : palette crème et terracotta, mise en page en tuiles, hiérarchie visuelle forte
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
- Carte de visite numérique et imprimable sur [`/carte/`](https://anaisweb.tech/carte/) (voir plus bas)

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
npm run qr         # régénère le QR code de la carte de visite (si l'adresse du site change)
```

## Structure

```
index.html            métadonnées SEO et copie du formulaire pour Netlify
netlify.toml          configuration du déploiement Netlify
public/               images, favicon, robots.txt, sitemap.xml, page 404
src/data/content.js   tout le contenu du site
src/components/       une section par composant
src/styles.css        feuille de styles unique
carte/index.html      page de la carte de visite (deuxième page HTML)
src/carte/            composants et styles de la carte (card.css écran, card-print.css impression)
scripts/generate-qr.js génère public/images/qr-anaisweb.svg
```

## Carte de visite (`/carte/`)

Une page à part, construite par Vite à côté du portfolio (voir `vite.config.js`).

- **À l'écran** : carte au format 85 × 55, retournable (bouton « Voir le verso »), effet 3D
  léger, version « fiche » sur mobile. Boutons : e-mail, appel (si activé), partage, PDF.
- **Impression / PDF** : le bouton « Télécharger la carte en PDF » ouvre la fenêtre
  d'impression du navigateur ; choisir « Enregistrer au format PDF », marges « Aucune »,
  échelle 100 %. On obtient 2 pages (recto, verso) au format exact 85 × 55 mm, sans marge,
  avec le contenu à plus de 4 mm des bords. Le texte et le QR code restent vectoriels (nets).
  La disposition est identique à l'écran (vérifié à 0,2 % près dans Chrome et Firefox).
- **Fond perdu** : le PDF n'en a pas. Si un imprimeur professionnel demande 3 mm de fond
  perdu, il faudra une variante 91 × 61 mm (à prévoir avant la commande).
- **Modifier les textes** : objet `card` (et `site` pour les liens) dans `src/data/content.js`.
- **Téléphone** : masqué, et le numéro n'est pas enregistré dans Git. Pour l'afficher, remplir
  `phone` et `phoneHref` dans `card`, puis passer `showPhone: true` (il devient alors public).
- **QR code** : fichier statique `public/images/qr-anaisweb.svg`, généré depuis `site.url`
  par `npm run qr` (bibliothèque `qrcode`, utilisée uniquement en développement).
- **Place limitée au verso** : 4 services et 5 coordonnées au maximum. Au-delà, le texte
  serait trop petit ou trop près du bord de coupe. Toujours vérifier le PDF après un changement.

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
- Carte de visite : [anaisweb.tech/carte/](https://anaisweb.tech/carte/)
- Instagram : [@anais_bay_tech](https://www.instagram.com/anais_bay_tech)
- Code source : [github.com/sianahk22/Portfolio](https://github.com/sianahk22/Portfolio)
- Contact : via le formulaire du site

## Crédits

Photo d'ambiance : « White cup and MacBook », Alex Knight (Unsplash), via
[Wikimedia Commons](https://commons.wikimedia.org/wiki/File:White_cup_and_MacBook_(Unsplash).jpg),
licence CC0 (domaine public).
