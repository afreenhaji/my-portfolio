import React from 'react';
import "../styles/Project.css";
import port from "../assets/port.png";
import weather from "../assets/weather.png";

function Project() {
  const projects = [
    {
      img: weather,
      year: "2024",
      description: "Built a responsive React app that fetches live weather data via API to display real-time temperature with a clean, user-friendly interface.",
      live: "https://weather-app-afreen.vercel.app", 
      git: "https://github.com/afreenhaji/WeatherApp",  
    },
    {
      img: port,
      year: "2025",
      description: "Developed a dark-themed, responsive React portfolio to showcase skills, projects, and achievements with smooth transitions and modern UI design.",
      live: "#",
      git: "#",
    },
  ];

  return (
    <div className='proj' id="project">
      <div className='p'>PROJECTS</div>
      <div className='proj-container'>
        {projects.map((item, index) => (
          <div className='proj-card' key={index}>
            <img src={item.img} alt={`project-${index}`} />
            <div className='proj-info'>
              <span className='year'>{item.year}</span>
              <p className='description'>{item.description}</p>
              <div className='buttons'>
                <a href={item.live} target="_blank" rel="noopener noreferrer" className='btn live-btn'>Live Demo</a>
                <a href={item.git} target="_blank" rel="noopener noreferrer" className='btn git-btn'>GitHub</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Project;
