#!/usr/bin/env bash
# ========================================================
# Amara Odisha — Auto-download all CC0 textures from Poly Haven
# Usage: bash download-textures.sh
# ========================================================
set -euo pipefail

cd "$(dirname "$0")/textures" 2>/dev/null || { mkdir -p textures && cd textures; }

# Helper: dl <url> <dest_path>
dl() {
  local url="$1" dest="$2"
  if [ -s "$dest" ]; then
    echo "  ✓ $dest (already exists)"
    return 0
  fi
  mkdir -p "$(dirname "$dest")"
  echo "  ↓ $dest"
  curl -fLsS --retry 3 -o "$dest" "$url" || { echo "  ✗ FAILED: $url"; rm -f "$dest"; }
}

# Helper: dl_fallback <url1> <url2> <dest_path>
dl_fallback() {
  local url1="$1" url2="$2" dest="$3"
  if [ -s "$dest" ]; then
    echo "  ✓ $dest (already exists)"
    return 0
  fi
  mkdir -p "$(dirname "$dest")"
  echo "  ↓ $dest"
  if ! curl -fLsS --retry 2 -o "$dest" "$url1" 2>/dev/null; then
    curl -fLsS --retry 2 -o "$dest" "$url2" || { echo "  ✗ FAILED: $url1 / $url2"; rm -f "$dest"; }
  fi
}

# Helper: fetch_set <dest_folder> <source_folder_on_cdn> [diff_name]
fetch_set() {
  local dest="$1" src="$2"
  local diff_name="${3:-diff}"
  dl_fallback "https://dl.polyhaven.org/file/ph-assets/Textures/jpg/1k/${src}/${src}_${diff_name}_1k.jpg" \
              "https://dl.polyhaven.org/file/ph-assets/Textures/jpg/1k/${src}/${src}_diff_1k.jpg" \
              "$dest/albedo.jpg"
  dl "https://dl.polyhaven.org/file/ph-assets/Textures/jpg/1k/${src}/${src}_nor_gl_1k.jpg"  "$dest/normal.jpg"
  dl "https://dl.polyhaven.org/file/ph-assets/Textures/jpg/1k/${src}/${src}_rough_1k.jpg"   "$dest/roughness.jpg"
  dl "https://dl.polyhaven.org/file/ph-assets/Textures/jpg/1k/${src}/${src}_ao_1k.jpg"      "$dest/ao.jpg"
}

echo "════════════════════════════════════════"
echo "  Downloading Amara Odisha Textures"
echo "  (19 sets × 4 maps = 76 files)"
echo "════════════════════════════════════════"
echo ""

echo "▸ Category 1 — Temple / Heritage"
fetch_set "laterite"          "red_sandstone_pavement"
fetch_set "sandstone_red"     "white_sandstone_bricks"
fetch_set "plaster_ochre"     "plastered_wall"
fetch_set "plaster_white"     "plastered_wall"
fetch_set "brick_aged"        "brick_floor_003" "diffuse"
fetch_set "concrete_raw"      "concrete_wall_008"
fetch_set "wattle_daub"       "clay_plaster"

echo ""
echo "▸ Category 2 — Wood & Stalls"
fetch_set "wood_teak"         "wood_planks"
fetch_set "bamboo"            "bamboo_wall"
fetch_set "thatch"            "thatch_roof_angled"
fetch_set "tin_corrugated"    "rusty_metal_02"

echo ""
echo "▸ Category 3 — Roads"
fetch_set "asphalt"           "asphalt_02"
fetch_set "asphalt_worn"      "asphalt_02"

echo ""
echo "▸ Category 4 — Fabrics"
fetch_set "fabric_ikat"       "fabric_pattern_05" "col_01"
fetch_set "fabric_burlap"     "fabric_pattern_07" "col_1"

echo ""
echo "▸ Category 5 — Roofs & Glass"
fetch_set "terracotta_roof"   "clay_roof_tiles_03"
fetch_set "glass_modern"      "metal_plate"

echo ""
echo "▸ Category 6 — Interior"
fetch_set "floor_tiles_02"    "floor_tiles_02"
fetch_set "wood_floor_deck"   "wood_floor_deck"

echo ""
echo "════════════════════════════════════════"
echo "  ✅ Download complete!"
echo "  Total: $(find . -name '*.jpg' -type f | wc -l) files"
echo "  Size:  $(du -sh . | cut -f1)"
echo "════════════════════════════════════════"
echo ""
echo "⚠️  CRITICAL: You MUST serve over HTTP, not file://"
echo ""
echo "  cd ..                          # back to repo root"
echo "  python3 -m http.server 8000    # or: npx serve ."
echo "  open http://localhost:8000/"
echo ""
echo "  Textures load over file:// → chrome BLOCKS them silently."
