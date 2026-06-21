"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useTheme } from "next-themes";
import { type CSSProperties, useEffect, useRef, useState } from "react";
import { FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";
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
import { useMobileMenu } from "@/components/contexts/MobileMenuContext";
import { PROFESSIONAL_LINKS } from "@/config/links";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/types";
import { Button } from "../atoms/Button";
import { GitHubStats } from "../atoms/GitHubStats";
import { Typography } from "../atoms/Typography";

type HeaderProps = {
   dict: Dictionary;
   lang: Locale;
   showBack?: boolean;
   backHref?: string;
};

export const Header = ({
   dict,
   lang,
   showBack = false,
   backHref,
}: HeaderProps) => {
   const { setTheme, resolvedTheme } = useTheme();
   const { isOpen: mobileMenuOpen, setOpen: setMobileMenuOpen } =
      useMobileMenu();
   const [mounted, setMounted] = useState(false);
   const [activeSection, setActiveSection] = useState<string>("");
   const [visible, setVisible] = useState(true);
   const lastScrollY = useRef(0);
   const navLinksRef = useRef<Map<string, HTMLAnchorElement>>(new Map());
   const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });

   const pathname = usePathname();
   const router = useRouter();

   useEffect(() => {
      setTimeout(() => setMounted(true), 0);
   }, []);

   useEffect(() => {
      if (showBack) return;

      const sections = ["experience", "projects", "about"];
      const io = new IntersectionObserver(
         (entries) => {
            for (const entry of entries) {
               if (entry.isIntersecting) {
                  setActiveSection(entry.target.id);
               }
            }
         },
         { rootMargin: "-150px 0px -70% 0px" },
      );

      for (const id of sections) {
         const el = document.getElementById(id);
         if (el) io.observe(el);
      }

      return () => io.disconnect();
   }, [showBack]);

   // Update sliding indicator position when active section changes
   useEffect(() => {
      if (showBack || !activeSection) return;
      const el = navLinksRef.current.get(activeSection);
      if (el) {
         setIndicatorStyle({ left: el.offsetLeft, width: el.offsetWidth });
      }
   }, [activeSection, showBack]);

   useEffect(() => {
      const handleScroll = () => {
         if (mobileMenuOpen) return;
         const currentScrollY = window.scrollY;
         if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
            setVisible(false);
         } else {
            setVisible(true);
         }
         lastScrollY.current = currentScrollY;
      };

      window.addEventListener("scroll", handleScroll, { passive: true });
      return () => window.removeEventListener("scroll", handleScroll);
   }, [mobileMenuOpen]);

   useEffect(() => {
      if (mobileMenuOpen) {
         // Lock scroll on both html and body — required to prevent iOS Safari bounce scroll
         document.documentElement.style.overflow = "hidden";
         document.body.style.overflow = "hidden";
      } else {
         document.documentElement.style.overflow = "";
         document.body.style.overflow = "";
      }
      return () => {
         document.documentElement.style.overflow = "";
         document.body.style.overflow = "";
      };
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
               visible ? "translate-y-0" : "md:-translate-y-full"
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
                        src="/assets/images/profile/isotipo-white-nobg-center.webp"
                        alt="Christian Serrano"
                        fill
                        className="object-contain logo-light"
                        priority
                     />
                     {/* Logo para modo oscuro */}
                     <Image
                        src="/assets/images/profile/isotipo-black-nobg-center.webp"
                        alt="Christian Serrano"
                        fill
                        className="object-contain logo-dark"
                        priority
                     />
                  </Link>

                  {showBack && (
                     <Link href={backHref ?? `/${lang}`}>
                        <Button variant="outline" icon={<MdArrowBack />}>
                           {dict.nav.goBack}
                        </Button>
                     </Link>
                  )}

                  {!showBack && (
                     <>
                        <nav className="hidden md:flex bg-page border border-subtle items-center rounded-2xl p-1 shadow-sm relative">
                           {/* Sliding indicator */}
                           <div
                              className="absolute top-1 bottom-1 rounded-xl bg-surface/50 shadow-inner transition-[transform] duration-300 ease-out motion-reduce:transition-none"
                              style={{
                                 transform: `translateX(${indicatorStyle.left}px)`,
                                 width: indicatorStyle.width,
                              }}
                           />
                           {navLinks.map((link) => (
                              <Link
                                 key={link.id}
                                 ref={(el) => {
                                    if (el)
                                       navLinksRef.current.set(link.id, el);
                                 }}
                                 href={`/${lang}#${link.id}`}
                                 className={`relative z-10 px-4 lg:px-6 py-2.5 transition-all duration-300 rounded-xl hover:text-primary hover:scale-[1.02] active:scale-95 flex items-center ${
                                    activeSection === link.id
                                       ? "text-primary"
                                       : "text-body"
                                 }`}
                              >
                                 <Typography
                                    variant="body"
                                    as="span"
                                    weight="bold"
                                 >
                                    {link.label}
                                 </Typography>
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

               <div className="flex items-center gap-2">
                  <div className="hidden md:flex items-center text-body/60">
                     <GitHubStats
                        githubStars={dict.nav.githubStars}
                        githubRepos={dict.nav.githubRepos}
                     />
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
                        <Typography
                           variant="body"
                           as="span"
                           weight="bold"
                           className="ml-2 uppercase"
                        >
                           {lang === "en" ? "ES" : "EN"}
                        </Typography>
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
            </div>
         </header>

         {/* Mobile Menu Overlay - Botones más compactos */}
         {mobileMenuOpen && (
            <div className="fixed inset-0 z-60 flex flex-col bg-page w-full h-full overflow-hidden">
               <div className="flex justify-between items-center h-16 px-4 xs:px-6 border-b border-subtle bg-page">
                  <div className="flex items-center gap-3 sm:gap-4">
                     <div className="relative h-9 w-9 xs:h-10 xs:w-10 sm:h-12 sm:w-12">
                        <Image
                           src="/assets/images/profile/isotipo-white-nobg-center.webp"
                           alt="Christian Serrano"
                           fill
                           className="object-contain logo-light"
                        />
                        {/* Logo para modo oscuro */}
                        <Image
                           src="/assets/images/profile/isotipo-black-nobg-center.webp"
                           alt="Christian Serrano"
                           fill
                           className="object-contain logo-dark"
                        />
                     </div>
                     <div className="flex flex-col text-left">
                        <Typography variant="body" as="span" weight="bold">
                           Christian Serrano
                        </Typography>
                        <Typography
                           variant="small"
                           as="span"
                           weight="bold"
                           className="text-primary uppercase tracking-widest"
                        >
                           Menu
                        </Typography>
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
                           <Typography variant="body" as="span" weight="bold">
                              {link.label}
                           </Typography>
                           <Typography variant="small" as="span" weight="black">
                              0{idx + 1}
                           </Typography>
                        </Link>
                     ))}
                  </nav>

                  <div className="flex flex-col gap-2 mt-4">
                     <button
                        type="button"
                        onClick={toggleLanguage}
                        className="flex items-center justify-between p-3 sm:p-4 rounded-xl sm:rounded-2xl border border-subtle bg-surface text-body hover:text-primary hover:border-primary/50 transition-all duration-200 cursor-pointer"
                        aria-label={
                           lang === "en" ? "Switch language" : "Cambiar idioma"
                        }
                     >
                        <Typography variant="body" as="span" weight="bold">
                           {dict.nav.language}
                        </Typography>
                        <MdLanguage className="size-4 sm:size-5 opacity-50" />
                     </button>
                     <button
                        type="button"
                        onClick={() =>
                           setTheme(resolvedTheme === "dark" ? "light" : "dark")
                        }
                        className="flex items-center justify-between p-3 sm:p-4 rounded-xl sm:rounded-2xl border border-subtle bg-surface text-body hover:text-primary hover:border-primary/50 transition-all duration-200 cursor-pointer"
                        aria-label={
                           resolvedTheme === "dark"
                              ? dict.nav.themeLight
                              : dict.nav.themeDark
                        }
                     >
                        <Typography variant="body" as="span" weight="bold">
                           {resolvedTheme === "dark"
                              ? dict.nav.themeLight
                              : dict.nav.themeDark}
                        </Typography>
                        {resolvedTheme === "dark" ? (
                           <MdLightMode className="size-4 sm:size-5 opacity-50" />
                        ) : (
                           <MdDarkMode className="size-4 sm:size-5 opacity-50" />
                        )}
                     </button>
                     <div className="flex items-center justify-between px-3 sm:px-4 py-2">
                        <GitHubStats
                           githubStars={dict.nav.githubStars}
                           githubRepos={dict.nav.githubRepos}
                        />
                     </div>
                  </div>

                  <div className="mt-auto py-6 sm:py-8 flex flex-col gap-4 sm:gap-6 items-center border-t border-subtle bg-page">
                     <div className="flex gap-4 sm:gap-6 items-center">
                        <a
                           href={dict.hero.actions.cvLink}
                           download
                           target="_blank"
                           rel="noopener noreferrer"
                           title="CV"
                           aria-label={dict.hero.actions.cv}
                           className="animate-bob motion-reduce:animate-none"
                           style={
                              {
                                 "--i": 0,
                                 animationDelay: "calc(var(--i) * 0.06s)",
                              } as CSSProperties
                           }
                        >
                           <MdDescription className="size-5 sm:size-6 text-body hover:text-primary transition-all duration-300 hover:scale-110 active:scale-90" />
                        </a>
                        <a
                           href={PROFESSIONAL_LINKS.github}
                           target="_blank"
                           rel="noopener noreferrer"
                           title="GitHub"
                           aria-label="GitHub"
                           className="animate-bob motion-reduce:animate-none"
                           style={
                              {
                                 "--i": 1,
                                 animationDelay: "calc(var(--i) * 0.06s)",
                              } as CSSProperties
                           }
                        >
                           <FaGithub className="size-5 sm:size-6 text-body hover:text-primary transition-all duration-300 hover:scale-110 active:scale-90" />
                        </a>
                        <a
                           href={PROFESSIONAL_LINKS.linkedin}
                           target="_blank"
                           rel="noopener noreferrer"
                           title="LinkedIn"
                           aria-label="LinkedIn"
                           className="animate-bob motion-reduce:animate-none"
                           style={
                              {
                                 "--i": 2,
                                 animationDelay: "calc(var(--i) * 0.06s)",
                              } as CSSProperties
                           }
                        >
                           <FaLinkedin className="size-5 sm:size-6 text-body hover:text-primary transition-all duration-300 hover:scale-110 active:scale-90" />
                        </a>
                        <a
                           href={PROFESSIONAL_LINKS.youtube}
                           target="_blank"
                           rel="noopener noreferrer"
                           title="YouTube"
                           aria-label="YouTube"
                           className="animate-bob motion-reduce:animate-none"
                           style={
                              {
                                 "--i": 3,
                                 animationDelay: "calc(var(--i) * 0.06s)",
                              } as CSSProperties
                           }
                        >
                           <FaYoutube className="size-5 sm:size-6 text-body hover:text-primary transition-all duration-300 hover:scale-110 active:scale-90" />
                        </a>
                        <a
                           href={`mailto:${PROFESSIONAL_LINKS.email}`}
                           title="Email"
                           aria-label="Email"
                           className="animate-bob motion-reduce:animate-none"
                           style={
                              {
                                 "--i": 4,
                                 animationDelay: "calc(var(--i) * 0.06s)",
                              } as CSSProperties
                           }
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
