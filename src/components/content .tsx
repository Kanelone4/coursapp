import React from 'react';
import pic26FreeImg from './assets/pic26-free-img.jpg'; 
import "./content.css"
const Content: React.FC = () => {
    return (
        <div className="contenu">
          <div className='ecrit'>
            <h1>Consectetuer vehicula ab</h1>
            <p>November 21, 2017 / Kitchen, Lifestyle</p>
          </div>
            <div className="img">
                <img src={pic26FreeImg} alt="" />
            </div>
            <div className='text'>
            <p>
            Consectetuer vehicula ab? Blandit? Suspendisse feugiat elementum dictum! Minus eum eveniet,
             praesentium elementum interdum! Sodales, metus, velit voluptatibus voluptas lorem, etiam
              vulputate? Aenean possimus montes fugiat […]
            </p>
            
            </div>
            <div className='write'>
            </div>
          
        </div>
    );
};

export default Content;
