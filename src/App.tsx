import React from 'react';
import AboutUs from './Contents/AboutUs/Readme/Readme';
import Logobarre from './Contents/AboutUs/Logobarre/Logobarre';
import Footer from './Contents/AboutUs/Footer/Footer';
import Header from './Contents/AboutUs/Header/Header';
import Home from './Contents/AboutUs/Home/Home';

const App: React.FC = () => {
  return (
    <div>
      <main>
        <Header/>
        <Home/>
        <AboutUs/> 
        <Logobarre/>  
        <Footer/>    
      </main>
    </div>
  );
};

export default App;