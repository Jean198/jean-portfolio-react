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
                {project.GitHub_fullstack && (
                  <a
                    href={project.GitHub_fullstack}
                    className="custom-btn github-link-btn link"
                    target="blank"
                  >
                    GitHub-fullstack <FaGithub className="GitHub" />
                  </a>
                )}
                {project.GitHub_frontend && (
                  <a
                    href={project.GitHub_frontend}
                    className="custom-btn github-link-btn link"
                    target="blank"
                  >
                    GitHub-frontend <FaGithub className="GitHub" />
                  </a>
                )}
                <br />
                <br />
                {project.GitHub_backend && (
                  <a
                    href={project.GitHub_backend}
                    className="github-backend-link custom-btn github-link-btn link"
                    target="blank"
                  >
                    GitHub-backend <FaGithub className="GitHub" />
                  </a>
                )}
                <br /> <br />
                {project.projectUrl && (
                  <a
                    href={project.projectUrl}
                    className="custom-btn project-link-btn link"
                    target="blank"
                  >
                    See the application live!
                  </a>
                )}
                {project.project_info && (
                  <a
                    href={project.projectUrl}
                    className="custom-btn project-link-btn link"
                    target="blank"
                  >
                    Readmore about Logitar software
                  </a>
                )}
              </div>
            </div>
          );
        })}
    </div>
  );
};
export default ProjectDetails;
