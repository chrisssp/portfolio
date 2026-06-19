# Subtle Motion System Specification

## Purpose

Defines 12 continuous CSS micro-animations and minimal-JS scroll behaviors that make the portfolio feel alive. Every effect is GPU-composited (transform/opacity/box-shadow only), zero-dependency, and fully respects `prefers-reduced-motion: reduce`.

---

## Cross-Cutting Requirements

| Requirement | Rule |
|---|---|
| **GPU-compositing** | Animations MUST use only `transform`, `opacity`, or `box-shadow`. No `width`, `top`, `margin` animation. |
| **prefers-reduced-motion** | Every animated class MUST have a `motion-reduce:` Tailwind variant or CSS `@media (prefers-reduced-motion: reduce)` override that sets `animation: none` (or equivalent). |
| **No external libs** | Pure CSS keyframes + minimal vanilla JS (<20 lines total). No framer-motion, GSAP, or anime.js. |
| **Bundle overhead** | Total new JS < 20 lines inline. CSS keyframes count toward the existing `globals.css` bundle. |
| **Iteration** | All looping animations MUST use `infinite` iteration. One-shot effects (badge bounce) use `1`. |

---

## Tier 1 — Hero & Navigation (Always Visible)

### Effect 1: Profile Image Gentle Float

- **Component**: `Hero.tsx`
- **Trigger**: Page load (auto-starts)
- **Behavior**: translateY oscillates between `0` and `-8px`
- **Duration**: 4s per cycle, `ease-in-out`, infinite
- **Keyframe**:
  ```css
  @keyframes float { 0%,100%{ transform:translateY(0) } 50%{ transform:translateY(-8px) } }
  ```
- **Class**: `.animate-float { animation: float 4s ease-in-out infinite }`
- **Reduced motion**: `animation: none; transform: translateY(0)`
- **Edge cases**: Runs on mobile (GPU-composited, negligible cost). Stops if tab hidden (browser throttles).

### Effect 2: Hero Name Gradient Shift

- **Component**: `Hero.tsx`
- **Trigger**: Page load (auto-starts)
- **Behavior**: `background-position` on gradient text cycles through hue positions, creating a slow color shift
- **Duration**: 8s per cycle, `linear`, infinite
- **Keyframe**:
  ```css
  @keyframes gradientShift { 0%{ background-position:0% 50% } 100%{ background-position:200% 50% } }
  ```
- **Class**: `.animate-gradient-shift { background-size: 200% 200%; animation: gradientShift 8s linear infinite }`
- **Reduced motion**: `animation: none`
- **Edge cases**: Works across light/dark themes since it shifts existing gradient colors, not hardcoded values.

### Effect 3: Timeline Dot Pulse Ring

- **Component**: `Experience.tsx`
- **Trigger**: Page load (auto-starts on visible dots)
- **Behavior**: `box-shadow` expands outward from dot center (0 → 12px spread, opacity fades), creating a sonar-pulse ring
- **Duration**: 2s per cycle, `ease-out`, infinite
- **Keyframe**:
  ```css
  @keyframes pulseRing { 0%{ box-shadow: 0 0 0 0 rgba(var(--accent),0.6) } 100%{ box-shadow: 0 0 0 12px rgba(var(--accent),0) } }
  ```
- **Reduced motion**: `animation: none`
- **Edge cases**: Only the first timeline dot pulses (isFirst). Past dots are static.

### Effect 4: Scroll Progress Bar

- **Component**: `layout.tsx`
- **Trigger**: Scroll event (passive listener)
- **Behavior**: A thin bar at the top of the viewport scales from 0% to 100% width using `transform: scaleX()`. JS computes scroll percentage, applies via `requestAnimationFrame`.
- **Duration**: Follows scroll position (no fixed duration). Updates at 60fps via RAF.
- **Implementation**:
  ```js
  // <15 lines: passive scroll listener + RAF
  const onScroll = () => {
    const pct = window.scrollY / (document.body.scrollHeight - window.innerHeight);
    rafId = requestAnimationFrame(() => bar.style.transform = `scaleX(${pct})`);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  ```
- **Reduced motion**: Bar is hidden entirely (`display: none` or `opacity: 0`)
- **Edge cases**: Uses `transform: scaleX` (GPU-composited). Passive listener prevents scroll jank. RAF prevents layout thrash.

### Effect 5: Timeline Connector Line Fill

- **Component**: `Experience.tsx`
- **Trigger**: Scroll (IntersectionObserver on each connector segment)
- **Behavior**: Connector line transitions from empty (0% height/width) to filled (100%) as the user scrolls past it. CSS `background` transition on a pseudo-element.
- **Duration**: CSS transition 0.6s `ease-out` on height/width (not a keyframe)
- **Implementation**: IntersectionObserver sets a `.is-visible` class; CSS transitions the pseudo-element.
- **Reduced motion**: Transitions set to `0s` duration
- **Edge cases**: Reuses the existing `AnimatedSection` IntersectionObserver pattern. No new JS infrastructure.

---

## Tier 2 — Content Sections (Scroll-Activated)

### Effect 6: Project Image Idle Zoom

- **Component**: `FeatureCard.tsx`
- **Trigger**: Page load (auto-starts on visible cards)
- **Behavior**: `scale` oscillates between `1.0` and `1.03` — barely perceptible breathing effect
- **Duration**: 20s per cycle, `linear`, infinite
- **Keyframe**:
  ```css
  @keyframes idleZoom { 0%,100%{ transform:scale(1) } 50%{ transform:scale(1.03) } }
  ```
