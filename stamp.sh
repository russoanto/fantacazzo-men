#!/usr/bin/env bash
# Aggiunge ?v=<commit> ai link di style.css/app.js/data.js in tutte le pagine,
# così il browser riscarica gli asset a ogni deploy (cache-busting).
set -euo pipefail
VER="$(git rev-parse --short HEAD 2>/dev/null || date +%s)"
for f in *.html; do
  # normalizza (toglie eventuale ?v=... esistente) poi timbra
  sed -i -E 's#(assets/(style\.css|app\.js|data\.js))(\?v=[A-Za-z0-9]+)?#\1?v='"$VER"'#g' "$f"
done
echo "stamped v=$VER"
