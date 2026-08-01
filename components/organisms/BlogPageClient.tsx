"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Typography } from "@/components/atoms/Typography";
import { Pagination } from "@/components/molecules/Pagination";
import { BlogList } from "@/components/organisms/BlogList";
import type { Dictionary } from "@/i18n/types";
import type { BlogPostListItem } from "@/lib/blog";

interface BlogPageClientProps {
   locale: "en" | "es";
   labels: Dictionary["blog"];
   allTags: string[];
   filteredPosts: BlogPostListItem[];
   totalPages: number;
   page: number;
   tagFilter: string;
   searchQuery: string;
}

export function BlogPageClient({
   locale,
   labels,
   allTags,
   filteredPosts,
   totalPages,
   page,
   tagFilter,
   searchQuery,
}: BlogPageClientProps) {
   const router = useRouter();
   const pathname = usePathname();
   const [mounted, setMounted] = useState(false);
   const [search, setSearch] = useState(searchQuery);

   useEffect(() => {
      setMounted(true);
   }, []);

   useEffect(() => {
      setSearch(searchQuery);
   }, [searchQuery]);

   useEffect(() => {
      if (!mounted || search === searchQuery) return;
      const timeout = setTimeout(() => {
         const params = new URLSearchParams();
         if (tagFilter) params.set("tag", tagFilter);
         if (search) params.set("search", search);
         params.set("page", "1");
         router.replace(`${pathname}?${params.toString()}`);
      }, 400);
      return () => clearTimeout(timeout);
   }, [search, searchQuery, tagFilter, mounted, pathname, router]);

   const handleTagToggle = (tag: string) => {
      const params = new URLSearchParams();
      if (tag !== tagFilter) params.set("tag", tag);
      if (search) params.set("search", search);
      params.set("page", "1");
      router.replace(`${pathname}?${params.toString()}`);
   };

   const handleClearTag = () => {
      const params = new URLSearchParams();
      if (search) params.set("search", search);
      params.set("page", "1");
      router.replace(`${pathname}?${params.toString()}`);
   };

   const paginationSearchParams = [
      tagFilter ? `tag=${encodeURIComponent(tagFilter)}` : "",
      searchQuery ? `search=${encodeURIComponent(searchQuery)}` : "",
   ]
      .filter(Boolean)
      .join("&");

   if (!mounted) {
      return null;
   }

   return (
      <div>
         <div className="mb-8">
            <Typography variant="section" as="h1" className="mb-4">
               {labels.title}
            </Typography>
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
                  onChange={(e) => setSearch(e.target.value)}
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
                           {tag}
                        </Typography>
                     </button>
                  ))}
               </div>
            </div>
         </div>

         {tagFilter && (
            <div className="mb-4">
               <Typography
                  variant="small"
                  as="span"
                  className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary"
               >
                  {labels.tagFilterPrefix} {tagFilter}
                  <button
                     type="button"
                     onClick={handleClearTag}
                     className="ml-2 hover:text-primary/70"
                  >
                     <Typography variant="small" as="span">
                        ×
                     </Typography>
                  </button>
               </Typography>
            </div>
         )}

         <BlogList posts={filteredPosts} locale={locale} labels={labels} />

         {totalPages > 1 && (
            <div className="mt-12">
               <Pagination
                  currentPage={page}
                  totalPages={totalPages}
                  basePath={`/${locale}/blog`}
                  searchParams={paginationSearchParams}
                  labels={labels.pagination}
               />
            </div>
         )}
      </div>
   );
}
