/* Odisha Simulator map streaming and geometry utility pack v4.0. */
(function () {
  'use strict';

  const OS = window.ODStreaming = window.ODStreaming || {};
  const CHUNK = 128;
  const chunks = new Map();
  const key = (x, z) => `${Math.floor(x / CHUNK)},${Math.floor(z / CHUNK)}`;

  OS.register = function (obj) {
    if (!obj || obj.userData && obj.userData.streamingIgnore) return null;
    const position = obj.getWorldPosition
      ? obj.getWorldPosition(new THREE.Vector3())
      : obj.position;
    const chunkKey = key(position.x, position.z);
    if (!chunks.has(chunkKey)) chunks.set(chunkKey, new Set());
    chunks.get(chunkKey).add(obj);
    obj.userData._chunk = chunkKey;
    return chunkKey;
  };

  OS.unregister = function (obj) {
    const chunkKey = obj && obj.userData && obj.userData._chunk;
    if (chunkKey && chunks.has(chunkKey)) chunks.get(chunkKey).delete(obj);
  };

  let lastKey = '';
  OS.update = function (playerPosition) {
    if (!playerPosition) return;
    const chunkKey = key(playerPosition.x, playerPosition.z);
    if (chunkKey === lastKey) return;
    lastKey = chunkKey;
    const [playerChunkX, playerChunkZ] = chunkKey.split(',').map(Number);
    for (const [currentKey, objects] of chunks) {
      const [chunkX, chunkZ] = currentKey.split(',').map(Number);
      const visible = Math.max(
        Math.abs(chunkX - playerChunkX),
        Math.abs(chunkZ - playerChunkZ)
      ) <= 1;
      for (const object of objects) object.visible = visible;
    }
  };

  OS.stats = () => ({ chunks: chunks.size });

  OS.mergeStatics = function (root) {
    if (!root || !THREE.BufferGeometryUtils) {
      console.warn('[ODStreaming] BufferGeometryUtils not loaded; skipping merge');
      return root;
    }
    const buckets = new Map();
    root.updateMatrixWorld(true);
    root.traverse(object => {
      if (!object.isMesh || !object.visible || object.userData.dynamic) return;
      const material = Array.isArray(object.material) ? object.material[0] : object.material;
      if (!material) return;
      if (!buckets.has(material.uuid)) buckets.set(material.uuid, { material, items: [] });
      buckets.get(material.uuid).items.push({
        geometry: object.geometry,
        matrix: object.matrixWorld.clone()
      });
    });
    const merged = new THREE.Group();
    for (const { material, items } of buckets.values()) {
      const geometries = items.map(({ geometry, matrix }) => {
        const clone = geometry.clone();
        clone.applyMatrix4(matrix);
        return clone;
      });
      const total = THREE.BufferGeometryUtils.mergeGeometries(geometries, false);
      geometries.forEach(geometry => geometry.dispose());
      if (total) merged.add(new THREE.Mesh(total, material));
    }
    return merged;
  };

  OS.instanced = function (geometry, material, transforms) {
    const mesh = new THREE.InstancedMesh(geometry, material, transforms.length);
    const matrix = new THREE.Matrix4();
    const rotation = new THREE.Quaternion();
    const scale = new THREE.Vector3();
    const axis = new THREE.Vector3(0, 1, 0);
    transforms.forEach((transform, index) => {
      rotation.setFromAxisAngle(axis, transform.rotY || 0);
      scale.setScalar(transform.scale || 1);
      matrix.compose(transform.pos, rotation, scale);
      mesh.setMatrixAt(index, matrix);
    });
    mesh.instanceMatrix.needsUpdate = true;
    return mesh;
  };

  OS.makeLOD = function (detailed, medium, far, distances = [0, 60, 150]) {
    const lod = new THREE.LOD();
    [detailed, medium, far].forEach((object, index) => {
      if (object) lod.addLevel(object, distances[index]);
    });
    return lod;
  };

  const scene = window.__scene;
  if (scene) {
    scene.children.forEach(object => {
      if (object.isMesh || object.isGroup) OS.register(object);
    });
  }

  const previousTick = window.__tick;
  window.__tick = dt => {
    if (previousTick) previousTick(dt);
    if (window.__odPlayerPosition) OS.update(window.__odPlayerPosition());
  };
})();
