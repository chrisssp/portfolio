import { FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";
import { HiExternalLink, HiDownload, HiMail } from "react-icons/hi";

// Definimos la estructura de un Preset
export interface LinkPreset {
   icon: React.ElementType;
   color: string;
   // Opcional: forceDownload para casos como el CV
   forceDownload?: boolean;
}

// Catálogo de Presets
export const LINK_PRESETS: Record<string, LinkPreset> = {
   // Redes / Plataformas
   github: {
      icon: FaGithub,
      color: "bg-gray-900 text-white border-gray-700",
   },
   linkedin: {
      icon: FaLinkedin,
      color: "bg-blue-700 text-white border-blue-600",
   },

   // Archivos / Recursos
   cv: {
      icon: HiDownload,
      color: "bg-slate-700 text-white border-slate-600",
      forceDownload: true,
   },

   // Acciones de contacto
   email: {
      icon: HiMail,
      color: "bg-emerald-600 text-white border-emerald-500",
   },

   // Navegación genérica
   demo: {
      icon: HiExternalLink,
      color: "bg-cyan-600 text-white border-cyan-500",
   },
};
