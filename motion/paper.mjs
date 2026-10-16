// Rasterises the procedural paper texture of look.css once (it is static), so frames don't re-run
// feTurbulence on every screenshot. The moving glow stays a live CSS gradient.
import { launch } from "../scripts/browser.mjs";
import { pathToFileURL } from "node:url";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
const HERE = dirname(fileURLToPath(import.meta.url));
const b = await launch();
const p = await b.newPage();
await p.setViewport({ width: 960, height: 540, deviceScaleFactor: 2 });
await p.goto(pathToFileURL(join(HERE, "motion.html")).href);
await p.waitForFunction(() => window.ready);
await p.addStyleTag({ content: ".mo>*:not(.mo-bg){display:none!important}.mo .mo-bg{inset:0!important}" });
await p.evaluate(() => {
  const bg = document.querySelector(".mo-bg");
  const cs = getComputedStyle(bg).backgroundImage;
  // drop the first layer (the glow gradient), keep the paper textures
  const layers = cs.split(/,(?![^(]*\))/);
  bg.style.backgroundImage = layers.slice(1).join(",");
});
const el = await p.$(".mo");
await el.screenshot({ path: join(HERE, "paper.png"), type: "png" });
await b.close();
console.log("wrote motion/paper.png");
