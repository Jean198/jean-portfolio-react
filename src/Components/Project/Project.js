import React, { useState } from "react";
import Button from "../Button/Button";
import "./Project.scss";

import { Link } from "react-router-dom";

export const Project = ({ project }) => {
  return (
    <>
      <Link to={`/project/${project.id}`} className="project-container link">
        <img src={project.imageUrl} />
        <footer>
          <h5 className="">{project.title}</h5>
        </footer>
      </Link>
    </>
  );
};
