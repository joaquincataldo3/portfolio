import React from 'react'
import { NavLink } from 'react-router-dom'
import { useGlobalContext } from '../../context'
import './DNavbar.css'

function DNavbar() {

  const { setRenderComp } = useGlobalContext()

  const handleNavbarLinkClick = (e) => {
    if (e.currentTarget.classList.contains('desktop-nav-link-active')) {
      return true
    } else {
      return setRenderComp(false)
    }

  }

  return (

    <nav className='desktop-navbar-container'>

      <NavLink to='/' className={({ isActive }) => isActive ? 'desktop-nav-link-active' : 'desktop-nav-link'} onClick={(e) => handleNavbarLinkClick(e)}>
        <i class='bx bx-home-alt-2'></i>
        <span>Home</span>
      </NavLink>
      <NavLink to='/projects' className={({ isActive }) => isActive ? 'desktop-nav-link-active' : 'desktop-nav-link'} onClick={(e) => handleNavbarLinkClick(e)}>
        <i class='bx bx-folder' ></i>
        <span>Projects</span>
      </NavLink>
      <NavLink to='/skills' className={({ isActive }) => isActive ? 'desktop-nav-link-active' : 'desktop-nav-link'} onClick={(e) => handleNavbarLinkClick(e)}>
        <i class='bx bx-wrench'></i>
        <span>Skills</span>
      </NavLink>
      <NavLink to='/contact' className={({ isActive }) => isActive ? 'desktop-nav-link-active' : 'desktop-nav-link'} onClick={(e) => handleNavbarLinkClick(e)}>
        <i class='bx bx-user'></i>
        <span>Contact</span>
      </NavLink>

    </nav>
  )
}

export default DNavbar