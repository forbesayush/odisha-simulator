const fs = require('fs');
const path = require('path');

const html = fs.readFileSync(path.join(__dirname, 'index.html'), 'utf8');
const moduleSource = fs.readFileSync(path.join(__dirname, 'vehicles-texture-v4.js'), 'utf8');

const checks = [
  ['v4 module is included', /vehicles-texture-v4\.js/.test(html)],
  ['ODUpgrade namespace exists', /window\.ODUpgrade/.test(moduleSource)],
  ['2048 auto hood texture exists', /canvasTexture\(2048,\s*1024/.test(moduleSource)],
  ['2048 auto side texture exists', /canvasTexture\(2048,\s*512/.test(moduleSource)],
  ['live LED texture exists', /function ledTexture\(\)/.test(moduleSource)],
  ['auto application exists', /OD\.applyToAuto/.test(moduleSource)],
  ['bus application exists', /OD\.applyToBus/.test(moduleSource)],
  ['vehicle groups are exposed', /__odVehicleGroups/.test(html)],
  ['auto upgrade is bootstrapped', /OD\.applyToAuto\(groups\.auto\)/.test(moduleSource)]
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
