Lowly Apps — Light mode + Theme Toggle + Screenshots
======================================================

- Light is the default theme. A theme toggle in the header switches dark/light
  and is persisted in localStorage.
- Section separator lines have been removed.
- App cards support icons and a horizontal screenshot strip (scroll-snap).
  Add your image files in ./assets and reference them in apps.js.

Add assets:
- Icons: 1024x1024 PNG recommended (rounded rect okay).
- Screenshots: 1242x2688 (portrait) or 2048x2732 (iPad) JPG/PNG.
- Example naming: tracky.png, tracky-1.jpg, tracky-2.jpg, ...

Local dev:
- python3 -m http.server 8080   # then open http://localhost:8080/

Deploy:
- GitHub Pages, Netlify, or Vercel (static folder).

Note on App Store media:
- Hotlinking App Store images is not recommended (URLs can change & may be blocked).
  Prefer uploading your own exported icons and screenshots into ./assets.
