import Link from "next/link";
import {
   MdArrowForward,
   MdArticle,
   MdCode,
   MdPlayArrow,
   MdVisibility,
} from "react-icons/md";
import type { Locale } from "@/i18n/config";
import type { Dictionary, ProjectItem } from "@/i18n/types";
import { Button } from "../atoms/Button";
import { FeatureCard } from "./FeatureCard";

interface ProjectCardProps {
   project: ProjectItem;
   actions: Dictionary["projects"]["actions"];
   reverse?: boolean;
   lang: Locale;
   selectedTechs?: string[];
   onTechClick?: (techId: string) => void;
}

export const ProjectCard = ({
   project,
   actions,
   reverse,
   lang,
   selectedTechs,
   onTechClick,
}: ProjectCardProps) => {
   const handleViewDetails = () => {
      if (typeof window === "undefined") return;
      const basePath = `/${lang}`;
      const hash = `#project-${project.id}`;
      window.history.replaceState(null, "", `${basePath}${hash}`);
   };

   const projectActions = (
      <>
         <Link
            href={`/${lang}/projects/${project.id}`}
            onClick={handleViewDetails}
         >
            <Button variant="primary" icon={<MdArrowForward />}>
               {actions.view_details}
            </Button>
         </Link>

         {project.links?.map((link) => {
            const icon =
               link.type === "video" ? (
                  <MdPlayArrow />
               ) : link.type === "github" ? (
                  <MdCode />
               ) : link.type === "paper" ? (
                  <MdArticle />
               ) : (
                  <MdVisibility />
               );
            const label =
               link.type === "video"
                  ? actions.view_video
                  : link.type === "github"
                    ? actions.view_code
                    : link.type === "paper"
                      ? actions.read_paper
                      : link.type === "landing"
                        ? actions.view_landing
                        : actions.view_demo;

            return (
               <a
                  key={link.url}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
               >
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
         selectedTechs={selectedTechs}
         onTechClick={onTechClick}
      />
   );
};
