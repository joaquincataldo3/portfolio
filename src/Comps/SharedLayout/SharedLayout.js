import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'

function SharedLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  )
}

export default SharedLayout