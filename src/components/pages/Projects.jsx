import "../../constants/styles/Projects.css";
import { projectData } from "./data";

export const Projects = () => {
  return (
    <div className="container">
      <section className="top-container">
        <h1>Projects</h1>
      </section>

      <section className="projects-container">
        {projectData.map((project) => (
          <div className="project-card" key={project.id}>
            <h2>{project.title}</h2>

            <p>{project.description}</p>

            {project.tools && (
  <div className="project-tools">
    {project.tools.map((tool) => (
      <span key={tool} className="project-tag">{tool}</span>
    ))}
  </div>
)}

            <div className="project-buttons">
              {project.githubLink ? (<a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="project-btn">View on GitHub</button>
              </a>) : (
                              <button className="project-btn">Read more</button>

              )}
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};