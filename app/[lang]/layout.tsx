import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import { Locale } from "@/i18n/config";
import { ThemeProvider } from "@/components/ThemeContext";
import { ScrollToTop } from "@/components/atoms/ScrollToTop";
import "@/app/globals.css";

const spaceGrotesk = Space_Grotesk({
   variable: "--font-space-grotesk",
   subsets: ["latin"],
   weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
   title: "Christian Serrano's Portfolio",
   description: "Mobile & Full Stack Developer",
   icons: {
      icon: [
         { url: "/assets/images/profile/isotipo-black-round.png", media: "(prefers-white-scheme: light)" },
         { url: "/assets/images/profile/isotipo-black-round.png", media: "(prefers-color-scheme: dark)" },
      ],
      shortcut: "/assets/images/profile/isotipo-black-round.png",
      apple: "/assets/images/profile/isotipo-black-round.png",
   },
};

type Props = {
   children: React.ReactNode;
   params: Promise<{ lang: string }>;
};

export default async function RootLayout({ children, params }: Props) {
   const { lang } = await params;
   const locale = lang as Locale;
   return (
      <html lang={locale} className={spaceGrotesk.variable} suppressHydrationWarning>
         <body className="antialiased font-sans bg-page text-body selection:bg-primary selection:text-primary-contrast min-h-screen relative">
            <ThemeProvider>
               {children}
               <ScrollToTop />
            </ThemeProvider>
         </body>
      </html>
   );
}
