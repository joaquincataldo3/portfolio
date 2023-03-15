import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../header/Header'

function SharedLayout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}

export default SharedLayout