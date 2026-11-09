/* Odisha Simulator vehicle texture upgrade v4.0. */
(function () {
  'use strict';

  const OD = window.ODUpgrade = window.ODUpgrade || {};

  function canvasTexture(width, height, paint) {
    const canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext('2d');
    paint(ctx, width, height);
    const texture = new THREE.CanvasTexture(canvas);
    texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
    texture.anisotropy = typeof renderer !== 'undefined' && renderer && renderer.capabilities
      ? Math.min(8, renderer.capabilities.getMaxAnisotropy())
      : 4;
    texture.needsUpdate = true;
    return texture;
  }

  function grime(ctx, width, height, alpha) {
    const gradient = ctx.createLinearGradient(0, 0, 0, height);
    gradient.addColorStop(0, 'rgba(20,16,10,0)');
    gradient.addColorStop(1, `rgba(20,16,10,${alpha})`);
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, width, height);
  }

  function scratches(ctx, width, height, count, alpha) {
    ctx.save();
    ctx.globalAlpha = alpha;
    ctx.strokeStyle = '#d8d8d8';
    ctx.lineWidth = 1;
    for (let i = 0; i < count; i++) {
      const x = Math.random() * width;
      const y = Math.random() * height;
      const length = 8 + Math.random() * 60;
      const angle = Math.random() * Math.PI;
      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.lineTo(x + Math.cos(angle) * length, y + Math.sin(angle) * length);
      ctx.stroke();
    }
    ctx.restore();
  }

  function autoHoodTex2048() {
    return canvasTexture(2048, 1024, (ctx, width, height) => {
      const gradient = ctx.createLinearGradient(0, 0, 0, height);
      gradient.addColorStop(0, '#1e7a34');
      gradient.addColorStop(0.55, '#2fa346');
      gradient.addColorStop(1, '#f5c518');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);
      ctx.strokeStyle = '#f8d948';
      ctx.lineWidth = 14;
      ctx.strokeRect(40, 40, width - 80, height - 80);
      ctx.textAlign = 'center';
      ctx.fillStyle = '#fff';
      ctx.font = 'bold 110px Arial';
      ctx.fillText('FOR HIRE', width / 2, 300);
      ctx.font = 'bold 72px Arial';
      ctx.fillText('OD 02 BK 4213', width / 2, 470);
      ctx.fillStyle = '#ffd54a';
      ctx.font = 'bold 96px Arial';
      ctx.fillText('KALIA BHAI', width / 2, 660);
      ctx.beginPath();
      ctx.arc(width / 2, 850, 90, 0, Math.PI * 2);
      ctx.fillStyle = '#0a7a3d';
      ctx.fill();
      ctx.fillStyle = '#fff';
      ctx.font = 'bold 64px Arial';
      ctx.fillText('LPG', width / 2, 874);
      grime(ctx, width, height, 0.14);
      scratches(ctx, width, height, 90, 0.1);
    });
  }

  function autoSideTex2048() {
    return canvasTexture(2048, 512, (ctx, width, height) => {
      const gradient = ctx.createLinearGradient(0, 0, width, 0);
      gradient.addColorStop(0, '#1e7a34');
      gradient.addColorStop(1, '#f5c518');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);
      ctx.textAlign = 'center';
      ctx.fillStyle = '#fff';
      ctx.font = 'bold 128px "Noto Sans Oriya", Arial';
      ctx.fillText('ଭୁବନେଶ୍ୱର • ଫାଷ୍ଟ ଏୟାର', width / 2, 230);
      ctx.fillStyle = '#ffe9a8';
      ctx.font = 'italic bold 56px Arial';
      ctx.fillText('BHUBANESWAR FAST AIR', width / 2, 340);
      grime(ctx, width, height, 0.12);
      scratches(ctx, width, height, 60, 0.08);
    });
  }

  function ledTexture() {
    return canvasTexture(1024, 128, (ctx, width, height) => {
      ctx.fillStyle = '#050505';
      ctx.fillRect(0, 0, width, height);
      ctx.fillStyle = '#ffb400';
      ctx.font = 'bold 92px "Courier New", monospace';
      ctx.textBaseline = 'middle';
      ctx.fillText('MASTER CANTEEN > PATIA', 20, height / 2);
    });
  }

  function material(texture, options = {}) {
    return new THREE.MeshStandardMaterial({
      map: texture,
      roughness: options.roughness ?? 0.6,
      metalness: options.metalness ?? 0.55,
      emissiveMap: options.emissive ? texture : null,
      emissive: options.emissive ? 0xffffff : 0x000000,
      emissiveIntensity: options.emissive ? 1 : 0
    });
  }

  OD.applyToAuto = function (group) {
    if (!group || !window.THREE) return;
    const hood = autoHoodTex2048();
    const side = autoSideTex2048();
    group.traverse(mesh => {
      if (!mesh.isMesh) return;
      const x = Math.abs(mesh.position.x);
      const z = mesh.position.z;
      if (z > 1.15) mesh.material = material(hood, { roughness: 0.55, metalness: 0.6 });
      else if (x > 0.6 && z < 0.35) mesh.material = material(side, { roughness: 0.6, metalness: 0.5 });
    });
    console.log('[ODUpgrade] auto materials upgraded');
  };

  OD.applyToBus = function (group) {
    if (!group || !window.THREE) return;
    const led = ledTexture();
    group.traverse(mesh => {
      if (!mesh.isMesh) return;
      const z = mesh.position.z;
      if (z > 5.35 && mesh.position.y > 2.5) {
        mesh.material = material(led, { roughness: 0.4, metalness: 0.2, emissive: true });
      }
    });
    console.log('[ODUpgrade] bus LED material upgraded');
  };

  OD.tick = function () {};

  const groups = window.__odVehicleGroups;
  if (groups) {
    OD.applyToAuto(groups.auto);
    (groups.buses || []).forEach(OD.applyToBus);
  }
  const previousTick = window.__tick;
  window.__tick = dt => {
    if (previousTick) previousTick(dt);
    OD.tick(dt);
  };
})();
