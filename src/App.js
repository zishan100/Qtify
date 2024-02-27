import React from 'react';
import Navbar from './components/Navbar/Navbar'
import HeroImage from './components/HeroImage/HeroImage';
import { StyledEngineProvider } from '@mui/material/styles'
import './style.css'


function App () {
  
    
  return (
    <React.Fragment>
      <StyledEngineProvider injectFirst >
          <Navbar />
          <HeroImage />
      </StyledEngineProvider>
    </React.Fragment>
  );
  
}

export default App;
