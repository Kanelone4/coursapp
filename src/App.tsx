import React from 'react';
import logo from './logo.svg';
import './App.css';
import Footer from './Components/outdoots/footer/footer';

import Header from './Components/outdoots/Right-Layout/Header/Header';
import RightLayout from './Components/outdoots/Right-Layout/RightLayout';
import Body from './Components/outdoots/Right-Layout/Body/Body';





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
