import React from 'react';
import './About.scss'
import jeanPhoto from '../../../Assets/images/jean-about.jpg'
export default function About() {
  return (
    <div className='about-container'>
      <div className='about-image-container'>
        <img src={jeanPhoto} alt="My profile Pic" />
      </div>
      <div className='About-text-container'>
        <h1>About Me</h1>
        <p>
          Hi there!
          I am Jean, a master of science in computational engineering and software developer.
          My web development journey started couple years ago when I started a coffee business and didn’t have money to pay for a professional to build a website for my business. So I tought I should learn by myself. I started with HTML and CSS then I started to build my website. As I was building my website, my passion for coding and deloping web applications started rigth there!
          Although the Website never went online, my passion for web development kept growing until I decided to join the software expert intensive training at Jyväskylän ammattikorkeakoulu (JAMK) from may 2021. During This training I was introduced to many software development technologies and worked on many interesting projects. At the end of the training, I knew I really wanted to become a developer but also I realised it requires passion, patience and active learning.
          As I am in middle stage of my developer journey, I am hoping to find a place to work , practice and develop my skills so that my dream to work as web developer would become true someday.
        </p>
      </div>
    </div>
  )
}
