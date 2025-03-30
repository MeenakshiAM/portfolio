import Project from "./components/project";
import React from "react";
import "./index.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa"; // Remove if not needed

const projectList = [
  {
    title: "Portfolio Website",
    description: "A personal portfolio to showcase my work.",
    github: "https://github.com/yourusername/portfolio",
    live: "https://yourportfolio.com",
    image: "https://via.placeholder.com/150",
  },
  {
    title: "QR Code Generator",
    description: "Generate QR codes easily with this app.",
    github: "https://github.com/yourusername/qrcode-app",
    live: "https://qrcodeapp.com",
    image: "https://via.placeholder.com/150",
  },
  {
    title: "News Website",
    description: "Stay updated with the latest news.",
    github: "https://github.com/yourusername/news-app",
    live: "https://newswebsite.com",
    image: "https://via.placeholder.com/150",
  },
];

export default function Projects() {
  return (
    <section className="projects">
      <h2>My Projects</h2>
      <div className="projects-container">
        {projectList.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
}

function ProjectCard({ title, description, github, live, image }) {
  return (
    <div className="project-card">
      <img src={image} alt={title} className="project-image" />
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="project-links">
        <a href={github} target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        <a href={live} target="_blank" rel="noopener noreferrer">
          Live Demo
        </a>
      </div>
    </div>
  );
}
