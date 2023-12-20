import React, { useEffect } from 'react'
import { useGlobalContext } from '../../hooks/context'
import mySqlLogoSvg from '../../assets/images/mysql.svg'
import sequelizeSvg from '../../assets/images/sequelize.svg'
import mongooseNonIcon from '../../assets/images/white_circle.png'
import typescriptSvg from '../../assets/images/typescript.svg'
import javascriptSvg from '../../assets/images/javascriptsvg.svg'
import mongoDbSvg from '../../assets/images/mongodblogo2.svg'
import npmSvg from '../../assets/images/npm.svg'
import gitSvg from '../../assets/images/git-logo.svg'
import trelloSvg from '../../assets/images/trello-icon.svg'
import nodeJSSvg from '../../assets/images/nodejs-logo.svg'
import photoshopSvg from '../../assets/images/photoshop-logo.svg'
import postmanSvg from '../../assets/images/postmanlogo.svg'
import nestJsLogo from '../../assets/images/nestjs-icon.svg'
import postgreSql from '../../assets/images/postgresqlsv.svg'
import './Skills.css'

function Skills() {

  const { renderComp, handleRenderComp } = useGlobalContext()

  useEffect(() => {
    handleRenderComp()
  }, [handleRenderComp])

  const frontEndList = [
    {
      name: 'React',
      logo: 'bx bxl-react'
    },
    {
      name: 'Typescript',
      logo: 'bx bxl-typescript'
    },
    {
      name: 'Javascript',
      logo: 'bx bxl-javascript'
    },
    {
      name: 'CSS',
      logo: 'bx bxl-css3'
    }, 
    {
      name: 'HTML',
      logo: 'bx bxl-html5',
    },
    {
      name: 'Bootstrap',
      logo: 'bx bxl-bootstrap'
    }
  ]

  const backEndList = [
    {
      name: 'NestJS',
      logo: nestJsLogo
    },
    {
      name: 'Typescript',
      logo: typescriptSvg
    },
    {
      name: 'Node JS',
      logo: nodeJSSvg,
    },
    {
      name: 'Javascript',
      logo: javascriptSvg
    },
    {
      name: 'Sequelize',
      logo: sequelizeSvg
    },
    {
      name: 'Mongoose',
      logo: mongooseNonIcon
    }
  ]

  const dbList = [
    {
      name: 'PostgreSQL',
      logo: postgreSql
    },
    {
      name: 'MySQL',
      logo: mySqlLogoSvg,
    },
    {
      name: 'MongoDB',
      logo: mongoDbSvg,
  
    }
  ]

  const otherToolsList = [
    
    {
      name: 'NPM',
      logo: npmSvg,
    },
    {
      name: 'Git',
      logo: gitSvg,
    },
    {
      name: 'Trello',
      logo: trelloSvg
    },
    {
      name: 'Photoshop',
      logo: photoshopSvg
    },
    {
      name: 'Postman',
      logo: postmanSvg
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
                  <li key={i} className='skill frontend-skill skill-even'>
                    <i className={skill.logo}></i>
                    <p className='skill-name'>{skill.name}</p>
                  </li>
                )
              }
              return (
                <li key={i} className='skill frontend-skill skill-odd'>
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
                  <li key={i}  className='skill backend-skill skill-even'>
                    <img src={skill.logo} alt={skill.name} className={`${skill.name === 'Typescript' && 'typescript-img'}`} />
                    <p className='skill-name'>{skill.name}</p>
                  </li>
                )
              }
              return (
                <li key={i}  className='skill backend-skill skill-odd'>
                  <img src={skill.logo} alt={skill.name} />
                  <p className='skill-name'>{skill.name}</p>
                </li>
              )
            })
          }
        </ul>
      </div>
      <div className='skills-list-container'>
        <h3 className='skills-stack-title'>Databases</h3>
        <ul type='none' className='skills'>
          {
            dbList.map((skill, i) => {
              if (i % 2 === 0) {
                return (
                  <li key={i}  className='skill db-list-skill skill-even'>
                    <img src={skill.logo} alt={skill.name} className={`${skill.name === 'Typescript' && 'typescript-img'}`} />
                    <p className='skill-name'>{skill.name}</p>
                  </li>
                )
              }
              return (
                <li key={i}  className='skill db-list-skill skill-odd'>
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
                  <li key={i}  className='skill other-skill skill-even'>
                    <img src={skill.logo} alt={skill.name} />
                    <p className='skill-name'>{skill.name} {skill.handler && `+ ${skill.handler}`}</p>
                  </li>
                )
              }
              return (
                <li  key={i} className='skill other-skill skill-odd'>
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