window.Portfolio = window.Portfolio || {};

Portfolio.translations = {
  en: {
    heroTagline: "Independent developer. Building small web projects — games, tools and experiments.",
    projectsTitle: "Projects",
    interestAi: "AI",
    interestSecurity: "Security",
    interestHosting: "Self-hosting",
    interestGaming: "Gaming",
    nivraDesc: "A private space to organize your calendar, schedule and tasks.",
    poolDesc: "A physics-based pool game — pull back and release to shoot.",
    candyDesc: "Eat candy, avoid the poison. Local or online.",
    helloworldDesc: "My first web page.",
    footerText: "Arel Kair — built from scratch, self-hosted."
  },
  es: {
    heroTagline: "Desarrollador independiente. Construyo pequeños proyectos web: juegos, herramientas y experimentos.",
    projectsTitle: "Proyectos",
    interestAi: "IA",
    interestSecurity: "Ciberseguridad",
    interestHosting: "Self-hosting",
    interestGaming: "Videojuegos",
    nivraDesc: "Un espacio privado para organizar tu calendario, horario y tareas.",
    poolDesc: "Un juego de billar con física real: tira y suelta para golpear.",
    candyDesc: "Come chuches, evita el veneno. En persona o en línea.",
    helloworldDesc: "Mi primera página web.",
    footerText: "Arel Kair — hecho desde cero, autoalojado."
  },
  ko: {
    heroTagline: "독립 개발자입니다. 게임, 도구, 실험적인 작은 웹 프로젝트를 만듭니다.",
    projectsTitle: "프로젝트",
    interestAi: "AI",
    interestSecurity: "보안",
    interestHosting: "셀프 호스팅",
    interestGaming: "게임",
    nivraDesc: "캘린더, 일정, 할 일을 정리할 수 있는 나만의 공간.",
    poolDesc: "물리 기반 당구 게임 — 당겼다 놓아서 치세요.",
    candyDesc: "사탕을 먹고 독을 피하세요. 오프라인 또는 온라인으로.",
    helloworldDesc: "제 첫 번째 웹페이지입니다.",
    footerText: "Arel Kair — 처음부터 직접 만들고 셀프 호스팅합니다."
  },
  zh: {
    heroTagline: "独立开发者。构建小型网页项目——游戏、工具和实验性作品。",
    projectsTitle: "项目",
    interestAi: "人工智能",
    interestSecurity: "网络安全",
    interestHosting: "自托管",
    interestGaming: "游戏",
    nivraDesc: "一个私人空间,用来整理日历、日程和待办事项。",
    poolDesc: "一款基于物理引擎的台球游戏——拉动并松开即可击球。",
    candyDesc: "吃糖果,避开毒药。可本地或在线游玩。",
    helloworldDesc: "我的第一个网页。",
    footerText: "Arel Kair——从零打造,自托管。"
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
  app.initTheme();
  app.initLanguageMenu();
  app.initStatusClock();
})(window.Portfolio);
