const fs = require('node:fs');
const path = require('node:path');
const test = require('node:test');
const assert = require('node:assert/strict');
const { JSDOM, VirtualConsole } = require('jsdom');

const GAME_FILE = path.join(__dirname, '..', 'index.html');

const REQUIRED_DOM_IDS = [
  'intro-reveal', 'loading-screen', 'load-sub-text', 'load-bar-fill',
  'load-trivia-text', 'cinematic-overlay', 'webgl-canvas', 'title-screen',
  'lang-btn-or', 'lang-btn-hi', 'lang-btn-en', 'lang-btn-all',
  'btn-continue-game', 'continue-game-lbl', 'hud', 'hud-mission-banner',
  'hud-mission-title', 'hud-mission-dist', 'hud-mission-obj', 'hud-scam-flags',
  'hud-flags-count', 'hud-dahibara-badge', 'hud-dahibara-count',
  'hud-weather-btn', 'hud-weather-label', 'hud-weather-badge',
  'hud-vehicle-btn', 'hud-vehicle-label', 'hud-jobs-btn', 'hud-menu-btn',
  'hud-lang-label', 'hud-tutorial-card', 'tut-step-tag', 'tut-step-body',
  'hud-interact-bubble', 'interact-bubble-label', 'speedo-val', 'speedo-lbl',
  'lbl-cash', 'hud-coins', 'lbl-xp', 'hud-xp', 'lbl-bless', 'hud-blessing',
  'hud-controls-legend', 'minimap-card', 'minimap-canvas', 'subtitle-card',
  'sub-portrait', 'sub-speaker-name', 'sub-text-primary', 'sub-text-secondary',
  'sub-text-tertiary', 'dialogue-modal', 'dia-avatar', 'dia-name', 'dia-role',
  'dia-text', 'dia-choices', 'mission-complete-modal', 'mc-rating-text',
  'mc-score-cow'
];

function createDom() {
  const virtualConsole = new VirtualConsole();
  virtualConsole.on('jsdomError', () => {});
  const gameHtml = fs.readFileSync(GAME_FILE, 'utf8').replace(
    '</script>',
    `</script><script>
      window.THREE.WebGLRenderer = class {
        constructor(options) {
          this.domElement = options && options.canvas;
          this.info = { render: { calls: 0, triangles: 0 } };
          this.shadowMap = {};
          this.capabilities = { precision: 'mediump' };
        }
        setSize() {}
        setPixelRatio() {}
        render() {}
        setAnimationLoop() {}
      };
    </script>`,
  );

  return new JSDOM(gameHtml, {
    url: 'http://localhost/index.html',
    runScripts: 'dangerously',
    resources: 'usable',
    pretendToBeVisual: true,
    virtualConsole,
    beforeParse(window) {
      window.alert = () => {};
      window.confirm = () => true;
      window.prompt = () => '';
      window.scrollTo = () => {};
      window.requestAnimationFrame = () => 0;
      window.cancelAnimationFrame = () => {};
      window.Audio = class {
        play() { return Promise.resolve(); }
        pause() {}
      };
      window.speechSynthesis = { cancel() {}, speak() {} };
      window.HTMLCanvasElement.prototype.getContext = () => new Proxy({}, {
        get(target, property) {
          if (property === 'createLinearGradient' || property === 'createRadialGradient') {
            return () => ({ addColorStop() {} });
          }
          if (property === 'measureText') {
            return () => ({ width: 0 });
          }
          if (!(property in target)) target[property] = () => {};
          return target[property];
        }
      });
    }
  });
}

function waitForGameScripts() {
  return new Promise(resolve => setTimeout(resolve, 50));
}

test('all required game DOM IDs exist', async () => {
  const dom = createDom();
  try {
    await waitForGameScripts();
    assert.equal(REQUIRED_DOM_IDS.length, 62);
    for (const id of REQUIRED_DOM_IDS) {
      assert.ok(dom.window.document.getElementById(id), `missing #${id}`);
    }
  } finally {
    dom.window.close();
  }
});

test('pressing and releasing E updates the game interaction input state', async () => {
  const dom = createDom();
  try {
    await waitForGameScripts();
    dom.window.dispatchEvent(new dom.window.KeyboardEvent('keydown', {
      key: 'E',
      bubbles: true
    }));
    assert.equal(dom.window.eval('keys.e'), true);

    dom.window.dispatchEvent(new dom.window.KeyboardEvent('keyup', {
      key: 'e',
      bubbles: true
    }));
    assert.equal(dom.window.eval('keys.e'), false);
  } finally {
    dom.window.close();
  }
});
