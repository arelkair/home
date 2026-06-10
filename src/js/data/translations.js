window.Portfolio = window.Portfolio || {};

(function (app) {
  app.translations = {
    en: {
      aboutTitle: "About",
      bio: "I enjoy experimenting with AI and pushing it to its limits to explore its capabilities. I organize and direct AI-driven projects and I'm interested in cybersecurity, network and infrastructure management, as well as video games, self-hosting, programming, and many other related topics.",
      projectsTitle: "Projects",
      proj1: "My first web page.",
      proj2: "A grid-based, fully responsive scientific calculator built with plain HTML, CSS and JavaScript.",
      viewGithub: "View on GitHub"
    },
    es: {
      aboutTitle: "Sobre mí",
      bio: "Disfruto experimentando con la IA y llevándola al límite para explorar sus capacidades. Organizo y dirijo proyectos impulsados por IA, y me interesan la ciberseguridad, la gestión de redes e infraestructura, además de los videojuegos, el self-hosting, la programación y muchos otros temas relacionados.",
      projectsTitle: "Proyectos",
      proj1: "Mi primera página web.",
      proj2: "Una calculadora científica responsive basada en cuadrícula, hecha con HTML, CSS y JavaScript puros.",
      viewGithub: "Ver en GitHub"
    },
    ko: {
      aboutTitle: "소개",
      bio: "저는 AI를 실험하고 그 한계까지 밀어붙여 가능성을 탐구하는 것을 즐깁니다. AI 기반 프로젝트를 기획하고 이끌며, 사이버 보안, 네트워크 및 인프라 관리는 물론 비디오 게임, 셀프 호스팅, 프로그래밍 등 다양한 관련 주제에 관심이 있습니다.",
      projectsTitle: "프로젝트",
      proj1: "나의 첫 웹 페이지.",
      proj2: "순수 HTML, CSS, JavaScript로 만든 그리드 기반의 완전 반응형 공학용 계산기입니다.",
      viewGithub: "GitHub에서 보기"
    },
    zh: {
      aboutTitle: "关于我",
      bio: "我喜欢尝试人工智能并将其推向极限，以探索它的各种可能性。我策划并主导以人工智能为驱动的项目，同时对网络安全、网络与基础设施管理，以及电子游戏、自托管、编程等许多相关主题充满兴趣。",
      projectsTitle: "项目",
      proj1: "我的第一个网页。",
      proj2: "使用纯 HTML、CSS 和 JavaScript 构建的基于网格、完全响应式的科学计算器。",
      viewGithub: "在 GitHub 上查看"
    }
  };

  app.supportedLanguages = Object.keys(app.translations);
})(window.Portfolio);
