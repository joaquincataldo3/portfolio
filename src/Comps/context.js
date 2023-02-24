import React, {useContext, useState} from 'react'

const AppContext = React.createContext()

function AppProvider({children}) {

    const [renderComp, setRenderComp] = useState(false)

    const handleRenderComp = () => {
      setRenderComp(true)
    }

    const handleUnmountComp = () => {
        setRenderComp(false)
    }

    const providerValue = {
        renderComp, 
        handleRenderComp, 
        handleUnmountComp, 
        setRenderComp
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