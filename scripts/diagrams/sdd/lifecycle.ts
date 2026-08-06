import type {
   DiagramSpec,
   ExcalidrawArrow,
   ExcalidrawElement,
   ExcalidrawRectangle,
   ExcalidrawText,
   Palette,
} from "../engine";
import {
   anchorRect,
   arrow,
   boundText,
   CANVAS_W,
   createText,
   dashedLine,
   excalidrawFile,
   rectangle,
   textW,
} from "../engine";

type LifecycleTexts = {
   title: string;
   subtitle: string;
   phases: [string, string, string, string];
   phaseDetails: [string, string, string, string];
   guardrailsLabel: string;
};

const ES: LifecycleTexts = {
   title: "Ciclo de vida: Spec-Driven Development (SDD)",
   subtitle: "La unica fuente de verdad para humanos y agentes de IA",
   phases: ["SPEC", "SIMULAR", "IMPLEMENTAR", "VALIDAR"],
   phaseDetails: [
      "SPEC.md /\nOpenAPI",
      "Mocks y\ntipos",
      "Lógica\ncon IA",
      "Pruebas\ny control",
   ],
   guardrailsLabel: "Guardrails / Reglas del juego",
};

const EN: LifecycleTexts = {
   title: "Lifecycle: Spec-Driven Development (SDD)",
   subtitle: "The single source of truth for humans and AI agents",
   phases: ["SPEC", "SIMULATE", "IMPLEMENT", "VALIDATE"],
   phaseDetails: [
      "SPEC.md /\nOpenAPI",
      "Mocks &\ntypes",
      "Logic\nwith AI",
      "Tests &\ncontrol",
   ],
   guardrailsLabel: "Guardrails / Rules of the game",
};

const CANVAS_H = 420;

function buildLifecycle(t: LifecycleTexts, p: Palette) {
   const boxW = 280;
   const boxH = 160;
   const boxY = 190;
   const gap = 50;
   const startX = (CANVAS_W - 4 * boxW - 3 * gap) / 2;

   const phaseStrokes = [
      p.phase1Stroke,
      p.phase2Stroke,
      p.phase3Stroke,
      p.phase4Stroke,
   ];
   const phaseFills = [p.phase1Fill, p.phase2Fill, p.phase3Fill, p.phase4Fill];

   const titleText = createText(
      t.title,
      (CANVAS_W - textW(t.title, 38)) / 2,
      30,
      {
         fontSize: 38,
         fontFamily: 1,
         textAlign: "center",
         verticalAlign: "middle",
         strokeColor: p.text,
      },
   ) as ExcalidrawText;

   const subtitleText = createText(
      t.subtitle,
      (CANVAS_W - textW(t.subtitle, 22)) / 2,
      85,
      {
         fontSize: 22,
         fontFamily: 1,
         textAlign: "center",
         verticalAlign: "middle",
         strokeColor: p.caption,
      },
   ) as ExcalidrawText;

   const boxes: ExcalidrawRectangle[] = [];
   const labels: ExcalidrawText[] = [];
   const details: ExcalidrawText[] = [];
   const arrows: ExcalidrawArrow[] = [];

   for (let i = 0; i < 4; i++) {
      const bx = startX + i * (boxW + gap);
      const box = rectangle(
         bx,
         boxY,
         boxW,
         boxH,
         p,
         phaseFills[i],
         phaseStrokes[i],
      );
      const label = boundText(
         t.phases[i],
         box.id,
         bx + boxW / 2,
         boxY + boxH / 2 - 30,
         26,
         p.text,
      );
      box.boundElements = [{ id: label.id, type: "text" }];

      const detail = createText(
         t.phaseDetails[i],
         bx + (boxW - textW(t.phaseDetails[i], 20)) / 2,
         boxY + boxH / 2 + 10,
         {
            fontSize: 20,
            fontFamily: 1,
            textAlign: "center",
            verticalAlign: "middle",
            strokeColor: p.caption,
         },
      ) as ExcalidrawText;

      boxes.push(box);
      labels.push(label);
      details.push(detail);

      if (i < 3) {
         arrows.push(
            arrow(
               bx + boxW + 4,
               boxY + boxH / 2,
               bx + boxW + gap - 4,
               boxY + boxH / 2,
               p,
               p.stroke,
            ),
         );
      }
   }

   const implBox = boxes[2];
   const guardY1 = implBox.y - 30;
   const guardY2 = implBox.y + boxH + 30;
   const guardX1 = implBox.x - 15;
   const guardX2 = implBox.x + boxW + 15;

   const guardTop = dashedLine(
      guardX1,
      guardY1,
      guardX2,
      guardY1,
      p.guardrails,
   );
   const guardBottom = dashedLine(
      guardX1,
      guardY2,
      guardX2,
      guardY2,
      p.guardrails,
   );

   const guardLabel = createText(
      t.guardrailsLabel,
      guardX1 + (boxW + 30 - textW(t.guardrailsLabel, 18)) / 2,
      guardY1 - 28,
      {
         fontSize: 18,
         fontFamily: 1,
         textAlign: "center",
         verticalAlign: "middle",
         strokeColor: p.guardrails,
      },
   ) as ExcalidrawText;

   const anchor = anchorRect(0, 0, CANVAS_W, CANVAS_H);

   return excalidrawFile([
      anchor,
      titleText,
      subtitleText,
      ...boxes,
      ...labels,
      ...details,
      ...arrows,
      guardTop,
      guardBottom,
      guardLabel,
   ] as ExcalidrawElement[]);
}

export const lifecycle: DiagramSpec = {
   id: "ciclo-sdd",
   build: (texts, p) => buildLifecycle(texts as LifecycleTexts, p),
   texts: { es: ES, en: EN },
};
