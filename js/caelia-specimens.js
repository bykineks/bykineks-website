'use strict';
(() => {
  const scripts = document.getElementById('caelia-script');
  const specimen = document.getElementById('liveSpecimen');
  function showSample() {
    specimen.lang = scripts.value;
    specimen.textContent = scripts.selectedOptions[0].dataset.sample;
  }
  scripts.addEventListener('change', showSample);
  document.getElementById('resetControls').addEventListener('click', () => {
    scripts.selectedIndex = 0;
    showSample();
  });
})();
(() => {
  const gallery = document.getElementById('caelia-gallery-track');
  const dialog = document.getElementById('caelia-context-lightbox');
  if (!gallery || !dialog || typeof dialog.showModal !== 'function') return;
  const fullImage = document.getElementById('caelia-context-image');
  const caption = document.getElementById('caelia-context-caption');
  let opener;
  let previousOverflow;
  gallery.querySelectorAll('figure').forEach(figure => {
    const image = figure.querySelector('img');
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'caelia-context-open';
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
  dialog.querySelector('.caelia-context-close').addEventListener('click', () => dialog.close());
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
