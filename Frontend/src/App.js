import React from 'react'
import {BrowserRouter} from 'react-router-dom';

import Nav from './components/Nav'
import Routes from './routes'


function App() {
  return (
    <BrowserRouter>
       <Nav />
      <Routes />
    </BrowserRouter>
    
  );
}

export default App;
