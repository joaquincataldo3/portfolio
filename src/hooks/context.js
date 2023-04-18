import React, { useContext, useState } from 'react'
import argFlag from '../assets/images/argflag.png'
import usaFlag from '../assets/images/usaflag.png'

const AppContext = React.createContext()

const languages = [
  {
    name: 'EN',
    flag: usaFlag
  },
  {
    name: 'ES',
    flag: argFlag
  }
]

function AppProvider({ children }) {

  const [renderComp, setRenderComp] = useState(false)
  const [activeLanguage, setActiveLanguage] = useState(languages.english)


  const handleRenderComp = () => {
    setRenderComp(true)
  }

  const handleUnmountComp = () => {
    setRenderComp(false)
  }

  const toggleActiveLanguage = () => {
    activeLanguage === languages.english ? setActiveLanguage(languages.spanish) : setActiveLanguage(languages.english)
  }

  const providerValue = {
    renderComp,
    handleRenderComp,
    handleUnmountComp,
    setRenderComp,
    toggleActiveLanguage,
    languages,
    activeLanguage
  }

  return (
    <AppContext.Provider value={providerValue}>
      {children}
    </AppContext.Provider>
  )
}


const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppProvider, useGlobalContext }