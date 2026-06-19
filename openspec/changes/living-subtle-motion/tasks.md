# Tasks: Living Subtle Motion

## Review Workload Forecast

| Field | Value |
|-------|-------|
| Estimated changed lines | 350–420 |
| 400-line budget risk | Medium |
| Chained PRs recommended | Yes |
| Suggested split | PR 1: CSS Foundation + ScrollProgress + Hero (foundation + always-visible effects) → PR 2: Experience + Header + FeatureCard (timeline, nav, cards) → PR 3: CTA + AboutMe + Footer (remaining sections) |
| Delivery strategy | ask-on-risk |
| Chain strategy | stacked-to-main |

Decision needed before apply: Yes
Chained PRs recommended: Yes
Chain strategy: stacked-to-main
400-line budget risk: Medium

### Suggested Work Units

| Unit | Goal | Likely PR | Notes |
|------|------|-----------|-------|
| 1 | CSS keyframes + ScrollProgress + Hero float/gradient | PR 1 | Base branch; zero existing code risk; tests/docs included |
| 2 | Experience timeline pulse/sway/fill + Header nav indicator | PR 2 | Depends on PR 1; immediate parent/base branch boundary; tests/docs included |
| 3 | FeatureCard idle zoom/badge bounce + CTA glow + AboutMe float + Footer bob | PR 3 | Depends on PR 1; immediate parent/base branch boundary; tests/docs included |

## Phase 1: CSS Foundation — keyframes + @theme tokens

- [x] 1.1 Modify `app/globals.css` — add 8 `@keyframes` (float, gradientShift, pulseRing, idleZoom, glowPulse, sway, microBounce, bob)
- [x] 1.2 Register all 8 as `--animate-*` tokens in the `@theme` block
- [x] 1.3 Add CSS custom properties for animation params (--motion-float-distance: -8px, --motion-bob-distance: -4px, --motion-sway-angle: 3deg, --motion-zoom-scale: 1.03)
- [x] 1.4 Add `motion-reduce:animate-none` Tailwind variant overrides for each keyframe

## Phase 2: ScrollProgress component

- [x] 2.1 CREATE `components/atoms/ScrollProgress.tsx` — fixed bar at top, z-50, h-0.5, bg-primary, transform-origin-left
- [x] 2.2 Implement passive scroll listener + RAF updating `transform: scaleX(var(--scroll-pct))`
- [x] 2.3 Add `motion-reduce:hidden` to hide bar when prefers-reduced-motion
- [x] 2.4 MODIFY `app/[lang]/layout.tsx` — import and render `<ScrollProgress />` inside `<ThemeProvider>`

## Phase 3: Hero — float + gradient shift

- [x] 3.1 MODIFY `components/organisms/Hero.tsx` line ~139 — add `animate-float` to profile image wrapper div
- [x] 3.2 Add `motion-reduce:animate-none` on the image wrapper
- [x] 3.3 MODIFY `components/organisms/Hero.tsx` line ~37 — add `bg-gradient-to-r from-primary via-body to-primary bg-clip-text text-transparent animate-gradient-shift` to the "Christian Serrano" Typography element (variant="hero")
- [x] 3.4 Add `motion-reduce:animate-none` on the name Typography

## Phase 4: Experience — pulse ring + sway + timeline fill

- [x] 4.1 MODIFY `components/organisms/Experience.tsx` line 24 — add `animate-sway` to `<MdWork>` icon
- [x] 4.2 MODIFY `components/organisms/Experience.tsx` — pass `isFirst={index === 0}` prop to first `TimelineItem`
- [x] 4.3 MODIFY `components/molecules/TimelineItem.tsx` — add `isFirst` prop, apply `animate-pulse-ring` to the dot div when `isFirst`
- [x] 4.4 Add `motion-reduce:animate-none` on the pulse ring
- [x] 4.5 MODIFY `components/molecules/TimelineItem.tsx` — add IntersectionObserver-based fill animation on the connector line (reuse existing `useScrollReveal` or add `isVisible` prop)
- [x] 4.6 The connector line `::before` pseudo-element fills with primary color when `isVisible` class is present
- [x] 4.7 Add `motion-reduce:transition-none` on the connector fill transition

## Phase 5: Header — nav sliding indicator

- [x] 5.1 MODIFY `components/molecules/Header.tsx` — add a sliding pill/underline div inside the `<nav>` that follows the active link
- [x] 5.2 Use existing `activeSection` state to determine active link
- [x] 5.3 Compute `left` and `width` from active link's `getBoundingClientRect()`
- [x] 5.4 Animate via `transform: translateX()` with `transition: transform 0.3s ease`
- [x] 5.5 Add `motion-reduce:transition-none` so indicator jumps instantly

## Phase 6: FeatureCard — idle zoom + badge bounce

- [x] 6.1 MODIFY `components/molecules/FeatureCard.tsx` line ~78-85 — add `animate-idle-zoom` to the `Image` element
- [x] 6.2 Add `group-hover:animation-play-state-paused` so hover overrides the idle zoom
- [x] 6.3 Add `motion-reduce:animate-none` on the idle zoom
- [x] 6.4 MODIFY `components/molecules/FeatureCard.tsx` line ~55 — add `animate-bounce-in` to the `Badge` container (triggers on scroll reveal via existing `AnimatedSection` wrapper)
- [x] 6.5 Add `motion-reduce:animate-none` on the badge bounce

## Phase 7: CTA — glow pulse

- [x] 7.1 MODIFY `components/organisms/CTA.tsx` line ~66 — add `animate-glow` to the primary LinkedIn button
- [x] 7.2 Add `motion-reduce:animate-none` with static subtle glow instead (`box-shadow: 0 0 8px rgba(var(--accent),0.3)`)

## Phase 8: About Me — differential float

- [x] 8.1 MODIFY `components/organisms/AboutMe.tsx` line ~88-103 — Photo A (top-right): add `animate-float` with custom duration 3s (`style={{ animationDuration: '3s' }}`)
- [x] 8.2 Add `motion-reduce:animate-none` on Photo A
- [x] 8.3 MODIFY `components/organisms/AboutMe.tsx` line ~105-121 — Photo B (bottom-left): add `animate-float` with custom duration 5s
- [x] 8.4 Add `motion-reduce:animate-none` on Photo B

## Phase 9: Footer — social icons sequential bob

- [x] 9.1 MODIFY `components/organisms/Footer.tsx` lines 29-64 — each icon `<a>` link gets `animate-bob` with inline style `{{ '--i': index }}`
- [x] 9.2 Use CSS `animation-delay: calc(var(--i) * 0.15s)` for wave stagger
- [x] 9.3 Add `motion-reduce:animate-none` on all icon links