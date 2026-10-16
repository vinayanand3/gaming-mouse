// Writes docs/component-inventory.md from the built model and object/inventory.mjs.
import { writeFileSync, mkdirSync } from "node:fs";
import { scene } from "../object/scene.mjs";
import { describe, ASSEMBLIES } from "../object/inventory.mjs";
import { FILM } from "../object/film.mjs";
const S = scene({ W: 640, H: 640, radius: FILM.radius });
const solids = S.T.parts.map((p) => p.name);
const names = [...new Set(solids.map((n) => n.replace(/:\d+$/, "")))];
const rows = names.map((n) => ({ ...describe(n), solids: solids.filter((s) => s.replace(/:\d+$/, "") === n).length }));
let md = `# Component inventory\n\nConceptual wireless gaming mouse, 125 × 65 × 40 mm. ${solids.length} convex solids in ${names.length} named components, ${S.obj.explode.length} explode assemblies. Generated from the model by \`node scripts/inventory.mjs\`.\n\nMaterials and sizes are engineering assumptions (see \`engineering-assumptions.md\`).\n`;
for (const [k, label] of Object.entries(ASSEMBLIES)) {
  const list = rows.filter((r) => r.assembly === k);
  md += `\n## ${k} · ${label} (${list.length} components)\n\n| Component | Part name | Material | Purpose |\n|---|---|---|---|\n`;
  for (const r of list) md += `| ${r.label} | \`${r.name}\` | ${r.material} | ${r.purpose} |\n`;
}
const un = rows.filter((r) => r.assembly === "?");
if (un.length) md += `\n## Unassigned\n\n${un.map((r) => `- \`${r.name}\``).join("\n")}\n`;
mkdirSync(new URL("../docs/", import.meta.url), { recursive: true });
writeFileSync(new URL("../docs/component-inventory.md", import.meta.url), md);
console.log(`wrote docs/component-inventory.md · ${names.length} components · ${solids.length} solids`);
const counts = Object.fromEntries(Object.keys(ASSEMBLIES).map((k) => [k, rows.filter((r) => r.assembly === k).length]));
console.log(JSON.stringify(counts));
