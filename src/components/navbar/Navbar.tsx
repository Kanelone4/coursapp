import React from 'react';
import Interiorlogo from './Interiorlogo.png';
import hero02 from './hero02.jpg';

function Navbar(): JSX.Element {
      return(
       
        <div >
          
       
          <div style={{ marginTop:'-850px' }}>
            <img src={Interiorlogo} alt='' style={{width:'180px',marginTop:'28px', marginLeft:'52px' }}/>
             <div  style={{marginLeft:'685px', marginTop:'-35px', fontSize:'17px', fontWeight:'500' }}>
               <nav style={{ display:'flex',gap:'30px', justifyContent:'center' }}>
                  <a href='' style={{ textDecoration:'none',color:'white'}}> About Us</a>
                  <a href='' style={{ textDecoration:'none', color: 'white'}}> Living Romm</a>
                  <a href=''  style={{ textDecoration:'none', color:'white'}}> Kitchen</a>
                  <a href=''  style={{ textDecoration:'none', color:'white'}}> Outdoors</a> 
                  <a href=''  style={{ textDecoration:'none', color:'white'}}> Contact </a>
               </nav>
            </div>
       </div>
       </div>
          
   )
}
export default  Navbar;