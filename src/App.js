import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigationbar from './Components/Navbar';
import Home from './Components/home';
import Room from './Components/room';
import Services from './Components/services';
import Food from './Components/food';
import Contact from './Components/contact';
import About from './Components/about';
import Attraction from './Components/atraction';

function App() {
  return (
    <>
      <BrowserRouter>
        <div>
          <div>
            <Navigationbar/>
          </div>
          <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/Room' element={<Room/>} />
          <Route path='/Services' element={<Services/>} />
          <Route path='/Food' element={<Food/>} />
          <Route path='/Contact' element={<Contact/>} />
          <Route path='/About' element={<About/>} />
          <Route path='/Attraction' element={<Attraction/>} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
