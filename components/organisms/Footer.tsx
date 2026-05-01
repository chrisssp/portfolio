import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdDescription, MdEmail } from "react-icons/md";
import { PROFESSIONAL_LINKS } from "@/config/links";
import type { Dictionary } from "@/i18n/types";
import { Typography } from "../atoms/Typography";

interface FooterProps {
   dict: Dictionary;
}

export const Footer = ({ dict }: FooterProps) => {
   return (
      <footer className="bg-transparent flex justify-center w-full border-t border-subtle relative z-10">
         <div className="flex flex-col sm:flex-row items-center justify-between gap-6 xs:gap-8 px-4 xs:px-6 sm:px-10 md:px-16 lg:px-20 py-8 xs:py-10 md:py-12 w-full max-w-360">
            <Typography
               variant="small"
               className="text-slate-600 dark:text-slate-400 font-medium text-center sm:text-left text-xs! xs:text-sm!"
            >
               {dict.footer.rights}
            </Typography>
            <div className="flex gap-6 items-center">
               <a
                  href={dict.hero.actions.cvLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="CV"
                  aria-label={dict.hero.actions.cv}
               >
                  <MdDescription className="size-5 text-body cursor-pointer hover:text-primary transition-all duration-300 hover:scale-110 active:scale-90" />
               </a>
               <a
                  href={PROFESSIONAL_LINKS.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="GitHub"
                  aria-label="GitHub"
               >
                  <FaGithub className="size-5 text-body cursor-pointer hover:text-primary transition-all duration-300 hover:scale-110 active:scale-90" />
               </a>
               <a
                  href={PROFESSIONAL_LINKS.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="LinkedIn"
                  aria-label="LinkedIn"
               >
                  <FaLinkedin className="size-5 text-body cursor-pointer hover:text-primary transition-all duration-300 hover:scale-110 active:scale-90" />
               </a>
               <a
                  href={`mailto:${PROFESSIONAL_LINKS.email}`}
                  title="Email"
                  aria-label="Email"
               >
                  <MdEmail className="size-5 text-body cursor-pointer hover:text-primary transition-all duration-300 hover:scale-110 active:scale-90" />
               </a>
            </div>
         </div>
      </footer>
   );
};
