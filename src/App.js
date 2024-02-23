import React from 'react';
import Navbar from './components/Navbar/Navbar'
import  './App.css'
import { StyledEngineProvider } from '@mui/material/styles'

function App () {
  
    
  return (
    <React.Fragment>
      <StyledEngineProvider injectFirst >
          <Navbar />
      </StyledEngineProvider>
    </React.Fragment>
  );
  
}

export default App;
