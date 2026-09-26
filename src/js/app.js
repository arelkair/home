window.Portfolio = window.Portfolio || {};

Portfolio.translations = {
  en: {
    heroTagline: "I make web projects and games.",
    projectsTitle: "Projects",
    nivraDesc: "A private space for your calendar, schedule and tasks.",
    poolDesc: "A physics-based pool game. Pull back and release to shoot.",
    candyDesc: "Eat candy, avoid the poison. Local or online.",
    helloworldDesc: "My first web page."
  },
  es: {
    heroTagline: "Hago proyectos web y juegos.",
    projectsTitle: "Proyectos",
    nivraDesc: "Un espacio privado para tu calendario, horario y tareas.",
    poolDesc: "Un juego de billar con física real. Tira y suelta para golpear.",
    candyDesc: "Come chuches, evita el veneno. En persona o en línea.",
    helloworldDesc: "Mi primera página web."
  },
  ko: {
    heroTagline: "웹 프로젝트와 게임을 만듭니다.",
    projectsTitle: "프로젝트",
    nivraDesc: "캘린더, 일정, 할 일을 위한 나만의 공간.",
    poolDesc: "물리 기반 당구 게임. 당겼다 놓아서 치세요.",
    candyDesc: "사탕을 먹고 독을 피하세요. 오프라인 또는 온라인으로.",
    helloworldDesc: "제 첫 번째 웹페이지입니다."
  },
  zh: {
    heroTagline: "我制作网页项目和游戏。",
    projectsTitle: "项目",
    nivraDesc: "用于日历、日程和待办事项的私人空间。",
    poolDesc: "基于物理引擎的台球游戏。拉动并松开即可击球。",
    candyDesc: "吃糖果,避开毒药。可本地或在线游玩。",
    helloworldDesc: "我的第一个网页。"
  }
};

Portfolio.supportedLanguages = Object.keys(Portfolio.translations);

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
        if (active) label.textContent = code.toUpperCase();
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
  app.initTheme();
  app.initLanguageMenu();
})(window.Portfolio);
