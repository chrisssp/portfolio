import { Dictionary } from "@/i18n/types";
import { Typography } from "../atoms/Typography";
import { MdFilterHdr } from "react-icons/md";
import { SectionContainer } from "../atoms/SectionContainer";

interface ProjectChallengeProps {
   project: Dictionary["projects"]["items"][0];
   labels: Dictionary["projects"]["sections"];
}

export const ProjectChallenge = ({ project, labels }: ProjectChallengeProps) => {
   if (!project.challenge) return null;

   return (
      <SectionContainer className="bg-page" innerClassName="flex flex-col gap-12 md:gap-16">
         <div className="flex gap-4 md:gap-6 items-center">
            <MdFilterHdr className="size-8 text-body" />
            <Typography variant="section">
               {labels.challenge}
            </Typography>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
            <div className="flex flex-col gap-4 md:gap-6">
               <Typography variant="project">
                  {labels.challengeTitle}
               </Typography>
               <Typography variant="body" className="opacity-90">
                  {project.challenge.description}
               </Typography>
            </div>
            <div className="flex flex-col gap-4 md:gap-6">
               <Typography variant="project">
                  {labels.solutionTitle}
               </Typography>
               <Typography variant="body" className="opacity-90">
                  {project.challenge.solution}
               </Typography>
            </div>
         </div>
      </SectionContainer>
   );
};
