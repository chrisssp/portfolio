"use client";

import { useEffect, useState } from "react";
import { MdArrowUpward } from "react-icons/md";
import { Button } from "@/components/atoms/Button";
import { useMobileMenu } from "@/components/contexts/MobileMenuContext";
import { useFooterVisible } from "@/components/hooks/useFooterVisible";

export const ScrollToTop = () => {
   const { isOpen: isMenuOpen } = useMobileMenu();
   const isFooterVisible = useFooterVisible();
   const [isVisible, setIsVisible] = useState(false);

   useEffect(() => {
      const toggleVisibility = () => {
         if (window.scrollY > 500) {
            setIsVisible(true);
         } else {
            setIsVisible(false);
         }
      };

      window.addEventListener("scroll", toggleVisibility);
      return () => window.removeEventListener("scroll", toggleVisibility);
   }, []);

   const scrollToTop = () => {
      window.scrollTo({
         top: 0,
         behavior: "smooth",
      });
   };

   return (
      <Button
         variant="primary"
         circle
         icon={
            <MdArrowUpward className="group-hover:-translate-y-1 transition-transform duration-300" />
         }
         onClick={scrollToTop}
         ariaLabel="Scroll to top"
         className={`fixed bottom-6 xs:bottom-8 right-[4.5rem] xs:right-[5.25rem] z-50 shadow-2xl transition-all duration-500 ease-in-out hover:shadow-primary/20 group ${
            isVisible && !isMenuOpen && !isFooterVisible
               ? "opacity-100 translate-y-0"
               : "opacity-0 translate-y-4 pointer-events-none"
         }`}
      />
   );
};
