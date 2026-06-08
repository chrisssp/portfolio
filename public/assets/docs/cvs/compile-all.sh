#!/usr/bin/env bash
# Compile all CVs to PDF
# Usage: ./compile-all.sh
# Requires: typst (install via: cargo install typst)

set -euo pipefail

cd "$(dirname "$0")"
ROOT="$(pwd)"
ERRORS=0

CVS=(
  "Software_Engineer_Christian_Serrano_CV.en"
  "Ingeniero_de_Software_Christian_Serrano_CV.es"
  "angular/Angular_Developer_Christian_Serrano_CV.en"
  "angular/Angular_Developer_Christian_Serrano_CV.es"
  "backend-java/Backend_Java_Christian_Serrano_CV.en"
  "backend-java/Backend_Java_Christian_Serrano_CV.es"
  "backend-node/Backend_Node_Christian_Serrano_CV.en"
  "backend-node/Backend_Node_Christian_Serrano_CV.es"
  "backend-python/Backend_Python_Christian_Serrano_CV.en"
  "backend-python/Backend_Python_Christian_Serrano_CV.es"
  "mobile/Mobile_Developer_Christian_Serrano_CV.en"
  "mobile/Mobile_Developer_Christian_Serrano_CV.es"
  "react/React_Developer_Christian_Serrano_CV.en"
  "react/React_Developer_Christian_Serrano_CV.es"
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
