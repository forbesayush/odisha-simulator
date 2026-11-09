# Product Requirements Document (PRD)
## AMARA ODISHA ADVENTURES — BHUBANESWAR COURIER & GRAND OPEN WORLD (ଆମ ଓଡ଼ିଶା)
### A 3D Open-World Urban Adventure, Modern Architecture, Rebuilt Character Models & Texture System

---

## 1. Executive Summary & Delivery Scope

- **Core Gameplay Mechanic:** **Bhubaneswar Urban Courier Simulation (The Five Systems)**
  - Accept delivery contracts across the city ➔ Ride scooty/auto through traffic & weather ➔ Guard cargo integrity against collisions ➔ Beat the countdown timer ➔ Earn Cash & Reputation ➔ Unlock new sectors and the syndicate finale.
- **One-Click Texture Download Scripts & 76 CC0 1K Maps:**
  - Automated Bash download script (`download-textures.sh`) with retries, folder routing, and intelligent fallback to canonical Poly Haven texture slugs.
  - Cross-platform Node.js download script (`download-textures.js`) for Windows/Mac/Linux environments.
  - All 19 texture sets (76 maps: `albedo.jpg`, `normal.jpg`, `roughness.jpg`, `ao.jpg`) downloaded and committed directly to `textures/`.
  - Dual `.jpg` and `.webp` texture loaders (`loadPBR`, `initTEX`, `texOrProc`) with automatic graceful fallback to procedural canvas textures, ensuring 100% offline standalone capability.
- **Centralized `TEX` Texture Allocation System:**
  - One unified `TEX` object mapping every surface in the game (`asphalt`, `concrete`, `cream`, `sandstone`, `glass`, `wood`, `bamboo`, `terracotta`, `fabricRed`, `fabricWhite`, `fabricBlue`, `floorInterior`, `plain`).
  - Automatic fallback to high-resolution procedural canvas textures if PBR files are missing, ensuring 100% offline standalone capability.
  - Shortcut mapping layer (`TEXTURES.road()`, `TEXTURES.buildingWall()`, `TEXTURES.glassFacade()`, etc.).
- **Modern Contemporary Indian Architecture (`makeModernBuilding`):**
  - Clean contemporary styles: Glass IT Hubs, Sandstone Brick Enclaves, and Cream Metro Plazas with recessed entrance frames, dark glass doors, chrome handles, upper-floor windows with awnings, rooftop parapets, Sintex water tanks, and outdoor AC compressors.
- **Refined 3D Odia Props (Gaps A–F):**
  - **`makeOdiaCottage` (Gap A):** Circular mud wall with Saura mural texture, bamboo eaves ring, conical thatched roof, terracotta finial pot, teak door, and bamboo porch posts.
  - **`makeOldTownBrickHouse` (Gap B):** Red brick residential duplex with terracotta barrel-tile roof cap, ground-floor entry porch, 2 upper-floor balconies with iron railings, and wooden window shutters.
  - **`makeColonialBungalow` (Gap C):** Raj Bhavan style white heritage bungalow with hipped clay-tile roof, portico supported by 4 classical round columns, lintel slab, front steps, arched door, tall windows, and chimney stack.
  - **`makeInfocityGlassTower` (Gap D):** 26-meter IT tower with reflective blue curtain walls, structural corner fins, double-height lobby, rooftop mechanical box, antenna mast, and illuminated red aircraft-warning beacon.
  - **`makeTempleMatha` (Gap E):** Red sandstone monastic cloister with 3-tiered Pida Deula stepped roof, gold Kalasa finial with disc, arched wooden entrance, and carved sandstone pilasters.
  - **4 Odisha Street Stalls (Gap F):**
    - **Pahala Chhena Poda Cart:** Square baking trays, transparent glass display cloche, banner, and corrugated tin awning.
    - **Sambalpuri Handloom Saree Kiosk:** 3 hanging vibrant Ikat cloth panels, overhead striped awning, bamboo support frame, and hand-painted banner.
    - **Tender Coconut (Daba) Cart:** Green coconut pyramid, wooden spoked wheels, chopping block with machete knife, and red straw dispenser jar.
    - **Spiced Chai Tapri:** Boiling samovar kettle on kerosene stove, counter row of terracotta kulhad cups, corrugated tin canopy, and bamboo posts.
- **Rebuilt Moveable Character Models (`makeCharacterFigure`):**
  - Anatomical overhaul: 2-stage tapered torso (belly + chest), shirt collar, white button placket, neck cylinder, tapered skull and jaw, dual-tone eyes with brows, nose, ears, mustache, and 7 headwear/hairstyle variants (`police_cap`, `aunty_bun`, `priest_tilak`, `uncle_bald`, `cool_shades`, `vendor_band`, `stylish_hair`).
  - Shoulder-pivot arms, gold wristwatches, and hip-pivot legs with dual-tone shoes.
