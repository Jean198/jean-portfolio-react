import './Home.scss'

import {Project} from '../../Project/Project';
import Recommendations from '../../Recommendations/Recommendations';
import ContactForm from '../../ContactForm/ContactForm';
import Footer from '../../Footer/Footer';

import jeanPhoto from '../../../Assets/images/jean-profile.png'



function Home() {
  return (
    <>
    <div className='welcome-section-container'>
      <div className='profile-image-container'>
      <img src={jeanPhoto} />
      </div>
      <div className='welcome-text-container'>
        <h1>I'm Jean Niyigaba!</h1>
        <p>
        I have a master’s degree in computational engineering and my passion is coding and developing Web Applications.
        I have worked as trainee software developer at Softrain Blobs Oy where I rewrote a big part of their transportation
        software with modern web technologies including React and Nodejs. <br /><br />
        I am looking for an internship or an entry level role to work and improve my skills.
        </p>
      </div>
    </div>

    <hr />
    
    <Project/>
    <hr />
    <Recommendations/>
    <hr />

    <ContactForm/>
    <Footer/>

    </>
  );
}
export default Home;
