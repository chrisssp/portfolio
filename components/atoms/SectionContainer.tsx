import { ReactNode } from "react";

interface SectionContainerProps {
   children: ReactNode;
   id?: string;
   className?: string; // Para el color de fondo de la sección
   innerClassName?: string; // Para layouts específicos
   showGrid?: boolean;
   paddingY?: string;
}

export const SectionContainer = ({ 
   children, 
   id, 
   className = "", 
   innerClassName = "",
   showGrid = true,
   paddingY = "py-10 sm:py-16 lg:py-[120px]"
}: SectionContainerProps) => {
   return (
      <section id={id} className={`relative flex justify-center w-full overflow-hidden ${className}`}>
         {showGrid && (
            <div className="absolute inset-0 bg-grid-pattern pointer-events-none mask-grid-fade" />
         )}
         {/* Regresamos a px-20 para LG para respetar el diseño original de 1440px con 80px de padding */}
         <div className={`w-full max-w-[1440px] px-6 sm:px-10 lg:px-20 relative z-10 ${paddingY} ${innerClassName}`}>
            {children}
         </div>
      </section>
   );
};
