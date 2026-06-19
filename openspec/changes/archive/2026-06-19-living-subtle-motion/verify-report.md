# Verification Report: living-subtle-motion

**Change**: living-subtle-motion
**Mode**: openspec
**Date**: 2026-06-19
**Spec**: openspec/changes/living-subtle-motion/spec.md

---

## Completeness Table

| Artifact | Status |
|----------|--------|
| Proposal | N/A (not required) |
| Spec | ✅ Read |
| Design | N/A (not required) |
| Tasks | N/A (not required) |
| Implementation | ✅ Verified |

---

## Build & Test Evidence

| Check | Result | Notes |
|-------|--------|-------|
| Next.js Build | ✅ PASS | Compiled successfully |
| TypeScript | ✅ PASS | No new errors |
| ESLint | ⚠️ PRE-EXISTING | 5 errors in unrelated files (MusicPlayer, Tooltip, SmartEmailButton, useProjectFilter, useScrollReveal) |
| Biome Format | ⚠️ PRE-EXISTING | Formatting issues in unrelated files |
| Unit Tests | N/A | No test suite configured |

---

## Spec Compliance Matrix

| # | Effect | Component | Exists | GPU-Composited | Reduced Motion | Matches Spec | No Layout Thrash | Verdict |
|---|--------|-----------|--------|----------------|----------------|--------------|------------------|---------|
| 1 | Profile Image Float | Hero.tsx | ✅ | ✅ transform: translateY | ✅ animate-none + reset | ✅ 4s, -8px, ease-in-out | ✅ | **PASS** |
| 2 | Hero Name Gradient Shift | Hero.tsx | ✅ | ⚠️ background-position* | ✅ animate-none + reset | ✅ 8s, 0→200%, linear | ✅ | **PASS** |
| 3 | Timeline Dot Pulse Ring | TimelineItem.tsx | ✅ | ✅ box-shadow | ✅ animate-none + reset | ⚠️ isFirst only | ✅ | **WARNING** |
| 4 | Scroll Progress Bar | ScrollProgress.tsx | ✅ | ✅ transform: scaleX | ✅ motion-reduce:hidden | ✅ RAF + passive listener | ✅ | **PASS** |
| 5 | Timeline Connector Fill | TimelineItem.tsx | ✅ | ✅ transform: scaleY + opacity | ✅ motion-reduce:transition-none | ✅ IntersectionObserver + CSS transition | ✅ | **PASS** |
| 6 | Project Image Idle Zoom | FeatureCard.tsx | ✅ | ✅ transform: scale | ✅ animate-none + reset | ✅ 20s, 1→1.03, hover pause | ✅ | **PASS** |
| 7 | CTA Button Glow Pulse | CTA.tsx | ✅ | ✅ box-shadow | ✅ animate-none + static glow | ✅ 3s, ease-in-out | ✅ | **PASS** |
| 8 | Differential Float | AboutMe.tsx | ✅ | ✅ transform: translateY | ✅ animate-none + reset | ❌ Same amplitude (-8px) | ✅ | **CRITICAL** |
| 9 | Social Icons Bob | Footer.tsx | ✅ | ✅ transform: translateY | ✅ animate-none + reset | ⚠️ 0.15s vs 0.1s stagger | ✅ | **WARNING** |
| 10 | Nav Sliding Indicator | Header.tsx | ✅ | ❌ left/width (not transform) | ✅ motion-reduce:transition-none | ✅ Behavior matches | ❌ Layout thrash | **CRITICAL** |
| 11 | Section Header Sway | Experience.tsx | ✅ | ✅ transform: rotate | ✅ animate-none + reset | ✅ 6s, ±3deg, ease-in-out | ✅ | **PASS** |
| 12 | Tech Badge Micro-Bounce | FeatureCard.tsx | ✅ | ✅ transform: scale + opacity | ✅ animate-none + reset | ❌ Mount trigger, not scroll-reveal | ✅ | **CRITICAL** |

