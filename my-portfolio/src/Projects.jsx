import Project from "./components/project";

export default function Projects() {
  const projectList = [
    {
      title: "Portfolio Website",
      description: "A personal portfolio to showcase my work.",
      github: "https://github.com/yourusername/portfolio",
      live: "https://yourportfolio.com",
    },
    {
      title: "E-Commerce App",
      description: "A fully functional e-commerce site with payments.",
      github: "https://github.com/yourusername/ecommerce",
      live: "https://ecommerce.com",
    },
    {
      title: "Weather App",
      description: "A weather forecast app using OpenWeather API.",
      github: "https://github.com/yourusername/weather-app",
      live: "https://weatherapp.com",
    },
  ];

  return (
    <section className="projects">
      <h2>My Projects</h2>
      <div className="projects-container">
        {projectList.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </div>
    </section>
  );
}
