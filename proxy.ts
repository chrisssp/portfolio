import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

const locales = ["es", "en"];
const defaultLocale = "en";

export function proxy(request: NextRequest) {
   const pathname = request.nextUrl.pathname;

   const pathNameHasLocale = locales.some(
      (locale) =>
         pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`,
   );

   if (pathNameHasLocale) {
      const langMatch = pathname.match(/^\/(es|en)(\/|$)/);
      if (langMatch) {
         const response = NextResponse.next();
         response.cookies.set("NEXT_LOCALE", langMatch[1], {
            maxAge: 365 * 24 * 60 * 60,
            path: "/",
         });
         return response;
      }
      return NextResponse.next();
   }

   // Redirigir desde "/" o rutas sin idioma
   // Intentar leer cookie de preferencia previa
   const preferredLang = request.cookies.get("NEXT_LOCALE")?.value;

   if (preferredLang && locales.includes(preferredLang)) {
      const url = new URL(`/${preferredLang}${pathname}`, request.url);
      return NextResponse.redirect(url);
   }

   // Detectar del header Accept-Language
   const acceptLanguage = request.headers.get("accept-language") || "";
   const languages = acceptLanguage
      .split(",")
      .map((lang) => lang.split(";")[0].trim().toLowerCase());

   let targetLang = defaultLocale;

   if (languages.some((lang) => lang.startsWith("es"))) {
      targetLang = "es";
   } else if (languages.some((lang) => lang.startsWith("en"))) {
      targetLang = "en";
   }

   const url = new URL(`/${targetLang}${pathname}`, request.url);
   const response = NextResponse.redirect(url);
   response.cookies.set("NEXT_LOCALE", targetLang, {
      maxAge: 365 * 24 * 60 * 60,
      path: "/",
   });

   return response;
}

export const config = {
   matcher: [
      "/((?!api|_next/static|_next/image|assets|audio|favicon.ico|manifest.webmanifest|robots.txt|sitemap.xml).*)",
   ],
};
