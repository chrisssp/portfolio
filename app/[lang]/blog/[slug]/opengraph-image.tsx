import { ImageResponse } from "next/og";
import { SITE_URL } from "@/config/site";
import { getPostBySlug } from "@/lib/blog";

export const runtime = "nodejs";
export const size = { width: 1200, height: 630 };

interface OpenGraphImageProps {
   params: {
      lang: string;
      slug: string;
   };
}

export default async function OpenGraphImage({ params }: OpenGraphImageProps) {
   const { lang, slug } = params;
   const locale = lang as "en" | "es";

   const post = await getPostBySlug(slug, locale);

   if (!post) {
      throw new Error(`Post not found: ${slug}`);
   }

   const title = post.frontmatter.title;
   const date = new Date(post.frontmatter.date).toLocaleDateString(locale, {
      year: "numeric",
      month: "long",
      day: "numeric",
   });
   const tagsString = Array.isArray(post.frontmatter.tags)
      ? post.frontmatter.tags.join(", ")
      : post.frontmatter.tags;

   return new ImageResponse(
      <div
         tw="flex flex-col justify-between w-full h-full p-12 bg-[#1a1a1a] text-white"
         style={{ fontFamily: "Space Grotesk, sans-serif" }}
      >
         <div tw="flex flex-col gap-8">
            <h1 tw="text-[56px] font-bold mb-5 leading-tight">{title}</h1>
            <p tw="text-2xl text-[#9ca3af] mb-10">
               {post.frontmatter.description || `${title} - ${date}`}
            </p>
            {tagsString && (
               <div tw="flex flex-wrap gap-3 mb-10">
                  {tagsString.split(",").map((tag) => (
                     <span
                        key={tag}
                        tw="bg-[#2d2d2d] px-4 py-2 rounded-[20px] text-[18px]"
                     >
                        {tag.trim()}
                     </span>
                  ))}
               </div>
            )}
         </div>
         <div tw="flex justify-between items-center border-t border-[#333] pt-10">
            <div tw="text-2xl font-semibold">Christian Serrano</div>
            <div tw="text-xl text-[#9ca3af]">{SITE_URL}</div>
         </div>
      </div>,
      { width: 1200, height: 630 },
   );
}
