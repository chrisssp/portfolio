import type {
   DiagramSpec,
   ExcalidrawElement,
   ExcalidrawText,
   Palette,
} from "../engine";
import {
   anchorRect,
   boundText,
   CANVAS_W,
   createText,
   excalidrawFile,
   rectangle,
   textW,
} from "../engine";

type FichaTexts = {
   patientLabel: string;
   fieldName: string;
   fieldAge: string;
   fieldAdmission: string;
   noPhoto: string;
   unidentified: string;
   tagline: string;
};

const ES: FichaTexts = {
   patientLabel: "Paciente N-0412",
   fieldName: "Nombre",
   fieldAge: "Edad",
   fieldAdmission: "Ingreso",
   noPhoto: "SIN FOTO",
   unidentified: "NO IDENTIFICADO",
   tagline: "Encuéntrame",
};

const EN: FichaTexts = {
   patientLabel: "Patient No. N-0412",
   fieldName: "Name",
   fieldAge: "Age",
   fieldAdmission: "Admitted",
   noPhoto: "NO PHOTO",
   unidentified: "UNIDENTIFIED",
   tagline: "Encuéntrame",
};

const CANVAS_H = 712;

function buildCoverFicha(t: FichaTexts, p: Palette) {
   const card = rectangle(130, 80, 1100, 560, p, p.paper, p.stroke);
   card.strokeWidth = 2;

   const photo = rectangle(230, 160, 240, 320, p, p.gapFill, p.gapStroke);
   photo.strokeStyle = "dashed";
   photo.strokeWidth = 2;

   const qmark = boundText("?", photo.id, 350, 320, 130, p.gapStroke);
   photo.boundElements = [{ id: qmark.id, type: "text" }];

   const noPhotoText = createText(
      t.noPhoto,
      350 - textW(t.noPhoto, 24) / 2,
      510,
      {
         fontSize: 24,
         fontFamily: 1,
         textAlign: "center",
         verticalAlign: "middle",
         strokeColor: p.caption,
      },
   ) as ExcalidrawText;

   const patientLabel = createText(t.patientLabel, 530, 150, {
      fontSize: 38,
      fontFamily: 1,
      textAlign: "left",
      verticalAlign: "middle",
      strokeColor: p.text,
   }) as ExcalidrawText;

   const fieldLine = (y: number) =>
      rectangle(530, y, 600, 4, p, p.caption, p.caption);

   const fieldLabel = (text: string, y: number) =>
      createText(text, 530, y, {
         fontSize: 26,
         fontFamily: 1,
         textAlign: "left",
         verticalAlign: "middle",
         strokeColor: p.caption,
      }) as ExcalidrawText;

   const line1 = fieldLine(220);
   const nameLabel = fieldLabel(t.fieldName, 250);
   const line2 = fieldLine(310);
   const ageLabel = fieldLabel(t.fieldAge, 340);
   const line3 = fieldLine(400);
   const admissionLabel = fieldLabel(t.fieldAdmission, 430);
   const line4 = fieldLine(490);

   const stamp = rectangle(710, 420, 420, 110, p, p.warn, p.warn);
   stamp.strokeWidth = 4;
   stamp.angle = -Math.PI / 18;

   const stampText = boundText(t.unidentified, stamp.id, 920, 475, 32, p.paper);
   stampText.angle = -Math.PI / 18;
   stamp.boundElements = [{ id: stampText.id, type: "text" }];

   const taglineText = createText(
      t.tagline,
      (CANVAS_W - textW(t.tagline, 30)) / 2,
      660,
      {
         fontSize: 30,
         fontFamily: 1,
         textAlign: "center",
         verticalAlign: "middle",
         strokeColor: p.caption,
      },
   ) as ExcalidrawText;

   const anchor = anchorRect(0, 0, CANVAS_W, CANVAS_H);

   return excalidrawFile([
      anchor,
      card,
      photo,
      qmark,
      noPhotoText,
      patientLabel,
      line1,
      nameLabel,
      line2,
      ageLabel,
      line3,
      admissionLabel,
      line4,
      stamp,
      stampText,
      taglineText,
   ] as ExcalidrawElement[]);
}

export const coverFicha: DiagramSpec = {
   id: "portada-iapex-ficha",
   build: (texts, p) => buildCoverFicha(texts as FichaTexts, p),
   texts: { es: ES, en: EN },
};
