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
}

export const MDXImage = forwardRef<HTMLImageElement, MDXImageProps>(
   ({ src, alt, width, height, caption, className = "", ...props }, ref) => {
      const isExternal = src.startsWith("http") || src.startsWith("//");

      return (
         <figure className={`my-6 ${className}`}>
            <FullscreenFigure src={src} alt={alt} caption={caption}>
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
                     className="w-full max-w-full h-auto rounded-lg shadow-lg"
                     {...props}
                  />
                  /* eslint-enable @next/next/no-img-element */
               ) : (
                  <div
                     className="relative w-full"
                     style={{
                        aspectRatio:
                           width && height ? `${width}/${height}` : "16/9",
                     }}
                  >
                     <Image
                        src={src}
                        alt={alt}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover rounded-lg shadow-lg"
                        {...props}
                     />
                  </div>
               )}
            </FullscreenFigure>
            {caption && (
               <figcaption className="mt-2 text-center text-sm text-body/60 italic">
                  {caption}
               </figcaption>
            )}
         </figure>
      );
   },
);

MDXImage.displayName = "MDXImage";

export default MDXImage;
