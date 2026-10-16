# Component inventory

Conceptual wireless gaming mouse, 125 × 65 × 40 mm. 136 convex solids in 136 named components, 44 explode assemblies. Generated from the model by `node scripts/inventory.mjs`.

Materials and sizes are engineering assumptions (see `engineering-assumptions.md`).

## A · Exterior & ergonomics (54 components)

| Component | Part name | Material | Purpose |
|---|---|---|---|
| Palm shell | `shell.palm` | Thin-wall glass-filled PC/ABS, matte | Rear ergonomic hump: carries the palm, the screw bosses' load and the button hinge line; underside ribbed in a hex lattice for stiffness at ~1 mm wall. |
| Main button panel (left, outer) | `button.L.outer` | Glass-filled PC/ABS, matte | Sculpted panel of the left main button; panels of one button move as a single part about its rear flexure line. |
| Main button panel (left, rear) | `button.L.rear` | Glass-filled PC/ABS, matte | Sculpted panel of the left main button; panels of one button move as a single part about its rear flexure line. |
| Main button panel (left, mid) | `button.L.mid` | Glass-filled PC/ABS, matte | Sculpted panel of the left main button; panels of one button move as a single part about its rear flexure line. |
| Main button panel (left, front) | `button.L.front` | Glass-filled PC/ABS, matte | Sculpted panel of the left main button; panels of one button move as a single part about its rear flexure line. |
| Main button panel (right, outer) | `button.R.outer` | Glass-filled PC/ABS, matte | Sculpted panel of the right main button; panels of one button move as a single part about its rear flexure line. |
| Main button panel (right, rear) | `button.R.rear` | Glass-filled PC/ABS, matte | Sculpted panel of the right main button; panels of one button move as a single part about its rear flexure line. |
| Main button panel (right, mid) | `button.R.mid` | Glass-filled PC/ABS, matte | Sculpted panel of the right main button; panels of one button move as a single part about its rear flexure line. |
| Main button panel (right, front) | `button.R.front` | Glass-filled PC/ABS, matte | Sculpted panel of the right main button; panels of one button move as a single part about its rear flexure line. |
| Centre channel bridge (rear) | `shell.bridge.rear` | PC/ABS, matte | Fixed shell strip between the buttons, framing the wheel slot. |
| Centre channel bridge (front) | `shell.bridge.front` | PC/ABS, matte | Fixed shell strip between the buttons, framing the wheel slot. |
| DPI / profile button cap | `dpi.cap` | PC/ABS, recessed 0.6 mm | Cycles CPI or profiles; sits in the centre channel behind the wheel. |
| DPI button stem | `dpi.stem` | POM | Long stem from the cap to the DPI tact switch on the main board. |
| Flank wall segment | `wall.L00` | PC/ABS, micro-textured | Side grip contour of the lower shell; segments meet on shared joint planes. |
| Flank wall segment | `wall.L01` | PC/ABS, micro-textured | Side grip contour of the lower shell; segments meet on shared joint planes. |
| Flank wall segment | `wall.L02` | PC/ABS, micro-textured | Side grip contour of the lower shell; segments meet on shared joint planes. |
| Flank wall segment | `wall.L03` | PC/ABS, micro-textured | Side grip contour of the lower shell; segments meet on shared joint planes. |
| Flank wall segment | `wall.L04` | PC/ABS, micro-textured | Side grip contour of the lower shell; segments meet on shared joint planes. |
| Flank wall segment | `wall.L05` | PC/ABS, micro-textured | Side grip contour of the lower shell; segments meet on shared joint planes. |
| Flank wall segment | `wall.L06` | PC/ABS, micro-textured | Side grip contour of the lower shell; segments meet on shared joint planes. |
| Flank wall segment | `wall.L07` | PC/ABS, micro-textured | Side grip contour of the lower shell; segments meet on shared joint planes. |
| Flank wall segment | `wall.L08` | PC/ABS, micro-textured | Side grip contour of the lower shell; segments meet on shared joint planes. |
| Flank wall segment | `wall.L09` | PC/ABS, micro-textured | Side grip contour of the lower shell; segments meet on shared joint planes. |
| RGB light guide | `rgb.L09` | Diffused PMMA light pipe | Rear perimeter light guide fed by side-firing RGB LEDs (LEDs not modelled). |
| Flank wall segment | `wall.L10` | PC/ABS, micro-textured | Side grip contour of the lower shell; segments meet on shared joint planes. |
| RGB light guide | `rgb.L10` | Diffused PMMA light pipe | Rear perimeter light guide fed by side-firing RGB LEDs (LEDs not modelled). |
| Flank wall segment | `wall.L11` | PC/ABS, micro-textured | Side grip contour of the lower shell; segments meet on shared joint planes. |
| RGB light guide | `rgb.L11` | Diffused PMMA light pipe | Rear perimeter light guide fed by side-firing RGB LEDs (LEDs not modelled). |
| Flank wall segment | `wall.R12` | PC/ABS, micro-textured | Side grip contour of the lower shell; segments meet on shared joint planes. |
| RGB light guide | `rgb.R12` | Diffused PMMA light pipe | Rear perimeter light guide fed by side-firing RGB LEDs (LEDs not modelled). |
| Flank wall segment | `wall.R13` | PC/ABS, micro-textured | Side grip contour of the lower shell; segments meet on shared joint planes. |
| RGB light guide | `rgb.R13` | Diffused PMMA light pipe | Rear perimeter light guide fed by side-firing RGB LEDs (LEDs not modelled). |
| Flank wall segment | `wall.R14` | PC/ABS, micro-textured | Side grip contour of the lower shell; segments meet on shared joint planes. |
| RGB light guide | `rgb.R14` | Diffused PMMA light pipe | Rear perimeter light guide fed by side-firing RGB LEDs (LEDs not modelled). |
| Flank wall segment | `wall.R15` | PC/ABS, micro-textured | Side grip contour of the lower shell; segments meet on shared joint planes. |
| Flank wall segment | `wall.R16` | PC/ABS, micro-textured | Side grip contour of the lower shell; segments meet on shared joint planes. |
| Flank wall segment | `wall.R17` | PC/ABS, micro-textured | Side grip contour of the lower shell; segments meet on shared joint planes. |
| Flank wall segment | `wall.R18` | PC/ABS, micro-textured | Side grip contour of the lower shell; segments meet on shared joint planes. |
| Flank wall segment | `wall.R19` | PC/ABS, micro-textured | Side grip contour of the lower shell; segments meet on shared joint planes. |
| Flank wall segment | `wall.R20` | PC/ABS, micro-textured | Side grip contour of the lower shell; segments meet on shared joint planes. |
| Flank wall segment | `wall.R21` | PC/ABS, micro-textured | Side grip contour of the lower shell; segments meet on shared joint planes. |
| Flank wall segment | `wall.R22` | PC/ABS, micro-textured | Side grip contour of the lower shell; segments meet on shared joint planes. |
| Flank wall segment | `wall.R23` | PC/ABS, micro-textured | Side grip contour of the lower shell; segments meet on shared joint planes. |
| Side button cap (fwd) | `side.fwd` | PC/ABS, ribbed grip | Programmable thumb button on the left flank. |
| Side button cap (back) | `side.back` | PC/ABS, ribbed grip | Programmable thumb button on the left flank. |
| Side-button board | `side.board` | FR-4 | Small board carrying the two side tact switches, parallel to the flank. |
| Side tact switch | `side.switch.fwd` | Steel dome / LCP housing | Registers a side button press. |
| Side tact switch | `side.switch.back` | Steel dome / LCP housing | Registers a side button press. |
| Snap hook | `base.snap.L` | Glass-filled PC | Locates the flank walls at the nose. |
| Snap hook | `base.snap.R` | Glass-filled PC | Locates the flank walls at the nose. |
| Shell screw boss | `base.boss.LF` | Glass-filled PC | Post from the base to the palm's underside; receives a shell screw. |
| Shell screw boss | `base.boss.RF` | Glass-filled PC | Post from the base to the palm's underside; receives a shell screw. |
| Shell screw boss | `base.boss.LR` | Glass-filled PC | Post from the base to the palm's underside; receives a shell screw. |
| Shell screw boss | `base.boss.RR` | Glass-filled PC | Post from the base to the palm's underside; receives a shell screw. |

