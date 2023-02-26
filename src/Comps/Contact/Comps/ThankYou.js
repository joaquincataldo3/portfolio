import React from 'react'
import { Link } from 'react-router-dom'
import './ThankYou.css'

function ThankYou() {
    return (
        <div className='thank-you-wrapper'>
            <div>
                <h3 className='thank-you-title'>Thank you !</h3>
                <p className='thank-you-copy'>I'll get back to you as soon as possible</p>
                <p className='thank-you-copy'>Meanwhile... you can check out this links</p>
            </div>
            <div className='thank-you-links-container'>
                <Link to='https://github.com/joaquincataldo3' target="_blank" className='home-links-container'>
                    <i class='bx bxl-github'></i>
                </Link>
                <Link to='https://www.linkedin.com/in/joaqu%C3%ADncataldo/' target="_blank" className='home-links-container'>
                    <i class='bx bxl-linkedin' ></i>
                </Link>
            </div>
        </div>
    )
}

export default ThankYou