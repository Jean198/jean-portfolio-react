import React from 'react'
import './Button.scss'
import {Link} from 'react-router-dom'

const Button = ({projectUrl}) => {
  return (
    <>
        <a href={projectUrl} className="link" target="_blank">
        <div className='button'>
          PROJECT URL
        </div>
        </a>
    </>
  )
}
export default Button
