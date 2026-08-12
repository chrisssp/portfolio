"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect, useMemo, useRef, useSyncExternalStore } from "react";
import { Typography } from "@/components/atoms/Typography";
import { Pagination } from "@/components/molecules/Pagination";
import { BlogList } from "@/components/organisms/BlogList";
import type { Dictionary } from "@/i18n/types";
import type { BlogPostListItem } from "@/lib/blog";
import { formatTag } from "@/lib/blog/format";

interface BlogPageClientProps {
   locale: "en" | "es";
   labels: Dictionary["blog"];
   allTags: string[];
   posts: BlogPostListItem[];
}

const POSTS_PER_PAGE = 9;

interface UrlState {
   tag: string;
   search: string;
   page: number;
}

const DEFAULT_URL_STATE: UrlState = { tag: "", search: "", page: 1 };

// The URL is the source of truth for the active tag, search and page. The
// static shell renders all posts (server default); the store is hydrated
// from the URL after the first paint and kept in sync by our own handlers
// (tag toggle, search debounce, pagination) and the browser popstate event.
let urlState: UrlState = DEFAULT_URL_STATE;
const urlListeners = new Set<() => void>();

function subscribeUrl(listener: () => void) {
   urlListeners.add(listener);
   return () => {
      urlListeners.delete(listener);
   };
}

function getUrlSnapshot() {
   return urlState;
}

function getServerSnapshot() {
   return DEFAULT_URL_STATE;
}

function setUrlState(next: UrlState) {
   urlState = next;
   urlListeners.forEach((listener) => {
      listener();
   });
}

function readUrlState(): UrlState {
   if (typeof window === "undefined") {
      return DEFAULT_URL_STATE;
   }
   const params = new URLSearchParams(window.location.search);
   const page = Number.parseInt(params.get("page") || "1", 10);
   return {
      tag: params.get("tag") || "",
      search: params.get("search") || "",
      page: Number.isNaN(page) || page < 1 ? 1 : page,
   };
}

function filterPosts(
   posts: BlogPostListItem[],
   tagFilter: string,
   searchQuery: string,
) {
   return posts.filter((post) => {
      if (!post) return false;
      const matchesTag =
         !tagFilter ||
         (Array.isArray(post.frontmatter.tags) &&
            post.frontmatter.tags.includes(tagFilter));
      const matchesSearch =
         !searchQuery ||
         post.frontmatter.title
            .toLowerCase()
            .includes(searchQuery.toLowerCase()) ||
         post.frontmatter.description
            ?.toLowerCase()
            .includes(searchQuery.toLowerCase());
      return matchesTag && matchesSearch;
   });
}

