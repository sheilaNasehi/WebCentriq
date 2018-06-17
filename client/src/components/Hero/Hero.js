import './Hero.css';
import Typist from 'react-typist';
import React from 'react';
import { Parallax, Background } from 'react-parallax';


const MyComponent = () => (
  <div className="abc" id="hero">
  
    {/* <Parallax
      blur={2}
      bgImage={require('../../img/b1.jpg')}
      bgImageAlt="back-1"
      strength={100}
      
    >
      Put some text content here
      or even an empty div with fixed dimensions
      to have a height for the parallax.
      <div style={{ height: '700px' }} />
    </Parallax> */}
    <Parallax
      blur={{ min: 0  , max: 0 }}
      bgImage={require('../../img/back3.jpg') }
      bgImageAlt="back-2"
      strength={10}
      bgClassName="blurimage"
       
    >
    <div className="copywriting">
    <div className="intro">
          
          
      {/* <img className="logo1" src={logo} alt="logi" />  */}
      <h3 className="agency">WebCentriq</h3>
          
      <hr className="hr1" />
          <Typist
            cursor={{ hideWhenDone: true }}
            avgTypingSpeed={10}
            startDelay={1000}
          >
           
            <h2 className="we">Web&MObile development group</h2></Typist>
    </div>
    <div className="matn">
      <p className="para1">You need coolest website or Mobile application with highest functionality
      <br />
              We Provide what you desigre</p>
      <button className="btn btn-primary">Let's Take a Tour</button>
      </div>
      </div>
      <div style={{ height: '270px' }} />
    </Parallax>
    {/* <Parallax 
      // blur={{ min: -1 , max: 1 }}
      bgImage={require('../../img/bg4.jpg')}
      bgImageAlt="back-2"
      strength={400}
    >
      <div classname="secondimage">
        
      </div>
      <div style={{ height: '400px' } } />
    </Parallax> */}
    
  </div>
);
export default MyComponent;