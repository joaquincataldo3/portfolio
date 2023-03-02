import React, { useEffect } from 'react'
import { useGlobalContext } from '../context'
import './Skills.css'
import mySqlLogo from '../../assets/images/mysql.svg'
import javascriptSvg from '../../assets/images/javascriptsvg.svg'
import mongoDbLogo from '../../assets/images/mongodblogo2.svg'
import npmLogo from '../../assets/images/npm.svg'
import gitLogo from '../../assets/images/git-logo.svg'
import trelloLogo from '../../assets/images/trello-icon.svg'
import nodeJS from '../../assets/images/nodejs-logo.svg'
import photoshopLogo from '../../assets/images/photoshop-logo.svg'
import postmanLogo from '../../assets/images/postmanlogo.svg'

function Skills() {

  const { renderComp, handleRenderComp } = useGlobalContext()

  useEffect(() => {
    handleRenderComp()
  }, [])

  const frontEndList = [
    {
      name: 'HTML',
      logo: 'bx bxl-html5',
    },
    {
      name: 'CSS',
      logo: 'bx bxl-css3'
    },
    {
      name: 'Javascript',
      logo: 'bx bxl-javascript'
    },
    {
      name: 'React',
      logo: 'bx bxl-react'
    },
    {
      name: 'Bootstrap',
      logo: 'bx bxl-bootstrap'
    }
  ]

  const backEndList = [
    {
      name: 'MySQL',
      logo: mySqlLogo,
      handler: 'Sequelize'
    },
    {
      name: 'MongoDB',
      logo: mongoDbLogo,
      handler: 'Mongoose'

    },
    {
      name: 'Javascript',
      logo: javascriptSvg
    }
  ]

  const otherToolsList = [
    {
      name: 'Node JS',
      logo: nodeJS,
    },
    {
      name: 'NPM',
      logo: npmLogo,
    },
    {
      name: 'Git',
      logo: gitLogo,
    },
    {
      name: 'Trello',
      logo: trelloLogo
    },
    {
      name: 'Photoshop',
      logo: photoshopLogo
    },
    {
      name: 'Postman',
      logo: postmanLogo
    },
  ]


  return (
    <main className={`skills-main ${renderComp && 'skills-main-active'}`}>
      <h1 className='skills-intro-title'>Skills</h1>
      <div className='skills-list-container'>
        <h3 className='skills-stack-title'>Front-end</h3>
        <ul type='none' className='skills'>
          {
            frontEndList.map((skill, i) => {
              if (i % 2 === 0) {
                return (
                  <li className='skill frontend-skill skill-even'>
                    <i className={skill.logo}></i>
                    <p className='skill-name'>{skill.name}</p>
                  </li>
                )
              }
              return (
                <li className='skill frontend-skill skill-odd'>
                  <i className={skill.logo}></i>
                  <p className='skill-name'>{skill.name}</p>
                </li>
              )
            })
          }
        </ul>
      </div>
      <div className='skills-list-container'>
        <h3 className='skills-stack-title'>Back-end</h3>
        <ul type='none' className='skills'>
          {
            backEndList.map((skill, i) => {
              if (i % 2 === 0) {
                return (
                  <li className='skill backend-skill skill-even'>
                    <img src={skill.logo} alt={skill.name} />
                    <p className='skill-name'>{skill.name}</p>
                  </li>
                )
              }
              return (
                <li className='skill backend-skill skill-odd'>
                  <img src={skill.logo} alt={skill.name} />
                  <p className='skill-name'>{skill.name}</p>
                </li>
              )
            })
          }
        </ul>
      </div>
      <div className='skills-list-container'>
        <h3 className='skills-stack-title'>Other tools</h3>
        <ul type='none' className='skills'>
          {
            otherToolsList.map((skill, i) => {
              if (i % 2 === 0) {
                return (
                  <li className='skill other-skill skill-even'>
                    <img src={skill.logo} alt={skill.name} />
                    <p className='skill-name'>{skill.name} {skill.handler && `+ ${skill.handler}`}</p>
                  </li>
                )
              }
              return (
                <li className='skill other-skill skill-odd'>
                  <img src={skill.logo} alt={skill.name} />
                  <p className='skill-name'>{skill.name}</p>
                </li>
              )
            })
          }
        </ul>
      </div>
    </main>
  )
}

export default Skills