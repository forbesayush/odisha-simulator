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
- **Source Repository:** [github.com/forbesayush/odisha-simulator](https://github.com/forbesayush/odisha-simulator) (Branch `main`, Commit `bc0b382`)
- **Single-File Deliverables (Synchronized Byte-for-Byte):**
  - [index.html](file:///C:/Users/Ayush%20Chatterjee/Downloads/index.html) (1,109,996 bytes, 100% offline self-contained)
  - [odisha-landing.html](file:///C:/Users/Ayush%20Chatterjee/Downloads/odisha-landing.html) (38,842 bytes, responsive Tailwind showcase portal)
  - [namma-metro.html](file:///C:/Users/Ayush%20Chatterjee/Downloads/namma-metro.html) (27,458 bytes, 100% offline self-contained)
  - [odisha-simulator/index.html](file:///C:/Users/Ayush%20Chatterjee/.gemini/antigravity/scratch/odisha-simulator/index.html)
  - [odisha-simulator/odisha-landing.html](file:///C:/Users/Ayush%20Chatterjee/.gemini/antigravity/scratch/odisha-simulator/odisha-landing.html)
  - [odisha-simulator/namma-metro.html](file:///C:/Users/Ayush%20Chatterjee/.gemini/antigravity/scratch/odisha-simulator/namma-metro.html)
  - [odisha-simulator/texture-urls.txt](file:///C:/Users/Ayush%20Chatterjee/.gemini/antigravity/scratch/odisha-simulator/texture-urls.txt)
  - [odisha-simulator/download-textures.sh](file:///C:/Users/Ayush%20Chatterjee/.gemini/antigravity/scratch/odisha-simulator/download-textures.sh)
  - [odisha-simulator/download-textures.js](file:///C:/Users/Ayush%20Chatterjee/.gemini/antigravity/scratch/odisha-simulator/download-textures.js)
  - **SHA-256 Hash (`index.html`):** `9daf8d0c584e0c6429a636f646ddaa314e45df92b0f00a8c6e1d2861f7457e39`

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

## 5. Verification Suite

| Test Suite | Target | Status |
|---|---|---|
| `verify_dl_ids.js` | All 62 required DOM Element IDs | **PASS (62 / 62, 100%)** |
| `test_dl_runtime.js` | Headless Three.js Node VM simulation | **PASS (0 errors)** |
| `verify_checklist.js` | 8 historical bugfix checklist assertions | **PASS (8 / 8, 100%)** |
| `verify_courier.js` | Courier contracts, HUD cards, modal triggers | **PASS (100%)** |
| `test_tex_system.js` | TEX materials, fallback maps, textures | **PASS (100%)** |
| `download-textures.sh` | Bash one-click texture downloader | **PASS (76 / 76 maps, 44MB)** |
| `sync_all_deliverables.js` | 4 deliverables byte-for-byte synchronization | **PASS (c825a78... identical)** |
