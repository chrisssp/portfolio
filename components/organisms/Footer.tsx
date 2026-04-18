import { Dictionary } from "@/i18n/types";
import { Typography } from "../atoms/Typography";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail, MdDescription } from "react-icons/md";

interface FooterProps {
   dict: Dictionary;
}

export const Footer = ({ dict }: FooterProps) => {
   return (
      <footer className="bg-page flex items-center justify-between px-20 py-[32px] w-full border-t border-subtle">
         <Typography variant="small" className="text-slate-500 font-medium">
            {dict.footer.rights}
         </Typography>
         <div className="flex gap-6 items-center px-7 py-2 rounded-2xl">
            <MdDescription className="size-5 text-slate-700 dark:text-white-off cursor-pointer hover:text-primary transition-colors" />
            <FaGithub className="size-5 text-slate-700 dark:text-white-off cursor-pointer hover:text-primary transition-colors" />
            <FaLinkedin className="size-5 text-slate-700 dark:text-white-off cursor-pointer hover:text-primary transition-colors" />
            <MdEmail className="size-5 text-slate-700 dark:text-white-off cursor-pointer hover:text-primary transition-colors" />
         </div>
      </footer>
   );
};
