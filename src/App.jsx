import React from "react";
import {Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar.jsx';
import Home from './pages/Home/Home.jsx';
import Kits from './pages/Kits/Kits.jsx';
import Resources from './pages/Resources/Resources.jsx';
import About from './pages/About/About.jsx';
import Contact from './pages/Contact/Contact.jsx';
import './App.css';
import {WindowProvider} from './hooks/WindowContext/WindowContext.js';

const App = () => {
  return (
    <>
      <WindowProvider>
        <Navbar />
      </WindowProvider>
      <div className="App">
        <Routes>
          <Route index element={<Home />} />
          <Route path='/kits' element={<Kits />} />
          <Route path='/resources' element={<Resources />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/*' element={<h1>404 Not Found!</h1>}/>
        </Routes>
      </div>
    </>
  );
}

export default App;
