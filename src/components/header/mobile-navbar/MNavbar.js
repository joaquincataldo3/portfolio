import React from 'react'
import { NavLink } from 'react-router-dom'
import { useGlobalContext } from '../../../hooks/context'
import './MNavbar.css'

function MNavbar(props) {

  const { isMobileNavbarOpen, setIsMobileNavbarOpen } = props;
  const { setRenderComp } = useGlobalContext()

  const handleNavbarLinkClick = (e) => {
    if (e.currentTarget.classList.contains('mobile-nav-link-active')) {
      return true
    } else {
      setIsMobileNavbarOpen(!isMobileNavbarOpen)
      return setRenderComp(false)
    }
  }


  return (
    <nav className={`mobile-nav-submenu-container ${isMobileNavbarOpen && 'mobile-nav-submenu-container-active'}`}>


      <NavLink to='/'
        className={({ isActive }) => isActive ? 'mobile-nav-link-active' : 'mobile-nav-link'}
        onClick={(e) => handleNavbarLinkClick(e)}>
        <i className='bx bx-home-alt-2'></i>
        <span>Home</span>
      </NavLink>

      <NavLink to='/projects'
        className={({ isActive }) => isActive ? 'mobile-nav-link-active' : 'mobile-nav-link'}
        onClick={(e) => handleNavbarLinkClick(e)}>
        <i className='bx bx-folder' ></i>
        <span>Projects</span>
      </NavLink>

      <NavLink to='/professional-experience'
        className={({ isActive }) => isActive ? 'mobile-nav-link-active' : 'mobile-nav-link'}
        onClick={(e) => handleNavbarLinkClick(e)}>
       <i className='bx bx-briefcase'></i>
        <span>Professional</span>
      </NavLink>
      

      <NavLink to='/skills'
        className={({ isActive }) => isActive ? 'mobile-nav-link-active' : 'mobile-nav-link'}
        onClick={(e) => handleNavbarLinkClick(e)}>
        <i className='bx bx-wrench'></i>
        <span>Skills</span>
      </NavLink>

      <NavLink to='/contact'
        className={({ isActive }) => isActive ? 'mobile-nav-link-active' : 'mobile-nav-link'}
        onClick={(e) => handleNavbarLinkClick(e)}>
        <i className='bx bx-user'></i>
        <span>Contact</span>
      </NavLink>

    </nav>
  )
}

export default MNavbar