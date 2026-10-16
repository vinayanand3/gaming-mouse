// Adds mouse-specific material ramps to kit/turn.mjs by re-tinting existing ramps in HSL.
import { readFileSync, writeFileSync } from "node:fs";
const file = new URL("../kit/turn.mjs", import.meta.url);
let src = readFileSync(file, "utf8");
if (src.includes("graphite: {")) { console.log("materials already added"); process.exit(0); }
const m = src.match(/const T3_MATERIALS = \{([\s\S]*?)\n\};/);
const block = m[1];
const ramp = (name, theme) => {
  const re = new RegExp(`${name}: \\{\\s*light: (\\[[^\\]]*\\]),\\s*dark: (\\[[^\\]]*\\])`);
  const mm = block.match(re);
  return JSON.parse(theme === "light" ? mm[1] : mm[2]);
};
const toHsl = (hex) => {
  const r = parseInt(hex.slice(1, 3), 16) / 255, g = parseInt(hex.slice(3, 5), 16) / 255, b = parseInt(hex.slice(5, 7), 16) / 255;
  const mx = Math.max(r, g, b), mn = Math.min(r, g, b), l = (mx + mn) / 2;
  let h = 0, s = 0;
  if (mx !== mn) {
    const d = mx - mn;
    s = l > 0.5 ? d / (2 - mx - mn) : d / (mx + mn);
    h = mx === r ? (g - b) / d + (g < b ? 6 : 0) : mx === g ? (b - r) / d + 2 : (r - g) / d + 4;
    h *= 60;
  }
  return [h, s, l];
};
const toHex = ([h, s, l]) => {
  const f = (n) => {
    const k = (n + h / 30) % 12, a = s * Math.min(l, 1 - l);
    return Math.round(255 * (l - a * Math.max(-1, Math.min(k - 3, 9 - k, 1)))).toString(16).padStart(2, "0");
  };
  return `#${f(0)}${f(8)}${f(4)}`;
};
const tint = (list, { h, s, l = 1, lift = 0, keep = [] }) =>
  list.map((c, i) => {
    if (keep.includes(i)) return c;
    const [, s0, l0] = toHsl(c);
    return toHex([h, Math.min(1, s ?? s0), Math.max(0, Math.min(1, l0 * l + lift))]);
  });
const make = (base, light, dark) => ({ light: tint(ramp(base, "light"), light), dark: tint(ramp(base, "dark"), dark) });
const NEW = {
  // matte black polymer: neutral, a touch lighter than rubber so the four tones still read on paper
  graphite: make("gunmetal", { h: 215, s: 0.07, l: 0.82 }, { h: 215, s: 0.07, l: 0.9 }),
  // dark green FR-4 solder mask
  pcbdark: make("gunmetal", { h: 152, s: 0.42, l: 0.95, lift: 0.02 }, { h: 152, s: 0.45, l: 1 }),
  // cyan technical accent (light guides, highlights)
  cyan: make("glass", { h: 190, s: 0.75, l: 0.92 }, { h: 190, s: 0.8, l: 1 }),
  // RGB light guide: violet-magenta diffuser
  rgb: make("lavender", { h: 285, s: 0.62, l: 0.95 }, { h: 285, s: 0.62, l: 1 }),
  // PTFE skates: white with a cool cast
  ptfe: make("porcelain", { h: 210, s: 0.12, l: 0.99 }, { h: 210, s: 0.1, l: 1 }),
};
let add = "";
for (const [name, { light, dark }] of Object.entries(NEW)) add += `\n  ${name}: {\n    light: ${JSON.stringify(light)},\n    dark: ${JSON.stringify(dark)},\n  },`;
src = src.replace(/(const T3_MATERIALS = \{[\s\S]*?)(\n\};)/, (_, a, b) => a + add + b);
writeFileSync(file, src);
console.log("added", Object.keys(NEW).join(", "));
