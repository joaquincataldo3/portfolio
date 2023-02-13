import React from 'react'
import './Home.css'



function Home() {
  return (
    <main className='home-main'>
      <h1 className='intro-title'>Hi there ! <span> 👋</span></h1>
      <h3 className='intro-subtitle'>My name is Joaquín Cataldo and I'm a <span className='fs-strong'>Full Stack developer</span>.</h3>
      <p>I like to create user-friendly interfaces with the best <span className='highlighted-w'>performance</span>,
        making them <span className='highlighted-w'>accessible</span> and <span className='highlighted-w'>attractive</span>.
        On the other hand, I always try to produce high-quality code, applying the best practices/methods.
      </p>
      <p>I'm currently looking for my first opportunity in the tech industry.
        Meanwhile, I keep <span className='highlighted-w'>learning</span> new things every day and <span className='highlighted-w'>building</span> projects.
        Currently focusing on React and MongoDB, but you can check out all my skills in this portfolio as well.
      </p>
      <p>I'm excited to share my projects with you and I look forward to the opportunity to work together.</p>
    </main>
  )
}

export default Home