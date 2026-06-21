import { type CSSProperties, forwardRef, type ReactNode } from "react";

interface ButtonProps {
   children?: ReactNode;
   variant?: "primary" | "secondary" | "outline";
   icon?: ReactNode;
   circle?: boolean;
   onClick?: (e?: React.MouseEvent<HTMLButtonElement>) => void;
   className?: string;
   ariaLabel?: string;
   disabled?: boolean;
   title?: string;
   style?: CSSProperties;
   "aria-expanded"?: boolean;
   "aria-haspopup"?: boolean | "dialog" | "menu";
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
   (
      {
         children,
         variant = "primary",
         icon,
         circle = false,
         onClick,
         className = "",
         ariaLabel,
         disabled = false,
         title,
         style,
         "aria-expanded": ariaExpanded,
         "aria-haspopup": ariaHaspopup,
      },
      ref,
   ) => {
      const baseStyles = circle
         ? "flex items-center justify-center p-2.5 xs:p-3 rounded-full transition-all duration-200 cursor-pointer leading-none hover:scale-110 active:scale-95 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:scale-100"
         : "flex items-center justify-center gap-2 px-4 py-2 sm:px-6 sm:py-3 rounded-xl sm:rounded-2xl font-bold font-sans transition-all active:scale-95 hover:scale-[1.02] hover:shadow-md whitespace-nowrap leading-none cursor-pointer text-sm sm:text-base disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:shadow-none";

      const variants = {
         primary:
            "bg-primary text-primary-contrast border border-subtle hover:bg-primary/90",
         secondary:
            "bg-surface text-primary border border-subtle hover:bg-surface/80",
         outline:
            "bg-page/50 text-primary border border-subtle hover:bg-page/80 backdrop-blur-sm",
      };

      return (
         <button
            ref={ref}
            type="button"
            onClick={onClick}
            className={`${baseStyles} ${variants[variant]} ${className}`}
            aria-label={ariaLabel}
            aria-expanded={ariaExpanded}
            aria-haspopup={ariaHaspopup}
            disabled={disabled}
            title={title}
            style={style}
         >
            {icon && (
               <span
                  className={`flex items-center justify-center shrink-0 ${circle ? "size-5" : "size-4 sm:size-5"}`}
               >
                  {icon}
               </span>
            )}
            {!circle && children && (
               <span className="flex items-center mt-px">{children}</span>
            )}
         </button>
      );
   },
);
Button.displayName = "Button";
