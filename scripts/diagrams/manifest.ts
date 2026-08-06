import type { DiagramSpec } from "./engine";
import { comparison } from "./iapex/comparison";
import { matchFlow } from "./iapex/match-flow";
import { modesBars } from "./iapex/modes-bars";
import { beforeAfter } from "./orchestrating/before-after";
import { lifecycle } from "./sdd/lifecycle";

export type PostManifest = {
   slug: string;
   diagrams: DiagramSpec[];
   cover?: DiagramSpec;
   og?: DiagramSpec;
};

export const manifest: PostManifest[] = [
   {
      slug: "iapex-ai-finds-missing-people",
      diagrams: [comparison, matchFlow, modesBars],
      og: comparison,
   },
   {
      slug: "from-programming-with-ai-to-orchestrating",
      diagrams: [beforeAfter],
      cover: beforeAfter,
   },
   {
      slug: "sdd-spec-driven-development",
      diagrams: [lifecycle],
      cover: lifecycle,
   },
];