- **Enterable Interior System (`makeInteriorRoom` & `makeEnterableInterior`):**
  - Interior room system: Checkered terracotta floor tiles (`TEX.floorInterior`), whitewashed walls, rotating 3-blade ceiling fan (`interiorFan`), student cot with Sambalpuri Ikat bedsheet, teak agreement desk with non-judicial stamp paper, and dubious sub-meter box.
- **Live Deployment:** [https://forbesayush.github.io/odisha-simulator/](https://forbesayush.github.io/odisha-simulator/)
- **Live Landing Page:** [https://forbesayush.github.io/odisha-simulator/odisha-landing.html](https://forbesayush.github.io/odisha-simulator/odisha-landing.html)
- **Source Repository:** [github.com/forbesayush/odisha-simulator](https://github.com/forbesayush/odisha-simulator) (Branch `main`, Commit `9f144b2`)
- **Single-File Deliverables (Synchronized Byte-for-Byte):**
  - [index.html](file:///C:/Users/Ayush%20Chatterjee/Downloads/index.html) (1,118,390 bytes, 100% offline self-contained)
  - [odisha-landing.html](file:///C:/Users/Ayush%20Chatterjee/Downloads/odisha-landing.html) (38,842 bytes, responsive Tailwind showcase portal)
  - [namma-metro.html](file:///C:/Users/Ayush%20Chatterjee/Downloads/namma-metro.html) (27,458 bytes, 100% offline self-contained)
  - [odisha-simulator/index.html](file:///C:/Users/Ayush%20Chatterjee/.gemini/antigravity/scratch/odisha-simulator/index.html)
  - [odisha-simulator/odisha-landing.html](file:///C:/Users/Ayush%20Chatterjee/.gemini/antigravity/scratch/odisha-simulator/odisha-landing.html)
  - [odisha-simulator/namma-metro.html](file:///C:/Users/Ayush%20Chatterjee/.gemini/antigravity/scratch/odisha-simulator/namma-metro.html)
  - [odisha-simulator/texture-urls.txt](file:///C:/Users/Ayush%20Chatterjee/.gemini/antigravity/scratch/odisha-simulator/texture-urls.txt)
  - [odisha-simulator/download-textures.sh](file:///C:/Users/Ayush%20Chatterjee/.gemini/antigravity/scratch/odisha-simulator/download-textures.sh)
  - [odisha-simulator/download-textures.js](file:///C:/Users/Ayush%20Chatterjee/.gemini/antigravity/scratch/odisha-simulator/download-textures.js)
  - **SHA-256 Hash (`index.html`):** `91bb0e73827888a63b0ea368590b34384ef738a07ab8421863dc9e23866b12d6`

---

## 2. Centralized `TEX` & `TEXTURES` Architecture

```javascript
window.TEX = {
  asphalt:       (rx, ry) => mat('asphalt',        { rx, ry, rough: 0.9,  metal: 0.05 }),
  concrete:      (rx, ry) => mat('concrete',       { rx, ry, rough: 0.88, metal: 0.02 }),
  cream:         (rx, ry) => mat('cream_wall',     { rx, ry, rough: 0.9,  metal: 0.02 }),
  sandstone:     (rx, ry) => mat('sandstone',      { rx, ry, rough: 0.85, metal: 0.03 }),
  glass:         (rx, ry) => mat('glass',          { rx, ry, rough: 0.15, metal: 0.75, color: 0xb0d6f0 }),
  wood:          (rx, ry) => mat('wood',           { rx, ry, rough: 0.8,  metal: 0.02 }),
  bamboo:        (rx, ry) => mat('bamboo',         { rx, ry, rough: 0.88, metal: 0.01 }),
  terracotta:    (rx, ry) => mat('terracotta',     { rx, ry, rough: 0.9,  metal: 0.02 }),
  fabricRed:     (rx, ry) => mat('fabric_red',     { rx, ry, rough: 0.9,  metal: 0 }),
  fabricWhite:   (rx, ry) => mat('fabric_white',   { rx, ry, rough: 0.9,  metal: 0 }),
  fabricBlue:    (rx, ry) => mat('fabric_blue',    { rx, ry, rough: 0.9,  metal: 0 }),
  floorInterior: (rx, ry) => mat('floor_interior', { rx, ry, rough: 0.65, metal: 0.05 }),
  plain:         (color, rough, metal) => new THREE.MeshStandardMaterial({ color, roughness: rough, metalness: metal })
};
```

### 2.1 Vehicle Texture Factory & Upgraded Building Materials (`BM`)

- **Vehicle Texture Factory:**
  - `vehicleChromeMat()`: Maps `metal_chrome` (Poly Haven `metal_plate`) with roughness 0.2, metalness 0.85, and fallback gradient canvas.
  - `vehicleTyreMat()`: Maps `rubber_tyre` (ambientCG `Rubber004`) with roughness 0.9, 3x3 repeat, and noise canvas fallback.
  - `vehicleLeatherMat(tint)`: Maps `leather_seat` (Poly Haven `leather_red_02`) with roughness 0.75 and weathered leather canvas fallback.
  - `vehicleBusBodyMat(baseColor)`: Maps `bus_body` (ambientCG `Metal032`) with metallic sheen, 0.35 roughness, and Mo Bus green gradient fallback.
  - `autoFrontHoodMat()`: High-definition 1024x512 procedural canvas with authentic "FOR HIRE", "OD 02", "KALIA BHAI", and emerald "LPG" emblem.
  - `autoSidePanelMat()`: High-definition 1024x256 procedural canvas with Odia calligraphy (`ଭୁବନେଶ୍ୱର • ଫାଷ୍ଟ ଏୟାର`) and gold English subtitle.
  - `autoSeatMat()`: Textured brown leather auto seats using `vehicleLeatherMat()`.
  - `autoWheelMat()`: Heavy-duty rubber auto wheels using `vehicleTyreMat()`.
  - `scootyBodyMat(color)`: Polished metal panels using `metal_chrome` with user-selected vehicle hue.

- **Upgraded Building Materials (`BM`):**
  - `BM.mudWall()`: Maps `mud_wall` (Poly Haven `clay_plaster`) with Saura mural fallback.
  - `BM.sandstoneCarved()`: Maps `sandstone_carved` (Poly Haven `white_sandstone_bricks`) with red sandstone fallback.
  - `BM.caveRock()`: Maps `cave_rock` (Poly Haven `cliff_side`) with rock roughness fallback.
  - `BM.concretePainted()`: Maps `concrete_painted` (Poly Haven `concrete_wall_008`) with plaster fallback.
  - `BM.whiteMarble()`: Maps `white_marble` (Poly Haven `marble_01`) with low roughness for Dhauli Stupa.


---

## 3. Rebuilt Moveable Character Models (`makeCharacterFigure`)

1. **Torso & Pelvis Anatomy:**
   - Dual-box stacked torso with tapered lower belly and broad chest.
   - Distinct shirt collar and vertical button placket.
   - Traditional Sambalpuri Gamucha with dynamic trailing cloth group (`gamuchaTail`).
   - Female NPC Saree drape overlay option (`cfg.isSaree`).
   - Detailed traveler backpack with sleeping bag, water bottle, and double shoulder straps.
   - Khaki police epaulettes with brass stars for traffic cops.

2. **Facial & Cranial Sculpting:**
   - 3D tapered skull and contoured jaw.
   - White sclera, dark brown iris, and defined eyebrows.
   - Anatomical nose, dual ear pinnae, and full Odia mustache option.
   - Contextual headwear: Police peaked cap with badge, classic Aunty hair bun with jasmine garland, temple Priest tilak and choti, bald Uncle with gold spectacles, youth cool dark sunglasses, vendor headcloth band, and stylish modern parted hair.

3. **Limb Articulation & Rigs:**
   - Upper and lower arm segments with shoulder rotation pivots.
   - Gold analog watch with bezel on left wrist.
   - Upper and lower leg segments with hip pivots for walk cycles.
   - Dual-tone leather shoes with white rubber sole trim.
   - Standardized rig output: `{ group, root, headGroup, armL, armR, legL, legR, gamuchaTail }`.

---

## 4. Modern Architecture Generator (`makeModernBuilding`)

- **Contemporary Style Presets:**
  - `'glass'`: High-rise cyber towers with reflective blue curtain walls and spandrel panels.
  - `'brick'`: Red-sandstone institutional blocks with decorative hanging fabric banners.
  - `'cream'`: Warm ochre/cream metropolitan plazas with concrete architectural trim.
- **Architectural Detailing:**
  - Recessed ground-floor entrance frames (`TEX.concrete`) with dark double glass doors and chrome push-bars.
  - Upper-floor windows framed with structural mullions and cantilevered sunshade eyebrows/awnings.
  - Rooftop parapets with mechanical equipment penthouses, black corrugated Sintex water storage tanks, and outdoor multi-split AC heat-pump units with revolving fan grills.

---

## 5. Universal Interactive Scene Runner & Expansion Cutscenes (Scenes 15–26)

- **Universal Interactive Scene Runner (`runInteractiveScene`, `showSceneChoices`, `executeSceneChoice`):**
  - Dramatic dynamic cinematic camera swoops (`camStart`, `camLook`, `camEnd`) with trilingual voice playback.
  - Multi-choice decision modals displaying dynamic reward tags (`+XP`, `±₹`, `±REP`).
  - Highest-XP choice dynamically highlighted with Emerald Green background (`var(--vivid-green)`).
  - Outcome voice audio playback, SFX cues (hero chime, coin sound, or error buzz), subtitle cards, and persistent state tracking via `state.sceneChoices`.
  - Non-intrusive proximity detection in `checkNpcInteraction(pos)` with floating `[E]` interaction bubbles.

- **The 12 Interactive Expansion Scenarios:**
  1. **Scene 15: Babu Lal Uncle's Meter Scam (`meterScam`)** — Call police (+200 XP, +₹150, +8 REP) / Inform Kanta Aunty / Accept bribe (-10 REP) / Ignore.
  2. **Scene 16: Kanta Aunty's 9 PM Curfew Lockout (`curfew`)** — Plead for 5 minutes (+50 XP, +2 REP) / Scale the wall (risky, -5 REP) / Scooty night ride / Sleep outside.
  3. **Scene 17: Auto Stand 4-Way Fare Bidding War (`haggle`)** — Pick modern auto (+120 XP) / Ride with Kalia Bhai (+150 XP, +5 REP) / Walk away / Counter ₹40.
  4. **Scene 18: Pahala Rasagola Box Heist (`rasagolaHeist` / `heist`)** — 3 Branching Choices:
     - *Choice 1 (Heroic):* 🪔 Call temple priest (+200 XP, +8 REP) — alerts the priest to reclaim consecrated temple prasad.
     - *Choice 2 (Action):* 🥊 Chase & tackle thief (+160 XP, +₹50, -10 HP, +5 REP) — sprint and physically intercept the thief.
     - *Choice 3 (Diplomatic):* 🤝 Buy sweets & negotiate (+120 XP, -₹100, +6 REP) — purchase a fresh sweet box to resolve conflict with empathy.
  5. **Scene 19: Three Sacred Cows Chakra Jam (`cowJam`)** — Pranam all three (+150 XP, +6 REP) / Honk (-5 REP) / Off-road detour (+60 XP) / Wait patiently.
  6. **Scene 20: Ekamra Haat Artisan Strike (`pattachitra`)** — Build online storefront (+250 XP, +10 REP) / Buy ₹5,000 art (+150 XP) / Join strike / Walk away.
  7. **Scene 21: Khandagiri Monkey Camera Heist (`monkey`)** — Offer banana (+120 XP, +3 REP) / Scale cliff (+80 XP) / Guide's help (+150 XP) / Forfeit camera (-₹800).
  8. **Scene 22: Monsoon Flooded Underpass (`flood`)** — Push auto (+180 XP, +6 REP) / Tow truck (+40 XP) / Swim across (+200 XP) / Wait.
  9. **Scene 23: Chai Tapri Gossip Standoff (`chaiGossip`)** — Promote Dhabaleswar chai (+150 XP, +5 REP) / Boycott café (+80 XP) / Try ₹200 latte / Skip.
  10. **Scene 24: Raj Mahal Challan Standoff (`challan`)** — Volunteer 30 min traffic duty (+250 XP, +10 REP) / Pay ₹500 fine / Bribe (-15 REP) / Flee (-25 REP).
  11. **Scene 25: Pahala Wedding Sweets Emergency (`wedding`)** — High-speed sprint (+180 XP) / Old Cuttack bypass (+220 XP, +8 REP) / Odia brother's oath (+150 XP) / Decline (-20 REP).
  12. **Scene 26: Old Town Haunted Haveli (`ghost`)** — Torchlight vigil (+300 XP, +12 REP) / Call SI Panda (+60 XP) / Temple priest sanctification (+180 XP) / Flee (-10 REP).

---

## 6. Verification Suite & Release Manifest

### Build Version
**4.0.0-vehicle-texture-upgrade** — High-fidelity 2048px vehicle textures with live Mo Bus LED material updates.

| Deliverable File Path | File Size | SHA-256 Checksum | Sync Status |
|---|---|---|---|
| `index.html` | 1,183,728 bytes | `6137f6de5e5d46b993b71e56c533708175bee77f2bcfd69efc89d583b7afc6ea` | **PRIMARY** |
| `odisha-landing.html` | 63,551 bytes | `eb857991ad4502ae9c74248d54186d824683b5f183872499c45fe4f1aa31babb` | **PRIMARY** |
| `namma-metro.html` | 26,338 bytes | `8a95ff30ddea3808f995109096d6f8beca62e721a86099c8a61c80a1d9426fb5` | **PRIMARY** |
| `texture-urls.txt` | 13,872 bytes | `87e5c378edb37b7f90ce8d9db72ca67c19ccae245ecd47bd037f4ea5ddd550be` | **PRIMARY** |
| `download-textures.sh` | 6,022 bytes | `f194ff3e91fecc1578dadc6beb7c7cdb846113ada60e8a388d9b75cfb03f8c44` | **PRIMARY** |
| `download-textures.js` | 5,601 bytes | `0ef1f693fd5fd62e7b542a1c79b1cd3c4244168550031e55318f205412930063` | **PRIMARY** |
| `vehicles-texture-v4.js` | 5,480 bytes | `0def8b577019a71af1cdc95bec88cc3942b49d8a5ca53f8f977f9f9b1ad56d47` | **PRIMARY** |
| `map-streaming.js` | 3,931 bytes | `9ed433b16064d5fc4ea684915cb2594c2dc0f1e1044a3af900b4858d0aecb959` | **PRIMARY** |
| `daynight-weather.js` | 2,957 bytes | `2a77f12051599fce3eb8e2cea8e2742127afba367c72f98df560985b66c389fd` | **PRIMARY** |

Generated by `node verify_release.js`; the machine-readable output is stored in `release-manifest.json`.

### New Model Changes

| Component | Result |
|---|---|
| `makeAuto()` | Bajaj RE green/yellow livery with OD-02 plate, KALIA BHAI nameplate, LPG emblem, twin headlamp geometry, chrome ornament, Odia side panel, and roof interior texture |
| `makeBus()` | Mo Bus blue/white/green livery with side panel texture, LED destination board, and CRUT branding |
| Texture factories | `moBusBodyTex`, `moBusSidePanelTex`, `moBusLedTex`, `bajajAutoHoodTex`, `bajajAutoSideTex`, `bajajAutoRoofInteriorTex` |

### Texture Overhaul

The eight core surface factories now generate 1024×1024 procedural maps: `ground`, `asphalt`, `pavement`, `facade`, `laterite`, `roof`, `glassTex`, and `awningTex`. Four additional offline materials are available for infrastructure and props: `rccConcreteTex`, `odiaGraniteTex`, `rustyTinTex`, and `pattachitraTex`. Building material factories use the new RCC, granite, tin, glass, terracotta, asphalt, and Pattachitra maps.

### Vehicle Texture Upgrade

`vehicles-texture-v4.js` exposes `window.ODUpgrade`, applies 2048px Bajaj RE hood and side textures, upgrades the Mo Bus destination display with an emissive LED map, and bootstraps against the existing player auto and terminal buses.

`map-streaming.js` exposes `window.ODStreaming` with 128m chunk visibility updates, static merge, instancing, and LOD helpers. The terrain is excluded from culling while player position updates drive the active 3x3 chunk neighborhood.

`daynight-weather.js` exposes `window.ODClock` with an eight-minute day cycle, interpolated sun/fog colors, sun movement, and streetlight transitions wired into the existing game tick.

### Bug Fixes Applied

| ID | Bug | Fix |
|---|---|---|
| BUG-1 | Keydown chapter-modal branch was reported as having an orphaned `if` block | Verified the current handler has balanced control flow |
| BUG-2 | Sunset/night controls could store a mode different from the renderer's normalized mode | `setWeatherMode()` now stores the normalized `norm` value |

### Test Suite Execution Matrix

| Test Suite | Target | Status |
|---|---|---|
| `npm run lint` | ESLint checks for active source and tests | **PASS** |
| `npm test` | Required DOM IDs and E-key interaction regression tests | **PASS (2 / 2)** |
| `npm run verify:models` | v2.2.0 model replacement markers | **PASS (13 / 13)** |
| `npm run verify:textures` | 1024×1024 core maps and four new material factories | **PASS (16 / 16)** |
| `npm run verify:vehicles` | v4 vehicle module wiring and 2048px texture markers | **PASS (9 / 9)** |
| `npm run verify:streaming` | v4 map streaming module wiring and helper markers | **PASS (10 / 10)** |
| `npm run verify:daynight` | v4 day/night clock wiring and lighting markers | **PASS (10 / 10)** |
| `npm run verify:release` | Deliverable presence, byte counts, and SHA-256 manifest | **PASS** |

### Verify Command

```bash
npm run verify:release
```
