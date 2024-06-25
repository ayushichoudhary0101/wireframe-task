import React from 'react';
import { Provider } from 'react-redux';
import store from '../src/redux/store'
import HomePage from './pages/Homepage';
import { ThemeProvider } from '@material-ui/core';

import ThemedComponent from '../src/component/ThemedComponent';
const  App=()=> {
  return (
    <ThemeProvider>
      <Provider store={store}>
        <ThemedComponent/>
      <HomePage />
    </Provider>
    </ThemeProvider>
    
  );
}

export default App;
