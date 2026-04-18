"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Locale } from "@/i18n/config";
import { Dictionary } from "@/i18n/types";
import { MdLanguage, MdDarkMode, MdLightMode, MdArrowBack } from "react-icons/md";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Button } from "../atoms/Button";

type HeaderProps = {
   dict: Dictionary;
   lang: Locale;
   showBack?: boolean;
};

export const Header = ({ dict, lang, showBack = false }: HeaderProps) => {
   const { theme, setTheme, resolvedTheme } = useTheme();
   const [mounted, setMounted] = useState(false);
   const [activeSection, setActiveSection] = useState<string>("");
   const pathname = usePathname();
   const router = useRouter();

   useEffect(() => {
      setMounted(true);

      if (!showBack) {
         const handleScroll = () => {
            const sections = ["experience", "projects", "about"];
            const current = sections.find((section) => {
               const element = document.getElementById(section);
               if (element) {
                  const rect = element.getBoundingClientRect();
                  return rect.top <= 150 && rect.bottom >= 150;
               }
               return false;
            });
            setActiveSection(current || "");
         };

         window.addEventListener("scroll", handleScroll);
         return () => window.removeEventListener("scroll", handleScroll);
      }
   }, [showBack]);

   const toggleLanguage = () => {
      const newLang = lang === "en" ? "es" : "en";
      const newPath = pathname.replace(`/${lang}`, `/${newLang}`);
      router.push(newPath);
   };

   if (!mounted) return <div className="h-[108px]" />;

   const navLinks = [
      { id: "experience", label: dict.nav.experience },
      { id: "projects", label: dict.nav.projects },
      { id: "about", label: dict.nav.about },
   ];

   return (
      <header className="sticky top-0 z-50 w-full bg-page/80 backdrop-blur-md h-[108px] flex items-center justify-center">
         <div className="flex items-center justify-between w-full max-w-[1440px] px-20">
            
            {showBack ? (
               <Link href={`/${lang}`}>
                  <Button variant="outline" icon={<MdArrowBack />}>
                     {dict.nav.goBack}
                  </Button>
               </Link>
            ) : (
               <nav className="bg-page border border-subtle flex items-center rounded-2xl p-1 shadow-sm">
                  {navLinks.map((link) => (
                     <Link
                        key={link.id}
                        href={`/${lang}#${link.id}`}
                        className={`px-6 py-2.5 font-bold text-[16px] transition-all rounded-xl hover:bg-surface ${
                           activeSection === link.id ? "text-primary bg-surface/50 shadow-inner" : "text-body"
                        }`}
                     >
                        {link.label}
                     </Link>
                  ))}
               </nav>
            )}

            {/* Acciones (Compartido para Home y Detalle) */}
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
                  onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
                  className="flex items-center justify-center px-5 py-2.5 text-body hover:text-primary transition-colors rounded-xl hover:bg-surface"
               >
                  {resolvedTheme === "dark" ? <MdLightMode className="size-5" /> : <MdDarkMode className="size-5" />}
               </button>
            </div>
         </div>
      </header>
   );
};
