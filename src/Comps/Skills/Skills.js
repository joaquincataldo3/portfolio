import React, { useEffect } from 'react'
import { useGlobalContext } from '../context'
import './Skills.css'

function Skills() {

  const { renderComp, handleRenderComp } = useGlobalContext()

  useEffect(() => {
    handleRenderComp()
  }, [])

  const frontEndList = [
    {
      name: 'HTML',
      logo: '',
    },
    {
      name: 'CSS',
      logo: ''
    },
    {
      name: 'Javascript',
      logo: ''
    },
    {
      name: 'React',
      logo: ''
    },
    {
      name: 'Bootstrap',
      logo: ''
    }
  ]

  const backEndList = [
    {
      name: 'MySQL',
      logo: '',
      handler: 'ORM Sequelize'
    },
    {
      name: 'MongoDB',
      logo: '',
      handler: 'ODM Mongoose'
    },
    {
      name: 'Javascript',
      logo: ''
    }
  ]


  return (
    <main className={`skills-main ${renderComp && 'skills-main-active'}`}>
      <h1 className='skills-intro-title'>Skills</h1>
      <div className='skills-list-container'>
        <h3 className='skills-stack-title'>Front end</h3>
      </div>
      <div className='skills-list-container'>
        <h3 className='skills-stack-title'>Back end</h3>
      </div>
    </main>
  )
}

export default Skills