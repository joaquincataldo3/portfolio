import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import EnglishDesktopNavbar from './desktop-navbar/eng/DNavbar'
import EnglishMobileNavbar from './mobile-navbar/eng/MNavbar'
import './Header.css'
import logo from '../../assets/images/whitejclogo.png'




function Header() {

    const [isMobileNavbarOpen, setIsMobileNavbarOpen] = useState(false)

    const handleBurgerMenuClick = () => setIsMobileNavbarOpen(!isMobileNavbarOpen)

    return (
        <header>
            <div className={`header-main-container ${isMobileNavbarOpen && 'header-active'}`}>
                <div className='logo-container'>
                    <Link to='/' >
                        <img src={logo} alt="" />
                    </Link>
                </div>



                <div className='nav-icons-container'>
                    {isMobileNavbarOpen ? <i class='bx burger-icon bx-menu-alt-left' onClick={handleBurgerMenuClick}></i> : <i class='bx burger-icon bx-menu' onClick={handleBurgerMenuClick}></i>}
                </div>

                <EnglishDesktopNavbar />
                <EnglishMobileNavbar isMobileNavbarOpen={isMobileNavbarOpen} setIsMobileNavbarOpen={setIsMobileNavbarOpen} />

            </div>
        </header>
    )
}

export default Header