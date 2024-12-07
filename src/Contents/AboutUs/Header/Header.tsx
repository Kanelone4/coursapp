import React from 'react';
import logo from './logo.svg';
import "./Header.css";

const Header: React.FC = () => {
  return (
    <div className='DIV'>
      <header className="header">
          <div className="logo"><img src="logo.jpg" alt="lg" /></div>
          <nav className="navigation">
            <a href="/">About Us</a>
            <a href="/">Living Room</a>
            <a href="/">Kitchen</a>
            <a href="/">Outdoors</a>
            <a href="/">Contact</a>
          </nav>
        </header>
        <div className='grandDiv'>
          <div className='home-text'>
          <p>Know More</p>
          <h3>About Us</h3>
          <br /><br /><br /><br /><br /><br /><br /><br />
        </div>
      </div>
    </div>
      
      
      
     
  );
};

export default Header;