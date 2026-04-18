import Link from "next/link";
import { ProjectItem, Dictionary } from "@/i18n/types";
import { Button } from "../atoms/Button";
import { FeatureCard } from "./FeatureCard";
import { MdVisibility, MdPlayArrow, MdCode, MdArrowForward } from "react-icons/md";
import { Locale } from "@/i18n/config";

interface ProjectCardProps {
   project: ProjectItem;
   actions: Dictionary["projects"]["actions"];
   reverse?: boolean;
   lang: Locale;
}

export const ProjectCard = ({ project, actions, reverse, lang }: ProjectCardProps) => {
   const projectActions = (
      <>
         {project.fullDescription && (
            <Link href={`/${lang}/projects/${project.id}`}>
               <Button variant="primary" icon={<MdArrowForward />}>
                  {actions.view_details}
               </Button>
            </Link>
         )}
         
         {project.links.map((link, idx) => {
            const icon = link.type === "video" ? <MdPlayArrow /> : link.type === "github" ? <MdCode /> : <MdVisibility />;
            const label = link.type === "video" ? actions.view_video : link.type === "github" ? actions.view_code : actions.view_demo;
            
            return (
               <a key={idx} href={link.url} target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" icon={icon}>
                     {label}
                  </Button>
               </a>
            );
         })}
      </>
   );

   return (
      <FeatureCard 
         title={project.title}
         description={project.description}
         imagePath={project.imagePath}
         techStack={project.techStack}
         reverse={reverse}
         actions={projectActions}
      />
   );
};
