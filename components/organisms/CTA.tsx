import { Dictionary } from "@/i18n/types";
import { Typography } from "../atoms/Typography";
import { Button } from "../atoms/Button";

interface CTAProps {
   dict: Dictionary;
}

export const CTA = ({ dict }: CTAProps) => {
   return (
      <section className="bg-page relative flex justify-center w-full">
         <div className="absolute inset-0 bg-grid-pattern pointer-events-none mask-grid-fade" />

         <div className="flex items-center justify-between gap-24 px-20 py-[120px] w-full max-w-[1440px] relative z-10">
            <div className="flex flex-col gap-4 max-w-[896px]">
               <Typography variant="section">{dict.cta.title}</Typography>
               <Typography variant="body">
                  {dict.cta.description}
               </Typography>
            </div>
            <div className="flex gap-4 min-w-[344px]">
               <Button variant="primary" className="flex-1">{dict.cta.actions.talk}</Button>
               <Button variant="outline" className="flex-1">{dict.cta.actions.copy}</Button>
            </div>
         </div>
      </section>
   );
};
