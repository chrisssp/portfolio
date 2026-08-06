import { mkdirSync, writeFileSync } from "node:fs";
import path from "node:path";
import type {
   ExcalidrawArrow,
   ExcalidrawElement,
   ExcalidrawEllipse,
   ExcalidrawFile,
   ExcalidrawRectangle,
   ExcalidrawText,
} from "@swiftlysingh/excalidraw-cli";
import { convertToPNG } from "@swiftlysingh/excalidraw-cli";
import sharp from "sharp";

export type {
   ExcalidrawArrow,
   ExcalidrawElement,
   ExcalidrawEllipse,
   ExcalidrawFile,
   ExcalidrawRectangle,
   ExcalidrawText,
} from "@swiftlysingh/excalidraw-cli";
export { createText } from "@swiftlysingh/excalidraw-cli";

export type Palette = {
   stroke: string;
   text: string;
   caption: string;
   leftStroke: string;
   leftFill: string;
   leftNumber: string;
   rightStroke: string;
   rightFill: string;
   rightNumber: string;
   gapStroke: string;
   gapFill: string;
   success: string;
   successFill: string;
   warn: string;
   beforeStroke: string;
   beforeFill: string;
   beforeText: string;
   beforeItemStroke: string;
   beforeItemFill: string;
   afterStroke: string;
   afterFill: string;
   afterText: string;
   afterItemStroke: string;
   afterItemFill: string;
   phase1Stroke: string;
   phase1Fill: string;
   phase2Stroke: string;
   phase2Fill: string;
   phase3Stroke: string;
   phase3Fill: string;
   phase4Stroke: string;
   phase4Fill: string;
   guardrails: string;
   paper: string;
};

export const LIGHT: Palette = {
   stroke: "#1e293b",
   text: "#0f172a",
   caption: "#334155",
   leftStroke: "#1d4ed8",
   leftFill: "#dbeafe",
   leftNumber: "#1d4ed8",
   rightStroke: "#b91c1c",
   rightFill: "#fee2e2",
   rightNumber: "#b91c1c",
   gapStroke: "#475569",
   gapFill: "#e2e8f0",
   success: "#16a34a",
   successFill: "#dcfce7",
   warn: "#dc2626",
   beforeStroke: "#dc2626",
   beforeFill: "#fef2f2",
   beforeText: "#dc2626",
   beforeItemStroke: "#dc2626",
   beforeItemFill: "#ffffff",
   afterStroke: "#16a34a",
   afterFill: "#f0fdf4",
   afterText: "#16a34a",
   afterItemStroke: "#16a34a",
   afterItemFill: "#ffffff",
   phase1Stroke: "#1e3a5f",
   phase1Fill: "#dbeafe",
   phase2Stroke: "#92400e",
   phase2Fill: "#fef3c7",
   phase3Stroke: "#7c3aed",
   phase3Fill: "#ede9fe",
   phase4Stroke: "#16a34a",
   phase4Fill: "#dcfce7",
   guardrails: "#dc2626",
   paper: "#ffffff",
};

export const DARK: Palette = {
   stroke: "#e2e8f0",
   text: "#f1f5f9",
   caption: "#cbd5e1",
   leftStroke: "#60a5fa",
   leftFill: "#1e3a5f",
   leftNumber: "#93c5fd",
   rightStroke: "#f87171",
   rightFill: "#4a1f1f",
   rightNumber: "#fca5a5",
   gapStroke: "#94a3b8",
   gapFill: "#293241",
   success: "#4ade80",
   successFill: "#14532d",
   warn: "#f87171",
   beforeStroke: "#f87171",
   beforeFill: "#4a1f1f",
   beforeText: "#fca5a5",
   beforeItemStroke: "#f87171",
   beforeItemFill: "#3b1212",
   afterStroke: "#4ade80",
   afterFill: "#14532d",
   afterText: "#4ade80",
   afterItemStroke: "#4ade80",
   afterItemFill: "#0c2e15",
   phase1Stroke: "#60a5fa",
   phase1Fill: "#1e3a5f",
   phase2Stroke: "#fbbf24",
   phase2Fill: "#78350f",
   phase3Stroke: "#a78bfa",
   phase3Fill: "#3b0764",
   phase4Stroke: "#4ade80",
   phase4Fill: "#14532d",
   guardrails: "#f87171",
   paper: "#1e293b",
};

