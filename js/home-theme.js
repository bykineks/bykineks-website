'use strict';
(() => {
  let theme = 'light';
  try { theme = localStorage.getItem('bykineks-theme') === 'dark' ? 'dark' : 'light'; } catch {}
  document.documentElement.dataset.theme = theme;
  document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.getElementById('themeToggle');
    const label = document.getElementById('themeLabel');
    function render() {
      const dark = document.documentElement.dataset.theme === 'dark';
      toggle.setAttribute('aria-pressed', String(dark));
      toggle.setAttribute('aria-label', dark ? 'Switch to light theme' : 'Switch to dark theme');
      label.textContent = dark ? 'Light' : 'Dark';
    }
    toggle.addEventListener('click', () => {
      const next = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
      document.documentElement.dataset.theme = next;
      try { localStorage.setItem('bykineks-theme', next); } catch {}
      render();
    });
    render();
  });
})();
