import React, { createContext, useState } from "react";

const StoresContext = createContext(null);

const StoresProvider = ({ children }) => {
  const [stores, setStores] = useState([])

  return (
    <StoresContext.Provider value={{ stores, setStores }}>
      { children }
    </StoresContext.Provider>)
}

export { StoresProvider, StoresContext }