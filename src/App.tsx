import React from 'react';
import logo from './logo.svg';
import './App.css';
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
