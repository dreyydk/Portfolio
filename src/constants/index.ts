// --- Imports: Project Images ---
import project01 from "@/assets/images/project01.png"; // Image for the "Landing Page Template" project
import project02 from "@/assets/images/project02.png"; // Image for the "SiriusAI - Landing Page" project
import project03 from "@/assets/images/project03.png"; // Image for the "PrimeClass Rental" project

// --- Portfolio Projects: Array of Project Data ---
export const portfolioProjects = [
  {
    stack: "Frontend", // Technology stack used in this project
    year: "2024", // Year the project was completed
    title: "Landing Page Template", // Title of the project
    results: [
      // Key features or achievements for this project
      { title: "Criação de interface de usuário" }, // User interface creation
      { title: "Otimização de desempenho" }, // Performance optimization
      { title: "Design responsivo e acessibilidade" }, // Responsive and accessible design
    ],
    link: "https://saaslptemplate.vercel.app", // URL to view the project
    image: project01, // Image showcasing the project
  },
  {
    stack: "Frontend",
    year: "2024",
    title: "SiriusAI - Landing Page",
    results: [
      { title: "Desenvolvimento de identidade visual" }, // Visual identity development
      { title: "Foco em conversão e engajamento" }, // Focus on conversion and engagement
      { title: "Pensado na experiência de usuário" }, // User experience-focused design
    ],
    link: "https://sirius-ai-two.vercel.app",
    image: project02,
  },
  {
    stack: "Fullstack", // Combines frontend and backend technologies
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

// --- Tape Words: Descriptive Words for Animation ---
export const tapeWords = [
  "Performáticos", // High performance
  "Acessíveis", // Accessibility-focused
  "Seguros", // Secure and reliable
  "Interativos", // Interactive user experiences
  "Escaláveis", // Scalable for growth
  "User Friendly", // Easy to use and navigate
  "Responsivos", // Adapts to all devices
  "Sustentáveis", // Sustainable and maintainable
  "Otimizados", // Optimized for efficiency
  "Utilizáveis", // Intuitive and usable
  "Confiáveis", // Trusted and dependable
];

// --- Hobbies: Array of Hobby Data ---
export const hobbies = [
  {
    title: "Carros", // Cars
    emoji: "🏎️", // Car emoji
    left: "5%", // Left position in percentage
    top: "5%", // Top position in percentage
  },
  {
    title: "Anime",
    emoji: "⛩️", // Torii gate emoji
    left: "50%",
    top: "5%",
  },
  {
    title: "Leitura", // Reading
    emoji: "📖", // Book emoji
    left: "10%",
    top: "35%",
  },
  {
    title: "Games", // Video games
    emoji: "👾", // Alien emoji
    left: "35%",
    top: "40%",
  },
  {
    title: "Guitarra", // Guitar
    emoji: "🎸", // Guitar emoji
    left: "70%",
    top: "45%",
  },
  {
    title: "Aviação", // Aviation
    emoji: "✈️", // Airplane emoji
    left: "5%",
    top: "65%",
  },
  {
    title: "Gatos", // Cats
    emoji: "🐱", // Cat emoji
    left: "45%",
    top: "70%",
  },
];
