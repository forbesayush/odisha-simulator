# Product Requirements Document (PRD)
## ODISHA SIMULATOR: AMA GADI, AMA RASTA (3D Director’s Cut)
**A 3D Hyper-Local Urban Satire & 1v1 Street Combat Game**

---

## 1. Executive Summary & Vision

- **Product Name:** *Odisha Simulator: Ama Gadi, Ama Rasta (3D Director's Cut)*
- **Platforms:** Web (Desktop & Mobile, touch + keyboard supported), hosted directly via **GitHub Pages**.
- **Tech Stack:** Vanilla JavaScript + Three.js (r160+ via CDN/Import Maps), CSS3, Web Audio API (Spatial 3D Audio), HTML5 Canvas. Zero external build tooling required for instant static hosting.
- **Inspirations:**
  - **FightKaro.com:** Dynamic 1v1 fighting game camera, cinematic clash animations, impact shockwaves, dialogue interruptions, combo meters, HP bars.
  - **Benglooru.com:** Deeply satirical hyper-local urban culture, localized idioms, comedic encounters, branching dialogue choices, atmospheric weather.
- **Theme:** Bhubaneswar & Cuttack ("The Twin Cities") street life, featuring the complete uncut 7-act dramatic screenplay brought to life in full interactive **3D low-poly / cel-shaded retro aesthetic**.

---

## 2. Core Player Fantasy & Pillars

1. **Authentic Hyper-Local Satire:** Everything from the *THAK-THUNG* of Bidyadhar Mausa's Dahibara ladle to Tookna Bhai's acoustic Chuna slaps, Patia bachelor rental interrogation, and the ₹350 Pink Vikram Auto surge at Master Canteen.
2. **FightKaro 3D Showdown Engine:** Every act climaxes in a 3D confrontation with animated boss models, cinematic attack cameras, floating 3D hit numbers, and interactive retorts.
3. **Instant Zero-Friction Web Delivery:** Single or lightweight modular files running directly in any modern mobile or desktop browser via GitHub Pages, with no 500MB asset downloads or Node.js server dependencies.

---

## 3. Gameplay Mechanics & Systems Architecture

### 3.1 Player Character & Core Stats
The player navigates the Twin Cities across the timeline of a single chaotic day (9:15 AM to 10:30 PM).

- **Izzat (HP: 0-100):** Depleted by opponent insults, traffic honks, surge charges, and scam attacks. Reaching 0 results in the "Public Defeat / Loss of Face" game over screen.
- **Petara (Stamina: 0-100):** Fuels offensive dialogue retorts and special moves. Restored through defensive plays, drinking Torani water, or sipping Omfed ginger tea.
- **BP (Blood Pressure: 0-100):** Rises when provoked by traffic or absurd demands. At 90+ BP, player enters **"Hypertensive Rage"** (deals 1.5x damage but takes 1.2x damage).
- **Khuchura (Rupees: ₹):** Used to buy emergency refreshments, bribe brokers/conductors, or pay final auto fares.
- **Jhola (Inventory):** Stores physical 3D items acquired across acts (*Melody Chocolates, 5kg Nainital Aloo, MS-Paint Offer Letter, Brass Dona Token*).

### 3.2 3D Combat Arena & Camera Choreography (FightKaro Style)
- **Narrative Exploration Cam:** Slow cinematic panning showcasing the 3D environment (Flyover, Banyan Tree, Haat).
- **1v1 Duel Cam:** Dynamic fighting perspective with slight perspective angle, depth of field, and impact snap-zooms.
- **Finisher Cam:** Slow-motion orbit when delivering the final verbal blow or throwing the 5kg Nainital Aloo.

---

## 4. Act-by-Act 3D Visual & Level Specifications

| Act | Time | Location | 3D Environment Features | Boss Model & Props | Key Audio Cue |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Act I** | 9:15 AM | Rasulgarh Flyover | Elevated concrete overpass, gridlocked Mo Bus, coal truck emitting particle smoke, stray bulls | **Bunty Jena**: Neon-green wheel KTM, bleached hair, visor spit animation | KTM revs, Mo Bus Route 20 air horn |
| **Act II** | 10:30 AM | Saheed Nagar | Massive procedural Banyan tree with canopy foliage, rusted Hero Jet cycle, steaming Handi | **Siddharth Mohapatra**: Tech bro with AirPods, artisanal ketchup bottle | *THAK-THAK-THUNG!* Metallic ladle clangs |
| **Act III** | 1:15 PM | Patia By-Lane | Neon-green G+2 house, reflective water puddles, rusted iron gate with "TO-LET" sign | **Prafulla Uncle & Ramesh**: Lungi + vest, oversized key ring with 62 keys | Iron gate squeak, key clinking |
| **Act IV** | 5:30 PM | Janpath Omfed Booth | Glowing green-white booth, hanging chip strips, red plastic stools, twilight ambient lighting | **Tookna Bhai**: Animated hands smearing Chuna and folding betel leaves | *PHAT-PHAT-CHHAAK!* Acoustic palm slaps |
| **Act V** | 7:00 PM | Jaydev Vihar Cabin | 10x10 office, peeling paint, dripping AC unit with dripping water particles into yellow bucket | **HR Director Subrat**: Shiny blazer, fake TCS-Infosys MS-Paint letter | Water drops, wheezing AC, GPay ping |
| **Act VI** | 8:30 PM | Unit-1 Haat | Bruised purple cyclonic skybox, swaying tarpaulins, rain streaks, potato crates, flashlights | **Barabati Aloo Syndicate & Aunties**: Sambalpuri saree models, 5kg potato sack | Kalabaisakhi thunder, howling wind |
| **Act VII** | 10:30 PM | Master Canteen | 3D Stone Warrior Horse monument, wet road reflections, neon station signs, floodwaters | **Pink Vikram Auto Anna**: Pink Vikram 3D model, idling engine, glowing headlamps | Vikram dual-tone horn, rain roar |

---

## 5. Technical Architecture (Three.js WebGL Engine)

- **Target Frame Rate:** Solid 60 FPS on mid-range Android/iOS mobile devices and desktop browsers.
- **Draw Call Budget:** Under 60 draw calls per scene via geometry merging and shared canvas materials.
- **Asset Footprint:** 100% procedural low-poly geometry & mathematical textures generated via Canvas2D; zero external 50MB `.gltf` model downloads required.
- **Fallbacks:** Graceful degradation on older devices (disabling dynamic shadows/bloom while retaining 3D models).

---

## 6. Milestones & Implementation Roadmap

1. **Phase 1 (PRD & Visual Engine Scaffolding):**
   - Approve PRD and architectural blueprint.
   - Scaffold Three.js rendering viewport with responsive aspect ratio, lighting rig, and CRT shader overlay.
2. **Phase 2 (Procedural 3D Environment & Vehicle Models):**
   - Build procedural 3D models: Pink Vikram Auto, Hero Jet cycle with Handi, Mo Bus, Banyan Tree, Stone Horse.
   - Implement dynamic environment skybox (Daylight -> Golden Hour -> Bruised Purple Cyclone -> Sodium Night).
3. **Phase 3 (FightKaro 3D Camera & Combat System):**
   - Implement dynamic camera transitions (Orbit -> 1v1 Action Angle -> Finisher Zoom).
   - Hook up 3D billboard combat text, damage numbers, and particle shockwaves.
4. **Phase 4 (7-Act Integration & Dynamic Endings):**
   - Wire all 7 screenplay acts into the 3D scene switchers.
   - Implement 3D spatial Web Audio positioning.
   - Final polish of UI overlays, mobile touch controls, and GitHub Pages live verification.
