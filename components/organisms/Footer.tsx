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
         <div className="flex items-center justify-between px-20 py-[48px] w-full max-w-[1440px]">
            <Typography variant="small" className="text-slate-500 font-medium">
               {dict.footer.rights}
            </Typography>
            <div className="flex gap-6 items-center">
               <MdDescription className="size-5 text-body cursor-pointer hover:text-primary transition-colors" />
               <FaGithub className="size-5 text-body cursor-pointer hover:text-primary transition-colors" />
               <FaLinkedin className="size-5 text-body cursor-pointer hover:text-primary transition-colors" />
               <MdEmail className="size-5 text-body cursor-pointer hover:text-primary transition-colors" />
            </div>
         </div>
      </footer>
   );
};
