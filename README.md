# Lowly Apps

Static marketing site for Lowly Apps and its app landing pages.

## Local development

```bash
npm install
bundle install
npm run dev
```

The site is served locally at `http://localhost:4000`.

## Structure

- `index.html`, `styles.css`, `apps.js`, `main.js`: homepage
- `landing.js`: shared behavior for app landing pages
- `tracky/`, `lorcana-scan/`, `poke-scan/`, `op-scan/`, `wally/`: app-specific landing pages
- `assets/`: shared images, badges, icons, and landing assets

## Deploy

```bash
npm run predeploy
npm run deploy
```

Copyright © 2026 Lowly Apps. All rights reserved.

## Contact

For questions or feedback, email us at [contact@lowly.fr](mailto:contact@lowly.fr)
