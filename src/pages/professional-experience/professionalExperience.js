import React, { useEffect } from 'react'
import mySqlLogo from '../../assets/images/mysqllogo.png'
import { useGlobalContext } from '../../hooks/context'
import { Link } from 'react-router-dom'
import '../projects/Projects.css'

function Projects() {

  const { renderComp, handleRenderComp } = useGlobalContext()

  useEffect(() => {
    handleRenderComp()
  }, [handleRenderComp])

  const profProjects = [
    {
      id: 1,
      title: 'ISmile',
      description: 'Co-developed/designed this fullstack e-commerce freelance project for a beauty center. HTML -EJS template based-, and pure CSS/Javascript for the front and MySQL with Sequelize and Javascript with AWS integration to create a CRUD of products and users with its respective validations/relations. The API of a shipping company was consumed. In addition, we used several tools and libraries to fulfill client needs.',
      stack: [
        'bxl-javascript project-icon',
        'bxl-html5 project-icon',
        'bxl-css3 project-icon'
      ],
      svg: mySqlLogo,
      links: {
        deploy: 'ismile.com.ar',
        github: 'https://github.com/jyjdhouse/iSmile'
      }
    },
    {
      id: 2,
      title: 'Quilmac',
      description: 'Developed/designed this fullstack project for a phone repair and seller startup. HTML -EJS template based-, and Pure CSS/Javascript for the front and MySQL with Sequelize and Javascript to create a CRUD of products and users with its respective validations/relations. Still working on an features/pages.',
      stack: [
        'bxl-javascript project-icon',
        'bxl-html5 project-icon',
        'bxl-css3 project-icon'
      ],
      svg: mySqlLogo,
      links: {
        deploy: 'quilmac.com.ar',
        github: 'https://github.com/joaquincataldo3/quilmac-website'
      }

    }
  ]

  return (
    <main className={`projects-main ${renderComp && 'projects-main-active'}`}>
      <h1 className='projects-intro-title'>Professional experience</h1>
      <div className='projects-wrapper'>
        {
          profProjects.map(project => {
            const { title, description, id, stack, svg, links } = project;
            return (
              <div className='project-container' key={id}>

                <div className='project-info'>
                  <div className='project-title-container'>
                    <h3 className='project-title'>{title}</h3>
                  </div>

                  <div className='project-description-container'>
                    <p className='project-description'>
                      {description}
                    </p>
                  </div>


                  <div className='stack-used'>
                    {
                      stack.map((skill, i) => {
                        return (
                          <i class={`bx ${skill}`} ></i>
                        )
                      })
                    }
                    <img className='mysql-logo' src={svg} alt="" />
                  </div>

                  <div className='project-links-container'>
                    <button className='project-link-btn'><Link to={links.deploy} target='_blank'>DEPLOY</Link></button>
                    <button className='project-link-btn'><Link to={links.github} target='_blank'>GITHUB</Link></button>
                  </div>
                </div>
              </div>
            )

          })
        }


        {/*   <div className='project-container'>

          <div className='project-info'>
            <h3 className='project-title'>Quilmac e-commerce</h3>
            <p className='project-description'>
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
 */}


      </div>
    </main>
  )
}

export default Projects