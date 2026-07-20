window.Portfolio = window.Portfolio || {};

(function (app) {
  app.initNav = function () {
    const toggle = document.getElementById("navToggle");
    const sidebar = document.getElementById("sidebar");
    if (!toggle || !sidebar) return;

    function close() {
      sidebar.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    }

    toggle.addEventListener("click", () => {
      const open = sidebar.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });

    sidebar.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", close);
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") close();
    });
  };
})(window.Portfolio);
