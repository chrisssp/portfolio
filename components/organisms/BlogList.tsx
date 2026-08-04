import { AnimatedSection } from "@/components/atoms/AnimatedSection";
import { Typography } from "@/components/atoms/Typography";
import { BlogCard } from "@/components/molecules/BlogCard";
import type { Dictionary } from "@/i18n/types";
import type { BlogPostListItem } from "@/lib/blog";

interface BlogListProps {
   posts: BlogPostListItem[];
   locale: "es" | "en";
   labels: Dictionary["blog"];
}

export function BlogList({ posts, locale, labels }: BlogListProps) {
   if (posts.length === 0) {
      return (
         <div className="text-center py-16">
            <Typography
               variant="project"
               as="h3"
               weight="semibold"
               className="text-body mb-2"
            >
               {labels.noArticlesTitle}
            </Typography>
            <Typography variant="body" className="text-body/60">
               {labels.noArticlesDescription}
            </Typography>
         </div>
      );
   }

   return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
         {posts.map((post, index) => (
            <AnimatedSection
               key={post.slug}
               variant="fade-up"
               delay={index * 60}
               threshold={0.05}
            >
               <BlogCard post={post} locale={locale} labels={labels} />
            </AnimatedSection>
         ))}
      </div>
   );
}
