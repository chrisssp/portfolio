import Image from "next/image";
import { Dictionary } from "@/i18n/types";
import { Typography } from "../atoms/Typography";
import { Button } from "../atoms/Button";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail, MdDescription } from "react-icons/md";

interface HeroProps {
   dict: Dictionary;
}

export const Hero = ({ dict }: HeroProps) => {
   const profileImg = "/assets/images/profile/me.png"; // Sustituir por tu imagen real en esta ruta

   return (
      <section className="bg-surface flex items-center justify-center gap-[120px] px-20 py-[120px] w-full overflow-clip">
         <div className="flex flex-col gap-12 max-w-[700px]">
            <div className="flex flex-col gap-8">
               <div className="flex flex-col gap-4">
                  <Typography variant="hero" className="text-slate-700 dark:text-white-off">
                     Christian Serrano
                  </Typography>
                  <Typography variant="hero-sub" className="text-primary">
                     {dict.hero.role}
                  </Typography>
               </div>
               <Typography variant="body" className="max-w-[680px]">
                  {dict.hero.description}
               </Typography>
            </div>

            <div className="flex gap-4">
               <Button variant="primary" icon={<MdDescription />}>
                  {dict.hero.actions.cv}
               </Button>
               <Button variant="primary" icon={<FaGithub />}>
                  {dict.hero.actions.github}
               </Button>
               <Button variant="primary" icon={<FaLinkedin />}>
                  {dict.hero.actions.linkedin}
               </Button>
               <Button variant="primary" icon={<MdEmail />}>
                  {dict.hero.actions.email}
               </Button>
            </div>
         </div>

         <div className="relative size-[360px] rounded-full border-3 border-subtle overflow-hidden bg-page">
            <Image 
               src={profileImg} 
               alt="Christian Serrano" 
               fill
               className="object-cover"
               priority
            />
         </div>
      </section>
   );
};
