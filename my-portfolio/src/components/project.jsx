import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import news from "../assets/images/news_website.png";

export default function Project({ title, description, github, live }) {
  return (
    <section id="projects" className="home">
      <div className="project-card">
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="project-links">
          <a href={github} target="_blank" rel="noopener noreferrer">
            <FaGithub /> GitHub
          </a>
          <a href={live} target="_blank" rel="noopener noreferrer">
            <FaExternalLinkAlt /> Live Demo
          </a>
        </div>
      </div>
    </section>
  );
}