## B · Click mechanisms (16 components)

| Component | Part name | Material | Purpose |
|---|---|---|---|
| Button actuator post (left) | `button.L.post` | PC (moulded with the button) | Transfers button travel to the optical switch plunger: 0.1 mm pre-travel, then 0.6 mm stroke. |
| Button actuator post (right) | `button.R.post` | PC (moulded with the button) | Transfers button travel to the optical switch plunger: 0.1 mm pre-travel, then 0.6 mm stroke. |
| Optical switch housing (left) | `switch.L.base` | LCP | Mounts the switch on the board; pins solder to the PCB. |
| Switch guide wall (left) | `switch.L.wall.a` | LCP | Guides the plunger and acts as the mechanical stop. |
| Switch guide wall (left) | `switch.L.wall.b` | LCP | Guides the plunger and acts as the mechanical stop. |
| IR emitter (left) | `switch.L.emitter` | IR LED in LCP block | Sends a light beam across the plunger channel. |
| IR detector (left) | `switch.L.detector` | Phototransistor in LCP block | Sees the beam; a click is registered when the plunger interrupts it (no contact bounce). |
| Switch plunger (left) | `switch.L.plunger` | POM | Moves 0.6 mm and drops a vane into the IR beam. |
| Return spring (left) | `switch.L.spring` | Stainless spring steel | Returns the plunger and sets the click force and tactile feel. |
| Optical switch housing (right) | `switch.R.base` | LCP | Mounts the switch on the board; pins solder to the PCB. |
| Switch guide wall (right) | `switch.R.wall.a` | LCP | Guides the plunger and acts as the mechanical stop. |
| Switch guide wall (right) | `switch.R.wall.b` | LCP | Guides the plunger and acts as the mechanical stop. |
| IR emitter (right) | `switch.R.emitter` | IR LED in LCP block | Sends a light beam across the plunger channel. |
| IR detector (right) | `switch.R.detector` | Phototransistor in LCP block | Sees the beam; a click is registered when the plunger interrupts it (no contact bounce). |
| Switch plunger (right) | `switch.R.plunger` | POM | Moves 0.6 mm and drops a vane into the IR beam. |
| Return spring (right) | `switch.R.spring` | Stainless spring steel | Returns the plunger and sets the click force and tactile feel. |

