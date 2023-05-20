import React, { useEffect } from 'react'
import mySqlLogo from '../../assets/images/mysqllogo.png'
import quilmacProjectImg from '../../assets/images/quilmacprojectimg.jpg'
import alterEgoProjectImg from '../../assets/images/alteregoimg.jpg'
import { useGlobalContext } from '../../hooks/context'
import { Link } from 'react-router-dom'
import '../projects/Projects.css'

function Projects() {

  const { renderComp, handleRenderComp } = useGlobalContext()

  useEffect(() => {
    handleRenderComp()
  }, [handleRenderComp])


  return (
    <main className={`projects-main ${renderComp && 'projects-main-active'}`}>
      <h1 className='projects-intro-title'>Professional experience</h1>
      <div className='projects-wrapper'>


        <div className='project-container'>
          <div className='project-img'>
            <img src={quilmacProjectImg} alt="Quilmac e-commerce" className='adjust-project-img'/>
          </div>
          <div className='project-info'>
            <h3 className='project-title'>Quilmac e-commerce</h3>
            <p className='project-description'>Developed/designed project for a phone repair and seller startup. HTML -EJS template based-, and Pure CSS/Javascript for the front
              and MySQL with Sequelize and Javascript to create a CRUD of products and users with its respective validations/relations. Still working on an features/pages.
            </p>

            <div className='skills-used'>
              <i class='bx bxl-javascript' ></i>
              <i class='bx bxl-css3' ></i>
              <img className='mysql-logo' src={mySqlLogo} alt="" />
              <iconify-icon icon="file-icons:sequelize" style={{ color: "#E9E8E8", fontSize: '1.5rem' }}></iconify-icon>
            </div>
            <div className='project-links-container'>
              <button className='project-link-btn'><Link target='_blank' to='https://quilmac-website-production.up.railway.app/'>DEPLOY</Link></button>
              <button className='project-link-btn'><Link target='_blank' to='https://github.com/joaquincataldo3/quilmac-website'>GITHUB</Link></button>
            </div>
          </div>
        </div>

        <div className='project-container'>
          <div className='project-img'>
            <img src={alterEgoProjectImg} alt="Alter ego e-commerce" className='adjust-project-img' />
          </div>
          <div className='project-info'>
            <h3 className='project-title'>Alter ego e-commerce</h3>
            <p className='project-description'>Currently co-developing/designing this freelance project for cloth brand. HTML -EJS template based-, and pure CSS/Javascript for the front
              and MySQL with Sequelize and Javascript to create a CRUD of products and users with its respective validations/relations. Still working on an features/pages.
            </p>

            <div className='skills-used'>
              <i class='bx bxl-javascript' ></i>
              <i class='bx bxl-css3' ></i>
              <img className='mysql-logo' src={mySqlLogo} alt="" />
              <iconify-icon icon="file-icons:sequelize" style={{ color: "#E9E8E8", fontSize: '1.5rem' }}></iconify-icon>
            </div>
            <div className='project-links-container'>
              <button className='project-link-btn'><Link to='#'>DEPLOY -NOT AVAILABLE-</Link></button>
              <button className='project-link-btn'><Link target='_blank' to='https://github.com/joaquincataldo3/proyecto-cherly'>GITHUB</Link></button>
            </div>
          </div>
        </div>


      </div>
    </main>
  )
}

export default Projects