
import { elastic as Menu } from 'react-burger-menu';
import React, { Component } from 'react';
import './Nav.css';


class Nav extends Component {

  showSettings(event) {
    event.preventDefault();
  }
  render() {
    return (
    <div className="menu">
    
          <Menu>
            <a id="home" className="menu-item" href="#hero">Home</a>
            <a id="about" className="menu-item" href="#service">Services</a>
            <a id="contact" className="menu-item" href="#strategy">Strategy</a>
            <a id="contact" className="menu-item" href="#portfolio">Portfolio</a>
            <a id="contact" className="menu-item" href="#contactus">Contact</a>
            {/* <a onClick={this.showSettings} className="menu-item--small" href="">Settings</a> */}
          </Menu>
          
</div>
   
        
    
    );
  }
}

export default Nav;