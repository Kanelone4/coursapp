import React from 'react';
import './footerY.css';
import 'boxicons/css/boxicons.min.css';



const Footer = () =>{
    return(
    
    <div className='container-fluid'>
        <div className='lehaut'>
            <div className='about'>
                <h4 className='titre'>ABOUT</h4>
                <p>Nulla quies lorem ut liberto malesuada feugiat<br/> Praesent sapien massa,conallis a pellentesque nec,egestas<br/>non nisi.Pellentesque in ipsum id orci porta dapibus.<br/> Sed porttitor lectus nibh<br/></p>
            </div>
            <div className='social'>
                <h4 className='titre'>SOCIAL</h4>
                <ul >
      <li>
        <a
          href="https://facebook.com"
          aria-label="Facebook"
          target="_blank"
          rel="noopener noreferrer"
          className="ast-builder-social-element"
        >
          <i className='bx bxl-facebook-square'></i>
        </a>
      </li>
      <li>
        <a
          href="https://twitter.com"
          aria-label="Twitter"
          target="_blank"
          rel="noopener noreferrer"
          className="ast-builder-social-element"
        >
          <i className='bx bxl-twitter'></i>
        </a>
      </li>
      <li>
        <a
          href="https://instagram.com"
          aria-label="Instagram"
          target="_blank"
          rel="noopener noreferrer"
          className="ast-builder-social-element"
        >
          <i className='bx bxl-instagram' ></i>
        </a>
      </li>
      <li>
        <a
          href="https://pinterest.com"
          aria-label="Pinterest"
          target="_blank"
          rel="noopener noreferrer"
          className="ast-builder-social-element"
        >
          <i className='bx bxl-pinterest'></i>
        </a>
      </li>
    </ul>
            </div>

            <div className='conatct'>
            <h4 className='titre'>CONTACT US</h4>
            <p>500 terry Francis St.</p>
            <p>       San Francois St</p>
            <p>        CA 94158</p>
            <p>  +1-410-550-0134</p>
            <p>  info@example.com</p>
            <p>contact@example.com</p>
            
            </div>
        </div>

        <div className='lebas'>
            <div className='gauche'>
                <p>Copyright 2024 Home Decor|Powered By Home Decore</p>
                
            </div>

            <div className='droite'>
                <ul>
                    <li><a href=''>About.Us</a></li>
                    <li><a href=''>Living Room </a></li>
                    <li><a href="">Outdoors</a></li>
                    <li><a href=''>Kitchen</a> </li>
                    <li><a href=''>Contact</a></li>
                </ul>
            </div>
        </div>
        
    </div>

       

)}

export default Footer

function Myboutton ({title}:{title :string}) {
    return(
       <button> {title}</button>
    )
}

function app(){
    return(
        <div>
            <h1>Faite vos compte</h1>
            < Myboutton title = 'décompte'/>
        </div>
    )
}