import type { ReactNode } from "react";
import { Header } from "@/components/molecules/Header";
import { Footer } from "@/components/organisms/Footer";
import { getDictionary, type Locale } from "@/i18n/config";

interface BlogLayoutProps {
   children: ReactNode;
   params: Promise<{ lang: string }>;
}

export default async function BlogLayout({
   children,
   params,
}: BlogLayoutProps) {
   const { lang } = await params;
   const locale = lang as Locale;
   const dict = await getDictionary(locale);
   const backHref = `/${lang}`;

   return (
      <div className="flex flex-col min-h-screen overflow-x-clip">
         <Header
            dict={dict}
            lang={locale}
            showBack={true}
            backHref={backHref}
         />
         <main className="flex-1 relative w-full">
            <div className="absolute inset-0 bg-grid-spotlight pointer-events-none" />
            <div className="relative z-10">{children}</div>
         </main>
         <Footer dict={dict} />
      </div>
   );
}
