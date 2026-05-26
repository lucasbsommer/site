#!/usr/bin/env bash
# Regenerates public/og.png from scripts/og/og.html via headless Chrome.
# Chrome shaves content off 1200x630 viewports, so render 1200x700 and crop.
set -euo pipefail
cd "$(dirname "$0")"
CHROME="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
OUT="../../public/og.png"
TMP="$(mktemp -t og-XXXXX).png"
"$CHROME" --headless=new --disable-gpu --hide-scrollbars \
  --force-device-scale-factor=1 --window-size=1200,700 \
  --screenshot="$TMP" "file://$(pwd)/og.html" >/dev/null 2>&1
sips --cropOffset 0 0 -c 630 1200 "$TMP" --out "$OUT" >/dev/null
rm -f "$TMP"
echo "wrote $OUT"
