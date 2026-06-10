window.Portfolio = window.Portfolio || {};

Portfolio.prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// localStorage throws when storage is blocked (private modes, embedded contexts).
Portfolio.storageGet = function (key) {
  try {
    return localStorage.getItem(key);
  } catch (error) {
    return null;
  }
};

Portfolio.storageSet = function (key, value) {
  try {
    localStorage.setItem(key, value);
  } catch (error) {}
};
