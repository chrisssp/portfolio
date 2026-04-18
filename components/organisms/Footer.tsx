import { Dictionary } from "@/i18n/types";
import { Typography } from "../atoms/Typography";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail, MdDescription } from "react-icons/md";
import { PROFESSIONAL_LINKS } from "@/config/links";

interface FooterProps {
   dict: Dictionary;
}

export const Footer = ({ dict }: FooterProps) => {
   return (
      <footer className="bg-transparent flex justify-center w-full border-t border-subtle relative z-10">
         <div className="flex flex-col sm:flex-row items-center justify-between gap-6 xs:gap-8 px-4 xs:px-6 sm:px-10 md:px-16 lg:px-20 py-8 xs:py-10 md:py-[48px] w-full max-w-[1440px]">
            <Typography variant="small" className="text-slate-500 font-medium text-center sm:text-left !text-[12px] xs:!text-[14px]">
               {dict.footer.rights}
            </Typography>
            <div className="flex gap-6 items-center">
               <a href={PROFESSIONAL_LINKS.cv} target="_blank" rel="noopener noreferrer" title="CV">
                  <MdDescription className="size-5 text-body cursor-pointer hover:text-primary transition-colors" />
               </a>
               <a href={PROFESSIONAL_LINKS.github} target="_blank" rel="noopener noreferrer" title="GitHub">
                  <FaGithub className="size-5 text-body cursor-pointer hover:text-primary transition-colors" />
               </a>
               <a href={PROFESSIONAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" title="LinkedIn">
                  <FaLinkedin className="size-5 text-body cursor-pointer hover:text-primary transition-colors" />
               </a>
               <a href={`mailto:${PROFESSIONAL_LINKS.email}`} title="Email">
                  <MdEmail className="size-5 text-body cursor-pointer hover:text-primary transition-colors" />
               </a>
            </div>
         </div>
      </footer>
   );
};
