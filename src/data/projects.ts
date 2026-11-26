export interface Project {
  name: string;
  href: string;
  summary: string;
  status: string;
  since: string;
}

export const projects: Project[] = [
  {
    name: "Wii Party Recomp",
    href: "https://github.com/arelkair/wiiparty-recomp",
    summary: "A static recompilation of Wii Party for PC. The game's code is translated into C++ and built as a native program for Windows and Linux, with no emulator.",
    status: "In development",
    since: "September 2026",
  },
  {
    name: "Nivra",
    href: "https://github.com/arelkair/nivra",
    summary: "A private organizer for calendar, timetable, tasks, grades and money. There is no account: everything stays in your browser.",
    status: "Live",
    since: "August 2026",
  },
  {
    name: "Pool",
    href: "https://github.com/arelkair/pool",
    summary: "A 2D pool game with online 1v1. One player shares a four-letter code, the other joins, and the match runs peer-to-peer with standard 8-ball rules.",
    status: "Live",
    since: "June 2026",
  },
];
