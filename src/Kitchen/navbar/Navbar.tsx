import React from 'react';
import Interiorlogo from './Interiorlogo.png';
import hero02 from './hero02.jpg';

function Navbar(): JSX.Element {
      return(
       
        <div >
          <img src={hero02} alt='' style={{}}/>
       
          <div style={{ marginTop:'-580px' }}>
            <img src={Interiorlogo} alt='' style={{width:'180px',marginTop:'28px', marginLeft:'52px' }}/>
             <div  style={{marginLeft:'685px', marginTop:'-35px', fontSize:'17px', fontWeight:'500' }}>
               <nav style={{ display:'flex',gap:'30px', justifyContent:'center' }}>
                  <a href='' style={{ textDecoration:'none',color:'white'}}> About Us</a>
                  <a href='' style={{ textDecoration:'none', color: 'white'}}> Living Romm</a>
                  <a href=''  style={{ textDecoration:'none', color:'white'}}> Kitchen</a>
                  <a href=''  style={{ textDecoration:'none', color:'white'}}> Outdoors</a> 
                  <a href=''  style={{ textDecoration:'none', color:'white'}}> Contact </a>
               </nav>
               <div   style={{justifyContent:'center', width:'200%', marginLeft:'-100px', marginTop:'150px'  }}>
                <h1  style={{justifyContent:'center', position:'relative',fontSize:'90px',color:'white',marginLeft:'-88px'  }}>Kitchen</h1>
                <p style={{fontWeight:'100' ,marginLeft:'-338px',color:'white' }}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Suspendisse et justo. Praesent mattis commodo augue.</p>
                <span style={{color:'white',fontWeight:'100',backgroundColor:'red' }}>Home » Kitchen</span>
               </div>
            </div>
       </div>
       </div>
          
   )
}
export default  Navbar;