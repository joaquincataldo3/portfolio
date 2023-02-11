import React from 'react'
import { NavLink } from 'react-router-dom'
import './MNavbar.css'

function MNavbar(props) {

  const {isMobileNavbarOpen} = props;

  return (
    <nav className={`mobile-nav-container ${isMobileNavbarOpen && 'mobile-nav-container-active'}`}>
     
      <NavLink to='/' className='mobile-nav-link'>Home</NavLink>
      <NavLink to='/projects' className='mobile-nav-link'>Projects</NavLink>
      <NavLink to='/about-me' className='mobile-nav-link'>About me</NavLink>
      <NavLink to='/skills' className='mobile-nav-link'>Skills</NavLink>
      <NavLink to='/contact' className='mobile-nav-link'>Contact</NavLink>

    </nav>
  )
}

export default MNavbar