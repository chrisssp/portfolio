## Exploration: filter-simplification

### Current State

The portfolio filtering system uses 4 independent axes:

| Axis | URL Param | localStorage Key | Options |
|------|-----------|-----------------|---------|
| `tech` | `tech` | `portfolio-tech-filter` | Dynamically generated from all project tech stacks |
| `domain` | `domain` | `portfolio-domain-filter` | health, fintech, logistics, retail |
| `platform` | `platform` | `portfolio-platform-filter` | web, mobile, api, landing |
| `tags` | `tag` | `portfolio-tag-filter` | ai-ml, iot-wearables, hackathon, research, enterprise |

**Filtering logic**: AND across axes, OR within each axis. An empty axis means "no constraint."

**UI**: FilterBar renders 4 accordion sections, each independently collapsible. Active chips show above with axis label prefix (e.g., "Domain: health").

**Data files** (`i18n/modules/projects/*.ts`): Each project has `categories: { domain: string[], platform: string[], tags: string[] }`. These stay untouched.

**No tests exist** in the project.

---

### Evaluation: Is it worth it?

**Verdict: YES, with a caveat about semantic change.**

#### What improves:
- **UI clarity**: 2 sections instead of 4. Users scan less.
- **URL simplicity**: `?focus=health,web,ai-ml` instead of `?domain=health&platform=web&tag=ai-ml`
- **Persistence**: 1 localStorage key instead of 3.
- **Code surface**: Fewer iterations, less plumbing for 3 category axes.

#### What changes semantically:
Currently `?domain=health&platform=web` means "projects that are health **AND** web." After the change, `?focus=health,web` means "projects that are health **OR** web."

This is a **loosening of filtering precision** — results will be broader, not narrower. For a portfolio site, this is acceptable: users typically browse, not query. But it's a deliberate tradeoff worth calling out explicitly.

#### Effort estimate:
~200 lines changed across 7 files. No tests to update (none exist). The risk is moderate mainly due to URL backward compatibility, not implementation complexity.

---

### Affected Areas

| File | Reason |
|------|--------|
| `config/categories.tsx` | Collapse `domain`, `platform`, `tags` into single `focus` axis with subgroup metadata |
| `hooks/useProjectFilter.ts` | Reduce from 4 axes to 2, change URL/storage keys, add legacy param migration |
| `components/molecules/FilterBar.tsx` | Add subgroup rendering within a single axis section |
| `components/organisms/Projects.tsx` | Rebuild `allValues`, `filterAxes`, `filterSelections`, `filterLabels` for 2-axis model; update filter logic |
| `i18n/types.ts` | Add `focus` filter label, restructure `filters` for subgroups |
| `i18n/locales/en.ts` | Add focus labels, update filter section UI strings |
| `i18n/locales/es.ts` | Same as en.ts |
| `openspec/specs/project-filter/spec.md` | Needs updating to reflect 2-axis model |

**NOT affected**: Project data files (`i18n/modules/projects/*.ts`). Their `categories` structure stays exactly as-is.

---

### Approaches

1. **Recommended: Two-axis model (tech + focus) with visual subgroups**
   - Merge domain, platform, tags into one `focus` axis
   - Platform remains as a visual subgroup within Focus
   - Industry/Vertical (domain + tags) is the other visual subgroup
   - Logic: single OR across all focus options
   - Effort: ~200 lines, 7 files
   - Pros: Cleanest UX, simplest URL, least code
   - Cons: Loses AND-between-categories precision (domain AND platform becomes focus=domain,platform = OR)

2. **Conservative: Keep 4 axes, visual regroup only**
   - FilterBar renders 2 visual sections but each contains independent axes underneath
   - Tech section maps to `tech` axis
   - Focus section renders `domain`, `platform`, `tags` as 3 sub-accordions
   - Preserves AND-between-axes behavior
   - Effort: ~80 lines, 2 files (FilterBar only)
   - Pros: No behavior change, backward compatible, simpler
   - Cons: Still 4 axes in URL/storage, code more complex to support nested sections

3. **Hybrid: Three axes (tech, vertical, platform)**
   - Merge domain + tags into `vertical`, keep `platform` as independent
   - 3 axes instead of 2
   - Effort: ~100 lines
   - Pros: Preserves AND between vertical and platform (useful distinction)
   - Cons: Still 3 URL params, still 3 sections. Incomplete simplification

