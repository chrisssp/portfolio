import type { MusicDict } from "../types";

export const music: Record<"en" | "es", MusicDict> = {
   en: {
      playAmbient: "Play ambient music",
      pauseAmbient: "Pause ambient music",
   },
   es: {
      playAmbient: "Reproducir música ambiental",
      pauseAmbient: "Pausar música ambiental",
   },
};
