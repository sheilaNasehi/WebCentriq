
import React, { Component } from 'react';
import pic1 from './html.png' ;
import pic2 from './world.png' ;
import pic3 from './ter.png' ;
import pic4 from './seo.png' ;
import { Parallax, Background } from 'react-parallax';



import './Service.css' ;


class Service extends Component {
    render() {
        return (
            <div className="service" id="service">
                    <div className="contentbox">
                <div className="grid-item">
                    <h3 className="text-head">Services</h3>
                </div>
                <div className="wrap">
                <div className="aa">
                    <p className="p1">Brand up your product/services Globaly</p>
                    <img className="pic1" src={pic1} alt="html" /> 
                </div>
                <div className="aaa">
                    <p className="p1">Scrape and Redesign your old website </p>
                    <img className="pic2" src={pic2} alt="world" />
                </div>
                <div className="aaaa">
                    <p className="p1">Custom design considering customer  </p>
                    <img className="pic3" src={pic3} alt="ter" />
                </div>
                <div className="a">
                    <p className="p1">Improve your global ranking in google </p>
                    <img className="pic4" src={pic4} alt="Seo" />
                </div>
                </div>
                <br />
                     </div>
                     <Parallax 
      // blur={{ min: -1 , max: 1 }}
      bgImage={require('../../img/bg4.jpg')}
      bgImageAlt="back-2"
      strength={400}
    >
      
      <div style={{ height: '400px'  } } />
    </Parallax>
            </div>
        );
    }
}

export default Service;