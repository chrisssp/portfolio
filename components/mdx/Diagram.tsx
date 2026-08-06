"use client";

import Image from "next/image";
import { useTheme } from "next-themes";
import { useSyncExternalStore } from "react";
import Caption from "./Caption";

export interface MDXDiagramProps {
   lightSrc: string;
   darkSrc: string;
   alt: string;
   width?: number;
   height?: number;
   caption?: string;
}

const emptySubscribe = () => () => {};

export function MDXDiagram({
   lightSrc,
   darkSrc,
   alt,
   width,
   height,
   caption,
}: MDXDiagramProps) {
   const { resolvedTheme } = useTheme();
   const mounted = useSyncExternalStore(
      emptySubscribe,
      () => true,
      () => false,
   );

   const isDark = mounted && resolvedTheme === "dark";
   const src = isDark ? darkSrc : lightSrc;

   return (
      <figure className="my-10 sm:my-16">
         <Image
            src={src}
            alt={alt}
            width={width ?? 2560}
            height={height ?? 880}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="w-full h-auto"
         />
         {caption && <Caption className="mt-6">{caption}</Caption>}
      </figure>
   );
}

export default MDXDiagram;
