# Proposal: Living Subtle Motion

## Intent

The portfolio currently relies entirely on reactive animations (scroll-reveals, hover effects). It feels static between interactions. This change adds continuous, purposeful micro-motion that makes the site feel alive — guiding attention, conveying energy, and providing feedback — without distracting from content or hurting performance.

## Scope

### In Scope

- 12 animation effects across Tiers 1-3 (see table below)
- CSS keyframes in `globals.css` + `motion-reduce:` overrides
- Minimal JS for scroll-progress bar and timeline fill (passive listeners, <15 lines each)
- `prefers-reduced-motion` support on every effect

### Out of Scope

- External animation libraries (framer-motion, GSAP, anime.js)
- Particle systems, parallax scrolling, cursor trails, confetti
- Complex choreographed sequences
- Page-load entrance animations (defer to future change)

## Capabilities

### New Capabilities
- `subtle-motion-system`: CSS keyframes, scroll-progress, timeline-fill, motion-reduce gate

### Modified Capabilities
- None — this adds new visual behavior without changing existing spec requirements

## Approach

| # | Effect | Tier | Location | Method | Perf Note |
|---|--------|------|----------|--------|-----------|
| 1 | Profile image float | 1 | `Hero.tsx` / `globals.css` | CSS `translateY` keyframe, 4s | GPU-composited, zero JS |
| 2 | Name gradient shift | 1 | `globals.css` | CSS `background-position` keyframe, 8s | GPU-composited, zero JS |
| 3 | Timeline dot pulse ring | 1 | `Experience.tsx` / `globals.css` | CSS `box-shadow` keyframe | GPU-composited, zero JS |
| 4 | Scroll progress bar | 1 | `layout.tsx` | JS passive scroll + `transform: scaleX` | <10 lines JS, RAF |
| 5 | Timeline connector fill | 1 | `Experience.tsx` | JS IntersectionObserver + CSS `background` | Reuse AnimatedSection pattern |
| 6 | Image idle zoom | 2 | `FeatureCard.tsx` / `globals.css` | CSS `scale` keyframe, 20s | GPU-composited, hover resets |
| 7 | CTA button glow | 2 | `globals.css` | CSS `box-shadow` keyframe | GPU-composited |
| 8 | Differential float | 2 | `About.tsx` / `globals.css` | Two CSS `translateY` keyframes, 3s/5s | GPU-composited |
| 9 | Social icons wave | 2 | `Footer.tsx` / `globals.css` | CSS `translateY` + `animation-delay` stagger | GPU-composited |
| 10 | Active nav indicator | 3 | `Header.tsx` | CSS `transform: translateX` on underline element | Reuse existing `activeSection` |
| 11 | Section icon sway | 3 | `globals.css` | CSS `rotate` keyframe, 6s | GPU-composited |
| 12 | Tech badge micro-bounce | 3 | `globals.css` | CSS `scale` overshoot keyframe | Triggers on scroll-reveal entry |

## Affected Areas

| Area | Impact | Description |
|------|--------|-------------|
| `src/app/globals.css` | Modified | Add all CSS keyframes + `motion-reduce` utilities |
| `src/components/organisms/Hero/` | Modified | Float + gradient effects |
| `src/components/organisms/Experience/` | Modified | Pulse dot + timeline fill |
| `src/components/organisms/Footer/` | Modified | Social icon wave |
| `src/components/organisms/Header/` | Modified | Active nav indicator |
| `src/components/organisms/About/` | Modified | Differential float |
| `src/components/molecules/FeatureCard/` | Modified | Idle zoom |
| `src/app/layout.tsx` | Modified | Scroll progress bar |

## Risks

| Risk | Likelihood | Mitigation |
|------|------------|------------|
| Motion-reduce gate missing on one effect | Low | Checklist in task: every class must have `motion-reduce:` counterpart |
| Timeline fill JS causes layout thrash | Low | Use `transform`/`opacity` only, passive listener, RAF |
| Idle zoom conflicts with existing hover zoom | Low | Use `animation-play-state: paused` on hover, different scale values |

## Rollback Plan

All effects are additive CSS in `globals.css` and small component edits. Revert by removing the added keyframe classes and the scroll-progress bar component. No data, routing, or dependency changes.

## Dependencies

- None — pure CSS + minimal vanilla JS. No new packages.

## Success Criteria

- [ ] All 12 effects render and animate correctly
- [ ] `prefers-reduced-motion: reduce` disables every animation
- [ ] Lighthouse performance score unchanged (±2 points)
- [ ] No new JS bundle overhead beyond <20 lines inline
- [ ] No flickering or jank on scroll (60fps maintained)
