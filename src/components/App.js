import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './navbar/Navbar';
import Home from './home/Home';
import Popular from './popular/Popular';
import ContactUs from './contact-us/ContactUs';
import Bibliography from './bibliography/Bibliography';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/popular' element={<Popular />} />
        <Route path='/bibliography' element={<Bibliography />} />
        <Route path='/contact' element={<ContactUs />} />
      </Routes>

    </div>
  );
}

export default App;
