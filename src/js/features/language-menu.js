window.Portfolio = window.Portfolio || {};

(function (app) {
  app.initLanguageMenu = function () {
    const root = document.getElementById("lang");
    const button = document.getElementById("langBtn");
    const label = document.getElementById("langLabel");
    if (!root || !button || !label) return;

    const options = Array.from(root.querySelectorAll(".lang-option"));

    function select(code) {
      app.applyLanguage(code);
      options.forEach((option) => {
        const active = option.dataset.lang === code;
        option.setAttribute("aria-selected", active ? "true" : "false");
        if (active) label.textContent = option.textContent;
      });
    }

    function open() {
      root.classList.add("open");
      button.setAttribute("aria-expanded", "true");
    }

    function close() {
      root.classList.remove("open");
      button.setAttribute("aria-expanded", "false");
    }

    button.addEventListener("click", (event) => {
      event.stopPropagation();
      root.classList.contains("open") ? close() : open();
    });

    options.forEach((option) => {
      option.addEventListener("click", () => {
        select(option.dataset.lang);
        close();
      });
    });

    document.addEventListener("click", (event) => {
      if (!root.contains(event.target)) close();
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") close();
    });

    select(app.getInitialLanguage());
  };
})(window.Portfolio);
