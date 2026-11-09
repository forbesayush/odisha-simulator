/* Odisha Simulator adaptive rendering quality governor v4.0. */
(function () {
  'use strict';

  const OP = window.ODPerf = window.ODPerf || {};
  let active = false;
  let accumulated = 0;
  let frames = 0;
  let level = 0;
  let cooldown = 0;

  const TIERS = [
    { pixelRatio: 2, shadow: 2048, antialias: true },
    { pixelRatio: 1.5, shadow: 2048, antialias: true },
    { pixelRatio: 1.25, shadow: 1024, antialias: true },
    { pixelRatio: 1, shadow: 1024, antialias: false },
    { pixelRatio: 0.75, shadow: 512, antialias: false }
  ];

  function apply(nextLevel) {
    level = Math.max(0, Math.min(TIERS.length - 1, nextLevel));
    const tier = TIERS[level];
    const refs = window.__odPerfRefs || {};
    if (refs.renderer && refs.renderer.setPixelRatio) {
      refs.renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, tier.pixelRatio));
    }
    const light = refs.sun;
    if (light && light.shadow && light.shadow.mapSize.x !== tier.shadow) {
      light.shadow.mapSize.set(tier.shadow, tier.shadow);
      if (light.shadow.map) {
        light.shadow.map.dispose();
        light.shadow.map = null;
      }
    }
    console.log(`[ODPerf] tier ${level}: pixelRatio<=${tier.pixelRatio}, shadow ${tier.shadow}`);
  }

  OP.on = () => {
    if (!active) {
      active = true;
      apply(level);
      console.log('[ODPerf] governor on');
    }
  };

  OP.off = () => {
    active = false;
    apply(0);
  };

  OP.status = () => ({
    active,
    level,
    tier: TIERS[level],
    fps: accumulated ? frames / accumulated : 0
  });

  OP.tick = function (dt) {
    if (!active) return;
    accumulated += dt;
    frames++;
    cooldown -= dt;
    if (accumulated < 3) return;
    const fps = frames / accumulated;
    accumulated = 0;
    frames = 0;
    if (cooldown > 0) return;
    if (fps < 45 && level < TIERS.length - 1) {
      apply(level + 1);
      cooldown = 4;
    } else if (fps > 58 && level > 0) {
      apply(level - 1);
      cooldown = 8;
    }
  };

  const previousTick = window.__tick;
  window.__tick = dt => {
    if (previousTick) previousTick(dt);
    OP.tick(dt);
  };
})();
