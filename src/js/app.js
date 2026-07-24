window.Portfolio = window.Portfolio || {};

Portfolio.translations = {
  en: {
    navHome: "Home",
    navProjects: "Projects",
    navBlog: "Blog",
    heroGreeting: "Hi, I'm Arel Kair.",
    heroTagline: "I build things for the web and tinker with security, self-hosting and AI.",
    projectsTitle: "Projects",
    interestAi: "AI",
    interestSecurity: "Security",
    interestHosting: "Self-hosting",
    interestGaming: "Gaming",
    blogTitle: "Blog",
    blogSubtitle: "Notes on what I'm building and learning.",
    blogReadMore: "Read more",
    blogBackToList: "Back to blog",
    postWelcomeTitle: "Welcome to the blog",
    postWelcomeExcerpt: "The first post: why this blog exists and what to expect here going forward.",
    postWelcomeP1: "This is the first post on this site's new blog section. I'll use this space for short write-ups on the projects I'm building, things I'm learning about security and self-hosting, and the occasional experiment with AI tooling.",
    postWelcomeP2: "The rest of the site stays the same: a small portfolio of projects, built with plain HTML, CSS and JavaScript and no build step. The blog follows the same rule — every post here is its own static page, so there's nothing to install or compile to read or write one.",
    postWelcomeP3: "More posts soon."
  },
  es: {
    navHome: "Inicio",
    navProjects: "Proyectos",
    navBlog: "Blog",
    heroGreeting: "Hola, soy Arel Kair.",
    heroTagline: "Construyo cosas para la web y experimento con seguridad, self-hosting e IA.",
    projectsTitle: "Proyectos",
    interestAi: "IA",
    interestSecurity: "Ciberseguridad",
    interestHosting: "Self-hosting",
    interestGaming: "Videojuegos",
    blogTitle: "Blog",
    blogSubtitle: "Notas sobre lo que estoy construyendo y aprendiendo.",
    blogReadMore: "Leer más",
    blogBackToList: "Volver al blog",
    postWelcomeTitle: "Bienvenida al blog",
    postWelcomeExcerpt: "La primera publicación: por qué existe este blog y qué esperar de aquí en adelante.",
    postWelcomeP1: "Esta es la primera publicación de la nueva sección de blog de este sitio. Voy a usar este espacio para escribir notas cortas sobre los proyectos que estoy construyendo, cosas que voy aprendiendo sobre seguridad y self-hosting, y algún que otro experimento con herramientas de IA.",
    postWelcomeP2: "El resto del sitio sigue igual: un pequeño portfolio de proyectos, hecho con HTML, CSS y JavaScript planos, sin paso de build. El blog sigue la misma regla: cada publicación es su propia página estática, así que no hay nada que instalar ni compilar para leer o escribir una.",
    postWelcomeP3: "Más publicaciones pronto."
  },
  ko: {
    navHome: "홈",
    navProjects: "프로젝트",
    navBlog: "블로그",
    heroGreeting: "안녕하세요, Arel Kair입니다.",
    heroTagline: "웹을 만들고 보안, 셀프 호스팅, AI를 탐구합니다.",
    projectsTitle: "프로젝트",
    interestAi: "AI",
    interestSecurity: "보안",
    interestHosting: "셀프 호스팅",
    interestGaming: "게임",
    blogTitle: "블로그",
    blogSubtitle: "만들고 배우는 것에 대한 기록.",
    blogReadMore: "더 읽기",
    blogBackToList: "블로그로 돌아가기",
    postWelcomeTitle: "블로그에 오신 것을 환영합니다",
    postWelcomeExcerpt: "첫 번째 글: 이 블로그가 왜 생겼는지, 앞으로 무엇을 기대할 수 있는지.",
    postWelcomeP1: "이 사이트의 새로운 블로그 섹션에 올리는 첫 번째 글입니다. 이 공간은 제가 만들고 있는 프로젝트, 보안과 셀프 호스팅에 관해 배우는 것들, 그리고 가끔씩 해보는 AI 도구 실험에 대한 짧은 글을 올리는 곳입니다.",
    postWelcomeP2: "사이트의 나머지 부분은 그대로입니다: 순수한 HTML, CSS, JavaScript로 만든 작은 프로젝트 포트폴리오이고 빌드 과정이 없습니다. 블로그도 같은 원칙을 따릅니다 — 각 글은 독립된 정적 페이지이므로, 읽거나 쓰는 데 설치하거나 컴파일할 것이 없습니다.",
    postWelcomeP3: "곧 더 많은 글을 올리겠습니다."
  },
  zh: {
    navHome: "首页",
    navProjects: "项目",
    navBlog: "博客",
    heroGreeting: "你好,我是 Arel Kair。",
    heroTagline: "我构建网络应用,并研究安全、自托管和人工智能。",
    projectsTitle: "项目",
    interestAi: "人工智能",
    interestSecurity: "网络安全",
    interestHosting: "自托管",
    interestGaming: "游戏",
    blogTitle: "博客",
    blogSubtitle: "记录我正在构建和学习的内容。",
    blogReadMore: "阅读更多",
    blogBackToList: "返回博客",
    postWelcomeTitle: "欢迎来到博客",
    postWelcomeExcerpt: "第一篇文章:这个博客为什么存在,以及接下来可以期待什么。",
    postWelcomeP1: "这是本站新博客栏目的第一篇文章。我会在这里写一些简短的笔记,记录我正在构建的项目、在安全和自托管方面学到的东西,以及偶尔进行的人工智能工具实验。",
    postWelcomeP2: "网站的其余部分保持不变:一个用纯 HTML、CSS 和 JavaScript 构建的小型项目作品集,没有构建步骤。博客也遵循同样的原则——每篇文章都是独立的静态页面,阅读或撰写都无需安装或编译任何东西。",
    postWelcomeP3: "更多文章即将发布。"
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
