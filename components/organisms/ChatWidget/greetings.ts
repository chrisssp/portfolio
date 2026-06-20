/**
 * Curated bilingual greeting array for Cooper chatbot.
 * One greeting is picked randomly per sessionStorage session.
 * Minimum 5 entries per locale.
 */

interface Greeting {
   text: string;
   locale: "en" | "es";
}

export const greetings: Greeting[] = [
   // English (8)
   {
      text: "Hey there! I'm Cooper, Christian's portfolio assistant. What would you like to know about his work?",
      locale: "en",
   },
   {
      text: "Welcome! I'm Cooper. Ask me anything about Christian's projects, skills, or experience.",
      locale: "en",
   },
   {
      text: "Hi! Curious about Christian's work? I'm here to help you explore his portfolio.",
      locale: "en",
   },
   {
      text: "Hello! I'm Cooper, your guide to Christian Serrano's portfolio. What catches your interest?",
      locale: "en",
   },
   {
      text: "Hey! Need the inside scoop on Christian's projects? You came to the right bot. Ask away!",
      locale: "en",
   },
   {
      text: "Hi there! Cooper at your service. Whether it's code, career, or curiosity — I've got you covered.",
      locale: "en",
   },
   {
      text: "Welcome to Christian's portfolio! I'm Cooper, and I know this site inside out. What do you want to explore?",
      locale: "en",
   },
   {
      text: "Hey! I'm Cooper. Christian built me to answer your questions — try me with projects, tech stacks, or his background.",
      locale: "en",
   },

   // Spanish (8)
   {
      text: "¡Hola! Soy Cooper, el asistente del portafolio de Christian. ¿Qué te gustaría saber?",
      locale: "es",
   },
   {
      text: "¡Bienvenido! Soy Cooper. Pregúntame lo que quieras sobre los proyectos y experiencia de Christian.",
      locale: "es",
   },
   {
      text: "¡Hey! Soy Cooper. ¿Te interesa el trabajo de Christian? Estoy aquí para ayudarte.",
      locale: "es",
   },
   {
      text: "¡Hola! Soy Cooper, tu guía por el portafolio de Christian Serrano. ¿Qué te llama la atención?",
      locale: "es",
   },
   {
      text: "¡Qué onda! Soy Cooper. Pregúntame lo que sea sobre Christian — proyectos, skills, experiencia... lo que se te ocurra.",
      locale: "es",
   },
   {
      text: "¡Buenas! Cooper al habla. ¿Querés saber sobre algún proyecto en particular o prefieres una visita guiada?",
      locale: "es",
   },
   {
      text: "¡Hola! Bienvenido al portafolio de Christian. Soy Cooper, su asistente AI. ¿En qué te puedo ayudar hoy?",
      locale: "es",
   },
   {
      text: "¡Hey! Soy Cooper, el bot que Christian programó para responder tus dudas. Dale, pregúntame sin miedo.",
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
