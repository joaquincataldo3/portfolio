import React from 'react'
import { NavLink} from 'react-router-dom'
import './MNavbar.css'

function MNavbar(props) {

  const {isMobileNavbarOpen, setIsMobileNavbarOpen} = props;

  return (
    <nav className={`mobile-nav-submenu-container ${isMobileNavbarOpen && 'mobile-nav-submenu-container-active'}`}>


      <NavLink to='/' 
      className={({isActive}) => isActive ? 'mobile-nav-link-active' : 'mobile-nav-link'}
      onClick={() => setIsMobileNavbarOpen(!isMobileNavbarOpen)}>
        <i class='bx bx-home-alt-2'></i>
        <span>Home</span>
      </NavLink>
      
      <NavLink to='/projects' 
      className={({isActive}) => isActive ? 'mobile-nav-link-active' : 'mobile-nav-link'}
      onClick={() => setIsMobileNavbarOpen(!isMobileNavbarOpen)}>
        <i class='bx bxs-folder'></i>
        <span>Projects</span>
      </NavLink>
      
      <NavLink to='/skills' 
      className={({isActive}) => isActive ? 'mobile-nav-link-active' : 'mobile-nav-link'}
      onClick={() => setIsMobileNavbarOpen(!isMobileNavbarOpen)}>
        <i class='bx bx-wrench'></i>
        <span>Skills</span>
      </NavLink>
      
      <NavLink to='/contact' 
      className={({isActive}) => isActive ? 'mobile-nav-link-active' : 'mobile-nav-link'}
      onClick={() => setIsMobileNavbarOpen(!isMobileNavbarOpen)}>
        <i class='bx bxs-user'></i>
        <span>Contact</span>
      </NavLink>

    </nav>
  )
}

export default MNavbar