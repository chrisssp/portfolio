import Link from "next/link";
import { Typography } from "@/components/atoms/Typography";
import type { Dictionary } from "@/i18n/types";
import { formatTag } from "@/lib/blog/format";
import type { BlogPostListItem } from "@/lib/blog/schema";

interface BlogCardProps {
   post: BlogPostListItem;
   locale: "es" | "en";
   labels: Dictionary["blog"];
   /** "full" for the blog index, "compact" for secondary slots like related posts. */
   variant?: "full" | "compact";
}

export function BlogCard({
   post,
   locale,
   labels,
   variant = "full",
}: BlogCardProps) {
   const { slug, frontmatter, readingTimeMinutes } = post;
   const isCompact = variant === "compact";
   const formattedDate = new Date(frontmatter.date).toLocaleDateString(locale, {
      year: "numeric",
      month: "long",
      day: "numeric",
   });

   return (
      <article className="group relative bg-surface border border-subtle/50 rounded-2xl p-5 md:p-6 transition-all duration-200 hover:border-primary/40 hover:shadow-md h-full">
         <div className="flex flex-col h-full">
            {!isCompact && (
               <div className="flex items-center gap-3 mb-4">
                  <time dateTime={frontmatter.date}>
                     <Typography
                        variant="small"
                        as="span"
                        className="text-body/60"
                     >
                        {formattedDate}
                     </Typography>
                  </time>
               </div>
            )}

            <Typography
               variant="project"
               as="h3"
               className={`text-body group-hover:text-primary transition-colors ${
                  isCompact ? "mb-2 line-clamp-2" : "mb-3"
               }`}
            >
               {frontmatter.title}
            </Typography>

            <Typography
               variant={isCompact ? "small" : "body"}
               className={`text-body/70 flex-1 ${
                  isCompact ? "mb-3 line-clamp-2" : "mb-4 line-clamp-3"
               }`}
            >
               {frontmatter.description}
            </Typography>

            <div className="flex flex-wrap gap-2 mb-4">
               {frontmatter.tags.slice(0, isCompact ? 2 : 3).map((tag) => (
                  <Typography
                     key={tag}
                     variant="small"
                     as="span"
                     weight="medium"
                     className="px-2 py-1 bg-primary/10 text-primary border border-primary/20 rounded-full"
                  >
                     {formatTag(tag, locale)}
                  </Typography>
               ))}
               {!isCompact && frontmatter.tags.length > 3 && (
                  <Typography
                     variant="small"
                     as="span"
                     weight="medium"
                     className="px-2 py-1 bg-primary/10 text-primary/60 border border-primary/20 rounded-full"
                  >
                     +{frontmatter.tags.length - 3}
                  </Typography>
               )}
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-subtle/50 flex-wrap gap-2">
               <Typography
                  variant="small"
                  as="span"
                  className="flex items-center gap-1 text-body/60"
               >
                  <svg
                     className="w-4 h-4"
                     fill="none"
                     stroke="currentColor"
                     viewBox="0 0 24 24"
                     aria-hidden="true"
                  >
                     <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                     />
                  </svg>
                  {readingTimeMinutes} {labels.readTime}
               </Typography>
               <Typography
                  variant="small"
                  as="span"
                  weight="semibold"
                  className="text-primary"
               >
                  {labels.readMore} →
               </Typography>
            </div>
         </div>
         <Link
            href={`/${locale}/blog/${slug}`}
            aria-label={frontmatter.title}
            className="absolute inset-0 rounded-2xl focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:outline-none"
         />
      </article>
   );
}
