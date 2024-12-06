import React from 'react';

const Home: React.FC = () => {
  return (
    <div style={{position:'relative',top:'180px'}} className="container">
      <div className="row justify-content-center">
        <div className="col-12 text-center">
          <div className="icon-box-wrapper">
            <div className="icon-box-content">
              <h1 style={{ fontSize: '70px',textAlign: 'center',fontWeight: 'bold',color: 'white' }} className="display-4">
                Coming Home Never<br /> Felt So Good!
              </h1>
              <p style={{ fontSize: '20px',color: 'white' }}>
                <i>Quam a diamlorem explicabo quos fugit, ut aliquam modi.</i>
              </p>
            </div>
            <div  className="button-wrapper mt-4">
              <a style={{ backgroundColor: '#ff0E47',border: '1px solid #ff0E47',borderRadius: '2px',padding: '17px 40px',color: 'white',textDecoration: 'none' }}href="#" >
                Find Your Style
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
