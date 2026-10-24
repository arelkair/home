import en from "./en.json";

export type Key = keyof typeof en;

const strings: Record<string, string> = en;

export function t(value: string) {
  return strings[value] ?? value;
}
