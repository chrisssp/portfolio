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

   // URL de la imagen del proyecto
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
               fontFamily: "sans-serif",
            }}
         >
            {/* Mitad Izquierda: Información del Proyecto */}
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
                  <span style={{ color: "#38bdf8", fontSize: "24px", fontWeight: "bold", marginRight: "12px" }}>Project</span>
                  <div style={{ height: "2px", flex: 1, backgroundColor: "#2f3a53" }} />
               </div>

               <h1
                  style={{
                     fontSize: "64px",
                     fontWeight: "bold",
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
                     color: "#c5cddb",
                     lineHeight: 1.5,
                     margin: 0,
                     marginBottom: "32px",
                  }}
               >
                  {project.description}
               </p>

               {/* Tech Stack Badges */}
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
                           fontWeight: "bold",
                           textTransform: "capitalize",
                        }}
                     >
                        {tech}
                     </div>
                  ))}
               </div>
            </div>

            {/* Mitad Derecha: Mockup / Imagen del Proyecto */}
            <div
               style={{
                  display: "flex",
                  flex: 1,
                  alignItems: "center",
                  justifyContent: "center",
               }}
            >
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
                  {/* eslint-disable-next-line @next/next/no-img-element */}
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

            {/* Footer de la imagen */}
            <div
               style={{
                  position: "absolute",
                  bottom: "40px",
                  left: "60px",
                  display: "flex",
                  alignItems: "center",
                  color: "#38bdf8",
                  fontSize: "18px",
                  fontWeight: "bold",
               }}
            >
               <div style={{ width: "12px", height: "12px", borderRadius: "50%", backgroundColor: "#38bdf8", marginRight: "10px" }} />
               Christian Serrano Portfolio
            </div>
         </div>
      ),
      {
         ...size,
      }
   );
}
