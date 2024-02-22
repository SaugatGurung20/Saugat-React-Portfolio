import React from 'react';

const ProjectCard = ({ title, image, description, demoLink }) => {
  return (
    <div className="col-md-6 mb-4">
      <div className="card">
        <img src={image} className="card-img-top" alt={title} />
        <div className="card-body">
          <p className="card-title">{title}</p>
          <p className="card-text">{description}</p>
          <a href={demoLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary">View Project</a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
