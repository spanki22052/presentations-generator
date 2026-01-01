export const NAVBAR_HEIGHT = "80px";

export const NAVBAR_ITEMS = [
  { label: "Features", path: "/features" },
  { label: "Pricing", path: "/pricing" },
  { label: "Blog", path: "/blog" },
] as const;

export const LANGUAGE_OPTIONS = [
  { value: "en", label: "EN", flag: "🇺🇸" },
  { value: "ru", label: "RU", flag: "🇷🇺" },
] as const;