## C · Scroll wheel (10 components)

| Component | Part name | Material | Purpose |
|---|---|---|---|
| Middle-click switch | `mid.switch` | Tact switch, LCP | Pressed by the wheel module on a middle click. |
| Middle-click actuator | `mid.switch.stem` | POM | Transfers wheel press to the middle switch. |
| Scroll wheel | `wheel.tire` | Rubber over a PC core, knurled | Textured wheel; 24 detents per turn assumed. |
| Wheel hub | `wheel.hub.L` | Zinc alloy | Adds rotational inertia and centres the tire on the axle. |
| Wheel axle | `wheel.axle.L` | Stainless steel | Turns in the brackets; drives the encoder. |
| Wheel bracket | `wheel.bracket.L` | PC | Supports the axle above the board; pivots for middle click. |
| Wheel hub | `wheel.hub.R` | Zinc alloy | Adds rotational inertia and centres the tire on the axle. |
| Wheel axle | `wheel.axle.R` | Stainless steel | Turns in the brackets; drives the encoder. |
| Wheel bracket | `wheel.bracket.R` | PC | Supports the axle above the board; pivots for middle click. |
| Incremental rotary encoder | `wheel.encoder` | Mechanical encoder, 24 pulses per turn | Converts wheel rotation into quadrature pulses for the SoC. |

