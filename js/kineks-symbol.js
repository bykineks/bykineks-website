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
