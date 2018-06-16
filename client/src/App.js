import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import { Button } from 'reactstrap';

import { pushRotate as Menu } from 'react-burger-menu';
import './App.css';



// Pages used in routes
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Hero from './components/Hero/Hero';
import Nav from './components/Nav/Nav';
import Portfolio from './components/Portfolio/Portfolio';

import Service from './components/Service/Service';
import Strategy from './components/Strategy/Strategy';








class App extends Component {


  render() {
    return (
     

      <div>
       <Router>
         <Route exact path="/" component={Nav} /> 
       </Router>
       <Router>
         <Route exact path="/" component={Hero} /> 
       </Router>
       {/* <Router>
         <Route exact path="/" component={Section} /> 
       </Router> */}
       <Router>
         <Route exact path="/" component={Service} /> 
       </Router>
       <Router>
         <Route exact path="/" component={Strategy} /> 
       </Router>
       <Router>
         <Route exact path="/" component={Portfolio} /> 
       </Router>
       <Router>
         <Route exact path="/" component={Contact} /> 
       </Router>
       <Router>
         <Route exact path="/" component={Footer} /> 
       </Router>

       
      </div>
     
    );
  }
}

export default App;