## D · Optical tracking sensor (4 components)

| Component | Part name | Material | Purpose |
|---|---|---|---|
| Optical lens | `lens` | Optical-grade PC | Light pipe guides LED light to the surface; imaging lens focuses the lit texture onto the sensor. |
| Imaging lens element | `lens.dome` | Optical-grade PC | Imaging surface of the lens, centred on the sensor array. |
| Optical sensor IC | `sensor` | Image sensor + DSP in a clear-window package | Captures surface images thousands of times a second and estimates displacement (Δx, Δy). |
| Illumination LED | `sensor.led` | IR / red LED | Lights the surface at a grazing angle through the lens light pipe. |

## E · Main PCB & electronics (18 components)

| Component | Part name | Material | Purpose |
|---|---|---|---|
| Side flex interconnect | `side.flex` | Polyimide flex, copper | Connects the side-button board to the main board. |
| PCB standoff | `base.standoff.L` | Glass-filled PC | Holds the main board 1 mm above the base. |
| PCB standoff | `base.standoff.R` | Glass-filled PC | Holds the main board 1 mm above the base. |
| PCB standoff | `base.standoff.T` | Glass-filled PC | Holds the main board 1 mm above the base. |
| Main PCB | `pcb` | FR-4, 4-layer, 1.6 mm | Carries the SoC, sensor, power stage, switches, USB-C and antenna feed. |
| Crystal oscillator | `crystal` | 32 MHz, 2.0 × 1.6 mm metal can | Reference clock for the radio and MCU. |
| NOR flash memory | `flash` | SON-8 | Stores firmware and on-board profiles. |
| Passive component | `passive.c1` | 0603 MLCC / resistor | Decoupling and bias. |
| Passive component | `passive.c2` | 0603 MLCC / resistor | Decoupling and bias. |
| Passive component | `passive.c3` | 0603 MLCC / resistor | Decoupling and bias. |
| Passive component | `passive.c4` | 0603 MLCC / resistor | Decoupling and bias. |
| Passive component | `passive.c5` | 0603 MLCC / resistor | Decoupling and bias. |
| Passive component | `passive.r1` | 0603 MLCC / resistor | Decoupling and bias. |
| Passive component | `passive.c6` | 0603 MLCC / resistor | Decoupling and bias. |
| DPI tact switch | `dpi.switch` | Tact switch | Under the DPI stem. |
| PCB screw | `pcb.screw.L` | Steel M1.4 | Fixes the board to its standoffs. |
| PCB screw | `pcb.screw.R` | Steel M1.4 | Fixes the board to its standoffs. |
| PCB screw | `pcb.screw.T` | Steel M1.4 | Fixes the board to its standoffs. |

## F · Wireless communication (8 components)

| Component | Part name | Material | Purpose |
|---|---|---|---|
| Wireless SoC / MCU | `soc` | QFN 6 × 6 mm | Reads the sensor and switches, runs firmware and the 2.4 GHz radio. |
| RF matching component | `passive.rf.l1` | 0603 L/C | Matching network between the SoC's RF port and the antenna. |
| RF matching component | `passive.rf.c1` | 0603 L/C | Matching network between the SoC's RF port and the antenna. |
| RF matching component | `passive.rf.c2` | 0603 L/C | Matching network between the SoC's RF port and the antenna. |
| 2.4 GHz antenna | `antenna.radiator` | Stamped copper alloy, inverted-F | Radiator at the tail, kept clear of the battery and away from the hand's palm contact. |
| 2.4 GHz antenna | `antenna.arm` | Stamped copper alloy, inverted-F | Radiator at the tail, kept clear of the battery and away from the hand's palm contact. |
| USB receiver body | `dongle.body` | PC/ABS | Separate 2.4 GHz receiver (shown beside the mouse). |
| USB receiver plug | `dongle.plug` | Steel USB-A shell | Plugs into the PC; holds the receiver's radio. |

