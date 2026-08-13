import fs from "node:fs/promises";
import path from "node:path";
import { glob } from "fast-glob";
import GithubSlugger from "github-slugger";
import matter from "gray-matter";
import { compileMDX } from "next-mdx-remote/rsc";
import { cache, createElement } from "react";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";
import type { ShikiTransformer } from "shiki";
import MDXDiagram from "@/components/mdx/Diagram";
import MDXImage from "@/components/mdx/Image";
import mdxComponents from "@/components/mdx/registry";
import { ui } from "@/i18n/modules/ui";
import type {
   BlogPost,
   BlogPostFrontmatter,
   BlogPostListItem,
   LocalizedBlogPostFrontmatter,
   TableOfContentsItem,
} from "./schema";

export type {
   BlogPost,
   BlogPostFrontmatter,
   BlogPostListItem,
   LocalizedBlogPostFrontmatter,
   TableOfContentsItem,
};

const BLOG_CONTENT_PATH = path.join(process.cwd(), "content/blog");

const copyMetaTransformer: ShikiTransformer = {
   name: "data-meta",
   pre(hast) {
      const meta = this.options.meta?.__raw;
      if (meta) {
         hast.properties["data-meta"] = meta.trim();
      }
   },
};

const rehypePrettyCodeOptions = {
   theme: {
      dark: "github-dark",
      light: "github-light",
   },
   keepBackground: true,
   transformers: [copyMetaTransformer],
};

function extractTableOfContents(content: string): TableOfContentsItem[] {
   const toc: TableOfContentsItem[] = [];
   const slugger = new GithubSlugger();
   let inFence = false;

   for (const line of content.split("\n")) {
      if (/^\s{0,3}(```+|~~~+)/.test(line)) {
         inFence = !inFence;
         continue;
      }
      if (inFence || line.startsWith("\t") || /^\s{4}/.test(line)) continue;

      const match = line.match(/^(##|###)\s+(.+)$/);
      if (!match) continue;

      const level = match[1] === "##" ? 2 : 3;
      const text = match[2].trim();
      const id = slugger.slug(text.replace(/[*_`]/g, ""));

      const item: TableOfContentsItem = { level, text, id };

      if (level === 2) {
         toc.push(item);
      } else if (level === 3 && toc.length > 0) {
         const lastH2 = toc[toc.length - 1];
         if (!lastH2.children) lastH2.children = [];
         lastH2.children.push(item);
      }
   }

   return toc;
}

function calculateReadingTime(content: string): number {
   const wordsPerMinute = 200;
   const words = content.split(/\s+/).filter(Boolean).length;
   return Math.max(1, Math.ceil(words / wordsPerMinute));
}

