import { SectionContainer } from "@/components/atoms/SectionContainer";
import { BlogPageClient } from "@/components/organisms/BlogPageClient";
import { getDictionary, type Locale } from "@/i18n/config";
import type { BlogPostListItem } from "@/lib/blog";

interface BlogPageProps {
   params: Promise<{ lang: string }>;
   searchParams: Promise<{ tag?: string; search?: string; page?: string }>;
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

export default async function BlogPage({
   params,
   searchParams,
}: BlogPageProps) {
   const { lang } = await params;
   const locale = lang as Locale;
   const sp = await searchParams;

   const dict = await getDictionary(locale);

   const tagFilter = sp.tag || "";
   const searchQuery = sp.search || "";
   const page = parseInt(sp.page || "1", 10);

   const { getAllPosts, getAllTags } = await import("@/lib/blog");
   const posts = await getAllPosts(locale);
   const allTags = await getAllTags(locale);

   const filteredPosts = filterPosts(posts, tagFilter, searchQuery);

   const POSTS_PER_PAGE = 9;
   const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
   const paginatedPosts = filteredPosts.slice(
      (page - 1) * POSTS_PER_PAGE,
      page * POSTS_PER_PAGE,
   );

   return (
      <SectionContainer showGrid={false}>
         <BlogPageClient
            locale={locale}
            labels={dict.blog}
            allTags={allTags}
            filteredPosts={paginatedPosts}
            totalPages={totalPages}
            page={page}
            tagFilter={tagFilter}
            searchQuery={searchQuery}
         />
      </SectionContainer>
   );
}

export async function generateStaticParams() {
   const { getAllPosts } = await import("@/lib/blog");
   const postsEs = await getAllPosts("es");
   const postsEn = await getAllPosts("en");

   const params: { lang: string }[] = [];
   postsEs.forEach(() => {
      params.push({ lang: "es" });
   });
   postsEn.forEach(() => {
      params.push({ lang: "en" });
   });

   return params;
}

export const revalidate = 3600;
