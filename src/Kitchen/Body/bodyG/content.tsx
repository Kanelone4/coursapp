import React from 'react';
import pic26FreeImg from './pic26-free-img.jpg';  // Utilisez le chemin relatif correct à partir du fichier content.tsx
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
            Consectetuer vehicula ab? Blandit? Suspendisse feugiat elementum dictum! Minus eum eveniet,<br/>
             praesentium elementum interdum! Sodales, metus, velit voluptatibus voluptas lorem, etiam<br/>
              vulputate? Aenean possimus montes fugiat […]
            </p>

            
            <a  style={{ color: '#ff0E47',position: 'relative',left: '-670px',top: '45px' }}className="" href="https://websitedemos.net/blog-02/taciti-hendrerit-dis-odit-incidunt/?customize=template"> <span className="screen-reader-text"></span> Read More »</a>
            </div>
            <div className='write'>
            </div>
            <hr style={{ position: 'relative',width:'48%',left:'3%',top:'70px' }} className="my-4 border-gray-300" />
        </div>
    );
};

export default Content;
