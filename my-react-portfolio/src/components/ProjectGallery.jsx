import React, { useState, useEffect } from 'react';
import ProjectCard from './ProjectCard'; // Importing the ProjectCard component
import projectsData from '../projectsData.json'; // Importing JSON data

const ProjectGallery = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // Fetch project data
    setProjects(projectsData);
  }, []);

  return (
    <div className="project-gallery">
      {projects.map(project => (
        <ProjectCard
          key={project.id}
          title={project.title}
          description={project.description}
          demoLink={project.demoLink}
          image={project.image}
        />
      ))}
    </div>
  );
};

export default ProjectGallery;
