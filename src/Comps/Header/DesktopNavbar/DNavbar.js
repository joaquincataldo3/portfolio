import React from 'react'
import { NavLink } from 'react-router-dom'
import './DNavbar.css'

function DNavbar() {



  return (
    <nav className='desktop-navbar-container'>

      <NavLink to='/' className={({ isActive }) => isActive ? 'desktop-nav-link-active' : 'desktop-nav-link'}>
        <i class='bx bx-home-alt-2'></i>
        <span>Home</span>
      </NavLink>
      <NavLink to='/projects' className={({ isActive }) => isActive ? 'desktop-nav-link-active' : 'desktop-nav-link'}>
        <i class='bx bx-folder' ></i>
        <span>Projects</span>
      </NavLink>
      <NavLink to='/skills' className={({ isActive }) => isActive ? 'desktop-nav-link-active' : 'desktop-nav-link'}>
        <i class='bx bx-wrench'></i>
        <span>Skills</span>
      </NavLink>
      <NavLink to='/contact' className={({ isActive }) => isActive ? 'desktop-nav-link-active' : 'desktop-nav-link'}>
        <i class='bx bx-user'></i>
        <span>Contact</span>
      </NavLink>

    </nav>
  )
}

export default DNavbar