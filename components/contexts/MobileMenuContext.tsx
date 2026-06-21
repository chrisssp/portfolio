"use client";

import { createContext, type ReactNode, useContext, useState } from "react";

type MobileMenuContextType = {
   isOpen: boolean;
   setOpen: (open: boolean) => void;
};

const MobileMenuContext = createContext<MobileMenuContextType>({
   isOpen: false,
   setOpen: () => {},
});

export function MobileMenuProvider({ children }: { children: ReactNode }) {
   const [isOpen, setOpen] = useState(false);

   return (
      <MobileMenuContext.Provider value={{ isOpen, setOpen }}>
         {children}
      </MobileMenuContext.Provider>
   );
}

export function useMobileMenu() {
   return useContext(MobileMenuContext);
}
