# Amara Odisha Adventures — Copilot Context

## Architecture

- `index.html` is the simulator entry point and owns the active engine, game state and world builder.
- `redesign-v5.js` and `redesign-v5.css` provide the redesigned interface.

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
