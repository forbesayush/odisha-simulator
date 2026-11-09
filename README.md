# Amara Odisha Adventures — Bhubaneswar (ଆମ ଓଡ଼ିଶା)

A small 3D open-world browser game set in Bhubaneswar, where the player is **Babu**, a newcomer who arrives at Baramunda Bus Terminal, explores the streets on foot, and drives an auto-rickshaw to Master Canteen.

[![GitHub Pages](https://img.shields.io/badge/Live-GitHub%20Pages-success?style=for-the-badge&logo=github)](https://forbesayush.github.io/odisha-simulator/)
[![Three.js](https://img.shields.io/badge/Three.js-r128-black?style=for-the-badge&logo=three.js)](https://threejs.org/)
[![Web Audio API](https://img.shields.io/badge/Audio-Procedural%20Synthesis-orange?style=for-the-badge)](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API)

🚀 **Play Live Now:** [https://forbesayush.github.io/odisha-simulator/](https://forbesayush.github.io/odisha-simulator/)  
📁 **Project PRD:** [PRD.md](PRD.md)

---

## 🌟 Core Gameplay & Story Experience

1. **Title Screen:** Warm Pattachitra palette, soft relaxing flute and tanpura ambience, language selector (Odia, Hindi, English), and "Tap to Start".
2. **Opening Arrival Cinematic:** Swooping crane shot over Bhubaneswar dawn into Baramunda Bus Terminal as a green Mo Bus pulls up. Spoken arrival lines with synchronized subtitles.
3. **Free Roam on Foot:** Walk around Baramunda as Babu wearing an authentic blue check shirt, white lungi with red border, and gamucha.
4. **Auto Stand Dialogue & Bargaining:** Talk to Babula Bhai at the auto stand. Bargain the fare from ₹50 down to ₹40 ("ଆଜିର ପ୍ରଥମ ବୋହଣୀ!") and board the auto.
5. **Driving Mission "Reach Master Canteen — 1.2 km":**
   - **Cow Crossing (~800m):** Sacred cow steps onto road; driver shouts *"ଆରେ! ଧୀରେ ଧୀରେ! ଆଗରେ ଗାଈ!"*. Braking in time gives **+50 XP**; collision costs **-20 XP**.
   - **Motorcycle Overtake (~500m):** Bike speeds past shouting *"ଭାଇ! ସାଇଡ୍ ଦିଅ!"*. Lane discipline gives **+30 XP**.
   - **Tea Stall Stop (~250m):** Stop for ₹10 hot tea for sipping sound, +25 stamina, and turbo speed boost!
6. **Arrival & Mission Complete:** Crossing into Master Canteen roundabout triggers arrival fanfare, driver & Babu closing lines, score breakdown, and ₹100 coins reward.
7. **Puri Adventure Teaser Map:** Highlights Bhubaneswar to Dhauli to Pipili to Puri Sea Beach for Mission 02!
8. **Emergent Map Atlas ([M]):** Interactive 8-sector tactical map with live telemetry and spoken audio guides by the Emergent City Navigator.
9. **12 Scripted 3D Cutscenes:** Story scenes covering Baramunda, Dahibara, Omfed, Patia, Master Canteen, Lingaraj, Rasulgarh, KIIT, Chhena Poda, Barabati, and Antigravity Zero-G!

---

## 🎮 Controls

| Action | Desktop Key | Mobile Touch | Function |
| :--- | :--- | :--- | :--- |
| **Move / Drive** | `W/A/S/D` | **▲ ▼ ◀ ▶** | Walk on foot / drive vehicle |
| **Interact / Action** | `E` / `Enter` | **ACT [E]** | Talk to driver, bargain, buy tea |
| **Brake / Sprint** | `Space` / `Shift`| **BRAKE** | Apply vehicle brakes / sprint on foot |
| **Open Emergent Map** | `M` | **MAP [M]** | Opens 8-sector map with spoken guide |
| **Play Cutscenes** | `X` | **SCENE [X]** | Watch opening story cutscene |
| **Advance Cutscene** | `Space` / `Enter`| **⏭️ NEXT** | Next dialogue step |
| **Skip Cutscene** | `Esc` | **⏩ SKIP** | Skip cutscene |
| **Vehicle Horn** | `H` | **📢 HORN** | Sound auto-rickshaw horn |
| **Zero-G Mode** | `G` | **🛸 ZERO-G** | Toggles sandbox antigravity levitation |
| **Switch Language** | `L` | **🌐 LANG** | Toggles Odia / Hindi / English |

---

## 🚀 Instant Deployment & Local Setup

```bash
# Clone the repository
git clone https://github.com/forbesayush/odisha-simulator.git
cd odisha-simulator

# Open index.html directly in any browser!
start index.html
```
Or view the live build at **[https://forbesayush.github.io/odisha-simulator/](https://forbesayush.github.io/odisha-simulator/)**.

## v4.0 Upgrade Pack

The repository includes integrated vehicle textures, 128m map streaming, a dynamic day/night cycle, and an adaptive FPS quality governor. See [UPGRADE-PACK-V4.md](UPGRADE-PACK-V4.md) for module purposes, runtime hooks, and verification commands.