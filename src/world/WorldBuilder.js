import { buildRoads } from './Roads.js';
import { buildBuildings } from './Buildings.js';
import { buildProps } from './Props.js';

export function buildWorld(scene, options = {}) {
  if (!scene) {
    throw new TypeError('buildWorld requires a scene');
  }

  const colliders = [];
  const roads = buildRoads(scene, colliders, options);
  const buildings = buildBuildings(scene, colliders, options);
  const props = buildProps(scene, colliders, options);

  return {
    colliders,
    worldData: {
      roadMeshes: roads,
      ...buildings,
      ...props
    }
  };
}
