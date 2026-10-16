# Engineering assumptions

The mouse is a fictional, technically plausible design inspired by current lightweight esports mice. It copies no manufacturer's proprietary design and carries no trademarks. Every number below is a design target or an assumption, not a measurement of a production product.

## Envelope and mass

| Item | Value | Note |
|---|---|---|
| Length × width × height | 125 × 65 × 40 mm | Brief's targets. Widest point 20 mm behind centre, hump peak 40 mm at y = −24 mm. |
| Mass target | ~60–70 g | Not computed from the model (solid panels stand in for ~1 mm walls). |
| Plan outline | Two superellipse quarters (n = 3.0 front, 2.4 rear) | Convex, symmetric; 24 straight facets in the model. |
| Top surface | Elliptical lateral profile on a measured-looking centreline | Approximated by 6 fitted spheres: RMS error 0.55 mm, step at the button/palm parting line under 1 mm. |

## Shell and structure

- The top shell is modelled as solid panels whose underside sits at z = 18 mm. A real shell is ~1.0–1.2 mm glass-filled PC/ABS with ribbing; the hex lattice on the palm's underside is drawn as a face marking.
- Over the wheel module and encoder the inner button panels are hollowed (their underside rises toward the channel) to clear the bracket and encoder, the way a thin real shell would.
- Main buttons hinge about a flexure line at the parting line (y = −3.85 mm, z = 18 mm). Flank walls under the buttons stop 1.3 mm below the buttons so the nose can travel.
- Four M1.6 shell screws through bosses under the palm; three M1.4 board screws on 1 mm standoffs.

## Click mechanism

- Optical switch: IR emitter and detector across a guided plunger. Click registers when the plunger vane interrupts the beam.
- Travel at the actuator post: 0.1 mm pre-travel plus 0.6 mm switch stroke (0.98° of button rotation, 1.1 mm at the nose). Real values vary by switch; 0.4–0.8 mm stroke is typical.
- The return spring is shown as a coil hanging from the plunger; its compression is not animated.
- Side buttons drive two tact switches on a small board parallel to the left flank; the through-wall actuators are not modelled.

## Scroll wheel

- 25 mm diameter, 6 mm wide rubber tire on zinc hubs, axle 26.5 mm above the base, protruding about 2 mm above the shell.
- Mechanical incremental encoder on the left bracket, 24 detents per turn assumed. Middle click via a tact switch under the wheel (the bracket's pivot is not animated).

## Optical sensor

- Generic optical image sensor (no specific part implied) mounted on the board over a window, an illumination LED behind it, and a one-piece lens (light pipe + imaging element) in a 15 × 20 mm base aperture.
- Lens underside 1.3 mm above the surface with 1.0 mm PTFE feet. Lift-off distance, CPI range and tracking speed are firmware/sensor parameters, shown only as labels.
- Tracking is drawn as light: LED → surface (grazing) → lens → sensor. It is sensing, not a laser beam pushing anything.

## Electronics and wireless

- 4-layer 1.6 mm FR-4 main board. Package sizes: SoC QFN 6 × 6 mm, PMIC QFN 4 × 4 mm, LDOs 2 × 2 mm, NOR flash SON-8, 32 MHz crystal 2.0 × 1.6 mm, passives 0603.
- 2.4 GHz stamped inverted-F antenna at the tail, ≥ 5 mm from the battery's protection board and away from the board's ground-heavy centre. Matching network of three 0603 parts between SoC and antenna feed.
- Polling rates of 1, 4 and 8 kHz are shown as design options. No latency figure is claimed: it depends on a validated radio, firmware and receiver.
- Bluetooth is not modelled. The USB receiver is a separate nano dongle beside the mouse.
- Wireless is drawn schematically (a dashed path and expanding rings), never as literal waves.

## Battery and power

- 3.7 V, 300 mAh (1.11 Wh) Li-Po pouch, 30 × 20 × 5.5 mm, on rails above the board, centred low for balance. Protection board at its tail; one lead bundle to a 2-pin connector.
- Power path drawn on the board: battery → PMIC → LDO rails → SoC, sensor, radio. Charging path: USB-C → PMIC → battery.
- Battery life is not claimed.

## What the model simplifies

- Convex parts only: concave features (screw holes, the aperture, the PCB sensor window, ports) are drawn on faces or built from several convex pieces.
- Flank walls are vertical facets; real sides curve inward toward the base.
- RGB LEDs are not modelled; the light guide glows by a colour effect in the film's final shot.
- Overlays (beam, rays, link, power flows, leader labels) are conceptual and drawn over the model. They are not geometry.
