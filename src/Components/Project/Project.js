import React from 'react'
import Button from '../Button/Button'
import './Project.scss'
import projects from '../../Assets/ProjectsData.json'
import {FaGithub} from 'react-icons/fa'
import {Link} from 'react-router-dom'






export const Project = () => {
  return (

    <>
    <div className='section-title'><h2 >Projects</h2></div>

    <div className='projects-container'>
        
        {projects.map((project)=>(
          <div className='project-container' key={project.id}>
          <div className='project-body-container'>
            <h2>{project.title}</h2>
            
            <img src={project.imageUrl}  />
            <p>{project.summary}</p>
            <div>
              <Link to={project.GitHub}><FaGithub className='GitHub'/></Link>
            </div>
            <Button/>
          </div>
        </div>
        ))}
</div>
    </>
    
  )
}
