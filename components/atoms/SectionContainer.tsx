import { ReactNode } from "react";

interface SectionContainerProps {
   children: ReactNode;
   id?: string;
   className?: string; // Para el color de fondo de la sección (bg-surface, bg-page, etc)
   innerClassName?: string; // Para layouts específicos (flex, grid, etc)
   showGrid?: boolean;
   paddingY?: string;
}

export const SectionContainer = ({ 
   children, 
   id, 
   className = "", 
   innerClassName = "",
   showGrid = true,
   paddingY = "py-[120px]"
}: SectionContainerProps) => {
   return (
      <section id={id} className={`relative flex justify-center w-full overflow-clip ${className}`}>
         {showGrid && (
            <div className="absolute inset-0 bg-grid-pattern pointer-events-none mask-grid-fade" />
         )}
         <div className={`w-full max-w-[1440px] px-20 relative z-10 ${paddingY} ${innerClassName}`}>
            {children}
         </div>
      </section>
   );
};
