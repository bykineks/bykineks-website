const characterSet = document.querySelector('#glyphs');
const glyphButtons = characterSet.querySelectorAll('button.glyph');
characterSet.querySelector('#character-set-count').textContent =
  glyphButtons.length.toLocaleString('en-US') + ' visible glyphs';
glyphButtons[0].setAttribute('aria-pressed', 'true');

characterSet.addEventListener('click', (event) => {
  const title = event.target.closest('button.glyph-title');
  if (title) {
    const open = title.getAttribute('aria-expanded') !== 'true';
    title.setAttribute('aria-expanded', String(open));
    document.getElementById(title.getAttribute('aria-controls')).hidden = !open;
    return;
  }
  const glyph = event.target.closest('button.glyph');
  if (!glyph) return;
  characterSet.querySelector('[aria-pressed="true"]').setAttribute('aria-pressed', 'false');
  glyph.setAttribute('aria-pressed', 'true');
  characterSet.querySelector('#glyph-preview-char').textContent = glyph.textContent;
  characterSet.querySelector('#glyph-preview-name').textContent = glyph.textContent;
  characterSet.querySelector('#glyph-preview-category').textContent =
    glyph.closest('.glyph-group').querySelector('.glyph-title span').textContent;
});
