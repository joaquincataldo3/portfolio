import React, { useEffect } from 'react'
import mySqlLogo from '../../images/mysqllogo.png'
import quilmacProjectImg from '../../images/quilmacprojectimg.jpg'
import gotProjectImg from '../../images/gotprojectimg.jpg'
import moviesApiImg from '../../images/moviesapi.jpg'
import todoListImg from '../../images/todolist.jpg'
import { useGlobalContext } from '../context'
import { Link } from 'react-router-dom'
import './Projects.css'

function Projects() {

  const { renderComp, handleRenderComp } = useGlobalContext()

  useEffect(() => {
    handleRenderComp()
  }, [])


  return (
    <main className={`projects-main ${renderComp && 'projects-main-active'}`}>
      <h1 className='projects-intro-title'>My projects</h1>
      <div className='projects-wrapper'>
        <div className='project-container'>
          <div className='project-img'>
            <img src={quilmacProjectImg} alt="Quilmac e-commerce" />
          </div>
          <div className='project-info'>
            <h3 className='project-title'>Quilmac e-commerce</h3>
            <p className='project-description'>Freelance project for a client. Pure CSS/Javascript for the front
              and for the back I used Javascript as well, with its dynamic features combined
              with Sequelize and MySQL to create a CRUD for products and users with its respective validations/relations. Still working on an admin panel.
            </p>

            <div className='skills-used'>
              <i class='bx bxl-javascript' ></i>
              <i class='bx bxl-css3' ></i>
              <img className='mysql-logo' src={mySqlLogo} alt="" />
              <iconify-icon icon="file-icons:sequelize" style={{ color: "#E9E8E8", fontSize: '1.5rem' }}></iconify-icon>
            </div>
            <div className='project-links-container'>
              <button className='project-link-btn'><Link to='#'>DEPLOY</Link></button>
              <button className='project-link-btn'><Link to='https://github.com/joaquincataldo3/quilmac-website'>GITHUB</Link></button>
            </div>
          </div>
        </div>

        <div className='project-container'>
          <div className='project-img'>
            <img src={todoListImg} alt="Todo list project" />
          </div>
          <div className='project-info'>
            <h3 className='project-title'>TODO List</h3>
            <p className='project-description'>
              Simple but effective todo list made with React. The user is able to create, edit, delete and mark as done a reminder.
            </p>

            <div className='skills-used'>
              <i class='bx bxl-mongodb' ></i>
            </div>
            <div className='project-links-container'>
              <button className='project-link-btn'><Link to='https://brave-goat-pinafore.cyclic.app/'>DEPLOY</Link></button>
              <button className='project-link-btn'><Link to='https://github.com/joaquincataldo3/mongo-movies-api'>GITHUB</Link></button>
            </div>
          </div>
        </div>



        <div className='project-container'>
          <div className='project-img'>
            <img src={moviesApiImg} alt="Movies API project" />
          </div>
          <div className='project-info'>
            <h3 className='project-title'>Movies API</h3>
            <p className='project-description'>
              MongoDB movies API. CRUD functions were applied and it's respective no-relational/no-SQL data also utilized.
            </p>

            <div className='skills-used'>
              <i class='bx bxl-react'></i>
            </div>
            <div className='project-links-container'>
              <button className='project-link-btn'><Link to='https://brave-goat-pinafore.cyclic.app/'>DEPLOY</Link></button>
              <button className='project-link-btn'><Link to='https://github.com/joaquincataldo3/mongo-movies-api'>GITHUB</Link></button>
            </div>
          </div>
        </div>

        <div className='project-container'>
          <div className='project-img'>
            <img src={gotProjectImg} alt="Got project" />
          </div>
          <div className='project-info'>
            <h3 className='project-title'>GOT</h3>
            <p className='project-description'>
              React project that consumes an API based in the famous tv show Game of Thrones
            </p>

            <div className='skills-used'>
              <i class='bx bxl-react'></i>
            </div>
            <div className='project-links-container'>
              <button className='project-link-btn'><Link to='https://got-react-xi.vercel.app/'>DEPLOY</Link></button>
              <button className='project-link-btn'><Link to='https://github.com/joaquincataldo3/got-react'>GITHUB</Link></button>
            </div>
          </div>
        </div>

        <div className='other-projects-container'>
          <h3 className='project-title'>Other react basic projects</h3>
          <div className='other-projects-link-btn-container'>
            <button className='project-link-btn' id='other-projects-first-btn'><Link to='https://react-basic-projects-lime.vercel.app/' target='_blank'>DEPLOY</Link></button>
            <button className='project-link-btn'><Link to='https://github.com/joaquincataldo3/react-basic-projects' target='_blank'>GITHUB</Link></button>
          </div>

        </div>


      </div>
    </main>
  )
}

export default Projects