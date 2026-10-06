# Portfolio · Anaïs Bay

Portfolio one-page (React + Vite) de développeuse web freelance.

## Prérequis

Node.js 18 ou plus récent.

## Commandes

```bash
npm install        # installer les dépendances
npm run dev        # lancer en local (http://localhost:5173)
npm run build      # construire pour la production (dossier dist/)
npm run preview    # prévisualiser le build de production
```

## Où modifier le contenu

Tout le contenu (coordonnées, offres, étapes, textes) est dans `src/data/content.js`.
Les sections sont dans `src/components/`, les styles dans `src/styles.css`.

## Remplacer la photo

1. Place ta photo dans `public/images/` (par exemple `anais.jpg`, format portrait 4:5 conseillé).
2. Dans `src/data/content.js`, mets `portrait: "/images/anais.jpg"`.

La photo apparaît dans le hero et dans « À propos », dans un cadre arrondi (jamais en plein écran).

## Remplacer la maquette Maison Sésame

1. Place une capture dans `public/images/` (par exemple `maison-sesame.png`).
2. Dans `src/data/content.js`, mets `demoImage: "/images/maison-sesame.png"`.

Le projet reste présenté comme fictif.

## Formulaire de contact

Le formulaire n'envoie aucun message : il prépare un email (`mailto:`) dans la messagerie du visiteur.
Les boutons « Envoyer un email » et « Appeler » fonctionnent directement.

Pour un vrai envoi plus tard, brancher un service (Formspree, Netlify Forms, etc.) dans
`src/components/Contact.jsx`, puis adapter le texte explicatif.

## Avant la mise en ligne

- Vérifier que `bonjour@anaisweb.tech` et le domaine `anaisweb.tech` sont actifs.
- Ajouter une page de mentions légales (obligatoire pour un site professionnel en France :
  identité de l'éditeur, statut, SIRET si micro-entreprise, hébergeur, contact).
- Ajouter une mention RGPD si le formulaire est connecté à un service d'envoi.
- Préciser la durée de correction des bugs après livraison (section Maintenance).

## Déploiement

Le dossier `dist/` est un site statique : il peut être déployé sur Netlify, Cloudflare Pages,
Vercel ou GitHub Pages.