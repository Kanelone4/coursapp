import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './Kitchen/navbar/Navbar';
import BlogPosts from './Kitchen/Body/bodyG/blogPosts';
import Footer from './Kitchen/footer/footer';
import Content from './Kitchen/Body/bodyG/content';
import Component from './Kitchen/Body/bodyD//Component';

function App() {
  return (
    <div>
      <Navbar />
      <Content />
      <BlogPosts />
      
      <Footer />
      <Component />
    
    </div>
  );
}

export default App;
