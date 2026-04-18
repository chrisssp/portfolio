import Link from "next/link";
import { Locale } from "@/i18n/config";
import { Dictionary } from "@/i18n/types";
import { MdLanguage, MdDarkMode } from "react-icons/md";

type HeaderProps = {
   dict: Dictionary;
   lang: Locale;
};

export const Header = ({ dict, lang }: HeaderProps) => {
   return (
      <header className="sticky top-0 z-50 w-full bg-page/95 backdrop-blur supports-[backdrop-filter]:bg-page/60 h-[108px] flex items-center justify-center px-20 py-8">
         <div className="flex items-center justify-between w-full max-w-[1280px]">
            {/* Navegación Desktop */}
            <nav className="bg-page border border-subtle flex items-center rounded-2xl w-[370px]">
               <Link
                  href={`/${lang}#experience`}
                  className="flex-1 flex items-center justify-center px-6 py-3 font-bold text-[16px] text-body hover:text-primary transition-colors"
               >
                  {dict.nav.experience}
               </Link>
               <Link
                  href={`/${lang}#projects`}
                  className="flex-1 flex items-center justify-center px-6 py-3 font-bold text-[16px] text-body hover:text-primary transition-colors"
               >
                  {dict.nav.projects}
               </Link>
               <Link
                  href={`/${lang}#about`}
                  className="flex-1 flex items-center justify-center px-6 py-3 font-bold text-[16px] text-body hover:text-primary transition-colors"
               >
                  {dict.nav.about}
               </Link>
            </nav>

            {/* Acciones */}
            <div className="bg-page border border-subtle flex items-center rounded-2xl w-[136px]">
               <button className="flex-1 flex items-center justify-center px-6 py-3 hover:text-primary transition-colors">
                  <MdLanguage className="size-5" />
               </button>
               <button className="flex-1 flex items-center justify-center px-6 py-3 hover:text-primary transition-colors">
                  <MdDarkMode className="size-5" />
               </button>
            </div>
         </div>
      </header>
   );
};
