"use client";

import { useEffect, useState } from "react";

interface GitHubStatsData {
   stars: number;
   repos: number;
   loading: boolean;
   error: boolean;
}

const CACHE_TTL = 5 * 60 * 1000; // 5 minutes

let cachedStars: { data: number; timestamp: number } | null = null;
let cachedRepos: { data: number; timestamp: number } | null = null;

const isCacheValid = (cache: { data: number; timestamp: number } | null) =>
   cache !== null && Date.now() - cache.timestamp < CACHE_TTL;

export const useGitHubStats = (): GitHubStatsData => {
   const [stats, setStats] = useState<GitHubStatsData>(() => {
      if (isCacheValid(cachedStars) && isCacheValid(cachedRepos)) {
         return {
            stars: cachedStars!.data,
            repos: cachedRepos!.data,
            loading: false,
            error: false,
         };
      }
      return { stars: 0, repos: 0, loading: true, error: false };
   });

   useEffect(() => {
      if (isCacheValid(cachedStars) && isCacheValid(cachedRepos)) {
         return;
      }

      const controller = new AbortController();
      const { signal } = controller;

      const fetchStats = async () => {
         try {
            const reposRes = await fetch(
               "https://api.github.com/users/chrisssp/repos?per_page=100",
               { signal },
            );

            let stars = 0;
            let repos = 0;
            if (reposRes.ok) {
               const reposData = await reposRes.json();
               repos = reposData.length;
               stars = reposData.reduce(
                  (sum: number, repo: { stargazers_count: number }) =>
                     sum + repo.stargazers_count,
                  0,
               );
               cachedStars = { data: stars, timestamp: Date.now() };
               cachedRepos = { data: repos, timestamp: Date.now() };
            }

            setStats({
               stars,
               repos,
               loading: false,
               error: false,
            });
         } catch (err) {
            if (err instanceof DOMException && err.name === "AbortError")
               return;

            setStats({
               stars: 0,
               repos: 0,
               loading: false,
               error: true,
            });
         }
      };

      fetchStats();

      return () => {
         controller.abort();
      };
   }, []);

   return stats;
};
