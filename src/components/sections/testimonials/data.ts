import img1 from "./assets/person1.png";
import img2 from "./assets/person2.png";
import img3 from "./assets/person3.png";

export const testimonialsSection = {
  title: "Lo que opinan nuestros clientes",
  subheading1_1: "Historias reales de negocios",
  subheading1_2: " que crecieron con su nueva web",
  testimonials: [
    {
      name: "María González",
      visual: img1,
      occupation: "Dueña de tienda online",
      quote:
        "La web me ayudó a vender más y mostrar mis productos de forma profesional. ¡La recomiendo totalmente!",
    },
    {
      name: "Javier Pérez",
      visual: img2,
      occupation: "Consultor de servicios",
      quote:
        "Ahora mis clientes pueden agendar reuniones fácilmente y mi negocio se ve mucho más confiable.",
    },
    {
      name: "Ana Torres",
      visual: img3,
      occupation: "Restaurant",
      quote:
        "Recibo más reservas y mi restaurante aparece en Google. La web fue una inversión que valió la pena.",
    },
  ],
  visual: "customer-testimonials-image.jpg",
  callToAction: "Únete a los negocios que ya están creciendo",
  button: "Quiero mi web",
};
