
import React, { Component } from 'react';
import './Strategy.css';
// import back1 from '../../img/b2.jpg';

class Strategy extends Component {
    render() {
        return (
                    <div className="highdiv" id="strategy">
            <div className="strategy">
                 <div className="grid-item">
                    <h3 className="text-head">Strategy</h3>
                </div>
                <div className="para">
                <h2 className="pa2">Who we are ?</h2>
                <h5 className="par5">When it comes to the success of your website, app or software, strategy is everything.
                 It’s the foundation for your success. It’s do or die. We understand business. 
                 That's why we begin every project with a workshop — crafting a one-of-a-kind, unique strategy that is designed to help you <strong>win.</strong></h5>
                 <hr className="style-one" />
                </div>
            </div>
                <div className="image-left"></div>  
                <div className="image-right"></div>
                <div className="box1"><h5>"Most websites, apps and software are built for stakeholders,
                 without users in mind. The resulting experiences fail because they are not user-centric. "</h5>
                 <br />
               <h5> -NOAA </h5></div>
               <div className="sidepic"></div>
                <div className="sidetext" >
                <h3>Best Engineering Websites</h3>
                <br />
                <p>“Best” is a subjective measure. When asked, Philip J. Schneider, AIA, Director of National Institute of Building Sciences, said that “getting the next project, of course, is always the greatest challenge”
                     for engineering firms. Because researchers and selection committee members visit websites as part of the vendor search and bid review process, the “best" websites help firms win projects.
                      These engineering websites deliver the right information to visitors, researchers and decision makers, and inspire confidence.
                       There are three key factors that make that happen:</p>
                       <ul className="list">
                           <li>
                               <h4>Website design</h4>
                               <p>Because reputation, trust and credibility mean everything in this industry,
                                an ideal engineering website projects an image of a professional, established,
                                successful and financially-stable company.</p>
                           </li>
                           <li>
                               <h4>Demonstrated expertise</h4>
                               <p>It is important to provide validation for selection committee members (e.g. the Department of Transportation).
                                Proper presentation of past projects,
                                 executive team bios and staff’s experience are of paramount importance.</p>
                           </li>
                       </ul>
                </div>
                    </div>
        );
    }
}

export default Strategy;
