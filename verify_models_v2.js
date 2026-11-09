// Confirms the v2.2.0 vehicle model replacement markers are present.
// Usage: node verify_models_v2.js

const fs = require('fs');
const path = require('path');

const html = fs.readFileSync(path.join(__dirname, 'index.html'), 'utf8');

const CHECKS = [
  ['moBusBodyTex factory present', /function\s+moBusBodyTex\s*\(/],
  ['moBusSidePanelTex factory present', /function\s+moBusSidePanelTex\s*\(/],
  ['moBusLedTex factory present', /function\s+moBusLedTex\s*\(/],
  ['bajajAutoHoodTex factory present', /function\s+bajajAutoHoodTex\s*\(/],
  ['bajajAutoSideTex factory present', /function\s+bajajAutoSideTex\s*\(/],
  ['bajajAutoRoofInteriorTex factory present', /function\s+bajajAutoRoofInteriorTex\s*\(/],
  ['makeAuto uses bajajAutoHoodTex', /bajajAutoHoodTex\(\)/],
  ['makeBus uses moBusBodyTex', /moBusBodyTex\(\)/],
  ['LED matrix destination board', /BARAMUNDA\s*➔\s*MASTER CANTEEN/],
  ['OD-02 plate in auto hood', /OD 02/],
  ['KALIA BHAI nameplate', /KALIA BHAI/],
  ['Odia calligraphy present', /ଭୁବନେଶ୍ୱର/],
  ['weather mode normalization', /state\.weather\s*=\s*norm/]
];

let failures = 0;
for (const [name, pattern] of CHECKS) {
  if (pattern.test(html)) console.log(`✓ ${name}`);
  else {
    console.log(`✗ ${name}`);
    failures++;
  }
}

console.log(`\n${failures === 0 ? 'ALL PASS' : 'FAILURES'}: ${CHECKS.length - failures}/${CHECKS.length}`);
process.exitCode = failures === 0 ? 0 : 1;

