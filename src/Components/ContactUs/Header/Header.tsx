import React from 'react';
import "./Header.css"
import logo from './assets/Interior-logo4-free-img.png';

const Header: React.FC = () => {
    return (
        <div className='container'>

        <div className="navbar">
        <div className='logo'>
        <img src={logo} alt="logo" />
        </div> 

         <nav className="nav">
        
            <ul>
              <li><a href="#home">About Us</a></li>
              <li><a href="#news">Living Room</a></li>
              <li><a href="#tech">Kitchen</a></li>
              <li><a href="#tech">Outdoors</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </nav>
        </div>
        
          <div className='text'>
          <p>Get In Touch</p>
        </div>
          </div>
        
    );
};
export default Header;