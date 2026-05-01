export const projectMtrpa = {
   data: {
      id: "mtrpa",
      imagePath: "/assets/images/projects/mtrpa/general.png",
      techStack: ["angular", "bootstrap", "mongodb"],
      links: [{ type: "demo", url: "#" }],
   },
   en: {
      title: "Master Template Rutas (PepsiCo)",
      subtitle: "Enterprise Automation & Database Migration Platform",
      description:
         "Enterprise automation tool migrating 100k+ records from Excel to MongoDB, cutting processing time by ~70% and eliminating manual entry errors.",
      fullDescription:
         "Master Template Rutas is a mission-critical tool developed for PepsiCo to handle massive logistics data. It automates the validation, transformation, and migration of over 100,000 monthly records from legacy spreadsheets to a robust MongoDB instance, ensuring data integrity across the supply chain.",
      challenge: {
         description:
            "Logistics route data was handled via complex, disconnected Excel files prone to human error. Manual migration to the central system took weeks and often resulted in corrupted data.",
         solution:
            "An Angular-based automation engine that performs pre-flight data validation and batch migration, reducing the entire process from several work-weeks to just a few hours.",
      },
   },
   es: {
      title: "Master Template Rutas (PepsiCo)",
      subtitle: "Plataforma de automatización empresarial y migración de datos",
      description:
         "Herramienta de automatización empresarial que migra +100k registros de Excel a MongoDB, reduciendo el tiempo de procesamiento en un ~70% y eliminando errores manuales.",
      fullDescription:
         "Master Template Rutas es una herramienta de misión crítica desarrollada para PepsiCo para manejar datos logísticos masivos. Automatiza la validación, transformación y migración de más de 100,000 registros mensuales desde hojas de cálculo heredadas a una instancia robusta de MongoDB.",
      challenge: {
         description:
            "Los datos de rutas logísticas se manejaban a través de archivos Excel complejos y desconectados propensos a errores humanos. La migración manual tomaba semanas y a menudo resultaba en datos corruptos.",
         solution:
            "Un motor de automatización basado en Angular que realiza validación de datos previa y migración por lotes, reduciendo el proceso completo de varias semanas a solo unas pocas horas.",
      },
   },
};
