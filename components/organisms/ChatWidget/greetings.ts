/**
 * Curated bilingual greeting array for chrisssp — the portfolio AI.
 * One greeting is picked randomly per sessionStorage session.
 * Minimum 5 entries per locale.
 * Speaks in FIRST PERSON as Christian Serrano.
 */

interface Greeting {
   text: string;
   locale: "en" | "es";
}

export const greetings: Greeting[] = [
   // English (7)
   {
      text: "Hey! I'm Christian Serrano (chrisssp). Ask me anything about my work — projects, experience, tech stacks, whatever you're curious about.",
      locale: "en",
   },
   {
      text: "Welcome to my portfolio! I built this site to showcase my work. Want to know about a specific project or just browse around?",
      locale: "en",
   },
   {
      text: "Hi! I'm Christian, a software engineer from Mexico. This portfolio has everything about my projects and experience. What catches your interest?",
      locale: "en",
   },
   {
      text: "Hey there! You're checking out my digital portfolio. I've worked on some cool projects — from fintech to construction management. Ask me about any of them.",
      locale: "en",
   },
   {
      text: "Welcome to my corner of the web. I'm Christian — dev, problem solver, lifelong learner. Curious about something? Ask away!",
      locale: "en",
   },
   {
      text: "Hey! Need the inside scoop on my projects? You came to the right place. Ask me about the tech, the challenges, or what I learned.",
      locale: "en",
   },
   {
      text: "Hi! This is my portfolio — built from scratch with Next.js. Whether it's code, career, or curiosity, I'm here to help you explore my work.",
      locale: "en",
   },

   // Spanish — Rioplatense (7)
   {
      text: "¡Hola! Soy Christian Serrano (chrisssp). Preguntame lo que quieras sobre mi trabajo — proyectos, experiencia, tecnologías, lo que sea.",
      locale: "es",
   },
   {
      text: "¡Bienvenido a mi portafolio! Este sitio muestra todo mi laburo como dev. ¿Querés saber de algún proyecto en particular o preferís ver qué hay?",
      locale: "es",
   },
   {
      text: "¡Qué onda! Soy Christian, ingeniero de software de México. Todo lo que ves acá tiene que ver con mi trayectoria. ¿Qué te gustaría conocer?",
      locale: "es",
   },
   {
      text: "¡Hola! Este portafolio lo armé para mostrar mis proyectos y experiencia. Laburé en un par de cosas interesantes — preguntame sin miedo.",
      locale: "es",
   },
   {
      text: "¡Bienvenido a mi espacio! Soy Christian, dev mexicano de 21 años. Si tenés curiosidad sobre algún proyecto, tech stack, o mi experiencia, dale nomás.",
      locale: "es",
   },
   {
      text: "¡Hey! Llegaste a mi portafolio. Si querés saber cómo resolví tal o cual problema, qué tecnologías usé, o simplemente charlar sobre mi trabajo, estoy acá.",
      locale: "es",
   },
   {
      text: "¡Buenas! Todo lo que ves acá soy yo — Christian, dev full-stack, apasionado por resolver problemas. ¿Qué se te ofrece?",
      locale: "es",
   },
];

/**
 * Pick a random greeting for the given locale.
 * Falls back to English if no match found.
 */
export function getRandomGreeting(locale: "en" | "es"): string {
   const filtered = greetings.filter((g) => g.locale === locale);
   const pool =
      filtered.length > 0
         ? filtered
         : greetings.filter((g) => g.locale === "en");
   const idx = Math.floor(Math.random() * pool.length);
   return pool[idx].text;
}
