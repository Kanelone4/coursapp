import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/components/navbar/Navbar';
import Home from './Components/accueil_component/home/home';
import Content from './Components/accueil_component/content/content';
import LeftLayout from './Components/accueil_component/LeftLayout/leftLayout';
import BlogPosts from './Components/accueil_component/BlogPosts/blogPosts';
import Footer from './Components/accueil_component/footer/footer';
import LivingRoom from './Pages/LivingRoom';
import LivingRoom2 from './Pages/LivingRoom2';

function App() {
  return (
    <Router>
      <div className="App">
        {/* Navbar visible sur toutes les pages */}
        <Navbar />

        <Routes>
          {/* Route principale pour l'accueil */}
          <Route path="/" element={<Home />} />

          {/* Autres pages */}
          <Route path="/Living-Room" element={<LivingRoom />} />
          <Route path="/Living-Room/page2" element={<LivingRoom2 />} />
        </Routes>

        {/* Composants fixes */}
        <Content />
        <LeftLayout />
        <BlogPosts />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
