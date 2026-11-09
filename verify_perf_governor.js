const fs = require('fs');
const path = require('path');

const html = fs.readFileSync(path.join(__dirname, 'index.html'), 'utf8');
const source = fs.readFileSync(path.join(__dirname, 'perf-governor.js'), 'utf8');

const checks = [
  ['performance module is included', /perf-governor\.js/.test(html)],
  ['ODPerf namespace exists', /window\.ODPerf/.test(source)],
  ['quality tiers exist', /const TIERS = \[/.test(source)],
  ['pixel ratio adaptation exists', /setPixelRatio/.test(source)],
  ['shadow map adaptation exists', /shadow\.mapSize\.set/.test(source)],
  ['governor controls exist', /OP\.on/.test(source) && /OP\.off/.test(source)],
  ['status reports FPS', /OP\.status/.test(source) && /fps:/.test(source)],
  ['three-second sampling exists', /accumulated < 3/.test(source)],
  ['tick is wired', /OP\.tick\(dt\)/.test(source)],
  ['renderer and sun are exposed', /__odPerfRefs/.test(html)]
];

let failures = 0;
for (const [name, passed] of checks) {
  if (passed) console.log(`✓ ${name}`);
  else {
    console.log(`✗ ${name}`);
    failures++;
  }
}

console.log(`\n${failures === 0 ? 'ALL PASS' : 'FAILURES'}: ${checks.length - failures}/${checks.length}`);
process.exitCode = failures === 0 ? 0 : 1;
