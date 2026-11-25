if (window.parent !== window && location.hash === "#lab-preview") {
  document.documentElement.classList.add("lab-preview");

  window.addEventListener("storage", event => {
    if (event.key === "bykineks-theme") {
      document.documentElement.dataset.theme = event.newValue === "dark" ? "dark" : "light";
    }
  });

  window.addEventListener("load", () => {
    const reducedMotion = matchMedia("(prefers-reduced-motion: reduce)");
    if (reducedMotion.matches) {
      document.querySelector("#toggle, #play")?.click();
      return;
    }

    const space = document.querySelector('[data-world="space"]');
    const reset = document.getElementById("resetButton");
    if (!space || !reset) return;

    document.fonts.ready.then(() => {
      if (reducedMotion.matches) return;
      space.click();
      window.setInterval(() => {
        if (reducedMotion.matches) return;
        reset.click();
        space.click();
      }, 6500);
    });
  });
}
