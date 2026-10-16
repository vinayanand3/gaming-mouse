# Verification summary

## Deliverables

| File | Result |
|---|---|
| `gaming-mouse-reveal.mp4` | H.264, 1920 × 1080, 30 fps, 900 frames, 30.000 s, 16:9, silent |
| `gaming-mouse-anatomy.html` | Interactive page, dark theme, ~0.8 MB, self-contained except Google Fonts |
| `gaming-mouse-anatomy-light.html` | Same page, light paper theme |
| Source project | Geometry, film description, overlays, timeline, render and encode scripts, kit |

## Model

- 136 convex solids in 136 named components, 44 explode assemblies, all eight required assemblies A–H populated (A 54, B 16, C 10, D 4, E 18, F 8, G 10, H 16 components).
- Build proves a separating plane for every pair of parts that share a group (`T.build`, strict): 0 interlocks.
- Shell fit to the target surface: 0.55 mm RMS; step at the button/palm parting line ≤ 0.9 mm.
- Alignment checked by construction in the geometry: button posts over the switch plungers (0.1 mm gap), wheel axle stubs ending at the brackets, lens inside the base aperture with 0.7 mm clearance, board inside the walls, battery on its rails clear of bosses and leads, fasteners on their bosses and standoffs.

## Exploded view and film

- `scan-apart` from five views (yaw/pitch −35/25, 0/5, 140/20, 90/−20, −20/70) over 201 explode states: **no pairs pass through each other** in any view. Early runs caught walls dipping into the base, right walls hitting the receiver and the battery crossing the antenna; all three were fixed (wall travel now horizontal, receiver moved out, battery lifts straight up).
- `motion/scan.mjs`, every frame of the 30 s film at 60 Hz: **0 unseparated frames**. Some frames report "forced" picks, the kit's benign case of near-touching parts whose order cycles; stills and the encoded frames were inspected at those times and look right.
- Stills were reviewed at every beat during choreography, then frames extracted from the final MP4 and contact-sheeted: tumble and title, shell macro with wheel, side buttons, underside, click with beam interrupt, sensor with rays, board with signal flows and wireless link, battery with power and charging flows, explode with leader labels, reassembly, final orbit with RGB and closing title.

## Interactive page

- Rendered in headless Chromium at 1300 px (light and dark) and 400 px (phone): no console errors.
- Exercised: explode slider and Assembled/Exploded, leader labels, part selection (battery), assembly highlight (B), open flank + click with beam, optical tracking overlay, phone layout.

## Not verified

- Mass, stiffness and battery life: not computed. The shell is modelled solid; wall thickness and ribbing are stated assumptions.
- Optical, RF and power behaviour are conceptual overlays, not simulations. No latency or range figure is claimed.
- Not tested in Safari or Firefox, or on a real touch device (pinch zoom is implemented but only exercised in code).
- The page's Google Fonts need a network connection; offline it falls back to system fonts.
- GitHub Pages hosting was not tried; the pages are static single files and should serve as is.
