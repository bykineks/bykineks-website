const study = document.querySelector('.glyph-study');
study.addEventListener('click', (event) => {
  const title = event.target.closest('button.glyph-title');
  if (title) {
    const group = title.closest('.symbol-group');
    const open = title.getAttribute('aria-expanded') !== 'true';
    title.setAttribute('aria-expanded', String(open));
    group.classList.toggle('is-open', open);
    group.querySelector('.symbol-grid').hidden = !open;
    return;
  }
  const button = event.target.closest('button.glyph');
  if (!button) return;
  study.querySelector('[aria-pressed="true"]').setAttribute('aria-pressed', 'false');
  button.setAttribute('aria-pressed', 'true');
  study.querySelector('.glyph-preview-char').replaceChildren(button.firstElementChild.cloneNode(true));
  document.querySelector('#symbol-name').textContent = button.getAttribute('aria-label');
  document.querySelector('#symbol-code').textContent = button.dataset.code;
});

for (const type of ['pointerover', 'focusin']) {
  study.addEventListener(type, event => {
    const glyph = event.target.closest('button.glyph');
    if (glyph && (type === 'focusin' || event.pointerType === 'mouse')) glyph.click();
  });
}

(() => {
  const gallery = document.getElementById('symbols-gallery-track');
  const dialog = document.getElementById('symbols-context-lightbox');
  if (!gallery || !dialog || typeof dialog.showModal !== 'function') return;
  const fullImage = document.getElementById('symbols-context-image');
  const caption = document.getElementById('symbols-context-caption');
  let opener;
  let previousOverflow;
  gallery.querySelectorAll('figure').forEach(figure => {
    const image = figure.querySelector('img');
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'symbols-context-open';
    button.setAttribute('aria-label', 'Enlarge image: ' + image.alt);
    button.setAttribute('aria-haspopup', 'dialog');
    image.before(button);
    button.append(image);
    button.addEventListener('click', () => {
      opener = button;
      fullImage.src = image.src;
      fullImage.alt = image.alt;
      caption.textContent = figure.querySelector('figcaption').textContent;
      previousOverflow = document.documentElement.style.overflow;
      dialog.showModal();
      document.documentElement.style.overflow = 'hidden';
    });
  });
  dialog.querySelector('.symbols-context-close').addEventListener('click', () => dialog.close());
  let startedOutside = false;
  dialog.addEventListener('pointerdown', event => { startedOutside = event.target === dialog; });
  dialog.addEventListener('click', event => {
    if (startedOutside && event.target === dialog) dialog.close();
    startedOutside = false;
  });
  dialog.addEventListener('close', () => {
    document.documentElement.style.overflow = previousOverflow;
    fullImage.removeAttribute('src');
    if (opener) opener.focus({preventScroll: true});
  });
})();
