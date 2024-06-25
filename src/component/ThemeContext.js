// ThemeContext.js
import React, { createContext, useContext } from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
  // return useContext(ThemeContext);
  
};

export const ThemeProvider = ({ children }) => {
  const theme = 'light'; // Example theme
  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  );
};
