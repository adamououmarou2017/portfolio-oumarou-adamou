# CLAUDE.md

Ce fichier fournit des instructions à Claude Code (claude.ai/code) pour travailler sur ce projet.

## Vue d'ensemble du projet

Ce projet est un site **portfolio personnel**, destiné à présenter mon parcours, mes compétences et mes réalisations.

- **Framework** : [Astro](https://astro.build)
- **Objectif** : Créer un site portfolio rapide, moderne et responsive pour présenter mon profil professionnel
- **Assets fournis par l'utilisateur** :
  - Logo personnel (sera ajouté dans `src/assets/` ou `public/`)
  - CV (format PDF, à intégrer/téléchargeable depuis le site)
  - Charte graphique (couleurs, typographies, style visuel — à respecter scrupuleusement une fois fournie)

> ⚠️ Tant que le logo, le CV et la charte graphique n'ont pas été fournis, utiliser des placeholders clairs (couleurs neutres, texte "Logo à venir", etc.) et ne pas inventer d'identité visuelle définitive.

## Stack technique

- **Astro** (dernière version stable)
- HTML / CSS (ou Tailwind CSS si activé — à confirmer selon préférence)
- Déploiement statique (Netlify / Vercel / GitHub Pages — à définir)
- Pas de backend nécessaire (site 100% statique)

## Structure du site (pages prévues)

- **Accueil** — présentation rapide, accroche, photo/logo
- **À propos** — parcours, bio, compétences clés
- **Projets / Réalisations** — portfolio des travaux (avec visuels, description, technologies utilisées, liens)
- **CV** — page dédiée ou lien de téléchargement du CV (PDF)
- **Contact** — formulaire ou coordonnées (email, réseaux sociaux, LinkedIn, GitHub, etc.)

## Commandes de développement

```bash
npm install          # installer les dépendances
npm run dev           # lancer le serveur de développement local
npm run build         # build de production
npm run preview       # prévisualiser le build de production
```

## Conventions de code

- Utiliser des composants Astro (`.astro`) pour les sections réutilisables (Header, Footer, Card projet, etc.)
- Organiser le contenu des projets dans des fichiers de contenu structurés (`src/content/` avec Content Collections si plusieurs projets)
- Respecter une architecture claire :
  ```
  src/
    components/
    layouts/
    pages/
    content/
    assets/
  public/
  ```
- Code responsive mobile-first
- Optimiser les images (formats modernes, lazy loading) — Astro `<Image />` à privilégier

## Charte graphique

*(À compléter dès réception des éléments graphiques)*

- Couleurs principales : à définir
- Couleurs secondaires : à définir
- Police(s) : à définir
- Style général : à définir (minimaliste, coloré, sombre, etc.)

## Notes importantes pour Claude Code

- Ne pas inventer de contenu personnel (expériences, projets, diplômes) : toujours demander les informations réelles ou utiliser des placeholders explicites (`[À compléter]`)
- Prioriser la performance (Astro est déjà orienté performance — éviter le JS inutile, utiliser des islands uniquement si nécessaire)
- Garder le design cohérent avec la charte graphique dès qu'elle sera fournie
- Prévoir une bonne accessibilité (contrastes, alt text, navigation clavier)
- SEO de base : balises meta, title, description par page
