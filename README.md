# Merveille Nzoyem — Portfolio

**AI Agent Developer & Software Engineer** · Douala, Cameroun

> Portfolio "Neural OS" — Dark Tech · Bleu Électrique · IBM Plex · React Router · Bilingue FR/EN

---

## Stack

- **React 18** + **React Router v6** — navigation SPA
- **Tailwind CSS** — utilitaires & thème custom
- **IBM Plex Mono / Sans Condensed / Sans** — typographie IBM
- **Canvas API** — réseau de neurones animé en background
- Context API — système bilingue FR/EN

---

## Structure

```
src/
├── App.jsx                  # Router racine
├── index.js / index.css     # Entrée + styles globaux
├── context/
│   └── LangContext.js       # Bilinguisme FR/EN + toutes les traductions
├── hooks/
│   └── useTypewriter.js     # Hook effet machine à écrire
├── components/
│   ├── Navbar.jsx           # Navigation segmentée fixe
│   ├── Footer.jsx           # Pied de page
│   └── NeuralBackground.jsx # Canvas réseau de neurones animé
└── pages/
    ├── Home.jsx             # Le Manifeste — boot terminal + héros + stack
    ├── About.jsx            # La Trajectoire — timeline + compétences + quote
    ├── Projects.jsx         # L'Arsenal — SkillGap AI, 100 Days, Orchestration
    ├── Learning.jsx         # Le Laboratoire — livres + roadmap + YouTube
    └── Contact.jsx          # Le Terminal — formulaire + infos
```

---

## Installation

```bash
# 1. Installer les dépendances
npm install

# 2. Installer Tailwind
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

# 3. Lancer en développement
npm start

# 4. Build production
npm run build
```

---

## Pages

| Route        | Page            | Description |
|-------------|-----------------|-------------|
| `/`         | Le Manifeste    | Boot terminal animé, headline glitch, stack tech |
| `/about`    | La Trajectoire  | Timeline 4 étapes, barres compétences, citation grand-mère |
| `/projects` | L'Arsenal       | SkillGap AI · 100 Days of ML · Orchestration IA |
| `/learning` | Le Laboratoire  | Napoleon Hill · The One Thing · Roadmap 2028 · YouTube 2027 |
| `/contact`  | Le Terminal     | Formulaire bash-style · Disponibilités |

---

## Personnalisation rapide

Pour modifier le contenu, tout est dans **`src/context/LangContext.js`** — les traductions FR et EN de chaque page sont centralisées dans l'objet `translations`.

---

## Design System

| Couleur        | Valeur    | Usage |
|---------------|-----------|-------|
| Carbon base    | `#0a0c0f` | Background principal |
| Carbon-1       | `#12151a` | Cards / panels |
| Bleu électrique| `#0066ff` | Accent primaire |
| Vert néon      | `#00d4aa` | Accent secondaire / statuts |
| Orange         | `#ff6b35` | Alertes / YouTube |

---

*Built by Merveille Nzoyem · Douala, Cameroun 🇨🇲*
