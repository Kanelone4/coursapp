
import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Accueil from './Components/accueil_component/Accueil';
import LivingRoom from './Pages/LivingRoom';
import LivingRoom2 from './Pages/LivingRoom2';
import Kitchen from './Components/Kitchen/navbar/Kitchen';
import AboutUs from './Contents/AboutUs/Readme/Readme';
import Logobarre from './Contents/AboutUs/Logobarre/Logobarre';
import Footer from './Contents/AboutUs/Footer/Footer';
import Header from './Contents/AboutUs/Header/Header';
import Home from './Contents/AboutUs/Home/Home';
import Interiorlogo4freeimg from './assets/Interior-logo4-free-img.png';
import Aboutus from "./Components/ContactUs/Aboutus";



function App() {
  return (
    <Router>
      <div className="App">
        {/* Navbar visible sur toutes les pages */}
        

        <Routes>
          {/* Route principale pour l'accueil */}
          <Route path="/" element={<Accueil />} />

          {/* Autres pages */}
          <Route path="/Living-Room" element={<LivingRoom />} />
          <Route path="/Living-Room/page2" element={<LivingRoom2 />} />
          <Route path="/Kitchen" element={<Kitchen />} />
          
          <Route path="/AboutUs" element={<AboutUs />} />
  
        </Routes>
        
      </div>
    </Router>
  );
};

export default App;