export const CANVAS_W = 1360;
export const CANVAS_H = 300;

export const textW = (txt: string, fontSize: number) =>
   Math.max(...txt.split("\n").map((l) => l.length)) * fontSize * 0.6;

let version = 1;
let nonce = 1;

export function resetCounters() {
   version = 1;
   nonce = 1;
}

function base(
   type: string,
   x: number,
   y: number,
   width: number,
   height: number,
   over: Partial<Record<string, unknown>>,
) {
   return {
      id: `el-${version++}`,
      type,
      x,
      y,
      width,
      height,
      angle: 0,
      strokeColor: "#1e293b",
      backgroundColor: "transparent",
      fillStyle: "solid",
      strokeWidth: 2,
      strokeStyle: "solid",
      roughness: 1,
      opacity: 100,
      groupIds: [],
      frameId: null,
      index: `a${version}`,
      roundness: null,
      seed: version * 7919,
      version,
      versionNonce: nonce++,
      isDeleted: false,
      boundElements: null,
      updated: version,
      link: null,
      locked: false,
      ...over,
   };
}

export function rectangle(
   x: number,
   y: number,
   w: number,
   h: number,
   p: Palette,
   fill: string,
   stroke: string,
): ExcalidrawRectangle {
   return base("rectangle", x, y, w, h, {
      strokeColor: stroke,
      backgroundColor: fill,
      fillStyle: "solid",
      strokeWidth: 2,
      roughness: 1,
      roundness: { type: 2 },
   }) as unknown as ExcalidrawRectangle;
}

export function boundText(
   text: string,
   containerId: string,
   centerX: number,
   centerY: number,
   fontSize: number,
   color: string,
): ExcalidrawText {
   const lines = text.split("\n");
   const width = Math.max(...lines.map((l) => l.length)) * fontSize * 0.6;
   const height = lines.length * fontSize * 1.25;
   return base(
      "text",
      centerX - width / 2,
      centerY - height / 2,
      width,
      height,
      {
         text,
         originalText: text,
         fontSize,
         fontFamily: 1,
         textAlign: "center",
         verticalAlign: "middle",
         containerId,
         autoResize: true,
         lineHeight: 1.25,
         strokeColor: color,
      },
   ) as unknown as ExcalidrawText;
}

export function ellipse(
   x: number,
   y: number,
   w: number,
   h: number,
   fill: string,
   stroke: string,
   strokeWidth = 2,
): ExcalidrawEllipse {
   return base("ellipse", x, y, w, h, {
      strokeColor: stroke,
      backgroundColor: fill,
      fillStyle: "solid",
      strokeWidth,
      roughness: 1,
   }) as unknown as ExcalidrawEllipse;
}

export function gapShape(
   x: number,
   y: number,
   w: number,
   h: number,
   p: Palette,
): ExcalidrawEllipse {
   return base("ellipse", x, y, w, h, {
      strokeColor: p.gapStroke,
      backgroundColor: p.gapFill,
      fillStyle: "cross-hatch",
      strokeWidth: 2,
      roughness: 2,
   }) as unknown as ExcalidrawEllipse;
}

export function arrow(
   x1: number,
   y1: number,
   x2: number,
   y2: number,
   p: Palette,
   color: string,
): ExcalidrawArrow {
   return base("arrow", x1, y1, x2 - x1, y2 - y1, {
      strokeColor: color,
      strokeWidth: 2,
      roughness: 1,
      points: [
         [0, 0],
         [x2 - x1, y2 - y1],
      ],
      lastCommittedPoint: [x2 - x1, y2 - y1],
      startBinding: null,
      endBinding: null,
      startArrowhead: null,
      endArrowhead: "arrow",
      elbowed: false,
   }) as unknown as ExcalidrawArrow;
}

export function anchorRect(
   x: number,
   y: number,
   w: number,
   h: number,
): ExcalidrawRectangle {
   return base("rectangle", x, y, w, h, {
      strokeColor: "transparent",
      backgroundColor: "transparent",
      fillStyle: "solid",
      opacity: 0,
      strokeWidth: 1,
   }) as unknown as ExcalidrawRectangle;
}

