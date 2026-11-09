# Amara Odisha Adventures — Copilot Context

## Architecture

- Use ES modules for code under `src/`.
- Keep shared game data and initial state in `src/config/GameConfig.js`.
- Engine setup belongs in `src/core/Engine.js`; world construction belongs in `src/world/WorldBuilder.js`.
- World builders return `{ colliders, worldData }`.
- Keep the legacy `index.html` runtime behavior stable while extracting modules incrementally.

## Code style

- Prefer explicit imports and exports over globals.
- Use `THREE.MathUtils.lerp` for interpolation.
- Guard optional NPC and prop references before accessing them.
- Keep browser-only APIs behind injectable options when practical so modules remain testable.

## Performance and safety

- Reuse geometries and materials in loops.
- Dispose Three.js resources when removing world chunks.
- Do not add new CDN dependencies, `eval`, or `new Function`.
- Preserve offline texture paths and existing save data compatibility.

## Localization

- Preserve Odia and Hindi script in user-facing text.
- Use the existing language keys (`or`, `hi`, and `en`) for new localized content.
