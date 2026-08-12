"use client";

import { Space_Grotesk } from "next/font/google";
import { usePathname } from "next/navigation";
import { useEffect, useSyncExternalStore } from "react";

const spaceGrotesk = Space_Grotesk({
   variable: "--font-space-grotesk",
   subsets: ["latin"],
   weight: ["300", "400", "500", "700"],
   display: "swap",
});

/** Never-updating external store used to detect client-only mount (SSR-safe). */
const subscribeToMount = () => () => {};
const getClientSnapshot = () => true;
const getServerSnapshot = () => false;

/**
 * Root not-found fallback for URLs without a [lang] prefix.
 * Renders outside [lang]/layout.tsx, so it's fully self-contained.
 */
export default function RootNotFound() {
   const pathname = usePathname();
   const mounted = useSyncExternalStore(
      subscribeToMount,
      getClientSnapshot,
      getServerSnapshot,
   );

   const lang = pathname.startsWith("/es") ? "es" : "en";

   const content = {
      es: {
         title: "Página no encontrada",
         description: "Ups! La página que buscas no existe o ha sido movida.",
         goHome: "Volver al inicio",
      },
      en: {
         title: "Page not found",
         description:
            "Oops! The page you're looking for doesn't exist or has been moved.",
         goHome: "Go back home",
      },
   };

   const t = content[lang];
   const pageTitle = t.title;

   useEffect(() => {
      document.title = `404 — ${pageTitle}`;
   }, [pageTitle]);

   if (!mounted) {
      return null;
   }

   return (
      <main lang={lang} className={spaceGrotesk.className}>
         <style>{`
				* { margin: 0; padding: 0; box-sizing: border-box; }
				body {
					font-family: 'Space Grotesk', sans-serif;
					background: #f5f7fa;
					color: #171c28;
					min-height: 100vh;
					display: flex;
					align-items: center;
					justify-content: center;
				}
				@media (prefers-color-scheme: dark) {
					body {
						background: #171c28;
						color: #f5f7fa;
					}
				}
				.container {
					text-align: center;
					padding: 2rem;
					max-width: 28rem;
				}
				.number {
					font-size: clamp(6rem, 20vw, 10rem);
					font-weight: 900;
					line-height: 1;
					opacity: 0.15;
					user-select: none;
				}
				h1 {
					font-size: clamp(1.5rem, 5vw, 2.25rem);
					font-weight: 700;
					margin-top: 0.5rem;
					line-height: 1.2;
				}
				p {
					margin-top: 1rem;
					font-size: 1rem;
					line-height: 1.6;
					opacity: 0.7;
				}
				a {
					display: inline-flex;
					align-items: center;
					gap: 0.5rem;
					margin-top: 2.5rem;
					padding: 0.75rem 1.5rem;
					background: #026fac;
					color: #f5f7fa;
					text-decoration: none;
					border-radius: 1rem;
					font-weight: 700;
					font-size: 0.875rem;
					transition: opacity 0.2s;
				}
				a:hover { opacity: 0.9; }
				@media (prefers-color-scheme: dark) {
					a {
						background: #52d1ff;
						color: #171c28;
					}
				}
				.icon { font-size: 1.25rem; }
			`}</style>
         <div className="container">
            <div className="number">404</div>
            <h1>{t.title}</h1>
            <p>{t.description}</p>
            <a href={`/${lang}`}>
               <span className="icon">&#8962;</span>
               {t.goHome}
            </a>
         </div>
      </main>
   );
}
