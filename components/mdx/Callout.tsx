"use client";

import { forwardRef } from "react";
import {
   LuCircleCheck,
   LuInfo,
   LuLightbulb,
   LuTriangleAlert,
} from "react-icons/lu";

type CalloutType = "info" | "warning" | "success" | "note";

interface CalloutProps {
   type?: CalloutType;
   title?: string;
   children: React.ReactNode;
   className?: string;
}

const icons = {
   info: LuInfo,
   warning: LuTriangleAlert,
   success: LuCircleCheck,
   note: LuLightbulb,
};

const colors = {
   info: "border-blue-500/50 bg-blue-500/10 text-blue-700 dark:text-blue-300",
   warning:
      "border-yellow-500/50 bg-yellow-500/10 text-yellow-700 dark:text-yellow-300",
   success:
      "border-green-500/50 bg-green-500/10 text-green-700 dark:text-green-300",
   note: "border-purple-500/50 bg-purple-500/10 text-purple-700 dark:text-purple-300",
};

const Callout = forwardRef<HTMLDivElement, CalloutProps>(
   ({ type = "info", title, children, className = "", ...props }, ref) => {
      const Icon = icons[type];
      const colorClasses = colors[type];

      return (
         <div
            ref={ref}
            className={`relative p-4 my-6 rounded-lg border flex gap-3 ${colorClasses} ${className}`}
            {...props}
         >
            <Icon
               className={`size-5 shrink-0 mt-0.5 ${colorClasses}`}
               aria-hidden="true"
            />
            <div className="flex-1">
               {title && <p className="font-semibold mb-1">{title}</p>}
               <div className="m-0">{children}</div>
            </div>
         </div>
      );
   },
);

Callout.displayName = "Callout";

export default Callout;
