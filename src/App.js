import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Note: `Routes` is used instead of `Switch`
import Home from './Components/Home/Home';
import Video from './Components/Video';
import Login from './Components/Login';
import RegistrationForm from './Components/Registration';

function App() {
  return (
    <BrowserRouter>
      <Routes> 
        <Route path="/home" element={<Home />} /> 
        <Route path='/video' element={<Video/>}/>
        <Route path='/' element={<Login/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/registration' element={<RegistrationForm/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
