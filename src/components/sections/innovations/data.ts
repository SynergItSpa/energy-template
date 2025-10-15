import imgGrid from "./assets/inno-grid.webp";
import imgSolar from "./assets/inno-panel.webp";
import imgWind from "./assets/inno-wind.webp";

export const innovationsSection = {
  title: "Innovaciones para tu Web",
  subheading1_1: "Descubre funcionalidades avanzadas",
  subheading1_2: " para destacar tu negocio",
  innovations: [
    {
      title: "Haz que tu presencia online refleje la esencia de tu negocio",
      description: [
        "Personalización avanzada: Adapta fácilmente el template a la imagen y necesidades de tu negocio, ahorrando tiempo y recursos.",
        "Múltiples opciones de diseño: Elige la estructura que mejor se adapte a tu contenido y haz que tu sitio destaque entre la competencia.",
        "Diseño 100% responsivo: Tu sitio se verá y funcionará perfectamente en computadoras, tablets y celulares, brindando la mejor experiencia a tus clientes.",
        "Integración multimedia: Agrega imágenes, videos y todo tipo de contenido para captar la atención y comunicar el valor de tu negocio."
      ],
      visual: imgGrid,
    },
    {
      title: "Pensado para el crecimiento y éxito de tu negocio",
      description: [
        "Mayor interacción con tus clientes: Atrae y retén a tus visitantes con secciones interactivas y un diseño intuitivo.",
        "Actualizaciones constantes: Mantén tu sitio siempre actualizado y alineado con las últimas tendencias y tecnologías.",
        "Ahorro de tiempo y recursos: Olvídate de empezar desde cero. Lanza tu sitio en tiempo récord y enfócate en hacer crecer tu negocio.",
        "Soporte y comunicación: SynergIT está disponible para resolver cualquier duda y potenciar tu presencia digital."
      ],
      visual: imgSolar,
    },
    {
      title: "Lanza el sitio de tu negocio rápidamente con nuestro Template",
      timeline: [
        {
          step: "Contacto",
          description: "Comienza contactándonos. En pocos días tendrás la base perfecta para tu negocio lista para personalizar.",
          icon: "contact"
        },
        {
          step: "Entréguenos su contenido",
          description: "Compártenos la historia de tu negocio, tus productos, servicios y todo lo que te hace único. ¡Hazlo tuyo!",
          icon: "content"
        },
        {
          step: "Personaliza el diseño",
          description: "Mediante meetings, ajusta colores, tipografías y secciones para que tu sitio refleje la identidad de tu marca.",
          icon: "design"
        },
        {
          step: "Hosting y dominio",
          description: "Hosting y dominio para tu negocio, lo hacemos por ti, asegurando que tu sitio esté siempre disponible.",
          icon: "hosting"
        },
        {
          step: "¡Listo!",
          description: "Tu sitio está publicado y listo para recibir clientes.",
          icon: "done"
        }
      ],
      visual: imgWind,
    },
  ],
  visual: "innovations-section-image.jpg",
  callToAction: "Explora las ventajas de una web moderna para tu empresa",
  button: "Solicitar",
};
