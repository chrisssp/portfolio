import { NextResponse } from "next/server";
import { SITE_URL } from "@/config/site";
import { getDictionary, type Locale } from "@/i18n/config";
import { getAllPosts } from "@/lib/blog";

const SITE_TITLE = "Christian Serrano's Portfolio";
const SITE_AUTHOR = "Christian Serrano";

function escapeXml(value: string): string {
   return value
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&apos;");
}

export async function GET(request: Request) {
   const { searchParams, pathname } = new URL(request.url);
   const limit = Number(searchParams.get("limit")) || 20;

   const locale = pathname.split("/")[1] === "es" ? "es" : "en";
   const dict = await getDictionary(locale as Locale);

   const [postsEs, postsEn] = await Promise.all([
      getAllPosts("es"),
      getAllPosts("en"),
   ]);
   const posts = [...postsEs, ...postsEn]
      .sort(
         (a, b) =>
            new Date(b.frontmatter.date).getTime() -
            new Date(a.frontmatter.date).getTime(),
      )
      .slice(0, limit);

   const rssFeed = `<?xml version="1.0" encoding="UTF-8"?>\n<rss version="2.0">\n<channel>\n  <title>${escapeXml(SITE_TITLE)}</title>\n  <link>${SITE_URL}/blog</link>\n  <description>${escapeXml(dict.blog.feedDescription)}</description>\n  <pubDate>${new Date().toUTCString()}</pubDate>\n  ${posts
      .map(
         (post) =>
            `  <item>\n    <title>${escapeXml(post.frontmatter.title)}</title>\n    <link>${SITE_URL}/${post.frontmatter.locale}/blog/${post.slug}</link>\n    <pubDate>${new Date(post.frontmatter.date).toUTCString()}</pubDate>\n    <description>${escapeXml(post.frontmatter.description)}</description>\n    <guid isPermaLink="false">${SITE_URL}/${post.frontmatter.locale}/blog/${post.slug}</guid>\n    ${post.frontmatter.tags.map((tag) => `    <category>${escapeXml(tag)}</category>`).join("\n")}\n  </item>`,
      )
      .join("\n")}\n</channel>\n</rss>`;

   const jsonFeed = {
      version: "https://jsonfeed.org/spec/1.0",
      title: SITE_TITLE,
      home_page_url: `${SITE_URL}/blog`,
      feed_url: `${SITE_URL}/blog/feed.xml`,
      description: dict.blog.feedDescription,
      authors: [{ name: SITE_AUTHOR, url: SITE_URL }],
      items: posts.map((post) => ({
         id: `${SITE_URL}/${post.frontmatter.locale}/blog/${post.slug}`,
         url: `${SITE_URL}/${post.frontmatter.locale}/blog/${post.slug}`,
         title: post.frontmatter.title,
         content_text: post.frontmatter.description,
         date_published: new Date(post.frontmatter.date).toISOString(),
         authors: [{ name: SITE_AUTHOR, url: SITE_URL }],
         tags: post.frontmatter.tags,
      })),
   };

   const acceptHeader = request.headers.get("accept") || "";
   if (
      acceptHeader.includes("application/json") ||
      searchParams.get("format") === "json"
   ) {
      return NextResponse.json(jsonFeed, {
         headers: { "Content-Type": "application/feed+json; charset=utf-8" },
      });
   }

   return new Response(rssFeed, {
      headers: { "Content-Type": "application/rss+xml; charset=utf-8" },
   });
}
