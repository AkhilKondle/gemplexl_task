import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Note: `Routes` is used instead of `Switch`
import Home from './Components/Home/Home';
import Video from './Components/Video';

function App() {
  return (
    <BrowserRouter>
      <Routes> 
        <Route path="/" element={<Home />} /> 
        <Route path='/video' element={<Video/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
