import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import { AmbientOrbs } from "@/components/atoms/AmbientOrbs";
import { GridMouseTracker } from "@/components/atoms/GridMouseTracker";
import { MusicPlayer } from "@/components/atoms/MusicPlayer";
import { ScrollProgress } from "@/components/atoms/ScrollProgress";
import { ScrollToTop } from "@/components/atoms/ScrollToTop";
import { MobileMenuProvider } from "@/components/contexts/MobileMenuContext";
import { ChatWidgetWrapper } from "@/components/organisms/ChatWidget/ChatWidgetWrapper";
import { ThemeProvider } from "@/components/ThemeContext";
import { SITE_URL } from "@/config/site";
import type { Locale } from "@/i18n/config";
import "./../globals.css";

const spaceGrotesk = Space_Grotesk({
   variable: "--font-space-grotesk",
   subsets: ["latin"],
   weight: ["300", "400", "500", "700"],
   display: "swap",
});

export const metadata: Metadata = {
   title: "Christian Serrano's Portfolio",
   description: "Mobile & Full Stack Developer",
   metadataBase: new URL(SITE_URL),
   alternates: {
      canonical: SITE_URL,
      languages: {
         en: "/en",
         es: "/es",
      },
   },
   verification: {
      google: "C7-Eo1l4pm2SWrZBbFBqYuqbg8SQtfoVO-ZSyV-EYFs",
   },
   icons: {
      icon: [
         {
            url: "/assets/images/profile/isotipo-black-round.png",
            media: "(prefers-color-scheme: light)",
         },
         {
            url: "/assets/images/profile/isotipo-white-round.png",
            media: "(prefers-color-scheme: dark)",
         },
      ],
      shortcut: "/assets/images/profile/isotipo-black-round.png",
      apple: "/assets/images/profile/isotipo-black-round.png",
   },
   manifest: "/manifest.webmanifest",
};

type Props = {
   children: React.ReactNode;
   params: Promise<{ lang: string }>;
};

export default async function RootLayout({ children, params }: Props) {
   const { lang } = await params;
   const locale = lang as Locale;
   return (
      <html
         lang={locale}
         className={spaceGrotesk.variable}
         suppressHydrationWarning
      >
         <body className="antialiased font-sans bg-page text-body selection:bg-primary selection:text-primary-contrast min-h-screen relative">
            <ThemeProvider>
               <MobileMenuProvider>
                  <ScrollProgress />
                  {children}
                  <AmbientOrbs />
                  <GridMouseTracker />
                  <MusicPlayer locale={locale} />
                  <ScrollToTop />
                  <ChatWidgetWrapper locale={locale} />
                  <Analytics />
                  <SpeedInsights />
               </MobileMenuProvider>
            </ThemeProvider>
         </body>
      </html>
   );
}
