# Inside a wireless gaming mouse

**Live:** [interactive anatomy (light)](https://vinayanand3.github.io/gaming-mouse/) · [dark](https://vinayanand3.github.io/gaming-mouse/gaming-mouse-anatomy.html) · [reveal film (MP4)](https://vinayanand3.github.io/gaming-mouse/gaming-mouse-reveal.mp4)

A conceptual 125 × 65 × 40 mm wireless gaming mouse built part by part with the Anatomy Reveal skill (MIT kit): 136 convex solids, 44 explode assemblies, one model that drives both

- `gaming-mouse-anatomy.html` / `gaming-mouse-anatomy-light.html`, the interactive dissection page (dark and light), and
- `gaming-mouse-reveal.mp4`, a 30 s, 16:9, 1920 × 1080, 30 fps reveal film with adaptive motion blur.

## How the model is built

- **Shell.** `object/shape.mjs` defines the plan outline (two superellipse quarters) and a target top surface, then fits six spheres to it (two zones, three strips). Each shell panel is one sphere cut by its neighbours' radical planes, the outline's flank planes and its own underside, so panels are convex and curved and meet along exact character lines. Fit: 0.55 mm RMS. `node object/shape.mjs` prints it.
- **Everything else** is prisms and rounds in real millimetres, in `object/geometry.mjs`: walls, base, feet, screws, optical switches, wheel module, PCB and components, sensor and lens, antenna, battery, receiver.
- **Features** (`object/film.mjs`): left/right click (hinge + plunger), wheel spin, open left flank, lens drop, shell lift, and conceptual overlays: switch beam, optical rays, wireless link, signal / power / charging flows, leader labels (`object/overlay.js`).
- **Inventory** (`object/inventory.mjs`) maps every part to its assembly (A–H), material and purpose. `node scripts/inventory.mjs` writes `docs/component-inventory.md`.

## Kit changes

Two patches to `kit/` so large-radius sphere panels sort and draw correctly:

1. `kit/turn.mjs`, `t3PrepareBall`: each flat face of a ball part is precomputed as an exact polygon (the disc clipped by every other flat). The stock fixed rim count left too few points on small faces of large spheres.
2. `kit/turn-build.mjs` + `kit/turn.mjs` `t3Cloud`: ball parts can carry an exact collision cloud (`exactCloud`, computed in `geometry.mjs` from the panel's faces and curved top), used for build-time separation and runtime GJK.

Plus five materials added by `scripts/add-materials.mjs` (graphite, pcbdark, cyan, rgb, ptfe), a Chromium path in `scripts/browser.mjs`, a JPEG sub-frame option in `motion/render.mjs` / `encode.mjs`, and `motion/paper.mjs`, which rasterises the static paper texture once so screenshots don't re-run `feTurbulence`.

## Commands

```sh
npm install                       # puppeteer-core
node object/shape.mjs             # shell fit report
node object/test-page.mjs --light # bare test page
npm run check                     # explode pass-through scans from five views + per-frame film scan
npm run figure                    # object/figure.html, object/figure-light.html
npm run film                      # motion/motion.html (16:9, 30 s)
npm run paper                     # rasterise the paper texture and rebuild the film page
npm run render                    # adaptive motion-blur sub-frames into out/blur (~30 min on 2 cores, split with --from/--to)
npm run encode                    # average sub-frames, H.264 → out/gaming-mouse-reveal.mp4 (needs ImageMagick + ffmpeg)
```

Set `CHROME_PATH` if Chrome/Chromium isn't found.

## Publishing on GitHub Pages

The repo root is the site: `index.html` (light page), `gaming-mouse-anatomy.html` (dark), `gaming-mouse-anatomy-light.html` and `gaming-mouse-reveal.mp4`, with `.nojekyll`. Pages serves the `main` branch from `/`. After `npm run figure`, copy `object/figure-light.html` to `index.html` and `gaming-mouse-anatomy-light.html`, and `object/figure.html` to `gaming-mouse-anatomy.html`. The pages load fonts from Google Fonts and nothing else.

## Credits

Built with the [Anatomy Reveal skill](https://github.com/annnguyentt/anatomy-reveal-skill) and its Anatomy kit (MIT, see `LICENSE.anatomy-reveal-kit` and `kit/LICENSE`).

## Docs

- `docs/component-inventory.md`, every component by assembly with material and purpose
- `docs/engineering-assumptions.md`, the design targets and what the model simplifies
- `docs/verification-summary.md`, what was checked and what was not
