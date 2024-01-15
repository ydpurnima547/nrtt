import React from 'react'
import {Typography} from "@mui/material";
import Home from './pages/Home';
import About from './pages/About';
import {Routes,Route} from 'react-router-dom';
import Npage from './Npage';
import Crd from './pages/Crd';


function App() {
  return (
    <>
    <Typography>

<Crd/>
<Npage/>
</Typography>
<div className='hyl'>hghj</div>
    </>
  );
}

export default App;
