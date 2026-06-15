
import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaJava,
  FaPython,
  FaGitAlt,
  FaGithub,
  FaDatabase,
} from "react-icons/fa";

import {
  SiTypescript,
  SiNextdotjs,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiSpringboot,
  SiFirebase,
  SiTailwindcss,
  SiRedux,
  SiGo,
} from "react-icons/si";

import "../../constants/styles/Home.css"
import "../../constants/styles/Skills.css"


export const Skills = () => {
  return (
    <div className="container">
      <section className='top-container'>
        <h1>Skills</h1>
      </section>

      <section className="skills-container">
        {/* Frontend */}
        <div className="skill-card">
          <h2>Frontend</h2>
          <div className="skill-items">
            <div className="skill-item"><FaHtml5 color="#e34f26" /><span>HTML5</span></div>
            <div className="skill-item"><FaCss3Alt color="#1572b6" /><span>CSS3</span></div>
            <div className="skill-item"><FaJs color="#f7df1e" /><span>JavaScript</span></div>
            <div className="skill-item"><SiTypescript color="#3178c6" /><span>TypeScript</span></div>
            <div className="skill-item"><FaReact color="#61dafb" /><span>React</span></div>
            <div className="skill-item"><SiNextdotjs color="#fff" /><span>Next.js</span></div>
          </div>
        </div>

        {/* Backend */}
        <div className="skill-card">
          <h2>Backend</h2>
          <div className="skill-items">
            <div className="skill-item"><FaNodeJs color="#539e43" /><span>Node.js</span></div>
            <div className="skill-item"><SiExpress color="#ccc" /><span>Express.js</span></div>
            <div className="skill-item"><SiGo color="#00add8" /><span>Go Lang</span></div>
            <div className="skill-item"><SiSpringboot color="#6db33f" /><span>Spring Boot</span></div>
            <div className="skill-item"><FaJava color="#f89820" /><span>Java</span></div>
            <div className="skill-item"><FaPython color="#3776ab" /><span>Python</span></div>
          </div>
        </div>

        {/* Databases */}
        <div className="skill-card">
          <h2>Databases</h2>
          <div className="skill-items">
            <div className="skill-item"><SiMongodb color="#47a248" /><span>MongoDB</span></div>
            <div className="skill-item"><SiMysql color="#4479a1" /><span>MySQL</span></div>
            <div className="skill-item"><SiPostgresql color="#336791" /><span>PostgreSQL</span></div>
            <div className="skill-item"><SiFirebase color="#ffca28" /><span>Firebase</span></div>
            <div className="skill-item"><FaDatabase color="#f29111" /><span>SQL</span></div>
          </div>
        </div>

        {/* Tools */}
        {/* <div className="skill-card">
          <h2>Tools</h2>
          <div className="skill-items">
            <div className="skill-item"><FaGitAlt color="#f05032" /><span>Git</span></div>
            <div className="skill-item"><FaGithub color="#fff" /><span>GitHub</span></div>
          </div>
        </div> */}
      </section>
    </div>
  );
};
