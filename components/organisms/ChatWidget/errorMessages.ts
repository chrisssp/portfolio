/**
 * Curated bilingual error messages for chrisssp — the portfolio AI.
 * One message is picked randomly per error occurrence.
 * Minimum 5 entries per locale.
 */

interface ErrorMessage {
   text: string;
   locale: "en" | "es";
}

export const errorMessages: ErrorMessage[] = [
   // English (6)
   {
      text: "I ran into an issue processing that. Could you try asking again in a moment?",
      locale: "en",
   },
   {
      text: "Something hiccuped on my end. Give it another shot — I'm still here.",
      locale: "en",
   },
   {
      text: "Hmm, that didn't go through. Try again? I promise I'm usually more reliable.",
      locale: "en",
   },
   {
      text: "Looks like I hit a snag. Mind trying once more? The API might be temporarily busy.",
      locale: "en",
   },
   {
      text: "I couldn't process that request right now. Wait a minute and try again — I'll be here.",
      locale: "en",
   },
   {
      text: "Technical difficulties! The API seems to be taking a break. Try again shortly.",
      locale: "en",
   },

   // Spanish — Neutral LATAM (6)
   {
      text: "Tuve un problema procesando eso. ¿Podrías intentar de nuevo en un momento?",
      locale: "es",
   },
   {
      text: "Algo falló de mi lado. Vuelve a intentarlo — sigo aquí.",
      locale: "es",
   },
   {
      text: "Hmm, eso no pasó. ¿Lo intentamos de nuevo? Suelo ser más confiable.",
      locale: "es",
   },
   {
      text: "Parece que tuve un problema. ¿Puedes intentarlo una vez más? La API puede estar ocupada.",
      locale: "es",
   },
   {
      text: "No pude procesar esa solicitud ahorita. Espera un minuto e intenta de nuevo — estaré aquí.",
      locale: "es",
   },
   {
      text: "¡Dificultades técnicas! La API parece estar descansando. Intenta de nuevo en un momento.",
      locale: "es",
   },
];

/**
 * Pick a random error message for the given locale.
 * Falls back to English if no match found.
 */
export function getRandomError(locale: "en" | "es"): string {
   const filtered = errorMessages.filter((e) => e.locale === locale);
   const pool =
      filtered.length > 0
         ? filtered
         : errorMessages.filter((e) => e.locale === "en");
   const idx = Math.floor(Math.random() * pool.length);
   return pool[idx].text;
}
