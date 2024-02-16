import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useGlobalContext } from '../../hooks/context'
import './Home.css'



function Home() {

  const { renderComp, handleRenderComp } = useGlobalContext()
  const [isCvModalOpen, setIsCvModalOpen] = useState(false)

  useEffect(() => {
    handleRenderComp()
  }, [handleRenderComp])

  const handleShowCv = () => setIsCvModalOpen(!isCvModalOpen)


  return (
    <main className={`home-main ${renderComp && 'home-main-active'}`}>
      <div className='home-animations-container'>
        <div className="home-line-animated-container">
          <div id='line-1'></div>
        </div>
        <div className="home-line-animated-container">
          <div id='line-2'></div>
        </div>
        <div className="home-line-animated-container">
          <div id='line-3'></div>
        </div>
      </div>
      <div className='home-pers-info'>
        <h1 className='intro-title'>Hi there ! <span> 👋</span></h1>
        <h3 className='intro-subtitle'>My name is Joaquín Cataldo and I'm a <span className='fs-strong'>Full Stack developer</span>.</h3>
        <p>I like to create user-friendly interfaces with the best <span className='highlighted-w'>performance</span>,
          making them <span className='highlighted-w'>accessible</span> and <span className='highlighted-w'>attractive</span>.
          On the other hand, I always try to produce high-quality code, applying the best practices/methods.
        </p>
        <p>I'm currently looking for my first opportunity in the tech industry.
          Meanwhile, I keep <span className='highlighted-w'>learning</span> new things every day and <span className='highlighted-w'>building</span> projects.
          You can check out all my <span className='highlighted-w'>skills</span> and <span className='highlighted-w'>projects</span> in this portfolio.
        </p>
        <p>I'm excited to share my <span className='highlighted-w'>knowledge</span> with you and I look forward to the opportunity to <span className='highlighted-w'>work</span> together.</p>
        <div className='icons-links-container'>
          <Link to='https://github.com/joaquincataldo3' target="_blank" className='home-links-container'>
            <i class='bx bxl-github'></i>
          </Link>
          <Link to='https://www.linkedin.com/in/joaqu%C3%ADncataldo/' target="_blank" className='home-links-container'>
            <i class='bx bxl-linkedin' ></i>
          </Link>
          <div target="_blank" className='home-links-container'>
            {
              isCvModalOpen ?
                <div className='cv-esp-eng cv-container'>
                  <div className='cv-links'>
                    <Link to='https://pdfhost.io/v/0U.hNgJZZ_JOAQUIN_CATALDO_ESP' target="_blank" className='home-links-container cv-links' onClick={handleShowCv}>
                      Esp
                    </Link>
                  </div>

                  <div className='cv-links'>
                    <Link to='https://pdfhost.io/v/lCmMKpBME_JOAQUIN_CATALDO_ENG' target="_blank" className='home-links-container cv-links' onClick={handleShowCv}>
                      Eng
                    </Link>
                  </div>
                </div>
                :
                <div className='cv-show-container cv-container'>
                  <i class='bx bxs-file-pdf' onClick={handleShowCv}></i>
                </div>
            }

          </div>

        </div>
      </div>
    </main>

  )
}

export default Home