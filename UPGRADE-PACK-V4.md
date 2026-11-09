# Odisha Simulator — Upgrade Pack v4.0

The v4 modules are already integrated into `index.html` and load from the repository root.

| File | Purpose |
| --- | --- |
| `vehicles-texture-v4.js` | 2048px auto/bus textures and emissive LED destination material |
| `map-streaming.js` | 128m chunk visibility, static merge, instancing, and LOD helpers |
| `daynight-weather.js` | Time-of-day sun, fog, streetlights, and weather handoff |
| `perf-governor.js` | FPS-adaptive pixel-ratio and shadow-quality scaling |

## Runtime hooks

```js
ODUpgrade.applyToAuto(autoGroup);
ODUpgrade.applyToBus(busGroup);
ODStreaming.register(object3d);
ODClock.setTime(0.35); // 0 = midnight, 0.5 = noon
ODPerf.on();
```

All modules are defensive: missing optional hooks leave the feature inactive rather than stopping the game.

## Local verification

```bash
npm install
npm run lint
npm test
npm run verify:release
```

The release verification covers the model, texture, vehicle, streaming, day/night, and performance integrations and regenerates `release-manifest.json`.
