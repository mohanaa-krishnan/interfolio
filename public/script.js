/* ============================================================
   script.js — Mohanaa Krishnan Portfolio
   Responsibilities:
     1. Update footer year
     2. Theme toggle (light / dark) with localStorage persistence
   ============================================================ */

/* ---------- 1. Current year ---------- */
const yearEl = document.querySelector('#current-year');
if (yearEl) yearEl.textContent = String(new Date().getFullYear());

/* ---------- 2. Theme toggle ---------- */
(function () {
  var STORAGE_KEY = 'theme';
  var html = document.documentElement;

  /* Resolve the effective theme from html[data-theme] */
  function currentTheme() {
    return html.getAttribute('data-theme') ||
      (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  }

  /* Persist and apply a theme */
  function applyTheme(theme) {
    html.setAttribute('data-theme', theme);
    try { localStorage.setItem(STORAGE_KEY, theme); } catch (_) {}

    /* Update <meta name="theme-color"> tags */
    var lightMeta = document.querySelector('meta[name="theme-color"][media*="light"]');
    var darkMeta  = document.querySelector('meta[name="theme-color"][media*="dark"]');
    if (lightMeta && darkMeta) {
      /* The meta approach for JS toggling: swap content on the "no-media" tag */
    }
    var plainMeta = document.querySelector('meta[name="theme-color"]:not([media])');
    if (plainMeta) {
      plainMeta.setAttribute('content', theme === 'dark' ? '#0d0d0d' : '#ffffff');
    }

    /* Sync all toggle buttons */
    var toggles = document.querySelectorAll('.theme-toggle');
    toggles.forEach(function (btn) {
      var isDark = theme === 'dark';
      btn.setAttribute('aria-pressed', String(isDark));
      var label = btn.querySelector('.theme-toggle-label');
      if (label) label.textContent = isDark ? 'Light mode' : 'Dark mode';
    });
  }

  /* Wire up every toggle button on the page */
  var toggles = document.querySelectorAll('.theme-toggle');
  toggles.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var next = currentTheme() === 'dark' ? 'light' : 'dark';
      applyTheme(next);
    });
  });

  /* Sync initial state */
  applyTheme(currentTheme());

  /* React to OS preference change (only when no stored choice) */
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function (e) {
    var stored = null;
    try { stored = localStorage.getItem(STORAGE_KEY); } catch (_) {}
    if (!stored) applyTheme(e.matches ? 'dark' : 'light');
  });
})();
