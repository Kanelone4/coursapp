import React from 'react';
import Interiorlogo from './Interiorlogo.png'; // Vérifiez le chemin de l'image
import hero02 from './hero02.jpg'; // Assurez-vous que cette image est également dans le bon dossier
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function Navbar(): JSX.Element {
  return (
    <div style={{ padding: '20px', position: 'relative', top: '0px' }}>
      <div style={{ marginTop: '0px' }}>
        <img
          src={Interiorlogo}
          alt="Logo"
          style={{ width: '180px', marginTop: '28px', marginLeft: '160px' }}
        />
        <div style={{ marginLeft: '685px', marginTop: '-35px', fontSize: '17px', fontWeight: '700' }}>
          <nav style={{ display: 'flex', gap: '30px', justifyContent: 'center' }}>
            <a href="" style={{ textDecoration: 'none', color: 'white' }}>About Us</a>
            
            <Link to="/Living-Room" style={{ textDecoration: 'none', color: 'white' }}>Living Room</Link>
            <a href="" style={{ textDecoration: 'none', color: 'white' }}>Kitchen</a>
            <a href="" style={{ textDecoration: 'none', color: 'white' }}>Outdoors</a>
            <a href="" style={{ textDecoration: 'none', color: 'white' }}>Contact</a>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
