import React from 'react'
import './Projects.css'
import quilmacProjectImg from '../../images/quilmacprojectimg.jpg'
import mySqlLogo from '../../images/mysqllogo.png'
import { Link } from 'react-router-dom'

function Projects() {
  return (
    <main className='projects-main'>
      <h1 className='projects-intro-title'>My projects</h1>
      <div className='projects-wrapper'>
        <div className='project-container'>
          <div className='project-img'>
            <img src={quilmacProjectImg} alt="" />
          </div>
          <div className='project-info'>
            <h3 className='project-title'>Quilmac e-commerce</h3>
            <p className='project-description'>Freelance project for a client. Pure CSS/Javascript for the front
              and for the back I used Javascript as well, with its dynamic features combined
              with Sequelize and MySQL to create a CRUD for products and users with its respective validations.
            </p>
          
          <div className='skills-used'>
            <i class='bx bxl-javascript' ></i>
            <i class='bx bxl-css3' ></i>
            <img className='mysql-logo' src={mySqlLogo} alt="" />
            <iconify-icon icon="file-icons:sequelize" style={{color: "#E9E8E8", fontSize: '1.5rem'}}></iconify-icon>
          </div>
          <div className='project-links-container'>
              <button className='project-link-btn'><Link to='#'>Deploy</Link></button>
              <button className='project-link-btn'><Link to='https://github.com/joaquincataldo3/quilmac-website'>Github</Link></button>
          </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Projects