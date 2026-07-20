window.Portfolio = window.Portfolio || {};

(function (app) {
  const STORAGE_KEY = "theme";

  app.initTheme = function () {
    const toggle = document.getElementById("themeToggle");
    if (!toggle) return;

    toggle.addEventListener("click", () => {
      const next = document.documentElement.dataset.theme === "light" ? "dark" : "light";
      document.documentElement.dataset.theme = next;
      app.storageSet(STORAGE_KEY, next);
    });
  };
})(window.Portfolio);
