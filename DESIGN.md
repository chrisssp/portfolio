---
version: "alpha"
name: Christian Serrano Portfolio
description: >
  Software Engineer portfolio with bilingual (EN/ES) support,
  light/dark theme, and animated scroll-reveal sections.

colors:
  # — Primitives —
  slate-900: "#171c28"
  slate-800: "#1f2633"
  slate-700: "#2f3a53"
  slate-200: "#c5cddb"
  slate-100: "#eaecf2"
  white-off: "#f5f7fa"
  cyan-600: "#0284c7"
  cyan-400: "#38bdf8"
  red: "#e53935"
  green: "#66bb6a"

  # — Semantic (Light) —
  page-light: "{colors.white-off}"
  surface-light: "{colors.slate-100}"
  body-light: "{colors.slate-900}"
  subtle-light: "{colors.slate-200}"
  primary: "{colors.primary-light}"
  primary-light: "#026fac"
  primary-contrast-light: "{colors.white-off}"

  # — Semantic (Dark) —
  page-dark: "{colors.slate-900}"
  surface-dark: "{colors.slate-800}"
  body-dark: "{colors.white-off}"
  subtle-dark: "{colors.slate-700}"
  primary-dark: "#52d1ff"
  primary-contrast-dark: "{colors.slate-900}"

typography:
  hero:
    fontFamily: Space Grotesk
    fontWeight: "700"
    fontSize: 1.875rem
    lineHeight: "1.25"
    md:
      fontSize: 3rem
    lg:
      fontSize: 4.5rem
  hero-sub:
    fontFamily: Space Grotesk
    fontWeight: "700"
    fontSize: 1.125rem
    lineHeight: "1.25"
    md:
      fontSize: 2.25rem
    lg:
      fontSize: 3rem
  project-hero:
    fontFamily: Space Grotesk
    fontWeight: "700"
    fontSize: 1.5rem
    lineHeight: "1.25"
    md:
      fontSize: 2.25rem
    lg:
      fontSize: 3rem
  project-hero-sub:
    fontFamily: Space Grotesk
    fontWeight: "700"
    fontSize: 1rem
    lineHeight: "1.25"
    md:
      fontSize: 1.5rem
    lg:
      fontSize: 1.875rem
  section:
    fontFamily: Space Grotesk
    fontWeight: "700"
    fontSize: 1.25rem
    lineHeight: "1.25"
    md:
      fontSize: 1.875rem
    lg:
      fontSize: 2.25rem
  project:
    fontFamily: Space Grotesk
    fontWeight: "700"
    fontSize: 1rem
    lineHeight: "1.25"
    md:
      fontSize: 1.25rem
    lg:
      fontSize: 1.5rem
  body:
    fontFamily: Space Grotesk
    fontWeight: "400"
    fontSize: 0.875rem
    lineHeight: "1.625"
    sm:
      fontSize: 1rem
  small:
    fontFamily: Space Grotesk
    fontWeight: "300"
    fontSize: 0.75rem
    lineHeight: "1.5"
    sm:
      fontSize: 0.875rem

rounded:
  none: 0px
  sm: 4px
  md: 8px
  lg: 12px
  xl: 16px
  full: 9999px

spacing:
  3xs: 2px
  2xs: 4px
  xs: 8px
  sm: 12px
  md: 16px
  lg: 24px
  xl: 32px
  2xl: 40px
  3xl: 48px
  4xl: 64px
  5xl: 80px
  6xl: 96px
  7xl: 120px

breakpoints:
  xs: 375px
  sm: 640px
  md: 768px
  lg: 1024px
  xl: 1280px
  2xl: 1536px
  desktop: 1200px

