import Link from "next/link";
import { Typography } from "@/components/atoms/Typography";
import type { Dictionary } from "@/i18n/types";
import type { BlogPostListItem } from "@/lib/blog/schema";

interface BlogCardProps {
   post: BlogPostListItem;
   locale: "es" | "en";
   labels: Dictionary["blog"];
}

export function BlogCard({ post, locale, labels }: BlogCardProps) {
   const { slug, frontmatter, readingTimeMinutes } = post;
   const formattedDate = new Date(frontmatter.date).toLocaleDateString(locale, {
      year: "numeric",
      month: "long",
      day: "numeric",
   });

   return (
      <article className="group bg-surface border border-subtle/50 rounded-2xl p-6 sm:p-8 transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10">
         <div className="flex flex-col h-full">
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

            <Typography
               variant="project"
               as="h3"
               className="text-body mb-3 group-hover:text-primary transition-colors"
            >
               {frontmatter.title}
            </Typography>

            <Typography
               variant="body"
               className="text-body/70 mb-4 flex-1 line-clamp-3"
            >
               {frontmatter.description}
            </Typography>

            <div className="flex flex-wrap gap-2 mb-4">
               {frontmatter.tags.slice(0, 3).map((tag) => (
                  <Typography
                     key={tag}
                     variant="small"
                     as="span"
                     weight="medium"
                     className="px-2 py-1 bg-surface border border-subtle/50 rounded-full text-body/70"
                  >
                     {tag}
                  </Typography>
               ))}
               {frontmatter.tags.length > 3 && (
                  <Typography
                     variant="small"
                     as="span"
                     weight="medium"
                     className="px-2 py-1 bg-surface border border-subtle/50 rounded-full text-body/60"
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
               <Link href={`/${locale}/blog/${slug}`}>
                  <Typography
                     variant="small"
                     as="span"
                     weight="semibold"
                     className="text-primary hover:underline transition-colors"
                  >
                     {labels.readMore} →
                  </Typography>
               </Link>
            </div>
         </div>
      </article>
   );
}
