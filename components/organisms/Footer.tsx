import { Dictionary } from "@/i18n/types";
import { Typography } from "../atoms/Typography";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail, MdDescription } from "react-icons/md";

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
            <div className="flex gap-4 xs:gap-6 items-center">
               <MdDescription className="size-5 text-body cursor-pointer hover:text-primary transition-colors" />
               <FaGithub className="size-5 text-body cursor-pointer hover:text-primary transition-colors" />
               <FaLinkedin className="size-5 text-body cursor-pointer hover:text-primary transition-colors" />
               <MdEmail className="size-5 text-body cursor-pointer hover:text-primary transition-colors" />
            </div>
         </div>
      </footer>
   );
};