components:
  # — Atoms —
  button-primary:
    backgroundColor: "{colors.primary-light}"
    textColor: "{colors.primary-contrast-light}"
    rounded: "{rounded.lg}"
    padding: "{spacing.xs} {spacing.md}"
    sm:
      padding: "{spacing.sm} {spacing.lg}"
      rounded: "{rounded.xl}"
    typography: "{typography.body}"
    fontWeight: "700"
    border: 1px solid "{colors.subtle-light}"
    hover:
      backgroundColor: "color-mix(in srgb, {colors.primary-light} 90%, transparent)"
      scale: "1.02"
      shadow: 0 4px 6px -1px rgba(0,0,0,0.1)
    active:
      scale: "0.95"
    dark:
      backgroundColor: "{colors.primary-dark}"
      textColor: "{colors.primary-contrast-dark}"
      border: 1px solid "{colors.subtle-dark}"
  button-secondary:
    backgroundColor: "{colors.surface-light}"
    textColor: "{colors.primary-light}"
    rounded: "{rounded.lg}"
    padding: "{spacing.xs} {spacing.md}"
    sm:
      padding: "{spacing.sm} {spacing.lg}"
      rounded: "{rounded.xl}"
    typography: "{typography.body}"
    fontWeight: "700"
    border: 1px solid "{colors.subtle-light}"
    hover:
      backgroundColor: "color-mix(in srgb, {colors.surface-light} 80%, transparent)"
      scale: "1.02"
    active:
      scale: "0.95"
    dark:
      backgroundColor: "{colors.surface-dark}"
      textColor: "{colors.primary-dark}"
      border: 1px solid "{colors.subtle-dark}"
  button-outline:
    backgroundColor: "color-mix(in srgb, {colors.page-light} 50%, transparent)"
    textColor: "{colors.primary-light}"
    rounded: "{rounded.lg}"
    padding: "{spacing.xs} {spacing.md}"
    backdropFilter: blur(4px)
    sm:
      padding: "{spacing.sm} {spacing.lg}"
      rounded: "{rounded.xl}"
    typography: "{typography.body}"
    fontWeight: "700"
    border: 1px solid "{colors.subtle-light}"
    hover:
      backgroundColor: "color-mix(in srgb, {colors.page-light} 80%, transparent)"
      scale: "1.02"
    active:
      scale: "0.95"
    dark:
      textColor: "{colors.primary-dark}"
      border: 1px solid "{colors.subtle-dark}"
  badge:
    backgroundColor: tech-dependent
    textColor: "{colors.white-off}"
    rounded: "{rounded.full}"
    padding: "{spacing.2xs} {spacing.xs}"
    sm:
      padding: "{spacing.2xs} {spacing.sm}"
    md:
      padding: "{spacing.2xs} {spacing.sm} {spacing.3xs}"
    typography: "{typography.small}"
    fontWeight: "500"
    border: 2px solid transparent
    interaction:
      scale: "1.03"
      brightness: "1.05"
      shadow: 0 1px 2px 0 rgba(0,0,0,0.05)
  tag:
    backgroundColor: "{colors.surface-light}"
    textColor: "{colors.body-light}"
    rounded: "{rounded.md}"
    padding: "{spacing.xs} {spacing.2xs}"
    typography: "{typography.small}"
    fontWeight: "700"
    border: 1px solid "{colors.subtle-light}"
    dark:
      backgroundColor: "{colors.surface-dark}"
      textColor: "{colors.body-dark}"
      border: 1px solid "{colors.subtle-dark}"
  tag-primary:
    backgroundColor: "{colors.primary-light}"
    textColor: "{colors.primary-contrast-light}"
    rounded: "{rounded.md}"
    padding: "{spacing.xs} {spacing.2xs}"
    typography: "{typography.small}"
    fontWeight: "700"
    border: 1px solid "{colors.primary-light}"
    dark:
      backgroundColor: "{colors.primary-dark}"
      textColor: "{colors.primary-contrast-dark}"
      border: 1px solid "{colors.primary-dark}"

  # — Section Layout —
  section-container:
    width: 100%
    maxWidth: 1440px
    paddingX: "{spacing.lg}"
    paddingY: "{spacing.xl}"
    sm:
      paddingX: "{spacing.xl}"
      paddingY: "{spacing.4xl}"
    lg:
      paddingX: "{spacing.5xl}"
      paddingY: 120px

  # — Navigation —
  header:
    height: 64px
    backgroundColor: "color-mix(in srgb, {colors.page-light} 80%, transparent)"
    backdropFilter: blur(12px)
    borderBottom: 1px solid "color-mix(in srgb, {colors.subtle-light} 50%, transparent)"
    md:
      height: 84px
      borderBottom: none
    dark:
      backgroundColor: "color-mix(in srgb, {colors.page-dark} 80%, transparent)"
      borderBottom: 1px solid "color-mix(in srgb, {colors.subtle-dark} 50%, transparent)"
  nav-pill:
    backgroundColor: "{colors.page-light}"
    rounded: "{rounded.xl}"
    padding: "{spacing.3xs}"
    border: 1px solid "{colors.subtle-light}"
    shadow: 0 1px 2px 0 rgba(0,0,0,0.05)
    dark:
      backgroundColor: "{colors.page-dark}"
      border: 1px solid "{colors.subtle-dark}"
  nav-link:
    padding: "{spacing.md} {spacing.lg}"
    rounded: "{rounded.lg}"
    fontWeight: "700"
    fontSize: 1rem
    lineHeight: "1"
    hover:
      backgroundColor: "{colors.surface-light}"
      color: "{colors.primary-light}"
      scale: "1.02"
    active:
      scale: "0.95"
    dark:
      hover:
        backgroundColor: "{colors.surface-dark}"
        color: "{colors.primary-dark}"
  header-control:
    backgroundColor: "{colors.page-light}"
    rounded: "{rounded.lg}"
    sm:
      rounded: "{rounded.xl}"
    padding: "{spacing.3xs}"
    border: 1px solid "{colors.subtle-light}"
    shadow: 0 1px 2px 0 rgba(0,0,0,0.05)
    dark:
      backgroundColor: "{colors.page-dark}"
      border: 1px solid "{colors.subtle-dark}"

  # — Cards —
  feature-card:
    rounded: "{rounded.xl}"
    border: 1px solid "{colors.subtle-light}"
    shadow: 0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -4px rgba(0,0,0,0.1)
    image:
      aspectRatio: 630 / 350
      hover:
        scale: "1.02"
        duration: 700ms
    dark:
      border: 1px solid "{colors.subtle-dark}"
  profile-image:
    rounded: "{rounded.full}"
    border: 3px solid "{colors.subtle-light}"
    shadow: 0 25px 50px -12px rgba(0,0,0,0.25)
    hover:
      scale: "1.02"
      duration: 500ms
    dark:
      border: 3px solid "{colors.subtle-dark}"

  # — Filter Pills (Segmented Control) —
  filter-pills:
    rounded: "{rounded.lg}"
    padding: "{spacing.3xs} {spacing.3xs}"
    sm:
      rounded: "{rounded.xl}"
      padding: "{spacing.2xs} {spacing.2xs}"
    backgroundColor: "color-mix(in srgb, {colors.page-light} 50%, transparent)"
    backdropFilter: blur(4px)
    border: 1px solid "{colors.subtle-light}"
    dark:
      backgroundColor: "color-mix(in srgb, {colors.page-dark} 50%, transparent)"
      border: 1px solid "{colors.subtle-dark}"
  filter-pill-active:
    backgroundColor: "{colors.primary-light}"
    rounded: "{rounded.md}"
    sm:
      rounded: "{rounded.lg}"
    dark:
      backgroundColor: "{colors.primary-dark}"

  # — Timeline —
  timeline-dot:
    size: 12px
    xs:
      size: 16px
    rounded: "{rounded.full}"
    border: 2px solid "{colors.primary-light}"
    backgroundColor: "{colors.page-light}"
    dark:
      border: 2px solid "{colors.primary-dark}"
      backgroundColor: "{colors.page-dark}"
  timeline-line:
    width: 2px
    backgroundColor: "{colors.subtle-light}"
    dark:
      backgroundColor: "{colors.subtle-dark}"

  # — Smart Email Menu —
  email-menu:
    minWidth: 260px
    xs:
      minWidth: 300px
    rounded: "{rounded.xl}"
    backgroundColor: "{colors.page-light}"
    border: 1px solid "{colors.subtle-light}"
    shadow: 0 25px 50px -12px rgba(0,0,0,0.25)
    dark:
      backgroundColor: "{colors.page-dark}"
      border: 1px solid "{colors.subtle-dark}"

  # — Scroll to Top —
  scroll-to-top:
    size: 40px
    xs:
      size: 44px
    rounded: "{rounded.full}"
    backgroundColor: "{colors.primary-light}"
    textColor: "{colors.primary-contrast-light}"
    shadow: 0 25px 50px -12px rgba(0,0,0,0.25)
    border: 1px solid "{colors.subtle-light}"
    hover:
      scale: "1.1"
      shadow: 0 25px 50px -12px color-mix(in srgb, {colors.primary-light} 20%, transparent)
    active:
      scale: "0.95"
    dark:
      backgroundColor: "{colors.primary-dark}"
      textColor: "{colors.primary-contrast-dark}"
      border: 1px solid "{colors.subtle-dark}"

  # — Grid Spotlight —
  grid-spotlight:
    backgroundSize: 40px 40px
    maskSize: 800px
    maskOpacity: "0.1"
    dark:
      lineColor: rgba(245, 247, 250, 0.05)
    light:
      lineColor: rgba(23, 28, 40, 0.07)
