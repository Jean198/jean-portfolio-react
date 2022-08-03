import './Home.scss'
import projects from '../../../Assets/ProjectsData.json'
import {Project} from '../../Project/Project';
import Recommendations from '../../Recommendations/Recommendations';
import ContactForm from '../../ContactForm/ContactForm';
import Footer from '../../Footer/Footer';
import { BrowserRouter, Link } from 'react-router-dom';
import jeanPhoto from '../../../Assets/images/jean-profile.png'


function Home() {
  return (
    <>
    <div className='welcome-section-container'>
      <div className='profile-image-container'>
      <img src={jeanPhoto} />
      </div>
      <div className='welcome-text-container'>
        <h1>I'm Jean Niyigaba,</h1>
        <p>
        I have a master’s degree in computational engineering and my passion is coding and developing Web Applications.
        I have worked as trainee software developer at Softrain Blobs Oy where I rewrote a big part of their transportation
        software with modern web technologies including React and Nodejs. <br /><br />
        I am looking for an internship or an entry level role to work and improve my skills.
        </p>
        <Link
            to="/about"
            
            rel="noreferrer"
            className="btn home-btn"
          >Read more about me</Link> <br />
          <a className='btn projects-btn' onClick={()=>window.location.replace("/#projects")}>CHECK OUT MY PROJECTS</a>
      </div>
    </div>
    <div className='projects-section' id="projects">
        <div className="title">
            <h2>Projects</h2>
            <div className="title-underline"></div>
        </div>
        <div className='projects-container'>
            {projects.map((project)=>{
              return(
                <Project key={project.id} project={project}/>
              )
            })}
        </div>
    </div>
   <div className='references-section'>
      <div className='title'><h2 >References</h2></div>
      <div className='title-underline'></div>
      <div className='recommendations-container'>
      <Recommendations/>
    </div>
   </div>
    <ContactForm/>
    </>
  );
}
export default Home;
