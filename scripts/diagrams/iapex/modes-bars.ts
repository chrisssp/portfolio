import type {
   DiagramSpec,
   ExcalidrawElement,
   ExcalidrawText,
   Palette,
} from "../engine";
import {
   anchorRect,
   arrow,
   CANVAS_W,
   createText,
   excalidrawFile,
   rectangle,
   textW,
} from "../engine";

type BarTexts = {
   metrics: [string, string, string];
   modes: [string, string, string];
   values: [string[], string[], string[]];
};

const ES: BarTexts = {
   metrics: ["Sensibilidad", "Efectividad", "Precisión"],
   modes: ["Texto", "Imagen", "Híbrido"],
   values: [
      ["100%", "96.8%", "9.2%"],
      ["100%", "100%", "100%"],
      ["100%", "100%", "100%"],
   ],
};

const EN: BarTexts = {
   metrics: ["Sensitivity", "Effectiveness", "Precision"],
   modes: ["Text", "Image", "Hybrid"],
   values: [
      ["100%", "96.8%", "9.2%"],
      ["100%", "100%", "100%"],
      ["100%", "100%", "100%"],
   ],
};

function buildBars(t: BarTexts, p: Palette) {
   const chartLeft = 60;
   const chartRight = 1300;
   const baselineY = 450;
   const maxBarH = 280;
   const groupW = (chartRight - chartLeft) / 3;
   const barW = 56;
   const barGap = 30;

   const groups = t.modes.map((mode, gi) => {
      const gx =
         chartLeft + gi * groupW + (groupW - (3 * barW + 2 * barGap)) / 2;
      return { mode, gx, centerY: baselineY };
   });

   const metricColors = [p.success, p.leftStroke, p.warn];
   const metricFills = [p.successFill, p.leftFill, p.rightFill];

   const legendY = 60;
   const legendGap = 30;

   const elements: ExcalidrawElement[] = [];

   t.metrics.forEach((metric, mi) => {
      const swatch = rectangle(
         chartLeft + legendGap + mi * 300,
         legendY,
         18,
         18,
         p,
         metricFills[mi],
         metricColors[mi],
      );
      const label = createText(
         metric,
         chartLeft + legendGap + mi * 300 + 26,
         legendY,
         {
            fontSize: 20,
            fontFamily: 1,
            textAlign: "left",
            verticalAlign: "middle",
            strokeColor: p.caption,
         },
      ) as ExcalidrawText;
      elements.push(swatch, label);
   });

   groups.forEach((group, gi) => {
      const values = t.values[gi];
      values.forEach((val, vi) => {
         const v = parseFloat(val);
         const barH = (v / 100) * maxBarH;
         const bx = group.gx + vi * (barW + barGap);
         const by = baselineY - barH;
         const bar = rectangle(
            bx,
            by,
            barW,
            barH,
            p,
            metricFills[vi],
            metricColors[vi],
         );
         const label = createText(
            val,
            bx + (barW - textW(val, 20)) / 2,
            by - 30,
            {
               fontSize: 20,
               fontFamily: 1,
               textAlign: "center",
               verticalAlign: "middle",
               strokeColor: metricColors[vi],
            },
         ) as ExcalidrawText;
         elements.push(bar, label);
      });

      const modeLabel = createText(
         group.mode,
         group.gx + (3 * barW + 2 * barGap) / 2 - textW(group.mode, 24) / 2,
         baselineY + 12,
         {
            fontSize: 24,
            fontFamily: 1,
            textAlign: "center",
            verticalAlign: "middle",
            strokeColor: p.text,
         },
      ) as ExcalidrawText;
      elements.push(modeLabel);
   });

   const baseline = arrow(
      chartLeft,
      baselineY,
      chartRight,
      baselineY,
      p,
      p.stroke,
   );

   const anchor = anchorRect(0, 60, CANVAS_W, 440);

   return excalidrawFile([
      anchor,
      ...elements,
      baseline,
   ] as ExcalidrawElement[]);
}

export const modesBars: DiagramSpec = {
   id: "barras-modos-busqueda",
   build: (texts, p) => buildBars(texts as BarTexts, p),
   texts: { es: ES, en: EN },
};
