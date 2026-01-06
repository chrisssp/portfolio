import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const locales = ["es", "en"];
const defaultLocale = ["en"];

export function proxy(request: NextRequest) {
   const pathname = request.nextUrl.pathname;

   const pathNameHasLocale = locales.some(
      (locale) =>
         pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`,
   );

   if (pathNameHasLocale) return NextResponse.next();

   const url = new URL(`/${defaultLocale}${pathname}`, request.url);

   return NextResponse.redirect(url);
}

export const config = {
   matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
