import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useGlobalContext } from '../../hooks/context'
import './Error404.css'

function Error404() {

  const { renderComp, handleRenderComp } = useGlobalContext()

  useEffect(() => {
    handleRenderComp()
  }, [])

  return (
    <main className={`error404-main ${renderComp && 'error404-main-active'}`}>
      <div className='error-info-container'>
        <h1 className='error-title'>Sorry</h1>
        <h2 className='error-subtitle'>We couldn't find the page you were looking for</h2>
        <div className='icon-container'>
          <i class='bx bx-search-alt' ></i>
        </div>
        <h3 >
          <Link to='/' className='back-home-a'>
            Home
          </Link>
        </h3>
      </div>

    </main>
  )
}

export default Error404