export function dashedLine(
   x1: number,
   y1: number,
   x2: number,
   y2: number,
   color: string,
): ExcalidrawArrow {
   return base("arrow", x1, y1, x2 - x1, y2 - y1, {
      strokeColor: color,
      strokeWidth: 2,
      strokeStyle: "dashed",
      roughness: 1,
      points: [
         [0, 0],
         [x2 - x1, y2 - y1],
      ],
      lastCommittedPoint: [x2 - x1, y2 - y1],
      startBinding: null,
      endBinding: null,
      startArrowhead: null,
      endArrowhead: null,
      elbowed: false,
   }) as unknown as ExcalidrawArrow;
}

export function excalidrawFile(elements: ExcalidrawElement[]): ExcalidrawFile {
   return {
      type: "excalidraw",
      version: 2,
      source: "https://excalidraw.com",
      elements,
      appState: {
         gridSize: 0,
         viewBackgroundColor: "#ffffff",
         gridStep: 20,
         gridModeEnabled: false,
         lockedMultiSelections: {},
      },
      files: {},
   };
}

export type DiagramSpec = {
   id: string;
   build: (texts: unknown, palette: Palette) => ExcalidrawFile;
   texts: { es: unknown; en: unknown };
};

const PNG_OPTIONS = {
   scale: 3,
   exportBackground: false,
   dark: false,
   padding: 20,
} as const;

export async function renderDiagram(spec: DiagramSpec, outDir: string) {
   const variants: Array<{
      lang: string;
      theme: string;
      texts: unknown;
      palette: Palette;
   }> = [
      { lang: "es", theme: "light", texts: spec.texts.es, palette: LIGHT },
      { lang: "es", theme: "dark", texts: spec.texts.es, palette: DARK },
      { lang: "en", theme: "light", texts: spec.texts.en, palette: LIGHT },
      { lang: "en", theme: "dark", texts: spec.texts.en, palette: DARK },
   ];

   const diagramDir = path.join(outDir, spec.id);
   mkdirSync(diagramDir, { recursive: true });

   for (const v of variants) {
      resetCounters();
      const file = spec.build(v.texts, v.palette);
      const png = await convertToPNG(file, PNG_OPTIONS);
      const filename = `${v.lang}-${v.theme}.png`;
      writeFileSync(path.join(diagramDir, filename), png);
      console.log(`✓ ${spec.id}/${filename} (${png.length} bytes)`);
   }
}

export async function renderPost(
   postSlug: string,
   specs: DiagramSpec[],
   outRoot: string,
) {
   const outDir = path.join(outRoot, postSlug);
   mkdirSync(outDir, { recursive: true });
   for (const spec of specs) {
      await renderDiagram(spec, outDir);
   }
}

const OG_BG = { light: "#f5f7fa", dark: "#171c28" } as const;
const OG_SIZE = { width: 1200, height: 630 } as const;

export async function renderOgCover(
   spec: DiagramSpec,
   postSlug: string,
   outRoot: string,
) {
   const srcDir = path.join(outRoot, postSlug, spec.id);
   const ogDir = path.join(outRoot, postSlug, "og");
   mkdirSync(ogDir, { recursive: true });

   const variants: Array<{ lang: string; theme: keyof typeof OG_BG }> = [
      { lang: "es", theme: "light" },
      { lang: "es", theme: "dark" },
      { lang: "en", theme: "light" },
      { lang: "en", theme: "dark" },
   ];

   for (const v of variants) {
      const src = path.join(srcDir, `${v.lang}-${v.theme}.png`);
      const bg = OG_BG[v.theme];
      const png = await sharp(src)
         .flatten({ background: bg })
         .resize(OG_SIZE.width, OG_SIZE.height, {
            fit: "contain",
            background: bg,
         })
         .png()
         .toBuffer();
      const filename = `${v.lang}-${v.theme}.png`;
      writeFileSync(path.join(ogDir, filename), png);
      console.log(`✓ og/${filename} (${png.length} bytes)`);
   }
}
