window.Portfolio = window.Portfolio || {};

(function (app) {
  app.prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  app.storageGet = function (key) {
    try {
      return localStorage.getItem(key);
    } catch (error) {
      return null;
    }
  };

  app.storageSet = function (key, value) {
    try {
      localStorage.setItem(key, value);
    } catch (error) {}
  };
})(window.Portfolio);
