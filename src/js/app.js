window.Portfolio = window.Portfolio || {};

Portfolio.translations = {
  en: {
    navHome: "Home",
    navProjects: "Projects",
    heroGreeting: "Hi, I'm Arel Kair.",
    heroTagline: "I build things for the web and tinker with security, self-hosting and AI.",
    projectsTitle: "Projects",
    interestAi: "AI",
    interestSecurity: "Security",
    interestHosting: "Self-hosting",
    interestGaming: "Gaming",
  },
  es: {
    navHome: "Inicio",
    navProjects: "Proyectos",
    heroGreeting: "Hola, soy Arel Kair.",
    heroTagline: "Construyo cosas para la web y experimento con seguridad, self-hosting e IA.",
    projectsTitle: "Proyectos",
    interestAi: "IA",
    interestSecurity: "Ciberseguridad",
    interestHosting: "Self-hosting",
    interestGaming: "Videojuegos",
  },
  ko: {
    navHome: "홈",
    navProjects: "프로젝트",
    heroGreeting: "안녕하세요, Arel Kair입니다.",
    heroTagline: "웹을 만들고 보안, 셀프 호스팅, AI를 탐구합니다.",
    projectsTitle: "프로젝트",
    interestAi: "AI",
    interestSecurity: "보안",
    interestHosting: "셀프 호스팅",
    interestGaming: "게임",
  },
  zh: {
    navHome: "首页",
    navProjects: "项目",
    heroGreeting: "你好,我是 Arel Kair。",
    heroTagline: "我构建网络应用,并研究安全、自托管和人工智能。",
    projectsTitle: "项目",
    interestAi: "人工智能",
    interestSecurity: "网络安全",
    interestHosting: "自托管",
    interestGaming: "游戏",
  }
};

Portfolio.supportedLanguages = Object.keys(Portfolio.translations);


Portfolio.prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

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


(function (app) {
  const STORAGE_KEY = "lang";

  app.getInitialLanguage = function () {
    const saved = app.storageGet(STORAGE_KEY);
    return app.supportedLanguages.includes(saved) ? saved : "en";
  };

  app.applyLanguage = function (code) {
    const dictionary = app.translations[code] || app.translations.en;
    document.querySelectorAll("[data-i18n]").forEach((element) => {
      const value = dictionary[element.dataset.i18n];
      if (value) element.textContent = value;
    });
    document.documentElement.lang = code;
    app.storageSet(STORAGE_KEY, code);
  };
})(window.Portfolio);


(function (app) {
  app.initLanguageMenu = function () {
    const root = document.getElementById("lang");
    const button = document.getElementById("langBtn");
    const label = document.getElementById("langLabel");
    if (!root || !button || !label) return;

    const options = Array.from(root.querySelectorAll(".lang-option"));

    function activeIndex() {
      return Math.max(0, options.findIndex((option) => option.getAttribute("aria-selected") === "true"));
    }

    function select(code) {
      app.applyLanguage(code);
      options.forEach((option) => {
        const active = option.dataset.lang === code;
        option.setAttribute("aria-selected", active ? "true" : "false");
        if (active) label.textContent = option.textContent;
      });
    }

    function open(focusOptions) {
      root.classList.add("open");
      button.setAttribute("aria-expanded", "true");
      if (focusOptions) options[activeIndex()].focus();
    }

    function close(focusButton) {
      root.classList.remove("open");
      button.setAttribute("aria-expanded", "false");
      if (focusButton) button.focus();
    }

    button.addEventListener("click", (event) => {
      event.stopPropagation();
      root.classList.contains("open") ? close(false) : open(false);
    });

    button.addEventListener("keydown", (event) => {
      if (event.key === "ArrowDown" || event.key === "ArrowUp") {
        event.preventDefault();
        open(true);
      }
    });

    options.forEach((option, index) => {
      option.addEventListener("click", () => {
        select(option.dataset.lang);
        close(false);
      });

      option.addEventListener("keydown", (event) => {
        if (event.key === "ArrowDown") {
          event.preventDefault();
          options[(index + 1) % options.length].focus();
        } else if (event.key === "ArrowUp") {
          event.preventDefault();
          options[(index - 1 + options.length) % options.length].focus();
        } else if (event.key === "Home") {
          event.preventDefault();
          options[0].focus();
        } else if (event.key === "End") {
          event.preventDefault();
          options[options.length - 1].focus();
        } else if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          select(option.dataset.lang);
          close(true);
        } else if (event.key === "Tab") {
          close(false);
        }
      });
    });

    document.addEventListener("click", (event) => {
      if (!root.contains(event.target)) close(false);
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && root.classList.contains("open")) {
        close(root.contains(document.activeElement));
      }
    });

    select(app.getInitialLanguage());
  };
})(window.Portfolio);


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


(function (app) {
  app.initTheme();
  app.initLanguageMenu();
  app.initStatusClock();
  app.initNav();
})(window.Portfolio);
