import "./Home.scss";
import projects from "../../../Assets/ProjectsData.json";
import { Project } from "../../Project/Project";
import Recommendations from "../../Recommendations/Recommendations";
import ContactForm from "../../ContactForm/ContactForm";
import {Link } from "react-router-dom";
import jeanPhoto from "../../../Assets/images/jean-profile.png";
import { useState } from "react";

function Home() {
  const [seeAll, setSeeAll] = useState(false);
  return (
    <>
      {/* <div>
        <p className="under-construction">
          This site is still under construction, I apologize for things that
          might not work as expected!
        </p>
      </div>*/}
      <div className="welcome-section-container container ">
        <div className="profile-image-container">
          <img src={jeanPhoto} />
        </div>
        <div className="welcome-text-container">
          <h1 className="name">I'm Jean Niyigaba,</h1>
          <p>
            Welcome to my portfolio site! <br />
            <br /> I have a master’s degree in computational engineering and my
            passion is coding and developing Web Applications. I have worked as
            trainee software developer at Softrain Blobs Oy where I rewrote a
            big part of their transportation software with modern web
            technologies including React and Nodejs. <br />
            <br />I am looking for an internship or an entry level role to work
            and improve my skills.
          </p>
          <Link
            to="/about"
            rel="noreferrer"
            className=" custom-btn home-btn link"
          >
            Read more about me
          </Link>{" "}
          <br />
          <a
            className="custom-btn projects-btn link"
            onClick={() => window.location.replace("/#projects")}
          >
            CHECK OUT MY PROJECTS
          </a>
        </div>
      </div>
      <div className="project-section-overall-container">
        <div className="projects-section container" id="projects">
          <div className="title">
            <h2 className="text-white">My Portfolio</h2>
            <div className="title-underline"></div>
          </div>
          <div className="projects-container">
            {!seeAll
              ? projects.slice(0, 3).map((project) => {
                  return <Project key={project.id} project={project} />;
                })
              : projects.map((project) => {
                  return <Project key={project.id} project={project} />;
                })}
          </div>
          {!seeAll ? (
            <button
              className="see-all-button  btn btn-outline"
              onClick={() => setSeeAll(!seeAll)}
            >
              See All
              <i class="fa-solid fa-angle-down"></i>
            </button>
          ) : (
            <button
              className="see-all-button btn btn-outline"
              onClick={() =>{
                setSeeAll(!seeAll)
                window.location.replace("/#projects")
              } }
            >
              See Less
              <i class="fa-solid fa-angle-down see-less"></i>
            </button>
          )}
        </div>
      </div>
      <div className="references-section container">
        <div className="title">
          <h2>References</h2>
        </div>
        <div className="title-underline"></div>
        <div className="recommendations-container container">
          <Recommendations />
        </div>
      </div>
      <ContactForm />
    </>
  );
}
export default Home;