export function BlogPageClient({
   locale,
   labels,
   allTags,
   posts,
}: BlogPageClientProps) {
   const router = useRouter();
   const pathname = usePathname();
   const {
      tag: tagFilter,
      search,
      page,
   } = useSyncExternalStore(subscribeUrl, getUrlSnapshot, getServerSnapshot);
   const replaceTimer = useRef<number | null>(null);

   // Hydrate the store from the URL once (deep links) and keep it in sync
   // with the browser back/forward navigation.
   useEffect(() => {
      setUrlState(readUrlState());

      const onPopState = () => {
         if (replaceTimer.current !== null) {
            window.clearTimeout(replaceTimer.current);
            replaceTimer.current = null;
         }
         setUrlState(readUrlState());
      };
      window.addEventListener("popstate", onPopState);
      return () => window.removeEventListener("popstate", onPopState);
   }, []);

   // Debounce the search input: reflect keystrokes immediately in the store,
   // then push the resulting URL (and reset to page 1) after a pause.
   const handleSearchChange = (value: string) => {
      setUrlState({ tag: tagFilter, search: value, page: 1 });
      if (replaceTimer.current !== null) {
         window.clearTimeout(replaceTimer.current);
      }
      replaceTimer.current = window.setTimeout(() => {
         const current = getUrlSnapshot();
         const params = new URLSearchParams();
         if (current.tag) params.set("tag", current.tag);
         if (value) params.set("search", value);
         params.set("page", "1");
         setUrlState({ tag: current.tag, search: value, page: 1 });
         router.replace(`${pathname}?${params.toString()}`);
      }, 400);
   };

   const handleTagToggle = (tag: string) => {
      const nextTag = tag !== tagFilter ? tag : "";
      const params = new URLSearchParams();
      if (nextTag) params.set("tag", nextTag);
      if (search) params.set("search", search);
      params.set("page", "1");
      setUrlState({ tag: nextTag, search, page: 1 });
      router.replace(`${pathname}?${params.toString()}`);
   };

   const handleClearTag = () => {
      const params = new URLSearchParams();
      if (search) params.set("search", search);
      params.set("page", "1");
      setUrlState({ tag: "", search, page: 1 });
      router.replace(`${pathname}?${params.toString()}`);
   };

   const handlePageChange = (nextPage: number) => {
      setUrlState({ tag: tagFilter, search, page: nextPage });
   };

   const filteredPosts = useMemo(
      () => filterPosts(posts, tagFilter, search),
      [posts, tagFilter, search],
   );

   const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
   const currentPage = Math.max(1, Math.min(page, totalPages || 1));
   const paginatedPosts = filteredPosts.slice(
      (currentPage - 1) * POSTS_PER_PAGE,
      currentPage * POSTS_PER_PAGE,
   );

   const paginationSearchParams = [
      tagFilter ? `tag=${encodeURIComponent(tagFilter)}` : "",
      search ? `search=${encodeURIComponent(search)}` : "",
   ]
      .filter(Boolean)
      .join("&");

   return (
      <>
         {tagFilter && (
            <div className="mb-4">
               <div className="flex items-center gap-2">
                  <Typography
                     variant="small"
                     as="span"
                     className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary"
                  >
                     {labels.tagFilterPrefix} {formatTag(tagFilter, locale)}
                  </Typography>
                  <button
                     type="button"
                     onClick={handleClearTag}
                     className="ml-2"
                  >
                     ×
                  </button>
               </div>
            </div>
         )}

         <div className="mb-8">
            <div className="flex items-center justify-between mb-2">
               <Typography variant="section" as="h1" className="mb-4">
                  {labels.title}
               </Typography>
            </div>
            <Typography variant="body" className="text-body/60">
               {labels.subtitle}
            </Typography>
         </div>

         <div className="mb-8 space-y-4">
            <div className="relative">
               <input
                  type="text"
                  placeholder={labels.searchPlaceholder}
                  value={search}
                  onChange={(e) => handleSearchChange(e.target.value)}
                  className="w-full px-4 py-2 border border-subtle/50 rounded-lg bg-surface text-body placeholder-body/40 focus:outline-none focus:ring-2 focus:ring-primary"
               />
            </div>

            <div>
               <Typography
                  variant="small"
                  as="h3"
                  weight="semibold"
                  className="mb-2 text-body"
               >
                  {labels.filterByTags}
               </Typography>
               <div className="flex flex-wrap gap-2">
                  {allTags.map((tag) => (
                     <button
                        type="button"
                        key={tag}
                        onClick={() => handleTagToggle(tag)}
                        className={`px-3 py-1 rounded-full transition-colors ${
                           tag === tagFilter
                              ? "bg-primary text-primary-contrast"
                              : "bg-surface border border-subtle/50 text-body hover:border-primary/50"
                        }`}
                     >
                        <Typography variant="small" as="span">
                           {formatTag(tag, locale)}
                        </Typography>
                     </button>
                  ))}
               </div>
            </div>
         </div>

         <BlogList posts={paginatedPosts} locale={locale} labels={labels} />

         {totalPages > 1 && (
            <div className="mt-12">
               <Pagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  basePath={`/${locale}/blog`}
                  searchParams={paginationSearchParams}
                  labels={labels.pagination}
                  onNavigate={handlePageChange}
               />
            </div>
         )}
      </>
   );
}
