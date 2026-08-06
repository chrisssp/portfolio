import type {
   DiagramSpec,
   ExcalidrawElement,
   ExcalidrawText,
   Palette,
} from "../engine";
import {
   anchorRect,
   arrow,
   boundText,
   CANVAS_H,
   CANVAS_W,
   createText,
   excalidrawFile,
   rectangle,
   textW,
} from "../engine";

type MatchTexts = {
   photoLabel: string;
   textLabel: string;
   facialSim: string;
   textSim: string;
   formula: string;
   result: string;
   threshold: string;
   match: string;
};

const ES: MatchTexts = {
   photoLabel: "foto",
   textLabel: "texto",
   facialSim: "Sim_facial 85%",
   textSim: "Sim_text 100%",
   formula: "SimTotal =\n(Sim_text × 0.25)\n+ (Sim_facial × 0.75)",
   result: "88.75%",
   threshold: "> 75% umbral",
   match: "MATCH",
};

const EN: MatchTexts = {
   photoLabel: "photo",
   textLabel: "text",
   facialSim: "Sim_facial 85%",
   textSim: "Sim_text 100%",
   formula: "SimTotal =\n(Sim_text × 0.25)\n+ (Sim_facial × 0.75)",
   result: "88.75%",
   threshold: "> 75% threshold",
   match: "MATCH",
};

function buildMatch(t: MatchTexts, p: Palette) {
   const photoX = 60;
   const photoY = 180;
   const boxW = 260;
   const boxH = 120;

   const textX = 60;
   const textY = 350;

   const formulaX = 520;
   const formulaY = 200;
   const formulaW = 380;
   const formulaH = 180;

   const resultX = 1000;
   const resultY = 200;
   const resultW = 320;
   const resultH = 180;

   const photoBox = rectangle(
      photoX,
      photoY,
      boxW,
      boxH,
      p,
      p.leftFill,
      p.leftStroke,
   );
   const textBox = rectangle(
      textX,
      textY,
      boxW,
      boxH,
      p,
      p.gapFill,
      p.gapStroke,
   );
   const formulaBox = rectangle(
      formulaX,
      formulaY,
      formulaW,
      formulaH,
      p,
      p.gapFill,
      p.gapStroke,
   );
   const resultBox = rectangle(
      resultX,
      resultY,
      resultW,
      resultH,
      p,
      p.successFill,
      p.success,
   );

   const photoLabel = boundText(
      t.photoLabel,
      photoBox.id,
      photoX + boxW / 2,
      photoY + boxH / 2 - 28,
      28,
      p.leftNumber,
   );
   const photoSim = createText(
      t.facialSim,
      photoX + (boxW - textW(t.facialSim, 20)) / 2,
      photoY + boxH - 52,
      {
         fontSize: 20,
         fontFamily: 1,
         textAlign: "center",
         verticalAlign: "middle",
         strokeColor: p.leftNumber,
      },
   ) as ExcalidrawText;

   const textLabel = boundText(
      t.textLabel,
      textBox.id,
      textX + boxW / 2,
      textY + boxH / 2 - 28,
      28,
      p.gapStroke,
   );
   const textSim = createText(
      t.textSim,
      textX + (boxW - textW(t.textSim, 20)) / 2,
      textY + boxH - 52,
      {
         fontSize: 20,
         fontFamily: 1,
         textAlign: "center",
         verticalAlign: "middle",
         strokeColor: p.gapStroke,
      },
   ) as ExcalidrawText;

   const formula = boundText(
      t.formula,
      formulaBox.id,
      formulaX + formulaW / 2,
      formulaY + formulaH / 2,
      26,
      p.text,
   );
   const result = boundText(
      t.result,
      resultBox.id,
      resultX + resultW / 2,
      resultY + resultH / 2 - 30,
      52,
      p.success,
   );
   const threshold = createText(
      t.threshold,
      resultX + (resultW - textW(t.threshold, 20)) / 2,
      resultY + resultH - 78,
      {
         fontSize: 20,
         fontFamily: 1,
         textAlign: "center",
         verticalAlign: "middle",
         strokeColor: p.caption,
      },
   ) as ExcalidrawText;
   const matchText = createText(
      t.match,
      resultX + (resultW - textW(t.match, 24)) / 2,
      resultY + resultH - 40,
      {
         fontSize: 24,
         fontFamily: 1,
         textAlign: "center",
         verticalAlign: "middle",
         strokeColor: p.success,
      },
   ) as ExcalidrawText;

   photoBox.boundElements = [{ id: photoLabel.id, type: "text" }];
   textBox.boundElements = [{ id: textLabel.id, type: "text" }];
   formulaBox.boundElements = [{ id: formula.id, type: "text" }];
   resultBox.boundElements = [{ id: result.id, type: "text" }];

   const arrowPhoto = arrow(
      photoX + boxW,
      photoY + boxH / 2,
      formulaX - 4,
      formulaY + formulaH / 2,
      p,
      p.leftStroke,
   );
   const arrowText = arrow(
      textX + boxW,
      textY + boxH / 2,
      formulaX - 4,
      formulaY + formulaH / 2,
      p,
      p.gapStroke,
   );
   const arrowResult = arrow(
      formulaX + formulaW,
      formulaY + formulaH / 2,
      resultX - 4,
      resultY + resultH / 2,
      p,
      p.success,
   );

   const anchor = anchorRect(0, 180, CANVAS_W, CANVAS_H);

   return excalidrawFile([
      anchor,
      photoBox,
      photoLabel,
      photoSim,
      textBox,
      textLabel,
      textSim,
      formulaBox,
      formula,
      resultBox,
      result,
      threshold,
      matchText,
      arrowPhoto,
      arrowText,
      arrowResult,
   ] as ExcalidrawElement[]);
}

export const matchFlow: DiagramSpec = {
   id: "flujo-match-simtotal",
   build: (texts, p) => buildMatch(texts as MatchTexts, p),
   texts: { es: ES, en: EN },
};
