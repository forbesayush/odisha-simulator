// Confirms the v3.0 procedural texture overhaul is present and wired.

const fs = require('fs');
const path = require('path');

const html = fs.readFileSync(path.join(__dirname, 'index.html'), 'utf8');

const checks = [
  ['ground uses 1024 canvas', /function\s+ground\(\)[\s\S]*?makeCanvas\(1024,\s*1024/],
  ['asphalt uses 1024 canvas', /function\s+asphalt\(\)[\s\S]*?makeCanvas\(1024,\s*1024/],
  ['pavement uses 1024 canvas', /function\s+pavement\(\)[\s\S]*?makeCanvas\(1024,\s*1024/],
  ['facade uses 1024 canvas', /function\s+facade\([\s\S]*?makeCanvas\(1024,\s*1024/],
  ['laterite uses 1024 canvas', /function\s+laterite\(\)[\s\S]*?makeCanvas\(1024,\s*1024/],
  ['roof uses 1024 canvas', /function\s+roof\(\)[\s\S]*?makeCanvas\(1024,\s*1024/],
  ['glassTex uses 1024 canvas', /function\s+glassTex\(\)[\s\S]*?makeCanvas\(1024,\s*1024/],
  ['awningTex uses 1024 canvas', /function\s+awningTex\([\s\S]*?makeCanvas\(1024,\s*1024/],
  ['RCC concrete factory present', /function\s+rccConcreteTex\(\)/],
  ['Odia granite factory present', /function\s+odiaGraniteTex\(\)/],
  ['rusty tin factory present', /function\s+rustyTinTex\(\)/],
  ['Pattachitra factory present', /function\s+pattachitraTex\(\)/],
  ['BM uses RCC concrete', /concrete:\s*\(\)\s*=>[\s\S]*?rccConcreteTex\(\)/],
  ['BM uses rusty tin', /tin:\s*\(\)\s*=>[\s\S]*?rustyTinTex\(\)/],
  ['BM uses Pattachitra cloth', /fabricIkat:\s*\(\)\s*=>[\s\S]*?pattachitraTex\(\)/],
  ['Canvas textures use anisotropy', /tex\.anisotropy\s*=\s*4/]
];

let failures = 0;
for (const [name, pattern] of checks) {
  if (pattern.test(html)) console.log(`✓ ${name}`);
  else {
    console.log(`✗ ${name}`);
    failures++;
  }
}

console.log(`\n${failures === 0 ? 'ALL PASS' : 'FAILURES'}: ${checks.length - failures}/${checks.length}`);
process.exitCode = failures === 0 ? 0 : 1;

