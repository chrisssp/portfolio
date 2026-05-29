import type { KeyboardEvent } from "react";
import { MdCheck } from "react-icons/md";
import type { TechConfig } from "@/config/technologies";

interface BadgeProps {
   tech: TechConfig;
   interactive?: boolean;
   selected?: boolean;
   hasActiveFilter?: boolean;
   onClick?: () => void;
}

const handleKeyDown =
   (onClick?: () => void) => (e: KeyboardEvent<HTMLElement>) => {
      if (onClick && (e.key === "Enter" || e.key === " ")) {
         e.preventDefault();
         onClick();
      }
   };

const withAlpha = (hexColor: string, alpha: number) => {
   const normalized = hexColor.replace("#", "");
   const isShort = normalized.length === 3;
   const safe = isShort
      ? normalized
           .split("")
           .map((ch) => `${ch}${ch}`)
           .join("")
      : normalized;

   if (safe.length !== 6) {
      return hexColor;
   }

   const red = Number.parseInt(safe.slice(0, 2), 16);
   const green = Number.parseInt(safe.slice(2, 4), 16);
   const blue = Number.parseInt(safe.slice(4, 6), 16);

   if (Number.isNaN(red) || Number.isNaN(green) || Number.isNaN(blue)) {
      return hexColor;
   }

   return `rgba(${red}, ${green}, ${blue}, ${alpha})`;
};

const toRgbaLightenedIfDark = (hexColor: string, alpha: number) => {
   const normalized = hexColor.replace("#", "");
   const isShort = normalized.length === 3;
   const safe = isShort
      ? normalized
           .split("")
           .map((ch) => `${ch}${ch}`)
           .join("")
      : normalized;

   if (safe.length !== 6) {
      return withAlpha(hexColor, alpha);
   }

   let red = Number.parseInt(safe.slice(0, 2), 16);
   let green = Number.parseInt(safe.slice(2, 4), 16);
   let blue = Number.parseInt(safe.slice(4, 6), 16);

   if (Number.isNaN(red) || Number.isNaN(green) || Number.isNaN(blue)) {
      return withAlpha(hexColor, alpha);
   }

   const luminance = 0.299 * red + 0.587 * green + 0.114 * blue;
   if (luminance < 90) {
      const lightenAmount = 70;
      red = Math.min(255, red + lightenAmount);
      green = Math.min(255, green + lightenAmount);
      blue = Math.min(255, blue + lightenAmount);
   }

   return `rgba(${red}, ${green}, ${blue}, ${alpha})`;
};

export const Badge = ({
   tech,
   interactive = false,
   selected = false,
   hasActiveFilter = false,
   onClick,
}: BadgeProps) => {
   const Icon = tech.icon;
   const isOutlined = hasActiveFilter && !selected;
   const showSelected = hasActiveFilter && selected;
   const borderColor = isOutlined
      ? toRgbaLightenedIfDark(tech.bgColor, 0.6)
      : undefined;

   const className = [
      "flex items-center gap-1.5 sm:gap-2 md:gap-2.5 px-2 sm:px-2.5 md:px-3.5 py-0.5 sm:py-1 md:py-1.5 rounded-full shrink-0",
      "transition-all duration-300 hover:brightness-105 hover:shadow-sm",
      "select-none border-2 border-transparent",
      isOutlined ? "bg-transparent" : "",
      interactive
         ? "cursor-pointer hover:scale-[1.03]"
         : "cursor-default hover:scale-[1.03] hover:border-white-off/20",
      showSelected ? "ring-2 ring-white-off/50" : "",
   ]
      .filter(Boolean)
      .join(" ");

   const iconClassName = [
      "size-3 sm:size-3.5 md:size-4 shrink-0",
      isOutlined ? "text-body/60" : "text-white-off",
   ]
      .filter(Boolean)
      .join(" ");

   const textClassName = [
      "font-sans font-medium text-xs md:text-sm whitespace-nowrap leading-none mt-px",
      isOutlined ? "text-body/60" : "text-white-off",
   ]
      .filter(Boolean)
      .join(" ");

   const commonStyle = isOutlined
      ? { borderColor }
      : { backgroundColor: tech.bgColor };

   const inner = (
      <>
         <Icon className={iconClassName} />
         {showSelected ? (
            <MdCheck className="size-3 sm:size-3.5 md:size-4 text-white-off shrink-0" />
         ) : null}
         <span className={textClassName}>{tech.name}</span>
      </>
   );

   if (interactive) {
      return (
         <button
            type="button"
            className={className}
            style={commonStyle}
            aria-pressed={selected}
            onClick={onClick}
            onKeyDown={handleKeyDown(onClick)}
         >
            {inner}
         </button>
      );
   }

   return (
      <div className={className} style={commonStyle}>
         {inner}
      </div>
   );
};