---

## Overview

**Christian Serrano Portfolio** is a bilingual (English/Spanish) software engineer portfolio built with Next.js 16, React 19, and Tailwind CSS v4. The visual identity balances technical sophistication with approachable warmth — a dark slate palette with cyan/blue accents, Space Grotesk typography, and subtle grid-backdrop spotlight effects.

The design communicates precision (clean typography, consistent spacing), creativity (animated scroll-reveals, mouse-tracking grid), and global reach (bilingual support, theme-aware logos). Light and dark modes are first-class citizens, toggled via `next-themes` with smooth CSS transitions.

## Colors

The palette is built from a focused set of slate primitives mapped to semantic variables that flip between light and dark modes.

### Primitives

- **Slate-900 (#171c28):** Deep navy-slate, used as page background in dark mode and body text in light mode.
- **Slate-800 (#1f2633):** Surface background in dark mode — slightly lifted from page.
- **Slate-700 (#2f3a53):** Subtle borders and dividers in dark mode.
- **Slate-200 (#c5cddb):** Subtle borders and dividers in light mode.
- **Slate-100 (#eaecf2):** Surface background in light mode.
- **White-off (#f5f7fa):** Page background in light mode, text in dark mode.
- **Cyan-600 (#0284c7):** Deep interaction blue.
- **Cyan-400 (#38bdf8):** Lighter accent for hover states and highlights.
- **Red (#e53935):** Error states and Angular brand color.
- **Green (#66bb6a):** Success states and Supabase brand color.

### Semantic Tokens

| Token | Light | Dark |
|---|---|---|
| `page` | white-off (#f5f7fa) | slate-900 (#171c28) |
| `surface` | slate-100 (#eaecf2) | slate-800 (#1f2633) |
| `body` | slate-900 (#171c28) | white-off (#f5f7fa) |
| `subtle` | slate-200 (#c5cddb) | slate-700 (#2f3a53) |
| `primary` | #0271b1 | #52d1ff |
| `primary-contrast` | white-off (#f5f7fa) | slate-900 (#171c28) |

### Accessibility

- Body text on page background exceeds WCAG AA in both modes (slate-900 on white-off: ~14:1; white-off on slate-900: ~13:1).
- Primary brand color (#0271b1) on white-off passes AA for normal text (4.8:1). In dark mode, the primary shifts to a brighter cyan (#52d1ff) to maintain contrast on the dark slate background (6.5:1 on slate-900).
- Interactive states use `hover:scale-[1.02]` combined with color changes — these are cosmetic and do not affect readability.

## Typography

**Space Grotesk** is the sole typeface, loaded via `next/font/google` with three weights (300, 400, 500, 700). It brings a distinctive, slightly quirky yet highly legible personality that balances technical credibility with human warmth.

### Type Scale

| Token | Mobile | Md | Lg | Weight | Leading |
|---|---|---|---|---|---|
| **hero** | 1.875rem | 3rem | 4.5rem | 700 | 1.25 |
| **hero-sub** | 1.125rem | 2.25rem | 3rem | 700 | 1.25 |
| **project-hero** | 1.5rem | 2.25rem | 3rem | 700 | 1.25 |
| **project-hero-sub** | 1rem | 1.5rem | 1.875rem | 700 | 1.25 |
| **section** | 1.25rem | 1.875rem | 2.25rem | 700 | 1.25 |
| **project** | 1rem | 1.25rem | 1.5rem | 700 | 1.25 |
| **body** | 0.875rem → 1rem (sm↑) | — | — | 400 | 1.625 |
| **small** | 0.75rem → 0.875rem (sm↑) | — | — | 300 | 1.5 |

### Font Weights

| Class | Value | Usage |
|---|---|---|
| `font-light` | 300 | Small text, footer, captions |
| `font-normal` | 400 | Body paragraphs |
| `font-medium` | 500 | Badge labels |
| `font-bold` | 700 | All headings, buttons, tags, nav links |
| `font-black` | 900 | Decorative numbering (mobile menu) |

### Type System Rules

- All headings use `font-bold` (700) and `leading-tight` (1.25).
- Body text uses `leading-relaxed` (1.625) for readability.
- Links, buttons, and interactive text are always bold.
- Text color is always `text-body` unless overriding for emphasis or branding.
- Secondary/tertiary text uses `opacity-60` or `opacity-90` on the same color, never a separate muted color.
- The `selection` highlight uses `bg-primary text-primary-contrast` across the entire page.

## Layout

### Breakpoint System

| Name | Width | Usage |
|---|---|---|
| **xs** | 375px | Small phones — minimum supported |
| **sm** | 640px | Large phones, portrait tablets |
| **md** | 768px | Landscape tablets |
| **lg** | 1024px | Desktop entry |
| **xl** | 1280px | Wide desktop |
| **2xl** | 1536px | Ultra-wide |
| **desktop** | 1200px | Custom breakpoint for desktop-specific overrides |

### Page Width

- Content max-width: **1440px** (`max-w-[1440px]`) for section containers.
- Header/Footer max-width: **1440px** (`max-w-360`).
- Content padding: `px-6` (24px) → `sm:px-10` (40px) → `lg:px-20` (80px).

### Section Spacing

- **Section padding Y:** `py-10` (40px) → `sm:py-16` (64px) → `lg:py-[120px]`.
- **Between sections (gap):** `gap-8` (32px) → `lg:gap-16` (64px) in section containers.
- **Between projects in list:** `gap-16` (64px) → `lg:gap-30` (120px).
- **Header top offset for anchor scroll:** `scroll-mt-header` = 108px (80px on mobile).

### Layout Patterns

- **Hero:** Two-column flex layout (`flex-col lg:flex-row`), text left, profile image right. Text max-width: 760px (`max-w-190`).
- **About:** Two-column flex, text left (max-width: 640px), overlapping circular images right.
- **Experience:** Single-column timeline with alternating left/right content at `md+`.
- **Projects:** Vertical card list with alternating left/right image placement.
- **CTA:** Two-column flex with title/description left and action buttons right.

## Elevation & Depth

| Level | Usage | Shadow Value |
|---|---|---|
| **sm** | Nav pill, header controls | `0 1px 2px 0 rgba(0,0,0,0.05)` |
| **md** | Buttons on hover | `0 4px 6px -1px rgba(0,0,0,0.1)` |
| **lg** | Feature cards | `0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -4px rgba(0,0,0,0.1)` |
| **2xl** | Profile image, email menu, scroll-to-top | `0 25px 50px -12px rgba(0,0,0,0.25)` |

### Backdrop Blur

- **Header:** `backdrop-blur-md` (12px) with 80% page-color background.
- **FilterPills:** `backdrop-blur-sm` (4px) with 50% page-color background.
- **Outline buttons:** `backdrop-blur-sm` (4px).
- **Mobile email menu backdrop:** `backdrop-blur-sm` with black/20 overlay.

### Spotlight Grid Effect

Sections with `bg-grid-spotlight` render a 40px repeating grid pattern. A radial gradient mask (`800px circle`) fades the grid from full opacity near the cursor to 10% at the edges. Mouse position is tracked globally via `GridMouseTracker` and exposed as `--gx`/`--gy` CSS custom properties.

## Shapes

| Token | Value | Usage |
|---|---|---|
| `none` | 0px | — |
| `sm` | 4px | Minimal internal corners |
| `md` / `rounded-lg` | 8px | Tags, filter pill active state |
| `lg` / `rounded-xl` | 12px | Buttons (mobile), header controls, nav links, mobile menu items, scroll-to-top |
| `xl` / `rounded-2xl` | 16px | Cards, nav pill, header control group (desktop), filter pills container, buttons (desktop), email menu |
| `full` | 9999px | Badges, profile images, timeline dot, scroll-to-top (alternative) |

### Border Width

| Width | Usage |
|---|---|
| **1px** (`border`) | Default for buttons, containers, cards, dividers |
| **2px** (`border-2`) | Badge borders (selected/outlined state), timeline dot |
| **3px** (`border-3`) | Profile images, hero/detail card images |

## Components

### Button

Three variants: `primary`, `secondary`, and `outline`. All share a consistent shape and interaction model.

- **Padding:** `px-4 py-2` → `sm:px-6 sm:py-3`
- **Font:** Bold, `text-sm` → `sm:text-base`, `font-sans`
- **Rounded:** `rounded-xl` → `sm:rounded-2xl`
- **Transition:** `transition-all active:scale-95 hover:scale-[1.02] hover:shadow-md`
- **Icon slot:** Left-aligned, `size-4` → `sm:size-5`

| Variant | BG | Text | Border |
|---|---|---|---|
| primary | `bg-primary` | `text-primary-contrast` | `border-subtle` |
| secondary | `bg-surface` | `text-primary` | `border-subtle` |
| outline | `bg-page/50 backdrop-blur-sm` | `text-primary` | `border-subtle` |

### Badge (Tech Chip)

Used to display technology labels with brand-specific background colors.

- **Padding:** `px-2 py-0.5` → `sm:px-2.5 sm:py-1` → `md:px-3.5 md:py-1.5`
- **Font:** `text-xs` → `md:text-sm`, `font-medium`, `font-sans`
- **Shape:** `rounded-full`
- **Border:** 2px `border-transparent` (switches to `rgba` color when outlined)
- **Icon:** 12px → 14px → 16px, white text
- **Selected state:** `ring-2 ring-white-off/50`

### Tag

Used for metadata labels (location, remote, project).

- **Padding:** `px-2.5 py-0.5`
- **Font:** `text-xs`, `font-bold`
- **Shape:** `rounded-lg`
- **Icon:** 12px, inline

| Variant | BG | Text | Border |
|---|---|---|---|
| primary | `bg-primary` | `text-primary-contrast` | `border-primary` |
| secondary | `bg-surface` | `text-body` | `border-subtle` |
| outline | `bg-transparent` | `text-primary` | `border-primary/30` |

### Typography

A multi-variant text component that maps semantic tokens to responsive Tailwind classes. See [Typography](#typography) section above for the full scale.

### SectionContainer

Standard wrapper for all page sections.

- **Max width:** 1440px
- **Inner padding:** `px-6 sm:px-10 lg:px-20`
- **Vertical padding:** `py-10 sm:py-16 lg:py-[120px]` (overridable via `paddingY` prop)
- **Grid effect:** Optional `bg-grid-spotlight` overlay via `showGrid` prop (enabled by default)

### Nav Pill (Segmented Control)

Used for tab-style navigation (featured/others filter, language toggle group).

- **Container:** `rounded-xl sm:rounded-2xl`, `p-1 sm:p-1.5`, grid with 2 columns
- **Active indicator:** Absolute positioned div with `bg-primary`, `rounded-lg sm:rounded-xl`, animated slide
- **Labels:** Bold, `text-sm sm:text-base`, `text-primary-contrast` when active, `text-body` otherwise
- **Interaction:** `hover:scale-[1.02] active:scale-95`

### Timeline

Vertical timeline for work experience.

- **Dot:** 12px → 16px, `rounded-full`, `border-2 border-primary`, `bg-page`
- **Line:** 2px wide, `bg-subtle`
- **Layout:** Mobile = single column left; Desktop = alternating left/right with empty spacer on opposite side
- **Content max-width:** 520px (`max-w-130`)

### Header

Sticky top navigation with hide-on-scroll behavior.

- **Height:** 64px → 84px
- **Background:** `bg-page/80 backdrop-blur-md`
- **Border:** `border-b border-subtle/50` (hidden on desktop)
- **Transition:** 300ms translate-Y for hide/show
- **Z-index:** 60

### SpotlightCard

Card wrapper that tracks mouse position and exposes `--x`/`--y` CSS properties for a CSS-driven spotlight gradient effect. The gradient lives entirely in CSS — zero layout impact. On touch devices, the effect never activates.

### SmartEmailButton

A button that opens a dropdown menu with two options: "Send email" (opens `mailto:`) and "Copy email" (copies to clipboard with 2-second checkmark feedback).

- **Menu width:** `min-w-65` → `min-w-75`
- **Shape:** `rounded-2xl`
- **Shadow:** `shadow-2xl`
- On mobile, renders as a centered modal overlay with backdrop.

### ScrollToTop

Floating action button that appears after scrolling past 500px.

- **Position:** Fixed, `bottom-6 right-6` → `bottom-8 right-8`
- **Shape:** `rounded-full`, 40px → 44px
- **Animation:** Fade + scale with 500ms ease-in-out
- **Z-index:** 50

## Animations

### Page Transitions

- **Duration:** 450ms (`0.45s`)
- **Easing:** `cubic-bezier(0.22, 1, 0.36, 1)` — an expressive ease-out
- **Property:** Opacity 0 → 1
- **Reduced motion:** Disabled via `motion-reduce:animate-none`

### Scroll Reveal

Six animation variants driven by IntersectionObserver:

| Variant | Hidden State |
|---|---|
| `fade-up` | `opacity-0 translate-y-8` |
| `fade-down` | `opacity-0 -translate-y-8` |
| `fade-left` | `opacity-0 translate-x-8` |
| `fade-right` | `opacity-0 -translate-x-8` |
| `fade` | `opacity-0` |
| `zoom` | `opacity-0 scale-95` |

- **Duration:** 700ms (default), also 900ms variant
- **Easing:** `transition-all ease-out`
- **Stagger delay:** 80–100ms increments per sibling element
- **Intersection threshold:** 0.08 (default), 0.05–0.2 range used
- **Reduced motion:** All animations disabled, content immediately visible

### Interactive Transitions

- **Hover scale:** `hover:scale-[1.02]` — subtle enlargement on interactive elements
- **Active scale:** `active:scale-95` — press feedback on touch/click
- **Default duration:** 300ms with `transition-all`
- **Theme switch:** 300ms ease on background-color and color properties

## Do's and Don'ts

### Do's

- **Do** use the Typography component for all text — it enforces the type scale and responsive behavior.
- **Do** prefer semantic color tokens (`bg-page`, `text-body`, `border-subtle`) over hardcoded colors.
- **Do** wrap page sections in `SectionContainer` for consistent max-width and padding.
- **Do** use `AnimatedSection` for staggered scroll-reveal animations.
- **Do** keep interactive elements bold (`font-bold`) for clear affordance.
- **Do** use `gap-*` for spacing instead of margin utilities wherever possible.
- **Do** respect `prefers-reduced-motion` — use `motion-reduce:` variants.
- **Do** wrap interactive containers in `SpotlightCard` for mouse-tracking polish.

### Don'ts

- **Don't** add new font families — Space Grotesk is the sole typeface for brand consistency.
- **Don't** hardcode colors in components — use CSS variables via `bg-page`, `text-body`, etc.
- **Don't** add background colors without considering both light and dark mode.
- **Don't** override font weights inconsistently — stick to the defined weight scale (300, 400, 500, 700).
- **Don't** use rounded corners smaller than `rounded-lg` (8px) on interactive elements.
- **Don't** animate the grid-spotlight mask — the `GridMouseTracker` handles that globally.
- **Don't** increase border widths beyond 3px (used only for profile images and hero cards).
