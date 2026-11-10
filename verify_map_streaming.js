const fs = require('fs');
const path = require('path');

const html = fs.readFileSync(path.join(__dirname, 'index.html'), 'utf8');
const moduleSource = fs.readFileSync(path.join(__dirname, 'map-streaming.js'), 'utf8');

const checks = [
  ['streaming module is included', /map-streaming\.js/.test(html)],
  ['ODStreaming namespace exists', /window\.ODStreaming/.test(moduleSource)],
  ['chunk registration exists', /OS\.register/.test(moduleSource)],
  ['chunk visibility update exists', /OS\.update/.test(moduleSource)],
  ['static merge helper exists', /OS\.mergeStatics/.test(moduleSource)],
  ['instancing helper exists', /OS\.instanced/.test(moduleSource)],
  ['LOD helper exists', /OS\.makeLOD/.test(moduleSource)],
  ['terrain is excluded from culling', /streamingIgnore/.test(html)],
  ['dynamic objects are excluded from culling', /userData\.dynamic/.test(moduleSource)],
  ['dynamic object registry is supported', /__odDynamicObjects/.test(moduleSource)],
  ['player position callback exists', /__odPlayerPosition/.test(html)],
  ['streaming tick is wired', /OS\.update\(window\.__odPlayerPosition\(\)\)/.test(moduleSource)]
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
