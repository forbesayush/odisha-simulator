// Generates a release manifest with byte counts and SHA-256 checksums.
// Usage: node verify_release.js

const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const FILES = [
  'index.html',
  'odisha-landing.html',
  'namma-metro.html',
  'texture-urls.txt',
  'download-textures.sh',
  'download-textures.js',
  'vehicles-texture-v4.js'
];

function sha256(filePath) {
  return crypto.createHash('sha256').update(fs.readFileSync(filePath)).digest('hex');
}

function humanSize(bytes) {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
}

const manifest = {
  generated: new Date().toISOString(),
  version: '4.0.0-vehicle-texture-upgrade',
  deliverables: []
};

console.log('AMARA ODISHA — RELEASE MANIFEST GENERATOR\n');

let allPresent = true;
for (const file of FILES) {
  const fullPath = path.join(__dirname, file);
  if (!fs.existsSync(fullPath)) {
    console.log(`✗ MISSING: ${file}`);
    allPresent = false;
    continue;
  }

  const stat = fs.statSync(fullPath);
  const entry = {
    file,
    bytes: stat.size,
    size: humanSize(stat.size),
    sha256: sha256(fullPath),
    modified: stat.mtime.toISOString()
  };
  manifest.deliverables.push(entry);
  console.log(`✓ ${file.padEnd(28)} ${entry.size.padStart(10)}  ${entry.sha256}`);
}

if (!allPresent) {
  console.error('\nManifest incomplete: one or more deliverables are missing.');
  process.exitCode = 1;
} else {
  const manifestPath = path.join(__dirname, 'release-manifest.json');
  fs.writeFileSync(manifestPath, `${JSON.stringify(manifest, null, 2)}\n`);
  console.log(`\n✓ Manifest written: ${path.basename(manifestPath)}`);
  console.log(`  Build: ${manifest.version}`);
}
