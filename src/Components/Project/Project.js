import React, {useState} from 'react'
import Button from '../Button/Button'
import './Project.scss'
//import projects from '../../Assets/ProjectsData.json'
import {Link} from 'react-router-dom'


export const Project = ({project}) => {
  //const [readMore, setReadmore]=useState(false)
  return (
    <>
    <Link to={`/project/${project.id}`} className='project-container'>
        <img src={project.imageUrl}  />
        <footer>
          <h5>{project.title}</h5>
        </footer>
    </Link>
        {/*
        <div className='project-container'>
          <div className='project-body-container'>
            <h2>{project.title}</h2>
            <img src={project.imageUrl}  />
            <p >
              { readMore?project.summary:project.summary.substring(0,50)}...
              <button onClick={()=>setReadmore(!readMore)} className="toggle-button">
                {readMore?"Show less": "Read more"}
              </button>
            </p>
            <div>
              <a href={project.GitHub}><FaGithub className='GitHub'/></a>
            </div>
            <Button projectUrl={project.projectUrl}/>
          </div>
        </div>
          */
        }
    </>
  )
}
