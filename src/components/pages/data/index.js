// import pouleImg from "../assets/projects/poule.png";
import ameerImg from "../../../assets/projects/ameer-ai.png";
import nextOnAuxImg from "../../../assets/projects/Next-on-aux.png";
import domainRiskImg from "../../../assets/projects/domain-risk.png";
import techme from "../../../assets/projects/techme.png";

export const projectData = [
  {
    id: 1,
    title: "Tech-Me",
    description:
      "Get personalized insights and practice questions to prepare for upcoming tech interviews across a wide range of technical fields.",
    image: techme,
    tools: ["Docker", "TypeScript", "Node js", "Gemini API", "Vapi API"],
  },
  {
    id: 2,
    title: "Ameer AI",
    description:
      "A trip budgeting app that helps users plan expenses, navigate destinations, and organize their travel experience, built with a Gin RESTful backend integrated with the Google Maps API for accurate and reliable location data.",    image: ameerImg,
    githubLink: "https://github.com/jonuoha60/Ameer-AI",
    tools: ["Go", "TypeScript", "CSS", "MongoDB", "Gemini API", "Google Maps API"],
  },
  {
    id: 3,
    title: "Next on Aux",
    description:
      "Built a music listening platform with the spotify API where users create and join rooms to listen to music with friends in real time, and compete to see who has the best music taste.",
    image: nextOnAuxImg,
    githubLink: "https://github.com/jonuoha60/Next-on-Aux",
    tools: ["Java", "Spring Boot", "Spring Security", "Spotify API", "JavaScript", "HTML", "CSS", "MySQL"],
  },
  {
    id: 4,
    title: "Domain Risk",
    description:
      "A location-based risk analysis tool that identifies and evaluates potential hazards within physical environments. Analyzes environmental, safety, and situational risks—from fire hazards and structural damage to exposed wiring and unsafe surroundings—giving users a clear picture of danger levels in any space.",
    image: domainRiskImg,
    githubLink: "https://github.com/jonuoha60/Domain-Risk",
    tools: ["React", "TypeScript", "Google Vision", "Docker", "JavaScript"],
  },
];