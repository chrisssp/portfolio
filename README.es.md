# Portafolio Profesional | Christian Serrano

![Banner](./public/assets/images/profile/banner.jpg)

[![Next.js](https://img.shields.io/badge/Next.js-16-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](https://opensource.org/licenses/MIT)

<p align="center">
  <a href="README.md">🇬🇧 English</a> · <a href="README.es.md">🇪🇸 Español</a>
</p>

Portafolio profesional multilingüe de alto rendimiento construido con enfoque en arquitectura limpia, accesibilidad y experiencia de usuario moderna.

**Demo en vivo:** [chrisssp.vercel.app](https://chrisssp.vercel.app)

---

## Funcionalidades principales

- **Internacionalización completa (i18n):** Soporte nativo para inglés y español con detección automática de rutas y metadatos localizados.
- **Imágenes Open Graph dinámicas:** Generación automatizada de imágenes de vista previa social (OG) usando Edge Functions.
- **Rendimiento primero:** Core Web Vitals optimizados con monitoreo en tiempo real via Vercel Speed Insights.
- **UI/UX moderna:** Diseño responsivo mobile-first con modo oscuro/claro, botón de email inteligente y overlays con desenfoque contextual.
- **Impacto de negocio:** Soluciones técnicas con métricas reales (ej. $2.3M USD conciliados, 95% de optimización de procesos).

---

## Tecnologías

- **Framework:** [Next.js 16](https://nextjs.org/) (App Router)
- **Lenguaje:** [TypeScript](https://www.typescriptlang.org/)
- **Estilos:** [Tailwind CSS 4](https://tailwindcss.com/)

---

## Estructura del proyecto

```text
├── app/               # Next.js App Router (Layouts, Pages, OG Images)
├── components/        # Estructura Atomic Design (Atoms, Molecules, Organisms)
├── i18n/              # Módulos de traducción y lógica de diccionarios
├── public/            # Recursos estáticos (Imágenes, Fuentes, PDF CVs)
├── config/            # Enlaces globales y definiciones de tecnología
└── proxy.ts           # Middleware i18n y lógica de enrutamiento
```

---

## Inicio rápido

1.  **Clonar el repositorio:**
    ```bash
    git clone https://github.com/chrisssp/portfolio.git
    ```

2.  **Instalar dependencias:**
    ```bash
    pnpm install
    ```

3.  **Iniciar el servidor de desarrollo:**
    ```bash
    pnpm dev
    ```

4.  **Abrir [http://localhost:3000](http://localhost:3000)** en tu navegador.

---

## Contribuciones

Lee [CONTRIBUTING.md](CONTRIBUTING.md) para conocer las convenciones de ramas, commits y PRs.

## Licencia

Este proyecto está bajo la **Licencia MIT** — ver [LICENSE](LICENSE) para más detalles.

> **Nota:** Todas las imágenes personales, descripciones de proyectos y assets de marca son propiedad intelectual de Christian Serrano. Siéntete libre de usar el código con fines de aprendizaje, pero por favor no reproduzcas el contenido personal.

---

<p align="center">
    0 errores, 14 advertencias, 100% por Christian Serrano 🤓👆
</p>

## Agradecimientos

**Authors:**

- [@chrisssp](https://github.com/chrisssp) — Christian Serrano
