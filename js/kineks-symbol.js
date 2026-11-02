const study = document.querySelector('.glyph-study');
study.addEventListener('click', (event) => {
  const button = event.target.closest('button.glyph');
  if (!button) return;
  const character = button.textContent.trim();
  study.querySelector('[aria-pressed="true"]').setAttribute('aria-pressed', 'false');
  button.setAttribute('aria-pressed', 'true');
  study.querySelector('.glyph-preview-char').textContent = character;
  document.querySelector('#symbol-name').textContent = button.getAttribute('aria-label');
  document.querySelector('#symbol-code').textContent = 'U+' + character.codePointAt(0).toString(16).toUpperCase();
});
