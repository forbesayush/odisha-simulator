export const ROADS = [];

export function buildRoads(scene, colliders, { createRoad } = {}) {
  if (typeof createRoad !== 'function') {
    return [];
  }

  return ROADS.map(road => createRoad(scene, road, colliders));
}
