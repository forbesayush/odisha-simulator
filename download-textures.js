// download-textures.js
// Cross-platform texture downloader for Amara Odisha Adventures
const fs = require('fs');
const path = require('path');
const https = require('https');

const SETS = [
  // Category 1 — Temple / Heritage
  { dest: 'laterite', src: 'red_sandstone_pavement', alt: 'red_sandstone' },
  { dest: 'sandstone_red', src: 'white_sandstone_bricks', alt: 'stone_bricks' },
  { dest: 'plaster_ochre', src: 'plastered_wall', alt: 'plastered_wall' },
  { dest: 'plaster_white', src: 'plastered_wall', alt: 'plastered_wall' },
  { dest: 'brick_aged', src: 'brick_floor_003', alt: 'bricks_09' },
  { dest: 'concrete_raw', src: 'concrete_wall_008', alt: 'concrete_wall_008' },
  { dest: 'wattle_daub', src: 'clay_plaster', alt: 'wattle_and_daub' },

  // Category 2 — Wood & Stalls
  { dest: 'wood_teak', src: 'wood_planks', alt: 'wood_planks' },
  { dest: 'bamboo', src: 'bamboo_wall', alt: 'bamboo' },
  { dest: 'thatch', src: 'thatch_roof_angled', alt: 'thatch' },
  { dest: 'tin_corrugated', src: 'rusty_metal_02', alt: 'metal_corrugated_02' },

  // Category 3 — Roads
  { dest: 'asphalt', src: 'asphalt_02', alt: 'asphalt_02' },
  { dest: 'asphalt_worn', src: 'asphalt_02', alt: 'asphalt_02' },

  // Category 4 — Fabrics
  { dest: 'fabric_ikat', src: 'fabric_pattern_05', alt: 'fabric_pattern_05' },
  { dest: 'fabric_burlap', src: 'fabric_pattern_07', alt: 'canvas_awning' },

  // Category 5 — Roofs & Glass
  { dest: 'terracotta_roof', src: 'clay_roof_tiles_03', alt: 'roof_tiles_03' },
  { dest: 'glass_modern', src: 'metal_plate', alt: 'glass_modern' },

  // Category 6 — Interior
  { dest: 'floor_tiles_02', src: 'floor_tiles_02', alt: 'floor_tiles_02' },
  { dest: 'wood_floor_deck', src: 'wood_floor_deck', alt: 'wood_floor_deck' }
];

const MAPS = [
  { file: 'albedo.jpg', suffix: 'diff_1k.jpg' },
  { file: 'normal.jpg', suffix: 'nor_gl_1k.jpg' },
  { file: 'roughness.jpg', suffix: 'rough_1k.jpg' },
  { file: 'ao.jpg', suffix: 'ao_1k.jpg' }
];

function downloadUrl(url, dest) {
  return new Promise((resolve) => {
    if (fs.existsSync(dest) && fs.statSync(dest).size > 1000) {
      console.log('  ✓', path.basename(path.dirname(dest)) + '/' + path.basename(dest), '(already exists)');
      return resolve(true);
    }
    const dir = path.dirname(dest);
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

    const request = (targetUrl) => {
      https.get(targetUrl, (res) => {
        if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
          return request(res.headers.location);
        }
        if (res.statusCode !== 200) {
          return resolve(false);
        }
        const file = fs.createWriteStream(dest);
        res.pipe(file);
        file.on('finish', () => {
          file.close(() => {
            console.log('  ↓', path.basename(path.dirname(dest)) + '/' + path.basename(dest));
            resolve(true);
          });
        });
      }).on('error', () => {
        if (fs.existsSync(dest)) fs.unlinkSync(dest);
        resolve(false);
      });
    };

    request(url);
  });
}

async function run() {
  const repoRoot = path.join(__dirname, 'odisha-simulator');
  const texturesDir = path.join(repoRoot, 'textures');
  console.log('════════════════════════════════════════');
  console.log('  Downloading Amara Odisha Textures');
  console.log('  (19 sets × 4 maps = 76 files)');
  console.log('════════════════════════════════════════\n');

  let successCount = 0;
  let totalCount = SETS.length * MAPS.length;

  for (const set of SETS) {
    const destDir = path.join(texturesDir, set.dest);
    for (const map of MAPS) {
      const destFile = path.join(destDir, map.file);
      // Try primary src on Poly Haven
      let url = `https://dl.polyhaven.org/file/ph-assets/Textures/jpg/1k/${set.src}/${set.src}_${map.suffix}`;
      let ok = await downloadUrl(url, destFile);
      if (!ok && set.alt !== set.src) {
        url = `https://dl.polyhaven.org/file/ph-assets/Textures/jpg/1k/${set.alt}/${set.alt}_${map.suffix}`;
        ok = await downloadUrl(url, destFile);
      }
      if (ok) successCount++;
      else console.log('  ✗ Notice: missing remote asset for', set.dest, map.file, '(using procedural fallback)');
    }
  }

  // Also copy downloaded files to Downloads/textures for local offline runner
  const dlTexturesDir = 'C:/Users/Ayush Chatterjee/Downloads/textures';
  if (fs.existsSync(texturesDir)) {
    const copyRecursive = (src, dst) => {
      if (!fs.existsSync(dst)) fs.mkdirSync(dst, { recursive: true });
      const entries = fs.readdirSync(src, { withFileTypes: true });
      for (const ent of entries) {
        const sPath = path.join(src, ent.name);
        const dPath = path.join(dst, ent.name);
        if (ent.isDirectory()) copyRecursive(sPath, dPath);
        else if (ent.isFile() && ent.name.endsWith('.jpg')) {
          fs.copyFileSync(sPath, dPath);
        }
      }
    };
    try { copyRecursive(texturesDir, dlTexturesDir); } catch(e) {}
  }

  console.log('\n════════════════════════════════════════');
  console.log(`  ✅ Download process complete!`);
  console.log(`  Downloaded: ${successCount} / ${totalCount} maps`);
  console.log('════════════════════════════════════════\n');
}

run();
