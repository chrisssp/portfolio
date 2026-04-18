"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Locale } from "@/i18n/config";
import { Dictionary } from "@/i18n/types";
import { MdLanguage, MdDarkMode, MdLightMode } from "react-icons/md";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

type HeaderProps = {
   dict: Dictionary;
   lang: Locale;
};

export const Header = ({ dict, lang }: HeaderProps) => {
   const { theme, setTheme } = useTheme();
   const [mounted, setMounted] = useState(false);
   const pathname = usePathname();
   const router = useRouter();

   useEffect(() => setMounted(true), []);

   const toggleLanguage = () => {
      const newLang = lang === "en" ? "es" : "en";
      const newPath = pathname.replace(`/${lang}`, `/${newLang}`);
      router.push(newPath);
   };

   if (!mounted) return null;

   return (
      <header className="sticky top-0 z-50 w-full bg-page/80 backdrop-blur-md h-[108px] flex items-center justify-center px-20">
         <div className="flex items-center justify-between w-full max-w-[1280px]">
            {/* Navegación Desktop */}
            <nav className="bg-page border border-subtle flex items-center rounded-2xl p-1 shadow-sm">
               <Link
                  href={`/${lang}#experience`}
                  className="px-6 py-2.5 font-bold text-[16px] text-body hover:text-primary transition-colors rounded-xl hover:bg-surface"
               >
                  {dict.nav.experience}
               </Link>
               <Link
                  href={`/${lang}#projects`}
                  className="px-6 py-2.5 font-bold text-[16px] text-body hover:text-primary transition-colors rounded-xl hover:bg-surface"
               >
                  {dict.nav.projects}
               </Link>
               <Link
                  href={`/${lang}#about`}
                  className="px-6 py-2.5 font-bold text-[16px] text-body hover:text-primary transition-colors rounded-xl hover:bg-surface"
               >
                  {dict.nav.about}
               </Link>
            </nav>

            {/* Acciones */}
            <div className="bg-page border border-subtle flex items-center rounded-2xl p-1 shadow-sm">
               <button 
                  onClick={toggleLanguage}
                  className="flex items-center justify-center px-5 py-2.5 text-body hover:text-primary transition-colors rounded-xl hover:bg-surface group"
                  title={lang === "en" ? "Cambiar a Español" : "Switch to English"}
               >
                  <MdLanguage className="size-5" />
                  <span className="ml-2 text-[14px] font-bold uppercase">{lang}</span>
               </button>
               <div className="w-[1px] h-6 bg-subtle mx-1" />
               <button 
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  className="flex items-center justify-center px-5 py-2.5 text-body hover:text-primary transition-colors rounded-xl hover:bg-surface"
               >
                  {theme === "dark" ? <MdLightMode className="size-5" /> : <MdDarkMode className="size-5" />}
               </button>
            </div>
         </div>
      </header>
   );
};
