import { Dictionary } from "@/i18n/types";
import { Typography } from "../atoms/Typography";
import { Button } from "../atoms/Button";
import { SectionContainer } from "../atoms/SectionContainer";

interface CTAProps {
   dict: Dictionary;
}

export const CTA = ({ dict }: CTAProps) => {
   return (
      <SectionContainer 
         className="bg-page" 
         paddingY="py-12 xs:py-16 lg:py-[120px]"
         innerClassName="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 lg:gap-24"
      >
         <div className="flex flex-col gap-4 max-w-[896px] text-left">
            <Typography variant="section">
               {dict.cta.title}
            </Typography>
            <Typography variant="body" className="opacity-90 text-pretty">
               {dict.cta.description}
            </Typography>
         </div>
         
         <div className="flex flex-col xs:flex-row gap-4 w-full lg:w-auto">
            <Button 
               variant="primary" 
               className="w-full lg:w-auto"
            >
               {dict.cta.actions.talk}
            </Button>
            <Button 
               variant="outline" 
               className="w-full lg:w-auto"
            >
               {dict.cta.actions.copy}
            </Button>
         </div>
      </SectionContainer>
   );
};
