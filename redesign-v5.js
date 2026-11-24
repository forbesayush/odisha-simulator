/* global window, document, console, matchMedia, innerWidth, innerHeight, clearTimeout, setTimeout, speechSynthesis, SpeechSynthesisUtterance, state, playerScooty, playerAuto, babuGroup, ROADS, CHAPTERS, POI, renderer, scene, THREE */
(function () {
  'use strict';

  const mobile = matchMedia('(pointer: coarse)').matches || Math.min(innerWidth, innerHeight) < 720;
  const profiles = {
    narrator: { rate: .93, pitch: .9, label: 'Narrator' },
    babu: { rate: 1.02, pitch: 1.03, label: 'Babu' },
    auto: { rate: 1.07, pitch: .86, label: 'Kalia Bhai' },
    priest: { rate: .88, pitch: .82, label: 'Temple Priest' },
    announcer: { rate: .96, pitch: .92, label: 'City Radio' }
  };

  const subtitle = document.createElement('div');
  subtitle.id = 'v5-subtitle';
  subtitle.setAttribute('aria-live', 'polite');
  document.body.appendChild(subtitle);

  const ribbon = document.createElement('div');
  ribbon.id = 'v5-story-ribbon';
  ribbon.innerHTML = '<div class="v5-story-shell"><div class="v5-story-top"><span class="v5-location">Bhubaneswar</span><span class="v5-distance">Exploring</span></div><div class="v5-route"><i></i></div></div>';
  document.body.appendChild(ribbon);

  let subtitleTimer = 0;
  function showSubtitle(actor, text, duration) {
    clearTimeout(subtitleTimer);
    const speaker = document.createElement('b');
    speaker.textContent = actor;
    subtitle.replaceChildren(speaker, document.createTextNode(text));
    subtitle.classList.add('show');
    subtitleTimer = setTimeout(() => subtitle.classList.remove('show'), duration || 4200);
  }

  function languageCode() {
    return state && state.lang === 'or' ? 'or-IN' : state && state.lang === 'hi' ? 'hi-IN' : 'en-IN';
  }

  let finishSpeech;
  const VoiceDirector = {
    muted: false,
    stop() {
      if (finishSpeech) finishSpeech();
      clearTimeout(subtitleTimer);
      subtitle.classList.remove('show');
      if ('speechSynthesis' in window) speechSynthesis.cancel();
    },
    speak(text, actor) {
      this.stop();
      const profile = profiles[actor] || profiles.narrator;
      const duration = Math.max(2600, Math.min(12000, text.length * 75));
      showSubtitle(profile.label, text, duration);
      if (this.muted || !window.speechSynthesis || typeof window.SpeechSynthesisUtterance !== 'function' || !text) return Promise.resolve();
      return new Promise(resolve => {
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = languageCode();
        utterance.rate = profile.rate;
        utterance.pitch = profile.pitch;
        utterance.volume = .92;
        const voices = speechSynthesis.getVoices();
        const locale = utterance.lang.slice(0, 2).toLowerCase();
        const voice = voices.find(v => v.lang.toLowerCase() === utterance.lang.toLowerCase())
          || voices.find(v => v.lang.toLowerCase().split('-')[0] === locale);
        if (!voice && locale !== 'en') { resolve(); return; }
        if (voice) utterance.voice = voice;
        const timer = setTimeout(() => {
          finish();
          speechSynthesis.cancel();
        }, duration + 4000);
        function finish() {
          clearTimeout(timer);
          if (finishSpeech === finish) finishSpeech = undefined;
          resolve();
        }
        finishSpeech = finish;
        utterance.onend = finish;
        utterance.onerror = finish;
        speechSynthesis.speak(utterance);
      });
    }
  };
  window.VoiceDirector = VoiceDirector;

  function playerPosition() {
    if (state.mode === 'scooty') return playerScooty.group.position;
    if (state.mode === 'drive') return playerAuto.group.position;
    return babuGroup.position;
  }

  function nearestRoadName(pos) {
    let best = { name: 'Bhubaneswar', d: Infinity };
    ROADS.forEach(r => {
      const vx = r.x2 - r.x1, vz = r.z2 - r.z1;
      const len2 = vx * vx + vz * vz || 1;
      const t = Math.max(0, Math.min(1, ((pos.x - r.x1) * vx + (pos.z - r.z1) * vz) / len2));
      const dx = pos.x - (r.x1 + vx * t), dz = pos.z - (r.z1 + vz * t);
      const d = Math.hypot(dx, dz);
      if (d < best.d) best = { name: r.name, d };
    });
    return best.d < 36 ? best.name : 'Odisha Open World';
  }

  let uiTime = 0;
  const previousTick = window.__tick;
  window.__tick = function (dt) {
    if (previousTick) previousTick(dt);
    uiTime += dt;
    if (uiTime < .25 || document.hidden) return;
    uiTime = 0;
    const pos = playerPosition();
    const chapter = CHAPTERS[state.currentChapter] || CHAPTERS[0];
    const target = POI[chapter.target] || POI.driver;
    const distance = Math.hypot(pos.x - target[0], pos.z - target[1]);
    const location = ribbon.querySelector('.v5-location');
    const metric = ribbon.querySelector('.v5-distance');
    const bar = ribbon.querySelector('.v5-route i');
    location.textContent = nearestRoadName(pos);
    metric.textContent = distance < 8 ? 'Objective reached' : Math.max(10, Math.round(distance * 10)) + ' m';
    bar.style.width = Math.max(4, Math.min(100, 100 - distance / 4)) + '%';
  };

  // Upgrade road and building texture sampling without increasing texture size.
  try {
    const maxAniso = renderer.capabilities.getMaxAnisotropy ? Math.min(renderer.capabilities.getMaxAnisotropy(), mobile ? 2 : 8) : 1;
    scene.traverse(object => {
      if (!object.isMesh) return;
      const materials = Array.isArray(object.material) ? object.material : [object.material];
      materials.forEach(material => {
        if (!material) return;
        ['map', 'normalMap', 'roughnessMap', 'aoMap'].forEach(key => {
          if (material[key]) { material[key].anisotropy = maxAniso; material[key].needsUpdate = true; }
        });
      });
    });
  } catch (error) { console.warn('[V5 materials]', error); }

  // Lightweight landmark props make the expanded roads readable at speed.
  try {
    const signMat = new THREE.MeshStandardMaterial({ color: 0x0e5a83, roughness: .52, metalness: .18 });
    const postMat = new THREE.MeshStandardMaterial({ color: 0x3d4650, roughness: .7, metalness: .55 });
    [[50,-430,'PURI'], [210,-342,'CUTTACK'], [180,115,'PATIA']].forEach(([x,z,label]) => {
      const group = new THREE.Group();
      const board = new THREE.Mesh(new THREE.BoxGeometry(7, 1.7, .22), signMat);
      board.position.y = 5.2;
      group.add(board);
      [-2.7,2.7].forEach(px => { const post = new THREE.Mesh(new THREE.CylinderGeometry(.09,.12,5,8), postMat); post.position.set(px,2.5,0); group.add(post); });
      const canvas = document.createElement('canvas'); canvas.width = 512; canvas.height = 128;
      const ctx = canvas.getContext('2d'); ctx.fillStyle = '#0e5a83'; ctx.fillRect(0,0,512,128); ctx.fillStyle = '#fff'; ctx.font = '800 54px sans-serif'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle'; ctx.fillText(label,256,64);
      const face = new THREE.Mesh(new THREE.PlaneGeometry(6.6,1.4), new THREE.MeshBasicMaterial({ map: new THREE.CanvasTexture(canvas) })); face.position.set(0,5.2,.12); group.add(face);
      group.position.set(x,0,z); scene.add(group);
    });
  } catch (error) { console.warn('[V5 landmarks]', error); }

  document.addEventListener('visibilitychange', () => {
    if (document.hidden) VoiceDirector.stop();
  });
})();
