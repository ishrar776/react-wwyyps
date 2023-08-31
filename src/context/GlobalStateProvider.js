import React, { useState, createContext } from 'react';
const GlobalStateContext = createContext({});
const GlobalStateProvider = ({ children }) => {
  const width = '100px';
  const message = 'thik hai sab kuch';
  return (
    <GlobalStateContext.Provider
      value={{
        width,
        message,
      }}
    >
      {children}
    </GlobalStateContext.Provider>
  );
};
export default GlobalStateProvider;
export { GlobalStateContext };
