import { useParams, Link } from "react-router-dom";
import projects from "../../../Assets/ProjectsData.json";
import "./ProjectDetails.scss";
import { FaGithub } from "react-icons/fa";

const ProjectDetails = () => {
  let { id } = useParams();
  return (
    <div className="detailed-project-container">
      {projects
        .filter((project) => project.id === parseInt(id))
        .map((project, index) => {
          return (
            <div key={index}>
              <img src={project.imageUrl} />
              <div className="detailed-project-summary">
                <h5>{project.title}</h5>
                <p>{project.summary}</p>
                <a href={project.GitHub} className="custom-btn github-link-btn link">
                  GitHub Link <FaGithub className="GitHub" />
                </a>{" "}
                <br /> <br />
                <a href={project.projectUrl} className="custom-btn project-link-btn link" target="blank">
                  Project Link
                </a>
              </div>
            </div>
          );
        })}
    </div>
  );
};
export default ProjectDetails;
