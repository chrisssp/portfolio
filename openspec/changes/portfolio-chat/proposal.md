# Proposal: Cooper — AI Portfolio Chatbot

## Intent

Visitors have no interactive way to explore Christian's portfolio beyond scrolling static sections. An AI chatbot ("Cooper") answers natural-language questions about projects, experience, skills, and education — making the portfolio explorable via conversation.

## Scope

### In Scope
- Build-time content extraction: generate `public/portfolio-content.json` from i18n modules
- Server-side API route with RAG retrieval (keyword + section matching, no vector DB)
- Google Gemini 2.5 Flash integration via `@ai-sdk/google`
- Floating chat widget (lazy-loaded, bottom-center with offset to avoid MusicPlayer/ScrollToTop)
- **Mobile responsive**: full-screen chat panel on mobile (< 768px), floating panel on desktop
- Session-only chat history via `sessionStorage`
- Language-aware responses (EN question → EN answer, ES → ES)
- **Defense**: server-side enforcement since system prompt is public (repo is open-source). Pre-flight keyword filter + Gemini safety settings + prompt-level rules. Playful redirect for jailbreak, hard cut for offensive content.
- Action buttons in responses (project links, email, about section)
- Dynamic randomized opening greetings per session

### Out of Scope
- Voice mode
- Vector database / embeddings
- Langfuse or observability tooling
- CI gates or automated testing
- Email alerts

## Capabilities

### New Capabilities
- `chat-content-pipeline`: Build-time extraction of i18n modules into structured JSON knowledge base served from `public/`
- `chat-api`: Server-side API route handling Gemini integration, RAG retrieval, system prompt, and streaming responses
- `chat-widget`: Floating client-side chat UI with open/close, message list, input, session persistence, and action buttons
- `chat-defense`: Personality rules, jailbreak redirect, offensive content termination, and dynamic greeting system

### Modified Capabilities
None — all existing specs (subtle-motion, github-stats, project-filter) remain unchanged.

## Approach

1. **Content pipeline**: Node script runs at build, reads all `i18n/modules/` files, flattens into `portfolio-content.json` with section tags (project/experience/education/about) per entry.
2. **API route** (`app/api/chat/route.ts`): Accepts messages, runs keyword+section retrieval against the JSON, builds context, streams Gemini 2.5 Flash response. System prompt enforces personality, defense rules, and structured action-button output.
3. **Chat widget**: `components/organisms/ChatWidget.tsx` — lazy-loaded client component. `ChatBubble` (bottom-center), `ChatPanel` (message list, input, action buttons). **Mobile**: full-screen overlay on open (< 768px). **Desktop**: floating panel. Session state in `sessionStorage`.
4. **Greeting system**: Curated greeting array (bilingual), one picked randomly per `sessionStorage` session key.

## Affected Areas

| Area | Impact | Description |
|------|--------|-------------|
| `app/api/chat/route.ts` | New | API route for Gemini streaming |
| `public/portfolio-content.json` | New | Build-time knowledge base |
| `components/organisms/ChatWidget.tsx` | New | Chat UI bubble + panel |
| `scripts/generate-content-json.ts` | New | Build-time content extraction |
| `package.json` | Modified | New deps: `@ai-sdk/google`, `ai` |
| `i18n/modules/` | Read-only | Source data, no changes |

## Risks

| Risk | Likelihood | Mitigation |
|------|------------|------------|
| Gemini free tier (1500 req/day) exceeded | Low | Rate limit per IP; graceful "try again later" message |
| API key exposed client-side | Med | Server-side only API route; key in env vars, never serialized |
| Chat widget overlaps existing floating UI | Low | Bottom-center positioning with explicit offset; test at all breakpoints |
| System prompt bypass (public repo) | Med | Defense is server-side enforced (pre-filter + Gemini safety settings), not prompt secrecy. Playful redirect is an overt feature, not a hidden trick. |

## Rollback Plan

Remove `app/api/chat/`, `components/organisms/ChatWidget.tsx`, `scripts/generate-content-json.ts`, `public/portfolio-content.json`. Revert `package.json` deps. No existing behavior is modified — pure additive feature.

## Dependencies

- `GOOGLE_GENERATIVE_AI_API_KEY` env var configured in Vercel
- `@ai-sdk/google` and `ai` packages installed

## Success Criteria

- [ ] `portfolio-content.json` generated at build time with all 8 projects, 5 experience entries, education, skills, and about sections
- [ ] Chat widget visible on all pages, does not overlap MusicPlayer or ScrollToTop
- [ ] Mobile: chat panel opens as full-screen overlay on < 768px viewports
- [ ] Questions about specific projects return accurate, context-grounded answers
- [ ] EN questions get EN answers; ES questions get ES answers
- [ ] Jailbreak attempts receive playful redirect; offensive content triggers conversation termination
- [ ] Action buttons appear for project mentions, contact info, and about references
- [ ] Session history persists across navigation and refresh, clears on tab close
