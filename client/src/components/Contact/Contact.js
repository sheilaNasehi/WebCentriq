import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import axios from 'axios';


import './Contact.css';

class Contact extends Component {

  
  state = {
    name: '',
    company: '',
    email:'',
    phone:'',
    message:''
  }

  handleInputChange = event => {
    const {value, name} = event.target;
    this.setState({
      [name]: value
    })
  }

  handleSubmit = event => {
    event.preventDefault();
    // event.stopPropagation();
    axios.post('/api/user/send', {
      name: this.state.name,
      company: this.state.company,
      email: this.state.email,
      phone: this.state.phone,
      message: this.state.message
    }).then(response => {
      if (response.data.success) {
        // redirect 
        console.log('sucsess');
        this.props.history.push('/contact')
      }
    }).catch(error => {
      console.log('Error');
      // show an error message
    })
    // make POST request to /api/user/login, data is email and password
  }

render() {
    return (
      <div className="co" id="contactus"> 
      <div className="contact-body">
        
        <div className="grid-item">
                    <h3 className="text-head">Contact</h3>
                </div>
          <div className="contact">
            <h2 className="help">How can we help you ? </h2>
           
            <form onSubmit={this.handleSubmit} >
              <p>
               
                <input type="text" name="name" onChange={this.handleInputChange} value={this.state.name} placeholder={"Your Name"} />
              </p>
              <p>
                
                <input type="text" name="company" onChange={this.handleInputChange} value={this.state.company} placeholder={"Your subject"} />
              </p>
              <p>
                
                <input type="email" name="email" onChange={this.handleInputChange} value={this.state.email} placeholder={"Your email adress"} />
              </p>
              <p>
               
                <input type="text" name="phone" onChange={this.handleInputChange} value={this.state.phone} placeholder={"Phone number"} />
              </p>
              <p className="full">
                
                <textarea name="message" rows="5" onChange={this.handleInputChange} value={this.state.message} placeholder={"Your Message"} ></textarea>
              </p>
              <p className="full">
                <button type="submit" className="sub">Submit</button>
              </p>
            </form>
          </div>
        </div>
    
      </div>
      
       
      
    )
  }
}

export default withRouter(Contact);