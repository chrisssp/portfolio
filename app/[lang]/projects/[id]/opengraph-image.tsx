import { ImageResponse } from "next/og";
import { getDictionary, Locale } from "@/i18n/config";

export const runtime = "edge";

export const size = {
   width: 1200,
   height: 630,
};
export const contentType = "image/png";

export default async function Image({ params }: { params: { lang: string; id: string } }) {
   const { lang, id } = await params;
   const dict = await getDictionary(lang as Locale);
   const project = dict.projects.items.find((p) => p.id === id);

   if (!project) return new Response("Not Found", { status: 404 });

   // Cargar fuentes
   const fontRegular = await fetch(
      new URL("https://github.com/google/fonts/raw/main/ofl/spacegrotesk/SpaceGrotesk%5Bwght%5D.ttf")
   ).then((res) => res.arrayBuffer());

   const projectImageUrl = `https://chrisssp.vercel.app${project.imagePath}`;

   return new ImageResponse(
      (
         <div
            style={{
               height: "100%",
               width: "100%",
               display: "flex",
               flexDirection: "row",
               backgroundColor: "#171c28",
               padding: "60px",
               fontFamily: "Space Grotesk",
            }}
         >
            <div
               style={{
                  display: "flex",
                  flexDirection: "column",
                  flex: 1,
                  justifyContent: "center",
                  paddingRight: "40px",
               }}
            >
               <div style={{ display: "flex", alignItems: "center", marginBottom: "20px" }}>
                  <span style={{ color: "#38bdf8", fontSize: "24px", fontWeight: 700, marginRight: "12px" }}>Project</span>
                  <div style={{ height: "2px", flex: 1, backgroundColor: "#2f3a53" }} />
               </div>

               <h1
                  style={{
                     fontSize: "64px",
                     fontWeight: 700,
                     color: "white",
                     margin: 0,
                     marginBottom: "16px",
                  }}
               >
                  {project.title}
               </h1>

               <p
                  style={{
                     fontSize: "24px",
                     fontWeight: 400,
                     color: "#c5cddb",
                     lineHeight: 1.5,
                     margin: 0,
                     marginBottom: "32px",
                  }}
               >
                  {project.description}
               </p>

               <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
                  {project.techStack.slice(0, 6).map((tech) => (
                     <div
                        key={tech}
                        style={{
                           padding: "8px 16px",
                           backgroundColor: "#2f3a53",
                           borderRadius: "12px",
                           color: "white",
                           fontSize: "18px",
                           fontWeight: 700,
                           textTransform: "capitalize",
                        }}
                     >
                        {tech}
                     </div>
                  ))}
               </div>
            </div>

            <div
               style={{
                  display: "flex",
                  flex: 1,
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
               }}
            >
               {/* Nueva ubicación del branding: arriba a la derecha */}
               <div
                  style={{
                     display: "flex",
                     alignItems: "center",
                     color: "#38bdf8",
                     fontSize: "18px",
                     fontWeight: 700,
                     marginBottom: "20px",
                     alignSelf: "flex-end",
                     paddingRight: "20px",
                  }}
               >
                  <div style={{ width: "12px", height: "12px", borderRadius: "50%", backgroundColor: "#38bdf8", marginRight: "10px" }} />
                  Christian Serrano Portfolio
               </div>

               <div
                  style={{
                     width: "550px",
                     height: "380px",
                     borderRadius: "24px",
                     border: "6px solid #2f3a53",
                     overflow: "hidden",
                     display: "flex",
                     boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
                  }}
               >
                  <img
                     src={projectImageUrl}
                     alt={project.title}
                     style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                     }}
                  />
               </div>
            </div>
         </div>
      ),
      {
         ...size,
         fonts: [
            {
               name: "Space Grotesk",
               data: fontRegular,
               style: "normal",
            },
         ],
      }
   );
}
