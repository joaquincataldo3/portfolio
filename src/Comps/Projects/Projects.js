import React from 'react'
import './Projects.css'
import quilmacProjectImg from '../../images/quilmacprojectimg.jpg'

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
                  <h3>Quilmac e-commerce</h3>
                  <p>Freelance project for a client. Pure CSS and Javascript for the front
                    and for the back I used Javascript as well, with its dynamic features combined
                    with Sequelize and MySQL to create a CRUD for products and users.
                  </p>
              </div>
              <div className='skills-used'>

              </div>
          </div>
      </div>
    </main>
  )
}

export default Projects