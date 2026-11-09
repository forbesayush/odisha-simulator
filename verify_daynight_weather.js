const fs = require('fs');
const path = require('path');

const html = fs.readFileSync(path.join(__dirname, 'index.html'), 'utf8');
const moduleSource = fs.readFileSync(path.join(__dirname, 'daynight-weather.js'), 'utf8');

const checks = [
  ['day/night module is included', /daynight-weather\.js/.test(html)],
  ['ODClock namespace exists', /window\.ODClock/.test(moduleSource)],
  ['time setters exist', /OC\.setTime/.test(moduleSource) && /OC\.getTime/.test(moduleSource)],
  ['speed control exists', /OC\.setSpeed/.test(moduleSource)],
  ['sky keyframes exist', /const SKY = \[/.test(moduleSource)],
  ['sun movement exists', /sun\.position\.set/.test(moduleSource)],
  ['fog interpolation exists', /scene\.fog\.color\.copy/.test(moduleSource)],
  ['streetlight transitions exist', /streetlights\.forEach/.test(moduleSource)],
  ['clock initialized from game lights', /__odClockRefs/.test(html) && /OC\.init\(refs\.scene/.test(moduleSource)],
  ['clock tick is wired', /OC\.tick\(dt\)/.test(moduleSource)]
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
