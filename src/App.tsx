import React from 'react';
import Interiorlogo4freeimg from './assets/Interior-logo4-free-img.png';
import './App.css';

import Aboutus from "./Components/ContactUs/Aboutus"




function App() {
  return (
    <div>
      <Aboutus/>
    </div>
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Accueil from './Components/accueil_component/Accueil';
import LivingRoom from './Pages/LivingRoom';
import LivingRoom2 from './Pages/LivingRoom2';
import Kitchen from './Components/Kitchen/navbar/Kitchen';

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
        </Routes>
        
      </div>
    </Router>
  );
}

export default App;
