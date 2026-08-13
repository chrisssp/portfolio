import type {
   DiagramSpec,
   ExcalidrawArrow,
   ExcalidrawElement,
   ExcalidrawText,
   Palette,
} from "../engine";
import {
   anchorRect,
   boundText,
   CANVAS_W,
   createText,
   dashedLine,
   ellipse,
   excalidrawFile,
   rectangle,
   textW,
} from "../engine";

type MatchCoverTexts = {
   title: string;
   subtitle: string;
   question: string;
   family: string;
   match: string;
   matchValue: string;
   tagline: string;
};

const ES: MatchCoverTexts = {
   title: "IAPEX",
   subtitle: "La IA que te ayuda a encontrar a tu ser querido desaparecido",
   question: "¿Quién es?",
   family: "Su familia",
   match: "MATCH",
   matchValue: "88.75%",
   tagline: "Encuéntrame",
};

const EN: MatchCoverTexts = {
   title: "IAPEX",
   subtitle: "The AI that helps you find your missing loved one",
   question: "Who is this?",
   family: "Their family",
   match: "MATCH",
   matchValue: "88.75%",
   tagline: "Encuéntrame",
};

const CANVAS_H = 712;

function buildCoverMatch(t: MatchCoverTexts, p: Palette) {
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

   const faceLeft = ellipse(150, 300, 240, 280, p.gapFill, p.gapStroke);
   const eyeLL = ellipse(215, 415, 16, 20, p.text, p.text);
   const eyeLR = ellipse(295, 415, 16, 20, p.text, p.text);
   const mouthLeft = rectangle(230, 478, 80, 10, p, p.text, p.text);

   const questionText = createText(
      t.question,
      270 - textW(t.question, 30) / 2,
      615,
      {
         fontSize: 30,
         fontFamily: 1,
         textAlign: "center",
         verticalAlign: "middle",
         strokeColor: p.gapStroke,
      },
   ) as ExcalidrawText;

   const faceRight = ellipse(970, 300, 240, 280, p.successFill, p.success);
   const eyeRL = ellipse(1035, 415, 16, 20, p.text, p.text);
   const eyeRR = ellipse(1115, 415, 16, 20, p.text, p.text);
   const smile = rectangle(1055, 480, 70, 10, p, p.text, p.text);

   const familyText = createText(
      t.family,
      1090 - textW(t.family, 30) / 2,
      615,
      {
         fontSize: 30,
         fontFamily: 1,
         textAlign: "center",
         verticalAlign: "middle",
         strokeColor: p.success,
      },
   ) as ExcalidrawText;

   const beam = dashedLine(410, 440, 950, 440, p.stroke) as ExcalidrawArrow;

   const stamp = rectangle(560, 380, 260, 110, p, p.successFill, p.success);
   stamp.strokeWidth = 3;
   stamp.angle = -Math.PI / 18;

   const stampText = boundText(t.match, stamp.id, 690, 425, 36, p.success);
   stampText.angle = -Math.PI / 18;
   stamp.boundElements = [{ id: stampText.id, type: "text" }];

   const matchValue = createText(
      t.matchValue,
      690 - textW(t.matchValue, 24) / 2,
      460,
      {
         fontSize: 24,
         fontFamily: 1,
         textAlign: "center",
         verticalAlign: "middle",
         strokeColor: p.caption,
      },
   ) as ExcalidrawText;

   const taglineText = createText(
      t.tagline,
      (CANVAS_W - textW(t.tagline, 26)) / 2,
      660,
      {
         fontSize: 26,
         fontFamily: 1,
         textAlign: "center",
         verticalAlign: "middle",
         strokeColor: p.caption,
      },
   ) as ExcalidrawText;

   const anchor = anchorRect(0, 0, CANVAS_W, CANVAS_H);

   return excalidrawFile([
      anchor,
      titleText,
      subtitleText,
      faceLeft,
      eyeLL,
      eyeLR,
      mouthLeft,
      questionText,
      faceRight,
      eyeRL,
      eyeRR,
      smile,
      familyText,
      beam,
      stamp,
      stampText,
      matchValue,
      taglineText,
   ] as ExcalidrawElement[]);
}

export const coverMatch: DiagramSpec = {
   id: "portada-iapex-match",
   build: (texts, p) => buildCoverMatch(texts as MatchCoverTexts, p),
   texts: { es: ES, en: EN },
};
