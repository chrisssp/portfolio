import type {
   DiagramSpec,
   ExcalidrawElement,
   ExcalidrawText,
   Palette,
} from "../engine";
import {
   anchorRect,
   CANVAS_W,
   createText,
   ellipse,
   excalidrawFile,
   rectangle,
   textW,
} from "../engine";

type CoverTexts = {
   title: string;
   subtitle: string;
   tagline: string;
};

const ES: CoverTexts = {
   title: "IAPEX",
   subtitle: "La IA que encuentra a los que nadie busca",
   tagline: "¿Quién eres?",
};

const EN: CoverTexts = {
   title: "IAPEX",
   subtitle: "The AI that finds the ones nobody looks for",
   tagline: "Who are you?",
};

const CANVAS_H = 712;

function buildCover(t: CoverTexts, p: Palette) {
   const titleText = createText(
      t.title,
      (CANVAS_W - textW(t.title, 72)) / 2,
      40,
      {
         fontSize: 72,
         fontFamily: 1,
         textAlign: "center",
         verticalAlign: "middle",
         strokeColor: p.text,
      },
   ) as ExcalidrawText;

   const subtitleText = createText(
      t.subtitle,
      (CANVAS_W - textW(t.subtitle, 28)) / 2,
      160,
      {
         fontSize: 28,
         fontFamily: 1,
         textAlign: "center",
         verticalAlign: "middle",
         strokeColor: p.caption,
      },
   ) as ExcalidrawText;

   const lens = ellipse(530, 300, 300, 300, "transparent", p.leftStroke, 4);
   const face = ellipse(605, 360, 150, 170, p.gapFill, p.gapStroke);
   const eyeL = ellipse(648, 420, 14, 18, p.text, p.text);
   const eyeR = ellipse(698, 420, 14, 18, p.text, p.text);

   const handle = rectangle(806, 565, 22, 150, p, p.leftStroke, p.leftStroke);
   handle.angle = -Math.PI / 4;

   const taglineText = createText(
      t.tagline,
      (CANVAS_W - textW(t.tagline, 26)) / 2,
      640,
      {
         fontSize: 26,
         fontFamily: 1,
         textAlign: "center",
         verticalAlign: "middle",
         strokeColor: p.text,
      },
   ) as ExcalidrawText;

   const anchor = anchorRect(0, 0, CANVAS_W, CANVAS_H);

   return excalidrawFile([
      anchor,
      titleText,
      subtitleText,
      lens,
      face,
      eyeL,
      eyeR,
      handle,
      taglineText,
   ] as ExcalidrawElement[]);
}

export const cover: DiagramSpec = {
   id: "portada-iapex",
   build: (texts, p) => buildCover(texts as CoverTexts, p),
   texts: { es: ES, en: EN },
};
