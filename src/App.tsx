import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import des composants
import Accueil from './Components/accueil_component/Accueil'; // Page principale
import LivingRoom from './Pages/LivingRoom';
import LivingRoom2 from './Pages/LivingRoom2';
import Navbar from './Kitchen/navbar/Navbar'; // Navbar universelle
import BlogPosts from './Kitchen/Body/bodyG/blogPosts';
import Footer from './Kitchen/footer/footer';
import Content from './Kitchen/Body/bodyG/content';
import Component from './Kitchen/Body/bodyD/Component';

function App() {
  return (
    <Router>
      <div className="App">
        {/* Navbar visible sur toutes les pages */}
        <Navbar />

        <Routes>
          {/* Route principale pour l'accueil */}
          <Route path="/" element={<Accueil />} />

          {/* Routes spécifiques */}
          <Route path="/Living-Room" element={<LivingRoom />} />
          <Route path="/Living-Room/page2" element={<LivingRoom2 />} />
        </Routes>

        {/* Contenus supplémentaires */}
        <Content />
        <BlogPosts />
        <Footer />
        <Component />
      </div>
    </Router>
  );
}

export default App;
