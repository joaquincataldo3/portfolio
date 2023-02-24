import React, {createContext, useContext, useState} from 'react'

const AppContext = createContext()

function AppProvider({children}) {


  const [renderComp, setRenderComp] = useState(false)

  const handleRenderComp = () => {
    setRenderComp(true)
  }

  const providerValue = {
    renderComp,
    handleRenderComp
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


export {AppProvider, useGlobalContext}