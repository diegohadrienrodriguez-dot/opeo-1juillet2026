# Site OPEO

Site statique (HTML/CSS/JS, sans build) — capture du 1er juillet 2026.

## Lancer en local

```
python3 -m http.server 8000
```

Puis ouvrir http://localhost:8000/index.html

## Pages

- `index.html` — Accueil
- `a-propos.html`, `expertises.html`, `secteurs.html`, `transformation.html`, `publications.html`, `carrieres.html`, `contact.html`, `mentions-legales.html`
- `secteur-*.html` — pages secteurs (Luxe, Process, Aéronautique, Pharma)
- `expertise-*.html` — pages expertises individuelles (non liées depuis la navigation, conservées)
- `article-example.html`, `curium.html` — exemples d'articles / étude de cas

## À savoir

- Le bouton "Télécharger la brochure" pointe vers un lien HubSpot (`hsforms.com`), pas de PDF local.
- Un lien vers `brochure-opeo.pdf` subsiste dans `publications.html` (bloc lightbox) — le fichier n'existe pas encore, à fournir si besoin.
