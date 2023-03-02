import React, { useEffect } from 'react'
import mySqlLogo from '../../assets/images/mysqllogo.png'
import quilmacProjectImg from '../../assets/images/quilmacprojectimg.jpg'
import gotProjectImg from '../../assets/images/gotprojectimg.jpg'
import moviesApiImg from '../../assets/images/moviesapi.jpg'
import todoListImg from '../../assets/images/todolist.jpg'
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
            <img src={quilmacProjectImg} alt="Quilmac e-commerce" id='quilmac-img'/>
          </div>
          <div className='project-info'>
            <h3 className='project-title'>Quilmac e-commerce</h3>
            <p className='project-description'>Freelance project for a client. Pure CSS/Javascript for the front
              and MySQL with Sequelize and Javascript to create a CRUD of products and users with its respective validations/relations. Still working on an features/pages.
            </p>

            <div className='skills-used'>
              <i class='bx bxl-javascript' ></i>
              <i class='bx bxl-css3' ></i>
              <img className='mysql-logo' src={mySqlLogo} alt="" />
              <iconify-icon icon="file-icons:sequelize" style={{ color: "#E9E8E8", fontSize: '1.5rem' }}></iconify-icon>
            </div>
            <div className='project-links-container'>
              <button className='project-link-btn'><Link target='_blank'to='https://quilmac-website-production.up.railway.app/'>DEPLOY</Link></button>
              <button className='project-link-btn'><Link target='_blank'to='https://github.com/joaquincataldo3/quilmac-website'>GITHUB</Link></button>
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
              <button className='project-link-btn'><Link target='_blank'to='https://react-todolist-theta.vercel.app/'>DEPLOY</Link></button>
              <button className='project-link-btn'><Link target='_blank'to='https://github.com/joaquincataldo3/react-todolist'>GITHUB</Link></button>
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
              MongoDB movies API. CRUD functions were applied and it's respective no-relational/no-SQL data also utilized and Postman to test it.
            </p>

            <div className='skills-used'>
              <i class='bx bxl-react'></i>
            </div>
            <div className='project-links-container'>
              <button className='project-link-btn'><Link target='_black'to='https://brave-goat-pinafore.cyclic.app/'>DEPLOY</Link></button>
              <button className='project-link-btn'><Link target='_black'to='https://github.com/joaquincataldo3/mongo-movies-api'>GITHUB</Link></button>
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
              <button className='project-link-btn'><Link target='_blank'to='https://got-react-xi.vercel.app/'>DEPLOY</Link></button>
              <button className='project-link-btn'><Link target='_blank'to='https://github.com/joaquincataldo3/got-react'>GITHUB</Link></button>
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