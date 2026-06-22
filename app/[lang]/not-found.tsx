"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { MdHome } from "react-icons/md";
import { Button } from "@/components/atoms/Button";
import { Typography } from "@/components/atoms/Typography";

export default function LangNotFound() {
   const pathname = usePathname();
   const lang = pathname.startsWith("/es") ? "es" : "en";

   const content = {
      es: {
         title: "Página no encontrada",
         description: "Ups! La página que buscas no existe o ha sido movida.",
         goHome: "Volver al inicio",
      },
      en: {
         title: "Page not found",
         description:
            "Oops! The page you're looking for doesn't exist or has been moved.",
         goHome: "Go back home",
      },
   };

   const t = content[lang];

   return (
      <div className="flex flex-col min-h-screen">
         <main className="flex-1 flex items-center justify-center relative">
            {/* Grid spotlight background */}
            <div className="absolute inset-0 bg-grid-spotlight pointer-events-none" />

            <div className="relative z-10 flex flex-col items-center text-center px-6 py-18 max-w-lg">
               {/* 404 number */}
               <Typography
                  variant="hero"
                  as="h1"
                  className="text-[8rem] sm:text-[10rem] md:text-[12rem] leading-none font-black text-primary/20 select-none"
               >
                  404
               </Typography>

               {/* Title */}
               <Typography variant="section" as="h2" className="mt-2">
                  {t.title}
               </Typography>

               {/* Description */}
               <Typography
                  variant="body"
                  as="p"
                  className="mt-4 text-body/70 max-w-sm"
               >
                  {t.description}
               </Typography>

               {/* Go home button */}
               <Link href={`/${lang}`} className="mt-10">
                  <Button variant="primary" icon={<MdHome />}>
                     {t.goHome}
                  </Button>
               </Link>
            </div>
         </main>
      </div>
   );
}
