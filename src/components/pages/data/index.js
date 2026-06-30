// import pouleImg from "../assets/projects/poule.png";
import ameerImg from "../../../assets/projects/ameer-ai.png";
import nextOnAuxImg from "../../../assets/projects/Next-on-aux.png";
import domainRiskImg from "../../../assets/projects/domain-risk.png";

export const projectData = [
  {
    id: 1,
    title: "Poule Mockup Interview",
    description:
      "Get personalized insights and practice questions to prepare for upcoming tech interviews across a wide range of technical fields.",
    // image: pouleImg,
    tools: ["Docker", "TypeScript", "Gemini API", "Vapi"],
  },
  {
    id: 2,
    title: "Ameer AI",
    description:
      "A trip budgeting app designed to help users plan expenses, navigate destinations, and organize their travel experience.",
    image: ameerImg,
    githubLink: "https://github.com/jonuoha60/Ameer-AI",
    tools: ["Go", "TypeScript", "MongoDB", "Gemini API", "Google Maps API"],
  },
  {
    id: 3,
    title: "Next on Aux",
    description:
      "This project allows users to access Spotify queues, listen to music with friends in real time, and compete to see who has the best music taste.",
    image: nextOnAuxImg,
    githubLink: "https://github.com/jonuoha60/Next-on-Aux",
    tools: ["Spring Boot", "Spotify API", "JavaScript", "CSS", "JWT Auth"],
  },
  {
    id: 4,
    title: "Domain Risk",
    description:
      "A location-based risk analysis tool that identifies and evaluates potential hazards within physical environments. Analyzes environmental, safety, and situational risks—from fire hazards and structural damage to exposed wiring and unsafe surroundings—giving users a clear picture of danger levels in any space.",
    image: domainRiskImg,
    githubLink: "https://github.com/jonuoha60/Domain-Risk",
    tools: ["Google Vision", "TypeScript", "Docker", "JavaScript"],
  },
];