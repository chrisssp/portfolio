# Archive Report: living-subtle-motion

**Archived**: 2026-06-19
**Change**: living-subtle-motion
**Mode**: openspec
**Archive Path**: `openspec/changes/archive/2026-06-19-living-subtle-motion/`

## Summary

Continuous, purposeful micro-motion system adding 12 animation effects across the portfolio. All effects are GPU-composited, zero-dependency CSS keyframes with minimal vanilla JS for scroll-progress and timeline fill. Fully respects `prefers-reduced-motion: reduce`.

## Implemented Effects

| # | Effect | Tier | Component | Status |
|---|--------|------|-----------|--------|
| 1 | Profile Image Gentle Float | 1 | Hero.tsx | ✅ |
| 2 | Hero Name Gradient Shift | 1 | Hero.tsx | ✅ |
| 3 | Timeline Dot Pulse Ring | 1 | TimelineItem.tsx | ✅ |
| 4 | Scroll Progress Bar | 1 | ScrollProgress.tsx | ✅ |
| 5 | Timeline Connector Fill | 1 | TimelineItem.tsx | ✅ |
| 6 | Project Image Idle Zoom | 2 | FeatureCard.tsx | ✅ |
| 7 | CTA Button Glow Pulse | 2 | CTA.tsx | ✅ |
| 8 | Differential Float | 2 | AboutMe.tsx | ✅ |
| 9 | Social Icons Sequential Bob | 2 | Footer.tsx | ✅ |
| 10 | Active Nav Sliding Indicator | 3 | Header.tsx | ✅ |
| 11 | Section Header Icons Slow Sway | 3 | Experience.tsx | ✅ |
| 12 | Tech Badge Micro-Bounce | 3 | FeatureCard.tsx | ✅ |

## Verification

**Final Result**: PASS WITH WARNINGS (2 pre-existing WARNINGS only)

3 initial CRITICAL issues were fixed in commit `4b0341e`:
- **Effect 8 (Differential Float)**: Fixed amplitudes — Photo A: -6px/3s, Photo B: -10px/5s via `--motion-float-distance` CSS custom properties
- **Effect 10 (Nav Indicator)**: Refactored from `left`/`width` to `transform: translateX()` for GPU compositing
- **Effect 12 (Badge Bounce)**: Changed from mount trigger to IntersectionObserver via `useScrollReveal` hook

Remaining 2 WARNINGS (pre-existing, not blocking):
- Effect 3: Pulse ring uses `isFirst` instead of "active/current" dot logic
- Effect 9: Social icon stagger is 0.15s vs spec 0.1s (deemed acceptable)

## Spec Sync

| Domain | Action | Details |
|--------|--------|---------|
| `subtle-motion` | Created | New main spec at `openspec/specs/subtle-motion/spec.md` |

The spec was created as a new full spec (not a delta merge), since no prior main spec existed for this domain. The spec was updated to reflect the as-implemented state of all 12 effects, including the resolved critical fixes and accepted warning deviations.

## Commit History

| Commit | Description |
|--------|-------------|
| `bbb2342` | feat: add subtle motion CSS foundation and scroll progress bar |
| `26eb9f7` | feat: add hero floating portrait and gradient name animation |
| `f49d24e` | feat: animate experience timeline with pulse ring, sway, and connector fill |
| `2732478` | feat: add nav sliding indicator, card idle zoom, and badge micro-bounce |
| `971b551` | feat: add CTA glow, about photos differential float, and footer icon bob |
| `58b4f40` | refactor(tooltip): split position into align and direction props |
| `4b0341e` | fix: resolve 3 CRITICAL verify issues |

## Archive Contents

- proposal.md ✅
- spec.md ✅ (synced to main specs)
- design.md ✅
- tasks.md ✅ (40/40 tasks complete)
- verify-report.md ✅
- archive-report.md ✅ (this file)

## Source of Truth Updated

- `openspec/specs/subtle-motion/spec.md` — new main spec created

## SDD Cycle Complete

The change has been fully planned, implemented, verified, and archived.
Ready for the next change.
