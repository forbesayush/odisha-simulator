export function buildProps(scene, colliders, { createProps } = {}) {
  if (typeof createProps !== 'function') {
    return {};
  }

  return createProps(scene, colliders);
}
