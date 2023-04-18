import React from 'react'
import { NavLink } from 'react-router-dom'
import { useGlobalContext } from '../../../../hooks/context'
import '../eng/DNavbar.css'

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
      <NavLink to='/professional-experience' className={({ isActive }) => isActive ? 'desktop-nav-link-active' : 'desktop-nav-link'} onClick={(e) => handleNavbarLinkClick(e)}>
        <i class='bx bx-folder' ></i>
        <span>Profesional</span>
      </NavLink>
      <NavLink to='/projects' className={({ isActive }) => isActive ? 'desktop-nav-link-active' : 'desktop-nav-link'} onClick={(e) => handleNavbarLinkClick(e)}>
        <i class='bx bx-folder' ></i>
        <span>Proyectos</span>
      </NavLink>
      <NavLink to='/skills' className={({ isActive }) => isActive ? 'desktop-nav-link-active' : 'desktop-nav-link'} onClick={(e) => handleNavbarLinkClick(e)}>
        <i class='bx bx-wrench'></i>
        <span>Habilidades</span>
      </NavLink>
      <NavLink to='/contact' className={({ isActive }) => isActive ? 'desktop-nav-link-active' : 'desktop-nav-link'} onClick={(e) => handleNavbarLinkClick(e)}>
        <i class='bx bx-user'></i>
        <span>Contacto</span>
      </NavLink>

    </nav>
  )
}

export default DNavbar