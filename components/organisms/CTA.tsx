import { Dictionary } from "@/i18n/types";
import { Typography } from "../atoms/Typography";
import { Button } from "../atoms/Button";

interface CTAProps {
   dict: Dictionary;
}

export const CTA = ({ dict }: CTAProps) => {
   return (
      <section className="bg-page flex items-center justify-center gap-10 px-20 py-[64px] w-full overflow-clip">
         <div className="flex flex-col gap-4 max-w-[896px]">
            <Typography variant="section">{dict.cta.title}</Typography>
            <Typography variant="body" className="max-w-[680px]">
               {dict.cta.description}
            </Typography>
         </div>
         <div className="flex gap-4 min-w-[344px]">
            <Button variant="primary" className="flex-1">{dict.cta.actions.talk}</Button>
            <Button variant="outline">{dict.cta.actions.copy}</Button>
         </div>
      </section>
   );
};
