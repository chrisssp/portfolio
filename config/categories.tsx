import {
   MdAccountBalance,
   MdBolt,
   MdBusiness,
   MdHub,
   MdLanguage,
   MdLocalHospital,
   MdLocalShipping,
   MdMemory,
   MdPhoneIphone,
   MdScience,
   MdStorefront,
   MdWatch,
   MdWeb,
} from "react-icons/md";

export type FilterAxisKey = "tech" | "focus";

export interface FilterAxisConfig {
   key: FilterAxisKey;
   urlParam: string;
   storageKey: string;
}

export interface CategoryOption {
   id: string;
   name: string;
   icon: React.ElementType;
   bgColor: string;
}

export interface SubgroupConfig {
   label: string;
   groupKey: string;
   optionIds: string[];
}

export interface FocusAxisConfig extends FilterAxisConfig {
   key: "focus";
   options: CategoryOption[];
   subgroups: SubgroupConfig[];
}

export const FOCUS_AXIS: FocusAxisConfig = {
   key: "focus",
   urlParam: "focus",
   storageKey: "portfolio-focus-filter",
   options: [
      // Industry / Vertical
      {
         id: "health",
         name: "Health",
         icon: MdLocalHospital,
         bgColor: "#10b981",
      },
      {
         id: "fintech",
         name: "Fintech",
         icon: MdAccountBalance,
         bgColor: "#3b82f6",
      },
      {
         id: "logistics",
         name: "Logistics",
         icon: MdLocalShipping,
         bgColor: "#f59e0b",
      },
      {
         id: "retail",
         name: "Retail",
         icon: MdStorefront,
         bgColor: "#ec4899",
      },
      {
         id: "ai-ml",
         name: "AI / ML",
         icon: MdMemory,
         bgColor: "#0ea5e9",
      },
      {
         id: "iot-wearables",
         name: "IoT / Wearables",
         icon: MdWatch,
         bgColor: "#14b8a6",
      },
      {
         id: "hackathon",
         name: "Hackathon",
         icon: MdBolt,
         bgColor: "#facc15",
      },
      {
         id: "research",
         name: "Research",
         icon: MdScience,
         bgColor: "#a855f7",
      },
      {
         id: "enterprise",
         name: "Enterprise",
         icon: MdBusiness,
         bgColor: "#64748b",
      },
      // Platform
      {
         id: "web",
         name: "Web",
         icon: MdLanguage,
         bgColor: "#38bdf8",
      },
      {
         id: "mobile",
         name: "Mobile",
         icon: MdPhoneIphone,
         bgColor: "#22c55e",
      },
      {
         id: "api",
         name: "API",
         icon: MdHub,
         bgColor: "#f97316",
      },
      {
         id: "landing",
         name: "Landing",
         icon: MdWeb,
         bgColor: "#6366f1",
      },
   ],
   subgroups: [
      {
         label: "Industry / Vertical",
         groupKey: "_group_industry",
         optionIds: [
            "health",
            "fintech",
            "logistics",
            "retail",
            "ai-ml",
            "iot-wearables",
            "hackathon",
            "research",
            "enterprise",
         ],
      },
      {
         label: "Platform",
         groupKey: "_group_platform",
         optionIds: ["web", "mobile", "api", "landing"],
      },
   ],
};
