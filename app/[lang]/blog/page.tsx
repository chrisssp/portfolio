import { Suspense } from "react";
import { SectionContainer } from "@/components/atoms/SectionContainer";
import { BlogPageClient } from "@/components/organisms/BlogPageClient";
import { getDictionary, type Locale } from "@/i18n/config";

interface BlogPageProps {
   params: Promise<{ lang: string }>;
}

export default async function BlogPage({ params }: BlogPageProps) {
   const { lang } = await params;
   const locale = lang as Locale;

   const dict = await getDictionary(locale);

   const { getAllPosts, getAllTags } = await import("@/lib/blog");
   const posts = await getAllPosts(locale);
   const allTags = await getAllTags(locale);

   return (
      <SectionContainer showGrid={false}>
         <Suspense fallback={null}>
            <BlogPageClient
               locale={locale}
               labels={dict.blog}
               allTags={allTags}
               posts={posts}
            />
         </Suspense>
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
