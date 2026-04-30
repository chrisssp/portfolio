import type { Dictionary } from "@/i18n/types";
import { Button } from "../atoms/Button";

type ButtonGroupProps = {
   dict: Dictionary;
};

export const ButtonGroup = ({ dict }: ButtonGroupProps) => {
   return (
      <div className="flex gap-3">
         <Button variant="primary">{dict.cta.actions.talk}</Button>
         <Button variant="outline">{dict.cta.actions.copy}</Button>
      </div>
   );
};
