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

type BeforeAfterTexts = {
   antesLabel: string;
   despuesLabel: string;
   beforeItems: [string, string, string, string];
   afterItems: [string, string, string, string];
   beforeCaption: string;
   afterCaption: string;
};

const ES: BeforeAfterTexts = {
   antesLabel: "ANTES",
   despuesLabel: "DESPUÉS",
   beforeItems: [
      "GitHub Copilot",
      "Modelo único para todo",
      "Sin memoria",
      "Tokens volando",
   ],
   afterItems: [
      "Gentle AI + OpenCode",
      "Model routing",
      "Engram (memoria)",
      "SDD (fases)",
   ],
   beforeCaption: "Sin rumbo",
   afterCaption: "Orquestador",
};

const EN: BeforeAfterTexts = {
   antesLabel: "BEFORE",
   despuesLabel: "AFTER",
   beforeItems: [
      "GitHub Copilot",
      "Single model for everything",
      "No memory",
      "Tokens flying",
   ],
   afterItems: [
      "Gentle AI + OpenCode",
      "Model routing",
      "Engram (memory)",
      "SDD (phases)",
   ],
   beforeCaption: "Aimless",
   afterCaption: "Orchestrator",
};

const CANVAS_H = 620;

function buildBeforeAfter(t: BeforeAfterTexts, p: Palette) {
   const colW = 520;
   const colH = 440;
   const colY = 100;
   const leftX = 60;
   const rightX = 780;
   const sepX = 680;

   const itemW = 440;
   const itemH = 68;
   const itemGap = 24;
   const itemX = leftX + (colW - itemW) / 2;
   const itemStartY = colY + 48;

   const outerLeft = rectangle(
      leftX,
      colY,
      colW,
      colH,
      p,
      p.beforeFill,
      p.beforeStroke,
   );
   const outerRight = rectangle(
      rightX,
      colY,
      colW,
      colH,
      p,
      p.afterFill,
      p.afterStroke,
   );

   const antesText = createText(
      t.antesLabel,
      leftX + (colW - textW(t.antesLabel, 36)) / 2,
      colY - 50,
      {
         fontSize: 36,
         fontFamily: 1,
         textAlign: "center",
         verticalAlign: "middle",
         strokeColor: p.beforeText,
      },
   ) as ExcalidrawText;

   const despuesText = createText(
      t.despuesLabel,
      rightX + (colW - textW(t.despuesLabel, 36)) / 2,
      colY - 50,
      {
         fontSize: 36,
         fontFamily: 1,
         textAlign: "center",
         verticalAlign: "middle",
         strokeColor: p.afterText,
      },
   ) as ExcalidrawText;

   const beforeBoxes: ExcalidrawRectangle[] = [];
   const beforeLabels: ExcalidrawText[] = [];
   const afterBoxes: ExcalidrawRectangle[] = [];
   const afterLabels: ExcalidrawText[] = [];
   const beforeArrows: ExcalidrawArrow[] = [];
   const afterArrows: ExcalidrawArrow[] = [];

   for (let i = 0; i < 4; i++) {
      const by = itemStartY + i * (itemH + itemGap);
      const bb = rectangle(
         itemX,
         by,
         itemW,
         itemH,
         p,
         p.beforeItemFill,
         p.beforeItemStroke,
      );
      const bl = boundText(
         t.beforeItems[i],
         bb.id,
         itemX + itemW / 2,
         by + itemH / 2,
         22,
         p.beforeText,
      );
      bb.boundElements = [{ id: bl.id, type: "text" }];
      beforeBoxes.push(bb);
      beforeLabels.push(bl);

      const ay = itemStartY + i * (itemH + itemGap);
      const ab = rectangle(
         rightX + (colW - itemW) / 2,
         ay,
         itemW,
         itemH,
         p,
         p.afterItemFill,
         p.afterItemStroke,
      );
      const al = boundText(
         t.afterItems[i],
         ab.id,
         rightX + colW / 2,
         ay + itemH / 2,
         22,
         p.afterText,
      );
      ab.boundElements = [{ id: al.id, type: "text" }];
      afterBoxes.push(ab);
      afterLabels.push(al);

      if (i < 3) {
         const arrowBY = by + itemH;
         const arrowAY = ay + itemH;
         beforeArrows.push(
            arrow(
               itemX + itemW / 2,
               arrowBY + 4,
               itemX + itemW / 2,
               arrowBY + itemGap - 4,
               p,
               p.beforeItemStroke,
            ),
         );
         afterArrows.push(
            arrow(
               rightX + colW / 2,
               arrowAY + 4,
               rightX + colW / 2,
               arrowAY + itemGap - 4,
               p,
               p.afterItemStroke,
            ),
         );
      }
   }

   const beforeCaptionText = createText(
      t.beforeCaption,
      leftX + (colW - textW(t.beforeCaption, 28)) / 2,
      colY + colH + 20,
      {
         fontSize: 28,
         fontFamily: 1,
         textAlign: "center",
         verticalAlign: "middle",
         strokeColor: p.beforeText,
      },
   ) as ExcalidrawText;

   const afterCaptionText = createText(
      t.afterCaption,
      rightX + (colW - textW(t.afterCaption, 28)) / 2,
      colY + colH + 20,
      {
         fontSize: 28,
         fontFamily: 1,
         textAlign: "center",
         verticalAlign: "middle",
         strokeColor: p.afterText,
      },
   ) as ExcalidrawText;

   const separator = dashedLine(
      sepX,
      colY - 10,
      sepX,
      colY + colH + 10,
      p.caption,
   );

   const anchor = anchorRect(0, 0, CANVAS_W, CANVAS_H);

   return excalidrawFile([
      anchor,
      outerLeft,
      outerRight,
      antesText,
      despuesText,
      ...beforeBoxes,
      ...beforeLabels,
      ...afterBoxes,
      ...afterLabels,
      ...beforeArrows,
      ...afterArrows,
      beforeCaptionText,
      afterCaptionText,
      separator,
   ] as ExcalidrawElement[]);
}

export const beforeAfter: DiagramSpec = {
   id: "antes-vs-despues",
   build: (texts, p) => buildBeforeAfter(texts as BeforeAfterTexts, p),
   texts: { es: ES, en: EN },
};
