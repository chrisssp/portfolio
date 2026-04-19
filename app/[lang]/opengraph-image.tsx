import { ImageResponse } from "next/og";
import { getDictionary, Locale } from "@/i18n/config";

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

   // Usamos una URL absoluta para la imagen de perfil (requerido por Satori/Next/OG)
   // En desarrollo usaremos un placeholder o la ruta local si el entorno lo permite
   const profileImageUrl = `https://chrisssp.vercel.app/assets/images/profile/me.png`;

   return new ImageResponse(
      (
         <div
            style={{
               height: "100%",
               width: "100%",
               display: "flex",
               flexDirection: "row",
               alignItems: "center",
               justifyContent: "center",
               backgroundColor: "#171c28", // var(--bg-page) en dark mode
               padding: "80px",
               fontFamily: "sans-serif",
            }}
         >
            {/* Contenedor Izquierdo: Textos */}
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
                     fontSize: "72px",
                     fontWeight: "bold",
                     color: "white",
                     margin: 0,
                     marginBottom: "16px",
                  }}
               >
                  Christian Serrano
               </h1>
               <h2
                  style={{
                     fontSize: "32px",
                     fontWeight: "600",
                     color: "#38bdf8", // var(--brand-primary) en dark mode
                     margin: 0,
                     marginBottom: "24px",
                  }}
               >
                  {dict.hero.role}
               </h2>
               <p
                  style={{
                     fontSize: "24px",
                     color: "#c5cddb", // var(--color-slate-200)
                     lineHeight: 1.4,
                     maxWidth: "600px",
                     margin: 0,
                  }}
               >
                  {dict.hero.description.slice(0, 180)}...
               </p>
            </div>

            {/* Contenedor Derecho: Foto de Perfil */}
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
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                     src={profileImageUrl}
                     alt="Christian Serrano"
                     style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                     }}
                  />
               </div>
            </div>
            
            {/* Marca de agua / URL */}
            <div
               style={{
                  position: "absolute",
                  bottom: "40px",
                  left: "80px",
                  fontSize: "20px",
                  color: "#2f3a53",
                  fontWeight: "bold",
               }}
            >
               chrisssp.vercel.app
            </div>
         </div>
      ),
      {
         ...size,
      }
   );
}
