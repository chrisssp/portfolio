import { formatDate } from "date-fns";
import { enUS as enLocale, es as esLocale } from "date-fns/locale";
import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { FaLinkedin } from "react-icons/fa";
import { LuChevronLeft, LuChevronRight, LuClock } from "react-icons/lu";
import { Button } from "@/components/atoms/Button";
import { Card } from "@/components/atoms/Card";
import { SectionContainer } from "@/components/atoms/SectionContainer";
import { Typography } from "@/components/atoms/Typography";
import Resources from "@/components/molecules/Resources";
import ShareButtons from "@/components/molecules/ShareButtons";
import TableOfContents from "@/components/molecules/TableOfContents";
import { SITE_URL } from "@/config/site";
import { getDictionary, type Locale } from "@/i18n/config";
import { getPostBySlug, getPostSeriesInfo, getRelatedPosts } from "@/lib/blog";

interface PostPageProps {
   params: Promise<{
      lang: string;
      slug: string;
   }>;
}

export async function generateMetadata({
   params,
}: PostPageProps): Promise<Metadata> {
   const { lang, slug } = await params;
   const locale = lang as Locale;

   const post = await getPostBySlug(slug, locale);
   if (!post || post.frontmatter.locale !== locale) return {};

   return {
      title: post.frontmatter.title,
      description: post.frontmatter.description,
      alternates: {
         canonical: `/${lang}/blog/${slug}`,
      },
      openGraph: {
         type: "article",
         title: post.frontmatter.title,
         description: post.frontmatter.description,
         url: `/${lang}/blog/${slug}`,
         publishedTime: post.frontmatter.date,
         images: post.frontmatter.coverImage
            ? [post.frontmatter.coverImage]
            : undefined,
      },
   };
}

