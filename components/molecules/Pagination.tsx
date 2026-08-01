"use client";

import { useRouter } from "next/navigation";
import type { MouseEvent } from "react";
import { Typography } from "@/components/atoms/Typography";
import type { Dictionary } from "@/i18n/types";

interface PaginationProps {
   currentPage: number;
   totalPages: number;
   basePath: string;
   searchParams?: string;
   labels: Dictionary["blog"]["pagination"];
}

export function Pagination({
   currentPage,
   totalPages,
   basePath,
   searchParams = "",
   labels,
}: PaginationProps) {
   const router = useRouter();

   const createPageUrl = (page: number) => {
      const params = new URLSearchParams(searchParams);
      params.set("page", page.toString());
      const queryString = params.toString();
      return `${basePath}${queryString ? `?${queryString}` : ""}`;
   };

   const handleNavigate = (
      event: MouseEvent<HTMLAnchorElement>,
      url: string,
   ) => {
      if (
         event.button !== 0 ||
         event.metaKey ||
         event.ctrlKey ||
         event.shiftKey ||
         event.altKey
      ) {
         return;
      }
      event.preventDefault();
      router.replace(url);
   };

   if (totalPages <= 1) return null;

   return (
      <nav className="flex justify-center mt-12" aria-label={labels.label}>
         <ul className="flex items-center gap-2 flex-wrap justify-center">
            {/* Previous button */}
            {currentPage > 1 && (
               <li>
                  <a
                     href={createPageUrl(currentPage - 1)}
                     onClick={(event) =>
                        handleNavigate(event, createPageUrl(currentPage - 1))
                     }
                     className="flex items-center justify-center w-10 h-10 rounded-lg border border-subtle text-body/70 hover:bg-surface/80 transition-colors"
                     aria-label={labels.previousPage}
                  >
                     <span className="sr-only">{labels.previousPage}</span>
                     <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                     >
                        <path
                           strokeLinecap="round"
                           strokeLinejoin="round"
                           strokeWidth={2}
                           d="M15 19l-7-7 7-7"
                        />
                     </svg>
                  </a>
               </li>
            )}

            {/* Page numbers */}
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => {
               const isActive = page === currentPage;
               return (
                  <li key={page}>
                     <a
                        href={createPageUrl(page)}
                        onClick={(event) =>
                           handleNavigate(event, createPageUrl(page))
                        }
                        className={`flex items-center justify-center w-10 h-10 rounded-lg transition-all duration-200 $
                  ${
                     isActive
                        ? "bg-primary text-primary-contrast border-primary shadow-lg"
                        : "border border-subtle text-body/70 hover:bg-surface/80"
                  }
                `}
                        aria-label={
                           isActive
                              ? labels.page.replace("{page}", String(page))
                              : labels.goToPage.replace("{page}", String(page))
                        }
                        aria-current={isActive ? "page" : undefined}
                     >
                        <Typography variant="small" as="span" weight="medium">
                           {page}
                        </Typography>
                     </a>
                  </li>
               );
            })}

            {/* Next button */}
            {currentPage < totalPages && (
               <li>
                  <a
                     href={createPageUrl(currentPage + 1)}
                     onClick={(event) =>
                        handleNavigate(event, createPageUrl(currentPage + 1))
                     }
                     className="flex items-center justify-center w-10 h-10 rounded-lg border border-subtle text-body/70 hover:bg-surface/80 transition-colors"
                     aria-label={labels.nextPage}
                  >
                     <span className="sr-only">{labels.nextPage}</span>
                     <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                     >
                        <path
                           strokeLinecap="round"
                           strokeLinejoin="round"
                           strokeWidth={2}
                           d="M9 5l7 7-7 7"
                        />
                     </svg>
                  </a>
               </li>
            )}
         </ul>
      </nav>
   );
}
