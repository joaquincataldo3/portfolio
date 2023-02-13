import React from 'react'
import { NavLink } from 'react-router-dom'
import './DNavbar.css'

function DNavbar() {



  return (
    <nav className='desktop-navbar-container'>
     
      <NavLink to='/'className={({isActive}) => isActive ? 'desktop-nav-link-active' : 'desktop-nav-link'}>Home</NavLink>
      <NavLink to='/projects'className={({isActive}) => isActive ? 'desktop-nav-link-active' : 'desktop-nav-link'}>Projects</NavLink>
      <NavLink to='/about-me'className={({isActive}) => isActive ? 'desktop-nav-link-active' : 'desktop-nav-link'}>About me</NavLink>
      <NavLink to='/skills'className={({isActive}) => isActive ? 'desktop-nav-link-active' : 'desktop-nav-link'}>Skills</NavLink>
      <NavLink to='/contact'className={({isActive}) => isActive ? 'desktop-nav-link-active' : 'desktop-nav-link'}>Contact</NavLink>

    </nav>
  )
}

export default DNavbar