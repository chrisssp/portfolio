import type { Metadata } from "next";
import { Header } from "@/components/molecules/Header";
import { AboutMe } from "@/components/organisms/AboutMe";
import { CTA } from "@/components/organisms/CTA";
import { Experience } from "@/components/organisms/Experience";
import { Footer } from "@/components/organisms/Footer";
import { Hero } from "@/components/organisms/Hero";
import { Projects } from "@/components/organisms/Projects";
import { getDictionary, type Locale } from "@/i18n/config";

type Props = {
   params: Promise<{ lang: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
   const { lang } = await params;
   const locale = lang as Locale;

   const titles = {
      en: "Christian Serrano | Software Engineer | Full-Stack & Mobile Developer",
      es: "Christian Serrano | Ingeniero de Software | Desarrollador Full-Stack y Móvil",
   };

   const descriptions = {
      en: "Explore the portfolio of Christian Serrano, a Software Engineer specializing in efficient web and mobile ecosystems, clean code, and high performance.",
      es: "Explora el portafolio de Christian Serrano, Ingeniero de Software especializado en ecosistemas web y móviles eficientes, código limpio y alto rendimiento.",
   };

   return {
      title: titles[locale],
      description: descriptions[locale],
      openGraph: {
         title: titles[locale],
         description: descriptions[locale],
         locale: locale === "en" ? "en_US" : "es_ES",
      },
   };
}

export default async function Home({ params }: Props) {
   const { lang } = await params;
   const locale = lang as Locale;
   const dict = await getDictionary(locale);

   const jsonLd = {
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Christian Serrano",
      url: "https://chrisssp.vercel.app",
      jobTitle: "Software Engineer",
      sameAs: [
         "https://github.com/chrisssp",
         "https://linkedin.com/in/christian-serrano",
      ],
      description:
         locale === "en"
            ? "Software Engineer focused on building efficient web and mobile ecosystems."
            : "Ingeniero de Software enfocado en la construcción de ecosistemas web y móviles eficientes.",
   };

   return (
      <div className="flex flex-col min-h-screen">
         <script
            type="application/ld+json"
            // biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD is safe here
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
         />
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
