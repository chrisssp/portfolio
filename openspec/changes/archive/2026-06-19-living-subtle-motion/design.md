# Design: Living Subtle Motion

## Technical Approach

All 12 effects live in `globals.css` as Tailwind v4 `@keyframes` + utility classes, with two minimal JS additions: a scroll-progress bar component and a timeline connector fill using the existing `useScrollReveal` IntersectionObserver pattern. Every effect uses only GPU-composited properties (`transform`, `opacity`, `box-shadow`).

## Architecture Decisions

| Decision | Option | Tradeoff | Chosen |
|----------|--------|----------|--------|
| Keyframe location | `globals.css` vs new `animations.css` | New file adds import; globals.css already has `page-enter` keyframe — keep co-located | `globals.css` |
| Animation registration | Tailwind v4 `@theme` keyframes vs raw CSS | `@theme` makes classes available as `animate-*` utilities; raw CSS requires manual class definition | Tailwind v4 `@theme` |
| Scroll progress | New atom component vs inline in layout | Component isolates logic, testable, reusable | New atom `ScrollProgress.tsx` |
| Timeline fill | New hook vs existing `AnimatedSection` IO | Reuse `useScrollReveal` — same pattern, no new infra | Existing pattern |
| Reduced-motion gate | `motion-reduce:` Tailwind variant vs CSS media query | Tailwind variant is idiomatic for this project (already used in `AnimatedSection`) | `motion-reduce:` variant |

## CSS Architecture

Keyframes register in `globals.css` inside `@theme { }` block (Tailwind v4 convention):

```css
@theme {
  --animate-float: float 4s ease-in-out infinite;
  --animate-gradient-shift: gradientShift 8s linear infinite;
  --animate-pulse-ring: pulseRing 2s ease-out infinite;
  --animate-idle-zoom: idleZoom 20s linear infinite;
  --animate-glow: glowPulse 3s ease-in-out infinite;
  --animate-sway: sway 6s ease-in-out infinite;
  --animate-bounce-in: microBounce 0.4s ease-out 1;
  --animate-bob: bob 2s ease-in-out infinite;
}
```

Animation parameters via CSS custom properties in `:root`:

```css
--motion-float-distance: -8px;
--motion-bob-distance: -4px;
--motion-sway-angle: 3deg;
--motion-zoom-scale: 1.03;
```

## File Changes

| File | Action | Description |
|------|--------|-------------|
| `app/globals.css` | Modify | Add 8 keyframes, 8 `@theme` animation tokens, `motion-reduce:` overrides, CSS custom properties |
| `components/atoms/ScrollProgress.tsx` | Create | Scroll progress bar — passive listener + RAF + `transform: scaleX` |
| `app/[lang]/layout.tsx` | Modify | Import and render `<ScrollProgress />` inside `<ThemeProvider>` |
| `components/organisms/Hero.tsx` | Modify | Add `animate-float` to profile image wrapper, `animate-gradient-shift` to name Typography |
| `components/organisms/Experience.tsx` | Modify | Add `animate-pulse-ring` to first timeline dot, wrap connector line for fill |
| `components/molecules/TimelineItem.tsx` | Modify | Add pulse class to dot, add IO-driven fill class to connector `div` |
| `components/molecules/FeatureCard.tsx` | Modify | Add `animate-idle-zoom` to image wrapper, `hover:animation-play-state-paused` |
| `components/organisms/CTA.tsx` | Modify | Add `animate-glow` to primary button |
| `components/organisms/AboutMe.tsx` | Modify | Add `animate-float` with different durations to each photo wrapper |
| `components/organisms/Footer.tsx` | Modify | Add `animate-bob` with `--i` CSS variable stagger to each icon link |
| `components/molecules/Header.tsx` | Modify | Add sliding underline element driven by existing `activeSection` state |
| `components/organisms/Experience.tsx` | Modify | Add `animate-sway` to `<MdWork>` section icon |

## Per-Effect Implementation

**Effect 1 — Profile Float** (`Hero.tsx` line 139): Add `animate-float` to the `div.relative.size-70` wrapper. `motion-reduce:animate-none`.

**Effect 2 — Gradient Shift** (`Hero.tsx` line 37): Add `bg-gradient-to-r bg-clip-text text-transparent animate-gradient-shift` to the name `<Typography variant="hero">`. Requires existing gradient CSS on that element.

