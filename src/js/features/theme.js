window.Portfolio = window.Portfolio || {};

(function (app) {
  const STORAGE_KEY = "theme";

  function setTheme(value) {
    document.documentElement.dataset.theme = value;
    app.storageSet(STORAGE_KEY, value);
  }

  function revealFrom(element, apply) {
    const rect = element.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;
    const radius = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y));

    document.startViewTransition(apply).ready.then(() => {
      document.documentElement.animate(
        {
          clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${radius}px at ${x}px ${y}px)`]
        },
        {
          duration: 520,
          easing: "cubic-bezier(0.2, 0.8, 0.2, 1)",
          pseudoElement: "::view-transition-new(root)"
        }
      );
    }, () => {});
  }

  app.initTheme = function () {
    const toggle = document.getElementById("themeToggle");
    if (!toggle) return;

    toggle.addEventListener("click", () => {
      const next = document.documentElement.dataset.theme === "light" ? "dark" : "light";

      toggle.classList.remove("spin");
      void toggle.offsetWidth;
      toggle.classList.add("spin");

      if (!document.startViewTransition || app.prefersReducedMotion) {
        setTheme(next);
        return;
      }

      revealFrom(toggle, () => setTheme(next));
    });
  };
})(window.Portfolio);
