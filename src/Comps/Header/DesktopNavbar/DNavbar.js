import React from 'react'
import { NavLink } from 'react-router-dom'
import './DNavbar.css'

function DNavbar() {



  return (
    <nav className='desktop-navbar-container'>
     
      <NavLink to='/'className={({isActive}) => isActive ? 'desktop-navlink-active' : 'desktop-navlink'}>Home</NavLink>
      <NavLink to='/projects'className={({isActive}) => isActive ? 'desktop-navlink-active' : 'desktop-navlink'}>Projects</NavLink>
      <NavLink to='/about-me'className={({isActive}) => isActive ? 'desktop-navlink-active' : 'desktop-navlink'}>About me</NavLink>
      <NavLink to='/skills'className={({isActive}) => isActive ? 'desktop-navlink-active' : 'desktop-navlink'}>Skills</NavLink>
      <NavLink to='/contact'className={({isActive}) => isActive ? 'desktop-navlink-active' : 'desktop-navlink'}>Contact</NavLink>

    </nav>
  )
}

export default DNavbar