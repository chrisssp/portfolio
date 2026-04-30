"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function NotFound() {
   const router = useRouter();

   useEffect(() => {
      // Redirigir al inicio (por defecto en inglés si no se detecta idioma)
      router.replace("/en");
   }, [router]);

   return null; // No mostramos nada, el usuario es redirigido instantáneamente
}
