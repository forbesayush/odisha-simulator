# Product Requirements Document (PRD)
## AMARA ODISHA ADVENTURES — BHUBANESWAR (ଆମ ଓଡ଼ିଶା)
### A 3D Narrative Open-World Urban Adventure, On-Foot Exploration, Auto Bargaining, Driving Missions, 12 Scripted Cutscenes & Emergent Map Explorer

---

## 1. Executive Summary & Product Vision

- **Product Name:** *Amara Odisha Adventures — Bhubaneswar (ଆମ ଓଡ଼ିଶା)*
- **Live Deployment:** [https://forbesayush.github.io/odisha-simulator/](https://forbesayush.github.io/odisha-simulator/)
- **Source Repository:** [github.com/forbesayush/odisha-simulator](https://github.com/forbesayush/odisha-simulator)
- **Target Audience:** Casual web gamers, mobile and desktop commuters, fans of Indian urban culture, retro arcade enthusiasts.
- **Reference & Inspiration:** Direct recreation of the visual, cultural, and mechanical design of **Amara Odisha Adventures (ଆମ ଓଡ଼ିଶା)** (https://odia-odyssey--8jaliw8a.preview.emergentagent.com/), featuring authentic Odia cultural life, Pattachitra aesthetics, semi-realistic textured 3D characters, spoken AI voices in Hindi and Indian English with Odia/Hindi subtitles, and emergent systemic mechanics.

---

## 2. Core Features & Experience Architecture

### 2.1 Title Screen (Pattachitra Aesthetic)
- **Visuals:** Warm Pattachitra palette (jute ochre #f5eedc, deep vermilion #b91c1c, forest green #15803d, and gold accents).
- **Audio:** Soft relaxing Indian flute and tanpura pentatonic chord synthesis via Web Audio API.
- **Language Selector:** Instant choice between **ଓଡ଼ିଆ (Odia)**, **हिंदी (Hindi)**, and **English**.
- **Action:** "Tap to Start / ଖେଳ ଆରମ୍ଭ କରନ୍ତୁ" with zero loading screen.

### 2.2 Opening Arrival Cinematic (baramunda)
- **Camera Spline:** Starts at high altitude overlooking dawn in Bhubaneswar, swoops smoothly across Janpath into Baramunda Bus Terminal as a green Mo Bus arrives.
- **Synchronized Audio & Subtitles:**
  - Announcer: *"Welcome to Baramunda Bus Terminal, Bhubaneswar! Babu has just arrived from his village to explore the capital."*
  - Babu: *"Finally reached Bhubaneswar! First let us explore Baramunda, then catch an auto to Master Canteen!"*
- **Transition:** Seamless camera lerp behind Babu, handing control over to player on foot.

### 2.3 Free Roam on Foot (Babu 3D Character)
- **3D Animated Humanoid Model:**
  - Torso wearing blue check shirt.
  - Lungi / Dhoti with red decorative border.
  - Traditional red/yellow check Gamucha draped on shoulder.
  - Articulated walking animation: legs and arms swing dynamically, torso bobs gently.
  - Vintage leather travel trunk at start.
- **Third-Person Walking Camera:** Follows smoothly with mouse/touch orbit and keyboard (W/A/S/D).
- **Baramunda Terminal District:** Inter-district bus bays, idling Mo Bus, palm trees, street shops with Odia signboards, and wandering pedestrians.

### 2.4 Baramunda Auto Stand Dialogue & Bargaining
- **NPC Encounter:** Auto driver (Babula Bhai) in khaki uniform beside his green/yellow auto-rickshaw.
- **Interactive Dialogue Modal:**
  1. **Master Canteen (ମାଷ୍ଟର କ୍ୟାଣ୍ଟିନ):** Triggers authentic fare bargaining dialogue. Driver demands ₹50 flat; Babu bargains down to ₹40 ("ବାବୁ: ନା ଭାଇ, ରେଗୁଲାର ରେଟ୍ ₹୪୦!"). Driver agrees ("ଆଜିର ପ୍ରଥମ ବୋହଣୀ!") and player boards the auto.
  2. **Lingaraj Temple (ଶ୍ରୀ ଲିଙ୍ଗରାଜ ମନ୍ଦିର):** Shows "Coming Soon in Phase 2 / Puri Update".
  3. **Omfed Tea First (ପ୍ରଥମେ ଚାହା):** Driver points to Tookna Bhai tea stall across the street.

### 2.5 Driving Mission: "Reach Master Canteen — 1.2 km"
- **HUD Telemetry:** Real-time distance countdown (1.2 km to 0.0 km), speedometer gauge (km/h), coin counter (₹), and XP counter.
- **3 Dynamic In-Route Events:**
  1. **Cow Crossing Event (~800m):** Sacred garlanded white cow steps across Janpath into the player lane. Driver shouts *"ଆରେ! ଧୀରେ ଧୀରେ! ଆଗରେ ଗାଈ!"*. Braking in time awards **+50 XP (Bovine Respect Bonus)**; colliding costs **-20 XP**.
  2. **Motorcycle Overtake Event (~500m):** Red sports bike speeds past shouting *"ଭାଇ! ସାଇଡ୍ ଦିଅ!"*. Staying in lane awards **+30 XP (Lane Discipline Bonus)**.
  3. **Roadside Tea Stall Stop (~250m):** Tookna Bhai calls out. Stopping and pressing [E] spends ₹10 for hot tea: sipping sound, +25 stamina, and 12-second speed boost!

### 2.6 Arrival at Master Canteen & Mission Complete
- **Roundabout Landmark:** Iconic replica of the Konark War Horse monument with glowing gold beacon.
- **Closing Dialogue:** Driver congratulates Babu and accepts the ₹40 fare.
- **Mission Complete Modal:** Score breakdown (Safe Driving +100 XP, Cow Respect +50 XP, Lane Discipline +30 XP, Reward +₹100 Coins).

### 2.7 Mission 02: Puri Adventure Teaser Map
- **Interactive Highway Route:** Highlights Bhubaneswar [DONE] to Dhauli [UNLOCKED] to Pipili to Puri Sea Beach [LOCKED].
- **Babu Line:** *"Next stop: Puri Sea Beach & Jagannath Temple! Coming in Mission 02."*
- **Modes:** Buttons to continue Free Roam, Replay Mission, or explore the Map Guide.

### 2.8 Emergent Map Atlas & Telemetry Guide ([M])
- **Tactical 2D City Map:** Clickable interactive map with 8 sectors:
  1. Baramunda Bus Terminal
  2. Master Canteen Roundabout
  3. Saheed Nagar Food Market
  4. Omfed Tookna Bhai Khatti
  5. Lingaraj Temple & Old Town
  6. Rasulgarh Flyover Junction
  7. Patia & Infocity Tech Hub
  8. Pahala Chhena Poda Highway
- **Emergent Rules:** Dynamic breakdown of traffic congestion, cow calm index, and bargaining resistance.
- **Spoken Voice Guide:** Emergent Agent Navigator (BEAN v3.4) speaks full sector lore and navigation advice in Hindi or Indian English!

### 2.9 12 Scripted 3D Story Cutscenes
1. baramunda: Baramunda Bus Arrival (Opening Cinematic)
2. intro: The Twin City Awakens
3. dahibara: Saheed Nagar Bidyadhar Mausa Dahibara
4. omfed: Omfed Tookna Bhai Khatti
5. patia: Patia G+2 Bachelor Scam
6. mastercanteen: Master Canteen Pink Auto Showdown
7. antigrav: Zero-G Antigravity Ignition
8. lingaraj: Lingaraj Mandir & Ekamra Kshetra
9. rasulgarh: Rasulgarh Flyover Gridlock
10. kiit: KIIT Road & Infocity Tech Corridor
11. chhenapoda: Pahala Chhena Poda Kingdom
12. barabati: Barabati Stadium & Cuttack Rivalry

---

## 3. Controls & Player Mechanics Mapping

| Action | Desktop Key | Mobile Touch | Function |
| :--- | :--- | :--- | :--- |
| **Move / Accelerate** | `W` / `Up` | **▲** Button | Walk forward on foot / Accelerate auto |
| **Reverse / Step Back** | `S` / `Down` | **▼** Button | Walk backward / Reverse auto |
| **Turn Left / Right** | `A` / `D` | **◀** / **▶** | Steer character or vehicle |
| **Interact / Action** | `E` / `Enter` | **ACT [E]** | Talk to NPCs, bargain fare, drink tea |
| **Brake / Sprint** | `Space` / `Shift` | **BRAKE** | Apply brakes / sprint on foot |
| **Open Emergent Map** | `M` | **MAP [M]** | Opens 8-sector tactical atlas with spoken guide |
| **Play Cutscene** | `X` | **SCENE [X]** | Plays opening arrival cutscene |
| **Cutscene Advance** | `Space` / `Enter`| **⏭️ NEXT** | Advances to next dialogue line |
| **Cutscene Skip** | `Esc` | **⏩ SKIP** | Skips cutscene immediately |
| **Sound Horn** | `H` | **📢 HORN** | Horn sound with twin-city reactions |
| **Toggle Zero-G** | `G` | **🛸 ZERO-G** | Enables sandbox antigravity levitation |
| **Vehicle Swap** | `V` | **🔄 SWAP** | Cycles Activa 6G / Pink Auto in sandbox |
| **Switch Language** | `L` | **🌐 LANG** | Cycles Odia, Hindi, English |
| **Switch Audio Voice**| Top HUD | **🎙️ VOICE** | Toggles Hindi (hi-IN) / Indian English (en-IN) |