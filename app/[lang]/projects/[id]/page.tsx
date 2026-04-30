import { notFound } from "next/navigation";
import { Header } from "@/components/molecules/Header";
import { CTA } from "@/components/organisms/CTA";
import { Footer } from "@/components/organisms/Footer";
import { ProjectChallenge } from "@/components/organisms/ProjectChallenge";
import { ProjectDetailHero } from "@/components/organisms/ProjectDetailHero";
import { ProjectEcosystem } from "@/components/organisms/ProjectEcosystem";
import { getDictionary, type Locale } from "@/i18n/config";
import type { Metadata } from "next";

type Props = {
   params: Promise<{ lang: string; id: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
   const { lang, id } = await params;
   const locale = lang as Locale;
   const dict = await getDictionary(locale);
   const project = dict.projects.items.find((p) => p.id === id);

   if (!project) return {};

   const title = `${project.title} | Christian Serrano Project`;
   const description = project.description;

   return {
      title,
      description,
      openGraph: {
         title,
         description,
         images: project.image ? [{ url: project.image }] : [],
      },
   };
}

export default async function ProjectPage({ params }: Props) {
   const { lang, id } = await params;
   const locale = lang as Locale;
   const dict = await getDictionary(locale);

   const project = dict.projects.items.find((p) => p.id === id);

   if (!project || !project.fullDescription) {
      notFound();
   }

   return (
      <div className="flex flex-col min-h-screen">
         <Header dict={dict} lang={locale} showBack={true} />

         <main className="flex-1">
            <ProjectDetailHero project={project} />
            <ProjectChallenge
               project={project}
               labels={dict.projects.sections}
            />

            <ProjectEcosystem
               project={project}
               labels={dict.projects.sections}
               actions={dict.projects.actions}
            />
            <CTA dict={dict} projectTitle={project.title} />
         </main>

         <Footer dict={dict} />
      </div>
   );
}
