import { about } from "../modules/about";
import { chat } from "../modules/chat";
import { cta } from "../modules/cta";
import { experience } from "../modules/experience";
import { footer } from "../modules/footer";
import { hero } from "../modules/hero";
import { music } from "../modules/music";
import { nav } from "../modules/nav";
// Projects
import { project7dCompass } from "../modules/projects/7dcompass";
import { projectAzkali } from "../modules/projects/azkali";
import { projectCoppelNexus } from "../modules/projects/coppelnexus";
import { projectDabetai } from "../modules/projects/dabetai";
import { projectFlacks } from "../modules/projects/flacks";
import { projectIapex } from "../modules/projects/iapex";
import { projectMtrpa } from "../modules/projects/mtrpa";
import { projectPortfolio } from "../modules/projects/portfolio";
import { projectPuntoFiel } from "../modules/projects/puntofiel";
import { projectRataCueva } from "../modules/projects/ratacueva";
import { ui } from "../modules/ui";
import type { Dictionary, ProjectItem, ProjectModule } from "../types";

const projectModules: ProjectModule[] = [
   project7dCompass as unknown as ProjectModule,
   projectAzkali as unknown as ProjectModule,
   projectIapex as unknown as ProjectModule,
   projectDabetai as unknown as ProjectModule,
   projectMtrpa as unknown as ProjectModule,
   projectPortfolio as unknown as ProjectModule,
   projectPuntoFiel as unknown as ProjectModule,
   projectRataCueva as unknown as ProjectModule,
   projectCoppelNexus as unknown as ProjectModule,
   projectFlacks as unknown as ProjectModule,
];

export const en: Dictionary = {
   nav: nav.en,
   hero: hero.en,
   about: about.en,
   experience: experience.en,
   projects: {
      title: "Projects",
      subtitleLink: "Check out my GitHub repositories",
      sections: {
         challenge: "The Challenge",
         challengeTitle: "Challenge",
         solutionTitle: "Solution",
         ecosystem: "Ecosystem",
         recognitions: "Recognitions",
      },
      items: projectModules.map((m) => {
         const lang = m.en;
         return {
            ...m.data,
            ...lang,
            ecosystem: lang.ecosystem
               ? {
                    items: lang.ecosystem.items.map((item, i) => {
                       const dataItem = m.data.ecosystem?.[i] || {
                          imagePath: "",
                          techStack: [],
                       };
                       return {
                          ...dataItem,
                          ...item,
                          links: dataItem.links ?? [],
                       };
                    }),
                 }
               : undefined,
            certificates: lang.certificates
               ? lang.certificates.map((item, i) => {
                    const dataItem = m.data.certificates?.[i] || {
                       filePath: "",
                    };
                    return { ...dataItem, ...item };
                 })
               : undefined,
         };
      }) as ProjectItem[],
      actions: {
         view_code: "Go to Code",
         view_demo: "See in Action",
         view_landing: "View Landing",
         view_design: "View Details",
         view_video: "Watch Demo",
         view_details: "View Details",
         read_paper: "Read Paper",
         view_certificate: "Open",
         tab_featured: "Featured",
         tab_all: "Others",
         filter: "Filters",
         filter_tech: "Technology",
         filter_focus: "Focus",
         clear_filters: "Clear",
         clear_all: "Clear all filters",
         no_projects_match: "No projects match the selected filters",
         show_more: "Show more",
         show_less: "Show less",
      },
   },
   filters: {
      focus: {
         _group_industry: "Industry / Vertical",
         _group_platform: "Platform",
         health: "Health",
         fintech: "Fintech",
         logistics: "Logistics",
         retail: "Retail",
         "ai-ml": "AI / ML",
         "iot-wearables": "IoT / Wearables",
         hackathon: "Hackathon",
         research: "Research",
         enterprise: "Enterprise",
         web: "Web",
         mobile: "Mobile",
         api: "API",
         landing: "Landing",
      },
   },
   cta: cta.en,
   footer: footer.en,

   notFound: {
      title: "Page not found",
      description:
         "Oops! The page you're looking for doesn't exist or has been moved.",
      goHome: "Go back home",
   },

   blog: {
      title: "Blog",
      subtitle:
         "A personal space where I share my workflow, the projects I'm working on, and what I think about development and AI.",
      searchPlaceholder: "Search posts...",
      filterByTags: "Filter by tags:",
      tagFilterPrefix: "Tag:",
      noArticlesTitle: "No posts found",
      noArticlesDescription: "Try adjusting your search or filter criteria.",
      readMore: "Read more",
      readTime: "min read",
      prevPost: "Previous",
      nextPost: "Next",
      relatedPosts: "Related Posts",
      resources: "Resources",
      viewOnLinkedin: "View original post on LinkedIn",
      tableOfContents: "Contents",
      share: "Share",
      copyLink: "Copy link",
      copied: "Link copied",
      shareFallback: "Check out this post:",
      shareLinkedin: "Share on LinkedIn",
      shareX: "Share on X",
      shareReddit: "Share on Reddit",
      shareWhatsapp: "Share on WhatsApp",
      feedDescription: "Recent posts from the blog",
      pagination: {
         label: "Pagination",
         previousPage: "Previous page",
         nextPage: "Next page",
         page: "Page {page}",
         goToPage: "Go to page {page}",
      },
   },

   chat: chat.en,

   ui: ui.en,

   music: music.en,
};
