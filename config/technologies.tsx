import { FaJava } from "react-icons/fa";
import {
   SiAndroid,
   SiAngular,
   SiAstro,
   SiBootstrap,
   SiCapacitor,
   SiDjango,
   SiExpo,
   SiExpress,
   SiFastapi,
   SiFirebase,
   SiGooglegemini,
   SiIonic,
   SiLaravel,
   SiMongodb,
   SiNestjs,
   SiNodedotjs,
   SiPostgresql,
   SiPrisma,
   SiPython,
   SiReact,
   SiReactquery,
   SiScikitlearn,
   SiSpringboot,
   SiSupabase,
   SiTailwindcss,
   SiTypescript,
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
   firebase: {
      name: "Firebase",
      icon: SiFirebase,
      bgColor: "#e89d1f",
   },
   laravel: {
      name: "Laravel",
      icon: SiLaravel,
      bgColor: "#ff5252",
   },
   java: {
      name: "Java",
      icon: FaJava,
      bgColor: "#e53935",
   },
   android: {
      name: "Android",
      icon: SiAndroid,
      bgColor: "#8bc34a",
   },
   nodejs: {
      name: "Node.js",
      icon: SiNodedotjs,
      bgColor: "#339933",
   },
   typescript: {
      name: "TypeScript",
      icon: SiTypescript,
      bgColor: "#3178c6",
   },
   express: {
      name: "Express",
      icon: SiExpress,
      bgColor: "#000000",
   },
   capacitor: {
      name: "Capacitor",
      icon: SiCapacitor,
      bgColor: "#119eff",
   },
   python: {
      name: "Python",
      icon: SiPython,
      bgColor: "#3776ab",
   },
   scikitlearn: {
      name: "scikit-learn",
      icon: SiScikitlearn,
      bgColor: "#f7931e",
   },
   django: {
      name: "Django",
      icon: SiDjango,
      bgColor: "#092e20",
   },
   tanstackquery: {
      name: "TanStack Query",
      icon: SiReactquery,
      bgColor: "#ff4154",
   },
   zustand: {
      name: "Zustand",
      icon: SiReact,
      bgColor: "#666666",
   },
   xgboost: {
      name: "XGBoost",
      icon: SiPython,
      bgColor: "#3776ab",
   },
   gemini: {
      name: "Gemini AI",
      icon: SiGooglegemini,
      bgColor: "#1a73e8",
   },
};
