import React, { useState} from 'react'
import { Link } from 'react-router-dom'
import LangBtn from '../lang-btn/langBtn'
import SpanishDesktopNavbar from './desktop-navbar/spa/DNavbar'
import EnglishDesktopNavbar from './desktop-navbar/eng/DNavbar'
import EnglishMobileNavbar from './mobile-navbar/eng/MNavbar'
import SpanishMobileNavbar from './mobile-navbar/spa/MNavbar'
import './Header.css'
import logo from '../../assets/images/whitejclogo.png'
import { useGlobalContext } from '../../hooks/context'



function Header() {

    const [isMobileNavbarOpen, setIsMobileNavbarOpen] = useState(false)

    const handleBurgerMenuClick = () => setIsMobileNavbarOpen(!isMobileNavbarOpen)

    const {languages, toggleActiveLanguage,activeLanguage} = useGlobalContext()


    return (
        <header>
            <div className={`header-main-container ${isMobileNavbarOpen && 'header-active'}`}>
                <div className='logo-container'>
                    <Link to='/' >
                        <img src={logo} alt="" />
                    </Link>
                </div>

                <LangBtn />
                
                <div className='nav-icons-container'>
                    {isMobileNavbarOpen ? <i class='bx burger-icon bx-menu-alt-left' onClick={handleBurgerMenuClick}></i> : <i class='bx burger-icon bx-menu' onClick={handleBurgerMenuClick}></i>}
                </div>

                {
                    activeLanguage === languages.english ?
                    <>
                    <EnglishDesktopNavbar />
                    <EnglishMobileNavbar isMobileNavbarOpen={isMobileNavbarOpen} setIsMobileNavbarOpen={setIsMobileNavbarOpen} />
                    </>
                    :
                    <>
                    <SpanishDesktopNavbar />
                    <SpanishMobileNavbar isMobileNavbarOpen={isMobileNavbarOpen} setIsMobileNavbarOpen={setIsMobileNavbarOpen}/>
                    </>                    
                }
        
            </div>
        </header>
    )
}

export default Header