## G · Battery & power (10 components)

| Component | Part name | Material | Purpose |
|---|---|---|---|
| Power-management IC | `pmic` | QFN 4 × 4 mm | Li-Po charger with power-path control and fuel gauging. |
| Voltage regulator (a) | `ldo.a` | LDO, 2 × 2 mm | Low-noise rail for the sensor or the SoC. |
| Voltage regulator (b) | `ldo.b` | LDO, 2 × 2 mm | Low-noise rail for the sensor or the SoC. |
| USB-C receptacle | `usbc` | Stainless steel shell, mid-mount | Charging and wired data port at the nose. |
| Battery connector | `batt.conn` | LCP, 2-pin 1.0 mm pitch | Plugs the battery leads into the board. |
| Battery rail | `batt.rail.L` | PC | Carrier rails that hold the battery above the board. |
| Battery rail | `batt.rail.R` | PC | Carrier rails that hold the battery above the board. |
| Li-Po battery | `battery` | 3.7 V, 300 mAh pouch cell | Rechargeable energy store; placed low and central for balance. |
| Battery protection board | `battery.pcm` | FR-4 with protection IC + MOSFETs | Over-charge, over-discharge and short-circuit protection. |
| Battery leads | `battery.lead.red` | Silicone-insulated copper | Battery to board. |

## H · Base & tracking interface (16 components)

| Component | Part name | Material | Purpose |
|---|---|---|---|
| Bottom housing (front) | `base.front` | Glass-filled PC | Lower structural housing; the four pieces frame the sensor aperture. |
| Bottom housing (rear) | `base.rear` | Glass-filled PC | Lower structural housing; the four pieces frame the sensor aperture. |
| Bottom housing (left) | `base.left` | Glass-filled PC | Lower structural housing; the four pieces frame the sensor aperture. |
| Bottom housing (right) | `base.right` | Glass-filled PC | Lower structural housing; the four pieces frame the sensor aperture. |
| Base stiffening rib | `base.rib.lat` | Glass-filled PC | Stiffens the base and supports the board between standoffs. |
| Base stiffening rib | `base.rib.front` | Glass-filled PC | Stiffens the base and supports the board between standoffs. |
| Base stiffening rib | `base.rib.spine.a` | Glass-filled PC | Stiffens the base and supports the board between standoffs. |
| Base stiffening rib | `base.rib.spine.b` | Glass-filled PC | Stiffens the base and supports the board between standoffs. |
| PTFE glide foot | `foot.front` | Virgin PTFE, 0.8 mm, adhesive-backed | Low-friction skate; sets glide feel and the sensor's height above the surface. |
| PTFE glide foot | `foot.rear` | Virgin PTFE, 0.8 mm, adhesive-backed | Low-friction skate; sets glide feel and the sensor's height above the surface. |
| PTFE glide foot | `foot.left` | Virgin PTFE, 0.8 mm, adhesive-backed | Low-friction skate; sets glide feel and the sensor's height above the surface. |
| PTFE glide foot | `foot.right` | Virgin PTFE, 0.8 mm, adhesive-backed | Low-friction skate; sets glide feel and the sensor's height above the surface. |
| Shell screw | `screw.LF` | Steel M1.6, zinc-plated | Clamps the base to the top shell through the bosses. |
| Shell screw | `screw.RF` | Steel M1.6, zinc-plated | Clamps the base to the top shell through the bosses. |
| Shell screw | `screw.LR` | Steel M1.6, zinc-plated | Clamps the base to the top shell through the bosses. |
| Shell screw | `screw.RR` | Steel M1.6, zinc-plated | Clamps the base to the top shell through the bosses. |
