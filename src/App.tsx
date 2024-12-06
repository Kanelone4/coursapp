import React from 'react';
import logo from './logo.svg';
import './App.css';
import Footer from './Components/footer/footer';
import Component from './Components/Left-layout/Component';
import Header from './Components/Header/Header';
import RightLayout from './Components/Right-Layout/RightLayout';
import Body from './Components/Body/Body';





function App() {
  return (
    <div className="App">
      
      <div>
      {/* Appel du composant Header avec les props title et img */}
      <Header title="Outdoors" img="https://websitedemos.net/blog-02/wp-content/uploads/sites/132/2017/11/pic04-free-img.jpg" />
    </div>

    
       <Body/>
       
       
      
       
       <Footer/>
       
      
      
    </div>
  );
}

export default App;
