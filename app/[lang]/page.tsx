import { Header } from "@/components/molecules/Header";
import { Hero } from "@/components/organisms/Hero";
import { Experience } from "@/components/organisms/Experience";
import { Projects } from "@/components/organisms/Projects";
import { CTA } from "@/components/organisms/CTA";
import { AboutMe } from "@/components/organisms/AboutMe";
import { Footer } from "@/components/organisms/Footer";
import { getDictionary, Locale } from "@/i18n/config";

type Props = {
   params: Promise<{ lang: string }>;
};

export default async function Home({ params }: Props) {
   const { lang } = await params;
   const locale = lang as Locale;
   const dict = await getDictionary(locale);

   return (
      <div className="flex flex-col min-h-screen">
         <Header dict={dict} lang={locale} />
         
         <main className="flex-1">
            <Hero dict={dict} />
            <Experience dict={dict} />
            <Projects dict={dict} lang={locale} />
            <CTA dict={dict} />
            <AboutMe dict={dict} />
         </main>

         <Footer dict={dict} />
      </div>
   );
}
