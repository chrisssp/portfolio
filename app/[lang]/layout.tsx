import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import { Locale } from "@/i18n/config";
import "@/app/globals.css";

const spaceGrotesk = Space_Grotesk({
   variable: "--font-space-grotesk",
   subsets: ["latin"],
   weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
   title: "Christian Serrano's Portfolio",
   description: "Mobile & Full Stack Developer",
};

type Props = {
   children: React.ReactNode;
   params: { lang: Locale };
};

export default async function RootLayout({ children, params }: Props) {
   const { lang } = await params;
   return (
      <html lang={lang}>
         <body className={`${spaceGrotesk.variable} antialiased font-sans`}>
            {children}
         </body>
      </html>
   );
}
