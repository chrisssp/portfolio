# SDD Delta Spec: Blog Section

---

## 1. Overview

Add a statically-generated, i18n-aware blog section to the portfolio, built with Next.js 16.1.1 (App Router). Content lives in `content/blog/<slug>/index.mdx` (folder-per-post with MDX). MDX is compiled at request time using `next-mdx-remote/rsc`. The blog section is accessible in English and Spanish (`/en/blog`, `/es/blog`), supports search, tags, pagination, OG images, RSS, and is fully integrated in navigation and sitemap.

---

## 2. Functional Requirements

### 2.1 Core Features
- Show paginated list of blog posts at `/[lang]/blog`, filtered by locale
- View individual blog posts at `/[lang]/blog/[slug]` (SSR, ISR revalidate=3600)
- Each post: title, description, date, tags, locale, draft flag, cover image, series, readingTime, TOC
- List supports: tag filtering (`?tag=`), full-text search (fuse.js, client-side), pagination
- Add blog navigation in Header (after "About Me") & Footer (before socials), i18n nav labels
- Blog posts included in sitemap and RSS feeds for both locales

### 2.2 Authoring Workflow
- Add new post: create `content/blog/new-post/index.mdx` with valid frontmatter
- Dev/prod: drafts are hidden in prod, visible in dev
- No database, CMS, or admin UI required; content is Git-managed

### 2.3 MDX Rendering
- Posts rendered with MDXRemote, custom component registry: CodeBlock (syntax highlight), Table, Callout, Image (`next/image`), YouTube
- Syntax highlighting using `rehype-pretty-code` (`shiki`), with dark/light themes
- Inline images support local (relative) or remote sources, with proper optimization and fallback
- Table of Contents auto-generated from headings
- Reading time calculated and displayed (200wpm avg)

### 2.4 Integration points
- i18n modules: Blog page UI, nav labels, and all user-facing strings
- Navigation: "Blog" link in Header & Footer
- RSS: GET `/[lang]/blog/feed.xml` returns last 20 posts per locale, both RSS 2.0 and JSON Feed
- Sitemap: blog posts listed for both locales, with changeFrequency and priority
- OG images: Dynamic at `/[lang]/blog/[slug]/opengraph-image.tsx`, style matches project OG pattern

---

## 3. Data Models and API Contracts

### 3.1 Blog Post Frontmatter (Zod)
```typescript
// lib/blog/schema.ts
export const BlogPostFrontmatterSchema = z.object({
  title: z.string().min(1),
  description: z.string().min(1),
  date: z.string().refine(
    (d) => !isNaN(Date.parse(d)) && new Date(d) <= new Date(),
    { message: "Date must be valid and not in the future" }
  ),
  tags: z.array(z.string().toLowerCase()).default([]),
  locale: z.enum(["es", "en"]),
  draft: z.boolean().default(false),
  coverImage: z.string().optional(),
  series: z.string().optional(),
  readingTimeMinutes: z.number().optional(),
  toc: z.array(z.object({
    depth: z.number(),
    value: z.string(),
    children: z.array(z.any()).optional(),
  })).optional(),
});
```

### 3.2 TypeScript Interfaces
- `BlogPost`: slug, frontmatter, mdxSource, readingTimeMinutes, toc, content
- `BlogPostListItem`: slug, title, description, date, tags, locale, readingTimeMinutes, coverImage?, series?
- `BlogSeries`: name, posts
- `TocItem`: depth, value, children?

### 3.3 API Contracts
- `getAllPosts()`:  returns published/draft posts (if dev), locale-filtered, desc-sorted
- `getPostBySlug(slug)`: returns BlogPost with compiled MDX + metadata, 404 if missing
- `getPostsByTag(tag)`, `getRelatedPosts(tags)`
- `/[lang]/blog/[slug]/opengraph-image.tsx`: handle GET, returns PNG
- `/[lang]/blog/feed.xml/route.ts`: handle GET, returns RSS 2.0 and JSON Feed

---

## 4. Non-Functional Requirements

### 4.1 Accessibility (WCAG 2.2)
- All interactive elements are keyboard-accessible (search bar, tags, pagination)
- Headings (`h1`, `h2`, ...) used semantically in posts and TOC
- Blog navigation and links have discernible display text in both locales
- Images have `alt` attributes derived from MDX or frontmatter (defaulted if missing)
- Color contrast must comply with AA

### 4.2 i18n (Internationalization)
- Blog visible at `/en/blog`, `/es/blog`
- All UI strings extracted into `i18n/modules/blog.ts`, localized in en/es
- Frontmatter requires `locale`/`lang` field per post; blog lists show locale badge
- Posts with `lang: "both"` or "en"/"es" strategy as per architecture; see section 2.1
- RSS and Sitemap include both localizations

