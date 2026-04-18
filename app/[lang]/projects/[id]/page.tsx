import { getDictionary, Locale } from "@/i18n/config";
import { Header } from "@/components/molecules/Header";
import { Footer } from "@/components/organisms/Footer";
import { ProjectDetailHero } from "@/components/organisms/ProjectDetailHero";
import { ProjectChallenge } from "@/components/organisms/ProjectChallenge";
import { ProjectEcosystem } from "@/components/organisms/ProjectEcosystem";
import { CTA } from "@/components/organisms/CTA";
import { notFound } from "next/navigation";

type Props = {
   params: Promise<{ lang: string; id: string }>;
};

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
            <ProjectChallenge project={project} labels={dict.projects.sections} />
            
            <ProjectEcosystem 
               project={project} 
               labels={dict.projects.sections} 
               actions={dict.projects.actions} 
            />
            <CTA dict={dict} />
         </main>

         <Footer dict={dict} />
      </div>
   );
}
