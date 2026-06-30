window.Portfolio = window.Portfolio || {};

(function (app) {
  app.initSpotlight = function () {
    if (app.prefersReducedMotion) return;

    document.querySelectorAll(".reveal-target").forEach((card) => {
      let rect = null;
      let frame = 0;
      let pointer = { x: 0, y: 0 };

      function render() {
        frame = 0;
        if (!rect) return;
        card.style.setProperty("--mx", `${pointer.x - rect.left}px`);
        card.style.setProperty("--my", `${pointer.y - rect.top}px`);
      }

      card.addEventListener("pointerenter", () => {
        rect = card.getBoundingClientRect();
      });

      card.addEventListener("pointermove", (event) => {
        pointer = { x: event.clientX, y: event.clientY };
        if (!frame) frame = requestAnimationFrame(render);
      });

      card.addEventListener("pointerleave", () => {
        if (frame) cancelAnimationFrame(frame);
        frame = 0;
        rect = null;
      });
    });
  };

  app.initParallax = function () {
    if (app.prefersReducedMotion) return;

    const root = document.documentElement;
    let frame = 0;
    let pointer = { x: 0, y: 0 };

    function render() {
      frame = 0;
      root.style.setProperty("--px", pointer.x.toFixed(3));
      root.style.setProperty("--py", pointer.y.toFixed(3));
    }

    window.addEventListener("pointermove", (event) => {
      pointer = {
        x: (event.clientX / innerWidth - 0.5) * 2,
        y: (event.clientY / innerHeight - 0.5) * 2
      };
      if (!frame) frame = requestAnimationFrame(render);
    });
  };
})(window.Portfolio);
