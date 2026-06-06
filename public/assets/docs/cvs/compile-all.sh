#!/usr/bin/env bash
# Compile all CVs to PDF
# Usage: ./compile-all.sh
# Requires: typst (install via: cargo install typst)

set -euo pipefail

cd "$(dirname "$0")"
ROOT="$(pwd)"
ERRORS=0

CVS=(
  "CV_Christian_Serrano_Software_Engineer"
  "CV_Christian_Serrano_Ingeniero_de_Software"
  "angular/CV_Christian_Serrano_Angular_Developer.en"
  "angular/CV_Christian_Serrano_Angular_Developer.es"
  "backend-java/CV_Christian_Serrano_Backend_Java.en"
  "backend-java/CV_Christian_Serrano_Backend_Java.es"
  "backend-node/CV_Christian_Serrano_Backend_Node.en"
  "backend-node/CV_Christian_Serrano_Backend_Node.es"
  "backend-python/CV_Christian_Serrano_Backend_Python.en"
  "backend-python/CV_Christian_Serrano_Backend_Python.es"
  "mobile/CV_Christian_Serrano_Mobile_Developer.en"
  "mobile/CV_Christian_Serrano_Mobile_Developer.es"
  "react/CV_Christian_Serrano_React_Developer.en"
  "react/CV_Christian_Serrano_React_Developer.es"
)

for cv in "${CVS[@]}"; do
  src="${cv}.typ"
  out="${cv}.pdf"
  printf "📄 %s ... " "$src"
  if typst compile --root "$ROOT" "$src" 2>/dev/null; then
    echo "✅"
  else
    echo "❌"
    ERRORS=$((ERRORS + 1))
  fi
done

echo ""
if [ "$ERRORS" -eq 0 ]; then
  echo "🎯 Todos los PDFs actualizados sin errores"
else
  echo "❌ $ERRORS error(es)"
fi
exit "$ERRORS"
