import React from 'react';
import './App.css';
import Content from './Components/accueil_component/content/content'; // Le fichier est content.tsx dans src/components
import Footer from './Components/accueil_component/footer/footer';
import Navbar from './Components/components/navbar/Navbar';
import BlogPosts from './Components/accueil_component/BlogPosts/blogPosts';
import LeftLayout from './Components/accueil_component/LeftLayout/leftLayout';
import Home from './Components/accueil_component/home/home';

function App() {
  return (
    <div className="App">
      <div >
        <Navbar />
      </div>
      <div >
        <Home />
      </div>
      <div >
        <Content />
      </div>
      <div >
        <LeftLayout />
      </div>
      <div >
        <BlogPosts />
      </div>
      <div >
        <Footer />
      </div>
    </div>
  );
}

export default App;
