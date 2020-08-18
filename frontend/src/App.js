import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Cards  from './components/Card';
import Home from './components/Home';
import Grid from '@material-ui/core/Grid';
function App() {
  




  return (
    <div >
      <Home />
    <Grid container component="main">
      
        <Cards />
     
    </Grid>
      
    
    </div>
  );
}

export default App;
