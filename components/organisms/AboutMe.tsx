import Image from "next/image";
import { Dictionary } from "@/i18n/types";
import { Typography } from "../atoms/Typography";
import { MdPerson } from "react-icons/md";
import { SectionContainer } from "../atoms/SectionContainer";

interface AboutMeProps {
   dict: Dictionary;
}

export const AboutMe = ({ dict }: AboutMeProps) => {
   const img1 = "/assets/images/about/midudev.jpg"; 
   const img2 = "/assets/images/about/mouredev.jpg"; 

   return (
      <SectionContainer id="about" className="bg-surface" innerClassName="flex items-center justify-between gap-24">
         <div className="flex flex-col gap-12 max-w-[640px]">
            {/* About Me Text */}
            <div className="flex flex-col gap-6">
               <div className="flex gap-6 items-center">
                  <MdPerson className="size-8 text-body" />
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
         <div className="relative w-[500px] h-[500px] shrink-0">
            <div className="absolute top-0 right-0 size-[333px] rounded-full border-3 border-subtle overflow-hidden shadow-2xl hover:scale-105 transition-transform duration-500 cursor-pointer">
               <Image src={img1} alt="Community" fill className="object-cover" unoptimized />
            </div>
            <div className="absolute bottom-0 left-0 size-[333px] rounded-full border-3 border-subtle overflow-hidden shadow-2xl hover:scale-105 transition-transform duration-500 cursor-pointer">
               <Image src={img2} alt="Me" fill className="object-cover" unoptimized />
            </div>
         </div>
      </SectionContainer>
   );
};
