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
   CANVAS_W,
   createText,
   excalidrawFile,
   gapShape,
   rectangle,
   textW,
} from "../engine";

type ComparisonTexts = {
   leftNumber: string;
   leftCaption: string;
   rightNumber: string;
   rightCaption: string;
   gapLabel: string;
};

const ES: ComparisonTexts = {
   leftNumber: "133,000",
   leftCaption: "personas desaparecidas\ny no localizadas\nRNPDNO · 2025",
   rightNumber: "72,000",
   rightCaption: "cuerpos sin identificar\nen morgues\nINEGI · 2019–2023",
   gapLabel: "los que están vivos\ny nadie busca",
};

const EN: ComparisonTexts = {
   leftNumber: "133,000",
   leftCaption: "missing and\nunlocated people\nRNPDNO · 2025",
   rightNumber: "72,000",
   rightCaption: "unidentified bodies\nin morgues\nINEGI · 2019–2023",
   gapLabel: "the ones alive\nnobody is looking for",
};

function buildComparison(t: ComparisonTexts, p: Palette) {
   const leftX = 80;
   const leftY = 220;
   const leftW = 340;
   const leftH = 300;

   const gapX = 550;
   const gapY = 230;
   const gapW = 300;
   const gapH = 280;

   const rightX = 980;
   const rightY = 220;
   const rightW = 340;
   const rightH = 300;

   const leftBox = rectangle(
      leftX,
      leftY,
      leftW,
      leftH,
      p,
      p.leftFill,
      p.leftStroke,
   );
   const rightBox = rectangle(
      rightX,
      rightY,
      rightW,
      rightH,
      p,
      p.rightFill,
      p.rightStroke,
   );
   const middleGap = gapShape(gapX, gapY, gapW, gapH, p);

   const leftNumber = boundText(
      t.leftNumber,
      leftBox.id,
      leftX + leftW / 2,
      leftY + leftH / 2 - 45,
      64,
      p.leftNumber,
   );
   const rightNumber = boundText(
      t.rightNumber,
      rightBox.id,
      rightX + rightW / 2,
      rightY + rightH / 2 - 45,
      64,
      p.rightNumber,
   );
   const gapLabel = boundText(
      t.gapLabel,
      middleGap.id,
      gapX + gapW / 2,
      gapY + gapH / 2,
      28,
      p.text,
   );

   leftBox.boundElements = [{ id: leftNumber.id, type: "text" }];
   rightBox.boundElements = [{ id: rightNumber.id, type: "text" }];
   middleGap.boundElements = [{ id: gapLabel.id, type: "text" }];

   const captionFont = 26;

   const leftCaption = createText(
      t.leftCaption,
      leftX + (leftW - textW(t.leftCaption, captionFont)) / 2,
      leftY + leftH - 118,
      {
         fontSize: captionFont,
         fontFamily: 1,
         textAlign: "center",
         verticalAlign: "middle",
         strokeColor: p.caption,
      },
   ) as ExcalidrawText;

   const rightCaption = createText(
      t.rightCaption,
      rightX + (rightW - textW(t.rightCaption, captionFont)) / 2,
      rightY + rightH - 118,
      {
         fontSize: captionFont,
         fontFamily: 1,
         textAlign: "center",
         verticalAlign: "middle",
         strokeColor: p.caption,
      },
   ) as ExcalidrawText;

   const arrowL = arrow(
      leftX + leftW,
      leftY + leftH / 2,
      gapX - 4,
      gapY + gapH / 2,
      p,
      p.leftStroke,
   );
   const arrowR = arrow(
      rightX,
      rightY + rightH / 2,
      gapX + gapW + 4,
      gapY + gapH / 2,
      p,
      p.rightStroke,
   );

   const anchor = anchorRect(0, leftY, CANVAS_W, leftH);

   return excalidrawFile([
      anchor,
      leftBox,
      leftNumber,
      leftCaption,
      middleGap,
      gapLabel,
      rightBox,
      rightNumber,
      rightCaption,
      arrowL,
      arrowR,
   ] as ExcalidrawElement[]);
}

export const comparison: DiagramSpec = {
   id: "desaparecidos-vs-cuerpos",
   build: (texts, p) => buildComparison(texts as ComparisonTexts, p),
   texts: { es: ES, en: EN },
};
