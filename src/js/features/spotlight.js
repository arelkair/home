window.Portfolio = window.Portfolio || {};

(function (app) {
  app.initSpotlight = function () {
    if (app.prefersReducedMotion) return;

    document.querySelectorAll(".project").forEach((card) => {
      let frame = 0;
      let pointer = { x: 0, y: 0 };

      function render() {
        frame = 0;
        const rect = card.getBoundingClientRect();
        card.style.setProperty("--mx", `${pointer.x - rect.left}px`);
        card.style.setProperty("--my", `${pointer.y - rect.top}px`);
      }

      card.addEventListener("pointermove", (event) => {
        pointer = { x: event.clientX, y: event.clientY };
        if (!frame) frame = requestAnimationFrame(render);
      });

      card.addEventListener("pointerleave", () => {
        if (frame) cancelAnimationFrame(frame);
        frame = 0;
      });
    });
  };
})(window.Portfolio);
