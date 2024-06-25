// ThemedComponent.js
import React from 'react';
import { useTheme } from '../component/ThemeContext';

const ThemedComponent = () => {
  const theme = useTheme();
//   return <div>Current Theme: {theme}</div>;
};

export default ThemedComponent;
