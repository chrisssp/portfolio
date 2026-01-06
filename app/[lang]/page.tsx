import { getDictionary } from "@/i18n/config";
import { Locale } from "@/i18n/config";

type Props = {
   params: { lang: Locale };
};

export default async function Home({ params }: Props) {
   const { lang } = await params;

   const dict = await getDictionary(lang);

   return (
      <div className="flex h-screen justify-center items-center">
         <h1 className="text-5xl font-bold text-center text-primary">
            {dict.example}
         </h1>
      </div>
   );
}
