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
   params: Promise<{ lang: string }>;
};

export default async function RootLayout({ children, params }: Props) {
   const { lang } = await params;
   const locale = lang as Locale;
   return (
      <html lang={locale}>
         <body className={`${spaceGrotesk.variable} antialiased font-sans`}>
            {/* Capa del fondo */}
            <div className="absolute inset-0 -z-10 h-full w-full">
               <div className="absolute h-full w-full bg-grid-pattern [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] opacity-20" />
            </div>

            {children}
         </body>
      </html>
   );
}
