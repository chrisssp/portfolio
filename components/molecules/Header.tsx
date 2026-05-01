"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useTheme } from "next-themes";
import { useEffect, useRef, useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import {
   MdArrowBack,
   MdClose,
   MdDarkMode,
   MdDescription,
   MdEmail,
   MdLanguage,
   MdLightMode,
   MdMenu,
} from "react-icons/md";
import { PROFESSIONAL_LINKS } from "@/config/links";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/types";
import { Button } from "../atoms/Button";
import { Typography } from "../atoms/Typography";

type HeaderProps = {
   dict: Dictionary;
   lang: Locale;
   showBack?: boolean;
};

export const Header = ({ dict, lang, showBack = false }: HeaderProps) => {
   const { setTheme, resolvedTheme } = useTheme();
   const [mounted, setMounted] = useState(false);
   const [activeSection, setActiveSection] = useState<string>("");
   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
   const [visible, setVisible] = useState(true);
   const lastScrollY = useRef(0);

   const pathname = usePathname();
   const router = useRouter();

   useEffect(() => {
      setTimeout(() => setMounted(true), 0);
   }, []);

   useEffect(() => {
      const handleScroll = () => {
         const currentScrollY = window.scrollY;

         if (!showBack) {
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
         }

         if (!mobileMenuOpen) {
            if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
               setVisible(false);
            } else {
               setVisible(true);
            }
         }

         lastScrollY.current = currentScrollY;
      };

      window.addEventListener("scroll", handleScroll, { passive: true });
      return () => window.removeEventListener("scroll", handleScroll);
   }, [showBack, mobileMenuOpen]);

   useEffect(() => {
      if (mobileMenuOpen) {
         document.body.style.overflow = "hidden";
      } else {
         document.body.style.overflow = "unset";
      }
   }, [mobileMenuOpen]);

   const toggleLanguage = () => {
      const newLang = lang === "en" ? "es" : "en";
      const newPath = pathname.replace(`/${lang}`, `/${newLang}`);
      router.push(newPath);
   };

   if (!mounted) return <div className="h-16 md:h-21" />;

   const navLinks = [
      { id: "experience", label: dict.nav.experience },
      { id: "projects", label: dict.nav.projects },
      { id: "about", label: dict.nav.about },
   ];

   return (
      <>
         <header
            className={`sticky top-0 z-60 w-full bg-page/80 backdrop-blur-md h-16 md:h-21 flex items-center justify-center border-b border-subtle/50 md:border-none transition-transform duration-300 ${
               visible ? "translate-y-0" : "-translate-y-full md:translate-y-0"
            }`}
         >
            <div className="flex items-center justify-between w-full max-w-360 px-4 xs:px-6 md:px-20">
               <div className="flex items-center gap-4 xs:gap-6">
                  <Link
                     href={`/${lang}`}
                     className="relative h-9 w-9 xs:h-10 xs:w-10 sm:h-12 sm:w-12 hover:scale-110 active:scale-95 transition-all duration-300 shrink-0"
                  >
                     {/* Logo para modo claro */}
                     <Image
                        src="/assets/images/profile/isotipo-white-nobg-center.png"
                        alt="Logo"
                        fill
                        className="object-contain logo-light"
                        priority
                     />
                     {/* Logo para modo oscuro */}
                     <Image
                        src="/assets/images/profile/isotipo-black-nobg-center.png"
                        alt="Logo"
                        fill
                        className="object-contain logo-dark"
                        priority
                     />
                  </Link>

                  {showBack && (
                     <Link href={`/${lang}`}>
                        <Button
                           variant="outline"
                           icon={<MdArrowBack />}
                        >
                           {dict.nav.goBack}
                        </Button>
                     </Link>
                  )}

                  {!showBack && (
                     <>
                        <nav className="hidden md:flex bg-page border border-subtle items-center rounded-2xl p-1 shadow-sm">
                           {navLinks.map((link) => (
                              <Link
                                 key={link.id}
                                 href={`/${lang}#${link.id}`}
                                 className={`px-4 lg:px-6 py-2.5 font-bold text-base leading-none transition-all duration-300 rounded-xl hover:bg-surface hover:text-primary hover:scale-[1.02] active:scale-95 flex items-center ${
                                    activeSection === link.id
                                       ? "text-primary bg-surface/50 shadow-inner"
                                       : "text-body"
                                 }`}
                              >
                                 {link.label}
                              </Link>
                           ))}
                        </nav>

                        <button
                           type="button"
                           onClick={() => setMobileMenuOpen(true)}
                           className="md:hidden flex items-center justify-center p-2 sm:p-3 bg-page border border-subtle rounded-xl text-body shadow-sm hover:bg-surface active:scale-95 transition-all cursor-pointer"
                           aria-label="Open menu"
                        >
                           <MdMenu className="size-4 sm:size-5" />
                        </button>
                     </>
                  )}
               </div>

               <div className="bg-page border border-subtle flex items-center rounded-xl sm:rounded-2xl p-1 shadow-sm">
                  <button
                     type="button"
                     onClick={toggleLanguage}
                     className="flex items-center justify-center px-3 sm:px-4 py-1 sm:py-2 text-body hover:text-primary hover:bg-surface transition-all duration-300 rounded-lg sm:rounded-xl leading-none cursor-pointer hover:scale-[1.02] active:scale-95"
                     aria-label={
                        lang === "en" ? "Switch language" : "Cambiar idioma"
                     }
                  >
                     <MdLanguage className="size-4 sm:size-5 shrink-0" />
                     <span className="ml-2 text-sm sm:text-base font-bold uppercase leading-none">
                        {lang}
                     </span>
                  </button>
                  <div className="w-px h-4 sm:h-6 bg-subtle mx-1" />
                  <button
                     type="button"
                     onClick={() =>
                        setTheme(resolvedTheme === "dark" ? "light" : "dark")
                     }
                     className="flex items-center justify-center px-3 sm:px-4 py-1 sm:py-2 text-body hover:text-primary hover:bg-surface transition-all duration-300 rounded-lg sm:rounded-xl leading-none cursor-pointer hover:scale-[1.02] active:scale-95"
                     aria-label={
                        resolvedTheme === "dark" ? "Light mode" : "Dark mode"
                     }
                  >
                     {resolvedTheme === "dark" ? (
                        <MdLightMode className="size-4 sm:size-5 shrink-0" />
                     ) : (
                        <MdDarkMode className="size-4 sm:size-5 shrink-0" />
                     )}
                  </button>
               </div>
            </div>
         </header>

         {/* Mobile Menu Overlay - Botones más compactos */}
         {mobileMenuOpen && (
            <div className="fixed inset-0 z-60 flex flex-col bg-page w-full h-dvh max-h-dvh overflow-hidden">
               <div className="flex justify-between items-center p-4 sm:p-5 border-b border-subtle bg-page">
                  <div className="flex items-center gap-3 sm:gap-4">
                     <div className="relative h-9 w-9 xs:h-10 xs:w-10 sm:h-12 sm:w-12">
                        <Image
                           src="/assets/images/profile/isotipo-white-nobg.png"
                           alt="Logo"
                           fill
                           className="object-contain logo-light"
                        />
                        <Image
                           src="/assets/images/profile/isotipo-black-nobg.png"
                           alt="Logo"
                           fill
                           className="object-contain logo-dark"
                        />
                     </div>
                     <div className="flex flex-col text-left">
                        <span className="text-base sm:text-lg font-bold text-body">
                           Christian Serrano
                        </span>
                        <span className="text-xs text-primary font-bold uppercase tracking-widest">
                           Menu
                        </span>
                     </div>
                  </div>
                  <button
                     type="button"
                     onClick={() => setMobileMenuOpen(false)}
                     className="p-1.5 sm:p-2 bg-surface rounded-lg sm:rounded-xl border border-subtle text-body active:scale-95 transition-all cursor-pointer"
                     aria-label={lang === "en" ? "Close menu" : "Cerrar menú"}
                  >
                     <MdClose className="size-5" />
                  </button>
               </div>

               <div className="flex-1 flex flex-col p-4 sm:p-5 gap-2 overflow-y-auto bg-page">
                  <nav className="flex flex-col gap-2 mt-2">
                     {navLinks.map((link, idx) => (
                        <Link
                           key={link.id}
                           href={`/${lang}#${link.id}`}
                           onClick={() => setMobileMenuOpen(false)}
                           className={`flex items-center justify-between p-3 sm:p-4 rounded-xl sm:rounded-2xl border transition-all duration-200 ${
                              activeSection === link.id
                                 ? "bg-primary text-primary-contrast border-primary shadow-md"
                                 : "bg-surface border-subtle text-body hover:text-primary hover:border-primary/50"
                           }`}
                        >
                           <span className="text-base sm:text-lg font-bold">
                              {link.label}
                           </span>
                           <span
                              className={`text-xs sm:text-sm font-black opacity-50`}
                           >
                              0{idx + 1}
                           </span>
                        </Link>
                     ))}
                  </nav>

                  <div className="mt-auto py-6 sm:py-8 flex flex-col gap-4 sm:gap-6 items-center border-t border-subtle bg-page">
                     <div className="flex gap-4 sm:gap-6 items-center">
                        <a
                           href={dict.hero.actions.cvLink}
                           download
                           target="_blank"
                           rel="noopener noreferrer"
                           title="CV"
                           aria-label={dict.hero.actions.cv}
                        >
                           <MdDescription className="size-5 sm:size-6 text-body hover:text-primary transition-all duration-300 hover:scale-110 active:scale-90" />
                        </a>
                        <a
                           href={PROFESSIONAL_LINKS.github}
                           target="_blank"
                           rel="noopener noreferrer"
                           title="GitHub"
                           aria-label="GitHub"
                        >
                           <FaGithub className="size-5 sm:size-6 text-body hover:text-primary transition-all duration-300 hover:scale-110 active:scale-90" />
                        </a>
                        <a
                           href={PROFESSIONAL_LINKS.linkedin}
                           target="_blank"
                           rel="noopener noreferrer"
                           title="LinkedIn"
                           aria-label="LinkedIn"
                        >
                           <FaLinkedin className="size-5 sm:size-6 text-body hover:text-primary transition-all duration-300 hover:scale-110 active:scale-90" />
                        </a>
                        <a
                           href={`mailto:${PROFESSIONAL_LINKS.email}`}
                           title="Email"
                           aria-label="Email"
                        >
                           <MdEmail className="size-5 sm:size-6 text-body hover:text-primary transition-all duration-300 hover:scale-110 active:scale-90" />
                        </a>
                     </div>
                     <Typography
                        variant="small"
                        className="text-slate-600 dark:text-slate-400 font-medium text-xs!"
                     >
                        {dict.footer.rights}
                     </Typography>
                  </div>
               </div>
            </div>
         )}
      </>
   );
};
