"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function NotFound() {
   const router = useRouter();

   useEffect(() => {
      // Redirigir al inicio (por defecto en inglés si no se detecta idioma)
      router.replace("/en");
   }, [router]);

   return null; // No mostramos nada, el usuario es redirigido instantáneamente
}