**Effect 3 — Pulse Ring** (`TimelineItem.tsx` line 38): Add `animate-pulse-ring` to the dot `div.size-3`. Only apply to the item whose index matches the "current" position (first item by default, or driven by a prop).

**Effect 4 — Scroll Progress** (`ScrollProgress.tsx`): Fixed `div` at top, `z-50`, `h-0.5`, `bg-primary`, `transform-origin-left`, `transform: scaleX(var(--scroll-pct))`. JS: passive scroll listener updating CSS custom property via RAF. `motion-reduce:hidden`.

**Effect 5 — Timeline Fill** (`TimelineItem.tsx` line 39): The connector `div.w-0.5.h-full` gets a `::before` pseudo-element with `background: var(--brand-primary)`. Transition `height` from `0%` to `100%` on `.is-visible` class (set by `useScrollReveal`). `motion-reduce:transition-none`.

**Effect 6 — Idle Zoom** (`FeatureCard.tsx` line 82): Add `animate-idle-zoom` to the `Image` element. Hover state: `hover:animation-play-state-paused` (existing hover scale takes over).

**Effect 7 — CTA Glow** (`CTA.tsx` line 66): Add `animate-glow` to the primary `<Button>`.

**Effect 8 — Differential Float** (`AboutMe.tsx` lines 94, 111): Photo A gets `animate-float duration-3000`, Photo B gets `animate-float duration-5000`.

**Effect 9 — Social Bob** (`Footer.tsx` lines 29-64): Each icon `<a>` gets `animate-bob` with inline `style={{ '--i': index }}` for stagger delay.

**Effect 10 — Nav Indicator** (`Header.tsx` line 162): Add a `div` inside the `<nav>` as an underline pill. Compute `left` and `width` from `getBoundingClientRect()` of the active link. Transition `transform 0.3s ease`. `motion-reduce:transition-none`.

**Effect 11 — Icon Sway** (`Experience.tsx` line 24): Add `animate-sway` to `<MdWork>`. Same for other section icons in `AboutMe.tsx` (`<MdPerson>`).

**Effect 12 — Badge Bounce** (`FeatureCard.tsx` line 55): Add `animate-bounce-in` to `<Badge>` component. Triggers once on scroll-reveal entry via existing `AnimatedSection` wrapping.

## Performance & Accessibility

- GPU compositing: All effects use `transform` or `box-shadow` only — no layout-triggering properties
- `prefers-reduced-motion`: Every `animate-*` class has a `motion-reduce:animate-none` counterpart; progress bar uses `motion-reduce:hidden`; timeline fill uses `motion-reduce:transition-none`
- Mobile: All effects are GPU-composited, negligible battery impact. Idle zoom paused on hover prevents conflict with touch zoom gestures
- Tab hidden: Browser throttles `requestAnimationFrame` for hidden tabs — animations auto-pause

## Implementation Order

1. `globals.css` — keyframes + `@theme` tokens (foundation, zero risk)
2. `ScrollProgress.tsx` + `layout.tsx` — isolated new component, no existing code touched
3. `Hero.tsx` — float + gradient (Tier 1, always visible, high impact)
4. `TimelineItem.tsx` + `Experience.tsx` — pulse ring + sway + connector fill (Tier 1)
5. `Header.tsx` — nav indicator (Tier 3, depends on existing `activeSection`)
6. `FeatureCard.tsx` — idle zoom + badge bounce (Tier 2)
7. `CTA.tsx` — glow pulse (Tier 2)
8. `AboutMe.tsx` — differential float (Tier 2)
9. `Footer.tsx` — social bob (Tier 2)

## Migration / Rollout

No migration required. All changes are additive CSS and small component edits. Rollback: remove keyframe classes and `ScrollProgress` import.

## Open Questions

- [ ] Effect 2 (gradient shift): Does the name `<Typography variant="hero">` already have a gradient CSS rule, or do we need to add `bg-gradient-to-r bg-clip-text`?
- [ ] Effect 3 (pulse ring): Should only the "current" role pulse, or all visible dots? Proposal says "active/current" — confirm criteria.
- [ ] Effect 10 (nav indicator): The nav links are inside a `<nav>` with `flex` — the underline position calculation requires measuring each link's `offsetLeft` and `offsetWidth`. Confirm this is acceptable JS overhead (~5 lines).
