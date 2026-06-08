#!/usr/bin/env bash
# Setup CV compilation environment
# Installs fonts and patches the pro-academic-cv package for Letter size + remove fakesc
set -euo pipefail

PKG="$HOME/.cache/typst/packages/preview/pro-academic-cv/0.1.0"
LIB="$PKG/lib.typ"

# --- Fonts ---
if ! typst fonts 2>/dev/null | grep -q "TeX Gyre Pagella"; then
  echo "📦 Installing TeX Gyre Pagella fonts..."
  FONTS_DIR="$HOME/.local/share/fonts"
  mkdir -p "$FONTS_DIR"
  # Try to install from system package (Fedora)
  if command -v dnf &>/dev/null; then
    RPM=$(mktemp -d)
    cd "$RPM"
    dnf download texlive-tex-gyre 2>/dev/null || {
      echo "❌ Could not download texlive-tex-gyre. Install fonts manually."
      exit 1
    }
    rpm2cpio texlive-tex-gyre-*.rpm | cpio -idm 2>/dev/null
    find "$RPM" -name "*pagella*" -name "*.otf" -exec cp {} "$FONTS_DIR" \;
    rm -rf "$RPM"
    fc-cache -f "$FONTS_DIR" 2>/dev/null || true
  else
    echo "⚠️  Unsupported package manager. Install TeX Gyre Pagella manually."
    echo "   See: https://www.gust.org.pl/projects/e-foundry/tex-gyre/pagella"
  fi
  echo "✅ Fonts installed"
else
  echo "✅ TeX Gyre Pagella fonts already available"
fi

# --- Package patch ---
if [ ! -f "$LIB" ]; then
  echo "⚠️  pro-academic-cv package not found at $PKG"
  echo "   Run a Typst compile first to download the package, then re-run setup.sh"
  exit 1
fi

PATCHED_MARKER="# PATCHED BY SETUP.SH"

if grep -q "$PATCHED_MARKER" "$LIB" 2>/dev/null; then
  echo "✅ Package already patched"
  exit 0
fi

echo "📝 Patching pro-academic-cv..."
cp -a "$LIB" "$LIB.bak"

# 1. Remove fakesc import
sed -i '/^#import "@preview\/cuti:0\.4\.0": fakesc$/d' "$LIB"

# 2. Remove fakesc show rule (the line that calls fakesc)
sed -i '/#show: it => fakesc\[#text(tracking: 0\.05em, it)\]/d' "$LIB"

# 3. Add tracking to section title text call (original has no tracking)
sed -i 's/weight: heading-settings.section-title-weight)\[#parsed.title\]/weight: heading-settings.section-title-weight, tracking: 0.05em)[#parsed.title]/' "$LIB"

# 4. Add paper parameter support for Letter size
# Find the resume function signature and inject
sed -i 's/^#let resume(\$/paper: "us-letter",\n&/' "$LIB"
# Replace the hardcoded a4 paper with the paper parameter
sed -i 's/paper: "a4",$/paper: paper,/' "$LIB"

# 5. Add patch marker
echo "$PATCHED_MARKER" >> "$LIB"

echo "✅ Package patched (backup at lib.typ.bak)"
echo ""
echo "🎯 Ready. Run ./compile-all.sh to build all CVs."
