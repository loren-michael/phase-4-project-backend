import React, { createContext, useState } from "react";

const StoresContext = createContext(null);

const StoresProvider = ({ children }) => {
  const [stores, setStores] = useState([])

  const value = [stores, setStores]

  return (
    <StoresContext.Provider value={value}>
      { children }
    </StoresContext.Provider>)
}

export { StoresProvider, StoresContext }