function extractLanguageContent(
   fullContent: string,
   locale: "es" | "en",
): string {
   const markers = {
      es: "{/* SPANISH VERSION */}",
      en: "{/* ENGLISH VERSION */}",
   };
   const sections = fullContent.split(markers.es);

   let content: string;
   if (locale === "es" && sections.length > 1) {
      content = sections[1].split(markers.en)[0];
   } else if (locale === "en" && sections.length > 1) {
      content = fullContent.split(markers.en)[1] || "";
   } else {
      content = fullContent;
   }

   return content
      .replace(/\n---\s*$/, "")
      .trim()
      .replace(/^#\s+.+\n+/, "");
}

async function readPostFile(
   slug: string,
): Promise<{ frontmatter: BlogPostFrontmatter; content: string } | null> {
   const postPath = path.join(BLOG_CONTENT_PATH, slug, "index.mdx");
   try {
      const fileContent = await fs.readFile(postPath, "utf-8");
      const { data, content } = matter(fileContent);
      return { frontmatter: data as BlogPostFrontmatter, content };
   } catch {
      return null;
   }
}

export const getAllPosts = cache(
   async (locale?: "es" | "en"): Promise<BlogPostListItem[]> => {
      const slugs = await glob("*/index.mdx", { cwd: BLOG_CONTENT_PATH });
      const posts: BlogPostListItem[] = [];

      for (const slugPath of slugs) {
         const slug = path.dirname(slugPath);
         const result = await readPostFile(slug);
         if (!result) continue;

         const { frontmatter, content } = result;

         if (frontmatter.draft) continue;

         const targetLocale = locale || "es";
         const translations = frontmatter.translations[targetLocale];

         if (!translations) continue;

         const readingTimeMinutes = calculateReadingTime(
            extractLanguageContent(content, targetLocale),
         );
         const localizedFrontmatter: LocalizedBlogPostFrontmatter = {
            title: translations.title,
            description: translations.description,
            shareText: translations.shareText,
            tags: translations.tags,
            date: frontmatter.date,
            draft: frontmatter.draft,
            locale: targetLocale,
            coverImage: translations.coverImage ?? frontmatter.coverImage,
            coverImageDark:
               translations.coverImageDark ?? frontmatter.coverImageDark,
            ogImage: translations.ogImage ?? frontmatter.ogImage,
            ogImageDark: translations.ogImageDark ?? frontmatter.ogImageDark,
            series: frontmatter.series,
            linkedin: frontmatter.linkedin,
            resources: translations.resources,
         };

         posts.push({
            slug,
            frontmatter: localizedFrontmatter,
            readingTimeMinutes,
         });
      }

      return posts.sort(
         (a, b) =>
            new Date(b.frontmatter.date).getTime() -
            new Date(a.frontmatter.date).getTime(),
      );
   },
);

export const getPostBySlug = cache(
   async (
      slug: string,
      locale: "es" | "en" = "es",
   ): Promise<BlogPost | null> => {
      const result = await readPostFile(slug);
      if (!result) return null;

      const { frontmatter, content } = result;

      if (frontmatter.draft) return null;

      const translations = frontmatter.translations[locale];
      if (!translations) return null;

      const languageContent = extractLanguageContent(content, locale);
      const readingTimeMinutes = calculateReadingTime(languageContent);
      const toc = extractTableOfContents(languageContent);

      const { content: compiledContent } = await compileMDX({
         source: languageContent,
         components: {
            ...mdxComponents,
            Diagram: (props) =>
               createElement(MDXDiagram, {
                  ...props,
                  closeLabel: ui[locale].close,
               }),
            Image: (props) =>
               createElement(MDXImage, {
                  ...props,
                  closeLabel: ui[locale].close,
               }),
            img: (props) =>
               createElement(MDXImage, {
                  ...props,
                  closeLabel: ui[locale].close,
               }),
         },
         options: {
            parseFrontmatter: false,
            mdxOptions: {
               remarkPlugins: [remarkGfm],
               rehypePlugins: [
                  rehypeSlug,
                  [rehypePrettyCode, rehypePrettyCodeOptions],
               ],
            },
         },
      });

      const localizedFrontmatter: LocalizedBlogPostFrontmatter = {
         title: translations.title,
         description: translations.description,
         shareText: translations.shareText,
         tags: translations.tags,
         date: frontmatter.date,
         draft: frontmatter.draft,
         locale,
         coverImage: translations.coverImage ?? frontmatter.coverImage,
         coverImageDark:
            translations.coverImageDark ?? frontmatter.coverImageDark,
         ogImage: translations.ogImage ?? frontmatter.ogImage,
         ogImageDark: translations.ogImageDark ?? frontmatter.ogImageDark,
         series: frontmatter.series,
         linkedin: frontmatter.linkedin,
         resources: translations.resources,
      };

      return {
         slug,
         frontmatter: localizedFrontmatter,
         content: compiledContent,
         readingTimeMinutes,
         toc,
      };
   },
);

export const getPostsByTag = cache(
   async (tag: string): Promise<BlogPostListItem[]> => {
      const allPosts = await getAllPosts();
      return allPosts.filter((post) =>
         post.frontmatter.tags.includes(tag.toLowerCase()),
      );
   },
);

export const getAllTags = cache(
   async (locale?: "es" | "en"): Promise<string[]> => {
      const allPosts = await getAllPosts(locale);
      const tags = new Set<string>();
      allPosts.forEach((post) => {
         post.frontmatter.tags.forEach((t) => {
            tags.add(t);
         });
      });
      return Array.from(tags).sort();
   },
);

export const getRelatedPosts = cache(
   async (
      currentSlug: string,
      locale: "es" | "en" = "es",
      limit = 3,
   ): Promise<BlogPostListItem[]> => {
      const currentPost = await getPostBySlug(currentSlug, locale);
      if (!currentPost) return [];

      const allPosts = await getAllPosts(locale);
      const currentTags = new Set(currentPost.frontmatter.tags);

      const scored = allPosts
         .filter((p) => p.slug !== currentSlug)
         .map((p) => ({
            post: p,
            score: p.frontmatter.tags.filter((t) => currentTags.has(t)).length,
         }))
         .filter((s) => s.score > 0)
         .sort((a, b) => b.score - a.score)
         .slice(0, limit)
         .map((s) => s.post);

      if (scored.length < limit) {
         const remaining = allPosts
            .filter(
               (p) =>
                  p.slug !== currentSlug &&
                  !scored.some((s) => s.slug === p.slug),
            )
            .slice(0, limit - scored.length);
         scored.push(...remaining);
      }

      return scored.slice(0, limit);
   },
);

export const getSeries = cache(
   async (
      locale?: "es" | "en",
   ): Promise<Record<string, BlogPostListItem[]>> => {
      const allPosts = await getAllPosts(locale);
      const series: Record<string, BlogPostListItem[]> = {};

      allPosts.forEach((post) => {
         if (post.frontmatter.series) {
            if (!series[post.frontmatter.series])
               series[post.frontmatter.series] = [];
            series[post.frontmatter.series].push(post);
         }
      });

      Object.values(series).forEach((posts) => {
         posts.sort(
            (a, b) =>
               new Date(a.frontmatter.date).getTime() -
               new Date(b.frontmatter.date).getTime(),
         );
      });

      return series;
   },
);

export const getPostSeriesInfo = cache(
   async (
      slug: string,
      locale: "es" | "en" = "es",
   ): Promise<{
      previous: BlogPostListItem | null;
      next: BlogPostListItem | null;
   } | null> => {
      const post = await getPostBySlug(slug, locale);
      if (!post?.frontmatter.series) return null;

      const seriesPosts = (await getSeries(locale))[post.frontmatter.series];
      const index = seriesPosts.findIndex((p) => p.slug === slug);

      return {
         previous: index > 0 ? seriesPosts[index - 1] : null,
         next: index < seriesPosts.length - 1 ? seriesPosts[index + 1] : null,
      };
   },
);
