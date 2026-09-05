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
   /** Force 1:1 aspect ratio */
   square?: boolean;
   /** Horizontal alignment: center (default) or left */
   align?: "center" | "left";
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
         align = "center",
         ...props
      },
      ref,
   ) => {
      const isExternal = src.startsWith("http") || src.startsWith("//");
      const isLeft = align === "left";

      const alignmentClass = isLeft ? "mr-auto" : "mx-auto";
      const sizingClass = square
         ? `max-w-md ${alignmentClass}`
         : `w-full ${alignmentClass}`;

      return (
         <figure className={`my-6 ${className}`}>
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
               <figcaption
                  className={`mt-2 text-sm text-body/60 italic ${
                     isLeft ? "text-left" : "text-center"
                  }`}
               >
                  {caption}
               </figcaption>
            )}
         </figure>
      );
   },
);

MDXImage.displayName = "MDXImage";

export default MDXImage;
