import React, { useState } from "react";
import Button from "../Button/Button";
import "./Project.scss";

import { Link } from "react-router-dom";

export const Project = ({ project }) => {
  return (
    <>
      <Link to={`/project/${project.id}`} className="project-container link">
        <div className="project-image-container">
          <img src={project.imageUrl} />
        </div>
        <footer>
          <h5 className="">{project.title}</h5>
        </footer>
      </Link>
    </>
  );
};
