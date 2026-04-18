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
   const profileImg = "/assets/images/profile/me.png";

   return (
      <section className="bg-surface relative overflow-clip flex justify-center w-full min-h-[800px]">
         <div className="absolute inset-0 bg-grid-pattern pointer-events-none mask-grid-fade" />
         
         <div className="flex items-center justify-between gap-24 px-20 py-[120px] w-full max-w-[1440px] relative z-10">
            <div className="flex flex-col gap-12 max-w-[760px]">
               <div className="flex flex-col gap-8">
                  <div className="flex flex-col gap-4">
                     <Typography variant="hero">
                        Christian Serrano
                     </Typography>
                     <Typography variant="hero-sub" className="text-primary">
                        {dict.hero.role}
                     </Typography>
                  </div>
                  <Typography variant="body">
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

            <div className="relative size-[360px] rounded-full border-3 border-subtle overflow-hidden bg-page shrink-0 shadow-xl hover:scale-105 transition-transform duration-500 cursor-pointer">
               <Image 
                  src={profileImg} 
                  alt="Christian Serrano" 
                  fill
                  className="object-cover"
                  priority
                  unoptimized
               />
            </div>
         </div>
      </section>
   );
};
