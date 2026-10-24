import type { ImageMetadata } from "astro";
import type { Key } from "../i18n";
import wiiIcon from "../assets/work/wiiparty-icon.png";
import nivra from "../assets/work/nivra.jpg";
import nivraMobile from "../assets/work/nivra-mobile.jpg";
import pool from "../assets/work/pool.jpg";
import candyBoard from "../assets/work/candy-board.jpg";
import candyShop from "../assets/work/candy-shop.jpg";

export type Block =
  | { p: Key }
  | { files: [string, Key][] }
  | { groups: [Key, Key][] }
  | { figure: ImageMetadata; alt: Key; portrait?: boolean };

export interface Project {
  slug: string;
  name: string;
  status: "statusLive" | "statusDev";
  since: Key;
  summary: Key;
  lead: Key;
  stack: string[];
  links: [Key, string][];
  cover?: { src: ImageMetadata; alt: Key };
  icon?: ImageMetadata;
  facts: [Key, string][];
  progress?: [Key, number][];
  sections: { title: Key; blocks: Block[] }[];
}

export const projects: Project[] = [
  {
    slug: "wii-party-recomp",
    name: "Wii Party Recomp",
    status: "statusDev",
    since: "monthSep",
    summary: "wiiSummary",
    lead: "wiiLead",
    stack: ["C++", "Python", "Direct3D 11", "OpenGL", "SDL3"],
    links: [
      ["linkSource", "https://github.com/arelkair/wiiparty-recomp"],
      ["linkDownload", "https://github.com/arelkair/wiiparty-recomp/releases"],
    ],
    icon: wiiIcon,
    facts: [
      ["factRuns", "Windows, Linux"],
      ["factLicense", "GPL-3.0-or-later"],
    ],
    progress: [
      ["pToolchain", 100],
      ["pRuntime", 100],
      ["pGraphics", 100],
      ["pAudio", 100],
      ["pFlow", 90],
      ["pInput", 80],
      ["pPc", 80],
    ],
    sections: [
      { title: "wiiWhatTitle", blocks: [{ p: "wiiWhat1" }] },
      { title: "wiiNowTitle", blocks: [{ p: "wiiNow1" }, { p: "wiiNow2" }] },
      {
        title: "wiiHowTitle",
        blocks: [
          { p: "wiiHow1" },
          { p: "wiiHow2" },
          {
            files: [
              ["recompiler/", "wRecompiler"],
              ["engine/src/core", "wCore"],
              ["engine/src/gpu", "wGpu"],
              ["engine/src/audio", "wAudio"],
              ["engine/src/input", "wInput"],
              ["games/wiiparty/", "wGame"],
            ],
          },
        ],
      },
      { title: "wiiCopyTitle", blocks: [{ p: "wiiCopy1" }] },
      { title: "wiiNextTitle", blocks: [{ p: "wiiNext1" }, { p: "wiiNext2" }] },
    ],
  },
  {
    slug: "nivra",
    name: "Nivra",
    status: "statusLive",
    since: "monthAug",
    summary: "nivraSummary",
    lead: "nivraLead",
    stack: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    links: [["linkOpen", "https://nivra.arelkair.dev/"]],
    cover: { src: nivra, alt: "nivraAlt" },
    facts: [
      ["factLanguages", "langsNivra"],
      ["factSource", "private"],
    ],
    sections: [
      {
        title: "nivraWhatTitle",
        blocks: [
          { p: "nivraWhat1" },
          {
            groups: [
              ["gMain", "gMainList"],
              ["gStudy", "gStudyList"],
              ["gMoney", "gMoneyList"],
              ["gUtil", "gUtilList"],
            ],
          },
        ],
      },
      {
        title: "nivraPrivTitle",
        blocks: [{ p: "nivraPriv1" }, { figure: nivraMobile, alt: "nivraPhoneAlt", portrait: true }],
      },
      { title: "nivraInstallTitle", blocks: [{ p: "nivraInstall1" }] },
    ],
  },
  {
    slug: "pool",
    name: "Pool",
    status: "statusLive",
    since: "monthJun",
    summary: "poolSummary",
    lead: "poolLead",
    stack: ["JavaScript", "PixiJS", "PeerJS", "Vite"],
    links: [
      ["linkPlay", "https://pool.arelkair.dev/"],
      ["linkSource", "https://github.com/arelkair/pool"],
    ],
    cover: { src: pool, alt: "poolAlt" },
    facts: [
      ["factLanguages", "langsPool"],
      ["factLicense", "MIT"],
    ],
    sections: [
      { title: "poolModesTitle", blocks: [{ p: "poolModes1" }, { p: "poolModes2" }] },
      { title: "poolNetTitle", blocks: [{ p: "poolNet1" }] },
      {
        title: "poolCodeTitle",
        blocks: [
          { p: "poolCode1" },
          {
            files: [
              ["src/physics.js", "fPhysics"],
              ["src/scene.js", "fScene"],
              ["src/net.js", "fNet"],
              ["src/main.js", "fMain"],
              ["src/ui.js", "fUi"],
              ["src/audio.js", "fAudio"],
              ["src/i18n.js", "fI18n"],
              ["src/config.js", "fConfig"],
            ],
          },
        ],
      },
    ],
  },
  {
    slug: "poisoned-candy",
    name: "Poisoned Candy",
    status: "statusLive",
    since: "monthJul",
    summary: "candySummary",
    lead: "candyLead",
    stack: ["HTML", "CSS", "JavaScript", "PeerJS"],
    links: [
      ["linkPlay", "https://candy.arelkair.dev/"],
      ["linkSource", "https://github.com/arelkair/poisoned-candy"],
    ],
    cover: { src: candyBoard, alt: "candyAlt" },
    facts: [
      ["factLanguages", "langsCandy"],
      ["factBuild", "none"],
    ],
    sections: [
      { title: "candyRoundTitle", blocks: [{ p: "candyRound1" }] },
      { title: "candyShopTitle", blocks: [{ p: "candyShop1" }, { figure: candyShop, alt: "candyShopAlt" }] },
      { title: "candyModesTitle", blocks: [{ p: "candyModes1" }, { p: "candyModes2" }] },
      { title: "candyBuiltTitle", blocks: [{ p: "candyBuilt1" }] },
    ],
  },
];

export const overallProgress = 93;

export const toolIndex = [...new Set(projects.flatMap((project) => project.stack))]
  .sort((a, b) => a.localeCompare(b))
  .map((tool) => ({ tool, projects: projects.filter((project) => project.stack.includes(tool)) }));

export const repositories: { name: string; desc: Key; tag: string; url: string }[] = [
  { name: "Hello, World!", desc: "helloDesc", tag: "HTML", url: "https://github.com/arelkair/helloworld" },
  { name: "arelkair", desc: "profileDesc", tag: "Markdown", url: "https://github.com/arelkair/arelkair" },
  { name: "home", desc: "homeDesc", tag: "Astro", url: "https://github.com/arelkair/home" },
];

export const socials: [string, string][] = [
  ["GitHub", "https://github.com/arelkair"],
  ["X", "https://x.com/arelkair"],
  ["YouTube", "https://www.youtube.com/@arelkair"],
  ["TikTok", "https://www.tiktok.com/@arelkair"],
  ["Discord", "https://discord.com/users/1505398694810357830"],
];
