import Image from "next/image";
import { Dictionary } from "@/i18n/types";
import { Typography } from "../atoms/Typography";
import { MdPerson } from "react-icons/md";

interface AboutMeProps {
   dict: Dictionary;
}

export const AboutMe = ({ dict }: AboutMeProps) => {
   const img1 = "/assets/images/about/community.png"; 
   const img2 = "/assets/images/about/me-alt.png"; 

   return (
      <section id="about" className="bg-surface flex items-center justify-center gap-[120px] px-20 py-[64px] w-full">
         <div className="flex flex-col gap-12 max-w-[540px]">
            {/* About Me Text */}
            <div className="flex flex-col gap-6">
               <div className="flex gap-6 items-center">
                  <MdPerson className="size-8 text-slate-700 dark:text-white-off" />
                  <Typography variant="section">{dict.about.title}</Typography>
               </div>
               <div className="flex flex-col gap-3">
                  <Typography variant="body">{dict.about.p1}</Typography>
                  <Typography variant="body">{dict.about.p2}</Typography>
                  <Typography variant="body">
                     My philosophy is simple: <span className="font-bold">{dict.about.quote}</span>.
                  </Typography>
               </div>
            </div>

            {/* Academic Background */}
            <div className="flex flex-col gap-8">
               <div className="flex flex-col gap-2">
                  <Typography variant="project">{dict.about.educationTitle}</Typography>
                  <Typography variant="body" className="font-medium">
                     {dict.about.education[0].institution}
                  </Typography>
               </div>
               <div className="flex flex-col gap-4">
                  {dict.about.education.map((edu, idx) => (
                     <div key={idx} className="flex flex-col">
                        <Typography variant="body">
                           <span className="font-medium">{edu.degree}</span> ({edu.date})
                        </Typography>
                        {edu.achievement && (
                           <ul className="list-disc ml-6 mt-1">
                              <li className="text-body text-[16px]">
                                 Graduated Top of Class with a <span className="font-bold text-primary">9.82</span> GPA.
                              </li>
                           </ul>
                        )}
                     </div>
                  ))}
               </div>
            </div>
         </div>

         {/* Circular Images */}
         <div className="relative w-[500px] h-[500px]">
            <div className="absolute top-0 right-0 size-[333px] rounded-full border-3 border-subtle overflow-hidden">
               <Image src={img1} alt="Community" fill className="object-cover" />
            </div>
            <div className="absolute bottom-0 left-0 size-[333px] rounded-full border-3 border-subtle overflow-hidden">
               <Image src={img2} alt="Me" fill className="object-cover" />
            </div>
         </div>
      </section>
   );
};
