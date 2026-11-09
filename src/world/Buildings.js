export function buildBuildings(scene, colliders, { createBuildings } = {}) {
  if (typeof createBuildings !== 'function') {
    return {};
  }

  return createBuildings(scene, colliders);
}
