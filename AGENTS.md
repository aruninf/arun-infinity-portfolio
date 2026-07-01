# Infinity — Arun Kumar's portfolio

Static portfolio page — `index.html` + `styles.css` + `script.js`. No build step, no package manager, no tests.

- **Files**: edit `index.html` for markup, `styles.css` for styling, `script.js` for behavior.
- **Preview**: open `index.html` in a browser (double-click or any static file server).
- **Portfolio cards**: static HTML in `<section id="portfolio"> .card` elements. Add/remove cards by editing the grid.
- **Filter pills**: `data-filter` on buttons, `data-cat` on cards — keep these attributes in sync when adding cards.
- **Reveal animations**: `IntersectionObserver` in `script.js`. Each `.card` gets a staggered fade-in (50 ms delay per card) when the portfolio section scrolls into view.
- **Refined dark theme**: CSS custom properties in `:root`, subtle glow effects on interactive elements, pulsing dot on the active journey step, keyboard focus rings via `:focus-visible`.
- No local server needed — just double-click `index.html`.
