export const GRADE_MAP: Record<string, string> = {
  COM: "Common",
  UNC: "Uncommon",
  RAR: "Rare",
  LEG: "Legendary",
  IMM: "Immortal",
  ARC: "Arcana",
  BEY: "Beyond",
  CEL: "Celestial",
  DIV: "Divine",
  COS: "Cosmic"
};

export const GRADE_COLORS: Record<string, string> = {
  Common: "var(--rarity-common)",
  Uncommon: "var(--rarity-uncommon)",
  Rare: "var(--rarity-rare)",
  Legendary: "var(--rarity-legendary)",
  Immortal: "var(--rarity-mythic)",
  Arcana: "var(--rarity-arcana)",
  Beyond: "var(--rarity-beyond)",
  Celestial: "var(--rarity-celestial)",
  Divine: "var(--rarity-divine)",
  Cosmic: "var(--rarity-cosmic)",
  Unknown: "#6b7280"
};

export const GRADE_RANK: Record<string, number> = {
  Common: 1,
  Uncommon: 2,
  Rare: 3,
  Legendary: 4,
  Immortal: 5,
  Arcana: 6,
  Beyond: 7,
  Celestial: 8,
  Divine: 9,
  Cosmic: 10
};

export const HERO_CLASS_NAMES: Record<number, string> = {
  101: "Knight",
  201: "Ranger",
  301: "Sorcerer",
  401: "Priest",
  501: "Hunter",
  601: "Slayer"
};

export const HERO_CLASS_NAMES_TR: Record<number, string> = {
  101: "Şövalye (Knight)",
  201: "Okçu (Ranger)",
  301: "Büyücü (Sorcerer)",
  401: "Rahip (Priest)",
  501: "Avcı (Hunter)",
  601: "Katil (Slayer)"
};

export const HERO_COLORS: Record<number, string> = {
  101: "#ff8000",
  201: "#4caf50",
  301: "#42a5f5",
  401: "#ab47bc",
  501: "#78909c",
  601: "#e040fb"
};
