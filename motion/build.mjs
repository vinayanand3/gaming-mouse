import { readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import * as k from "../kit/iso-kit.mjs";
import { turnScript } from "../scripts/inline-kit.mjs";
import { scene, PAGE_HELPERS } from "../object/scene.mjs";
import { FILM, FLOW_CSS } from "../object/film.mjs";
const HERE = dirname(fileURLToPath(import.meta.url));
const argv = process.argv.slice(2);
const flag = (name) => {
  const i = argv.indexOf(`--${name}`);
  return i >= 0 ? argv[i + 1] : undefined;
};
const duration = flag("duration") ? Number(flag("duration")) : undefined;
if (duration !== undefined && !(duration >= 3 && duration <= 60)) throw new Error("--duration takes seconds between 3 and 60");
const RATIOS = { "9:16": [540, 960], "4:5": [540, 675], "1:1": [540, 540], "16:9": [960, 540] };
const ratio = flag("ratio") ?? "16:9";
if (!RATIOS[ratio]) throw new Error(`--ratio takes one of ${Object.keys(RATIOS).join(", ")}`);
const [W, H] = RATIOS[ratio];
const S = scene({ W: 540, H: 960, radius: FILM.radius * 1.05, pad: 0 });
console.log(`${S.out.report.parts} parts · build ${S.seconds.toFixed(1)} s`);
const source = (file) => readFileSync(file, "utf8").replace(/^export /gm, "");
const film = source(join(HERE, "..", "object", "film.mjs"));
const timeline = source(join(HERE, "timeline.mjs"));
const css = readFileSync(join(HERE, "look.css"), "utf8");
const overlayJs = readFileSync(join(HERE, "..", "object", "overlay.js"), "utf8");
// static paper (see motion/paper.mjs): the live background keeps only the glow gradient
let paperCss = "";
try {
  const png = readFileSync(join(HERE, "paper.png")).toString("base64");
  paperCss = `.mo{background:#f1ece2 url(data:image/png;base64,${png}) 0 0/var(--mo-w) var(--mo-h) no-repeat}.mo .mo-bg{inset:0;background:radial-gradient(var(--gr,62%) var(--gr,62%) at var(--gx,50%) var(--gy,45%),rgba(255,253,247,.85),rgba(255,253,247,0) 75%)}`;
} catch {}
const plate = `<div class="mo-plate"><i class="mo-tick" data-c="tl"></i><i class="mo-tick" data-c="tr"></i><i class="mo-tick" data-c="bl"></i><i class="mo-tick" data-c="br"></i><span class="mo-corner" data-c="fig">${FILM.fig}</span><span class="mo-corner" data-c="title">Anatomy · ${FILM.title}</span><span class="mo-corner" data-c="hint"></span><span class="mo-corner" data-c="readout"></span></div>`;
const stage = `<div class="iso-stage iso-turn">${k.figureSvg({ width: W, height: H, label: FILM.label, body: "" })}${S.out.layerSvg("live", { width: W, height: H })}<svg class="ov" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" aria-hidden="true"></svg></div>`;
const titles = `<div class="mo-titles"></div>`;
const body = `<style>${S.out.css}
:root{--mo-w:${W}px;--mo-h:${H}px}
${css}
${paperCss}
${FLOW_CSS}
.mo .mo-titles{position:absolute;inset:0;pointer-events:none}
.mo .mo-title{position:absolute;opacity:0;color:#1f1d1a;font-family:"Helvetica Neue",Helvetica,Arial,sans-serif;text-shadow:0 0 14px #f3eee4,0 0 26px #f3eee4,0 0 4px #f3eee4}
.mo .mo-title b{display:block;font-weight:700;font-size:34px;letter-spacing:.16em;line-height:1.1}
.mo .mo-title i{display:block;font-style:normal;font-family:ui-monospace,"SF Mono",Menlo,monospace;font-size:11px;letter-spacing:.18em;text-transform:uppercase;color:rgba(40,36,30,.62);margin-top:9px}
.mo .mo-title::before{content:"";display:block;width:44px;height:2px;background:#13b6d6;margin-bottom:12px}
.mo .mo-title[data-at="bl"]{left:48px;bottom:56px}
.mo .mo-title[data-at="tl"]{left:48px;top:54px}
.mo .mo-title[data-at="bc"]{left:50%;transform:translateX(-50%);bottom:52px;text-align:center;white-space:nowrap}
.mo .mo-title[data-at="bc"]::before{margin:0 auto 12px}
</style><div class="iso mo" data-theme="light" data-plate="${argv.includes("--no-plate") ? "off" : "on"}"><div class="mo-bg"></div>${stage}<div class="mo-vignette"></div>${titles}${plate}</div>`;
const counts = { parts: S.out.report.parts, assemblies: S.obj.explode.length, ...(S.obj.counts ?? {}) };
counts.assemblies = S.obj.explode.length;
const DATA = { origin: S.obj.root.origin, turn: S.out.data, explode: S.obj.explode, dirs: S.obj.dirs, basis: S.basis, anchors: S.obj.anchors, W, H, ratio, counts, duration };
const LIVE = `const DATA = ${JSON.stringify(DATA)};
${PAGE_HELPERS}
${film}
${timeline}
${overlayJs}
const root = document.querySelector(".mo");
const ovSvg = root.querySelector("svg.ov");
const titleBox = root.querySelector(".mo-titles");
titleBox.innerHTML = TITLES_T.map((l) => '<div class="mo-title" data-at="' + l.at + '"><b>' + l.text + "</b>" + (l.sub ? "<i>" + l.sub + "</i>" : "") + "</div>").join("");
const titleEls = [...titleBox.children];
const stage = root.querySelector(".iso-stage");
const svgs = [...stage.querySelectorAll("svg")];
const bg = root.querySelector(".mo-bg");
const corner = (c) => root.querySelector('.mo-corner[data-c="' + c + '"]');
const ctl = TURN.mount(stage, DATA.turn, {});
const { R: BR, D: BD, k: BK, origin: BO } = DATA.basis;
const apply = (M, p) => [M[0] * p[0] + M[1] * p[1] + M[2] * p[2], M[3] * p[0] + M[4] * p[1] + M[5] * p[2], M[6] * p[0] + M[7] * p[1] + M[8] * p[2]];
const screenOf = (w) => [BO[0] + (w[0] * BR[0] + w[1] * BR[1] + w[2] * BR[2]) * BK, BO[1] + (w[0] * BD[0] + w[1] * BD[1] + w[2] * BD[2]) * BK];
const anchor = (a) => (typeof a === "string" ? DATA.anchors[a] : a);
const about = (M, p) => { const O = DATA.origin; const r = apply(M, [p[0] - O[0], p[1] - O[1], p[2] - O[2]]); return [r[0] + O[0], r[1] + O[1], r[2] + O[2]]; };
function frame(t) {
  return applyState(at(t));
}
function pose(o) {
  const f = o.focus ?? "body";
  return applyState({ t: 0, yaw: 0, pitch: 0, roll: 0, zoom: 1, panX: 0, panY: 0, apart: 0, ...FEATURE_DEFAULTS, glow: [0.5, 0.45, 0.7], label: { hint: "", readout: "" }, titles: TITLES_T.map(() => 0), ...o, focus: { a: f, b: f, e: 0 } });
}
function viewOf(s) {
  const M = orient(s.yaw, s.pitch, s.roll);
  const fa = anchor(s.focus.a);
  const fb = anchor(s.focus.b);
  const local = fa.map((v, i) => v + (fb[i] - v) * s.focus.e);
  const [cx, cy] = screenOf(about(M, local));
  const w = DATA.W / s.zoom;
  const h = DATA.H / s.zoom;
  return { M, x: cx + s.panX / s.zoom - w / 2, y: cy + s.panY / s.zoom - h / 2, w, h };
}
const PROBES = [...Object.values(DATA.anchors)];
for (const x of FILM.bounds[0]) for (const y of FILM.bounds[1]) for (const z of FILM.bounds[2]) PROBES.push([x, y, z]);
function speed(t, dt = 1 / 30) {
  const a = at(t);
  const b = at(t + dt);
  const va = viewOf(a);
  const vb = viewOf(b);
  const px = (v, p) => {
    const [x, y] = screenOf(about(v.M, p));
    return [((x - v.x) / v.w) * DATA.W * 2, ((y - v.y) / v.w) * DATA.W * 2];
  };
  const seen = (x, y) => x > -200 && x < DATA.W * 2 + 200 && y > -200 && y < DATA.H * 2 + 200;
  let most = 0;
  for (const p of PROBES) {
    const [x0, y0] = px(va, p);
    const [x1, y1] = px(vb, p);
    if (!seen(x0, y0) && !seen(x1, y1)) continue;
    most = Math.max(most, Math.hypot(x1 - x0, y1 - y0));
  }
  const ea = explodeValues(a.apart);
  const eb = explodeValues(b.apart);
  let slide = featureTravel(a, b);
  for (const key in ea) slide = Math.max(slide, Math.abs(eb[key] - ea[key]));
  return Math.max(most, (slide * BK * DATA.W * 2) / Math.min(va.w, vb.w));
}
function applyState(s) {
  const view = viewOf(s);
  const values = featureValues(s, explodeValues(s.apart));
  const stats = ctl.set({ root: { R: view.M }, ...values });
  for (const key of ["sig", "pow", "chg", "rgb"]) root.style.setProperty("--" + key, s[key].toFixed(3));
  root.style.setProperty("--flow-t", (s.t ?? 0).toFixed(3));
  const ovOpt = { frame: { x: view.x, y: view.y, w: view.w, h: view.h } };
  if (s.labels > 0.01) { const b = svgs[1].getBBox(); if (b.width) ovOpt.box = { x: b.x, y: b.y, w: b.width, h: b.height }; }
  drawOverlay(ovSvg, s, values, (p) => screenOf(about(view.M, p)), DATA.W / view.w, s.t ?? 0, ovOpt);
  s.titles.forEach((o, i) => { const v = o.toFixed(3); if (titleEls[i].style.opacity !== v) titleEls[i].style.opacity = v; });
  const vb = view.x.toFixed(3) + " " + view.y.toFixed(3) + " " + view.w.toFixed(3) + " " + view.h.toFixed(3);
  for (const svg of svgs) svg.setAttribute("viewBox", vb);
  const [gx, gy, gr] = s.glow;
  bg.style.setProperty("--gx", (gx * 100).toFixed(2) + "%");
  bg.style.setProperty("--gy", (gy * 100).toFixed(2) + "%");
  bg.style.setProperty("--gr", (gr * 100).toFixed(2) + "%");
  const fill = (text) => text.replace(/\\{(\\w+)\\}/g, (_, key) => DATA.counts[key]);
  if (corner("hint").textContent !== fill(s.label.hint)) corner("hint").textContent = fill(s.label.hint);
  if (corner("readout").textContent !== fill(s.label.readout)) corner("readout").textContent = fill(s.label.readout);
  return stats;
}
window.frame = frame;
window.pose = pose;
window.speed = speed;
window.DURATION = DURATION;
window.SIZE = { W: DATA.W, H: DATA.H, ratio: DATA.ratio };
window.TURN = TURN;
frame(0);
window.ready = true;
`;
const page = k.pageHtml({
  title: `${FILM.title} · anatomy motion`,
  theme: "light",
  body,
  script: turnScript() + LIVE,
  width: W,
});
writeFileSync(join(HERE, "motion.html"), page);
console.log(`wrote motion.html · ${(page.length / 1024).toFixed(0)} KB · ${duration ?? "default"} s · ${ratio} (${W * 2} × ${H * 2})`);
