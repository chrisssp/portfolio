# Tasks: Cooper — AI Portfolio Chatbot

## Review Workload Forecast

| Field | Value |
|-------|-------|
| Estimated changed lines | 800-1000 |
| 400-line budget risk | High |
| Chained PRs recommended | Yes |
| Suggested split | PR 1: Foundation + Content Pipeline → PR 2: API Route → PR 3: Widget + Integration |
| Delivery strategy | exception-ok |
| Chain strategy | feature-branch-chain |

Decision needed before apply: No
Chained PRs recommended: Yes
Chain strategy: feature-branch-chain
400-line budget risk: High

### Suggested Work Units

| Unit | Goal | Likely PR | Notes |
|------|------|-----------|-------|
| 1 | Foundation + Content Pipeline | PR 1 | Base branch; deps, script, JSON generation |
| 2 | API Route | PR 2 | Depends on PR 1; chat/route.ts with streaming, defense |
| 3 | Widget + Integration | PR 3 | Depends on PR 1+2; all UI components, layout wiring |

---

## Phase 1: Foundation

- [x] 1.1 Add `@ai-sdk/google` and `ai` to `package.json` dependencies
- [x] 1.2 Add `public/portfolio-content.json` to `.gitignore`
- [x] 1.3 Verify `GOOGLE_GENERATIVE_AI_API_KEY` in `.env.local` (already gitignored)
- [x] 1.4 Add `predev` and `postbuild` scripts to `package.json` running `npx tsx scripts/generate-content-json.ts`

## Phase 2: Content Pipeline

- [x] 2.1 Create `scripts/generate-content-json.ts` reading all `i18n/modules/` TypeScript files
- [x] 2.2 Extract bilingual content with section tags (project, experience, education, about, hero, skills)
- [x] 2.3 Output flat JSON array to `public/portfolio-content.json` with required fields (id, section, locale, title, description, techStack, etc.)
- [x] 2.4 Run script to verify `public/portfolio-content.json` generated correctly with all 8 projects + experience + education + about

## Phase 3: API Route

- [x] 3.1 Create `app/api/chat/route.ts` with POST handler accepting `{ messages, locale }`
- [x] 3.2 Implement in-memory rate limiter: 10 requests/min/IP (Map<IP, timestamps[]>)
- [x] 3.3 Implement pre-flight keyword filter against portfolio keywords; return redirect if no match
- [x] 3.4 Implement keyword + section RAG matching against `public/portfolio-content.json`
- [x] 3.5 Build system prompt with Cooper persona, defense rules, structured action-button output format
- [x] 3.6 Configure Gemini safety settings: BLOCK_MEDIUM_AND_ABOVE for HATE_SPEECH, HARASSMENT, SEXUALLY_EXPLICIT, DANGEROUS_CONTENT
- [x] 3.7 Implement streaming response using `streamText` with `google('gemini-2.5-flash')`
- [x] 3.8 Handle errors: friendly "try again later" on Gemini failure; no env vars in response

## Phase 4: Widget Components

- [x] 4.1 Create `components/organisms/ChatWidget/greetings.ts` with curated bilingual array (6-8 entries), random selection per session
- [x] 4.2 Create `components/organisms/ChatWidget/chatSounds.ts` with Web Audio API send/receive tones (default muted)
- [x] 4.3 Create `components/organisms/ChatWidget/chatSession.ts` sessionStorage helpers (save/load/clear history, sound toggle, redirect count, terminated flag)
- [x] 4.4 Create `components/organisms/ChatWidget/ChatBubble.tsx` (bottom-center, fixed, z-[60], icon swap on open)
- [x] 4.5 Create `components/organisms/ChatWidget/TypingIndicator.tsx` (three animated dots, respects prefers-reduced-motion)
- [x] 4.6 Create `components/organisms/ChatWidget/MessageBubble.tsx` (markdown rendering, left/right alignment, action buttons for project/email/about links)
- [x] 4.7 Create `components/organisms/ChatWidget/MessageList.tsx` (scrollable, auto-scroll on new message, message entrance animations)
- [x] 4.8 Create `components/organisms/ChatWidget/SettingsPopover.tsx` (sound toggle, privacy tooltip with provided copy)
- [x] 4.9 Create `components/organisms/ChatWidget/ChatPanel.tsx` (header with settings + close, MessageList, InputArea, responsive: floating desktop ≥768px, fullscreen mobile <768px)
- [x] 4.10 Create `components/organisms/ChatWidget/ChatWidget.tsx` (main component, dynamic import `ssr:false`, wires all subcomponents, session persistence)

## Phase 5: Integration

- [x] 5.1 Wire `ChatWidget` into `app/[lang]/layout.tsx` with dynamic import and locale prop
- [x] 5.2 Verify positioning: chat bubble bottom-center, no overlap with MusicPlayer (bottom-left) or ScrollToTop (bottom-right)
- [x] 5.3 Test mobile full-screen overlay on <768px; desktop floating panel ≥768px
- [x] 5.4 Verify sessionStorage persistence across navigation and refresh; clears on tab close
- [x] 5.5 Test streaming token rendering with blinking cursor; markdown rendering in messages
- [x] 5.6 Test defense: out-of-scope redirect, 3-redirect limit, offensive termination, prompt injection redirect

---

## Next Step
Ready for implementation (sdd-apply). User waived line limit with exception-ok strategy — proceed with feature-branch-chain: PR 1 targets feature branch, PR 2 targets PR 1 branch, PR 3 targets PR 2 branch.