window.Portfolio = window.Portfolio || {};

(function (app) {
  app.initStatusClock = function () {
    const el = document.getElementById("clockTime");
    if (!el) return;

    function update() {
      el.textContent = new Date().toLocaleTimeString(navigator.language, {
        hour: "2-digit",
        minute: "2-digit"
      });
    }

    update();
    setInterval(update, 15000);
  };
})(window.Portfolio);
