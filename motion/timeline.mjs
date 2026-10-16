const EASE = {
  lin: (x) => x,
  io: (x) => (x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2),
  i: (x) => x * x * x,
  o: (x) => 1 - Math.pow(1 - x, 3),
  whip: (x) => (x < 0.5 ? 16 * Math.pow(x, 5) : 1 - Math.pow(-2 * x + 2, 5) / 2),
  so: (x) => 1 - Math.pow(1 - x, 2),
  si: (x) => x * x,
  back: (x) => 1 + 2.2 * Math.pow(x - 1, 3) + 1.2 * Math.pow(x - 1, 2),
};
// Written for 30 s at 16:9 (960 × 540 viewBox units, rendered at 1920 × 1080).
export const BASE_DURATION = 30;
const W = 0.24; // whip length
const BASE_KEYS = [
  // ---- 1 · Hero introduction (0–3 s): tumble into a three-quarter view
  { t: 0, yaw: 168, pitch: 38, roll: -26, zoom: 1.45, focus: "body", panX: 0, panY: -6, apart: 0, ...{ click: 0, clickR: 0, wheel: 0, sideOpen: 0, lensDrop: 0, reveal: 0, rays: 0, beam: 0, sig: 0, pow: 0, chg: 0, link: 0, labels: 0, rgb: 0.2 }, glow: [0.62, 0.95, 0.62] },
  { t: 0.7, yaw: 120, pitch: 32, roll: -16, zoom: 1.55, ease: "si" },
  { t: 1.7, yaw: -10, pitch: 24, roll: -4, zoom: 2.2, panX: -70, ease: "lin", rgb: 0.6 },
  { t: 2.6, yaw: -38, pitch: 24, roll: 0, zoom: 2.45, panX: -120, panY: -40, ease: "so", glow: [0.6, 0.55, 0.6] },
  { t: 2.96, yaw: -41, pitch: 25, roll: 0, zoom: 2.52, panX: -120, panY: -40, focus: "body", ease: "lin" },
  // ---- 2 · Exterior engineering (3–6 s): shell macro, side buttons, underside
  { t: 2.96 + W, yaw: -22, pitch: 44, roll: -5, zoom: 4.6, focus: "wheelslot", panX: -40, panY: 30, wheel: 0, ease: "whip" },
  { t: 4.25, yaw: 2, pitch: 40, roll: -3, zoom: 5.0, focus: "wheelslot", panX: 30, panY: 10, wheel: 300, ease: "lin" },
  { t: 4.25 + W, yaw: -97, pitch: 7, roll: 2, zoom: 4.4, focus: "side", panX: 0, panY: -10, ease: "whip" },
  { t: 5.1, yaw: -86, pitch: 9, roll: 2, zoom: 4.7, focus: "side", panX: 0, panY: -10, ease: "lin" },
  { t: 5.1 + W, yaw: -140, pitch: -48, roll: 0, zoom: 2.3, focus: "bottom", panX: 0, panY: 0, ease: "whip" },
  { t: 5.98, yaw: -152, pitch: -52, roll: 2, zoom: 2.45, focus: "bottom", panX: 0, panY: 0, ease: "lin", rgb: 0.35 },
  // ---- 3 · Mechanical click (6–9 s): open the left flank, click the optical switch
  { t: 5.98 + W, yaw: -62, pitch: 18, roll: 0, zoom: 4.0, focus: "switch.L", panX: 0, panY: -6, sideOpen: 0, beam: 0, click: 0, ease: "whip" },
  { t: 6.85, yaw: -68, pitch: 15, zoom: 4.6, sideOpen: 1, beam: 0, ease: "io" },
  { t: 7.05, beam: 1, click: 0, ease: "io" },
  { t: 7.3, click: 1, ease: "io" },
  { t: 7.7, click: 1, ease: "lin" },
  { t: 7.95, click: 0, ease: "io" },
  { t: 8.15, click: 0, ease: "lin" },
  { t: 8.32, click: 1, ease: "io" },
  { t: 8.5, click: 1, ease: "lin", yaw: -72, pitch: 15, zoom: 5.0, focus: "switch.L", panY: -6 },
  { t: 8.7, click: 0, beam: 1, ease: "io" },
  { t: 8.98, beam: 0, sideOpen: 0.15, yaw: -73, pitch: 15, zoom: 5.0, focus: "switch.L", panY: -6, ease: "io" },
  // ---- 4 · Optical sensor (9–12 s): from beneath, lens separates, light path
  { t: 8.98 + W, yaw: -58, pitch: -34, roll: 0, zoom: 3.3, focus: "lens", panX: -250, panY: -60, sideOpen: 0, lensDrop: 0, rays: 0, ease: "whip" },
  { t: 9.9, yaw: -64, pitch: -30, zoom: 3.45, lensDrop: 1, ease: "io" },
  { t: 10.3, rays: 1, ease: "io" },
  { t: 11.5, yaw: -76, pitch: -24, zoom: 3.6, focus: "lens", panX: -250, panY: -60, rays: 1, lensDrop: 1, ease: "lin" },
  { t: 11.98, rays: 0, lensDrop: 0, yaw: -80, pitch: -24, ease: "io" },
  // ---- 5 · Wireless (12–15 s): shell lifts, board signal paths, link to receiver
  { t: 11.98 + W, yaw: -24, pitch: 50, roll: 0, zoom: 2.5, focus: "pcb", panX: -60, panY: 20, reveal: 0, sig: 0, link: 0, ease: "whip" },
  { t: 12.9, yaw: -18, pitch: 54, zoom: 2.8, focus: "soc", panX: -110, panY: -50, reveal: 1, ease: "io" },
  { t: 13.3, sig: 1, ease: "io" },
  { t: 13.6, yaw: -14, pitch: 54, zoom: 2.8, focus: "soc", panX: -110, panY: -50, link: 0, ease: "lin" },
  { t: 14.35, yaw: 4, pitch: 52, zoom: 2.0, focus: "rf", panX: 40, panY: -50, link: 1, ease: "io" },
  { t: 14.98, yaw: 8, pitch: 52, zoom: 2.05, focus: "rf", panX: 40, panY: -50, ease: "lin" },
  // ---- 6 · Power (15–18 s): battery macro, power flow, USB-C charging
  { t: 14.98 + W, yaw: 34, pitch: 46, roll: 2, zoom: 3.3, focus: "battery", panX: -150, panY: -60, sig: 0, link: 0, pow: 0, ease: "whip" },
  { t: 15.6, pow: 1, ease: "io" },
  { t: 16.5, yaw: 22, pitch: 48, zoom: 3.1, focus: "pmic", panX: -150, panY: -60, ease: "lin" },
  { t: 16.8, chg: 0, ease: "lin" },
  { t: 17.2, yaw: -6, pitch: 46, zoom: 2.8, focus: "pmic", panX: -330, panY: -50, chg: 1, ease: "io" },
  { t: 17.55, yaw: -14, pitch: 44, zoom: 2.8, panX: -330, chg: 1, pow: 1, reveal: 1, ease: "lin" },
  // ---- 7 · Full explosion (18–24 s)
  { t: 18.1, yaw: -38, pitch: 26, roll: 0, zoom: 2.4, focus: "body", panX: 0, panY: 10, reveal: 0, pow: 0, chg: 0, apart: 0, ease: "io", glow: [0.5, 0.48, 0.72] },
  { t: 18.4, apart: 0, labels: 0, ease: "lin" },
  { t: 20.2, yaw: -46, pitch: 24, zoom: 1.22, panY: -30, apart: 1, ease: "o" },
  { t: 20.7, labels: 1, ease: "io" },
  { t: 23.4, yaw: -66, pitch: 24, zoom: 1.18, panY: -30, apart: 1, labels: 1, ease: "lin" },
  { t: 23.8, labels: 0, ease: "io" },
  // ---- 8 · Reassembly (24–28 s)
  { t: 24.0, yaw: -68, pitch: 24, zoom: 1.17, panY: -30, apart: 1, ease: "lin" },
  { t: 27.0, yaw: -36, pitch: 22, zoom: 2.5, panY: 10, apart: 0, ease: "io", glow: [0.5, 0.46, 0.75] },
  { t: 27.5, yaw: -44, pitch: 22, zoom: 2.55, rgb: 0.4, ease: "o" },
  // ---- 9 · Final hero (28–30 s)
  { t: 28.8, rgb: 1, ease: "io" },
  { t: 29.5, yaw: -122, pitch: 20, zoom: 2.55, panY: 34, ease: "io" },
  { t: 30, yaw: -124, pitch: 20, zoom: 2.57, panY: 34, ease: "o" },
];
const BASE_LABELS = [
  { t: 0, hint: "Wireless gaming mouse", readout: "125 × 65 × 40 mm · ~65 g (target)" },
  { t: 3.1, hint: "A · Sculpted top shell", readout: "sphere-fitted panels · scroll wheel slot" },
  { t: 4.4, hint: "A · Programmable side buttons", readout: "thumb flank · tact switches on a side board" },
  { t: 5.25, hint: "H · Underside", readout: "PTFE skates · sensor aperture · 4 screws" },
  { t: 6.1, hint: "B · Optical click switch", readout: "0.1 mm pre-travel · 0.6 mm stroke" },
  { t: 9.1, hint: "D · Optical tracking", readout: "LED → surface → lens → image sensor" },
  { t: 12.1, hint: "E · F · Board and radio", readout: "sensor → SoC → RF match → antenna" },
  { t: 15.1, hint: "G · Battery and power", readout: "Li-Po 3.7 V · PMIC · LDO rails · USB-C" },
  { t: 18.3, hint: "Taken apart", readout: "{parts} parts · {assemblies} assemblies" },
  { t: 24.0, hint: "Reassembly", readout: "every part back along its path" },
  { t: 28.0, hint: "Wireless gaming mouse", readout: "concept · 2.4 GHz · USB-C" },
];
// Big captions (screen titles). t0…t1 with a 0.3 s fade.
export const TITLES = [
  { t0: 1.1, t1: 2.95, text: "ENGINEERED FOR PRECISION", sub: "Inside a wireless gaming mouse", at: "tl" },
  { t0: 10.2, t1: 11.95, text: "OPTICAL MOTION TRACKING", sub: "image capture · displacement estimation", at: "tl" },
  { t0: 13.2, t1: 14.95, text: "LOW-LATENCY 2.4 GHz WIRELESS", sub: "conceptual · latency depends on validated hardware", at: "tl" },
  { t0: 15.5, t1: 17.95, text: "INTELLIGENT POWER MANAGEMENT", sub: "battery → regulation → SoC, sensor, radio", at: "tl" },
  { t0: 28.5, t1: 31, text: "PRECISION. SPEED. ENGINEERING.", sub: "", at: "bc" },
];
const REQUESTED = typeof DATA !== "undefined" && DATA.duration ? DATA.duration : BASE_DURATION;
function retimer(keys, duration) {
  const segments = [];
  let fixed = 0;
  for (let i = 1; i < keys.length; i++) {
    const whip = keys[i].ease === "whip";
    segments.push({ a: keys[i - 1].t, b: keys[i].t, whip });
    if (whip) fixed += keys[i].t - keys[i - 1].t;
  }
  const scale = Math.max(0.35, (duration - fixed) / (BASE_DURATION - fixed));
  return (t) => {
    let out = 0;
    for (const s of segments) {
      if (t <= s.a) break;
      const part = Math.min(t, s.b) - s.a;
      out += s.whip ? part : part * scale;
    }
    return out + Math.max(0, t - BASE_DURATION) * scale;
  };
}
const RETIME = retimer(BASE_KEYS, REQUESTED);
export const DURATION = RETIME(BASE_DURATION);
export const KEYS = BASE_KEYS.map((k) => ({ ...k, t: RETIME(k.t) }));
export const LABELS = BASE_LABELS.map((l) => ({ ...l, t: RETIME(l.t) }));
export const TITLES_T = TITLES.map((l) => ({ ...l, t0: RETIME(l.t0), t1: l.t1 > BASE_DURATION ? Infinity : RETIME(l.t1) }));
const CHANNELS = ["yaw", "pitch", "roll", "zoom", "panX", "panY", "apart", ...Object.keys(FEATURE_DEFAULTS)];
const DEFAULTS = { yaw: 0, pitch: 0, roll: 0, zoom: 1, panX: 0, panY: 0, apart: 0, ...FEATURE_DEFAULTS };
function track(name) {
  const list = KEYS.filter((k) => k[name] !== void 0).map((k) => ({ t: k.t, v: k[name], ease: k.ease ?? "io" }));
  if (!list.length || list[0].t > 0) list.unshift({ t: 0, v: list.length ? list[0].v : DEFAULTS[name], ease: "lin" });
  return list;
}
const TRACKS = Object.fromEntries(CHANNELS.map((c) => [c, track(c)]));
const FOCUS = KEYS.filter((k) => k.focus !== void 0).map((k) => ({ t: k.t, v: k.focus, ease: k.ease ?? "io" }));
const GLOW = KEYS.filter((k) => k.glow !== void 0).map((k) => ({ t: k.t, v: k.glow, ease: k.ease ?? "io" }));
function sample(list, t) {
  if (t <= list[0].t) return { a: list[0].v, b: list[0].v, e: 0 };
  for (let i = 1; i < list.length; i++) {
    if (t <= list[i].t) {
      const x = (t - list[i - 1].t) / (list[i].t - list[i - 1].t || 1);
      return { a: list[i - 1].v, b: list[i].v, e: EASE[list[i].ease](x) };
    }
  }
  const last = list[list.length - 1].v;
  return { a: last, b: last, e: 0 };
}
const mix = (a, b, e) => a + (b - a) * e;
export function at(t) {
  const out = { t };
  for (const c of CHANNELS) {
    const { a, b, e } = sample(TRACKS[c], t);
    out[c] = c === "zoom" ? Math.exp(mix(Math.log(a), Math.log(b), e)) : mix(a, b, e);
  }
  const f = sample(FOCUS, t);
  out.focus = { a: f.a, b: f.b, e: f.e };
  const g = sample(GLOW, t);
  out.glow = g.a.map((v, i) => mix(v, g.b[i], g.e));
  let label = LABELS[0];
  for (const l of LABELS) if (t >= l.t) label = l;
  out.label = label;
  out.titles = TITLES_T.map((l) => Math.max(0, Math.min(1, (t - l.t0) / 0.3, (l.t1 - t) / 0.3)));
  return out;
}
