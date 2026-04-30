import { ImageResponse } from "next/og";
import { getDictionary, type Locale } from "@/i18n/config";

export const runtime = "edge";

export const alt = "Christian Serrano | Software Engineer";
export const size = {
   width: 1200,
   height: 630,
};
export const contentType = "image/png";

export default async function Image({ params }: { params: { lang: string } }) {
   const { lang } = await params;
   const dict = await getDictionary(lang as Locale);

   // Cargar fuente local (Ruta corregida: 2 niveles arriba para llegar a la raíz)
   const fontData = await fetch(
      new URL(
         "../../public/assets/fonts/Space_Grotesk/static/SpaceGrotesk-Bold.ttf",
         import.meta.url,
      ),
   ).then((res) => res.arrayBuffer());

   const profileImageUrl = `https://chrisssp.vercel.app/assets/images/profile/me.png`;

   return new ImageResponse(
      <div
         style={{
            height: "100%",
            width: "100%",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#171c28",
            padding: "80px",
            fontFamily: "Space Grotesk",
         }}
      >
         <div
            style={{
               display: "flex",
               flexDirection: "column",
               flex: 1,
               textAlign: "left",
            }}
         >
            <h1
               style={{
                  fontSize: "80px",
                  fontWeight: 700,
                  color: "white",
                  margin: 0,
                  marginBottom: "12px",
               }}
            >
               Christian Serrano
            </h1>
            <h2
               style={{
                  fontSize: "34px",
                  fontWeight: 600,
                  color: "#38bdf8",
                  margin: 0,
                  marginBottom: "32px",
               }}
            >
               {dict.hero.role}
            </h2>
            <p
               style={{
                  fontSize: "24px",
                  fontWeight: 400,
                  color: "#c5cddb",
                  lineHeight: 1.5,
                  maxWidth: "600px",
                  margin: 0,
               }}
            >
               {dict.hero.description.slice(0, 180)}...
            </p>
         </div>

         <div
            style={{
               display: "flex",
               marginLeft: "60px",
            }}
         >
            <div
               style={{
                  width: "380px",
                  height: "380px",
                  borderRadius: "50%",
                  border: "8px solid #2f3a53",
                  overflow: "hidden",
                  display: "flex",
               }}
            >
               {/* biome-ignore lint/performance/noImgElement: Required for Next.js ImageResponse (Satori) */}
               <img
                  src={profileImageUrl}
                  alt="Profile"
                  style={{
                     width: "100%",
                     height: "100%",
                     objectFit: "cover",
                  }}
               />
            </div>
         </div>

         <div
            style={{
               position: "absolute",
               bottom: "40px",
               left: "80px",
               fontSize: "20px",
               color: "#2f3a53",
               fontWeight: 700,
            }}
         >
            chrisssp.vercel.app
         </div>
      </div>,
      {
         ...size,
         fonts: [
            {
               name: "Space Grotesk",
               data: fontData,
               style: "normal",
            },
         ],
      },
   );
}
