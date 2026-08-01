import type React from "react";
import { z } from "zod";

export interface ResourceItem {
   title: string;
   href: string;
   description?: string;
}

const TranslationSchema = z.object({
   title: z.string().min(1),
   description: z.string().min(1),
   tags: z.array(z.string().toLowerCase()).min(1),
   resources: z
      .array(
         z.object({
            title: z.string().min(1),
            href: z.string().min(1),
            description: z.string().optional(),
         }),
      )
      .optional(),
});

export const BlogPostFrontmatterSchema = z.object({
   slug: z.string().min(1),
   date: z.string().datetime({ offset: true }),
   draft: z.boolean().default(false),
   translations: z.object({
      es: TranslationSchema,
      en: TranslationSchema,
   }),
   coverImage: z.string().url().or(z.string().startsWith("/")).optional(),
   series: z.string().optional(),
   linkedin: z.string().url().optional(),
   readingTimeMinutes: z.number().optional(),
});

export type BlogPostFrontmatter = z.infer<typeof BlogPostFrontmatterSchema>;

export interface LocalizedBlogPostFrontmatter {
   title: string;
   description: string;
   tags: string[];
   date: string;
   draft: boolean;
   locale: "es" | "en";
   coverImage?: string;
   series?: string;
   linkedin?: string;
   resources?: ResourceItem[];
}

export interface TableOfContentsItem {
   level: 2 | 3;
   text: string;
   id: string;
   children?: TableOfContentsItem[];
}

export interface BlogPostListItem {
   slug: string;
   frontmatter: LocalizedBlogPostFrontmatter;
   readingTimeMinutes: number;
}

export interface BlogPost extends BlogPostListItem {
   content: React.ReactNode;
   toc: TableOfContentsItem[];
}

export interface BlogSeries {
   name: string;
   posts: BlogPostListItem[];
}
