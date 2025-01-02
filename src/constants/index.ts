// Import project images used in the portfolioProjects data
import project01 from "@/assets/images/project01.png";
import project02 from "@/assets/images/project02.png";
import project03 from "@/assets/images/project03.png";

// Array of portfolio project data
export const portfolioProjects = [
  {
    stack: "Frontend", // Technology stack used in the project
    year: "2024", // Year the project was developed
    title: "Landing Page Template", // Project title
    results: [
      // Key achievements or features of the project
      { title: "Criação de interface de usuário" },
      { title: "Otimização de desempenho" },
      { title: "Design responsivo e acessibilidade" },
    ],
    link: "https://saaslptemplate.vercel.app", // Link to view the project
    image: project01, // Image representing the project
  },
  {
    stack: "Frontend",
    year: "2024",
    title: "SiriusAI - Landing Page",
    results: [
      { title: "Desenvolvimento de identidade visual" },
      { title: "Foco em conversão e engajamento" },
      { title: "Totalmente pensado na experiência de usuário" },
    ],
    link: "https://sirius-ai-two.vercel.app",
    image: project02,
  },
  {
    stack: "Fullstack", // Indicates both frontend and backend technologies were used
    year: "2024",
    title: "PrimeClass Rental",
    results: [
      { title: "Criação de interface de usuário" },
      { title: "Otimização de desempenho" },
      { title: "Design responsivo e acessibilidade" },
    ],
    link: "https://primeclass-rental.vercel.app",
    image: project03,
  },
];

// Array of descriptive words for the tape animation
export const tapeWords = [
  "Performáticos", // Indicates high performance
  "Acessíveis", // Accessibility-focused
  "Seguros", // Secure and reliable
  "Interativos", // Interactive user experiences
  "Escaláveis", // Scalable for growth
  "User Friendly", // Easy to use and navigate
  "Responsivos", // Responsive design for all devices
  "Sustentáveis", // Sustainable and maintainable
  "Otimizados", // Optimized for performance
  "Utilizáveis", // Usable and intuitive
  "Confiáveis", // Trusted and dependable
];