- **Class**: `.animate-idle-zoom { animation: idleZoom 20s linear infinite }`
- **Hover override**: `animation-play-state: paused` on hover (existing hover zoom takes over)
- **Reduced motion**: `animation: none`
- **Edge cases**: Slow cycle (20s) means it's nearly invisible — intentional. Different scale range from hover zoom to avoid conflict.

### Effect 7: CTA Button Glow Pulse

- **Component**: Any CTA button
- **Trigger**: Page load (auto-starts)
- **Behavior**: `box-shadow` alternates between subtle glow and slightly brighter glow
- **Duration**: 3s per cycle, `ease-in-out`, infinite
- **Keyframe**:
  ```css
  @keyframes glowPulse { 0%,100%{ box-shadow: 0 0 8px rgba(var(--accent),0.3) } 50%{ box-shadow: 0 0 16px rgba(var(--accent),0.5) } }
  ```
- **Reduced motion**: `animation: none; box-shadow: 0 0 8px rgba(var(--accent),0.3)` (static subtle glow)
- **Edge cases**: Low contrast shift — purely ambient, never conveys information.

### Effect 8: Differential Float (About Photos)

- **Component**: `AboutMe.tsx`
- **Trigger**: Page load (auto-starts on visible photos)
- **Behavior**: Two photos float at different rates/amplitudes, creating parallax-like depth without scroll dependency
  - Photo A: `translateY(0 → -6px)`, 3s cycle
  - Photo B: `translateY(0 → -10px)`, 5s cycle
- **Keyframe**: Reuses `.animate-float` with per-element CSS custom properties for amplitude (`--motion-float-distance`) and different duration values
- **Reduced motion**: `animation: none`
- **Edge cases**: Different durations and amplitudes prevent in-phase alignment — photos always move independently.

### Effect 9: Social Icons Sequential Bob

- **Component**: `Footer.tsx`
- **Trigger**: Page load (auto-starts)
- **Behavior**: Each icon bobs `translateY(0 → -4px)` with staggered delays (100ms apart), creating a wave
- **Duration**: 2s per cycle, `ease-in-out`, infinite, per icon
- **Stagger**: `animation-delay: calc(var(--i) * 0.1s)` where `--i` is the icon index
- **Reduced motion**: `animation: none`
- **Edge cases**: CSS `animation-delay` only — no JS needed for stagger. Icons maintain wave pattern indefinitely.

---

## Tier 3 — Subtle Enhancements (Polish)

### Effect 10: Active Nav Sliding Indicator

- **Component**: `Header.tsx`
- **Trigger**: Section change (driven by existing `activeSection` state)
- **Behavior**: An underline/pill element translates horizontally to sit under the active nav link
- **Transition**: `transform: translateX()` with `transition: transform 0.3s ease`
- **Reduced motion**: `transition: none` — indicator jumps instantly
- **Edge cases**: Width adapts to link text width (set via JS from `getBoundingClientRect()`). No layout thrash — uses `transform` only.

### Effect 11: Section Header Icons Slow Sway

- **Component**: Any section header icon
- **Trigger**: Page load (auto-starts)
- **Behavior**: Icon rotates between `-3deg` and `3deg`
- **Duration**: 6s per cycle, `ease-in-out`, infinite
- **Keyframe**:
  ```css
  @keyframes sway { 0%,100%{ transform:rotate(-3deg) } 50%{ transform:rotate(3deg) } }
  ```
- **Reduced motion**: `animation: none; transform: rotate(0)`
- **Edge cases**: Very subtle — 3deg is barely noticeable. Never conveys meaning.

### Effect 12: Tech Badge Micro-Bounce on Enter

- **Component**: `FeatureCard.tsx`
- **Trigger**: Scroll-reveal entry (IntersectionObserver via `useScrollReveal` hook)
- **Behavior**: `scale(0.8 → 1.05 → 1.0)` overshoot bounce on first appearance
- **Duration**: 0.4s, `ease-out`, plays once
- **Keyframe**:
  ```css
  @keyframes microBounce { 0%{ transform:scale(0.8); opacity:0 } 60%{ transform:scale(1.05) } 100%{ transform:scale(1); opacity:1 } }
  ```
- **Reduced motion**: `animation: none; opacity: 1; transform: scale(1)` — badge appears instantly
- **Edge cases**: One-shot animation, not looping. Triggers once per badge via IntersectionObserver (reuses existing `useScrollReveal` pattern). Badges that enter simultaneously get the same timing — no stagger needed.

---

## Accessibility Matrix

| # | Effect | reduced-motion action | Conveys info? |
|---|--------|----------------------|---------------|
| 1 | Float | `animation: none` | No |
| 2 | Gradient shift | `animation: none` | No |
| 3 | Pulse ring | `animation: none` | No |
| 4 | Progress bar | Hide entirely | No (purely decorative) |
| 5 | Timeline fill | Transition 0s | No |
| 6 | Idle zoom | `animation: none` | No |
| 7 | Glow pulse | Static glow (no animation) | No |
| 8 | Differential float | `animation: none` | No |
| 9 | Icon bob | `animation: none` | No |
| 10 | Nav indicator | Instant jump (no transition) | No |
| 11 | Icon sway | `animation: none` | No |
| 12 | Badge bounce | Instant appear | No |

**Key principle**: None of these effects convey critical information. Disabling them loses zero functionality.

---

## Testing Checklist

- [ ] Each of the 12 effects renders and animates at 60fps
- [ ] `prefers-reduced-motion: reduce` disables every animation
- [ ] Lighthouse performance score ±2 points of baseline
- [ ] Total new JS < 20 lines inline
- [ ] No layout thrash on scroll (timeline fill + progress bar)
- [ ] Hover on idle-zoom cards pauses the animation
- [ ] Dark and light themes both render correctly
- [ ] Mobile (375px) renders all effects without overflow or jank
