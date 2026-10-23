# Portfolio — Mohanaa Krishnan

A responsive, static three-page portfolio starter built with semantic HTML, CSS, and a small amount of vanilla JavaScript.

## Pages

- `public/index.html` — introduction and profile
- `public/projects.html` — two project summaries
- `public/contact.html` — GitHub and LinkedIn contact options; no email form is connected
- `public/style.css` and `public/script.js` — shared responsive styles and interactions

## Make it yours

The Home page and two project summaries use details supplied by Mohanaa. Unknown project dates and unsupported role or outcome claims are omitted rather than invented. Add contact details only when ready. The public origin is not configured; add canonical URLs and absolute Open Graph URL/image metadata only after a real public domain is known.

The Contact page directs visitors to GitHub and LinkedIn. There is no email form connected, so messages are not submitted or stored by this site. The SecureVault description warns visitors not to use real passwords while testing early versions.

The site honors reduced-motion preferences. Main content remains available without animation, and keyboard focus indicators remain visible.

## Content notes

The biography, education, and two project summaries have been filled using information supplied by Mohanaa. Project years and details that were not provided are omitted. No editable content placeholders remain on the portfolio pages.

`404.html` is included for hosts that serve a custom not-found page.


## Theme & responsive design

### How the theme works

The site uses a **CSS custom-property token system** with a light default and a full dark override. Tokens on `:root` cover colors, shadows, radii, spacing, and type scale. Dark values are applied via `[data-theme="dark"]` (set by the theme toggle) and `@media (prefers-color-scheme: dark) { :root:not([data-theme]) { … } }` (for JS-disabled or first-load fallback).

A tiny inline `<script>` in `<head>` reads `localStorage.getItem('theme')` and sets `data-theme` on `<html>` **before** the stylesheet parses, preventing any flash of the wrong theme.

The toggle button uses `aria-pressed` to reflect state and updates its visible label ("Dark mode" / "Light mode"). `localStorage` access is wrapped in `try/catch` so the site works when storage is blocked.

### Breakpoints

All breakpoints use `em` units so they scale with the user's browser font-size setting:

| Name         | `min-width` | ~px  |
|--------------|------------|------|
| Base (mobile)| —          | 320+ |
| Small tablet | `40em`     | 640  |
| Tablet       | `48em`     | 768  |
| Desktop      | `64em`     | 1024 |
| Wide         | `80em`     | 1280 |

### How to change a color token

Open `public/style.css`. All color values live in the `:root { … }` block at the top (light) and in the `[data-theme="dark"] { … }` / `@media (prefers-color-scheme: dark) { :root:not([data-theme]) { … } }` blocks (dark). For example, to change the accent color:

```css
:root {
  --color-accent: #24483c;        /* light theme */
}
[data-theme="dark"] {
  --color-accent: #6faa8c;        /* dark theme */
}
```

No color values appear outside these token blocks — every rule in the file uses `var(--…)`.
