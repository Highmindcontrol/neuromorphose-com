# neuromorphose.com — Site officiel de la méthode

Site institutionnel de présentation de la **méthode Neuromorphose®**, formalisée par François Le Moing. Statique, sobre, scientifique. Source de vérité grand public sur la méthode (face complémentaire de `neuromorphose.fr` qui présente la fédération des praticiens, et de `neuroactif.com` qui est la plateforme d'application).

## Stack

- **Next.js 16** (App Router) + **TypeScript** strict
- **Tailwind CSS 4** (tokens @theme)
- 100% statique — aucun backend, aucune base de données
- Hébergement **Vercel** (production sur `neuromorphose.com`)

## Structure des pages

| Route | Description |
|---|---|
| `/` | Accueil — hero, triple négation, 3 fondements, livre, portes d'entrée |
| `/methode` | Présentation détaillée : origines, 3 fondements, distinctions vs autres approches, cadre éthique |
| `/livre` | Le livre fondateur, sommaire en 7 chapitres, à propos de l'auteur |
| `/outils` | EndoFormia® et EndoTonia® présentés en parallèle |
| `/recherche` | 5 axes de recherche FFPN, dispositif inédit de captation de données, appels à partenariats |
| `/faq` | 10 questions fréquentes |
| `/contact` | 4 contacts par sujet + architecture de l'écosystème |

## Démarrer en local

```bash
npm install
npm run dev
```

Le site tourne sur `http://localhost:3000`.

## Mise en production sur Vercel

1. Créer un nouveau projet Vercel pointant sur ce repo GitHub
2. Branche : `main`
3. Aucune variable d'env requise (site 100% statique)
4. Domaine `neuromorphose.com` à pointer sur Vercel

## Charte graphique

Noir sur blanc strict, Inter exclusif, sans accent coloré. Inspiration : revues scientifiques, presses universitaires, livres d'auteurs sobres (Damasio, Cyrulnik). Lecture longue confortable, autorité tranquille. Distinct de la FFPN (qui a son bleu institutionnel #1d4ed8) pour bien séparer les deux marques visuellement.

## Liens vers l'écosystème

- `neuroactif.com` — plateforme d'application (espace particulier + praticien)
- `neuromorphose.fr` — FFPN, fédération des praticiens
- `ataraxis.group` — holding éditrice
