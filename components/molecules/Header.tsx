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
   const { theme, setTheme, resolvedTheme } = useTheme();
   const [mounted, setMounted] = useState(false);
   const [activeSection, setActiveSection] = useState<string>("");
   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
   const [visible, setVisible] = useState(true);
   const lastScrollY = useRef(0);

   const pathname = usePathname();
   const router = useRouter();

   useEffect(() => {
      setMounted(true);

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

   if (!mounted) return <div className="h-[64px] md:h-[84px]" />;

   const navLinks = [
      { id: "experience", label: dict.nav.experience },
      { id: "projects", label: dict.nav.projects },
      { id: "about", label: dict.nav.about },
   ];

   return (
      <>
         <header
            className={`sticky top-0 z-[60] w-full bg-page/80 backdrop-blur-md h-[64px] md:h-[84px] flex items-center justify-center border-b border-subtle/50 md:border-none transition-transform duration-300 ${
               visible ? "translate-y-0" : "-translate-y-full md:translate-y-0"
            }`}
         >
            <div className="flex items-center justify-between w-full max-w-[1440px] px-4 xs:px-6 md:px-20">
               <div className="flex items-center gap-4 xs:gap-6">
                  <Link
                     href={`/${lang}`}
                     className="relative h-8 xs:h-10 w-8 xs:h-10 hover:scale-110 active:scale-95 transition-all duration-300 shrink-0"
                  >
                     {/* Logo para modo claro */}
                     <Image
                        src="/assets/images/profile/isotipo-white-nobg.png"
                        alt="Logo"
                        fill
                        className="object-contain logo-light"
                        priority
                     />
                     {/* Logo para modo oscuro */}
                     <Image
                        src="/assets/images/profile/isotipo-black-nobg.png"
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
                           className="!px-3 xs:!px-4 !py-1.5 xs:!py-2 !text-[13px] xs:!text-[14px]"
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
                                 className={`px-6 py-2.5 font-bold text-[16px] transition-all rounded-xl hover:bg-surface ${
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
                           onClick={() => setMobileMenuOpen(true)}
                           className="md:hidden flex items-center justify-center p-2 xs:p-2.5 bg-page border border-subtle rounded-xl text-body shadow-sm hover:bg-surface active:scale-95 transition-all"
                           aria-label="Open menu"
                        >
                           <MdMenu className="size-5 xs:size-6" />
                        </button>
                     </>
                  )}
               </div>

               <div className="bg-page border border-subtle flex items-center rounded-lg xs:rounded-xl p-0.5 xs:p-1 shadow-sm">
                  <button
                     onClick={toggleLanguage}
                     className="flex items-center justify-center px-2 xs:px-4 py-1.5 xs:py-2 text-body hover:text-primary transition-colors rounded-md xs:rounded-lg"
                     aria-label={lang === "en" ? "Cambiar a español" : "Switch to English"}
                  >
                     <MdLanguage className="size-4 xs:size-5" />
                     <span className="ml-1.5 xs:ml-2 text-[12px] xs:text-[14px] font-bold uppercase">
                        {lang}
                     </span>
                  </button>
                  <div className="w-[1px] h-4 xs:h-6 bg-subtle mx-0.5 xs:mx-1" />
                  <button
                     onClick={() =>
                        setTheme(resolvedTheme === "dark" ? "light" : "dark")
                     }
                     className="flex items-center justify-center px-2 xs:px-4 py-1.5 xs:py-2 text-body hover:text-primary transition-colors rounded-md xs:rounded-lg"
                     aria-label={resolvedTheme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
                  >
                     {resolvedTheme === "dark" ? (
                        <MdLightMode className="size-4 xs:size-5" />
                     ) : (
                        <MdDarkMode className="size-4 xs:size-5" />
                     )}
                  </button>
               </div>
            </div>
         </header>

         {/* Mobile Menu Overlay - Botones más compactos */}
         {mobileMenuOpen && (
            <div className="fixed inset-0 z-[999] flex flex-col bg-page w-full h-full">
               <div className="flex justify-between items-center p-5 xs:p-6 border-b border-subtle bg-page">
                  <div className="flex items-center gap-4">
                     <div className="relative h-10 w-10">
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
                        <span className="text-[18px] xs:text-[20px] font-bold text-body">
                           Christian Serrano
                        </span>
                        <span className="text-[10px] xs:text-[11px] text-primary font-bold uppercase tracking-widest">
                           Menu
                        </span>
                     </div>
                  </div>
                  <button
                     onClick={() => setMobileMenuOpen(false)}
                     className="p-2.5 bg-surface rounded-xl border border-subtle text-body active:scale-95 transition-all"
                     aria-label={lang === "en" ? "Close menu" : "Cerrar menú"}
                  >
                     <MdClose className="size-6" />
                  </button>
               </div>

               <div className="flex-1 flex flex-col p-5 xs:p-6 gap-3 overflow-y-auto bg-page">
                  <nav className="flex flex-col gap-3 mt-2">
                     {navLinks.map((link, idx) => (
                        <Link
                           key={link.id}
                           href={`/${lang}#${link.id}`}
                           onClick={() => setMobileMenuOpen(false)}
                           className={`flex items-center justify-between p-4 xs:p-5 rounded-[16px] xs:rounded-[20px] border transition-all duration-200 ${
                              activeSection === link.id
                                 ? "bg-primary text-primary-contrast border-primary shadow-md"
                                 : "bg-surface border-subtle text-body"
                           }`}
                        >
                           <span className="text-[18px] xs:text-[22px] font-bold">
                              {link.label}
                           </span>
                           <span
                              className={`text-[12px] xs:text-[14px] font-black opacity-30`}
                           >
                              0{idx + 1}
                           </span>
                        </Link>
                     ))}
                  </nav>

                  <div className="mt-auto py-8 flex flex-col gap-6 items-center border-t border-subtle bg-page">
                     <div className="flex gap-8 items-center">
                        <a
                           href={dict.hero.actions.cvLink}
                           download
                           target="_blank"
                           rel="noopener noreferrer"
                           title="CV"
                           aria-label={dict.hero.actions.cv}
                        >
                           <MdDescription className="size-6 text-body hover:text-primary transition-colors" />
                        </a>
                        <a
                           href={PROFESSIONAL_LINKS.github}
                           target="_blank"
                           rel="noopener noreferrer"
                           title="GitHub"
                           aria-label="GitHub"
                        >
                           <FaGithub className="size-6 text-body hover:text-primary transition-colors" />
                        </a>
                        <a
                           href={PROFESSIONAL_LINKS.linkedin}
                           target="_blank"
                           rel="noopener noreferrer"
                           title="LinkedIn"
                           aria-label="LinkedIn"
                        >
                           <FaLinkedin className="size-6 text-body hover:text-primary transition-colors" />
                        </a>
                        <a
                           href={`mailto:${PROFESSIONAL_LINKS.email}`}
                           title="Email"
                           aria-label="Email"
                        >
                           <MdEmail className="size-6 text-body hover:text-primary transition-colors" />
                        </a>
                     </div>
                     <Typography
                        variant="small"
                        className="text-slate-500 font-medium !text-[12px]"
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