\* Effect 2 uses `background-position` which is not strictly GPU-composited, but the spec explicitly defines it this way.

---

## Correctness Table

| Check | Status | Details |
|-------|--------|---------|
| All 12 effects implemented | ✅ | All present in code |
| GPU-composited properties only | ⚠️ | Effects 2, 10 violate |
| prefers-reduced-motion respected | ✅ | All 12 have overrides |
| No external animation libs | ✅ | Pure CSS + <20 lines vanilla JS |
| Total new JS < 20 lines | ✅ | ~18 lines in ScrollProgress |
| No layout thrash on scroll | ❌ | Effect 10 uses left/width |

---

## Design Coherence

| Check | Status | Details |
|-------|--------|---------|
| CSS variables used consistently | ✅ | --motion-* tokens in @theme and keyframes |
| Keyframes match @theme tokens | ✅ | All 7 keyframes use CSS variables |
| Reduced-motion overrides complete | ✅ | All 7 animation classes covered |

---

## Issues Summary

### CRITICAL

| Effect | Issue | Impact |
|--------|-------|--------|
| 8. Differential Float | Both photos use same keyframe amplitude (-8px). Spec requires Photo A: -6px (3s), Photo B: -10px (5s). Inline style only overrides duration. | Visual behavior doesn't match spec; no differential parallax depth |
| 10. Nav Sliding Indicator | Uses `left` and `width` CSS properties with `transition-all`. These trigger layout recalculation. Spec explicitly requires `transform: translateX()` only. | Layout thrash on section change; not GPU-composited |
| 12. Tech Badge Micro-Bounce | Animation triggers on component mount (CSS `animate-bounce-in` class), not on scroll-reveal via IntersectionObserver as specified. | Badges animate immediately on page load, not when entering viewport |

### WARNING

| Effect | Issue | Impact |
|--------|-------|--------|
| 3. Timeline Dot Pulse Ring | Uses `isFirst` (first timeline item) instead of "active/current" dot logic. Spec says "Only the active/current timeline dot pulses." | May pulse on wrong dot if first item isn't current |
| 9. Social Icons Bob | Stagger delay is 0.15s (calc(var(--i) * 0.15s)) vs spec 0.1s (calc(var(--i) * 0.1s)) | Slightly slower wave effect |

### SUGGESTION

| Area | Suggestion |
|------|------------|
| globals.css | Consider using higher-specificity selectors instead of `!important` for reduced-motion overrides (though current approach with biome-ignore is acceptable for a11y) |
| ScrollProgress | JS is ~18 lines (spec says <20). Acceptable but close to limit. |

---

## Final Verdict

**FAIL** — 3 CRITICAL issues block verification pass.

### Required Fixes Before Archive

1. **Effect 8 (Differential Float)**: Create separate keyframes or CSS classes for 3s/-6px and 5s/-10px, or use CSS custom properties for amplitude in keyframes
2. **Effect 10 (Nav Indicator)**: Refactor to use `transform: translateX()` and `scaleX()` instead of `left`/`width`
3. **Effect 12 (Badge Bounce)**: Wrap badges in IntersectionObserver-triggered animation (re-use existing `useScrollReveal` or `AnimatedSection` pattern)

---

## Files Verified

- app/globals.css — keyframes + @theme tokens ✅
- components/atoms/ScrollProgress.tsx — scroll bar component ✅
- app/[lang]/layout.tsx — ScrollProgress import ✅
- components/organisms/Hero.tsx — float + gradient ✅
- components/organisms/Experience.tsx — sway + isFirst pass-through ✅
- components/molecules/TimelineItem.tsx — pulse ring + connector fill ✅
- components/molecules/Header.tsx — nav indicator ❌
- components/molecules/FeatureCard.tsx — idle zoom + badge bounce ❌
- components/organisms/CTA.tsx — glow pulse ✅
- components/organisms/AboutMe.tsx — differential float ❌
- components/organisms/Footer.tsx — social bob ⚠️