# Informe de Auditoría SEO y Rendimiento: Portfolio Christian Serrano
**Fecha:** 30 de abril de 2026
**Dominio:** https://chrisssp.vercel.app
**Estado GSC:** Propiedad Verificada ✅

---

## 1. Resumen Ejecutivo (Scores)

| Categoría | Score (Est.) | Estado | Observación Principal |
| :--- | :---: | :---: | :--- |
| **Performance (Móvil)** | 77 - 88 | ⚠️ | LCP penalizado por imágenes pesadas (ahorro de ~2MB detectado). |
| **Performance (Desktop)** | 90 - 96 | ✅ | Excelente, pero con margen de mejora en CLS y recursos bloqueantes. |
| **SEO On-Page** | 65 / 100 | 🔴 | **Crítico:** Falta de `robots.txt`, `sitemap.xml`, `canonical` y `hreflang`. |
| **Accesibilidad** | 84 - 92 | ⚠️ | Mejorar contraste de color y nombres accesibles en botones. |
| **Best Practices** | 100 / 100 | ✅ | Cumple con estándares modernos de seguridad y desarrollo. |

---

## 2. Core Web Vitals (Móvil)

| Métrica | Valor Detectado | Objetivo | Estado |
| :--- | :---: | :---: | :---: |
| **LCP (Largest Contentful Paint)** | **6.8s** | < 2.5s | ❌ |
| **FCP (First Contentful Paint)** | 0.9s | < 1.8s | ✅ |
| **CLS (Cumulative Layout Shift)** | 0.00 | < 0.1 | ✅ |
| **TTI (Time to Interactive)** | 7.3s | < 3.8s | ❌ |

> **Nota:** El alto LCP se debe principalmente a imágenes en la sección de proyectos/hero que no están optimizadas para móviles (ahorro potencial de 1.97 MB).

---

## 3. Diagnóstico de Google Search Console (GSC)

| Atributo | Estado | Detalle |
| :--- | :--- | :--- |
| **Propiedad** | Verificada | `https://chrisssp.vercel.app/` |
| **Indexación** | 0 URLs | Google indica que las URLs son "desconocidas" (aún no rastreadas). |
| **Sitemaps** | Ninguno | No se ha enviado ningún mapa del sitio. |
| **Rendimiento** | Sin datos | Al ser propiedad nueva, los datos aparecerán en 24-48h tras indexar. |

---

## 4. Hallazgos Técnicos Detallados

### 🔍 SEO On-Page e Indexabilidad
*   **Ausencia de robots.txt:** El sitio devuelve 404. Esto no bloquea a Google, pero impide dar instrucciones claras y el link al sitemap.
*   **Falta de Sitemap.xml:** Crucial para que Google descubra las rutas de proyectos `/projects/[id]` que no siempre están enlazadas directamente desde la home de forma estática.
*   **SEO Multilingüe (Hreflang):** Aunque el sitio soporta `/en` y `/es`, no existen etiquetas `<link rel="alternate" hreflang="..." />`. Google podría considerar el contenido como duplicado.
*   **Etiquetas Canonicals:** No definidas. Riesgo de fragmentación de autoridad entre `chrisssp.vercel.app`, `chrisssp.vercel.app/en`, etc.

### ⚡ Rendimiento y Optimización
*   **Imágenes Críticas:** Se detectaron imágenes de gran tamaño descargándose en móvil.
*   **Recursos Bloqueantes:** Algunas peticiones de scripts/estilos retrasan el renderizado inicial en 150ms+.
*   **Fuentes:** Se recomienda revisar la carga de `Space_Grotesk` para asegurar que no bloquee el FCP.

### ♿ Accesibilidad
*   **Contraste:** El ratio de contraste entre fondo y texto en algunas secciones no cumple con el estándar WCAG.
*   **ARIA Labels:** Botones de redes sociales o acciones rápidas carecen de nombres descriptivos para lectores de pantalla.

---

## 5. Roadmap de Acciones Prioritarias

| Prioridad | Tarea | Impacto | Acción Técnica |
| :--- | :--- | :--- | :--- |
| **URGENTE** | **Crear robots.txt y Sitemap** | Alto | Implementar `app/robots.ts` y `app/sitemap.ts` en Next.js. |
| **URGENTE** | **Solicitar Indexación** | Alto | Forzar el rastreo de `/en` y `/es` desde la UI de GSC. |
| **ALTA** | **SEO Internacional** | Medio | Añadir `hreflang` y `canonical` en el `RootLayout`. |
| **ALTA** | **Optimización LCP** | Alto | Usar `priority` en imágenes del Hero y definir `sizes` en `next/image`. |
| **MEDIA** | **Accesibilidad** | Medio | Revisar paleta de colores y añadir `aria-label` a botones. |
| **MEDIA** | **Datos Estructurados** | Medio | Añadir JSON-LD tipo `Person` y `SoftwareSourceCode`. |

---
*Reporte generado automáticamente por Gemini CLI.*
