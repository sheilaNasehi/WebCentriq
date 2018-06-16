
import React, { Component } from 'react';
import Typist from 'react-typist';
import './Portfolio.css';

class Portfolio extends Component {
    render() {
        return (
            <div className="portfolio" id="portfolio">
                 <div className="grid-item">
                    <h3 className="text-head">Portfolio</h3>
                </div>
                <div className="feutured">
                <Typist 
                cursor={{ hideWhenDone: true }}
                avgTypingSpeed={30}
                startDelay={1000}
              
                > 
                <h1 className="feu1">FEATURED PROJECTS</h1>
                <Typist.Delay ms={500} />

                <p className="unlike">Unlike other web design companies, not one of our client’s websites look the same,
                       <br /> they are all designed in their own unique and creative way.</p>
                </Typist>
                <h1 className="dot">. . . </h1>
                </div>  
            <div className="mockup">
            <div className="mc1"></div>
            <div className="mc2"></div>
            <div className="mc3"></div>
            <div className="mc4"></div>
            <div className="mc5"></div>
            <div className="mc6"></div>
            </div>
     
            </div>
        );
    }
}

export default Portfolio;