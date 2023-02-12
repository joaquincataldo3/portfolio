import React, { useState } from 'react'
import DNavbar from './DesktopNavbar/DNavbar'
import MNavbar from './MobileNavbar/MNavbar'
import './Header.css'
import logo from '../../images/logomaxpng.png'



function Header() {

    const [isMobileNavbarOpen, setIsMobileNavbarOpen] = useState(false)

    const handleBurgerMenuClick = () => setIsMobileNavbarOpen(!isMobileNavbarOpen)

    return (
        <header>
            <div className='header-main-container'>
                <div className='logo-container'>
                    <img src={logo} alt="" />
                </div>
                <div className='nav-icons-container'>
                    {isMobileNavbarOpen ? <i class='bx burger-icon bx-menu-alt-left' onClick={handleBurgerMenuClick}></i> : <i class='bx burger-icon bx-menu' onClick={handleBurgerMenuClick}></i>}
                </div>

                <DNavbar />
                <MNavbar isMobileNavbarOpen={isMobileNavbarOpen} setIsMobileNavbarOpen={setIsMobileNavbarOpen}/>
            </div>
        </header>
    )
}

export default Header