async function PostPage({ params }: PostPageProps) {
   const { lang, slug } = await params;
   const locale = lang as Locale;

   const dict = await getDictionary(locale);

   const post = await getPostBySlug(slug, locale);
   if (!post || post.frontmatter.locale !== locale) {
      notFound();
   }

   const seriesInfo = await getPostSeriesInfo(slug, locale);
   const relatedPosts = await getRelatedPosts(slug, locale, 3);

   const postUrl = `${SITE_URL}/${lang}/blog/${slug}`;

   const jsonLd = {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: post.frontmatter.title,
      description: post.frontmatter.description,
      datePublished: post.frontmatter.date,
      author: {
         "@type": "Person",
         name: "Christian Serrano",
         url: SITE_URL,
      },
      publisher: {
         "@type": "Person",
         name: "Christian Serrano",
         url: SITE_URL,
      },
      image: post.frontmatter.coverImage
         ? `${SITE_URL}${post.frontmatter.coverImage}`
         : undefined,
      mainEntityOfPage: postUrl,
   };

   return (
      <SectionContainer showGrid={false}>
         <article className="max-w-5xl mx-auto">
            <header className="mb-8">
               <div className="flex items-center gap-2 mb-4 flex-wrap">
                  <Typography
                     variant="small"
                     as="span"
                     className="inline-flex items-center text-body/60"
                  >
                     <LuClock className="w-4 h-4 mr-1" />
                     {post.readingTimeMinutes} {dict.blog.readTime}
                  </Typography>
                  <Typography
                     variant="small"
                     as="span"
                     className="text-body/60"
                  >
                     {formatDate(
                        new Date(post.frontmatter.date),
                        "MMMM d, yyyy",
                        { locale: locale === "es" ? esLocale : enLocale },
                     )}
                  </Typography>
               </div>

               <Typography variant="section" as="h1" className="mb-4 text-body">
                  {post.frontmatter.title}
               </Typography>
               <Typography
                  variant="project"
                  as="p"
                  weight="normal"
                  className="text-body/70 mb-6"
               >
                  {post.frontmatter.description}
               </Typography>

               <div className="flex flex-wrap gap-2 mb-6">
                  {post.frontmatter.tags.map((tag) => (
                     <Typography
                        key={tag}
                        variant="small"
                        as="span"
                        weight="medium"
                        className="px-3 py-1 bg-surface border border-subtle/50 rounded-full text-body/70"
                     >
                        {tag}
                     </Typography>
                  ))}
               </div>
            </header>

            {post.frontmatter.coverImage && (
               <Image
                  src={post.frontmatter.coverImage}
                  alt={post.frontmatter.title}
                  width={1200}
                  height={627}
                  priority
                  className="w-full h-auto rounded-2xl border border-subtle/50 shadow-lg mb-10"
               />
            )}

            <div className="grid lg:grid-cols-[minmax(0,1fr)_240px] lg:gap-10">
               <div className="min-w-0">
                  {post.toc.length > 0 && (
                     <details
                        className="group lg:hidden mb-6 overflow-hidden rounded-xl border border-subtle/50 bg-surface"
                        aria-label={dict.blog.tableOfContents}
                     >
                        <summary className="flex cursor-pointer list-none items-center justify-between px-4 py-3 select-none [&::-webkit-details-marker]:hidden">
                           <Typography
                              variant="small"
                              as="span"
                              weight="semibold"
                              className="text-body/80"
                           >
                              {dict.blog.tableOfContents}
                           </Typography>
                           <LuChevronRight className="size-4 text-body/60 transition-transform duration-200 group-open:rotate-90" />
                        </summary>
                        <div className="px-4 pb-4">
                           <TableOfContents
                              items={post.toc}
                              label={dict.blog.tableOfContents}
                              showLabel={false}
                           />
                        </div>
                     </details>
                  )}
                  <div className="mb-10">{post.content}</div>

                  {post.frontmatter.linkedin && (
                     <div className="mb-8">
                        <a
                           href={post.frontmatter.linkedin}
                           target="_blank"
                           rel="noopener noreferrer"
                        >
                           <Button
                              variant="primary"
                              className="bg-[#0A66C2] hover:bg-[#084a8c] border-[#0A66C2] text-primary-contrast whitespace-normal!"
                              icon={
                                 <FaLinkedin className="size-5 text-primary-contrast" />
                              }
                           >
                              {dict.blog.viewOnLinkedin}
                           </Button>
                        </a>
                     </div>
                  )}

                  <ShareButtons
                     url={postUrl}
                     title={post.frontmatter.title}
                     texts={{
                        share: dict.blog.share,
                        copyLink: dict.blog.copyLink,
                        copied: dict.blog.copied,
                        linkedin: dict.blog.shareLinkedin,
                        x: dict.blog.shareX,
                     }}
                  />
               </div>

               <aside className="hidden lg:block">
                  <div className="sticky top-24 max-h-[calc(100vh-7rem)] overflow-y-auto pb-8">
                     <TableOfContents
                        items={post.toc}
                        label={dict.blog.tableOfContents}
                     />
                  </div>
               </aside>
            </div>

            {post.frontmatter.resources &&
               post.frontmatter.resources.length > 0 && (
                  <section className="mt-12 pt-8 border-t border-subtle/50">
                     <Typography
                        variant="project"
                        as="h2"
                        className="mb-6 text-body"
                     >
                        {dict.blog.resources}
                     </Typography>
                     <Resources items={post.frontmatter.resources} />
                  </section>
               )}

            {seriesInfo && (seriesInfo.previous || seriesInfo.next) && (
               <footer className="border-t border-subtle/50 pt-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                     {seriesInfo.previous && (
                        <Card className="p-6" variant="outlined">
                           <div className="flex items-center gap-2 mb-2">
                              <LuChevronLeft className="w-4 h-4 text-primary" />
                              <Typography
                                 variant="small"
                                 as="span"
                                 className="text-body/60"
                              >
                                 {dict.blog.prevPost}
                              </Typography>
                           </div>
                           <a
                              href={`/${lang}/blog/${seriesInfo.previous.slug}`}
                              className="hover:text-primary"
                           >
                              <Typography
                                 variant="body"
                                 as="span"
                                 weight="semibold"
                                 className="hover:text-primary"
                              >
                                 {seriesInfo.previous.frontmatter.title}
                              </Typography>
                           </a>
                           <Typography
                              variant="small"
                              as="p"
                              className="text-body/60 mt-1"
                           >
                              {formatDate(
                                 new Date(seriesInfo.previous.frontmatter.date),
                                 "MMM d, yyyy",
                              )}
                           </Typography>
                        </Card>
                     )}
                     {seriesInfo.next && (
                        <Card className="p-6" variant="outlined">
                           <div className="flex items-center gap-2 mb-2 justify-end">
                              <Typography
                                 variant="small"
                                 as="span"
                                 className="text-body/60"
                              >
                                 {dict.blog.nextPost}
                              </Typography>
                              <LuChevronRight className="w-4 h-4 text-primary" />
                           </div>
                           <a
                              href={`/${lang}/blog/${seriesInfo.next.slug}`}
                              className="hover:text-primary text-right block"
                           >
                              <Typography
                                 variant="body"
                                 as="span"
                                 weight="semibold"
                                 className="hover:text-primary"
                              >
                                 {seriesInfo.next.frontmatter.title}
                              </Typography>
                           </a>
                           <Typography
                              variant="small"
                              as="p"
                              className="text-body/60 mt-1 text-right"
                           >
                              {formatDate(
                                 new Date(seriesInfo.next.frontmatter.date),
                                 "MMM d, yyyy",
                              )}
                           </Typography>
                        </Card>
                     )}
                  </div>
               </footer>
            )}

            {relatedPosts.length > 0 && (
               <section className="mt-12 pt-8 border-t border-subtle/50">
                  <Typography
                     variant="project"
                     as="h2"
                     className="mb-6 text-body"
                  >
                     {dict.blog.relatedPosts}
                  </Typography>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                     {relatedPosts.map((relatedPost) => (
                        <Card
                           key={relatedPost.slug}
                           className="p-6"
                           variant="outlined"
                        >
                           <Typography
                              as="h3"
                              variant="project"
                              weight="semibold"
                              className="mb-2 line-clamp-2 text-body"
                           >
                              <a
                                 href={`/${lang}/blog/${relatedPost.slug}`}
                                 className="hover:text-primary transition-colors"
                              >
                                 {relatedPost.frontmatter.title}
                              </a>
                           </Typography>
                           <Typography
                              variant="small"
                              as="p"
                              className="text-body/60 mb-3 line-clamp-2"
                           >
                              {relatedPost.frontmatter.description}
                           </Typography>
                           <div className="flex flex-wrap gap-1">
                              {relatedPost.frontmatter.tags
                                 .slice(0, 2)
                                 .map((tag) => (
                                    <Typography
                                       key={tag}
                                       variant="small"
                                       as="span"
                                       weight="medium"
                                       className="px-2 py-1 bg-primary/10 text-primary rounded-full"
                                    >
                                       {tag}
                                    </Typography>
                                 ))}
                           </div>
                        </Card>
                     ))}
                  </div>
               </section>
            )}

            <script
               type="application/ld+json"
               // biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD is safe here
               dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
         </article>
      </SectionContainer>
   );
}

export async function generateStaticParams() {
   const { getAllPosts } = await import("@/lib/blog");
   const postsEs = await getAllPosts("es");
   const postsEn = await getAllPosts("en");

   const params: { lang: string; slug: string }[] = [];
   postsEs.forEach((post) => {
      params.push({ lang: "es", slug: post.slug });
   });
   postsEn.forEach((post) => {
      params.push({ lang: "en", slug: post.slug });
   });

   return params;
}

export const revalidate = 3600;

export default PostPage;
