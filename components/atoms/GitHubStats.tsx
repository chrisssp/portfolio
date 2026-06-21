"use client";

import { FaGithub } from "react-icons/fa";
import { useGitHubStats } from "@/hooks/useGitHubStats";
import { Typography } from "./Typography";

interface GitHubStatsProps {
   githubStars: string;
   githubRepos: string;
}

export const GitHubStats = ({ githubStars, githubRepos }: GitHubStatsProps) => {
   const { stars, repos, loading, error } = useGitHubStats();

   if (error) return null;

   if (loading) {
      return <div className="block w-[120px] h-5" aria-hidden="true" />;
   }

   return (
      <div className="flex items-center gap-1.5 md:gap-2 md:px-3">
         <FaGithub className="size-3.5 md:size-4 shrink-0" />
         <Typography variant="small" as="span">
            {stars} {githubStars}
         </Typography>
         <Typography variant="small" as="span" className="opacity-40">
            ·
         </Typography>
         <Typography variant="small" as="span">
            {repos} {githubRepos}
         </Typography>
      </div>
   );
};
