import { 
  SiAngular, 
  SiBootstrap, 
  SiReact, 
  SiIonic, 
  SiSpringboot, 
  SiPostgresql, 
  SiFastapi, 
  SiMongodb, 
  SiAstro, 
  SiExpo, 
  SiTailwindcss, 
  SiNestjs, 
  SiSupabase, 
  SiPrisma
} from "react-icons/si";

export interface TechConfig {
   name: string;
   icon: React.ElementType;
   bgColor: string;
}

export const TECHNOLOGIES: Record<string, TechConfig> = {
   angular: {
      name: "Angular",
      icon: SiAngular,
      bgColor: "#e53935",
   },
   bootstrap: {
      name: "Bootstrap",
      icon: SiBootstrap,
      bgColor: "#7e13f8",
   },
   react: {
      name: "React",
      icon: SiReact,
      bgColor: "#18a5b7",
   },
   ionic: {
      name: "Ionic",
      icon: SiIonic,
      bgColor: "#3880ff",
   },
   springboot: {
      name: "Spring Boot",
      icon: SiSpringboot,
      bgColor: "#6db33f",
   },
   postgresql: {
      name: "PostgreSQL",
      icon: SiPostgresql,
      bgColor: "#336791",
   },
   fastapi: {
      name: "FastAPI",
      icon: SiFastapi,
      bgColor: "#049688",
   },
   mongodb: {
      name: "MongoDB",
      icon: SiMongodb,
      bgColor: "#48a547",
   },
   astro: {
      name: "Astro",
      icon: SiAstro,
      bgColor: "#7c4dff",
   },
   reactnative: {
      name: "React Native",
      icon: SiReact,
      bgColor: "#18a5b7",
   },
   expo: {
      name: "Expo",
      icon: SiExpo,
      bgColor: "#4e4e4e",
   },
   tailwindcss: {
      name: "Tailwind CSS",
      icon: SiTailwindcss,
      bgColor: "#21adeb",
   },
   nestjs: {
      name: "NestJS",
      icon: SiNestjs,
      bgColor: "#df234f",
   },
   supabase: {
      name: "Supabase",
      icon: SiSupabase,
      bgColor: "#66bb6a",
   },
   prisma: {
      name: "Prisma",
      icon: SiPrisma,
      bgColor: "#00bfa5",
   },
   gluestack: {
      name: "gluestack-ui",
      icon: SiReact,
      bgColor: "#4e4e4e",
   },
};