### 4.3 SEO
- Static blog pages with unique, localized titles and descriptions
- OG tags, JSON-LD structured data in metadata
- Sitemap and RSS up-to-date with new blog posts
- Canonical URLs including locale prefix

### 4.4 Performance
- All blog routes statically generated with SSG/ISR (`revalidate = 3600`)
- MDX compilation uses Next.js RSC memoization and `cache()`
- Syntax highlighting performed server-side, no heavy client code
- fuse.js search index hydrated from build data, <20KB client payload
- Pagination and lazy rendering for large lists
- Image assets colocated for prefetch and optimization

---

## 5. Acceptance Criteria by Task

### BLOG-001: Dependencies
- [ ] `pnpm install` of all blog dependencies (`next-mdx-remote`, `remark-gfm`, `rehype-pretty-code`, `shiki`, `fuse.js`) succeeds
- [ ] TypeScript types for `zod`, `shiki` resolve without error

### BLOG-002: Config
- [ ] `biome` lints/ignores MDX as intended
- [ ] `next.config.ts` includes remotePatterns for images used in MDX

### BLOG-003: Sample Post
- [ ] `content/blog/hello-world/index.mdx` exists, valid Zod frontmatter, renders in dev
- [ ] Draft flag hidden in prod, visible in dev

### BLOG-004: Schema/Types
- [ ] Zod schema validates: required/optional fields, date not in future, tags coerced to lowercase
- [ ] Types compile and cover all BlogPost meta fields

### BLOG-005: Data Utilities
- [ ] `reading-time.ts`: returns 1 for 200 words
- [ ] `toc.ts`: parses headings, nested correctly
- [ ] `mdx.ts`: compiles valid MDX, highlights code blocks

### BLOG-006: Data Layer
- [ ] `getAllPosts` returns correct posts, filters drafts in prod
- [ ] `getPostBySlug` returns all required fields, 404 on missing
- [ ] Tags and related posts returned as expected

### BLOG-007: MDX Components
- [ ] All MDX registry components render as per design (see 2.3)
- [ ] CodeBlock supports syntax/language and filename
- [ ] Callout shows info/tip/warning types
- [ ] Image correctly wraps `next/image`, optimizes local/remote
- [ ] Table and YouTube embeds functional

### BLOG-008: Blog List Page
- [ ] `/en/blog` and `/es/blog` page builds statically
- [ ] Client search and tag filter work
- [ ] Pagination visible and functional

### BLOG-009: Blog Post Page
- [ ] `/en/blog/[slug]` SSR/ISR works; TOC sidebar, reading time, metadata
- [ ] JSON-LD present in metadata; 404 on missing/draft post

### BLOG-010: OG Image
- [ ] `/en/blog/[slug]/opengraph-image.tsx` and `/es/blog/[slug]/opengraph-image.tsx` return PNG matching post metadata and project design

### BLOG-011: RSS/Feeds
- [ ] `/en/blog/feed.xml` and `/es/blog/feed.xml` return valid RSS 2.0 and JSON Feed
- [ ] Validate with official validators

### BLOG-012: i18n Modules
- [ ] all user-facing strings for blog pages in `i18n/modules/blog.ts`, imported in `en.ts`/`es.ts`
- [ ] `nav.blog` keys present in navigation i18n modules/types

### BLOG-013: Nav & Footer Links
- [ ] "Blog" appears after "About Me" in Header; present in Footer; both locales

### BLOG-014: Sitemap
- [ ] All blog slugs listed for both `/en/blog/<slug>` and `/es/blog/<slug>` with correct alternates

### BLOG-015: Build/Polish
- [ ] `pnpm build` passes with 0 errors; `/en/blog` and `/en/blog/hello-world` both render; OG, RSS, and sitemap functional
- [ ] No TypeScript or linting errors; all accessibility and i18n requirements satisfied

---

## 6. Edge Cases
- Posts with only a single locale: appear in both lists but marked with badge
- Drafts excluded from prod, visible in dev
- Past-dated/future-dated posts: future-dated not rendered, validation error
- Images: missing/invalid image property defaults gracefully (shows alt or fallback)
- Pagination: 0 posts handled gracefully (“No posts found”)
- RSS/sitemap errors, 404s: fallback to error pages as in Next.js

---

## 7. Open Questions / Risks
- MDX version compatibility with Next.js 16/React 19 Server Components
- Image optimization in MDX: for inline, simplest is `img` tag plus responsive class
- Draft posts: visible in dev only (not prod)
- Bundle size risk from rehype-pretty-code/shiki (on-demand load)
- Accessibility and SEO regression risk from hand-authored MDX
