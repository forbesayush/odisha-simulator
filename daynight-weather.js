/* Odisha Simulator day/night and weather clock v4.0. */
(function () {
  'use strict';

  const OC = window.ODClock = window.ODClock || {};
  let time = 0.32;
  let speed = 1 / 480;
  let sun;
  let hemi;
  let scene;
  let streetlights = [];
  let nightMode = false;

  const SKY = [
    [0.00, 0x0a0f2a, 0.00, 0x060a18, 0.006],
    [0.22, 0x24335c, 0.25, 0x101828, 0.005],
    [0.28, 0xff9a5c, 0.90, 0xd8a37a, 0.004],
    [0.50, 0xfff4e0, 1.35, 0xcfe0ee, 0.0018],
    [0.74, 0xff8a4c, 0.85, 0xe0a070, 0.004],
    [0.80, 0x1a2450, 0.20, 0x0c1224, 0.006],
    [1.00, 0x0a0f2a, 0.00, 0x060a18, 0.006]
  ];

  function interpolate(tt) {
    for (let i = 0; i < SKY.length - 1; i++) {
      const a = SKY[i];
      const b = SKY[i + 1];
      if (tt >= a[0] && tt <= b[0]) {
        return { a, b, amount: (tt - a[0]) / (b[0] - a[0] || 1) };
      }
    }
    return { a: SKY[0], b: SKY[0], amount: 0 };
  }

  function colorBetween(a, b, amount) {
    return new THREE.Color(a).lerp(new THREE.Color(b), amount);
  }

  OC.init = function (sceneRef, sunRef, hemiRef) {
    scene = sceneRef;
    sun = sunRef;
    hemi = hemiRef;
    streetlights = [];
    scene.traverse(object => {
      if (object.isMesh && /streetlight|lamp|light_pole/i.test(object.name)) {
        streetlights.push(object);
      }
    });
    console.log(`[ODClock] init ok, ${streetlights.length} streetlights found`);
  };

  OC.setTime = value => { time = ((value % 1) + 1) % 1; };
  OC.getTime = () => time;
  OC.setSpeed = value => { speed = value; };
  OC.registerStreetlight = mesh => {
    if (mesh && !streetlights.includes(mesh)) streetlights.push(mesh);
  };

  OC.tick = function (dt) {
    if (!scene || !sun) return;
    time = (time + dt * speed) % 1;
    const { a, b, amount } = interpolate(time);
    sun.color.copy(colorBetween(a[1], b[1], amount));
    sun.intensity = a[2] + (b[2] - a[2]) * amount;
    const angle = (time - 0.25) * Math.PI * 2;
    sun.position.set(
      Math.cos(angle) * 120,
      Math.max(Math.sin(angle), -0.15) * 160,
      40
    );

    if (scene.fog) {
      scene.fog.color.copy(colorBetween(a[3], b[3], amount));
      scene.fog.density = a[4] + (b[4] - a[4]) * amount;
    }
    if (scene.background && scene.background.isColor) {
      scene.background.copy(colorBetween(a[3], b[3], amount));
    }

    const isNight = time < 0.23 || time > 0.77;
    if (isNight !== nightMode) {
      nightMode = isNight;
      streetlights.forEach(mesh => {
        if (mesh.material && 'emissiveIntensity' in mesh.material) {
          mesh.material.emissiveIntensity = isNight ? 1.6 : 0;
        }
      });
      if (window.setWeatherMode) window.setWeatherMode(isNight ? 'night' : 'day');
    }
    if (hemi) hemi.intensity = 0.25 + sun.intensity * 0.35;
  };

  const refs = window.__odClockRefs;
  if (refs) OC.init(refs.scene, refs.sun, refs.hemi);
  const previousTick = window.__tick;
  window.__tick = dt => {
    if (previousTick) previousTick(dt);
    OC.tick(dt);
  };
})();
