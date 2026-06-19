#!/usr/bin/env bash
# Compile all CVs to PDF
# Usage: ./compile-all.sh
# Requires: typst (install via: cargo install typst)

set -euo pipefail

cd "$(dirname "$0")"
ROOT="$(pwd)"
ERRORS=0

CVS=(
  "fullstack/FullStack_Developer_Christian_Serrano_CV.en"
  "fullstack/Desarrollador_FullStack_Christian_Serrano_CV.es"
  "angular/Angular_Developer_Christian_Serrano_CV.en"
  "angular/Desarrollador_Angular_Christian_Serrano_CV.es"
  "backend-java/Backend_Java_Christian_Serrano_CV.en"
  "backend-java/Backend_Java_Christian_Serrano_CV.es"
  "backend-node/Backend_Node_Christian_Serrano_CV.en"
  "backend-node/Backend_Node_Christian_Serrano_CV.es"
  "backend-python/Backend_Python_Christian_Serrano_CV.en"
  "backend-python/Backend_Python_Christian_Serrano_CV.es"
  "mobile/Mobile_Developer_Christian_Serrano_CV.en"
  "mobile/Desarrollador_Móvil_Christian_Serrano_CV.es"
  "react/React_Developer_Christian_Serrano_CV.en"
  "react/Desarrollador_React_Christian_Serrano_CV.es"
  "frontend/Frontend_Developer_Christian_Serrano_CV.en"
  "frontend/Desarrollador_Frontend_Christian_Serrano_CV.es"
  "backend/Backend_Developer_Christian_Serrano_CV.en"
  "backend/Desarrollador_Backend_Christian_Serrano_CV.es"
  "ai-ml/AI_ML_Developer_Christian_Serrano_CV.en"
  "ai-ml/Desarrollador_AI_ML_Christian_Serrano_CV.es"
)

SHARED_DIR="_shared"

for cv in "${CVS[@]}"; do
  src="${cv}.typ"
  out="${cv}.pdf"

  # Check if recompilation is needed
  needs_compile=false
  if [ ! -f "$out" ]; then
    needs_compile=true
  elif [ "$src" -nt "$out" ]; then
    needs_compile=true
  else
    # Check if any shared file is newer than the PDF
    for shared in "$SHARED_DIR"/*.typ; do
      [ -f "$shared" ] && [ "$shared" -nt "$out" ] && needs_compile=true && break
    done
  fi

  if [ "$needs_compile" = false ]; then
    printf "⏭️ %s ... up to date\n" "$src"
    continue
  fi

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
