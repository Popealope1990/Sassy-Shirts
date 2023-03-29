// Setup
import React from 'react';
import {Routes, Route} from 'react-router-dom';

// Styling
import './App.css';

// Imported Components
import NavBar from './components/Navbar';
import About from './components/About';
import Contact from './components/Contact';
import Cart from './components/Cart';
import Shirts from './components/Shirts';


function App() {
  return (
    <React.Fragment>
      <NavBar />
      
      <Routes>
        <Route path="/" element={<Shirts/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/cart" element={<Cart />}/>
      </Routes>

    </React.Fragment>
  );
}

export default App;
