import React from 'react'
import { NavLink} from 'react-router-dom'
import './MNavbar.css'

function MNavbar(props) {

  const {isMobileNavbarOpen, setIsMobileNavbarOpen} = props;

  return (
    <nav className={`mobile-nav-submenu-container ${isMobileNavbarOpen && 'mobile-nav-submenu-container-active'}`}>


      <NavLink to='/' 
      className={({isActive}) => isActive ? 'mobile-nav-link-active' : 'mobile-nav-link'}
      onClick={() => setIsMobileNavbarOpen(!isMobileNavbarOpen)}>Home</NavLink>
      
      <NavLink to='/projects' 
      className={({isActive}) => isActive ? 'mobile-nav-link-active' : 'mobile-nav-link'}
      onClick={() => setIsMobileNavbarOpen(!isMobileNavbarOpen)}>Projects</NavLink>
      
      <NavLink to='/about-me' 
      className={({isActive}) => isActive ? 'mobile-nav-link-active' : 'mobile-nav-link'}
      onClick={() => setIsMobileNavbarOpen(!isMobileNavbarOpen)}>About me</NavLink>
      
      <NavLink to='/skills' 
      className={({isActive}) => isActive ? 'mobile-nav-link-active' : 'mobile-nav-link'}
      onClick={() => setIsMobileNavbarOpen(!isMobileNavbarOpen)}>Skills</NavLink>
      
      <NavLink to='/contact' 
      className={({isActive}) => isActive ? 'mobile-nav-link-active' : 'mobile-nav-link'}
      onClick={() => setIsMobileNavbarOpen(!isMobileNavbarOpen)}>Contact</NavLink>

    </nav>
  )
}

export default MNavbar