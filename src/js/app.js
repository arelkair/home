window.Portfolio = window.Portfolio || {};

Portfolio.translations = {
  es: {
    statusDev: "En desarrollo",
    monthSep: "Septiembre de 2026",
    factRuns: "Funciona en",
    wiiSummary: "Una recompilación estática de Wii Party para PC. El código del juego se traduce a C++ y se compila como un programa nativo de Windows, sin emulador.",
    wiiProgress: "Progreso estimado por componente",
    pToolchain: "Cadena de recompilación",
    pRuntime: "Sistema base",
    pGraphics: "Gráficos (GX a Direct3D 11)",
    pAudio: "Audio",
    pFlow: "Flujo del juego",
    pInput: "Controles",
    pPc: "Funciones de PC",
    stackCpp: "(motor)",
    stackPy: "(recompiladores)",
    about4: "Desde septiembre de 2026 también trabajo en Wii Party Recomp, que traduce un juego de Wii a C++ para que funcione de forma nativa en PC.",
    wiiLead: "Una recompilación estática de Wii Party para PC. El juego funciona como un programa nativo de Windows, sin emulador.",
    wiiEstimate: "Estos porcentajes son estimaciones propias, no mediciones.",
    wiiWhatTitle: "Qué es",
    wiiWhat1: "El ejecutable original del juego se traduce a código fuente en C++ que se compila de forma nativa, así que el juego funciona en PC sin emulador. El hardware de Wii que espera, desde los chips de gráficos y audio hasta el Wii Remote, se recrea alrededor de ese código.",
    wiiNowTitle: "En qué punto está",
    wiiNow1: "El juego arranca, llega al menú y se ha jugado una partida completa de Board Game Island: 17 rondas, hasta la clasificación final y el guardado. Funciona a 50 fps estables, con el sonido del propio microcódigo de audio del juego y en el idioma de la instalación de Windows.",
    wiiNow2: "Todavía faltan cosas. No se han revisado todos los minijuegos, aún no hay soporte para Wii Remotes reales y el soporte de mandos no se ha probado con un mando físico.",
    wiiHowTitle: "Cómo está hecho",
    wiiHow1: "El proyecto se divide en un motor de Wii reutilizable y una carpeta por juego, así que con las mismas herramientas se podrían recompilar otros juegos de Wii.",
    wRecompiler: "Recompiladores de PowerPC y del DSP de audio, escritos en Python",
    wCore: "Ejecuta el código traducido: memoria, hilos, interrupciones y arranque",
    wGpu: "Los comandos gráficos de Wii, dibujados con Direct3D 11",
    wAudio: "El microcódigo de audio recompilado del juego y la salida de sonido",
    wInput: "Un Wii Remote emulado, controlado con teclado, ratón y mandos",
    wGame: "Todo lo específico de Wii Party",
    wiiCopyTitle: "Tu propia copia",
    wiiCopy1: "No incluye archivos del juego. Las herramientas trabajan a partir de tu propia copia del disco.",
    wiiNextTitle: "Previsto",
    wiiNext1: "Soporte ultrapanorámico, más fotogramas por segundo, un lanzador y menú de opciones, juego online y una traducción al gallego.",
    skip: "Saltar al contenido",
    navWork: "Trabajo",
    navAbout: "Sobre mí",
    navSocial: "Redes",
    statusLive: "Disponible",
    heroIntro: "Construyo proyectos web y juegos con IA, desde España.",
    heroWork: "Ver el trabajo",
    workTitle: "Trabajo seleccionado",
    poolSummary: "Un juego de billar 2D con partidas online 1 contra 1. Un jugador comparte un código de cuatro letras, el otro se une, y la partida va de igual a igual con las reglas estándar de bola 8.",
    candySummary: "Un juego de tablero para 2 a 5 jugadores. Cada uno esconde chuches envenenadas en el tablero y luego se turnan para comer. Se juega pasando un solo móvil o online en una sala con código.",
    nivraSummary: "Un organizador privado para calendario, horario, tareas, notas y dinero. No hay cuenta: todo se queda en tu navegador.",
    factStatus: "Estado",
    factSince: "Desde",
    factStack: "Tecnología",
    factLanguages: "Idiomas",
    factLicense: "Licencia",
    factBuild: "Compilación",
    factSource: "Código",
    factBased: "Desde",
    factInterests: "Intereses",
    monthJun: "Junio de 2026",
    monthJul: "Julio de 2026",
    monthAug: "Agosto de 2026",
    caseStudy: "Caso de estudio",
    linkPlay: "Jugar",
    linkSource: "Código",
    linkOpen: "Abrir",
    moreTitle: "También en GitHub",
    helloDesc: "Mi primera página web, de mayo de 2026.",
    homeDesc: "El código de este sitio.",
    allRepos: "Todos los repositorios",
    aboutTitle: "Sobre mí",
    about1: "Construyo con IA: agentes, automatizaciones, proyectos web y juegos.",
    about2: "Mi primera página web se publicó en mayo de 2026. Desde entonces he publicado dos juegos multijugador para el navegador, que conectan a los jugadores directamente con PeerJS en lugar de usar un servidor de juego, y Nivra, un organizador que guarda sus datos en tu propio dispositivo.",
    about3: "Todo lo que hay aquí funciona en el navegador y se puede abrir gratis. Los juegos y este sitio son de código abierto en GitHub.",
    spain: "España",
    interests: "IA, seguridad, self-hosting, videojuegos",
    stackTitle: "Con qué construyo",
    stackNote: "Solo herramientas usadas en un proyecto publicado, y dónde.",
    stackPixi: "(gráficos)",
    stackPeer: "(juego online)",
    stackAll: "Todos los proyectos",
    stackHosting: "Alojamiento de todos los sitios de aquí",
    socialTitle: "Redes",
    discordHandle: "Perfil",
    backWork: "Todo el trabajo",
    nextProject: "Siguiente proyecto",
    langsPool: "Inglés, español",
    langsCandy: "Español, inglés, japonés, coreano",
    langsNivra: "Inglés, español",
    none: "Ninguna",
    private: "Privado",
    poolLead: "Un juego de billar 2D para el navegador, con multijugador online 1 contra 1 y un motor de físicas hecho para él.",
    poolAlt: "Una partida de Pool en curso: la mesa verde vista desde arriba, con los contadores de tiros y bolas metidas arriba.",
    poolModesTitle: "Dos formas de jugar",
    poolModes1: "El modo individual es práctica libre. El multijugador es una partida 1 contra 1: un jugador crea la partida y comparte un código de cuatro letras, y el otro se une con él. Los turnos siguen las reglas estándar de bola 8.",
    poolModes2: "Para tirar, arrastra desde la bola blanca y suelta. Cuanto más tires hacia atrás, más fuerza.",
    poolNetTitle: "Sin servidor en medio",
    poolNet1: "Los dos jugadores se conectan entre sí de igual a igual con PeerJS. No hay servidores de juego que mantener ni nada que configurar en el router.",
    poolCodeTitle: "Qué hay dentro",
    poolCode1: "El código está dividido por responsabilidades. Las físicas no son una librería: las colisiones, la fricción y las troneras las gestiona un motor de billar escrito para este juego, que tiene su propia prueba automática.",
    fPhysics: "Motor de billar: colisiones, fricción, troneras",
    fScene: "Gráficos con PixiJS",
    fNet: "Multijugador de igual a igual con PeerJS",
    fMain: "Bucle de juego, controles y turnos",
    fUi: "Menú, marcador y diálogos",
    fAudio: "Efectos de sonido",
    fI18n: "Textos en inglés y español",
    fConfig: "Constantes de la mesa, las bolas y las físicas",
    candyLead: "Un juego de tablero multijugador para 2 a 5 jugadores. Encuentra la chuche envenenada antes de que ella te encuentre a ti.",
    candyAlt: "Un tablero de 6 por 6 casillas de chuches de colores mientras un jugador elige dónde esconder el veneno.",
    candyRoundTitle: "Cómo funciona una ronda",
    candyRound1: "En cada ronda, cada jugador elige en secreto qué casillas tienen chuches envenenadas. Después se turnan para comer del tablero. Si te comes una envenenada, pierdes una vida. Gana quien siga en pie con más vidas al terminar la partida.",
    candyShopTitle: "Comodines",
    candyShop1: "Antes de cada ronda hay una tienda. Los jugadores eligen comodines con efectos especiales, como ver, protegerse o forzar jugadas, de un stock limitado por partida. Hay quince, en cinco grupos: protección, ataque, información, interacción y estrategia.",
    candyShopAlt: "La tienda de comodines, con quince comodines agrupados en protección, ataque, información, interacción y estrategia.",
    candyModesTitle: "En el mismo dispositivo u online",
    candyModes1: "En local, de 2 a 5 jugadores comparten un dispositivo y se lo pasan. Online, cada sala tiene su propio código y los jugadores se conectan de igual a igual con PeerJS, sin servidor de juego.",
    candyModes2: "Cada sala se configura antes de empezar: tamaño del tablero de 2 a 10 filas y columnas, comodines y stock por jugador, tiempo para actuar y para elegir veneno, chuches envenenadas por jugador, vidas iniciales, el aspecto de las chuches y un modo de comodines aleatorios sin tienda.",
    candyBuiltTitle: "Hecho con",
    candyBuilt1: "HTML, CSS y JavaScript sin más, sin framework y sin compilación. Se abre directamente desde index.html.",
    nivraLead: "Un organizador privado para el navegador. Calendario, horario, tareas y más, guardado en tu propio dispositivo.",
    nivraAlt: "El panel de Nivra en modo oscuro, con las secciones en la barra lateral y la fecha de hoy como título.",
    nivraWhatTitle: "Qué incluye",
    nivraWhat1: "Nivra se organiza en cuatro grupos.",
    gMain: "Principal",
    gMainList: "Panel, calendario, horario",
    gStudy: "Estudio",
    gStudyList: "Tareas, exámenes y proyectos, notas",
    gMoney: "Dinero",
    gMoneyList: "Banco, lista de deseos, suscripciones",
    gUtil: "Utilidades",
    gUtilList: "Bloc de notas, cuentas atrás, recordatorios",
    nivraPrivTitle: "Privado por defecto",
    nivraPriv1: "No hay registro. Nivra te pide tu nombre y guarda todo en tu navegador.",
    nivraPhoneAlt: "La pantalla de bienvenida de Nivra en un móvil, con calendario, horario, tareas y privado.",
    nivraInstallTitle: "Funciona como una app",
    nivraInstall1: "Incluye un manifiesto de aplicación web y un service worker, así que se puede instalar desde el navegador y abrir como cualquier otra app.",
    nfText: "Esta página no existe.",
    nfHome: "Volver al inicio"
  },
  ko: {
    statusDev: "개발 중",
    monthSep: "2026년 9월",
    factRuns: "실행 환경",
    wiiSummary: "Wii Party를 PC용으로 정적 재컴파일하는 프로젝트입니다. 게임 코드를 C++로 옮겨 에뮬레이터 없이 네이티브 Windows 프로그램으로 빌드합니다.",
    wiiProgress: "구성 요소별 예상 진행도",
    pToolchain: "재컴파일 도구",
    pRuntime: "시스템 런타임",
    pGraphics: "그래픽 (GX에서 Direct3D 11로)",
    pAudio: "오디오",
    pFlow: "게임 흐름",
    pInput: "입력",
    pPc: "PC 기능",
    stackCpp: "(엔진)",
    stackPy: "(재컴파일러)",
    about4: "2026년 9월부터는 Wii 게임을 C++로 옮겨 PC에서 네이티브로 실행하는 Wii Party Recomp도 만들고 있습니다.",
    wiiLead: "Wii Party를 PC용으로 정적 재컴파일하는 프로젝트입니다. 게임이 에뮬레이터 없이 네이티브 Windows 프로그램으로 실행됩니다.",
    wiiEstimate: "이 비율은 측정값이 아닌 제 자체 추정치입니다.",
    wiiWhatTitle: "무엇인가요",
    wiiWhat1: "원래 게임 실행 파일을 네이티브로 컴파일되는 C++ 소스 코드로 옮기기 때문에, 에뮬레이터 없이 PC에서 게임이 실행됩니다. 그래픽·오디오 칩부터 Wii 리모컨까지 게임이 기대하는 Wii 하드웨어를 그 코드 주위에 다시 구현합니다.",
    wiiNowTitle: "현재 상태",
    wiiNow1: "게임이 부팅되어 메뉴에 도달하며, Board Game Island를 17라운드, 최종 순위와 저장까지 한 판 완주했습니다. 게임 자체의 오디오 마이크로코드로 소리를 내고 Windows 설치 언어로 안정적인 50fps로 실행됩니다.",
    wiiNow2: "아직 빠진 부분이 있습니다. 모든 미니게임을 확인하지는 않았고, 실제 Wii 리모컨은 아직 지원하지 않으며, 게임패드 지원은 실제 게임패드로 테스트하지 않았습니다.",
    wiiHowTitle: "구조",
    wiiHow1: "프로젝트는 재사용 가능한 Wii 엔진과 게임별 폴더로 나뉘어 있어, 같은 도구로 다른 Wii 게임도 재컴파일할 수 있습니다.",
    wRecompiler: "Python으로 작성한 PowerPC 및 오디오 DSP 재컴파일러",
    wCore: "옮긴 코드를 실행: 메모리, 스레드, 인터럽트, 부팅",
    wGpu: "Direct3D 11로 그리는 Wii 그래픽 명령",
    wAudio: "재컴파일한 게임의 오디오 마이크로코드와 사운드 출력",
    wInput: "키보드, 마우스, 게임패드로 조작하는 에뮬레이션 Wii 리모컨",
    wGame: "Wii Party 전용 부분 전체",
    wiiCopyTitle: "직접 소유한 사본",
    wiiCopy1: "게임 파일은 포함되어 있지 않습니다. 도구는 직접 덤프한 디스크 사본으로 작동합니다.",
    wiiNextTitle: "계획",
    wiiNext1: "울트라와이드 지원, 더 높은 프레임레이트, 런처와 옵션 메뉴, 온라인 플레이, 갈리시아어 번역.",
    skip: "본문으로 건너뛰기",
    navWork: "작업",
    navAbout: "소개",
    navSocial: "소셜",
    statusLive: "운영 중",
    heroIntro: "스페인에서 AI로 웹 프로젝트와 게임을 만듭니다.",
    heroWork: "작업 보기",
    workTitle: "주요 작업",
    poolSummary: "온라인 1대1이 가능한 2D 당구 게임입니다. 한 사람이 네 글자 코드를 공유하고 다른 사람이 참가하면, 표준 8볼 규칙으로 P2P 대전이 진행됩니다.",
    candySummary: "2~5명이 즐기는 보드게임입니다. 모두가 보드에 독 사탕을 숨긴 뒤 차례로 사탕을 먹습니다. 휴대폰 한 대를 돌려 가며 하거나, 코드로 들어가는 방에서 온라인으로 즐길 수 있습니다.",
    nivraSummary: "캘린더, 시간표, 할 일, 성적, 돈을 관리하는 개인 정리 앱입니다. 계정이 없으며 모든 데이터는 브라우저에 남습니다.",
    factStatus: "상태",
    factSince: "시작",
    factStack: "기술",
    factLanguages: "언어",
    factLicense: "라이선스",
    factBuild: "빌드 단계",
    factSource: "소스",
    factBased: "거주지",
    factInterests: "관심사",
    monthJun: "2026년 6월",
    monthJul: "2026년 7월",
    monthAug: "2026년 8월",
    caseStudy: "자세히 보기",
    linkPlay: "플레이",
    linkSource: "소스",
    linkOpen: "열기",
    moreTitle: "GitHub의 다른 저장소",
    helloDesc: "2026년 5월에 만든 첫 웹페이지입니다.",
    homeDesc: "이 사이트의 소스 코드입니다.",
    allRepos: "모든 저장소",
    aboutTitle: "소개",
    about1: "AI로 에이전트, 자동화, 웹 프로젝트, 게임을 만듭니다.",
    about2: "첫 웹페이지는 2026년 5월에 공개했습니다. 그 뒤로 게임 서버 없이 PeerJS로 플레이어를 직접 연결하는 브라우저 멀티플레이 게임 두 개와, 데이터를 사용자의 기기에 보관하는 정리 앱 Nivra를 공개했습니다.",
    about3: "여기 있는 모든 것은 브라우저에서 무료로 열 수 있습니다. 게임과 이 사이트는 GitHub에 오픈 소스로 공개되어 있습니다.",
    spain: "스페인",
    interests: "AI, 보안, 셀프 호스팅, 게임",
    stackTitle: "사용하는 기술",
    stackNote: "공개된 프로젝트에서 실제로 사용한 도구와 그 사용처만 적었습니다.",
    stackPixi: "(렌더링)",
    stackPeer: "(온라인 플레이)",
    stackAll: "모든 프로젝트",
    stackHosting: "여기 있는 모든 사이트의 호스팅",
    socialTitle: "소셜",
    discordHandle: "프로필",
    backWork: "모든 작업",
    nextProject: "다음 프로젝트",
    langsPool: "영어, 스페인어",
    langsCandy: "스페인어, 영어, 일본어, 한국어",
    langsNivra: "영어, 스페인어",
    none: "없음",
    private: "비공개",
    poolLead: "온라인 1대1 멀티플레이와 전용 물리 엔진을 갖춘 브라우저용 2D 당구 게임입니다.",
    poolAlt: "진행 중인 Pool 게임: 위에서 내려다본 초록색 테이블과 상단의 샷 수, 넣은 공 카운터.",
    poolModesTitle: "두 가지 플레이 방식",
    poolModes1: "싱글플레이는 자유 연습입니다. 멀티플레이는 1대1 대전으로, 한 사람이 게임을 만들어 네 글자 코드를 공유하면 다른 사람이 그 코드로 참가합니다. 차례는 표준 8볼 규칙을 따릅니다.",
    poolModes2: "큐볼에서 끌었다가 놓으면 샷이 나갑니다. 멀리 당길수록 힘이 세집니다.",
    poolNetTitle: "중간에 서버가 없습니다",
    poolNet1: "두 플레이어는 PeerJS로 서로 직접 연결됩니다. 운영할 게임 서버도, 공유기에서 설정할 것도 없습니다.",
    poolCodeTitle: "내부 구조",
    poolCode1: "코드는 역할별로 나뉘어 있습니다. 물리는 라이브러리가 아닙니다. 충돌, 마찰, 포켓은 이 게임을 위해 작성한 당구 엔진이 처리하며, 이를 위한 자체 테스트도 있습니다.",
    fPhysics: "당구 엔진: 충돌, 마찰, 포켓",
    fScene: "PixiJS 렌더링",
    fNet: "PeerJS를 이용한 P2P 멀티플레이",
    fMain: "게임 루프, 입력, 차례",
    fUi: "메뉴, HUD, 대화 상자",
    fAudio: "효과음",
    fI18n: "영어와 스페인어 텍스트",
    fConfig: "테이블, 공, 물리 상수",
    candyLead: "2~5명을 위한 멀티플레이 보드게임입니다. 독 사탕이 당신을 찾기 전에 먼저 찾아내세요.",
    candyAlt: "한 플레이어가 독을 숨길 위치를 고르는 동안의 6×6 색색 사탕 보드.",
    candyRoundTitle: "라운드 진행 방식",
    candyRound1: "매 라운드마다 모든 플레이어가 독 사탕을 둘 칸을 몰래 고릅니다. 그런 다음 차례로 보드의 사탕을 먹습니다. 독 사탕을 먹으면 목숨을 하나 잃습니다. 게임이 끝났을 때 목숨이 가장 많이 남은 사람이 이깁니다.",
    candyShopTitle: "와일드카드",
    candyShop1: "매 라운드 전에 상점이 열립니다. 플레이어는 게임마다 수량이 제한된 와일드카드 중에서 투시, 보호, 강제 이동 같은 특수 효과를 고릅니다. 와일드카드는 보호, 공격, 정보, 상호작용, 전략의 다섯 그룹에 모두 열다섯 가지가 있습니다.",
    candyShopAlt: "보호, 공격, 정보, 상호작용, 전략으로 묶인 열다섯 가지 와일드카드가 있는 상점.",
    candyModesTitle: "같은 기기에서, 또는 온라인으로",
    candyModes1: "로컬에서는 2~5명이 기기 하나를 돌려 가며 플레이합니다. 온라인에서는 방마다 고유 코드가 있고, 플레이어들은 게임 서버 없이 PeerJS로 직접 연결됩니다.",
    candyModes2: "모든 방은 시작 전에 설정할 수 있습니다. 보드 크기(행과 열 2~10), 플레이어당 와일드카드 수와 재고, 행동 시간과 독 고르는 시간, 플레이어당 독 사탕 수, 시작 목숨, 사탕 스킨, 상점 없이 무작위로 와일드카드를 나눠 주는 모드가 있습니다.",
    candyBuiltTitle: "사용한 기술",
    candyBuilt1: "프레임워크도 빌드 단계도 없는 순수 HTML, CSS, JavaScript입니다. index.html을 바로 열면 됩니다.",
    nivraLead: "브라우저용 개인 정리 앱입니다. 캘린더, 시간표, 할 일 등을 사용자의 기기에 저장합니다.",
    nivraAlt: "다크 모드의 Nivra 대시보드. 사이드바에 섹션이 있고 오늘 날짜가 제목으로 표시됩니다.",
    nivraWhatTitle: "구성",
    nivraWhat1: "Nivra는 네 그룹으로 구성되어 있습니다.",
    gMain: "메인",
    gMainList: "대시보드, 캘린더, 시간표",
    gStudy: "공부",
    gStudyList: "할 일, 시험과 프로젝트, 성적",
    gMoney: "돈",
    gMoneyList: "은행, 위시리스트, 구독",
    gUtil: "유틸리티",
    gUtilList: "메모장, 카운트다운, 알림",
    nivraPrivTitle: "기본적으로 비공개",
    nivraPriv1: "가입이 없습니다. Nivra는 이름만 묻고 모든 것을 브라우저에 보관합니다.",
    nivraPhoneAlt: "휴대폰에서 본 Nivra 환영 화면. 캘린더, 시간표, 할 일, 비공개 항목이 보입니다.",
    nivraInstallTitle: "앱처럼 동작합니다",
    nivraInstall1: "웹 앱 매니페스트와 서비스 워커를 포함하고 있어 브라우저에서 설치해 다른 앱처럼 열 수 있습니다.",
    nfText: "존재하지 않는 페이지입니다.",
    nfHome: "홈으로 돌아가기"
  },
  zh: {
    statusDev: "开发中",
    monthSep: "2026 年 9 月",
    factRuns: "运行平台",
    wiiSummary: "将 Wii Party 静态重编译到 PC 的项目。游戏代码被翻译成 C++,并构建为原生 Windows 程序,无需模拟器。",
    wiiProgress: "各组件的预估进度",
    pToolchain: "重编译工具链",
    pRuntime: "系统运行时",
    pGraphics: "图形(GX 到 Direct3D 11)",
    pAudio: "音频",
    pFlow: "游戏流程",
    pInput: "输入",
    pPc: "PC 功能",
    stackCpp: "(引擎)",
    stackPy: "(重编译器)",
    about4: "从 2026 年 9 月起,我还在开发 Wii Party Recomp,它把一款 Wii 游戏翻译成 C++,使其在 PC 上原生运行。",
    wiiLead: "将 Wii Party 静态重编译到 PC 的项目。游戏以原生 Windows 程序运行,无需模拟器。",
    wiiEstimate: "这些百分比是我自己的估计,并非测量结果。",
    wiiWhatTitle: "这是什么",
    wiiWhat1: "原始游戏可执行文件被翻译成可原生编译的 C++ 源代码,因此游戏无需模拟器即可在 PC 上运行。游戏所依赖的 Wii 硬件,从图形和音频芯片到 Wii 遥控器,都围绕这些代码重新实现。",
    wiiNowTitle: "目前进展",
    wiiNow1: "游戏可以启动并进入菜单,并已完整玩过一局 Board Game Island:17 回合,直到最终排名和存档。它以稳定的 50 fps 运行,声音来自游戏自身的音频微代码,语言与 Windows 安装语言一致。",
    wiiNow2: "仍有缺失的部分。并非所有小游戏都已检查,尚不支持真实的 Wii 遥控器,手柄支持也未用实体手柄测试。",
    wiiHowTitle: "构建方式",
    wiiHow1: "项目分为可复用的 Wii 引擎和每款游戏各自的文件夹,因此同一套工具也可以用来重编译其他 Wii 游戏。",
    wRecompiler: "用 Python 编写的 PowerPC 和音频 DSP 重编译器",
    wCore: "运行翻译后的代码:内存、线程、中断和启动",
    wGpu: "用 Direct3D 11 绘制的 Wii 图形命令",
    wAudio: "游戏重编译后的音频微代码和声音输出",
    wInput: "由键盘、鼠标和手柄操控的模拟 Wii 遥控器",
    wGame: "Wii Party 专属的全部内容",
    wiiCopyTitle: "你自己的副本",
    wiiCopy1: "不包含任何游戏文件。这些工具使用你自己转储的光盘副本。",
    wiiNextTitle: "计划",
    wiiNext1: "超宽屏支持、更高帧率、启动器和选项菜单、在线对战以及加利西亚语翻译。",
    skip: "跳到正文",
    navWork: "作品",
    navAbout: "关于",
    navSocial: "社交",
    statusLive: "已上线",
    heroIntro: "我在西班牙,用 AI 制作网页项目和游戏。",
    heroWork: "查看作品",
    workTitle: "精选作品",
    poolSummary: "一款支持在线 1 对 1 的 2D 台球游戏。一名玩家分享四个字母的代码,另一名玩家加入,对局以点对点方式进行,采用标准八球规则。",
    candySummary: "一款 2 到 5 人的棋盘游戏。每个人先在棋盘上藏好毒糖果,然后轮流吃糖。可以传递同一部手机来玩,也可以用房间代码在线对战。",
    nivraSummary: "一个用于日历、课程表、任务、成绩和财务的私人整理工具。无需账号,所有数据都保存在你的浏览器里。",
    factStatus: "状态",
    factSince: "始于",
    factStack: "技术",
    factLanguages: "语言",
    factLicense: "许可证",
    factBuild: "构建步骤",
    factSource: "源代码",
    factBased: "所在地",
    factInterests: "兴趣",
    monthJun: "2026 年 6 月",
    monthJul: "2026 年 7 月",
    monthAug: "2026 年 8 月",
    caseStudy: "项目详情",
    linkPlay: "开始玩",
    linkSource: "源代码",
    linkOpen: "打开",
    moreTitle: "GitHub 上的其他仓库",
    helloDesc: "我的第一个网页,2026 年 5 月。",
    homeDesc: "本网站的源代码。",
    allRepos: "全部仓库",
    aboutTitle: "关于",
    about1: "我用 AI 构建智能体、自动化、网页项目和游戏。",
    about2: "我的第一个网页于 2026 年 5 月上线。此后我发布了两款浏览器多人游戏,它们通过 PeerJS 直接连接玩家,而不经过游戏服务器;还发布了 Nivra,一个把数据保存在你自己设备上的整理工具。",
    about3: "这里的一切都在浏览器中运行,可以免费打开。这些游戏和本网站都在 GitHub 上开源。",
    spain: "西班牙",
    interests: "AI、安全、自托管、游戏",
    stackTitle: "我使用的技术",
    stackNote: "只列出在已发布项目中实际用过的工具,以及用在哪里。",
    stackPixi: "(渲染)",
    stackPeer: "(在线对战)",
    stackAll: "所有项目",
    stackHosting: "这里所有网站的托管",
    socialTitle: "社交",
    discordHandle: "个人资料",
    backWork: "全部作品",
    nextProject: "下一个项目",
    langsPool: "英语、西班牙语",
    langsCandy: "西班牙语、英语、日语、韩语",
    langsNivra: "英语、西班牙语",
    none: "无",
    private: "私有",
    poolLead: "一款浏览器 2D 台球游戏,支持在线 1 对 1 多人对战,并配有专门编写的物理引擎。",
    poolAlt: "一局进行中的 Pool:俯视的绿色球桌,顶部显示击球数和进球数。",
    poolModesTitle: "两种玩法",
    poolModes1: "单人模式是自由练习。多人模式是 1 对 1 对局:一名玩家创建对局并分享四个字母的代码,另一名玩家用它加入。回合遵循标准八球规则。",
    poolModes2: "从母球向后拖动再松开即可击球。拉得越远,力量越大。",
    poolNetTitle: "中间没有服务器",
    poolNet1: "两名玩家通过 PeerJS 点对点直接连接。无需运行游戏服务器,也无需设置路由器。",
    poolCodeTitle: "内部结构",
    poolCode1: "代码按职责划分。物理效果并非来自现成的库:碰撞、摩擦和袋口都由专门为这款游戏编写的台球引擎处理,并配有自检测试。",
    fPhysics: "台球引擎:碰撞、摩擦、袋口",
    fScene: "用 PixiJS 渲染",
    fNet: "基于 PeerJS 的点对点多人对战",
    fMain: "游戏循环、输入和回合",
    fUi: "菜单、HUD 和对话框",
    fAudio: "音效",
    fI18n: "英语和西班牙语文本",
    fConfig: "球桌、球和物理常量",
    candyLead: "一款 2 到 5 人的多人棋盘游戏。在毒糖果找到你之前,先找到它。",
    candyAlt: "一个 6×6 的彩色糖果棋盘,一名玩家正在选择藏毒的位置。",
    candyRoundTitle: "一回合怎么玩",
    candyRound1: "每回合,所有玩家秘密选择哪些格子放毒糖果。然后大家轮流从棋盘上吃糖。吃到毒糖果就失去一条命。对局结束时,还留在场上且命最多的玩家获胜。",
    candyShopTitle: "道具卡",
    candyShop1: "每回合开始前都有一个商店。玩家从每局数量有限的道具卡中挑选具有特殊效果的卡,例如透视、保护或强制行动。道具卡共十五种,分为保护、攻击、信息、互动和策略五组。",
    candyShopAlt: "道具卡商店,十五种道具卡按保护、攻击、信息、互动和策略分组。",
    candyModesTitle: "同一设备或在线",
    candyModes1: "本地模式下,2 到 5 名玩家共用一台设备轮流操作。在线模式下,每个房间都有自己的代码,玩家通过 PeerJS 点对点连接,无需游戏服务器。",
    candyModes2: "每个房间在开始前都可以设置:棋盘大小(行和列 2 到 10)、每位玩家的道具卡数量和库存、行动时间和选毒时间、每位玩家的毒糖果数量、初始生命、糖果外观,以及不开商店、随机发放道具卡的模式。",
    candyBuiltTitle: "构建方式",
    candyBuilt1: "纯 HTML、CSS 和 JavaScript,没有框架,也没有构建步骤。直接打开 index.html 即可。",
    nivraLead: "一个浏览器里的私人整理工具。日历、课程表、任务等内容都保存在你自己的设备上。",
    nivraAlt: "深色模式下的 Nivra 仪表盘,侧边栏列出各个板块,标题是今天的日期。",
    nivraWhatTitle: "包含什么",
    nivraWhat1: "Nivra 分为四组。",
    gMain: "主页",
    gMainList: "仪表盘、日历、课程表",
    gStudy: "学习",
    gStudyList: "任务、考试和项目、成绩",
    gMoney: "财务",
    gMoneyList: "银行、心愿单、订阅",
    gUtil: "工具",
    gUtilList: "记事本、倒计时、提醒",
    nivraPrivTitle: "默认私密",
    nivraPriv1: "无需注册。Nivra 只询问你的名字,所有内容都保存在你的浏览器里。",
    nivraPhoneAlt: "手机上的 Nivra 欢迎界面,列出日历、课程表、任务和私密。",
    nivraInstallTitle: "像应用一样使用",
    nivraInstall1: "它带有网页应用清单和 Service Worker,因此可以从浏览器安装,并像其他应用一样打开。",
    nfText: "此页面不存在。",
    nfHome: "返回首页"
  }
};

Portfolio.supportedLanguages = ["en", "es", "ko", "zh"];

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
  const originals = new Map();

  function remember() {
    document.querySelectorAll("[data-i18n]").forEach((element) => {
      originals.set(element, { text: element.textContent });
    });
    document.querySelectorAll("[data-i18n-alt]").forEach((element) => {
      originals.set(element, { alt: element.getAttribute("alt") });
    });
  }

  app.getInitialLanguage = function () {
    const saved = app.storageGet(STORAGE_KEY);
    return app.supportedLanguages.includes(saved) ? saved : "en";
  };

  app.applyLanguage = function (code) {
    if (!originals.size) remember();
    const dictionary = app.translations[code] || {};
    document.querySelectorAll("[data-i18n]").forEach((element) => {
      const value = dictionary[element.dataset.i18n];
      element.textContent = value || originals.get(element).text;
    });
    document.querySelectorAll("[data-i18n-alt]").forEach((element) => {
      const value = dictionary[element.dataset.i18nAlt];
      element.setAttribute("alt", value || originals.get(element).alt);
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