---

### Recommendation

**Proceed with Approach 1** (two-axis model). The user already agreed to the design. The semantic change (AND → OR between categories) is acceptable for a portfolio browsing experience. The engineering effort is modest, and the UX improvement is real.

Document the semantic change explicitly in the spec so the decision is recorded.

---

### Technical Impact

| File | What changes | Complexity |
|------|-------------|------------|
| `config/categories.tsx` | Replace `CATEGORY_AXES` (domain, platform, tags) with `FOCUS_AXIS` containing all options grouped into `subgroups: [{ label: "Industry / Vertical", options: [...] }, { label: "Platform", options: [...] }]`. Change `FilterAxisKey` from 4 values to 2 (`"tech" \| "focus"`). Remove `CategoryAxisKey`. | Low |
| `hooks/useProjectFilter.ts` | Change `DEFAULT_AXES` to `[tech, focus]`. Change `createEmptySelections()` to `{ tech: [], focus: [] }`. Update `SelectionState` type. Add legacy URL param migration (`domain`/`platform`/`tag` → `focus`). Change storage keys. | Medium |
| `components/molecules/FilterBar.tsx` | Add `FilterAxisConfig.subgroups?: { label: string; options: FilterChipConfig[] }[]`. Render subgroups as labeled groups within an expanded section. This is the most UI-sensitive change. | Medium |
| `components/organisms/Projects.tsx` | Build `allValues` for 2 keys. Build focus axis by merging domain/platform/tags options. Change `filterSelections` mapping. Change filter logic: for `focus` axis, check across `project.categories.domain + project.categories.platform + project.categories.tags`. | Medium |
| `i18n/types.ts` | Replace `filter_domain`, `filter_platform`, `filter_tags` with `filter_focus` (and maybe `filter_focus_industry`, `filter_focus_platform` for subgroup labels). Change `filters` structure from `{ domain, platform, tags }` to `{ focus: { industry: {}, platform: {} } }`. | Low |
| `i18n/locales/en.ts` | Add `filter_focus: "Focus"`, add subgroup labels. Update `filters` section. | Low |
| `i18n/locales/es.ts` | Same as en.ts with Spanish translations. | Low |

---

### URL Migration Strategy

**Legacy params to handle**: `domain`, `platform`, `tag`

**Approach**: Silent migration on read (no redirect).

In `readSelectionsFromUrl()` and `readSelectionsFromStorage()`:

1. Read new `focus` param first
2. Also check for legacy params `domain`, `platform`, `tag`
3. Merge all found values into a single `focus` array
4. Deduplicate
5. On first write-back (via `syncToUrl`), the legacy params are naturally dropped because the hook only writes the 2 new axes

**localStorage migration**:
- Check for old keys (`portfolio-domain-filter`, `portfolio-platform-filter`, `portfolio-tag-filter`)
- If found AND the new key (`portfolio-focus-filter`) doesn't exist, merge them and save
- Delete old keys after migration

**Fallback support**: Not recommended to support old params indefinitely. The migration happens once per visitor silently. Bookmarked old URLs will auto-migrate on open.

---

### Risks

1. **Semantic change in filtering behavior** — `domain=X&platform=Y` (AND) becomes `focus=X,Y` (OR). Projects matching only one criterion will now appear. This is a deliberate loosening, but needs to be explicitly documented and accepted.

2. **Existing visitor bookmarks** — Old URLs will auto-migrate, but the results they see will differ (broader). Acceptable for a portfolio.

3. **No test suite** — Manual verification is the only safety net. Must be thorough.

4. **FilterBar UI complexity** — The subgroup rendering is the trickiest visual change. Requires careful implementation to match the existing design language.

5. **i18n restructure** — Changing the `filters` key shape may break any code that accesses it directly. Search for all references.

---

### Ready for Proposal

**Yes** — full analysis complete. The approach is clear, the tradeoffs are understood, and the user has already agreed to the design.

Next: sdd-propose → sdd-spec → sdd-design → sdd-tasks → sdd-apply → sdd-verify → sdd-archive
