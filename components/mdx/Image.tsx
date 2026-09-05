import Image from "next/image";
import type { ImgHTMLAttributes } from "react";
import { forwardRef } from "react";
import FullscreenFigure from "./FullscreenFigure";

export interface MDXImageProps
   extends Omit<ImgHTMLAttributes<HTMLImageElement>, "src"> {
   src: string;
   alt: string;
   width?: number;
   height?: number;
   caption?: string;
   closeLabel?: string;
   /** Force 1:1 aspect ratio and enable float alignment */
   square?: boolean;
   /** Float direction for square images (text wraps around on md+) */
   align?: "float-right" | "float-left";
   /** Show only on mobile (< md). Pair with a float image above for desktop: mobile image appears after text in correct reading order. */
   mobileOnly?: boolean;
}

export const MDXImage = forwardRef<HTMLImageElement, MDXImageProps>(
   (
      {
         src,
         alt,
         width,
         height,
         caption,
         className = "",
         closeLabel,
         square,
         align = "float-right",
         mobileOnly = false,
         ...props
      },
      ref,
   ) => {
      const isExternal = src.startsWith("http") || src.startsWith("//");
      const isFloat = !!square && !mobileOnly;
      const isFloatRight = align === "float-right";

      const sizingClass = "w-full";

      const figureClass = mobileOnly
         ? `my-6 mx-auto md:hidden ${className}`
         : isFloat
           ? isFloatRight
              ? `hidden md:block my-6 md:mx-0 md:max-w-xs md:float-right md:ml-6 md:mb-4 ${className}`
              : `hidden md:block my-6 md:mx-0 md:max-w-xs md:float-left md:mr-6 md:mb-4 ${className}`
           : `my-6 ${className}`;

      const captionClass = isFloat
         ? `mt-2 text-sm text-body/60 italic ${isFloatRight ? "text-right" : "text-left"}`
         : "mt-2 text-sm text-body/60 italic text-center";

      return (
         <figure className={figureClass}>
            <FullscreenFigure
               src={src}
               alt={alt}
               caption={caption}
               closeLabel={closeLabel}
               className={sizingClass}
            >
               {isExternal ? (
                  /* eslint-disable @next/next/no-img-element -- external hosts are not in images.remotePatterns and dimensions are unknown */
                  // biome-ignore lint/performance/noImgElement: external images cannot be optimized by next/image
                  <img
                     ref={ref}
                     src={src}
                     alt={alt}
                     width={width}
                     height={height}
                     loading="lazy"
                     className="w-full h-auto rounded-lg shadow-lg"
                     {...props}
                  />
                  /* eslint-enable @next/next/no-img-element */
               ) : (
                  <Image
                     src={src}
                     alt={alt}
                     width={square ? 1 : (width ?? 800)}
                     height={square ? 1 : (height ?? 450)}
                     sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                     className="w-full h-auto rounded-lg shadow-lg"
                     {...props}
                  />
               )}
            </FullscreenFigure>
            {caption && (
               <figcaption className={captionClass}>{caption}</figcaption>
            )}
         </figure>
      );
   },
);

MDXImage.displayName = "MDXImage";

export default MDXImage;
