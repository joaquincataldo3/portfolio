import React, { useEffect } from 'react';
import postgreSqlSvg from '../../assets/images/postgresqlsv.svg';
import nestJsSvg from '../../assets/images/nestjs-icon.svg';
import mySqlLogo from '../../assets/images/mysql.svg';
import { useGlobalContext } from '../../hooks/context';
import { Link } from 'react-router-dom';
import './Projects.css';

function Projects() {

  const { renderComp, handleRenderComp } = useGlobalContext()

  useEffect(() => {
    handleRenderComp()
  }, [handleRenderComp])

  const projects = [
    {
      id: 1,
      title: 'Appointify',
      description: 'Appointment app in process that allows a client to schedule an appointment with a professional, based on its schedule.',
      svg: [
        nestJsSvg,
        postgreSqlSvg
      ],
      links: {
        deploy: null,
        github: 'https://github.com/joaquincataldo3/appointify-server'
      }
    },
    {
      id: 2,
      title: 'Twittardo client',
      description: 'Client side of Twittardo app. It consumes Twittardo API. Similar to Twitter.',
      icons: [
        'bxl-react project-icon',
        'bxl-typescript project-icon'
      ],
      links: {
        deploy: null,
        github: 'https://github.com/joaquincataldo3/twittardo-client'
      }
    },
    {
      id: 3,
      title: 'Service Orders',
      description: 'App that allows a store to create work orders and then get them as PDF to be printable. AWS was utilized. There are several features implemented.',
      svg: [
        nestJsSvg,
        mySqlLogo
      ],
      links: {
        deploy: null,
        github: 'https://github.com/joaquincataldo3/service-orders'
      }
    },
    {
      id: 4,
      title: 'Twittardo API',
      description: 'API that handles most of the Twitter functionalities and features, such as create a twitt, follow a user, being followed, get a notification, etc.',
      icons: [
        'bxl-typescript project-icon',
        'bxl-aws project-icon'
      ],
      links: {
        deploy: 'https://twittardo-api.onrender.com',
        github: 'https://github.com/joaquincataldo3/service-orders'
      }
    },
    {
      id: 5,
      title: 'GOT',
      description: 'React App that consumes an API based in the famous tv show Game Of Thrones',
      icons: [
        'bxl-react project-icon'
      ],
      links: {
        deploy: 'https://got-react-xi.vercel.app/',
        github: 'https://github.com/joaquincataldo3/got-react'
      }
    },
    {
      id: 5,
      title: 'Movx',
      description: "MongoDB movies API. CRUD functions were applied and it's respective no-relational/no-SQL data also utilized",
      icons: [
        'bxl-javascript project-icon',
        'bxl-mongodb project-icon'
      ],
      links: {
        deploy: 'https://lemon-chick-sari.cyclic.app/',
        github: 'https://github.com/joaquincataldo3/got-react'
      }
    },
  ]

  return (
    <main className={`projects-main ${renderComp && 'projects-main-active'}`}>
      <h1 className='projects-intro-title'>My projects</h1>
      <div className='projects-wrapper'>

        {
          projects.map(project => {
            const { id, title, description, links } = project;
            return (
              <div className='project-container' key={id}>

                <div className='project-title-container'>
                  <h3 className='project-title'>{title}</h3>
                </div>

                <div className='project-description-container'>
                  <p className='project-description'>
                    {description}
                  </p>
                </div>

                  <div className='stack-used'>
                    <h4>Stack used</h4>
                    {
                      project.icons ?
                        <div className='skills-used'>
                          {
                            project.icons.map((icon, i) => {
                              return (
                                <i key={i} class={`bx ${icon}`}></i>
                              )
                            })
                          }
                        </div>
                        :
                        <div className='project-svgs-container'>
                          {
                            project.svg.map((svg, i) => {
                              return (
                                <div key={i} className='one-svg-container'>
                                  <img src={svg} alt={`${i}-${svg}`} />
                                </div>
                              )
                            })
                          }
                        </div>

                    }
                  </div>
                  <div className='project-links-container'>
                    <button className='project-link-btn'><Link target='_black' to={`${links.github}`}>GITHUB</Link></button>
                    <button className='project-link-btn'><Link target='_black' to={`${links.deploy ? links.deploy : '#'}`}>{`${links.deploy ? 'DEPLOY' : 'DEPLOY NOT AVAILABLE'}`}</Link></button>
                  </div>

                </div>
                )
          })
        }


                {/* 
        <div className='project-container'>

          <div className='project-info'>
            <h3 className='project-title'>Twittardo API</h3>
            <p className='project-description'>
              Typescript API that I'll use to build a project called Twittardo. This will be a project similar to Twitter. I created the functionality to create twitts -that's my way to call it-,
              comment a twitt, follow someone, etcetera. AWS was used to upload images. Also, it features admin and user login functionality.
            </p>

            <div className='skills-used'>
              <i class='bx '></i>
              <i class='bx '></i>
            </div>
            <div className='project-links-container'>
              <button className='project-link-btn'><Link target='_black' to='#'>DEPLOY SOON</Link></button>
              <button className='project-link-btn'><Link target='_black' to='https://github.com/joaquincataldo3/twittardo-api'>GITHUB</Link></button>
            </div>
          </div>
        </div>

        <div className='project-container'>

          <div className='project-info'>
            <h3 className='project-title'>Dictify</h3>
            <p className='project-description'>
              React + VITE dictionary project that consumes an API and the user is able to search word by word. In addition, the recently searched words
              function was implemented using LocalStorage.
            </p>

            <div className='skills-used'>
              <i class='bx bxl-react'></i>
            </div>
            <div className='project-links-container'>
              <button className='project-link-btn'><Link target='_blank' to='https://dictify.vercel.app/'>DEPLOY</Link></button>
              <button className='project-link-btn'><Link target='_blank' to='https://github.com/joaquincataldo3/got-react'>GITHUB</Link></button>
            </div>
          </div>
        </div>

        <div className='project-container'>

          <div className='project-info'>
            <h3 className='project-title'>GOT</h3>
            <p className='project-description'>
              React project that consumes an API based in the famous tv show Game of Thrones
            </p>

            <div className='skills-used'>
              <i class='bx '></i>
            </div>
            <div className='project-links-container'>
              <button className='project-link-btn'><Link target='_blank' to='https://got-react-xi.vercel.app/'>DEPLOY</Link></button>
              <button className='project-link-btn'><Link target='_blank' to='https://github.com/joaquincataldo3/got-react'>GITHUB</Link></button>
            </div>
          </div>
        </div>


        <div className='project-container'>
          <div className='project-img'>
            <img src={moviesApiImg} alt="Movies API project" className='adjust-project-img' />
          </div>
          <div className='project-info'>
            <h3 className='project-title'>Movies API</h3>
            <p className='project-description'>

            </p>

            <div className='skills-used'>
              <i class='bx ' ></i>
            </div>
            <div className='project-links-container'>
              <button className='project-link-btn'><Link target='_black' to='https://brave-goat-pinafore.cyclic.app/'>DEPLOY</Link></button>
              <button className='project-link-btn'><Link target='_black' to='https://github.com/joaquincataldo3/mongo-movies-api'>GITHUB</Link></button>
            </div>
          </div>
        </div>


        <div className='project-container'>
          <div className='project-img'>
            <img src={todoListImg} alt="Todo list project" className='adjust-project-img' />
          </div>
          <div className='project-info'>
            <h3 className='project-title'>TODO List</h3>
            <p className='project-description'>
              Simple but effective todo list made with React. The user is able to create, edit, delete and mark as done a reminder.
            </p>

            <div className='skills-used'>
              <i class='bx bxl-react'></i>

            </div>
            <div className='project-links-container'>
              <button className='project-link-btn'><Link target='_blank' to='https://react-todolist-theta.vercel.app/'>DEPLOY</Link></button>
              <button className='project-link-btn'><Link target='_blank' to='https://github.com/joaquincataldo3/react-todolist'>GITHUB</Link></button>
            </div>
          </div>
        </div> */}



              </div>
    </main>
  )
}

export default Projects