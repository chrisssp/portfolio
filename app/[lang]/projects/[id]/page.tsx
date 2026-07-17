import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Header } from "@/components/molecules/Header";
import { CTA } from "@/components/organisms/CTA";
import { Footer } from "@/components/organisms/Footer";
import { ProjectCertificates } from "@/components/organisms/ProjectCertificates";
import { ProjectChallenge } from "@/components/organisms/ProjectChallenge";
import { ProjectDetailHero } from "@/components/organisms/ProjectDetailHero";
import { ProjectEcosystem } from "@/components/organisms/ProjectEcosystem";
import { SITE_URL } from "@/config/site";
import { getDictionary, type Locale } from "@/i18n/config";

type Props = {
   params: Promise<{ lang: string; id: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
   const { lang, id } = await params;
   const locale = lang as Locale;
   const dict = await getDictionary(locale);
   const project = dict.projects.items.find((p) => p.id === id);

   if (!project) return {};

   const title = `${project.title} | Christian Serrano`;
   const description = project.description;

   const ogImage = project.imagePath
      ? {
           url: project.imagePath,
           width: 630,
           height: 354,
           alt: `${project.title} — Christian Serrano`,
        }
      : undefined;

   return {
      title,
      description,
      openGraph: {
         title,
         description,
         url: `${SITE_URL}/projects/${id}`,
         siteName: "Christian Serrano Portfolio",
         locale: locale === "en" ? "en_US" : "es_ES",
         type: "website",
         images: ogImage ? [ogImage] : [],
      },
      twitter: {
         card: "summary_large_image",
         title,
         description,
         images: ogImage ? [ogImage] : [],
      },
   };
}

export default async function ProjectPage({ params }: Props) {
   const { lang, id } = await params;
   const locale = lang as Locale;
   const dict = await getDictionary(locale);
   const backHref = `/${lang}#project-${id}`;

   const project = dict.projects.items.find((p) => p.id === id);

   if (!project) {
      notFound();
   }

   const hasCerts = !!project.certificates?.length;

   return (
      <div className="flex flex-col min-h-screen overflow-x-clip">
         <Header
            dict={dict}
            lang={locale}
            showBack={true}
            backHref={backHref}
         />

         <main className="flex-1">
            <ProjectDetailHero project={project} />
            <ProjectChallenge
               project={project}
               labels={dict.projects.sections}
            />

            <ProjectCertificates
               project={project}
               labels={dict.projects.sections}
            />

            <ProjectEcosystem
               project={project}
               labels={dict.projects.sections}
               actions={dict.projects.actions}
               bg={hasCerts ? "bg-page" : undefined}
            />
            <CTA
               dict={dict}
               projectTitle={project.title}
               projectCtaHighlight={project.ctaHighlight}
               bg={hasCerts ? "bg-surface" : undefined}
            />
         </main>

         <Footer dict={dict} />
      </div>
   );
}
